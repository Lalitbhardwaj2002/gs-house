# 🪔 GS House (जीएस हाउस)

A bilingual (Hindi + English) General Knowledge quiz for the **UPESSC TGT, PGT and Assistant Professor (Higher Education)** exams. Play alone or with up to 20 friends using a room code.

- Exam-style questions with 4 options, organised by the official syllabi (73 sections in 9 units, tagged TGT/PGT and Higher).
- Tap an option: it turns green if correct, red if wrong, and an explanation appears with a topic flowchart, a note on every option, key facts and references.
- Switch any question between Hindi and English.
- At the end: a personal assessment (score, accuracy, time, strong and weak sections), a leaderboard, and a printable answer sheet with explanations and references.
- Light, Vedic-manuscript look; installable as an app.

**Status:** work in progress. The game is built; the question bank is being written and checked. See [docs/HANDOFF.md](docs/HANDOFF.md) for the full plan and how to continue.

## Run it locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Folders
- `sections.js` — the syllabus sections
- `data/` — checked questions (`<section>.json`), counts (`index.json`), drafts (`draft/`) and checker reports (`reports/`)
- `tools/` — validator, merge, index builder, reference preparation
- `docs/` — hand-off notes and the writer/checker briefs
