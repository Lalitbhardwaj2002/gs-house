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
3. **Standard sources**: NCERT textbooks (name class, book, chapter), the Constitution of India (article numbers), official government/RBI/ISRO/UGC/Census websites. For these give `{"source": "…"}` and a `url` where you used one.
4. **Current affairs** (Jan 2025 – Oct 2026; today is late October 2026): verify every fact with WebSearch (and WebFetch if needed) from reliable sources (PIB, official ministry/organisation sites, The Hindu, Indian Express, Hindustan Times, Reuters, BBC). Cite the URL. If sources disagree or you cannot confirm it, do not use it. Prefer settled facts (winners, appointments, launches, dates) over things that change weekly. Add "(as of October 2026)" where a fact could change.

**Copyright:** write every question, option and explanation in your own words. Never copy sentences, tables, lists or questions from either book. Facts are free; wording is not.

## How many, and what kind
- Write **55 questions per section** (the checker may remove a few; at least 50 must survive).
- Level mix per section: about **35% TGT** (clear, direct, single-fact), **40% PGT** (deeper, conceptual, multi-statement), **25% Higher** (analytical: assertion–reason, match the lists, chronological order, "which of the following is NOT", two-or-more-statement). Set `level` honestly.
- Cover the **whole scope** of the section evenly: no two questions should test the same fact. Spread topics across sub-topics.
- Exam style like real UPESSC/UPSC-style papers. Use these formats (put line breaks as `\n` inside `q`):
  - Direct: "Who/Which/When/Where …?"
  - Statements: "Consider the following statements:\n1. …\n2. …\n3. …\nWhich of the above is/are correct?" with options like "Only 1", "1 and 2 only", "2 and 3 only", "1, 2 and 3". Hindi: "निम्नलिखित कथनों पर विचार कीजिए:\n1. …\nउपर्युक्त में से कौन-सा/से कथन सही है/हैं?" with "केवल 1", "केवल 1 और 2", "केवल 2 और 3", "1, 2 और 3".
  - Match: "Match List-I with List-II:\nList-I: A. … B. … C. … D. …\nList-II: 1. … 2. … 3. … 4. …" with options like "A-2, B-1, C-4, D-3". Hindi: "सूची-I को सूची-II से सुमेलित कीजिए:\nसूची-I: A. … \nसूची-II: 1. …".
  - Assertion–Reason (Higher): "Assertion (A): …\nReason (R): …" with the standard four options: "Both A and R are true, and R is the correct explanation of A" / "Both A and R are true, but R is not the correct explanation of A" / "A is true, but R is false" / "A is false, but R is true". Hindi: "कथन (A): …\nकारण (R): …" / "कथन (A) और कारण (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या है" / "कथन (A) और कारण (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं है" / "कथन (A) सही है, परंतु कारण (R) गलत है" / "कथन (A) गलत है, परंतु कारण (R) सही है" (options must not start with "(A)": the validator reads that as an option label).
  - Chronology: "Arrange in chronological order: …"
- **Frame every question exactly as real competitive exams do** (owner's instruction): previous-year papers of UP TGT/PGT (UPSESSB/UPESSC), UPHESC/UPESSC Assistant Professor, UPPSC, UPSC Prelims and UGC-NET are the model. Concise, formal stems; no conversational tone, no hints, no explanation inside the stem, no "fun fact" style. Typical stems:
  - English: "Which one of the following …?", "Who among the following …?", "… is known as:", "Which of the following pairs is/are correctly matched?
1. … – …
2. … – …
3. … – …
Select the correct answer using the codes given below:", "Match List-I with List-II and select the correct answer using the codes given below the lists:", "Arrange the following in chronological order and select the correct answer from the codes given below:", "Which of the statements given above is/are correct?"
  - Hindi (UP papers): "निम्नलिखित में से कौन-सा/सी …?", "निम्नलिखित में से किसे … कहा जाता है?", "निम्नलिखित युग्मों में से कौन-सा/से सही सुमेलित है/हैं?", "सूची-I को सूची-II से सुमेलित कीजिए तथा सूचियों के नीचे दिए गए कूट से सही उत्तर चुनिए:", "निम्नलिखित को कालानुक्रम में व्यवस्थित कीजिए तथा नीचे दिए गए कूट से सही उत्तर चुनिए:", "नीचे दिए गए कूट का प्रयोग कर सही उत्तर चुनिए:"
  - Level = exam: **TGT** like UP TGT papers (direct one-liners, one fact); **PGT** like UP PGT/UPPSC (statements, pairs, match lists); **Higher** like Assistant Professor/UGC-NET/UPSC (assertion–reason, 3–4 statements, chronology, "codes", analytical).
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
