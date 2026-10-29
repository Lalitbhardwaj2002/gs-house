# 🪔 GS House (जीएस हाउस)

A free, bilingual (Hindi + English) General Knowledge quiz for the **UPESSC TGT, PGT and Assistant Professor (Higher Education)** exams. Play alone or with up to 20 friends using a room code.

**Play:** https://lalitbhardwaj2002.github.io/gs-house/

- **1,164 exam-style questions** in 37 sections of the official syllabi (73 sections in 9 units, tagged TGT/PGT and Higher). Formats as in real papers: direct, statements, pairs, match-the-list with codes, chronology, assertion–reason.
- Every question was written by one AI agent and **independently proof-read by another** (blind solve, facts, Hindi wording, references). Change logs are in `data/reports/`.
- Tap an option: it turns **green** if correct, **red** if wrong, and an explanation appears with a topic flowchart, a note on every option, key facts and references (NCERT, the Constitution, official sites, and page numbers of *Special Topics 2.0* and *Parmar SSC*).
- Switch any question between Hindi and English.
- At the end: a personal assessment (score, accuracy, time, strong and weak sections), a leaderboard, and a printable answer sheet with explanations and references.
- Light, Vedic-manuscript look; installable as an app; solo practice works offline.

Sections still marked "soon" are planned; see [docs/HANDOFF.md](docs/HANDOFF.md) for the status and how to add more questions.

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
