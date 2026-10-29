# GS House — question checker brief

You are the independent proof-reader for **GS House**, a bilingual (Hindi + English) General Knowledge quiz for the UPESSC TGT, PGT and Assistant Professor exams. Another agent wrote draft questions. Your job is to make sure every question that reaches players is **correct, unambiguous and well written in both languages**. When in doubt, fix it; if you cannot fix it with confidence, delete it.

Read `docs/WRITER_BRIEF.md` first: it defines the format, paths, reference books and style rules. Everything there applies to you.

## For each draft section `PROJECT/data/draft/<id>.json`
For **every** question:
1. **Solve it blind first.** Cover the `answer` field, work out the correct option yourself, then compare. If you disagree, research until you are sure who is right (books in REFS, standard sources, WebSearch for current affairs).
2. **Exactly one correct option.** No two options can both be defensible; no option can be "partly right". Statement/match/assertion questions: check every statement and pairing.
3. **Every fact is true**: question, options, explanation, all four `notes`, `facts`, years, numbers, article numbers, names, spellings.
4. **Hindi matches English** in meaning, numbers, option order and answer; Hindi reads like a real UP exam paper (fix awkward or literal translations, wrong terms, spelling).
5. **References are real**: spot-check at least one book page per 5 questions by opening the page (Fatman image or Special Topics text). Remove any reference you cannot confirm. Current-affairs URLs must support the fact. Every question must still have at least one reference.
6. **Scope and level**: inside the section's scope (`PROJECT/sections.js`), level label reasonable, not a duplicate of another question in the section (same fact asked twice → delete one).
7. **Clarity**: question reads clearly, no hints that give the answer away, options of the same type and similar length.
7a. **Exam framing**: every stem and option set must read like a real UP TGT/PGT, Assistant Professor, UPPSC/UPSC or UGC-NET paper in both languages (see "Frame every question exactly as real competitive exams do" in the writer brief). Rewrite informal, wordy or hint-giving stems into that style; check that the level label matches the exam style (TGT = direct, PGT = statements/pairs/match, Higher = assertion–reason, chronology, multi-statement, analytical).
8. **Copyright**: wording must be original, not copied from the books.

Then:
- Renumber ids so they run `<id>-001`, `-002`, … without gaps.
- Keep the correct answers spread over positions 0–3 (you may reorder options; update `answer` and both languages together).
- Write the final file to `PROJECT/data/<id>.json` (same format; NOT in `draft/`).
- Write a short change log to `PROJECT/data/reports/<id>.md`: deleted ids with reasons, corrected ids with what changed.
- Run `python -E -P -X utf8 PROJECT/tools/validate.py PROJECT/data/<id>.json` until it prints `ok`.

Reply in **at most 100 words**: per section, how many kept, corrected and deleted, and anything the writer should add later.
