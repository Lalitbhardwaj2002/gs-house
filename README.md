# 🪔 GS HOUSE

A free, bilingual (Hindi + English) General Knowledge quiz for the **UPESSC TGT, PGT and Assistant Professor (Higher Education)** exams. Play alone or with up to 20 friends using a room code.

**Play:** https://lalitbhardwaj2002.github.io/gs-house/

**Install it as an app (free, works offline for solo practice):**
- **Android (Chrome):** open the link and tap **📲 Install the app** on the home screen (or ⋮ menu → *Install app*).
- **iPhone/iPad (Safari):** open the link, tap **Share** → **Add to Home Screen**.
- **Computer (Chrome/Edge):** open the link and click the install icon in the address bar.

- **2,593 exam-style questions**: all 73 sections of the official syllabi (9 units, tagged TGT/PGT and Higher) and one extra section, *Miscellaneous GK* (world history, political thought and world bodies), added for the book companion. Every section has at least 20 questions.
- **Book companion, "Ghatna Chakra (new edition)"** (📚 on the home screen): study in the topic order of the Ghatna Chakra *TGT/PGT Samanya Gyan* question bank (2026 edition). All 17 topics of the book are ready: Events of state, national and international importance (6 chapters), Personalities, awards and honours (3), Sports (2), Indian History (15), Indian Freedom Movement (7), Indian Constitution and Polity (17), Legal and constitutional developments in education (3), Indian Economy (8), General Geography of India and Population (11), General Science (12), Technology in the current context (3), Environment (8), Human health and hygiene (6), Computer and Internet terminology (6), Applications of ICT (4), Developments in educational technology (5) and Miscellaneous (8). That is 124 chapters of freshly written notes in English and Hindi (timelines, tables, memory tricks, tap-to-reveal recall cards), each with its own 10-question quiz, and a 30-question full test for every topic. The notes can be saved as a PDF for offline reading: one chapter, or all the notes of a topic in English, Hindi or both. The notes and questions are original; only the topic order and page numbers refer to the book. The book is cited by name and page number only; it is not hosted or linked here.
- **NET / JRF corner** (🚪 on the home screen, marked "Opening soon"): six locked doors, for UGC NET (Paper 1, and Paper 2 in Education, Political Science and Commerce) and CSIR NET (Mathematical Sciences, Life Sciences). The subjects are not ready yet; tapping a door shows the official syllabus, unit by unit, and what is planned for it. UGC NET can be read in English or in Hindi with a switch of its own; CSIR NET is in English. The first subject with notes is **UGC NET Political Science**: its door opens unit-wise notes (Unit 1, Political Theory: 15 topics in English and Hindi, each with tables, flash cards, a box on what past papers ask, a one-minute revision and references at the end). **CSIR NET Mathematical Sciences** is being written unit by unit in English, with typeset formulas: <!--maths-status-->Units 1 to 3 are ready (40 topics: analysis and linear algebra; complex analysis, algebra and topology; differential equations, numerical analysis, calculus of variations, integral equations and mechanics)<!--/maths-status-->.
- **Its own logo:** a house in a light and a dark half with the letters G and S and a lamp under the roof, and a drawn wordmark. The files are in `icons/` (`logo.svg`, `logo-full.svg`, `logo-full.png`); `tools/make_icons.py` draws them and the app icons.
- **Every question is one short, single question** framed like UP TGT/PGT and Assistant Professor previous-year papers. No long statement, matching or assertion–reason sets.
- **The level follows the tag:** TGT/PGT sections hold TGT and PGT questions, Higher sections hold Higher questions, and shared sections hold a mix. Choosing *TGT / PGT* or *Assistant Professor* as the syllabus serves only the questions of that level.
- The first 1,266 questions were written by one AI agent and **independently proof-read by another** (change logs in `data/reports/`). In November 2026 their long stems were rewritten as single questions, the remaining sections were written, and all 48 small sections were extended to 20 questions each (922 new questions in all). Every rewritten and new question then had the same independent proof-read by a separate checker agent; each section's report has a part headed "Check of 12 November 2026" or "Check of 13 November 2026". The Higher questions follow the single-question style of the UPESSC Assistant Professor paper of 18 April 2026 (conceptual stems such as "primarily because" and "most accurately refers to"); about 88% of them are conceptual rather than plain recall.
- Tap an option: it turns **green** if correct, **red** if wrong, and an explanation appears with a topic flowchart, key facts and references (NCERT, the Constitution, official sites, and page numbers of *Special Topics 2.0*, *Parmar SSC*, *Parmar SSC Current Affairs 2026* and *TGT/PGT Samanya Gyan*). A note on every option opens with one tap. The **Next question** button stays at the bottom of the screen.
- Set in **Times New Roman** with large, well-spaced text for fast reading in both languages. A settings menu (⚙) has **dark mode**, a **text-size** control (50% to 150% in steps of ten, for every screen of the app), sound, and a view that shows each question in **both languages** at once.
- **Pause and Submit** during a quiz: Pause stops the clock and hides the question until Resume; Submit asks "Submit the quiz?" in the app's own dialog, then ends the quiz and shows the result for the questions reached. In a room the host has both buttons and they act for everyone.
- Switch any question between Hindi and English.
- **Save a question** with the star, and practise your **saved questions** or your **past mistakes** from the setup screen.
- At the end: a personal assessment (score, accuracy, time, accuracy by unit and level, the five weakest sections as buttons that start a quiz on that section), **Retry missed questions**, a leaderboard, a progress chart of your last ten quizzes, and a printable answer sheet with explanations and references that can be filtered to wrong, skipped or saved questions.
- In a room, the time per question (Off, 30, 45, 60, 90 seconds) and negative marking (No, −1/3, −1/4) are the first settings on the screen. The host can move to the next question at any time, and everyone sees how many players have answered ("Everyone has answered" turns green).
- On a computer: the sections sit beside the settings, the explanation beside the question, and the keyboard works (A–D or 1–4 to answer, Enter for the next question).
- Vedic-manuscript look; installable as an app; solo practice works offline.

See [docs/HANDOFF.md](docs/HANDOFF.md) for the status and how to add more questions.

## Run it locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Folders
- `sections.js` — the syllabus sections
- `data/` — checked questions (`<section>.json`), counts (`index.json`) and checker reports (`reports/`)
- `tools/` — validator, merge and index builder (`prep_refs.py` prepares the reference books locally; they are never published)
- `docs/` — hand-off notes, question targets and the writer/checker briefs
