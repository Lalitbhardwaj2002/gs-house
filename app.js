/* GS HOUSE — a bilingual General Knowledge quiz for the UPESSC TGT, PGT and
 * Assistant Professor (Higher Education) exams. Play solo or with up to 20 players.
 *
 * How it works:
 * - The host's browser runs the quiz: it loads the chosen sections from data/<id>.json,
 *   picks questions without repeats, times each question and keeps score.
 * - Other players connect straight to the host over WebRTC (PeerJS). The room code is part of
 *   the host's peer id, so there is no server of our own. Solo play needs no network at all.
 * - The host sends each question once (both languages), and a small status update whenever
 *   something changes. Players see right/wrong the moment they answer, with an explanation.
 * - At the end every player gets a personal assessment, and an answer sheet with explanations
 *   and references built from the questions their device received.
 */
'use strict';

const CONFIG = {
  peerPrefix: 'gshouse-v1-',
  maxPlayers: 20,
  counts: [10, 20, 30, 50, 100],
  timers: [0, 30, 45, 60, 90],         // seconds per question; 0 = no limit
  negatives: [0, 0.33, 0.25],
  // Servers that help two devices find a route to each other. The PeerJS library's own relay
  // (TURN) servers no longer exist, so the list is given here. STUN servers only reveal a device's
  // public address: enough on the same Wi-Fi and on most home networks, not on mobile data or
  // office Wi-Fi at both ends. For those, put a TURN relay in `turn` (see docs/HANDOFF.md):
  //   turn: [{ urls: ['turn:host:80', 'turns:host:443?transport=tcp'], username: '…', credential: '…' }]
  stun: [
    { urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'] },
    { urls: 'stun:stun.cloudflare.com:3478' },
  ],
  turn: [],
  defaults: { count: 20, timer: 45, level: 'all', negative: 0, track: 'all' },
  heartbeatMs: 2000,
  staleMs: 9000,
  connectTimeoutMs: 25000,
  reconnectForMs: 45000,
  retryEveryMs: 6000,
};
const LEVELS = ['TGT', 'PGT', 'Higher'];
// Which question levels each syllabus serves: a TGT/PGT quiz never shows a Higher question
// and an Assistant Professor quiz shows only Higher ones.
const TRACK_LEVELS = { all: LEVELS, tgt: ['TGT', 'PGT'], higher: ['Higher'] };
const levelsFor = (st) => (st.level === 'all' ? TRACK_LEVELS[st.track] || LEVELS : [st.level]);
const LETTERS = ['A', 'B', 'C', 'D'];
const BOOKS = {
  'special-topics': { en: 'Special Topics 2.0', hi: 'स्पेशल टॉपिक्स 2.0' },
  fatman: { en: 'Parmar SSC (Fatman)', hi: 'परमार एसएससी (फैटमैन)' },
  'parmar-ca': { en: 'Parmar SSC Current Affairs 2026', hi: 'परमार एसएससी करेंट अफेयर्स 2026' },
  'tgt-pgt-gk': { en: 'Ghatna Chakra TGT/PGT Samanya Gyan (2026 edition)', hi: 'घटना चक्र टीजीटी/पीजीटी सामान्य ज्ञान (संस्करण 2026)' },
};
const CODE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ'; // no I, L or O: easy to read aloud
const COLORS = ['#c0392b', '#d35400', '#b7950b', '#27ae60', '#16a085', '#2980b9', '#8e44ad', '#c2185b',
  '#6d4c41', '#00838f', '#5d4037', '#7cb342', '#e67e22', '#3949ab', '#ad1457', '#00897b',
  '#f4511e', '#546e7a', '#9e9d24', '#6a1b9a'];

// Options for every PeerJS connection: our own list of STUN and TURN servers (see CONFIG).
const peerOptions = () => ({ debug: 1, config: { iceServers: [...CONFIG.stun, ...CONFIG.turn], sdpSemantics: 'unified-plan' } });

// ---------- small helpers ----------
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get(area, key) { try { return window[area].getItem(key); } catch { return null; } },
  set(area, key, value) { try { window[area].setItem(key, value); } catch { /* storage blocked or full */ } },
  del(area, key) { try { window[area].removeItem(key); } catch { /* storage blocked */ } },
};
const makeId = () => (window.crypto && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36));
const randomCode = () => Array.from({ length: 4 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');
const normalizeCode = (s) => String(s || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4);
const cleanName = (s) => String(s || '').replace(/\s+/g, ' ').trim().slice(0, 16);
const initial = (name) => (Array.from(name.trim())[0] || '?').toUpperCase();
const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
const fmtScore = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2));
function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
// Hindi is the user's preferred numeral style here too, so numbers stay as 0–9 in both languages.
const sectionById = Object.fromEntries(SECTIONS.map((s) => [s.id, s]));
const unitById = Object.fromEntries(UNITS.map((u) => [u.id, u]));
const sectionOf = (qid) => String(qid).replace(/-\d{3}$/, '');
const readList = (key) => {
  try { const v = JSON.parse(store.get('localStorage', key) || '[]'); return Array.isArray(v) ? v : []; } catch { return []; }
};

// ---------- language ----------
let lang = store.get('localStorage', 'pp-lang') === 'hi' ? 'hi' : 'en';
const pickLang = (obj, l = lang) => (obj && (obj[l] || obj.en)) || '';

const T = {
  en: {
    tagline: 'Bilingual General Knowledge quiz for UPESSC TGT, PGT & Assistant Professor',
    stats: (s, q) => `${s} sections · ${q.toLocaleString('en-IN')} questions · 1–20 players`,
    yourName: 'Your name', namePh: 'e.g. Priya', playSolo: 'Practise alone', createRoom: 'Create a room for friends',
    orJoin: 'or join friends', roomCode: 'Room code', join: 'Join', invited: 'You’re invited to room', joinGame: 'Join the quiz',
    createOwn: 'Practise alone instead', loading: 'Loading…', opening: 'Opening a room…', reopening: 'Reopening your room…',
    joining: (c) => `Joining room ${c}…`, cancel: 'Cancel', backHome: 'Back to start',
    setup: 'Set up the quiz', syllabus: 'Syllabus', trackAll: 'All', trackTgt: 'TGT / PGT', trackHigher: 'Assistant Professor',
    sections: 'Sections', selectAll: 'Select all', clearAll: 'Clear', qs: (n) => `${n} Qs`, soon: 'soon',
    howMany: 'Questions', level: 'Level', allLevels: 'All', timer: 'Time per question', noLimit: 'Off', secs: (n) => `${n}s`,
    negative: 'Negative marking', none: 'No', start: 'Start quiz', available: (n, s) => `${n} questions available from ${s} section${s === 1 ? '' : 's'}`,
    pickSection: 'Pick at least one section that has questions.', players: 'Players', host: 'host', you: 'you',
    waitHost: (n) => `Waiting for ${n} to start the quiz`, hostPicks: (n) => `${n} is choosing the sections`,
    roomCodeTitle: 'Room code', friendsOpen: (u) => `Friends open ${u} and type this code — or scan:`, copyLink: 'Copy invite link',
    share: 'Share…', copied: 'Invite link copied!', localHost: 'You’re hosting from your own computer, so friends join through the public site.',
    qOf: (r, n) => `Question ${r} of ${n}`, timeUp: 'Time’s up', answered: (a, n) => `${a}/${n} answered`,
    next: 'Next question', results: 'See results', waitNext: (n) => `Waiting for ${n} to continue…`,
    correct: 'Correct! शाबाश!', wrong: 'Not quite', missed: 'Time ran out', yourPick: 'Your answer', rightAnswer: 'Correct answer',
    why: 'Explanation', aboutOptions: 'About each option', remember: 'Remember', refs: 'References', page: 'p.',
    streak: (n) => `🔥 ${n} in a row`, leaderboard: 'Leaderboard', assessment: 'Your assessment', score: 'Score',
    accuracy: 'Accuracy', avgTime: 'Avg. time', bestStreak: 'Best streak', correctN: 'Correct', wrongN: 'Wrong', skippedN: 'Skipped',
    strong: 'Strong areas', weak: 'Revise these', byLevel: 'By level', bySection: 'By section', noneYet: 'Not enough questions yet', noStrong: 'None yet — keep practising',
    answerSheet: 'Answer sheet', print: 'Print / Save as PDF', playAgain: 'Play again', home: 'Home', close: 'Close',
    sheetLang: 'Language', both: 'Both', yourAnswerWas: 'Your answer', notAnswered: 'Not answered',
    leaveSolo: 'Leave this quiz?', leaveHost: 'Leave and end the quiz for everyone?', leaveGuest: 'Leave this quiz?',
    hostEnded: 'The host ended the quiz.', lost: 'Lost the connection to the host, so the quiz has ended.',
    notFound: (c) => `Room ${c} doesn’t exist. Check the code with whoever invited you.`, full: 'This room is full (20 players max).',
    cantConnect: 'Couldn’t connect to the room. Check that the host still has the room open, then try again.',
    blocked: 'Your network and the host’s network don’t allow a direct link. This is common on mobile data and on office or school Wi-Fi. Connect all players to the same Wi-Fi and try again.',
    noPeer: 'The room feature didn’t load. Check your internet connection, refresh the page and try again. Solo practice still works.',
    allAnswered: 'Everyone has answered', keepOpen: 'Keep this screen open while friends join.',
    noNet: 'Couldn’t reach the game server. Check your internet connection and try again.',
    broken: 'The quiz didn’t load properly. Check your internet connection and refresh the page.',
    reconnecting: 'Connection lost — reconnecting…', install: '📲 Install the app', installed: 'App installed! 🎉',
    iosHint: '📲 Use it like an app: tap Share in Safari, then Add to Home Screen.',
    loadingQs: 'Collecting your questions…', noQs: 'No questions match these choices yet.',
    rankTitle: { acharya: 'Acharya', pandit: 'Pandit', vidvan: 'Vidvan', sadhak: 'Sadhak', jigyasu: 'Jigyasu' },
    rankNote: { acharya: 'Master of the syllabus', pandit: 'Excellent command', vidvan: 'Good grasp — keep polishing', sadhak: 'Steady progress — revise weak areas', jigyasu: 'Every master was once a beginner' },
    level_TGT: 'TGT', level_PGT: 'PGT', level_Higher: 'Higher', tagTgt: 'TGT/PGT', tagHigher: 'Higher',
    settings: 'Settings', sound: 'Sound', darkMode: 'Dark mode', textSize: 'Text size', bothLangs: 'Both languages', on: 'On', off: 'Off',
    smaller: 'Smaller text', larger: 'Larger text',
    quickPractice: 'Quick practice', savedQs: (n) => `🔖 Saved questions (${n})`, mistakes: (n) => `✗ My mistakes (${n})`,
    save: 'Save this question for revision', saved: 'Saved for revision', unsaved: 'Removed from saved questions',
    retryWrong: (n) => `Retry ${n} missed question${n === 1 ? '' : 's'}`,
    fAll: 'All', fWrong: 'Wrong', fSkipped: 'Skipped', fSaved: 'Saved', noneInFilter: 'No questions in this list.',
    showNotes: 'Show option notes', hideNotes: 'Hide option notes',
    byUnit: 'By unit', allSections: (n) => `By section (${n})`, weakTap: 'Tap a section to practise it now.',
    progress: 'Your progress', lastQuizzes: (n, avg, best) => `Last ${n} quiz${n === 1 ? '' : 'zes'} · average ${avg}% · best ${best}%`,
    byUnitRecent: 'By unit (recent quizzes)',
    keysHint: 'Keyboard: A–D or 1–4 to answer · Enter for the next question',
    sideWait: 'The explanation appears here once you answer.',
    bookCardTitle: 'Study with the book: Ghatna Chakra (new edition)',
    bookCardSub: 'Notes and chapter quizzes in the topic order of the TGT/PGT Samanya Gyan question bank: all 17 topics, from current affairs to computers, each with a full test.',
    bookRefLine: 'Reference',
    notesPdf: 'All notes as one PDF', chapterPdf: 'Save this chapter as PDF', pdfTitle: 'Notes for offline reading',
    pdfHow: 'Press the button below, then choose "Save as PDF" as the printer. On a phone the same button opens Print, where the PDF can be saved.',
    pdfMade: 'Notes written for GS House. They follow the topic order of the book; the page numbers refer to it.',
    bookOpen: 'Open the book companion', bookShort: 'Book companion', bookBack: 'Back to the book', bookAgain: 'Try another set',
    bookPages: (p) => `Book pp. ${p}`, comingSoon: 'Coming soon', notesReady: 'Notes + quizzes', readNotes: 'Read notes', quiz: 'Quiz',
    readN: (a, n) => `${a} of ${n} chapters read`, best: (p) => `best ${p}%`, chapterOf: (i, n) => `Chapter ${i} of ${n}`,
    takeQuiz: 'Take the chapter quiz', fullTest: (n) => `Full test: ${n} mixed questions`, practiseBank: (n) => `Practise ${n} questions`,
    prevCh: 'Previous', nextCh: 'Next chapter', allChapters: 'All chapters', chapterDone: 'Chapter finished. Now test yourself!',
    minRead: (m) => `${m} min read`,
  },
  hi: {
    tagline: 'यूपीईएसएससी टीजीटी, पीजीटी एवं असिस्टेंट प्रोफेसर हेतु द्विभाषी सामान्य ज्ञान प्रश्नोत्तरी',
    stats: (s, q) => `${s} खंड · ${q.toLocaleString('en-IN')} प्रश्न · 1–20 खिलाड़ी`,
    yourName: 'आपका नाम', namePh: 'जैसे प्रिया', playSolo: 'अकेले अभ्यास करें', createRoom: 'मित्रों के लिए कक्ष बनाएँ',
    orJoin: 'या मित्रों से जुड़ें', roomCode: 'कक्ष कोड', join: 'जुड़ें', invited: 'आपको इस कक्ष में आमंत्रित किया गया है', joinGame: 'प्रश्नोत्तरी में जुड़ें',
    createOwn: 'इसके बजाय अकेले अभ्यास करें', loading: 'लोड हो रहा है…', opening: 'कक्ष खुल रहा है…', reopening: 'आपका कक्ष फिर से खुल रहा है…',
    joining: (c) => `कक्ष ${c} से जुड़ रहे हैं…`, cancel: 'रद्द करें', backHome: 'शुरुआत पर लौटें',
    setup: 'प्रश्नोत्तरी तैयार करें', syllabus: 'पाठ्यक्रम', trackAll: 'सभी', trackTgt: 'टीजीटी / पीजीटी', trackHigher: 'असिस्टेंट प्रोफेसर',
    sections: 'खंड', selectAll: 'सभी चुनें', clearAll: 'हटाएँ', qs: (n) => `${n} प्रश्न`, soon: 'जल्द',
    howMany: 'प्रश्नों की संख्या', level: 'स्तर', allLevels: 'सभी', timer: 'प्रति प्रश्न समय', noLimit: 'बंद', secs: (n) => `${n} से.`,
    negative: 'ऋणात्मक अंकन', none: 'नहीं', start: 'प्रश्नोत्तरी शुरू करें', available: (n, s) => `${s} खंडों से ${n} प्रश्न उपलब्ध`,
    pickSection: 'कम से कम एक ऐसा खंड चुनें जिसमें प्रश्न हों।', players: 'खिलाड़ी', host: 'होस्ट', you: 'आप',
    waitHost: (n) => `${n} द्वारा प्रश्नोत्तरी शुरू करने की प्रतीक्षा`, hostPicks: (n) => `${n} खंड चुन रहे हैं`,
    roomCodeTitle: 'कक्ष कोड', friendsOpen: (u) => `मित्र ${u} खोलकर यह कोड डालें — या स्कैन करें:`, copyLink: 'आमंत्रण लिंक कॉपी करें',
    share: 'साझा करें…', copied: 'आमंत्रण लिंक कॉपी हो गया!', localHost: 'आप अपने कंप्यूटर से होस्ट कर रहे हैं, इसलिए मित्र सार्वजनिक साइट से जुड़ेंगे।',
    qOf: (r, n) => `प्रश्न ${r} / ${n}`, timeUp: 'समय समाप्त', answered: (a, n) => `${a}/${n} ने उत्तर दिया`,
    next: 'अगला प्रश्न', results: 'परिणाम देखें', waitNext: (n) => `${n} के आगे बढ़ाने की प्रतीक्षा…`,
    correct: 'सही उत्तर! शाबाश!', wrong: 'गलत उत्तर', missed: 'समय समाप्त हो गया', yourPick: 'आपका उत्तर', rightAnswer: 'सही उत्तर',
    why: 'व्याख्या', aboutOptions: 'प्रत्येक विकल्प के बारे में', remember: 'याद रखें', refs: 'संदर्भ', page: 'पृ.',
    streak: (n) => `🔥 लगातार ${n} सही`, leaderboard: 'लीडरबोर्ड', assessment: 'आपका मूल्यांकन', score: 'अंक',
    accuracy: 'सटीकता', avgTime: 'औसत समय', bestStreak: 'सर्वश्रेष्ठ क्रम', correctN: 'सही', wrongN: 'गलत', skippedN: 'छोड़े',
    strong: 'मजबूत क्षेत्र', weak: 'इन्हें दोहराएँ', byLevel: 'स्तर अनुसार', bySection: 'खंड अनुसार', noneYet: 'अभी पर्याप्त प्रश्न नहीं', noStrong: 'अभी कोई नहीं — अभ्यास जारी रखें',
    answerSheet: 'उत्तर पत्रक', print: 'प्रिंट / PDF सहेजें', playAgain: 'फिर से खेलें', home: 'मुख्य पृष्ठ', close: 'बंद करें',
    sheetLang: 'भाषा', both: 'दोनों', yourAnswerWas: 'आपका उत्तर', notAnswered: 'उत्तर नहीं दिया',
    leaveSolo: 'क्या यह प्रश्नोत्तरी छोड़नी है?', leaveHost: 'छोड़ने पर सभी के लिए प्रश्नोत्तरी समाप्त हो जाएगी। छोड़ें?', leaveGuest: 'क्या यह प्रश्नोत्तरी छोड़नी है?',
    hostEnded: 'होस्ट ने प्रश्नोत्तरी समाप्त कर दी।', lost: 'होस्ट से संपर्क टूट गया, इसलिए प्रश्नोत्तरी समाप्त हो गई।',
    notFound: (c) => `कक्ष ${c} मौजूद नहीं है। आमंत्रित करने वाले से कोड जाँचें।`, full: 'यह कक्ष भर गया है (अधिकतम 20 खिलाड़ी)।',
    cantConnect: 'कक्ष से नहीं जुड़ पाए। देखें कि होस्ट ने कक्ष खुला रखा है, फिर दोबारा प्रयास करें।',
    blocked: 'आपका और होस्ट का नेटवर्क सीधा संपर्क नहीं बनने दे रहा। मोबाइल डेटा तथा ऑफिस या स्कूल के वाई-फाई पर ऐसा अक्सर होता है। सभी खिलाड़ी एक ही वाई-फाई से जुड़ें और दोबारा प्रयास करें।',
    noPeer: 'कक्ष की सुविधा लोड नहीं हुई। इंटरनेट जाँचें, पेज रिफ्रेश करें और दोबारा प्रयास करें। अकेले अभ्यास फिर भी चलेगा।',
    allAnswered: 'सभी ने उत्तर दे दिया', keepOpen: 'मित्रों के जुड़ने तक यह स्क्रीन खुली रखें।',
    noNet: 'गेम सर्वर तक नहीं पहुँच पाए। इंटरनेट जाँचकर फिर प्रयास करें।',
    broken: 'प्रश्नोत्तरी ठीक से लोड नहीं हुई। इंटरनेट जाँचें और पेज रिफ्रेश करें।',
    reconnecting: 'संपर्क टूटा — फिर से जोड़ रहे हैं…', install: '📲 ऐप इंस्टॉल करें', installed: 'ऐप इंस्टॉल हो गया! 🎉',
    iosHint: '📲 ऐप की तरह उपयोग करें: Safari में Share दबाएँ, फिर Add to Home Screen।',
    loadingQs: 'आपके प्रश्न तैयार हो रहे हैं…', noQs: 'इन विकल्पों से मेल खाते प्रश्न अभी उपलब्ध नहीं हैं।',
    rankTitle: { acharya: 'आचार्य', pandit: 'पंडित', vidvan: 'विद्वान', sadhak: 'साधक', jigyasu: 'जिज्ञासु' },
    rankNote: { acharya: 'पाठ्यक्रम पर पूर्ण अधिकार', pandit: 'उत्कृष्ट पकड़', vidvan: 'अच्छी समझ — निखारते रहें', sadhak: 'निरंतर प्रगति — कमजोर खंड दोहराएँ', jigyasu: 'हर आचार्य कभी शुरुआती था' },
    level_TGT: 'टीजीटी', level_PGT: 'पीजीटी', level_Higher: 'उच्चतर', tagTgt: 'टीजीटी/पीजीटी', tagHigher: 'उच्चतर',
    settings: 'सेटिंग', sound: 'ध्वनि', darkMode: 'डार्क मोड', textSize: 'अक्षरों का आकार', bothLangs: 'दोनों भाषाएँ', on: 'चालू', off: 'बंद',
    smaller: 'छोटे अक्षर', larger: 'बड़े अक्षर',
    quickPractice: 'त्वरित अभ्यास', savedQs: (n) => `🔖 सहेजे गए प्रश्न (${n})`, mistakes: (n) => `✗ मेरी गलतियाँ (${n})`,
    save: 'इस प्रश्न को दोहराने के लिए सहेजें', saved: 'दोहराने के लिए सहेजा गया', unsaved: 'सहेजे गए प्रश्नों से हटाया गया',
    retryWrong: (n) => `छूटे या गलत ${n} प्रश्न फिर से हल करें`,
    fAll: 'सभी', fWrong: 'गलत', fSkipped: 'छोड़े', fSaved: 'सहेजे', noneInFilter: 'इस सूची में कोई प्रश्न नहीं है।',
    showNotes: 'विकल्पों की टिप्पणियाँ दिखाएँ', hideNotes: 'विकल्पों की टिप्पणियाँ छिपाएँ',
    byUnit: 'इकाई अनुसार', allSections: (n) => `खंड अनुसार (${n})`, weakTap: 'अभी अभ्यास के लिए किसी खंड पर टैप करें।',
    progress: 'आपकी प्रगति', lastQuizzes: (n, avg, best) => `पिछली ${n} प्रश्नोत्तरी · औसत ${avg}% · सर्वश्रेष्ठ ${best}%`,
    byUnitRecent: 'इकाई अनुसार (हाल की प्रश्नोत्तरी)',
    keysHint: 'कीबोर्ड: उत्तर के लिए A–D या 1–4 · अगले प्रश्न के लिए Enter',
    sideWait: 'उत्तर देते ही व्याख्या यहाँ दिखेगी।',
    bookCardTitle: 'पुस्तक के साथ पढ़ें: घटना चक्र (नया संस्करण)',
    bookRefLine: 'संदर्भ',
    notesPdf: 'सभी नोट्स एक PDF में', chapterPdf: 'इस अध्याय को PDF में सहेजें', pdfTitle: 'बिना इंटरनेट पढ़ने के लिए नोट्स',
    pdfHow: 'नीचे का बटन दबाएँ, फिर प्रिंटर के रूप में "Save as PDF" चुनें। फोन पर यही बटन प्रिंट खोलता है, जहाँ से PDF सहेजी जा सकती है।',
    pdfMade: 'ये नोट्स GS House के लिए लिखे गए हैं। ये पुस्तक के विषय-क्रम के अनुसार हैं; पृष्ठ संख्या उसी पुस्तक की है।',
    bookCardSub: 'टीजीटी/पीजीटी सामान्य ज्ञान प्रश्नकोश के विषय-क्रम में नोट्स और अध्यायवार प्रश्नोत्तरी: समसामयिकी से कंप्यूटर तक सभी 17 विषय, हर विषय की पूर्ण परीक्षा के साथ।',
    bookOpen: 'पुस्तक साथी खोलें', bookShort: 'पुस्तक साथी', bookBack: 'पुस्तक पर लौटें', bookAgain: 'नए प्रश्न आज़माएँ',
    bookPages: (p) => `पुस्तक पृ. ${p}`, comingSoon: 'जल्द आ रहा है', notesReady: 'नोट्स + प्रश्नोत्तरी', readNotes: 'नोट्स पढ़ें', quiz: 'प्रश्नोत्तरी',
    readN: (a, n) => `${n} में से ${a} अध्याय पढ़े`, best: (p) => `सर्वश्रेष्ठ ${p}%`, chapterOf: (i, n) => `अध्याय ${i} / ${n}`,
    takeQuiz: 'अध्याय की प्रश्नोत्तरी दें', fullTest: (n) => `पूर्ण परीक्षण: ${n} मिश्रित प्रश्न`, practiseBank: (n) => `${n} प्रश्नों का अभ्यास करें`,
    prevCh: 'पिछला', nextCh: 'अगला अध्याय', allChapters: 'सभी अध्याय', chapterDone: 'अध्याय पूरा हुआ। अब स्वयं को परखें!',
    minRead: (m) => `${m} मिनट का पाठ`,
  },
};
const t = (key, ...args) => {
  const v = has(T[lang], key) ? T[lang][key] : T.en[key];
  return typeof v === 'function' ? v(...args) : v;
};
function setLang(l) {
  lang = l === 'hi' ? 'hi' : 'en';
  store.set('localStorage', 'pp-lang', lang);
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en-IN';
  ui.qlang = {};
  refresh();
}

// ---------- preferences kept on this device ----------
const FS_STEPS = [0.9, 1, 1.12, 1.25];
const savedFs = Number(store.get('localStorage', 'pp-fs'));
const prefs = {
  theme: store.get('localStorage', 'pp-theme'),             // 'dark', 'light', or nothing: follow the device
  fs: FS_STEPS.includes(savedFs) ? savedFs : 1,             // scale of the reading text
  both: store.get('localStorage', 'pp-both') === '1',       // show each question in both languages
  notes: store.get('localStorage', 'pp-notes') === '1',     // keep "About each option" open
};
const isDark = () => (prefs.theme ? prefs.theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
function applyPrefs() {
  const root = document.documentElement;
  root.dataset.theme = isDark() ? 'dark' : 'light';
  root.style.setProperty('--fs', String(prefs.fs));
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = isDark() ? '#1c1510' : '#7b1e1e';
}
function setPref(key, value) {
  prefs[key] = value;
  store.set('localStorage', `pp-${key}`, typeof value === 'boolean' ? (value ? '1' : '0') : String(value));
  applyPrefs();
}
applyPrefs();

// Questions saved for revision, and questions answered wrong that have not been got right since.
const marks = new Set(readList('pp-marks'));
const mistakes = new Set(readList('pp-wrong'));
const saveSet = (key, set, max) => store.set('localStorage', key, JSON.stringify([...set].slice(-max)));
function toggleMark(qid) {
  if (marks.has(qid)) marks.delete(qid); else marks.add(qid);
  saveSet('pp-marks', marks, 1000);
  return marks.has(qid);
}
function noteAnswer(qid, correct) {
  mistakes.delete(qid);
  if (!correct) mistakes.add(qid);
  saveSet('pp-wrong', mistakes, 500);
}

// Results of past quizzes on this device: [{ at, n, c, u: { unitId: [asked, correct] } }]
const groupByUnit = (bySection) => {
  const units = {};
  for (const [sec, [n, c]] of Object.entries(bySection)) {
    const u = (sectionById[sec] || {}).unit;
    if (!u) continue;
    units[u] = units[u] || [0, 0];
    units[u][0] += n;
    units[u][1] += c;
  }
  return units;
};
function recordHistory(rep) {
  if (!rep.total) return;
  const list = readList('pp-history');
  list.push({ at: Date.now(), n: rep.total, c: rep.correct, u: groupByUnit(rep.bySection) });
  store.set('localStorage', 'pp-history', JSON.stringify(list.slice(-40)));
}

// ---------- who am I ----------
const me = {
  id: store.get('sessionStorage', 'pp-id') || makeId(),
  name: store.get('localStorage', 'pp-name') || '',
};
store.set('sessionStorage', 'pp-id', me.id);

const ui = {
  screen: 'home',      // home | busy | error | game
  view: null,          // latest status from the host
  endsAt: 0,
  stageKey: '',
  qlang: {},           // language chosen for each question (round -> 'en' | 'hi')
  openUnits: new Set(['u1']),
  sheet: false,        // answer sheet open
  sheetLang: null,
  sheetFilter: 'all',  // all | wrong | skipped | saved
  menuOpen: false,     // settings menu open
  bookQuiz: null,      // { topic, chapter } while a quiz started from the book companion runs
  printTitle: '',      // page title while printing; browsers use it as the PDF's file name
  lastTick: -1,
};
// Redraws the current screen after a language or preference change.
function refresh() {
  ui.stageKey = '';
  if (ui.screen === 'game') render();
  else if (ui.screen === 'home') renderHome();
  else if (ui.screen === 'book') showBook(book.route, true);
}
// What this device has seen of the quiz: the questions it received and its own answers.
let local = { code: '', questions: {}, mine: {}, shownAt: {} };
let net = null;        // { role: 'host', solo } or the guest connection object
let bankIndex = { sections: {} }; // question counts per section, from data/index.json

function saveLocal() { store.set('sessionStorage', 'pp-local', JSON.stringify(local)); }
function resetLocal(code) { local = { code, questions: {}, mine: {}, shownAt: {} }; saveLocal(); }

// =====================================================================
// Host: owns the quiz state (also used for solo play)
// =====================================================================
const host = { peer: null, state: null, answers: {}, bank: {}, conns: new Map(), lastSeen: {}, timer: null, loop: null };

function freshState(code, solo) {
  return {
    code, solo, phase: 'lobby', hostId: me.id,
    settings: { sections: [], ...CONFIG.defaults },
    round: 0, total: 0, endsAt: 0, locked: false, qids: [], players: [], reports: {},
  };
}

const blankStats = () => ({ score: 0, correct: 0, wrong: 0, skipped: 0, timeMs: 0, streak: 0, bestStreak: 0 });

function addPlayer(id, rawName) {
  const s = host.state;
  let p = s.players.find((x) => x.id === id);
  if (p) { p.connected = true; return p; }
  if (s.players.length >= CONFIG.maxPlayers) return null;
  const used = new Set(s.players.map((x) => x.color));
  p = {
    id, name: uniqueName(cleanName(rawName) || 'Guest', id),
    color: COLORS.find((c) => !used.has(c)) || COLORS[s.players.length % COLORS.length],
    connected: true, answered: false, ...blankStats(),
  };
  s.players.push(p);
  return p;
}

function uniqueName(name, id) {
  const taken = new Set(host.state.players.filter((p) => p.id !== id).map((p) => p.name.toLowerCase()));
  if (!taken.has(name.toLowerCase())) return name;
  for (let i = 2; ; i++) {
    const candidate = `${name.slice(0, 13)} ${i}`;
    if (!taken.has(candidate.toLowerCase())) return candidate;
  }
}

function startSolo(saved = null) {
  host.state = saved ? saved.state : freshState('SOLO', true);
  host.answers = saved ? saved.answers : {};
  if (!saved) { addPlayer(me.id, me.name); resetLocal('SOLO'); }
  net = { role: 'host', solo: true };
  store.set('sessionStorage', 'pp-role', 'solo');
  enterGame();
  const resume = () => { resumeHostTimer(); hostChanged(); if (host.state.phase === 'question') sendQuestion(); };
  if (saved && host.state.qids.length) loadBank(bankSections(host.state)).then(resume);
  else resume();
}

function openRoom(code, saved = null, attempt = 0) {
  showBusy(saved ? t('reopening') : t('opening'));
  const peer = new Peer(CONFIG.peerPrefix + code, peerOptions());
  let opened = false;
  peer.on('open', async () => {
    opened = true;
    host.peer = peer;
    host.state = saved ? saved.state : freshState(code, false);
    host.answers = saved ? saved.answers : {};
    host.conns = new Map();
    host.lastSeen = {};
    if (saved) host.state.players.forEach((p) => { if (p.id !== me.id) p.connected = false; });
    else { addPlayer(me.id, me.name); resetLocal(code); }
    net = { role: 'host', solo: false };
    store.set('sessionStorage', 'pp-role', 'host');
    setRoomInUrl(code);
    if (saved && host.state.qids.length) await loadBank(bankSections(host.state));
    resumeHostTimer();
    clearInterval(host.loop);
    host.loop = setInterval(hostHeartbeat, CONFIG.heartbeatMs);
    enterGame();
    hostChanged();
    if (host.state.phase === 'question') sendQuestion();
  });
  peer.on('connection', acceptConnection);
  peer.on('disconnected', () => { if (!peer.destroyed) try { peer.reconnect(); } catch { /* retried on next drop */ } });
  peer.on('error', (err) => {
    if (opened) { console.warn('Peer error:', err.type, err); return; }
    peer.destroy();
    if (err.type === 'unavailable-id') {
      if (saved && attempt < 10) { setTimeout(() => openRoom(code, saved, attempt + 1), 1500); return; }
      if (!saved) { openRoom(randomCode()); return; }
    }
    showError(networkHelp(err));
  });
}

function acceptConnection(conn) {
  let pid = null;
  conn.on('data', (msg) => {
    if (!msg || typeof msg !== 'object') return;
    if (msg.type === 'join') {
      const id = String(msg.id || '').slice(0, 64);
      if (!id || id === me.id) return;
      const player = addPlayer(id, msg.name);
      if (!player) { conn.send({ type: 'rejected', reason: 'full' }); return; }
      pid = id;
      const old = host.conns.get(id);
      host.conns.set(id, conn); // set before closing the old one so its close event is ignored
      if (old && old !== conn) old.close();
      host.lastSeen[id] = Date.now();
      hostChanged();
      if (host.state.phase === 'question') sendQuestion(conn);
      return;
    }
    if (!pid || host.conns.get(pid) !== conn) return;
    host.lastSeen[pid] = Date.now();
    handleAction(pid, msg, conn);
  });
  const gone = () => { if (pid && host.conns.get(pid) === conn) dropPlayer(pid); };
  conn.on('close', gone);
  conn.on('error', gone);
}

function dropPlayer(pid) {
  host.conns.delete(pid);
  const s = host.state;
  const p = s.players.find((x) => x.id === pid);
  if (!p) return;
  if (s.phase === 'lobby') s.players = s.players.filter((x) => x.id !== pid);
  else p.connected = false;
  maybeLock();
  hostChanged();
}

function hostHeartbeat() {
  const now = Date.now();
  for (const [pid, conn] of host.conns) {
    if (now - (host.lastSeen[pid] || 0) > CONFIG.staleMs) {
      dropPlayer(pid);
      try { conn.close(); } catch { /* already closed */ }
    }
  }
  broadcast();
}

// Every player action (including the host's own) comes through here.
function handleAction(pid, msg, conn = null) {
  const s = host.state;
  const fromHost = pid === s.hostId;
  switch (msg.type) {
    case 'settings': {
      if (!fromHost || s.phase !== 'lobby') return;
      const st = s.settings;
      if (Array.isArray(msg.sections)) st.sections = [...new Set(msg.sections.filter((id) => sectionById[id]))];
      if (CONFIG.counts.includes(msg.count)) st.count = msg.count;
      if (CONFIG.timers.includes(msg.timer)) st.timer = msg.timer;
      if (CONFIG.negatives.includes(msg.negative)) st.negative = msg.negative;
      if (['all', 'tgt', 'higher'].includes(msg.track) && msg.track !== st.track) {
        st.track = msg.track;
        st.sections = st.sections.filter((id) => trackOk(sectionById[id], st.track));
      }
      if (msg.level === 'all' || LEVELS.includes(msg.level)) st.level = msg.level;
      if (st.level !== 'all' && !TRACK_LEVELS[st.track].includes(st.level)) st.level = 'all';
      hostChanged();
      return;
    }
    case 'start':
      if (fromHost && s.phase === 'lobby') startQuiz();
      return;
    case 'answer':
      recordAnswer(pid, msg);
      return;
    case 'next':
      if (fromHost && s.phase === 'question') nextRound();
      return;
    case 'again':
      if (fromHost && s.phase === 'over') {
        backToLobby(s);
        hostChanged();
      }
      return;
    case 'quick': {
      // Start at once on a given list of questions (saved ones, past mistakes, a retry of the
      // questions just missed) or on one section, from the lobby or from the results screen.
      if (!fromHost || !['lobby', 'over'].includes(s.phase)) return;
      const qids = Array.isArray(msg.qids)
        ? [...new Set(msg.qids.filter((id) => typeof id === 'string' && sectionById[sectionOf(id)]))].slice(-100) : [];
      const secs = Array.isArray(msg.sections) ? [...new Set(msg.sections.filter((id) => sectionById[id]))] : [];
      if (!qids.length && !secs.length) { toast(t('noQs')); return; }
      if (s.phase === 'over') backToLobby(s);
      if (!qids.length) s.settings.sections = secs;
      startQuiz(qids.length ? qids : null);
      return;
    }
    case 'need':
      if (s.phase === 'question' && conn) sendQuestion(conn);
      return;
    case 'bye':
      dropPlayer(pid);
      return;
    default:
  }
}

function backToLobby(s) {
  s.players = s.players.filter((p) => p.connected);
  Object.assign(s, { phase: 'lobby', round: 0, total: 0, qids: [], reports: {}, locked: false });
  host.answers = {};
}

// Every section the running quiz needs: the chosen ones, plus those of a quick-practice list.
const bankSections = (s) => [...new Set([...s.settings.sections, ...s.qids.map(sectionOf)])];

async function loadBank(sectionIds) {
  await Promise.all(sectionIds.filter((id) => !host.bank[id]).map(async (id) => {
    try {
      const res = await fetch(`data/${id}.json`, { cache: 'no-cache' });
      host.bank[id] = res.ok ? (await res.json()).questions : [];
    } catch { host.bank[id] = []; }
  }));
}
const findQuestion = (qid) => (host.bank[sectionOf(qid)] || []).find((q) => q.id === qid);

// Picks questions spread evenly over the chosen sections, preferring ones this device hasn't
// seen before, with no question repeated inside a quiz.
function pickQuestions(st) {
  const seen = new Set(JSON.parse(store.get('localStorage', 'pp-seen') || '[]'));
  // The sections are taken in a random order, so a short quiz over many sections samples all units.
  const queues = shuffle(st.sections).map((id) => {
    const levels = levelsFor(st);
    const qs = (host.bank[id] || []).filter((q) => levels.includes(q.level));
    const fresh = shuffle(qs.filter((q) => !seen.has(q.id)));
    const old = shuffle(qs.filter((q) => seen.has(q.id)));
    return [...fresh, ...old];
  }).filter((q) => q.length);
  const picked = [];
  for (let i = 0; picked.length < st.count && queues.some((q) => q.length); i++) {
    const q = queues[i % queues.length];
    if (q.length) picked.push(q.shift().id);
  }
  return shuffle(picked);
}

// `only` is a fixed list of question ids (quick practice); without it the questions are
// picked from the chosen sections.
async function startQuiz(only = null) {
  const s = host.state;
  if (!only && !s.settings.sections.length) { toast(t('pickSection')); return; }
  s.phase = 'loading';
  hostChanged();
  await loadBank(only ? [...new Set(only.map(sectionOf))] : s.settings.sections);
  if (host.state !== s || s.phase !== 'loading') return; // left the quiz while the questions were loading
  const qids = only ? shuffle(only.filter((id) => findQuestion(id))) : pickQuestions(s.settings);
  if (!qids.length) {
    s.phase = 'lobby';
    hostChanged();
    toast(t('noQs'));
    return;
  }
  s.qids = qids;
  s.total = qids.length;
  s.round = 0;
  s.reports = {};
  host.answers = {};
  s.players.forEach((p) => Object.assign(p, blankStats(), { answered: false }));
  nextRound();
}

function nextRound() {
  const s = host.state;
  clearTimeout(host.timer);
  // In a room the host may move on at any time: whoever has not answered yet skips the question.
  if (s.phase === 'question' && s.round && !s.locked) {
    for (const p of s.players) if (!p.answered) { p.skipped += 1; p.streak = 0; }
  }
  if (s.round >= s.total) { finishQuiz(); return; }
  s.round += 1;
  s.phase = 'question';
  s.locked = false;
  host.answers[s.round] = {};
  s.players.forEach((p) => { p.answered = false; });
  s.endsAt = s.settings.timer ? Date.now() + s.settings.timer * 1000 : 0;
  if (s.settings.timer) host.timer = setTimeout(lockRound, s.settings.timer * 1000);
  hostChanged();
  sendQuestion();
}

function sendQuestion(only = null) {
  const s = host.state;
  const q = findQuestion(s.qids[s.round - 1]);
  if (!q) return;
  const msg = { type: 'question', round: s.round, total: s.total, q };
  if (only) { if (only.open) only.send(msg); return; }
  for (const conn of host.conns.values()) if (conn.open) try { conn.send(msg); } catch (e) { console.warn('send failed', e); }
  receiveQuestion(msg);
}

function recordAnswer(pid, msg) {
  const s = host.state;
  if (s.phase !== 'question' || s.locked || msg.round !== s.round) return;
  if (!Number.isInteger(msg.choice) || msg.choice < 0 || msg.choice > 3) return;
  const p = s.players.find((x) => x.id === pid);
  const book = host.answers[s.round];
  if (!p || has(book, pid)) return;
  const q = findQuestion(s.qids[s.round - 1]);
  const correct = msg.choice === q.answer;
  const ms = Math.max(0, Math.min(Number(msg.ms) || 0, 15 * 60 * 1000));
  book[pid] = { choice: msg.choice, correct, ms };
  p.answered = true;
  p.timeMs += ms;
  if (correct) {
    p.correct += 1;
    p.score += 1;
    p.streak += 1;
    p.bestStreak = Math.max(p.bestStreak, p.streak);
  } else {
    p.wrong += 1;
    p.score -= s.settings.negative;
    p.streak = 0;
  }
  p.score = Math.round(p.score * 100) / 100;
  maybeLock();
  hostChanged();
}

// Once everyone still connected has answered, the question is done.
function maybeLock() {
  const s = host.state;
  if (s.phase !== 'question' || s.locked) return;
  const active = s.players.filter((p) => p.connected);
  if (active.length && active.every((p) => p.answered)) { clearTimeout(host.timer); s.locked = true; }
}

function lockRound() {
  const s = host.state;
  if (s.phase !== 'question' || s.locked) return;
  s.locked = true;
  for (const p of s.players) {
    if (!p.answered) { p.skipped += 1; p.streak = 0; }
  }
  hostChanged();
}

function finishQuiz() {
  const s = host.state;
  clearTimeout(host.timer);
  s.phase = 'over';
  s.reports = Object.fromEntries(s.players.map((p) => [p.id, reportFor(p)]));
  rememberSeen(s.qids);
  hostChanged();
}

function reportFor(p) {
  const s = host.state;
  const bySection = {};
  const byLevel = {};
  let answeredMs = 0;
  let answered = 0;
  s.qids.forEach((qid, i) => {
    const q = findQuestion(qid);
    if (!q) return;
    const a = (host.answers[i + 1] || {})[p.id];
    const sec = qid.replace(/-\d{3}$/, '');
    bySection[sec] = bySection[sec] || [0, 0];
    byLevel[q.level] = byLevel[q.level] || [0, 0];
    bySection[sec][0] += 1;
    byLevel[q.level][0] += 1;
    if (a && a.correct) { bySection[sec][1] += 1; byLevel[q.level][1] += 1; }
    if (a) { answered += 1; answeredMs += a.ms; }
  });
  return {
    score: p.score, correct: p.correct, wrong: p.wrong, skipped: s.total - p.correct - p.wrong,
    total: s.total, avgMs: answered ? Math.round(answeredMs / answered) : 0, bestStreak: p.bestStreak, bySection, byLevel,
  };
}

function rememberSeen(qids) {
  const seen = JSON.parse(store.get('localStorage', 'pp-seen') || '[]');
  const all = [...new Set([...seen, ...qids])].slice(-6000);
  store.set('localStorage', 'pp-seen', JSON.stringify(all));
}

function resumeHostTimer() {
  const s = host.state;
  clearTimeout(host.timer);
  if (s.phase === 'question' && !s.locked && s.endsAt) host.timer = setTimeout(lockRound, Math.max(0, s.endsAt - Date.now()));
}

function hostChanged() {
  const key = host.state.solo ? 'pp-solo' : 'pp-host';
  store.set('sessionStorage', key, JSON.stringify({ state: host.state, answers: host.answers }));
  broadcast();
}

function broadcast() {
  const now = Date.now();
  const snap = snapshot(now);
  for (const conn of host.conns.values()) {
    if (!conn.open) continue;
    try { conn.send(snap); } catch (e) { console.warn('send failed', e); }
  }
  receiveState(snap);
}

function snapshot(now) {
  const s = host.state;
  return {
    type: 'state', code: s.code, solo: s.solo, phase: s.phase, hostId: s.hostId, settings: s.settings,
    round: s.round, total: s.total, locked: s.locked,
    timeLeft: s.phase === 'question' && s.endsAt && !s.locked ? Math.max(0, s.endsAt - now) : 0,
    players: s.players.map((p) => ({
      id: p.id, name: p.name, color: p.color, connected: p.connected, answered: p.answered,
      score: p.score, correct: p.correct, wrong: p.wrong, skipped: p.skipped, streak: p.streak, timeMs: p.timeMs,
    })),
    reports: s.phase === 'over' ? s.reports : {},
  };
}

function closeRoom() {
  for (const conn of host.conns.values()) if (conn.open) try { conn.send({ type: 'closed' }); } catch { /* ignore */ }
  clearTimeout(host.timer);
  clearInterval(host.loop);
  const peer = host.peer;
  setTimeout(() => peer && peer.destroy(), 400);
  Object.assign(host, { peer: null, state: null, answers: {}, conns: new Map(), lastSeen: {} });
}

// =====================================================================
// Guest: connects to the host and shows what it sends
// =====================================================================
function joinRoom(code) {
  showBusy(t('joining', code));
  const g = {
    role: 'guest', code, peer: null, conn: null,
    startedAt: Date.now(), lastHeard: 0, connected: false,
    reconnectingSince: 0, retryTimer: null, watch: null,
  };
  net = g;
  if (local.code !== code) resetLocal(code);
  store.set('sessionStorage', 'pp-role', 'guest');
  setRoomInUrl(code);
  makeGuestPeer(g);
  g.watch = setInterval(guestWatchdog, CONFIG.heartbeatMs);
}

function makeGuestPeer(g) {
  const peer = new Peer(peerOptions());
  g.peer = peer;
  peer.on('open', () => { if (net === g && g.peer === peer) connectToHost(g); });
  peer.on('disconnected', () => { if (net === g && !peer.destroyed) try { peer.reconnect(); } catch { /* retry loop handles it */ } });
  peer.on('error', (err) => {
    if (net !== g || g.peer !== peer || g.connected) return;
    failGuest(err.type === 'peer-unavailable' ? t('notFound', g.code) : networkHelp(err));
  });
}

function connectToHost(g) {
  const conn = g.peer.connect(CONFIG.peerPrefix + g.code, { reliable: true, serialization: 'json' });
  const old = g.conn;
  g.conn = conn;
  if (old) try { old.close(); } catch { /* ignore */ }
  conn.on('open', () => { if (g.conn === conn) conn.send({ type: 'join', id: me.id, name: me.name }); });
  conn.on('data', (msg) => {
    if (net !== g || g.conn !== conn || !msg) return;
    g.lastHeard = Date.now();
    if (msg.type === 'state') {
      if (!g.connected) { g.connected = true; enterGame(); }
      if (g.reconnectingSince) { g.reconnectingSince = 0; clearTimeout(g.retryTimer); setBanner(''); }
      receiveState(msg);
      // Missed the current question (joined late or reconnected)? Ask for it.
      if (msg.phase === 'question' && !local.questions[msg.round]) conn.send({ type: 'need' });
    } else if (msg.type === 'question') {
      receiveQuestion(msg);
    } else if (msg.type === 'rejected') {
      failGuest(t('full'));
    } else if (msg.type === 'closed') {
      failGuest(t('hostEnded'), '👋');
    }
  });
  const lost = () => { if (net === g && g.conn === conn && g.connected) lostHost(g); };
  conn.on('close', lost);
  conn.on('error', lost);
  // Before the first link is made: if the two networks cannot reach each other, the browser
  // reports it here. Try once more, then explain what is wrong instead of waiting for the timeout.
  const pc = conn.peerConnection;
  if (pc) pc.addEventListener('iceconnectionstatechange', () => {
    if (pc.iceConnectionState !== 'failed' || net !== g || g.conn !== conn || g.connected) return;
    g.routeFails = (g.routeFails || 0) + 1;
    if (g.routeFails < 2) setTimeout(() => { if (net === g && !g.connected && g.peer && g.peer.open) connectToHost(g); }, 1200);
    else failGuest(t('blocked'), '📶');
  });
}

// Why a guest never got into the room: the game server was not reached, the direct route to the
// host is blocked, or the host did not answer.
function joinFailure(g) {
  if (!g.peer || !g.peer.open) return [t('noNet')];
  const pc = g.conn && g.conn.peerConnection;
  const route = pc ? pc.iceConnectionState : '';
  if (g.routeFails || ['checking', 'failed', 'disconnected'].includes(route)) return [t('blocked'), '📶'];
  return [t('cantConnect')];
}

function guestWatchdog() {
  const g = net;
  if (!g || g.role !== 'guest') return;
  const now = Date.now();
  if (!g.connected) {
    if (now - g.startedAt > CONFIG.connectTimeoutMs) failGuest(...joinFailure(g));
    return;
  }
  if (g.conn && g.conn.open && !g.reconnectingSince) try { g.conn.send({ type: 'ping' }); } catch { /* ignore */ }
  if (!g.reconnectingSince && now - g.lastHeard > CONFIG.staleMs) lostHost(g);
}

function lostHost(g) {
  if (g.reconnectingSince) return;
  g.reconnectingSince = Date.now();
  setBanner(t('reconnecting'));
  retryHost(g);
}

function retryHost(g) {
  if (net !== g || !g.reconnectingSince) return;
  if (Date.now() - g.reconnectingSince > CONFIG.reconnectForMs) { failGuest(t('lost'), '🌙'); return; }
  if (g.peer.destroyed) makeGuestPeer(g);
  else if (g.peer.disconnected) try { g.peer.reconnect(); } catch { makeGuestPeer(g); }
  else connectToHost(g);
  g.retryTimer = setTimeout(() => retryHost(g), CONFIG.retryEveryMs);
}

function stopGuest(g) {
  clearInterval(g.watch);
  clearTimeout(g.retryTimer);
  try { g.peer && g.peer.destroy(); } catch { /* ignore */ }
}

function failGuest(message, emoji) {
  const g = net;
  if (g && g.role === 'guest') stopGuest(g);
  net = null;
  forgetRoom();
  setBanner('');
  showError(message, emoji);
}

function act(msg) {
  if (!net) return;
  if (net.role === 'host') handleAction(me.id, msg);
  else if (net.conn && net.conn.open) net.conn.send(msg);
}

// Ends the quiz on this device. `stay` = 'none' only stops it, for a caller that shows the next screen itself.
function leaveGame(stay = '') {
  if (net && net.role === 'host') {
    if (net.solo) { clearTimeout(host.timer); host.state = null; } else closeRoom();
  }
  if (net && net.role === 'guest') {
    const g = net;
    if (g.conn && g.conn.open) try { g.conn.send({ type: 'bye' }); } catch { /* ignore */ }
    setTimeout(() => stopGuest(g), 300);
  }
  net = null;
  forgetRoom();
  setBanner('');
  releaseWakeLock();
  // A quiz started from the book companion goes back to where it was started.
  const bq = ui.bookQuiz;
  setBookQuiz(null);
  if (bq && stay !== 'none') {
    const route = bq.practice ? 'book' : `book/${bq.topic}`;
    history.replaceState({ book: route }, '', `#${route}`);
    showBook(route);
  } else if (stay !== 'none') {
    history.replaceState(null, '', location.pathname);
    renderHome();
  }
}

function forgetRoom() {
  ['pp-role', 'pp-host', 'pp-solo'].forEach((k) => store.del('sessionStorage', k));
  ui.view = null;
  ui.stageKey = '';
  ui.sheet = false;
}

function networkHelp(err) {
  if (err && err.type === 'browser-incompatible') return t('cantConnect');
  return t('noNet');
}

// =====================================================================
// Rendering
// =====================================================================
const app = $('#app');

function setScreen(name) {
  ui.screen = name;
  ui.stageKey = '';
  document.body.dataset.screen = name;
}

function receiveState(st) {
  const prev = ui.view;
  ui.view = st;
  ui.endsAt = st.timeLeft ? Date.now() + st.timeLeft : 0;
  if (prev && prev.phase !== 'over' && st.phase === 'over') onFinished(st);
  if (prev && prev.phase === 'over' && st.phase !== 'over') ui.sheet = false; // a new quiz began while the answer sheet was open
  render();
}

function receiveQuestion(msg) {
  const isNew = !local.questions[msg.round] || local.questions[msg.round].id !== msg.q.id;
  if (msg.round === 1 && isNew) { local.questions = {}; local.mine = {}; local.shownAt = {}; }
  local.questions[msg.round] = msg.q;
  if (isNew) local.shownAt[msg.round] = Date.now();
  saveLocal();
  if (isNew) { window.scrollTo({ top: 0, behavior: 'smooth' }); sfx.start(); }
  render();
}

function onFinished(st) {
  const rep = st.reports[me.id];
  if (!rep) return;
  if (!net || net.role !== 'host') rememberSeen(Object.values(local.questions).map((q) => q.id));
  recordHistory(rep);
  const acc = pct(rep.correct, rep.total);
  const bq = ui.bookQuiz;
  if (bq && !bq.practice) {
    const key = bq.chapter || `${bq.topic}-test`;
    saveBookProgress(key, { best: Math.max((bookProgress[key] || {}).best || 0, acc) });
  }
  sfx.fanfare();
  if (acc >= 40) petals();
}

function render() {
  if (ui.screen !== 'game' || !ui.view) return;
  const v = ui.view;
  const amHost = v.hostId === me.id;
  const qlang = questionMode(v.round);
  // Redraw when the phase, question, language or answer state changes. The question arrives in its
  // own message, sometimes just after the status update, so whether we have it is part of the key.
  const q = local.questions[v.round];
  const qstate = v.phase === 'question' ? `${q ? q.id : 'waiting'}:${local.mine[v.round] ? 'a' : ''}${v.locked ? 'l' : ''}` : '';
  const key = `${v.phase}:${v.round}:${amHost}:${lang}:${qlang}:${qstate}:${ui.sheet}`;
  if (ui.stageKey !== key) {
    ui.stageKey = key;
    app.innerHTML = topBar(v) + stageHTML(v, amHost);
    if (v.phase === 'lobby' && !v.solo) drawQr(v.code);
  }
  updateRegions(v, amHost);
}

function topBar(v) {
  return `
    <header class="topbar">
      <div class="brand-mini" aria-label="GS HOUSE">${LOGO_MARK}${LOGO_WORD}${v.solo ? '' : `<button class="chip" data-action="copy">${t('roomCode')} <b>${esc(v.code)}</b></button>`}</div>
      <div class="topbar-right">
        <button class="lang-toggle" data-action="lang" aria-label="Change language"><span class="${lang === 'en' ? 'on' : ''}">EN</span><span class="${lang === 'hi' ? 'on' : ''}">हिं</span></button>
        ${menuHTML()}
        <button class="icon-btn" data-action="leave" aria-label="Leave">✕</button>
      </div>
    </header>`;
}

// Sound, dark mode, both languages and text size, behind one button.
function menuHTML() {
  const onOff = (on) => `<b>${on ? t('on') : t('off')}</b>`;
  const at = FS_STEPS.indexOf(prefs.fs);
  return `
    <details class="menu" data-keep="menu" ${ui.menuOpen ? 'open' : ''}>
      <summary class="icon-btn" aria-label="${t('settings')}" title="${t('settings')}">⚙️</summary>
      <div class="menu-panel">
        <button class="menu-row" data-action="mute"><span>${sfx.muted ? '🔇' : '🔊'} ${t('sound')}</span>${onOff(!sfx.muted)}</button>
        <button class="menu-row" data-action="theme"><span>🌙 ${t('darkMode')}</span>${onOff(isDark())}</button>
        <button class="menu-row" data-action="both"><span>🔤 ${t('bothLangs')}</span>${onOff(prefs.both)}</button>
        <div class="menu-row"><span>🔠 ${t('textSize')}</span><span class="stepper">
          <button data-action="fs" data-d="-1" aria-label="${t('smaller')}" ${at <= 0 ? 'disabled' : ''}>A−</button>
          <button data-action="fs" data-d="1" aria-label="${t('larger')}" ${at >= FS_STEPS.length - 1 ? 'disabled' : ''}>A+</button>
        </span></div>
      </div>
    </details>`;
}

// How a question is shown: 'en', 'hi', or 'both' (the interface language first, the other below it).
const questionMode = (round) => ui.qlang[round] || (prefs.both ? 'both' : lang);

function stageHTML(v, amHost) {
  if (ui.sheet) return sheetHTML(v);
  if (v.phase === 'lobby') return lobbyHTML(v, amHost);
  if (v.phase === 'loading') return `<div class="screen-msg"><div class="spinner"></div><p>${t('loadingQs')}</p></div>`;
  if (v.phase === 'question') return questionHTML(v, amHost);
  return resultsHTML(v, amHost);
}

const hostName = (v) => (v.players.find((p) => p.id === v.hostId) || {}).name || t('host');
const sectionTitle = (id, l = lang) => (sectionById[id] ? sectionById[id][l] || sectionById[id].en : id);
const countFor = (id, st) => {
  const c = bankIndex.sections[id];
  if (!c) return 0;
  return levelsFor(st).reduce((n, level) => n + (c[level] || 0), 0);
};
const trackOk = (sec, track) => track === 'all' || sec.tracks.includes(track);

// ---------- lobby / setup ----------
function lobbyHTML(v, amHost) {
  const room = v.solo ? '' : `
    <section class="card lobby-code">
      <p class="eyebrow">${t('roomCodeTitle')}</p>
      <div class="big-code">${esc(v.code)}</div>
      <p class="muted small">${t('friendsOpen', `<b>${esc(prettyUrl())}</b>`)}</p>
      <div class="qr" id="qr" hidden></div>
      <div class="row"><button class="btn" data-action="copy">${t('copyLink')}</button>${navigator.share ? `<button class="btn" data-action="share">${t('share')}</button>` : ''}</div>
      ${amHost ? `<p class="muted small">📱 ${t('keepOpen')}</p>` : ''}
      ${isLocalHost() ? `<p class="muted small">${t('localHost')}</p>` : ''}
    </section>
    <section class="card">
      <h2>${t('players')} <span class="muted small" id="player-count"></span></h2>
      <ul class="player-list" id="lobby-players"></ul>
    </section>`;
  return `
    ${room}
    <section class="card setup">
      <h2 class="ornate">${t('setup')}</h2>
      <div id="setup"></div>
    </section>
    <div id="start-area" class="start-area sticky-bar"></div>`;
}

function setupHTML(v, amHost) {
  const st = v.settings;
  const dis = amHost ? '' : 'disabled';
  const seg = (name, values, label) => values.map((val) => `
    <button class="seg ${st[name] === val ? 'on' : ''}" ${amHost ? `data-action="set" data-key="${name}" data-val="${val}"` : 'disabled'}>${label(val)}</button>`).join('');
  const tracks = [['all', t('trackAll')], ['tgt', t('trackTgt')], ['higher', t('trackHigher')]];
  const units = UNITS.map((u) => {
    const secs = SECTIONS.filter((s) => s.unit === u.id && trackOk(s, st.track));
    if (!secs.length) return '';
    const withQs = secs.filter((s) => countFor(s.id, st) > 0);
    const picked = secs.filter((s) => st.sections.includes(s.id));
    const open = ui.openUnits.has(u.id);
    const rows = secs.map((s) => {
      const n = countFor(s.id, st);
      const on = st.sections.includes(s.id);
      const tags = s.tracks.map((tr) => `<span class="tag tag-${tr}">${tr === 'tgt' ? t('tagTgt') : t('tagHigher')}</span>`).join('');
      return `
        <label class="sec-row ${n ? '' : 'empty'} ${on ? 'on' : ''}" title="${esc(s.scope)}">
          <input type="checkbox" ${on ? 'checked' : ''} ${!amHost || (!n && !on) ? 'disabled' : ''} data-action="toggle-sec" data-id="${s.id}">
          <span class="sec-name">${esc(s[lang] || s.en)}<span class="sec-tags">${tags}</span></span>
          <span class="sec-count">${n || (bankIndex.sections[s.id] || {}).total ? t('qs', n) : t('soon')}</span>
        </label>`;
    }).join('');
    return `
      <div class="unit ${open ? 'open' : ''}">
        <div class="unit-head">
          <button class="unit-toggle" data-action="unit" data-id="${u.id}" aria-expanded="${open}"><span class="unit-icon">${u.icon}</span><span class="unit-name">${esc(u[lang])}</span><span class="unit-pick">${picked.length}/${secs.length}</span><span class="chev">▾</span></button>
          ${amHost && withQs.length ? `<button class="link" data-action="unit-all" data-id="${u.id}">${picked.length === withQs.length ? t('clearAll') : t('selectAll')}</button>` : ''}
        </div>
        <div class="unit-body">${rows}</div>
      </div>`;
  }).join('');
  const pickable = SECTIONS.filter((s) => trackOk(s, st.track) && countFor(s.id, st) > 0);
  const allOn = pickable.length > 0 && pickable.every((s) => st.sections.includes(s.id));
  const quick = amHost ? `
        <p class="field-label">${t('quickPractice')}</p>
        <div class="quick">
          <button class="btn" data-action="quick-marks" ${marks.size ? '' : 'disabled'}>${t('savedQs', marks.size)}</button>
          <button class="btn" data-action="quick-wrong" ${mistakes.size ? '' : 'disabled'}>${t('mistakes', mistakes.size)}</button>
        </div>` : '';
  // The rules of the quiz (time and negative marking) come first, where every player sees them
  // at once; then the sections; then the number and level of questions.
  return `
    <div class="setup-grid">
      <div class="setup-rules">
        <p class="field-label">⏱️ ${t('timer')}</p>
        <div class="segs segs-5">${seg('timer', CONFIG.timers, (n) => (n ? t('secs', n) : t('noLimit')))}</div>
        <p class="field-label">➖ ${t('negative')}</p>
        <div class="segs segs-3">${seg('negative', CONFIG.negatives, (n) => (n ? `−${n === 0.33 ? '1/3' : '1/4'}` : t('none')))}</div>
      </div>
      <div class="setup-secs">
        <p class="field-label">${t('syllabus')}</p>
        <div class="segs segs-3">${tracks.map(([val, label]) => `<button class="seg ${st.track === val ? 'on' : ''}" ${amHost ? `data-action="set" data-key="track" data-val="${val}"` : dis}>${label}</button>`).join('')}</div>
        <p class="field-label label-row"><span>${t('sections')}</span>${amHost && pickable.length ? `<button class="link" data-action="all-secs">${allOn ? t('clearAll') : t('selectAll')}</button>` : ''}</p>
        <div class="units">${units}</div>
      </div>
      <div class="setup-more">
        <p class="field-label">${t('howMany')}</p>
        <div class="segs segs-5">${seg('count', CONFIG.counts, (n) => n)}</div>
        <p class="field-label">${t('level')}</p>
        <div class="segs segs-4">${['all', ...LEVELS].map((l) => {
          const ok = l === 'all' || TRACK_LEVELS[st.track].includes(l);
          return `<button class="seg ${st.level === l ? 'on' : ''}" ${amHost && ok ? `data-action="set" data-key="level" data-val="${l}"` : 'disabled'}>${l === 'all' ? t('allLevels') : t(`level_${l}`)}</button>`;
        }).join('')}</div>${quick}
      </div>
    </div>`;
}

// ---------- question ----------
function questionHTML(v, amHost) {
  const q = local.questions[v.round];
  if (!q) return `<div class="screen-msg"><div class="spinner"></div><p>${t('loading')}</p></div>`;
  const mode = questionMode(v.round);
  const ql = mode === 'both' ? lang : mode;                 // language of the main text and the explanation
  const altLang = ql === 'en' ? 'hi' : 'en';
  const alt = mode === 'both' ? q[altLang] : null;          // the other language, shown below in "both" mode
  const body = q[ql] || q.en;
  const section = sectionOf(q.id);
  const sec = sectionById[section];
  const unit = sec ? unitById[sec.unit] : null;
  const mine = local.mine[v.round];
  const done = !!mine || v.locked;
  const second = (text) => (alt ? `<span class="alt" lang="${altLang}">${esc(text)}</span>` : '');
  const options = body.options.map((o, i) => {
    let cls = '';
    if (done) {
      if (i === q.answer) cls = 'right';
      else if (mine && mine.choice === i) cls = 'wrong';
      else cls = 'dim';
    }
    return `<button class="opt ${cls}" data-action="pick" data-i="${i}" ${done ? 'disabled' : ''}><span class="opt-letter">${LETTERS[i]}</span><span class="opt-text">${esc(o)}${alt ? second(alt.options[i]) : ''}</span>${done && i === q.answer ? '<span class="opt-mark">✓</span>' : ''}${cls === 'wrong' ? '<span class="opt-mark">✗</span>' : ''}</button>`;
  }).join('');
  const langBtn = (l, label) => `<button class="${mode === l ? 'on' : ''}" data-action="qlang" data-l="${l}">${label}</button>`;
  return `
    <section class="q-head">
      <div class="progress"><span>${t('qOf', v.round, v.total)}</span><div class="bar"><span style="width:${pct(v.round - 1, v.total)}%"></span></div></div>
      ${v.settings.timer ? '<div class="timer" id="timer"><svg viewBox="0 0 36 36"><circle class="track" cx="18" cy="18" r="16"/><circle class="fill" id="timer-fill" cx="18" cy="18" r="16" pathLength="100"/></svg><span data-countdown></span></div>' : ''}
    </section>
    <section class="q-card ${done ? 'done' : ''}">
      <div class="q-main">
        <div class="q-meta">
          <span class="q-sec">${unit ? unit.icon : '📘'} ${esc(sectionTitle(section, ql))}</span>
          <span class="q-level lvl-${q.level}">${esc(t(`level_${q.level}`))}</span>
          <span class="q-lang">${langBtn('en', 'EN')}${langBtn('hi', 'हिं')}${langBtn('both', t('both'))}</span>
          ${markButton(q.id)}
        </div>
        <h1 class="q-text" lang="${ql === 'hi' ? 'hi' : 'en'}">${esc(body.q)}${alt ? second(alt.q) : ''}</h1>
        <div class="opts" lang="${ql === 'hi' ? 'hi' : 'en'}">${options}</div>
        ${done ? '' : `<p class="keys-hint">${t('keysHint')}</p>`}
      </div>
      <div class="q-side" id="feedback">${done ? feedbackHTML(q, body, mine, ql) : `<p class="side-wait">${DIYA_SVG}${t('sideWait')}</p>`}</div>
    </section>
    <div class="next-area sticky-bar" id="next-area"></div>
    ${v.solo ? '' : `<section class="card"><h2>${t('leaderboard')} <span class="muted small" id="answered-count"></span></h2><div class="board" id="board"></div></section>`}`;
}

// The star that saves a question for revision.
function markButton(qid) {
  const on = marks.has(qid);
  return `<button class="mark-btn ${on ? 'on' : ''}" data-action="mark" data-id="${esc(qid)}" aria-pressed="${on}" aria-label="${t('save')}" title="${t('save')}">${on ? '★' : '☆'}</button>`;
}

function feedbackHTML(q, body, mine, ql) {
  const verdict = !mine ? `<div class="verdict missed">⏳ ${t('missed')}</div>`
    : mine.choice === q.answer ? `<div class="verdict good">${DIYA_SVG}<b>${t('correct')}</b>${streakNote()}</div>`
      : `<div class="verdict bad">✗ <b>${t('wrong')}</b> — ${t('rightAnswer')}: <b>${LETTERS[q.answer]}. ${esc(body.options[q.answer])}</b></div>`;
  const flow = body.path.map((step) => `<span class="node">${esc(step)}</span>`).join('<span class="arrow">➜</span>')
    + `<span class="arrow">➜</span><span class="node final">✓ ${esc(body.options[q.answer])}</span>`;
  const notes = body.options.map((o, i) => {
    const cls = i === q.answer ? 'ok' : mine && mine.choice === i ? 'bad' : '';
    return `<div class="note ${cls}"><b class="note-letter">${LETTERS[i]}</b><p class="note-text">${esc(body.notes[i])}</p></div>`;
  }).join('');
  // The explanation and the points to remember come first; the option-by-option notes open on a tap.
  return `
    ${verdict}
    <section class="explain" lang="${ql === 'hi' ? 'hi' : 'en'}">
      <div class="flow" aria-label="Topic flow">${flow}</div>
      <div class="why"><h3>📖 ${t('why')}</h3><p>${esc(body.explanation)}</p></div>
      <div class="facts"><h3>📜 ${t('remember')}</h3><ul>${body.facts.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div>
      <details class="more" data-keep="notes" ${prefs.notes ? 'open' : ''}><summary>🔎 ${t('aboutOptions')}</summary><div class="notes">${notes}</div></details>
      <p class="refs">📚 <b>${t('refs')}:</b> ${refsText(q.refs, ql)}</p>
    </section>`;
}

function streakNote() {
  const v = ui.view;
  const meP = v && v.players.find((p) => p.id === me.id);
  return meP && meP.streak >= 3 ? `<span class="streak">${t('streak', meP.streak)}</span>` : '';
}

function refsText(refs, l = lang) {
  return refs.map((r) => {
    if (r.book) return `${esc(pickLang(BOOKS[r.book] || { en: r.book }, l))}, ${t('page')} ${r.page}`;
    return r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.source)}</a>` : esc(r.source);
  }).join(' · ');
}

// ---------- results ----------
const RANKS = [[90, 'acharya', '🏆'], [75, 'pandit', '🥇'], [60, 'vidvan', '📜'], [40, 'sadhak', '🪔'], [0, 'jigyasu', '🌱']];
const rankFor = (acc) => RANKS.find(([min]) => acc >= min);

function resultsHTML(v, amHost) {
  const rep = v.reports[me.id];
  const ranked = [...v.players].sort((a, b) => b.score - a.score || a.timeMs - b.timeMs || a.name.localeCompare(b.name));
  const medal = (i) => ['🥇', '🥈', '🥉'][i] || `#${i + 1}`;
  const board = ranked.map((p, i) => {
    const r = v.reports[p.id];
    const acc = r ? pct(r.correct, r.total) : 0;
    const [, rk] = rankFor(acc);
    return `
      <div class="lb-row ${p.id === me.id ? 'me' : ''}" style="--c:${p.color};--i:${i}">
        <span class="lb-rank">${medal(i)}</span><span class="lb-avatar">${esc(initial(p.name))}</span>
        <span class="lb-name">${esc(p.name)}${p.id === me.id ? ` <em>${t('you')}</em>` : ''}<small>${esc(T[lang].rankTitle[rk])} · ${acc}%</small></span>
        <span class="lb-score">${fmtScore(p.score)}</span>
      </div>`;
  }).join('');
  const bq = ui.bookQuiz;
  const again = amHost
    ? `<button class="btn primary big" data-action="again">${t('playAgain')}</button>`
    : `<p class="muted center">${t('waitHost', esc(hostName(v)))}<span class="dots"></span></p>`;
  // After a quiz from the book companion: another set from the same chapter, or back to the book.
  const next = !bq ? again
    : `${bq.practice ? again : `<button class="btn primary big" data-action="book-again">🎯 ${t('bookAgain')}</button>`}
       <button class="btn big" data-action="leave-now">📚 ${t('bookBack')}</button>`;
  const missed = missedQids();
  const retry = amHost && v.solo && missed.length
    ? `<button class="btn big" data-action="retry">🔁 ${t('retryWrong', missed.length)}</button>` : '';
  return `
    ${rep ? assessmentHTML(rep, amHost && v.solo) : ''}
    ${v.solo ? '' : `<section class="card results-wide"><h2 class="ornate">${t('leaderboard')}</h2><div class="lb">${board}</div></section>`}
    ${historyHTML('results-wide')}
    <div class="next-area results-wide">
      ${retry}
      <button class="btn big" data-action="sheet">📄 ${t('answerSheet')}</button>
      ${next}
    </div>`;
}

// Questions of the quiz just played that this player got wrong or left unanswered.
function missedQids() {
  return Object.keys(local.questions).map(Number).sort((a, b) => a - b)
    .filter((r) => !local.mine[r] || local.mine[r].choice !== local.questions[r].answer)
    .map((r) => local.questions[r].id);
}

const unitTitle = (id) => (unitById[id] ? `${unitById[id].icon} ${unitById[id][lang] || unitById[id].en}` : id);
const meterRows = (rows, label) => rows.map(([k, [n, c]]) => `
    <div class="meter"><span class="m-label" title="${esc(label(k))}">${esc(label(k))}</span><span class="m-bar"><i style="--w:${pct(c, n)}%" class="${pct(c, n) >= 75 ? 'hi' : pct(c, n) < 50 ? 'lo' : ''}"></i></span><span class="m-val">${c}/${n}</span></div>`).join('');

// The trend over the last ten quizzes on this device, with accuracy by unit behind a tap.
function historyHTML(cls = '') {
  const list = readList('pp-history').filter((h) => h && h.n > 0).slice(-10);
  if (!list.length) return '';
  const accs = list.map((h) => pct(h.c, h.n));
  const avg = Math.round(accs.reduce((a, b) => a + b, 0) / accs.length);
  const note = t('lastQuizzes', list.length, avg, Math.max(...accs));
  const units = {};
  list.forEach((h) => Object.entries(h.u || {}).forEach(([u, [n, c]]) => {
    units[u] = units[u] || [0, 0];
    units[u][0] += n;
    units[u][1] += c;
  }));
  const rows = UNITS.filter((u) => units[u.id]).map((u) => [u.id, units[u.id]]);
  return `
    <section class="card ${cls}">
      <h2>📈 ${t('progress')}</h2>
      <div class="trend" role="img" aria-label="${esc(note)}">${accs.map((a) => `<i style="--h:${Math.max(4, a)}%" class="${a >= 75 ? 'hi' : a < 50 ? 'lo' : ''}"><span>${a}</span></i>`).join('')}</div>
      <p class="trend-note">${note}</p>
      ${rows.length ? `<details class="more"><summary>${t('byUnitRecent')}</summary><div class="meters">${meterRows(rows, unitTitle)}</div></details>` : ''}
    </section>`;
}

function assessmentHTML(rep, canRevise = false) {
  const acc = pct(rep.correct, rep.total);
  const [, rk, icon] = rankFor(acc);
  const secRows = Object.entries(rep.bySection).sort((a, b) => pct(b[1][1], b[1][0]) - pct(a[1][1], a[1][0]));
  const byUnit = groupByUnit(rep.bySection);
  const unitRows = UNITS.filter((u) => byUnit[u.id]).map((u) => [u.id, byUnit[u.id]]);
  const strong = secRows.filter(([, [n, c]]) => n >= 2 && pct(c, n) >= 75).slice(0, 5).map(([k]) => sectionTitle(k));
  // The five weakest sections, the ones with most questions missed first among equals.
  const weak = secRows.filter(([, [n, c]]) => pct(c, n) < 50)
    .sort((a, b) => pct(a[1][1], a[1][0]) - pct(b[1][1], b[1][0]) || (b[1][0] - b[1][1]) - (a[1][0] - a[1][1])).slice(0, 5);
  const weakPills = weak.map(([k, [n, c]]) => (canRevise
    ? `<button class="pill" data-action="revise" data-id="${esc(k)}">${esc(sectionTitle(k))} · ${c}/${n}</button>`
    : `<span class="pill">${esc(sectionTitle(k))} · ${c}/${n}</span>`)).join('');
  const ringLen = Math.max(0, Math.min(100, acc));
  return `
    <section class="card assess">
      <div class="assess-top">
        <div class="ring"><svg viewBox="0 0 36 36"><circle class="track" cx="18" cy="18" r="16"/><circle class="fill" cx="18" cy="18" r="16" pathLength="100" style="--len:${ringLen}"/></svg><span><b>${acc}%</b><small>${t('accuracy')}</small></span></div>
        <div class="rank">
          <div class="rank-icon">${icon}</div>
          <h1>${esc(T[lang].rankTitle[rk])}</h1>
          <p class="muted">${esc(T[lang].rankNote[rk])}</p>
        </div>
      </div>
      <div class="kpis">
        <div><b>${fmtScore(rep.score)}</b><span>${t('score')}</span></div>
        <div class="ok"><b>${rep.correct}</b><span>${t('correctN')}</span></div>
        <div class="bad"><b>${rep.wrong}</b><span>${t('wrongN')}</span></div>
        <div><b>${rep.skipped}</b><span>${t('skippedN')}</span></div>
        <div><b>${(rep.avgMs / 1000).toFixed(1)}s</b><span>${t('avgTime')}</span></div>
        <div><b>${rep.bestStreak}</b><span>${t('bestStreak')}</span></div>
      </div>
      <h3>${t('byUnit')}</h3>
      <div class="meters">${meterRows(unitRows, unitTitle)}</div>
      <h3>${t('byLevel')}</h3>
      <div class="meters">${meterRows(LEVELS.filter((l) => rep.byLevel[l]).map((l) => [l, rep.byLevel[l]]), (k) => t(`level_${k}`))}</div>
      <div class="sw">
        <div class="sw-box good"><h4>💪 ${t('strong')}</h4><p>${strong.length ? strong.map(esc).join(' · ') : t('noStrong')}</p></div>
        <div class="sw-box bad"><h4>📚 ${t('weak')}</h4>${weak.length ? `<div class="chips">${weakPills}</div>${canRevise ? `<p class="small">${t('weakTap')}</p>` : ''}` : '<p>—</p>'}</div>
      </div>
      <details class="more"><summary>${t('allSections', secRows.length)}</summary><div class="meters">${meterRows(secRows, (k) => sectionTitle(k))}</div></details>
    </section>`;
}

// ---------- answer sheet ----------
function sheetHTML(v) {
  const sl = ui.sheetLang || lang;
  const all = Object.keys(local.questions).map(Number).sort((a, b) => a - b);
  const stateOf = (r) => (!local.mine[r] ? 'skipped' : local.mine[r].choice === local.questions[r].answer ? 'right' : 'wrong');
  const inFilter = (f, r) => f === 'all' || (f === 'saved' ? marks.has(local.questions[r].id) : stateOf(r) === f);
  const rounds = all.filter((r) => inFilter(ui.sheetFilter, r));
  const items = rounds.map((r) => {
    const q = local.questions[r];
    const mine = local.mine[r];
    const langs = sl === 'both' ? ['en', 'hi'] : [sl];
    const blocks = langs.map((l) => {
      const b = q[l] || q.en;
      return `
        <div class="sh-lang" lang="${l === 'hi' ? 'hi' : 'en'}">
          <p class="sh-q">${esc(b.q)}</p>
          <ol class="sh-opts">${b.options.map((o, i) => `<li class="${i === q.answer ? 'right' : mine && mine.choice === i ? 'wrong' : ''}"><b>${LETTERS[i]}.</b> ${esc(o)} ${i === q.answer ? '✓' : mine && mine.choice === i ? '✗' : ''}</li>`).join('')}</ol>
          <p class="sh-expl"><b>${T[l].why}:</b> ${esc(b.explanation)}</p>
          <ul class="sh-notes">${b.options.map((o, i) => `<li><b>${LETTERS[i]}:</b> ${esc(b.notes[i])}</li>`).join('')}</ul>
        </div>`;
    }).join('');
    const sec = sectionOf(q.id);
    const hl = sl === 'hi' ? 'hi' : 'en';
    return `
      <article class="sh-item" id="sh-${r}">
        <header><b>${r}.</b> <span>${esc(sectionTitle(sec, hl))}</span> <span class="q-level lvl-${q.level}">${esc(T[hl][`level_${q.level}`])}</span>
          <span class="no-print">${markButton(q.id)}</span>
          <span class="sh-ans">${t('rightAnswer')}: <b>${LETTERS[q.answer]}</b> · ${t('yourAnswerWas')}: <b>${mine ? LETTERS[mine.choice] : t('notAnswered')}</b></span></header>
        ${blocks}
        <p class="refs">📚 ${refsText(q.refs, hl)}</p>
      </article>`;
  }).join('');
  const langBtn = (l, label) => `<button class="seg ${sl === l ? 'on' : ''}" data-action="sheet-lang" data-l="${l}">${label}</button>`;
  const filterBtn = (f, label) => `<button class="seg ${ui.sheetFilter === f ? 'on' : ''}" data-action="sheet-filter" data-f="${f}">${label} (${all.filter((r) => inFilter(f, r)).length})</button>`;
  const jump = rounds.map((r) => `<button class="${{ right: 'ok', wrong: 'bad' }[stateOf(r)] || ''}" data-action="jump" data-r="${r}" aria-label="${t('qOf', r, all.length)}">${r}</button>`).join('');
  return `
    <section class="card sheet ${prefs.notes ? '' : 'brief'}">
      <div class="sheet-head">
        <h2 class="ornate">📄 ${t('answerSheet')}</h2>
        <div class="segs segs-3 no-print">${langBtn('en', 'English')}${langBtn('hi', 'हिन्दी')}${langBtn('both', t('both'))}</div>
        <div class="segs segs-4 no-print">${filterBtn('all', t('fAll'))}${filterBtn('wrong', t('fWrong'))}${filterBtn('skipped', t('fSkipped'))}${filterBtn('saved', t('fSaved'))}</div>
        <div class="row no-print">
          <button class="btn primary" data-action="print">🖨️ ${t('print')}</button>
          <button class="btn" data-action="sheet-notes">🔎 ${prefs.notes ? t('hideNotes') : t('showNotes')}</button>
          <button class="btn" data-action="sheet-close">${t('close')}</button>
        </div>
        ${rounds.length > 5 ? `<div class="jump no-print">${jump}</div>` : ''}
      </div>
      <p class="print-only sheet-title">GS HOUSE — ${t('answerSheet')} · ${esc(me.name)} · ${new Date().toLocaleDateString('en-IN')}</p>
      ${items || `<p class="muted">${all.length ? t('noneInFilter') : t('noneYet')}</p>`}
    </section>`;
}

// ---------- live regions ----------
function updateRegions(v, amHost) {
  if (v.phase === 'lobby' && !ui.sheet) {
    const n = v.players.filter((p) => p.connected).length;
    setText('player-count', `${n}/${CONFIG.maxPlayers}`);
    setHTML('lobby-players', v.players.map((p) => `
      <li class="player" style="--c:${p.color}"><span class="avatar">${esc(initial(p.name))}</span><span class="pname">${esc(p.name)}</span>
      ${p.id === v.hostId ? `<span class="tag">${t('host')}</span>` : p.id === me.id ? `<span class="tag">${t('you')}</span>` : ''}</li>`).join(''));
    setHTML('setup', setupHTML(v, amHost));
    const st = v.settings;
    const avail = st.sections.reduce((sum, id) => sum + countFor(id, st), 0);
    setHTML('start-area', amHost
      ? `<p class="muted small center">${st.sections.length ? t('available', avail, st.sections.length) : t('pickSection')}</p>
         <button class="btn primary big" data-action="start" ${avail ? '' : 'disabled'}>🪔 ${t('start')}</button>`
      : `<p class="muted center">${t('hostPicks', esc(hostName(v)))}<span class="dots"></span></p>`);
  }
  if (v.phase === 'question' && !ui.sheet) {
    const active = v.players.filter((p) => p.connected);
    setText('answered-count', t('answered', active.filter((p) => p.answered).length, active.length));
    const ranked = [...v.players].sort((a, b) => b.score - a.score || a.timeMs - b.timeMs);
    setHTML('board', ranked.slice(0, 20).map((p, i) => `
      <div class="b-row ${p.id === me.id ? 'me' : ''}" style="--c:${p.color}"><span class="b-rank">${i + 1}</span><span class="b-dot"></span>
      <span class="b-name">${esc(p.name)}${p.answered ? ' ✓' : ''}${p.streak >= 3 ? ` <small>🔥${p.streak}</small>` : ''}</span><span class="b-score">${fmtScore(p.score)}</span></div>`).join(''));
    const mine = local.mine[v.round];
    const doneMe = !!mine || v.locked;
    const last = v.round >= v.total;
    const nextLabel = last ? `🏁 ${t('results')}` : `${t('next')} ➜`;
    // In a room everyone sees how many have answered; the host can move on at any time, and the
    // button turns bright once all have answered.
    const answeredN = active.filter((p) => p.answered).length;
    const everyone = v.locked || (active.length > 0 && answeredN === active.length);
    const status = `<p class="answer-status ${everyone ? 'all' : ''}">${everyone ? `✅ ${t('allAnswered')}` : `⏳ ${t('answered', answeredN, active.length)}`}</p>`;
    let nextHTML;
    if (v.solo) nextHTML = doneMe ? `<button class="btn primary big" data-action="next">${nextLabel}</button>` : '';
    else if (amHost) nextHTML = `${status}<button class="btn big ${everyone ? 'primary' : ''}" data-action="next">${nextLabel}</button>`;
    else nextHTML = doneMe ? `${status}<p class="muted center">${t('waitNext', esc(hostName(v)))}<span class="dots"></span></p>` : '';
    setHTML('next-area', nextHTML);
  }
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el && el._html !== html) { el._html = html; el.innerHTML = html; }
}
function setText(id, text) {
  const el = document.getElementById(id);
  if (el && el.textContent !== text) el.textContent = text;
}

// Countdown ring, driven by the local clock between host updates.
function frame() {
  const v = ui.view;
  if (ui.screen === 'game' && v && v.phase === 'question' && v.settings.timer && !ui.sheet) {
    const left = ui.endsAt ? Math.max(0, ui.endsAt - Date.now()) : 0;
    const secs = Math.ceil(left / 1000);
    const el = document.querySelector('[data-countdown]');
    if (el) el.textContent = v.locked ? '✓' : String(secs);
    const fill = document.getElementById('timer-fill');
    if (fill) fill.style.strokeDashoffset = String(100 - (left / (v.settings.timer * 1000)) * 100);
    const timer = document.getElementById('timer');
    if (timer) timer.classList.toggle('hurry', !v.locked && secs <= 5);
    if (!v.locked && !local.mine[v.round] && secs <= 5 && secs >= 1 && secs !== ui.lastTick) { ui.lastTick = secs; sfx.tick(); }
  }
  requestAnimationFrame(frame);
}

// ---------- home and other screens ----------
function renderHome() {
  const typed = ui.screen === 'home' && $('#name') ? $('#name').value : me.name; // keep a name being typed across a redraw
  setScreen('home');
  const invited = normalizeCode(new URLSearchParams(location.search).get('room'));
  const total = Object.values(bankIndex.sections).reduce((sum, c) => sum + c.total, 0);
  const nameField = `
    <label class="field" id="name-field"><span>${t('yourName')}</span>
      <input id="name" maxlength="16" autocomplete="nickname" placeholder="${t('namePh')}" value="${esc(typed)}" enterkeyhint="go">
    </label>`;
  const actions = invited
    ? `<form class="stack" data-form="join">
         <p class="eyebrow center">${t('invited')}</p>
         <div class="big-code center">${esc(invited)}</div>
         <input type="hidden" name="code" value="${esc(invited)}">
         ${nameField}
         <button class="btn primary big">${t('joinGame')}</button>
       </form>
       <button class="btn link" data-action="clear-invite">${t('createOwn')}</button>`
    : `<form class="stack" data-form="solo">
         ${nameField}
         <button class="btn primary big">🪔 ${t('playSolo')}</button>
         <button class="btn big" type="button" data-action="create">👥 ${t('createRoom')}</button>
       </form>
       <div class="divider">${t('orJoin')}</div>
       <form class="join-row" data-form="join">
         <label class="field" id="code-field"><span>${t('roomCode')}</span>
           <input name="code" class="code-input" maxlength="4" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="ABCD" enterkeyhint="go">
         </label>
         <button class="btn">${t('join')}</button>
       </form>`;
  app.innerHTML = `
    <div class="home-top"><button class="lang-toggle" data-action="lang" aria-label="Change language"><span class="${lang === 'en' ? 'on' : ''}">English</span><span class="${lang === 'hi' ? 'on' : ''}">हिन्दी</span></button>${menuHTML()}</div>
    <section class="hero">
      <h1 class="title" aria-label="GS HOUSE">${LOGO_MARK}${LOGO_WORD}</h1>
      <p class="tagline">${t('tagline')}</p>
      <p class="stats">${t('stats', SECTIONS.length, total)}</p>
    </section>
    <div id="install" class="install-area">${installHTML()}</div>
    <section class="card stack">${actions}</section>
    ${invited ? '' : `
    <section class="card book-entry">
      <div class="book-entry-head"><span class="book-emoji">📚</span><div><h2>${t('bookCardTitle')}</h2><p class="muted small">${t('bookCardSub')}</p></div></div>
      <button class="btn big" data-action="book">${t('bookOpen')} ▶</button>
    </section>`}
    ${historyHTML()}`;
}

function showBusy(message) {
  setScreen('busy');
  app.innerHTML = `<div class="screen-msg"><div class="spinner"></div><p>${esc(message)}</p><button class="btn link" data-action="home">${t('cancel')}</button></div>`;
}

function showError(message, emoji = '🪷') {
  setScreen('error');
  app.innerHTML = `<div class="screen-msg"><div class="emoji">${emoji}</div><p>${esc(message)}</p><button class="btn primary" data-action="home">${t('backHome')}</button></div>`;
}

function enterGame() {
  setScreen('game');
  keepAwake();
}

// =====================================================================
// Book companion: notes and chapter quizzes in the topic order of a printed book
// =====================================================================
// data/book/book.json lists the book's topics; a topic that is ready has chapters, and each chapter
// has a notes file (data/book/<id>.txt, English and Hindi) and a "pool": the questions of the bank
// that belong to it, chosen by section and topic path. Screens are routes: "book" (all topics),
// "book/<topic>" (its chapters) and "book/<topic>/<chapter>" (the notes).
const book = { data: null, notes: {}, route: '' };
const bookProgress = (() => {
  try { return JSON.parse(store.get('localStorage', 'pp-book') || '{}') || {}; } catch { return {}; }
})();
function saveBookProgress(id, patch) {
  bookProgress[id] = { ...(bookProgress[id] || {}), ...patch };
  store.set('localStorage', 'pp-book', JSON.stringify(bookProgress));
}
const bookTopic = (id) => book.data.units.flatMap((u) => u.topics).find((x) => x.id === id);
const bookName = (x) => esc(x[lang] || x.en);
const SPINNER = '<div class="screen-msg"><div class="spinner"></div></div>';

// A tap opens a route and adds a step to the browser history, so the phone's Back button works.
function openBook(route) {
  history.pushState({ book: route }, '', `#${route}`);
  showBook(route);
}

async function showBook(route, keepScroll = false) {
  book.route = route;
  setScreen('book');
  if (!book.data) {
    app.innerHTML = SPINNER;
    try {
      const res = await fetch('data/book/book.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error('book.json');
      book.data = await res.json();
    } catch { showError(t('broken')); return; }
    if (book.route !== route || ui.screen !== 'book') return;
  }
  // "book/<topic>/print" is the printable page of all its notes; a fourth part picks the language.
  const [, topicId, chapterId, extra] = route.split('/');
  const topic = topicId ? bookTopic(topicId) : null;
  if (topic && topic.chapters && chapterId === 'print') { await showBookPrint(topic, extra, keepScroll); return; }
  const chapter = topic && topic.chapters && chapterId ? topic.chapters.find((c) => c.id === chapterId) : null;
  if (chapter) { await showChapter(topic, chapter, keepScroll); return; }
  app.innerHTML = topic && topic.chapters ? bookTopicHTML(topic) : bookIndexHTML();
  if (!keepScroll) window.scrollTo(0, 0);
}

function bookBar(backRoute, label) {
  const back = backRoute
    ? `<button class="chip back" data-action="book-go" data-route="${backRoute}">‹ ${label}</button>`
    : `<button class="chip back" data-action="book-home">‹ ${t('home')}</button>`;
  return `
    <header class="topbar">
      ${back}
      <div class="topbar-right">
        <button class="lang-toggle" data-action="lang" aria-label="Change language"><span class="${lang === 'en' ? 'on' : ''}">EN</span><span class="${lang === 'hi' ? 'on' : ''}">हिं</span></button>
        ${menuHTML()}
      </div>
    </header>`;
}

// Questions in the bank for a topic that has no notes yet (TGT and PGT levels).
const practiceCount = (topic) => (topic.practice || []).reduce((n, id) => {
  const c = bankIndex.sections[id];
  return n + (c ? (c.TGT || 0) + (c.PGT || 0) : 0);
}, 0);

function bookIndexHTML() {
  const b = book.data;
  const row = (x) => {
    const head = `<span class="topic-icon">${x.icon}</span><span><span class="topic-name">${bookName(x)}</span><span class="topic-meta">${t('bookPages', esc(x.pages))}</span></span>`;
    if (x.chapters) {
      const read = x.chapters.filter((c) => (bookProgress[c.id] || {}).read).length;
      return `<button class="topic ready" data-action="book-go" data-route="book/${x.id}">${head}<span class="badge go">${t('notesReady')} ▶</span>
        <span class="topic-more">${t('readN', read, x.chapters.length)}</span></button>`;
    }
    const n = practiceCount(x);
    return `<div class="topic soon">${head}<span class="badge">${t('comingSoon')}</span>
      ${n ? `<button class="link topic-more" data-action="book-practice" data-id="${x.id}">${t('practiseBank', n)} ▶</button>` : ''}</div>`;
  };
  return `
    ${bookBar('')}
    <section class="hero book-hero">
      <div class="book-emoji">📚</div>
      <h1 class="book-title">${bookName(b.title)}</h1>
      <p class="tagline">${bookName(b.subtitle)}</p>
    </section>
    ${b.units.map((u) => `
      <section class="card">
        <h2>${bookName(u)}</h2>
        <div class="topics">${u.topics.map(row).join('')}</div>
      </section>`).join('')}
    <p class="muted small center">${bookName(b.about)}</p>`;
}

function bookTopicHTML(topic) {
  const list = topic.chapters;
  const read = list.filter((c) => (bookProgress[c.id] || {}).read).length;
  const rows = list.map((c, i) => {
    const p = bookProgress[c.id] || {};
    return `
      <article class="chapter ${p.read ? 'done' : ''}">
        <div class="ch-num">${p.read ? '✓' : i + 1}</div>
        <div>
          <h3>${bookName(c)}</h3>
          <p class="muted small">${t('bookPages', esc(c.pages))}${p.best != null ? ` · 🎯 ${t('best', p.best)}` : ''}</p>
          <div class="ch-actions">
            <button class="btn" data-action="book-go" data-route="book/${topic.id}/${c.id}">📖 ${t('readNotes')}</button>
            <button class="btn" data-action="book-quiz" data-topic="${topic.id}" data-id="${c.id}">🎯 ${t('quiz')}</button>
          </div>
        </div>
      </article>`;
  }).join('');
  const test = bookProgress[`${topic.id}-test`] || {};
  return `
    ${bookBar('book', t('bookShort'))}
    <section class="card">
      <p class="eyebrow center">${t('bookPages', esc(topic.pages))}</p>
      <h2 class="ornate">${topic.icon} ${bookName(topic)}</h2>
      <div class="meter"><span class="m-label">${t('readN', read, list.length)}</span><span class="m-bar"><i style="--w:${pct(read, list.length)}%" class="hi"></i></span><span class="m-val">${pct(read, list.length)}%</span></div>
      <div class="chapters">${rows}</div>
      <div class="stack">
        <button class="btn primary big" data-action="book-quiz" data-topic="${topic.id}" data-id="">🏁 ${t('fullTest', 30)}${test.best != null ? ` · ${t('best', test.best)}` : ''}</button>
        <button class="btn big" data-action="book-go" data-route="book/${topic.id}/print">📄 ${t('notesPdf')}</button>
      </div>
      <p class="refs book-foot">📚 <b>${t('bookRefLine')}:</b> ${refsText([{ book: 'tgt-pgt-gk', page: topic.pages }])}</p>
    </section>`;
}

// Notes are plain text with a few marks, one per line:
//   # title      ## heading      > opening line      - point      | a | b |  table row (first row = header)
//   ~ year :: event  (timeline)      ? question :: answer  (tap-to-reveal card)
//   ! kind | title   starts a box (remember, trick, exam, recap); its lines run until a blank line
// Inside a line, **bold** and ==highlight== work.
function parseNotes(text) {
  const blocks = [];
  let box = null;
  let gap = true; // a blank line ends the running table, list, timeline or card group
  const target = () => (box ? box.items : blocks);
  const group = (type, item) => {
    const list = target();
    const prev = list[list.length - 1];
    if (!gap && prev && prev.type === type) prev.items.push(item); else list.push({ type, items: [item] });
    gap = false;
  };
  const cells = (s, sep) => s.split(sep).map((c) => c.trim());
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) { box = null; gap = true; continue; }
    const start = line.match(/^!\s*(\w+)\s*\|\s*(.+)$/);
    if (start) { box = { type: 'box', kind: start[1], title: start[2], items: [] }; blocks.push(box); continue; }
    if (line.startsWith('## ')) { box = null; blocks.push({ type: 'h', text: line.slice(3) }); continue; }
    if (line.startsWith('# ')) { blocks.push({ type: 'title', text: line.slice(2) }); continue; }
    if (line.startsWith('> ')) target().push({ type: 'lead', text: line.slice(2) });
    else if (line.startsWith('- ')) group('list', line.slice(2));
    else if (line.startsWith('|')) group('table', cells(line.replace(/^\||\|$/g, ''), '|'));
    else if (line.startsWith('~ ')) group('time', cells(line.slice(2), '::'));
    else if (line.startsWith('? ')) group('cards', cells(line.slice(2), '::'));
    else target().push({ type: 'p', text: line });
  }
  return blocks;
}

// `==text==` in the notes files once drew a highlighter stroke; the owner asked for it to go, so it is plain text now.
const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/==(.+?)==/g, '$1');
const BOX_ICON = { remember: '📌', trick: '🧠', exam: '🔥', recap: '⚡' };
function notesHTML(blocks, open = false) {
  return blocks.map((b) => {
    switch (b.type) {
      case 'lead': return `<p class="nb-lead">${fmt(b.text)}</p>`;
      case 'h': return `<h2 class="nb-h">${fmt(b.text)}</h2>`;
      case 'p': return `<p>${fmt(b.text)}</p>`;
      case 'list': return `<ul class="nb-list">${b.items.map((i) => `<li>${fmt(i)}</li>`).join('')}</ul>`;
      case 'table': {
        const [head, ...rows] = b.items;
        return `<div class="nb-table ${head.length > 3 ? 'wide' : ''}"><table><thead><tr>${head.map((c) => `<th>${fmt(c)}</th>`).join('')}</tr></thead>
          <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${fmt(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      }
      case 'time': return `<ol class="nb-time">${b.items.map(([when, what]) => `<li><b>${fmt(when)}</b><span>${fmt(what || '')}</span></li>`).join('')}</ol>`;
      case 'cards': return `<div class="nb-cards">${b.items.map(([q, a]) => `<details class="nb-card" ${open ? 'open' : ''}><summary>${fmt(q)}</summary><p>${fmt(a || '')}</p></details>`).join('')}</div>`;
      case 'box': return `<aside class="nb-box nb-${esc(b.kind)}"><h3>${BOX_ICON[b.kind] || '📌'} ${fmt(b.title)}</h3>${notesHTML(b.items, open)}</aside>`;
      default: return '';
    }
  }).join('');
}

// Reads and parses the notes of one chapter (both languages); kept in memory once read.
async function loadNotes(id) {
  if (!book.notes[id]) {
    const res = await fetch(`data/book/${id}.txt`, { cache: 'no-cache' });
    if (!res.ok) throw new Error(id);
    const parts = (await res.text()).split(/^@(en|hi)\s*$/m);     // ['', 'en', text, 'hi', text]
    const notes = {};
    for (let i = 1; i < parts.length; i += 2) notes[parts[i]] = parseNotes(parts[i + 1]);
    book.notes[id] = notes;
  }
  return book.notes[id];
}

// All the notes of a topic on one page, laid out for paper: the browser's "Save as PDF" turns it
// into an offline copy. These are GS House's own notes, not the book.
async function showBookPrint(topic, wanted, keepScroll) {
  const route = book.route;
  if (!keepScroll) app.innerHTML = SPINNER;
  let all;
  try { all = await Promise.all(topic.chapters.map((c) => loadNotes(c.id))); } catch { showError(t('broken')); return; }
  if (book.route !== route || ui.screen !== 'book') return;
  const mode = ['en', 'hi', 'both'].includes(wanted) ? wanted : lang;
  const langs = mode === 'both' ? ['en', 'hi'] : [mode];
  const name = (x, l) => esc(x[l] || x.en);
  const chapters = topic.chapters.map((c, i) => langs.map((l) => {
    const blocks = all[i][l] || all[i].en || [];
    const title = (blocks.find((b) => b.type === 'title') || {}).text || c[l] || c.en;
    return `
      <section class="print-chapter" lang="${l === 'hi' ? 'hi' : 'en'}">
        <p class="eyebrow">${T[l].chapterOf(i + 1, topic.chapters.length)} · ${T[l].bookPages(esc(c.pages))}</p>
        <h1 class="reader-title">${fmt(title)}</h1>
        ${notesHTML(blocks, true)}
      </section>`;
  }).join('')).join('');
  const seg = (l, label) => `<button class="seg ${mode === l ? 'on' : ''}" data-action="print-lang" data-route="book/${topic.id}/print/${l}">${label}</button>`;
  app.innerHTML = `
    ${bookBar(`book/${topic.id}`, t('allChapters'))}
    <section class="card stack no-print">
      <h2>📄 ${t('pdfTitle')}</h2>
      <p class="muted small">${t('pdfHow')}</p>
      <div class="segs segs-3">${seg('en', 'English')}${seg('hi', 'हिन्दी')}${seg('both', t('both'))}</div>
      <button class="btn primary big" data-action="print" data-title="GS House - ${esc(topic.en)} - notes">🖨️ ${t('print')}</button>
    </section>
    <article class="card reader print-book" lang="${mode === 'hi' ? 'hi' : 'en'}">
      <header class="print-cover">
        <p class="eyebrow">GS HOUSE · ${langs.map((l) => name(book.data.title, l)).join(' · ')}</p>
        <h1 class="reader-title">${topic.icon} ${langs.map((l) => name(topic, l)).join(' · ')}</h1>
        <p class="muted small">${langs.map((l) => T[l].pdfMade).join(' ')}</p>
      </header>
      ${chapters}
    </article>`;
  if (!keepScroll) window.scrollTo(0, 0);
}

async function showChapter(topic, chapter, keepScroll) {
  if (!book.notes[chapter.id]) {
    app.innerHTML = SPINNER;
    try { await loadNotes(chapter.id); } catch { showError(t('broken')); return; }
    if (book.route !== `book/${topic.id}/${chapter.id}` || ui.screen !== 'book') return;
  }
  const notes = book.notes[chapter.id];
  const blocks = notes[lang] || notes.en || [];
  const at = topic.chapters.indexOf(chapter);
  const prev = topic.chapters[at - 1];
  const next = topic.chapters[at + 1];
  const title = (blocks.find((b) => b.type === 'title') || {}).text || chapter[lang] || chapter.en;
  const words = JSON.stringify(blocks).split(/\s+/).length;
  const go = (c, label) => (c ? `<button class="btn" data-action="book-go" data-route="book/${topic.id}/${c.id}">${label}</button>` : '');
  app.innerHTML = `
    ${bookBar(`book/${topic.id}`, t('allChapters'))}
    <article class="card reader" lang="${lang === 'hi' ? 'hi' : 'en'}">
      <p class="eyebrow">${t('chapterOf', at + 1, topic.chapters.length)} · ${t('bookPages', esc(chapter.pages))} · ${t('minRead', Math.max(1, Math.round(words / 170)))}</p>
      <h1 class="reader-title">${fmt(title)}</h1>
      ${notesHTML(blocks)}
      <p class="refs">📚 <b>${t('bookRefLine')}:</b> ${refsText([{ book: 'tgt-pgt-gk', page: chapter.pages }])}</p>
      <p class="reader-end no-print" id="reader-end">🎉 ${t('chapterDone')}</p>
      <div class="reader-nav no-print">${go(prev, `‹ ${t('prevCh')}`)}${go(next, `${t('nextCh')} ›`)}</div>
      <button class="btn reader-pdf no-print" data-action="print" data-title="GS House - ${esc(chapter.en)}">🖨️ ${t('chapterPdf')}</button>
    </article>
    <div class="sticky-bar reader-bar">
      <button class="btn primary" data-action="book-quiz" data-topic="${topic.id}" data-id="${chapter.id}">🎯 ${t('takeQuiz')}</button>
    </div>`;
  if (!keepScroll) window.scrollTo(0, 0);
  // The chapter counts as read once its last line has been on screen.
  const end = document.getElementById('reader-end');
  if (end && 'IntersectionObserver' in window) {
    const seen = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { saveBookProgress(chapter.id, { read: 1 }); seen.disconnect(); }
    });
    seen.observe(end);
  }
}

// The questions of a chapter: every question whose topic path matches the chapter's pool. Only TGT
// and PGT questions are used, unless the chapter says `"levels": "all"` (topics that the bank
// covers only at the Higher level, such as teaching and research aptitude).
async function chapterQuestions(chapter) {
  await loadBank([...new Set(chapter.pool.map((p) => p[0]))]);
  return chapter.pool.flatMap(([sec, p1, p2]) => (host.bank[sec] || [])
    .filter((q) => (chapter.levels === 'all' || q.level !== 'Higher') && q.en.path[1] === p1 && (!p2 || p2.includes(q.en.path[2])))
    .map((q) => q.id));
}

// A solo quiz on one chapter (10 questions) or on the whole topic (30, spread over its chapters),
// taking questions this device has not seen first.
async function startBookQuiz(topicId, chapterId) {
  const topic = bookTopic(topicId);
  const chapters = chapterId ? topic.chapters.filter((c) => c.id === chapterId) : topic.chapters;
  app.innerHTML = SPINNER;
  const pools = await Promise.all(chapters.map(chapterQuestions));
  const seen = new Set(readList('pp-seen'));
  const queues = shuffle(pools).map((ids) => [...shuffle(ids.filter((id) => !seen.has(id))), ...shuffle(ids.filter((id) => seen.has(id)))])
    .filter((q) => q.length);
  const picked = [];
  const count = chapterId ? 10 : 30;
  for (let i = 0; picked.length < count && queues.some((q) => q.length); i++) {
    const q = queues[i % queues.length];
    if (q.length && !picked.includes(q[0])) picked.push(q[0]);
    q.shift();
  }
  if (!picked.length) { showBook(book.route); toast(t('noQs')); return; }
  setBookQuiz({ topic: topicId, chapter: chapterId || '' });
  startSolo();
  Object.assign(host.state.settings, { timer: 0, negative: 0 });
  handleAction(me.id, { type: 'quick', qids: picked });
}

// Remembers that the running solo quiz came from the book, so that leaving it returns there.
function setBookQuiz(value) {
  ui.bookQuiz = value;
  if (value) store.set('sessionStorage', 'pp-bookquiz', JSON.stringify(value)); else store.del('sessionStorage', 'pp-bookquiz');
}

// ---------- artwork (original) ----------
const DIYA_SVG = `
  <svg class="diya" viewBox="0 0 120 110" aria-hidden="true">
    <g class="flame"><path d="M60 6 C71 22 75 33 67 46 C63 52 57 52 53 46 C45 33 49 22 60 6Z" fill="#ffb627"/><path d="M60 21 C65 30 66 38 62 44 C60 47 59 47 57 44 C54 38 55 30 60 21Z" fill="#fff3b0"/></g>
    <path d="M10 58 Q60 50 110 58 Q103 96 60 100 Q17 96 10 58Z" fill="#c8571b"/>
    <ellipse cx="60" cy="58" rx="50" ry="8" fill="#e98a3c"/>
    <g fill="#ffd27a"><circle cx="30" cy="78" r="3"/><circle cx="45" cy="84" r="3"/><circle cx="60" cy="86" r="3"/><circle cx="75" cy="84" r="3"/><circle cx="90" cy="78" r="3"/></g>
    <path d="M44 68 q5 -6 10 0 M66 68 q5 -6 10 0" fill="none" stroke="#5a1f06" stroke-width="3" stroke-linecap="round"/>
    <path d="M52 74 q8 9 16 0" fill="none" stroke="#5a1f06" stroke-width="3" stroke-linecap="round"/>
  </svg>`;

// The GS HOUSE logo. The mark is a house split into a light and a dark half, with G and S as drawn letters
// and a lamp under the roof. The wordmark is drawn too (no font), with a little house for the O; it takes the
// theme colours. tools/make_icons.py draws the same shapes for the app icons: change both together.
const LOGO_MARK = `<svg class="logo-mark" viewBox="0 0 512 512" aria-hidden="true">
    <path d="M256 40 L44 200 V452 Q44 472 64 472 H256 Z" fill="#fbf3e2"/>
    <path d="M256 40 L468 200 V452 Q468 472 448 472 H256 Z" fill="#7b1e1e"/>
    <path d="M256 40 L468 200 V452 Q468 472 448 472 H64 Q44 472 44 452 V200 Z" fill="none" stroke="#c9972b" stroke-width="16" stroke-linejoin="round"/>
    <path d="M256 92 C280 126 290 142 290 160 A34 34 0 0 1 222 160 C222 142 232 126 256 92 Z" fill="#e07a1f"/>
    <circle cx="256" cy="164" r="13" fill="#fbe7a8"/>
    <path d="M194.4 271.4 A66 66 0 1 0 218 322 H166" fill="none" stroke="#7b1e1e" stroke-width="38" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M388.6 272.5 A33 33 0 1 0 360 322 A33 33 0 1 1 331.4 371.5" fill="none" stroke="#fbf3e2" stroke-width="38" stroke-linecap="round"/>
  </svg>`;
const LOGO_WORD = `<svg class="logo-word" viewBox="-9 -9 618 118" aria-hidden="true">
    <g fill="none" stroke-width="15" stroke-linecap="round" stroke-linejoin="round">
      <g stroke="var(--head)">
        <path d="M85.4 14.6 A50 50 0 1 0 100 50 H60"/>
        <path d="M171.65 12.5 A25 25 0 1 0 150 50 A25 25 0 1 1 128.35 87.5"/>
      </g>
      <g stroke="var(--saffron)">
        <path d="M222 0 V100 M282 0 V100 M222 50 H282"/>
        <path d="M304 100 V38 L336 0 L368 38 V100 Z"/>
        <path d="M390 0 V70 A30 30 0 0 0 450 70 V0"/>
        <path d="M521.65 12.5 A25 25 0 1 0 500 50 A25 25 0 1 1 478.35 87.5"/>
        <path d="M600 0 H550 V100 H600 M550 50 H590"/>
      </g>
    </g>
    <circle cx="336" cy="66" r="10" fill="var(--head)"/>
  </svg>`;

// ---------- invites ----------
const PUBLIC_URL = 'https://lalitbhardwaj2002.github.io/gs-house/';
const isLocalHost = () => location.protocol === 'file:'
  || ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname) || location.hostname.endsWith('.localhost');
const joinBase = () => (isLocalHost() ? PUBLIC_URL : `${location.origin}${location.pathname}`);
const inviteUrl = (code) => `${joinBase()}?room=${code}`;
const prettyUrl = () => joinBase().replace(/^https?:\/\//, '').replace(/index\.html$/, '').replace(/\/$/, '');
function setRoomInUrl(code) { history.replaceState(null, '', `${location.pathname}?room=${code}`); }

function drawQr(code) {
  const el = document.getElementById('qr');
  if (!el || typeof qrcode !== 'function') return;
  try {
    const qr = qrcode(0, 'M');
    qr.addData(inviteUrl(code));
    qr.make();
    el.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 0, scalable: true, alt: `QR code for room ${code}` });
    el.hidden = false;
  } catch (e) { console.warn('QR failed', e); }
}

async function copyInvite() {
  const url = inviteUrl(ui.view.code);
  try { await navigator.clipboard.writeText(url); toast(t('copied')); } catch { window.prompt('Copy this invite link:', url); }
}

// ---------- install as an app ----------
let installPrompt = null;
const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIos = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
function installHTML() {
  if (isStandalone()) return '';
  if (installPrompt) return `<button class="btn install" data-action="install">${t('install')}</button>`;
  if (isIos()) return `<p class="install-hint">${t('iosHint')}</p>`;
  return '';
}
function renderInstall() { const el = document.getElementById('install'); if (el) el.innerHTML = installHTML(); }
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installPrompt = e; renderInstall(); });
window.addEventListener('appinstalled', () => { installPrompt = null; renderInstall(); toast(t('installed')); });
if ('serviceWorker' in navigator && window.isSecureContext && location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch((e) => console.warn('Service worker failed', e)));
}

// ---------- events ----------
function settingsFrom(v) { return { ...v.settings, sections: [...v.settings.sections] }; }

const actions = {
  create() {
    const name = readName();
    if (!name) return;
    if (typeof Peer === 'undefined') { showError(t('noPeer')); return; }
    openRoom(randomCode());
  },
  pick(btn) {
    const v = ui.view;
    if (!v || v.phase !== 'question' || v.locked || local.mine[v.round]) return;
    const choice = Number(btn.dataset.i);
    const q = local.questions[v.round];
    const ms = Date.now() - (local.shownAt[v.round] || Date.now());
    local.mine[v.round] = { choice, ms };
    saveLocal();
    if (q) {
      if (choice === q.answer) { sfx.right(); buzz(25); } else { sfx.wrong(); buzz([60, 40, 60]); }
      noteAnswer(q.id, choice === q.answer);
    }
    act({ type: 'answer', round: v.round, choice, ms });
    render();
  },
  // EN / हिं change one question; "Both" stays on for the questions that follow until it is turned off.
  qlang(btn) {
    const l = btn.dataset.l;
    if (l === 'both') { setPref('both', true); delete ui.qlang[ui.view.round]; }
    else { if (prefs.both) setPref('both', false); ui.qlang[ui.view.round] = l; }
    refresh();
  },
  lang() { setLang(lang === 'en' ? 'hi' : 'en'); },
  mark(btn) {
    const on = toggleMark(btn.dataset.id);
    btn.classList.toggle('on', on);
    btn.textContent = on ? '★' : '☆';
    btn.setAttribute('aria-pressed', String(on));
    toast(t(on ? 'saved' : 'unsaved'));
  },
  theme() { setPref('theme', isDark() ? 'light' : 'dark'); refresh(); },
  both() { setPref('both', !prefs.both); ui.qlang = {}; refresh(); },
  fs(btn) {
    const at = FS_STEPS.indexOf(prefs.fs) + Number(btn.dataset.d);
    if (at < 0 || at >= FS_STEPS.length) return;
    setPref('fs', FS_STEPS[at]);
    refresh();
  },
  'all-secs'() {
    const st = ui.view.settings;
    const ids = SECTIONS.filter((s) => trackOk(s, st.track) && countFor(s.id, st) > 0).map((s) => s.id);
    act({ type: 'settings', sections: ids.every((id) => st.sections.includes(id)) ? [] : ids });
  },
  'quick-marks': () => act({ type: 'quick', qids: [...marks] }),
  'quick-wrong': () => act({ type: 'quick', qids: [...mistakes] }),
  retry: () => act({ type: 'quick', qids: missedQids() }),
  revise: (btn) => act({ type: 'quick', sections: [btn.dataset.id] }),
  set(btn) {
    const v = ui.view;
    const key = btn.dataset.key;
    const raw = btn.dataset.val;
    const val = ['level', 'track'].includes(key) ? raw : Number(raw);
    act({ type: 'settings', [key]: val });
  },
  'toggle-sec'(el) {
    const st = settingsFrom(ui.view);
    const id = el.dataset.id;
    st.sections = st.sections.includes(id) ? st.sections.filter((x) => x !== id) : [...st.sections, id];
    act({ type: 'settings', sections: st.sections });
  },
  unit(btn) {
    const id = btn.dataset.id;
    if (ui.openUnits.has(id)) ui.openUnits.delete(id); else ui.openUnits.add(id);
    const el = document.getElementById('setup');
    if (el) { el._html = ''; }
    render();
  },
  'unit-all'(btn) {
    const v = ui.view;
    const st = v.settings;
    const ids = SECTIONS.filter((s) => s.unit === btn.dataset.id && trackOk(s, st.track) && countFor(s.id, st) > 0).map((s) => s.id);
    const allOn = ids.every((id) => st.sections.includes(id));
    const next = allOn ? st.sections.filter((id) => !ids.includes(id)) : [...new Set([...st.sections, ...ids])];
    act({ type: 'settings', sections: next });
  },
  start: () => act({ type: 'start' }),
  next: () => act({ type: 'next' }),
  again: () => act({ type: 'again' }),
  sheet() { ui.sheet = true; ui.sheetLang = lang; ui.sheetFilter = 'all'; render(); window.scrollTo(0, 0); },
  'sheet-close'() { ui.sheet = false; render(); },
  'sheet-lang'(btn) { ui.sheetLang = btn.dataset.l; refresh(); },
  'sheet-filter'(btn) { ui.sheetFilter = btn.dataset.f; refresh(); },
  'sheet-notes'() { setPref('notes', !prefs.notes); refresh(); },
  jump(btn) {
    const el = document.getElementById(`sh-${btn.dataset.r}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },
  print(btn) { ui.printTitle = (btn && btn.dataset.title) || ''; window.print(); },
  'print-lang'(btn) {
    const route = btn.dataset.route;
    history.replaceState({ book: route }, '', `#${route}`);
    showBook(route, true);
  },
  copy: copyInvite,
  share() {
    const code = ui.view.code;
    navigator.share({ title: 'GS HOUSE', text: `Join my GS HOUSE GK quiz! Room code ${code}`, url: inviteUrl(code) }).catch(() => {});
  },
  async install() {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice.catch(() => {});
    installPrompt = null;
    renderInstall();
  },
  mute() { sfx.toggle(); refresh(); },
  leave() {
    const msg = !net ? t('leaveSolo') : net.role === 'host' ? (net.solo ? t('leaveSolo') : t('leaveHost')) : t('leaveGuest');
    if (window.confirm(msg)) leaveGame();
  },
  home: () => leaveGame(),
  'leave-now': () => leaveGame(),
  'clear-invite'() { history.replaceState(null, '', location.pathname); renderHome(); },
  // ----- book companion -----
  book: () => openBook('book'),
  'book-go': (btn) => openBook(btn.dataset.route),
  'book-home'() { history.pushState(null, '', location.pathname); renderHome(); },
  'book-quiz': (btn) => startBookQuiz(btn.dataset.topic, btn.dataset.id),
  'book-again'() {
    const bq = ui.bookQuiz;
    leaveGame('none');
    setScreen('book');
    startBookQuiz(bq.topic, bq.chapter);
  },
  // A topic whose notes are not written yet: open the quiz setup with its sections of the bank ticked.
  'book-practice'(btn) {
    const topic = bookTopic(btn.dataset.id);
    const secs = (topic.practice || []).filter((id) => sectionById[id]);
    if (!secs.length) return;
    setBookQuiz({ topic: topic.id, chapter: '', practice: true });
    ui.openUnits = new Set(secs.map((id) => sectionById[id].unit));
    startSolo();
    handleAction(me.id, { type: 'settings', track: 'tgt', sections: secs });
  },
};

function readName() {
  const input = $('#name');
  const name = cleanName(input && input.value);
  if (!name) { flagInvalid('name-field', input); return ''; }
  me.name = name;
  store.set('localStorage', 'pp-name', name);
  sfx.unlock();
  return name;
}

document.addEventListener('click', (e) => {
  const openMenu = document.querySelector('.menu[open]');
  if (openMenu && !e.target.closest('.menu')) { openMenu.open = false; ui.menuOpen = false; } // a tap outside closes the menu
  const el = e.target.closest('[data-action]');
  if (!el || el.disabled || !actions[el.dataset.action]) return;
  if (el.tagName === 'INPUT') return; // checkboxes are handled on change
  actions[el.dataset.action](el, e);
});

// Remember which fold-out parts are open: the settings menu across redraws, the option notes for good.
document.addEventListener('toggle', (e) => {
  const el = e.target;
  if (!el || !el.dataset) return;
  if (el.dataset.keep === 'menu') ui.menuOpen = el.open;
  if (el.dataset.keep === 'notes' && prefs.notes !== el.open) setPref('notes', el.open);
}, true);

// Keyboard on a computer: A–D or 1–4 answer the question, Enter (or N, →) goes to the next one.
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
  const v = ui.view;
  if (ui.screen !== 'game' || !v || ui.sheet || v.phase !== 'question') return;
  const on = e.target instanceof Element ? e.target : null;
  if (on && on.closest('input, textarea, select')) return;
  const key = e.key.toLowerCase();
  const choice = key.length === 1 ? Math.max('abcd'.indexOf(key), '1234'.indexOf(key)) : -1;
  if (choice >= 0) {
    const btn = document.querySelector(`.opt[data-i="${choice}"]`);
    if (btn && !btn.disabled) { e.preventDefault(); actions.pick(btn); }
    return;
  }
  if (key === 'enter' || key === 'n' || key === 'arrowright') {
    if (key === 'enter' && on && on.closest('button, a, summary')) return; // the focused control acts on Enter itself
    // Only once this player has answered (or the question is closed), so a stray key cannot skip a question.
    const ready = local.mine[v.round] || v.locked;
    if (ready && document.querySelector('#next-area [data-action="next"]')) { e.preventDefault(); actions.next(); }
  }
});
document.addEventListener('change', (e) => {
  const el = e.target.closest('input[data-action]');
  if (el && actions[el.dataset.action]) actions[el.dataset.action](el, e);
});

document.addEventListener('submit', (e) => {
  const form = e.target.closest('[data-form]');
  if (!form) return;
  e.preventDefault();
  if (!readName()) return;
  if (form.dataset.form === 'solo') { startSolo(); return; }
  const codeInput = form.querySelector('[name="code"]');
  const code = normalizeCode(codeInput.value);
  if (code.length !== 4) { flagInvalid('code-field', codeInput); return; }
  if (typeof Peer === 'undefined') { showError(t('noPeer')); return; }
  joinRoom(code);
});

document.addEventListener('input', (e) => {
  if (e.target.classList.contains('code-input')) e.target.value = normalizeCode(e.target.value);
});

function flagInvalid(fieldId, input) {
  const field = document.getElementById(fieldId);
  if (field) { field.classList.remove('invalid'); void field.offsetWidth; field.classList.add('invalid'); }
  if (input) input.focus();
}

// Printing, which is also how a PDF is saved: the recall cards are opened so that their answers
// print, and the page gets a short title, which browsers use as the file name of the PDF.
let titleBeforePrint = '';
window.addEventListener('beforeprint', () => {
  document.querySelectorAll('details.nb-card').forEach((d) => { d.open = true; });
  if (ui.printTitle) { titleBeforePrint = document.title; document.title = ui.printTitle; }
});
window.addEventListener('afterprint', () => {
  if (titleBeforePrint) { document.title = titleBeforePrint; titleBeforePrint = ''; }
  ui.printTitle = '';
});

// The Back button: inside the book companion it goes one screen back; during a quiz that was
// started from the book it asks before leaving; in any other quiz it does nothing.
window.addEventListener('popstate', (e) => {
  if (ui.screen === 'game' || ui.screen === 'busy') { if (ui.bookQuiz) actions.leave(); return; }
  const route = (e.state && e.state.book) || (location.hash.startsWith('#book') ? location.hash.slice(1) : '');
  if (route) showBook(route); else renderHome();
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') return;
  if (ui.screen === 'game') keepAwake();
  const g = net;
  if (g && g.role === 'guest' && g.connected && !g.reconnectingSince && Date.now() - g.lastHeard > 4000) lostHost(g);
});

// ---------- banner / toast / petals / vibration ----------
function setBanner(text) { const b = $('#banner'); b.textContent = text; b.hidden = !text; }
let toastTimer = null;
function toast(text) {
  const el = $('#toast');
  el.textContent = text;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2200);
}
function petals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = $('#petals');
  const colors = ['#f39c12', '#e67e22', '#f1c40f', '#e74c3c', '#ff8a5c'];
  box.innerHTML = Array.from({ length: 70 }, () => {
    const c = colors[Math.floor(Math.random() * colors.length)];
    return `<i style="left:${Math.random() * 100}%;background:${c};animation-duration:${3 + Math.random() * 3}s;animation-delay:${Math.random() * 1.2}s"></i>`;
  }).join('');
  setTimeout(() => { box.innerHTML = ''; }, 7000);
}
function buzz(pattern) {
  const tapped = !navigator.userActivation || navigator.userActivation.hasBeenActive;
  try { if (navigator.vibrate && tapped) navigator.vibrate(pattern); } catch { /* not supported */ }
}
let wakeLock = null;
async function keepAwake() {
  try {
    if ('wakeLock' in navigator && !wakeLock && document.visibilityState === 'visible') {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    }
  } catch { /* not allowed */ }
}
function releaseWakeLock() { if (wakeLock) wakeLock.release().catch(() => {}); wakeLock = null; }

// ---------- sound (synthesised) ----------
const sfx = (() => {
  let ctx = null;
  let muted = store.get('localStorage', 'pp-muted') === '1';
  const ready = () => ctx && !muted;
  function tone(freq, start, dur, type = 'sine', vol = 0.1) {
    if (!ready()) return;
    const at = ctx.currentTime + start;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, at);
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(vol, at + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(g).connect(ctx.destination);
    o.start(at);
    o.stop(at + dur + 0.05);
  }
  return {
    get muted() { return muted; },
    unlock() {
      try {
        if (!ctx) { const AC = window.AudioContext || window.webkitAudioContext; if (AC) ctx = new AC(); }
        if (ctx && ctx.state === 'suspended') ctx.resume();
      } catch { /* no audio */ }
    },
    toggle() { muted = !muted; store.set('localStorage', 'pp-muted', muted ? '1' : '0'); return muted; },
    tick: () => tone(1100, 0, 0.05, 'square', 0.03),
    start: () => tone(523, 0, 0.18, 'triangle', 0.08),
    right: () => [523, 659, 784].forEach((f, i) => tone(f, i * 0.07, 0.2, 'triangle')),       // a temple-bell-like rise
    wrong: () => { tone(220, 0, 0.25, 'sawtooth', 0.05); tone(180, 0.12, 0.3, 'sawtooth', 0.05); },
    fanfare: () => [392, 523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.13, 0.35, 'triangle')),
  };
})();
document.addEventListener('pointerdown', () => sfx.unlock(), { passive: true });

// ---------- start ----------
async function boot() {
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en-IN';
  requestAnimationFrame(frame);
  try {
    const res = await fetch('data/index.json', { cache: 'no-cache' });
    if (res.ok) bankIndex = await res.json();
  } catch { /* counts stay empty; sections show as coming soon */ }
  try { local = { ...local, ...JSON.parse(store.get('sessionStorage', 'pp-local') || '{}') }; } catch { /* start clean */ }

  const role = store.get('sessionStorage', 'pp-role');
  const code = normalizeCode(new URLSearchParams(location.search).get('room'));
  const read = (key) => { try { return JSON.parse(store.get('sessionStorage', key) || 'null'); } catch { return null; } };
  if (role === 'solo') {
    const saved = read('pp-solo');
    if (saved && saved.state) { ui.bookQuiz = read('pp-bookquiz'); startSolo(saved); return; }
  }
  setBookQuiz(null);
  if (typeof Peer !== 'undefined') {
    if (code && role === 'host') { const saved = read('pp-host'); if (saved && saved.state && saved.state.code === code) { openRoom(code, saved); return; } }
    if (code && role === 'guest' && me.name) { joinRoom(code); return; }
  }
  // A link or a reload inside the book companion opens it again at the same place.
  if (!code && location.hash.startsWith('#book')) {
    const route = location.hash.slice(1);
    history.replaceState({ book: route }, '', `#${route}`);
    showBook(route);
    return;
  }
  renderHome();
}

boot();
