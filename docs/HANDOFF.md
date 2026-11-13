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

Checking: every question rewritten or written in November 2026 has had an independent proof-read by a separate checker agent (the "Rework pass" in `docs/CHECKER_BRIEF.md`): 820 rewritten or new questions in the older files, all 20 questions of each of the 24 sections extended in step 5, the 105 reframed `tra-*` questions and the 336 questions of step 6. Each `data/reports/<section>.md` has a part headed "Check of 12 November 2026" or "Check of 13 November 2026". Current-affairs facts were verified on the web and against `refs/parmar_ca_2026.txt`; they go out of date, so re-check the `ca-*` files before each exam season.

Lesson from step 6: when adding questions to a section, read the full text (notes, explanation and facts) of the questions already there. In the first batch about a quarter of the new questions asked a fact that an older question's notes already stated, and the checkers had to replace them.

Framing: 413 of the 471 Higher questions (88%) are conceptual in the style of the 18 April 2026 paper (`tra-*` 89%). The real paper also has match-the-list and chronology sets; the owner asked for single questions only, so the game has none.

Not verified by the checkers (from memory or a secondary source only): the strength of the Supreme Court (34) and the six Legislative Councils, the 1993 voter-ID year and the indelible-ink supplier in `pol-election`, the calcium figures for millets in `health-vitamins`, and some Britannica / Planning Commission / RBI reference links in the `eco-*` files that could not be opened.

Tools added to the workflow: none in the repo; the validator gained three checks (single-line stem ≤ 200 characters, no multi-part formats, level allowed by the section tag) and knows the two new book keys.

## 1. What the owner asked for (keep all of this)
A **bilingual (Hindi + English) multiple-choice General Knowledge quiz game** for the **UPESSC** exams, separate from his other game (Mindmela):
- Syllabi: **TGT & PGT GS** and **Assistant Professor (Higher Education) GS** (both UPESSC, 30 questions each in the real exam). Every chapter/unit/topic of both syllabi is its own **section**, named with its topic. Sections only in the higher syllabus are **tagged "Higher"**; shared ones carry both tags. Arrange sections in syllabus order (`sections.js` does this: 73 sections in 9 units).
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

## 7. Still to do
1. Check the unchecked drafts and write/check the remaining 36 sections (see section 2). Then validate all and build the index.
2. App icons (192, 512, maskable, apple-touch) in `manifest.json`; share image `og-image.png`; Open Graph tags in `index.html`.
3. Google Search Console (the owner must sign in himself) and IndexNow for Bing.

## 8. Feature ideas to offer the owner
- Done on 13 November 2026: "revise my mistakes", bookmarks, a progress chart (see section 6).
- Daily 10-question challenge; per-section progress tracker.
- "Report a mistake" button on each question (needs a form or e-mail of his choosing).
- Exam simulation: 30 questions mixed across units, as in the real paper, with a fixed time.
- Download the answer sheet as a PDF directly (currently Print → Save as PDF).
