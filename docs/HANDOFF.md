# GS House — hand-off for the next Claude session

Read this whole file first. It records what the owner (Lalit) asked for, what is already built, and exactly how to continue.

## 0. Update of 12 November 2026 (read this first; it overrides older notes below)
The owner asked for four things, all done on the branch `tgt-pgt-higher-rework`:
1. **Single short questions only.** About 700 long questions (statement sets, match-the-list, assertion–reason, chronology) were rewritten as one-line questions of at most 200 characters, in English and exam Hindi, modelled on UP TGT/PGT previous-year papers and the UPESSC Assistant Professor paper of 18 April 2026. The validator now rejects multi-part stems.
2. **Level follows the tag.** A section tagged only TGT/PGT has only TGT and PGT questions, a Higher-only section has only Higher questions, and a section with both tags has a mix. In the game the syllabus switch also filters questions: *TGT / PGT* serves TGT+PGT questions, *Assistant Professor* serves Higher questions (`TRACK_LEVELS` in `app.js`).
3. **Typography.** Times New Roman everywhere (Tinos as the metric-compatible web font on phones, Noto Serif Devanagari for Hindi), larger sizes and wider line spacing for fast reading.
4. **The remaining sections were written**: `ict-applications` (now 40), `ict-terms` (40), `edtech` (40) and 6 each for the other 24 sections, so all 73 sections have questions (1,516 at that point; see step 5 for the present total). Current-affairs questions cite *Parmar SSC Current Affairs 2026* (`parmar-ca`, PDF page numbers).

5. **Second request (12–13 November 2026): 20 questions in each of the 24 sections written in step 4** (`tra-ugc`, `eco-budget`, `eco-poverty`, `eco-agri-industry`, `eco-trade`, `geo-universe`, `geo-earth`, `geo-soil-forest`, `geo-resources`, `geo-agri-transport`, `geo-population`, `geo-up`, `sci-space`, `sci-tech`, `env-ecology`, `env-people`, `env-global` and the seven `ca-*` sections). 14 questions were added to each, chosen by exam importance, so the bank now has **1,852 questions** (818 TGT, 604 PGT, 430 Higher). Level mix in a 20-question section: both tags 8 TGT / 7 PGT / 5 Higher; TGT-only 11 TGT / 9 PGT; Higher-only 20 Higher. Answers are spread 5/5/5/5 over A–D.

6. **Third request (13 November 2026), three parts, all done:**
   - **Teaching/research questions reframed.** 105 Higher questions in `tra-teaching`, `tra-research`, `tra-evaluation`, `tra-data` and `tra-ugc` that asked for the name of a term or an author were rewritten as conceptual questions in the style of the 18 April 2026 paper. Numerical data-interpretation questions were kept as they are.
   - **The other 24 small sections extended to 20 questions each** (`culture`, `eco-banking`, `eco-basics`, `eco-capital`, `eco-planning`, the four small `health-*`, `hist-1857`, `hist-bhakti`, `hist-british`, `hist-mughal`, `hist-nm1`, `hist-nm2`, `hist-sultanate`, `pol-amend`, `pol-bodies`, `pol-education`, `pol-election`, `pol-judiciary`, `pol-local`, `pol-parliament`, `pol-state`): 336 new questions. The bank now has **2,188 questions** (978 TGT, 739 PGT, 471 Higher); every section has at least 20, and all 48 twenty-question sections have answers spread 5/5/5/5.
   - **The ten interface improvements** listed in section 6 below.

7. **Fourth request (13 November 2026), all done on the branch `book-companion-and-room-fixes`:**
   - **Rooms.** The host's *Next question* button is always available in a room; a line above it shows how many players have answered and turns green at "Everyone has answered" (guests see the same line). A player who has not answered when the host moves on counts the question as skipped. Time per question and negative marking (No, −1/3, −1/4) are now the first block of the setup screen.
   - **A player could not join a room ("network blocking").** Cause found: the PeerJS library's built-in relay (TURN) servers, `eu-0.turn.peerjs.com` and `us-0.turn.peerjs.com`, no longer exist (no DNS record), so two devices could connect only when their networks allow a direct link. That fails on mobile data at both ends and on many office or school networks. What was done: the app now gives its own server list (`CONFIG.stun`, `CONFIG.turn` in `app.js`), tells the player exactly what failed (game server not reached / host not answering / direct route blocked), retries once, and no longer hangs if PeerJS itself did not load. **Still needed from the owner: a TURN relay account** (see section 6, "Rooms and networks"). Until then, players on the same Wi-Fi connect reliably; players on different mobile networks may not.
   - **ICT: 40 more questions** on topics from past teacher-recruitment papers (10 each in `ict-computer`, `ict-terms`, `ict-internet`, `ict-applications`, now 50 each).
   - **Book companion** for the Ghatna Chakra *TGT/PGT Samanya Gyan* question bank (the owner's PDF, reference key `tgt-pgt-gk`): see section 6. Polity is complete (17 chapters of notes, chapter quizzes); 31 new polity questions were written for the four chapters that had too few (`pol-making` 057–066, `pol-amend` 021–034, `pol-executive` 043–049). The bank now has **2,259 questions** (1,015 TGT, 773 PGT, 471 Higher).
   - All 71 new questions and the 17 chapters of notes were proof-read by separate checker agents (reports: `data/reports/<section>.md` and `data/reports/book-polity-notes.md`). The check also caught an out-of-date fact in an older question: the Supreme Court's strength is 38 since 16 May 2026 (`pol-judiciary-012`, corrected).
   - The service worker now asks the server for a fresh copy every time (`cache: 'no-cache'`), so a new version of the app reaches installed copies at once; cache name `gshouse-v7`.

8. **Fifth request (13 November 2026): notes and chapter quizzes for every other topic of the book, in four stages, each published after checking.** Order given by the owner: (1) the last four topics of Unit 3: Computer and Internet terminology, Applications of ICT, Developments in educational technology, Miscellaneous; (2) the rest of Unit 3: General Science, Technology in the current context, Environment, Human health and hygiene; (3) the rest of Unit 2: Indian History, Freedom Movement, Legal and constitutional developments in education, Indian Economy, Geography and Population; (4) Unit 1: Events, Personalities and awards, Sports.
   - **Stage 1 is done** (branch `book-unit3-computer-ict-edtech-misc`): 23 chapters of notes (`gc-comp-01..06`, `gc-ict-01..04`, `gc-edt-01..05`, `gc-misc-01..08`), so five topics and 40 chapters are ready.
   - The book's Miscellaneous topic has world history, political thought and international organisations, which neither syllabus lists. A new section **`misc-gk`** (unit `u10`, *Miscellaneous GK*, tagged TGT/PGT) holds 40 new questions on them (12 world history and South-East Asia, 12 political thought and administration, 12 international organisations, 4 education schemes and management). It also appears in the main game. The bank now has **2,299 questions** (1,036 TGT, 792 PGT, 471 Higher) in 74 sections and 10 units.
   - The educational-technology and research chapters draw on Higher-only sections (`tra-teaching`, `tra-evaluation`, `tra-research`, `tra-ugc`). A chapter with `"levels": "all"` in `book.json` lets its quiz use Higher questions too; without it a chapter quiz uses TGT and PGT questions only.
   - Checks: the 40 questions were proof-read by a separate checker (`data/reports/misc-gk.md`: 19 corrected, none replaced); the 23 chapters of notes were fact-checked by two more (`data/reports/book-computer-ict-notes.md`: 9 factual and 3 Hindi corrections; `data/reports/book-edtech-misc-notes.md`: 7 factual and 4 Hindi corrections). Each report ends with what could not be confirmed online.
   - **Stage 2 is done** (branch `book-unit3-science-tech-env-health`): 29 chapters of notes (`gc-sci-01..12`, `gc-tech-01..03`, `gc-env-01..08`, `gc-health-01..06`), so all of Unit 3 and Polity are ready: nine topics, 69 chapters.
   - 56 new TGT/PGT questions were written for the chapters whose pools were too small: `sci-physics` 057–071 (new groups *Heat*, *Modern physics*, *Universe and inventions*), `sci-biology` 058–060, `sci-tech` 021–027 (biotechnology), `env-ecology` 021–025 (biodiversity), `geo-soil-forest` 021–029 (protected areas, forests, soils), `geo-resources` 021, `env-global` 021–026 (wetlands, climate agreements), `env-people` 021–024 (climate change) and `health-diseases` 021–026 (occupational diseases, medical technology, cancer, medicinal plants, health programmes). The bank now has **2,355 questions** (1,068 TGT, 816 PGT, 471 Higher).
   - Some chapters share a section through `path[2]`: for example `gc-env-02` takes the *Biodiversity* questions of `env-ecology` and `gc-env-01` takes the rest; `gc-health-01` takes the *Animal tissues* questions of `sci-biology` and `gc-sci-11` the *Plant tissues* ones.
   - Checks: the 56 questions were proof-read by a separate checker (8 corrected, 3 replaced because they repeated a fact of an older question; each section report has a part "Check of 13 November 2026 (book companion, stage 2)"). The notes were fact-checked by two more (`data/reports/book-science-tech-notes.md`: 7 factual and 3 Hindi corrections; `data/reports/book-env-health-notes.md`: 7 factual and 1 Hindi correction). Two of the corrections were confirmed again on the web: India has 103 Ramsar sites (14 in Uttar Pradesh) as of 15 October 2026, and Indore has been named the cleanest city eight times in a row.
   - New tool: `python tools/check_book.py` checks every chapter (notes file present, same structure in English and Hindi, tables with equal rows, title equal to `book.json`, pool of at least 10 questions). It must print "0 problems".
   - Line ends: the section files in the repo do not all have the same line ends (some LF, some CRLF). A script that rewrites a section file must keep that file's own line ends, or the commit shows the whole file as changed.
   - Stages 3 and 4 follow the same recipe (section 6, "To add the next topic").

Checking: every question rewritten or written in November 2026 has had an independent proof-read by a separate checker agent (the "Rework pass" in `docs/CHECKER_BRIEF.md`): 820 rewritten or new questions in the older files, all 20 questions of each of the 24 sections extended in step 5, the 105 reframed `tra-*` questions and the 336 questions of step 6. Each `data/reports/<section>.md` has a part headed "Check of 12 November 2026" or "Check of 13 November 2026". Current-affairs facts were verified on the web and against `refs/parmar_ca_2026.txt`; they go out of date, so re-check the `ca-*` files before each exam season.

Lesson from step 6: when adding questions to a section, read the full text (notes, explanation and facts) of the questions already there. In the first batch about a quarter of the new questions asked a fact that an older question's notes already stated, and the checkers had to replace them.

Framing: 413 of the 471 Higher questions (88%) are conceptual in the style of the 18 April 2026 paper (`tra-*` 89%). The real paper also has match-the-list and chronology sets; the owner asked for single questions only, so the game has none.

Not verified by the checkers (from memory or a secondary source only): the six Legislative Councils (confirmed again on 13 November 2026), the 1993 voter-ID year and the indelible-ink supplier in `pol-election`, the calcium figures for millets in `health-vitamins`, and some Britannica / Planning Commission / RBI reference links in the `eco-*` files that could not be opened.

Tools added to the workflow: none in the repo; the validator gained three checks (single-line stem ≤ 200 characters, no multi-part formats, level allowed by the section tag) and knows the two new book keys.

## 1. What the owner asked for (keep all of this)
A **bilingual (Hindi + English) multiple-choice General Knowledge quiz game** for the **UPESSC** exams, separate from his other game (Mindmela):
- Syllabi: **TGT & PGT GS** and **Assistant Professor (Higher Education) GS** (both UPESSC, 30 questions each in the real exam). Every chapter/unit/topic of both syllabi is its own **section**, named with its topic. Sections only in the higher syllabus are **tagged "Higher"**; shared ones carry both tags. Arrange sections in syllabus order (`sections.js` does this: 73 sections in 9 units, plus `misc-gk` in a tenth unit that exists only for the book companion).
- **Level of questions:** TGT, PGT and Assistant Professor (Higher). Clear framing, exam-style questions with **4 options**.
- **At least 50 questions per section** (he asked for 10–15 minimum, then raised it to 50+); thousands in total; **no repetition** within a quiz.
- **No hallucination:** every question checked; agents must **proof-read every question** before it goes into the game.
- Sources: his books **Special Topics 2.0** (Hindi, text PDF) and **Parmar SSC "Fatman"** (English, scanned). Cite their page numbers, plus standard sources (NCERT, Constitution, official sites). Current affairs: **Jan 2025 – Oct 2026**, verified on the web with links.
- **Play:** tap an option → the option background turns **green if correct, red if wrong** → an **explanation** appears below the options: which topic the options belong to, why the answer is correct, important info about each option, shown as an attractive **flowchart**.
- **Language switch per question** (Hindi / English, one at a time).
- **1 to 20 players** (solo practice or a room with a code/QR).
- After finishing: **overall assessment of each player**, a **leaderboard**, celebration artwork ("cheers"), and an **answer sheet with explanation and reference** for every question.
- **UI:** light and attractive, styled like the **Vedas / ancient India**.
- Name chosen: **GS House** (English name only, at the owner's request) — unique online; intended live URL `https://lalitbhardwaj2002.github.io/gs-house/`.
- He asked to be told about anything else needed and to get suggestions for extra features (see section 8).

## 2. Status (final release, 30 Oct 2026)
- **Game: finished and released** as **GS House** (renamed from Prashnapeeth at the owner's request). Repo `Lalitbhardwaj2002/gs-house`, played at `https://lalitbhardwaj2002.github.io/gs-house/` (GitHub Pages, `main`, root). Solo + rooms of up to 20 players, bilingual UI with per-question language switch, green/red answers, explanation flowchart, option notes, references, live leaderboard, assessment with ranks, petals, printable answer sheet.
- **Questions: 1,266 checked questions in 47 of the 73 sections.** Every one was written by one agent and independently proof-read by another (`data/reports/` has each change log). The owner capped the game at under 1,500 questions (see `docs/TARGETS.md`): big sections have 40–58 questions, the small ones 6.
- **Stopped at the owner's request** before these were finished (they show as "soon" in the game):
  - `ict-applications` has only 14 checked questions (target 40) and none yet on Digital India, UPI, Aadhaar, DigiLocker, UMANG, GeM, ONDC or the DPDP Act.
  - Not started: `ict-terms` (40), `edtech`, `tra-ugc`, `eco-budget`, `eco-poverty`, `eco-agri-industry`, `eco-trade`, `geo-universe`, `geo-earth`, `geo-soil-forest`, `geo-resources`, `geo-agri-transport`, `geo-population`, `geo-up`, `sci-space`, `sci-tech`, `env-ecology`, `env-people`, `env-global`, all `ca-*` (6 each).
  To continue later: run a checker on each unchecked draft, then writers/checkers for the rest by the groups in `docs/TARGETS.md`, then `tools/validate.py data` and `tools/build_index.py`.

## 3. Set up (once)
1. Get the code: clone `https://github.com/Lalitbhardwaj2002/gs-house` (or unzip the hand-off zip) and work in that folder.
2. Put Lalit's PDFs somewhere local (he has them in `C:\Users\lalit\Downloads\`):
   - `Special Topics 2.0 Updated (1)_unlocked (1).pdf`
   - `Parmar SSC Fatman Complete Book PDF.pdf`
   - `GS syllabus.pdf` (TGT/PGT) and `higher gs syllabus.pdf` (Assistant Professor) — already encoded in `sections.js`.
3. `pip install pymupdf` then run:
   `python tools/prep_refs.py "<Special Topics PDF>" "<Fatman PDF>"` → creates `refs/` (git-ignored). **Never commit or publish `refs/`** — the books are copyrighted. Use the Fatman book only to look up facts and cite printed page numbers, never copy its text or questions.
4. Fatman page numbers: PDF image numbers ≠ printed numbers (offset grows from +9 to +30). `docs/fatman_index.md` has the chapter list and an offset table; always cite the printed number.

## 4. The pipeline
For every section: **writer agent → checker agent → build index**.

1. **Writers** (see the table in section 5). Prompt template:
   > You are a question writer for the GS House quiz. First read `docs/WRITER_BRIEF.md` and `docs/example-question.json`, then follow the brief exactly. Your two sections (ids and scopes are in `sections.js`): 1. `<id>` — <title>. Fatman printed pages: <pages>. 2. `<id>` — <title>. Fatman printed pages: <pages>. Write 55 questions per section, saving a part file every ~14 questions. Finish one section completely (parts → merge → validator ok) before starting the next. Reply in at most 120 words.
   Output: `data/draft/<id>.json` (via part files + `tools/merge_parts.py`).
2. **Checkers**, one per finished draft section:
   > You are the independent proof-reader for the GS House quiz. Read `docs/CHECKER_BRIEF.md` (and the writer brief it points to) and check section `<id>`: `data/draft/<id>.json`. Reply in at most 100 words.
   Output: `data/<id>.json` (final) + `data/reports/<id>.md` (change log).
3. After checkers: `python tools/validate.py data` (also catches duplicates across sections) and `python tools/build_index.py`.
4. Test locally: `python -m http.server 8000` in the repo folder, open `http://localhost:8000`.

**Usage limits (important):** run at most **3–4 agents at the same time**. With 12 at once the account hit its limit within minutes and almost nothing was saved. Writers must save a part every ~14 questions (the brief now says so). If an agent stops, resume it (or start a new one for the same section — it will see existing part files).

## 5. Writer assignments (73 sections → 37 batches)
Fatman pages are **printed** pages (see docs/fatman_index.md). "—" = not in Fatman (use Special Topics + standard sources + web).

| # | Sections | Fatman pages |
|---|---|---|
| 1 | hist-ivc, hist-vedic | 75–80; 81–83 |
| 2 | hist-buddhism, hist-maurya | 84–88; 89–94 |
| 3 | hist-gupta (part1 exists: 14 drafts), hist-sultanate | 95–104; 105–111 |
| 4 | hist-mughal, hist-bhakti | 112–118; 119–121 |
| 5 | hist-british, hist-1857 | 122–124 & 144–145; 125–129 |
| 6 | hist-nm1, hist-nm2 (include 1947–1950) | 130–134; 135–143 |
| 7 | culture, geo-population | 340–360 & 388–393; 352–354 |
| 8 | pol-making, pol-rights | 146–153 & 191; 154–160 |
| 9 | pol-dpsp, pol-executive | 152–153 & 158–160; 161–166 |
| 10 | pol-parliament, pol-judiciary | 167–172; 179–181 |
| 11 | pol-state, pol-local | 173–175; 182–184 |
| 12 | pol-election, pol-bodies | 185–187; 185–187 & 385–387 |
| 13 | pol-amend, pol-education | 176–178 & 188–190; — (Articles 21A, 45, 46, 28–30, 350A; RTE 2009; NEP 2020) |
| 14 | eco-basics, eco-planning | 192–200; 218–221 |
| 15 | eco-banking, eco-capital | 207–214; — |
| 16 | eco-budget, eco-poverty | 204–206; 201–203, 215–217, 394–398 |
| 17 | eco-agri-industry, eco-trade | 218–221; 215–217 & 380–384 |
| 18 | geo-universe, geo-earth | 1–8; 9–23 |
| 19 | geo-physio, geo-rivers | 24–37; 38–46 |
| 20 | geo-climate, geo-soil-forest | 47–49; 50–57 & 69–74 |
| 21 | geo-resources, geo-agri-transport | 58–62; 53–57 |
| 22 | geo-up, env-people | —; 330–331 |
| 23 | sci-physics, sci-chemistry | 222–249; 250–281 |
| 24 | sci-biology, health-hormones | 282–302, 306–310, 326–329; 303–305 |
| 25 | sci-space, sci-tech | —; — (web-verify recent missions) |
| 26 | env-ecology, env-global | 330–337; 338–339 |
| 27 | health-vitamins, health-deficiency | 322–325; 318–325 |
| 28 | health-diseases, health-enzymes | 318–321; 311–317 |
| 29 | ict-computer, ict-internet | — (Special Topics has a computer section) |
| 30 | ict-applications, ict-terms | — |
| 31 | edtech, tra-ugc | — |
| 32 | tra-teaching, tra-evaluation | — |
| 33 | tra-research, tra-data | — |
| 34 | ca-up, ca-national | — (web, Jan 2025 – Oct 2026) |
| 35 | ca-intl, ca-people | — (web) |
| 36 | ca-sports, ca-awards | 372–379; 361–371 & 399–402 (+ web) |
| 37 | ca-science | — (web) |

## 6. How the app works (for whoever edits it)
- `sections.js`: UNITS and SECTIONS (id, unit, tracks `tgt`/`higher`, English/Hindi titles, scope).
- `data/<id>.json`: checked questions; `data/index.json`: counts (from `tools/build_index.py`). Question format: see `docs/example-question.json` and the brief.
- `app.js`: host-authoritative engine. Solo runs the host locally with no network. Rooms use PeerJS (`gshouse-v1-<CODE>`), up to 20 players. The host loads only the chosen sections, picks questions evenly across them (preferring ones this device hasn't seen, stored in localStorage `pp-seen`), sends each question once (`type: 'question'`), and small status updates (`type: 'state'`). Players get instant green/red feedback from the question data. At the end the host sends each player's report; each device builds its own answer sheet from the questions it received.
- `PUBLIC_URL` in `app.js` is the future GitHub Pages address (used for invite links when hosting from localhost).
- Interface added on 13 November 2026 (`app.js`, `style.css`; service-worker cache `gshouse-v6`):
  1. The **Next question** and **Start quiz** buttons sit in a bar that stays at the bottom of the screen (`.sticky-bar`).
  2. **About each option** is folded by default (`<details class="more">`); the device remembers if the player opens it (`pp-notes`). The option text is no longer repeated in the notes.
  3. **Quick practice** on the setup screen: saved questions (`pp-marks`, the ☆ button on a question) and past mistakes (`pp-wrong`). Both use the host message `{type: 'quick', qids}`; `startQuiz(only)` runs a fixed list of question ids.
  4. Results (solo): **Retry missed questions**, and the five weakest sections as buttons that start a quiz on that section (`{type: 'quick', sections}`).
  5. Results show accuracy **by unit** first; the full section list is folded.
  6. **Progress**: the last ten quizzes on the device (`pp-history`) as a bar chart with accuracy by unit, on the home and results screens.
  7. Answer sheet: filters (all / wrong / skipped / saved), number buttons to jump to a question, option notes on or off (always printed).
  8. **Keyboard**: A–D or 1–4 answer, Enter / N / → next.
  9. **Wide screens (960 px and up)**: sections beside the settings, explanation beside the question.
  10. Settings menu (⚙): sound, **dark mode** (`pp-theme`; follows the device until set), **both languages** (`pp-both`), **text size** (`pp-fs`). All colours are CSS variables; the dark theme only swaps their values. Tap targets are at least 44 px and level chips follow the interface language.
  A short quiz over many sections now samples the sections in random order (before, a 10-question quiz over all sections used only the first ten).
- **Book companion** (added 13 November 2026). `data/book/book.json` lists the book's units and topics in the order of its contents page. A topic that is ready has `chapters`; each chapter has `id`, `pages`, titles and a `pool`. A topic that is not ready has `practice`: section ids of the bank, offered as a quiz.
  - Notes: one file per chapter, `data/book/<chapter id>.txt`, with an `@en` part and an `@hi` part. Line marks: `# title`, `## heading`, `> opening line`, `- point`, `| a | b |` table row (first row = header), `~ when :: event` timeline, `? question :: answer` recall card, `! kind | title` box (`trick`, `exam`, `recap`, `remember`) that runs to the next blank line; `**bold**` and `==highlight==` inside a line. `parseNotes` and `notesHTML` in `app.js` render them. Both language parts must have the same structure.
  - Quizzes: a chapter's `pool` is a list of `[section, path[1], optional list of path[2] values]`. The chapter quiz takes 10 TGT/PGT questions of the bank whose English `path` matches (unseen ones first); the full test takes 30 across all chapters. A chapter with `"levels": "all"` also takes Higher questions (used where the pool is a Higher-only section). So chapter quizzes use the same checked questions as the main game, and a new question joins a chapter simply by having the right `path`. **Do not rename `path[1]`/`path[2]` of a question that a chapter pool uses without updating `book.json`.**
  - Notes as a PDF (13 November 2026): `#book/pol/print` (optionally `/en`, `/hi` or `/both`) shows all the notes of a topic on one page with a *Print / Save as PDF* button; every chapter also has *Save this chapter as PDF*. Both use the browser's own print dialog (`window.print()`), so the PDF has real text and correct Hindi. The `@media print` rules in `style.css` give light colours whatever the theme, one chapter per page and open recall cards. This is the app's own writing, so it may be shared; the book's PDF must not be.
  - Screens are routes in the address bar (`#book`, `#book/pol`, `#book/pol/gc-pol-05`), so the phone's Back button works. Progress (chapters read, best score) is kept in localStorage `pp-book`.
  - To add the next topic (for example Indian History, book pp. 36–68): write chapter files `gc-hist-NN.txt`, add `chapters` with pools to that topic in `book.json` (remove `practice`), make sure every chapter's pool has at least 10 TGT/PGT questions (write new ones where it does not, or set `"levels": "all"` if the pool is a Higher-only section), run a checker on the notes, then `python tools/check_book.py` and `python tools/build_index.py` (the index lists the book files for offline use). A chapter runs to about 450–650 words in each language: an opening line, three to five headed parts with tables or timelines, a `trick` box, an `exam` box, four recall cards and a `recap` box.
  - Copyright: the book forbids reproduction. The notes and questions are written afresh; only topic names, their order and page numbers refer to the book. The PDF and its text (`refs/`) are never committed, and the app does not host or open the PDF.
  - Title (owner's choice, 13 November 2026): the section is titled "Ghatna Chakra (new edition)". The book is cited by name and page number only: a reference line at the bottom of the chapter list and of every chapter, and the references under quiz explanations. A link to the publisher's site was added and then removed at the owner's request, so there is no link to the book anywhere. The owner also asked for a public download link to his PDF of the book; this was not done and must not be done: it would distribute a paid, copyrighted book. The "independent companion, not affiliated with the publisher" line stays on the first screen.
- **Logo** (13 November 2026, owner's request: a light-and-dark logo that is his own and can be registered). The mark is a house split into a cream half and a maroon half, with a drawn G on the light half, a drawn S on the dark half and a lamp under the roof. The wordmark "GS HOUSE" is drawn as well (no font), with a little house for the O. `LOGO_MARK` and `LOGO_WORD` in `app.js` put them on the home screen and in the top bar of the game; the wordmark takes the theme colours. `python tools/make_icons.py` (needs Chrome or Edge, no other package) writes `icons/logo.svg`, `icons/logo-full.svg`, `icons/logo-full.png` and the five app icons from the same shapes: change both places together. The artwork was drawn for this app; whether the name and logo can be registered as a trade mark has not been checked (the owner should run a search of the trade marks register before applying).
- **Notes display** (same day): `==text==` in the notes files is no longer shown as a highlighter stroke (owner's request; the marks stay in the files and are simply ignored). A blank line now ends a table, list, timeline or card group, so two tables written one after the other are no longer joined. Table cells may break long words, so two- and three-column tables always fit a phone screen. Service-worker cache `gshouse-v8`.
- **Rooms and networks.** Players connect to the host directly (WebRTC). `CONFIG.stun` lists STUN servers (Google, Cloudflare), which only help two devices discover their public addresses. When both are behind strict NAT (mobile data, office Wi-Fi) a **TURN relay** is needed, and none is configured: free public relays with open passwords were tested on 13 November 2026 and none worked. To finish this, the owner creates a free TURN account (for example Metered.ca or Cloudflare Realtime TURN), and the server URLs, username and credential go into `CONFIG.turn` in `app.js` (they are visible to anyone who reads the page source, which is normal for this kind of key; choose a provider that lets the key be rotated).

## 7. Still to do
1. Done in November 2026: all sections written and checked. Open items: a TURN relay for rooms (section 6, "Rooms and networks"), and notes for the other 8 topics of the book companion (stages 3 and 4 in section 0, item 8; Polity and all of Unit 3 are written).
2. Share image `og-image.png` and Open Graph tags in `index.html`. (The app icons exist; see "Logo" in section 6.)
3. Google Search Console (the owner must sign in himself) and IndexNow for Bing.

## 8. Feature ideas to offer the owner
- Done on 13 November 2026: "revise my mistakes", bookmarks, a progress chart (see section 6).
- Daily 10-question challenge; per-section progress tracker.
- "Report a mistake" button on each question (needs a form or e-mail of his choosing).
- Exam simulation: 30 questions mixed across units, as in the real paper, with a fixed time.
- Download the answer sheet as a PDF directly (currently Print → Save as PDF).
