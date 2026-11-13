# 🪔 GS HOUSE

A free, bilingual (Hindi + English) General Knowledge quiz for the **UPESSC TGT, PGT and Assistant Professor (Higher Education)** exams. Play alone or with up to 20 friends using a room code.

**Play:** https://lalitbhardwaj2002.github.io/gs-house/

**Install it as an app (free, works offline for solo practice):**
- **Android (Chrome):** open the link and tap **📲 Install the app** on the home screen (or ⋮ menu → *Install app*).
- **iPhone/iPad (Safari):** open the link, tap **Share** → **Add to Home Screen**.
- **Computer (Chrome/Edge):** open the link and click the install icon in the address bar.

- **2,188 exam-style questions** covering all 73 sections of the official syllabi (9 units, tagged TGT/PGT and Higher). Every section has at least 20 questions.
- **Every question is one short, single question** framed like UP TGT/PGT and Assistant Professor previous-year papers. No long statement, matching or assertion–reason sets.
- **The level follows the tag:** TGT/PGT sections hold TGT and PGT questions, Higher sections hold Higher questions, and shared sections hold a mix. Choosing *TGT / PGT* or *Assistant Professor* as the syllabus serves only the questions of that level.
- The first 1,266 questions were written by one AI agent and **independently proof-read by another** (change logs in `data/reports/`). In November 2026 their long stems were rewritten as single questions, the remaining sections were written, and all 48 small sections were extended to 20 questions each (922 new questions in all). Every rewritten and new question then had the same independent proof-read by a separate checker agent; each section's report has a part headed "Check of 12 November 2026" or "Check of 13 November 2026". The Higher questions follow the single-question style of the UPESSC Assistant Professor paper of 18 April 2026 (conceptual stems such as "primarily because" and "most accurately refers to"); about 88% of them are conceptual rather than plain recall.
- Tap an option: it turns **green** if correct, **red** if wrong, and an explanation appears with a topic flowchart, key facts and references (NCERT, the Constitution, official sites, and page numbers of *Special Topics 2.0*, *Parmar SSC*, *Parmar SSC Current Affairs 2026* and *TGT/PGT Samanya Gyan*). A note on every option opens with one tap. The **Next question** button stays at the bottom of the screen.
- Set in **Times New Roman** with large, well-spaced text for fast reading in both languages. A settings menu (⚙) has **dark mode**, a **text-size** control, sound, and a view that shows each question in **both languages** at once.
- Switch any question between Hindi and English.
- **Save a question** with the star, and practise your **saved questions** or your **past mistakes** from the setup screen.
- At the end: a personal assessment (score, accuracy, time, accuracy by unit and level, the five weakest sections as buttons that start a quiz on that section), **Retry missed questions**, a leaderboard, a progress chart of your last ten quizzes, and a printable answer sheet with explanations and references that can be filtered to wrong, skipped or saved questions.
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
