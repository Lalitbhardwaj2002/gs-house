# UP TGT / PGT Mathematics: solved past papers, check log

Each paper below was transcribed and solved by one agent from the page images of a copy shared after the exam (the copies stay outside the repository), then checked by a second, independent mathematician agent, who compared every question and option with the page images, solved every question before looking at the first answers, recomputed answers by script where possible, and corrected the solutions and the option notes. A question with no defensible answer (no correct option, two defensible answers, impossible data, or a printed text whose intended meaning is a guess) is left out of the quiz; the table lists them. Where a paper prints its board's key (DSSSB) and the worked answer differs, the solution says so and why.

Questions shown to players: 745 from 7 papers (22 November 2026).

| Paper | Level | Transcribed | In the quiz | Left out |
|---|---|---|---|---|
| UP TGT Mathematics 2026 (3 June) | TGT | 125 | 125 | — |
| UP TGT Mathematics 2021 | TGT | 120 | 120 | — |
| UPPSC LT Grade Mathematics 2025 (6 December) | TGT | 120 | 107 | Q32, Q61, Q74, Q94, Q101, Q104, Q115, Q122, Q133, Q135, Q137, Q144, Q145 |
| UPPSC LT Grade Mathematics 2018 (29 July) | TGT | 112 | 108 | Q72, Q102, Q111, Q142 |
| DSSSB TGT Mathematics 2021 (2 September, shift 3) | TGT | 90 | 84 | Q101, Q126, Q128, Q136, Q185, Q190 |
| UP PGT Mathematics 2026 (10 May) | PGT | 125 | 125 | — |
| UPPSC GIC Lecturer Mathematics 2026 (14 June) | PGT | 80 | 76 | Q98, Q110, Q115, Q119 |

## UP TGT Mathematics 2026 (3 June)

- Source: UPESSC TGT written examination, Mathematics, held on 3 June 2026 (question booklet as shared after the exam).
- In the app: `data/mq/up-tgt-2026.json`, 125 questions; full mock 60 seconds a question, negative marking none.

### Transcription and first solution

### UP TGT (UPESSC) Mathematics, written examination of 3 June 2026

- Source: `papers/up-tgt-2026/paper.pdf`, 28 PDF pages, a scanned bilingual (Hindi/English) question booklet distributed by a coaching site (its logo watermark on every page, a vertical serial number and small QR codes printed over the text, and a candidate's handwritten ticks and rough work). The candidate's marks were ignored.
- Page layout of the PDF:
  - p1 is the site's cover page; p2, p3, p26 and p27 are advertisements (skipped).
  - p4–p25 hold booklet pages 2–22. **p16 is a duplicate scan of p15** (booklet page 13, Q65–Q70), so nothing is missing.
  - p28 holds booklet page 23 (Q122–Q125).
- Question range: **Q1–Q125, all mathematics**, as expected. Every question is in `questions.jsonl`, numbered 1–125 in order with no repeats. No questions were skipped.
- Official key: none is printed, so `"key": null` everywhere. Level is `"TGT"` everywhere.
- Text: the English half of each question is used. The Hindi was compared where needed and matches the English. No misprints were corrected; odd-looking distractors are kept as printed:
  - Q10 (C) has no division by $h$.
  - Q69 (A) is $(2n\pi+3)/\pi$.
  - Q84 (C) is printed as $\sqrt{3/2}$.
- Figures: Q6, Q45, Q47, Q81, Q82 and Q121 carry small figures. Each figure only restates the text, so it was left out and the question still reads completely.
- Answers set by me: A = 29, B = 34, C = 31, D = 31.

#### Verification
`verify.py` recomputes **86 of the 125 answers** a second way: numerical evaluation, substitution, brute force, simulation, or numpy linear algebra. In each check every option is tested independently.
- 85 checks confirm my answer as the only passing option.
- Q118 passes two options, (A) and (B), as noted in its flag.
- No check disagrees with my answer.

The other 39 questions are definitions and theory with no numeric content (axioms, theorems, units, statistical definitions). I checked those by hand.

#### Flags (3)
- **Q77**: "A function $f$ is continuous at $x=a$ if-". Option (A), "$f$ is differentiable at $a$", is also a true sufficient condition. (D), $\lim_{x\to a}f(x)=f(a)$, is the defining condition and is taken as the answer.
- **Q118**: Parametric point of the ellipse. Option (A), $(a\sin\theta, b\cos\theta)$, also lies on the ellipse for every $\theta$. (B), $(a\cos\theta, b\sin\theta)$, is the standard form and is taken.
- **Q122**: "Under translation of axes by $(h,k)$, $(x,y)$ is replaced by". The wording is ambiguous.
  - Read as the substitution in an equation, the answer is (A), $(x+h, y+k)$. This is taken.
  - Read as the new coordinates of a fixed point, the answer would be (D), $(x-h, y-k)$.

#### Notes (not flagged)
- Q35: (B), 2.0, is the population SD. The sample SD, 2.14, is not among the options.
- Q75: "Pair of real straight lines" strictly needs $h^2 - ab \ge 0$, because $h^2 = ab$ gives coincident lines. Only $h^2-ab>0$ is offered, and it is the intended answer (real and distinct lines).

#### Count
125 questions written to `questions.jsonl`. The file was reloaded line by line with `json.loads` without error. Every `topic` id exists in `topics.txt`, and every string has balanced `$` delimiters.

Files in this folder:
- `render.py` and `crops.py` render the page images into `img/` and `crop/`.
- `qa.py`–`qd.py` hold the question data.
- `build.py` writes and validates `questions.jsonl`.
- `verify.py` runs the answer checks.

### Independent check

#### UP TGT Mathematics, 3 June 2026: check of 22 November 2026

- Paper: UP TGT (UPESSC) Mathematics, 3 June 2026 (`papers/up-tgt-2026/paper.pdf`). It has 125 questions, all mathematics, and no official key (`key` is null everywhere).
- Checked: `pyq/up-tgt-2026/questions.jsonl` (copied here as `questions.orig.jsonl`). Corrected file: `questions.checked.jsonl`.
- Questions: **125** (Q1–Q125). All are present, in order, with none repeated.

##### Page map (confirmed)
- PDF p1 is the site cover. p2, p3, p26 and p27 are advertisements.
- p4–p25 are booklet pages 2–22. p16 is a duplicate scan of p15 (Q65–Q70), so nothing is missing.
- p28 is booklet page 23 (Q122–Q125).

##### Method
1. **Transcription.** I rendered every page at zoom 2 with PyMuPDF (`render.py`, images in `img/`). I compared each question and its four options, word for word, with the English half of the page. I zoomed into Q17 (√(5×3)) and Q101 (matrix entries) to make sure (`crop.py`).
2. **Answers.** I solved all 125 questions myself and wrote my answers to `myanswers.txt` before I opened the transcriber's answers, solutions or log.
3. **Script check.** `verify.py` uses sympy 1.14, with plain arithmetic and brute force where those are simpler. It tests every option of **80 questions** independently.
   - 79 checks pass exactly one option, the one I chose.
   - Q118 passes (A) and (B), as expected (see below).
   - The other 45 questions are definitions and theorems, which I checked by hand.
4. **Comparison.** My 125 answers agree with the transcriber's 125 answers. No answer was changed.
5. **Solutions and topics.** I read every solution, `fact`, option note and `topic`.
6. **Format.** I validated the format by script (`fix.py`):
   - every line is valid JSON with 4 options and 4 notes, and `answer` is 0–3;
   - every string has an even number of `$`;
   - there is no `$$` in any question or option, and no `align` or `\displaystyle`;
   - every display `$$` in a solution is on its own line;
   - every topic id exists in `topics.txt`;
   - every LaTeX command used is supported by KaTeX (the environments are only `bmatrix` and `vmatrix`).

##### Transcription
**No transcription errors found.** The odd distractors are printed exactly as they are in the paper: Q10 (C) has no `/h`, Q69 (A) is $(2n\pi+3)/\pi$, and Q84 (C) is $\sqrt{3/2}$. The figures in Q6, Q45, Q47, Q81, Q82 and Q121 only restate the text, so leaving them out loses nothing.

##### Changes made (7 fields, 7 questions; no answer, question text or option changed)
| Q | Field | Was | Now |
|---|---|---|---|
| 3 | note (D) | "Wrong arithmetic in both steps." (21 does not come from that) | "$y + 10 = 21$: adds 10 instead of subtracting it." |
| 37 | note (D) | "Reverses the steps in the wrong order." (inaccurate) | "Keeps the ×2 and only flips the sign of 3: $f(2x-3) = 4x-3 \ne x$." |
| 93 | notes (A)–(C) | "Dot with $\vec b$ is −2", "Dot with $\vec a$ is 2" (the options are divided by √3, so these dot products were really ±2/√3) | The dot products are now stated for the vectors before division by √3, e.g. $(1,-1,-1)\cdot(0,1,1) = -2 \ne 0$. |
| 123 | note (D) | "Ratio of the $n$ coefficients." (meaningless: the denominator has no $n$ term) | "The coefficient of $n$ in the numerator; only the leading ($n^2$) coefficients matter." |
| 77 | solution | It gave the definition only. | Added "Why not (A)": differentiability is a true sufficient condition but not the definition ($\lvert x\rvert$ at 0), and the Hindi wording "is called continuous if" asks for the definition. |
| 118 | solution | It gave the standard form only. | Added "Why not (A)": $(a\sin\theta, b\cos\theta)$ is the point with eccentric angle $\pi/2-\theta$, so it lies on the ellipse, but the standard parametric coordinates are $(a\cos\theta, b\sin\theta)$. |
| 122 | solution | It gave the substitution only. | Added "Why not (D)": $(x-h, y-k)$ are the new coordinates of a fixed point (the reverse direction), while "is replaced by" refers to the substitution in an equation. |

##### The three flagged questions: my decisions
All three flags are kept, and each solution now says plainly why the other option is not the intended answer.
- **Q77: (D)** $\lim_{x\to a} f(x) = f(a)$. (A) "differentiable at $a$" is a true sufficient condition. However, the Hindi text "संतत कहलाता है यदि" ("is called continuous if") asks for the definition. That makes (D) the intended answer, and (A) is not necessary.
- **Q118: (B)** $(a\cos\theta, b\sin\theta)$. (A) also satisfies the equation for every θ. (B) is the standard parametric form, with θ the eccentric angle.
- **Q122: (A)** $(x+h, y+k)$. "Replaced by" is the language of substituting in an equation: with origin $(h,k)$, $x = X + h$ and $y = Y + k$, which Loney and the project's own notes (11.3) both use. (D) is what a fixed point's coordinates become. The wording is genuinely two-way, so the flag stays.

##### Official key
There is none, so there are no disagreements to report.

##### Topics
All 125 topic ids are valid, and I kept every one.
- Q48 (`tp-08-04`, a PGT page, for $y'' = g$) and Q65 (`tp-06-05`, inflection) are acceptable choices; `tp-06-07` would also have done for Q65.
- Q3 (a flowchart, `tp-01-02`) and Q117 (a ratio, `tp-01-07`) have no dedicated page, and the pages chosen are the nearest ones.

##### Still doubtful
- **Q122** is the only real doubt: if the examiners read it as the new coordinates of a point, their key would be (D).
- **Q75** is minor: "real" lines strictly need $h^2 - ab \ge 0$. Only $>0$ is offered, and the solution already explains this.
- **Q35** is minor: 2.0 is the population SD. The sample SD, 2.14, is not offered.

##### Files here
- `questions.checked.jsonl`: the corrected file.
- `questions.orig.jsonl`: the copy of the input.
- `myanswers.txt`: my answers, written before the comparison.
- `verify.py`, `fix.py`, `render.py`, `crop.py`, `thumbs.py`: the scripts.
- `qonly.txt`, `full.txt`: working dumps.
- `img/`: the page renders.

## UP TGT Mathematics 2021

- Source: UPSESSB TGT written examination 2021, Mathematics, booklet TG-06 series D (question booklet as shared after the exam; booklet page 11, questions 34 to 38, is missing from the available copy).
- In the app: `data/mq/up-tgt-2021.json`, 120 questions; full mock 60 seconds a question, negative marking none.

### Transcription and first solution

### UP TGT Mathematics 2021: transcription log

#### The paper
- Source: `papers/up-tgt-2021/paper.pdf`, 31 pages. It is a coaching site's scan of the bilingual (Hindi | English) question booklet, with the site's watermark and a candidate's handwritten workings and ticks. The handwriting was ignored.
- Booklet code **TG-06**, series **D** (printed "TG-06/D" on the pages).
- **Exam date: not shown.** The booklet cover is not in the PDF, and the site's cover page says only "UP TGT … Mathematics 2021".
- Not question pages: PDF p.1 (the site's cover), pp.2–3 and 29–30 (adverts).
- Question pages: PDF pp.4–28 and 31. PDF pages 4–10 are booklet pages 4–10. PDF pages 11–28 are booklet pages 12–29, and PDF page 31 is the last booklet page (Q123–125).
- Official key: none printed, so `"key": null` everywhere.

#### Question range and count
- The booklet has Q1–Q125, all of them mathematics. There is no GS, language or pedagogy part, so nothing was skipped as non-maths.
- **Q34–Q38 are missing**: booklet page 11 is not in this PDF. PDF p.10 ends at Q33 (booklet page 10), and PDF p.11 is booklet page 12, which starts at Q39. The questions cannot be recovered from this copy.
- **Questions in `questions.jsonl`: 120** (Q1–33 and Q39–125), in order, none twice. The expected count was 125.

#### Flags (7)
- **Q3**: The English print is faint and its signs read like i − 2j − k. The Hindi version clearly prints i + 2j + k, and only that force gives one of the options (answer −3i + j + k), so the Hindi reading is used.
- **Q28**: The paper does not say A and B fail independently, but the answer needs it. "Either A or B fails" is read as "at least one fails", giving 0.44. "Exactly one fails" would give 0.38, which is not an option.
- **Q67**: The printed question leaves out the symbol u ("projected with a velocity so that …"). It is added, since the options use u.
- **Q87**: The data are inconsistent. a + b + c = 0 forces |b| = |a + c| ≤ 3, so |b| = 4 is impossible. The intended answer −21 follows formally from |a + b + c|² = 0; the solution notes this.
- **Q96**: Printed as "tan h⁻¹x"; read as tanh⁻¹x.
- **Q104**: "Throw the ball in horizontal direction to which maximum distance" is read as the greatest range on level ground (thrown at 45°): u²/g = 80 m.
- **Q105**: For real x, x + 1/x can never equal √3. The intended answer 0 comes from f(t) = t³ − 3t, and it also holds for complex x.

Smaller points, handled in the solutions without a flag:
- Q50 assumes everyone speaks at least one of the two languages.
- Q64 takes the hemisphere as solid (3a/8); a hollow one gives a/2, which is option C.
- Q97 assumes θ small enough that all the cosines are positive.
- Q100: the correct value, 45, is not among the numbers, so the answer is "None of the above".
- Figure questions (Q7, Q101, Q115, Q122) have a short description of the figure added in brackets, since the app does not show the figure.

#### Verification
- `verify.py` recomputes the answer to every one of the 120 questions and **all 120 agree** with `answer`.
- **116 were checked numerically by script.** The methods are numerical integration and differentiation, brute-force counting (permutations, subsets, consecutive triples), random substitution into identities, numpy determinants, cross products and polynomial roots, and constructing the figure (Q101, Q115) or a concrete example (Q39, Q80). About 18 of these (e.g. Q7, Q15, Q50, Q81, Q87, Q99, Q106) only re-evaluate the closing formula rather than taking a truly independent route.
- 4 were checked by theory or inspection only: Q13 (order of a DE), Q53 (three-force theorem), Q112 (definition), Q120 (open set).
- `build.py` reloads `questions.jsonl` line by line with `json.loads`. It also checks the topic ids against `topics.txt`, the four options and four notes per question, the `$` pairing, and that no bad escape characters slipped into the file.

#### Paper quality
- The scan is generally readable. The watermark sits mid-page but does not hide any text.
- Candidate's handwriting overlaps a few items. A "4" is written into the Q14 integrand, and there are workings beside Q5, Q65, Q113 and Q118. The Hindi half confirmed the printed text where needed.
- PDF p.4 (Q1–5) has faint English print, which is why the Q3 signs were taken from the Hindi.
- PDF p.17 is slightly skewed, with an edge of the next page visible.
- The questions themselves are standard TGT-level items. Besides the flags above, Q87 has impossible data.

#### Files
- `questions.jsonl`: the 120 questions.
- `qa.py`, `qb.py`, `qc.py`: the question data. `build.py` writes the JSONL and `verify.py` checks the answers.
- `render.py`, `crops.py`, `zoomq.py`, `thumbs.py`: page-image helpers. The images are in `img/` and `crop/`.

### Independent check

#### UP TGT Mathematics 2021 (booklet TG-06, series D): check of 22 November 2026

- Paper: UP TGT (UPSESSB) Mathematics 2021, booklet TG-06, series D (`papers/up-tgt-2021/paper.pdf`, 31 PDF pages). All questions are mathematics. There is no official key, so `key` is null everywhere.
- Checked: `pyq/up-tgt-2021/questions.jsonl` (copied here as `questions.orig.jsonl`). Corrected file: `questions.checked.jsonl`.
- Questions: **120** (Q1–Q33 and Q39–Q125), in order, none repeated. **Q34–Q38 are missing**: booklet page 11 is not in this copy, so they cannot be recovered.
- **Dropped: none.** Every question has a defensible answer (see "Flagged questions" below).

##### Page map (confirmed)
- PDF p1 is the site cover; p2, p3, p29 and p30 are advertisements.
- PDF p4–p10 are booklet pages 4–10 (Q1–Q33). PDF p11 is booklet page 12 and starts at Q39, so booklet page 11 (Q34–Q38) is missing. PDF p11–p28 are booklet pages 12–29, and PDF p31 holds Q123–Q125.

##### Method
1. **Transcription.** I rendered every page at zoom 2 with PyMuPDF (`render.py`, images in `img/`) and compared each question and its four options with the English half, word for word. I zoomed in (`crop.py`, `crop/`) on Q3 (faint English signs), Q21 (matrix entries), Q101, Q115 and Q122 (figures) and Q121. Where handwriting overlaps (Q5, Q14, Q65, Q113, Q118) or the English is faint (p4), I read the Hindi half.
2. **Answers.** I solved all 120 questions myself and wrote my answers to `myanswers.txt` before I opened the transcriber's answers, solutions or log.
3. **Script check.** `verify.py` (sympy 1.14, mpmath, brute force) recomputes all 120 answers and tests every option. **116 are computed by script.** About 11 of those (e.g. Q7, Q15, Q50, Q81, Q87, Q99) only re-evaluate the closing formula. The other **4** (Q13 order of a DE, Q53 three-force theorem, Q112 definition, Q120 open set) are checked by hand. Every check hits exactly one option, the one I chose.
4. **Comparison.** My 120 answers agree with the transcriber's 120. **No answer was changed.**
5. **Solutions, notes, facts, topics.** I read all of them.
6. **Format.** `validate.py` and `scan.py` check that:
   - every line is valid JSON with 4 options and 4 notes, `answer` is 0–3, and `level` is TGT;
   - every string has an even number of `$`, there is no `$$` in a question or option, and every display `$$` in a solution is on its own line;
   - there is no `align` and no `\displaystyle`, and only KaTeX-supported commands are used (environments: `vmatrix`, `bmatrix`, `cases`);
   - there is no Unicode character inside math;
   - all topic ids are in `topics.txt`.

##### Transcription
**No transcription errors were found** in the questions or options. The re-checks the coordinator asked for:
- **Q3 signs:** the English print is faint and reads like i − 2j − k, but the Hindi clearly prints î + 2ĵ + k̂, and options (A)–(D) match the Hindi. With the English reading, the moment would be 3î + 3ĵ − 3k̂, which is no option. The transcription is right.
- **Q67:** the English omits "u" ("projected with a velocity so that …"), but the Hindi has "u वेग से". The added $u$ is right.
- **Figure descriptions:**
  - Q7 (secant A–B–C, tangent AD) and Q101 (∠PQR = 70° and ∠SRQ = 130°, both interior angles of PQRS; T, S, P and T, R, Q collinear) match the figures.
  - Q122 matches the figure (A: y+10, B: 2x−13, C: 3x+11, D: 2y+7).
  - Q115 was correct but incomplete. I added that C is on the major arc AB, with chords CA and CB; if C were on the minor arc, x would be 145°.

##### Changes made (21 field edits in 19 questions; no answer, option or question wording changed)
| Q | Field | Was | Now |
|---|---|---|---|
| 7 | note (C) | "Uses AB·BC = 20 wrongly, or guesses BC." (√20 ≈ 4.47, not 5) | "That is $BC$; the tangent needs $AD^2 = AB\cdot AC$, not $BC$." |
| 7 | note (B) | empty | "That is $AB$ itself." |
| 16 | note (A) | "Sign slip in −3x₁x₂(x₁+x₂)." (that slip gives 32, not 16) | "Takes $x_1 + x_2 = -2$: $(-2)^3 - 3\cdot4\cdot(-2) = 16$." |
| 24 | note (D) | "n = −½ gives the GM." (the option is +½) | "Sign slip: it is $n = -\frac12$ that gives the GM, $\sqrt{ab}$." |
| 81 | solution | `₹` inside math mode (KaTeX warns) | "$\frac35 \times 500 = 300$, i.e. ₹ 300" |
| 28 | solution | "Treat the results as independent:" | "The question does not say so, but the results are meant to be independent:" |
| 87 | solution | "(Strictly, no such vectors exist …)" | It now says plainly that the data are flawed (\|b\| ≤ 3) and that −21 is what the intended identity gives. |
| 104 | solution | (nothing about the wording) | Added: "In horizontal direction" is taken to mean along level ground. |
| 105 | solution | (nothing about the flaw) | Added: no real x has x + 1/x = √3. With complex x = cis(π/6) it holds, and x³ + 1/x³ = 2cos(π/2) = 0, so 0 stands. |
| 115 | q (figure) | "A, B, C on the circle; x° = ∠ACB" | "A, B, C on the circle, C on the major arc AB; chords CA and CB; x° = ∠ACB" |
| 14, 18, 59, 61, 71, 75, 88, 98, 107, 114 | q (and Q98 solution) | `\displaystyle` | removed (not needed; none of the app's other data use it) |

##### Flagged questions: my decisions (all kept, none dropped)
- **Q3**: transcription note only; the answer (C) $-3\hat i + \hat j + \hat k$ is certain.
- **Q28**: independence is not stated but is the intended assumption. (C) 0.44 is certain: "exactly one" gives 0.38, which is not an option. The solution now says so.
- **Q67**: the missing $u$ is supplied from the Hindi. (D) $\frac{4u^2}{5g}$.
- **Q87**: the data are impossible ($|\vec b| = 4 > |\vec a| + |\vec c| = 3$). The intended answer is still certain: $|\vec a+\vec b+\vec c|^2 = 0$ gives −21 whatever the vectors are, so it is not a guess. **Kept**, and the solution states the flaw plainly.
- **Q96**: "tan h⁻¹x" is tanh⁻¹x. (C) $\frac12\log\frac{1+x}{1-x}$.
- **Q100**: the value is 45, since 2⁶ − 2³ = 56 is the only solution. (D) "None of the above" is genuinely correct, so this is not a faulty question. It has no flag.
- **Q104**: loose wording; the standard meaning gives (D) 80 m, which is certain. The solution now says how the wording is read.
- **Q105**: no real x satisfies x + 1/x = √3. With complex x the question is fully answerable, and the answer is still 0. **Kept**, and the solution now says this.

##### Official key
There is none, so there are no disagreements to report.

##### Topics
All 120 topic ids are valid, and I kept every one. Q56 (tp-05-06, the 1^∞ limit), Q75 (tp-01-06, sum of squares) and Q98 (tp-07-02, partial fractions) could also have gone to tp-05-07, tp-05-06 and tp-07-03; the chosen pages are fine.

##### Still doubtful (minor)
- **Q87** and **Q105** have flawed data, but their intended answers are certain; both solutions say so.
- **Q52** assumes the balloon starts from rest on the ground. That is the standard reading, and the solution says it.
- **Q62** uses the empirical relation M.D. ≈ (4/5) S.D. for a moderately symmetrical distribution.
- **Q34–Q38** cannot be added from this copy.

##### Files
`questions.checked.jsonl` (the corrected file), `myanswers.txt`, `verify.py`, `fix.py` (all edits), `validate.py`, `scan.py`, `render.py`, `crop.py`, `thumbs.py`, `img/`, `crop/`, `full.txt` (readable dump of the original).

## UPPSC LT Grade Mathematics 2025 (6 December)

- Source: UPPSC Assistant Teacher (LT grade) examination of 6 December 2025, Mathematics, booklet series KEZE-03: part II, questions 31 to 150, as shared after the exam.
- In the app: `data/mq/lt-2025.json`, 107 questions; full mock 60 seconds a question, negative marking 0.33.

### Transcription and first solution

### UPPSC Assistant Teacher (LT grade, Trained Graduate) Mathematics, 6 December 2025

Source: `papers/lt-2025/paper.pdf` (41 pages, phone photos of booklet series KEZE-03, Adda247 copy with
watermarks and a candidate's pencil marks, which were ignored). PDF page 2 is an advertisement (skipped).
The booklet's cover page (instructions) is not in this copy, so the **total time and negative marking are
not stated** here. No official key is printed: `key` is null everywhere.

#### Range
- Part I, General Studies: **Q1–30**, skipped (PDF pages 1, 3–7). They include three arithmetic items
  (Q23 diagonals of a hexagon, Q24 percentage, Q26 LCM/HCF), skipped as they belong to the GS part.
- Part II, Mathematics: **Q31–150**, all transcribed: **120 questions**, numbers in order, none twice.
- level "TGT"; English text used, Hindi half consulted where the English was cut off at the page edge
  (Q42–45, 49–52, 70, 90, 109–111, 123–125, 131–133, 138–139, 147).

#### Checks
- `questions.jsonl` loads line by line with `json.loads` (120 lines); `build.py` checks numbers 31..150,
  four distinct options, four notes, known topic ids, even `$` count per line and balanced braces: 0 problems.
- `verify.py` recomputes answers a second way (fractions, numeric integration, finite differences,
  brute force, numpy rank/eigenvalues/determinants): **114 agree** with the file, 0 disagree.
  Q133 was computed too: the true volume is 3π/4 (no option); twice it, 3π/2, is option (c).
  Not script-checked (definitions or code-matching only): Q53, 77, 80, 107, 130.
  Some checks follow the reading stated in the flag (Q61 usual h²<ab test, Q101 sign, Q104 intended
  reading of R, Q122 x>0, Q144 nearest option, Q145 x≥0).

#### Flags (19)
- Q32: printed denominator 1 − z₁z₂ (bar missing); read as 1 − z̄₁z₂ (otherwise the ratio can exceed 1).
- Q43: G = Z without −1 is not really a group under m+n+mn (inverse −n/(n+1) not an integer); answer (c).
- Q61: conic in I has no real points (imaginary ellipse); strict reading (b), usual test (c) chosen.
- Q70: misprint "in given" read as "is given".
- Q74: R as printed (sum from n=1 equals 1/(1−r)) is false, so (a); examiners probably meant (d).
- Q77: "R explains A" is a judgement; (d) chosen, a key could say (a).
- Q94: "axis as z-axis" means generators parallel to the z-axis.
- Q96: second line printed r = c + Δb; read as r = c + λd.
- Q99: printed 1/(np); read as 1/n^p.
- Q101: correct value is −2cos x/e^{cos x}; no option has the minus sign; (a) chosen.
- Q102: List II iv printed "+1, ±i"; read as ±1, ±i.
- Q104: strictly A and R are both false (Δ=0 allows parallel lines); no exact option; (c) intended.
- Q115: printed yx′ = y − 1; read as xy′ = y − 1.
- Q122: answer x ≤ 1 assumes x > 0; for all real x the series converges for |x| ≤ 1.
- Q133: no correct option (true volume 3π/4); (c) 3π/2 = double counting, marked as intended.
- Q137: idempotent matrix is also periodic (period 1); (b) is the precise answer.
- Q144: missing frequency = 145/9 ≈ 16.1; nearest option 16.
- Q145: (x⁴)^{1/4} = |x| and f is not defined on all of R; intended (a) x.
- Q149: in (a) both pieces exclude x = 1 as printed; usual version 0 < x ≤ 1 assumed.

Minor silent fixes: "isconvergent" → "is convergent" (Q109); table data of Q138 and Q144 written as
two text lines; i, j, k in Q53 kept without hats as printed.

#### Files
- `questions.jsonl` (output), `log.md` (this file)
- `qdata1.py`, `qdata2.py` (source data), `build.py` (writes and checks the JSONL), `verify.py` (second-way answers)
- `render.py`, `crop.py`, `img/`, `c*.png` (page renders and zooms)

### Independent check

#### UPPSC LT Grade Mathematics, 6 December 2025: check of 22 November 2026

Paper: UPPSC Assistant Teacher (LT grade) Mathematics, 6 December 2025, booklet series KEZE-03 (phone photos, 41 PDF pages; page 2 is an advert). Part II Mathematics, Q31–Q150: **120 questions checked**. Q1–30 (general studies) not transcribed, as intended. No official key (`key` null throughout).

Method: every page rendered with PyMuPDF and read in crops (English column; the Hindi column where the English is cut off or doubtful). I solved each question myself before opening the transcriber's answers and log, then compared.

Files: `questions.checked.jsonl` (output), `questions.orig.jsonl` (copy of the input), `apply.py` (all edits, reproducible), `mine.py` (my numeric checks), `check.py` (format checks), `notes.txt` (my working notes), `img/` (crops).

##### Result
- Transcription: no wording, number, sign or option-order errors found in any of the 120. The transcriber's misprint readings (Q32, 70, 96, 99, 102, 115) match the page; Q143 options use the Hindi `+` signs (the English print is faint), which does not affect the answer.
- Answers: on every kept question my own answer equals the transcriber's. **No answer changes.**
- **Dropped (`"drop": true`), 12:** Q32, 61, 74, 94, 101, 104, 115, 122, 133, 137, 144, 145. `answer` keeps the transcriber's best option; `flag` and the solution say why.
- Kept with a flag: Q42, 43, 70, 77, 96, 99, 102, 103, 149.

##### Drops (why)
- Q32: printed $1-z_1z_2$ (no bar, English and Hindi). Literally the ratio can exceed 1 (0.9i, −0.9i gives 9.5), so (d) "None" is literally correct; the intended $1-\bar z_1z_2$ gives (b). Literal ≠ intended, and the literal answer is an option.
- Q61: statement I printed with +10x (both languages) is an imaginary ellipse (centre (−1,0), reduces to $5X^2-6XY+5Y^2=-5$). The $h^2<ab$ test gives (c), strictly (b). Two defensible answers.
- Q74: (R) as printed ($\sum_{n\ge1}r^n=\frac1{1-r}$) is false → (a); intended (d).
- Q94: both languages say "axis is the z-axis"; no such cylinder contains the curve → (d) literally; intended "generators parallel to z-axis" → (c).
- Q101: true value $-\frac{2\cos x}{e^{\cos x}}$; no option has the minus sign.
- Q104: (A) false and (R) false as stated (Δ = 0 also for three parallel lines); "both false" not offered.
- Q115: printed $yx'=y-1$ (both languages). Read as written ($x'=dx/dy$) or as $yy'=y-1$ the IVP has a unique solution (d); only the guessed $xy'=y-1$ gives (a).
- Q122: converges exactly for $-1\le x\le1$; (b) "x ≤ 1" needs the unstated assumption x > 0, otherwise (d). (General term confirmed $\frac{n+1}{n^3}x^n$ in both languages.)
- Q133: volume is $\frac{3\pi}4$ (numeric check), not an option.
- Q137: $A^2=A$ (idempotent, b), but idempotent = periodic of period 1, so (c) is also true.
- Q144: missing frequency $=\frac{145}9\approx16.1$, not a whole number; no option makes the mean exactly 39 (16 gives 39.02).
- Q145: $(f\circ f)(x)=|x|$, and $(5-x^4)^{1/4}$ is not real for $x^4>5$; no option correct as printed (intended (a)).

##### Changes to kept questions
- Q42: solution reworded (both square roots of i; I false as printed); flag added: I printed with ½ in both languages, so (b); with ¼ it would be true. Kept because the printed statement is simply false and (b) is not disputable for the printed text.
- Q43: solution now says that $(G,\star)$ is strictly not a group (inverse not in G except n = 0, −2); answer (c) unchanged.
- Q87: note on (b) removed — it said $\frac{18}3$ is $\int_{-2}^3(x^2-1)dx$, but that integral is $\frac{20}3$.
- Q96: solution now explains the misprint (second line printed $\vec c+\Delta\vec b$; as printed the lines are parallel and no option applies); flag expanded.
- Q99: solution now explains the misprint $\frac1{np}$ → $\frac1{n^p}$ (as printed no option fits).
- Q102: solution now mentions List II iv printed "+1, ±i"; only code (b) fits anyway.
- Q103: flag added: II printed with $\frac{1-x}{1+x}$ in both languages, false as printed, so (a).
- Q145 (dropped): fact corrected — it claimed $f(f(x))=x$ for $f=(a-x^n)^{1/n}$ in general; true only for odd n (even n gives |x|).
- Q149: solution said "left value 1" although f(1) is not defined as printed; now "left limit", with a note on the printed intervals. Answer (d) holds under any convention (1/log|x| fails at 3 points, or at none in the strict sense, never 1).
- Topics: all 120 checked against topics.txt; none changed.

##### Checks
- Answers verified by script (`mine.py`, numpy/numerical integration/finite differences/brute force): **59 questions** (31, 32, 34, 39, 42–44, 47, 49, 50, 52, 54, 56, 59–61, 63, 64, 69, 70, 72, 78, 79, 81, 85–91, 97, 98, 100, 101, 103–106, 111, 117–119, 121, 123, 125, 131–133, 136–139, 141, 142, 144–147); the rest by hand (definitions, true/false statements, matching).
- Format (`check.py`): 120 valid JSON lines, numbers 31–150 in order, four distinct options and four notes each, answer 0–3, known topic ids, even `$` count and balanced braces in every string, no `$$` in questions/options, no `align`/`\displaystyle`: 0 problems.

##### Doubtful / judgement calls left in
- Q77 kept with (d): both true, (R) about $(x+y)^n$ does not explain a trinomial result; a key could say (a), but (d) is the standard answer.
- Q42 and Q103 kept on the literal reading (statement false as printed). If the examiners meant ¼ in Q42 or $\frac{1+x}{1-x}$ in Q103, their key would be (d)/(b); the parent may prefer to drop these two if the official key appears and differs.
- Q135 kept (b): uses that the angle 2θ between vectors is at most π (θ ≤ π/2); with θ up to π literally the set would also include (5π/6, π].
- Q149 kept (d) (see above); Q43 kept (c) despite G not being a group.

## UPPSC LT Grade Mathematics 2018 (29 July)

- Source: UPPSC Assistant Teacher (LT grade) examination of 29 July 2018, Mathematics, booklet series C (DFMET-03): part II, questions 31 to 150, as shared after the exam; questions 119 to 126 are missing from the available copy.
- In the app: `data/mq/lt-2018.json`, 108 questions; full mock 45 seconds a question, negative marking 0.33.

### Transcription and first solution

### UPPSC Assistant Teacher (LT grade) Mathematics, 2018: transcription log

#### Paper
- Source: `papers/lt-2018/paper.pdf` (38 pages, scan published by Adda247; their cover page says "29 July 2018 (Maths)").
- Booklet cover (PDF page 3): Series C, code DFMET-03, 2018, subject Mathematics (गणित). Date 29.07.2018 is also handwritten on the cover.
- Part I general studies: Q1–30. Part II mathematics: Q31–150.
- Time: 2 hours. Maximum marks: 150 (150 questions, equal marks).
- Negative marking: one-third of the marks of a question is deducted for each wrong answer; marking more than one answer counts as wrong; no penalty for an unanswered question.
- No official answer key is printed: `key` is null everywhere. The candidate's ticks, circles and rough work on the scan were ignored.

#### Range and skipped questions
- Transcribed: Q31–118 and Q127–150, printed numbers kept in `n`. Level: TGT.
- Skipped Q1–30: Part I, general studies (not mathematics).
- **Missing Q119–126**: printed booklet pages 32 and 33 are absent from the PDF. PDF page 32 is printed page 31 (Q115–118) and PDF page 33 is printed page 34 (Q127–130); the OCR layer confirms no page carries Q119–126. These eight maths questions could not be transcribed.
- PDF pages: 1–2 publisher pages, 3 booklet cover, 4–10 GS (Q1–30), 11–38 maths (Q31–150 less the missing pages).

#### Count
- 112 questions in `questions.jsonl` (120 maths questions in the booklet, 8 missing from the scan).

#### Flags (7)
- **Q53** (Rolle's theorem for $(x-a)^m(x-b)^n$): answer (b) "positive integers and $a<b$"; (a) is also defensible since Rolle applies on $[b,a]$ when $b<a$.
- **Q62**: misprint fixed. The booklet prints $x^3+y^3+3axy=5a^2$ (both languages); $(a,a)$ lies on the curve only for $5a^3$. Answer (d) "None of the above" ($du/dx=0$) either way.
- **Q72**: defective data (both languages): $P(A\cap B)=11/15$ exceeds $P(A)=7/15$ and $P(B)=8/15$. The formula gives 11/8 (option b), not a valid probability; reading 11/15 as $P(A\cup B)$ gives 1/2, not an option. Answer set to (b).
- **Q98**: typo fixed, "=0i s" printed for "=0 is".
- **Q102**: no option correct. With eigenvalues 1, -1, 0 (both languages) $|I+A^{100}|=2\cdot2\cdot1=4$. Answer set to (b) 8, the likely intended key.
- **Q111**: no option strictly correct. $5+6\cos\theta+2\cos2\theta$ has max 13 and true min 3/4 (at $\cos\theta=-3/4$); the equation is printed "$x^2-px+q=2$" in both languages. Option (c) 14, 13 follows from roots 13 and 1 of $x^2-px+q=0$ (min wrongly taken at $\cos\theta=-1$). Answer set to (c).
- **Q142**: printed as $\hat r/|\vec r|^3$ in both languages, which is irrotational only: answer (b). The standard question has $\vec r/|\vec r|^3$, answer (c) both; an official key may follow that version.

#### Minor notation fixes (not flagged)
- Q105: factorials printed in the old notation ⌊n, written as $n!$.
- Q138, Q139: option (a) printed as $\hat 0$, written as $\vec 0$ (zero vector).
- Q133: bold "not" written as plain text.
- Q74 option (b) is printed 80/146 (kept as printed; it is not equal to the answer 80/286 = 40/143).

#### Verification
- `verify.py` (pure Python: math, cmath, fractions; sympy/numpy are not available) recomputes answers by a second route: numeric integration (Simpson), RK4 for the differential equations, finite-difference derivatives, div and curl, brute force over relations and groups, random matrices and vectors, substitution of the options.
- **103 answers verified by script**, all agreeing with `answer`.
- 3 flagged questions recomputed by script, confirming the defect: Q72 (11/8 > 1), Q102 (value 4, no option), Q111 (max 13, min 0.75).
- 6 conceptual questions not script-checked: Q53, 92, 97, 104, 132, 135.
- `build.py` loads every line back with `json.loads` (112 lines valid), checks numbering (in order, no duplicates, 31–150 less 119–126), four options and four notes each, balanced `$`, and topic ids against `topics.txt`.

#### Files
- `questions.jsonl`: output. `qdata1.py` (Q31–70), `qdata2.py` (Q71–150): source data. `build.py`, `verify.py`: build and checks. `render.py`, `crop.py`, `clip.py`, `ocrscan.py`: page rendering and OCR scan. `img/`, `crop/`: page images.

### Independent check

#### UPPSC LT Grade Mathematics, 29 July 2018: check of 22 November 2026

Paper: UPPSC Assistant Teacher (LT grade) Mathematics, 29 July 2018, booklet series C, code DFMET-03. Part II (mathematics) is Q31–Q150; booklet pages 32–33 (Q119–Q126) are missing from the scan. No official key. Checked against my own renders of PDF pages 11–38 (English column at zoom 2.4; zoom 2–3 crops where the scan is shifted or the Adda logo covers text: Q33, Q43, Q62, Q72, Q79, Q81, Q82, Q98, Q111). Hindi used to confirm Q43, Q62, Q72, Q98, Q102, Q111 and Q142.

- **Questions:** 112 (Q31–Q118 and Q127–Q150), in order, none twice. **Kept 108, dropped 4** (Q72, Q102, Q111, Q142).
- **Transcription:** every stem and all four options compared with the page. No transcription errors found. The transcriber's fixes are right: Q62 prints $5a^2$ in both languages (read as $5a^3$, flagged), Q98 "=0i s" is a typo for "=0 is", Q105 old factorial sign written as $n!$, Q138/Q139 option (a) $\hat 0$ written as $\vec 0$.
- **Answers:** solved all 112 myself before reading the transcriber's answers and log. My answers agree with the transcriber's on all 108 kept questions. `check.py` (pure Python, no sympy available) re-computes **106 of 112** by script: numeric integration (Simpson), RK4 for the differential equations, finite-difference derivatives, div and curl, exact fractions, brute force (all 512 relations on a 3-set for Q129, generators of Z_n, polynomial coefficients for Q134), substitution of options. This includes the defect checks for Q102 (value 4), Q111 (min 0.75) and both readings of Q142. Not script-checked (conceptual): Q53, Q72, Q97, Q104, Q132, Q135.
- **Format:** `apply.py` writes `questions.checked.jsonl` and validates: 112 valid JSON lines, numbering 31–118 and 127–150, four options and four notes each, answer 0–3, `key` null, topics in topics.txt, even `$` counts, balanced braces, no `align`, no `\displaystyle`, no `$$` in stems or options, dropped lines carry `"drop": true` and a flag starting "Dropped". All LaTeX commands used are KaTeX-supported.

##### Changes
- **\displaystyle removed** (16 occurrences): q of Q41, 43, 50, 52, 56, 57, 58, 59, 61, 69, 131, 147, 148 and the solution of Q57. Not needed in KaTeX; the text is otherwise unchanged.
- **Q35** note (c): said −2 comes from a sign error in $\cos2x$; it does not. Now: impossible, since $\cosh2y\ge1$ and $\cos2x\ge-1$.
- **Q38** note (c): said −1 comes from a sign slip in $u_y=-v_x$; that slip gives $a=1$, $a+b=3$. Now: −1 is $a$ alone.
- **Q53** (kept, (b)): the old flag called (a) "also defensible". I keep (b) without dropping: it is the only option that guarantees every hypothesis on $[a,b]$; (a) allows $a=b$ (no interval) and needs the interval turned round when $a>b$. The solution now says this, and the flag says why (b) is kept. Note (c) rewritten (with $a<b$ alone, $m,n$ may be negative or fractional, so $\phi$ can be undefined or unbounded).
- **Q54** note (b): said 30 comes from forgetting the lower limit; that slip gives 29. Note removed.
- **Q62** (kept, (d)): the misprint ($5a^2$ printed, $5a^3$ meant) was only in the flag; now also in the solution, with the reason the answer is 0 either way ($y'$ at $(a,a)$ does not involve the constant).
- **Q69** note (a): said −1/2 comes from a sign slip in $C$; the limit is $+\frac12$ whatever $C$ is. Rewritten.
- **Q77** note (a): "conjugate-axis form" was vague. Now: $a^2$ is the product when the major axis is along the $y$-axis ($b>a$).
- **Q88** note (a): "forgets the square root and halving" does not give 3/2. Now states $r^2=\frac34$.
- **Q89** solution: wrong step. It said the ellipse has axes $\sqrt2$ and $\sqrt8$; rotating $5X^2-6XY+5Y^2=8$ by 45° gives $2X'^2+8Y'^2=8$, semi-axes 2 and 1. Fixed.
- **Q113** note (a): "uses identity 0" gives inverse 1, not 2. Now: treats $*$ as ordinary addition.
- **Q72 dropped**: impossible data (both languages): $P(A\cap B)=\frac{11}{15}$ exceeds $P(A)$ and $P(B)$; the formula gives $\frac{11}{8}>1$; reading it as $P(A\cup B)$ gives $\frac12$, not an option. Answer kept at (b) as the mechanical value; solution says the question is left out.
- **Q102 dropped**: no correct option. Eigenvalues 1, −1, 0 (both languages) give $|I+A^{100}|=2\cdot2\cdot1=4$. Answer kept at (b) 8 (setter's likely slip $0^{100}=1$).
- **Q111 dropped**: no correct option. $5+6\cos\theta+2\cos2\theta=4c^2+6c+3$ has max 13 and min $\frac34$ (at $c=-\frac34$); the equation is printed $x^2-px+q=2$ (both languages), so the product of the roots is $q-2$. Option (c) 14, 13 needs two slips (min 1 and $=0$). Answer kept at (c).
- **Q142 dropped**: two defensible answers. As printed ($\hat r/|\vec r|^3$, both languages) the field is $\vec r/r^4$: irrotational, divergence $-r^{-4}$, so (b). The classic question ($\vec r/r^3$, or $\hat r/r^2$) gives (c), and this paper also prints $\hat 0$ for the zero vector, so the hat may be its vector sign. Which version was meant is a guess. Answer kept at (b), the literal reading.

##### Not changed
- Q98 kept, (d) 0: both languages print $|x|^2+5|x|+4=0$, so there is no real solution; the flag (typo "0i s") is cosmetic.
- Topics: all 112 topic ids checked against topics.txt; none changed.

##### Doubtful
- Q53: a reader could still argue for (a). I judge (b) the intended and only complete answer, so it stays in the quiz.
- No official key exists, so no key comparison was possible.

## DSSSB TGT Mathematics 2021 (2 September, shift 3)

- Source: DSSSB TGT Mathematics (Male), computer-based test of 2 September 2021, shift 3: the mathematics section (questions 101 to 190) of the board's question-paper preview, with the board's answer key.
- In the app: `data/mq/dsssb-tgt-2021.json`, 84 questions; full mock 45 seconds a question, negative marking 0.25.

### Transcription and first solution

### DSSSB TGT Mathematics (Male), CBT 2 September 2021, shift 3

Source: `papers/dsssb-tgt-2021-0902-s3/paper.pdf`, 80 pages. This is the board's "Question Paper Preview" (question paper name `LAVISH1 TGTMATHS 2SEPShift3`, subject "TGT Maths-(Male)"), re-shared by a coaching site.

- Duration: **120 minutes**. Total marks: **200** (200 questions of 1 mark each).
- Marking: correct **+1**, wrong **−0.25** (negative marking of one quarter). This is stated on every question.
- Official key: the correct option is printed in green (span colour 0x008000) and the others in red (0xff0000). All 90 maths questions have exactly one green option, and it is recorded as `key`.

#### Structure of the paper (groups in order)

| Paper Q | Group / section | Questions | Taken? |
|---|---|---|---|
| 1–20 | General Ability (reasoning) | 20 | no: reasoning, general part |
| 21–40 | General Awareness | 20 | no |
| 41–60 | Arithmetic Ability | 20 | no: pure arithmetic, general part |
| 61–80 | General English (two sub-sections) | 20 | no |
| 81–100 | General Hindi (two sub-sections) | 20 | no |
| **101–190** | **Discipline1 to Discipline5 (TGT Maths)** | **90** (20+20+20+20+10) | **yes** |
| 191–200 | Teaching Methodology | 10 | no: pedagogy |

**Maths section taken: Discipline1–Discipline5, paper questions Q101–Q190.** Running number `n = 1 … 90`, with `n = paper Q − 100` (n = 1 is Q101, n = 90 is Q190). No question in this range was skipped. Skipped: Q1–Q100 and Q191–Q200, for the reasons in the table.

#### How it was read

- Each question is printed twice, English then Hindi. The English copy was used (the first block for each question number).
- Pages 46–76 (the maths section) contain no formula images and no vector drawings other than the page frame; the only images are the tick/cross icons. A page render (page 48) was compared with the text layer: they match. So the text layer is the full content, and defects such as "curve x= y" (n = 6) are in the original paper.
- Notation was normalised to LaTeX (e.g. `3i+j+k` became $3\hat i+\hat j+\hat k$, `Z(200)` became $\mathbb{Z}_{200}$, `n(Sin(n))` became $\sum n\sin(n)$). Trivial spelling and capitalisation fixes were made silently in options ("continous", "cauchy", "dirichlet"). In n = 8 and n = 49 the options are kept as printed (degrees implied).
- Many stems in this paper are badly worded. Wording was kept unless a misprint was clear, and every substantive change is flagged.

#### Answers that differ from the green key (2)

- **n = 28 (Q128)**, $\sum n\sin n$: answer (d) "oscillates infinitely", key (b) "divergent". The partial sums are unbounded with both signs (between about ±1.04N), so in the textbook classification the series oscillates infinitely. (b) is right only in the loose sense "not convergent".
- **n = 70 (Q170)**, Cauchy sequence in a metric space: answer (d) "bounded", key (a) "convergent". A Cauchy sequence need not converge unless the space is complete (e.g. $\mathbb{Q}$, which n = 75 itself says is not complete). It is always bounded.

#### Flags (29)

Questions that are doubtful: no correct option, two correct options, or garbled.
- n=1 (Q101): as printed, (b) (strict >) and (d) (stated for integers) are also false. They are misprints of $[x+y]\ge[x]+[y]$ and of the non-integer rule. Answer is the key (c), the intended one.
- n=5 (Q105): two correct options. $xy=15$ is symmetric about $y=x$ (c) and about the origin (d). Answer (c), the key.
- n=6 (Q106): garbled. Read as the line $y=x$, $0\le x\le4$, revolved about the x-axis (a cone, $64\pi/3$). This gives the key.
- n=26 (Q126): garbled. (a) "bounded", the key, holds under every sensible reading. (b) is also true if $f$ is continuous.
- n=28 (Q128): differs from the key (see above).
- n=36 (Q136): **no option is correct as printed**: $y''=0$ with $y(0)=y'(0)=0$ gives $y=0$. The key $x^2/2$ fits $y''=1$ (probable misprint). Answer (b).
- n=43 (Q143): loose wording, read as a sequence whose terms lie in [0,1].
- n=46 (Q146): (a) and (d) are also true. (c), the key, is the intended (strongest) conclusion. Its "on R" should read "on I".
- n=51 (Q151): the point is not stated; read as the limit at the origin.
- n=54 (Q154): "double integral" of a differential form. Read as its closed line integral (the form is exact, so the result is 0, the key).
- n=59 (Q159): the stem says "for every partition P". The criterion is "there exists P". The options are unaffected.
- n=65 (Q165): (a) "monotonic" is also true. (c) is the precise answer (key).
- n=69 (Q169): (c) "finite" is also true. (b) "zero" is the precise answer (key).
- n=70 (Q170): differs from the key (see above).
- n=71 (Q171): option (a) is misstated ("closure of E is empty"). The definition is "interior of the closure is empty". Answer (a), the intended one.
- n=73 (Q173): option (c) "continuous function" is continuous by definition. The intended answer is (b), the distance function (key).
- n=74 (Q174): garbled stem. It asks for the name of a property preserved by continuous maps.
- n=75 (Q175): two correct options. The irrationals (d) are not complete either, with the usual metric. Answer (b), the key.
- n=76 (Q176): as printed no option always holds (in $X=\mathbb{Q}$ the closed set $\mathbb{Q}$ is not complete). It needs "X complete". Answer (a), the key.
- n=79 (Q179): garbled stem ("if and only of" was fixed to "if and only if").
- n=81 (Q181): two correct options. A product of two cyclic groups is always abelian (c) as well. Answer (b), the key.
- n=85 (Q185): **unanswerable as printed**. The group is not named, and "usual ring operation" makes no sense here. Answer set to the key (d). Consider dropping this question.

Misprints fixed (the answer is not in doubt):
- n=10 (Q110): "sides of of parallelopipe".
- n=20 (Q120): "echleon".
- n=29 (Q129): "series given by f is uniformly continous" became uniform convergence of the sequence $\langle f_n\rangle$.
- n=32 (Q132): "diffrential".
- n=44 (Q144): $f(x)<f(a)$ became $f(x)\le f(a)$.
- n=60 (Q160): "continous".
- n=90 (Q190): "order of convergence" became "radius of convergence". The order of $\cosh\sqrt z$ is 1/2, which is not listed; "infinite" (the key) is the radius.

#### Verification

- `verify.py` recomputes **38 answers by script**, and all 38 pass. They are n = 1, 3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 24, 28, 36, 40, 41, 49, 50, 51, 53, 54, 62, 63, 65, 67, 77, 81, 82, 83, 84, 86, 88, 90. The methods are brute force (relations, subsets, group elements, permutations, Sylow subgroups of S4), exact arithmetic (determinant, rank, the tan-series recurrence), numerical integration or limits (volume, cone surface, closed line integral, curl, Jacobian), partial sums of $\sum n\sin n$ against a closed form, and series sums.
- The other 52 are definitional or theory questions (analysis, metric spaces, group theory, modelling vocabulary). They were checked by reasoning only.
- `questions.jsonl` loads with Python: 90 lines, n = 1…90 in order, none twice, four options and four notes each, every topic id present in `topics.txt`, `$` signs balanced, braces balanced inside math.

#### Count

**90 maths questions** (paper Q101–Q190). The answer equals the key in 88 and differs in 2 (n = 28, 70). There are 29 flags: 22 doubtful questions and 7 misprint fixes.

Files in this folder: `questions.jsonl` (output), `log.md` (this file), `dump.py`, `parse.py`, `spans.py`, `draws.py`, `rawchars.py`, `render.py` (extraction), `raw.jsonl` and `raw.txt` (parsed English text with the green key), `qa.py`, `qb.py` and `build.py` (question data and builder), `verify.py` (checks), `img/` (renders of pages 46–76).

### Independent check

#### DSSSB TGT Mathematics (Male), 2 September 2021, shift 3: check of 22 November 2026

Input: `pyq/dsssb-tgt-2021/questions.jsonl` (copied here as `questions.orig.jsonl`), paper `papers/dsssb-tgt-2021-0902-s3/paper.pdf`, maths section paper Q101–Q190 = n 1–90.
Output: `questions.checked.jsonl` (90 lines, 5 with `"drop": true`).

##### How it was checked
- Text layer re-extracted with my own scripts (`dump.py`, `parse.py`, `myparse.txt`), with span colours. English crops of all 90 questions rendered (`render.py`, `img/q*.png`) and read; Hindi copies of 21 doubtful questions rendered (`renderhi.py`, `img/hi-*.png`). The pages carry no formula images: the text layer equals the rendered page, so defects such as "x= y" (n 6), "<f>= 1" (n 21), "n(Sin(n))" (n 28) and "=<1/n>" (n 65) are in the paper itself; the Hindi copies have the same defects.
- Green key: exactly one option per question is green (32768); `cmp.py` confirms the `key` field equals the green option for **all 90**.
- Transcription: stem and all four options compared side by side with the paper for all 90 (`sidebyside.txt`). All faithful, options in the paper's order; only flagged misprint fixes and LaTeX normalisation.
- Answers: I solved all 90 myself before reading the transcriber's answers and log. My answers agree with the transcriber's on every question kept.
- Script checks: `mycheck.py` and `verify2.py` (pure Python; sympy is not installed) recompute **32 answers**: n 1, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 24, 28, 36, 40, 41, 49, 50, 51, 53, 54, 63, 65, 70, 81, 82, 83, 84, 86, 90 (brute force over relations, subsets, permutations and S4's Sylow 3-subgroups; exact determinant; tan-series recurrence; closed form of the partial sums of n sin n checked to N = 3000; numerical volume, surface, curl, Jacobian, closed line integral; divisibility of 2587322568103). All agree. The other 58 are definitions and theory, checked by reasoning.
- Format: JSON loads, n = 1…90 once each, 4 options and 4 notes, answer 0–3, topics all in `topics.txt`, `$` balanced, braces balanced inside math, no `$$` in q/options, no align/displaystyle (`apply.py`).

##### Dropped (5): `"drop": true`, reason in `flag`
- **n 1** (Q101): as printed three options fail — (b) strict `>` (fails at x = y = 0), (c), and (d) "[-x] = -[x] - 1 if x is an integer" (false for every integer). The key (c) can only be told from the key: (c) and (d) are equally corrupted forms of true rules. The transcriber kept it.
- **n 26** (Q126): garbled stem ("a be a point which is given convergent"). Without continuity no option follows (f(x) = 1/x, f(0) = 0, a_n = 1/n gives f(a_n) = n); with continuity both (a), the key, and (b) hold. Intended question is a guess. The transcriber kept it.
- **n 36** (Q136): unanswerable as printed: y'' = 0, y(0) = y'(0) = 0 gives y ≡ 0, not an option. The key x²/2 fits y'' = 1, but nothing in the paper shows that was meant. The transcriber kept it.
- **n 85** (Q185): Sylow question that names no group; "usual ring operation" meaningless. (Transcriber had suggested dropping.)
- **n 90** (Q190): "order of convergence of cosh√z": as the order of the entire function the answer is 1/2 (not an option); as the radius of convergence it is infinite (the key). Intended question is a guess. I restored the printed wording "order of convergence" in `q` (the transcriber had changed it to "radius"). The transcriber kept it.

##### Disagreements with the green key (kept, worked answer)
- **n 28** (Q128) "The sum of the series n(Sin(n))", read as Σ n sin n: answer (d) oscillates infinitely, key (b) divergent. Partial sums S_N = sin(N+1)/(4 sin²½) − (N+1)cos(N+½)/(2 sin½) swing between about ±1.04N (closed form verified numerically). The options list the oscillating cases separately, so "divergent" here means S_N → ±∞, which does not happen; (b) would fit Σ n sin(1/n) or the loose sense "not convergent". Kept the transcriber's (d); the solution now states the board's key and why it is wrong. Least certain of the kept items: the series itself may be a misprint.
- **n 70** (Q170) Cauchy sequence in a metric space: answer (d) bounded, key (a) convergent. Convergence needs completeness, which is not assumed (and the paper's own Q175 says Q is not complete). Certain. Solution now says so plainly; flag also notes (c) "Cauchy" just restates the hypothesis.

##### Changes made (all to solutions/flags; no answer changed on a kept question; no option text changed)
- n 5: solution now says (d) is also correct and the key is (c).
- n 6: solution says the wording is garbled and how it is read (region under y = x, ordinates x = 0 to 4, about the x-axis).
- n 21: new flag and solution note: "<f>= 1" has lost its subscript; read as the constant sequence f_n = 1.
- n 28, 70: solution states the board's key and why it is wrong; flags extended.
- n 29, 43, 44, 51, 54, 65, 74, 79: solution now begins with what the paper printed and how it was read (extra rule).
- n 46: solution says (a) and (d) are also true and "on R" means "on I"; (c) is the theorem tested (key).
- n 47: new flag and solution note: option (c) is the theorem's conclusion, not a hypothesis, so strictly it is not a condition either; (d), the key, is intended.
- n 59: solution notes "for every partition P" should be "for some partition P".
- n 62: new flag: "(from a to b)" was added to the stem by the transcriber.
- n 71: solution says option (a) omits "interior of".
- n 75, 81: solution says the second correct option is also correct and which one the board keyed.
- n 76: solution now opens with "as printed no option always holds; 'complete' for X has been left out".
- n 1, 26, 36, 85, 90: dropped (above); solutions/flags rewritten accordingly.

##### Kept with a flag (genuinely faulty or garbled, intended answer certain)
- Two correct options: n 5 (also d), n 75 (also d), n 81 (also c); n 46 (a, d also true); n 65 (a also true), n 69 (c also true), n 73 (c trivially true), n 47 (c not a hypothesis either). Answer = key in each.
- Misprint/garble repaired with the reading stated in the solution: n 6, 21, 29, 43, 44, 51, 54, 59, 62, 65, 71, 74, 76, 79.
- Spelling fixes only: n 10, 20, 32, 60.

##### Doubtful
- n 28: kept against the key on the printed series; if the board meant Σ n sin(1/n), the key would be right. Dropping it would also be defensible.
- n 76 and n 71: no option is strictly true as printed; kept because the missing words ("complete", "interior of") are evident from the options and the intended answer is certain.
- n 21, 54, 74: garbled stems kept because every sensible reading gives the same (keyed) answer.

##### Count
90 questions checked; 5 dropped (n 1, 26, 36, 85, 90); 85 kept. Answer = green key on 83 of the kept 85; differs on n 28 and n 70. 32 lines carry a flag.

## UP PGT Mathematics 2026 (10 May)

- Source: UPESSC PGT written examination, Mathematics, held on 10 May 2026 (question booklet as shared after the exam).
- In the app: `data/mq/up-pgt-2026.json`, 125 questions; full mock 60 seconds a question, negative marking none.

### Transcription and first solution

### UP PGT (UPESSC) Mathematics, written examination of 10 May 2026

#### Source
- File: `papers/up-pgt-2026/paper.pdf`, 31 PDF pages with no text layer.
- It is a scanned bilingual (Hindi/English) question booklet distributed by a coaching site. Every page carries the site's logo watermark, a vertical serial number, small QR codes and the booklet series code "06".
- A candidate's handwritten ticks and rough work are on most pages. They were ignored; in several places (e.g. Q82, Q93, Q100, Q115, Q117) the ticks differ from the worked answers.

#### Page map
| PDF page | Booklet page | Questions |
|---|---|---|
| p1 | 2 (under the site's title strip) | Q1–Q2 |
| p2 | advertisement (skipped) | none |
| p3 | 3 | Q3–Q9 |
| p4 | 4 | Q10–Q14 |
| p5 | 5 | Q15–Q19 |
| p6 | 6 | Q20 |
| p7 | 7 | Q21–Q25 |
| p8 | 8 | Q26–Q29 |
| p9 | 9 | Q30 |
| p10 | 10 | Q31–Q34 |
| p11 | 11 | Q35–Q37 |
| p12 | 12 | Q38–Q40 |
| p13 | 13 | Q41–Q46 |
| p14 | 14 | Q47–Q52 |
| p15 | 15 | Q53–Q58 |
| p16 | 16 | Q59–Q63 |
| p17 | 17 | Q64–Q66 |
| p18 | 18 | Q67–Q70 |
| p19 | 19 | Q71–Q74 |
| p20 | 20 | Q75–Q79 |
| p21 | 21 | Q80–Q84 |
| p22 | 22 | Q85 |
| p23 | 23 | Q86–Q89 |
| p24 | 24 | Q90–Q95 |
| p25 | 25 | Q96–Q99 |
| p26 | 26 | Q100–Q105 |
| p27 | 27 | Q106–Q109 |
| p28 | 28 | Q110–Q114 |
| p29 | 29 | Q115–Q120 |
| p30 | advertisement (skipped) | none |
| p31 | 30 | Q121–Q125 |

- Booklet page 1, the cover with instructions, is not in the PDF. It holds no questions, since Q1 starts on booklet page 2.
- **No question pages are missing.**

#### Questions
- Range: **Q1–Q125, all mathematics**, as expected. `questions.jsonl` has 125 lines, numbered 1–125 in order with none repeated. No questions were skipped.
- Official key: none is printed, so `"key": null` everywhere. Level is `"PGT"` everywhere.
- Text: the English half was used and compared with the Hindi where needed. No misprints were corrected. Kept as printed:
  - Q11: the English shows vertical bars around $P/Q$ and $Q/P$; the Hindi has plain fractions. They were written as plain fractions. Forces are positive magnitudes, so this does not change the answer.
  - Q52 (A) is printed as "$y^3=\dots$".
  - Q41 uses $\phi$ for the empty set.
  - Grammar is kept as printed, e.g. Q63 "The partial differential equation represents the curve …".
- Answers set by me: A = 27, B = 27, C = 38, D = 33.
- Topic choices with no exact page:
  - No page covers partial differential equations. Q52 (complete integral) and Q90 (Clairaut-form PDE of planes) are under tp-08-03. Q63 (forming a PDE) is under tp-08-01.
  - Q111 (Atwood's machine) is under tp-15-08.
  - Q28 (rods resting on a circle; height of the centre of gravity stationary) is under tp-15-05, the stability-of-equilibrium page.

#### Verification
`verify.py` recomputes **115 of the 125 answers** a second way. The methods are numerical integration and differentiation, exact Fraction arithmetic, numpy linear algebra, brute-force enumeration, substitution, and an RK4 run of the pendulum (Q50). Each check tests every option independently.
- 114 checks confirm my answer as the only passing option.
- Q109 passes two options, (B) and (C), as flagged below.
- No check disagrees with my answer.

The 10 questions not checked by script are pure theory with nothing to compute: Q26, Q30, Q34, Q43, Q47, Q70, Q80, Q86, Q99 and Q100 (group property, order/degree, triangle of forces, statements about determinants, definitions). I checked those by hand.

`build.py` also checks the file format: every line is valid JSON (reloaded with `json.loads`), there are exactly four options and four notes, `$` signs are balanced, `$$` appears only in solutions, every topic id exists in `topics.txt`, and the numbering runs 1–125. `cmds.py` lists the LaTeX commands used; all of them are standard KaTeX.

#### Flags (3)
- **Q4**: Matrix of $T(x,y)=(2x-3y,x+y)$. (D) is the usual column convention, $T(e_j)$ as columns. (B) is its transpose, the convention a few books use. (D) is taken because the paper itself uses the column convention in Q73.
- **Q59**: $(\det M)^2=4$ gives $\det M=\pm2$. Only $+2$ is offered, so (C) is taken.
- **Q109**: There are two tangents to $x^2-9y^2=9$ from $(3,2)$, and both are options: (B) $x=3$, the tangent at the vertex $(3,0)$, and (C) $12y-5x-9=0$. (C), the tangent found by the slope method, is taken as intended. Distractor (A) is (C) with its coefficients swapped, which suggests (C) is the designed answer.

#### Pattern of the paper (for the exam-pattern study)

##### Questions per topic id
| Topic id | Page | Qs | Question numbers |
|---|---|---|---|
| tp-01-01 | Sets and set operations | 2 | 41, 61 |
| tp-01-02 | Relations and functions | 1 | 29 |
| tp-01-03 | Permutations and combinations | 3 | 14, 96, 118 |
| tp-01-04 | Binomial theorem | 1 | 8 |
| tp-01-05 | Exponential and logarithmic series | 1 | 104 |
| tp-01-06 | Sequences and series | 2 | 10, 79 |
| tp-01-08 | Quadratic equations | 2 | 5, 112 |
| tp-02-01 | Types of matrices, products | 7 | 32, 45, 54, 69, 91, 106, 122 |
| tp-02-02 | Inverse of a matrix | 1 | 92 |
| tp-02-03 | Determinants, adjoint | 7 | 19, 25, 59, 64, 70, 75, 85 |
| tp-02-04 | Rank and linear systems | 1 | 107 |
| tp-02-05 | Eigenvalues, Cayley–Hamilton | 4 | 7, 35, 57, 82 |
| tp-03-01 | Vector spaces and subspaces | 2 | 47, 99 |
| tp-03-02 | Linear dependence, basis, dimension | 5 | 16, 17, 74, 78, 115 |
| tp-03-03 | Linear transformations | 7 | 1, 4, 22, 48, 73, 89, 121 |
| tp-04-02 | Elementary properties of groups | 1 | 26 |
| tp-04-04 | Permutations, Sn | 1 | 56 |
| tp-04-07 | Cosets and Lagrange | 2 | 37, 77 |
| tp-04-08 | Cyclic groups | 1 | 15 |
| tp-05-06 | Limits | 2 | 51, 102 |
| tp-05-07 | Continuity | 1 | 86 |
| tp-06-01 | Derivatives | 3 | 62, 113, 123 |
| tp-06-04 | Tangents and normals | 1 | 46 |
| tp-06-05 | Maxima and minima | 1 | 33 |
| tp-06-07 | Curvature | 1 | 105 |
| tp-07-01 | Standard integrals | 2 | 20, 114 |
| tp-07-02 | Methods of integration | 5 | 31, 87, 95, 101, 116 |
| tp-07-03 | Definite integrals | 5 | 36, 44, 55, 68, 81 |
| tp-07-05 | Area | 2 | 6, 12 |
| tp-07-06 | Volumes and surfaces: formulas | 1 | 117 |
| tp-07-08 | Volumes: solved exercise | 1 | 9 |
| tp-08-01 | Order, degree, formation (incl. PDE formation) | 5 | 30, 43, 63, 100, 125 |
| tp-08-03 | Higher degree; Clairaut (incl. PDE) | 2 | 52, 90 |
| tp-09-02 | Trigonometric identities | 2 | 3, 108 |
| tp-09-03 | Trigonometric equations | 1 | 66 |
| tp-09-04 | Inverse circular functions | 1 | 40 |
| tp-09-05 | Properties of triangles | 1 | 124 |
| tp-10-01 | Complex numbers: basics | 1 | 27 |
| tp-10-03 | Argument | 1 | 83 |
| tp-10-10 | Inverse hyperbolic functions | 1 | 2 |
| tp-11-01 | Points and straight lines | 1 | 23 |
| tp-11-02 | Pair of straight lines | 4 | 80, 97, 110, 120 |
| tp-11-03 | General second-degree equation | 1 | 38 |
| tp-11-04 | Circle | 1 | 119 |
| tp-11-05 | Parabola | 3 | 39, 53, 84 |
| tp-11-06 | Ellipse | 2 | 18, 98 |
| tp-11-07 | Hyperbola | 3 | 58, 60, 109 |
| tp-12-02 | Dot and cross products | 5 | 13, 42, 71, 76, 103 |
| tp-13-03 | Sphere | 1 | 88 |
| tp-14-01 | Differentiation of vectors | 1 | 24 |
| tp-14-02 | Gradient, divergence, curl | 2 | 72, 94 |
| tp-15-01 | Resultant of forces | 1 | 93 |
| tp-15-02 | Triangle of forces, Lami | 1 | 34 |
| tp-15-03 | Parallel forces | 1 | 11 |
| tp-15-05 | Centre of gravity, equilibrium | 1 | 28 |
| tp-15-07 | Moment of inertia | 1 | 65 |
| tp-15-08 | Rectilinear motion, SHM | 2 | 50, 111 |
| tp-15-09 | Projectiles | 2 | 21, 49 |
| tp-15-10 | Work, power, energy | 1 | 67 |
| **Total** | 59 topic ids | **125** | |

By chapter:
| Chapter | Questions |
|---|---|
| Matrices and determinants (tp-02) | 20 |
| Integral calculus (tp-07) | 16 |
| Coordinate geometry 2D (tp-11) | 15 |
| Linear algebra (tp-03) | 14 |
| Algebra (tp-01) | 12 |
| Mechanics (tp-15) | 10 |
| Differential equations, with PDE (tp-08) | 7 |
| Differential calculus (tp-06) | 6 |
| Groups (tp-04) | 5 |
| Trigonometry (tp-09) | 5 |
| Vectors (tp-12) | 5 |
| Real analysis (tp-05) | 3 |
| Complex numbers (tp-10) | 3 |
| Vector calculus (tp-14) | 3 |
| 3D geometry (tp-13) | 1 |

Nothing at all on probability and statistics (tp-16), commercial maths and Euclidean geometry (tp-17), rings and fields, sequences and series of real numbers, or 3D lines and planes. There is only one 3D question, on the sphere.

##### Style and difficulty
**One-line note:** a moderate, B.Sc.-level paper of mostly one- or two-step computations with standard textbook results (about 80 of 125). About 28 are direct recall of a definition, formula or theorem, and about 17 need genuinely multi-step work (e.g. Q9, Q28, Q46, Q60, Q64, Q95, Q98, Q109). It leans to computation over theory, though linear algebra and group questions are theory-flavoured. Matrices, determinants and linear algebra make up 34 of 125.

Formats: 5 match-the-list questions (Q2, Q20, Q30, Q38, Q85), 3 "which statements are correct" questions (Q15, Q61, Q70), and the rest direct single-answer MCQs. This split into recall, short computation and multi-step is my own judgement.

### Independent check

#### UP PGT Mathematics, 10 May 2026: check of 22 November 2026

Independent check of `pyq/up-pgt-2026/questions.jsonl` (UPESSC PGT Mathematics, 10 May 2026; scanned bilingual booklet, series 06; no official key). Output: `questions.checked.jsonl` in this folder (125 lines, Q1–Q125, all PGT, `key` null everywhere).

##### Method
- Rendered all 31 PDF pages with PyMuPDF at zoom 2 (`img/pNN.png`) and cropped doubtful spots at zoom 3–6 (`img/c_*.png`). Compared every question stem and all four options with the English half, using the Hindi where the print was unclear. PDF p2 and p30 are advertisements; the page map in the transcriber's log is right.
- Solved all 125 questions myself before reading the transcriber's answers (`mine.json`), then compared.
- `mycheck.py` (numpy and fractions; sympy is not installed here) checks **106 answers** by an independent computation that tests each option: numerical integration and differentiation, exact fractions, matrix algebra, brute-force counting, substitution. Each check gives my answer as the only passing option. The other 19 (Q15, 17, 26, 30, 34, 41, 43, 45, 50, 58, 65, 70, 80, 86, 94, 97, 99, 100, 105) are theory or one-line recall and were checked by hand.
- Format: every line reloads with `json.loads`; 4 options and 4 notes each; `answer` 0–3; even number of `$` in every string; `$$` only in solutions; no `align`/`\displaystyle`; every LaTeX command is standard KaTeX (`cmds.py`); every topic id is in `topics.txt`.

##### Result
- **Answers:** mine agree with the transcriber's on 124 of 125. The one difference is Q109, caused by a transcription error (below).
- **Dropped:** none. No question as printed has two correct options or none.
- **Transcription:** one error, in Q109 option (C). Everything else matches the page, including the signs, exponents, matrix entries and option order.

##### Changes made (7 questions)
| Q | What was wrong | Now |
|---|---|---|
| 109 | **Transcription:** option (C) was written $12y-5x-9=0$; the booklet prints $12y-5x+9=0$ (zoomed crop `img/c_p27_81_85.png`). With the wrong sign, (B) and (C) both looked like tangents from $(3,2)$, so (C) was taken. | As printed, (C) touches $x^2-9y^2=9$ at $(5,\frac43)$ but does not pass through $(3,2)$ ($24-15+9=18$). The only correct option is **(B) $x=3$**, the tangent at the vertex $(3,0)$, which passes through $(3,2)$. **Answer changed C → B.** The solution, notes, fact and flag are rewritten to say this. The second tangent from $(3,2)$, $12y-5x-9=0$, is not offered. |
| 4 | The solution did not say how the convention is settled (the brief requires it). | Answer (D) kept. The solution now says that this paper uses the column convention: in its Q73, $T(x,y,z)=(3x+z,-2x+y,-x+2y+4z)$, the only matching option is the coefficient matrix (columns $T(e_j)$), and the transpose is not offered. It also says the row convention gives (B). Flag reworded. |
| 28 | Topic tp-15-05 (centre of gravity / stability of a body on a curved surface) teaches nothing this question uses. The solution relied on "height of G stationary" (virtual work), which no notes page states. | Topic **tp-15-03** (coplanar forces and moments: "equilibrium when both components and the moment are zero"). New solution: resolve vertically, $2R\sin\theta=2W$, then take moments about $A$, $R\cdot r\cot\theta=Wl\sin\theta$, giving $r\cot\theta=l\sin^2\theta$. The CG-height method is kept as a one-line check. The fact is updated. Answer (D) unchanged. |
| 46 | Note on (D) said "$(4,4)$ is not on the curve". It is on the curve: $16=4\cdot(2-4)^2$. | "On the curve but not on the tangent $y=\frac{3-x}{2}$." |
| 24 | Note on (B) ("not even a number at a given point") was inaccurate. | "Still contains $x$ and $y$, but at a fixed point the answer is a constant vector." |
| 90 | The solution took $c=a\sqrt{p^2+q^2+1}$ without the $\pm$. | Now $c=\pm a\sqrt{\cdots}$, with the sign offered, plus the line analogue $y=px+a\sqrt{1+p^2}$ (the Clairaut example on tp-08-03). |
| 111 | The value of $g$ was not stated. | States $g=9.8$ m/s$^2$. (With $g=10$ the difference would be 4.9 kg, still closest to (B) 5 kg.) |

##### Flags re-checked (as asked)
- **Q4** (column vs row convention): **kept, (D).** The paper fixes the convention in Q73. There, Q73's option (B), the coefficient matrix, is the only one of either convention that is offered; under the row convention no option of Q73 would be correct. The solution and flag say so. If you want zero exposure to this convention dispute, Q4 is the one to drop, but by the stated rule it can stay.
- **Q59** ($\det M=\pm2$, only $+2$ offered): **kept, (C).** No other option is possible, so no careful student would dispute it. The solution and flag already say $\pm2$.
- **Q109**: the "two tangents" problem came from the transcription error. As printed it has exactly one correct option, **(B)**, so it is **kept, not dropped**. One caveat: the setters may have meant $12y-5x-9=0$ in (C) and misprinted the sign. In that case an official key, if one is ever published, could say (C). Against that, distractor (A) $5y-12x+9=0$ is the *printed* (C) with its coefficients swapped, which suggests the $+9$ is what the setter wrote. On the printed paper, (B) is the only defensible answer. Drop Q109 only if you would rather not risk a clash with a future official key.

##### Topic ids re-checked (as asked)
No notes page covers partial differential equations, and none covers Atwood's machine (I searched the notes texts). The choices below are the nearest pages:
- **Q63** (form the PDE of $z=ax+y$): **tp-08-01** kept. It is formation by eliminating an arbitrary constant, as taught there.
- **Q90** (PDE of planes at distance $a$ from the origin): **tp-08-03** kept. The answer is Clairaut's form, and tp-08-03 works the line analogue $y=cx+\sqrt{1+c^2}$ (tangents of a circle).
- **Q52** (complete integral of $(p+y)^2+(q+x)^2=1$): **tp-08-03** kept. That page has the idea of a complete solution with arbitrary constants in Clairaut form. tp-06-02 (partial derivatives, for checking the options) is the only alternative.
- **Q111** (Atwood's machine): **tp-15-08** kept. The question is uniform-acceleration kinematics with Newton's law.
- **Q28**: changed to **tp-15-03** (see the table).
- All other topic ids were looked over and are reasonable.

##### Other remarks (no change made)
- Q11: the vertical bars around $\frac PQ$, $\frac QP$ in the English line are pen strokes by the candidate; the Hindi has none. Writing plain fractions is right.
- Q42 ($\theta=\frac{3\pi}{4}$ also works but is not offered), Q64 (the determinant also vanishes when $a=b=c$, not offered), Q105 ((B) is linear only if $a=0$) and Q113 (the domain $0<x<\pi$ is assumed) each have a single defensible option. The solutions mention the point where needed.
- Handwritten ticks on the booklet were ignored. They differ from the correct answers in many places, e.g. Q15, Q16, Q17, Q55, Q60, Q74, Q82, Q93, Q96, Q100, Q115, Q117, Q123.

##### Doubtful
- Nothing unresolved in the transcription.
- The only judgement calls are Q4 (kept on the strength of Q73) and Q109 (kept with answer (B) as printed). Both are explained in the solutions and flags.

## UPPSC GIC Lecturer Mathematics 2026 (14 June)

- Source: UPPSC Lecturer (Government Inter College) preliminary examination of 14 June 2026, booklet series TUKU-07: part II, Mathematics (questions 41 to 120), as shared after the exam.
- In the app: `data/mq/gic-2026.json`, 76 questions; full mock 60 seconds a question, negative marking none.

### Transcription and first solution

### UPPSC Lecturer (GIC) Mathematics, preliminary, 14 June 2026

Source: `papers/gic-2026/paper.pdf` (17 pages, scanned bilingual booklet, series TUKU-07, coaching-site copy with watermarks, QR codes and a candidate's handwritten marks; the marks were ignored).

#### Pages
- PDF pages 2 and 16: advertisements, skipped.
- PDF pages 1, 3–15, 17 are booklet pages 7–21 (printed page numbers run without a gap). They hold **Part II, Mathematics, Q41–Q120**, all present, none twice.
- Booklet pages 1–6 are **not in the PDF**: the cover and instructions, and Part I (Q1–Q40, presumably general studies). So the general-studies questions (Q1–Q40) are absent; none had to be skipped from the pages provided.
- Total time and negative marking: not stated anywhere in this copy (they would be on the missing cover page).
- Q120 ends booklet page 21, with rough-work space below it, so it is probably the last question. The missing cover would confirm the total.

#### Output
- `questions.jsonl`: **80 questions, n = 41 to 120**, level "PGT", key null (no official key printed).
- Built by `build.py` from `qa.py` (Q41–80) and `qb.py` (Q81–120). The file is reloaded line by line with `json.loads`: all 80 lines are valid JSON. Topic ids are checked against topics.txt; numbers are 41..120 in order.
- `verify.py` re-computes **77 of 80 answers** by script (pure Python: fractions, complex numbers, numerical integration and limits, brute-force enumeration, concrete group models). No mismatches. Not script-checked: Q43, Q62, Q95 (definitions and theory, checked by reasoning).

#### Flags (10)
- **Q43**: convention-dependent. Some books call only G improper ({e} is then trivial). The usual Indian-textbook convention gives (c) "both".
- **Q58**: the relation symbol is printed as a double-struck ℝ ("a ℝ b"). Written here as aRb.
- **Q62**: (d) "Semi group" is trivially true too (every group is a semigroup). (b) "Abelian" is the intended answer.
- **Q82**: misprint fixed. The paper prints y²/a in both languages, and then no option fits (a ≈ 4.84, foci 8.62 apart). The standard question has y²/9, which gives 2√7 (a).
- **Q98**: the line 3x − 2y + 2 = 0 cuts the ellipse 3x² + 4y² = 16 (at x² + x − 1 = 0). So the least distance is 0 and the answer is (d). The setter probably meant the parallel-tangent distance 6/√13 (b).
- **Q99**: "for all a, b ∈ G" cannot be literal: a = e forces b = e. Read as given a, b with a⁵ = e and aba⁻¹ = b², which gives O(b) = 31 (a).
- **Q110**: the printed matrix lacks the factor 1/10. Its known entries are those of adj B, and |B| = 10. Taking x, y as entries of the true inverse gives x + y = 1/2 + 1/10 = 3/5 (a). With 1/10 outside the whole matrix, x + y = 6, which is not an option.
- **Q111**: g(x) = x + 1/x takes only values with |t| ≥ 2, so f near t = 1 is not determined. The intended f(t) = t³ − 3t gives f′(1) = 0 (c).
- **Q115**: as printed, log_{sin x}(cos x) is undefined at x = π/2 (base 1, argument 0), and its derivative blows up near π/2. So (d) "None of the above" is the only defensible answer. The sin⁻¹ term alone gives −8/(π² + 4) (c), the likely intended answer; (b) is what you get if the x > 1 branch is missed.
- **Q119**: as printed (f grad φ, with φ arbitrary), statement II is false and the answer is (d) "Only I". If II meant f grad f, it is true and the answer would be (c).

#### Count
80 mathematics questions (Q41–Q120). My answers: (a) 27, (b) 17, (c) 20, (d) 16. There is no official key to compare with.

### Independent check

#### UPPSC GIC Lecturer Mathematics, 14 June 2026 (Q41–Q120): check of 22 November 2026

Paper: booklet series TUKU-07, Part II Mathematics, Q41–Q120 (Part I, Q1–Q40, not in this copy). No official key. Checked against my own renders of PDF pages 1, 3–15 and 17 (zoom 2, with zoom-4 crops of Q49, Q65, Q75 and Q82); English half, Hindi used to confirm Q82 and Q119.

- **Questions:** 80 (Q41–Q120), all present, in order, none twice. **Kept 76, dropped 4** (Q98, Q110, Q115, Q119).
- **Transcription:** every stem and all four options compared with the page. No transcription errors found (Q82's y²/9 is the transcriber's deliberate misprint fix, kept).
- **Answers:** solved independently. My answers agree with the transcriber's on all 80. `check.py` (pure Python, no sympy available) re-computes **69 of 80** by script: exact fractions, numeric integration and limits, root finding, brute-force counting, determinants and ranks, numeric optimisation. The other 11 (Q43, 62, 70, 76, 78, 91, 93, 94, 95, 105, 119) were checked by hand.
- Files: `questions.checked.jsonl` (written by `apply.py`, which also validates: 80 valid JSON lines, 4 options and 4 notes each, answer 0–3, topics in topics.txt, even `$` counts, balanced braces, no `align`/`$$` in stems or options).

##### Changes
- **Q43** (kept, (c)): solution now states the convention: in Indian textbooks and in these notes (tp-04-06) both {e} and G are improper. The wording "is/are" and option (c) show the paper uses that convention. Some books (e.g. Fraleigh) call only G improper.
- **Q53** (kept, (a)): note (c) was wrong. It said the option misses the circles below the x-axis, but +6√2y gives centres (∓3, −3√2), i.e. only the circles **below**. Notes (c) and (d) rewritten. The solution now says (c) and (d) list only two of the four circles.
- **Q62** (kept, (b)): solution now explains that (d) "semigroup" holds for every group and is not what x² = e forces.
- **Q82** (kept, (a)): the paper prints y²/a in both languages (confirmed on a zoom crop). This is the JEE question with y²/9. As printed, a ≈ 4.84 and the foci are 8.62 apart, which is no option. The misprint explanation was only in the flag; it is now in the solution too.
- **Q97**: topic tp-04-10 → **tp-04-01**. The question is solved by finding identities for unusual operations, which tp-04-01 teaches.
- **Q99** (kept, (a)): the solution now explains the misprint: "for all a, b" would force b = e, so read it as "for some a, b" (Herstein's problem). b = a⁵ba⁻⁵ = b³², so O(b) = 31. Such a group exists: 2 has order 5 mod 31.
- **Q111** (kept, (c)): the solution now notes that g only takes values |t| ≥ 2, and that f is taken to be the polynomial t³ − 3t, as usual.
- **Q98 dropped**: the line meets the ellipse (x² + x − 1 = 0; script minimum distance ≈ 0), so as printed the answer is (d). The options are built on the parallel-tangent distance 6/√13 (b), so the setter's key is a guess between (b) and (d).
- **Q110 dropped**: the printed matrix is adj B (I recomputed adj B = [[4,2,2],[−5,0,5],[1,−2,3]] and |B| = 10). It is the inverse for no x, y.
  - With 1/10 restored, x + y = 6, which is not an option.
  - (a) 3/5 needs x and y alone read as entries of B⁻¹. A careful student would dispute that.
- **Q115 dropped**: log_{sin x}(cos x) is undefined at π/2, which makes (d) the printed answer. The setter likely meant (c) −8/(π² + 4), but possibly (b).
- **Q119 dropped**: as printed (f grad φ, φ arbitrary), statement II is false and the answer is (d). If φ was meant to be f, the answer is (c). curl(f∇φ) = ∇f × ∇φ; for example f = x, φ = y gives k̂.
- **Q58** (flag only, about the double-struck ℝ used as the relation symbol): unchanged.

##### Re-check of the 10 flags
| Q | Decision |
|---|----------|
| 43 | kept (c), with the convention explained |
| 58 | kept (d); the flag is only about the symbol |
| 62 | kept (b); the solution now explains why not (d) |
| 82 | kept (a); misprint y²/9 certain |
| 98 | **dropped** |
| 99 | kept (a); misprint "all" for "some" certain |
| 110 | **dropped** |
| 111 | kept (c) |
| 115 | **dropped** |
| 119 | **dropped** |

##### Other checks
- Every topic id was reviewed. Only Q97 was changed.
- Every solution, fact and option note was read; only Q53's note was wrong.
- Script-confirmed points include:
  - Q49: the domain scan gives (5, 8.2], so 3α + 10β = 97.
  - Q65: the last term is r = n − 1, so the limit is π/6.
  - Q66: brute force gives 48.
  - Q86: generators are perpendicular when αβ + βγ + γα = 0, not when α + β + γ = 0.
  - Q90: examples where (a), (b) and (c) fail; (d) always holds.
  - Q120: rank 4.

##### Doubtful (kept)
- **Q43** depends on a convention; the notes and the paper's wording agree on (c).
- **Q62**: (d) is trivially true; (b) is clearly intended.
- **Q111**: the domain subtlety is set aside in the usual way.
- **Q53**: options (c) and (d) also consist of valid circles. (a) is the only option giving the complete family.

## Left out at publication

Two more questions were left out when the files were built, besides those the checkers dropped: DSSSB TGT 2021 Q128 (the printed series "n(Sin(n))" is ambiguous; read as the sum of n sin(1/n), the board's key would be right) and LT Grade 2025 Q135 (read literally with 0 ≤ θ ≤ π, the answer would also include (5π/6, π], so the kept option depended on a convention).
