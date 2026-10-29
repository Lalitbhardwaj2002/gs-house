# GS House — hand-off for the next Claude session

Read this whole file first. It records what the owner (Lalit) asked for, what is already built, and exactly how to continue.

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
- Name chosen: **GS House (जीएस हाउस)** — unique online; intended live URL `https://lalitbhardwaj2002.github.io/gs-house/`.
- He asked to be told about anything else needed and to get suggestions for extra features (see section 8).

## 2. Status (final release, 30 Oct 2026)
- **Game: finished and released** as **GS House** (renamed from Prashnapeeth at the owner's request). Repo `Lalitbhardwaj2002/gs-house`, played at `https://lalitbhardwaj2002.github.io/gs-house/` (GitHub Pages, `main`, root). Solo + rooms of up to 20 players, bilingual UI with per-question language switch, green/red answers, explanation flowchart, option notes, references, live leaderboard, assessment with ranks, petals, printable answer sheet.
- **Questions: 1,164 checked questions in 37 of the 73 sections.** Every one was written by one agent and independently proof-read by another (`data/reports/` has each change log). The owner capped the game at under 1,500 questions (see `docs/TARGETS.md`): big sections have 40–58 questions, the small ones 6.
- **Stopped at the owner's request** before these were finished (they show as "soon" in the game):
  - Drafted but **not checked** (kept only on the owner's computer in `data/draft/`, never publish unchecked): `ict-internet` (40), `pol-election`, `pol-bodies`, `pol-amend`, `pol-education` (6 each), part of `ict-applications`.
  - Not started: `ict-applications`, `ict-terms` (40 each), `edtech`, `tra-ugc`, all `eco-*`, `geo-universe`, `geo-earth`, `geo-soil-forest`, `geo-resources`, `geo-agri-transport`, `geo-population`, `geo-up`, `sci-space`, `sci-tech`, `env-*`, all `ca-*` (6 each).
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

## 7. Still to do
1. Check the unchecked drafts and write/check the remaining 36 sections (see section 2). Then validate all and build the index.
2. App icons (192, 512, maskable, apple-touch) in `manifest.json`; share image `og-image.png`; Open Graph tags in `index.html`.
3. Google Search Console (the owner must sign in himself) and IndexNow for Bing.

## 8. Feature ideas to offer the owner
- "Revise my mistakes" mode built from wrong answers saved on the device.
- Bookmark questions; daily 10-question challenge; per-section progress tracker.
- "Report a mistake" button on each question (needs a form or e-mail of his choosing).
- Exam simulation: 30 questions mixed across units, as in the real paper, with a fixed time.
- Download the answer sheet as a PDF directly (currently Print → Save as PDF).
