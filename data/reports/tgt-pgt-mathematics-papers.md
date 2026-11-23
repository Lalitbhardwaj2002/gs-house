# UP TGT / PGT Mathematics: solved past papers, check log

Each paper below was transcribed and solved by one agent from the page images of a copy shared after the exam (the copies stay outside the repository; the 180-question DSSSB sections in two halves; GIC 2021, of which no copy could be found, was rebuilt from the questions a question book marks as asked in it), then checked by a second, independent mathematician agent, who compared every question and option with the page images, solved every question before looking at the first answers, recomputed answers by script where possible, and corrected the solutions and the option notes. A question with no defensible answer (no correct option, two defensible answers, impossible data, or a printed text whose intended meaning is a guess) is left out of the quiz; the table lists them. Where a paper prints its board's key (DSSSB) and the worked answer differs, the solution says so and why.

Questions shown to players: 1973 from 17 papers (23 November 2026).

| Paper | Level | Transcribed | In the quiz | Left out |
|---|---|---|---|---|
| UP TGT Mathematics 2026 (3 June) | TGT | 125 | 125 | — |
| UP TGT Mathematics 2021 | TGT | 120 | 120 | — |
| UP TGT Mathematics 2016 (held 8 March 2019) | TGT | 125 | 122 | Q3, Q99, Q104 |
| UP TGT Mathematics 2013 (held 1 February 2015) | TGT | 125 | 122 | Q2, Q98, Q108 |
| UPPSC LT Grade Mathematics 2025 (6 December) | TGT | 120 | 107 | Q32, Q61, Q74, Q94, Q101, Q104, Q115, Q122, Q133, Q135, Q137, Q144, Q145 |
| UPPSC LT Grade Mathematics 2018 (29 July) | TGT | 112 | 108 | Q72, Q102, Q111, Q142 |
| DSSSB TGT Mathematics 2021 (2 September, shift 3) | TGT | 90 | 84 | Q101, Q126, Q128, Q136, Q185, Q190 |
| DSSSB TGT Mathematics 2021 (13 September, female) | TGT | 90 | 81 | Q110, Q125, Q132, Q139, Q143, Q155, Q168, Q177, Q182 |
| DSSSB TGT Mathematics 2018 (18 November, female) | TGT | 90 | 80 | Q110, Q114, Q146, Q153, Q154, Q155, Q164, Q165, Q183, Q190 |
| UP PGT Mathematics 2026 (10 May) | PGT | 125 | 125 | — |
| UP PGT Mathematics 2021 (18 August) | PGT | 125 | 125 | — |
| UP PGT Mathematics 2016 (held 2 February 2019) | PGT | 125 | 125 | — |
| UPPSC GIC Lecturer Mathematics 2026 (14 June) | PGT | 80 | 76 | Q98, Q110, Q115, Q119 |
| UPPSC GIC Lecturer Mathematics 2021 (rebuilt from a question book) | PGT | 80 | 78 | Q35, Q71 |
| DSSSB PGT Mathematics 2026 (13 April, shift 1) | PGT | 180 | 177 | Q104, Q164, Q203 |
| DSSSB PGT Mathematics 2025 (21 July, shift 1) | PGT | 180 | 172 | Q157, Q172, Q196, Q203, Q206, Q225, Q229, Q270 |
| DSSSB PGT Mathematics 2021 (31 July, male) | PGT | 180 | 146 | Q108, Q109, Q113, Q118, Q137, Q143, Q155, Q156, Q172, Q174, Q182, Q183, Q187, Q188, Q193, Q196, Q199, Q208, Q209, Q210, Q211, Q219, Q222, Q228, Q246, Q248, Q250, Q252, Q253, Q257, Q267, Q268, Q273, Q276 |

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

## UP TGT Mathematics 2016 (held 8 March 2019)

- Source: UPSESSB TGT written examination of advertisement 01/2016, Mathematics (booklet code TG-07), held on 8 March 2019: a typed copy of the question booklet (series A order) as shared after the exam, with the board's final answer key of 25 October 2019.
- In the app: `data/mq/up-tgt-2016.json`, 122 questions; full mock 60 seconds a question, negative marking none.

### Transcription and first solution

### UP TGT Mathematics 2016 (held 8 March 2019): transcription log

#### The paper
- Exam: UP TGT (UPSESSB, advertisement 01/2016), Mathematics, booklet code **TG-07**, held **8 March 2019**. Level TGT.
- Source: `papers/up-tgt-2016/paper.pdf`, 32 pages. It is **a typed transcription by a coaching publisher**, not a scan of the booklet: English only, Q1–125 in series A order, with the publisher's watermark and its own "Correct Option" line under each question. The publisher's answers were ignored.
- Not question pages: PDF p.1 (cover "UP TGT Previous Year Paper Mathematics 2019") and p.2 (advert). Questions run from PDF p.3 (Q1) to p.32 (Q125).
- The text layer was too jumbled for the mathematics, so every page was read from images rendered at zoom 1.6.
- Official key: `papers/up-tgt-2016/key.pdf`, a 4-page scan of the board's final key. The heading of each page says, in Hindi, that the expert committee's report led to no change in the key. **Set A is page 1**, headed "TG-07 (Mathematics) (A Set)". It was read column by column at zoom 2.2 and stored in `key.txt`. It was opened only after every question had been solved and the answers saved in `myanswers.txt`.
- Cross-check: the Youth (YCT) book `Youth TGT PGT Maths 2024-25 Edition.pdf` prints 127 items tagged "UP TGT-2016 (08-03-2019)". It was read with the crop box reset to the media box (pages 349, 388, 389, 530, 665, 825, 1151 and 1198 were rendered) and searched through the existing text dump `youth/text.txt`. It was used only to confirm the wording of unclear or doubtful typed questions. Each use is named in the flag.

#### Question range and count
- Q1–125, all mathematics. There is no GS, language or pedagogy part, so nothing was skipped.
- **Questions in `questions.jsonl`: 125**, in order, none twice. `level` is "TGT" for all of them. `key` holds the set A key as 0–3.

#### Answer vs board key
- After the two typed-copy errors below were corrected (Q97, Q105), **my answer agrees with the board's key on all 125 questions**.
- Before that correction, two answers differed, and both come from the typed copy:
  - **Q97**: with the typed option order my answer 0 was option (c), while the key says (d). The Youth book prints the options as (c) 1/2 and (d) 0, which agrees with the key, so that order is used.
  - **Q105**: the typed stem asks only for x (answer 3, option a). The key says (d) 10, which fits the full question in the Youth book: the value of x² + 9/x².
- Q3 and Q99 agree with the key only as the *intended* answer; see the flags.

#### Flags (17)
- **Q3**: No option is correct. The true probability is 3/7: 3 of the 7 equally likely ordered families with at least one boy. The key's (b) 1/3 treats the make-ups 1, 2 and 3 boys as equally likely, and it is recorded as the intended answer. "atleast" is written as "at least".
- **Q5**: Typed √(F₁² + F₂¹). The exponent 1 is a typing slip for 2, and the Youth book prints F₂².
- **Q6**: Option (d) "neither I no II" corrected to "nor".
- **Q18**: The typed numerator reads like sin(nx/2). The Youth book prints sin(nπ/2), which is used. The limit is 0 either way.
- **Q20**: The Youth book prints option (a) as 0, while the typed copy has 3; the answer is not affected. The answer x assumes 0 < x ≤ 1. For −1 < x < 0 the principal values give −x (checked by script).
- **Q23**: "circel" corrected to "circle".
- **Q26**: Option (c) lost its final α ("b² sin²"). It is restored from the Youth book.
- **Q33**: Option (c) was typed as just "a × (b · c)", which is not a statement. The Youth book has "… is not defined", which is restored. Then only (a) is false.
- **Q57**: The Youth book prints x² + xy + **y²** + x + y = 1, while the typed copy has 2y². The typed version is kept, and it is an ellipse either way.
- **Q68**: "cube root of unit" corrected to "unity".
- **Q75**: No real a, b, c fit the data, since a² + b² + c² = 5 would be less than ab + bc + ca = 10. The identity still gives the intended −25.
- **Q85**: Printed "cos hx + sin hx", and the Youth book has the same spacing. It is read as cosh x + sinh x = eˣ.
- **Q97**: Options (c) and (d) are swapped in the typed copy. The Youth order (c) 1/2, (d) 0 is used, and it matches the key (d).
- **Q99**: The data are impossible. For unit vectors |a + b|² ≤ 4, so it cannot be 8, which would need a·b = 3. The intended 6 (key (c)) follows formally, and the Youth book prints the same question.
- **Q104**: Strictly, any x ≥ 20 (every option) gives median 18. The list is meant to be in ascending order, which forces x = 20.
- **Q105**: The typed stem is cut short to "the value of x", and its option (a) reads 3. The Youth book's full question (x² + 9/x², with options 8, 12, 16, 10) is used. With the typed stem the answer would be x = 3.
- **Q114**: "Isoscales" corrected to "Isosceles".

Smaller points, handled without a flag:
- The Q69 figure is described in brackets in the question: the semicircle lies right of the y-axis, with its diameter on that axis and its centre at O.
- Q41: a line graph would also suit, but it is not offered. The answer is the simple bar diagram.
- Q14: option (d) is printed "2(ac + bc + ca)" (probably meant ab + bc + ca). It is kept as printed, since it is wrong either way.
- Grammar of the original, such as "the letter of the word", "If the side of a right angle triangle are" and "What is co-ordinates of its centroid is", is kept as printed.

#### Verification
- `verify.py` recomputes the answer to every one of the 125 questions, and **all 125 agree** with `answer`.
- **119 were checked by script.** The methods include sympy (determinants, roots, gcd, dsolve, limits, symbolic expansion), mpmath (numerical integration, limits, derivatives), brute-force counting (the BALLOON permutations, three dice, families of three children), complex arithmetic (ω, tan(x+iy), sin²(x+iy)), and construction of the figures (Q23, Q54, Q86, Q90, Q114, Q121).
- About 12 of these confirm a property rather than choosing among the options independently: Q3, Q6, Q24, Q27, Q52, Q56, Q57, Q59, Q89, Q92, Q110 and Q112.
- 6 were checked by theory or inspection only: Q7 (Lami's theorem), Q9 (the empirical relation), Q33 (only (b) is checked by script), Q41, Q48 and Q100.
- `build.py` reloads `questions.jsonl` line by line with `json.loads`. It also checks the topic ids against `topics.txt`, the 4 options and 4 notes per question, `$` pairing, brace and \left/\right balance, control characters, and forbidden KaTeX constructs (\displaystyle, a thin space before a prime, the rupee sign).
- `texchk.py` puts every inline formula (about 1400) through pdflatex with amsmath, and there are 0 errors. `widths.py` lists the widest formulas, and the long ones were split at "=" to fit a phone.

#### Files
- `questions.jsonl`: the output, 125 lines.
- `qa.py`, `qb.py`, `qc.py`: the question sources. `build.py` builds the output from them, `verify.py` checks the answers, and `texchk.py` and `widths.py` check the formatting.
- `key.txt`: the set A key. `myanswers.txt`: my answers, saved before the key was opened.
- `img/`: paper pages. `keyimg/`: key crops. `ypg/`: Youth pages used for the cross-checks.

### Independent check

#### UP TGT 2016 (held 8 March 2019): check of 23 November 2026

##### What was checked
- Paper: UP TGT (UPSESSB, advt. 01/2016) Mathematics, booklet TG-07, series A, held 8 March 2019. Source `papers/up-tgt-2016/paper.pdf` is a coaching publisher's typed copy (Adda247 watermark, "Correct Option" lines ignored). 32 pages; questions on pp. 3–32.
- **Questions: 125** (Q1–125, all mathematics, level TGT). After this check **122 go to the quiz and 3 are dropped** (`"drop": true`): Q3, Q99, Q104.
- Every page was rendered (PyMuPDF, zoom 1.5) and every question and all four options were compared with the transcriber's file. The text layer was used as a second reading.
- Board key: `key.pdf` p. 1, "TG-07 (Mathematics) (A Set)", headed (in Hindi) "no change in the answer key after the expert committee's report", i.e. the final key. I read it myself; the `key` field matches it for all 125.
- Youth (YCT) 2024-25 book: crop box reset to the media box. I located its 127 items tagged "UP TGT-2016" by text search and rendered pp. 102, 164, 349, 388, 389, 530, 665, 825, 884, 1000, 1057, 1058 and 1198 to compare the doubtful questions.
- I solved all 125 questions from the page images before opening `questions.jsonl` or the transcriber's log. Then I compared my answers with the board key and with the transcriber's answers.

##### Answers
- With the Youth book's wording for Q97 and Q105, my answers agree with the board key on all 122 kept questions. They also agree with the transcriber on every question.
- **Disagreements with the key:** only among the dropped questions. Each solution names the key and explains why it fails:
  - **Q3**: the key is (b) 1/3, but the true value is 3/7, and no option gives it. The key treats families with 1, 2 and 3 boys as equally likely, but out of 7 they occur 3, 3 and 1 times.
  - **Q99**: the key (c) 6 follows only formally from a·b = 3, which is impossible for unit vectors.
  - **Q104**: every option gives median 18. The key (d) 20 needs the unstated assumption that the list is already in ascending order.
- **Script checks:** `work/mycheck.py` (sympy and numerics, my own code) covers 116 questions. 3 of these entries are placeholders with no computation (Q58, Q79, Q100), so **113 were checked by script** and all pass.
  - For Q3, Q99 and Q104 the script confirms the flaw: P = 3/7, the formal value 36 from a·b = 3, and median 18 for x = 20, 22, 23 and 24.
  - The other 12 were checked by theory only: Q7, Q9, Q23, Q33, Q34, Q41, Q48, Q53, Q58, Q79, Q100 and Q110.
  - Other script checks: brute force for BALLOON, the three dice and the families; a coordinate construction for Q54; dsolve for Q94; and a complex triple for Q75.

##### Changes made to the transcriber's file
| Q | What was there | What it is now |
|---|---|---|
| 3 | Kept, with (b) 1/3 recorded as the "intended" answer | **Dropped**: no option is correct. The solution now says the key (b) is wrong and why. Note (b) and the flag were rewritten. |
| 99 | Kept, with 6 as the intended answer | **Dropped**: impossible data, since \|a + b\|² ≤ 4 for unit vectors. The solution says the key (c) holds only formally. Notes and flag were rewritten. |
| 104 | Kept, with 20 "because the list is in ascending order" | **Dropped**: every option (24, 22, 23, 20) gives median 18, and the ascending order is not stated. The Youth book has the same wording. Solution, notes and flag were rewritten. |
| 43 | The solution used complex x without saying so | Added: no real x has x + 1/x = √3. The complex roots give exactly 0. A flag was added. |
| 75 | The flag said "complex a, b, c exist", but the solution did not mention it | The solution now explains why no real triple exists. It gives a complex one, a = 0 and b, c = (5 ± i√15)/2, for which the value is −25. Flag reworded. **Kept**, see below. |
| 69 | The question said "(In the figure the semicircle lies …)", a figure the student cannot see | Reworded as a set-up: the disc lies right of the y-axis, with its diameter along the y-axis and its centre O at the origin. |
| 21 | Note (a): "Sign error in the product (A + iB)(A − iB) = A² + B²", which blames the wrong step | Note (a): "Uses 1 + (A + iB)(A − iB) in the denominator; tan(P + Q) has 1 − tan P tan Q." |
| 80 | Note (c): "the coefficient in θ/4" | Note (c): "1/4 is the limit of (1 − √x)/(cos⁻¹x)²", which I checked with sympy. |
| 116 | The solution used 1 + ω + ω² = 0 without saying ω ≠ 1 | The solution now says ω is an imaginary cube root; ω = 1 would give 7⁶, which is not an option. |

No transcription error was found in questions, options, signs or exponents beyond the slips the transcriber had already fixed. No answer index changed. No topic changed: all 125 ids were reviewed, and the questions I doubted were checked against `notes_all.txt`. For example, Q41's diagrams are in 16.7, and Q74's pair of linear equations is in 1.7.

##### The transcriber's 17 flags, reviewed
- **Agreed as they stand:** Q5, Q6, Q23, Q26, Q33, Q68, Q85 and Q114 (typing slips and spelling). The transcriber had restored Q26 and Q33 from the Youth book; I checked both on Youth pp. 884 and 388.
- **Q97**: agreed. Youth p. 665 prints (a) 2 (b) 1 (c) 1/2 (d) 0, so 0 is (d), as in the key.
- **Q105**: agreed. Youth p. 1198 prints "x² + 9/x²" with options 8, 12, 16, 10, and the answer 10 is (d), as in the key.
- **Q18**: agreed. Youth p. 349 prints sin(nπ/2)/n, while the typed copy has sin(nx/2)/n. Either gives 0.
- **Q20**: agreed. The typed option (a) "3" is "0" on Youth p. 1058. It was left as typed because it does not affect the answer. The answer x holds for 0 < x ≤ 1, and the solution says so.
- **Q57**: agreed. Youth p. 825 has y² where the typed copy has 2y². Both are ellipses, which I checked by Δ ≠ 0 and h² < ab.
- **Q3, Q99, Q104**: overruled. Each is now dropped under the drop rule, as explained above.
- **Q75**: kept, though with the data-free reasoning made explicit. It is not "impossible data": the question does not say a, b, c are real, and complex triples satisfying both conditions exist. For every such triple, a³ + b³ + c³ − 3abc = (a + b + c)((a + b + c)² − 3(ab + bc + ca)) = −25. So exactly one option is defensible. This matches Q43 of this paper and the earlier checks' handling of x + 1/x = √3.

##### Format
- `questions.checked.jsonl`: 125 lines of valid JSON in the transcriber's style (UTF-8, non-ASCII kept). Each has 4 options and 4 notes, `answer` 0–3, and `key` equal to the set A key. Every topic id is in `topics.txt`. Every string has an even number of `$`, with balanced braces and \left/\right. There is no `$$` in a question or option, and no \displaystyle, `\,'` or rupee sign. `"drop": true` appears only on Q3, Q99 and Q104. This was checked by `work/lint.py`.
- New inline formulas are short, and longer ones are split at "=", so each fits about 300 px. No KaTeX renderer is available offline here. The new LaTeX uses only \frac, \dfrac, \hat, \cdot, \le, \ge, \pm, \sqrt and \omega.

##### Left doubtful (not changed)
- **Q20**: for −1 < x < 0, the principal values give −x, not x. The standard intended answer is x, which the flag and solution say.
- **Q59**: a "point circle" could be called a circle. The answer "a point" is the standard reading.
- **Q41**: a line graph would also suit, but it is not offered.
- **Minor Youth-book variants that do not change any answer:**
  - Q27: the Youth book has different wrong options.
  - Q123: Youth (d) is π/8, typed π/6.
  - Q118: option (a) "a/√3" is printed in both sources.

## UP TGT Mathematics 2013 (held 1 February 2015)

- Source: UPSESSB TGT written examination of advertisement 01/2013, Mathematics, held on 1 February 2015: question booklet code TG-07, series D, as shared after the exam, with the board's provisional answer key of 4 February 2015.
- In the app: `data/mq/up-tgt-2013.json`, 122 questions; full mock 60 seconds a question, negative marking none.

### Transcription and first solution

### UP TGT Mathematics 2013 (exam of 1 February 2015): transcription log

#### The paper
- Source: `papers/up-tgt-2013/paper.pdf`, 30 pages. It is a coaching site's scan of the bilingual (Hindi | English) question booklet. The scan has a YouTube watermark and a candidate's pen ticks, circles and rough working. All the handwriting was ignored.
- UPSESSB, advertisement 01/2013, TGT Mathematics, held on 1 February 2015. Booklet code **TG-07**, series **D** (printed "TG-07/D" at the foot of the pages). The booklet cover is not in the PDF.
- Not question pages: PDF p.1 (the site's title page) and p.2 (an advert).
- Question pages: PDF pp.3–30, which are booklet pages 3–30 (Q1–Q125). Nothing is missing.
- English text read from page renders (right half). The Hindi half was checked for Q55 (an option hidden by the watermark), Q70, Q98 and Q108. It prints the same text, misprints included.
- Official key: `papers/up-tgt-2013/key.pdf`, the board's provisional answer key of 4 February 2015 (3 pages, series A–D). The **series D** column is stored as `key` (A–D → 0–3) for all 125 questions. Each question was solved before its key was read.

#### Question range and count
- Q1–Q125. All are mathematics. There is no GS, language or pedagogy part, so nothing was skipped.
- **Questions in `questions.jsonl`: 125**, in order, none twice. Level "TGT" throughout.

#### Answer vs. board key
- 124 of 125 agree.
- **Q68**: we disagree with the key. The key gives (C), (x² + x + 5)(x² − x + 5), but that product is x⁴ + 9x² + 25. Option (A), (x² + 3x + 5)(x² − 3x + 5), multiplies out to x⁴ + x² + 25. `answer` = 0 (A) and `key` = 2 (C). The provisional key looks wrong here.

#### Flags (11)
- **Q2**: The exact relation is 2(b + q) = a² + p² − 2, and no option has the factor 2. Option (C), b + q = a² + p² − 2, is taken as the intended answer. The key also gives (C).
- **Q44**: "Modules" corrected to "Modulus".
- **Q47**: "continous" corrected to "continuous".
- **Q48**: Option (D) is printed "+ −2 sin t"; read as −2 sin t.
- **Q68**: Our answer differs from the board's key (see above).
- **Q70**: The options are printed as sin⁻¹(x − π/k), with the bracket misplaced in both languages. They are read and transcribed as sin⁻¹x − π/k. The answer is (C), π/6, and the key agrees.
- **Q79**: ω is taken as a non-real cube root of unity. With ω = 1 the product would be 1, which is option A. Answer (C) 4; the key agrees.
- **Q84**: "directix" corrected to "directrix".
- **Q98**: The paper asks for "the Median of the triangle" (Hindi: माध्यिका), but the options are points. It is read as the centroid. Option (C) is printed (5/√3, 1/√3), while the centroid is (5/3, 1/√3), so the option is corrected to (5/3, 1/√3). The key gives (C).
- **Q100**: "stes" corrected to "sets".
- **Q108**: The question is flawed. If a is real, the roots are 2 ± i, whose product is 5, not 1. The intended answer is a = 4, the sum of the roots, and the key gives (B) = 4. For the equation as printed, a would be (12 + 4i)/5.

Smaller points, handled in the solutions without a flag:
- Q9: a point circle is described as a degenerate circle.
- Q20: uses π = 22/7, which gives exactly 168.
- Q25: the two solvers are taken as independent.
- Q31: uses g = 9.8.
- Q32: the triangle is also isosceles, but equilateral is the precise answer.
- Q41: assumes x, y > 0 and a, b, c > 0.
- Q64: the HCF is 1, so the answer is "none of these".
- Q80: all three statements hold, so the answer is "all of these".
- Q82: the latus rectum is 1/|a|.

#### Verification
- `verify.py` recomputes the answer to every question independently and compares it with `answer`. **117 were checked by script** and all agree. The methods include:
  - sympy for solving, factorising, gcd/lcm, determinants, limits, dsolve and series coefficients;
  - mpmath numerical integration and polynomial roots;
  - dense numerical scans (Q7, Q62, Q99, Q122);
  - brute-force counting (Q22 weekdays, Q30, Q65, Q81, Q111 Venn regions);
  - random vectors and sets;
  - a loan amortisation simulation (Q40);
  - constructing the figures (Q24, Q32, Q98, Q118, Q119).
- 8 were checked by inspection only, because they are definitions or names: Q9, Q39, Q60, Q72, Q101, Q107, Q109, Q113.
- Q2 and Q108 are flawed as printed. The script confirms the exact relation and value, and the intended option is used.
- `build.py` reloads `questions.jsonl` line by line with `json.loads`. It also checks:
  - the topic ids against `topics.txt`;
  - four options and four notes per question;
  - `$` pairing;
  - stray control characters or literal "\n";
  - no `\displaystyle`, no rupee sign, and no thin space before a prime.
- `texcheck.py` checks brace and `\left`/`\right` balance inside every formula.

#### Paper quality
- The scan is clear. The watermark hides one option in Q55 (Rs 12), which was read from the Hindi half.
- Candidate's ticks and rough working are on many pages and were ignored.
- The misprints are listed under Flags.

#### Files
- `questions.jsonl`: the 125 questions.
- `qa.py`, `qb.py`, `qc.py`: the question data. `key.py` holds the series D key.
- `build.py` writes and checks the JSONL; `verify.py` re-solves every answer; `texcheck.py` checks the formulas.
- `render.py`, `halves.py`, `zoomq.py`: page-image helpers. The images are in `img/`, `crop/` and `key/`.

### Independent check

#### UP TGT 2013 (held 1 February 2015): check of 23 November 2026

Paper: UPSESSB advertisement 01/2013, TGT Mathematics, booklet TG-07, series D (PDF pages 3–30 = booklet pages 3–30, Q1–Q125, all mathematics). Key: the board's provisional key, series D column (key.pdf pages 1–3).
Checked file: `questions.checked.jsonl` (from the transcriber's `pyq/up-tgt-2013/questions.jsonl`, copied here as `questions.orig.jsonl`).

##### Count
- 125 questions checked, numbers 1–125 in order, none missing or doubled, level TGT.
- 3 are now `"drop": true` (Q2, Q98, Q108). **122 go into the quiz.**

##### How it was checked
- **Transcription:** I rendered every page myself with PyMuPDF and compared each question and all four options with the English half (`crop/e03.png`–`crop/e30.png`, zoom 2.4). I zoomed in further on Q43 (the exponent 11) and Q98, and checked the Hindi half of Q70 and Q98. I checked numbers, signs, exponents, limits, matrix entries and option order. **No transcription errors were found.** The transcriber's typo corrections are right: Q44 "Modules", Q47 "continous", Q48 "+ −2 sin t", Q84 "directix", Q100 "stes".
- **Answers:** I solved all 125 from the page images before opening the transcriber's answers (`myanswers.txt`). My answers agree with the transcriber's `answer` on all 125. For Q2, Q98 and Q108 we both find that no option is correct as printed.
- **Key:** I read the series D column of the key again from the key images (`key/d1a.png` … `key/d3b.png`). The transcriber's `key` values are right for all 125. The key agrees with our answers on 124 questions. The exception is **Q68**.
- **Script:** `verify.py` uses sympy, exact arithmetic, numeric scans, brute force and random tests. It recomputed **113 answers** independently, and each matches the chosen option. Its Q2 and Q108 results show that no printed option is right. For Q98 it confirms the centroid (5/3, 1/√3) and shows that the printed option (C), (5/√3, 1/√3), is not that point. Q19 was also solved with `dsolve` and the output was read by eye. The other 11 are definitions or names, checked by inspection: Q3, Q9, Q12, Q39, Q60, Q72, Q101, Q107, Q109, Q110, Q113.
- **Format:** `validate.py` checks the following, with 0 errors:
  - every line loads as JSON;
  - four options and four notes per question;
  - `answer` is 0–3;
  - the topic ids exist in `topics.txt`;
  - every string has an even number of `$`;
  - there is no `$$` in the question or options;
  - there is no `\displaystyle`, `align`, rupee sign, thin space before a prime or control character;
  - braces, `\left`/`\right` pairs and environments are balanced.
- **Line width:** `widths.py` estimates how wide each inline formula is. I split the long ones. The three that remain at the limit (Q37, Q71, Q83) are chains of "=" that KaTeX can break.

##### Drop decisions (Q2, Q70, Q98, Q108)
- **Q2: dropped.** There is no correct option.
  - The exact relation is 2(b + q) = a² + p² − 2.
  - Option (C) reads b + q = a² + p² − 2, so it lacks the factor 2. It is false in general: for α = 0, β = π/3, b + q = 1/2 but a² + p² − 2 = 1.
  - In a numeric test over 50 random α, β, no option held.
  - To make it right we would have to rewrite one option to fit the answer, and that is not an obvious misprint. The key gives (C). `answer` stays 2 (C), the best option.
- **Q70: kept.** This is a fair reading of an obvious misprint.
  - All four options are printed sin⁻¹(x − π/k) in both languages. That subtracts an angle from x inside sin⁻¹, and none of the printed forms equals f. For example f(1) = π/3, while sin⁻¹(1 − π/6) ≈ 0.50.
  - The same bracket fix turns every option into sin⁻¹x − π/k. The fix does not depend on which option is right.
  - The answer is (C), and the key agrees.
  - The solution now tells students about the misprint, and the flag is reworded.
- **Q98: dropped.** As printed, no option is correct.
  - The paper asks for "the Median of the triangle" (Hindi माध्यिका), but the options are points. The centroid is (5/3, 1/√3), while option (C) is printed (5/√3, 1/√3).
  - The transcriber had changed (C) to (5/3, 1/√3) and the word to "centroid". That rewrites one option to fit the answer, and the misprint only shows after solving, so it is not an obvious misprint.
  - I restored the printed wording ("The Median of the triangle is") and the printed option (C), set `drop`, and explained the fault in the solution and flag. The key gives (C). `answer` = 2 (C), the best option.
- **Q108: dropped.** The data are impossible.
  - If a is real, the roots are 2 ± i, whose product is 5, not 1. If a may be complex, a = (12 + 4i)/5, which is not an option.
  - The key gives (B) = 4, the sum of 2 ± i. `answer` = 1 (B), the best option. The solution and flag say so.

##### Changes made (question: what was wrong → what it is now)
- **Q2:** As above. Set `drop`, rewrote the solution with a counterexample, gave option (C) a note on the missing factor 2, and rewrote the flag.
- **Q5:** The note on (a) said 0 was "∫(1 − x²) with a sign error". That is false, since that integral is −4/3. It now says the integrand is ≥ 0 and not identically 0, so the integral is positive.
- **Q26:** Split one inline formula that was too wide for a phone. The algebra is unchanged.
- **Q45:** Split the determinant and its expansion into separate formulas.
- **Q48:** Split the long velocity formula into three short steps.
- **Q51:** Split the telescoping sum.
- **Q55:** Split the formula.
- **Q68:** The solution did not say that the key disagrees. It now says that the board's key gives (C), but (x² + x + 5)(x² − x + 5) = x⁴ + 9x² + 25, so the key is wrong. I also split the formula.
- **Q70:** The solution now mentions the bracket misprint. The flag now says why the question is kept.
- **Q84:** Split the long formula. The steps are unchanged (SP² = e²·PM², times 6, collect).
- **Q85:** Split the expansion check into its three terms.
- **Q95:** The note on (c) said "multiplies by cos 30° the wrong way". That gives 15, not 20√3. The note now says the answer comes from dividing by sin 30° instead of cos 30°.
- **Q98:** As above. Restored the printed q and option (C), set `drop`, and rewrote the solution, the notes on (b) and (c), and the flag.
- **Q103:** Topic changed from tp-07-03 to **tp-05-05**. That page teaches the definite integral as the limit of a sum, including the rule for r running from r₁ to r₂. I also split the formula.
- **Q108:** As above. Set `drop`, rewrote the solution to show that the data are impossible, rewrote the note on (b) and the flag.
- **Q112:** Split the determinant expansion into steps and added the intermediate surd sum. The value is unchanged: 5√3(√6 − 5).
- **Q121:** Split the formula and showed the grouping step.
- **Q123:** Split the expansion into short formulas.
- No other solution, fact, note or topic needed a change. I checked every solution step and every option note.

##### Differences from the official key
- **Q68:** key (C), our answer (A).
  - (x² + 3x + 5)(x² − 3x + 5) = (x² + 5)² − 9x² = x⁴ + x² + 25. sympy confirms this.
  - The key's (C) expands to x⁴ + 9x² + 25.
  - I am sure that the key is wrong here.
- The key's answers to Q2, Q98 and Q108 (C, C and B) are the setters' intended answers to faulty questions. Those three are dropped.

##### Left doubtful (kept; the solutions handle them)
- **Q32:** The triangle is equilateral, which is also isosceles under the inclusive definition. I kept (C), the precise answer, as the key does.
- **Q79:** ω is read as a non-real cube root of unity, as usual. With ω = 1 the answer would be (A).
- **Q9:** A point circle is called a "degenerate circle".
- **Q20:** Uses π = 22/7.
- **Q31 and Q73:** Use g = 9.8.
- **Q41:** Assumes positive x, y, a, b and c.

##### Files (all in this folder)
- `questions.checked.jsonl`: the result.
- `questions.orig.jsonl`: the copied input.
- `fix.py` makes the changes; `validate.py`, `widths.py` and `verify.py` do the checks; `verify_out.json` holds the script results.
- `myanswers.txt`: my independent answers.
- `crop/` and `key/`: page images.

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

## DSSSB TGT Mathematics 2021 (13 September, female)

- Source: DSSSB TGT Mathematics (Female), computer-based test of 13 September 2021, 12:30 to 2:30 pm: the mathematics section (questions 101 to 190) of the board's response sheet as re-shared after the exam, with the board's answer key.
- In the app: `data/mq/dsssb-tgt-2021-f.json`, 81 questions; full mock 45 seconds a question, negative marking 0.25.

### Transcription and first solution

### DSSSB TGT Mathematics (Female), CBT 13 September 2021, 12:30–2:30 pm

Source: `papers/dsssb-tgt-2021-0913-f/paper.pdf`, 50 pages. This is the board's response sheet (subject "TGT Maths-(Female)", test date 13/09/2021, 12:30 PM – 2:30 PM), re-shared by a coaching site with its watermark on every page. English medium (some Hindi-section items appear in Hindi only). Level: **TGT**.

- The sheet shows no marking scheme and no candidate's chosen option in its text layer; only the options in colour.
- Official key: the correct option is printed in green (span colour 0x40c64b) with a green tick icon; the others are red (0xf61818) with a cross. All 90 maths questions have exactly one green option, and the green colour agrees with the tick icon in every case. Two were also checked on rendered page images (n = 74 and n = 82). Recorded as `key`.

#### Structure of the paper and numbering

The sheet restarts numbering at Q.1 in every section. Section headers and question counts (200 in all):

| Section | Questions on sheet | Paper Q | Taken? |
|---|---|---|---|
| General Ability | Q.1–20 | 1–20 | no: reasoning |
| General Awareness | Q.1–20 | 21–40 | no: general knowledge |
| Arithmetic Ability | Q.1–20 | 41–60 | no: general arithmetic part |
| General English | Q.1–20 | 61–80 | no: language |
| General Hindi | Q.1–20 | 81–100 | no: language |
| **Discipline1** | **Q.1–20** | **101–120** | **yes, n = 1–20** |
| **Discipline2** | **Q.1–20** | **121–140** | **yes, n = 21–40** |
| **Discipline3** | **Q.1–20** | **141–160** | **yes, n = 41–60** |
| **Discipline4** | **Q.1–20** | **161–180** | **yes, n = 61–80** |
| **Discipline5** | **Q.1–10** | **181–190** | **yes, n = 81–90** |
| Teaching Methodology | Q.1–10 | 191–200 | no: pedagogy |

Mapping: the five Discipline sections (pages 30–48) were taken in order, so n = 20(s−1) + (number on the sheet) for Discipline s; n = paper Q − 100. Skipped: Q1–Q100 (general sections) and Q191–Q200 (teaching methodology). No question in the maths range was skipped. **90 questions transcribed.**

#### How it was read

- Every maths question and option except n = 84 (plain text) is an image. All images were extracted at their native resolution from the PDF (they are squeezed on the page, and the wider question strips are cut by the scroll box), upscaled and read. Each image matched its slot: one question image and four option images per question.
- Notation normalised to LaTeX: `2i+j+k` became $2\hat i+\hat j+\hat k$, `R` became $\mathbb R$, `z'` (conjugate) became $\bar z$ in n = 69, `-->` became $\to$, `[0,π;0,π/2]` became $[0,\pi]\times[0,\frac\pi2]$ in n = 58, `<1+1/n>` became $\langle1+1/n\rangle$, `(1/2)` options became $\frac12$.
- Small fixes made without a flag: "not" to "nor" (n = 9, option d), "a algebraic" to "an algebraic" (n = 15), "u" to "you" (n = 17), "cauchy"/"weierstrass" capitalised (n = 11, 37), "less then" to "less than" (n = 45, option b), "multiple connected" to "multiply connected" (n = 52), trailing comma in $\{1,2,3,4,\}$ (n = 56), "define by" to "defined by" (n = 63), duplicated "if" dropped from the options of n = 65, "homomorphism" to "homomorphisms" (n = 78), "atleast" to "at least" (n = 81), "unit of R" to "units of R" (n = 88), "Riesz representative theorem" to "Riesz representation theorem" (n = 84), a trailing colon dropped from n = 50 option (c).
- Several stems are badly worded; wording was kept unless a misprint was clear, and every substantive change is flagged.

#### Answers that differ from the green key (2)

- **n = 74 (Q174)**, maximal subgroups of Klein's group: answer (b) "{e,a},{e,b},{e,c}", key (a) "{e,c}". All three subgroups of order 2 have index 2 and are maximal; they are symmetric, so singling out {e,c} cannot be right. (b) is the complete answer.
- **n = 82 (Q182)**, line integral of $yz\hat i$ counterclockwise round $x^2+y^2=1$, $z=1$: answer (d) "−πi", key (c) "πi". The integral is $\oint y\,dx=-\pi$ (also by Stokes). The options carry a stray $i$ (probably from $\hat i$); (d) is the one matching $-\pi$. The key's $+\pi$ is the clockwise value.

#### Flags (26)

- n=10 (Q110): no option gives the full definition of finite oscillation (bounded, neither convergent nor divergent). (a) and (b) are only necessary conditions; (c) defines infinite oscillation. Answer = key (a).
- n=22 (Q122): stem does not say what is asked; "become continuous at (2,3)" added. Key 18.
- n=24 (Q124): incomplete stem; read as "for all v in S with 0<‖v−u‖<p". Answer = key.
- n=25 (Q125): vague, non-technical stem ("convert data into ___ : model"). Answer = key.
- n=32 (Q132): **garbled** ("symmetric group of order n is a closed subspace of group of order n"); probably symmetric n-linear maps, which need n ≥ 2. Answer = key; consider dropping.
- n=38 (Q138): option (b) printed only as "|y−b|<delta both follow."; the missing first part "|x−a|<δ and" was restored.
- n=39 (Q139): printed "x²y''+xy'+4xy" with no "= 0"; corrected to $x^2y''+xy'+4y=0$ (Cauchy–Euler), which gives the key.
- n=43 (Q143): garbled stem; the key (Lebesgue integral) is the only meaningful option.
- n=44 (Q144): printed "(x−7)^((n+1)/n^n)"; read as $(x-7)^{n+1}/n^n$. R = ∞ (key).
- n=45 (Q145): the phrase "in terms of affecting the power series" is meaningless; kept as printed.
- n=46 (Q146): loosely worded; (b)–(d) read as "can occur". (a) is the wrong statement (key).
- n=47 (Q147): option (b) carries a stray editor's remark in the paper ("Is this option a direct eliminator? Better change it"); removed.
- n=50 (Q150): the textbook use of Green's theorem (area of a plane region) is not offered; (b) "solve 2-D flow equation" is the only sensible option (key).
- n=51 (Q151): "necessary and sufficient" is loose; (b) is the hypothesis of Taylor's theorem (key).
- n=54 (Q154): garbled stem ("integrable of over", repeated "s.t."); read as Riemann's criterion. Key (a).
- n=55 (Q155): printed "The domain of cos(x)", which is ℝ (no option). Read as $\cos^{-1}x$ (equivalently the range of cos x); both give the key [−1,1].
- n=63 (Q163): option (c) should be ≤ (strict < fails at x = 0) and the space a normed space; (c) is intended (key).
- n=66 (Q166): garbled stem (a set, not a metric space; no centre); read as {x : d(x,x₀) = r}, a sphere (key).
- n=68 (Q168): garbled stem ("subgroups(p) of non cyclic groups G"); read as a non-cyclic group of order p², which has p+3 subgroups (key).
- n=72 (Q172): garbled stem; read as "a continuous function on [a,b] is" bounded (key).
- n=74 (Q174): differs from the key (see above).
- n=77 (Q177): printed "i sinh u sin v"; corrected to $i\cosh u\sin v$ so that $z=\sinh w$; gives the key ±i.
- n=78 (Q178): "Symmetric group of order 4" read as $S_4$ (order 24); either way no onto homomorphism exists (key).
- n=79 (Q179): options (a) and (c) carry stray editor's remarks in the paper ("do you mean None is abelian - if so, better change it like that", "What option is this? Is this not included in the previous option itself?"); removed.
- n=82 (Q182): differs from the key (see above).
- n=88 (Q188): the context (R a commutative ring with unity, e.g. an integral domain) is implied.

Note: the three stray editor's remarks (n = 47, 79) are text inside the paper's option images, apparently a reviewer's comments left in by the board. They were treated as misprints and removed from the options; they were not acted on.

#### Checks

- `questions.jsonl`: 90 lines, n = 1…90 in order, none twice; every line loads with Python's `json`; 4 options and 4 notes each; every topic id is in `topics.txt`; `level` = "TGT"; `key` filled for all 90.
- LaTeX lint (`lint.py`): `$` balanced, braces balanced, no `$$` in questions or options, only KaTeX-supported commands, no rupee sign, no `\,'`, no `\displaystyle`, inline formulas kept short.
- **46 answers recomputed by script** (`verify.py`, sympy and brute force), all agreeing with `answer`: n = 2, 5, 6, 7, 8, 9, 12, 16, 17, 18, 20, 21, 22, 23, 26, 27, 28, 29, 33, 36, 39, 40, 41, 42, 44, 47, 48, 49, 53, 57, 58, 59, 68, 69, 71, 74, 76, 77, 80, 81, 82, 83, 85, 86, 87, 89. The other 44 are definitions or theory (no computation possible) and were checked by hand.
- Key distribution: (a) 24, (b) 17, (c) 30, (d) 19.

#### Files

- `questions.jsonl` (output), `log.md` (this file).
- Helpers: `dump.py`/`dump.txt` (text with colours), `parse.py` (questions, keys, image extraction), `img/` (native images), `mont/` (reading sheets), `raw.jsonl` (parsed keys and image sizes), `qa.py`/`qb.py` (transcriptions and solutions), `build.py`, `lint.py`, `verify.py`.

### Independent check

#### DSSSB TGT 2021 (13 September): check of 23 November 2026

Paper: DSSSB TGT Mathematics (Female), CBT of 13 September 2021, level TGT; `papers/dsssb-tgt-2021-0913-f/paper.pdf` (board response sheet, English medium). Maths = sections Discipline1–5 on pages 30–48 (20+20+20+20+10 questions), n = 20(section − 1) + sheet number = paper Q − 100.
Input: `pyq/dsssb-tgt-2021-f/questions.jsonl` (copied here unchanged as `questions.orig.jsonl`).
Output: `questions.checked.jsonl`: **90 lines, 9 with `"drop": true`, 81 kept.**

##### How it was checked
- Reading: my own scripts (`scripts/compose.py`) locate every question on pages 30–48 and pull the stem and option images out of the PDF at native resolution (the page squeezes the wide strips), assign each option image to its label by position, and stack them per question (`img/n*.png`, sheets `img/s*.png`); `scripts/zoom.py` enlarges single images. Every stem and all four options of all 90 questions were read from these images. n 84 is plain text (Riesz question). No question image is cut off; the only truncated item is option (b) of n 38, which is cut in the board's own image ("|y-b|<delta both follow.").
- Key: read from the option-label colour (green 4245067 = 0x40C64B; others red) and the tick icon. My keys equal the transcriber's `key` for **all 90**.
- Answers: I solved all 90 myself from the images before opening the transcriber's answers and log, then compared.
- Transcription: all 90 stems and options compared with the images. The kept text is faithful (options in the paper's order); the transcriber's small unflagged spelling fixes (listed in their log) are fine. Four stems the transcriber had rewritten (n 39, 55, 68, 77) are restored to the printed text, since those questions are now dropped.
- Script checks (`scripts/verify.py`, sympy + brute force): **38 questions**: n 6, 7, 9, 12, 16, 17, 18, 20, 21, 22, 26, 27, 28, 33, 36, 39, 40, 41, 44, 49, 53, 57, 58, 68, 69, 71, 74, 76 (residue and numerical contour integral), 77 (Cauchy–Riemann test of the printed relation), 78, 80, 81, 82, 83, 85, 86, 87, 89. All agree with my answers (for n 39, 68, 77, 82 they confirm the reasons for dropping). The other 52 are definitions and theory, checked by reasoning.
- Format (`scripts/lint.py`, `scripts/cmds.py`): JSON loads, n = 1…90 once each, 4 options and 4 notes, answer and key 0–3, level TGT, topics all in `topics.txt`, `$` balanced, braces balanced inside math, no `$$` in q/options, no align/displaystyle/rupee/`\,'`, every LaTeX command KaTeX-supported. Five long inline formulas split for phone width (n 50 fact, 51 fact, 82, 85, 87 solutions).

##### Dropped (9): `"drop": true`, reason in `flag` and in the solution
- **n 10** (Q110), finite oscillation: no option is a correct definition. The key (a) "not divergent" also fits every convergent sequence; (b) is equally only necessary; (c) as printed ("not bounded; not convergent; not divergent") is infinite oscillation. The transcriber kept it "set to the key".
- **n 25** (Q125), "use mathematical model to convert data into ___": vague, non-mathematical, and the key "model" just repeats the stem. Transcriber kept it set to the key.
- **n 32** (Q132): garbled beyond repair ("symmetric group of order n is a closed subspace of group of order n"). Transcriber flagged it and suggested dropping.
- **n 39** (Q139): printed $x^2y''+xy'+4xy$. As printed the solutions are $J_0(4\sqrt x)$, $Y_0(4\sqrt x)$ (checked); $Y_0$ is unbounded at $0^+$, so the key "bounded and non-periodic" is false and no option holds. The key fits only $x^2y''+xy'+4y=0$; the transcriber changed $4xy$ to $4y$, which changes the data rather than fixing an obvious misprint. Printed stem restored.
- **n 43** (Q143): garbled stem ("improper integral becomes equal to Riemann integrable"), options not answers to it. Transcriber kept it set to the key.
- **n 55** (Q155): printed "The domain of cos(x)", whose answer $\mathbb R$ is not an option; the key $[-1,1]$ is the range (the key confuses domain and range). The transcriber had rewritten the stem as "domain of $\cos^{-1}x$". Printed stem restored; topic moved to tp-09-01.
- **n 68** (Q168): garbled ("subgroups(p) of non cyclic groups G"); no order given. For a non-cyclic group of order $p^2$: $p+1$ subgroups of order $p$ (option d) but $p+3$ in all (key a), so two readings give two options. The transcriber had inserted "of order $p^2$". Printed stem restored.
- **n 77** (Q177): printed $z=\sinh u\cos v+i\sinh u\sin v$, which is not an analytic relation (Cauchy–Riemann fails, checked), so no option follows. The key $\pm i$ belongs to $z=\sinh u\cos v+i\cosh u\sin v=\sinh w$; the transcriber's change of $\sinh$ to $\cosh$ changes the data. Printed stem restored.
- **n 82** (Q182), $\oint yz\,\hat i\cdot d\vec r$ on $x^2+y^2=1$, $z=1$, counterclockwise $=-\pi$ (checked): not an option (options $0$, $2$, $\pi i$, $-\pi i$). The key (c) $\pi i$ is wrong in sign and carries a stray $i$; the transcriber had answered (d) $-\pi i$. `answer` left at (d), the closest, with the problem stated.

##### Answer that differs from the official key (kept)
- **n 74** (Q174), maximal subgroups of Klein's group: answer (b) $\{e,a\},\{e,b\},\{e,c\}$; key (a) $\{e,c\}$. All three order-2 subgroups have index 2 and are maximal (brute force over $\mathbb Z_2\times\mathbb Z_2$ confirms exactly 3 maximal subgroups), and an automorphism permutes $a,b,c$, so naming $\{e,c\}$ alone cannot be right. I agree with the transcriber. The solution now says what the key says and why it is wrong.
- (n 82, also against the key, is dropped above.)

##### Other changes
- Solutions of kept questions whose printed text is faulty now say so, since students see the solution: n 22 (missing "become continuous at (2,3)"), 24 (prints "for u in S"; "isolated" used as strict), 38 (option (b) cut off in the paper), 44 (bracket slip in the exponent), 45 (meaningless phrase "in terms of affecting the power series"), 46 ((b)–(d) read as "can occur"), 50 (area not offered; (b) by elimination), 51 ("necessary and sufficient" loose), 54 (garbled stem), 63 ($<$ should be $\le$; normed space), 66 (garbled stem), 72 (garbled stem), 74 (key wrong).
- n 13 solution: removed the claim "either way the answer is 1" (books that use non-zero leading entries do not require 1); reworded.
- n 89 note on option (b): the old note ("1/z is not analytic inside the full circle") did not explain why the arc integral is not 0; now says the path is an open arc and the integral is $i$ times the change of $\arg z$.
- n 10, 39, 55, 68, 77, 82: notes/fact adjusted to match the drop reason.
- Kept as the transcriber had them (checked and agreed): every other answer, the flags on n 22, 24, 38, 44, 45, 46, 47, 50, 51, 54, 63, 66, 72, 78, 79, 88, the removal of the reviewers' remarks printed inside options of n 47 and n 79, and all topics except n 55.

##### Kept but weak (judgement calls; answerable as printed, read fairly)
- n 22 and n 24 have words missing from the stem; the missing words are the only reading under which $k$ (n 22) or the inequality (n 24) is asked about, and the answers do not depend on the key. If the editors want only clean stems, these two and n 54, 66, 72 (garbled but unambiguous) are the next candidates to drop.
- n 50 ("Green's theorem is used to? solve 2-D flow equation") and n 51 ("necessary and sufficient condition for Taylor's theorem: f has higher derivatives") are loosely worded; the answer follows by elimination.
- n 13: "leading entry must be 1" follows the leading-1 convention of echelon form; under the non-zero convention the stem would be loose.
- n 62: option (c) "u and v intersect each other" is vague rather than false; (a) "orthogonal family" is the clear answer.

##### Summary
90 questions checked; transcription faithful (no digit or sign errors found); keys agree with the green marks for all 90; 9 dropped (n 10, 25, 32, 39, 43, 55, 68, 77, 82); 1 kept answer differs from the key (n 74); no other answer changed; 38 answers verified by script.

## DSSSB TGT Mathematics 2018 (18 November, female)

- Source: DSSSB TGT Mathematics (Female), computer-based test of 18 November 2018, shift 1: the mathematics section (questions 101 to 190) of the board's own copy of the question paper, with its answer key.
- In the app: `data/mq/dsssb-tgt-2018.json`, 80 questions; full mock 45 seconds a question, negative marking 0.25.

### Transcription and first solution

### DSSSB TGT Mathematics (Female), CBT 18 November 2018, shift 1

Source: `papers/dsssb-tgt-2018-1118-board/paper.pdf`, 157 pages. This is the board's own "Question Paper Preview" (question paper name `TGT MATHS FEMALE 18th Nov 2018 Shift1`, subject "TGT MATHS FEMALE"). The other copy of this exam (`dsssb-tgt-2018-1118-f`) was not opened.

- Duration: **120 minutes**. Total marks: **200** (200 questions of 1 mark each).
- Marking: correct **+1**, wrong **−0.25** ("Correct Marks : 1 Wrong Marks : 0.25" on every question).
- Level: TGT.

#### How the key was read

In this copy every question stem and every option is an **image**. The text layer holds only the headers ("Question Number : …", "Options :"), so the option text has no colour to read with PyMuPDF. Each option image carries its number and a green tick or a red cross. The key was therefore read from the **pixel colour** of the left strip of each option image (`keys.py`: green tick versus red cross pixels, rendered at 3×). The result:

- 88 of the 90 maths questions have exactly one green tick, recorded as `key`.
- **Q153 (n = 53) and Q165 (n = 65)** have no tick and no cross. The board printed a red note above each: "discrepancy is found in question/answer. So, this question is ignored for all candidates". These are **cancelled**, and `key` is null.
- The ticks were also confirmed on the page images (`img/q*.png`) while transcribing. The only place where my answer and the tick differ is n = 59 (see below).

#### Structure of the paper

| Paper Q | Section (from the content) | Taken? |
|---|---|---|
| 1–20 | Reasoning (analogies, figure series) | no: general part |
| 21–40 | General awareness | no |
| 41–60 | Arithmetic / numerical ability | no: general part (Q42 and Q45 are also cancelled there) |
| 61–80 | English language | no |
| 81–100 | Hindi language | no |
| **101–190** | **Subject: TGT Mathematics** (sections of 20, 20, 20, 20, 10) | **yes** |
| 191–200 | Teaching methodology (pedagogy) | no: pedagogy |

**Maths taken: paper Q101–Q190.** Running number `n = paper Q − 100`, so n = 1 … 90 (n = 1 is Q101, n = 90 is Q190). No maths question was skipped. Skipped: Q1–Q100 (general sections) and Q191–Q200 (pedagogy).

#### How it was read

- Each question is printed twice: English, then Hindi. The English copy was used. `parse.py` groups the image blocks per question (first occurrence = English), and `crops.py` stacks each stem and its four options into `img/q101-104.png` … `img/q189-190.png` for reading.
- The Hindi copy was checked for Q110, Q153, Q155 and Q189 (`img/h*.png`). It adds nothing: the same defects are in both languages.
- Notation was normalised to LaTeX. Q112: the options print "=" where "≡ (mod p)" is meant, and `\equiv` was used. Q189: "log e^(x)" was read as $\log_e x$. The frequency tables of Q179–Q181 are written as plain text lines in `q`, so they wrap on a phone.
- Trivial spelling fixes were made silently: "Menelau's" became "Menelaus'" and "is a not dual" became "is not a dual" (Q156); "standard deviations" became "standard deviation" (Q184); "conditions" became "condition" (Q153). Substantive changes are flagged.

#### Answer that differs from the green key (1)

- **n = 59 (Q159)**: the circumcentre of $A(1,2)$, $B(2,3)$, $C(3,1)$. My answer is (d) $(\frac{13}6,\frac{11}6)$; the key is (c) $(\frac{11}6,2)$. The point $(\frac{13}6,\frac{11}6)$ is at squared distance $\frac{50}{36}$ from all three vertices. The key point is not equidistant: its squared distances are $\frac{25}{36}$ to A and $\frac{37}{36}$ to B.

#### Cancelled by the board (2), with key null

- **n = 53 (Q153)**: as printed (a), (c) and (d) are all false, because (c) and (d) describe SSS and ASA but call them SAS. My answer is (a), the plainly false statement.
- **n = 65 (Q165)**: the triangle is not named (BDC, as in JEE 1989), and options (b) $\frac4{3\sqrt3}$ and (c) $\frac{4\sqrt3}9$ are the same number. My answer is (c).

#### Flags (13)

- n=10 (Q110): the stem does not define e and k. The factorisation $n=2^e p_1^{e_1}\cdots p_k^{e_k}$ was added in brackets.
- n=14 (Q114): misprint fixed, "linearly independent" became "dependent". As printed, three options (±2, 3, −1) would be correct. The key ±4 is the value that makes the vectors dependent.
- n=17 (Q117): "and R³" read as "in R³".
- n=53 (Q153): cancelled (see above).
- n=54 (Q154): (a) "all 4 angles congruent" and (d) "both a rhombus and a rectangle" are also sufficient, as special cases. (c), the key, is the general test.
- n=55 (Q155): garbled. (b), "is the circumcenter of the triangle", is true only for the medial triangle. Read literally, (a) and (c) are true statements. Answer set to the key (b). **Consider dropping this question.**
- n=59 (Q159): differs from the key (see above).
- n=64 (Q164): no option is right as printed. The area is $\frac{3\sqrt3}{4}(g^2+f^2-c)$. Option (b), the key, has "−1" for "−c" and a spurious square root.
- n=65 (Q165): cancelled (see above).
- n=69 (Q169): option (d) is a stray fragment of Q170 ("if the radius of the cylinder is 60 cm …"). It was kept as printed. The answer (c) 220 mm² is unaffected.
- n=70 (Q170): the units are misprinted. The volume is $0.36\pi\approx1.131$ m³ (1131 litres), not 1131 m³. Answer (a), the key.
- n=89 (Q189): as printed ($\log_e x$ normal) the answer is about 0.240, which is not an option. The areas supplied fit x itself being N(1, 4), which gives 0.29, the key. Answer (d).
- n=90 (Q190): two correct options. (b), "the standard deviation of the sample mean", is the definition of the standard error. Answer kept as the key (a).

#### Checks

- `questions.jsonl`: **90 questions**, n = 1 … 90 in order, none repeated. Every line loads with `json.loads`. Each row has 4 options and 4 notes, a valid topic id from `topics.txt` and level "TGT".
- `build.py` checks these things:
  - `$` pairing and brace balance;
  - no `$$` in `q`, and every `$$` display on its own line;
  - no `\displaystyle`, no rupee sign and no `\,'`;
  - a flag wherever the answer differs from the key or the key is null.
- `widths.py` was used to split long inline formulas. The scratchpad's `mockck/pgt-1/texck.py` reports no real problem. Its two hits are the `$$` displays in n=14 and n=46, which are fine.
- **Verified by script: 83 of 90** (`verify.py`, using sympy, exact fractions, brute force and numerics). The script recomputes each answer independently and picks the option. For all 83 it agrees with `answer`. Three of these checks (n=55, 64, 89) confirm the intended reading that is described in the flag.
- Not scripted (7): n=52, 53, 54, 56, 77, 78, 90. These are definitions or statements (Euclid's postulate, similarity criteria, parallelogram tests, Ceva and Menelaus, histogram, cumulative frequency, standard error).

#### Files

- `questions.jsonl`: the output.
- `qa.py` (n 1–45), `qb.py` (n 46–90): the content. `build.py` merges these with `keys.json`.
- `parse.py`, `keys.py`, `crops.py`, `hindi.py`, `dump.py`, `render.py`: these read the PDF. `verify.py` and `widths.py`: checks.
- `blocks.json`, `blocks_all.json`, `keys.json`, `dump.txt`, `img/`: intermediate files.

### Independent check

#### DSSSB TGT 2018 (18 November): check of 23 November 2026

Paper: DSSSB TGT Mathematics (Female), CBT 18 November 2018, shift 1, the board's copy `papers/dsssb-tgt-2018-1118-board/paper.pdf` (the other copy, `dsssb-tgt-2018-1118-f`, was not opened). Maths = paper Q101–Q190 = n 1–90.
Input: `pyq/dsssb-tgt-2018/questions.jsonl` (copied here as `questions.orig.jsonl`, not modified). Output: `questions.checked.jsonl`, **90 questions**, of which **9 have `"drop": true`** (n 14, 46, 53, 54, 55, 64, 65, 83, 90), so **81 go to the quiz**.

##### How it was checked
- My own scripts read the PDF (`seq.py` groups the images of each question in order, English copy first; `comp.py` stacks stem + four options into `img/q*.png`). Every stem and option of all 90 questions was read from these images; Hindi copies were rendered for n 10, 14 and 89 (`img/q110_114.png`, `img/q189.png`).
- Key: read from the green tick in the left strip of each option image (`ticks.py` → `keys.json`), English and Hindi copies separately. 88 questions have exactly one tick, the same in both languages; Q153 (n 53) and Q165 (n 65) have none and carry the board's note "discrepancy is found in question/answer. So, this question is ignored for all candidates". The transcriber's `key` agrees with mine for all 90.
- Answers: I solved all 90 myself (notes in `mine.md`) before reading the transcriber's answers and log. On every question I keep, my answer equals the transcriber's.
- Transcription: stem and all four options compared with the images for all 90. All faithful and in the paper's order, apart from the points listed under "Changes".
- **Checked by script: 75 of 90** (sympy, exact fractions, brute force, numerics): `v1.py` (n 4, 8, 13, 14, 15, 18, 20, 39, 42, 43, 44), `v2.py` (n 49, 51, 57, 59, 60, 62), `v3.py` (n 1, 3, 5–12, 19, 21–38, 40, 41, 45–48, 50, 58, 61, 63, 65–70, 72, 73, 75, 76, 79–86, 88, 89). All agree with my answers. Notable script results: n 10, the count of solutions of $x^2\equiv1$ is $2^{k+2}$ for every $n=8m<2000$; n 44, 31 numbers below 200 have three or more distinct prime factors (counting repeated factors gives 109, not an option); n 65, max area of BDC = 0.7698 = (b) = (c); n 67, exact π gives 4376.8 revolutions, π = 22/7 gives 4375; n 70, 0.36π = 1.1310, 0.36 × 3.14 = 1.1304; n 83, 1/6 (both faulty first) versus 1/3 (faulty pair known after two tests); n 89, P = 0.2902 if x ~ N(1,4), 0.2404 if ln x ~ N(1,4). Not scripted (15, statements and definitions): n 2, 16, 17, 52, 53, 54, 55, 56, 64, 71, 74, 77, 78, 87, 90.
- Format (`check.py`): JSON loads, n 1…90 once each, 4 options and 4 notes, answer 0–3, topics all in `topics.txt`, level TGT, `$` even everywhere, braces and `\begin`/`\end` balanced in math, no `$$` in q/options, displays on their own lines, no align/displaystyle/rupee sign/`\,'`, a flag on every row whose answer differs from the key or whose key is null, every dropped row's flag starts "Dropped".

##### Dropped (9): `"drop": true`, reason in `flag` and at the end of the solution
- **n 14** (Q114): the paper asks when the vectors are linearly **independent** (Hindi too: स्वतंत्र). The determinant is $-2(\alpha^2-16)$, so ±2, 3 and −1 all give independent vectors: three correct options. The key ±4 answers "dependent". The transcriber had changed the word to "dependent", which reverses the printed question; I restored the printed wording.
- **n 46** (Q146): $f(x)=x(\sqrt x-\sqrt{x+1})$. On the domain $x\ge0$, (c) the key ($f'(0^+)=-1$) and (d) "differentiable at $x\ne0$" (true at every $x>0$) are both true; demanding a two-sided derivative makes (a) true instead. Two defensible answers. The transcriber kept it.
- **n 53** (Q153): cancelled by the board; as printed (a), (c), (d) are all false (no single answer).
- **n 54** (Q154): (a) all angles equal and (d) rhombus and rectangle are also valid sufficient conditions, besides the key (c). The transcriber kept it.
- **n 55** (Q155): garbled; the key (b) "is the circumcenter of the triangle" is false for the triangle itself, while (a) and (c) read literally are true. The transcriber kept it (suggested dropping).
- **n 64** (Q164): no correct option; the area is $\frac{3\sqrt3}4(g^2+f^2-c)$, every option has a square root and ±1 for −c. The transcriber kept the key.
- **n 65** (Q165): cancelled by the board; triangle not named, and the answer for BDC appears twice ((b) $\frac4{3\sqrt3}$ = (c) $\frac{4\sqrt3}9$).
- **n 83** (Q183): two defensible answers. 1/6 (key, the JEE 1998 answer) if both faulty machines must come up in the first two tests; 1/3, option (c), if finding two good machines first also counts (the faulty pair is then known). The transcriber kept it.
- **n 90** (Q190): two correct options: (b) "the standard deviation of the sample mean" is the definition; (a), the key, is right when read as $\sqrt{\sigma^2/n}$. Answer field set to (b), the unambiguous one (key (a) kept in `key`). The transcriber kept the key.

##### Disagreement with the official key (kept question)
- **n 59** (Q159): circumcentre of A(1,2), B(2,3), C(3,1) is $(\frac{13}6,\frac{11}6)$, option (d) (squared distance $\frac{50}{36}$ to all three; sympy). The key (c) $(\frac{11}6,2)$ is at squared distances $\frac{25}{36}$ from A and $\frac{37}{36}$ from B. Certain. The solution now states the key and why it is wrong.
(Among dropped rows the key is also wrong or unusable in n 14, 55, 64 and 90; see above.)

##### Changes made (question number: what was wrong → what it is now)
- n 10: solution now begins by saying that the paper (English and Hindi) does not define e and k and that the bracketed factorisation is supplied; flag reworded. Kept.
- n 14: q restored to the printed "linearly independent"; notes, solution, flag rewritten; dropped.
- n 17: solution now begins with what the paper printed ("and R³", read "in R³").
- n 33: note (a) said "drops a term"; it is a sign slip on the constant (12 − 4k − 5 = 0).
- n 44: solution adds why "three or more primes" means distinct primes (the other reading gives 109, not an option).
- n 46: notes, solution, flag; dropped.
- n 47: solution notes that f and g are 0/0 at x = 0 (taken as the limit 1).
- n 53: solution and flag; dropped.
- n 54: notes (a), (d), solution, flag; dropped.
- n 55: note (b), solution (no longer asserts that (b) is right), flag; dropped.
- n 56: the transcriber's silent fixes ("Menelau's" → "Menelaus'", "is a not dual" → "is not a dual") are now stated in the solution and flag.
- n 59: solution now states the board's key and why it is wrong.
- n 60: note (d) said "digits of the numerator swapped" (686 vs 868 is not a swap); now "the numerator is 686, not 868".
- n 64: note (b), solution, flag; dropped.
- n 65: solution and flag; dropped.
- n 67: solution notes that π = 22/7 is intended (exact π gives 4376.8).
- n 70: options printed "1131, 1031, 1132, 1130 m³" (decimal points lost; the whole cylinder holds about 2 m³). The transcriber kept the impossible values and answered "as the key"; options are now 1.131, 1.031, 1.132, 1.130 m³, with the solution starting from what was printed; notes and flag rewritten. Answer (a) unchanged.
- n 80: note (a) used N/2 = 30 with a total of 55; now "a + b = 10, but the total 60 needs a + b = 15".
- n 83: notes (a), (c), solution, flag; dropped.
- n 89: q said "$\log_e x$"; the paper prints "log e^(x)" with x raised, i.e. $\log e^{x}=x$. Read literally, x ~ N(1,4) and the areas the paper supplies (z = 0.25 and 0.5) give 0.29, the key; q, note (d), solution and flag rewritten (the transcriber's version answered "as the key" while saying the printed question has no correct option). Answer (d) unchanged.
- n 90: answer 0 → 1, notes, solution, flag; dropped.
- n 69: unchanged; option (d) is a stray fragment of another question ("if the radius of the cylinder is 60 cm …"), kept as printed and flagged; the answer 220 mm² is unaffected.
No other answer changed. Topics: all kept as the transcriber chose (checked; the regression, curve-fitting and standard-error items n 86, 87, 90 have no dedicated page and sit on tp-16-07; Poisson and normal, n 84 and 89, are in the add-on at the end of tp-16-05).

##### Left doubtful
- n 10 (kept): the definition of e and k is supplied, not printed. With the standard factorisation $n=2^e p_1^{e_1}\cdots p_k^{e_k}$ (odd $p_i$) the answer is the key; if k were meant to count the prime 2 as well, the same count would read $2^{k+1}$ (option c). I judged the standard reading clear enough, because the stem singles out the exponent e of 2; drop it if a stricter line is wanted.
- n 89 (kept): rests on reading the printed "log e^x" literally as x; the supplied table values and the key fit only this reading.
- n 70 (kept): rests on the decimal-point reading; (d) 1.130 is what π ≈ 3.14 gives, but the exact value (and π = 22/7) is 1.131.
- n 77 (kept): "size of the class" is the length of the base; the base itself is the class interval (b), the standard answer.
- n 12: option (a) "(p − 1) ≡ −1 (mod p)" is a true congruence but not Wilson's theorem; the question asks what the theorem states, so (c).

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

## UP PGT Mathematics 2021 (18 August)

- Source: UPSESSB PGT written examination (advertisement 02/2021), Mathematics, held on 18 August 2021: question booklet series A, code PG-06, as shared after the exam, with the board's provisional key of 19 August 2021.
- In the app: `data/mq/up-pgt-2021.json`, 125 questions; full mock 60 seconds a question, negative marking none.

### Transcription and first solution

### UP PGT (UPSESSB, advt. 02/2021) Mathematics, written examination of 18 August 2021

#### Source
- Paper: `papers/up-pgt-2021/paper.pdf`, 33 PDF pages, scans with no text layer, published by a coaching site (its logo watermark is on every page). Booklet series **A**, code **PG-06**, Hindi and English side by side. The English half was used throughout. The Hindi half was used to confirm Q21 option (B) and Q28 option (D).
- Key: `papers/up-pgt-2021/key.pdf`, 4 pages. Page 1 is headed "PGT 02/2021 MATHEMATICS (PG-06) (SERIES-A)" and was signed and dated 19-08-2021. Pages 2–4 are the other series' tables. Page 1 was read only after every question had been solved, and it is recorded as `key`.
- A candidate's ticks and rough work appear on most pages. They were ignored, and in many places they differ from the worked answers (for example Q16, Q17, Q18, Q19, Q38, Q39, Q48, Q57, Q61, Q64, Q66, Q67, Q70, Q81, Q94, Q95, Q122, Q124).

#### Cover page: time and negative marking
- The cover (PDF p4) shows Booklet Series A, Code PG-06, the subject (गणित / MATHEMATICS) and only instructions 1–2: write the roll number only on the cover and the OMR sheet, and check the booklet within 10 minutes.
- The lines "समय :" (time) and "पूर्णांक :" (maximum marks) are printed, but their values are hidden. White patches cover them, together with the roll-number and OMR fields, in this copy.
- **Nothing on the visible cover says anything about negative marking.** The back cover, where the remaining instructions would be, is not in the PDF. So neither the time allowed nor the negative-marking rule can be read from this copy.

#### Page map
| PDF page | Content |
|---|---|
| p1 | coaching-site title page ("UP PGT Previous Year Paper, Maths 18 Aug 2021") |
| p2–p3 | advertisements (skipped) |
| p4 | booklet cover |
| p5 | Q1–Q4 |
| p6 | Q5–Q9 |
| p7 | Q10–Q14 |
| p8 | Q15–Q19 |
| p9 | Q20–Q23 |
| p10 | Q24–Q28 |
| p11 | Q29–Q33 |
| p12 | Q34–Q37 |
| p13 | Q38–Q41 |
| p14 | Q42–Q47 |
| p15 | Q48–Q53 |
| p16 | Q54–Q58 |
| p17 | Q59–Q61 |
| p18 | Q62–Q65 |
| p19 | Q66–Q69 |
| p20 | Q70–Q73 |
| p21 | Q74–Q78 |
| p22 | Q79–Q83 |
| p23 | Q84–Q88 |
| p24 | Q89–Q93 |
| p25 | Q94–Q98 |
| p26 | Q99–Q102 |
| p27 | Q103–Q107 |
| p28 | Q108–Q111 |
| p29 | Q112–Q116 |
| p30 | Q117–Q120 |
| p31–p32 | advertisements (skipped) |
| p33 | Q121–Q125 |

#### Range and skipped questions
- Q1–Q125 are all mathematics and all are transcribed: **125 questions**, level "PGT".
- Skipped questions: none. Only the non-question pages p1–p3 and p31–p32 were skipped.

#### Answers against the board's key
- `key` is filled for all 125 questions. My worked answer matches the key in **122** of them.
- It differs in **3**, each flagged:
  - **Q68** (race, P(none of three wins)): key C (2/5), mine B (13/60). Only one racer can win a race, so the events are mutually exclusive and P(none) = 1 − (1/3 + 1/4 + 1/5) = 13/60. The key's 2/5 multiplies the losing probabilities as if the events were independent.
  - **Q75** (subgroup of (Z, +) generated by 2 and 7): key B (14Z), mine C (Z). The subgroup contains 4·2 − 7 = 1, so it is all of Z. 14Z is the intersection 2Z ∩ 7Z, not the subgroup generated.
  - **Q116** (Lagrange PDE (mz − ny)p + (nx − lz)q = ly − mx): key C, mine D, f(x² + y² + z², lx + my + nz) = 0. The functions in (C) are not constant along the characteristics: x(mz − ny) + y(nx − lz) = z(mx − ly) ≠ 0. The script confirms that only (D) works.

#### Flags in questions.jsonl
- Q68, Q75, Q116: answer differs from the key (above).
- Q105: as printed, x * y = x + 2y − 3 is not associative and has no two-sided identity, so (G, *) is not really a group. The answer (B, (9 − 2x)/4, which matches the key) uses the right identity 3/2 and the right inverse.

#### Notes (not flagged; the key agrees)
- "None of the above" is the right option in Q10 (the work done is −2/3), Q39 (the value is −9/7) and Q81 (the determinant is 0).
- Q21 option (B) is printed "1 < r < 1" in both languages. It was kept as printed; it is a wrong option either way.
- Q28 option (D) is printed "c tan hx". It was kept as printed.
- Q40: strictly, for r = ω, ω² the sum vanishes when 3 | n. The intended answer, 3 values, is noted in the solution.
- Q48: the dot product could be ±10√6. Only +10√6 is listed.
- Q77: the lines make angles of 60° and 120°. Only 120° is listed.
- Q83: N is taken as {1, 2, 3, …}.
- Topic choices where no page fits exactly:
  - The partial differential equations Q36, Q50 and Q116 are under tp-06-02 (partial differentiation).
  - The director sphere (Q67) is under tp-11-06 (director circle).
  - The tangent plane to a conicoid (Q70) is under tp-13-03 (tangent planes of a sphere).
  - The annihilator (Q102) is under tp-03-02.

#### Checks
- `build.py` writes `questions.jsonl` and reloads it with `json.loads` line by line. Result: 125 rows, Q1–Q125 in order with none missing or repeated, every topic id found in `topics.txt`, `$` balanced, no stray control characters.
- `lint.py` checks the LaTeX: braces are balanced inside every math segment, there is no rupee sign, no thin space before a prime and no degree sign inside math, and no command appears outside math.
- `verify.py` recomputes every answer independently and compares it with `answer`. It agrees for **125 of 125**:
  - **119** rest on an independent computation: numerical integration or differentiation, sympy (dsolve, determinants, series, limits, symbolic derivatives), brute force (permutations, relations, sets, groups mod n) or direct substitution.
  - **6** (Q15, Q27, Q44, Q68, Q91, Q124) only apply a stated rule or a small model, such as the stability criterion, the mutually exclusive race model or S₃ being non-abelian.
- Files: `qa.py`, `qb.py`, `qc.py` (data), `keys.py` (the board's key), `build.py`, `verify.py`, `lint.py`, `render.py` and `crops.py` (page images in `img/`).

### Independent check

#### UP PGT 2021: check of 23 November 2026

Paper: UP PGT (UPSESSB, advertisement 02/2021) Mathematics, 18 August 2021, booklet series A, code PG-06. Level PGT; all 125 questions are mathematics.
Checked file: `pyq/up-pgt-2021/questions.jsonl` (copied here as `orig.jsonl`). Output: `questions.checked.jsonl` in this folder.

**Questions checked: 125 (Q1–Q125). None dropped.**

##### How it was checked
- **Transcription.** I rendered PDF pages 5–30 and 33 myself with PyMuPDF (zoom 2, plus 3.5× crops where the print was small) and compared every question and all four options, in order, with the English half. The candidate's pen marks were ignored.
- **Answers.** I solved all 125 questions from the page images before opening the transcriber's answers, keys and log. My answers agree with the transcriber's in **125 of 125**.
- **Key.** I read the board's key myself from `key.pdf` page 1, headed "PGT 02/2021 MATHEMATICS (PG-06) (SERIES-A)" and dated 19-08-2021. The file's `key` field matches it for all 125 questions.
- **Script.** `tools/check.py` recomputes every answer independently, using sympy, mpmath, numerical tests or brute force, and compares the result with `answer`. It agrees for **125 of 125**:
  - **114** are independent computations (series and integrals, dsolve and substitution into ODEs, determinants, ranks and eigenvalues, limits, numerical complex arithmetic, enumeration, a direct six-face flux for Q54, a first-integral test for Q116, a tangency-and-point test for Q125, a Lagrange-multiplier tangency test for Q70, and so on).
  - **11** only apply a stated rule or model: Q7, Q15, Q18, Q28, Q44, Q68, Q75, Q91, Q96, Q119 and Q124.
- **Format.** `tools/lint.py` confirms all of the following:
  - 125 valid JSON lines, Q1–Q125 in order.
  - Four options and four notes each, `answer` from 0 to 3, `key` equal to the board's key, and every topic id present in `topics.txt`.
  - An even number of `$` in every string, no `$$` in a question or option, and no `align`, `\displaystyle`, rupee sign or `\,'`.
  - Balanced braces in every math segment and no LaTeX command outside math.
  - Every LaTeX command used is one that KaTeX supports.

##### Transcription
- **No transcription errors found.** All numbers, signs, exponents, limits, matrix entries and option orders match the page images.
- Silent fixes, all acceptable:
  - Q7: "complex number" was printed; the file has "complex numbers".
  - Q13: the printed "(z, 0)" and "z" are rendered as $(\mathbb Z, \circ)$ and $\mathbb Z$.
  - Q63: the smudged "Imrm" is read as "term".
- Kept as printed: Q21 (B) "1 < r < 1" and Q28 (D) "c tan hx". Both are wrong options either way.

##### Changes made
| Q | Field | What was wrong | What it is now |
|---|---|---|---|
| 6, 9, 88 | q | `\displaystyle` (not needed inline) | removed |
| 27 | notes (A) | said the axes "pass through the curve" | the axes meet the curve only at the origin, which is an isolated point; they are not asymptotes |
| 66 | notes (C) | claimed that using "13 − 4 = 9 without halving" leads to $\frac32$; no such slip gives $\frac32$ (it gives a distance of $\frac95$, radius $\frac9{10}$) | removed (empty) |
| 67 | notes (B) | garbled ("with $a$ for $\frac1{a^2}$") | adds the coefficients $\frac1{a^2}, \frac1{b^2}, \frac1{c^2}$ instead of their reciprocals |
| 101 | notes (C) | said (C) is "the images in standard coordinates, written as rows"; those rows would be (2, 0), (0, −1), (1, 1), not (C) | wrong shape: the matrix of a map $\mathbb R^3\to\mathbb R^2$ is $2\times3$ |
| 125 | notes (A), (B), (C) | said the lines in A, B and C "do not touch" the hyperbola. **False:** all four lines in the options are tangents to $2x^2 - 3y^2 = 6$ (checked by script). 3x + y + 5 = 0 and x + y + 1 = 0 are the tangents from (−2, 1). | each note now says the line is a tangent but does not pass through (−2, −1); the solution adds that only the lines in (D) pass through (−2, −1) |
| 68, 75, 116 | solution | the solution did not say what the board's key gives | each solution now names the key's option and explains why it is wrong (see below) |
| 105 | solution, flag | the solution did not warn that $*$ is not a group operation | the solution and flag now explain this (see below) |

There are no answer changes and no topic changes. I checked every topic id and kept it. Where no notes page fits exactly, the transcriber's choices are reasonable:
- PDEs (Q36, Q50, Q116) under tp-06-02.
- Director sphere (Q67) under tp-11-06.
- Conicoid tangent plane (Q70) under tp-13-03.
- Annihilator (Q102) under tp-03-02.

##### Disagreements with the board's key (3; I am sure of each)
- **Q68.** Key (C) $\frac25$. Answer (B) $\frac{13}{60}$.
  - Only one racer can win a single race, so "P wins", "Q wins" and "R wins" are mutually exclusive. So P(none) = 1 − (1/3 + 1/4 + 1/5) = 13/60.
  - The key's 2/5 is (2/3)(3/4)(4/5), which treats the wins as independent. That is impossible, because two racers cannot both win the same race.
- **Q75.** Key (B) $14\mathbb Z$. Answer (C) $\mathbb Z$.
  - ⟨2, 7⟩ contains 4·2 − 7 = 1, so it is all of $\mathbb Z$.
  - $14\mathbb Z = 2\mathbb Z\cap7\mathbb Z$ is the intersection, which does not even contain 2.
- **Q116.** Key (C). Answer (D), $f(x^2+y^2+z^2,\ lx+my+nz) = 0$.
  - For the integrals in (C): $x(mz-ny) + y(nx-lz) = z(mx-ly) \ne 0$ and $l(mz-ny) + m(nx-lz) = n(mx-ly) \ne 0$, so neither $x^2 + y^2$ nor $lx + my$ is an integral.
  - The script confirms that only (D) gives two first integrals.

These are the three disagreements the transcriber flagged, and I reached them independently.

##### Q105 (transcriber's "not a group" flag): kept, not dropped
- As printed, $x * y = x + 2y - 3$ is not associative: $(x*y)*z - x*(y*z) = 3 - 2z$. It also has no two-sided identity.
- So $(G, *)$ can be a group only on the one-point set $\{\frac32\}$.
- The intended working gives (B) $\frac{9-2x}{4}$, which is also the key's answer: solve $x * e = x$, then $x * x' = e$.
- On $\{\frac32\}$, (B) is again the inverse: $\frac{9 - 3}{4} = \frac32$. None of the other options is.
- So one option is defensible under both readings, and the drop rule does not apply. The solution and flag now say all this.

##### Left as they are, with notes in the solutions (no flag)
- **Q77.** The lines meet at 60° (equivalently 120°). Only 120° is listed, so (C), which agrees with the key. A student who insists on the acute angle might choose "none of the above"; note (D) addresses this.
- **Q89.** Strictly, the zero matrix is also a scalar matrix (0·I). But (C) holds for every square matrix, and the question asks about singular A, so (B) "null matrix" is the intended and best answer. Note (C) says so.
- **Q40.** For r = ω or ω², the sums vanish when 3 | n. The intended answer, 3, is noted in the solution.
- **Q48.** The dot product is ±10√6; only +10√6 is listed.
- **Q100.** "Firmly united" is read as the two spheres touching, so their centres are 9 cm apart.
- **"None of the above" answers:** Q10 (the work done is −2/3), Q39 (the value is −9/7) and Q81 (the determinant is 0). All three were confirmed by script.

##### Files
`questions.checked.jsonl` and this `log.md`. Working files:
- `orig.jsonl`: a copy of the input.
- `tools/render.py` and `tools/crop.py`: page images in `img/` and `crop/`, key images in `keyimg/`.
- `tools/check.py`: independent answer check.
- `tools/patch.py`: the edits above.
- `tools/lint.py`: format checks.
- `tools/cmds.py`: the list of LaTeX commands used.

## UP PGT Mathematics 2016 (held 2 February 2019)

- Source: UPSESSB PGT written examination of the 2016 advertisement, Mathematics, held on 2 February 2019: question booklet series A, code PG-08, as shared after the exam, with the board's answer key.
- In the app: `data/mq/up-pgt-2016.json`, 125 questions; full mock 60 seconds a question, negative marking none.

### Transcription and first solution

### UP PGT (UPSESSB) Mathematics, 2016 advertisement — written exam of 2 February 2019

#### Source
- File: `papers/up-pgt-2016/paper.pdf`, 31 PDF pages with no text layer: phone photos of the question booklet **PG-08, series A**, bilingual (Hindi left, English right), distributed by a coaching site (its logo watermark is on every page).
- The booklet's cover and instruction pages (booklet pp. 1–3) are missing. Some pages are skewed or shaded; hard spots were re-rendered at zoom 4–8.
- A candidate's handwritten rough work is on several pages; it was ignored.
- Key: `papers/up-pgt-2016/key.pdf`, "MATHEMATICS (PG-08) Set A–D" (4 pages); **set A** (page 1) is recorded as `key`. Each question was solved before its key was looked at.

#### Page map
| PDF page | Booklet page | Questions |
|---|---|---|
| p1 | coaching-site title page (skipped) | none |
| p2, p3 | advertisements (skipped) | none |
| p4 | 4 | Q1–Q5 |
| p5 | 5 | Q6–Q10 |
| p6 | 6 | Q11–Q15 |
| p7 | 7 | Q16–Q20 |
| p8 | 8 | Q21–Q25 |
| p9 | 9 | Q26–Q29 |
| p10 | 10 | Q30–Q34 |
| p11 | 11 | Q35–Q38 |
| p12 | 12 | Q39–Q42 |
| p13 | 13 | Q43–Q47 |
| p14 | 14 | Q48–Q52 |
| p15 | 15 | Q53–Q56 |
| p16 | 16 | Q57–Q60 |
| p17 | 17 | Q61–Q66 |
| p18 | 18 | Q67–Q71 |
| p19 | 19 | Q72–Q77 |
| p20 | 20 | Q78–Q83 |
| p21 | 21 | Q84–Q88 |
| p22 | 22 | Q89–Q94 |
| p23 | 23 | Q95–Q99 |
| p24 | 24 | Q100–Q103 |
| p25 | 25 | Q104–Q107 |
| p26 | 26 | Q108–Q111 |
| p27 | 27 | Q112–Q117 |
| p28 | 28 | Q118–Q121 |
| p29, p30 | advertisements (skipped) | none |
| p31 | 29 | Q122–Q125 |

#### Range and skipped questions
- Q1–Q125, all mathematics; **none skipped**. Level "PGT" for all.
- Areas: matrices and determinants, algebra and series, linear algebra, group theory, coordinate geometry (2D and 3D), calculus and differential equations, complex numbers, vector calculus, statics and dynamics.

#### Flags (7)
- **Q51**: the Hindi text has $\vec a=2\hat i-2\hat j+3\hat k$, which gives $x=\frac{14}{17}$ (no option); the English text ($2\hat i+2\hat j+3\hat k$, giving $-2$) is used.
- **Q52**: misprint fixed: the English option (D) repeats (C) as $\frac{\sqrt3-1}{\sqrt2}$; the Hindi text has $\frac{\sqrt3+1}{\sqrt2}$, which is the answer.
- **Q67**: exponent read as 48 from the Hindi text (blurred in the English); the answer does not depend on it.
- **Q95**: the exponent $\frac15$ is small in the scan; the $\frac25$ in the options confirms it.
- **Q102**: misprint fixed: both languages print the numerator as $3ax^2-x^3$, which matches no option (checked by script); the standard question has $3a^2x-x^3$, giving $\frac{3a}{x^2+a^2}$, the board's key too.
- **Q113**: my answer differs from the key: the key says (D) $-1$, but $\operatorname{div}(r^n\vec r)=(n+3)r^n=0$ gives $n=-3$, option (A). Recorded as `answer` 0, `key` 3.
- **Q116**: the third vector is blurred (read as $\hat k-\hat i$); $\hat k-\hat j$ would also give $0$.

Other remarks (not flagged): Q8 has $\det P=\pm2$, and only $2$ is offered. Q32 uses the formula $f(t)=t^3-3t$, although $x+\frac1x=1$ has no real $x$. Q123 reads "between" as strictly between (inclusive counting gives 27, not offered).

#### Answers and key
- Answer distribution (mine): A 27, B 37, C 39, D 22.
- Agreement with the set A key: 124 of 125; the only difference is Q113 (see above).

#### Checks
- `build.py` loads qa.py/qb.py/qc.py, adds the key and writes `questions.jsonl`; it reloads every line with `json.loads` (125 rows, Q1–Q125 in order, none twice), and checks topics, option and note counts, `$` and brace balance, and that no `$$` appears outside solutions. Problems: none. It is run with `python -I -W error`, so no stray escape sequences; `scan.py` confirms there are no control characters in any field.
- `verify.py` recomputes **120 of 125** answers a second way (sympy limits, series, dsolve and solve; numpy determinants, ranks and cross products; brute force over groups, permutations and functions; numerical integration and sampling). Each check tests the options on its own and must single out the recorded answer: **0 mismatches**. Not scripted (conceptual): Q58, Q79, Q81, Q89, Q118. A few checks only illustrate a general fact on examples (e.g. Q16, Q66, Q74).
- KaTeX rendering was not tested here: there is no Node/KaTeX in this environment. The constructs used are standard (`\begin{vmatrix}`, `\operatorname{}`, `{}^{n}P_r`, `{e'}^2`, `\vec{R}'`, `\pmod{}`); there is no rupee sign and no `\,'`.

#### Count
125 questions in `questions.jsonl`.

### Independent check

#### UP PGT 2016 (held 2 February 2019): check of 23 November 2026

Paper: UP PGT (UPSESSB) Mathematics, 2016 advertisement, booklet PG-08 series A (phone-photo scan, bilingual). Key: `key.pdf` page 1, "MATHEMATICS (PG-08) (Set A)" (pages 2–4 are sets B–D).
Checked file: `pyq/up-pgt-2016/questions.jsonl` (copied here as `questions.orig.jsonl`). Output: `questions.checked.jsonl`.

**Questions: 125 (Q1–Q125), all mathematics, level PGT. None dropped.**

##### How it was checked
- Rendered the English column of PDF pages 4–28 and 31 myself at zoom 2.8 (`render3.py`), and every doubtful spot again at zoom 5–10 in both the English and the Hindi column (`zoom.py`).
- Compared every stem and all four options of all 125 questions with the page images: numbers, signs, exponents, limits, matrix entries and option order.
- Solved all 125 myself before looking at the transcriber's answers, then read the key image myself. My answers agree with the transcriber's on **all 125**; the `key` field matches the set A key on all 125.
- Read every solution, option note and fact; checked every topic id against `topics.txt`.

##### Transcription
All 125 stems and option sets match the booklet except one:
- **Q116**: the third vector was transcribed as $\hat k-\hat i$; at zoom 10 it is printed $\hat k-\hat j$ (the last letter has the descender of a j, unlike the $\hat i$ at the start; the Hindi text looks the same). Stem fixed. Solution rewritten for the printed vectors (the third is minus the second, so the triple product is 0) and it notes that the textbook form with $\hat k-\hat i$ also gives 0. Flag rewritten. Answer (D) 0 unchanged.

Readings confirmed at high zoom (no change needed): Q50 "$|\vec a|+|\vec b|=|\vec c|$" (the plus is clear in the Hindi); Q51 English $\vec a=2\hat i+2\hat j+3\hat k$; Q52 English (D) repeats (C), the Hindi (D) is $\frac{\sqrt3+1}{\sqrt2}$; Q55 (A) has $e^{x/c}$, (C) has $e^{y/c}$; Q67 exponent 48 (clear in the Hindi); Q95 exponent $\frac15$ (clear in the Hindi); Q102 both languages print the numerator $3ax^2-x^3$.

##### Other changes (question: what was wrong → what it is now)
- **Q45** fact: said $\log\frac{x-i}{x+i}=-2i\cot^{-1}x$ without the many-valued caveat → now adds "(up to multiples of $2\pi i$)".
- **Q47** note (C): gave only the argument slip, but $e^{(2n+1)\pi/2}$ also has the wrong sign → now says both.
- **Q51** flag: stated the Hindi sign as certain; it is blurred → "appears to read".
- **Q52** solution: did not mention the misprinted option (D) that students will see → now says the English (D) repeats (C) and the Hindi value is used.
- **Q83** topic: tp-03-02 → **tp-03-01** (the notes page that teaches quotient spaces).
- **Q102** solution: did not mention the misprint → now says the booklet prints $3ax^2-x^3$, that this matches no option (at $a=1$, $x=0.2$: $\frac{dy}{dx}\approx1.38$ against $\frac{3a}{x^2+a^2}\approx2.88$, by script), and that the standard $3a^2x-x^3$ is read. Flag extended (the denominator $a(a^2-3x^2)$ is the $\tan3\theta$ form; the board key (B) fits).
- **Q113** solution: did not mention the key → now says the board key gives (D) $-1$ and why it is wrong ($\operatorname{div}(r^{-1}\vec r)=\frac2r\ne0$).
- **Q123** solution: adds that inclusive counting gives 27, not offered.

No answer was changed.

##### Disagreement with the official key (1)
- **Q113**: key (D) $-1$; answer **(A) $-3$**. $\operatorname{div}(r^n\vec r)=nr^{n-2}(\vec r\cdot\vec r)+3r^n=(n+3)r^n$, zero only for $n=-3$ (sympy confirms). At $n=-1$ the divergence is $\frac2r$. The key's $-1$ is the answer to $\nabla^2(r^n)=n(n+1)r^{n-2}=0$, a different question.

All other 124 answers agree with the key.

##### Drop rule
- **Q102** kept: the printed numerator $3ax^2-x^3$ is an obvious slip for $3a^2x-x^3$ (the denominator and all four options are the $\tan3\theta$ question, and the key agrees). This is a fair reading, not a guess.
- **Q116** kept: both possible readings of the third vector give 0, so the answer does not depend on the reading.
- No question has no correct option, two correct options or impossible data, so nothing is dropped.

##### Script checks
`mycheck.py` (sympy, mpmath, brute force) recomputes **113 of 125** answers independently. It tests the options and must pick out exactly the recorded answer. **0 mismatches.** Methods: limits, series, dsolve, determinants and ranks, exact sums, numerical integration, complex-function identities at sample points, permutation and divisor counts. Also computed: Q102 with the printed numerator (it matches no option) and Q116 with both readings (both give 0).
Not scripted (theory or recall, checked by hand): Q1, 14, 16, 50, 58, 60, 74, 79, 81, 89, 90, 118.

##### Format
125 valid JSON lines, numbered Q1–Q125 in order with none repeated. Each line has 4 options and 4 notes, `answer` 0–3, `key` 0–3 and a topic from `topics.txt`. Every string has an even number of `$`; braces, `\left`/`\right` and `\begin`/`\end` are balanced. There is no `$$` in any stem or option, no `align`, no `\displaystyle`, no rupee sign and no `\,'`. Every LaTeX command used is standard KaTeX (`cmds.py`). KaTeX itself could not be run here because Node is not available. Apart from the 9 edited lines, the file is byte-identical to the transcriber's.

##### Left doubtful (answers not affected)
- Q116: $\hat k-\hat j$ against $\hat k-\hat i$ in a small print (both give 0).
- Q51: the Hindi sign of $2\hat j$ is blurred; the English text is clear.
- Q8 ($\det P=-2$) and Q23 ($h+f=-8$) have a second value that is not offered; the offered one is the answer.
- Q43 assumes the principal range $(0,\pi)$ for $\cot^{-1}$. Q123 reads "between" as exclusive. Q32 uses $f(t)=t^3-3t$ formally, because $x+\frac1x=1$ has no real solution. Each solution says so where it matters.

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

## UPPSC GIC Lecturer Mathematics 2021 (rebuilt from a question book)

- Source: UPPSC Lecturer (Government Inter College) examination of 19 September 2021, mathematics part: no copy of the booklet could be found, so the paper is rebuilt from the questions marked UPPSC GIC Lecturer 2021 in Youth TGT PGT Maths 2024-25, in the book's chapter order.
- In the app: `data/mq/gic-2021.json`, 78 questions; full mock 60 seconds a question, negative marking none.

### Transcription and first solution

### UPPSC GIC Lecturer (PGT) Mathematics, 19 September 2021: rebuilt from the YCT question book

#### Source
- No copy of the question booklet was found, so the mathematics part is rebuilt from the book *Youth TGT PGT Maths 2024-25 Edition* (YCT, chapter-wise solved papers), `the book`, 1248 pages. The book was treated as untrusted data; only page images and the text layer were read.
- Every page has a crop box that hides the top 71 pt (crop box y = 71…841 inside a 595 × 841 media box). All renders and crops set the crop box to the media box first (`render.py`, `locate.py`, `qcrop.py`, `clip.py`), so questions at the top of a page are complete.
- The book's tagged rows come from `youth/up-tags.tsv` (exam column "UP GIC 2021"): **80 rows** after dropping the front-matter row (page 6). `locate.py` found all 80 tag lines ("UPPSC GIC 2021", once "GIC 2021") on the 36 pages listed, and cut out the question above each tag. Three questions start in the previous column or on the previous page (book Q1473 on p. 223, Q1296 on pp. 735–736, Q99 on p. 1096); those were read from both parts. All 80 page crops were viewed in `mont/` (three crops per image).
- Each question and its options were copied from the page images (zoom 2.2–2.4); the text layer was used only as an aid.

#### Question range
- The paper had 40 general-studies and 80 mathematics questions. The book is maths only, so the GS part is simply absent; nothing had to be skipped.
- **80 tagged rows → 79 distinct questions.** One duplicate: book Q228 (p. 1119, tag "GIC 2021 / Rajasthan TGT 2013, 2015 / UPPCS 1994", options Parabola / Circle / Equiangular spiral / Hyperbola) is the same question as book Q97 (p. 1096, "If the radial and transverse velocities of a particle are always proportional to each other…"). It was kept once, as n = 72, in the version of Q97, whose tag is "UPPSC GIC 2021 / UPPSC Ashram Paddhati 2021" (the Q228 option set probably comes from one of the other exams named in its tag). The book's answer is the equiangular spiral in both places.
- So at least one of the paper's 80 maths questions is not in the book. The paper's own question numbers and order are unknown: `n` = 1…79 follows the book's chapter order (page order, then left column before right).
- Level "PGT" throughout; `key` is null throughout (the book's printed answer is not an official key; it is compared in the table below).

#### Output
- `questions.jsonl`: **79 questions, n = 1–79**, built by `build.py` from `qa.py` (n 1–35) and `qb.py` (n 36–79). The file is reloaded line by line with `json.loads` (all 79 lines are valid JSON); topic ids are checked against `topics.txt`; `$` signs are balanced and no math segment contains non-ASCII characters, a rupee sign or `\,'`.
- `verify.py` recomputes **74 of 79 answers** by script (sympy, exact fractions, numerical integration and limits, brute-force enumeration, permutation parity, Darboux sums, a numerical equilibrium solve). **No mismatches.** Not script-checked (definitions or theory, checked by reasoning): n = 8 (binary operation), 11 (isomorphism is an equivalence), 31 (Stokes' theorem), 52 (order and degree), 71 (angular velocity, see flag). For n = 35 the script confirms that options (a) and (d) describe the same set (see flag); for n = 48 it confirms that x = t² and x = t³ fail to rationalise while t⁶ and t¹² both do (t⁶, the LCM, is the answer).
- My answers: (a) 19, (b) 19, (c) 19, (d) 22.

#### The book's printed answers
- Correct in 77 of 79.
- **Wrong in 1: n = 4** (book Q162, p. 30). The book says (a) 8: it adds the double root x = 4 of (x − 4)² = 0 twice. The equation has two roots, 0 and 4, so the sum is 4 (d).
- **No answer in 1: n = 62** (book Q649, p. 916). The book prints "Ans. (*)", because the planes as printed meet. See the flag.
- n = 71 (book Q96): the book's (d) is the setter's intended answer, but the question is loosely set (flag).

#### Flags (12)
- **n = 4** (Q162): book answer (a) 8 counts the double root 4 twice; the roots are 0 and 4, sum 4 (d).
- **n = 5** (Q953): misprint fixed. The book prints "non-zero rational number Q* by aRb. If a = 1/b, then"; written "rational numbers … by aRb if a = 1/b, then".
- **n = 16** (Q1478): misprint fixed, option (b) "homomorhism".
- **n = 34** (Q32, complex numbers): misprint fixed, option (b) "a geometric procession".
- **n = 35** (Q214): two options describe the same values. (a) nπ/2 − π/4 is (d) nπ/2 + π/4 with n replaced by n − 1 (n any integer). (d) is the standard form and the book's answer, so answer = (d).
- **n = 52** (Q1298): the first exponent is printed as a capital P; written p, as in the options.
- **n = 60** (Q305): misprint fixed, "sq, unit" in options (c) and (d).
- **n = 62** (Q649): misprint fixed. The book prints the second plane as 3x + 6y + 3z = 2, which is not parallel to 2x + y + z = 1 (normals (2, 1, 1) and (1, 2, 1)); the planes meet, the distance is 0 and no option fits (the book's answer is "(*)"). With 6x + 3y + 3z = 2 (i.e. 2x + y + z = 2/3) the distance is 1/(3√6), exactly option (b). The checker may prefer to keep the printed text with "no correct option".
- **n = 69** (Q241): cos⁻¹((1 − x²)/(1 + x²)) = 2 tan⁻¹x holds for x ≥ 0 only (for x < 0 it is −2 tan⁻¹x); (c) is the intended answer.
- **n = 71** (Q96): loosely set. In general the angular velocity about O is v sin φ / OP = vp/OP² (φ the angle between OP and the tangent, p the perpendicular from O to the tangent), which is not proportional to any fixed power of OP for an arbitrary curve. The setter and the book take ds = OP dθ (velocity at right angles to OP), giving θ̇ = v/OP and (d).
- **n = 74** (Q99): misprint fixed, option (c) "250 m/s" without the square.
- **n = 79** (Q104): spacing fixed, option (a) "c cos h (x/c)" written c cosh(x/c).

Smaller points left as printed, without a flag: n = 7 (Q965) defines g : ℝ → ℝ by x/(x − 1), which is undefined at 1 (harmless, since f(x) ≥ 2); n = 55 (Q146) option (c) has no "= 0"; n = 78 (Q103) option (c) prints ṡ²/p (presumably ρ).

#### Source table (n → book page, book number, tag as printed, book's answer)
| n | page | book no. | tag as printed | book answer | my answer | verdict on the book |
|---|---|---|---|---|---|---|
| 1 | 29 | 159 | UPPSC GIC 2021 | (a) | (a) | correct |
| 2 | 29 | 160 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (c) | (c) | correct |
| 3 | 29 | 161 | UPPSC GIC 2021 | (d) | (d) | correct |
| 4 | 30 | 162 | UPPSC GIC 2021 | (a) | (d) | wrong |
| 5 | 155 | 953 | UPPSC GIC 2021 | (b) | (b) | correct |
| 6 | 155 | 954 | UPPSC GIC 2021 | (b) | (b) | correct |
| 7 | 157 | 965 | UPPSC GIC 2021 | (a) | (a) | correct |
| 8 | 157 | 966 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (b) | (b) | correct |
| 9 | 157 | 967 | UPPSC GIC 2021 | (c) | (c) | correct |
| 10 | 157 | 968 | UPPSC GIC 2021 | (c) | (c) | correct |
| 11 | 223 | 1473 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (d) | (d) | correct |
| 12 | 223 | 1474 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (b) | (b) | correct |
| 13 | 223 | 1475 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (b) | (b) | correct |
| 14 | 224 | 1476 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (d) | (d) | correct |
| 15 | 224 | 1477 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (a) | (a) | correct |
| 16 | 224 | 1478 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (d) | (d) | correct |
| 17 | 226 | 1494 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021; UP TGT 2021 | (c) | (c) | correct |
| 18 | 255 | 1720 | UPPSC GIC 2021 | (a) | (a) | correct |
| 19 | 255 | 1721 | UPPSC GIC 2021; UPPCS (Pre) 2002 | (d) | (d) | correct |
| 20 | 256 | 1722 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (c) | (c) | correct |
| 21 | 256 | 1723 | UPPSC GIC 2021 | (b) | (b) | correct |
| 22 | 256 | 1724 | UPPSC GIC 2021 | (b) | (b) | correct |
| 23 | 327 | 2116 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (b) | (b) | correct |
| 24 | 328 | 2117 | UPPSC GIC 2021 | (d) | (d) | correct |
| 25 | 328 | 2118 | UPPSC GIC 2021 | (c) | (c) | correct |
| 26 | 328 | 2119 | UPPSC GIC 2021 | (a) | (a) | correct |
| 27 | 345 | 19 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021; UP PGT 2013; UPPCS (Pre) 2003, 2000 | (b) | (b) | correct |
| 28 | 368 | 31 | UPPSC GIC 2021 | (d) | (d) | correct |
| 29 | 368 | 32 | UP TGT 2011; UPPSC GIC 2021; UPPSC Ashram Paddhati 2021; JDD-75-PGT-TIER-II-X-15. 28.06.2015 | (d) | (d) | correct |
| 30 | 412 | 285 | UPPSC GIC 2021 | (c) | (c) | correct |
| 31 | 412 | 286 | UPPSC GIC 2021; UPPSC Asharam Paddhati 2021 | (b) | (b) | correct |
| 32 | 412 | 287 | UPPSC GIC 2021 | (a) | (a) | correct |
| 33 | 412 | 288 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (a) | (a) | correct |
| 34 | 434 | 32 | UPPSC GIC 2021 | (b) | (b) | correct |
| 35 | 463 | 214 | UPPSC GIC 2021 | (d) | (d) | correct |
| 36 | 501 | 78 | UPPSC GIC 2021 | (c) | (c) | correct |
| 37 | 501 | 79 | UPPSC GIC 2021 | (d) | (d) | correct |
| 38 | 501 | 80 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (b) | (b) | correct |
| 39 | 565 | 431 | UPPSC GIC 2021 | (a) | (a) | correct |
| 40 | 576 | 501 | UP PGT 2009; UPPSC GIC 2021 | (a) | (a) | correct |
| 41 | 576 | 502 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (a) | (a) | correct |
| 42 | 609 | 673 | UPPSC GIC 2021 | (c) | (c) | correct |
| 43 | 609 | 674 | UPPSC GIC 2021 | (a) | (a) | correct |
| 44 | 631 | 796 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (d) | (d) | correct |
| 45 | 631 | 797 | UPPSC GIC 2021 | (d) | (d) | correct |
| 46 | 632 | 798 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (c) | (c) | correct |
| 47 | 632 | 799 | UPPSC GIC 2021; UP PGT 2004 | (a) | (a) | correct |
| 48 | 632 | 800 | UPPSC GIC 2021 | (c) | (c) | correct |
| 49 | 632 | 801 | UPPSC GIC 2021 | (d) | (d) | correct |
| 50 | 735–736 | 1296 | UPPSC GIC 2021 | (b) | (b) | correct |
| 51 | 736 | 1297 | UPPSC GIC 2021 | (a) | (a) | correct |
| 52 | 736 | 1298 | UPPSC GIC 2021 | (b) | (b) | correct |
| 53 | 736 | 1299 | UPPSC GIC 2021; Rajasthan TGT 2015; UP PGT 2009; UP PCS (Pre) 1995 | (a) | (a) | correct |
| 54 | 830 | 145 | UPPSC GIC 2021 | (c) | (c) | correct |
| 55 | 830 | 146 | UPPSC GIC 2021 | (d) | (d) | correct |
| 56 | 855 | 295 | UPPSC GIC 2021; UPPCS (Pre) 1994 | (d) | (d) | correct |
| 57 | 856 | 296 | UPPSC GIC 2021 | (a) | (a) | correct |
| 58 | 856 | 297 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (b) | (b) | correct |
| 59 | 856 | 298 | UPPSC GIC 2021 | (c) | (c) | correct |
| 60 | 857 | 305 | UPPSC GIC 2021 | (d) | (d) | correct |
| 61 | 916 | 648 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (a) | (a) | correct |
| 62 | 916 | 649 | UPPSC GIC 2021 | (*) | (b) | no answer printed ("*") |
| 63 | 916 | 650 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (a) | (a) | correct |
| 64 | 945 | 1018 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (c) | (c) | correct |
| 65 | 946 | 1019 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021; Rajasthan TGT 2011 | (c) | (c) | correct |
| 66 | 983 | 172 | UPPSC GIC 2021 | (d) | (d) | correct |
| 67 | 983 | 173 | UPPSC GIC 2021 | (c) | (c) | correct |
| 68 | 983 | 174 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021; Haryana TGT 2020 | (c) | (c) | correct |
| 69 | 1056 | 241 | UPPSC GIC 2021 | (c) | (c) | correct |
| 70 | 1056 | 242 | UPPSC GIC 2021 | (b) | (b) | correct |
| 71 | 1095 | 96 | UPPSC GIC 2021 | (d) | (d) | correct |
| 72 | 1096 | 97 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (d) | (d) | correct |
| 73 | 1096 | 98 | UPPSC GIC 2021 | (b) | (b) | correct |
| 74 | 1096 | 99 | UPPSC GIC 2021 | (a) | (a) | correct |
| 75 | 1096 | 100 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (c) | (c) | correct |
| 76 | 1096 | 101 | UPPSC GIC 2021 | (a) | (a) | correct |
| 77 | 1097 | 102 | UPPSC GIC 2021 | (b) | (b) | correct |
| 78 | 1097 | 103 | UPPSC GIC 2021; UKSSSC LT 2020 | (d) | (d) | correct |
| 79 | 1097 | 104 | UPPSC GIC 2021; UPPSC Ashram Paddhati 2021 | (d) | (d) | correct |

Duplicate (not in the output): book Q228, p. 1119, tag "GIC 2021; Rajasthan TGT 2013, 2015; UPPCS 1994", book answer (c) Equiangular spiral (correct); same question as n = 72.

#### Count
79 mathematics questions (n = 1–79) from 80 tagged rows (1 duplicate). The paper had 80 maths questions, so at least one is missing from the book.

### Independent check

#### UPPSC GIC Lecturer 2021 (rebuilt from the book): check of 23 November 2026

##### What was checked
- Source: `the book` (untrusted; only page images and the text layer were read). Every page was opened with the crop box set to the media box (the crop box hides the top ~71 pt), and each tagged question was rendered at zoom 2.2 (`crops.py`, `mont.py`, `clip.py`; images in `crop\`, `mont\`, `img\`). Questions split across a column or page (book Q1473, Q1296, Q99) were read from both parts; determinants and matrices whose first rows sat above the question-number line (n = 18, 19, 21, 22, 36) were cropped again and read in full.
- Input: the transcriber's `questions.jsonl` (copied here as `questions.orig.jsonl`), 79 questions.
- **Number of questions now: 80** (79 + 1 added, see below); **2 marked `"drop": true`** (n = 35, 71), so 78 go into the quiz. `level` PGT and `key` null throughout.

##### Tags and completeness
- I scanned the text layer of all 1248 pages myself (`scan.py`) for lines naming GIC and 2021: 82 lines, which are 1 front-matter row (p. 6), the transcriber's 80 tagged rows (79 questions + the duplicate book Q228 on p. 1119 = n = 72), and **one row the transcriber missed: book Q653, p. 917, tag printed "UPPSC Ashram Paddhati 2021 / UPPCS GIC 2021 / UKPSC Lecturer (Mains) 2020"**. "UPPCS GIC" is read as UPPSC GIC (there is no UPPCS GIC exam, and most of this paper's questions carry the same Ashram Paddhati 2021 co-tag). The transcriber's tag list (`youth/up-tags.tsv`) has no row for it, which is why it was missed.
- For every one of the 79 transcribed questions, the crop shows "UPPSC GIC 2021" directly under its options (n = 72 also as "GIC 2021" on its duplicate, Q228). All tags really name the GIC 2021 exam.
- With Q653 the set is 80 distinct questions, matching the 80 mathematics questions of the paper.

##### Transcription
- All 79 questions and their four options compared word for word with the page images: **no transcription errors found.** The transcriber's misprint fixes (n = 5, 16, 34, 52, 60, 74, 79) match the page.

##### Answers
- I solved all 80 questions myself before looking at the transcriber's answers. **Agreement on 78 of 79**; the exception is n = 71, which I drop (no option is true, see below). The added n = 80 is answered (a) 0, which is also the book's answer.
- **Script checks: 59 questions** recomputed by `mycheck.py` (sympy, exact fractions, numerical integration and limits, Riemann/Darboux sums, brute force on relations and groups, permutation parity, a cmath check for n = 35, a check of the beam equilibrium in n = 75), all passing: n = 1–5, 7, 9, 12–14, 17–23, 26–28, 30, 32, 33, 35, 36, 38–51, 53, 54, 57, 59–62, 64, 66–70, 72–75, 77, 79, 80. The rest (definitions and standard results: n = 6, 8, 10, 11, 15, 16, 24, 25, 29, 31, 34, 37, 52, 55, 56, 58, 63, 65, 71, 76, 78) were checked by reasoning.
- No official key exists (the book's answers are not a key). Against the book: wrong on n = 4 (the book's (a) 8 counts the double root 4 twice; the roots are 0 and 4, sum 4 (d)), "(*)" on n = 62, and the book's (d) on n = 71 rests on a wrong step (ds = OP dθ). All other book answers agree with mine, including n = 80.

##### Changes made (in `questions.checked.jsonl`)
- **n = 35 (book Q214): dropped.** Two correct options: (a) nπ/2 − π/4 and (d) nπ/2 + π/4 are the same set of values (n → n − 1). Flag rewritten; note (a) now says it is also correct; one line added to the solution.
- **n = 46 (Q798): note (b) corrected.** It said the derivative of uv′ + vu′ "has the extra term 2u′v′"; the derivative is uv″ + vu″ + 2u′v′, so the note now says that.
- **n = 48 (Q800): flag added** (answer unchanged, (c)): x = t¹² also makes the integrand rational, but the standard substitution is the least one, t⁶ (LCM of 2 and 3). Judged not a second defensible answer, so the question is kept.
- **n = 54 (Q145): topic tp-13-02 → tp-13-04.** The pair-of-planes test (Δ = 0 for a homogeneous second-degree equation) is taught on the cone page.
- **n = 62 (Q649): kept, solution and flag extended** (answer (b) unchanged). The printed second plane 3x + 6y + 3z = 2 is not parallel to 2x + y + z = 1, so as printed the distance is 0 and no option fits. Read as 6x + 3y + 3z = 2 (the 3 and 6 swapped), the distance is 1/(3√6) = option (b). This is a fair reading of an obvious misprint, not a guess: swapping instead in the first plane (x + 2y + z = 1) gives the same distance; no single-digit change makes the planes parallel, so any other fix needs more changes; and the book's own note says the plane should be 6x + 3y + 3z = 2. The solution now states the printed version and the reading, as students will see it.
- **n = 71 (Q96): dropped.** With uniform speed v on an arbitrary curve the angular velocity about O is θ̇ = v sin φ / OP = vp/OP² (p the perpendicular from O to the tangent), which is not proportional to any power of OP, so no option is true. (d) holds only if the velocity is always perpendicular to OP; the classical textbook result for uniform velocity along a straight line (p constant) gives (a). What the setter meant is a guess. Solution, notes and flag rewritten; `answer` left at (d), the book's.
- **n = 80 added (book Q653, p. 917):** "The shortest distance between the lines (x − 1)/2 = (y − 2)/3 = (z − 3)/4 and (x − 2)/3 = (y − 3)/4 = (z − 4)/5 is" (a) 0 (b) 1/√6 (c) 2/9 (d) 5/√6; answer (a): the lines meet at (−1, −1, −1). Topic tp-13-02. It is numbered 80, after the others, so that n = 1–79 keep their numbers; in book order it sits between n = 63 (p. 916) and n = 64 (p. 945).
- All other lines are byte-for-byte as the transcriber wrote them.

##### Format
- `fmt.py`: 80 lines of valid JSON, n = 1–80 in order and unique, four options and four notes each, answer 0–3, key null, level PGT, topic ids all in `topics.txt`, an even number of `$` in every string, no `$$` in questions or options, no align or displaystyle, no non-ASCII character inside math, no rupee sign, no `\,'`. Dropped lines carry `"drop": true`.

##### Left doubtful (kept)
- n = 62: kept with the reading above. If you would rather not change printed data at all, it is the one candidate for dropping (as printed, no option is correct).
- n = 48: (d) t¹² also rationalises; (c) kept as the standard answer.
- n = 69: the identity holds for x ≥ 0 only (already flagged); (c) is the only option that is ever right.
- n = 58: "how many normals": 3 is the maximum (a cubic in m); the standard answer.
- n = 80: provenance rests on the tag "UPPCS GIC 2021" being a misprint for UPPSC GIC 2021.
- Small points left as printed, without a flag (as the transcriber did): n = 7 (g undefined at x = 1, harmless), n = 55 option (c) without "= 0", n = 78 option (c) ṡ²/p (presumably ρ).

## DSSSB PGT Mathematics 2026 (13 April, shift 1)

- Source: DSSSB PGT Mathematics (post code 825/24), computer-based test of 13 April 2026, shift 1: the mathematics section (questions 101 to 280) of the board's response sheet as re-shared after the exam, with the board's draft-stage answer key.
- In the app: `data/mq/dsssb-pgt-2026.json`, 177 questions; full mock 30 seconds a question, negative marking 0.25.

### Transcription and first solution

### DSSSB PGT Mathematics, CBT of 13 April 2026, shift 1: part A (n = 1–90)

#### Source
- File: `papers/dsssb-pgt-2026-0413-s1/paper.pdf` (186 pages, a coaching-site compilation; untrusted, nothing in it was run).
- Pages 2–67 are the site's own typed copy (its own numbering). It was used only to help read a few images and was never the source.
- Pages 68–185 are the board's official response sheet (English medium). Everything here is transcribed from it.
- The response sheet restarts numbering at Q.1 in each section. Maths is "Discipline1" to "Discipline9". This part covers Discipline1 Q.1 to Discipline5 Q.10, i.e. overall Q101–Q190, recorded as `n` = overall − 100 = 1–90.
- Level "PGT" for all.

#### Page map (response sheet)
| PDF pages | Section | n |
|---|---|---|
| 112 (lower half) – 119 (top) | Discipline1 | 1–20 |
| 119 – 126 (top) | Discipline2 | 21–40 |
| 126 – 132 | Discipline3 | 41–60 |
| 133 – 140 | Discipline4 | 61–80 |
| 141 – 144 (Q.9, Q.10) | Discipline5 Q.1–10 | 81–90 |

#### Skipped
- Response-sheet pages 68–112 (upper half): Mental Ability and Reasoning, General Awareness, Numerical Aptitude and DI, English, Hindi (overall Q1–Q100), not maths.
- Discipline5 Q.11 onward (overall Q191–Q280) belongs to the other half of this paper (another agent); Teaching Methodology after Discipline9 is not maths.

#### How it was read
- Each page was rendered with PyMuPDF at zoom 1.8 (`render.py`). Many question images are wider than their cell and are cut off on the page, so every clipped image was extracted at full size and placed under the page render (`montage.py`). PyMuPDF confuses equal-sized small images, so small option images were always read from the page render, never from the extracted copies; no clipped image shared its size with another on its page (checked).
- Official key: in the response sheet the correct option carries a green tick image (16×16) and the others a red cross (31×21); the option label is also green. `keys.py` read both for every question: all 90 have exactly four icons, one tick, and the green label agrees with the tick. Recorded as `key`.
- Graph options (n = 68) were zoomed and described in words.

#### Flags (10)
- n=4: misprint fixed. The paper prints "{x : x is an integer and x ≤ 3}", an infinite set that matches no option; changed to |x| < 3 (same set as x² < 9), the reading that gives the key {−2, −1, 0, 1, 2}. Option (c) printed "{01,2}" read as {0, 1, 2}.
- n=9: spelling "roaster form" corrected to "roster form".
- n=28: options (b)–(d) print a full stop where (a) has a multiplication dot. As decimals they are wrong; if the stop in (b) meant multiplication, 15·5^(1/3) = 3·25^(2/3) would also be correct. Answer (a) = key.
- n=30: stray word "Answer" after "kinematics" in option (b) removed.
- n=33: spelling "bionomial" corrected.
- n=37: options (c), (d) printed "553", "552" with exponents lost; read as 55³ and 55². Sum of cubes = 55² = 3025, option (d) = key.
- n=58: options printed "y=x4", "y=x2" with exponents lost; read as x⁴, x².
- n=64: ambiguous. Key 4/5 assumes the second ellipse has the same orientation as the first (major axis along y); with the major axis along x the answer would be 5/4, option (d).
- n=68: options are graphs; described in words (cos x, cos 2x, sin 2x, sin x shapes).
- n=79: spelling "convertion" corrected to "conversion".
- Minor, not flagged: n=65 key 61.15 cm uses π ≈ 3.14 (192/π ≈ 61.12); n=79 39.4° is rounded.

#### Answer vs key
- My worked answer agrees with the official key in all 90 questions.

#### Verification
- `verify.py` recomputes 82 of the 90 answers a second way (brute force over permutations, sets and relations, sympy solve/expand/limit/diff/integrate/summation, numeric checks on sample triangles, divisor functions, distance and line formulas): 0 mismatches. A few of these (n = 31, 54, 58, 85) are only light arithmetic restatements.
- Not scripted (definitions/concepts): n = 7, 13, 14, 30, 44, 74, 78, 89.
- `build.py` loads every line back with `json.loads`, checks n = 1..90 in order, 4 options and 4 notes each, topic ids against topics.txt, balanced `$` and braces, no `$$` in questions, no rupee sign or `\,'`.

#### Count
- 90 questions written to `questions.jsonl` (n = 1–90).

#### Files
- `questions.jsonl`, `log.md`; data `qa.py` (1–22), `qb.py` (23–45), `qc.py` (46–90); `keys.py` → `keys.jsonl`; `build.py`, `verify.py`; helpers `render.py`, `montage.py`, `crop.py`, `extract.py`, `stack.py`, `spans.py`, `sections.py`, `imgs.py`, `imgs2.py`, `typed.py`, `probe.py`; images in `img/`, `mont/`, `qimg/`, `crop/`.

### DSSSB PGT Mathematics, CBT 13 April 2026, shift 1 — part b

- Source: `papers/dsssb-pgt-2026-0413-s1/paper.pdf`, official response sheet (English), pages 144–178.
  The coaching site's typed copy (pages 2–67) was only glanced at once to confirm numbering (its Q.226–229 match n = 126–129); nothing was transcribed from it.
- Range: overall Q191–Q280 = Discipline5 Q.11 … Discipline9 Q.20, written as n = overall − 100 = **91–180** (90 questions, all maths, level PGT).
- Skipped: nothing inside the range. Teaching Methodology (overall Q281–300, from page 178) is outside the brief and not transcribed.
- Key: the option whose text is green (colour 0x40c64b, read with PyMuPDF `get_text('dict')`) for 85 questions; for n = 129, 132, 175, 178, 179 the "Q." label is laid out vertically so the text-layer match missed them, and their green tick was read from the page images. Every key was also checked visually on the rendered pages.
- Clipped question images (horizontal scroll boxes) were read from the full embedded images, composited on white (`clip2.py`), so no question text was lost.

#### Answers vs key
- My answer equals the board's key for all 90 questions.

#### Verification
- `verify.py`: structure (90 rows, n = 91…180 in order, 4 options/notes, topic ids exist in topics.txt, even `$` counts, no rupee sign or `\,'`) passes; every line loads as JSON.
- 70 answers recomputed by script (sympy / numeric / brute force: integrals, residues, determinants, rank, minimal polynomial, inequalities, DEs, loop simulation, finite topology/basis tests, metric-axiom tests, etc.). Two more entries in the script (n = 102, 164) only restate the answer and are not counted.
- The remaining 20 are definitional/theory questions checked by reasoning: 101, 102, 104, 105, 116, 123, 125, 131, 133, 152, 154, 157, 163, 164, 166, 173, 174, 175, 176, 179.

#### Flags
- n=92: point printed "(1, 3 -4)"; comma restored.
- n=99: printed "3i-4j"; written as the vector $3\hat i-4\hat j$.
- n=103: the SD of the table is ≈ 1.13 (1.1 to one decimal), not among the options; the keyed 1.3 is the variance 1.28 (sample variance 1.32). Kept (b) = key as the intended answer.
- n=127: printed "∫₁² ∫₀^{y/2} y dy dx"; the inner limit y/2 forces an inner x-integration, so read as dx dy (gives the keyed 7/6).
- n=129: numerator printed "z2"; read as z² (matches the key; 2z/|z| would make option (c) right instead).
- n=139: option (b) (x = r sin θ, y = r cos θ) also has |Jacobian| = r, so it is valid if θ is measured from the y-axis; (d) is the standard form and the key.
- n=149: options printed A2, A-2, A-1 (superscripts lost); read as powers.
- n=151: options printed "x2 (x + 3)2 (x - 3)2" etc.; read as powers.
- n=160: misprints fixed ("con nx", "expension", "cofficients"; "is" added before the series).
- n=165: option (d) "is does not contain" → "does not contain"; (c) is strictly true only when A has at least two elements.
- n=170: same question as n=126 (repeated in the paper, options reordered).

#### Count
90 questions written to `questions.jsonl` (n = 91–180).

### Independent check

#### DSSSB PGT 2026, questions 101–190: check of 23 November 2026

**Paper:** DSSSB PGT Mathematics, CBT of 13 April 2026, shift 1 (`papers/dsssb-pgt-2026-0413-s1/paper.pdf`, untrusted; nothing in it was run). Only the board's response sheet was used (pages 112–144: Discipline1 Q.1 to Discipline5 Q.10), never the coaching site's typed copy.
**Checked file:** `pyq/dsssb-pgt-2026-a/questions.jsonl` (copied to `work/orig.jsonl`); corrected file `questions.checked.jsonl` in this folder.

##### Count
- 90 questions checked, n = 1–90 (overall Q101–Q190), all level PGT.
- 88 stay in the quiz; **2 dropped** (`"drop": true`): n = 4 and n = 64.

##### How it was checked
- Every question was cropped from the page at zoom 2.5 and read; 46 question/option images that the page clips in scroll boxes were extracted at full size (composited with their masks) and read in full; clipped text was taken from the PDF text layer.
- Official key: the option label printed in green (colour 0x40c64b; the others are red). Exactly one green option in each of the 90 questions; it agrees with the transcriber's `key` in all 90.
- I solved every question from the page before opening the transcriber's answers, then compared.

##### Changes made
| n | What was wrong | What it is now |
|---|---|---|
| 4 | The transcriber changed the printed condition "x ≤ 3" to "\|x\| < 3" to make the question answerable. As printed the set is infinite and no option is right; the key (a) needs a condition such as −3 < x < 3, while a lost square (x² ≤ 3, a lost exponent like those elsewhere in this paper) would give (b). The intended condition is a guess. | **Dropped.** `q` restored to the printed "x ≤ 3"; solution, notes, fact and flag rewritten to say why; `answer` 0 (= key). Option (c) "{01,2}" still read as {0, 1, 2}. |
| 64 | Kept with answer (c) although it has two defensible answers: same orientation as the first ellipse gives a/b = 4/5 (c, key); major axis along x (a > b, the usual convention) gives 5/4 (d). Both are options and the question does not fix the orientation. | **Dropped.** Solution works both cases; notes, fact and flag rewritten; `answer` 2 (= key). |
| 5 | Note (a) compared −1/g(0) with g⁻¹(1) instead of g⁻¹(0). | "Check a = 0: g⁻¹(0) = 1 (since g(1) = 0), but −1/g(0) = −1." |
| 28 | The flag explains that (b), printed 15.5^(1/3), would equal (a) if the full stop meant multiplication, but the solution did not say so. | One sentence added to the solution: 3·25^(2/3) = 15·5^(1/3), and how (b) is printed. Answer (a) unchanged. |
| 37 | Solution did not mention that options (c), (d) are printed "553", "552". | Sentence added to the solution (exponents lost, as in other options of this paper). Answer (d) unchanged. |
| 62 | The example "θ = 120°: (√3/2, −1/2)" came right after "the point (cos θ, sin θ)", so it read as the point's coordinates (which are (−1/2, √3/2)). | Now "(sin θ, cos θ) = (√3/2, −1/2), signs (+, −)". |
| 78 | Note (b) "(that is sin⁻¹ reversed)" was confusing (sin⁻¹ has range [−π/2, π/2], not R). | "Domain and range swapped." |

No other transcription errors found: questions and all four options of the 88 kept questions match the page (word for word apart from the transcriber's flagged spelling fixes in n = 9, 33, 79, the stray word "Answer" removed in n = 30, and n = 12 (c) where the page has a colon before "x ∈ N", written as a comma). Topics: all checked against `topics.txt`; none changed.

##### Transcriber's 10 flags (read after my own answers)
- Agree: n = 9, 30, 33, 79 (spelling/stray word), 58 (options "y=x4", "y=x2" read as x⁴, x²), 37 (options "553", "552" read as 55³, 55²: a fair reading of lost exponents, same pattern as n = 58; the sum is 55² = 3025 = key), 68 (graphs described in words; I checked the four full-size graphs: cos x, cos 2x, sin 2x, sin x, so the descriptions are right), 28 (kept, see below).
- Disagree: n = 4 (the fix invents part of the question; dropped) and n = 64 (two defensible answers; dropped).

##### My answers vs the official key
- Agree in all 88 kept questions (n = 37 under the lost-exponent reading).
- n = 4: as printed no option is correct; the key (a) fits only a guessed condition. Dropped.
- n = 64: the key (c) is one of two defensible answers; (d) is right under the usual a > b convention. Dropped.

##### Verification by script
- `work/verify_ck.py` (sympy 1.14 + brute force) recomputes **79** answers independently from my reading of the page (permutation and set enumeration, sympy solve/expand/limit/summation/diff/integrate, divisor functions, numeric triangles, vector cross/dot products, line and distance checks): **0 mismatches**. It also computes both readings of n = 64 (4/5 and 5/4) and confirms that 15·5^(1/3) = 3·25^(2/3) in n = 28.
- Not scripted: n = 7, 13, 14, 30, 44, 51, 74, 78, 89 (definitions and concepts), and n = 4 (no correct option as printed).
- `work/fmt.py`: 90 valid JSON lines, n = 1–90 in order, 4 options and 4 notes each, answer 0–3, topic ids valid, even `$` count, balanced braces, no `$$` in questions or options, `$$` only on its own line in solutions, no `align`, no rupee sign, no `\,'`. Only lines 4, 5, 28, 37, 62, 64, 78 differ from the transcriber's file.

##### Left doubtful (kept)
- n = 28: options (b)–(d) print a full stop where (a) has a centred dot. Read literally (decimals) only (a) is right; if the stops meant multiplication, (b) 15·5^(1/3) would equal (a). Kept, because the quiz shows $15.5^{1/3}$ as a decimal; flag and solution say it.
- n = 37: depends on reading "553", "552" as 55³, 55² (no option is right if read literally).
- n = 86: (c) 2(1 + x²) is also, strictly, an integrating factor (any constant multiple is); (a) is the standard IF e^(∫P dx) and the key. Note (c) says so.
- n = 65 and n = 79: keyed values 61.15 cm and 39.4° are roundings (192/π ≈ 61.12 with π = 3.14159; 61.15 with π = 3.14).
- n = 44: "Third Principle of Induction" is book-specific naming; (a), the strong-induction hypothesis, is the only defensible option.

#### DSSSB PGT 2026, questions 191–280: check of 23 November 2026

Paper: DSSSB PGT Mathematics, CBT of 13 April 2026, shift 1 (`papers/dsssb-pgt-2026-0413-s1/paper.pdf`), board's English response sheet, pages 144–178 (Discipline5 Q.11 to Discipline9 Q.20). Overall Q191–280 = n 91–180.
Checked file: `pyq/dsssb-pgt-2026-b/questions.jsonl` (copied here as `questions.orig.jsonl`). Output: `questions.checked.jsonl`.

**Questions: 90** (n = 91–180, all maths, level PGT). **89 kept, 1 dropped (n = 103).**

##### How it was checked
- Pages 143–178 rendered by me with PyMuPDF. Because some question images sit in scroll boxes, I also rebuilt every page from its text spans and the *full* embedded images (placed by their transform matrix, not the clipped bbox) and read those renders (`rebuild.py`, `img/r*.png`). On the original pages 36 question-stem images are clipped by the scroll box at x ≈ 362 pt (`clipped.py`). Most clipped are n = 95 and 96, whose full images run to x = 572 and 752. Every stem was read from the full image; the full images of n = 95, 96 and 178 were also viewed one by one.
- Official key: the option in green (colour 0x40c64b) with the green tick image, read from the text layer for every question and confirmed on the renders (including the five questions whose "Q." label is printed vertically: n = 129, 132, 175, 178, 179).
- Every question and all four options were compared word for word with the transcription; I solved each one before looking at the transcriber's answer.

##### Transcription
No transcription errors found: every question, option, number, sign, limit, matrix entry and the option order match the paper. The transcriber's misprint fixes (n = 92 missing comma, 99, 127, 129, 149, 151, 160, 165) are fair and flagged.

##### Answers
- My answers agree with the official key on 89 questions; the transcriber's `answer` and `key` fields equal the board's key everywhere (no answer changes).
- **Disagreement with the key: n = 103.** Marks 0–4 with frequencies 1, 4, 5, 10, 8: N = 28, mean 2.714, variance 1.276, SD 1.129 (sample variance 1.323, sample SD 1.150). The SD asked for (1.1 to one decimal) is not an option; the key (b) 1.3 is the variance. Reading "standard deviation" as "variance" would rewrite the question, not fix a misprint, so by the drop rule the question has no correct option: **`"drop": true`**, `answer` left at the key (b), reason in `flag` and solution. The other options (3.3, 5.3, 7.3) exceed half the range, so they are impossible SDs.

##### Changes made
| n | what was wrong | what it is now |
|---|---|---|
| 103 | kept (b) as "intended answer" although no option is the SD | `drop: true`; solution, flag and notes say no option is right and that the key 1.3 is the variance |
| 127 | solution did not mention that the paper prints `y dy dx` | solution opens with the printed form and why it is read as `dx dy` (inner limit y/2) |
| 129 | solution did not mention the printed "z2" | solution says the numerator is printed "z2", read as z²; read literally as 2z/abs(z) option (c) would be right; flag says the same |
| 139 | flag said (b) "is also valid", which reads like a second answer; no reason in the solution | solution explains that with r, θ the usual polar coordinates (b) evaluates f at the mirror point in y = x, so only (d) is right; notes for (b), (c) and the flag reworded |
| 144 | note for (a) said "uses the powers themselves" (that is (b)); note for (d) empty | (a): adds 1 to only one power; (d): adds 2 to the second power, and would need Γ(5) |
| 155 | solution silent on the stated domain [−1/2, 1/2] while the options ask about the period | one sentence: the formula defines f on all of ℝ, the period refers to that |
| 165 | the one-element case was only in the flag | solution now says that for a one-element A, S is the trivial group (the question tacitly excludes it) |
| 170 | flag said "options in a different order" | "with a different set of options" (n=126: −2πi, −πi, πi, 2πi; n=170: 2πi, −πi, 4πi, πi) |

##### Script checks
- `mycheck.py`: **66 answers checked by script** (sympy, numerics, brute force): 91–100, 106–109, 111–115, 117–124, 126–130, 132, 134–151, 153, 155, 156, 159–162, 167–172, 177, 178. All agree with the key. n = 103 was also computed by script (to show no option is the SD); n = 164 only restated.
- The remaining 22 are definitions/theory, checked by reasoning: 101, 102, 104, 105, 110, 116, 125, 131, 133, 152, 154, 157, 158, 163, 165, 166, 173, 174, 175, 176, 179, 180.
- `fmtcheck.py`: 90 lines of valid JSON, n = 91…180 in order, 4 options and 4 notes each, `answer`/`key` 0–3, topic ids exist in topics.txt, even `$` counts, no `$$` in questions or options, no `\displaystyle`, align, rupee sign or `\,'`. All LaTeX commands used are KaTeX-supported.

##### Left doubtful (kept, with flags)
- n = 127, 129: the readings ("dx dy"; "z2" = z²) are the only ones that give an offered option, and both agree with the key. The alternatives (7/24; 2z/|z| → option (c)) are stated in the flags.
- n = 139: (b) is a correct change of variables only if θ is measured from the y-axis. With the usual polar meaning of r, θ only (d) is right. Kept, not dropped.
- n = 165: (c) needs A to have at least two elements (for a one-element A, (b) would hold). This is the standard textbook intent. Kept.
- n = 155: the period is about the formula's extension beyond the stated domain [−1/2, 1/2]. 2 is also a period; "period" is taken as the least period, 1.
- n = 170 repeats the integral of n = 126 (different options). Both kept; the caller may want to show only one.
- n = 176 (stochastic calculus): the keyed wording "To provide the complex financial instruments and risk management" is clumsy but clearly the only sensible option.
- n = 122: options (a) y′ = 2yx and (b) y′ = 2xy are identical. Both are wrong, so this does no harm.
- n = 161 is a loop-tracing (programming) question set in the maths section; kept as in the paper.

## DSSSB PGT Mathematics 2025 (21 July, shift 1)

- Source: DSSSB PGT Mathematics (post code 805/23), computer-based test of 21 July 2025, shift 1: the mathematics section (questions 101 to 280) of the board's response sheet as re-shared after the exam, with the board's draft-stage answer key.
- In the app: `data/mq/dsssb-pgt-2025.json`, 172 questions; full mock 45 seconds a question, negative marking 0.25.

### Transcription and first solution

### DSSSB PGT Mathematics (post code 805/23), CBT of 21 July 2025, shift 1: part A (n = 1–90)

#### Source
- File: `papers/dsssb-pgt-2025-0721-s1/paper.pdf` (158 pages, a coaching-site compilation; untrusted, nothing in it was run).
- Pages 2–65 are the site's own typed copy and answer table (third-party). Used only to cross-check readings (e.g. n = 10, 12, 48, 56); never the source.
- Pages 66–157 are the board's official response sheet (English medium). Everything here is transcribed from it.
- The response sheet restarts at Q.1 in each section; maths is "Discipline1" to "Discipline9". This part covers Discipline1 Q.1 to Discipline5 Q.10, i.e. overall Q101–Q190, recorded as `n` = overall − 100 = 1–90.
- Level "PGT" for all.

#### Page map (response sheet)
| PDF pages | Section | n |
|---|---|---|
| 99–103 | Discipline1 | 1–20 |
| 104–109 (top) | Discipline2 | 21–40 |
| 109–114 (top) | Discipline3 | 41–60 |
| 114 (bottom)–119 | Discipline4 | 61–80 |
| 120–123 (top) | Discipline5 Q.1–10 | 81–90 |

#### Skipped
- Response-sheet pages 66–98: Mental Ability and Reasoning, General Awareness, Numerical Aptitude and DI, English, Hindi (overall Q1–Q100): not maths.
- Discipline5 Q.11 onward (overall Q191–Q280) belongs to the other half of this paper (another agent). Teaching Methodology (from page 152) is not maths.

#### How it was read
- Pages rendered with PyMuPDF at zoom 1.8 (`render.py` → `img/`), zoomed crops where needed (`crop.py` → `crop/`).
- 32 question/option images on pages 99–123 reach past the scroll box (most show a scroll bar and are cut off); all were extracted at full size (`extract.py` → `mont/clip_*.png`) and read from there. PyMuPDF reports one xref for equal-sized small images on a page (`imgs.py` lists them), so small option images were always read from the page render, never from extracted copies; none of the clipped images shares its size with another image on its page.
- Official key: the correct option carries a green tick image (16×16) and a green label (colour 40c64b); the others a red cross (31×21) and red label. `keys.py` → `keys.jsonl` reads both for every question: all 90 have exactly four icons, one tick, and the green label agrees with the tick (Discipline3 Q.12, n = 52, has its "Q.12" label stacked in a narrow cell; handled in the parser). Confirmed on the page images. As a consistency check only, all 90 also agree with the compilation's own answer table.

#### Flags (11)
- n=10: option (c) printed "-625120"; read as (625, 120), the reversed pair (wrong either way).
- n=11: misprint fixed, set B printed {1.2.3}; read as {1, 2, 3}.
- n=20: spelling "infinte" corrected to "infinite".
- n=22: option (a) printed "If and b are distinct"; missing "a" restored.
- n=35: GM² = AM·HM holds for two numbers; "a set of numbers" read as two numbers (intended reading; key 2).
- n=37: typo "FInd" corrected.
- n=48: stray "1" after a^(n−2) in options (a) and (d) dropped; the odd phrase "second principle of number theory" kept as printed.
- n=56: duplicated phrase ", then which of the following is correct" removed.
- n=57: some modern statements of Peano's axioms start at 0 (option d); the key follows the version starting at 1.
- n=60: paper prints "r < 1"; the needed (intended) condition |r| < 1 written.
- n=72: loose wording; cosec x on (0, π) is a U-shaped arc with vertical asymptotes, not a true parabola. Key "Parabolic form" accepted in that sense.
- Minor, not flagged: n=6 trailing "are" dropped from an ungrammatical sentence; n=12, 70, 84 vectors written with hats; n=81 frequency table written inline; n=69 the relation needs cosec A > 0; n=85 k is in fact in the open interval (0, 4); n=86 direction cosines are fixed only up to an overall sign.

#### Answer vs key
- My worked answer agrees with the official key in all 90 questions.

#### Verification
- `verify.py` recomputes 84 of the 90 answers a second way (brute force over permutations, relations and residues; sympy expand/solve/summation/limit/totient/cross products; numeric checks on sample triangles, functions and APs): 0 mismatches. A few are only light restatements (n = 17, 45, 65, 79, 80, 84).
- Not scripted (definitions/concepts): n = 3, 20, 46, 57, 72, 82.
- `build.py` loads every line back with `json.loads`, checks n = 1..90 in order, 4 options and 4 notes each, distinct options, topic ids against topics.txt, balanced `$`, braces and \left/\right, no `$$` outside solutions, no rupee sign or `\,'`.

#### Count
- 90 questions written to `questions.jsonl` (n = 1–90).

#### Files
- `questions.jsonl`, `log.md`; data `qa.py` (1–30), `qb.py` (31–60), `qc.py` (61–90); `keys.py` → `keys.jsonl`; `build.py`, `verify.py`; helpers `sections.py`, `spans.py`, `render.py`, `crop.py`, `extract.py`, `imgs.py`, `typed.py` (→ `typed.txt`); images in `img/`, `mont/`, `crop/`.

### DSSSB PGT Mathematics (post code 805/23), CBT 21 July 2025, shift 1 — part b

- Source: `papers/dsssb-pgt-2025-0721-s1/paper.pdf`, the board's official response sheet (English), pages 123–152.
  The coaching site's typed copy (pages 1–65) was used only to confirm numbering (its Q.205, Q.230, Q.259, Q.270 match n = 105, 130, 159, 170). Nothing was transcribed from it.
- Range: overall Q191–Q280 = Discipline5 Q.11 … Discipline9 Q.20, written as n = overall − 100 = **91–180**. That is 90 questions, all maths, level PGT.
- Skipped: nothing inside the range. Teaching Methodology (overall Q281–300, from page 152) is outside the brief and was not transcribed. Discipline5 Q.10 (n = 90) and everything before it belong to part a.
- Question and option images: most questions are images. They were read from the full images in the PDF's text dictionary: each is a black base image plus a soft mask, composited onto white (`extract.py`). This also recovers the parts cut off by the scroll boxes, e.g. n = 96, 102, 162. Montages are in `mont/`.
- Key: the option whose label text is green (colour 0x40c64b in `get_text('dict')`). For all 90 questions it was cross-checked against the page layout: the green-tick icon sits on the green option and red-cross icons on the other three (`tickcheck.py`, 0 mismatches). It was also checked by eye on the rendered pages, including the three disputed questions 105, 130 and 162.

#### Answers that differ from the key (3)
- **n = 105** (variance of wages after a bonus of one month's salary): key (d) 6.7. A bonus of one month's salary doubles each wage, so the variance is ×4 = 26.8, option (a).
- **n = 130** (∫₀³∫₀^{2z}∫₀^{yz²} y dx dy dz): key (d) 216. The integral as printed is 324, option (c). Checked with sympy and against the zoomed image.
- **n = 162** (cofinite topology on ℝ, S₁ = {0,1}, S₂ = {0}): key (d) "both connected". S₁ inherits the discrete topology, so it is disconnected. Option (a) is correct.

#### Other flags (answer = key)
- n = 96: the data are inconsistent (sin²(π/3)+sin²(π/6)+sin²(π/4) = 3/2 ≠ 1). Option (c) follows the standard rule.
- n = 102: option (a) has an inner ±. It is still the only possible choice.
- n = 103: options (a) and (d) are the same line (direction ratios 2:4:2 = 1:2:1). The key is (a).
- n = 106: option (c) (−3,−4,4) is also a valid set of direction ratios. The key is (d) = B − A.
- n = 125: no correct option. The inequality gives x ≥ 1/2. The key (b) x ≥ 4/5 comes from a slip; the answer is set to (b).
- n = 129: no option is exactly right. x³ = Σ(−1)ⁿ(12/n³ − 2π²/n) sin nx. Option (d), the key, has the right form only. The answer is set to (d).
- n = 170: depends on the convention. With normal = T₄ (includes T₁) the answer is (c), the key. If "normal" omits T₁, the space is vacuously normal, which makes it (a).
- n = 139, 146: the modulus bars of |z| = 4 and |z| = 5 were missing in the image and have been restored.
- n = 159: option (c) is printed as "45724" in the official sheet (a spreadsheet date code). Kept as printed.
- Misprints corrected: n = 91 "deccreasing"; n = 148 "fouries"; n = 162 "conneceted"; n = 165 "operationis"; n = 170 "housdorff"; n = 176 "Runga".

#### Checks
- `build.py`: 90 rows, n = 91…180 in order with none repeated, 4 options and 4 notes each, topic ids all in topics.txt, even `$` counts, no rupee sign, no `\,'`, no `\displaystyle`, no `$$` in any question. The file reloads line by line as JSON.
- `fmtcheck.py`: there are 1098 maths segments. None contains a non-ASCII character, and no backslash command appears outside maths.
- `verify.py`: **84 answers were recomputed by script** (sympy, numerical contour integrals, brute force) and all 84 agree with my answer. These include the three that differ from the key (105, 130, 162). For n = 103 the script finds two matching options, which is the flag above.
  The script also confirms the no-correct-option flags: for n = 125 the solution set is [1/2, ∞), and for n = 129 the true bₙ (7.74, −8.37, 6.14) differ from option (d) (18.44, −13.93, 9.87). For n = 170 it shows the space is not regular, not T₁, and vacuously normal without T₁.
  Not scripted: n = 115 (a definition), 163, 169 and 171 (settled by the counterexamples in the solutions), and 125 and 129 (no correct option).
- Count: 90 questions written to `questions.jsonl`.

### Independent check

#### DSSSB PGT 2025, questions 101–190: check of 23 November 2026

Paper: DSSSB PGT Mathematics (post code 805/23), CBT of 21 July 2025, shift 1. Source: the board's response sheet in `papers/dsssb-pgt-2025-0721-s1/paper.pdf`, pages 99–123 (Discipline1 Q.1 to Discipline5 Q.10). `n` = overall question − 100. The coaching site's typed copy (front pages) was not used.

Input checked: `pyq/dsssb-pgt-2025-a/questions.jsonl` (copied to `work/orig.jsonl`; the transcriber's folder was not touched).
Output: `questions.checked.jsonl` (90 lines, n = 1–90 in order, none twice; **88 kept, 2 dropped**: n = 57 and n = 72, each with `"drop": true` and a flag starting "Dropped").

##### How the check was done
- Rendered pages 99–123 with PyMuPDF (zoom 1.6; crops at zoom 3–8 for exponents and signs) and read every question and all four options against the transcription.
- 22 question images on these pages are cut off by scroll boxes (n = 8, 11, 13, 23, 24, 28, 31, 32, 37, 38, 61, 62, 65, 70, 75, 77, 78, 83, 85, 87, 88, 89). I extracted each embedded image at full size (composited on white, since they carry an alpha mask) and read the full text from it.
- Official key: the green tick is one 16×16 image per question. A script located each tick and read the option label next to it; the result matches my reading of the page images for all 90 questions and the transcriber's `key` for all 90.
- I solved all 90 questions before opening the transcriber's answers. My answers agree with the transcriber's and with the official key in all 90 questions.
- Script checks (`work/verify.py`, sympy, brute force and arithmetic): **76 of the 90 answers** recomputed, 0 mismatches. A few of these are light arithmetic restatements (n = 62, 65, 68, 78, 84). Not scripted (definitions or concepts): n = 3, 11, 17, 20, 33, 38, 45, 46, 57, 60, 72, 74, 80, 82.

##### Transcription
- I compared every stem and option with the page and found no transcription error: digits, signs, exponents, matrix and vector entries, and option order all match.
- I accepted the transcriber's small edits: n = 6 (the trailing "are" dropped), 20 ("infinte"), 22 (missing "a" in option (a)), 37 ("FInd"), 47 ("add upto ... ." made a question), 56 (duplicated phrase), 11 (B = {1.2.3} read as {1, 2, 3}), 48 (stray "1" after $a^{n-2}$ in options (a) and (d)), 10 (option (c) "-625120" read as (625, 120)), 60 ($r<1$ written $|r|<1$), and vectors with hats in n = 70 and 84.
- n = 52, option (b): the image shows $x^p$ followed by a small raised minus and a full-size 1, so it could be $x^p-1$ or $x^{p-1}$. I kept the transcriber's $x^p - 1$. Both readings are false (and $x^{p-1}$ is already option (d)), so the answer is unaffected.

##### Changes made (7 lines)
- **n = 57 (Q157): dropped. Two defensible answers.** "According to Peano's axioms, the first natural number is". Peano's original 1889 form (and the notes page tp-01-09) starts at 1, which is option (b) and the key. His later form, used by most modern texts, starts at 0, which is option (d). This same paper, in Q146 (n = 46), treats "Zero is a natural number" and "Zero is not the successor of any natural number" as Peano axioms, so its own convention points to (d). I rewrote the solution, notes, fact and flag. `answer` stays at (b), the key.
- **n = 72 (Q172): dropped. No correct option.** "The graph of cosec(x) from x = 0 to x = π is". The graph is a U-shaped arc with vertical asymptotes at 0 and π. It is not a parabola, which has no asymptotes, nor any conic, nor a line. The key "Parabolic form" only describes the U shape loosely, and "Hyperbolic form" would be just as loose, since near 0 the curve behaves like $y = 1/x$. I rewrote the solution, notes, fact and flag. `answer` stays at (b), the key.
- n = 35: kept (key (d), 2). The solution now proves $\text{AM}\cdot\text{HM} = \text{GM}^2$ for two numbers. It also shows that two such numbers exist ($18 \pm 12\sqrt2$) and says that for three or more numbers AM and GM do not fix HM, so "a set of numbers" is read as two numbers. I rewrote the flag (it had non-LaTeX symbols) and added a note for option (b).
- n = 46: kept (key (b)). The solution now says that the options use the form of Peano's axioms that starts at 0 (Peano's original list starts at 1), and that (b) is not an axiom in either form. Notes (a) and (d) now name that form.
- n = 60: the solution now says why the printed "r < 1" must be read as $|r| < 1$ (for $r \le -1$ the sum diverges). I put the flag's condition in LaTeX.
- n = 69: the solution and notes now say what the other options give: (a) and (d) hold only where $\cot A = 0$, and (b) never holds.
- n = 81: the solution now says that this is the SD with divisor N; the divisor N − 1 gives 11.46, which is not an option.

##### Answer vs official key
- Kept questions: answer = key in all 88.
- Dropped questions: n = 57, where the key (b) is one of two defensible answers, and n = 72, where the key (b) is not correct as mathematics.

##### The transcriber's 11 flags
- n = 10, 11, 20, 22, 37, 48, 56: agreed; the flags are unchanged.
- n = 35: kept with the two-number reading (above).
- n = 57: changed to a drop (above).
- n = 60: kept with the $|r|<1$ reading (above).
- n = 72: changed to a drop (above).

##### Topics, solutions, format
- Topic ids: all 90 exist in topics.txt, and each is a sensible page; none changed.
- Solutions, facts and notes: I checked every line and found no wrong step. The 7 lines above are the only content changes.
- Format (`work/apply.py`): every line is valid JSON with four options and four notes, `answer` and `key` 0–3, level PGT, and distinct options. Every string has an even number of `$`, balanced braces, no `$$` in stems or options, no align, no `\displaystyle`, no rupee sign, no `\,'`, and no non-ASCII character inside math. All LaTeX commands used are supported by KaTeX (`vmatrix` is the only environment). The file was reloaded after writing.

##### Left doubtful
- n = 35 is kept on the two-number reading. It is the next candidate for dropping if you want no exposure to the wording "a set of numbers".
- n = 46 is kept, but it relies on Peano's form starting at 0. In the form starting at 1, options (a) and (d) would also be "not axioms", although (b) is the only option that is not an axiom in both forms.
- n = 85: $k$ actually lies in the open interval $(0,4)$; the key [0, 4] is the only option that contains every value. n = 86: the key is one of the two sign choices for the direction cosines. Both are said in the solutions.

#### DSSSB PGT 2025, questions 191–280: check of 23 November 2026

Paper: DSSSB PGT Mathematics (post code 805/23), CBT of 21 July 2025, shift 1. Source: the board's response sheet in `papers/dsssb-pgt-2025-0721-s1/paper.pdf`, pages 123–152 (Discipline5 Q.11 to Discipline9 Q.20). `n` = overall question − 100, so n = 91–180. The coaching site's typed copy (front pages) was not used.

Input checked: `pyq/dsssb-pgt-2025-b/questions.jsonl` (copied to `questions.orig.jsonl` here; the transcriber's folder was not touched).
Output: `questions.checked.jsonl` (90 lines, n = 91–180 in order, none twice; **84 kept, 6 dropped**: n = 96, 103, 106, 125, 129, 170, each with `"drop": true` and a flag starting "Dropped").

##### How the check was done
- `work/mont2.py` walks pages 120–152, splits them into questions by the "Q.k" labels and the section headers, and composites every question and option image (black base image plus soft mask) onto white at full resolution. This also recovers the parts hidden by the scroll boxes. One montage per question is in `work/img/q<n>.png`. I read all 90 montages and compared each stem and all four options with the transcription. For the text questions (tables in n = 94, 111, 114, 141, and others) I also checked the raw text spans and their positions.
- Official key: in every question exactly one option label is green (0x40c64b), and the 16×16 tick icon sits on the same label (`work/mont2.py`, 0 mismatches). It agrees with the transcriber's `key` in all 90.
- I solved all 90 questions from the images and wrote my answers down (`work/mine.py`) before opening the transcriber's answers and solutions. (I had seen the transcriber's log.md, with its list of flags, when I first opened the folder.) My answers agree with the transcriber's in every question that has a correct option.
- Script checks (`work/verify.py`: sympy, numerical contour integrals, brute force, arithmetic): **81 of the 90 answers** were recomputed, with 0 mismatches. These include the three answers that differ from the key (105, 130, 162) and the two-correct-option checks for 103 and 106. The script also gives diagnostics for the drops: for n = 125 the solution set is [1/2, ∞); for n = 129 the true b_n (7.74, −8.37, 6.14) differ from option (d) (18.44, −13.93, 9.87); for n = 170 a brute-force search shows the space is not regular, is (vacuously) normal without T₁, and is not T₁. Not scripted: n = 96 (one line of arithmetic, in the solution), 115, 163, 166, 169, 171 (definitions, or settled by the counterexamples in the solutions), and 125, 129, 170 (only the diagnostics above).

##### Transcription
- I found no transcription error. Digits, signs, exponents, limits, matrix entries and the order of the options all match the page images.
- I accepted the transcriber's small edits: misprints corrected in n = 91 ("deccreasing"), 148 ("fouries"), 162 ("conneceted"), 165 ("operationis"), 170 ("housdorff"), 176 ("Runga"); the modulus bars of |z| = 4 (n = 139) and |z| = 5 (n = 146), missing in the images, restored; "fourier" capitalised; bar-style unit vectors in n = 101 written with hats.
- n = 159, option (c) is printed "45724". That is a spreadsheet date code (8 March 2025), so the option was probably the fraction 3/8 or 8/3. It is kept as printed. The answer (d) 4 is not affected, and I changed the note for (c) to say this.

##### Changes made (12 lines)
- **n = 96: dropped (impossible data).** Angles π/3, π/6, π/4 with the planes XY, YZ, ZX would give l² + m² + n² = 1/4 + 1/2 + 3/4 = 3/2 ≠ 1, so no such line exists. No misprint repairs it: the same angles taken with the axes also give a sum of 3/2. The solution now says so and that the question is left out. I rewrote the flag and the note for (c). `answer` stays (c), the key.
- **n = 103: dropped (two correct options).** (a) (x−1)/2 = (y−2)/4 = (z+1)/2 and (d) (x−1)/1 = (y−2)/2 = (z+1)/1 are the same line (script: both pass through A and B). I updated the solution, flag and note (a). `answer` stays (a), the key.
- **n = 106: dropped (two correct options).** (c) (−3, −4, 4) = A − B and (d) (3, 4, −4) = B − A are both direction ratios of AB. I rewrote the solution, flag, fact and notes (c) and (d). `answer` stays (d), the key.
- **n = 125: dropped (no correct option).** (6x−5)/2 + 1 ≥ (2x+3)/4 − 1 gives x ≥ 1/2. x = 0.6 satisfies it, but the key (b), x ≥ 4/5, excludes it. The key comes from multiplying the −1 by 1 instead of 4. I updated the solution and flag. `answer` stays (b), the key.
- **n = 129: dropped (no correct option).** x³ = Σ(−1)ⁿ(12/n³ − 2π²/n) sin nx. Option (d), the key, has the right form but the wrong coefficients (for n = 1 it gives π³ − 4π ≈ 18.4, not 2π² − 12 ≈ 7.7). I rewrote the solution and flag. `answer` stays (d), the key.
- **n = 170: dropped (two defensible answers, a convention).** For X = {1,2,3}, τ = {∅, {1}, {1,2}, X}, the space is not regular under any definition. It is not Hausdorff and not T₁. Any two non-empty closed sets meet at 3, so it is vacuously normal if "normal" does not require T₁. That makes it (a) "normal but not regular" in texts without T₁, and (c) "neither", the key, in texts where normal and regular spaces are T₁. Both conventions are standard. I rewrote the solution, flag and notes (a)–(c). `answer` stays (c), the key.
- n = 105 (kept, answer (a) 26.8, key (d) 6.7): the solution now says what the key says and why it is wrong.
- n = 130 (kept, answer (c) 324, key (d) 216): the solution now says what the key says and why it is wrong.
- n = 162 (kept, answer (a), key (d)): the solution now says what the key says and why it is wrong.
- n = 117: the note for option (d) was wrong. It said (2.6, 3.6, 4.6) came from the ratio 3:2, but 3:2 gives (2.8, 3.8, 4.8). It now says the option moves 1.6 along each axis, where 2:3 moves 1.2.
- n = 159: the note for option (c) now explains the garbled "45724" (above).
- n = 167: in the fact, `\left[ … \right]` was replaced by plain brackets, so the long formula can wrap on a phone. The formula itself is unchanged.

##### Answer vs official key
- Kept questions: answer = key in 81 of 84. The 3 that differ:
  - **n = 105**: a bonus of one month's salary doubles each worker's wage (x → 2x), so the variance is 4 × 6.7 = 26.8, option (a). The key, 6.7, treats the bonus as the same fixed amount for everyone. That contradicts the wording, since each worker's month's salary is different. If all salaries were equal, the variance would be 0, not 6.7.
  - **n = 130**: the printed integral ∫₀³∫₀^{2z}∫₀^{yz²} y dx dy dz = ∫₀³ (8z⁵/3) dz = 324, option (c), confirmed with sympy. The key is 216. I checked the limits and the integrand on the full image (yz², 2z, 3, y). No obvious misprint gives 216. A sympy search over 980 variants of the integrand and the three limits found only one that does: x up to y²z, y up to 3z and z up to 2, which changes three parts of the integral at once.
  - **n = 162**: the topology is the cofinite topology on ℝ. In it, R∖{1} is open, so {0} is open in S₁ = {0,1}, and likewise {1}. So S₁ is discrete and disconnected, and S₂ = {0} is connected: option (a). The key (d) says "both connected".
- Dropped questions: the key is one of two correct options in n = 103 and 106, and one of two defensible answers in n = 170. It is wrong in n = 125 and 129, where no option is correct. In n = 96 it matches the usual rule, but the data are impossible.

##### The transcriber's flags
- n = 91, 139, 146, 148, 165, 176: agreed; flags unchanged.
- n = 102 (option (a) has an inner ±): kept. (a) is the only option that contains ±(½ î + (√3/2) ĵ); (b) is at −π/6 and (c), (d) are not unit vectors. If "inclined at π/3" is read as the acute angle with the axis, the inner ± is even exact.
- n = 105, 130, 162: agreed; kept as answer ≠ key (above).
- n = 96, 103, 106, 125, 129, 170: changed from "kept with a flag" to drops, under the drop rule.
- n = 159: agreed; note improved.

##### Topics, solutions, format
- Topic ids: all 90 exist in topics.txt, and none was changed. The list has no page for Fourier series, residues, numerical methods or general topology. For those questions the transcriber's nearest pages are reasonable: tp-07-03, tp-10-06, tp-08-02 and tp-05-03.
- Solutions, facts and notes: I checked every line. Apart from the 12 changes above, I found no wrong step.
- Format (`work/fmtcheck.py`): the file has 90 lines, n = 91–180, and each line is valid JSON. Each has four distinct options and four notes, `answer` and `key` 0–3, level PGT, and a topic from the list. `drop` appears only as `true`, together with a "Dropped" flag. Every string has an even number of `$`, braces and `\left`/`\right` are balanced in every formula, and there is no `$$` in any stem or option. There is no align, `\displaystyle`, rupee sign, `\,'`, or non-ASCII character inside math, and no LaTeX command outside math. `work/widths.py` lists the widest inline formulas. The long ones are chains that KaTeX can break at = or +, so they wrap on a phone.

##### Left doubtful
- n = 104 (variance of 2, 4, 6): kept with 8/3 ≈ 2.67, the key, which uses the divisor n as in school texts. Option (a), 4, is the sample variance with divisor n − 1, and note (a) says so. It is the next candidate for dropping if you want no exposure to the n versus n − 1 question.
- n = 120 (AM ≥ GM "always"): the stem does not say the aᵢ are non-negative. The solution assumes they are, which is the only sensible reading.
- n = 105 is kept with the answer differing from the key (above). I consider the key's reading indefensible, but it is the board's.

## DSSSB PGT Mathematics 2021 (31 July, male)

- Source: DSSSB PGT Mathematics (Male, post code 28/20), computer-based test of 31 July 2021: the mathematics section (questions 101 to 280) of the board's question paper, with the board's answer key.
- In the app: `data/mq/dsssb-pgt-2021.json`, 146 questions; full mock 45 seconds a question, negative marking 0.25.

### Transcription and first solution

### DSSSB PGT Mathematics (Male), post code 28/20, CBT of 31 July 2021: part A

- Source: `papers/dsssb-pgt-2021-0731-m/paper.pdf` (278 pages; a coaching-site re-share of the board's response-sheet question paper, with English then Hindi for each question). It was only read with PyMuPDF; nothing in that folder was run.
- This part covers **Q101–190**, written as `n` = Q − 100 (n = 1–90), level "PGT". **90 questions** are in `questions.jsonl`, n 1–90 in order, none repeated. Every line loads as JSON (checked by `lint.py`).
- Skipped:
  - Q1–100: general sections (mental ability and others), not mathematics.
  - Q191–280: mathematics, but done by the other agent.
  - Q281–300: teaching methodology, not mathematics.
  - The site's ad page (page 2) was also skipped.

#### Method
- `keys.py` reads the official key from the colour of each option label: 0x008000 (green) is correct and 0xFF0000 (red) is wrong. It checks both the English and the Hindi copy, and they agree for every question. I also checked every key against the green tick on the rendered pages (`crop/m*.png`).
- `crop.py` renders the English copy of each question at zoom 2. `text.py` dumps the text layer (the full wording of lines cut off at the page edge). `rawimg.py` pulls the embedded formula images, which I used to check the doubtful ones.
- `build.py` writes `questions.jsonl`, `verify.py` recomputes the answers and `lint.py` checks the format.

#### Board key
- **Dropped by the board** (the page shows "discrepancy is found in question/answer … ignored for all candidates" and no green option): Q108, Q109, Q113, Q118, Q156, Q172, Q183, Q187, Q188. For these, n = 8, 9, 13, 18, 56, 72, 83, 87, 88 have `key` null.
- **My answer differs from the board key** in 3 questions:
  - Q110 (n 10): the key says (d) "Invertible". In fact $x/(1+x^2)$ is onto $[-\frac12, \frac12]$ but not one-one, so the answer is (a).
  - Q132 (n 32): the key (a) "convergent but not absolutely" is right for $\int \sin x/x$. The printed integrand is $|\sin x|/x$, which diverges, so the answer is (b).
  - Q148 (n 48): the key is (a) $+45$, but $x = \pm45$ both make a G.P., so the answer is (d).
- Every other answer agrees with the key.

#### Verification
`verify.py` checks **84 of the 90** answers a second way, and all 84 agree with `answer`. The methods are:
- brute force over all subsets of a 5-set;
- a centraliser count over all of $S_6$;
- counts of maps and surjections;
- sympy for roots, integrals, dsolve, discriminants, ranks and determinants;
- numerical minimisation for the inequality questions;
- random tests for Q155, Q156, Q160, Q184 and Q187.

Six questions are pure theory and were checked by hand only: Q137, Q138, Q170, Q176, Q179 and Q182. For Q182, the script does check the counter-example that is cited in its flag.

#### Flags (24)
- n 4 (Q104): printed "F:" once and $f^1$ for $f^{-1}$; normalised.
- n 7 (Q107): "systematic" corrected to "symmetric" in the options.
- n 8 (Q108), dropped: $fg$ depends on the convention. $f \circ g$ gives (c) and "f first" gives (d). I set answer (c). A stray "A" was removed.
- n 9 (Q109), dropped: as printed ("both injective …"), (c) is trivially true. I used the intended wording ("two mappings with $g \circ f$ injective"), which gives answer (b).
- n 10 (Q110): the key (d) is wrong; the answer is (a).
- n 13 (Q113), dropped: the codomain was printed "[1, 2, 9]"; I read it as $[1, 29]$. Answer (c).
- n 18 (Q118), dropped: $P \subset A$ makes $f^{-1}(P)$ ill-typed. Reading $P \subseteq B$, both (a) and (c) are true. I set answer (a).
- n 32 (Q132): the key (a) is wrong for $|\sin x|/x$; the answer is (b).
- n 40 (Q140): the option "O" is read as 0.
- n 43 (Q143): the question lacks a condition. $3^{-x}+3^{-y} = 4/3^{x+y}$ is $\frac43$ only when $x+y=1$, and 1 when $x=y$. The answer is set to the key, (b).
- n 48 (Q148): the key is $+45$; the answer is $\pm45$, (d).
- n 55 (Q155): (b) $|pq-mn|<2$ is also always true. The answer is the key, (d).
- n 56 (Q156), dropped: (a) and (b) are identical and no option is true. The true result is $|a+b|<|1+ab|$. I set answer (d), the nearest.
- n 59 (Q159): "all are not equal" means 64 is not attained. 64 is still the intended answer.
- n 62 (Q162): the missing "line" was added in options (b) and (d).
- n 66 (Q166): "y'- axis / x'- axis" read as $y$-axis / $x$-axis.
- n 72 (Q172), dropped: option (c) was printed "x(log − 1)"; read as $x(\log x - 1)$. Answer (c).
- n 74 (Q174): (c) $y = x+1$ also solves the equation (it is $c=1$ in $y=cx+c^2$). The answer is the key, (a), the singular solution.
- n 79 (Q179): "Envelop" corrected to "Envelope".
- n 81 (Q181): "involuntary" corrected to "involutory".
- n 82 (Q182): $AB=BA$ is sufficient but not necessary (a counter-example is given in the flag). The answer is the key, (d).
- n 83 (Q183), dropped: $M^2=I$, so $M$ is both involutory and periodic. I set answer (a).
- n 87 (Q187), dropped: rank$(BA) \le 2$, so both 4 and 3 are impossible. I set answer (a).
- n 88 (Q188), dropped: the printed "Adj A = AAᵀ" has no solution. I read it as $A(\operatorname{adj}A) = AA^T$, which gives $5a+b = 5$, (b).

#### Files
`questions.jsonl`, `log.md`. The scripts are `keys.py`, `crop.py`, `text.py`, `rawimg.py`, `stack.py`, `probe.py`, `scan.py`, `build.py`, `verify.py` and `lint.py`. Images and text dumps are in `crop/`, `raw/`, `raw2/`, `keys.json` and `text.txt`.

### DSSSB PGT Mathematics (Male, post code 28/20), CBT of 31 July 2021: part B (n = 91–180)

#### Source
- File: `papers/dsssb-pgt-2021-0731-m/paper.pdf` (278 pages; a coaching-site re-share of the board's question paper with its watermark; untrusted, nothing in it was run).
- Each question appears twice: English copy, then Hindi copy. Questions are numbered Q1–300 straight through.
- This part covers Q191–Q280 (pages 171–263), recorded as `n` = Q − 100 = 91–180. Level "PGT" for all.
- Q101–Q190 belong to part A (another agent).

#### Skipped
- Q1–Q100: general sections (not maths).
- Q101–Q190: maths, but part A's range.
- Q281–Q300 (pages 265–278): teaching methodology, not maths.

#### How it was read
- `keys.py`: for every question copy, finds the "Question Number" header and the option labels "1."–"4." with their text colour (green 0x008000 = official key, red 0xff0000 = other options). Both copies of every question agree. Writes `keys.json` and `copies.json`.
- `crop.py`: renders each English copy (header to the next header, across page breaks) at zoom 2 into `crop/qNNN.png`; the Hindi copies went to `croph/` and were used for the garbled questions (Q204, 208, 209, 210, 228, 247, 248, 217, 246).
- All 90 English crops were read in full; the green tick in every image sits on the option the colour script reported.
- `build.py` holds the transcriptions and solutions and writes `questions.jsonl`; `lint.py` checks JSON, fields, numbering, topics, `$` balance, braces, KaTeX pitfalls (no rupee sign, no thin space before a prime, no \displaystyle).

#### Dropped questions (board note "discrepancy is found in question/answer. So, this question is ignored for all candidates"; no green option; `key` = null)
11 questions: Q193, 196, 197, 199, 211, 219, 246, 250, 253, 267, 268 (n = 93, 96, 97, 99, 111, 119, 146, 150, 153, 167, 168). Each is still transcribed and answered; see flags.

#### Verification
- `verify.py` (sympy, exact arithmetic, brute force): 74 of 90 answers rechecked by script, all OK (e.g. polynomial GCD/LCM, remainders, residues and contour integrals, central-orbit laws via P = h²u²(u + u''), ODE solutions substituted back, basic-solution counts, assignment and game brute force, coin-run probability by enumeration for several (m, n), normal tail, vector algebra, line integral).
- 16 answered by reasoning only (definitions/theory): n = 99, 118, 124, 131–135, 146–150, 164, 169, 179.

#### Answer differs from the board's key (2)
- n=117 (Q217): key (d) "No singularity"; my answer (a): e^(−1/z²) has an isolated essential singularity at z = 0.
- n=147 (Q247): key (d) "Neither 1 nor 2 nor 3"; my answer (a) "Only 1": a one-to-one continuous map of a compact space onto a Hausdorff space is a homeomorphism, hence open. The Hindi text drops "one to one … onto", under which the key would fit.

#### Flags (32)
- n=92: "Two quadratic equations f(x) and g(x)" changed to "Two polynomials" (f is cubic).
- n=93 (dropped): as printed only (a) is false; option (b) "a^m" fixed to α^m.
- n=96 (dropped): correct a = 13, b = 10, in no option; (b) "10 and 13" (reverse order) marked as nearest.
- n=97 (dropped): question is fine; (c) is the only correct option.
- n=99 (dropped): roots are a and b, no option fits; (a) is the answer to the standard (x − a)(x − b) − 1 = 0.
- n=104: "lightning surface area" (mistranslation) written as "surface area".
- n=106: velocity unit printed feet/sec² in all options; corrected to feet/sec.
- n=108: no option exact (average rate −1.463; dv/dP = −1.5 at P = 20); key −1.48 comes from cutting v(20.5) to 29.26; answer = key.
- n=109: wording garbled in both languages; restated as "point of y² = 4x where the abscissa increases twice as fast as the ordinate" (fits options and key (4, 4)).
- n=110: wording garbled ("expectation will increase and decrease"); restated as actual change and differential (0.2208 and 0.22, the key).
- n=111 (dropped): no option fully correct; (d) nearest.
- n=112: integrals printed with a stray box; written as ∮_c.
- n=117: answer differs from key (see above).
- n=119 (dropped): residue is −1, in no option; (a) "1" nearest.
- n=121: "in not" corrected to "is not".
- n=122: point also lies in the closed half space cx ≥ z (d); (a) intended and key.
- n=128: both copies print 2x₁ + 3x₂ ≥ 1, which makes the LP unbounded; changed to ≤, giving the key −2/3.
- n=131: wording "be any usual metric in R" tidied.
- n=132: "A be a metric space" corrected to "A be a subset".
- n=134: B(X, r) corrected to B(x; r).
- n=141: "a, n, t are constant" corrected to a, n, ε.
- n=146 (dropped): (a) and (b) are both incorrect statements; (b) marked. "(X, 3)" read as (X, 𝔗); "Closed subset and compact space" read as "of".
- n=147: answer differs from key (see above).
- n=148: (a) "every co-finite space is infinite" is debatable too; (c) intended and key.
- n=149: "3" read as the topology 𝔗.
- n=150 (dropped): "x_{n0}" fixed to x₀; (c) compact is correct.
- n=153 (dropped): solution is y = cosh(x + a) + b; (b) prints cos, marked nearest.
- n=167 (dropped): last class "10.9 - 12.0" read as 10.0 - 12.0; mean 7.40 (c).
- n=168 (dropped): option (d) "100x" read as 100^x (Poisson, λ = 100).
- n=173: two options true, (a) P ⊥ B and (d) P not ⊥ A (P·A = 1/2); answer = key (a).
- n=174: "work done in a moving particle" read as "in moving a particle".
- n=176: (d) is the exact product; key assumes 4-digit floating-point mantissa, 0.2334E15.

#### Topics
- No notes page covers linear programming, assignment or game theory (n = 121–130): mapped to tp-02-04 (systems of linear equations, basic solutions).
- Complex analysis (singularities, residues, contour integrals, bilinear maps; n = 111–120 except 115): tp-10-06. n=115 (geometric series in z): tp-01-06.
- Numerical errors / floating point (n = 176, 178): tp-01-07; n=177 (relative error of a product by differentials): tp-06-01.

#### Count
90 questions (n = 91–180), numbers in order, none twice; all lines load as JSON.

### Independent check

#### DSSSB PGT 2021, questions 101–190: check of 23 November 2026

**Paper:** DSSSB PGT Mathematics (Male, post code 28/20), CBT of 31 July 2021 (`papers/dsssb-pgt-2021-0731-m/paper.pdf`, 278 pages, untrusted; only read with PyMuPDF, nothing in it was run). English half of each question used; the Hindi half was read for Q143.
**Checked file:** `pyq/dsssb-pgt-2021-a/questions.jsonl` (copied to `work/orig.jsonl`). The corrected file is `questions.checked.jsonl` in this folder.

##### Count
- **90 questions checked**, n = 1–90 (Q101–Q190), all level PGT.
- **76 stay in the quiz. 14 are dropped** (`"drop": true`): n = 8, 9, 13, 18, 37, 43, 55, 56, 72, 74, 82, 83, 87, 88.
  - 9 of these the board cancelled: Q108, 109, 113, 118, 156, 172, 183, 187, 188.
  - 5 more fail the drop rule: Q137, 143, 155, 174, 182.
- None of the cancelled questions could be kept. Each has two correct options, no correct option, or a misprint that has to be repaired first.

##### How it was checked
- `work/crop.py` cut out the English block of each question (pages 88–169) at zoom 2. `work/stack.py` whitened the pink watermark and stacked the blocks. I read every question and all four options from these images.
- **Official key**: the option label in green (span colour 0x008000; the others are 0xFF0000). There is exactly one green option in each of the 81 questions that were not cancelled. The 9 cancelled questions carry the blue note ("… ignored for all candidates") and have no green option. All 90 agree with the transcriber's `key`.
- I solved every question from the page **before** I opened the transcriber's answers, solutions and log, and then compared.

##### Changes made
| n (Q) | What was wrong | What it is now |
|---|---|---|
| 1 (101) | Note (a) called $A \cap \emptyset = \emptyset$ the "identity law". | "Null (domination) law". |
| 8 (108) | Cancelled by the board and kept by the transcriber. Two options fit: $f \circ g$ gives (c) and "$f$ first" gives (d). | **Dropped.** Flag and solution say why. |
| 9 (109) | Cancelled. The transcriber **re-worded** the question: the paper says "be both injective mapping such that gof … is injective", and the transcriber changed it to "two mappings". As printed, (c) merely restates the hypothesis. The intended standard question has answer (b). | **Dropped.** The printed wording is restored. `answer` is 2 (as printed), and the solution, notes and flag explain both readings. |
| 10 (110) | The solution did not say that the key is wrong. | A sentence is added: the key (d) "Invertible" is wrong because $f(2) = f(\frac12)$. |
| 13 (113) | Cancelled. The transcriber **repaired the codomain**: the paper prints "[1, 2, 9]" and the transcriber wrote $[1, 29]$. | **Dropped.** The printed "[1, 2, 9]" is restored. The solution shows the answer (c) under the reading $[1, 29]$ and says why the question is not kept. |
| 18 (118) | Cancelled. $P \subset A$ makes $f^{-1}(P)$ ill-typed; reading $P \subseteq B$, both (a) and (c) are true. | **Dropped.** |
| 32 (132) | The solution did not name the key. The note on (d) was thin. | A sentence is added: the key (a) is the known result for $\sin x/x$ and is wrong for the printed $\lvert\sin x\rvert/x$. The note on (d) is reworded. Answer (b) is unchanged. |
| 37 (137) | Kept with (a), but (b) "f and α are both bounded" is also true, because an increasing α on [a, b] is bounded. The transcriber's own note said so. | **Dropped** (two defensible answers). Solution, note (b) and flag are updated. |
| 43 (143) | Kept with the key. The data do not fix the value $\frac{4}{3^{x+y}}$: $x = 0, y = 1$ gives $\frac43$ (b) and $x = y = \log_3 2$ gives 1 (c). | **Dropped.** The Hindi text has the same wording. |
| 48 (148) | The solution did not name the key. | A sentence is added: the key (a) $+45$ keeps only the positive root. The answer is (d) $\pm45$. |
| 55 (155) | Kept with the key (d). But (b) $\lvert pq - mn\rvert < 2$ is also always true, since $\lvert pq - mn\rvert \le 1$. | **Dropped** (two correct options). |
| 56 (156) | Cancelled. (a) and (b) are printed identically, and no option is always true. | **Dropped.** |
| 59 (159) | Kept correctly, but the solution did not say that 64 is not attained. | A sentence is added: the value is always above 64 and tends to 64 as $a, b, c \to \frac13$, so 64 is the greatest lower bound. The flag is reworded. |
| 72 (172) | Cancelled. The transcriber **repaired option (c)**: the paper prints "y = x(log − 1)" and the transcriber wrote $x(\log x - 1)$. | **Dropped.** The printed option is restored and the note says what it means. |
| 74 (174) | Kept with the key (a). But (c) $y = x + 1$ also satisfies the equation (it is $c = 1$ in $y = cx + c^2$), and the question asks for "a solution". | **Dropped** (two correct options). |
| 78 (178) | The question calls $y = 0$ a "solution", although it does not satisfy $9yp^2 + 4 = 0$. The flag was empty. | A flag is added: $y = 0$ is the cusp locus, and only (d) fits. The answer is unchanged. |
| 82 (182) | Kept with the key (d). But "if and only if" is false: $AB = BA$ is sufficient, not necessary. With $A = \mathrm{diag}(1, 0)$ and $B = \begin{pmatrix}1&1\\0&0\end{pmatrix}$, $AB$ is idempotent but $AB \ne BA$. No option is a true "iff". | **Dropped** (no correct option). The solution is rewritten. |
| 83 (183) | Cancelled. $M^2 = I$, so $M$ is both involutory and periodic. | **Dropped.** |
| 87 (187) | Cancelled. rank$(BA) \le 2$, so both 4 and 3 are impossible. | **Dropped.** |
| 88 (188) | Cancelled. The transcriber **re-worded the condition**: the paper prints "Adj A = AAᵀ" and the transcriber wrote $A(\operatorname{adj}A) = AA^T$. As printed it has no solution ($b = -3$, $5a = 13$, then $25a^2 + b^2 = 178 \ne 2$). | **Dropped.** The printed condition is restored. The solution shows that it has no solution and that the known version gives 5, option (b). |

**Transcription:** no errors in the 76 kept questions. Every stem and all four options match the page, in the paper's order. The exceptions are the transcriber's flagged spelling fixes, which I accept:
- n 4: "F:" and $f^1$ written as $f^{-1}$.
- n 7: "systematic" corrected to "symmetric".
- n 40: the letter "O" read as 0.
- n 62: the missing word "line" added.
- n 66: "y'- axis" read as $y$-axis.
- n 79: "Envelop" corrected to "Envelope".
- n 81: "involuntary" corrected to "involutory".

I also accept two small normalisations: Q111 "commutes" was written "commute", and the stray "A" before "If" in Q108 was removed.

**Topics:** all checked against `topics.txt`; none needed changing. Riemann and Stieltjes questions go to tp-07-04, which lists "Riemann integration". Convergence of improper integrals goes to tp-05-05 (tests of convergence) or tp-07-03.

##### Answers that differ from the official key (all kept, all already found by the transcriber)
- **Q110 (n 10):** the key is (d) "Invertible". In fact $f(x) = \frac{x}{1+x^2}$ maps onto $[-\frac12, \frac12]$ (its extremes are $\pm\frac12$ at $x = \pm1$), but $f(2) = f(\frac12) = \frac25$, so it is not one-one. The answer is (a) "Surjective but not injective".
- **Q132 (n 32):** the key is (a) "convergent but not absolutely", which is the known fact for $\int_0^\infty \frac{\sin x}{x}dx$. The printed integrand is $\lvert\sin x\rvert/x \ge 0$. Over $[k\pi, (k+1)\pi]$ it contributes at least $\frac{2}{(k+1)\pi}$, a harmonic series, so the integral diverges. The answer is (b). Numerically, the integral up to $10\pi$, $100\pi$ and $1000\pi$ is 3.31, 4.77 and 6.24, growing like $\frac2\pi\log N$.
- **Q148 (n 48):** the key is (a) $+45$. But $x^2 = 5 \cdot 405 = 2025$, and 5, −45, 405 is a G.P. with ratio −9. The answer is (d) $\pm45$.

All other kept answers agree with the key.

##### Transcriber's 24 flags (read after my own answers)
- **Agree:**
  - Spelling and misprint fixes: n 4, 7, 40, 62, 66, 79, 81.
  - The board's key is wrong: n 10, 32, 48.
  - Kept with the flag: n 59.
  - Cancelled and two options fit, now dropped: n 8, 18, 56, 83, 87.
- **Disagree: re-worded or repaired a cancelled question.** For n 9, 13, 72 and 88 the transcriber rewrote the question. The printed text is restored and the question is dropped.
- **Disagree: the transcriber's own flag shows the question fails the drop rule, but it was kept.** n 43, 55, 74 and 82 are now dropped.

##### Verification by script (`work/verify.py`; sympy 1.14, mpmath, brute force)
- **69 of the 76 kept answers were checked by script**, and all agree with `answer`:
  - Set identities: brute force over all subsets of a 4-element set.
  - Q111: the centraliser of $(123)(34)$ was counted over all 720 elements of $S_6$. It has 8 elements with either multiplication order.
  - Maps and surjections were counted directly.
  - sympy was used for roots, limits and integrals, `dsolve`, discriminants, exactness tests, ranks and determinants.
  - The inequality questions were checked by random-search minimisation.
  - Q184 used random rational orthogonal matrices (Cayley transform).
  - Q186 used a symbolic 5×5 skew-symmetric determinant.
- **7 were checked by hand only** (theory): Q134, 138, 139, 166, 170, 176 and 179.
- The drop reasons were also checked by script (11 checks, all passed):
  - Q108: both products.
  - Q113: the range under the reading $[1, 29]$.
  - Q143: two attainable values.
  - Q155: (b) and (d) always hold.
  - Q156: no option is always true.
  - Q172: the singular solution.
  - Q174: (a) and (c) both satisfy the equation.
  - Q182: the counter-example.
  - Q183: $M^2 = I$.
  - Q187: rank$(BA) \le 2$ on random rank-2 matrices.
  - Q188: no solution as printed, and 5 in the known version.

##### Format (`work/lint.py`, `work/widths.py`, `work/nonascii.py`, `work/macros.py`)
- 90 lines, n = 1–90 in order, and every line is valid JSON.
- Every question has four options and four notes. `answer` is 0–3, `key` is unchanged from the paper, level is PGT, and every topic is in the list.
- `drop` appears only as `true`, and every dropped line has a "Dropped" flag.
- Every string has an even number of `$`, and there is no `$$` in a stem or option.
- There is no `align`, `\displaystyle`, rupee sign or `\,'`. There is no non-ASCII character inside math and no TeX command outside math.
- Inline formulas: no piece that cannot break is wider than about 22 characters. The long ones are chains that KaTeX wraps at = or +.
- Every kept answer that differs from the key says so in its solution.

##### Left doubtful (kept, with flags)
- **Q132:** option (d) "absolutely divergent" is not a standard term. For a non-negative integrand, a student could argue that it is also "true". I kept (b), the only standard statement, and said so in the note and flag. If you want to be strict, drop it.
- **Q159:** "all are not equal" means 64 is approached but never attained. 64 is kept as the greatest lower bound, which is the key and the only sensible option.
- **Q111:** the printed $\sigma = (123)(34)$ has overlapping cycles, and its product is a 4-cycle, giving 8 (the key). If $(123)(45)$ was intended, the answer would be 6, which is option (d). I kept the literal reading, which agrees with the key.
- **Q137 (dropped)** is a judgement call. It is the standard "definition" question, with (a) as the key. I dropped it because (b) is a true consequence of (a), and a student who picks (b) would lose marks for a true statement.

#### DSSSB PGT 2021, questions 191–280: check of 23 November 2026

Paper: DSSSB PGT Mathematics (Male, post code 28/20), CBT of 31 July 2021, `papers/dsssb-pgt-2021-0731-m/paper.pdf` (untrusted; nothing in it was run).
Range: Q191–Q280, recorded as n = 91–180 (n = Q − 100). Input: `pyq/dsssb-pgt-2021-b/questions.jsonl` (copied here as `orig.jsonl`).
Output: `questions.checked.jsonl` (90 lines, n = 91–180 in order) and this log.

**Count: 90 questions checked; 70 kept, 20 dropped (`"drop": true`).**

##### How the check was done
- `seg.py` renders every English copy myself (header to the next header, across page breaks, zoom 1.8) into `img/qNNN.png`; `seghi.py` renders Hindi copies (used for Q197, 204, 209, 210, 228, 247, 248, 270, 276); `zoom.py` for close-ups (Q194 exponents, Q268 option 4).
- The official key was read again from the option-label colours (`keys_mine.json`): green 0x008000 = key. All 79 keys agree with the transcriber's; the 11 questions with the note "ignored for all candidates" (n = 93, 96, 97, 99, 111, 119, 146, 150, 153, 167, 168) have no green option.
- Every question was solved from the image before the transcriber's answer was read.
- All 90 English images were compared word for word with `q` and the four options. No wrong digit, sign, exponent or option order was found in the transcriber's file. The only text changes below are restorations of the printed wording in dropped questions, which the transcriber had silently repaired.
- `mylint.py`: JSON, field order, four options/notes, answer 0–3, key vs cancelled list, topic ids, even `$`, no `$$` in q/options, braces, no \displaystyle / rupee / `\,'`, every macro KaTeX-supported, inline formulas ≤ about 300 px (long ones split). Clean.

##### Script checks
- `mycheck.py` (sympy, exact fractions, brute force): 56 answers asserted, all pass: n = 91, 92, 94, 95, 97, 98, 100–107, 112–117, 120, 123, 125–127, 129, 137–145, 151, 152, 154–163, 165, 166, 170–172, 174, 175, 177, 178 (e.g. GCD/LCM, remainders, residues and contour integrals, Möbius fixed points and multiplier, assignment by enumeration, game value over a grid of b, central-orbit laws from P = h²u²(u + u''), ODE solutions substituted back for every option of 151, 152, 157, coin runs by enumeration for m ≤ 8, ticket expectation by enumeration, normal tail, vectors, line integral).
- Numbers printed by the same script for 11 dropped questions: 96, 108, 109, 110, 119, 122, 128, 153, 167, 173, 176. `chk158.py`: only option (b) of n=158 is orthogonal to the given family.
- So 67 of 90 checked by script; the other 23 (definitions/theory: 93, 99, 111, 118, 121, 124, 130–136, 146–150, 164, 168, 169, 179, 180) by reasoning.

##### Answers that differ from the official key (kept questions)
- **n=117 (Q217)**: key (d) "No singularity"; answer (a). e^(−1/z²) → 0 along the real axis and → ∞ along the imaginary axis, so z = 0 is an (isolated) essential singularity. Solution now says so.
- **n=147 (Q247)**: key (d) "Neither 1 nor 2 nor 3"; answer (a) "Only 1". A one-to-one continuous map of a compact space onto a Hausdorff space is a homeomorphism, hence open. The Hindi copy omits "one to one … onto"; for a merely continuous map none of 1–3 need hold, which is what the key fits. The English text is unambiguous, so kept with (a); solution now explains the key.

##### Dropped (20)
Board-cancelled (10 of the 11; n=97 kept, see below):
- n=93: (a) lacks "m, n coprime", (b) prints a^m for α^m, (d) garbled; intended meaning a guess. Option (b) restored to the printed a^m.
- n=96: a = 13, b = 10 in no option ((b) reversed).
- n=99: roots are a and b, in none of the open intervals.
- n=111: no option fully correct (simple zero at 1, simple pole at 2, isolated essential singularity at 1/2).
- n=119: residue −1, in no option.
- n=146: two incorrect statements, (a) and (b). Option (d) restored to the printed "Closed subset and compact space".
- n=150: printed x_{n0} for the limit; (b) "A is not an open cover" is also literally true. q restored to the printed x_{n0} (the transcriber had changed it to x₀).
- n=153: solution is cosh(x + a) + b; options print cos.
- n=167: last class printed 10.9 – 12.0 gives mean 7.475, in no option. q restored to the printed 10.9 (the transcriber had changed it to 10.0).
- n=168: option (d) printed e^(−100)·100x/x! (100x, not 100^x). Option restored to the printed form.

Not cancelled by the board:
- n=108: no option correct (average rate −1.463; dv/dP −1.5 at 20, −1.428 at 20.5); the key −1.48 comes only from cutting v(20.5) to 29.26.
- n=109: printed text garbled in both languages ("ellipse", "growth rate of the ground", asks "the rate of the y-axis" with points as options). The transcriber's restatement (abscissa twice as fast as ordinate → (4, 4), the key) is not what the text says. q restored to the printed wording.
- n=110: printed "the expectation will increase and decrease respectively" names neither the actual nor the approximate increase. q restored to the printed wording.
- n=122: two true options: (a) cx > z (key) and (d) cx ≥ z.
- n=128: both copies print 2x₁ + 3x₂ ≥ 1; the LPP is then unbounded and no option is correct (key −2/3 fits only ≤). q restored to the printed ≥ (the transcriber had changed it to ≤); notes and fact rewritten.
- n=148: two false statements: (c) (key) and (a), because the co-finite topology on a finite set is the discrete topology, so a co-finite space can be finite (Munkres' definition). Judgment call: books that define it only on infinite sets make (a) true.
- **n=152 (new finding)**: (c) u = x, v = e^x(1 + x) gives y_p = x² + x + 1, which also satisfies the equation (differs from x² − x + 1 by the homogeneous solution 2x). Only (b) is the variation-of-parameters pair (u'x + v'e^(−x) = 0), but the question does not say so: two defensible options. Checked by substitution in `mycheck.py`.
- **n=157 (new finding)**: (a) log cos(y + a) = x + b is the same family as (c) log sin(y + a) = x + b, since cos(y + a) = sin(y + a + π/2) and a is arbitrary; both are the general solution. Checked by substitution.
- n=173: two true options: (a) P ⊥ B (key) and (d) P not ⊥ A (P = (A − A×B)/2, P·A = 1/2).
- n=176: (d) is the exact product 0.23343227E15; (b) 0.2334E15 (key) is the 4-digit floating-point product; the question does not say which.

For every dropped line: `"drop": true`, `flag` starts with "Dropped", and the solution ends by saying why it is left out of the quiz. `answer` is the key (or the transcriber's nearest option where there is no key).

##### Other changes to kept questions
- n=97 (board cancelled): kept with key null. As printed it is sound and only (c) x² − x + 4 = 0 has no real root. Flag and solution now say the board cancelled it and why it is still answerable.
- n=170: no option is the exact binomial value 0.204; (b) 0.25e^(−0.25) is the Poisson approximation the question intends (the key). Flag added; solution says so.
- n=114: solution adds that ω = 1 is the image of z = ∞.
- n=169: fact corrected (Var(aX + bY) = a²VarX + b²VarY holds for independent, or merely uncorrelated, X and Y).
- n=147: note (a) reworded.
- Long inline formulas split into shorter pieces for phone width: solutions of n = 91, 92, 101, 103, 112, 143, 144, 161, 174, 175, 177.
- The transcriber's misprint fixes in kept questions were checked against the images and are right: n=92 ("quadratic equations" → polynomials; f is cubic), 104 ("lightning surface area"), 106 (velocity unit feet/sec² → feet/sec), 112 (stray box in ∮), 121 ("in not"), 131, 132 ("A be a metric space" → subset), 134 (B(X, r) → B(x; r)), 141 ("a, n, t are constant" → a, n, ε), 149 ("3" = 𝔗), 174 ("in a moving particle").
- Topics: none changed. Linear programming/games (121–130) stay on tp-02-04 and complex analysis (111–120) on tp-10-06, as no closer notes page exists.

##### Left doubtful
- n=147: the English and Hindi copies ask different questions and the key fits the Hindi one. Kept with the English answer (a); drop it instead if the quiz should never contradict the board on a bilingual mismatch.
- n=148 and n=152: dropped as "two defensible answers"; both are judgment calls (the intended answers are the keys (c) and (b)).
- n=170 kept on the Poisson reading (exact binomial 0.204 not offered).
- Minor imprecisions accepted as the standard answers: n=114 (the real line maps onto the unit circle minus ω = 1), n=124 (scaling by a negative constant reverses the inequality), n=115 (sum 1/z² only where |z² + 1| > 1).

## Left out at publication

Three more questions were left out when the files were built, besides those the checkers dropped: DSSSB TGT 2021 Q128 (the printed series "n(Sin(n))" is ambiguous; read as the sum of n sin(1/n), the board's key would be right) and LT Grade 2025 Q135 (read literally with 0 ≤ θ ≤ π, the answer would also include (5π/6, π], so the kept option depended on a convention); and DSSSB TGT 2018 Q110 (the paper never defines e and k, and the answer depends on whether k counts the prime 2).
