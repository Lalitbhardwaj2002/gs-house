# GS House — question checker brief

You are the independent proof-reader for **GS House**, a bilingual (Hindi + English) General Knowledge quiz for the UPESSC TGT, PGT and Assistant Professor exams. Another agent wrote draft questions. Your job is to make sure every question that reaches players is **correct, unambiguous and well written in both languages**. When in doubt, fix it; if you cannot fix it with confidence, delete it.

Read `docs/WRITER_BRIEF.md` first: it defines the format, paths, reference books and style rules. Everything there applies to you.

## For each draft section `PROJECT/data/draft/<id>.json`
For **every** question:
1. **Solve it blind first.** Cover the `answer` field, work out the correct option yourself, then compare. If you disagree, research until you are sure who is right (books in REFS, standard sources, WebSearch for current affairs).
2. **Exactly one correct option.** No two options can both be defensible; no option can be "partly right".
3. **Every fact is true**: question, options, explanation, all four `notes`, `facts`, years, numbers, article numbers, names, spellings.
4. **Hindi matches English** in meaning, numbers, option order and answer; Hindi reads like a real UP exam paper (fix awkward or literal translations, wrong terms, spelling).
5. **References are real**: spot-check at least one book page per 5 questions by opening the page (Fatman image or Special Topics text). Remove any reference you cannot confirm. Current-affairs URLs must support the fact. Every question must still have at least one reference.
6. **Scope and level**: inside the section's scope (`PROJECT/sections.js`), level label reasonable, not a duplicate of another question in the section (same fact asked twice → delete one).
7. **Clarity**: question reads clearly, no hints that give the answer away, options of the same type and similar length.
7a. **Exam framing**: every stem and option set must read like a real UP TGT/PGT, Assistant Professor, UPPSC/UPSC or UGC-NET paper in both languages (see "Frame every question exactly as real competitive exams do" in the writer brief). Rewrite informal, wordy or hint-giving stems into that style; check that every stem is **one short single-line question** (no statement sets, matching, assertion–reason or chronology) and that the level fits the section tag (tgt-only section → TGT/PGT, higher-only → Higher, both → a mix; Higher = one conceptual or applied question).
8. **Copyright**: wording must be original, not copied from the books.

Then:
- Renumber ids so they run `<id>-001`, `-002`, … without gaps.
- Keep the correct answers spread over positions 0–3 (you may reorder options; update `answer` and both languages together).
- Write the final file to `PROJECT/data/<id>.json` (same format; NOT in `draft/`).
- Write a short change log to `PROJECT/data/reports/<id>.md`: deleted ids with reasons, corrected ids with what changed.
- Run `python -E -P -X utf8 PROJECT/tools/validate.py PROJECT/data/<id>.json` until it prints `ok`.

Reply in **at most 100 words**: per section, how many kept, corrected and deleted, and anything the writer should add later.

## Rework pass: checking questions that are already in `data/`
Use this section when you are asked to check questions that are already in `data/<section>.json` (rewritten or newly added questions that no checker has seen). Everything above still applies, with these differences.

**Where and what**
- Work only in the repository folder. Edit `data/<section>.json` in place; there is no draft folder for this job.
- `refs/tocheck.txt` has one line per section: `<section> | changed/total | question numbers`. Check exactly the numbers listed for the sections you were given. Do not touch other questions unless you notice a clear error, and never touch sections that were not given to you (other checkers are working on them at the same time).
- View questions compactly in both languages with `python -E -P -X utf8 tools/show.py data/<section>.json 003 017 …` (or `all`).
- The books *Special Topics* and *Fatman* are not on this machine. Verify facts from your own knowledge and from WebSearch/WebFetch (NCERT, official government and organisation sites, PIB, Britannica). For current affairs also search `refs/parmar_ca_2026.txt` (page markers `===== PARMAR-CA PDF PAGE n =====`; cite as `{"book": "parmar-ca", "page": n}`). Today is 12 November 2026.

**For every listed question**
1. Solve it blind, then compare with `answer` (0-based: 0 = A).
2. Exactly one option is correct; the other three are definitely wrong.
3. Every fact is true: stem, options, explanation, each of the four `notes` (note *i* must be about option *i*), `facts`, years, numbers, names, article numbers.
4. The explanation supports the keyed answer and fits the question as it is now worded.
5. Hindi says the same as English (same question, same option order, same numbers) in natural UP-exam Hindi.
6. Rules the validator enforces: the stem is ONE short single-line question of at most 200 characters (no statement sets, match-the-list, assertion–reason or chronology); four different options of at most 160 characters; `level` stays as it is, because it is fixed by the section's syllabus tag.
7. Framing as in real UP TGT/PGT and Assistant Professor papers: formal, concise, no hint in the stem, options of the same kind.
8. Every question keeps at least one reference; add an official source when you correct a fact.

**Fixing**
- Make the smallest edit that makes the question correct (Edit tool on the JSON, or a small Python script that keeps UTF-8, `ensure_ascii=False`, `indent=1` and the trailing newline).
- If you reorder options, move `en.options`, `hi.options`, `en.notes` and `hi.notes` together and update `answer`.
- Never change an `id` and never delete a question. If one cannot be repaired, replace its content with a new single question on the same sub-topic (same id, same level), complete in both languages.
- After each file: `python -E -P -X utf8 tools/validate.py data/<section>.json` must print `ok`.
- Append to `data/reports/<section>.md` (create it if missing) a part headed `## Check of 12 November 2026 (single-question rework)`: how many checked, the ids corrected with a one-line reason each, the ids replaced.

**Do not** commit or push, run `tools/build_index.py`, edit files outside your sections, copy wording from books, or start sub-agents. Work file by file and save as you go.

Final reply in at most 120 words: per section, how many checked / corrected / replaced, and anything you could not verify.
