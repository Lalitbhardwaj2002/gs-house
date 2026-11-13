# GS House — question writer brief

You are writing exam-quality multiple-choice questions for **GS House**, a bilingual (Hindi + English) General Knowledge quiz for the **UPESSC** exams: **TGT, PGT** (Trained Graduate Teacher / Lecturer) and **Assistant Professor (Higher Education)**. Players are serious exam aspirants. Accuracy matters more than anything else: a wrong answer key is worse than a missing question.

## Paths
- PROJECT = the root folder of the `gs-house` repository (the folder that contains `app.js`).
- REFS = `PROJECT/refs` — made by `python tools/prep_refs.py <Special Topics PDF> <Fatman PDF>` (see docs/HANDOFF.md). It is git-ignored: never commit it.
- Section list with each section's scope: `PROJECT/sections.js` (read the `scope` of your sections and stay inside it; other sections cover the rest).
- A complete example question in the exact format: `PROJECT/docs/example-question.json`
- Fatman chapter index with printed page numbers: `PROJECT/docs/fatman_index.md`

## Work in small saved steps (important)
Usage limits can stop you at any moment. **Save a part file after every ~14 questions** instead of researching everything first. Read only the reference pages you need for the next part (roughly 10 page images per part at most), write the part, save it, then continue. If you are stopped and later resumed, look at which part files already exist and carry on from the next one.
- Write each section in **parts of about 14 questions** (a single huge file write tends to fail): `PROJECT/data/draft/<section-id>.part1.json`, `.part2.json`, … each shaped `{"section": "<section-id>", "questions": [...]}`. Then join them with `python -E -P -X utf8 PROJECT/tools/merge_parts.py PROJECT/data/draft/<section-id>` — this writes `PROJECT/data/draft/<section-id>.json`, numbers the ids and deletes the parts.
- Validator: `python -E -P -X utf8 PROJECT/tools/validate.py PROJECT/data/draft/<section-id>.json` — it must print `ok` before you finish.

## Reference books (use them to find and confirm facts; cite page numbers)
1. **Special Topics 2.0** (Hindi): full text in `REFS/special_topics.txt`, with a line `===== SPECIAL TOPICS PDF PAGE n =====` before each page. Search it with Grep (Hindi and English keywords). The page number to cite is that `n`. **This book contains errors** (for example, it says a manometer measures gas density; it measures pressure). Never copy a fact from it without confirming it is correct; never cite it for a fact it gets wrong.
2. **Parmar SSC "Fatman"** (English, scanned): page images `REFS/fatman/pNNN.jpg` and chapter index `PROJECT/docs/fatman_index.md`. Open the relevant chapter's pages with the Read tool. Cite the **printed** page number (bottom centre of the page), not the image number. Only cite a page you have actually seen the fact on.
3. **Two more books (added November 2026)**: *Parmar SSC Current Affairs 2026* (`REFS/parmar_ca_2026.txt`, cite `{"book": "parmar-ca", "page": n}` with the PDF page n, 1–228) and the solved-papers book *TGT/PGT Samanya Gyan* (`REFS/tgt_pgt_samanya_gyan.txt`, `{"book": "tgt-pgt-gk", "page": n}`, 1–280; use it mainly to see how real questions are framed).
4. **Standard sources**: NCERT textbooks (name class, book, chapter), the Constitution of India (article numbers), official government/RBI/ISRO/UGC/Census websites. For these give `{"source": "…"}` and a `url` where you used one.
5. **Current affairs** (Jan 2025 – Oct 2026; today is late October 2026): verify every fact with WebSearch (and WebFetch if needed) from reliable sources (PIB, official ministry/organisation sites, The Hindu, Indian Express, Hindustan Times, Reuters, BBC). Cite the URL. If sources disagree or you cannot confirm it, do not use it. Prefer settled facts (winners, appointments, launches, dates) over things that change weekly. Add "(as of October 2026)" where a fact could change.

**Copyright:** write every question, option and explanation in your own words. Never copy sentences, tables, lists or questions from either book. Facts are free; wording is not.

## How many, and what kind
- How many: see `docs/TARGETS.md` (40 for the ICT, educational technology and teaching/research sections; about 6 for a small section; the big early sections have 42–58).
- **One short, single question per item (owner's rule, November 2026).** The stem is one line of at most 200 characters, with no line breaks. Do NOT write statement sets ("Consider the following statements…"), match-the-list, assertion–reason, "which of the pairs", chronology or any other multi-part format: the validator rejects them. Test one fact or one idea per question.
- **The level must follow the section's tag in `sections.js`** (the validator checks this):
  - section tagged only `tgt` → every question is `TGT` or `PGT`;
  - section tagged only `higher` → every question is `Higher`;
  - section tagged with both → a mix of `TGT`, `PGT` and `Higher` (about 40% / 35% / 25%).
- What each level means:
  - **TGT**: a direct one-fact question as in UP TGT papers ("Who…", "Which…", "… is located in:").
  - **PGT**: the less obvious fact or a slightly deeper point, as in UP PGT / GIC Lecturer / UPPSC papers (dates, articles, committees, "which one of the following is NOT…").
  - **Higher**: a single conceptual or applied question, as in the UPESSC Assistant Professor paper of 18 April 2026: "… most accurately refers to:", "… differs from … mainly because:", "… primarily seeks to:", "… is best described as:", a short numerical or a reasoned "why". Still one stem and four options.
- Cover the **whole scope** of the section evenly: no two questions should test the same fact, and no English stem may repeat one in any other section (the validator checks all sections together).
- **Frame every question as real competitive exams do**: previous-year papers of UP TGT/PGT, GIC/GDC, UPHESC/UPESSC Assistant Professor and UPPSC are the model. Concise, formal stems; no conversational tone, no hints, no explanation inside the stem. Typical stems:
  - English: "Which one of the following …?", "Who among the following …?", "… is known as:", "… was established in:", "Which one of the following is NOT …?"
  - Hindi (UP papers): "निम्नलिखित में से कौन-सा/सी …?", "… किसे कहा जाता है?", "… कहाँ स्थित है?", "… की स्थापना कब हुई?", "निम्नलिखित में से कौन-सा … नहीं है?"
- Exactly **one** correct option. Distractors must be plausible and of the same kind (four rulers, four years, four articles). Avoid "All of the above / None of the above" (at most 2 per section). Write "NOT" in capitals when a question asks for the exception (Hindi: "नहीं").
- **Spread the correct answer evenly** over positions 0–3 (`answer` is the 0-based index of the correct option in both languages). Option order must be identical in `en` and `hi`.
- Options must not start with "(a)", "A." etc.; the game adds A–D itself.

## The fields (see the example file)
- `id`: `<section-id>-001`, `-002`, … in order.
- `en` and `hi` each have: `q`, `options` (4), `explanation` (1–3 sentences: why the answer is right), `notes` (4 strings, one per option in order A–D: a true, short fact about that option — what it really is, or why it is wrong here), `path` (2–4 steps from broad to specific, e.g. ["Indian Polity", "Fundamental Rights", "Right to Education"] — this becomes the flowchart), `facts` (1–3 short "remember this" facts related to the topic).
- `hi` is the same question in **natural exam Hindi** as used in UP government papers (Devanagari, proper terms such as अनुच्छेद, संविधान संशोधन, महाजनपद), not a word-for-word machine translation. Keep numbers, years and article numbers identical to `en`.
- `refs`: 1–3 references, best first. Use `{"book": "special-topics", "page": n}`, `{"book": "fatman", "page": printed_page}`, `{"source": "NCERT Class 11 Indian Constitution at Work, Ch. 2"}`, `{"source": "PIB press release", "url": "https://…"}`. Every question needs at least one; never invent a page.

## Before you finish
1. Re-read every question once as a strict examiner: is the key definitely right? Is exactly one option correct? Do `notes` and `facts` contain only true statements? Does the Hindi say the same thing as the English?
2. Run the validator and fix every error.
3. Reply in **at most 120 words**: questions per section, level mix, and any sub-topic you could not cover or facts you dropped as unverifiable. Do not paste questions in your reply.
