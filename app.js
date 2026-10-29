/* GS House — a bilingual General Knowledge quiz for the UPESSC TGT, PGT and
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
  negatives: [0, 0.25, 0.33],
  defaults: { count: 20, timer: 45, level: 'all', negative: 0, track: 'all' },
  heartbeatMs: 2000,
  staleMs: 9000,
  connectTimeoutMs: 20000,
  reconnectForMs: 45000,
  retryEveryMs: 6000,
};
const LEVELS = ['TGT', 'PGT', 'Higher'];
const LETTERS = ['A', 'B', 'C', 'D'];
const BOOKS = {
  'special-topics': { en: 'Special Topics 2.0', hi: 'स्पेशल टॉपिक्स 2.0' },
  fatman: { en: 'Parmar SSC (Fatman)', hi: 'परमार एसएससी (फैटमैन)' },
};
const CODE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ'; // no I, L or O: easy to read aloud
const COLORS = ['#c0392b', '#d35400', '#b7950b', '#27ae60', '#16a085', '#2980b9', '#8e44ad', '#c2185b',
  '#6d4c41', '#00838f', '#5d4037', '#7cb342', '#e67e22', '#3949ab', '#ad1457', '#00897b',
  '#f4511e', '#546e7a', '#9e9d24', '#6a1b9a'];

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
    howMany: 'Questions', level: 'Level', allLevels: 'All', timer: 'Time per question', noLimit: 'No limit', secs: (n) => `${n}s`,
    negative: 'Negative marking', none: 'None', start: 'Start quiz', available: (n, s) => `${n} questions available from ${s} section${s === 1 ? '' : 's'}`,
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
    cantConnect: 'Couldn’t connect to the room. Some school or office Wi-Fi blocks live games — try mobile data.',
    noNet: 'Couldn’t reach the game server. Check your internet connection and try again.',
    broken: 'The quiz didn’t load properly. Check your internet connection and refresh the page.',
    reconnecting: 'Connection lost — reconnecting…', install: '📲 Install the app', installed: 'App installed! 🎉',
    iosHint: '📲 Use it like an app: tap Share in Safari, then Add to Home Screen.',
    loadingQs: 'Collecting your questions…', noQs: 'No questions match these choices yet.',
    rankTitle: { acharya: 'Acharya', pandit: 'Pandit', vidvan: 'Vidvan', sadhak: 'Sadhak', jigyasu: 'Jigyasu' },
    rankNote: { acharya: 'Master of the syllabus', pandit: 'Excellent command', vidvan: 'Good grasp — keep polishing', sadhak: 'Steady progress — revise weak areas', jigyasu: 'Every master was once a beginner' },
    level_TGT: 'TGT', level_PGT: 'PGT', level_Higher: 'Higher',
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
    howMany: 'प्रश्नों की संख्या', level: 'स्तर', allLevels: 'सभी', timer: 'प्रति प्रश्न समय', noLimit: 'असीमित', secs: (n) => `${n} से.`,
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
    cantConnect: 'कक्ष से नहीं जुड़ पाए। कुछ स्कूल/ऑफिस वाई-फाई लाइव गेम रोकते हैं — मोबाइल डेटा आज़माएँ।',
    noNet: 'गेम सर्वर तक नहीं पहुँच पाए। इंटरनेट जाँचकर फिर प्रयास करें।',
    broken: 'प्रश्नोत्तरी ठीक से लोड नहीं हुई। इंटरनेट जाँचें और पेज रिफ्रेश करें।',
    reconnecting: 'संपर्क टूटा — फिर से जोड़ रहे हैं…', install: '📲 ऐप इंस्टॉल करें', installed: 'ऐप इंस्टॉल हो गया! 🎉',
    iosHint: '📲 ऐप की तरह उपयोग करें: Safari में Share दबाएँ, फिर Add to Home Screen।',
    loadingQs: 'आपके प्रश्न तैयार हो रहे हैं…', noQs: 'इन विकल्पों से मेल खाते प्रश्न अभी उपलब्ध नहीं हैं।',
    rankTitle: { acharya: 'आचार्य', pandit: 'पंडित', vidvan: 'विद्वान', sadhak: 'साधक', jigyasu: 'जिज्ञासु' },
    rankNote: { acharya: 'पाठ्यक्रम पर पूर्ण अधिकार', pandit: 'उत्कृष्ट पकड़', vidvan: 'अच्छी समझ — निखारते रहें', sadhak: 'निरंतर प्रगति — कमजोर खंड दोहराएँ', jigyasu: 'हर आचार्य कभी शुरुआती था' },
    level_TGT: 'टीजीटी', level_PGT: 'पीजीटी', level_Higher: 'उच्चतर',
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
  ui.stageKey = '';
  if (ui.screen === 'game') render();
  else if (ui.screen === 'home') renderHome();
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
  lastTick: -1,
};
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
  if (saved && host.state.qids.length) loadBank(host.state.settings.sections).then(resume);
  else resume();
}

function openRoom(code, saved = null, attempt = 0) {
  showBusy(saved ? t('reopening') : t('opening'));
  const peer = new Peer(CONFIG.peerPrefix + code, { debug: 1 });
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
    if (saved && host.state.qids.length) await loadBank(host.state.settings.sections);
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
      if (msg.level === 'all' || LEVELS.includes(msg.level)) st.level = msg.level;
      if (['all', 'tgt', 'higher'].includes(msg.track)) st.track = msg.track;
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
        s.players = s.players.filter((p) => p.connected);
        Object.assign(s, { phase: 'lobby', round: 0, total: 0, qids: [], reports: {}, locked: false });
        host.answers = {};
        hostChanged();
      }
      return;
    case 'need':
      if (s.phase === 'question' && conn) sendQuestion(conn);
      return;
    case 'bye':
      dropPlayer(pid);
      return;
    default:
  }
}

async function loadBank(sectionIds) {
  await Promise.all(sectionIds.filter((id) => !host.bank[id]).map(async (id) => {
    try {
      const res = await fetch(`data/${id}.json`, { cache: 'no-cache' });
      host.bank[id] = res.ok ? (await res.json()).questions : [];
    } catch { host.bank[id] = []; }
  }));
}
const findQuestion = (qid) => {
  const section = qid.replace(/-\d{3}$/, '');
  return (host.bank[section] || []).find((q) => q.id === qid);
};

// Picks questions spread evenly over the chosen sections, preferring ones this device hasn't
// seen before, with no question repeated inside a quiz.
function pickQuestions(st) {
  const seen = new Set(JSON.parse(store.get('localStorage', 'pp-seen') || '[]'));
  const queues = st.sections.map((id) => {
    const qs = (host.bank[id] || []).filter((q) => st.level === 'all' || q.level === st.level);
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

async function startQuiz() {
  const s = host.state;
  if (!s.settings.sections.length) { toast(t('pickSection')); return; }
  s.phase = 'loading';
  hostChanged();
  await loadBank(s.settings.sections);
  const qids = pickQuestions(s.settings);
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
  // Anyone who never answered the last question counts it as skipped.
  for (const p of s.players) if (s.round && !has(host.answers[s.round] || {}, p.id) && !s.locked) { p.skipped += 1; }
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
  const peer = new Peer({ debug: 1 });
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
}

function guestWatchdog() {
  const g = net;
  if (!g || g.role !== 'guest') return;
  const now = Date.now();
  if (!g.connected) {
    if (now - g.startedAt > CONFIG.connectTimeoutMs) failGuest(t('cantConnect'));
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

function leaveGame() {
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
  history.replaceState(null, '', location.pathname);
  renderHome();
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
  const acc = pct(rep.correct, rep.total);
  sfx.fanfare();
  if (acc >= 40) petals();
}

function render() {
  if (ui.screen !== 'game' || !ui.view) return;
  const v = ui.view;
  const amHost = v.hostId === me.id;
  const qlang = ui.qlang[v.round] || lang;
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
      <div class="brand-mini">🪔 <b>${lang === 'hi' ? 'जीएस हाउस' : 'GS House'}</b>${v.solo ? '' : `<button class="chip" data-action="copy">${t('roomCode')} <b>${esc(v.code)}</b></button>`}</div>
      <div class="topbar-right">
        <button class="lang-toggle" data-action="lang" aria-label="Change language"><span class="${lang === 'en' ? 'on' : ''}">EN</span><span class="${lang === 'hi' ? 'on' : ''}">हिं</span></button>
        <button class="icon-btn" data-action="mute" aria-label="Sound">${sfx.muted ? '🔇' : '🔊'}</button>
        <button class="icon-btn" data-action="leave" aria-label="Leave">✕</button>
      </div>
    </header>`;
}

function stageHTML(v, amHost) {
  if (ui.sheet) return sheetHTML(v);
  if (v.phase === 'lobby') return lobbyHTML(v, amHost);
  if (v.phase === 'loading') return `<div class="screen-msg"><div class="spinner"></div><p>${t('loadingQs')}</p></div>`;
  if (v.phase === 'question') return questionHTML(v, amHost);
  return resultsHTML(v, amHost);
}

const hostName = (v) => (v.players.find((p) => p.id === v.hostId) || {}).name || t('host');
const sectionTitle = (id, l = lang) => (sectionById[id] ? sectionById[id][l] || sectionById[id].en : id);
const countFor = (id, level) => {
  const c = bankIndex.sections[id];
  if (!c) return 0;
  return level === 'all' ? c.total : (c[level] || 0);
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
    <div id="start-area" class="start-area"></div>`;
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
    const withQs = secs.filter((s) => countFor(s.id, st.level) > 0);
    const picked = secs.filter((s) => st.sections.includes(s.id));
    const open = ui.openUnits.has(u.id);
    const rows = secs.map((s) => {
      const n = countFor(s.id, st.level);
      const on = st.sections.includes(s.id);
      const tags = s.tracks.map((tr) => `<span class="tag tag-${tr}">${tr === 'tgt' ? 'TGT/PGT' : (lang === 'hi' ? 'उच्चतर' : 'Higher')}</span>`).join('');
      return `
        <label class="sec-row ${n ? '' : 'empty'} ${on ? 'on' : ''}" title="${esc(s.scope)}">
          <input type="checkbox" ${on ? 'checked' : ''} ${!amHost || !n ? 'disabled' : ''} data-action="toggle-sec" data-id="${s.id}">
          <span class="sec-name">${esc(s[lang] || s.en)}<span class="sec-tags">${tags}</span></span>
          <span class="sec-count">${n ? t('qs', n) : t('soon')}</span>
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
  return `
    <p class="field-label">${t('syllabus')}</p>
    <div class="segs segs-3">${tracks.map(([val, label]) => `<button class="seg ${st.track === val ? 'on' : ''}" ${amHost ? `data-action="set" data-key="track" data-val="${val}"` : dis}>${label}</button>`).join('')}</div>
    <p class="field-label">${t('sections')}</p>
    <div class="units">${units}</div>
    <p class="field-label">${t('howMany')}</p>
    <div class="segs">${seg('count', CONFIG.counts, (n) => n)}</div>
    <p class="field-label">${t('level')}</p>
    <div class="segs">${seg('level', ['all', ...LEVELS], (l) => (l === 'all' ? t('allLevels') : t(`level_${l}`)))}</div>
    <p class="field-label">${t('timer')}</p>
    <div class="segs">${seg('timer', CONFIG.timers, (n) => (n ? t('secs', n) : t('noLimit')))}</div>
    <p class="field-label">${t('negative')}</p>
    <div class="segs segs-3">${seg('negative', CONFIG.negatives, (n) => (n ? `−${n === 0.33 ? '⅓' : '¼'}` : t('none')))}</div>`;
}

// ---------- question ----------
function questionHTML(v, amHost) {
  const q = local.questions[v.round];
  if (!q) return `<div class="screen-msg"><div class="spinner"></div><p>${t('loading')}</p></div>`;
  const ql = ui.qlang[v.round] || lang;
  const body = q[ql] || q.en;
  const section = q.id.replace(/-\d{3}$/, '');
  const sec = sectionById[section];
  const unit = sec ? unitById[sec.unit] : null;
  const mine = local.mine[v.round];
  const done = !!mine || v.locked;
  const options = body.options.map((o, i) => {
    let cls = '';
    if (done) {
      if (i === q.answer) cls = 'right';
      else if (mine && mine.choice === i) cls = 'wrong';
      else cls = 'dim';
    }
    return `<button class="opt ${cls}" data-action="pick" data-i="${i}" ${done ? 'disabled' : ''}><span class="opt-letter">${LETTERS[i]}</span><span class="opt-text">${esc(o)}</span>${done && i === q.answer ? '<span class="opt-mark">✓</span>' : ''}${cls === 'wrong' ? '<span class="opt-mark">✗</span>' : ''}</button>`;
  }).join('');
  return `
    <section class="q-head">
      <div class="progress"><span>${t('qOf', v.round, v.total)}</span><div class="bar"><span style="width:${pct(v.round - 1, v.total)}%"></span></div></div>
      ${v.settings.timer ? '<div class="timer" id="timer"><svg viewBox="0 0 36 36"><circle class="track" cx="18" cy="18" r="16"/><circle class="fill" id="timer-fill" cx="18" cy="18" r="16" pathLength="100"/></svg><span data-countdown></span></div>' : ''}
    </section>
    <section class="q-card">
      <div class="q-meta">
        <span class="q-sec">${unit ? unit.icon : '📘'} ${esc(sectionTitle(section, ql))}</span>
        <span class="q-level lvl-${q.level}">${esc(t(`level_${q.level}`))}</span>
        <span class="q-lang"><button class="${ql === 'en' ? 'on' : ''}" data-action="qlang" data-l="en">EN</button><button class="${ql === 'hi' ? 'on' : ''}" data-action="qlang" data-l="hi">हिं</button></span>
      </div>
      <h1 class="q-text" lang="${ql === 'hi' ? 'hi' : 'en'}">${esc(body.q)}</h1>
      <div class="opts" lang="${ql === 'hi' ? 'hi' : 'en'}">${options}</div>
      <div id="feedback">${done ? feedbackHTML(q, body, mine, ql) : ''}</div>
    </section>
    <div class="next-area" id="next-area"></div>
    ${v.solo ? '' : `<section class="card"><h2>${t('leaderboard')} <span class="muted small" id="answered-count"></span></h2><div class="board" id="board"></div></section>`}`;
}

function feedbackHTML(q, body, mine, ql) {
  const verdict = !mine ? `<div class="verdict missed">⏳ ${t('missed')}</div>`
    : mine.choice === q.answer ? `<div class="verdict good">${DIYA_SVG}<b>${t('correct')}</b>${streakNote()}</div>`
      : `<div class="verdict bad">✗ <b>${t('wrong')}</b> — ${t('rightAnswer')}: <b>${LETTERS[q.answer]}. ${esc(body.options[q.answer])}</b></div>`;
  const flow = body.path.map((step) => `<span class="node">${esc(step)}</span>`).join('<span class="arrow">➜</span>')
    + `<span class="arrow">➜</span><span class="node final">✓ ${esc(body.options[q.answer])}</span>`;
  const notes = body.options.map((o, i) => {
    const cls = i === q.answer ? 'ok' : mine && mine.choice === i ? 'bad' : '';
    return `<div class="note ${cls}"><b class="note-letter">${LETTERS[i]}</b><div><p class="note-opt">${esc(o)}</p><p class="note-text">${esc(body.notes[i])}</p></div></div>`;
  }).join('');
  return `
    ${verdict}
    <section class="explain" lang="${ql === 'hi' ? 'hi' : 'en'}">
      <div class="flow" aria-label="Topic flow">${flow}</div>
      <div class="why"><h3>📖 ${t('why')}</h3><p>${esc(body.explanation)}</p></div>
      <h3 class="sub">🔎 ${t('aboutOptions')}</h3>
      <div class="notes">${notes}</div>
      <div class="facts"><h3>📜 ${t('remember')}</h3><ul>${body.facts.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div>
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
  const next = amHost
    ? `<button class="btn primary big" data-action="again">${t('playAgain')}</button>`
    : `<p class="muted center">${t('waitHost', esc(hostName(v)))}<span class="dots"></span></p>`;
  return `
    ${rep ? assessmentHTML(rep) : ''}
    ${v.solo ? '' : `<section class="card"><h2 class="ornate">${t('leaderboard')}</h2><div class="lb">${board}</div></section>`}
    <div class="next-area">
      <button class="btn big" data-action="sheet">📄 ${t('answerSheet')}</button>
      ${next}
    </div>`;
}

function assessmentHTML(rep) {
  const acc = pct(rep.correct, rep.total);
  const [, rk, icon] = rankFor(acc);
  const secRows = Object.entries(rep.bySection).sort((a, b) => pct(b[1][1], b[1][0]) - pct(a[1][1], a[1][0]));
  const bars = (rows, label) => rows.map(([k, [n, c]]) => `
    <div class="meter"><span class="m-label">${esc(label(k))}</span><span class="m-bar"><i style="--w:${pct(c, n)}%" class="${pct(c, n) >= 75 ? 'hi' : pct(c, n) < 50 ? 'lo' : ''}"></i></span><span class="m-val">${c}/${n}</span></div>`).join('');
  const strong = secRows.filter(([, [n, c]]) => n >= 2 && pct(c, n) >= 75).map(([k]) => sectionTitle(k));
  const weak = secRows.filter(([, [n, c]]) => pct(c, n) < 50).map(([k]) => sectionTitle(k));
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
      <h3>${t('bySection')}</h3>
      <div class="meters">${bars(secRows, (k) => sectionTitle(k))}</div>
      <h3>${t('byLevel')}</h3>
      <div class="meters">${bars(Object.entries(rep.byLevel), (k) => t(`level_${k}`))}</div>
      <div class="sw">
        <div class="sw-box good"><h4>💪 ${t('strong')}</h4><p>${strong.length ? strong.map(esc).join(' · ') : t('noStrong')}</p></div>
        <div class="sw-box bad"><h4>📚 ${t('weak')}</h4><p>${weak.length ? weak.map(esc).join(' · ') : '—'}</p></div>
      </div>
    </section>`;
}

// ---------- answer sheet ----------
function sheetHTML(v) {
  const sl = ui.sheetLang || lang;
  const rounds = Object.keys(local.questions).map(Number).sort((a, b) => a - b);
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
    const sec = q.id.replace(/-\d{3}$/, '');
    return `
      <article class="sh-item">
        <header><b>${r}.</b> <span>${esc(sectionTitle(sec, sl === 'hi' ? 'hi' : 'en'))}</span> <span class="q-level lvl-${q.level}">${q.level}</span>
          <span class="sh-ans">${t('rightAnswer')}: <b>${LETTERS[q.answer]}</b> · ${t('yourAnswerWas')}: <b>${mine ? LETTERS[mine.choice] : t('notAnswered')}</b></span></header>
        ${blocks}
        <p class="refs">📚 ${refsText(q.refs, sl === 'hi' ? 'hi' : 'en')}</p>
      </article>`;
  }).join('');
  const langBtn = (l, label) => `<button class="seg ${sl === l ? 'on' : ''}" data-action="sheet-lang" data-l="${l}">${label}</button>`;
  return `
    <section class="card sheet">
      <div class="sheet-head">
        <h2 class="ornate">📄 ${t('answerSheet')}</h2>
        <div class="segs segs-3 no-print">${langBtn('en', 'English')}${langBtn('hi', 'हिन्दी')}${langBtn('both', t('both'))}</div>
        <div class="row no-print"><button class="btn primary" data-action="print">🖨️ ${t('print')}</button><button class="btn" data-action="sheet-close">${t('close')}</button></div>
      </div>
      <p class="print-only sheet-title">GS House · जीएस हाउस — ${t('answerSheet')} · ${esc(me.name)} · ${new Date().toLocaleDateString('en-IN')}</p>
      ${items || `<p class="muted">${t('noneYet')}</p>`}
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
    const avail = st.sections.reduce((sum, id) => sum + countFor(id, st.level), 0);
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
    setHTML('next-area', amHost
      ? (doneMe || v.locked ? `<button class="btn primary big" data-action="next">${last ? `🏁 ${t('results')}` : `${t('next')} ➜`}</button>` : '')
      : (doneMe ? `<p class="muted center">${t('waitNext', esc(hostName(v)))}<span class="dots"></span></p>` : ''));
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
  setScreen('home');
  const invited = normalizeCode(new URLSearchParams(location.search).get('room'));
  const total = Object.values(bankIndex.sections).reduce((sum, c) => sum + c.total, 0);
  const nameField = `
    <label class="field" id="name-field"><span>${t('yourName')}</span>
      <input id="name" maxlength="16" autocomplete="nickname" placeholder="${t('namePh')}" value="${esc(me.name)}" enterkeyhint="go">
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
    <div class="home-top"><button class="lang-toggle" data-action="lang" aria-label="Change language"><span class="${lang === 'en' ? 'on' : ''}">English</span><span class="${lang === 'hi' ? 'on' : ''}">हिन्दी</span></button></div>
    <section class="hero">
      ${LOTUS_SVG}
      <h1 class="title"><span class="t-hi">जीएस हाउस</span><span class="t-en">GS House</span></h1>
      <p class="tagline">${t('tagline')}</p>
      <p class="stats">${t('stats', SECTIONS.length, total)}</p>
    </section>
    <div id="install" class="install-area">${installHTML()}</div>
    <section class="card stack">${actions}</section>`;
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

const LOTUS_SVG = `
  <svg class="lotus" viewBox="0 0 120 80" aria-hidden="true">
    <path d="M60 8 C72 26 72 46 60 62 C48 46 48 26 60 8Z" fill="#e8738a"/>
    <path d="M60 62 C40 56 28 40 30 22 C44 28 56 42 60 62Z" fill="#f29bab"/>
    <path d="M60 62 C80 56 92 40 90 22 C76 28 64 42 60 62Z" fill="#f29bab"/>
    <path d="M60 64 C36 66 16 56 8 42 C26 40 46 48 60 64Z" fill="#f7c1cb"/>
    <path d="M60 64 C84 66 104 56 112 42 C94 40 74 48 60 64Z" fill="#f7c1cb"/>
    <path d="M24 70 Q60 80 96 70" fill="none" stroke="#c9972b" stroke-width="3" stroke-linecap="round"/>
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
    if (name) openRoom(randomCode());
  },
  pick(btn) {
    const v = ui.view;
    if (!v || v.phase !== 'question' || v.locked || local.mine[v.round]) return;
    const choice = Number(btn.dataset.i);
    const q = local.questions[v.round];
    const ms = Date.now() - (local.shownAt[v.round] || Date.now());
    local.mine[v.round] = { choice, ms };
    saveLocal();
    if (q) { if (choice === q.answer) { sfx.right(); buzz(25); } else { sfx.wrong(); buzz([60, 40, 60]); } }
    act({ type: 'answer', round: v.round, choice, ms });
    render();
  },
  qlang(btn) { ui.qlang[ui.view.round] = btn.dataset.l; render(); },
  lang() { setLang(lang === 'en' ? 'hi' : 'en'); },
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
    const ids = SECTIONS.filter((s) => s.unit === btn.dataset.id && trackOk(s, st.track) && countFor(s.id, st.level) > 0).map((s) => s.id);
    const allOn = ids.every((id) => st.sections.includes(id));
    const next = allOn ? st.sections.filter((id) => !ids.includes(id)) : [...new Set([...st.sections, ...ids])];
    act({ type: 'settings', sections: next });
  },
  start: () => act({ type: 'start' }),
  next: () => act({ type: 'next' }),
  again: () => act({ type: 'again' }),
  sheet() { ui.sheet = true; ui.sheetLang = lang; render(); window.scrollTo(0, 0); },
  'sheet-close'() { ui.sheet = false; render(); },
  'sheet-lang'(btn) { ui.sheetLang = btn.dataset.l; render(); },
  print: () => window.print(),
  copy: copyInvite,
  share() {
    const code = ui.view.code;
    navigator.share({ title: 'GS House', text: `Join my GS House GK quiz! Room code ${code}`, url: inviteUrl(code) }).catch(() => {});
  },
  async install() {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice.catch(() => {});
    installPrompt = null;
    renderInstall();
  },
  mute(btn) { btn.textContent = sfx.toggle() ? '🔇' : '🔊'; },
  leave() {
    const msg = !net ? t('leaveSolo') : net.role === 'host' ? (net.solo ? t('leaveSolo') : t('leaveHost')) : t('leaveGuest');
    if (window.confirm(msg)) leaveGame();
  },
  home: () => leaveGame(),
  'clear-invite'() { history.replaceState(null, '', location.pathname); renderHome(); },
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
  const el = e.target.closest('[data-action]');
  if (!el || el.disabled || !actions[el.dataset.action]) return;
  if (el.tagName === 'INPUT') return; // checkboxes are handled on change
  actions[el.dataset.action](el, e);
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
  if (role === 'solo') { const saved = read('pp-solo'); if (saved && saved.state) { startSolo(saved); return; } }
  if (typeof Peer !== 'undefined') {
    if (code && role === 'host') { const saved = read('pp-host'); if (saved && saved.state && saved.state.code === code) { openRoom(code, saved); return; } }
    if (code && role === 'guest' && me.name) { joinRoom(code); return; }
  }
  renderHome();
}

boot();
