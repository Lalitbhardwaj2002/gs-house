# UP TGT / PGT Mathematics: expected papers for December 2026, how they were made

Ten full mocks of 90 mathematics questions each (the new pattern: 90 mathematics + 30 GK), five for UP TGT and five for UP PGT, written for the exams expected in December 2026 (900 questions, 23 November 2026).

**How.** An analyst agent studied the official syllabuses, every UP TGT / PGT and UPPSC LT / GIC paper in the app (including the June 2026 TGT and May 2026 PGT papers) and all the questions of earlier papers printed in *Youth TGT PGT Maths 2024-25* (the book stays outside the repository; its printed answers were treated as unreliable), and wrote the blueprint below: the number of questions per unit and per topic, the board's style and order, the ideas that keep coming back, the syllabus items not asked for years, and a plan for five different mocks per level (a mirror of the 2026 paper, a repeat-heavy paper, a harder paper, a syllabus-gaps paper and a balanced one). For each mock, one mathematician agent wrote the paper: questions of earlier UP papers taken from the book's page images (each solved again; misprints repaired and said so) and new questions in the board's style; every answer recomputed by script. A second mathematician agent checked it: solved every question before looking at the key, compared the earlier questions with the book's pages, recomputed answers by script, and replaced any question that repeated a solved paper in the app or another expected paper (students may take all ten). A third agent then audited every question the checker had written, and a last pass compared all papers with each other. The app shows, under each question of an earlier paper, where it was asked.

| Paper | Questions | Asked before | New | File |
|---|---|---|---|---|
| Expected TGT paper 1 · June 2026 pattern | 90 | 25 | 65 | `data/mq/exp-tgt-2026-1.json` |
| Expected TGT paper 2 · most-repeated ideas | 90 | 33 | 57 | `data/mq/exp-tgt-2026-2.json` |
| Expected TGT paper 3 · harder, 2021 level | 90 | 30 | 60 | `data/mq/exp-tgt-2026-3.json` |
| Expected TGT paper 4 · syllabus gaps | 90 | 24 | 66 | `data/mq/exp-tgt-2026-4.json` |
| Expected TGT paper 5 · balanced | 90 | 28 | 62 | `data/mq/exp-tgt-2026-5.json` |
| Expected PGT paper 1 · May 2026 pattern | 90 | 25 | 65 | `data/mq/exp-pgt-2026-1.json` |
| Expected PGT paper 2 · most-repeated ideas | 90 | 32 | 58 | `data/mq/exp-pgt-2026-2.json` |
| Expected PGT paper 3 · harder level | 90 | 30 | 60 | `data/mq/exp-pgt-2026-3.json` |
| Expected PGT paper 4 · syllabus gaps | 90 | 20 | 70 | `data/mq/exp-pgt-2026-4.json` |
| Expected PGT paper 5 · balanced | 90 | 30 | 60 | `data/mq/exp-pgt-2026-5.json` |

---

# The blueprint


For the writers of the ten mocks (five TGT, five PGT). Each mock has **90 mathematics questions** (new pattern: 90 mathematics + 30 GK). Every number below was computed by scripts from the papers and the book (the scripts and their outputs stay outside the repository); the Appendix lists the 2026 questions that came from the book.

---

### 0. Rules for every mock (both levels)

#### 0.1 Sources and repeats
- Each mock takes **25–35 past questions from the book** (exact number per mock in §A6 and §B6), **only from the exam-years assigned to that mock**. The candidate list of each mock is a file:
  `pools/tgt-mock1.tsv` … `pools/tgt-mock5.tsv`, `pools/pgt-mock1.tsv` … `pools/pgt-mock5.tsv` (book page, book question number, chapter, a keyword guess of the topic id and unit, the printed tag, the start of the text).
- **Disjointness is built in.** Each book question belongs to exactly one pool: the pool of the **first exam-year printed in its tag** (e.g. "PGT 2000, TGT 1999" belongs to the PGT 2000 owner). Nothing is in two pools, so no past question can be used twice.
- **Never use** (already removed from the pools, listed in `pools/excluded.tsv`):
  - anything tagged **UP TGT 2021** or **LT 2018** (both are solved papers in the app), whatever other years it also carries;
  - 91 book questions that are the same as, or very close to, a question of the seven solved papers (UP TGT 2026, UP PGT 2026, UP TGT 2021, LT 2018, LT 2025, GIC 2026, DSSSB TGT 2021). 44 of them were confirmed by reading; the other 47 by text similarity (best TF-IDF match ≥ 0.45).
- Before you use a pool question, still **search the seven solved papers** (`data\mq\*.json`, the two 2026 `questions.checked.jsonl`) for its key numbers. If it is there, skip it.
- The garbled text layer is only for finding the question: **read the page image** (PyMuPDF) and **solve the question yourself**; the book's key is not trusted.
- How to use a repeat (this is what the board itself does — see the Appendix): keep the stem and the numbers; fix misprints; **re-order the options** so the key letter fits the mock's balance; replace a "None of these" option by a real distractor in at least two of every three cases (TGT 2026 Q58 is TGT 2021 Q26 with "Zero" kept, the options re-ordered and new wrong values). Record the source in the question's metadata (book page, question number, exam-year).
- New questions may test the same idea as a 2026 question, but with **different numbers, a different function, or a different ask**. Never copy a stem of the seven solved papers.

#### 0.2 Form of every question
- Four options, one correct. No "All of these". **"None of these" at most once per mock** (2026: 1 in 250 questions; 1999–2013: 24–33% of questions).
- **Answer key balanced**: each letter 20–25 times out of 90; no letter more than 3 times in a row. (2026: 29/34/31/31 and 27/28/37/33 of 125; longest runs 3 and 4.)
- **Numeric options are not in ascending order** (2026: 1 of 73 all-numeric sets ascending; TGT 2021: 25 of 48). Shuffle them.
- Distractors come from the board's own repertoire (§A3.4, §B3.4): the neighbouring formula, a sign or orientation swap, a dropped step, a forgotten factor or unit conversion, a true-but-not-asked statement. Never use an absurd value.
- **Order of the paper**: units mixed, never grouped in blocks (2026: adjacent same-unit pairs ≈ what random shuffling gives). TGT: put more recall items in the second half (2026 recall: 15 in Q1–42, 22 in Q43–84, 25 in Q85–125). PGT: place about half of the hard items in the last third (2026: 5 of 9).
- Language: plain exam English, short stems, colon or "is equal to" at the end ("… equals:", "The value of … is:", "… is called:"). ₹, cm, m, kg, km/h, J, W; π = 22/7 when a numeric area is wanted.

#### 0.3 Difficulty levels (used in both parts)
- **Easy-R (recall)**: state a definition, formula or theorem; no working. 
- **Easy-E (one step)**: one substitution or one standard manipulation.
- **Medium (M)**: two or three standard steps.
- **Hard (H)**: several steps or an idea (a trick, a special case, a non-standard set-up).

---

## PART A — UP TGT (Mathematics, code 07)

### A1. Counts per unit (90)

Weighted from the scaled unit shares: UP TGT 2026 (weight 0.55), UP TGT 2021 (0.25), TGT 2016 (0.10), TGT 2009–2013 (0.07), TGT 1999–2005 (0.03); normalised to 90 and rounded; Rounded by largest remainder (the five largest remainders — Statics .85, Geometry .80, Coordinate Geometry .65, Calculus .52, Probability .36 — get the extra question). Probability's second question also fits its syllabus, which names two theorems (addition and multiplication) while June 2026 asked only the addition theorem.

| Unit (TGT syllabus) | 2026 scaled | weighted | **Count** |
|---|---|---|---|
| 1 Commercial Mathematics | 2.9 | 3.31 | **3** |
| 2 Statistics | 4.3 | 4.01 | **4** |
| 3 Algebra | 17.3 | 18.08 | **18** |
| 4 Probability | 1.4 | 1.36 | **2** |
| 5 Set Theory (sets, relations, groups) | 7.2 | 6.31 | **6** |
| 6 Real Analysis | 10.8 | 8.28 | **8** |
| 7 Trigonometry | 5.8 | 6.35 | **6** |
| 8 Complex Numbers (+ heights and distances) | 4.3 | 5.15 | **5** |
| 9 Geometry (Euclid) | 4.3 | 3.80 | **4** |
| 10 Coordinate Geometry (2-D + sphere/cone/cylinder) | 8.6 | 9.65 | **10** |
| 11 Calculus (+ mensuration, DE) | 9.4 | 10.52 | **11** |
| 12 Vector Analysis | 5.0 | 5.19 | **5** |
| 13 Statics | 4.3 | 3.85 | **4** |
| 14 Dynamics | 3.6 | 4.14 | **4** |
| **Total** | | 90.00 | **90** |

### A2. Counts per topic id (base table, 90) and what each slot tests

| Unit | Topic id | n | What to ask (style of 2026 and of the recurring items) |
|---|---|---|---|
| 1 | tp-17-01 Work and time | 1 | pipes/cisterns with one pipe closed later; men–days–wages |
| 1 | tp-17-03 SI and CI | 1 | rate from amount (8000 → 9261 type), CI − SI, time to double/treble |
| 1 | tp-17-04 Banking, taxation | 1 | true/banker's discount, recurring deposit, GST on a discounted price, successive discounts |
| 2 | tp-16-06 Central tendency | 2 | class mark, ogive/histogram/pictorial, mean after a change, missing frequency, mode = 3 median − 2 mean |
| 2 | tp-16-07 Dispersion | 1 | SD/variance of a short list, effect of change of origin and scale, MD ↔ SD |
| 2 | tp-16-08 Vital statistics / index numbers | 1 | CDR, IMR, fertility rates; Laspeyres, Paasche, Fisher, cost of living |
| 3 | tp-01-07 Number system, surds, logs, polynomials, ratio | 4 | rationalising factor, factorising a quadratic, HCF/LCM of polynomials, factor theorem, log values, a : b : c, terminating decimals |
| 3 | tp-01-08 Quadratic / theory of equations | 2 | α²+β², sum/products of roots of a cubic, nature of roots |
| 3 | tp-01-06 AP, GP, HP; Σn, Σn², Σn³ | 2 | sum of an AP, Σ formulas, AM/GM/HM relation |
| 3 | tp-01-03 Permutations and combinations | 2 | arrangements, words, circular, committees/handshakes |
| 3 | tp-01-04 Binomial theorem | 1 | general term, term independent of x, sum of coefficients |
| 3 | tp-01-05 Exponential and log series | 1 | Σ n/n!, 1 + 1/2! + …, value of a log series |
| 3 | tp-02-01 Types of matrices | 2 | entry of a product, idempotent/involutory, symmetric + skew-symmetric |
| 3 | tp-02-02 Inverse | 1 | 2×2 inverse, AX = B unique when A non-singular, row operations |
| 3 | tp-02-03 Determinants | 2 | cofactor/minor, triangular or Vandermonde value, properties |
| 3 | tp-02-04 Linear systems, Cramer | 1 | solve a 3×3 by Cramer, consistent/inconsistent 2×2 |
| 4 | tp-16-01 Addition theorem | 1 | coins/dice/cards, P(A∪B) |
| 4 | tp-16-02 Multiplication theorem | 1 | independent events, P(A∩B), "at least one" |
| 5 | tp-01-01 Sets | 1 | Venn counting (neither/both), A − (A − B), De Morgan |
| 5 | tp-01-02 Relations and mappings | 2 | equivalence relation check; f⁻¹, g∘f |
| 5 | tp-04-05 Order of an element | 1 | order of an element of Zₙ or {1, −1, i, −i} |
| 5 | tp-04-06 Subgroups | 1 | subgroup test (ab⁻¹ ∈ H), subgroup of (Z,+) generated by two integers |
| 5 | tp-04-08 Cyclic groups | 1 | generators, number of generators φ(n), subgroups of a cyclic group |
| 6 | tp-05-02 Countability | 1 | which set is countable (Q×Q, N×N) vs uncountable (P(N), (0,1)) |
| 6 | tp-05-03 Real-number axioms, metric/point-set | 2 | LUB axiom, open/closed sets, dense/derived/perfect sets, metric axioms, Bolzano–Weierstrass |
| 6 | tp-05-04 Sequences | 2 | limit of a rational sequence, convergent ⇒ bounded, Cauchy criterion, harmonic sequence |
| 6 | tp-05-06 Limits | 2 | LHL/RHL of |x| or [x], standard limits, 0/0 by factorising |
| 6 | tp-05-07 Continuity | 1 | definition of continuity, kind of discontinuity, extreme-value property |
| 7 | tp-09-01 Ratios, special angles | 1 | sin 60° + cos 30°, radian ↔ degree |
| 7 | tp-09-02 Identities | 2 | compound/multiple/sub-multiple angle formulas |
| 7 | tp-09-03 Equations | 1 | general solution of sin θ = k, cos θ = k |
| 7 | tp-09-04 Inverse circular | 1 | principal value, simple sum identity |
| 7 | tp-09-05 Triangles | 1 | cosine/sine rule, r, R, r₁ (Δ/(s−a)) |
| 8 | tp-10-01 Complex basics | 1 | modulus of a quotient, powers of (1 ± i) |
| 8 | tp-10-04 De Moivre, Euler, ω | 2 | statement of De Moivre/Euler, products of ω powers |
| 8 | tp-10-07 Exp/circular/hyperbolic | 1 | cosh² − sinh², sin(iθ) = i sinh θ |
| 8 | tp-09-06 Heights and distances | 1 | one tower, 30°/45°/60° |
| 9 | tp-17-05 Triangles | 1 | Pythagoras/similarity/Apollonius |
| 9 | tp-17-06 Circles | 3 | intersecting chords, tangent ⟂ radius, alternate segment, angle at centre, cyclic quadrilateral |
| 10 | tp-11-01 Straight line | 1 | slope, distance between parallel lines, foot of perpendicular |
| 10 | tp-11-02 Pair of lines | 1 | condition for real lines, angle, bisectors |
| 10 | tp-11-03 General 2nd degree; transformation | 1 | condition for a circle/parabola, shift of origin, rotation |
| 10 | tp-11-04 Circle | 2 | tangency c² = a²(1+m²), SS₁ = T², chord of contact, centre/radius |
| 10 | tp-11-05 Parabola | 1 | standard form, tangent at (at², 2at), focus/directrix |
| 10 | tp-11-06 Ellipse | 1 | parametric point, e, normal at θ |
| 10 | tp-11-07 Hyperbola | 1 | e, asymptotes, rectangular hyperbola |
| 10 | tp-11-08 Polar equation of a conic | 1 | l/r = 1 + e cos θ, directrix in polar form |
| 10 | tp-13-03 Sphere (3-D) | 1 | centre/radius, sphere on a diameter |
| 11 | tp-06-01 Derivative | 2 | first-principles definition, standard derivatives, chain rule |
| 11 | tp-06-04 Tangent/normal | 1 | slope at a point |
| 11 | tp-06-05 Maxima/minima | 1 | local max/min of a cubic, point of inflection |
| 11 | tp-07-01 Standard integrals | 1 | ∫dx/(x²−a²) family |
| 11 | tp-07-02 Methods | 1 | by parts (x eˣ), substitution, partial fractions |
| 11 | tp-07-03 Definite integrals | 1 | ∫₀¹ xⁿ, odd/even property |
| 11 | tp-07-05 Area | 1 | area under y = x² between ordinates |
| 11 | tp-07-10 Mensuration | 1 | area/volume/surface of circle, cylinder, cone, sphere |
| 11 | tp-08-01 Order and degree | 1 | order and degree of a polynomial DE |
| 11 | tp-08-02 First order DE | 1 | y′ = ky, separable, linear |
| 12 | tp-12-01 Vector basics | 2 | direction cosines, 2a − 3b, magnitude of a resultant (law of cosines) |
| 12 | tp-12-02 Products | 3 | perpendicularity λ, unit normal a×b/|a×b|, work done, scalar triple product meaning |
| 13 | tp-15-01 Resultant, resolution | 1 | components F cos θ, F sin θ; resultant of forces along sides |
| 13 | tp-15-02 Lami, triangle law | 1 | statement of Lami / triangle law, a three-force tension |
| 13 | tp-15-03 Conditions of equilibrium, moments | 1 | ΣF = 0 and ΣM = 0, moment of a force |
| 13 | tp-15-05 Centre of gravity | 1 | triangle lamina, hemisphere, semicircle, cone |
| 14 | tp-15-08 Rectilinear motion | 1 | maximum height u²/2g, time to return |
| 14 | tp-15-09 Projectiles, relative velocity | 2 | range, greatest height, relative velocity |
| 14 | tp-15-10 Work, power, energy | 1 | KE with a unit conversion, unit of power |
| | **Total** | **90** | |

### A3. Style of the board (TGT)

#### A3.1 What changed in 2026 (vs 2021 and earlier)
1. **Difficulty collapsed.** By my reading of all 125 questions: 62 recall (50%), 56 one-step (45%), 7 medium (6%), 0 hard. UP TGT 2021 was a JEE-Main-level computation paper (area cut off by 4y = 3x² and 2y = 3x + 12; x + 1/x = 2cos(π/5); minimum of (1 − x + x²)/(1 + x + x²)).
2. **The setter walked down the new syllabus line by line.** Items never or almost never asked in UP TGT before appear as one-line recall: Fisher's ideal index, crude death rate, class mark, ogive, LUB axiom, metric axiom d(x,y) = 0 ⇔ x = y, open/closed complement, dense set, Bolzano–Weierstrass, countability of Q×Q, polar equation of a conic, translation of axes, SS₁ = T², HCF of polynomials, rationalising factor, decimal expansion of 7/8, elementary row operation, triangle law of forces, general conditions of equilibrium, relative velocity, alternate segment, intersecting chords. Real Analysis rose from 7 (2021) to 15 questions.
3. **Option style changed**: "None of these" vanished (12 in 2021 → 1); numeric options are shuffled (25 of 48 ascending in 2021 → 1 of 36).
4. **Stems are shorter** (median 66 characters against 88 in 2021) and options are formulas or words more than numbers (36 of 125 all-numeric sets against 48 of 120).
5. **Few repeats**: one verbatim repeat (Q58 = TGT 2021 Q26, three forces P, 2P, 3P along the sides of an equilateral triangle) and about ten same-idea items (cosh²x − sinh²x, TGT 2013; every bounded sequence has a convergent subsequence, TGT 2011; subgroup of (Z, +) generated by two integers, UP PGT 2021; unit of power, TGT 2013; Lami statement, PGT 2004).
6. One oddity worth one question per mock at most: a **flowchart/algorithm trace** (Q3: read x, y = 2x + 3, branch on y > 10).

#### A3.2 Typical phrasings (copy these shapes)
- "The value of … is:" · "… equals:" · "… is equal to:"
- "According to De Moivre's theorem, (cos θ + i sin θ)ⁿ is equal to:" · "According to the cosine rule, cos A equals:"
- "A set S in ℝ is called dense in ℝ if:" · "A discontinuity at x = a where both one-sided limits exist but are unequal is called:"
- "The standard equation of a parabola with vertex at origin and focus on positive x-axis is:"
- "Which of the following sets is countable?" (only 4 "which of the following" stems in 125)
- Word problems in one or two sentences with ₹, hours, cm, m/s, kg, newtons, joules.

#### A3.3 Recall vs computation (2026 → target)
- 2026: recall 50%, one-step 45%, medium 6%, hard 0%. TGT 2021 and earlier: mostly computation.
- **Target for December (base)**: recall 36, one-step 34, medium 16, hard 4 (78% easy, 18% medium, 4% hard). This keeps the 2026 character but hedges toward the 2021 level, because the same board set a harder paper five years earlier and LT 2025 (UPPSC) was also computational.

Examples from 2026: **Easy-R** Q20 "Fisher's Ideal Index Number is the … geometric mean of Laspeyres' and Paasche's"; **Easy-E** Q36 log₂32 + log₃27 = 8, Q23 P(A∪B) = 0.4 + 0.5 − 0.2; **Medium** Q71 marked price ₹4000, successive discounts 20% and 10%, then GST 10% → ₹3,168; Q13 pipes 10 h and 15 h, A closed after 3 h → 7.5 h; **Hard** (none in 2026; from TGT 2021) Q6 area cut off from 4y = 3x² by 2y = 3x + 12 = 27, Q74 tangent to x = 2at²/(1+t²), y = 2at³/(1+t²) at t = ½.

#### A3.4 How 2026 TGT built distractors
- **Neighbouring formula**: inradius Δ/s and circumradius abc/4Δ offered for the exradius Δ/(s−a) (Q51); cos B and cos C formulas offered for cos A (Q61); the tangent of an ellipse offered for its normal (Q103); ∫dx/(1−x²) offered for ∫dx/(x²−1) (Q11); 1 − 2sin²θ (= cos 2θ) for sin 2θ (Q29).
- **Sign / orientation swap**: (2x+1)(3x+4) for (2x−1)(3x−4) (Q2); c² = a²(1−m²) for c² = a²(1+m²) (Q87); ty = x − at² for ty = x + at² (Q115); cos θ − i sin θ, sin θ + i cos θ for e^{iθ} (Q68).
- **Dropped step / forgotten conversion**: KE with mass in grams (100000 J) and without ½ (200 J) (Q57); only the first discount (₹3,200) or GST subtracted (₹3,080) (Q71); y itself before the branch (Q3).
- **Misapplied rule**: cosⁿθ + i sinⁿθ for De Moivre (Q40); (1/3,1/3,1/3) for direction cosines (Q7).
- **True but not what is asked**: "f is differentiable at a" as the definition of continuity (Q77, kept as a deliberate trap); (a sin θ, b cos θ) for the parametric point of an ellipse (Q118).
- **Near values** for word problems: 7.0 / 7.5 / 8.0 / 6.5 h; ₹10,200 / 9,800 / 10,400 / 10,000.
- No "None of these" except once ("None of the remaining three", Q43). No assertion–reason, no match-the-list, no multi-statement items.

#### A3.5 Order
Units are interleaved (18 adjacent same-unit pairs against 12 expected at random: slightly clustered but no blocks). Computation items sit more in the first third, recall more in the last third (see 0.2).

### A4. Ideas that come back (TGT), ranked by likelihood

Rank = number of distinct TGT-level exam-years that asked the idea (book tags 1999–2016, UP TGT 2021, UP TGT 2026, LT 2018/2025, DSSSB 2021), with a bonus if June 2026 asked it (the same board, months ago). Pages are the latest book pages for UP TGT.

1. Definite integrals and their properties (odd/even, King's rule, |x|, [x]) — 15 exam-years; 2026 Q102; p633 (2021), p635/664 (2016), p671 (2013).
2. Dot/cross product: angle, perpendicularity, projection, unit normal — 15; 2026 Q8, 44, 93, 121; p368 (2021), p388 (2016), p384 (2013).
3. Derivatives: chain rule, x^x, inverse-trig substitution, parametric — 15; 2026 Q10, 73; p502 (2021), p501/530 (2016).
4. First-order DE (separable, homogeneous, linear) — 14; 2026 Q33, 63; p736 (2021), p779 (2016).
5. Limits: standard forms, 0/0, 1^∞ — 13; 2026 Q96, 120; p502 (2021), p501 (2016).
6. Roots and coefficients (α²+β², cubic symmetric functions) — 13; 2026 Q12, 18; p30 (2021), p35 (2016), p62 (2010).
7. Compound/multiple-angle identities, A+B+C = π — 13; 2026 Q22, 29, 59, 84; p1023 (2021), p1026 (2016).
8. Determinant values (Vandermonde, ω, triangular) — 13; 2026 Q9, 67, 108; p281 (2016), p318 (2013).
9. Position vectors, collinearity, section formula — 13; 2026 Q7, 49, 121; p368 (2021), p389 (2016).
10. Continuity/differentiability at a point; kinds of discontinuity — 12; 2026 Q43, 77, 113; p501 (2021), p530 (2016).
11. Powers of i, modulus, (1 ± i)ⁿ — 12; 2026 Q72, 80; p433 (2021), p435 (2016).
12. Circle: tangency condition, chord, centre/radius — 12; 2026 Q46, 87; p855 (2021), p907 (2013).
13. Linear systems: consistency, Cramer — 11; 2026 Q24, 52, 95, 105, 109; p257 (2021), p317 (2011).
14. Triangle: r, R, r₁, sine/cosine rule, nature of a triangle — 11; 2026 Q51, 61; p1056 (2021), p1058 (2016).
15. Straight line: distance, foot of perpendicular — 11; 2026 Q74; p812 (2021), p824 (2016).
16. Probability with coins/dice/cards, P(A∪B) — 11; 2026 Q4, 23; p981 (2021), p986 (2013).
17. ω and De Moivre — 11; 2026 Q40, 68; p434 (2021), p435 (2016).
18. Sequences: convergence, Cauchy, bounded/monotone, Bolzano–Weierstrass — 11; 2026 Q1, 15, 55, 66, 97, 123; p344 (2021), p349 (2016), p348 (2011).
19. Central tendency (mean after change, missing frequency, empirical relation) — 11; 2026 Q27, 62; p980 (2021), p1000 (2016).
20. Maxima/minima of a cubic — 10; 2026 Q65, 79; p574 (2021), p605 (2013).
21. Area between two curves — 10; 2026 Q56; p632 (2021 and 2016 share the y² = x, x² = y item).
22. Vertical motion under gravity — 10; 2026 Q92; p1098 (2021).
23. Second-degree equation → which conic — 11; 2026 Q86, 122; p858 (2021), p825 (2016).
24. Pair of lines: condition, angle, bisectors — 10; 2026 Q75, 125; p825 (2016), p844 (2013).
25. Parabola: focus, directrix, tangent at t — 9; 2026 Q45, 115; p857 (2021), p884 (2016).
26. Logarithm laws — 10; 2026 Q36; p1197 (2016), p1224 (2009).
27. Work and time, pipes — 9; 2026 Q13; p1187 (2021), p1198 (2016).
28. Resultant of forces (max/min resultant, P, 2P, 3P on a triangle) — 8; 2026 Q58, 83; p1097–1099 (2021).
29. AM/GM/HM and AP/GP/HP identification — 9 exam-years but **not asked in 2026** → likely back; p76 (2021), p80 (2016).
30. Simple/compound interest — 8; 2026 Q116; p1187 (2021), p1195 (2016).

Verbatim repeats the board has already made (book tags carrying two or more years): |x|² − 3|x| + 2 = 0 has 4 real roots (TGT 2005, 2021; p30); a polygon with 44 diagonals (TGT 2000, 2001, 2005; p101); area between y² = x and x² = y (TGT 2016, 2021; p632); lim (sin((y−a)/2)·tan(πy/2a)) (TGT 2016, 2021; p501); foci of x²/16 + y²/b² = 1 and the hyperbola coincide (TGT 2003, PGT 2004, TGT 2021 — and again PGT 2026 Q18); number of subsets of two finite sets, 2ᵐ − 2ⁿ given (TGT 2003, 2021; p157). Gaps between repeats run from 1 to 18 years (`multi-out.md`), so old years are live sources.

### A5. Syllabus items never or rarely asked that may now appear (TGT)

The 2026 setter covered the syllabus line by line, but these lines got **no question in June 2026** and **0–2 in the whole book**: 
- Set Theory: **Peano's postulates and induction** (0 ever), **group homomorphism**, **coset decomposition / Lagrange's theorem**, subgroups of a cyclic group.
- Real Analysis: **derived set, perfect set, neighbourhood**, Cauchy's theorems on limits, **Rolle's theorem** (in this unit).
- Algebra: **binomial theorem** and **exponential/log series** (0 in 2026), GP/HP, simultaneous equations in three unknowns by inverse matrix.
- Probability: **multiplication theorem** (0 in 2026).
- Trigonometry: sub-multiple angles, circular measure (arc = rθ).
- Complex Numbers: **separation into real and imaginary parts** (e.g. tan(x + iy)).
- Geometry: extension of Pythagoras (Apollonius), segments of a chord, congruence.
- Coordinate Geometry: **rotation of axes**, bisectors of a pair of lines, condition for a normal, parametric tangent, **3-D cone and cylinder** (no 3-D at all in 2026).
- Calculus: **tracing of simple curves**, **partial fractions**, volumes/surfaces of cylinder, cone and sphere.
- Vectors: **vector triple product**, moment of a force, displacement/free vector definitions.
- Statics: **common catenary** (never asked in UP TGT), trigonometrical theorem (m+n)cot θ = m cot α − n cot β.
- Dynamics: **radial and transverse** components, **tangential and normal** components (never asked in UP TGT).
- Commercial: **speed and time** (0 in 2026, 2 in 2021), simple interest, shares, income tax.
- Statistics: pictorial representation (bar/pie/histogram), index-number formulas other than Fisher.

### A6. The five TGT mocks

All five have the unit counts of A1 exactly. Topic counts = A2 unless a swap is listed (a swap moves one question between topics **inside the same unit**).

| | Mock T1 | Mock T2 | Mock T3 | Mock T4 | Mock T5 |
|---|---|---|---|---|---|
| Emphasis | **June 2026 mirror** | **Repeat-heavy (board habit)** | **Harder, 2021-level** | **Syllabus gaps** | **Balanced** |
| Book sources (only these) | UP TGT 2016 + UP TGT 2009 | UP TGT 2011 + UP TGT 2004 | UP TGT 2013 + UP TGT 2010 | UP TGT 2005 + UP TGT 1999 | UP TGT 2003 + UP TGT 2001 |
| Pool file | pools/tgt-mock1.tsv (224) | pools/tgt-mock2.tsv (208) | pools/tgt-mock3.tsv (204) | pools/tgt-mock4.tsv (176) | pools/tgt-mock5.tsv (141) |
| Past questions | 25 | 35 | 30 | 25 | 30 |
| New questions | 65 | 55 | 60 | 65 | 60 |
| Recall / one-step / medium / hard | 42 / 38 / 9 / 1 | 30 / 36 / 20 / 4 | 20 / 30 / 30 / 10 | 38 / 32 / 16 / 4 | 34 / 34 / 18 / 4 |
| Formats | all direct; 1 flowchart item | all direct | direct; ≤ 2 "which of the following is correct" | all direct | direct; ≤ 2 "which is correct" |

Past questions per unit (proportional to the unit count, capped by what the pool has):

| Unit | count | T1 (25) | T2 (35) | T3 (30) | T4 (25) | T5 (30) |
|---|---|---|---|---|---|---|
| 1 Commercial | 3 | 1 | 1 | 1 | 1 | 1 |
| 2 Statistics | 4 | 1 | 2 | 1 | 0 | 2 |
| 3 Algebra | 18 | 5 | 7 | 6 | 5 | 6 |
| 4 Probability | 2 | 1 | 1 | 1 | 1 | 1 |
| 5 Set Theory | 6 | 2 | 2 | 2 | 2 | 2 |
| 6 Real Analysis | 8 | 2 | 3 | 3 | 3 | 2 |
| 7 Trigonometry | 6 | 2 | 2 | 2 | 2 | 2 |
| 8 Complex Numbers | 5 | 1 | 2 | 2 | 2 | 2 |
| 9 Geometry | 4 | 1 | 2 | 0 | 0 | 0 |
| 10 Coordinate Geometry | 10 | 3 | 4 | 4 | 3 | 4 |
| 11 Calculus | 11 | 3 | 4 | 4 | 3 | 4 |
| 12 Vector Analysis | 5 | 1 | 2 | 2 | 2 | 2 |
| 13 Statics | 4 | 1 | 2 | 1 | 0 | 1 |
| 14 Dynamics | 4 | 1 | 1 | 1 | 1 | 1 |
| **Total** | **90** | **25** | **35** | **30** | **25** | **30** |

(The pool's topic guess is a keyword guess, right for the unit about 9 times in 10; check the unit yourself.)

**Mock T1 — June 2026 mirror.** Base topic table, no swaps. 60+ stems under 80 characters; formulas and words as options. Write the new questions as *2026 siblings*: the next line of the same syllabus item, never the same fact (2026 asked Fisher → ask Laspeyres or Paasche; crude death rate → infant mortality rate; dense set → derived set or closure; LUB axiom → Archimedean property or GLB; tangent ⟂ radius → equal tangents from an external point; SS₁ = T² → chord of contact T = 0). One flowchart/algorithm item. Repeats from 2016/2009: choose the one-step ones.

**Mock T2 — Repeat-heavy.** Base topic table. Take the 35 past questions from ideas 1–30 of A4 first. The 55 new questions are "re-numbered classics": the skeleton of a recurring UP item with new numbers (not from the seven solved papers). Replace "None of these" in the repeats as in 0.1.

**Mock T3 — Harder.** Swaps: Trigonometry tp-09-01 → tp-09-05 (two triangle questions); Algebra tp-01-07 4 → 3 and tp-01-08 2 → 3; Calculus tp-07-10 → tp-07-03 (two definite integrals); Dynamics tp-15-10 → tp-15-09 (three projectile/relative-velocity items). Write medium/hard items at the 2021 level: area between curves, 1^∞ limits, inverse-trig sums, (cos θ + i sin θ) powers, triangle with A − B given, projectile with a condition (range = 2 × height), cubic with roots in AP.

**Mock T4 — Syllabus gaps.** At least 22 of the 65 new questions on A5 items. Swaps (unit totals unchanged):
- Unit 1: tp-17-01 → tp-17-02 (trains / boats and streams).
- Unit 3: tp-01-07 4 → 3, tp-01-05 1 → 2 (exponential/log series).
- Unit 5: tp-04-06 → tp-01-09 (Peano / induction); tp-04-08 → tp-04-07 (cosets, Lagrange); one tp-01-02 → tp-04-09 (homomorphism: f(e) = e′, kernel).
- Unit 6: tp-05-06 2 → 1, add tp-06-06 1 (Rolle's theorem); one tp-05-03 on derived/perfect set.
- Unit 8: tp-10-07 → tp-10-08 (separation into real and imaginary parts).
- Unit 10: tp-13-03 → tp-13-04 or tp-13-05 (cone or cylinder); the tp-11-03 item on rotation of axes.
- Unit 11: tp-06-05 → tp-06-07 (tracing a simple curve: symmetry, asymptote); tp-07-02 by partial fractions; tp-07-10 a volume or surface of a cone/sphere.
- Unit 12: one tp-12-02 on the vector triple product or the moment of a force.
- Unit 13: tp-15-03 → tp-15-06 (common catenary: y = c cosh(x/c), T = wy, s = c tan ψ).
- Unit 14: tp-15-08 → tp-15-12 (radial/transverse velocity); tp-15-10 → tp-15-13 (normal acceleration v²/ρ).
- Unit 2: the tp-16-08 item on an index-number formula other than Fisher; one tp-16-06 on pictorial representation.

**Mock T5 — Balanced.** Base topic table, base difficulty. Spread the new questions evenly between 2026-style recall and 2021-style computation in every unit.

---

## PART B — UP PGT (Mathematics, code 08)

### B1. Counts per unit (90)

Weighted from the scaled unit shares: UP PGT 2026 (0.55), PGT 2021 (0.20), PGT 2016 (0.10), PGT 2009–2013 (0.05), PGT 2000–2005 (0.03), GIC (2015, 2021, 2026 averaged; 0.07). Normalised to 90; largest-remainder rounding would give 21, 18, 6, 10, 5, 5, 8, 3, 7, 7. Two deliberate changes: (1) ODE 6 → 5 and Mechanics 7 → 8, because 3 of the 7 May-2026 ODE questions were partial DEs (outside the syllabus) while Mechanics has ten syllabus items (five statics, five dynamics) and stood at 8.9 per 90 in PGT 2021; (2) 2-D 10 → 9 and Vectors-and-3-D 5 → 6, because 3-D lines and planes are a full syllabus block with no question in May 2026 but 5 in LT 2025 and 2 in GIC 2026.

| Unit (PGT syllabus) | 2026 scaled | weighted | **Count** |
|---|---|---|---|
| 1 Algebra (sets, relations, matrices, determinants, equations and series, probability) | 23.0 | 20.92 | **21** |
| 2 Calculus | 18.0 | 17.70 | **18** |
| 3 Ordinary Differential Equations | 5.0 | 5.63 | **5** |
| 4 Coordinate Geometry of Two Dimensions | 10.8 | 9.65 | **9** |
| 5 Vectors and 3-D Geometry | 4.3 | 5.54 | **6** |
| 6 Abstract Algebra | 3.6 | 5.45 | **5** |
| 7 Linear Algebra | 10.1 | 7.98 | **8** |
| 8 Vector Calculus | 2.2 | 2.98 | **3** |
| 9 Mechanics | 7.2 | 7.56 | **8** |
| 10 Trigonometry (+ complex numbers) | 5.8 | 6.59 | **7** |
| **Total** | | 90.00 | **90** |

### B2. Counts per topic id (base table, 90)

| Unit | Topic id | n | What to ask |
|---|---|---|---|
| 1 | tp-01-01 Sets | 1 | multi-statement item on set identities (A − B = A ∩ B′ …), A ∩ B of two curves |
| 1 | tp-01-02 Relations, functions, binary operations | 2 | f∘f of (3 − x³)^{1/3}, one-one/onto, equivalence relation, binary operation |
| 1 | tp-01-03 Permutations and combinations | 2 | circular seating, handshakes, non-negative integral solutions |
| 1 | tp-01-04 Binomial theorem | 1 | coefficient of xᵏ in (ax + b/x²)ⁿ |
| 1 | tp-01-05 Exp/log series | 1 | coefficient of xⁿ in e^{a+bx}, Σ series = e or log 2 |
| 1 | tp-01-06 AP, GP, HP | 1 | x^{q−r} y^{r−p} z^{p−q} = 1 type, series 11 + 103 + 1005 … |
| 1 | tp-01-08 Theory of equations | 2 | sum of squares of roots minimised, min of (x − a)(x − b) |
| 1 | tp-02-01 Matrices | 3 | idempotent (I + A)³, Aⁿ for the all-ones matrix, A² − 4A − λI = 0, orthogonal det ±1 |
| 1 | tp-02-02 Inverse, AX = B | 1 | solve AX = B for one unknown |
| 1 | tp-02-03 Determinants, adjoint | 3 | |adj A| = |A|ⁿ⁻¹, det(N⁻¹M²N), when a determinant vanishes, match |adj P| |
| 1 | tp-02-04 Rank, consistency | 1 | consistent/inconsistent 3×3 system |
| 1 | tp-02-05 Eigenvalues, Cayley–Hamilton | 2 | eigenvalues of a triangular matrix, k in A² − kA + 2I = 0, dimension of an eigenspace |
| 1 | tp-16-02 Probability (conditional, independent, total) | 1 | P(A|B), independence, total probability |
| 2 | tp-05-06 Limits | 2 | limit of a determinant/x², (√(1+x) − 1)/x, standard forms |
| 2 | tp-05-07 Continuity, differentiability | 1 | true statement on continuous functions on [a, b] |
| 2 | tp-06-01 Derivatives | 2 | inverse-trig simplification, chain rule with log xⁿ, xˣ |
| 2 | tp-06-03 Increasing/decreasing | 1 | interval of increase |
| 2 | tp-06-04 Tangent/normal | 1 | where the tangent meets the curve again, slope conditions |
| 2 | tp-06-05 Maxima/minima | 1 | max of x^m(1 − x)^n on [0, 1] |
| 2 | tp-06-06 Mean value theorems, Taylor, L'Hospital, Leibnitz | 1 | c of Rolle/LMVT, nth derivative, Maclaurin coefficient |
| 2 | tp-07-01 Standard integrals | 1 | match-the-list of ∫dx/(x² ± a²) forms |
| 2 | tp-07-02 Methods of integration | 3 | ∫dx/(x(xⁿ + 1)), ∫eˣ[f + f′], ∫tan⁻¹√x, (x − 1)^{-3/4}(x + 2)^{-5/4} |
| 2 | tp-07-03 Definite integrals | 3 | ∫log(1 + tan x), ∫x|x|, ∫[x²], reduction f(n) + f(n − 2) |
| 2 | tp-07-05 Area | 1 | parabola and line |
| 2 | tp-07-06 Volume/surface of revolution | 1 | cone generated by y = mx, cardioid volume |
| 3 | tp-08-01 Order, degree, formation | 2 | order + degree, family of circles, PDE by eliminating a constant |
| 3 | tp-08-02 First order, first degree | 1 | linear (integrating factor), homogeneous, exact |
| 3 | tp-08-03 Clairaut, singular solutions (and PDE) | 1 | Clairaut form, complete integral |
| 3 | tp-08-04 Constant coefficients | 1 | CF/PI of a second-order equation |
| 4 | tp-11-01 Straight lines | 1 | foot of perpendicular, image |
| 4 | tp-11-02 Pair of lines | 2 | λ for a pair (Δ = 0), bisectors, imaginary lines |
| 4 | tp-11-03 General 2nd degree | 1 | match equations to conic types |
| 4 | tp-11-04 Circle | 1 | locus of centroid, tangent, chord of contact |
| 4 | tp-11-05 Parabola | 1 | tangent of given slope, normals, mid-point locus |
| 4 | tp-11-06 Ellipse | 1 | foci, axes along given lines |
| 4 | tp-11-07 Hyperbola | 1 | asymptotes, eccentricity of a rotated hyperbola, tangents from a point |
| 4 | tp-11-08 Common tangents, polar | 1 | common tangent of two conics, pair of tangents |
| 5 | tp-12-01 Vector basics | 1 | direction cosines, collinearity |
| 5 | tp-12-02 Dot/cross products | 2 | a + b + c = 0 ⇒ Σa·b < 0, |a × b|² + (a·b)², area of a parallelogram |
| 5 | tp-13-01 Lines in 3-D | 1 | angle between lines, shortest distance, coplanarity |
| 5 | tp-13-02 Planes | 1 | distance point–plane, angle line–plane |
| 5 | tp-13-03 Sphere (or cone/cylinder) | 1 | sphere through a circle and a point |
| 6 | tp-04-02 Group properties | 1 | a² = e ⇒ abelian |
| 6 | tp-04-04 Sₙ | 1 | order of a permutation, even/odd |
| 6 | tp-04-07 Lagrange, Fermat | 1 | HK not a subgroup, prime-order group |
| 6 | tp-04-08 Cyclic groups | 1 | statements on cyclic groups, number of generators |
| 6 | tp-04-10 Rings and fields | 1 | zero divisors of Zₙ, integral domain vs field |
| 7 | tp-03-01 Vector spaces | 1 | dim of a quotient space, subspace of even/odd functions |
| 7 | tp-03-02 Basis, dimension | 3 | dim of symmetric matrices, dim U ∩ W, linear dependence value |
| 7 | tp-03-03 Linear transformations | 4 | matrix of T, kernel/nullity, inverse of T |
| 8 | tp-14-01 Vector differentiation | 1 | ∂²a/∂y² × ∂²b/∂x² at a point |
| 8 | tp-14-02 Grad, div, curl | 1 | ∇φ, div curl = 0, directional derivative |
| 8 | tp-14-03 Integral theorems | 1 | Green/Gauss/Stokes simple value |
| 9 | tp-15-01 Resultant | 1 | resultant ⟂ P ⇒ cos θ = −P/Q |
| 9 | tp-15-02 Three forces, Lami | 1 | triangle of forces in vector form |
| 9 | tp-15-03 Parallel forces, moments | 1 | like parallel forces P/Q, Q/P with resultant 2 |
| 9 | tp-15-05 Centre of gravity | 1 | standard bodies |
| 9 | tp-15-07 Moment of inertia | 1 | rod, disc, ring about standard axes |
| 9 | tp-15-08 Rectilinear motion, SHM | 1 | pendulum period, Atwood machine |
| 9 | tp-15-09 Projectiles | 1 | trajectory equation, H = R/4 ⇒ 45° |
| 9 | tp-15-10 Work, power, energy | 1 | time for an engine of given power to lift a mass |
| 10 | tp-09-02 Identities | 1 | min of 3cos x + 4sin x + 8, α + 2β from tan α, sin β |
| 10 | tp-09-03 Equations | 1 | general solution of cos(3x/2) = ½ |
| 10 | tp-09-04 Inverse circular | 1 | sin cot⁻¹x |
| 10 | tp-09-05 Triangles | 1 | angles in AP with a side ratio |
| 10 | tp-10-01 Complex basics | 1 | (z + 3)(z̄ + 3), angle between z and iz |
| 10 | tp-10-04 De Moivre, roots | 1 | nth roots, powers of (1 + i)/(1 − i) |
| 10 | tp-10-10 Inverse hyperbolic | 1 | sinh⁻¹, cosh⁻¹, tanh⁻¹ as logarithms (match-the-list) |
| | **Total** | **90** | |

### B3. Style of the board (PGT)

#### B3.1 What changed in 2026
1. **Linear algebra and matrices dominate**: 34 of 125 (matrices/determinants 20, linear algebra 14). Linear Algebra grew 1.3 → 1.3 → 3.5 → 7.4 → 10.1 per 90 from 2000–05 to 2026.
2. **New formats**: 5 match-the-list (Q2, 20, 30, 38, 85) and 3 "which of the following statements are correct … choose the most appropriate answer" (Q15, 61, 70); the 1999–2021 UP PGT pages have only 1–2% of such items. No assertion–reason (LT 2025, a UPPSC paper, had 5).
3. **Heavy reuse of the book**: 16 verbatim repeats and about 8 same-item repeats (the Appendix), drawn from PGT 2000, 2004, 2005, 2010, 2011, 2016, 2021, TGT 1999, 2001, 2010, 2011, LT 2018, GIC 2015 — even keeping the book's odd distractors ((1 + x)^{-3/2} in Q40; 405/256 and 504/259 in Q8).
4. **Stock option sets**: the ordered set "3, 1, 2, 0" is used **7 times** (Q5, 22, 51, 57, 81, 89, 92) with the key spread over B, D, B, B, C, D, C; "5, 3, 2, 4" and "1, 3, 2, 4" twice each. Match items reuse "a–IV, b–III, c–II, d–I" as option A in three items, and it is the key in all three.
5. **"None of these" gone** (0 in 125; 26–33% in PGT 1999–2013, 9–10% in 2016–2021).
6. **Gaps in coverage**: no probability, no 3-D lines/planes, no rings, homomorphisms or normal subgroups, no MVT/Taylor/L'Hospital/Leibnitz, no first-order DE solving, no catenary/central orbits/radial–transverse, no Green/Gauss/Stokes. Instead 3 partial-DE items (Q52, Q63, Q90) though PDEs are not in the syllabus.

#### B3.2 Typical phrasings
- "If … then the value of k is" · "… is equal to" · "… is ____. (Where C is an arbitrary constant)"
- "Let T be a linear operator on ℝ³ defined by T(x, y, z) = (…), then …"
- "Match List – I (…) with List – II (…). List – I: a. … List – II: I. …" with options "a – IV, b – III, c – II, d – I".
- "Which of the following statements are correct? a. … b. … c. … d. … Choose the most appropriate answer from the options given below:" with options "a, b and d only" etc.
- Mechanics with SI units (kW, kg, m, g = 10 m/s² or 9.8).

#### B3.3 Recall vs computation (2026 → target)
- 2026 (my reading of all 125): recall 15 (12%), one-step 45 (36%), medium 56 (45%), hard 9 (7%).
- **Target (base)**: recall 11, one-step 33, medium 40, hard 6 (49% easy, 44% medium, 7% hard).

Examples: **Easy-R** Q50 period of a simple pendulum 2π√(l/g); **Easy-E** Q57 A² − kA + 2I = 0 ⇒ k = trace = 1; Q118 handshakes ¹¹C₂ = 55; **Medium** Q36 ∫₀^{π/4} log(1 + tan x) dx = (π/8) log 2; Q107 the system x + 2y + z = 3, 2x + 3y + z = 3, 3x + 5y + 2z = 1 has no solution; **Hard** Q95 ∫dx/[(x − 1)³(x + 2)⁵]^{1/4}; Q109 the tangents from (3, 2) to x² − 9y² = 9 (one is the vertical line x = 3 — the key, after the check — the slope method misses it); Q28 two rods resting on a smooth circle.

#### B3.4 How 2026 PGT built distractors
- **Related object**: 3 = dimension of skew-symmetric 3×3 matrices offered for symmetric (6) (Q16); the transpose of the matrix of T (Q4); the tangent of the other slope.
- **Sign/coefficient variants of the key**: four bisector equations differing in one coefficient (Q120); four complete integrals differing in one term (Q52); ±P/Q inside sin⁻¹/cos⁻¹ (Q93).
- **Stock small integers** {0, 1, 2, 3} for counts, dimensions, nullities and limits.
- **Statement items**: one false statement per wrong option combination (Q15 "number of generators is two").
- **Wrong exponent / factor**: (3n + 1), 3ⁿ, 3ⁿ⁺¹ vs 3ⁿ⁻¹ (Q106); 1/(2b) vs 3b (Q101).
- **Retained book distractors** in verbatim repeats.

#### B3.5 Order
Fully shuffled (17 adjacent same-unit pairs vs 18.7 at random). Hard items: 2 in Q1–42, 2 in Q43–84, 5 in Q85–125.

### B4. Ideas that come back (PGT), ranked by likelihood
Rank = distinct PGT-level exam-years (UP PGT 2000–2021 book tags, GIC 2015/2021, UP PGT 2026, GIC 2026), with a bonus if May 2026 asked it.

1. Definite integrals and properties — 15 exam-years; 2026 Q36, 44, 55, 68, 81; p630 (2021), p666 (2016), p655 (2013).
2. Limits (standard forms, determinant limits) — 15; Q51, 102; p499 (2021), p531 (2016).
3. Linear systems: consistency — 15; Q92, 107; p254 (2021), p283 (2016).
4. Maxima/minima — 15; Q33; p575 (2021), p584 (2016).
5. Dot/cross products — 14; Q13, 42, 71, 76, 103; p367 (2021), p390 (2016).
6. Roots and coefficients, least value of a quadratic — 14; Q5, 112; p29 (2021), p36 (2016).
7. Continuity/differentiability — 14; Q86; p500 (2021), p531 (2016).
8. Derivatives (inverse-trig simplification, xˣ) — 13; Q62, 113, 123; p499 (2021), p509 (2016).
9. Determinants and adjoint (|adj A|, det(N⁻¹M²N)) — 11; Q19, 25, 59, 64, 70, 75, 85; p255 (2021), p283 (2016).
10. Grad/div/curl — 12; Q24, 72, 94; p411 (2021), p416 (2016).
11. Circle — 12; Q119; p856 (2021), p885 (2016).
12. Triangle properties — 12; Q124; p1062–1064 (2009–2011).
13. Powers of i, modulus — 13; Q27; p434 (2021), p436 (2016).
14. Pair of lines (λ, bisectors) — 11; Q80, 97, 110, 120; p829 (2021), p827 (2016).
15. Hyperbola (asymptotes, e, tangents) — 11; Q58, 60, 109; p856 (2021), p885 (2016).
16. Area between curves — 11; Q6, 12; p631 (2021), p667 (2016).
17. Projectiles — 11; Q21, 49; p1095 (2021), p1104 (2016).
18. Exponential/log series — 11; Q104; p136 (2010–2013).
19. Vector spaces: basis, dimension, dependence — 9; Q16, 17, 47, 74, 78, 99, 115; p326 (2021), p334 (2016).
20. Linear transformations: matrix, kernel, nullity, inverse — 9; Q1, 4, 22, 48, 73, 89, 121; p326 (2021), p334 (2016), p331–333 (GIC 2015).
21. Order/degree and formation of DE — 8; Q30, 43, 63, 100, 125; p735 (2021), p761 (2013).
22. Clairaut/singular/PDE — 8; Q52, 90; p734 (2021), p782 (2016).
23. Subgroups, Lagrange, number of subgroups — 9; Q37, 77; p222 (2021), p221 (2016).
24. Parabola (tangent of given slope, normals, mid-point locus) — 10; Q39, 53, 84; p856 (2021).
25. Ellipse (foci, e) — 9; Q18, 98; p886 (2016).
26. First-order DE solving — 12 exam-years but **not asked in May 2026** → likely back; p722 (2021), p781 (2016).
27. Partial derivatives / Euler's theorem — 10 exam-years, **not asked in 2026** (and not named in the 2026 syllabus: keep to Mock P4 at most); p608 (2021), p611 (2013).
28. Sphere/cone/cylinder — 9; Q88; p945 (2021), p948 (2016).
29. Inverse circular functions — 9; Q40; p1059 (2016).
30. Lami/triangle of forces — 8; Q34; p1093 (2021).

Verbatim repeats inside the book (two or more UP years on one question): ⁿPᵣ = 720·ⁿCᵣ ⇒ r (PGT 2011, 2013; p100, p110); least order of a non-abelian group = 6 (GIC 2015, PGT 2013; p239); a of order 30 ⇒ order of a¹⁸ (TGT 2004, GIC 2015, and again GIC 2026 Q79); equal eccentricities of two ellipses (PGT 2009, 2010; p873); flag on a 50 m pole (PGT 2010, 2013; p1052); number of asymptotes of a given curve (PGT 2005, 2011; p869); general integral of a Lagrange linear PDE (PGT 2005, 2009; p763); statements on cyclic groups (PGT 2016, 2021; p222).

### B5. Syllabus items never or rarely asked that may now appear (PGT)
- Algebra: **probability** (multiplication theorem, conditional, independent, total probability: 0 in 2026, 8 in the whole UP PGT book); binary operations.
- Calculus: **Rolle/LMVT/Cauchy MVT**, **Maclaurin/Taylor**, **L'Hospital**, **Leibnitz**, increasing/decreasing, **definite integral as the limit of a sum**, **Riemann integration**.
- ODE: **singular solutions**, **linear equations with constant coefficients**, homogeneous equations, first-order solving (all absent in 2026).
- 2-D: **common tangents to two conics**, pair of tangents and **chord of contact**.
- 3-D: **lines, planes, skew lines, shortest distance, intersection of planes**, cone, cylinder (none in 2026).
- Abstract Algebra: **homomorphism/isomorphism**, **normal subgroups and the fundamental theorem**, **rings and fields**, **Fermat's theorem**.
- Linear Algebra: linear sum and **direct sum**, **rank–nullity**, transpose of a linear map.
- Vector Calculus: **line/surface/volume integrals**, **Green, Gauss, Stokes**, directional derivative, scalar/vector fields.
- Mechanics: **common catenary**, **radial–transverse** and **tangential–normal** components, **central orbits**.
- Trigonometry: **heights and distances**, **De Moivre's theorem** (0 in 2026).

### B6. The five PGT mocks

Unit counts of B1 in every mock; topic counts = B2 unless a swap is listed.

| | Mock P1 | Mock P2 | Mock P3 | Mock P4 | Mock P5 |
|---|---|---|---|---|---|
| Emphasis | **May 2026 mirror** | **Repeat-heavy** | **Harder** | **Syllabus gaps** | **Balanced** |
| Book sources (only these) | UP PGT 2016 + UP PGT 2005 | UP PGT 2021 + UP PGT 2011 | UPPSC GIC 2015 + UP PGT 2013 | UP PGT 2010 + UP PGT 2009 + UPPSC GIC 2021 | UP PGT 2004 + 2003 + 2002 + 2000 |
| Pool file | pools/pgt-mock1.tsv (218) | pools/pgt-mock2.tsv (227) | pools/pgt-mock3.tsv (310) | pools/pgt-mock4.tsv (270) | pools/pgt-mock5.tsv (310) |
| Past questions | 25 | 35 | 30 | 25 | 30 |
| New questions | 65 | 55 | 60 | 65 | 60 |
| Recall / one-step / medium / hard | 11 / 33 / 40 / 6 | 12 / 34 / 38 / 6 | 8 / 24 / 44 / 14 | 14 / 32 / 38 / 6 | 12 / 32 / 40 / 6 |
| Match-the-list / multi-statement | 5 / 3 | 3 / 2 | 4 / 3 (+ at most 2 assertion–reason) | 4 / 3 | 3 / 2 |

Past questions per unit:

| Unit | count | P1 (25) | P2 (35) | P3 (30) | P4 (25) | P5 (30) |
|---|---|---|---|---|---|---|
| 1 Algebra | 21 | 6 | 8 | 7 | 6 | 8 |
| 2 Calculus | 18 | 5 | 7 | 6 | 5 | 6 |
| 3 ODE | 5 | 1 | 2 | 2 | 1 | 2 |
| 4 2-D | 9 | 3 | 4 | 3 | 3 | 3 |
| 5 Vectors and 3-D | 6 | 2 | 2 | 2 | 2 | 2 |
| 6 Abstract Algebra | 5 | 1 | 2 | 2 | 1 | 2 |
| 7 Linear Algebra | 8 | 2 | 3 | 3 | 2 | 0 |
| 8 Vector Calculus | 3 | 1 | 1 | 1 | 1 | 1 |
| 9 Mechanics | 8 | 2 | 3 | 2 | 2 | 3 |
| 10 Trigonometry | 7 | 2 | 3 | 2 | 2 | 3 |
| **Total** | **90** | **25** | **35** | **30** | **25** | **30** |

(Mock P5's pool, 2000–2004, has no linear-algebra questions, so its 8 linear-algebra questions are all new.)

**Mock P1 — May 2026 mirror.** Base topic table. 5 match-the-list (4 pairs each; include one on inverse-hyperbolic logs or standard integrals and one on conic classification), 3 multi-statement items. Use the stock small-integer option set (3, 1, 2, 0) for up to 5 numeric items, with the key spread over the letters. Prefer verbatim repeats with their original distractors, as May 2026 did.

**Mock P2 — Repeat-heavy.** Base topic table. 35 past questions from ideas 1–25 of B4 first; the 55 new questions are re-numbered classics (same skeleton, new numbers).

**Mock P3 — Harder.** Swaps: Calculus tp-06-03 → tp-06-06 (two of MVT/Taylor/L'Hospital/Leibnitz); 2-D tp-11-08 → tp-11-07 (two hyperbola items, one with tangents from an external point including a vertical tangent); Trigonometry tp-10-10 → tp-10-04 (nth roots). Hard items: integrals needing a substitution idea, eigenvalue/eigenspace arguments, loci, PDE complete integrals, statics problems with geometry (rods on a circle, ladders).

**Mock P4 — Syllabus gaps.** At least 22 of the 65 new questions on B5 items. Swaps (unit totals unchanged):
- Unit 1: tp-02-01 3 → 2, add tp-16-03 1 (total probability / Bayes); one tp-01-02 is a binary operation.
- Unit 2: tp-06-01 2 → 1 and tp-06-06 1 → 2 (Leibnitz nth derivative; Rolle/LMVT); tp-07-02 3 → 2, add tp-05-05 1 (definite integral as the limit of a sum).
- Unit 3: tp-08-01 2 → 1, tp-08-03 1 → 2 (singular solution / Clairaut); the tp-08-02 item a homogeneous equation.
- Unit 4: tp-11-08 common tangents; tp-11-04 chord of contact / pair of tangents.
- Unit 5: tp-13-03 → tp-13-04 or tp-13-05 (cone/cylinder); tp-13-01 shortest distance between skew lines.
- Unit 6: tp-04-02 → tp-04-09 (normal subgroup / fundamental theorem); the tp-04-07 item on Fermat's theorem (remainder of aᵖ⁻¹).
- Unit 7: the tp-03-01 item on a direct sum or quotient space; one tp-03-03 on rank–nullity.
- Unit 8: tp-14-03 Green/Gauss/Stokes value; tp-14-02 a directional derivative.
- Unit 9: tp-15-08 → tp-15-14 (central orbit); tp-15-03 → tp-15-06 (catenary); tp-15-10 → tp-15-12 (radial/transverse).
- Unit 10: tp-10-10 → tp-09-06 (heights and distances); tp-10-04 De Moivre.

**Mock P5 — Balanced.** Base topic table, base difficulty, 3 match + 2 multi-statement.

---


### Appendix — 2026 questions that came from the book (read side by side; none of these may be used again)

**UP PGT 2026, verbatim (16):** Q1 ← p341 Q2193 PGT 2005 (T(a,b,c) = (3a, a−b, 2a+b+c), T⁻¹); Q8 ← p130 PGT 2011 (coefficient of x⁴ in (x/2 − 3/x²)¹⁰, same distractors); Q16 ← p327 Q2112 UP PGT 2021 (dim of 3×3 symmetric matrices); Q18 ← p857 Q307 UP TGT 2021/2003, PGT 2004 (foci coincide, b² = 7); Q25 ← p274 Q1821 TGT 1999 (|A| = 3, |adj A| = 243); Q26 ← p182 Q1154 PGT 2000 (a² = e ⇒ abelian); Q31 ← p688 Q1067 TGT 2010 (∫dx/(x(xⁿ+1))); Q36 ← p662 Q942 PGT 2000 (∫₀^{π/4} log(1+tan θ)); Q39 ← p888 Q477 TGT 2011 (mid-points of chords through the vertex); Q40 ← p1030 Q98 TGT 2001 (sin cot⁻¹x, same odd distractor); Q51 ← p524 Q215 PGT 2004 (determinant limit); Q59 ← p284 Q1879 UP PGT 2016 (det(N⁻¹M²N) = 4); Q76 ← p374 Q69 LT 2018 (|a×b|² + (a·b)² = 144); Q88 ← p949 Q1042 PGT 2005 (sphere through a circle and the origin); Q107 ← p283 Q1873 UP PGT 2016 (inconsistent 3×3 system); Q112 ← p589 Q571 PGT 2011 (min (x−a)(x−b)).

**UP PGT 2026, same item with new numbers or ask (≈ 8):** Q110 ← p868 Q366 TGT 2001; Q121 ← p333 Q2150 GIC 2015; Q115 ← p278 Q1848 PGT 2010; Q116 ← p658 Q922 PGT 2005; Q22, Q89 ← p331 Q2136 GIC 2015 and p334 Q2155 PGT 2016; Q43 ← p779 Q1486 GIC 2015; Q15 ← p241 Q1638 PGT 2003; Q49 ← p1099 Q117 UP TGT 2021. In all ≈ 24 of 125 (19%), 13% verbatim.

**UP TGT 2026:** verbatim Q58 ← p1099 Q114 UP TGT 2021 (P, 2P, 3P on an equilateral triangle; options re-ordered, two wrong values replaced). Same idea (≈ 10): Q78 ← p468 Q242 TGT 2013; Q97 ← p348 Q35 TGT 2011; Q16 ← p222 Q1469 UP PGT 2021; Q98 ← p1145 Q371 TGT 2013; Q30 ← p1107 Q156 PGT 2013; Q31 ← p1114 Q197 PGT 2004; Q66 ← p361 Q117 TGT 2010; Q124 ← p265 Q1773 LT 2018; Q45 ← p877 Q419 PGT 2003; Q86 ← p825 Q119 TGT 2016. In all ≈ 9% of the paper, mostly ideas, not copies.

**UPPSC papers reuse UP questions too.** LT 2025: Q39 ← PGT 2010 p762; Q48 ← TGT 2004 p847; Q58 ← GIC 2015 p398; Q66 ← UP TGT 2021 p224; Q79 ← PGT 2005 p619; Q107 ← TGT 2016 p1000; Q110 ← PGT 2000 p447; Q116 ← GIC 2015 p903; Q139 ← TGT 2016 p826; Q142 ← PGT 2005 p138. GIC 2026: Q58 ← PGT 2009 p178; Q70 ← TGT 2016 p917; Q79 ← TGT 2004/GIC 2015 p241; Q87 ← UP PGT 2021 p222; Q105 ← GIC 2015 p1142; Q114 ← GIC 2021 p223; Q116 ← TGT 2010 p141.

---

## Expected TGT paper 1 · June 2026 pattern

- In the app: `data/mq/exp-tgt-2026-1.json`, 90 questions (25 asked before), one clock of 100 minutes, −1/3 mark for a wrong answer.

### Writing

### Mock T1 — UP TGT Mathematics, expected paper (December 2026)

**Level** TGT. **Emphasis** (blueprint §A6, mock T1): *June 2026 mirror*: base topic table (§A2), no swaps; 25 past questions only from UP TGT 2016 and UP TGT 2009 (pool `pools/tgt-mock1.tsv`); recall / one-step / medium / hard = 42 / 38 / 9 / 1; all direct items plus one flowchart/algorithm item; 60+ short stems; new questions written as "2026 siblings" (the next line of the same syllabus item, not the same fact).

Output: `mock.jsonl` (90 lines, n = 1..90). Source of every item: `items.py` (correct option first); `build.py` orders the paper, balances the key and places the options; `verify.py` re-computes the answers and checks the file; `simcheck.py` compares every question with the seven solved papers.

#### Counts per unit (= blueprint §A1) and per kind

| Unit | Questions (mock numbers) | total | past | R | E | M | H |
|---|---|---|---|---|---|---|---|
| 1 Commercial Mathematics | 2, 15, 60 | 3 | 1 | 1 | 1 | 1 | 0 |
| 2 Statistics | 19, 25, 67, 89 | 4 | 1 | 2 | 2 | 0 | 0 |
| 3 Algebra | 5, 17, 20, 22, 33, 39, 43, 46, 48, 53, 64, 66, 69, 71, 74, 77, 80, 84 | 18 | 5 | 10 | 7 | 0 | 1 |
| 4 Probability | 41, 65 | 2 | 1 | 0 | 0 | 2 | 0 |
| 5 Set Theory | 3, 12, 26, 36, 59, 73 | 6 | 2 | 1 | 4 | 1 | 0 |
| 6 Real Analysis | 1, 10, 14, 24, 44, 56, 68, 86 | 8 | 2 | 6 | 2 | 0 | 0 |
| 7 Trigonometry | 9, 18, 57, 72, 81, 87 | 6 | 2 | 2 | 3 | 1 | 0 |
| 8 Complex Numbers (+ heights and distances) | 28, 31, 38, 78, 83 | 5 | 1 | 1 | 4 | 0 | 0 |
| 9 Geometry | 32, 34, 45, 58 | 4 | 1 | 2 | 2 | 0 | 0 |
| 10 Coordinate Geometry | 4, 23, 47, 49, 55, 62, 76, 82, 88, 90 | 10 | 3 | 6 | 3 | 1 | 0 |
| 11 Calculus | 8, 13, 21, 27, 30, 40, 54, 61, 75, 79, 85 | 11 | 3 | 4 | 5 | 2 | 0 |
| 12 Vector Analysis | 6, 11, 37, 50, 52 | 5 | 1 | 3 | 2 | 0 | 0 |
| 13 Statics | 16, 29, 51, 63 | 4 | 1 | 2 | 1 | 1 | 0 |
| 14 Dynamics | 7, 35, 42, 70 | 4 | 1 | 2 | 2 | 0 | 0 |
| **Total** | | **90** | **25** | **42** | **38** | **9** | **1** |

- Topic counts equal the §A2 base table exactly (checked by `verify.py` against `blueprint/counts-tgt.json`); every topic id is in `topics.txt`.
- `difficulty` field: easy 80 (recall 42 + one-step 38), medium 9 (Q3, 13, 29, 41, 47, 60, 65, 72, 79), hard 1 (Q22, number of digits of $2^{50}$).
- Recall items by thirds: Q1–30: 10, Q31–60: 15, Q61–90: 17 (more recall later, as in June 2026); computation (E/M/H) by thirds: 20 / 15 / 13.

#### Form and order
- All direct items; one algorithm trace (Q3, loop summing odd numbers). "Which of the following": 2 (Q83 book wording, Q86). "None of these": 0 (the three past questions that had it, Q30, Q37, Q49, got real distractors). No "all of these", no assertion–reason, no match, no multi-statement.
- Answer key A/B/C/D = 23/22/23/22; longest run of one letter 3.
- Units interleaved: no two adjacent questions from the same unit.
- No all-numeric option set in ascending (or descending) order.
- Stems under 80 characters (LaTeX stripped, the measure of `blueprint/style.py`): 64 of 90 (median 72.5).

#### Past questions used (25: 13 UP TGT 2016, 12 UP TGT 2009)

| Mock Q | origin | book page, question | printed tag | topic | kind |
|---|---|---|---|---|---|
| 1 | UP TGT 2016 | p349 Q42 | UP TGT-2016 (08-03-2019) | tp-05-04 | E |
| 8 | UP TGT 2016 | p602 Q641 | UP TGT-2016 (08-03-2019) | tp-06-04 | E |
| 9 | UP TGT 2009 | p1044 Q180 | TGT 2009 | tp-09-05 | E |
| 10 | UP TGT 2009 | p557 Q391 | TGT 2009 | tp-05-06 | E |
| 15 | UP TGT 2016 | p1198 Q322 | UP TGT-2016 (08-03-2019) | tp-17-03 | E |
| 16 | UP TGT 2016 | p1151 Q404 | UP TGT-2016 (08-03-2019) | tp-15-01 | E |
| 18 | UP TGT 2009 | p1043 Q177 | TGT 2009 | tp-09-02 | E |
| 19 | UP TGT 2016 | p1000 Q291 | UP TGT-2016 (08-03-2019) | tp-16-06 | E |
| 20 | UP TGT 2009 | p118 Q721 | TGT 2009 | tp-01-03 | E |
| 30 | UP TGT 2009 | p757 Q1382 | TGT 2009 | tp-08-01 | E |
| 32 | UP TGT 2016 | p1197 Q313 | UP TGT-2016 (08-03-2019) | tp-17-06 | E |
| 36 | UP TGT 2009 | p200 Q1312 | TGT 2009 | tp-01-01 | E |
| 37 | UP TGT 2009 | p404 Q243 | TGT 2009 | tp-12-02 | E |
| 42 | UP TGT 2016 | p1103 Q133 | UP TGT-2016 (08-03-2019) | tp-15-09 | E |
| 43 | UP TGT 2016 | p80 Q470 | UP TGT-2016 (08-03-2019) | tp-01-06 | E |
| 46 | UP TGT 2009 | p320 Q2077 | TGT 2009 | tp-02-02 | E |
| 47 | UP TGT 2016 | p884 Q460 | UP TGT-2016 (08-03-2019) | tp-11-06 | M |
| 49 | UP TGT 2009 | p845 Q235 | TGT 2009 | tp-11-03 | R |
| 61 | UP TGT 2016 | p635 Q817 | UP TGT 2016 / UKPSC Lecturer 2020 | tp-07-03 | E |
| 64 | UP TGT 2009 | p62 Q362 | TGT 2009 | tp-01-08 | E |
| 65 | UP TGT 2009 | p984 Q179 | TGT 2009 | tp-16-02 | M |
| 73 | UP TGT 2016 | p229 Q1516 | UP TGT-2016 (08-03-2019) | tp-01-02 | E |
| 76 | UP TGT 2016 | p957 Q1094 | UP TGT-2016 (08-03-2019) | tp-13-03 | E |
| 80 | UP TGT 2009 | p1223 Q484 | TGT 2009 | tp-01-07 | E |
| 83 | UP TGT 2016 | p464 Q220 | UP TGT-2016 (08-03-2019) | tp-10-07 | E |

Per unit: 1 / 1 / 5 / 1 / 2 / 2 / 2 / 1 / 1 / 3 / 3 / 1 / 1 / 1, as in §A6. All were read from the page images (PyMuPDF), copied with the book's stem and options (options re-ordered for the key balance), and solved independently; trailing dashes of stems were replaced by colons. None is in `pools/excluded.tsv`; each was searched in the seven solved papers.

Pool items rejected after the search (the exclusion list missed them):
- p1105 Q147 (C.G. of a semicircular lamina, $4a/3\pi$) = UP TGT 2021 Q9.
- p1103 Q132 (projected up, height $h$ at $t_1$ and $t_2$, $h = \frac12 gt_1t_2$) = UP TGT 2021 Q89.
- p1198 Q308 (CI on ₹8000, 5% per half-year, ₹9261) uses the numbers of UP TGT 2026 Q116.
- Also not used: p118 Q722 and p1225 Q498, whose printed keys are wrong (1/26, not 8/221; rhombus, not square).

#### Flags
- Q20: Book's wording 'can be grouped with the word' corrected to 'can be formed with the letters of the word'.
- Q30: 'None of these' replaced by a real distractor (1, 1); "are:" added to the stem.
- Q32: 'interesect' corrected to 'intersect'.
- Q36: Book prints $B = \{x : x \le 10\}$ without $x \in \mathbb{N}$; added.
- Q37: 'None of these' replaced by a real distractor (8/21).
- Q47: Book prints option (a) as $a/\sqrt3$; read as $1/\sqrt3$.
- Q49: 'None of these' replaced by a real distractor ($a = b$, $h = 0$, the circle condition). The key $ab = h^2$ assumes $\Delta \ne 0$ (said in the solution).
- Q65: The book prints this question twice under TGT 2009 (p119 Q724 reads 'with replacement'); the answer is 4/7 either way. The 'without replacement' version is used.
- Q73: 'mapping' corrected to 'mappings'; 'and' added between the two sets.
- Note (no flag in the file): Q76 (book p957 Q1094, radius of a sphere) has the same skeleton as LT 2018 Q88 with different numbers; kept as a legitimate repeat.

#### New questions (65)
Written as siblings of June 2026 items, e.g. Laspeyres weights (2026: Fisher), histogram for the mode (2026: ogive), derived set and Archimedean property (2026: dense set, LUB axiom), removable discontinuity (2026: jump), monotone convergence (2026: convergent ⇒ bounded), finite-subgroup test (2026: $ab^{-1}$ test), subgroups of a cyclic group, involutory and $(AB)^T$ (2026: idempotent, symmetric + skew), $|kA|$ and row interchange (2026: triangular, Vandermonde), chord of contact $T = 0$ (2026: $SS_1 = T^2$), bisectors of a pair of lines (2026: angle), parabola condition and directrix in polar form (2026: circle condition, polar equation), rectangular hyperbola $e$, $\cos 3\theta$ and $\tan\theta = \sqrt3$ (2026: $\sin 2\theta$, $\sin\theta = \frac12$), $\omega^2 = \bar\omega$ (2026: Euler, De Moivre), equal tangents (2026: tangent ⟂ radius), Apollonius (2026: Pythagoras), solid-cone C.G. (2026: triangular lamina), horsepower (2026: watt), time of flight (2026: range), free fall (2026: greatest height), recurring deposit (2026: discount and GST). Each was searched in the seven solved papers (keyword search plus a TF-IDF comparison, `simcheck.py`); items found too close were replaced while writing (skew-symmetric diagonal = LT 2018 Q97, hyperbola asymptotes = UP PGT 2026 Q58, $\frac{d}{dx}x^x$ = UP TGT 2021 Q27, hemisphere C.G. = UP TGT 2021 Q64, generators of a cyclic group = UP TGT 2021 Q68, $\int\frac{dx}{x^2 + a^2}$ in UP PGT 2026 Q20). No two questions of the mock are variants of each other (a vertical-throw item that was a special case of the time-of-flight item, and a $\sin^{-1}$ integral that inverted the $\sin^{-1}$ derivative item, were replaced).

#### Verification
- `mock.jsonl` loads as 90 JSON objects, keys in the brief's order, `level` TGT, `key` null, four distinct options, the answer index pointing to the intended option, even `$` counts, no `$$`, `\displaystyle` or `align` in stems/options.
- **84 of 90 answers checked a second way by script** (`verify.py`: sympy limits, derivatives, integrals, identities and matrices; enumeration of dice, draws, permutations, subgroups and set operations; numeric constructions for the geometry and mechanics items). For 64 of them the script evaluates all four options and confirms that only the key is right; the other 20 (Q1, 4, 9, 12, 24, 39, 42, 45, 49, 57, 63, 64, 66, 70, 71, 77, 82, 84, 85, 90) confirm the key, several of them also refuting some distractors.
- The other 6 (Q25 Laspeyres weights, Q44 monotone convergence, Q56 removable discontinuity, Q67 mode from the histogram, Q68 derived set, Q86 uncountable set) are pure definitions/theorems, checked by reading.

### Independent check

#### Expected TGT mock 1: check of 22 November 2026

Mock checked: `mocks/tgt-1/mock.jsonl` (TGT mock T1, June 2026 mirror; 25 past questions from UP TGT 2016 and UP TGT 2009, 65 new). The writer's file is copied unchanged to `mock.orig.jsonl`; the corrected file is `mock.checked.jsonl` (90 lines). All work is in `mockck/tgt-1/`. The corrected file is rebuilt from the original by `apply_fixes.py` (round 1) followed by `apply_fixes2.py` (round 2).

Method: I solved all 90 questions from the stems and options before opening `answer` or the writer's log; my 90 answers agreed with all 90 keys (`mine.py`). I then read every solution, note, fact and flag; found each past question on its book page image (crop box set to the media box, `findq.py`, images in `img/`); compared every question with the seven solved papers in `data\mq\*.json` (806 maths questions, `solved_all.txt`) by topic id (`bytopic.py`, read by me) and by text similarity (`simcheck.py`); and ran my own script checks (`verify_ck.py` + `verify_round2.py`, independent of the writer's `verify.py`) and format checks (`fmtcheck.py`).

Round 2 (coordinator's extra rule, received during the check): the five expected TGT papers must not repeat each other, so I also compared every question with Expected TGT papers 2, 3 and 4 (`data\mq\exp-tgt-2026-2.json`, `-3.json`, `-4.json`; the last is identical, question by question, to `mockck/tgt-4/mock.checked.jsonl`), 270 questions in `exp_all.txt`, by topic (`bytopic2.py`) and by similarity (`simcheck2.py` over all 1,076 questions). Mock 5 was not compared (the coordinator will do 1 vs 5).

##### Counts (checked file)

| Unit | Questions | Past | New | Easy | Medium | Hard |
|---|---|---|---|---|---|---|
| 1 Commercial Mathematics | 3 | 2 | 1 | 2 | 1 | 0 |
| 2 Statistics | 4 | 1 | 3 | 4 | 0 | 0 |
| 3 Algebra | 18 | 5 | 13 | 17 | 0 | 1 |
| 4 Probability | 2 | 1 | 1 | 0 | 2 | 0 |
| 5 Set Theory | 6 | 2 | 4 | 5 | 1 | 0 |
| 6 Real Analysis | 8 | 2 | 6 | 8 | 0 | 0 |
| 7 Trigonometry | 6 | 2 | 4 | 5 | 1 | 0 |
| 8 Complex Numbers (+ heights and distances) | 5 | 1 | 4 | 5 | 0 | 0 |
| 9 Geometry | 4 | 1 | 3 | 4 | 0 | 0 |
| 10 Coordinate Geometry | 10 | 4 | 6 | 9 | 1 | 0 |
| 11 Calculus | 11 | 2 | 9 | 9 | 2 | 0 |
| 12 Vector Analysis | 5 | 1 | 4 | 5 | 0 | 0 |
| 13 Statics | 4 | 1 | 3 | 3 | 1 | 0 |
| 14 Dynamics | 4 | 0 | 4 | 4 | 0 | 0 |
| **Total** | **90** | **25** | **65** | **80** | **9** | **1** |

- Unit counts = blueprint A1 and topic counts = blueprint A2 exactly (checked against `blueprint/counts-tgt.json`); every topic id is in `topics.txt`. Every replacement kept the topic id, the difficulty and the key letter of the question it replaced.
- Difficulty 80 / 9 / 1 = the T1 target (recall + one-step 42 + 38, medium 9, hard 1). Medium: Q3, 13, 29, 41, 47, 60, 65, 72, 79; hard: Q22. The file does not store the recall/one-step split; several replacements are recall items, so the easy half now leans a little more to recall than the writer's 42/38.
- Past questions: 25 (UP TGT 2016: 14, UP TGT 2009: 11), as the blueprint asks, but spread 2/1/5/1/2/2/2/1/1/4/2/1/1/0 instead of 1/1/5/1/2/2/2/1/1/3/3/1/1/1: the pool's only usable dynamics and calculus (order-and-degree, inverse) questions repeat solved or expected papers, so two slots there became new and two new slots (Q60 work, Q82 polar conic) took clean pool questions instead.
- Key A/B/C/D = 23/22/23/22 (unchanged); longest run 3. No two adjacent questions from the same unit. No all-numeric option set in ascending or descending order. No "None of these" or "All of these". Stems under 80 characters (LaTeX stripped): 61 of 90, median 66.
- Format (`fmtcheck.py`): 90 lines, n = 1..90, valid JSON with the 13 fields in order, four distinct options, `answer` 0–3, `key` null, `level` TGT, even `$` in every field, no `$$` in questions or options, no `\displaystyle` or `align`, braces and `\left…\right` balanced, no control characters.

##### Changes: 33 questions replaced, 3 small repairs; no key was wrong

Each replaced question's `flag` says what it replaced and why. "E2/E3/E4" = Expected TGT paper 2/3/4.

**Round 1: near-copies of the seven solved papers (6)**

| Q | What was wrong | What it is now |
|---|---|---|
| 6 (tp-12-01) | Unit vector along 2i − 2j + k: the direction-cosine computation of UP TGT 2026 Q7 with new numbers. | New: 2i − j + 3k and −4i + 2j − 6k are parallel and in opposite directions. |
| 21 (tp-07-02) | ∫dx/(x(x + 1)) = UP PGT 2026 Q31 (∫dx/(x(xⁿ + 1))) with n = 1; same pattern as UP TGT 2026 Q11. | New: ∫log x dx = x log x − x + C. |
| 42 (tp-15-09) | Past (UP TGT 2016, p1103 Q133): greatest height = range ⇒ tan⁻¹4 is UP PGT 2026 Q49 (H = R/4 ⇒ 45°) with a changed ratio. | First a rain/man relative-velocity item, which round 2 replaced again (see below). |
| 59 (tp-04-05) | Order of 3 in {1, 3, 5, 7} mod 8: the ask of UP TGT 2026 Q85, UP TGT 2021 Q23, LT 2025 Q66 with another group. | New: if o(a) = n, then aᵐ = e iff n divides m. |
| 76 (tp-13-03) | Past (p957 Q1094, radius of x² + y² + z² − x + z − 2 = 0) = LT 2018 Q88 with changed numbers (the writer had noticed and kept it). | Past p957 Q1096 (UP TGT 2016): number of spheres through (1,0,0), (0,1,0), (0,0,1) = infinitely many. |
| 79 (tp-07-05) | Area between y = x² and y = x: UP TGT 2021 Q58 (y² = x, x² = y) with one curve changed. | First an area with the y-axis for y = x³, which round 2 replaced again (see below). |

**Round 2: repeats of Expected TGT papers 2, 3, 4 (29; Q42 and Q79 for the second time)**

| Q | Repeated item | Now |
|---|---|---|
| 10 (past) | (1 + 3/x)ˣ (p557 Q391) = E2 Q43 | past p557 Q392 (TGT 2009): lim sin 5θ/θ = 5 |
| 11 | section formula, ratio 2 : 1 = E2 Q80, E3 Q74 | centroid (a + b + c)/3 |
| 12 | finite subset closed ⇒ subgroup = E3 Q79 | H ∪ K is a subgroup iff H ⊆ K or K ⊆ H |
| 14 | Archimedean property = E2 Q65 | definition of an open set (interior points) |
| 22 (hard) | digits of 2⁵⁰ = E2 Q17, E3 Q78 | least number leaving remainder 4 on division by 6, 9, 12 and divisible by 7 = 112 |
| 25 | Laspeyres weights = E3 Q43 (Paasche weights, same options), E4 Q7 | infant mortality rate (per 1000 live births) |
| 26 | subgroups of a cyclic group of order 12 = E3 Q50, E2 Q22 | which group is not cyclic: (ℚ, +) |
| 29 (medium) | weight on two strings at 30°/60° = E3 Q54 with new numbers | weight 10√3 N held aside by a horizontal force, string at 30°: P = 10 N |
| 30 (past → new) | order and degree with √(1 + y′²), (2, 2) (p757 Q1382) = skeleton of E2 Q54, E3 Q45 | DE of y = A cos x + B sin x: y″ + y = 0 |
| 35 | time of flight = E3 Q34 | greatest height u² sin²α/(2g) |
| 38 | (cos π/6 + i sin π/6)⁶ = E2 Q63 | (cos θ + i sin θ)(cos φ + i sin φ) = cos(θ + φ) + i sin(θ + φ) |
| 42 | rain at 3 m/s, man at 4 m/s (round 1) = skeleton of E2 Q48 | complementary angles give the same range |
| 44 | monotone bounded ⇒ converges to sup = E2 Q12, E3 Q39 | lim n^{1/n} = 1 |
| 46 (past → new) | A² − A + I = 0 ⇒ A⁻¹ = I − A (p320 Q2077) = E3 Q21 | (A⁻¹)ᵀ = (Aᵀ)⁻¹ |
| 50 | vector triple product formula = E2 Q88, E3 Q33 | area of a triangle = ½|a × b| |
| 51 | C.G. of a solid cone = E3 Q5 | C.G. of a hemispherical shell = a/2 |
| 52 | scalar projection a·b/|b| = E2 Q70 | (2i + 3j) × (i − j) = −5k |
| 53 | remainder on division by 2x − 1 = E2 Q35, E3 Q26 (ax − b) | non-zero rational × irrational is irrational |
| 57 | general solution of tan θ = √3 = E2 Q41 | general solution of sin²θ = ¼: nπ ± π/6 |
| 60 (medium, new → past) | A+B 12, B+C 15, C+A 20 days = E2 Q55 (same numbers), E3 Q6 | past p1198 Q320 (UP TGT 2016): together x, alone x + 2 and x + 8 days ⇒ x = 4 |
| 62 | bisectors of ax² + 2hxy + by² = 0 = E3 Q83 | product of the slopes = a/b |
| 68 | derived set of {1/n} = E2 Q36, E3 Q22 | sup{1 − 1/n} = 1, not in the set |
| 69 (new → past) | G² = AH = E3 Q56 | past p81 Q475 (UP TGT 2016): G.P. 7 … 448, sum 889 ⇒ r = 2 |
| 72 (medium) | tan⁻¹2 + tan⁻¹3 = skeleton of E3 Q14 (2 tan⁻¹⅓ + tan⁻¹⅐) | sin⁻¹x + sin⁻¹y = 2π/3 ⇒ cos⁻¹x + cos⁻¹y = π/3 |
| 77 | "called involutory if" = E2 Q85 | definition of an upper triangular matrix |
| 79 (medium) | area with the y-axis under y = x³ (round 1): close to E2 Q61 (x² = 4y and y = 4), curve of E4 Q21 | area between y = eˣ, y = e⁻ˣ and x = 1 = e + 1/e − 2 |
| 81 | arc 22 cm, radius 14 cm ⇒ angle: skeleton l = rθ of E2 Q37, E4 Q10 (same 22 and 14) | sin(−690°) = ½ |
| 82 (new → past) | directrix of l/r = 1 + e cos θ = E2 Q13 | past p845 Q234 (TGT 2009): l/r = 1 + e cos θ with e > 1 is a hyperbola |
| 86 | "which set is uncountable" (irrationals) = E2 Q28, E3 Q18 | a countable union of countable sets is countable |

Kept after comparison with E2–E4 (same idea, different ask, or a formula where the other paper asks a number): Q2 (recurring-deposit formula; E3 Q76 computes one), Q18 ((1 − tan²15°)/(1 + tan²15°); E2 Q33 is the cos 2θ formula), Q33 (|kA| = kⁿ|A|; E3 Q88 computes |2A|), Q34 (Apollonius; E3 Q57 a median length), Q40 (∫dx/√(x² − a²); E2 Q71 is ∫dx/√(a² − x²)), Q55 (distance between parallel lines, formula; E2 Q73 numeric), Q66 (row interchange; E4 Q78 adding a multiple of a row), Q74 (1 − ½ + ⅓ − … = log 2; E3 Q73 and E4 Q25 ask the range and the identity of the log series), Q83 (past: f = cosh + sinh ⇒ f(x)f(y) = f(x + y); E2 Q39 is cosh x + sinh x = eˣ), Q85 (integrating factor formula; E3 Q35 solves an equation), Q89 (variance of 2x + 5; E4 Q75 SD under scaling). Q83 and Q18 are the closest of these.

**Small repairs (round 1)**
- Q36: the writer's edit (adding x ∈ ℕ to B) was only in `flag`; the solution now states it and that it does not change the answer.
- Q47: the writer's edit (option a/√3 read as 1/√3) was only in `flag`; the solution now states the misprint.
- Q89: note on option 23 reworded.

##### Past questions verified against the book (page images)

All 25 of the writer's past questions were found on their pages with the writer's page and question numbers; the stems and options match the book (options re-ordered only): Q1 p349 Q42, Q8 p602 Q641, Q9 p1044 Q180, Q10 p557 Q391 (replaced), Q15 p1198 Q322, Q16 p1151 Q404, Q18 p1043 Q177, Q19 p1000 Q291, Q20 p118 Q721, Q30 p757 Q1382 (replaced), Q32 p1197 Q313, Q36 p200 Q1312, Q37 p404 Q243, Q42 p1103 Q133 (replaced), Q43 p80 Q470, Q46 p320 Q2077 (replaced), Q47 p884 Q460, Q49 p845 Q235, Q61 p635 Q817, Q64 p62 Q362, Q65 p984 Q179, Q73 p229 Q1516, Q76 p957 Q1094 (replaced), Q80 p1223 Q484, Q83 p464 Q220. All 25 printed keys agree with my answers.

New past questions brought in, each read on its page image, solved and searched in all ten papers: Q10 p557 Q392 (TGT 2009, key (c) 5, right), Q60 p1198 Q320 (UP TGT 2016, key not printed on the crop; x = 4 by my solution), Q69 p81 Q475 (UP TGT 2016, key (b) 2, right), Q76 p957 Q1096 (UP TGT 2016, key (d) infinite, right), Q82 p845 Q234 (TGT 2009, key (b) hyperbola, right). Also read and rejected: p119 Q724 (twin of Q65), p1103 Q132 and p1150 Q397 (= UP TGT 2021 Q89), p1149 Q393–394 (faulty), p1149 Q395 (medium, would break the difficulty mix), p320 Q2078 (= E2 Q6 pattern), p825 Q117 (medium), p1196 Q309/Q310, p1197 Q316, p1224 Q496 (repeat UP TGT 2021 Q12/Q105, GIC 2026 Q56, E2 Q58).

Edits of past questions, each a fair, faithful repair: Q20 "can be grouped with the word" → "can be formed with the letters of the word"; Q30/Q37/Q49 "None of these" replaced by real wrong values (Q30 later replaced); Q32 "interesect"; Q36 x ∈ ℕ added (no effect on the answer); Q47 a/√3 → 1/√3; Q73 "mapping" → "mappings"; Q60 "togeter"; Q76 "Infinite" → "Infinitely many"; Q82 "It" → "If", 1/r → l/r (the book's own solution uses l/r), "None of these" → "Circle".

##### Script checks

`verify_ck.py` (with `verify_round2.py`) checks all 90 keys of the final file: for 82 questions it evaluates all four options (sympy, enumeration, numeric constructions) and confirms that exactly one, the key, is right; e.g. brute-force subgroup pairs of V₄, S₃ and Z₁₂ for Q12, the sphere family through three points for Q76, every element of Z₁…Z₁₂ for Q59, the solution sets of sin²θ = ¼ for Q57, the medians of a random triangle for Q11. The other 8 (Q14, 25, 53, 56, 63, 67, 77, 86) are definitions or theorems, checked by reading. No failures.

##### Doubtful or worth knowing (left as they are)
- Q22 is the mock's single "hard" item (several steps and one idea); a strict reader might call it medium.
- Q30's original used the usual Indian convention for degree; the item is now replaced.
- Q13 and Q31 are close siblings of June 2026 Q79 and Q32 (same procedure, different unknown); kept under the "different ask" rule.
- The past-question spread per unit differs from blueprint A6 (see Counts).

---

## Expected TGT paper 2 · most-repeated ideas

- In the app: `data/mq/exp-tgt-2026-2.json`, 90 questions (33 asked before), one clock of 100 minutes, −1/3 mark for a wrong answer.

### Writing

### TGT mock 2 (UP TGT Mathematics, expected paper, December 2026)

**Emphasis: repeat-heavy (board habit).** Book sources: UP TGT 2011 and UP TGT 2004 only (pool `pools/tgt-mock2.tsv`). Base topic table (blueprint A2, no swaps). 90 questions: 35 past (book), 55 new "re-numbered classics". All direct format; no "None of these", no "All of these".

Files: `mock.jsonl` (90 lines), `qs_past.py` / `qs_new.py` (question bank, correct option first), `verify.py` (second-way checks), `build.py` (ordering, key balance, format checks), `order.json` (mock number → bank id).

#### Counts per unit

| Unit | Questions | Past | New | Easy | Medium | Hard |
|---|---|---|---|---|---|---|
| 1 Commercial Mathematics | 3 | 1 | 2 | 1 | 2 | 0 |
| 2 Statistics | 4 | 2 | 2 | 3 | 1 | 0 |
| 3 Algebra | 18 | 7 | 11 | 12 | 3 | 3 |
| 4 Probability | 2 | 1 | 1 | 1 | 1 | 0 |
| 5 Set Theory | 6 | 2 | 4 | 5 | 1 | 0 |
| 6 Real Analysis | 8 | 3 | 5 | 6 | 1 | 1 |
| 7 Trigonometry | 6 | 2 | 4 | 4 | 2 | 0 |
| 8 Complex Numbers | 5 | 2 | 3 | 5 | 0 | 0 |
| 9 Geometry | 4 | 2 | 2 | 4 | 0 | 0 |
| 10 Coordinate Geometry | 10 | 4 | 6 | 8 | 2 | 0 |
| 11 Calculus | 11 | 4 | 7 | 6 | 5 | 0 |
| 12 Vector Analysis | 5 | 2 | 3 | 5 | 0 | 0 |
| 13 Statics | 4 | 2 | 2 | 3 | 1 | 0 |
| 14 Dynamics | 4 | 1 | 3 | 3 | 1 | 0 |
| **Total** | **90** | **35** | **55** | **66** | **20** | **4** |

Difficulty: easy 66 (recall 28, one-step 38), medium 20, hard 4. Blueprint target for T2: recall 30 / one-step 36 / medium 20 / hard 4; easy, medium and hard match exactly, the easy split is recall 28 / one-step 38 (two recall candidates were dropped because the same fact is already in a solved paper: Mode = 3 Median − 2 Mean is LT 2025 Q107, (AB)⁻¹ = B⁻¹A⁻¹ is LT 2018 Q107).

Hard items: Q18, Q40, Q62, Q81. Recall per third (Q1–30, 31–60, 61–90): 6, 10, 12; medium+hard per third: 13, 7, 4.

Topic counts equal blueprint A2 exactly (checked by `build.py`); every topic id is in `topics.txt`.

Answer key: A 23, B 23, C 22, D 22; longest run 3. Numeric option sets (41) are never in ascending or descending order. Units interleaved: 5 adjacent same-unit pairs, no three in a row, no two adjacent questions on the same topic.

#### Past questions used (35)

| Mock Q | Source tag | Book page | Book Q | Topic | Difficulty |
|---|---|---|---|---|---|
| 1 | UP TGT 2004 (book tag: TGT 2004) | 1073 | 331 | tp-09-05 | medium |
| 4 | UP TGT 2011 (book tag: TGT 2011) | 1124 | 259 | tp-15-09 | medium |
| 5 | UP TGT 2011 (book tag: TGT 2011) | 295 | 1930 | tp-02-03 | medium |
| 8 | UP TGT 2011 (book tag: TGT 2011) | 115 | 700 | tp-01-03 | easy |
| 9 | UP TGT 2011 (book tag: TGT 2011) | 538 | 288 | tp-08-02 | medium |
| 10 | UP TGT 2004 (book tag: TGT 2004) | 1047 | 193 | tp-09-02 | medium |
| 11 | UP TGT 2004 (book tag: TGT 2004) | 202 | 1329 | tp-01-02 | medium |
| 14 | UP TGT 2004 (book tag: TGT 2004) | 563 | 419 | tp-05-07 | medium |
| 15 | UP TGT 2011 (book tag: TGT 2011) | 130 | 789 | tp-01-04 | medium |
| 16 | UP TGT 2011 (book tag: TGT 2011) | 538 | 291 | tp-06-01 | easy |
| 19 | UP TGT 2011 (book tag: TGT 2011) | 451 | 147 | tp-10-04 | easy |
| 20 | UP TGT 2011 (book tag: TGT 2011) | 888 | 481 | tp-11-07 | medium |
| 24 | UP TGT 2011 (book tag: TGT 2011) | 986 | 194 | tp-16-02 | medium |
| 25 | UP TGT 2011 (book tag: TGT 2011) | 451 | 145 | tp-10-01 | easy |
| 27 | UP TGT 2011 (book tag: TGT 2011) | 887 | 474 | tp-11-04 | easy |
| 30 | UP TGT 2011 (book tag: TGT 2011) | 1125 | 264 | tp-15-05 | medium |
| 40 | UP TGT 2004 (book tag: TGT 2004) | 563 | 422 | tp-05-06 | hard |
| 47 | UP TGT 2011 (book tag: TGT 2011) | 1006 | 330 | tp-16-07 | medium |
| 49 | UP TGT 2011 (book tag: TGT 2011) | 140 | 844 | tp-01-05 | medium |
| 50 | UP TGT 2011 (book tag: TGT 2011) | 1068 | 307 | tp-17-05 | easy |
| 53 | UP TGT 2011 (book tag: TGT 2011) | 888 | 479 | tp-11-06 | easy |
| 55 | UP TGT 2011 (book tag: TGT 2011) | 1219 | 451 | tp-17-01 | medium |
| 58 | UP TGT 2011 (book tag: TGT 2011) | 1219 | 454 | tp-01-07 | easy |
| 59 | UP TGT 2011 (book tag: TGT 2011) | 887 | 475 | tp-11-04 | medium |
| 64 | UP TGT 2011 (book tag: TGT 2011) | 1124 | 261 | tp-15-02 | easy |
| 66 | UP TGT 2011 (book tag: TGT 2011) | 385 | 129 | tp-12-02 | easy |
| 67 | UP TGT 2011 (book tag: TGT 2011) | 385 | 131 | tp-12-01 | easy |
| 74 | UP TGT 2011 (book tag: TGT 2011) | 1006 | 329 | tp-16-08 | easy |
| 75 | UP TGT 2004 (book tag: TGT 2004) | 562 | 415 | tp-05-06 | easy |
| 76 | UP TGT 2004 (book tag: TGT 2004) | 203 | 1334 | tp-01-01 | easy |
| 79 | UP TGT 2011 (book tag: TGT 2011) | 599 | 624 | tp-06-05 | medium |
| 81 | UP TGT 2004 (book tag: TGT 2004) | 65 | 376 | tp-01-08 | hard |
| 87 | UP TGT 2011 (book tag: TGT 2011) | 94 | 548 | tp-01-06 | easy |
| 89 | UP TGT 2011 (book tag: TGT 2011) | 599 | 623 | tp-06-04 | easy |
| 90 | UP TGT 2011 (book tag: TGT 2011) | 1068 | 308 | tp-17-06 | easy |

By tag: UP TGT 2011: 27, UP TGT 2004: 8. Five of them (book Q451, Q329, Q479, Q623, Q288) sit in the pool as the unnumbered "?" row of their page (the segmenter missed the number); their printed tag is TGT 2011 alone. Each was read from the page image (PyMuPDF, mediabox, zoom 1.6), solved independently; options re-ordered for key balance; every "None of these" replaced by a real distractor.

#### Flags (by mock question number)

- Q1 (UP TGT 2004): Option (d) '(a + b) = 0' (impossible for sides) replaced by 'the triangle is necessarily isosceles'.
- Q4 (UP TGT 2011): 'direction of projector' read as 'direction of projection'; $g = 9.8$ stated (used by the book's solution).
- Q5 (UP TGT 2011): 'None of these' replaced by $[0, 2]$.
- Q8 (UP TGT 2011): 'None of these' replaced by 204 (the number of squares).
- Q15 (UP TGT 2011): 'None of these' replaced by 48.
- Q20 (UP TGT 2011): Wording lightly fixed.
- Q24 (UP TGT 2011): Wording clarified (book: 'The ratio of solving a problem is in favor of A is 3:4 and against B is 5:7').
- Q27 (UP TGT 2011): The book's negative options $-5$ and $-\frac{5}{\sqrt2}$ (impossible for a length) replaced by $2\sqrt3$ and $\sqrt{13}$.
- Q30 (UP TGT 2011): The book's 'two identical spheres' (contradicting the different radii) changed to 'two spheres'.
- Q40 (UP TGT 2004): Misprint fixed: the book prints $x^3$ in the denominator; its own solution and the finite options need $x^2$.
- Q47 (UP TGT 2011): The book says 'standard deviation is 16 and 25' but its solution and options treat 16 and 25 as variances (with SDs 16 and 25 the answer would be about 20.24); stem corrected to 'variances'. 'None of these' replaced by 4.43.
- Q49 (UP TGT 2011): The correct value $5e$ stood behind the book's 'None of these'; that option is written out as $5e$.
- Q50 (UP TGT 2011): Spelling fixed ('drown form' read as 'drawn from').
- Q53 (UP TGT 2011): The book's 'perpendicular to the ellipse' means 'normal to the ellipse'; 'None of these' replaced by a real distractor.
- Q55 (UP TGT 2011): Printing errors fixed: the book's stem omits the clause 'B and C in 15 days', which its own solution uses; option (d) '4' replaced by 10.
- Q59 (UP TGT 2011): Grammar fixed; 'None of these' replaced by '$r > 2$'.
- Q64 (UP TGT 2011): Punctuation fixed.
- Q66 (UP TGT 2011): 'None of these' replaced by $\frac\pi3$.
- Q67 (UP TGT 2011): Grammar fixed ('makes' to 'make').
- Q74 (UP TGT 2011): Option (d) 'None of these' replaced by Paasche's formula.
- Q87 (UP TGT 2011): Option (a) '$AM \ge GM \ge HM$' (also true as a weak inequality) replaced by '$AM = GM = HM$' so that only one option is correct; misprint 'GN' in option (d) read as GM.
- Q90 (UP TGT 2011): Wording fixed (book: 'If a regular hexagon inscribed in a circle of radius r if it is made then its perimeter will be').

New questions carry no flags.

#### Answers checked a second way

`verify.py` recomputes 82 of the 90 answers independently of the written solutions (exact fractions, numerical integration, numerical derivatives and limits, Durand–Kerner roots, brute-force counting of rectangles, diagonals, subgroups of Z12, cards, numerical tests of the formula options such as the normal condition, polar directrix, rotation of axes, vector triple product, Lami, section formula). For every numeric option set it also checks that the computed value matches the keyed option and no other option. Result: 82 checked, 82 agree, 0 fail. Not script-checked (pure recall of a definition or name): mock Q12 (monotone convergence), Q26 (Varignon), Q28 (uncountable set), Q36 (derived set), Q54 (order/degree reading), Q56 (median formula), Q65 (Archimedean property), Q74 (cost of living index); each was checked by hand.

#### Format checks (`build.py`, `texcheck.py`)

90 lines, n = 1..90, every line loads as JSON; fields n, q, options (4, distinct), answer, key (null), topic, level "TGT", solution, notes (4), fact, flag, origin, difficulty. LaTeX only between `$…$`, no `$$` in questions or options, no `\displaystyle`, no `align`; braces, `\left…\right` and `\begin…\end` balanced in all 1027 math segments; no control characters.

#### Candidates rejected (all from the tgt-mock2 pool)

Against the seven solved papers (searched `data\mq\*.json` and the two 2026 `questions.checked.jsonl`):
- p1219 Q453 (sum doubles in 15 years at CI, when 8 times) — same item as UP TGT 2021 Q30 (doubles in 5 years).
- p889 Q484 (foot of perpendicular from (2, 3)) — UP PGT 2026 Q23 asks the foot of the perpendicular from (2, 3) too.
- p94 Q549 ($a^x = b^y = c^z$, $b^2 = ac$) — LT 2025 Q140 is the same idea.
- p673 Q990 ($\int_0^{1.5}[x^2]dx$) — UP PGT 2026 Q68 is $\int_0^2[x^2]dx$.
- p673 Q991 ($\int_0^{\pi/4}\tan^n x$, $a_n + a_{n+2}$) — UP PGT 2026 Q44.
- p236 Q1587 (generators of a cyclic group of order 28) — UP TGT 2021 Q68 (order 10).
- p355 Q83 (every Cauchy sequence is bounded) — too close to UP TGT 2026 Q66 and DSSSB 2021 Q27.
- p355 Q84 (Bolzano–Weierstrass) — UP TGT 2026 Q97 (the blueprint appendix names its book source p348).
- p888 Q477 (mid-points of chords through the vertex) — source of UP PGT 2026 Q39 (also in excluded.tsv).
- p887 Q476 (directrix $x = 1$ of $y^2 - kx + 8 = 0$) — kept out because UP TGT 2021 Q90 asks the directrix of a parabola; p887 Q475 used instead.
- p385 Q130 (coplanar vectors, λ) — UP TGT 2021 Q78 is the same coplanarity item; p385 Q133 (work done) — UP TGT 2026 Q25.
- p236 Q1585 (subgroup criterion) — UP TGT 2026 Q89; p236 Q1586 (improper subgroups) — GIC 2026 Q43.
- p241 Q1637 (order of $a^p$) — order-of-power items already in GIC 2026 Q79, Q114.

Flawed in the book: p1007 Q340 (grouped median: true value 27.78, none of the options), p295 Q1929 ($A^2$ is in fact nilpotent; key "none" wrong), p563 Q423 (both limits printed at ∞; key wrong), p888 Q480 (eccentricity condition does not force both conics to be hyperbolas), p889 Q482 (stem garbled), p202 Q1330 (book's domain wrong).

#### New questions: overlaps avoided

Every new stem was searched against the solved papers. Replaced during writing because the fact or item is already there: Mode = 3 Median − 2 Mean (LT 2025 Q107); $\frac{d}{dx}x^x$ (UP TGT 2021 Q27); $\sin(i\theta) = i\sinh\theta$ (LT 2018 Q31); $(-1)^n$ / $1 + (-1)^n$ not convergent (LT 2018 Q133); roots of $x^2 - 2x + 4 = 0$ (UP TGT 2021 Q16); $(AB)^{-1}$ (LT 2018 Q107); intersection/union of subgroups (LT 2025 Q120); chord at distance 3 in a circle of radius 5 (UP TGT 2021 Q110); greatest and least resultant (UP TGT 2021 Q85); radius of a sphere from its equation (LT 2018 Q88); "every subgroup of a cyclic group is cyclic" (UP PGT 2026 Q15). The remaining new items are 2026-style siblings with different numbers or a different ask (e.g. tan θ = √3 vs 2026's sin θ = ½; involutory vs 2026's idempotent; cos 2θ in tan θ vs 2026's sin 2θ; derived set vs 2026's dense set; uncountable vs 2026's countable).

Syllabus-gap items (blueprint A5) among the new questions: binomial and exponential series (via repeats), H.P., subgroups of a cyclic group, derived set, Archimedean property, monotone convergence, rotation of axes, partial fractions, cone surface, vector triple product, Varignon (moments), relative velocity of rain.

#### Ordering

Units interleaved (5 adjacent same-unit pairs, none three in a row, no adjacent same topic). Computation front-loaded and recall later, as in June 2026: recall items 6 / 10 / 12 and medium-plus-hard items 13 / 7 / 4 in Q1–30 / Q31–60 / Q61–90; the four hard items at Q18, Q40, Q62, Q81. Key letters assigned by a seeded shuffle with counts 23/23/22/22 and runs of at most 3; options of each question then arranged so the correct one sits at its letter, keeping numeric option sets out of ascending and descending order.

### Independent check

#### Expected TGT mock 2: check of 22 November 2026

Mock checked: `mocks/tgt-2/mock.jsonl` (TGT mock T2, repeat-heavy; 35 past questions from UP TGT 2011 and UP TGT 2004, 55 new). Writer's file copied unchanged to `mock.orig.jsonl`; corrected file `mock.checked.jsonl` (90 lines). All work in `mockck/tgt-2/`.

Method: I solved all 90 questions myself from the stems and options before opening `answer` or the writer's log. My 90 answers agreed with all 90 keys. I then read every solution, note, fact and flag, found each of the 35 past questions on its book page image, compared the stems and options with the seven solved papers in `data\mq\*.json` (all 745 questions, grouped by topic id), and ran my own script checks (`verify_ck.py`, independent of the writer's `verify.py`).

##### Counts (checked file)

| Unit | Questions | Past | New | Easy | Medium | Hard |
|---|---|---|---|---|---|---|
| 1 Commercial Mathematics | 3 | 1 | 2 | 1 | 2 | 0 |
| 2 Statistics | 4 | 2 | 2 | 3 | 1 | 0 |
| 3 Algebra | 18 | 7 | 11 | 12 | 3 | 3 |
| 4 Probability | 2 | 1 | 1 | 1 | 1 | 0 |
| 5 Set Theory | 6 | 2 | 4 | 5 | 1 | 0 |
| 6 Real Analysis | 8 | 3 | 5 | 6 | 1 | 1 |
| 7 Trigonometry | 6 | 2 | 4 | 4 | 2 | 0 |
| 8 Complex Numbers | 5 | 2 | 3 | 5 | 0 | 0 |
| 9 Geometry | 4 | 2 | 2 | 4 | 0 | 0 |
| 10 Coordinate Geometry | 10 | 4 | 6 | 8 | 2 | 0 |
| 11 Calculus | 11 | 4 | 7 | 6 | 5 | 0 |
| 12 Vector Analysis | 5 | 2 | 3 | 5 | 0 | 0 |
| 13 Statics | 4 | 2 | 2 | 3 | 1 | 0 |
| 14 Dynamics | 4 | 1 | 3 | 3 | 1 | 0 |
| **Total** | **90** | **35** | **55** | **66** | **20** | **4** |

- Unit counts = blueprint A1; topic counts = blueprint A2 exactly (no swaps, as T2 requires); every topic id is in `topics.txt`. Past per unit = the T2 column of A6 (1/2/7/1/2/3/2/2/2/4/4/2/2/1). Past by tag: UP TGT 2011 27, UP TGT 2004 8.
- Difficulty 66 / 20 / 4 = the T2 target (recall + one-step 30 + 36 = 66, medium 20, hard 4). Hard: Q18, Q40, Q62, Q81.
- Key: A 23, B 23, C 22, D 22; longest run 3. No numeric option set in ascending or descending order. No "None of these" / "All of these".
- Format (`fmtcheck.py`): 90 lines, n = 1..90, all valid JSON with the 13 fields; four distinct options each; `answer` 0–3; even `$` in every field; no `$$` in questions or options; no `\displaystyle`, no `align`; braces and `\left…\right` balanced; no control characters.

##### Changes (6 questions; no key was wrong)

| Q | What was wrong | What it is now |
|---|---|---|
| 5 (UP TGT 2011, p295 Q1930) | Two true options: Δ = 2 + 2sin²θ takes every value in [2, 4], so "Δ lies in [1, 4]" (the book's own option) is also true. | Option [1, 4] replaced by [1, 3]; only [2, 4] now fits. Notes for (a), (b) written; solution states both ends are reached; flag extended. |
| 14 (UP TGT 2004, p563 Q419) | Solution applied L'Hospital as if f′ were continuous with f′(0) ≠ 0, without saying so. | Solution rewritten without L'Hospital: the fraction is (f(x²) − f(0))/(f(x) − f(0)) − 1 and the first ratio → 0 when f′(0) ≠ 0 (the intended reading). Flag records the assumption. Key (−1) unchanged. |
| 55 (UP TGT 2011, p1219 Q451) | Flag called the replaced option "4" a printing error. | Flag reworded: "4" was a weak distractor (no working leads to it), replaced by 10 (A, B, C together). Stem repair confirmed (see below). |
| 59 (UP TGT 2011, p887 Q475) | The writer silently corrected the book's misprinted option "r < 2 or r < 8" to "r < 2 or r > 8"; not in the flag. | Flag now records it. |
| 61 (new) | Near-copy of a solved paper: "area bounded by the parabolas y² = 4x and x² = 4y" is UP TGT 2021 Q58 ("area bounded by y² = x and x² = y") with the same stem and the coefficients scaled by 4 (same figure, same formula 16a²/3). | **Replaced** by a new medium tp-07-05 question: area bounded by x² = 4y and y = 4 = 64/3 (key stays B); options 32/3, 64/3, 32, 16/3 from half-region / rectangle / wrong-width errors; own solution, notes, fact; flag says it was replaced in the check. The idea is not in the solved papers or in the other four TGT mocks. |
| 74 (UP TGT 2011, p1006 Q329) | The writer's replacement for "None of these" was Paasche's formula, a weighted price index that a candidate could defend as a cost-of-living measure. | Option (d) is now the inverted Laspeyres ratio Σp₀q₀/Σpₙq₀ × 100 (current and base prices interchanged); note and flag updated. Key (Laspeyres, B) unchanged. |

##### Past questions checked against the book (35 of 35)

Each was found on its page image (PyMuPDF, mediabox, zoom 2.2; crops in `img/q<mock n>.png`); book page = PDF page number. All 35 stems and options match the book apart from the flagged edits, and I solved every one. Where the book's printed key was in the crop I read (31 of 35; not read for Q4, Q20, Q75, Q90, whose keys sit on the next column or page), it agreed with my answer, allowing for the re-ordered options. The one exception is Q49, where the book's key is (d) "None of these" and the true value 5e is now an option.

| Mock Q | Page / book Q | Tag | Copy | Writer's edit judged |
|---|---|---|---|---|
| 1 | 1073 / 331 | TGT 2004 | exact | (d) "(a + b) = 0" → "necessarily isosceles": fair, a real trap (3-4-5 triangle) |
| 4 | 1124 / 259 | TGT 2011 | exact | "projector" → "projection", g = 9.8 stated: fair |
| 5 | 295 / 1930 | TGT 2011 | exact | None → [0, 2]: fair; **[1, 4] also changed in the check** |
| 8 | 115 / 700 | TGT 2011 | exact | None → 204 (squares): fair |
| 9 | 538 / 288 | TGT 2011 | exact | none |
| 10 | 1047 / 193 | TGT 2004 | exact | none |
| 11 | 202 / 1329 | TGT 2004 | exact | none |
| 14 | 563 / 419 | TGT 2004 | exact | none (solution reworded in the check) |
| 15 | 130 / 789 | TGT 2011 (also JDD PGT 2015) | exact | None → 48: fair |
| 16 | 538 / 291 | TGT 2011 | exact | none |
| 19 | 451 / 147 | TGT 2011 | exact | none |
| 20 | 888 / 481 | TGT 2011 | exact | wording: fair |
| 24 | 986 / 194 | TGT 2011 | reworded | "ratio … in favor of A is 3:4 and against B is 5:7" → odds in favour / against: faithful (the book's solution reads it the same way) |
| 25 | 451 / 145 | TGT 2011 | exact | none |
| 27 | 887 / 474 | TGT 2011 | exact | −5, −5/√2 → 2√3, √13: fair |
| 30 | 1125 / 264 | TGT 2011 | exact | "two identical spheres" (contradicts radii 6 and 3) → "two spheres": fair |
| 40 | 563 / 422 | TGT 2004 | exact | x³ → x² in the denominator: fair (with x³ the limit is infinite; the book's own solution uses x²) |
| 47 | 1006 / 330 | TGT 2011 | exact | "standard deviation 16 and 25" → variances: fair (options and book solution use variances; with SDs the answer would be ≈ 20.24); None → 4.43 |
| 49 | 140 / 844 | TGT 2011 | exact | None → 5e (the true value): fair |
| 50 | 1068 / 307 | TGT 2011 | exact | spelling: fair |
| 53 | 888 / 479 | TGT 2011 | exact | "perpendicular to the ellipse" → "normal to": fair; None → (a²+b²)² version |
| 55 | 1219 / 451 | TGT 2011 | stem repaired | missing "B and C in 15 days" restored (the book's solution uses it): fair; 4 → 10 |
| 58 | 1219 / 454 | TGT 2011 | exact | none |
| 59 | 887 / 475 | TGT 2011 | exact | option misprint fixed (now flagged); None → r > 2: fair |
| 64 | 1124 / 261 | TGT 2011 | exact | punctuation |
| 66 | 385 / 129 | TGT 2011 | exact | None → π/3: fair |
| 67 | 385 / 131 | TGT 2011 | exact | grammar |
| 74 | 1006 / 329 | TGT 2011 | exact | None → Paasche: **changed in the check** to inverted Laspeyres |
| 75 | 562 / 415 | TGT 2004 | exact | none |
| 76 | 203 / 1334 | TGT 2004 | exact | "have" → "has" |
| 79 | 599 / 624 | TGT 2011 | exact | none |
| 81 | 65 / 376 | TGT 2004 | exact | none |
| 87 | 94 / 548 | TGT 2011 | exact | (a) "AM ≥ GM ≥ HM" (also true) → "AM = GM = HM": fair, needed for a single answer; "GN" read as GM |
| 89 | 599 / 623 | TGT 2011 | exact | none |
| 90 | 1068 / 308 | TGT 2011 | exact | wording: fair |

All 22 flagged edits are fair, faithful repairs; the two I changed further (Q5, Q74) are listed above, and one unflagged edit (Q59 option) is now flagged.

##### Script checks

`verify_ck.py` recomputes **81 of 90** answers independently (exact fractions, Simpson integration, numerical derivatives and limits, Durand–Kerner roots, brute-force counting of rectangles, diagonals, subgroups, cards, compositions of permutations, random-vector tests of the triple-product, section and projection formulas, numerical tests of the polar directrix, rotation of axes, ellipse-normal condition, Lami ratio, circle-intersection ranges). For each numeric option set it requires the computed value to match the keyed option and no other. Result: 81 agree, 0 fail. A mutation test (every key shifted by one letter) makes all 81 fail, so the checks do bite; the hard-coded option values were compared against the file's options.

Not script-checked (definitions or recall, checked by hand): Q12 (monotone convergence), Q26 (Varignon), Q28 (uncountable set), Q36 (derived set), Q54 (order/degree), Q56 (median formula), Q65 (Archimedean property), Q74 (cost of living index), Q85 (involutory).

##### Overlap check against the seven solved papers

Every question was compared with all solved questions of its topic id. Only Q61 was a near-copy (replaced). Same idea, different numbers or ask, kept:
- Q73 (distance between 3x + 4y − 7 = 0 and 6x + 8y + 1 = 0) uses the same "normalise the doubled line" trap as UP TGT 2021 Q76 (x + 2y = 5, 2x + 4y = 11); different lines, generic stem.
- Q43 (1 + 3/n)ⁿ → e³ vs LT 2025 Q129 (1 + 1/n)ⁿ → e.
- Q85 (involutory) has the same four options as UP TGT 2026 Q54 (idempotent) but asks the other definition; Q28 (uncountable) is the sibling of UP TGT 2026 Q99 (countable), with different options.
No two questions inside the mock repeat each other.

##### Doubtful or borderline (left as they are)

- Q14 is filed under tp-05-07 (continuity and differentiability) although it is a limit found from differentiability. It is the closest Real Analysis topic and the count must stay 1. As a result the mock has no plain continuity / kind-of-discontinuity item, although that idea recurs (A4 idea 10).
- Difficulty labels: Q18 (cubic with roots in A.P.) is labelled hard but could be called medium; Q54 (order/degree) is labelled medium but is nearly one step; Q16 and Q83 are labelled easy but take two steps. I kept the labels because the totals match the T2 target and each label is defensible.
- Implicit assumptions in past stems: in Q30 "joined together" means touching spheres; Q66 assumes non-zero vectors; Q24 assumes A and B work independently. These are standard readings, so I did not edit them.

---

## Expected TGT paper 3 · harder, 2021 level

- In the app: `data/mq/exp-tgt-2026-3.json`, 90 questions (30 asked before), one clock of 100 minutes, −1/3 mark for a wrong answer.

### Writing

### TGT mock 3 — log

**Mock:** TGT mock 3 (level "TGT"), expected UP TGT Mathematics paper, December 2026. 90 mathematics questions.
**Emphasis (blueprint §A6, Mock T3):** harder, 2021-level. Book sources only UP TGT 2013 + UP TGT 2010 (pool `pools/tgt-mock3.tsv`).
**Topic swaps applied:** tp-09-01 → tp-09-05 (two triangle questions); tp-01-07 4 → 3 and tp-01-08 2 → 3; tp-07-10 → tp-07-03 (two definite integrals); tp-15-10 → tp-15-09 (three projectile / relative-velocity items). Topic counts equal the base table §A2 with these swaps (checked by `checks.py`: no mismatch).
**Format:** all direct questions; 2 "which of the following" stems (Q18 uncountable set, Q49 bounded below), no multi-statement items; one "None of these" (Q44, kept from the book as a wrong option, placed last).

#### Counts per unit

| Unit | Questions | Past | New |
|---|---|---|---|
| 1 Commercial Mathematics | 3 | 1 | 2 |
| 2 Statistics | 4 | 1 | 3 |
| 3 Algebra | 18 | 6 | 12 |
| 4 Probability | 2 | 1 | 1 |
| 5 Set Theory | 6 | 2 | 4 |
| 6 Real Analysis | 8 | 3 | 5 |
| 7 Trigonometry | 6 | 2 | 4 |
| 8 Complex Numbers (+ heights) | 5 | 2 | 3 |
| 9 Geometry | 4 | 0 | 4 |
| 10 Coordinate Geometry | 10 | 4 | 6 |
| 11 Calculus | 11 | 4 | 7 |
| 12 Vector Analysis | 5 | 2 | 3 |
| 13 Statics | 4 | 1 | 3 |
| 14 Dynamics | 4 | 1 | 3 |
| **Total** | **90** | **30** | **60** |

#### Difficulty

- Recall / one-step / medium / hard = 20 / 30 / 30 / 10 (target 20 / 30 / 30 / 10). In the `difficulty` field: easy 50, medium 30, hard 10.
- Past questions: R 1, E 8, M 16, H 5. New: R 19, E 22, M 14, H 5.
- Q1–30: recall 5, one-step 9, medium 12, hard 4 (computation front-loaded, recall rising towards the end, as §0.2 asks).
- Q31–60: recall 7, one-step 10, medium 10, hard 3 (computation front-loaded, recall rising towards the end, as §0.2 asks).
- Q61–90: recall 8, one-step 11, medium 8, hard 3 (computation front-loaded, recall rising towards the end, as §0.2 asks).

#### Order and answer key

- Units interleaved: 0 adjacent same-unit pairs. Key: A 22, B 22, C 23, D 23; longest run of one letter 3.
- 39 all-numeric option sets, none in ascending or descending order. Past questions had their options re-ordered for the key balance.

#### Past questions used (30)

| Mock Q | Source tag | Book page | Book Q | Topic | Difficulty |
|---|---|---|---|---|---|
| 6 | UP TGT 2013 | 1220 | 464 | tp-17-01 | medium |
| 7 | UP TGT 2010 | 319 | 2072 | tp-02-04 | medium |
| 9 | UP TGT 2010 | 403 | 237 | tp-12-02 | one-step |
| 10 | UP TGT 2010 | 957 | 1093 | tp-13-03 | one-step |
| 13 | UP TGT 2010 | 688 | 1068 | tp-07-02 | medium |
| 15 | UP TGT 2010 | 908 | 608 | tp-11-05 | hard |
| 16 | UP TGT 2013 | 458 | 186 | tp-10-04 | medium |
| 17 | UP TGT 2010 | 96 | 559 | tp-01-06 | hard |
| 19 | UP TGT 2010 | 1006 | 336 | tp-16-06 | one-step |
| 24 | UP TGT 2013 | 401 | 225 | tp-12-01 | one-step |
| 25 | UP TGT 2010 | 908 | 609 | tp-11-06 | medium |
| 29 | UP TGT 2013 | 605 | 655 | tp-06-05 | medium |
| 36 | UP TGT 2013 | 199 | 1302 | tp-01-01 | one-step |
| 42 | UP TGT 2013 | 1222 | 471 (number not printed) | tp-01-07 | medium |
| 44 | UP TGT 2010 | 1147 | 385 | tp-15-01 | hard |
| 48 | UP TGT 2013 | 687 | 1062 | tp-07-03 | medium |
| 49 | UP TGT 2010 | 241 | 1628 | tp-05-03 | recall |
| 51 | UP TGT 2013 | 553 | 372 | tp-05-06 | medium |
| 53 | UP TGT 2013 | 132 | 802 | tp-01-04 | medium |
| 59 | UP TGT 2013 | 907 | 599 | tp-11-04 | medium |
| 60 | UP TGT 2013 | 1069 | 314 | tp-09-02 | medium |
| 61 | UP TGT 2013 | 198 | 1295 | tp-01-02 | one-step |
| 62 | UP TGT 2013 | 458 | 188 | tp-10-01 | hard |
| 68 | UP TGT 2010 | 555 | 382 | tp-05-07 | medium |
| 72 | UP TGT 2010 | 1148 | 387 | tp-15-08 | hard |
| 80 | UP TGT 2010 | 1042 | 167 | tp-09-05 | medium |
| 81 | UP TGT 2010 | 117 | 715 | tp-01-03 | medium |
| 82 | UP TGT 2013 | 553 | 371 | tp-06-01 | one-step |
| 84 | UP TGT 2010 | 62 | 360 | tp-01-08 | medium |
| 85 | UP TGT 2013 | 117 | 710 | tp-16-02 | one-step |

All 30 are in `pools/tgt-mock3.tsv`, none in `pools/excluded.tsv`; each was read from the page image, solved independently, and searched for in the seven solved papers (`data\mq\*.json`) by its key numbers and phrases: none is there. Book Q1629 (H₁ ∩ H₂ is a subgroup) and Q384 (piecewise function with a likely misprinted x⁴) were dropped on reading: the first is the same fact as LT 2025 Q120, the second is ambiguous (with the original x² the key changes). Q359 (stem start missing) and Q361 (garbled expression) were also rejected.

#### Flags

- Q7 (UP TGT 2010): Option (d) 'None of these' replaced by a distractor.
- Q17 (UP TGT 2010): Option (d) 'none of these' replaced by a distractor.
- Q25 (UP TGT 2010): Option (d) 'None of these' replaced by the tangent at the point.
- Q29 (UP TGT 2013): Positive constants and positive x, y are implied (as in the original).
- Q36 (UP TGT 2013): Last sentence reworded ('in all the three athletics' → 'in all in the three teams') to remove the misprint.
- Q42 (UP TGT 2013): The book prints no question number or opening words before the expression (between Q470 and Q472); 'The value of' added.
- Q44 (UP TGT 2010): 'ration' read as 'ratio'. 'None of these' kept as a wrong option (the only one in this mock).
- Q53 (UP TGT 2013): Misprint 'Q is even the sum of the terms' read as 'Q is the sum of the even terms'.
- Q61 (UP TGT 2013): Grammar of the stem tidied.
- Q62 (UP TGT 2013): Option (c) '−1' (impossible for a modulus) replaced by $\sqrt2$.
- Q68 (UP TGT 2010): Stem 'Let f(x) = … is continuous' tidied to 'be continuous'.
- Q72 (UP TGT 2010): '($g = 9.8$ m/s²)' added: the book's solution uses it. Exact depth 490.1 m; 490.5 m is the intended approximate value.
- Q84 (UP TGT 2010): Option (d) 'None of these' replaced by a sign-slip distractor.
- Q85 (UP TGT 2013): Grammar of the stem tidied; the intended independence stated.

#### Answers verified by script

- `verify.py` recomputes the answer of **82 of 90** questions a second way (sympy / exact arithmetic / numerical search / brute force) and, for each, checks that exactly the intended option is true and the other three are false; it also checks that the `answer` index in `mock.jsonl` points to that option. Result: 82 verified, 0 failures.
- The other 8 are definitions or recall facts checked by reasoning (see each solution): Q18 uncountable set, Q22 derived set of {1/n}, Q39 monotone bounded sequence, Q43 Paasche weights, Q45 order/degree (radical cleared), Q49 bounded below set, Q66 nilpotent matrix, Q79 finite subgroup test.
- `checks.py`: 90 lines of valid JSON, n = 1–90, all fields, topic ids in `topics.txt`, topic counts = blueprint T3, no `$$` in questions/options, balanced `$`, braces and environments.

#### Near-overlaps with the solved papers (same idea, different question)

- Q85 (UP TGT 2013, Pragati/Tripti, P(at least one solves) = 2/3) uses the same idea as UP TGT 2021 Q28 (either A or B fails, 0.44) with a different setting and numbers.
- New siblings of 2026 items, with a different ask, as §A6/§0.1 allow: Q43 Paasche weights (2026: Fisher), Q18 which set is uncountable (2026: which is countable), Q66 nilpotent (2026: idempotent), Q79 finite-subset subgroup test (2026: ab⁻¹ test), Q83 bisector formula (PGT 2026 Q120 computed bisectors), Q30 range = 4√3 × height → angle (UP TGT 2021 Q67: range = 2 × height → range), Q34 time-of-flight formula (2026: range formula).

#### Files

- `mock.jsonl` (the mock), `qdata.py` (question bank, correct option first), `build.py` (ordering, key balance, option placement; seed 7), `order.json` (question → source map), `verify.py` (second-way checks), `checks.py` (format/blueprint checks), `render.py` (page images in `img/`), `solved.txt` + `grepsolved.py` (search of the solved papers).

### Independent check

#### Expected TGT mock 3: check of 22 November 2026

Mock checked: `mocks/tgt-3/mock.jsonl` (TGT mock 3, "harder, 2021-level"; 30 past questions from UP TGT 2013 and 2010, 60 new). Copy kept as `mock.orig.jsonl`; corrected file `mock.checked.jsonl` (90 questions). Scripts in this folder: `verify.py` (answers), `fmtcheck.py` (format, topic counts), `latexcheck.py` (LaTeX commands, numeric option order), `sim.py`, `grep2.py` + `pats.txt` (search of the solved papers), `locate.py`, `render.py` (book page images in `img/`, rendered with the crop box set to the media box), `counts.py`, `fix.py` (every change below, applied to the copy).

##### Result in one line
All 90 answers are right (my own solutions, made before reading the key, agree 90/90). 18 fields in 11 questions changed; no question replaced; no wrong answer; all 30 past questions match the book; one writer flag (Q42) was wrong.

##### Counts after the check

| Unit | Questions | Past | New | easy | medium | hard |
|---|---|---|---|---|---|---|
| 1 Commercial Mathematics | 3 | 1 | 2 | 0 | 3 | 0 |
| 2 Statistics | 4 | 1 | 3 | 4 | 0 | 0 |
| 3 Algebra | 18 | 6 | 12 | 8 | 8 | 2 |
| 4 Probability | 2 | 1 | 1 | 2 | 0 | 0 |
| 5 Set Theory | 6 | 2 | 4 | 6 | 0 | 0 |
| 6 Real Analysis | 8 | 3 | 5 | 5 | 3 | 0 |
| 7 Trigonometry | 6 | 2 | 4 | 1 | 3 | 2 |
| 8 Complex Numbers (+ heights) | 5 | 2 | 3 | 2 | 2 | 1 |
| 9 Geometry | 4 | 0 | 4 | 3 | 1 | 0 |
| 10 Coordinate Geometry | 10 | 4 | 6 | 6 | 3 | 1 |
| 11 Calculus | 11 | 4 | 7 | 5 | 5 | 1 |
| 12 Vector Analysis | 5 | 2 | 3 | 5 | 0 | 0 |
| 13 Statics | 4 | 1 | 3 | 2 | 1 | 1 |
| 14 Dynamics | 4 | 1 | 3 | 1 | 1 | 2 |
| **Total** | **90** | **30** | **60** | **50** | **30** | **10** |

- Unit counts = blueprint §A1; topic counts = §A2 with the T3 swaps of §A6 (`fmtcheck.py`: no mismatch). Past questions per unit = the T3 column of §A6 exactly.
- Difficulty = target 50 easy (20 recall + 30 one-step) / 30 medium / 10 hard. Hard items now: Q2, 8, 15, 17, 44, 58, 62, 64, 72, 80.
- Key: A 22, B 22, C 23, D 23; longest run 3 (unchanged). One "None of these" (Q44, a wrong option). No all-numeric option set in ascending or descending order. Two "which of the following" stems (Q18, Q49). Units interleaved.

##### Every change (number: what was wrong → what it is now)
1. **Q1** note on option (c) did not say what was wrong → "middle root taken as 15/3 = 5; the sum would then be 15, not 9".
2. **Q2** (new, labelled hard) was a one-point slope computation, a medium item → the stem now asks for the angle "at their point of intersection other than the origin", so the student must find (4, 4) first; the solution starts with that step; the note on option (a) π/2 now says it is the angle at the origin. Answer unchanged (tan⁻¹ 3/4).
3. **Q27** solution had ₹ inside math mode (KaTeX warns on the character) → ₹ moved outside the `$…$`.
4. **Q29** (UP TGT 2013) a needed condition was missing: with only "constants", x may be negative and s has no minimum → stem now "where a, b, c are positive constants and x, y > 0"; the solution and flag say so. Answer 2abc unchanged.
5. **Q42** flag said the book prints no question number or opening words → wrong: the full page shows "471. The value of … Will be–" in the top 71 pt that the PDF crop box hides (the writer's renders kept the crop box). The mock's text already matches the book, so the flag is now empty.
6. **Q46** (new) labelled hard; √3 cos θ + sin θ = √2 is three standard steps → medium.
7. **Q53** (UP TGT 2013) misprint fix was only in `flag` → also stated in the solution (the checker brief asks for it there).
8. **Q68** note on option (d) "takes lim (1 − cos h)/h as 1" does not lead to the option 1 (it would give ½) → "The limit is 0, not 1: (1 − cos h)/(2h) → 0."
9. **Q72** (UP TGT 2010) the writer added g = 9.8, with which the depth is 490.1 m, not the option's 490.5 m → g = 9.81, with which the fall takes exactly 10 s, the sound 1.5 s and the depth exactly 490.5 m (clearly the setter's numbers: 327 × 1.5 = 490.5 = ½ · 9.81 · 10²). Solution, note (a) and flag rewritten.
10. **Q76** solution had ₹ inside math mode → moved outside.
11. **Q80** (UP TGT 2010) labelled medium; needs the half-angle formula plus spotting the projection formula b = a cos C + c cos A → hard (keeps 10 hard after item 6).

##### Past questions verified against the book (30 of 30)
Each read from my own page image (crop box set to the media box): stem and options copied faithfully (options re-ordered; misprints fixed as listed), tag printed as in `origin`, answer solved independently. All 30 are in `pools/tgt-mock3.tsv` (Q471 appears there with number "?"), none in `pools/excluded.tsv`.

| Mock Q | Book page / Q | Tag | Copy | Book key | Mine |
|---|---|---|---|---|---|
| 6 | 1220 / 464 | TGT 2013 | exact (punctuation) | 72 | 72 |
| 7 | 319 / 2072 | TGT 2010 | exact; (d) None of these → (2,1,1) | 1,1,2 | 1,1,2 |
| 9 | 403 / 237 | TGT 2010 | exact ("coplaner" spelt right) | −4 | −4 |
| 10 | 957 / 1093 | TGT 2010 | exact | −ax−by−cz | same |
| 13 | 688 / 1068 | TGT 2010 | exact | ⅓, −⅙ | same |
| 15 | 908 / 608 | TGT 2010 | exact | p cos α + a = 0 | same |
| 16 | 458 / 186 | TGT 2013 | exact | cos 8θ + i sin 8θ | same |
| 17 | 96 / 559 | TGT 2010 | exact; (d) none of these → (ℓn)^{log_m ℓ} | (ℓn)^{log_ℓ m} | same |
| 19 | 1006 / 336 | TGT 2010 | exact | 7 | 7 |
| 24 | 401 / 225 | TGT 2013 | exact | √57 | √57 |
| 25 | 908 / 609 | TGT 2010 | exact; (d) None of these → tangent 2x − 3y = 12 | 3x + 2y = 5 | same |
| 29 | 605 / 655 | TGT 2013 | exact + condition added (change 4) | 2abc | 2abc |
| 36 | 199 / 1302 | TGT 2013 | wording tidied ("in all the three athletics") | 43 | 43 |
| 42 | 1222 / 471 | TGT 2013 | exact (number and "The value of" are printed) | 5 | 5 |
| 44 | 1147 / 385 | TGT 2010 | exact ("ration" → "ratio"); None of these kept | √2 | √2 |
| 48 | 687 / 1062 | TGT 2013 | exact | 2 | 2 |
| 49 | 241 / 1628 | TGT 2010 | exact | N | N |
| 51 | 553 / 372 | TGT 2013 | exact | ½ | ½ |
| 53 | 132 / 802 | TGT 2013 | misprint fixed ("Q is even the sum of the terms") | 4PQ | 4PQ |
| 59 | 907 / 599 | TGT 2013 | exact (grammar) | (2/3, 0) | (2/3, 0) |
| 60 | 1069 / 314 | TGT 2013 | exact | ⅛ | ⅛ |
| 61 | 198 / 1295 | TGT 2013 | grammar tidied | [0, 3] | [0, 3] |
| 62 | 458 / 188 | TGT 2013 | exact; (c) −1 → √2 | 1 | 1 |
| 68 | 555 / 382 | TGT 2010 | exact (grammar) | 0 | 0 |
| 72 | 1148 / 387 | TGT 2010 | exact + g added (change 9); book gives no g, its solution uses 4.9 and writes 490.5 | 490.5 m | 490.5 m (g = 9.81) |
| 80 | 1042 / 167 | TGT 2010 | exact | A.P. | A.P. |
| 81 | 117 / 715 | TGT 2010 | exact | (3, 2) | (3, 2) |
| 82 | 553 / 371 | TGT 2013 | exact | does not exist | same |
| 84 | 62 / 360 | TGT 2010 | exact; (d) None of these → sign-slip equation | bcx² + (b²+ac)x + ab = 0 | same |
| 85 | 117 / 710 | TGT 2013 | grammar tidied, independence stated | ⅔ | ⅔ |

The book's key is right for all 30 (its worked value for Q72, 490.5 with g = 9.8, is an arithmetic slip; the option is right with g = 9.81).

##### The writer's 14 flagged edits
Fair and faithful: Q7, Q17, Q25, Q84 (None of these replaced by a real distractor that is false), Q36, Q61, Q68, Q85 (wording; Q85's "independently" is a needed condition), Q44 ("ratio"; None of these kept, the mock's only one), Q53 (obvious misprint), Q62 (−1 replaced by √2, false). Not accepted as they were: **Q29** (condition only "implied" → now stated), **Q42** (the "no number printed" claim is false), **Q72** (g = 9.8 does not give 490.5 → g = 9.81).

##### Script checks
- `verify.py` recomputes **81 of 90** answers a second way (sympy limits, integrals, determinants, ODE substitution, exact arithmetic, brute force over committees, cards, relations, subgroups of Z₁₂, nPr/nCr, numeric checks of identities and of each trig-equation family) and confirms that exactly the keyed option is true. Result on `mock.checked.jsonl`: 0 mismatches. (A first run flagged Q83 as having two true options; that was my test's choice a − b = h, which makes options (b) and (d) coincide; with other values only (b) holds.)
- By reasoning only (definitions/recall): Q18, 22, 39, 43, 45, 49, 66, 73, 79.
- `fmtcheck.py`: 90 lines of valid JSON, n = 1–90, same keys and order as the original, four distinct options, answer 0–3, level TGT, topic ids in `topics.txt`, topic counts = T3, even `$`, balanced braces, no `$$` in questions/options, no `align`/`\displaystyle`. `latexcheck.py`: only KaTeX-supported commands; no non-ASCII character left inside math.

##### Near-copies
TF-IDF against all 745 questions of the seven solved papers plus substring search of ~100 key phrases/numbers (`pats.txt`): no stem or number set of the mock is in the solved papers. Same-idea siblings, allowed by §0.1: Q30 (R = 4√3 H → 30°) vs UP PGT 2026 Q49 (H = R/4 → 45°) and UP TGT 2021 Q67; Q34 time of flight vs UP TGT 2026 Q50 range; Q71 cosh 2x vs UP TGT 2026 Q78 cosh² − sinh²; Q79 finite-subset subgroup test vs UP TGT 2026 Q89 (ab⁻¹ test); Q83 bisector formula vs UP PGT 2026 Q120; Q43 Paasche vs UP TGT 2026 Q20 Fisher; Q18 uncountable vs UP TGT 2026 Q99 countable; Q12 a new relation with the same option wording as GIC 2026 Q55. No two questions of the mock are variants of each other.

##### Doubtful or borderline (left as they are)
- Q82 (|x| + |x − 2| at x = 2) is filed under tp-06-01 (Calculus); tp-05-07 would also fit, but moving it would break the unit counts.
- Difficulty is a judgment: Q8 (Napier's analogy) and Q64 (4abc determinant) are at the easy end of "hard"; Q28 (polar conic, normalise and read off) is at the easy end of "medium".
- Q79 is a close sibling of UP TGT 2026 Q89 (same stem shape, different condition); acceptable under §0.1 but the nearest item to a solved paper.
- Q54 assumes the two strings are on opposite sides of the vertical (the only way both can hold the weight); Q36 reads "14 can play hockey and cricket" as "both", the standard reading.

##### Replacements to avoid repeats across the expected papers (22 November 2026)

Eleven new questions of this paper were the same as new questions of Expected TGT 2, which keeps its versions. The checked file was first copied to `mock.checked.v1.jsonl`. `replace.py` rebuilds `mock.checked.jsonl` from that copy and changes only these 11 lines; the other 79 lines are byte-identical. Each replacement keeps `n`, `topic`, `difficulty` (all 11 are easy, kept at the upper end of easy for this harder paper) and the `answer` index, so the key letters do not move. `origin` is "new", `key` is null and `flag` names the repeated question ("replaced to avoid a repeat of Expected TGT 2 Q.."). Each has a new solution, four option notes (why it is right or which slip gives it) and a new fact. Scripts: `corpus.py`, `replace.py`, `verify_repl.py`, `simrepl.py`.

| Q | Topic | Old question (= Expected TGT 2) | New question | Answer | How the answer was verified (`verify_repl.py`) |
|---|---|---|---|---|---|
| 4 | tp-16-06 | corrected mean after 53 was copied as 35 (= Q72) | mode of grouped data: modal class 40–50 with f = 16, the classes before and after it 10 and 12 | 46 (c) | formula l + (f1 − f0)/(2f1 − f0 − f2)·h in exact fractions, and separately the histogram construction (similar triangles) solved by sympy; only 46 matches |
| 18 | tp-05-02 | which set is uncountable (the irrationals) (= Q28) | the Cantor middle-thirds set: countable or uncountable, total length 0 or 1 | uncountable, length 0 (c) | sympy sum of removed lengths Σ 2^(k−1)/3^k = 1, so length left 0; ternary digits of 1/4 are 0, 2, 0, 2, … (in the set, not an endpoint); the map "digit 2 → 1, read in binary" sends the set onto [0, 1], checked in exact fractions on 200 random targets (40-digit expansions); uncountability follows from that onto map (reasoning) |
| 22 | tp-05-03 | derived set of {1/n} (= Q36) | interior of ℚ as a subset of ℝ | ∅ (d) | by reasoning (the irrationals are dense); the script shows x + √2/n is irrational and inside (x − ε, x + ε) for sample rational x and ε |
| 26 | tp-01-07 | remainder on division by ax − b (= Q35) | positive square root of 11 − 6√2 | 3 − √2 (d) | sympy `sqrtdenest` gives 3 − √2; each option squared and its sign tested: only 3 − √2 is positive with square 11 − 6√2 |
| 33 | tp-12-02 | formula of a × (b × c) (= Q88) | the value of [a + b, b + c, c + a] | 2[a b c] (b) | sympy determinant with nine symbolic components: the value minus m[a b c] vanishes only for m = 2; also [a − b, b − c, c − a] = 0 (the note on option c) |
| 38 | tp-16-01 | king or heart from 52 cards (= Q69) | three events, at least one occurs: P(A), P(B), P(C) = 0.3, 0.4, 0.5; pairs 0.1, 0.2, 0.15; all three 0.05 | 0.8 (c) | exact fractions: inclusion–exclusion, and separately the seven Venn regions (all ≥ 0, P(none) = 0.2) added up; both give 0.8 |
| 39 | tp-05-04 | monotone increasing sequence bounded above (= Q12) | lim (3ⁿ + 4ⁿ)^(1/n) | 4 (b) | sympy limit = 4; float value at n = 400 also 4 |
| 45 | tp-08-01 | order and degree of the radius-of-curvature equation (= Q54) | differential equation of y = Ae^(2x) + Be^(−3x) | y″ + y′ − 6y = 0 (a) | sympy: the residual of each option with general A, B; only (a) vanishes identically; `dsolve` of (a) gives back e^(2x) and e^(−3x) |
| 47 | tp-17-06 | tangents PA, PB with ∠APB = 50°, find ∠AOB (= Q52) | direct common tangent of circles of radii 11 cm and 4 cm, centres 25 cm apart | 24 cm (a) | √(25² − 7²), and separately with coordinates: sympy solves both direct tangent lines and measures the distance between the points of contact: 24 for both; the transverse tangent √(25² − 15²) = 20 is option (b) |
| 75 | tp-04-05 | order of 7 in {1, 3, 7, 9} mod 10 (= Q42) | order of A = [[0, −1], [1, −1]] in the group of non-singular 2 × 2 real matrices | 3 (d) | sympy matrix powers: det A = 1, A² ≠ I, A³ = I |
| 78 | tp-01-07 | number of digits in 2⁵⁰ (= Q17) | if 2^x = 3^y = 6^z (x, y, z ≠ 0), then z = ? | xy/(x + y) (a) | numerically for k = 7, 0.3 and 123.4 (x = ln k/ln 2, y = ln k/ln 3, z = ln k/ln 6): only (a) equals z each time; also a symbolic identity in sympy |

**Not a repeat.** `corpus.py` collects 1,285 questions: every file in `data\mq\*.json` except `index.json` (so Expected TGT 2 and 4 and the seven solved papers are included), mocks `tgt-1` and `tgt-5`, and this paper. I read every corpus question in the 11 topics and searched for keywords (Cantor, interior, modal class, common tangent, 2^x/3^y/6^z, 3^n/4^n, square root of a surd, three events, order of a matrix). None of the 11 new items is there, and none uses the same skeleton or stock fact. `simrepl.py` (TF-IDF): the highest similarity of a new item to any corpus question is 0.77 (Q39 against Expected TGT 2 Q43, lim (1 + 3/n)ⁿ, a different limit). I read every top match, and all are different questions. Ten of the eleven new items use a syllabus line that none of these papers asks: grouped mode, the Cantor set, the interior of a set, the square root of a binomial surd, [a + b, b + c, c + a], the addition theorem for three events, (aⁿ + bⁿ)^(1/n), common tangents of two circles, the order of a matrix element, and a^x = b^y = (ab)^z. The eleventh, Q45, comes from a line the other papers already use (forming a DE from a family of curves), but for a family none of them asks.

**Checks after the change.**
- `fmtcheck.py`: no messages. That means 90 lines of valid JSON, n = 1–90, the same keys in the same order, topic counts equal to T3 (identical to v1), four distinct options, the LaTeX rules met (no `$$` in a question or option, no `\displaystyle`, no `align`) and braces balanced.
- `latexcheck.py`: only KaTeX commands, no non-ASCII character inside math, and no numeric option set in ascending or descending order.
- Unchanged from v1: difficulty 50 / 30 / 10, origin 30 past / 60 new, key A 22, B 22, C 23, D 23, longest run 3. "None of these" appears only in Q44. Only Q49 now has a "which of the following" stem.
- `verify_repl.py`: in all 11 questions the keyed option is the only true one.
- `verify.py`: its checks at these 11 numbers still test the old questions and are replaced by `verify_repl.py`. It still finds 0 mismatches on the other 79.

**Seen but not changed (outside this task).** These questions of this paper are the same as, or the same skeleton as, questions of mocks 1 and 5:
- Q12 = T5 Q40 (same relation, word for word)
- Q87 = T5 Q60 (sum of the nth roots of unity, word for word)
- Q31 = T5 Q55 (lim √(n² + n) − n)
- Q50 = T1 Q26 (subgroups of a cyclic group of order 12)
- Q79 = T1 Q12 = T5 Q11 (finite-subset subgroup test)
- Q83 ≈ T1 Q62 (bisectors of ax² + 2hxy + by²)
- Q5 ≈ T1 Q51 (CG of a solid cone)
- Q34 ≈ T1 Q35 (time of flight)
- Q54 ≈ T1 Q29 (weight on strings at 30° and 60°: 10 N against 20 N)
- Q56 ≈ T5 Q25 (A, G, H relation)
- Q74 ≈ T5 Q46 (section formula, same point A)
- Q71 ≈ T5 Q15 (cosh 2x = cosh²x + sinh²x, asked both ways)
- Q88 ≈ T5 Q30 (|2A| against |2A⁻¹| with |A| = 4)

---

## Expected TGT paper 4 · syllabus gaps

- In the app: `data/mq/exp-tgt-2026-4.json`, 90 questions (24 asked before), one clock of 100 minutes, −1/3 mark for a wrong answer.

### Writing

### TGT mock 4 (level TGT) — expected paper, UP TGT Mathematics, December 2026

**Emphasis: syllabus gaps** (blueprint §A5/§A6, mock T4). Book sources: UP TGT 1999 and UP TGT 2005 only (pool `pools/tgt-mock4.tsv`).

Output: `mock.jsonl` (90 lines, n = 1..90). Data sources for the build: `data_past.py`, `data_new.py`; build: `build.py`; second-way checks: `verify.py`; overlap scan against the seven solved papers: `simcheck.py`.

#### Counts per unit

| Unit | Count | Past | New | New on A5 gaps |
|---|---|---|---|---|
| 1 Commercial Mathematics | 3 | 1 | 2 | 2 |
| 2 Statistics | 4 | 0 | 4 | 2 |
| 3 Algebra | 18 | 6 | 12 | 4 |
| 4 Probability | 2 | 1 | 1 | 1 |
| 5 Set Theory | 6 | 2 | 4 | 3 |
| 6 Real Analysis | 8 | 2 | 6 | 4 |
| 7 Trigonometry | 6 | 2 | 4 | 2 |
| 8 Complex Numbers (+ heights and distances) | 5 | 2 | 3 | 1 |
| 9 Geometry | 4 | 0 | 4 | 1 |
| 10 Coordinate Geometry | 10 | 2 | 8 | 5 |
| 11 Calculus | 11 | 4 | 7 | 2 |
| 12 Vector Analysis | 5 | 2 | 3 | 2 |
| 13 Statics | 4 | 0 | 4 | 1 |
| 14 Dynamics | 4 | 1 | 3 | 2 |
| **Total** | **90** | **25** | **65** | **32** |

Topic counts equal the blueprint A2 table with the T4 swaps of §A6 (checked by `build.py`):

tp-01-01 1, tp-01-02 1, tp-01-03 2, tp-01-04 1, tp-01-05 2, tp-01-06 2, tp-01-07 3, tp-01-08 2, tp-01-09 1, tp-02-01 2, tp-02-02 1, tp-02-03 2, tp-02-04 1, tp-04-05 1, tp-04-07 1, tp-04-09 1, tp-05-02 1, tp-05-03 2, tp-05-04 2, tp-05-06 1, tp-05-07 1, tp-06-01 2, tp-06-04 1, tp-06-06 1, tp-06-07 1, tp-07-01 1, tp-07-02 1, tp-07-03 1, tp-07-05 1, tp-07-10 1, tp-08-01 1, tp-08-02 1, tp-09-01 1, tp-09-02 2, tp-09-03 1, tp-09-04 1, tp-09-05 1, tp-09-06 1, tp-10-01 1, tp-10-04 2, tp-10-08 1, tp-11-01 1, tp-11-02 1, tp-11-03 1, tp-11-04 2, tp-11-05 1, tp-11-06 1, tp-11-07 1, tp-11-08 1, tp-12-01 2, tp-12-02 3, tp-13-05 1, tp-15-01 1, tp-15-02 1, tp-15-05 1, tp-15-06 1, tp-15-09 2, tp-15-12 1, tp-15-13 1, tp-16-01 1, tp-16-02 1, tp-16-06 2, tp-16-07 1, tp-16-08 1, tp-17-02 1, tp-17-03 1, tp-17-04 1, tp-17-05 1, tp-17-06 3

#### Difficulty

- easy 70 (recall 38 + one-step 32), medium 16, hard 4 — target 38 / 32 / 16 / 4.
- Q1–30: recall 9, one-step 13, medium 7, hard 1
- Q31–60: recall 13, one-step 10, medium 6, hard 1
- Q61–90: recall 16, one-step 9, medium 3, hard 2
- Hard items at Q24, Q43, Q77, Q87.

#### Form

- Answer letters A/B/C/D: 22/23/23/22; longest run 3.
- 'None of these': 1 (kept once, as a wrong option, in the past question at Q15).
- All-numeric option sets: 29, none in ascending order.
- Adjacent same-unit pairs: 8 (random shuffling gives about 9); no three in a row from one unit; no two adjacent items on the same topic.

#### Past questions used (number in mock → source tag → book page and question number)

| Mock Q | Source | Book | Topic | Difficulty |
|---|---|---|---|---|
| 3 | UP TGT 2005 | p909 Q613 | tp-11-04 | easy |
| 6 | UP TGT 1999 | p89 Q516 | tp-01-06 | medium |
| 8 | UP TGT 1999 | p760 Q1392 | tp-08-02 | easy |
| 9 | UP TGT 1999 | p371 Q50 | tp-12-01 | easy |
| 11 | UP TGT 1999 | p517 Q171 | tp-06-01 | medium |
| 14 | UP TGT 1999 | p1031 Q104 | tp-09-02 | easy |
| 15 | UP TGT 2005 | p201 Q1322 | tp-01-02 | easy |
| 16 | UP TGT 1999 | p441 Q82 | tp-10-01 | easy |
| 18 | UP TGT 1999 | p1212 Q408 | tp-17-03 | easy |
| 20 | UP TGT 2005 | p201 Q1320 | tp-01-01 | easy |
| 29 | UP TGT 2005 | p133 Q807 | tp-01-04 | easy |
| 32 | UP TGT 1999 | p274 Q1822 | tp-02-01 | easy |
| 33 | UP TGT 1999 | p834 Q170 | tp-11-01 | easy |
| 38 | UP TGT 1999 | p516 Q168 | tp-05-06 | medium |
| 40 | UP TGT 1999 | p376 Q82 | tp-12-02 | easy |
| 44 | UP TGT 1999 | p1106 Q153 | tp-15-09 | medium |
| 49 | UP TGT 2005 | p560 Q406 | tp-05-07 | medium |
| 52 | UP TGT 1999 | p1212 Q405 | tp-01-07 | medium |
| 53 | UP TGT 2005 | p984 Q180 | tp-16-01 | easy |
| 64 | UP TGT 1999 | p1212 Q410 | tp-07-10 | easy |
| 74 | UP TGT 1999 | p273 Q1819 | tp-02-03 | easy |
| 80 | UP TGT 1999 | p1031 Q106 | tp-09-03 | easy |
| 82 | UP TGT 1999 | p653 Q900 | tp-07-01 | medium |
| 87 | UP TGT 2005 | p1053 Q224 | tp-09-06 | hard |
| 90 | UP TGT 1999 | p45 Q258 | tp-01-08 | medium |

#### New questions on the §A5 syllabus gaps

- Q2 (tp-05-03): A set $S \subseteq \mathbb R$ is called perfect if:
- Q4 (tp-11-03): When the axes are rotated through $45^\circ$ (origin fixed), the equation $x^2 - y^2 = a^2$ bec…
- Q5 (tp-01-09): According to Peano's postulates, the natural number 1:
- Q7 (tp-16-08): Laspeyres' price index number is:
- Q10 (tp-09-01): An arc of a circle of radius 14 cm subtends an angle of $45^\circ$ at the centre. The length of…
- Q12 (tp-17-05): In triangle $ABC$, $AD$ is the median to $BC$. If $AB = 6$ cm, $AC = 8$ cm and $BC = 10$ cm, th…
- Q13 (tp-17-02): If the speed of a boat downstream is $u$ km/h and upstream is $v$ km/h, then the speed of the s…
- Q24 (tp-06-06): For $f(x) = x(x + 3)e^{-x/2}$ on $[-3, 0]$, the value of $c$ given by Rolle's theorem is:
- Q25 (tp-01-05): For $-1 < x \le 1$, the series $x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \dfrac{x^4}{4} + \dots$ i…
- Q27 (tp-15-06): A uniform chain hangs in the common catenary $y = c\cosh\dfrac{x}{c}$. If $w$ is its weight per…
- Q31 (tp-12-02): The vector triple product $\vec a \times (\vec b \times \vec c)$ is equal to:
- Q35 (tp-01-05): The sum of the series $1 + \dfrac{2}{1!} + \dfrac{3}{2!} + \dfrac{4}{3!} + \dots$ to infinity i…
- Q36 (tp-02-02): For the system $AX = B$ with $X = [x\ \ y\ \ z]^T$, $A^{-1} = \begin{bmatrix}1&2&0\\0&1&1\\1&0&…
- Q39 (tp-04-09): If $f : G \to G'$ is a group homomorphism and $e, e'$ are the identities of $G, G'$, then $f(e)…
- Q42 (tp-11-06): The line $lx + my + n = 0$ is a normal to the ellipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$…
- Q43 (tp-16-02): A and B throw a die alternately, A starting. The first to throw a six wins. The probability tha…
- Q45 (tp-11-02): The equation of the bisectors of the angles between the lines $ax^2 + 2hxy + by^2 = 0$ is:
- Q47 (tp-12-02): The moment about the origin of the force $2\hat i + \hat j - \hat k$ acting at the point $(1, 1…
- Q48 (tp-09-02): $\tan\dfrac{\theta}{2}$ is equal to:
- Q50 (tp-05-04): If $\lim_{n\to\infty} a_n = l$, then $\lim_{n\to\infty} \dfrac{a_1 + a_2 + \dots + a_n}{n}$ equ…
- Q55 (tp-04-07): If $H$ is a subgroup of order 6 of a group $G$ of order 24, the number of distinct left cosets …
- Q56 (tp-07-02): $\int \dfrac{dx}{(x - 1)(x - 2)}$ is equal to:
- Q57 (tp-13-05): The equation of the right circular cylinder of radius 3 whose axis is the $z$-axis is:
- Q59 (tp-05-03): The derived set of $A = \left\{\frac1n : n \in \mathbb N\right\}$ is:
- Q63 (tp-15-13): A particle moves along a curve with speed $v$. At a point where the radius of curvature is $\rh…
- Q65 (tp-15-12): For a particle moving in a plane with polar coordinates $(r, \theta)$, the transverse component…
- Q69 (tp-11-05): The line $y = mx + \dfrac{a}{m}$ touches the parabola $y^2 = 4ax$ at the point:
- Q70 (tp-01-06): If $A$, $G$ and $H$ are respectively the arithmetic, geometric and harmonic means of two positi…
- Q73 (tp-16-06): In a pie chart, the central angle of the sector for a component is:
- Q77 (tp-10-08): If $\sin(\alpha + i\beta) = x + iy$ ($\beta \ne 0$), then $\dfrac{x^2}{\cosh^2\beta} + \dfrac{y…
- Q81 (tp-06-07): If the equation of a curve remains unchanged when $y$ is replaced by $-y$, the curve is symmetr…
- Q85 (tp-17-04): A man buys ₹100 shares paying a 9% dividend at ₹120 each. The rate of return on his investment …

#### Flags

- Q3 (UP TGT 2005, p909 Q613): Book options were 0, 1, $-1$ and 'None of these' (its key); 'None of these' replaced by $-h/k$, and 0, 1 by $h/k$, $k/h$.
- Q8 (UP TGT 1999, p760 Q1392): Book option (c) printed 'y = x (5+1)', read as $y = 5(x + 1)$. Wording tidied.
- Q14 (UP TGT 1999, p1031 Q104): Wording tidied.
- Q15 (UP TGT 2005, p201 Q1322): The book's key is $\{(2,1), (4,2), \dots\}$, which is $R$ itself; the correct answer is $\{(1,2), (2,4), \dots\}$. Wording tidied. 'None of these' kept (its only use in this mock).
- Q16 (UP TGT 1999, p441 Q82): The book's option (d) 'None of these' (its key) was replaced by $-1/5$. Wording ('imaginary number') tidied.
- Q18 (UP TGT 1999, p1212 Q408): Wording tidied ('27 times of itself'). Same idea as UP TGT 2021 Q30 (doubles in 5 years, 8 times in 15), with different numbers.
- Q20 (UP TGT 2005, p201 Q1320): The book's option (d) 'None of these' was replaced by 200.
- Q29 (UP TGT 2005, p133 Q807): Book wording 'coefficient of the greatest term' read as 'greatest coefficient' (what is meant).
- Q33 (UP TGT 1999, p834 Q170): Wording tidied ('pair of linear equation').
- Q44 (UP TGT 1999, p1106 Q153): The book's option (d) 'None of these' was replaced by 2.5; unit (m/s) added; wording tidied.
- Q49 (UP TGT 2005, p560 Q406): The book's key is 'not differentiable at $x = 0$', which is false ($f \equiv 0$ near 0); the correct answer is 'continuous at $x = 0$'. Wording tidied.
- Q53 (UP TGT 2005, p984 Q180): The book's option (d) 'None of these' (its key) was replaced by the value $1/3$. Wording tidied ('Don't be rotten').
- Q64 (UP TGT 1999, p1212 Q410): Garbled book wording rephrased ('the volume of the cone is equal to the original. How many times will it increase from the volume?').
- Q74 (UP TGT 1999, p273 Q1819): Wording tidied ('Find the value of given determinant … is').
- Q80 (UP TGT 1999, p1031 Q106): The book's option (d) 'None of these' was replaced by $\{\pi/3, 2\pi/3\}$. Wording tidied.
- Q82 (UP TGT 1999, p653 Q900): '+ C' added to the options; wording tidied.
- Q87 (UP TGT 2005, p1053 Q224): The book's option (d) 'None of these' was replaced by the height of the flagstaff's top ($h + a$).
- Q90 (UP TGT 1999, p45 Q258): Wording tidied.

#### Answers checked a second way

- `verify.py` re-derives the answer of **81 of the 90** questions independently of the written solution (sympy 1.14 from `ckAQ/lib`, exact fractions, numeric evaluation, brute-force counting, and a Monte-Carlo run for the die game). It checks every option, not only the key, and asserts that exactly one option passes. Result: 0 mismatches.
- The other 9 are one-line definitions with nothing to compute: pie-chart angle, the median formula's $C$, Laspeyres' index, density of $\mathbb Q$, Peano's third postulate, $f(e) = e'$, the irrationals as uncountable, the perfect set ($S = S'$), and the degree of $y'' + \sin y' = 0$. I checked them by hand against the notes topics.
- `build.py` asserts: 90 lines, n = 1..90, valid JSON, every topic id in `topics.txt`, the topic and unit counts listed above, 4 distinct options, and that each final key points to the option it should. `lint.py` checks the LaTeX: `$` balanced, braces balanced, `\left`/`\right` paired, no `$$` outside solutions, no `\displaystyle`/`align`. Only KaTeX-supported commands are used.

#### Departures from the blueprint and why

- **Past questions per unit.** §A6 asks for 3 in Real Analysis and 3 in Coordinate Geometry. This mock has **2 and 2**, and puts the other two in **Algebra (6 instead of 5) and Calculus (4 instead of 3)**. The total stays 25.
  - Real Analysis: the 1999/2005 pool's Real Analysis items are limits and continuity. In T4, `tp-05-06` and `tp-05-07` have one slot each. The only other item (p347 Q31, the series $\sum (n+1)/n^p$) belongs to `tp-05-05`, which has no T4 slot.
  - Coordinate Geometry: only straight-line (`tp-11-01`) and circle (`tp-11-04`) items fit T4's slots. The 3-D lines and planes items (p918, p930, p941) have no slot. The parabola-condition item at p845/846 is tagged TGT 2009, not 1999/2005. p910 Q614 lost its first line in the book.
- **Same idea as a solved paper but different numbers (kept, and noted in each flag):**
  - Q18 (p1212 Q408, compound interest triples in 4 years) uses the same idea as UP TGT 2021 Q30 (doubles in 5 years). The key numbers differ, so it is not an excluded repeat.
  - Q53 (mangoes) is the same type as LT 2025 Q49 (balls).

#### Pool items read but not used (overlap with the seven solved papers)

- p441 Q84, $(1-\omega+\omega^2)^5 + (1+\omega-\omega^2)^5$: the same expression is in LT 2018 Q33.
- p1070 Q318, $\tan(\cos^{-1}x)$: UP TGT 2021 Q49 differentiates exactly this.
- p110 Q660, SCHOLAR: the same skeleton and the same answer (120) as UP TGT 2021 Q55 (POSTMAN).
- p175 Q1103, reflexive relations: LT 2025 Q91.
- p120 Q729, triangles from an octagon: GIC 2026 Q66.
- p201 Q1321, $A - (A - B)$: UP TGT 2021 Q116.
- p201 Q1318, $f(x + 1/x)$: UP TGT 2021 Q105.
- Also rejected:
  - p760 Q1394: two options are equivalent families.
  - p1031 Q105: needs a domain that is not stated.
  - p653 Q897: the answer depends on whether $m = n$.
  - p120 Q728 / p984 Q182: 'one of them alive' is ambiguous.

#### New items closest to a solved paper (`simcheck.py`, TF-IDF; checked by reading)

- Q47 (moment of a force about the origin) vs UP TGT 2021 Q3: that question takes the moment about the point (1, 2, −1), with a different force.
- Q65 (transverse **velocity**) vs GIC 2026 Q105 (transverse **acceleration**).
- Q26 ('which set is **uncountable**') vs UP TGT 2026 Q99 ('which is countable'): the options are different.
- Q23 (involutory) is a sibling of UP TGT 2026 Q54 (idempotent).
- None of the new stems copies a solved-paper stem.

#### Book keys found wrong (our answer differs from the book)

- Q15 (p201 Q1322): the book's key is $R$ itself, not $R^{-1}$.
- Q49 (p560 Q406): the book says $[\tan^2 x]$ is not differentiable at 0. In fact $f \equiv 0$ near 0.
- Q16, Q53, Q3: the book's key was 'None of these'. It was replaced by the true value, as the flags say.

### Independent check

#### Expected TGT mock 4: check of 22 November 2026

Mock checked: `mocks/tgt-4/mock.jsonl` (mock T4, emphasis "syllabus gaps"; 25 past questions from UP TGT 1999 and 2005, 65 new). Copy of the writer's file: `mock.orig.jsonl`. Output: `mock.checked.jsonl` (90 lines, valid JSON). Helper scripts in this folder: `dumpq.py` (questions without keys, for solving blind), `mine.py` (my blind answers against the key), `fmt.py` (format, counts, key balance), `sim.py` / `sim2.py` / `grepsolved.py` / `grepmocks.py` (overlap with the papers in `data\mq` and the other mocks), `locate*.py` / `clip.py` (book page images, crop box set to the media box), `repl.py` + `build.py` (my replacements and edits → `mock.checked.jsonl`), `verify.py` (second-way checks).

##### Result in one paragraph
I solved all 90 questions blind before looking at the keys: **all 90 of my answers agreed with the writer's keys; no wrong answer**. All **25 past questions match the book** (stem, options, tag); the writer's repairs (8 "None of these" options, 2 wrong book keys, misprints, garbled wording) are fair. I changed **27 questions** (26 replaced by new ones, 1 past question exchanged for another past question of the same pool and topic) and **edited 2** — almost all because they were copies or same-skeleton re-numberings of questions now in the app (`exp-tgt-2026-2.json` and `exp-tgt-2026-3.json` appeared in `data\mq` while I was checking) or of questions in the other TGT mocks (1 and 5, not yet in the app). Topic counts, unit counts, difficulty counts, key letters and the past/new split are unchanged.

##### Counts (checked file)

| Unit | Count | Past | New | easy / medium / hard |
|---|---|---|---|---|
| 1 Commercial Mathematics | 3 | 1 | 2 | 3 / 0 / 0 |
| 2 Statistics | 4 | 0 | 4 | 4 / 0 / 0 |
| 3 Algebra | 18 | 6 | 12 | 12 / 6 / 0 |
| 4 Probability | 2 | 1 | 1 | 1 / 0 / 1 |
| 5 Set Theory | 6 | 2 | 4 | 6 / 0 / 0 |
| 6 Real Analysis | 8 | 2 | 6 | 5 / 2 / 1 |
| 7 Trigonometry | 6 | 2 | 4 | 6 / 0 / 0 |
| 8 Complex Numbers (+ heights and distances) | 5 | 2 | 3 | 3 / 0 / 2 |
| 9 Geometry | 4 | 0 | 4 | 3 / 1 / 0 |
| 10 Coordinate Geometry | 10 | 2 | 8 | 9 / 1 / 0 |
| 11 Calculus | 11 | 4 | 7 | 7 / 4 / 0 |
| 12 Vector Analysis | 5 | 2 | 3 | 4 / 1 / 0 |
| 13 Statics | 4 | 0 | 4 | 4 / 0 / 0 |
| 14 Dynamics | 4 | 1 | 3 | 3 / 1 / 0 |
| **Total** | **90** | **25** | **65** | **70 / 16 / 4** |

- Topic counts equal blueprint §A2 with the T4 swaps of §A6 (checked by `fmt.py` against a table typed from the blueprint): no difference. Every topic id is in `topics.txt`.
- Difficulty: easy 70, medium 16, hard 4 (target 38 + 32 / 16 / 4). Medium items: Q4, 6, 11, 12, 19, 21, 30, 35, 38, 44, 47, 49, 52, 66, 82, 90; hard: Q24, 43, 77, 87. By my reading the easy items are now about 30 recall + 40 one-step (writer: 38 + 32), because several replacements ask for a one-line computation instead of a bare definition (the bare definitions were the items duplicated elsewhere). Q24 (Rolle with $e^{-x/2}$) and Q77 (separation of $\sin(\alpha + i\beta)$) are generous "hard" labels; I left them, as the hard count is the blueprint's.
- Key: A 22, B 23, C 23, D 22; longest run 3. "None of these": once (Q15, kept as a wrong option). No "All of these". 26 all-numeric option sets, none ascending.
- Past questions per unit as the writer had it: Algebra 6, Calculus 4, Real Analysis 2, Coordinate Geometry 2 (blueprint 5/3/3/3); the writer's reason (the 1999/2005 pool has no Real Analysis or 2-D items for T4's free slots) is right — I looked at the pool too.
- Format (`fmt.py`): 13 fields in the writer's order, four distinct options, answer 0–3, even `$` in every field, braces and `\left`/`\right` balanced, no `$$` in question, options, notes, fact; no `align`, no `\displaystyle`. LaTeX commands used are all KaTeX ones (`\overline`, `\csc`, `\varepsilon`, `\triangle`, `\binom`, `\operatorname`, `\pmod`, `\ker` …).

##### Past questions verified against the book (page images read at full size)

| Mock Q | Tag | Book | Copied exactly? | Book key | My answer |
|---|---|---|---|---|---|
| 3 | TGT 2005 | p909 Q613 | stem yes; options 0, 1, −1, None → $-h/k$, −1, $k/h$, $h/k$ (see below) | (d) None | $-h/k$ |
| 6 | TGT 1999 | p89 Q516 | yes (re-ordered) | (c) | same |
| 8 | TGT 1999 | p760 Q1392 | yes; misprint "y = x(5+1)" read as $5(x+1)$ | (a) | same |
| 9 | UP TGT 1999 | p371 Q50 | yes (re-ordered) | (a) | same |
| 14 | TGT 1999 | p1031 Q104 | yes | (d) | same |
| 15 | TGT 2005 | p201 Q1322 | yes, "None of these" kept | (a) — **wrong** ($R$ itself) | $\{(1,2),(2,4),\dots\}$ |
| 16 | TGT 1999 | p441 Q82 (options on the right column) | yes; None → $-1/5$ | (d) None | $-1/5$ |
| 18 | TGT 1999 | p1212 Q408 | yes | (c) | same |
| 20 | TGT 2005 | p201 Q1320 | yes; None → 200 | (c) | 300 |
| 29 | TGT 2005 | p133 Q807 | "coefficient of the greatest term" → "greatest coefficient" | (b) | same |
| 32 | TGT 1999 | p274 Q1822 | yes (re-ordered) | — | (a) not true |
| 33 | TGT 1999 | p834 Q170 | yes | — | 45° |
| 38 | TGT 1999 | p516 Q168 | yes | (b) | 1/6 |
| 40 | TGT 1999 | p376 Q82 | yes | (b) | 2 |
| 44 | TGT 1999 | p1106 Q153 | yes; None → 2.5, unit m/s added | (a) | 5 |
| 49 | TGT 2005 | p560 Q406 | yes | (c) — **wrong** | continuous at 0 |
| 52 | TGT 1999 | p1212 Q405 | yes | (c) | 5 |
| 53 | TGT 2005 | p984 Q180 | yes; None → 1/3 | (d) None | 1/3 |
| 64 | TGT 1999 | p1212 Q410 | garbled stem rephrased faithfully | — | 8 times |
| 74 | TGT 1999 | p273 Q1819 | yes | (b) | −18 |
| 80 | TGT 1999 | p1031 Q106 | yes; None → $\{\pi/3, 2\pi/3\}$ | (b) | $\{\pi/3, 5\pi/3\}$ |
| 82 | TGT 1999 | p653 Q900 | yes, "+ C" added | — | $\frac14\tan^{-1}(x + \frac12)$ |
| 87 | TGT 2005 | p1053 Q224 | yes; None → $h + a$ expression | (b) | same |
| 90 | TGT 1999 | p45 Q258 | yes | (d) | same |
| 11 (new pick) | TGT 2005 | p561 Q412 | yes; None → 1; "$(x \ne y)$" added | (b) | $-1/(1+x)^2$ |

(The writer's Q11, p517 Q171, also matched the book; it was exchanged for the reason given below.) The writer's mapping (log table) is right for every item. The book's keys are wrong at Q15 and Q49 and are "None of these" at Q3, Q16 and Q53, as the writer said.

**Are the writer's repairs fair?** Yes. Replacing a "None of these" key by the true value is what the blueprint (§0.1) asks; the new wrong options are the board's kind (sign slips, the slope of the radius, the other quadrant, the top of the flagstaff). Q3 needed more than that: with the book's options 0, 1, −1 the true value would have been the only expression in $h, k$, so replacing 0 and 1 by $h/k$ and $k/h$ is a fair repair (stem unchanged; flagged). Q8's "x(5+1)" is an obvious misprint. Q29's "coefficient of the greatest term" can only mean the greatest binomial coefficient (the greatest term depends on $x$). Q64's stem in the book is not English; the rephrasing keeps its meaning and its four options.

##### Every change (number, what was wrong, what it is now)

Overlap check: TF-IDF over the question + options against every file in `data\mq` (the seven solved papers plus Expected TGT 2 and 3, which the coordinator added during my check) and against the writer files of TGT mocks 1, 2, 3, 5 and PGT 1, then reading every pair above 0.5. A question is replaced when it is word for word, or the same exercise with other numbers, as a question in the app or in another TGT mock. Each replacement keeps the topic id, difficulty and key letter of the original, so all counts are unchanged; each was checked against the app and the other mocks again after writing.

| Q | Was | Problem | Now |
|---|---|---|---|
| 4 | rotation of $x^2 - y^2 = a^2$ through 45° | "rotated through 45°" could be read either way; (b) is the clockwise answer | "45° anticlockwise" added |
| 11 | past, UP TGT 1999 p517 Q171: $\frac{d}{dx}\sin^{-1}\frac{2x}{1+x^2}$ | same function, ask and answer as Expected TGT 2 Q83 (in the app) | past UP TGT 2005 p561 Q412: $x\sqrt{1+y} + y\sqrt{1+x} = 0$, $dy/dx = -1/(1+x)^2$ (same pool, topic, difficulty). p559 Q401 was rejected: its curve and point are LT 2018 Q66 |
| 12 | median by Apollonius (6, 8, 10) | same exercise as TGT mock 3 Q57 (in the app as Expected TGT 3 Q57) | obtuse-angle extension of Pythagoras, $AC = \sqrt{65}$ (gap line kept) |
| 17 | order of 2 in $\{1..6\}$ mod 7 | same exercise as Expected TGT 2 Q42, mock 1 Q59, mock 3 Q75 | order of $\frac{1+i}{\sqrt2}$ in $\mathbb C^*$ = 8 |
| 23 | "called involutory if" | word for word Expected TGT 2 Q85 (also mocks 1, 5); option set of UP TGT 2026 Q54 | $\begin{bmatrix}a&b\\c&-a\end{bmatrix}$ involutory iff $a^2 + bc = 1$ |
| 26 | "Which set is uncountable?" (irrationals) | Expected TGT 2 Q28, mocks 1, 3, 5 | $B - A$ uncountable when $A$ countable, $B$ uncountable |
| 30 | committee, 6 men 4 women, exactly 2 women | data of Expected TGT 3 Q32, type of mock 5 Q50 | 'ORANGE', vowels together = 144 |
| 31 | vector triple product formula | word for word Expected TGT 2 Q88 (also mocks 1, 3) | $\hat i \times (\hat j \times (\hat i + \hat k)) = \hat j$ (gap line kept) |
| 34 | monotone + bounded above converges to sup | Expected TGT 2 Q12, mocks 1, 3 | Cauchy criterion (convergent iff Cauchy) |
| 41 | CG of solid cone $h/4$ | word for word Expected TGT 3 Q5 (mock 1 Q51) | CG of a circular arc $\frac{a\sin\alpha}{\alpha}$ |
| 42 | condition for $lx + my + n = 0$ to be normal to an ellipse | word for word Expected TGT 2 Q53 (UP TGT 2011) | the normal at $\theta$ meets the x-axis at $ae^2\cos\theta$ (gap line kept) |
| 45 | bisector formula of $ax^2 + 2hxy + by^2 = 0$ | word for word Expected TGT 3 Q83 (mock 1 Q62) | bisectors are the axes iff $h = 0$ (gap line kept) |
| 50 | Cauchy's first theorem (statement) | mock 5 Q33 | its application $\frac1n(1 + \dots + \frac1n) \to 0$ (gap line kept) |
| 51 | $(\cos 15^\circ + i\sin 15^\circ)^6$ | same exercise as Expected TGT 2 Q63 and mock 1 Q38 | $z^n + z^{-n} = 2\cos n\theta$ |
| 54 | $\tan^{-1}\frac12 + \tan^{-1}\frac13$ | same sum-formula exercise as Expected TGT 3 Q14 and mock 1 Q72 | $\sin^{-1}(\sin\frac{2\pi}{3}) = \frac\pi3$ |
| 56 | $\int\frac{dx}{(x-1)(x-2)}$ | word for word Expected TGT 2 Q34 (mock 5 Q1) | $\int\frac{x\,dx}{(x-1)(x-2)} = \log\left|\frac{(x-2)^2}{x-1}\right|$ (partial fractions kept) |
| 59 | derived set of $\{1/n\}$ | in Expected TGT 2 Q36, Expected TGT 3 Q22, mocks 1, 5 | derived set of $(0, 1)$ is $[0, 1]$ |
| 60 | $\frac{d}{dx}a^x$ | word for word mock 5 Q74 | $\frac{d}{dx}\log_a x$ |
| 61 | latus rectum of $\frac{10}{r} = 1 + \frac12\cos\theta$ | same reading of $l, e$ as Expected TGT 3 Q28; the directrix is Expected TGT 2 Q13 | focal chord: $\frac1{SP} + \frac1{SQ} = \frac2l$ |
| 67 | what $C$ means in the grouped-median formula | reverse of Expected TGT 2 Q56 | empirical mode $3(38) - 2(40) = 34$ |
| 70 | $G^2 = AH$ | word for word mock 5 Q25 (mock 3 Q56) | AM 10, GM 8 ⇒ HM 6.4 (gap line kept) |
| 72 | internal division 2 : 3 | same exercise as mock 1 Q11, close to Expected TGT 2 Q80 | external division 2 : 3 = $3\vec a - 2\vec b$ |
| 76 | sum of $n$th roots of unity | word for word mock 5 Q60 (Expected TGT 3 Q87) | their product $(-1)^{n-1}$ |
| 78 | rows interchanged ⇒ sign changes | word for word mock 1 Q66 | $R_i \to R_i + kR_j$ leaves the value unchanged |
| 79 | remainder on division by $ax - b$ | word for word Expected TGT 2 Q35 (mock 3 Q26) | $0.\overline{36} = \frac4{11}$. (Factor-theorem idea rejected: UP TGT 2026 Q14) |
| 83 | opposite angles of a cyclic quadrilateral | word for word mock 5 Q62 | intersecting chords, $PD = 6$ cm (gap line "segments of a chord"; tangent–secant rejected: UP TGT 2021 Q7) |
| 88 | 20 N on two strings at 60° | same set-up as Expected TGT 3 Q54 (mock 1 Q29) | trigonometrical theorem $(m+n)\cot\theta = m\cot\alpha - n\cot\beta$ (gap line of statics) |
| 89 | tangents, $\angle APB = 70^\circ$ ⇒ $\angle AOB$ | same exercise as Expected TGT 2 Q52 and Expected TGT 3 Q47 | $\angle PAB = 55^\circ$ |
| 90 | note (a) said "Both signs wrong" | only the constant's sign differs | note corrected |

New questions on §A5 gap lines: the writer listed 32; every one of them is either kept or replaced on the same gap line (Q12, 31, 42, 45, 50, 56, 59, 70), and Q83 (segments of a chord) and Q88 (trigonometrical theorem) are new gap items: **34 of the 65 new questions** (blueprint: at least 22).

##### Second-way checks (`verify.py`)
- My own script (written without looking at the writer's `verify.py`), run on `mock.checked.jsonl` with sympy 1.14: **80 of the 90 questions recomputed a second way, 0 failures.** For each it computes the true value (sympy limits, integrals, series, determinants, `solveset`; exact fractions; brute force for 'ORANGE' (all 720 permutations); a 100 000-game simulation for the die game Q43; numeric geometry for Q12, Q41, Q42, Q61, Q87, Q88 on random or sample figures; derivative of each option for the integrals Q56, Q82) and asserts that **exactly one option** equals it and that it is the keyed one. Q45, Q57 and Q63 are light logic checks.
- The other 10 are definitions or statements, checked by hand against standard texts: Q2 (perfect set), Q5 (Peano), Q26 (countable subset of an uncountable set), Q34 (Cauchy criterion), Q39 ($f(e) = e'$), Q58 (density of $\mathbb Q$), Q59 (derived set of $(0,1)$), Q62 (degree not defined), Q68 (perpendicular bisects the chord), Q81 (symmetry about the x-axis).
- Before any change, my blind answers to the writer's 90 (`mine.py`) agreed with all 90 keys.

##### Solutions, notes, facts
Read all 90. Apart from Q90's note (a) they are correct, the writer's own wording (no book text), and in the board's style. The solutions do not mention the book. Flags are filled for every changed item (they say "checker").

##### Gap-topic questions: syllabus and level
Every new question is on a line of the UP TGT syllabus (blueprint §A5 list) and at TGT level: Peano's third postulate (Q5), homomorphism $f(e) = e'$ (Q39), cosets/Lagrange (Q55), perfect and derived sets (Q2, Q59), Cauchy's theorems on limits (Q34, Q50), Rolle (Q24), log and exponential series (Q25, Q35), multiplication theorem (Q43), arc $r\theta$ (Q10), $\tan\frac\theta2$ (Q48), separation into real and imaginary parts (Q77), Pythagoras extension and segments of a chord (Q12, Q83), rotation of axes (Q4), bisectors (Q45), normal of an ellipse (Q42), point of contact on a parabola (Q69), cylinder (Q57), curve tracing (Q81), partial fractions (Q56), vector triple product and moment (Q31, Q47), catenary (Q27), trigonometrical theorem (Q88), radial/transverse and tangential/normal components (Q65, Q63), boats and streams (Q13), shares (Q85), Laspeyres (Q7), pie chart (Q73), AM/GM/HM (Q70). None goes beyond what a B.Sc. course teaches for these lines.

##### Doubtful or for the coordinator
- **Cross-mock overlap among the other mocks.** The five TGT writers converged on the same stock items. In the writer files, these appear in two or more of mocks 1, 2, 3, 5 (I removed T4's copies only): "called involutory if" (1, 2, 5), vector triple product formula (1, 2, 3), monotone bounded sequence (1, 2, 3), derived set of $\{1/n\}$ (1, 2, 3, 5), solid-cone CG (1, 3), bisector formula (1, 3), $\int\frac{dx}{(x-1)(x-2)}$ (2, 5), $A, G, H$ relation (1, 3, 5), sum of $n$th roots (3, 5), remainder on $ax - b$ (1, 2, 3), tangents $\angle APB = 50^\circ$ (2, 3), "which set is uncountable" (1, 2, 3, 5), $(\cos\frac\pi6 + i\sin\frac\pi6)^6$ (1, 2), principal branch of $\cos^{-1}$ (2, 5), arc 22 cm at 60° (2, 5), number of digits of $2^{50}$ (1, 2, 3), directrix of $\frac lr = 1 + e\cos\theta$ (1, 2, 5), integrating-factor formula (1, 5), Archimedean property (1, 2, 5), Apollonius statement (1, 5), $\sqrt{n^2+n} - n$ (3, 5), time of flight formula (1, 3), Laspeyres weights (1). Expected TGT 2 and 3 are already in the app with their copies, so mocks 1 and 5 will need the same treatment before they go in. Expected TGT 2 Q83 is also a new-question copy of the past question I had to drop (UP TGT 1999, p517 Q171).
- Q18 (past, TGT 1999: triples in 4 years → 27 times) is the same idea as UP TGT 2021 Q30 (doubles in 5 years → 8 times) with other numbers; kept, as blueprint §0.1 allows (key numbers differ), and flagged by the writer.
- Q10 (arc from radius and angle) is the reverse ask of Expected TGT 2 Q37 (radius from arc); Q17 (order of $\frac{1+i}{\sqrt2}$) is a sibling of UP TGT 2021 Q23 (order of $-i$); Q83 applies UP TGT 2026 Q6 (the chord theorem, asked as recall); Q42 uses the normal of UP TGT 2026 Q103. All different asks; kept. The new Q56 ($\int\frac{x\,dx}{(x-1)(x-2)}$) still looks like Expected TGT 2 Q34 on the page (TF-IDF 0.94) but has a different integrand, coefficients and answer; Q65 (transverse velocity) is the companion of GIC 2026 Q105 (transverse acceleration), as the writer noted.
- If mocks 1 or 5 are revised before they go into the app, re-run the overlap check on this file: my replacements were checked against their writer files.

---

## Expected TGT paper 5 · balanced

- In the app: `data/mq/exp-tgt-2026-5.json`, 90 questions (28 asked before), one clock of 100 minutes, −1/3 mark for a wrong answer.

### Writing

### TGT mock 5 (level TGT): log

**Mock T5, emphasis: balanced** (blueprint §A6). Base topic table of §A2 (no swaps), base difficulty 34 recall / 34 one-step / 18 medium / 4 hard. 30 past questions from the book (only UP TGT 2003 and UP TGT 2001, all from `pools/tgt-mock5.tsv`), 60 new questions. Output: `mock.jsonl` (90 lines, n = 1..90).

#### Counts per unit

| Unit | Count | Past | New | Recall | One-step | Medium | Hard |
|---|---|---|---|---|---|---|---|
| 1 Commercial Mathematics | 3 | 1 | 2 | 0 | 1 | 2 | 0 |
| 2 Statistics | 4 | 2 | 2 | 2 | 1 | 1 | 0 |
| 3 Algebra | 18 | 6 | 12 | 5 | 8 | 5 | 0 |
| 4 Probability | 2 | 1 | 1 | 0 | 2 | 0 | 0 |
| 5 Set Theory | 6 | 2 | 4 | 3 | 3 | 0 | 0 |
| 6 Real Analysis | 8 | 2 | 6 | 4 | 2 | 1 | 1 |
| 7 Trigonometry | 6 | 2 | 4 | 2 | 2 | 2 | 0 |
| 8 Complex Numbers | 5 | 2 | 3 | 2 | 3 | 0 | 0 |
| 9 Geometry | 4 | 0 | 4 | 3 | 1 | 0 | 0 |
| 10 Coordinate Geometry | 10 | 4 | 6 | 4 | 4 | 2 | 0 |
| 11 Calculus | 11 | 4 | 7 | 3 | 4 | 2 | 2 |
| 12 Vector Analysis | 5 | 2 | 3 | 2 | 1 | 2 | 0 |
| 13 Statics | 4 | 1 | 3 | 2 | 0 | 1 | 1 |
| 14 Dynamics | 4 | 1 | 3 | 2 | 2 | 0 | 0 |
| **Total** | **90** | **30** | **60** | **34** | **34** | **18** | **4** |

Topic counts equal the §A2 base table exactly (checked by `build.py`); every topic id is in `topics.txt`.

`difficulty` field: easy 68 (recall 34 + one-step 34), medium 18, hard 4. The recall/one-step split per question is in `order.json` (field `diff`: R/E/M/H).

#### Form of the paper

- Answer key: A 23, B 22, C 22, D 23; longest run of one letter 3.
- All-numeric option sets: 32; none in ascending (or descending) order.
- No 'None of these' and no 'All of these' anywhere (all five 'None of these' options of the repeats were replaced by real distractors). One 'which of the following is correct' stem (Q77, a repeat).
- Order: units interleaved (9 adjacent same-unit pairs, about what random shuffling gives; never three of one unit in a row; no two adjacent questions on the same topic). Recall rises through the paper: recall 7 / 13 / 14 in Q1–30 / Q31–60 / Q61–90; medium 10 / 5 / 3. Hard items at Q7, Q19, Q41, Q73. Past questions 9 / 10 / 11 per third.
- No `$$` in stems or options, no `\displaystyle`, no `align`; median stem length 96 characters (longest 281, a repeat).

#### Past questions used (30)

| Mock Q | Source tag | Book page | Book Q | Topic | Difficulty |
|---|---|---|---|---|---|
| 2 | UP TGT 2003 | 834 | 166 | tp-11-02 | M |
| 3 | UP TGT 2001 | 1211 | 398 | tp-17-04 | M |
| 6 | UP TGT 2001 | 1004 | 315 | tp-16-06 | M |
| 7 | UP TGT 2003 | 651 | 886 | tp-07-05 | H |
| 13 | UP TGT 2001 | 868 | 365 | tp-11-04 | E |
| 14 | UP TGT 2001 | 516 | 166 | tp-08-01 | E |
| 18 | UP TGT 2001 | 88 | 510 | tp-01-05 | M |
| 19 | UP TGT 2003 | 1150 | 400 | tp-15-05 | H |
| 22 | UP TGT 2003 | 323 | 2093 | tp-02-03 | M |
| 32 | UP TGT 2001 | 516 | 163 | tp-05-06 | E |
| 36 | UP TGT 2003 | 1061 | 267 | tp-09-05 | E |
| 38 | UP TGT 2001 | 375 | 76 | tp-12-02 | M |
| 41 | UP TGT 2003 | 515 | 160 | tp-05-07 | H |
| 44 | UP TGT 2003 | 516 | 161 | tp-06-01 | M |
| 48 | UP TGT 2003 | 440 | 78 | tp-10-01 | E |
| 49 | UP TGT 2003 | 175 | 1098 | tp-01-02 | E |
| 57 | UP TGT 2001 | 1052 | 220 | tp-09-06 | E |
| 58 | UP TGT 2003 | 867 | 360 | tp-11-04 | M |
| 59 | UP TGT 2003 | 834 | 167 | tp-11-01 | E |
| 61 | UP TGT 2001 | 1030 | 99 | tp-09-03 | M |
| 63 | UP TGT 2003 | 61 | 351 | tp-01-08 | M |
| 64 | UP TGT 2001 | 175 | 1100 | tp-01-01 | E |
| 68 | UP TGT 2001 | 273 | 1001 | tp-02-04 | E |
| 70 | UP TGT 2001 | 106 | 638 | tp-01-03 | E |
| 72 | UP TGT 2003 | 1151 | 401 | tp-15-08 | E |
| 77 | UP TGT 2003 | 408 | 265 | tp-12-02 | R |
| 78 | UP TGT 2003 | 588 | 563 | tp-06-05 | E |
| 80 | UP TGT 2003 | 97 | 566 | tp-01-06 | E |
| 86 | UP TGT 2001 | 1004 | 314 | tp-16-06 | E |
| 88 | UP TGT 2001 | 991 | 223 | tp-16-02 | E |

Per unit: Commercial 1, Statistics 2, Algebra 6, Probability 1, Set Theory 2, Real Analysis 2, Trigonometry 2, Complex Numbers 2, Geometry 0, Coordinate Geometry 4, Calculus 4, Vectors 2, Statics 1, Dynamics 1 = 30 (the §A6 T5 column exactly).

Each was read from the page image (PyMuPDF, full media box), solved independently, and searched for in the seven solved papers (`data\mq\*.json` and the two 2026 `questions.checked.jsonl`) by its key numbers and phrases; none is there. Options of every repeat were re-ordered to fit the key balance.

Pool items considered and **not** used:
- p202 Q1327 (TGT 2003, two finite sets, 56 more subsets): same question as UP TGT 2021 Q100.
- p651 Q885 (TGT 2003, area between y² = 4ax and its latus rectum): same as LT 2025 Q34. Replaced by p651 Q886.
- p323 Q2094 (two options both true), p868 Q363 (the point (2, 1) is not on y² = 4x), p651 Q888 (true value 1 is not among the options), p652 Q890 (no correct option except 'None'), p1061 Q270 (same idea as UP TGT 2021 Q33), p1211 Q399 (garbled wording): skipped as defective or too close to a solved paper.
- Note on the PDF: every page has a crop box that hides the top ~71 pt. Rendering the crop box alone cuts off question starts (Q314's stem is invisible that way, so the pool lists it as 'p1004 ?'); all pages were read with the full media box.

#### Flags (every question with a non-empty `flag`)

- Q3 [P01 (book p1211 Q398)]: Book writes Rs. 24.00; written with ₹.
- Q6 [P03 (book p1004 Q315)]: The book's frequency table is written inline.
- Q7 [P25 (book p651 Q886)]: Book key (a) 2π takes the signed integral; the area is 4π. 'None of these' replaced by π.
- Q13 [P21 (book p868 Q365)]: Book: 'A Circle … intersects the Y-axis, then the length of the intersected portion is'; lightly reworded.
- Q14 [P26 (book p516 Q166)]: Book: 'Differential equation … degree of'; reworded as a question.
- Q18 [P07 (book p88 Q510)]: Book's wrong options $e^2$, $e^2 + 1$, $\log_e 3 - 2$ replaced by error-based values; stem wording smoothed.
- Q22 [P08 (book p323 Q2093)]: 'None of the above' replaced by $-\frac23$.
- Q36 [P16 (book p1061 Q267)]: Book reads 'The straight roads'; written 'Two straight roads'.
- Q41 [P14 (book p515 Q160)]: Book key (b) 2 ignores $x = \pi/2$, where $\tan x$ is undefined; the answer is 3.
- Q48 [P17 (book p440 Q78)]: 'None of these' replaced by 'the axis of $y$'; misprint 'axix' corrected.
- Q49 [P12 (book p175 Q1098)]: Option printed as $(\infty, 0]$; read as $(-\infty, 0]$.
- Q57 [P18 (book p1052 Q220)]: Book stem garbled ('One 60 meter the angle of depression…'); reworded. 'None of these' replaced by $60\sqrt3$ m.
- Q61 [P15 (book p1030 Q99)]: Option (a) of the book uses $\theta$; written with $\alpha$ like the stem.
- Q63 [P04 (book p61 Q351)]: Book tag: TGT 2003, 2013.
- Q64 [P11 (book p175 Q1100)]: Book prints the universal set as '∪'; written as $U$.
- Q70 [P06 (book p106 Q638)]: Book tag also names a DSSSB 2014 paper.
- Q78 [P24 (book p588 Q563)]: 'None of these' replaced by 0.
- Q86 [P02 (book p1004 Q314)]: The first line of this question is cut off by the page crop in the PDF; read from the full page (question number 314).
- Q88 [P10 (book p991 Q223)]: Read as 'first spade on the third draw'; the conditional reading gives $\frac14$, which is not an option.

Book keys found wrong (my answer differs): Q41 (p515 Q160: book 2, correct 3, x = π/2 forgotten) and Q7 (p651 Q886: book 2π, correct 4π, signed integral taken as area).

#### Verification

- `verify.py` recomputes the answer of **81 of 90** questions a second way (sympy 1.14, exact fractions, numerical integration, brute force over finite sets/groups, numeric geometry) and checks that **exactly one** option matches and that it is the keyed option: 81 pass, 0 fail.
- The 81 include 26 recall items: formula and identity items are checked symbolically (e.g. cos 3θ, d/dx aˣ, the standard integral, the general binomial term, reciprocal-root equation), and statements are checked on a concrete instance (S₃ for o(a) = o(a⁻¹), all subsets of Z₈ / Z₁₂ for the finite-subgroup test and cyclic subgroups, a numeric triangle for Apollonius, random coplanar vectors for the triple product, a random cyclic quadrilateral).
- Not script-checkable (9): Q12 (N04), Q14 (P26), Q27 (N23), Q33 (N26), Q35 (N14), Q54 (N31), Q81 (N24), Q87 (N22), Q90 (N53) — definitions (IMR, involutory, derived set of {1/n}, Archimedean property, Cauchy's first theorem, uncountability of the irrationals, principal range of cos⁻¹, free vector) and the degree of a DE (Q14). These were checked by hand.
- `final_check.py`: 90 lines of valid JSON, n = 1..90, key order as in the brief, topic ids valid, `$` balanced in every field, no forbidden constructs.

#### New questions: what they cover

60 new questions, spread between 2026-style recall (33) and 2021-style computation (27) in every unit. Several cover §A5 gaps: LCM of polynomials, terminating-decimal criterion, general term of the binomial theorem, involutory matrix, finite-subgroup test, subgroups of a cyclic group, derived set, Archimedean property, Cauchy's first theorem on limits, circular measure (arc = rθ), sub-/compound angles, cosh²x + sinh²x, Apollonius, rotation of axes, directrix in polar form, partial fractions, King's-rule integral, cone volume, free vector, Lami in sine form, beam reactions, work–energy principle. None repeats a stem of the seven solved papers (checked by phrase search); where 2026 asked a fact, the mock asks its sibling (HCF → LCM, idempotent → involutory, translation → rotation, cosh² − sinh² → cosh² + sinh², Lami's conditions → Lami's formula, crude death rate → infant mortality rate).

#### Files

`items_past.py`, `items_new.py` (sources, correct option first), `build.py` (order, key balance, option shuffle, output), `order.json` (mock number → item id, source, difficulty), `verify.py` and `verify_out.json`, `final_check.py`, `render.py` (page images in `img/`), `solved.txt` (search dump of the solved papers).

### Independent check

#### Expected TGT mock 5: check of 22 November 2026

Mock checked: `mocks/tgt-5/mock.jsonl` (mock T5, balanced; the writer took 30 past questions from UP TGT 2003 and 2001, 60 new). Copy kept as `mock.orig.jsonl`; the corrected file is `mock.checked.jsonl` (90 questions, same format). All work in `mockck/tgt-5/`.

Two rules were applied on top of the check brief, as the coordinator asked during the check: (1) no question may repeat, or have the same skeleton or stock item as, a question of the four final expected TGT papers in the app (`data/mq/exp-tgt-2026-1.json` … `-4.json`, read at 22:36; mock 1 and paper 3 in their repaired final versions); (2) each replacement keeps the topic id, the difficulty and the key letter.

##### Result in brief

- **Wrong answers found: none.** I solved all 90 questions before reading the key; my answers matched the writer's key in all 90.
- **One copy of a solved paper:** Q44 (book p516 Q161, $\tan^{-1}\sqrt{(1 - \cos x)/(1 + \cos x)}$) is UP PGT 2026 Q113 word for word. Replaced by another T5-pool past question of the same topic (p515 Q158).
- **Ambiguous stem not repaired by the writer:** Q88 still read "If he fails to draw spades the first two times, what will be the probability that he will draw spades the third time?", which has the conditional answer $\frac14$ (not an option). Reworded to ask for the joint event; the answer $\frac{9}{64}$ is now the only reading.
- **A false option note:** Q70 (a) said $10 \times 10!$ exceeds the number of all 9-digit numbers ($36{,}288{,}000 < 900{,}000{,}000$). Rewritten. Q71 (a) note made clearer; Q7 and Q41 flags now name the book's key by value (the book's letters differ from the mock's).
- **Cross-paper repeats (coordinator's rule): 48 questions replaced** (plus Q44 above, 49 in all). The list is below; each keeps topic, difficulty and key letter. Several first replacements had to be redone because papers 1 and 3 changed while the check ran.
- Past questions in the final file: **29** (the writer had 30). Q32 (limit $\frac{\sin 2x}{x}$) had the skeleton of Expected TGT 1 Q10 and the T5 pool has no other limit item, so Real Analysis now has 1 past question instead of 2; every other unit keeps the blueprint's past count (Q14 and Q57 became new, Q1 and Q42 became past questions from the pool).

##### Counts (final file)

| Unit | Count | Past | Easy | Medium | Hard |
|---|---|---|---|---|---|
| 1 Commercial Mathematics | 3 | 1 | 1 | 2 | 0 |
| 2 Statistics | 4 | 2 | 3 | 1 | 0 |
| 3 Algebra | 18 | 6 | 13 | 5 | 0 |
| 4 Probability | 2 | 1 | 2 | 0 | 0 |
| 5 Set Theory | 6 | 2 | 6 | 0 | 0 |
| 6 Real Analysis | 8 | 1 | 6 | 1 | 1 |
| 7 Trigonometry | 6 | 2 | 4 | 2 | 0 |
| 8 Complex Numbers | 5 | 2 | 5 | 0 | 0 |
| 9 Geometry | 4 | 0 | 4 | 0 | 0 |
| 10 Coordinate Geometry | 10 | 4 | 8 | 2 | 0 |
| 11 Calculus | 11 | 4 | 7 | 2 | 2 |
| 12 Vector Analysis | 5 | 2 | 3 | 2 | 0 |
| 13 Statics | 4 | 1 | 2 | 1 | 1 |
| 14 Dynamics | 4 | 1 | 4 | 0 | 0 |
| **Total** | **90** | **29** | **68** | **18** | **4** |

- Unit counts = blueprint §A1; topic counts = §A2 base table exactly (checked by `fmt.py`); every topic id is in `topics.txt`. Difficulty 68 / 18 / 4 as the blueprint (recall + one-step = 68); the replacements kept each slot's level, with a few one-step slots now holding recall items (recall about 36–37, one-step about 31–32).
- Key: A 23, B 22, C 22, D 23; longest run 3 (unchanged). No 'None of these', no 'All of these'; one 'which of the following is correct' (Q77). No all-numeric option set in increasing or decreasing order. No two adjacent questions on the same topic; 9 adjacent same-unit pairs.
- Format (`fmt.py`, `latexcheck.py`): 90 lines of valid JSON, n = 1..90, the brief's field order, four distinct options, answer 0–3, even `$` in every field, braces and environments balanced, no `$$` in stems or options, no `align`, no `\displaystyle`.

##### Script checks

- `verify.py` (+ `verify_new.py` for the replaced items; sympy 1.14, exact arithmetic, brute force) recomputes the answer of **85 of the 90** final questions and checks that exactly one option matches and that it is the keyed one: **85 pass, 0 fail**. Statements are checked on instances (e.g. the centre of $S_3$, all subsets of $\mathbb Z_8$ and $\mathbb Z_{12}$, a random cyclic quadrilateral, a random triangle for the bisector ratio, a brute-force search for a surjection $A \to P(A)$, a scan of $\sum|x_i - a|$ for the median).
- Checked by hand only (definitions and one stock count): Q8 (3 common tangents), Q12 (GFR), Q27 (neighbourhood), Q33 (definition of convergence), Q90 (free vector).
- Before any change, the same script checked 87 of the writer's 90 questions (all passed).

##### Past questions verified against the book (page images, crop box set to the media box)

All 30 of the writer's past questions were read from the book and compared word by word: stems and options were copied faithfully (options re-ordered; changes listed in the writer's flags). The book's key is wrong in Q7 (book 2π, signed integral; area 4π) and Q41 (book 2; $\tan x$ is undefined at $\frac\pi2$, so 3) — I agree with the writer on both. Of the writer's 19 flagged edits, 18 are fair repairs (light rewording, ₹ for Rs., misprints such as "axix", "$(\infty, 0]$" and "∪" for $U$, an inline frequency table, "None of these" replaced by a real distractor in Q7, Q22, Q48, Q57, Q78, and in Q18 three absurd distractors $e^2$, $e^2 + 1$, $\log_e 3 - 2$ replaced by error-based values); the 19th, Q88, was not unambiguous and is reworded (above).

Past questions in the final file (29):

| Q | Book page / Q | Tag | Status |
|---|---|---|---|
| 1 | p650 Q881 | UP TGT 2003 | added by the checker (read from the page; my own solution) |
| 2 | p834 Q166 | UP TGT 2003 | matches the book |
| 3 | p1211 Q398 | UP TGT 2001 | matches the book |
| 6 | p1004 Q315 | UP TGT 2001 | matches the book |
| 7 | p651 Q886 | UP TGT 2003 | matches the book; book's key wrong, mock's key right |
| 13 | p868 Q365 | UP TGT 2001 | matches the book |
| 18 | p88 Q510 | UP TGT 2001 | matches the book |
| 19 | p1150 Q400 | UP TGT 2003 | matches the book |
| 22 | p323 Q2093 | UP TGT 2003 | matches the book |
| 36 | p1061 Q267 | UP TGT 2003 | matches the book |
| 38 | p375 Q76 | UP TGT 2001 | matches the book |
| 41 | p515 Q160 | UP TGT 2003 | matches the book; book's key wrong, mock's key right |
| 42 | p441 Q79 | UP TGT 2001 | added by the checker (read from the page; my own solution) |
| 44 | p515 Q158 | UP TGT 2003 | added by the checker (read from the page; my own solution) |
| 48 | p440 Q78 | UP TGT 2003 | matches the book |
| 49 | p175 Q1098 | UP TGT 2003 | matches the book |
| 58 | p867 Q360 | UP TGT 2003 | matches the book |
| 59 | p834 Q167 | UP TGT 2003 | matches the book |
| 61 | p1030 Q99 | UP TGT 2001 | matches the book |
| 63 | p66 Q380 | UP TGT 2003 | added by the checker (read from the page; my own solution) |
| 64 | p175 Q1100 | UP TGT 2001 | matches the book |
| 68 | p273 Q1817 | UP TGT 2001 | added by the checker (read from the page; my own solution) |
| 70 | p106 Q638 | UP TGT 2001 | matches the book |
| 72 | p1151 Q401 | UP TGT 2003 | matches the book |
| 77 | p408 Q265 | UP TGT 2003 | matches the book |
| 78 | p588 Q563 | UP TGT 2003 | matches the book |
| 80 | p97 Q566 | UP TGT 2003 | matches the book |
| 86 | p1004 Q314 | UP TGT 2001 | matches the book |
| 88 | p991 Q223 | UP TGT 2001 | matches the book; stem reworded (ambiguous) |

Writer's past questions removed: p516 Q161 (Q44, = UP PGT 2026 Q113), p516 Q166 (Q14), p516 Q163 (Q32), p1052 Q220 (Q57), p61 Q351 (Q63), p273 Q1001 (Q68) — the last four for the cross-paper rule.

##### Every change

**Edits (question kept):**

- Q7, Q41: flag text only (book key named by value).
- Q70: note (a) was false; now "Larger than $10!$, which already counts every arrangement of 9 different digits, leading 0 included."
- Q71: note (a) clarified.
- Q88: stem reworded to "…What is the probability that he fails to draw a spade the first two times and draws a spade the third time?" (also "be gets" → "he gets", deck → pack of 52 cards); solution notes why the conditional reading gives $\frac14$.

**Replacements (topic, difficulty and key letter kept; the reason is also in each question's `flag`):**

| Q | Topic · level · key | Was | Now | Why |
|---|---|---|---|---|
| 1 | tp-07-02 · medium · B | $\int \frac{dx}{(x - 1)(x - 2)}$ equals: (new) | The value of $\int \dfrac{a^{\sqrt x}}{\sqrt x}\,dx$ is: (UP TGT 2003) | ($\int\frac{dx}{(x - 1)(x - 2)}$) repeats Expected TGT 2 Q34. Now book p650 Q881 (UP TGT 2003, T5 pool); options re-ordered. |
| 4 | tp-09-01 · easy · B | An arc of length 22 cm subtends an angle of 60° at the centre of a ci… (new) | A wheel makes 360 revolutions in one minute. Through how many radians… (new) | (arc of 22 cm at 60°, radius) repeats Expected TGT 2 Q37. |
| 5 | tp-02-01 · easy · A | If $A = \begin{bmatrix}2&-1\\1&0\end{bmatrix}$, then $A^2 - 2A$ equal… (new) | If $A = \begin{bmatrix}2&3\\1&-1\end{bmatrix}$ and $B = \begin{bmatri… (new) | ($A^2 - 2A$ for a 2×2 matrix) has the skeleton of Expected TGT 2 Q32 ($A^2 - 5A$). |
| 8 | tp-17-06 · easy · C | A chord of length 16 cm is drawn in a circle of radius 10 cm. The dis… (new) | The number of common tangents to two circles which touch each other e… (new) | (distance of a 16 cm chord from the centre) has the skeleton of Expected TGT 3 Q20; two first replacements (a tangent of length $\sqrt{13^2 - 5^2}$; the chord … |
| 9 | tp-07-10 · easy · A | The volume of a right circular cone of base radius 7 cm and height 12… (new) | The volume of a sphere of radius 21 cm is (use $\pi = \frac{22}{7}$): (new) | (volume of a cone of radius 7 cm) was close to Expected TGT 2 Q7 (surface of a cone of radius 7 cm) and Expected TGT 4 Q64 (volume of a cone). |
| 11 | tp-04-06 · easy · D | A non-empty finite subset $H$ of a group $G$ is a subgroup of $G$ if … (new) | The centre $Z(G) = \{z \in G : zg = gz \text{ for all } g \in G\}$ of… (new) | (finite-subset subgroup test) repeats Expected TGT 3 Q79. |
| 12 | tp-16-08 · easy · D | The infant mortality rate of a region for a year is the number of dea… (new) | The general fertility rate (GFR) of a region for a year is the number… (new) | (infant mortality rate) repeats Expected TGT 1 Q25. |
| 14 | tp-08-01 · easy · C | The degree of the differential equation $\left[1 + \left(\dfrac{dy}{d… (UP TGT 2001) | The general solution of a differential equation of order $n$ contains: (new) | (degree of $[1 + (y')^2]^{3/2} = y''$, book p516 Q166) is the same equation as Expected TGT 2 Q54. The T5 pool has no other order-and-degree item, so a new que… |
| 15 | tp-10-07 · easy · A | $\cosh^2 x + \sinh^2 x$ equals: (new) | $\tanh x$ is equal to: (new) | ($\cosh^2x + \sinh^2x = \cosh 2x$) is the identity asked in Expected TGT 3 Q71. |
| 16 | tp-15-09 · easy · C | A particle is projected with a velocity of 20 m/s at an angle of 30° … (new) | A particle is projected with a velocity of 20 m/s at an angle of 15° … (new) | (greatest height for 20 m/s at 30°) is a direct use of the formula asked in Expected TGT 1 Q35. |
| 20 | tp-17-03 · easy · C | The difference between the compound interest (compounded annually) an… (new) | In how many years will a sum of ₹2,500 amount to ₹3,250 at 6% per ann… (new) | (CI − SI on ₹5,000 for 2 years at 10%) has the skeleton of Expected TGT 2 Q68 (₹5,000, 2 years, 8%). |
| 21 | tp-01-07 · easy · C | The LCM of the polynomials $x^2 - 4$ and $x^2 + 4x + 4$ is: (new) | The sum of a two-digit number and the number obtained by reversing it… (new) | (LCM of $x^2 - 4$ and $x^2 + 4x + 4$) has the skeleton of Expected TGT 1 Q80; a first replacement ($\sqrt{11 + 2\sqrt{30}}$) collided with the new Expected TGT… |
| 25 | tp-01-06 · easy · D | If $A$, $G$ and $H$ are respectively the arithmetic, geometric and ha… (new) | The sum to infinity of the geometric series $a + ar + ar^2 + \dots$, … (new) | ($G^2 = AH$) is the stock item of Expected TGT 3 Q56 (and Expected TGT 4 Q70 asks it with numbers). |
| 26 | tp-17-05 · easy · B | In $\triangle ABC$, $AD$ is the median to $BC$. By Apollonius' theore… (new) | In $\triangle ABC$, the bisector of $\angle A$ meets $BC$ at $D$. The… (new) | (Apollonius' theorem) repeats Expected TGT 1 Q34. |
| 27 | tp-05-03 · easy · D | The derived set (set of all limit points) of $S = \left\{\frac1n : n … (new) | A set $N \subseteq \mathbb R$ is called a neighbourhood of a point $x… (new) | (derived set of $\{\frac1n\}$) repeats Expected TGT 2 Q36. |
| 28 | tp-12-02 · medium · B | If $\|\vec a\| = 3$, $\|\vec b\| = 4$ and $\|\vec a + \vec b\| = 5$, … (new) | The diagonals of a parallelogram are $3\hat i + \hat j - 2\hat k$ and… (new) | ($\|\vec a - \vec b\|$ from $\|\vec a\|$, $\|\vec b\|$, $\|\vec a + \vec b\|$) has the skeleton of the UP TGT 2013 item in Expected TGT 3 ($\|\vec b\|$ from $\… |
| 30 | tp-02-03 · medium · C | If $A$ is a square matrix of order 3 with $\|A\| = 4$, then $\|2A^{-1… (new) | The value of $\begin{vmatrix}1&1&1\\1&1+x&1\\1&1&1+y\end{vmatrix}$ is: (new) | ($\|2A^{-1}\|$ for order 3 and $\|A\| = 4$) has the skeleton of Expected TGT 3 Q88 ($\|2A\|$, order 3, $\|A\| = 4$). |
| 31 | tp-11-03 · easy · D | If the coordinate axes are rotated through an angle $\theta$ about th… (new) | The general second-degree equation $ax^2 + 2hxy + by^2 + 2gx + 2fy + … (new) | (rotation-of-axes formula for $x$) repeats Expected TGT 2 Q60. |
| 32 | tp-05-06 · easy · D | $\lim_{x\to0} \dfrac{\sin 2x}{x}$ is equal to: (UP TGT 2001) | $\lim_{x\to1} \dfrac{x^4 - 1}{x - 1}$ is equal to: (new) | (past item $\lim_{x\to0}\frac{\sin 2x}{x}$, book p516 Q163) has the skeleton of Expected TGT 1 Q10 ($\lim\frac{\sin 5\theta}{\theta}$, UP TGT 2009). The T5 poo… |
| 33 | tp-05-04 · easy · A | If $a_n \to l$, then by Cauchy's first theorem on limits, $\dfrac{a_1… (new) | A sequence $\langle a_n\rangle$ of real numbers is said to converge t… (new) | (Cauchy's first theorem on limits) is the result behind Expected TGT 4 Q50 ($\frac1n\left(1 + \frac12 + \dots + \frac1n\right) \to 0$). |
| 35 | tp-02-01 · easy · B | A square matrix $A$ is called involutory if: (new) | A square matrix $A$ is called orthogonal if: (new) | ('called involutory if') repeats Expected TGT 2 Q85 (and Expected TGT 4 Q23 asks it for a 2×2 matrix). |
| 37 | tp-08-02 · easy · B | The integrating factor of the linear differential equation $\frac{dy}… (new) | A homogeneous differential equation $\dfrac{dy}{dx} = f\left(\dfrac y… (new) | (integrating factor $e^{\int P\,dx}$) repeats Expected TGT 1 Q85. |
| 39 | tp-11-08 · easy · B | For the conic $\frac{l}{r} = 1 + e\cos\theta$ (focus at the pole), th… (new) | For the conic $\dfrac{l}{r} = 1 + e\cos\theta$ (focus at the pole), t… (new) | (directrix of $\frac lr = 1 + e\cos\theta$) repeats Expected TGT 2 Q13; a first replacement ('a hyperbola when $e > 1$') repeats Expected TGT 1 Q82. |
| 40 | tp-01-02 · easy · C | The relation $R = \{(1,1), (2,2), (3,3), (1,2), (2,3)\}$ on the set $… (new) | If $n(A) = 3$ and $n(B) = 2$, then the number of relations from $A$ t… (new) | (the relation $\{(1,1), (2,2), (3,3), (1,2), (2,3)\}$) repeats Expected TGT 3 Q12. |
| 42 | tp-10-04 · easy · B | If $\omega$ is a non-real cube root of unity, then $(1 - \omega + \om… (new) | If $\omega$ is an imaginary cube root of unity, then the value of $(1… (UP TGT 2001) | book p441 Q79 (UP TGT 2001, T5 pool) takes this slot so that the past-question count stays 30 after Q57 became new; the earlier new item here ($(1 - \omega + \… |
| 43 | tp-09-02 · easy · C | $\cos 3\theta$ equals: (new) | $\sin C + \sin D$ is equal to: (new) | ($\cos 3\theta$) repeats Expected TGT 1 Q87. |
| 44 | tp-06-01 · medium · B | If $y = \tan^{-1}\sqrt{\dfrac{1 - \cos x}{1 + \cos x}}$, then $\dfrac… (UP TGT 2003) | If $\sin y = x\sin(a + y)$, then $\dfrac{dy}{dx}$ is equal to: (UP TGT 2003) | (book p516 Q161, $y = \tan^{-1}\sqrt{(1 - \cos x)/(1 + \cos x)}$) is UP PGT 2026 Q113 verbatim, a solved paper in the app. Now book p515 Q158 (UP TGT 2003, sam… |
| 45 | tp-13-03 · easy · C | The radius of the sphere $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$ … (new) | The equation of the tangent plane at the point $(x_1, y_1, z_1)$ of t… (new) | (radius of $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$) was in the draft of mock 1 (since changed) and has the skeleton of LT 2018 Q88; kept replaced. |
| 46 | tp-12-01 · easy · D | The position vectors of points $A$ and $B$ are $2\hat i + 3\hat j - \… (new) | If the position vector of $A$ is $\hat i + 2\hat j - \hat k$ and $\ov… (new) | (mid-point of $2\hat i + 3\hat j - \hat k$ and $4\hat i - \hat j + 3\hat k$) has the skeleton of Expected TGT 3 Q74. |
| 47 | tp-01-04 · easy · B | The general term $T_{r+1}$ in the expansion of $(x + a)^n$ is: (new) | The sum of all the binomial coefficients ${}^nC_0 + {}^nC_1 + {}^nC_2… (new) | (general term $T_{r+1}$) repeats Expected TGT 1 Q48. |
| 50 | tp-01-03 · easy · A | In how many ways can a committee of 3 men and 2 women be chosen from … (new) | In how many ways can 6 different prizes be given to 3 students, if a … (new) | (committee of 3 men and 2 women from 6 men and 5 women) has the skeleton of Expected TGT 3 Q32. |
| 51 | tp-01-07 · easy · D | A rational number $\frac{p}{q}$ in its lowest terms has a terminating… (new) | For $a > 0$, $a \ne 1$ and $x > 0$, $a^{\log_a x}$ equals: (new) | (terminating decimal iff $q = 2^m5^n$) repeats Expected TGT 1 Q71; a first replacement (product of a rational and an irrational number) collided with the new E… |
| 52 | tp-06-04 · easy · C | The equation of the normal to the curve $y = x^2$ at the point $(1, 1… (new) | For the parabola $y^2 = 4ax$, the length of the subnormal at any poin… (new) | (normal to $y = x^2$ at $(1, 1)$) has the skeleton of Expected TGT 1 Q8; a first replacement (point where the tangent is parallel to the $x$-axis) was close to… |
| 54 | tp-09-04 · easy · B | The principal value branch (range) of $\cos^{-1}x$ is: (new) | For $-1 \le x \le 1$, $\cos^{-1}(-x)$ is equal to: (new) | (principal value branch of $\cos^{-1}x$) repeats Expected TGT 2 Q77. |
| 55 | tp-05-04 · medium · C | The limit of the sequence $a_n = \sqrt{n^2 + n} - n$ is: (new) | The limit of the sequence $a_n = \dfrac{1^2 + 2^2 + \dots + n^2}{n^3}… (new) | ($\sqrt{n^2 + n} - n \to \frac12$) repeats Expected TGT 3 Q31. |
| 57 | tp-09-06 · easy · D | From the top of a 60 metre tall lighthouse, the angle of depression o… (UP TGT 2001) | The angles of elevation of the top of a tower from two points on the … (new) | (lighthouse 60 m, depression 15°, book p1052 Q220) has the skeleton of Expected TGT 2 Q46; a first replacement (shadow $\sqrt3\,h$, elevation of the sun) had t… |
| 60 | tp-10-04 · easy · B | The sum of all the $n$th roots of unity ($n \ge 2$) is: (new) | The points representing the three cube roots of unity in the Argand p… (new) | (sum of all the $n$th roots of unity) repeats Expected TGT 3 Q87. |
| 63 | tp-01-08 · medium · C | If the roots of the equation $x^3 - 12x^2 + 39x - 28 = 0$ are in A.P.… (UP TGT 2003) | The set of values of $p$ for which the roots of the equation $3x^2 + … (UP TGT 2003) | (roots of $x^3 - 12x^2 + 39x - 28 = 0$ in A.P., book p61 Q351) is the same question as Expected TGT 2 Q18. Now book p66 Q380 (UP TGT 2003, T5 pool); options re… |
| 66 | tp-02-02 · easy · C | The inverse of the matrix $\begin{bmatrix}3&5\\1&2\end{bmatrix}$ is: (new) | If $A = \begin{bmatrix}2&0&0\\0&3&0\\0&0&4\end{bmatrix}$, then $A^{-1… (new) | (inverse of a 2×2 matrix) has the skeleton of Expected TGT 2 Q6. |
| 67 | tp-07-01 · easy · B | $\int \frac{dx}{\sqrt{a^2 - x^2}}$ equals: (new) | $\int \operatorname{cosec} x\,dx$ equals: (new) | ($\int\frac{dx}{\sqrt{a^2 - x^2}}$) repeats Expected TGT 2 Q71. |
| 68 | tp-02-04 · easy · B | The solution of the equations $3x - 2y + 3z = 8$, $2x + y - z = 1$, $… (UP TGT 2001) | The rank of the matrix $\begin{bmatrix}8&1&3&6\\0&3&2&2\\-8&-1&-3&4\e… (UP TGT 2001) | (solve $3x - 2y + 3z = 8$, … by testing options, book p273 Q1001) has the skeleton of the UP TGT 2010 item in Expected TGT 3 (a 3×3 system with options of trip… |
| 75 | tp-11-06 · easy · A | The eccentricity of the ellipse $9x^2 + 25y^2 = 225$ is: (new) | The length of the latus rectum of the ellipse $\dfrac{x^2}{25} + \dfr… (new) | (eccentricity of $9x^2 + 25y^2 = 225$) has the skeleton of Expected TGT 3 Q77 (eccentricity of $16x^2 - 9y^2 = 144$). |
| 76 | tp-11-07 · easy · B | The asymptotes of the rectangular hyperbola $xy = c^2$ are: (new) | The hyperbola conjugate to $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ … (new) | (asymptotes of $xy = c^2$) has the skeleton of Expected TGT 4 Q1 (asymptotes of $\frac{x^2}{16} - \frac{y^2}{9} = 1$). |
| 81 | tp-05-03 · easy · C | The Archimedean property of $\mathbb{R}$ states that if $x > 0$ and $… (new) | In a metric space $(X, d)$, the triangle inequality states that for a… (new) | (Archimedean property) repeats Expected TGT 2 Q65. |
| 83 | tp-16-07 · easy · C | Standard deviation is independent of the change of: (new) | The mean deviation of a set of observations is least when the deviati… (new) | (standard deviation independent of change of origin, not of scale) is the stock item of Expected TGT 1 Q89 and Expected TGT 4 Q75. |
| 84 | tp-01-08 · easy · D | If $\alpha, \beta$ are the roots of $ax^2 + bx + c = 0$ ($a, c \ne 0$… (new) | If one root of the equation $x^2 - 6x + k = 0$ is double the other, t… (new) | (equation with roots $\frac1\alpha$, $\frac1\beta$) has the skeleton of Expected TGT 4 Q22; a first replacement (equation with roots $3 \pm \sqrt2$) was the sa… |
| 85 | tp-16-01 · easy · D | A number is chosen at random from the numbers 1 to 30. The probabilit… (new) | A letter is chosen at random from the letters of the word MATHEMATICS… (new) | (multiple of 3 or 5 from 1 to 30) has the addition-theorem skeleton of Expected TGT 2 Q69 (king or heart). |
| 87 | tp-05-02 · easy · D | The set $\mathbb{R} \setminus \mathbb{Q}$ of all irrational numbers i… (new) | By Cantor's theorem, for every set $A$: (new) | (the irrationals are uncountable) is the fact of Expected TGT 2 Q28; a first replacement (a countable union of countable sets is countable) collided with the n… |
| 89 | tp-11-05 · easy · D | The focus of the parabola $x^2 = -12y$ is: (new) | The parametric coordinates of a point on the parabola $y^2 = 12x$ are: (new) | (focus of $x^2 = -12y$) repeats Expected TGT 1 Q4. |

##### Checked against the solved papers and the other expected papers

- Solved papers (`data/mq/*.json` except `exp-*`): TF-IDF search (`sim.py`) of every final question plus phrase searches (`grepsolved.py`). Apart from the old Q44, no copy. Two new questions are siblings of a June 2026 item with a different function or ask, which the blueprint allows: Q43 ($\sin C + \sin D$; 2026 Q59 asked $\sin(A + B) - \sin(A - B)$) and Q32 ($\frac{x^4 - 1}{x - 1}$; 2026 Q120 asked $\frac{x^2 - 4}{x - 2}$).
- The four final expected TGT papers: every question compared with every question of the same topic id in all four (`xfinal.py topic`) and by TF-IDF across topics (`xfinal.py sim`).
- Kept after a deliberate look (same area, different item): Q62 (opposite angles of a cyclic quadrilateral; Expected TGT 1 Q58 uses the exterior-angle corollary with numbers), Q73 (King's rule, $\int_0^\pi \frac{x\sin x}{1 + \cos^2 x}dx$; Expected TGT 4 Q66 is the plain $\int_0^\pi x\sin x\,dx$), Q74 ($\frac{d}{dx}a^x$; Expected TGT 4 Q60 is $\frac{d}{dx}\log_a x$), Q69 (parallelogram law; Expected TGT 4 Q71 applies it to equal forces at 120°), Q71 (work–energy principle; Expected TGT 2 Q23 applies it), Q23 (Lami's formula; Expected TGT 2 Q64 applies it), Q53 (angle in a semicircle; Expected TGT 3 Q65 uses it), Q37 (substitution $y = vx$; Expected TGT 2 Q9 solves one homogeneous equation), Q75 (latus rectum of an ellipse; Expected TGT 1 Q47 finds $e$ from a latus-rectum condition), Q85 vs the card items, Q68 (rank) vs the systems items. If the coordinator reads "same skeleton" more strictly, Q62 and Q73 are the first candidates.

##### Doubtful or worth a second look

- Q36 (past): "two roads intersect at 60°" — if the vehicles were on opposite sides of the crossing the angle would be 120° ($\sqrt{19}$ km, not an option); the intended reading is the only one the options allow.
- Q12: GFR is defined on women aged 15–49 (the Indian convention); some texts use 15–44. Only one option mentions women of child-bearing age, so the key is unaffected.
- Q83: for an even number of observations any value between the two middle ones minimises $\sum|x_i - a|$; "the median" is still the only correct option.
- The other expected papers changed twice while this check ran; the comparison above is against the files of 22:20–22:36. If any of them changes again, `xfinal.py` reruns the comparison.

##### Files

`mock.orig.jsonl` (writer's file), `mock.checked.jsonl` (result), `patch.py` (first-pass fixes) and `patch2.py` (cross-paper replacements, four rounds; run `patch.py` then `patch2.py`), `verify.py` + `verify_new.py`, `fmt.py`, `latexcheck.py`, `sim.py`, `grepsolved.py`, `xfinal.py`, `xmock.py`, `clipq.py` and `img/` (book clips: `qNN.png` for the writer's past questions, `cNNN.png` for candidates), `mine.json` (my blind answers), `make_log.py` (this log).

---

## Expected PGT paper 1 · May 2026 pattern

- In the app: `data/mq/exp-pgt-2026-1.json`, 90 questions (25 asked before), one clock of 100 minutes, −1/3 mark for a wrong answer.

### Writing

### PGT mock 1 (UP PGT Mathematics, expected paper, December 2026)

**Emphasis: May 2026 mirror** (blueprint §B6, mock P1). Book sources: UP PGT 2016 and UP PGT 2005 only (pool `pools/pgt-mock1.tsv`; nothing from `pools/excluded.tsv`). Base topic table (blueprint §B2, no swaps). 90 questions: 25 past (book), 65 new written as 2026 siblings. Level "PGT" on every line; `key` is null throughout.

Files: `mock.jsonl` (90 lines), `qs_past.py` / `qs_new.py` (question bank, correct option first), `verify.py` (second-way check of every answer), `build.py` (ordering, key balance, option placement, format checks), `texcheck.py` (KaTeX sanity), `order.json` (mock number → bank id), `render.py` / `crop.py` (book page images in `img/`), `dumpsolved.py` → `solved.txt` (the seven solved papers, for duplicate searches).

#### Counts per unit and difficulty

| Unit | Questions | Past | New | Recall | One-step | Medium | Hard |
|---|---|---|---|---|---|---|---|
| 1 Algebra | 21 | 6 | 15 | 2 | 7 | 10 | 2 |
| 2 Calculus | 18 | 5 | 13 | 4 | 6 | 5 | 3 |
| 3 Ordinary Differential Equations | 5 | 1 | 4 | 0 | 1 | 4 | 0 |
| 4 Coordinate Geometry (2-D) | 9 | 3 | 6 | 0 | 4 | 4 | 1 |
| 5 Vectors and 3-D Geometry | 6 | 2 | 4 | 0 | 3 | 3 | 0 |
| 6 Abstract Algebra | 5 | 1 | 4 | 1 | 3 | 1 | 0 |
| 7 Linear Algebra | 8 | 2 | 6 | 1 | 3 | 4 | 0 |
| 8 Vector Calculus | 3 | 1 | 2 | 1 | 1 | 1 | 0 |
| 9 Mechanics | 8 | 2 | 6 | 2 | 3 | 3 | 0 |
| 10 Trigonometry (+ complex numbers) | 7 | 2 | 5 | 0 | 2 | 5 | 0 |
| **Total** | **90** | **25** | **65** | **11** | **33** | **40** | **6** |

- Unit counts = blueprint §B1; past per unit = §B6 (P1 column); topic counts = §B2 exactly (68 topic ids, all in `topics.txt`) — asserted by `build.py` against `counts-pgt.json`.
- Difficulty: easy 44 (recall 11, one-step 33), medium 40, hard 6 = the P1 target 11 / 33 / 40 / 6 exactly.
- Hard items: Q20, Q45, Q58, Q67, Q78, Q87 (1 in Q1–30, 2 in Q31–60, 3 in Q61–90).

#### Format (mirror of May 2026)
- Match-the-list (4 pairs each), 5: Q13 permutation orders in $S_6$ (tp-04-04), Q19 standard integrals (tp-07-01), Q26 dimensions of matrix/polynomial spaces (tp-03-02), Q49 moments of inertia (tp-15-07), Q62 conic classification (tp-11-03).
- Multi-statement ("Which of the following statements are correct? … Choose the most appropriate answer"), 3: Q36 subspaces (tp-03-01), Q53 continuity/differentiability (tp-05-07), Q85 rings and fields (tp-04-10).
- Stock option set "3, 1, 2, 0" (in that order), 4 items with the key spread: Q23 (B), Q33 (C), Q69 (D), Q77 (A).
- No "None of these", no "All of these" (the one book "none of the above" was replaced). Numeric option sets (35 others) are never in ascending or descending order.
- Answer key: A 22, B 22, C 23, D 23; longest run 3 (three runs of 3).
- Order: units fully interleaved, 10 adjacent same-unit pairs (≈ 11.4 expected at random), no three in a row, no two adjacent questions on the same topic, special-format items at least 3 apart. Past questions spread 9 / 8 / 8 over the thirds.
- Direct stems: median 76 characters.

#### Past questions used (25: 17 UP PGT 2016, 8 UP PGT 2005)

All copied from the page images (PyMuPDF renders), options kept (re-ordered to fit the key), solved afresh.

| Mock Q | Source tag (book) | Origin | Book page | Book Q | Topic | Difficulty |
|---|---|---|---|---|---|---|
| 1 | PGT 2005 | UP PGT 2005 | 111 | 673 | tp-01-03 | medium |
| 4 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 36 | 203 | tp-01-08 | medium |
| 9 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 334 | 2153 | tp-03-02 | medium |
| 10 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 1104 | 140 | tp-15-09 | easy |
| 12 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 585 | 543 | tp-06-03 | easy |
| 14 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 416 | 310 | tp-14-02 | medium |
| 28 | PGT 2005 | UP PGT 2005 | 445 | 108 | tp-10-04 | medium |
| 29 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 886 | 471 | tp-11-06 | easy |
| 30 | PGT 2005 | UP PGT 2005 | 340 | 2188 | tp-03-02 | medium |
| 34 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 827 | 132 | tp-11-02 | medium |
| 39 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 531 | 255 | tp-05-06 | easy |
| 41 | PGT 2005 | UP PGT 2005 | 874 | 407 | tp-11-05 | medium |
| 47 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 948 | 1031 | tp-13-03 | easy |
| 48 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 1104 | 142 | tp-15-01 | medium |
| 55 | PGT 2005 | UP PGT 2005 | 285 | 1882 | tp-02-04 | medium |
| 57 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 666 | 962 | tp-07-03 | medium |
| 59 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 391 | 166 | tp-12-02 | medium |
| 61 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 666 | 963 | tp-07-03 | medium |
| 70 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 1201 | 336 | tp-01-06 | medium |
| 73 | PGT 2005 | UP PGT 2005 | 764 | 1415 | tp-08-04 | medium |
| 75 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 1059 | 260 | tp-09-04 | medium |
| 82 | KVS TGT DEC 2017, PGT 2005 | UP PGT 2005 | 188 | 1203 | tp-01-01 | medium |
| 88 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 230 | 1528 | tp-04-02 | easy |
| 89 | UP PGT-2016 (02-02-2019) | UP PGT 2016 | 1059 | 259 | tp-06-06 | easy |
| 90 | PGT 2005 | UP PGT 2005 | 285 | 1881 | tp-02-03 | easy |

Pool questions read but **not** used (repeat or near-repeat of a solved paper already in the app, or a broken book item):
- p523 Q209 ($f(1)+\frac{f'(1)}{1!}+\dots$ for $x^n$) = LT 2025 Q132; p531 Q256 (non-differentiable points of $|x+3|+|x^2-4|$) is the GIC 2026 Q103 item; p781 Q1494 ($y\,dx-(x+2y^2)dy=0$) ≈ LT 2018 $(x+2y^3)y'=y$; p925 Q702 (image in a plane) ≈ LT 2018 Q83; p391 Q164 = idea of PGT 2026 Q76; p524 Q212 = PGT 2026 Q113; p657 Q920 = PGT 2026 Q68; p229 Q1522 = PGT 2026 Q26; p334 Q2155 = item of PGT 2026 Q22/89; p334 Q2156 ≈ PGT 2026 Q47; p138 Q833 ≈ PGT 2026 Q104; p1034 Q125 = PGT 2026 Q124; p1201 Q337 = item of UP TGT 2021 Q33.
- Broken in the book: p283 Q1872, p658 Q924, p340 Q2189 (start of the stem lost in the layout); p340 Q2191 (the definition of $T$ is missing); p1113 Q189 (two identical options); p138 Q829 (no option is correct for the series as printed); p523 Q206 (limit printed with $x\to0$, solved for $x\to\infty$, book key wrong).
- p416 Q306 (UP PGT 2016) is printed again as p340 Q2186 (PGT 2009, another mock's pool), so it was left out to avoid a cross-mock repeat.

#### Flags (all in `mock.jsonl`)
- Q1 (UP PGT 2005): the book's key (d) 16 is wrong; $^6P_3-{}^4P_3=120-24=96$.
- Q10 (UP PGT 2016): option (d) "none of the above" replaced by $\frac{a^2}{4b}$ (the greatest height).
- Q30 (UP PGT 2005): the book's key (d) 4 is wrong; $\dim W=3$.
- Q34 (UP PGT 2016): $h=-6$, $f=-2$ also gives parallel lines ($h+f=-8$, not offered); 8 is the intended answer.
- Q55 (UP PGT 2005): option wording tidied ("infinite solution", "zero solution"); the book's working says $\rho(A:B)\ne\rho(A)$ yet marks (c); both ranks are 2.
- No flags on the 65 new questions.

#### Checks
- `verify.py`: **90 of 90 answers checked a second way; 0 failures.** 89 are recomputed by script (fractions, exact determinants/ranks, Simpson integrals, numeric derivatives, brute force — e.g. all $9!$ seatings for Q31, all permutations of $S_4$ for Q88, $n\le2000$ for Q78, Durand–Kerner roots for Q87); Q5 (order and degree) is a definition item, accepted by inspection.
- Duplicate search: every past and new question was searched in the seven solved papers (`solved.txt`: UP TGT 2026, UP PGT 2026, UP TGT 2021, LT 2018, LT 2025, GIC 2026, DSSSB TGT 2021) by its key numbers and phrases; none repeats. New questions that share an idea with a 2026 question use different numbers or a different ask (e.g. image of a point vs 2026 foot of a perpendicular, $|\operatorname{adj}(2A)|$ vs 2026 $|\operatorname{adj}A|$, dimension match vs 2026 dimension of symmetric matrices, ring/disc/sphere MI match vs 2026 MI of a rod).
- `build.py`: 90 lines, n = 1…90, valid JSON (file reloaded), topic/unit/past/difficulty counts asserted, 4 distinct options per question, no `$$`, `\displaystyle` or `align` in stems/options, even `$` counts, no control characters.
- `texcheck.py`: 1252 math segments, 0 problems (braces, `\left`/`\right`, `\begin`/`\end`, no commands outside math).

### Independent check

#### Expected PGT mock 1: check of 22 November 2026

Mock checked: `mocks/pgt-1/mock.jsonl` (PGT mock 1, "May 2026 mirror", blueprint §B6 P1; 25 past questions from UP PGT 2016 and 2005, 65 new). Copied to `mock.orig.jsonl`; corrected file `mock.checked.jsonl` (90 lines). Scripts in this folder: `apply_fixes.py` (all edits), `verify_ck.py` (second-way check of every answer), `fmtp.py` (format, counts, key balance), `texck.py` (KaTeX sanity), `mine.py` (my own answers before reading the key), `clipq.py`/`clip.py` (book page renders in `img/`), `sim.py`/`grepsolved.py`/`dumpsolved.py` (near-copy searches; `pgt26.txt`, `gic26.txt`, `p2.txt` are dumps of UP PGT 2026, GIC 2026 and mock 2).

##### Counts (checked file)
| Unit | Questions | Past | Easy | Medium | Hard |
|---|---|---|---|---|---|
| 1 Algebra | 21 | 6 | 9 | 10 | 2 |
| 2 Calculus | 18 | 5 | 10 | 5 | 3 |
| 3 ODE | 5 | 1 | 1 | 4 | 0 |
| 4 2-D geometry | 9 | 3 | 4 | 4 | 1 |
| 5 Vectors and 3-D | 6 | 2 | 3 | 3 | 0 |
| 6 Abstract algebra | 5 | 1 | 4 | 1 | 0 |
| 7 Linear algebra | 8 | 2 | 4 | 4 | 0 |
| 8 Vector calculus | 3 | 1 | 2 | 1 | 0 |
| 9 Mechanics | 8 | 2 | 5 | 3 | 0 |
| 10 Trigonometry/complex | 7 | 2 | 2 | 5 | 0 |
| **Total** | **90** | **25** | **44** | **40** | **6** |

- Topic counts = blueprint §B2 exactly (68 ids, all in `topics.txt`); unit and past-per-unit counts = §B1/§B6 P1. Difficulty 44/40/6 (recall 11, one-step 33 — the eight replacements keep the type of the item they replace). Hard: Q20, Q45, Q58, Q67, Q78, Q87.
- Key balance unchanged: A 22, B 22, C 23, D 23; longest run 3 (every replacement keeps the key letter of the item it replaces). No "None of these"/"All of these"; no all-numeric option set in ascending or descending order (31 sets). 5 match-the-list (Q13, 19, 26, 49, 62), 3 multi-statement (Q36, 53, 85). Stock set "3, 1, 2, 0" now 3 items (Q33 C, Q69 D, Q77 A; the fourth, Q23, was replaced) — within "up to 5".
- Format: 90 lines, n = 1–90, valid JSON (reloaded), keys as the writer's, four distinct options, answer 0–3, level PGT, even `$` everywhere, no `$$`/`\displaystyle`/`align` in stems or options, no ₹ inside math; `texck.py`: 1305 math segments, 0 problems.

##### My answers and script checks
- I solved all 90 before opening the key/solutions (`mine.py`): **90/90 agree with the writer's key**. No wrong answer in the mock.
- `verify_ck.py`: **90 of 90 checked by script, 0 failures** (sympy exact integrals/limits/series/determinants/ranks/eigenvalues/adjugates, permutation orders in sympy, brute force: all 3-letter words for Q1, all 9! seatings for Q31, all 8 maps for Q84, S₄ conjugation for Q88, n < 5000 for Q78, n < 60 for Q27; Simpson integrals; numeric derivatives; random-vector linearity tests for Q63; random matrices for Q86). Each check maps the computed value onto the options and requires the keyed option to be the only match. Five checks are partial because the item is a definition/theorem statement (Q5 order/degree via the squared polynomial; Q21 Cayley–Hamilton checked on a matrix plus the non-diagonalisable counterexample; Q36, Q53, Q85 statements checked by counterexample/brute force where possible, the remaining statements are standard theorems).

##### Past questions verified against the book (25; pages rendered at full size, crop box = media box)
All 25 are in `pools/pgt-mock1.tsv` and none is in `pools/excluded.tsv`. Stems and options match the page images (options re-ordered by the writer; only cosmetic wording changes) except where noted:

| Q | Book page / no. | Tag | Result |
|---|---|---|---|
| 1 | p111 Q673 | PGT 2005 | matches; book key (d) 16 is wrong (its own working gives 120 − 24 = 96); key 96 correct |
| 4 | p36 Q203 | UP PGT 2016 | matches |
| 9 | p334 Q2153 | UP PGT 2016 | matches ("if a equal to" → "if a is equal to") |
| 10 | p1104 Q140 | UP PGT 2016 | matches; book option "none of the above" replaced by $\frac{a^2}{4b}$ (flagged) — fair |
| 12 | p585 Q543 | UP PGT 2016 | matches |
| 14 | p416 Q310 | UP PGT 2016 | matches |
| 28 | p445 Q108 | PGT 2005 | matches |
| 29 | p886 Q471 | UP PGT 2016 | matches |
| 30 | p340 Q2188 | PGT 2005 | matches; book key (d) 4 is wrong, dim W = 3 — writer's fix correct |
| 34 | p827 Q132 | UP PGT 2016 | matches; **two-answer item — stem amended (see changes)** |
| 39 | p531 Q255 | UP PGT 2016 | matches |
| 41 | p874 Q407 | PGT 2005 | matches |
| 47 | p948 Q1031 | UP PGT 2016 | matches |
| 48 | p1104 Q142 | UP PGT 2016 | matches |
| 55 | p285 Q1882 | PGT 2005 | matches; "infinite solution"/"zero solution" tidied (flagged); book working says ρ(A:B) ≠ ρ(A) yet keys (c) — key (c) is right, both ranks 2 |
| 57 | p666 Q962 | UP PGT 2016 | matches (upper limit $e^2$ confirmed on a separate render of the line above) |
| 59 | p391 Q166 | UP PGT 2016 | matches (same option order) |
| 61 | p666 Q963 | UP PGT 2016 | matches |
| 70 | p1201 Q336 | UP PGT 2016 | matches |
| 73 | p764 Q1415 | PGT 2005 | matches (option (d) continues at the top of the right column) |
| 75 | p1059 Q260 | UP PGT 2016 | matches |
| 82 | p188 Q1203 | KVS TGT 2017, PGT 2005 | matches |
| 88 | p230 Q1528 | UP PGT 2016 | matches |
| 89 | p1059 Q259 | UP PGT 2016 | matches |
| 90 | p285 Q1881 | PGT 2005 | matches |

No past question failed to match the book. The writer's flagged edits (Q1, Q10, Q30, Q55) are fair, faithful repairs.

##### Changes (12 questions touched; 8 replaced)
- **Q34** (UP PGT 2016, p827 Q132): with $h^2=36$ and $\Delta=0$ both $(h,f)=(6,2)$ and $(-6,-2)$ give two real parallel lines ($(3x\pm2y+3)(3x\pm2y-1)=0$), so $h+f=\pm8$; only 8 was offered, but the item was not strictly single-answer. Now: "If $h>0$ and the equation … represents two parallel lines, then $(h+f)$ is equal to" — unique answer 8 (key B unchanged); solution and flag rewritten (flag says the condition was added by the checker).
- Near-copies of the 2026 solved papers (same stem and same steps, only the numbers/function changed) — **replaced by new questions on the same topic, same difficulty and same key letter** (`origin` "new", reason in `flag`):
  - **Q15** (tp-11-07, easy): was the eccentricity of $9x^2-16y^2-18x-64y-199=0$ by completing squares = GIC 2026 Q64 (eccentricity of $9x^2+4y^2-54x-56y+241=0$) with new numbers. Now: latus rectum of $9x^2-16y^2=144$ ($\frac92$, key D).
  - **Q23** (tp-03-03, easy): was "the nullity of $T(x,y,z)=(x-y,y-z,z-x)$" with options 3, 1, 2, 0 = UP PGT 2026 Q22 and Q89 (nullity of a given $T$, same options). Now: the range of the same $T$ (the plane $a+b+c=0$, key B; distractor = the kernel).
  - **Q27** (tp-01-04, medium): was the coefficient of $x^5$ in $\left(x^2-\frac2x\right)^{10}$ = UP PGT 2026 Q8 (coefficient of $x^4$ in $\left(\frac x2-\frac3{x^2}\right)^{10}$) with new numbers. Now: three consecutive coefficients of $(1+x)^n$ in the ratio 1:2:3 ⇒ $n=14$ (key B).
  - **Q32** (tp-02-01, medium): was "if $A^2=I$, then $(A-I)^3+(A+I)^3-7A$" = UP PGT 2026 Q54 ("if $A^2=A$ then $(I+A)^3-7A$"). Now: $AB=A$, $BA=B$ ⇒ $A^2=A$ (key A).
  - **Q38** (tp-07-05, easy): was the area between $y=4x-x^2$ and the $x$-axis = UP PGT 2026 Q6 (area between $y=2x-x^2$ and $y=-x$) with new numbers. Now: area enclosed by $4x^2+9y^2=36$ ($6\pi$, key B).
  - **Q63** (tp-03-03, easy): was $T^{-1}$ for $T(x,y)=(2x+y,x+y)$ = UP PGT 2026 Q1 and GIC 2026 Q42 ($T^{-1}$ of $T(a,b)=(a+b,a)$). Now: which of four maps $\mathbb R^2\to\mathbb R^2$ is linear (key B).
  - **Q84** (tp-01-02, easy): was $f(f(x))$ for $f(x)=\frac{x-1}{x+1}$ = UP PGT 2026 Q29 ($f\circ f$ of $(3-x^3)^{1/3}$). Now: number of onto functions from a 3-set to a 2-set (6, key C).
  - **Q86** (tp-02-01, easy recall): was "A square matrix $A$ is called involutory if" with options $A^2=I$, $A^2=A$, $A^k=O$, $AA^T=I$ = UP TGT 2026 Q54 ("idempotent if", options $A=A^T$, $A^2=I$, $A^2=A$, $A^2=0$). Now: $\operatorname{tr}(AB-BA)=0$ (key A).
- Notes repaired (no change to question or key): Q1 notes (a), (b) were meaningless ("half the right count…", "$^6C_3+12$") → blank, (d) now says 16 is the book's value; Q4 note (c) used the wrong $a$ → "Sum 6 gives $a=-6$, but the product 8 is not $a^3=-216$"; Q58 note (c) unclear → "Drops the coefficient 3 of $n(n-1)$".
- Grammar slips searched: none needing change. Solutions are the writer's own (no book text copied; I compared the 25 past-question solutions with the book's working).

##### Near-copy review of the other new questions (kept)
Compared each new question with all 125 UP PGT 2026 and 76 GIC 2026 maths items (read side by side, not only by TF-IDF) and searched the other solved papers. Kept as "same idea, different ask/object": Q5 (order and degree of the radius-of-curvature equation; PGT 2026 Q43 asks the sum for a different first-order equation — same trap of clearing a fractional power, noted as the closest call), Q6 (e^x[f+f′] with f = log x; PGT 2026 Q87 uses f = 1/(1+x)), Q11 (power from mass, height, time; PGT 2026 Q67 asks the time), Q13 (match of permutation orders; PGT 2026 Q56 one order), Q19 (match of four square-root standard integrals, none of which is in PGT 2026 Q20), Q26 (dimension match; PGT 2026 Q16 is one dimension), Q42 (|adj(2A)|; PGT 2026 Q25 asks n), Q43 (tan 3θ substitution; PGT 2026 Q113 half-angle), Q53 (statement c repeats the fact of PGT 2026 Q86 inside a 4-statement item), Q62 (conic-classification match required by the blueprint; four new equations, parabola instead of circle; also like LT 2025 Q88), Q66 (Aⁿ of [[a,b],[0,a]]; PGT 2026 Q106 is the all-ones matrix), Q68 (image vs PGT 2026 Q23 foot of perpendicular), Q81 (a+b+c=0 with 3,5,7 asks the angle; PGT 2026 Q13 asks the sign of Σa·b), Q87 (cubic transformation; GIC 2026 Q56 asks α³+β³+γ³+3αβγ).
Past questions whose type also occurs in 2026 (kept: genuine exam questions from the assigned pool, not on the exclusion list, different numbers): Q9 ≈ PGT 2026 Q115 (linear dependence parameter; Q9 has the two-valued answer ±2), Q30 ≈ PGT 2026 Q78 (dimension of a subspace), Q39 ≈ PGT 2026 Q102 (standard limit), Q41 ≈ PGT 2026 Q84 (tangent to a parabola), Q55 ≈ PGT 2026 Q107 / TGT 2026 Q52 (consistency), Q28 ≈ GIC 2026 Q118 (De Moivre power).
Within the mock: no repeats. Related but different pairs: Q42/Q90 (det(kA) used in both), Q18/Q47 (point–plane distance), Q41/Q50 (c = a/m), Q3/Q84 (counting maps: all binary operations vs onto maps), Q5/Q77 (both about the order of a DE: order+degree of a given equation vs order from a general solution).

##### Mock 2 (`mocks/pgt-2/mock.jsonl`) against this mock — mock 1 has priority, mock 2's checker should replace its side
Same question:
- P1 Q2 = P2 Q70 (Green's theorem, ∮(x dy − y dx) on x²+y²=4, 8π).
- P1 Q5 = P2 Q34 (order and degree of [1+(y′)²]^{3/2} = k y″).
- P1 Q8 = P2 Q57 (eigenvalues of adj A from 1, 2, 3).
- P1 Q18 = P2 Q54 (distance between 2x−2y+z+3=0 and 4x−4y+2z+5=0).
- P1 Q64 = P2 Q78 (10 N weight, strings at 30° and 60° to the vertical).
- P1 Q68 = P2 Q82 (image of (1, 2) in x − y + 3 = 0).
- P1 Q81 ≈ P2 Q41 (same numbers 3, 5, 7 and the same computation cos θ = ½: vectors with a+b+c=0 vs two forces with resultant 7).
Same skeleton with new numbers:
- P1 Q37 ~ P2 Q37 (sin10°sin50°sin70° vs cos20°cos40°cos60°cos80°: the θ, 60°±θ product).
- P1 Q40 ~ P2 Q16 (independent events, P(A) and P(A∪B) given, find P(B)).
- P1 Q42 ~ P2 Q79 (|adj(kA)| with |A| given).
- P1 Q54 ~ P2 Q77 (shortest distance between two skew lines).
- P1 Q58 ~ P2 Q59 (Σ polynomial(n)/n! = multiple of e).
- P1 Q7 ~ P2 Q47 (A⁻¹ from a polynomial identity in A; P2's is a past UP PGT 2011 item).
- P1 Q71 ~ P2 Q88 (matrix of T relative to non-standard ordered bases; P2's is a past UP PGT 2021 item).
- P1 Q74 ~ P2 Q11 (SHM period from speeds at given distances; borderline).
- P1 Q75 ~ P2 Q45 (sum of inverse tangents; borderline).
- P1 Q45 ~ P2 Q61 (∫₀^π x f(sin x) dx by x → π − x; P2's is past UP PGT 2011; borderline).
Same stock item:
- P1 Q46 = P2 Q40 item a (sinh⁻¹(3/4) = log 2 inside P2's match).
- P1 Q49 item d = P2 Q39 (M.I. of a thin spherical shell about a diameter, 2/3 Ma²; P2's is past UP PGT 2021).
- P1 Q26 item c ~ P2 Q53 (dimension of upper-triangular matrices, 3×3 vs 4×4).
- P1 Q53 ~ P2 Q48 (multi-statement on continuity/differentiability with the same stock statements).
- P1 Q62 ~ P2 Q55 (classifying a second-degree equation; borderline).
- P1 Q13 ~ P2 Q2 (order of a permutation in two-row notation; borderline).
- P1 Q41 ~ P2 Q18 (condition for a line to touch a parabola; both past items; borderline).
- P1 Q72 ~ P2 Q50 (like parallel forces at the ends of a rod; different ask; borderline).
- Old P1 Q86 (involutory definition) ~ P2 Q68 (definition match) — resolved here: P1 Q86 replaced.
Related but different asks (no action needed): P1 Q32 (new: AB=A, BA=B) vs P2 Q38/Q6 (idempotent facts); P1 Q38 (new: ellipse area) vs P2 Q30 (volume of the ellipse revolved); P1 Q69 vs P2 Q62 (determinants vanishing by a column operation).

##### Doubtful / for the record
- Q44 (tan 3x = tan x): keyed $x=n\pi$; option $x=\frac{n\pi}2$ is the textbook-formula trap (it includes $x=\frac\pi2$, where both sides are undefined). Mathematically single-answer; a board key might have chosen $\frac{n\pi}2$. Kept, solution explains.
- Q71: key uses the column convention for the matrix of T (the board's 2026 Q4 offered the transpose as a distractor, so it uses columns); the transpose is option B.
- Q45 labelled hard is generous (a standard x → π − x integral); kept to hold the 6 hard items.
- Q5 is the closest of the kept new items to a 2026 question (same trap as PGT 2026 Q43); also identical to P2 Q34 (P2 should replace).

---

## Expected PGT paper 2 · most-repeated ideas

- In the app: `data/mq/exp-pgt-2026-2.json`, 90 questions (32 asked before), one clock of 100 minutes, −1/3 mark for a wrong answer.

### Writing

### Mock P2 — UP PGT Mathematics, expected paper (December 2026)

**Level** PGT. **Emphasis** (blueprint §B6, mock P2): *repeat-heavy*. Base topic table (§B2), no swaps; 35 past questions, only from UP PGT 2021 and UP PGT 2011 (pool `pools/pgt-mock2.tsv`), taken from the recurring ideas of §B4; the 55 new questions are "re-numbered classics" (same skeleton as the standard items, new numbers or a new ask). Recall / one-step / medium / hard = 12 / 34 / 38 / 6; 3 match-the-list + 2 multi-statement items.

Output: `mock.jsonl` (90 lines, n = 1..90). Source of every item: `items.py` (correct option first, notes aligned); `build.py` orders the paper, balances the key and places the options (seed 20261202); `verify.py` re-computes the answers and checks the file; `simcheck.py` compares every question with the seven solved papers (`solved.txt`, dumped from `data\mq\*.json` by `dump_solved.py`) and with the other questions of the mock. `render.py` renders book pages at full size (crop box reset to the media box); page images are in `img/`.

#### Counts per unit (= blueprint §B1) and per kind

| Unit | Questions (mock numbers) | total | past | R | E | M | H |
|---|---|---|---|---|---|---|---|
| 1 Algebra | 1, 6, 12, 13, 15, 16, 20, 23, 28, 36, 38, 44, 47, 51, 57, 59, 62, 68, 79, 83, 85 | 21 | 8 | 3 | 7 | 10 | 1 |
| 2 Calculus | 3, 9, 10, 14, 17, 19, 21, 22, 27, 30, 48, 52, 61, 71, 80, 81, 84, 86 | 18 | 7 | 3 | 5 | 8 | 2 |
| 3 ODE | 4, 26, 34, 35, 42 | 5 | 2 | 0 | 3 | 2 | 0 |
| 4 2-D geometry | 8, 18, 25, 32, 55, 66, 74, 82, 87 | 9 | 4 | 0 | 4 | 4 | 1 |
| 5 Vectors and 3-D | 43, 54, 58, 75, 77, 89 | 6 | 2 | 0 | 5 | 0 | 1 |
| 6 Abstract Algebra | 2, 63, 65, 67, 72 | 5 | 2 | 3 | 1 | 1 | 0 |
| 7 Linear Algebra | 24, 46, 49, 53, 60, 73, 88, 90 | 8 | 3 | 2 | 2 | 4 | 0 |
| 8 Vector Calculus | 29, 64, 70 | 3 | 1 | 0 | 1 | 2 | 0 |
| 9 Mechanics | 11, 33, 39, 41, 50, 69, 76, 78 | 8 | 3 | 1 | 3 | 4 | 0 |
| 10 Trigonometry and complex numbers | 5, 7, 31, 37, 40, 45, 56 | 7 | 3 | 0 | 3 | 3 | 1 |
| **Total** | | **90** | **35** | **12** | **34** | **38** | **6** |

- Past questions per unit 8 / 7 / 2 / 4 / 2 / 2 / 3 / 1 / 3 / 3, as in §B6.
- Topic counts equal the §B2 base table exactly (checked by `verify.py` against `blueprint/counts-pgt.json`); every topic id is in `topics.txt`.
- `difficulty` field: easy 46 (recall 12 + one-step 34), medium 38, hard 6.
- Hard items: Q7 (tan θ tan 2θ = 1, extraneous roots), Q32 (meeting point of a line pair), Q51 (cubic from a determinant), Q61 (∫₀^π x/(a²cos²x + b²sin²x)), Q77 (shortest distance of skew lines), Q86 (lim ((1+x)^{1/x} − e)/x): 1 in Q1–30, 2 in Q31–60, 3 in Q61–90 (half of them in the last third, §0.1).

#### Form and order
- Match-the-list (3): Q17 (∫tan, cot, sec, cosec), Q40 (values of sinh⁻¹ 3/4, cosh⁻¹ 5/3, tanh⁻¹ 1/2, coth⁻¹ 3), Q68 (idempotent / involutory / nilpotent / orthogonal). Multi-statement "choose the most appropriate answer" (2): Q48 (continuity/differentiability), Q83 (sets). No assertion–reason. The three match keys use three different code patterns (only Q40's is the stock "a – IV, b – III, c – II, d – I").
- "None of these": 0 (the three past questions that had it, Q7, Q32, Q47, got real options). No "All of these".
- Answer key A/B/C/D = 23/22/23/22; longest run of one letter 3.
- Units shuffled: 6 adjacent same-unit pairs, no three in a row. Past and new questions interleaved (past per third: 14 / 10 / 11).
- All-numeric option sets (33) are never in ascending or descending order.
- Stems: median 57.5 characters with LaTeX counted as one symbol; the long ones are the five match/statement items.

#### Past questions used (35: 27 UP PGT 2021, 8 UP PGT 2011)

| Mock Q | origin | book page, question | printed tag | topic | kind |
|---|---|---|---|---|---|
| 1 | UP PGT 2021 | p75 Q444 | UP PGT 2021 | tp-01-06 | E |
| 4 | UP PGT 2021 | p733 Q1286 | UP PGT 2021 | tp-08-01 | M |
| 5 | UP PGT 2021 | p434 Q34 | UP PGT 2021 | tp-10-04 | E |
| 7 | UP PGT 2011 | p1032 Q110 | PGT 2011 | tp-09-03 | H |
| 8 | UP PGT 2011 | p850 Q261 | NVS PGT 2022, PGT 2011 | tp-11-08 | E |
| 13 | UP PGT 2011 | p100 Q593 | UP PGT 2011, 2013 | tp-01-03 | E |
| 18 | UP PGT 2021 | p856 Q300 | UP PGT 2021 | tp-11-05 | E |
| 21 | UP PGT 2021 | p575 Q499 | UP PGT 2021 | tp-06-04 | M |
| 22 | UP PGT 2021 | p631 Q794 | UP PGT 2021 | tp-07-05 | M |
| 23 | UP PGT 2021 | p29 Q156 | UP PGT 2021 | tp-01-08 | E |
| 25 | UP PGT 2021 | p856 Q299 | UP PGT 2021 | tp-11-04 | M |
| 26 | UP PGT 2021 | p734 Q1287 | UP PGT 2021 | tp-08-03 | E |
| 28 | UP PGT 2021 | p156 Q963 | UP PGT 2021 | tp-01-02 | M |
| 29 | UP PGT 2021 | p1095 Q94 | UP PGT 2021 | tp-14-01 | M |
| 31 | UP PGT 2011 | p1031 Q107 | PGT 2011 | tp-09-05 | E |
| 32 | UP PGT 2011 | p835 Q175 | PGT 2011 | tp-11-02 | H |
| 36 | UP PGT 2021 | p125 Q760 | UP PGT 2021 | tp-01-04 | M |
| 38 | UP PGT 2021 | p255 Q1718 | UP PGT 2021 | tp-02-01 | M |
| 39 | UP PGT 2021 | p1095 Q93 | UP PGT 2021 | tp-15-07 | R |
| 43 | UP PGT 2021 | p945 Q1016 | UP PGT 2021 | tp-13-03 | E |
| 47 | UP PGT 2011 | p276 Q1833 | PGT 2011 | tp-02-02 | E |
| 49 | UP PGT 2021 | p327 Q2114 | UP PGT 2021 | tp-03-02 | R |
| 52 | UP PGT 2021 | p575 Q500 | UP PGT 2021 | tp-06-05 | M |
| 58 | UP PGT 2021 | p367 Q28 | UP PGT 2021 | tp-12-02 | E |
| 61 | UP PGT 2011 | p639 Q833 | UP PGT 2011, Haryana PGT 2019 | tp-07-03 | H |
| 62 | UP PGT 2021 | p254 Q1715 | UP PGT 2021, 2010 | tp-02-03 | M |
| 63 | UP PGT 2021 | p222 Q1464 | UP PGT 2021, 2016 | tp-04-08 | R |
| 69 | UP PGT 2021 | p1095 Q95 | UP PGT 2021 | tp-15-09 | E |
| 71 | UP PGT 2021 | p499 Q70 | UP PGT 2021 | tp-05-06 | M |
| 72 | UP PGT 2021 | p222 Q1468 | UP PGT 2021, 2016 | tp-04-07 | E |
| 73 | UP PGT 2021 | p326 Q2107 | UP PGT 2021 | tp-03-03 | M |
| 76 | UP PGT 2021 | p1093 Q87 | UP PGT 2021 | tp-15-05 | M |
| 81 | UP PGT 2011 | p654 Q903 | PGT 2011 | tp-07-02 | E |
| 84 | UP PGT 2021 | p500 Q75 | UP PGT 2021 | tp-06-01 | M |
| 88 | UP PGT 2021 | p326 Q2106 | UP PGT 2021 | tp-03-03 | M |

All were read from the page images (full media box), copied with the book's stem and options (options re-ordered for the key balance; trailing dashes replaced by colons), and solved independently. None is in `pools/excluded.tsv`; each was searched in the seven solved papers for its key numbers. They cover §B4 ideas 1–25 (definite integrals, limits, max/min, dot/cross products, roots and coefficients, continuity, derivatives, determinants, circle, triangle, ω, pair of lines, area, projectiles, vector spaces, linear maps, DE formation, Clairaut-type, subgroups, parabola, sphere).

Pool items rejected after reading or searching (the exclusion list missed them):
- p223 Q1471 (non-abelian group has at least 6 elements): the page also prints **LT 2018** (and GIC 2015), which the pool's tag column lost — excluded by rule.
- p222 Q1466 (o(a) = 30 ⇒ o(a¹⁸)) = GIC 2026 Q79.
- p275 Q1829 (A² − KA − 5I = 0) = skeleton of UP PGT 2026 Q57; p1093 Q88 (stone clears a wall, H = R/4) = UP PGT 2026 Q49; p835 Q173/Q174 (λ, k for a line pair) = UP PGT 2026 Q110; p856 Q301 (tangents from a point to a hyperbola) = UP PGT 2026 Q109; p368 Q30 (|A × B| and A·B) = UP PGT 2026 Q76.
- p442 Q87/Q88 (powers of 1 ± ω ∓ ω²) ≈ LT 2018 Q33; p872 Q389 (tangent to a hyperbola, m) ≈ LT 2018 Q81; p945 Q1015 (radius of a sphere) ≈ LT 2018 Q88; p412 Q284 (div(a × b) for irrotational a, b) = LT 2018 Q141; p411 Q280 (div r̂) is in LT 2025 Q84; p835 Q171 (angle of a pair) ≈ LT 2025 Q139; p735 Q1295 (log dy/dx = 2x − y) ≈ UP TGT 2021 Q70.
- p915 Q646 (angle between lines from l + m + n = 0, 2lm + 2nl − mn = 0): ambiguous — the lines make 60° but the printed option 120° is the angle between the direction vectors.

#### New questions (55)
Re-numbered classics on the §B2 slots, e.g. derangements D₄ (Q15), Σ(n+1)/n! = 2e (Q59), residue classes mod 5 (Q44), consecutive-integer roots (Q20), nilpotent A(I + A)ⁿ (Q12), |adj(3A)| (Q79), the cubic determinant with root −9 (Q51), inconsistency condition λ = 3, μ ≠ 10 (Q85), eigenvalues of adj A (Q57) and of an idempotent matrix (Q6), independent events (Q16), Leibnitz nth derivative (Q9), parametric astroid (Q10), decreasing interval (Q27), ∫dx/(1 + eˣ) (Q14), ∫x sec²x (Q19), ∫|x² − 1| (Q80), ∫log tan x (Q3), prolate spheroid volume (Q30), order/degree of the curvature equation (Q34), integrating factor log x (Q42), PI by the case of failure (Q35), image of a point (Q82), one line of a pair (Q74), conic type (Q55), ellipse from foci and e (Q87), angle between asymptotes (Q66), vector equally inclined to the axes (Q75), [a+b b+c c+a] (Q89), skew-line distance (Q77), parallel planes (Q54), (ab)² = a²b² (Q65), parity and order of a permutation (Q2), Gaussian integers (Q67), quotient space (Q60), upper-triangular matrices (Q53), dimension of a span (Q90), rank–nullity (Q24), T from two images (Q46), irrotational field a = 4 (Q64), Green's theorem (Q70), 3-5-7 forces (Q41), Lami (Q78), interchanged parallel forces (Q50), SHM period (Q11), work–energy (Q33), cos20°cos40°cos60°cos80° (Q37), tan⁻¹¼ + tan⁻¹(2/9) (Q45), |z − 2| = |z + 2| (Q56).

Each was searched in the seven solved papers (keyword search plus TF-IDF, `simcheck.py`). Replaced while writing because too close to a solved paper: sin⁻¹(3/5) + cos⁻¹(12/13) (UP TGT 2021 Q95 has the same numbers), dependence value of k (UP PGT 2026 Q115), direction cosines of a given vector (UP TGT 2026 Q7), inverse under a∗b = a + b + … (LT 2018 Q113), non-negative integral solutions (UP PGT 2026 Q96), ∫eˣ[f + f′] (UP PGT 2026 Q87), sinh⁻¹/cosh⁻¹/tanh⁻¹ as logarithms (UP PGT 2026 Q2 — the match now asks for values), min of a cos x + b sin x + c (UP PGT 2026 Q3), engine power and time (UP PGT 2026 Q67), Atwood machine (UP PGT 2026 Q111), coefficient of xⁿ in e^{a+bx} (UP PGT 2026 Q104).
Kept, same idea as a solved question but a different object or ask (allowed by §0.1): Q2 (UP PGT 2026 Q56 asks only the order of a different permutation), Q34 (UP TGT 2026 Q41 / UP PGT 2026 Q43, other equations), Q40 (UP PGT 2026 Q2 matches the formulas, not values), Q65 (UP PGT 2026 Q26 uses a² = e), and the past items Q69 (R = H; UP PGT 2026 Q49 is H = R/4) and Q63 (UP PGT 2026 Q15 contains "cyclic ⇒ abelian" as one of four statements).
No two questions of the mock are variants of each other (checked by the within-mock TF-IDF pass; the remaining overlaps are shared notation only).

#### Flags (also in the `flag` field)
- Q7 (UP PGT 2011, p1032 Q110): the book's key (d) "None of these" is wrong — its solution keeps θ = (4n ± 1)π/6, which includes π/2 where tan θ is undefined; the correct printed option is (b) nπ ± π/6. "None of these" replaced by the tempting (2n + 1)π/6.
- Q32 (UP PGT 2011, p835 Q175): the lines are (2x − y − 1)(x − 2y − 1) = 0, meeting at (1/3, −1/3), which is not among the printed options; the book's key (d) "None of these" is right but its solution says (1/3, 1/3). "None of these" replaced by (1/3, −1/3) and (−1/7, −1/7) by the sign-slip value (1/3, 1/3).
- Q31 (UP PGT 2011, p1031 Q107): option 67/8 replaced by 65/8 (the circumradius) as a real distractor.
- Q47 (UP PGT 2011, p276 Q1833): book prints "5" for 5I and 0 for the null matrix (fixed); "None of these" replaced by −⅕(3A² + 2A + I).
- Q38 (UP PGT 2021, p255 Q1718): null matrix written O (book: 0).
- Q49 (UP PGT 2021, p327 Q2114): "of the complex number" → "of the complex numbers".
- Q69 (UP PGT 2021, p1095 Q95): "its gained maximum height" → "the maximum height attained by it".
- Note (no flag in the file): Q8 (p850 Q261) also carries the tag NVS PGT 2022; it is in this mock's pool under PGT 2011 and its origin is given as UP PGT 2011. Q61 also carries Haryana PGT 2019.

#### Verification
- `mock.jsonl` loads as 90 JSON objects, keys in the brief's order (plus `origin`, `difficulty`), `level` PGT, `key` null, four distinct options, the answer index pointing to the intended option, even `$` counts everywhere, no `$$`, `\displaystyle` or `align` in stems/options, no "None of"/"All of" options.
- **88 of 90 answers checked a second way by script** (`verify.py`): sympy limits, derivatives (Leibnitz up to n = 8), antiderivatives differentiated back, definite integrals evaluated numerically, determinants, ranks, eigenvalues, linear solves, curls, line integrals, matrices built to satisfy the given conditions (idempotent, nilpotent, companion matrix of 3x³ + 2x² + 5x + 1); brute force for derangements, sets, permutations, subgroups of Z₁₅, Gaussian integers; numeric scans for the max/min, the trigonometric equation (all roots in [0, 2π) found by bisection and compared with each option's family) and the mechanics items. For each of them the script evaluates **all four options** and confirms that exactly the key is right. In three of them part of the truth table is set by a theorem rather than computed: Q48 (statements c, d), Q65 (the key "abelian"; the three distractors are refuted by Klein, ℤ and ℤ₃), Q67 (non-commutativity).
- The other 2 (Q49 dim_ℝ ℂ = 2, Q63 statements on cyclic groups) are standard facts, checked by reading.

### Independent check

#### Expected PGT mock 2: check of 22 November 2026

Mock checked: `mocks/pgt-2/mock.jsonl` (copied here as `mock.orig.jsonl`). Output: `mock.checked.jsonl` (90 questions, same format). Scripts in this folder: `apply_fixes.py` (every change, from the original file), `verify_ck.py` (second-way check of all 90 keys), `fmtp.py` (format, counts, key balance), `texck.py` and `matck.py` (KaTeX: `$` pairing, braces, `\left/\right`, matrix rows), `sim.py` (word TF-IDF) and `sim2.py` (character 4-gram TF-IDF) against every file in `data\mq\` and within the mock, `g.py` (keyword search of `all.txt`, a dump of all those files), `stack.py`, `clipq.py`, `booksearch.py` (book pages and text layer). Book clips are in `img/`.

##### 1. Answers
I solved all 90 questions before looking at the key: **my answers agree with the writer's key in all 90** (`mine.py`). No wrong answer found.

##### 2. Past questions against the book (page images, crop box reset to the media box)
All 35 past questions of the original were read on the page (`img/s1.png` … `img/s8.png`, `img/p125_760z.png`, `img/p254_1716z.png`, `img/p1095TL.png`). Stems and option sets match the book (options re-ordered for the key balance) for: Q1 (p75 Q444), Q4 (p733 Q1286), Q5 (p434 Q34), Q8 (p850 Q261), Q13 (p100 Q593), Q18 (p856 Q300), Q21 (p575 Q499), Q22 (p631 Q794), Q23 (p29 Q156), Q25 (p856 Q299), Q26 (p734 Q1287), Q28 (p156 Q963), Q29 (p1095 Q94), Q36 (p125 Q760), Q38 (p255 Q1718), Q39 (p1095 Q93), Q43 (p945 Q1016), Q47 (p276 Q1833), Q49 (p327 Q2114), Q52 (p575 Q500), Q58 (p367 Q28), Q61 (p639 Q833), Q62 (p254 Q1715), Q63 (p222 Q1464), Q69 (p1095 Q95), Q71 (p499 Q70), Q72 (p222 Q1468), Q73 (p326 Q2107), Q76 (p1093 Q87), Q81 (p654 Q903), Q84 (p500 Q75), Q88 (p326 Q2106).

The writer's edits, each checked against the page and judged a fair, faithful repair:
- **Q7** (p1032 Q110, PGT 2011): book key (d) "None of these" is wrong. tan θ tan 2θ = 1 ⇔ tan²θ = 1/3, so θ = nπ ± π/6, the book's own option (b). "None of these" replaced by (2n + 1)π/6, which contains θ = π/2 where tan θ is undefined (confirmed by a root scan of [0, 2π): exactly π/6, 5π/6, 7π/6, 11π/6). Fair, but it is a deliberate trap: see §6.
- **Q32** (p835 Q175, PGT 2011): the lines are (2x − y − 1)(x − 2y − 1) = 0 (checked by expansion), meeting at (1/3, −1/3), not printed; the book's key (d) "None of these" is right, its solution's (1/3, 1/3) is wrong. Repair (true point printed, (−1/7, −1/7) → sign-slip (1/3, 1/3)) is fair.
- **Q31** (p1031 Q107): 67/8 → 65/8 (the circumradius), a real distractor. Fair.
- **Q38, Q49, Q69**: null matrix written O; "complex number" → "complex numbers"; "its gained maximum height" → "the maximum height attained by it". Wording only.
- **Q47** (p276 Q1833): 5 → 5I, 0 → O, "None of these" → −⅕(3A² + 2A + I). Fair, but the question is now replaced (§3).

Replacements from the pool (read on the page, options re-ordered, key letter kept): **Q18 ← p870 Q379** (PGT 2011, focus of y² − 4y − 8x + 4 = 0), **Q43 ← p945 Q1017** (UP PGT 2021, director sphere), **Q47 ← p254 Q1716** (UP PGT 2021, inverse of the rotation matrix f(x)). Each searched in all 14 files of `data/mq` (keywords + both TF-IDF passes): no copy.

##### 3. Changes (number, what was wrong, what it is now)
33 questions differ from the writer's file: **29 replaced** (26 by new questions, 3 by other past questions from the pool: Q18, Q43, Q47), Q40 rewritten with new values, and small fixes in Q61, Q64, Q90. Every replacement keeps its topic id, difficulty and key letter.

**Overlaps with expected PGT paper 1 listed by its checker (all removed):**
| Q | was | problem | now |
|---|---|---|---|
| 70 | Green's theorem, ∮x dy − y dx on x² + y² = 4 | = P1 Q2 | Gauss: ∬ r·n dS over x² + y² + z² = a² = 4πa³ (new) |
| 34 | order/degree of [1 + y′²]^{3/2} = k y″ | = P1 Q5 (and exp TGT 2 Q54) | DE of all lines through the origin, x y′ = y (new) |
| 57 | eigenvalues of adj A for 1, 2, 3 | = P1 Q8 | third eigenvalue of [[3,1,1],[1,3,1],[1,1,3]] given 2 double: 5, by the trace (new) |
| 54 | distance between 2x − 2y + z + 3 = 0, 4x − 4y + 2z + 5 = 0 | = P1 Q18 | angle between 2x + y − 2z = 5 and 3x − 6y − 2z = 7: cos⁻¹(4/21) (new) |
| 78 | 10 N on strings at 30°, 60° | = P1 Q64 (and exp TGT 3 Q54) | W on strings of 3 m and 4 m from points 5 m apart: 4W/5, 3W/5 (new) |
| 82 | image of (1, 2) in x − y + 3 = 0 | = P1 Q68 | ratio in which 3x + 4y = 7 divides (1, 2)–(−1, 3): 2 : 1 externally (new) |
| 41 | forces 3, 5 → resultant 7, angle | numbers of P1 Q81 | resultant of 5 N E, 12 N N, 10 N W = 13 N (new) |
| 37 | cos20 cos40 cos60 cos80 | skeleton of P1 Q37 | cos²48° − sin²12° = (√5 + 1)/8 (new) |
| 16 | independent events, P(A ∪ B) → P(B) | skeleton of P1 Q40 | conditional probability on a die, 2/3 (new) |
| 79 | \|adj(3A)\|, \|A\| = 5 | skeleton of P1 Q42 | k from a triangle's area by a determinant: 0 or 8 (new) |
| 77 | shortest distance of skew lines | skeleton of P1 Q54 | angle of lines with 2l + 2m − 3n = 0, 2lm = n²: cos⁻¹(8/9) (new, hard) |
| 59 | 1 + 2/1! + 3/2! + … | skeleton of P1 Q58 (and = exp TGT 4 Q35) | coefficient of x³ in eˣ/(1 − x) = 8/3 (new) |
| 47 | A⁻¹ from 3A³ + 2A² + 5A + I = O (past) | skeleton of P1 Q7 | past p254 Q1716 (UP PGT 2021): f(x)⁻¹ = f(−x) |
| 88 | matrix of T(x,y,z) = (x + y, y − z) relative to two bases (past) | skeleton of P1 Q71 | (ST − TS)(x, y) = (2x, −2y) for S(x,y) = (x + 2y, y), T(x,y) = (y, x) (new; the pool's other linear-map questions are used, too easy for a medium slot, or p327 Q2115 = P1 Q63) |
| 40 | match, item a sinh⁻¹(3/4) = log 2 | = P1 Q46 | same match with new values: sinh⁻¹(4/3) = log 3, cosh⁻¹(5/4) = log 2, tanh⁻¹(1/3) = ½log 2, coth⁻¹2 = ½log 3; key pattern a–IV, b–III, c–II, d–I kept |
| 39 | MI of a hollow sphere (past p1095 Q93) | = P1 Q49 item d | MI of a 2a × 2b lamina about the line through its centre parallel to 2a, Mb²/3 (new; the pool's only other MI item, p1094 Q90 ring, is P1 Q49 item a) |
| 53 | dim of 4 × 4 upper triangular matrices | = P1 Q26 item c | dim of {x + y + z + t = 0, x = y} in ℝ⁴ = 2 (new) |
| 48 | statements: \|x\|, x\|x\|, cont. ⇏ diff., diff. ⇒ cont. | two statements = P1 Q53 | statements on \|x − 2\| (cont., not diff.), x\|x\| (diff.), sin\|x\| (not diff.); still a multi-statement item, key "a and c only" (new) |

**Borderline items of that list (my judgement):**
- Q11 (SHM period from speeds at two distances) vs P1 Q74: same formula and the same option set {2π, π, π/2, 4π} → **replaced**: retardation 2av³ when t = ax² + bx (new).
- Q45 (tan⁻¹¼ + tan⁻¹(2/9)) vs P1 Q75 (and exp TGT 3 Q14): sum of inverse tangents again → **replaced**: cos⁻¹x + cos⁻¹y + cos⁻¹z = π ⇒ x² + y² + z² + 2xyz = 1 (new).
- Q55 (type of x² + 2xy + y² − 2x − 1 = 0) vs P1 Q62 item a (also a perfect-square quadratic part → parabola) → **replaced**: λ₁λ₂ = ab − h² = 6 after rotating 5x² + 4xy + 2y² = 6 (new). (A first replacement, the rotation angle for 7x² − 6√3xy + 13y², was dropped: exp TGT 3 Q52 asks the same.)
- Q2 (order and parity of a permutation of S₅) vs P1 Q13 (orders of permutations) → **replaced**: number of elements of order 2 in S₄ = 9 (new).
- Q18 (tangency of ax + by + c = 0 to y² = x) vs P1 Q41 (tangency of y = 2x + c to y² = 8(x + 2)) → **replaced** by the pool question p870 Q379 (focus of a parabola).
- Q61 (∫₀^π x/(a²cos²x + b²sin²x)) vs P1 Q45: **kept**. Same first step (x → π − x) but a different integrand and a second standard result (π/(2ab)); a verbatim UP PGT 2011 question, which this repeat-heavy mock is meant to carry.
- Q50 (shift of the resultant when like parallel forces are interchanged) vs P1 Q72 (where the resultant of 4 N and 6 N acts): **kept**; a different ask with a different result.

**Found by my own similarity check against every file of `data/mq` (all expected papers and solved papers):**
| Q | was | problem | now |
|---|---|---|---|
| 10 | dy/dx for x = a cos³t, y = a sin³t | = exp TGT 3 Q37 word for word | derivative of sin⁻¹x with respect to cos⁻¹x = −1 (new) |
| 33 | 2 kg at 10 m/s stopped in 5 m: force | = exp TGT 2 Q23 word for word | KE up 300% ⇒ momentum up 100% (new) |
| 76 | two spheres 6 cm and 3 cm united: CG (past p1093 Q87) | = exp TGT 2 Q30 | disc of radius a with a hole of radius a/2 touching the rim: CG at a/6 (new; pool item p1094 Q92 is the cone CG of exp TGT 3 Q5) |
| 89 | [a+b, b+c, c+a] = 2[a b c] | = exp TGT 3 Q33 | area of the triangle (1,1,1), (1,2,3), (2,3,1) = √21/2 (new) |
| 43 | sphere through O with intercepts 1, 3, 5 (past p945 Q1016) | its general form (intercepts a, b, c) is exp TGT 3 Q10 | past p945 Q1017 (UP PGT 2021): director sphere x² + y² + z² = a² + b² + c² |
| 80 | ∫₋₂² \|x² − 1\| dx | near-copy of LT 2025 Q87 (∫₋₂³ \|x² − 1\| dx) | ∫₀^{π/2} sin⁶x dx = 5π/32 (new) |
| 68 | match of definitions idempotent / involutory / nilpotent / orthogonal | each item is a whole question elsewhere (UP TGT 2026 Q54; exp TGT 2 Q85, 3 Q66, 5 Q35) | match four 2 × 2 matrices with A² = I, O, A, −I (new, still a match item, key a–II, b–I, c–III, d–IV) |

**Other corrections to kept questions:**
- Q61: condition (a, b > 0) added to the stem (needed for π²/(2ab); flagged).
- Q64: note on option (a) (a = 2) was wrong ("makes the ĵ-term vanish" — the curl term (a − 4)z² does not vanish); rewritten.
- Q90: the solution's determinant had rows separated by "\ " instead of "\\" (KaTeX would print one row); fixed.

Final similarity pass on `mock.checked.jsonl`: no question of paper 2 is the same as, a re-numbered skeleton of, or the same stock item as a question of expected PGT paper 1 (char 4-gram ≥ 0.30 hits against P1 read one by one: only Q61 ↔ P1 Q45, kept as above). Against all other files, the remaining hits above 0.45 (4-gram) / 0.75 (word) are shared format or notation only, or same idea with a different object, which the blueprint allows (§0.1). Within the mock: 4-gram similarity above 0.5 only for Q17/Q40 (match format); the word pass also pairs Q3/Q61 (both use f(a − x), different integrals), Q4/Q34 (both form a DE by eliminating constants: two constants of an exponential vs the one constant of lines through the origin), Q53/Q90 (dimension of a solution space vs of a span), Q71/Q86 (two different limits) — none is a variant of the other.

Kept and noted (same idea, different question; not repeats): Q69 (R = H, tan⁻¹4; UP PGT 2026 Q49 has H = R/4, exp TGT 3 Q30 R = 4√3H; genuine UP PGT 2021 question); Q17 (its item d, ∫cosec x, is exp TGT 5 Q67, a TGT recall item; the classic four-integral match is kept); Q7 vs P1 Q44 (both tan-equations with values to exclude); Q62 vs P1 Q69 (both determinants that vanish, different matrices); Q84 vs P1 Q43 (both triple-angle substitutions, different functions and asks); Q13 vs exp TGT 4 Q46 (ⁿPᵣ = r!ⁿCᵣ as recall there, solved for r here); Q40 vs UP PGT 2026 Q2 (that match pairs functions with formulas, this one with values); Q47 vs UP PGT 2026 Q19 and exp TGT 4 Q32 (same rotation matrix, different asks).

##### 4. Counts (final file)
| Unit | count | past | easy / medium / hard |
|---|---|---|---|
| 1 Algebra | 21 | 8 | 10 / 10 / 1 |
| 2 Calculus | 18 | 7 | 8 / 8 / 2 |
| 3 ODE | 5 | 2 | 3 / 2 / 0 |
| 4 2-D | 9 | 4 | 4 / 4 / 1 |
| 5 Vectors, 3-D | 6 | 2 | 5 / 0 / 1 |
| 6 Abstract algebra | 5 | 2 | 4 / 1 / 0 |
| 7 Linear algebra | 8 | 2 | 4 / 4 / 0 |
| 8 Vector calculus | 3 | 1 | 1 / 2 / 0 |
| 9 Mechanics | 8 | 1 | 4 / 4 / 0 |
| 10 Trig + complex | 7 | 3 | 3 / 3 / 1 |
| **Total** | **90** | **32** | **46 / 38 / 6** |

- Topic counts = blueprint §B2 exactly; every topic id in `topics.txt`. Difficulty 46/38/6 as before; hard items Q7, Q32, Q51, Q61, Q77, Q86 (unchanged positions).
- **Past questions: 32 (24 UP PGT 2021, 8 UP PGT 2011), down from 35.** Unit 7 has 2 (blueprint 3) and unit 9 has 1 (blueprint 3): Q88, Q39 and Q76 had to go and the pool has no clean replacement for those slots (linear algebra: p326 Q2108 is an easy rank–nullity item, p327 Q2113 asks the annihilator W⁰; mechanics: p1094 Q90 = P1 Q49 item a, p1094 Q92 = exp TGT 3 Q5's cone CG, p1093 Q86 omits the roughness needed for its answer, Q84/Q85/Q91 are off the base topic table).
- Match-the-list 3 (Q17, Q40, Q68), multi-statement 2 (Q48, Q83). No "None of these", no "All of these".
- Key A/B/C/D = 23/22/23/22, longest run 3 (unchanged: every replacement kept its letter). 26 all-numeric option sets, none in ascending or descending order. 6 adjacent same-unit pairs.

##### 5. Script checks
- `verify_ck.py mock.checked.jsonl`: **90/90 pass** — for each question the true answer is computed and every option evaluated; the check passes only if the keyed option is the only match. 86 by real computation (sympy limits, series, derivatives, antiderivatives differentiated back, definite integrals, determinants, ranks, null spaces, eigenvalues, curls, rotations of axes, Lami by linear solve, CG of the holed disc by a 1500 × 1500 grid, director sphere by random orthonormal triples, brute force for S₄, derangements, sets, Z₁₅, Gaussian integers, root scan for Q7). 4 rest on standard facts read by me: Q49 (dim_ℝ ℂ = 2), Q60 (dim V/W = dim V − dim W), Q63 (cyclic ⇒ abelian; isomorphic image of cyclic is cyclic), Q65 ((ab)² = a²b² ⇒ abelian).
- `fmtp.py`: 90 lines, n = 1..90, valid JSON, key order as in the brief, four distinct options, answer 0–3, even `$`, no `$$`/`\displaystyle`/`align` in stems or options, balanced braces and `\left/\right`, no TeX outside math, no ₹ in math. `texck.py`: 0 problems in 1319 math segments. `matck.py`: every matrix has consistent rows.

##### 6. Doubtful / for the editor
- **Q7**: correct key nπ ± π/6; the distractor (2n + 1)π/6 is what the usual "tan 2θ = cot θ" working gives before the values with tan θ undefined are removed. It is wrong (it contains θ = π/2) and the solution says why, but students may argue it; keep as a hard item or swap that distractor for nπ ± π/3 if a less contentious item is preferred.
- **Q43** (director sphere, UP PGT 2021) belongs to central conicoids; it is filed under tp-13-03 (The Sphere), the nearest topic.
- Past count 32 instead of the blueprint's 35 (see §4).

---

## Expected PGT paper 3 · harder level

- In the app: `data/mq/exp-pgt-2026-3.json`, 90 questions (30 asked before), one clock of 100 minutes, −1/3 mark for a wrong answer.

### Writing

### PGT mock 3 (UP PGT Mathematics, expected paper, December 2026)

**Emphasis: the harder mock** (blueprint §B6, mock P3). Book sources: UPPSC GIC Lecturer 2015 and UP PGT 2013 only (pool `pools/pgt-mock3.tsv`; nothing from `pools/excluded.tsv`). Topic table = §B2 with the three P3 swaps: tp-06-03 → tp-06-06 (2 items: Taylor and L'Hospital), tp-11-08 → tp-11-07 (2 hyperbola items, one with tangents from an external point including the vertical tangent), tp-10-10 → tp-10-04 (2 items, both on $n$th roots of unity). 90 questions: 30 past (book), 60 new. Level "PGT" on every line; `key` is null throughout.

Files: `mock.jsonl` (90 lines), `qs_past.py` / `qs_new.py` (bank, correct option first), `verify.py` (second-way check of every answer), `build.py` (counts asserted against `counts-pgt.json`, order, key balance, option placement), `texcheck.py` (KaTeX/JSON sanity), `simcheck.py` (TF-IDF check against the solved papers and the sibling expected papers), `order.json` (mock number → bank id), `crop.py` / `stack.py` / `render.py` / `rawtxt.py` (book page images in `img/`, crop box set to the media box), `dumpsolved.py` → `solved.txt`.

#### Counts per unit and difficulty

| Unit | Questions | Past | New | Recall | One-step | Medium | Hard |
|---|---|---|---|---|---|---|---|
| 1 Algebra | 21 | 7 | 14 | 1 | 5 | 13 | 2 |
| 2 Calculus | 18 | 6 | 12 | 1 | 3 | 9 | 5 |
| 3 Ordinary Differential Equations | 5 | 2 | 3 | 1 | 1 | 3 | 0 |
| 4 Coordinate Geometry (2-D) | 9 | 3 | 6 | 0 | 2 | 4 | 3 |
| 5 Vectors and 3-D Geometry | 6 | 2 | 4 | 0 | 2 | 3 | 1 |
| 6 Abstract Algebra | 5 | 2 | 3 | 0 | 1 | 3 | 1 |
| 7 Linear Algebra | 8 | 3 | 5 | 2 | 5 | 1 | 0 |
| 8 Vector Calculus | 3 | 1 | 2 | 1 | 1 | 1 | 0 |
| 9 Mechanics | 8 | 2 | 6 | 2 | 2 | 3 | 1 |
| 10 Trigonometry (+ complex numbers) | 7 | 2 | 5 | 0 | 2 | 4 | 1 |
| **Total** | **90** | **30** | **60** | **8** | **24** | **44** | **14** |

- Unit counts = §B1; past per unit = §B6 (P3 column: 7/6/2/3/2/2/3/1/2/2); topic counts = §B2 with the P3 swaps (asserted in `build.py`); every topic id is in `topics.txt`.
- Difficulty = the P3 target 8 / 24 / 44 / 14 exactly (`difficulty` field: easy 32, medium 44, hard 14).
- Hard items: Q7, Q15, Q25, Q31, Q46, Q52, Q57, Q68, Q71, Q77, Q80, Q83, Q86, Q90 (3 in Q1–30, 4 in Q31–60, 7 in Q61–90; never two hard items in a row).

#### Format
- Match-the-list, 4: Q6 (tp-08-04), Q16 (tp-15-05), Q28 (tp-07-06), Q85 (tp-14-02).
- Multi-statement, 3: Q11 (tp-02-05), Q39 (tp-04-07), Q44 (tp-03-03) (the last is the book's two-statement item, kept as printed). No assertion–reason item (optional, "at most 2").
- Special-format items are at least 5 apart. No "None of these" and no "All of these" anywhere (the book's three "None of these/the above" options were replaced by real distractors). Numeric option sets: none in ascending or descending order.
- Answer key: A 22, B 23, C 22, D 23; no letter more than 3 times in a row.
- Order: units fully interleaved (10 adjacent same-unit pairs, no three in a row, no two adjacent questions on the same topic); past questions 10 / 10 / 10 in the three thirds.

#### Past questions (30): mock number → source tag → book page and number

All read from the page images (crop box set to the media box) and solved afresh; the options of every past question were re-ordered to fit the key balance (as the board does), stems and option texts kept.

| Mock Q | Source | Book | Topic | Level |
|---|---|---|---|---|
| Q1 | UPPSC GIC 2015 | book p. 333 Q2148 | tp-03-02 | M |
| Q4 | UPPSC GIC 2015 | book p. 745 Q1330 | tp-08-02 | M |
| Q14 | UPPSC GIC 2015 | book p. 567 Q442 | tp-06-06 | M |
| Q15 | UPPSC GIC 2015 | book p. 933 Q941 | tp-13-02 | H |
| Q18 | UPPSC GIC 2015 | book p. 904 Q585 | tp-11-06 | M |
| Q23 | UPPSC GIC 2015 | book p. 415 Q301 | tp-14-03 | E |
| Q26 | UP PGT 2013 | book p. 762 Q1405 | tp-08-03 | M |
| Q29 | UP PGT 2013 | book p. 443 Q95 | tp-10-04 | M |
| Q30 | UPPSC GIC 2015 | book p. 890 Q487 | tp-11-05 | M |
| Q32 | UP PGT 2013 | book p. 277 Q1840 | tp-02-02 | M |
| Q35 | UP PGT 2013 | book p. 136 Q821 | tp-06-06 | M |
| Q42 | UPPSC GIC 2015 | book p. 35 Q197 | tp-01-08 | M |
| Q44 | UPPSC GIC 2015 | book p. 333 Q2146 | tp-03-03 | E |
| Q46 | UPPSC GIC 2015 | book p. 687 Q1061 | tp-07-03 | H |
| Q48 | UPPSC GIC 2015 | book p. 1068 Q309 | tp-09-04 | M |
| Q52 | UP PGT 2013 | book p. 90 Q524 | tp-01-06 | H |
| Q53 | UPPSC GIC 2015 | book p. 332 Q2142 | tp-01-02 | M |
| Q54 | UPPSC GIC 2015 | book p. 685 Q1053 | tp-07-05 | M |
| Q56 | UP PGT 2013 | book p. 46 Q265 | tp-01-08 | M |
| Q68 | UPPSC GIC 2015 | book p. 685 Q1050 | tp-11-07 | H |
| Q69 | UPPSC GIC 2015 | book p. 332 Q2140 | tp-03-03 | E |
| Q73 | UPPSC GIC 2015 | book p. 1143 Q365 | tp-15-09 | M |
| Q74 | UPPSC GIC 2015 | book p. 1143 Q362 | tp-15-08 | E |
| Q77 | UP PGT 2013 | book p. 233 Q1561 | tp-04-02 | H |
| Q79 | UPPSC GIC 2015 | book p. 240 Q1625 | tp-04-10 | M |
| Q80 | UP PGT 2013 | book p. 519 Q186 | tp-05-06 | H |
| Q82 | UP PGT 2013 | book p. 949 Q1037 | tp-13-03 | M |
| Q86 | UPPSC GIC 2015 | book p. 510 Q128 | tp-06-01 | H |
| Q88 | UP PGT 2013 | book p. 277 Q1841 | tp-02-03 | M |
| Q90 | UPPSC GIC 2015 | book p. 314 Q2044 | tp-02-01 | H |

Pool items considered and **not** used because of a solved paper or a sibling expected paper: p938 Q973 (image of a point in a plane — same skeleton as LT 2018 Q83; replaced by p933 Q941), p236 Q1588 ($2^{50}$ mod 7 — same skeleton as expected paper 1 Q80), p427 Q362 ($r^n\vec r$ solenoidal — same as expected paper 1 Q14), p686 Q1057 and p779 Q1485 (in expected papers 1 and 2), p333 Q2147 / Q2149 and p331 Q2133 (skeletons of UP PGT 2026 Q115, Q73, Q1), p233 Q1559 (UP PGT 2026 Q77), p316 Q2055 (determinant-equation roots, like expected paper 2 Q51), p239 Q1611 (ring statements, like expected paper 1 Q85), p277 Q1835 (two equal options: with $a+b+c=0$ the options "Zero" and "$a+b+c$" coincide), p903 Q582 (no correct option: the circles have 0 common tangents), p240 Q1626, p755 Q1371/Q1373, p1142 Q359, p939 Q977 (signs lost in the print make the options ambiguous).

#### New questions (60)
Written in the 2026 style, P3 level; checked by TF-IDF (`simcheck.py`) and by reading against the seven solved papers, expected paper 1 (`data/mq/exp-pgt-2026-1.json`) and expected paper 2 (`mocks/pgt-2/mock.jsonl`). Six first drafts were replaced because they repeated an item: $AB-BA$ for symmetric $A,B$ (GIC 2026 Q91), DE of parabolas with axis ∥ $y$-axis (GIC 2026 Q78), $\frac{dy}{dx}$ of $x^{x^{x\cdots}}$ (LT 2018 Q55), inverse under $a*b$ (LT 2018 Q113), elements of order $d$ in $\mathbb{Z}_n$ (DSSSB 2021 Q83), $\int_0^\infty$ of a rational function (close to LT 2018 Q61). Same idea but a different ask is kept in a few places (e.g. Q57 tangents from $(2,3)$ to $x^2-4y^2=4$: points of contact via the chord of contact, where UP PGT 2026 Q109 asked for a tangent line).

#### Verification
- `verify.py`: a second-way check of **all 90** answers (sympy, exact arithmetic, numerical integration, brute force over $S_4$, $S_5$, $A_4$, $\mathbb{Z}_6$, the 1260 arrangements of ARRANGE, etc.); 90/90 pass. For most items the check also shows the distractors are wrong. Five are simple arithmetic confirmations (Q30 normal $x+y=9$, Q74 ratio of heights, Q76 power, Q20 moments, Q62 section ratio).
- `texcheck.py`: JSON shape, 1–90 in order, balanced `$`/braces/`\left…\right`, no `$$` in stems/options, no `\displaystyle`/`align`.

#### Flags
- Q1 (P24, UPPSC GIC 2015): The minus signs in the four options were lost in the book's print; restored from the glyph positions (the four options are sign variants).
- Q4 (P14, UPPSC GIC 2015): Book tag 'UKPSC Lecturer (Mains) 2020, UPPSC GIC 2015'.
- Q14 (P09, UPPSC GIC 2015): The primes and '=' signs lost in the book's print are restored from its own working.
- Q15 (P19, UPPSC GIC 2015): Book tag 'UP PCS (Pre) 1996, GIC 2015'. The signs lost in the print of the equation are restored from the book's own working.
- Q18 (P18, UPPSC GIC 2015): The sign in option $(1,-1)$ was lost in the book's print (it may read $(1,1)$); either point is wrong.
- Q23 (P26, UPPSC GIC 2015): Misprint fixed: the book prints '$\vec F=\hat n\,ds$' for $\vec F\cdot\hat n\,dS$; the '+' and '$\pi$' signs lost in the print are restored.
- Q26 (P15, UP PGT 2013): '$p=\frac{dy}{dx}$' added for clarity.
- Q29 (P29, UP PGT 2013): Wording tidied ('be the nth root' → 'are the $n$th roots of unity').
- Q32 (P05, UP PGT 2013): Book tag 'PGT 2013, 2005'.
- Q35 (P10, UP PGT 2013): Wording tidied (book: 'third term in expansion of power of (x−2) in x⁴−3x³').
- Q52 (P03, UP PGT 2013): Option (d) 'None of these' of the book replaced by a real distractor.
- Q68 (P16, UPPSC GIC 2015): The book's key (c) $2a^2$ is wrong; the area is $a^2$ (e.g. the tangent $x=a$ gives the triangle $O,(a,a),(a,-a)$).
- Q73 (P27, UPPSC GIC 2015): The book prints '($g$ = 9.8 metre/sec²)' twice; once kept.
- Q77 (P21, UP PGT 2013): Option (d) 'None of these' of the book replaced by a real distractor.
- Q79 (P22, UPPSC GIC 2015): The book's key (d) 'Do not exist' is wrong: $1^2+5=6\equiv0$ and $5^2+5=30\equiv0$ in $\mathbb{Z}_6$. The '+' sign lost in the print is read from the book's own working.
- Q80 (P13, UP PGT 2013): Wording tidied (book ends 'Find the value of this equation').
- Q82 (P20, UP PGT 2013): Misprint fixed: 'It a tangent plane' → 'If a tangent plane'.
- Q86 (P08, UPPSC GIC 2015): Symbols lost in the book's print ($\theta$, $-$, $+$) restored from its own working. Option (d) 'None of the above' replaced by a real distractor.
- Q88 (P07, UP PGT 2013): Misprint fixed: the book says 'complex root of unity'; a cube root is meant.
- Q90 (P06, UPPSC GIC 2015): The book's key (a) 0 is wrong: $\begin{bmatrix}0&-1\\1&0\end{bmatrix}^2=-I$, and a whole family exists.
- Book keys found wrong (answer set to the correct option, flagged): p314 Q2044 (book 0, correct: infinitely many), p685 Q1050 (book $2a^2$, correct $a^2$), p240 Q1625 (book "do not exist", correct 1, 5).
- Print damage: this book's Symbol-font glyphs (minus, plus, π, θ, primes) do not render and are absent from the text layer. Where a past question needed them, they were restored from the book's own worked line or from glyph positions, and the item is flagged (Q1, Q14, Q15, Q18, Q23, Q79, Q86). Items whose options could not be restored unambiguously were not used.

### Independent check

#### Expected PGT mock 3: check of 22 November 2026

Mock checked: `mocks/pgt-3/mock.jsonl` (the harder mock, blueprint §B6 P3), copied to `mock.orig.jsonl`. Output: `mock.checked.jsonl` (90 questions, same format). All work in `mockck/pgt-3/`.

Scripts: `dumpq.py` (dump), `mine.py` (my answers against the writer's), `ck.py` (sympy / brute-force checks of the first draft, 62 checks), `ck2.py` (checks of every replaced question, 23 checks), `apply_fixes.py` (all edits, reproducible), `counts.py` / `unitcount.py` / `texck.py` (counts, key balance, JSON shape, KaTeX sanity), `sim.py` (TF-IDF against all of `data/mq/*.json`), `bytopic.py` (every corpus question of each topic beside mock 3's, read by hand), `grepc.py` (phrase search), `clipq.py` / `zoomreg.py` / `words.py` (book crops with the crop box set to the media box; glyph positions). Book page images in `img/`.

No-repeat corpus: the seven solved papers, expected TGT papers 1–5, expected PGT paper 1 and — after the coordinator's update — the **final** expected PGT paper 2 (`data/mq/exp-pgt-2026-2.json`, not the draft `mocks/pgt-2/mock.jsonl`).

##### Counts (final file)

| Unit | Q | Past | New | Easy | Medium | Hard |
|---|---|---|---|---|---|---|
| 1 Algebra | 21 | 7 | 14 | 6 | 13 | 2 |
| 2 Calculus | 18 | 6 | 12 | 4 | 9 | 5 |
| 3 ODE | 5 | 2 | 3 | 2 | 3 | 0 |
| 4 2-D | 9 | 3 | 6 | 2 | 4 | 3 |
| 5 Vectors, 3-D | 6 | 3 | 3 | 2 | 3 | 1 |
| 6 Abstract algebra | 5 | 2 | 3 | 1 | 3 | 1 |
| 7 Linear algebra | 8 | 2 | 6 | 7 | 1 | 0 |
| 8 Vector calculus | 3 | 1 | 2 | 2 | 1 | 0 |
| 9 Mechanics | 8 | 2 | 6 | 4 | 3 | 1 |
| 10 Trigonometry | 7 | 2 | 5 | 2 | 4 | 1 |
| **Total** | **90** | **30** | **60** | **32** | **44** | **14** |

- Topic counts = §B2 with the three P3 swaps (asserted by `counts.py`); every id is in `topics.txt`. Difficulty 32/44/14 as briefed. Hard items unchanged: Q7, 15, 25, 31, 46, 52, 57, 68, 71, 77, 80, 83, 86, 90.
- Past questions 30 (UPPSC GIC 2015: 19, UP PGT 2013: 11), as in §B6; per unit the P3 column is met except unit 5 (3 instead of 2) and unit 7 (2 instead of 3): the unit-7 past question Q69 had to go and no clean linear-algebra pool question was left, so Q70 (unit 5) took a pool question instead.
- Match-the-list 4 (Q6, 16, 28, 85), multi-statement 3 (Q11, 39, 44), no "None of these"/"All of these" in any option. Key A 22, B 23, C 22, D 23, longest run 3 (letters unchanged by every replacement). No all-numeric option set in ascending or descending order.
- Format: 90 lines of valid JSON, n = 1…90, four distinct options, answer 0–3, even `$`, balanced braces and `\left…\right`, no `$$` in stems/options, no `align`/`\displaystyle`, no rupee sign, no `\,'` (`texck.py`: 1439 math segments, 0 problems).

##### Correctness
- I solved all 90 first-draft questions before reading the answers: all 90 agreed with the writer's keys (Q88 settled by computing the determinant, 0). Second-way checks by script: 62 on the first draft (`ck.py`: sympy limits/integrals/series, brute force over ARRANGE, $S_5$, $\mathbb{Z}_6$, binary operations, factorisation of the pair of planes, numeric roots, etc.) and 23 on the replacements (`ck2.py`, including uniqueness of the correct match-list option for Q16 and Q85, a root scan for Q19, random rank tests for Q43). All pass.
- No wrong key in the writer's file. The three book keys the writer judged wrong are indeed wrong: Q90 (book 0; infinitely many, e.g. $\begin{bmatrix}a&-(1+a^2)\\1&-a\end{bmatrix}$), Q68 (book $2a^2$; area $ab=a^2$), Q79 (book "do not exist"; for $x^2+5=0$ in $\mathbb{Z}_6$ the roots are 1, 5).

##### Past questions verified against the book (page images, crop box = media box)
All 30 past questions of the final file were read on the page and their options compared (re-ordering allowed): Q1 p333 Q2148, Q4 p745 Q1330, Q14 p567 Q442, Q15 p933 Q941, Q18 p904 Q585, Q23 p428 Q368 (new choice), Q26 p762 Q1405, Q29 p443 Q95, Q30 p890 Q487, Q32 p277 Q1840, Q35 p136 Q821, Q42 p61 Q354 (new choice), Q44 p333 Q2146, Q46 p687 Q1061, Q48 p1068 Q309, Q53 p332 Q2142, Q54 p685 Q1053, Q56 p46 Q265, Q58 p277 Q1838 (new choice), Q68 p685 Q1050, Q70 p939 Q978 (new choice), Q73 p1143 Q365, Q74 p1143 Q362, Q77 p233 Q1561, Q79 p240 Q1625, Q80 p519 Q186 (the exponent $\frac1n$ is printed; its "1" sits in the hidden band), Q82 p949 Q1037, Q86 p510 Q128, Q88 p277 Q1841, Q90 p314 Q2044. Stems and option sets match; the writer's tidy-ups (articles, "be the nth root" → "are the nth roots of unity", "It" → "If", $p=\frac{dy}{dx}$) are harmless. Book keys of the four new choices are right (Q354 $k$, Q1838 skew-Hermitian, Q368 0, Q978 $90^\circ$).

Restored signs (special care):
- **Q1**: certain. From the glyph positions: in (a) the first fraction starts 7 pt earlier than in (c) (no leading minus), the bar of the second fraction in (a), (b), (d) is centred on a 3-glyph numerator "−15", the third in (d) on "−17"; (b) and (d) share the first-glyph offset of (c). Only this reading keeps (a) and (b) distinct. Book options: (a) $\frac78,-\frac{15}8,\frac{17}4$, (b) $-\frac78,-\frac{15}8,\frac{17}4$ (correct), (c) $-\frac78,\frac{15}8,\frac{17}4$, (d) $-\frac78,-\frac{15}8,-\frac{17}4$ — exactly the writer's set. Flag made explicit.
- **Q14**: certain: primes, '=' and arrow missing in the stem, but the book's working prints $f(2h+2+h^2)-f(2)$ over $f(h-h^2+1)-f(1)$; the restored question has the single answer 3.
- **Q15**: certain: the working prints $2x^2-6y^2-12z^2+18yz+2zx+xy=0$; it factorises as $(x+2y-2z)(2x-3y+6z)$, $\cos\theta=\frac{16}{21}$.
- **Q18**: sound: the stem is $4x^2+5y^2=20$ (book's answer box prints it); option (c) is $(1,-1)$ or $(1,1)$, wrong either way.
- **Q23 (first draft)**: sound in its own right, but replaced for a repeat (below). Its replacement p428 Q368 has '+', '=' and π missing; the working prints the integrand, and the answer 0 holds for any signs between the terms.
- **Q79**: sound in its own right: the working reads $x^2+5=0$. Note: with $x^2-5=0$ the book's key "do not exist" would be right; the stem follows the working and the flag now says so.
- **Q86**: sound: the working prints $x=\sec\theta-\cos\theta$, $y=\sec^n\theta-\cos^n\theta$; then $(x^2+4)y'^2=n^2(y^2+4)$ is forced.
- Also Q46: the stem's signs are missing in the print too (not flagged by the writer); restored from the working, flag added.

##### Changes (number: what was wrong → what it is now; topic, difficulty and key letter kept)
Repeats of the no-repeat corpus (replaced):
- Q2 (tp-03-01): subspace test with $x+2y-z=0$ vs $x+y+z=1$ = statements c, d of expected PGT 1 Q36 → which subset of $M_2(\mathbb{R})$ is a subspace (symmetric matrices). New.
- Q8 (tp-02-03): max of $\begin{vmatrix}1&1&1\\1&1+\sin\theta&1\\1&1&1+\cos\theta\end{vmatrix}$ = determinant of expected TGT 5 Q30 → determinant of logarithms $\log_xy$ … (proportional rows, 0). New.
- Q9 (tp-15-07): rectangular lamina $2a\times2b$, perpendicular axis = lamina of expected PGT 2 Q39 → MI of a solid cone about its axis, $\frac3{10}Ma^2$. New.
- Q16 (tp-15-05, match): four stock CG positions, each a question in UP TGT 2021 Q9, Q64, expected TGT 1 Q51, 3 Q5 → match of hollow cone, solid paraboloid, sector, quadrant. New.
- Q17 (tp-04-08): which $a^k$ generates a cyclic group of order 24 = LT 2018 Q109 / GIC 2026 Q63 with new numbers → number of subgroups of order 12 in a cyclic group of order 60 (one). New.
- Q19 (tp-09-03): $\sin x+\cos x=1$ = skeleton of expected TGT 3 Q46 → general solution of $\sin x+\sin2x+\sin3x=0$. New.
- Q20 (tp-15-03): beam on two supports with a load = skeleton of expected TGT 5 Q79 → unlike parallel forces 10 N, 6 N, $AB=20$ cm, $AC=30$ cm. New.
- Q22 (tp-12-02): $|\vec a|,|\vec b|,|\vec a+\vec b|\Rightarrow|\vec a-\vec b|$ = skeleton of expected TGT 3 Q24 → $\vec a\times\vec b=\vec a\times\vec c\Rightarrow\vec b-\vec c\parallel\vec a$. New.
- Q23 (tp-14-03, past): flux of $ax\hat i+by\hat j+cz\hat k$ through the unit sphere = skeleton of expected PGT 2 Q70 → book p428 Q368 (GIC 2015), flux of $xy\hat i+y^2\hat j+yz\hat k$ through a sphere, 0.
- Q42 (tp-01-08, past): $x^2-2x+4=0$ is the equation of UP TGT 2021 Q16 (blueprint §0.1: skip pool questions whose key numbers are in a solved paper) → book p61 Q354 (PGT 2013), product $(\alpha+\beta+\gamma)\cdots=k$ for $x^4+px^2+qx+k=0$.
- Q43 (tp-02-04): $k$ for a non-trivial solution of a homogeneous 3×3 system = skeleton of expected TGT 4 Q19 → possible ranks of $AB$ for rank-2 $3\times3$ matrices (Sylvester: 1 and 2). New.
- Q52 (tp-01-06, past p90 Q524) = UP TGT 2021 Q80 with the letters cycled → $1^2+2\cdot2^2+3^2+\cdots$ for odd $n$, $\frac{n^2(n+1)}2$. New (no hard pool question in this topic).
- Q58 (tp-02-01): $|A|$ of odd-order skew-symmetric = expected TGT 2 Q44 → book p277 Q1838 (PGT 2013), the matrix is skew-Hermitian.
- Q59 (tp-15-02): weight on a string with ends a given distance apart = skeleton of expected PGT 2 Q78 → smooth sphere against a wall held by a string, $T=\frac{W(l+r)}{\sqrt{l^2+2lr}}$. New.
- Q60 (tp-08-01): DE of $y=Ae^{2x}+Be^{-3x}$ = expected TGT 3 Q45 (and my first replacement, lines through the origin, is expected PGT 2 Q34) → DE of $y=\sin(x+c)$. New.
- Q64 (tp-04-04): elements of order 2 in $S_4$ = expected PGT 2 Q2 (word for word) → $\sigma^3$ for $\sigma=(1\,2\,3\,4\,5\,6)$. New.
- Q69 (tp-03-03, past p332 Q2140): $T^2-T+I=0\Rightarrow T^{-1}$ = expected TGT 3 Q21 in matrix form → which operator on $\mathbb{R}^2$ is not invertible. New (other linear-map pool items repeat UP PGT 2026 or expected PGT 1).
- Q70 (tp-13-01): direction cosines with $l+m+n=0$, $l^2+m^2-n^2=0$ = skeleton of expected PGT 2 Q77 → book p939 Q978 (GIC 2015), angle between $x=1,y=2$ and $y=-1,z=0$ ($90^\circ$).
- Q71 (tp-15-01): "$Q$ doubled ⇒ $R$ doubled, $Q$ reversed ⇒ $R$ doubled" = expected TGT 3 Q44 → forces 1…6 N towards the vertices of a regular hexagon, resultant 6 N. New.
- Q81 (tp-07-01): $\int\frac{dx}{x^2+4x+13}$ = expected TGT 3 Q70 → $\int\frac{dx}{\sqrt{x^2+2x+5}}$. New.
- Q85 (tp-14-02, match): $\nabla\cdot\vec r=3$, $\nabla\times\vec r=\vec0$ = stock pairs of LT 2025 Q84 → match $\nabla\times(\vec a\times\vec r)$, $\nabla r^2$, $\nabla^2r^2$, $\nabla\times\frac{\vec r}{r^3}$. New.

Note and flag fixes in kept questions: Q4 note (a) (4 is a sign slip in the last step, not in $2(a+1)=-6$); Q47 note (d) ($ab$ comes from area $2xy$, not from "the quarter"); Q59 old note (c) was wrong (that option was $T\sin\theta$) — moot after replacement; Q61 note (c) (21 comes from $r+(r+1)=43$); Q1, Q46, Q79 flags made explicit.

##### Checked and kept (similar idea, different ask or function; listed for the coordinator)
- Q57 tangents from (2,3) to $x^2-4y^2=4$, points of contact: same configuration as UP PGT 2026 Q109 (vertical tangent) with new numbers and a different ask; it is the item the blueprint asks for in P3.
- Q83 $\left(\frac{\sin x}x\right)^{1/x^2}$ vs expected TGT 3 Q63 $(\cos x)^{1/x^2}$ (different function and expansion).
- Q44 (past, two statements on linearity) vs expected PGT 1 Q63 (pick the linear map; both use a "+1" shift).
- Q67 ($T:\mathbb{R}^3\to\mathbb{R}^2$ never one-one) vs expected PGT 2 Q24 (nullity of an onto map $\mathbb{R}^4\to\mathbb{R}^3$).
- Q13 (dim of $\{p\in P_3:p(1)=p'(1)=0\}$) vs expected PGT 2 Q53 (dim of a subspace of $\mathbb{R}^4$ cut by two equations).
- Q50 $|\operatorname{adj}(\operatorname{adj}A)|$ vs the $|\operatorname{adj}(kA)|$ items of expected PGT 1 Q42 and LT 2018 Q91.
- Q65 (circle ∩ ellipse, number of points) vs UP PGT 2026 Q41 (hyperbola ∩ line); Q28 (sphere among four volumes) vs expected PGT 2 Q30 (ellipsoid); Q78 vs expected PGT 2 Q16 (both conditional probability, different settings); Q23's replacement vs expected PGT 2 Q70 (same theorem and surface, but a non-linear field and a symmetry argument).
- Q38 (locus of mid-points of chords subtending $90^\circ$ at the centre) is labelled new but is book p905 Q588 (GIC 2015) with $a$ for 2; not in any app paper.

##### Doubtful / for the coordinator
- Q79's stem depends on a lost sign (+ read from the book's working; with − the book's key would be right). As printed in the mock it is sound.
- Q70 (book Q978) is labelled medium; it is at the easy end of medium.
- Q16's bodies (paraboloid, sector, quadrant, hollow cone) are less familiar than the usual table; labelled easy (recall) to keep the counts.

---

## Expected PGT paper 4 · syllabus gaps

- In the app: `data/mq/exp-pgt-2026-4.json`, 90 questions (20 asked before), one clock of 100 minutes, −1/3 mark for a wrong answer.

### Writing

### Mock P4 — UP PGT Mathematics, expected paper (December 2026)

**Level** PGT. **Emphasis** (blueprint §B6, mock P4): *syllabus gaps*. Topic counts = §B2 with the P4 swaps of §B6 (tp-02-01 3→2 + tp-16-03; tp-06-01 2→1, tp-06-06 1→2, tp-07-02 3→2 + tp-05-05; tp-08-01 2→1, tp-08-03 1→2; tp-13-03→tp-13-04; tp-04-02→tp-04-09; tp-15-08→tp-15-14, tp-15-03→tp-15-06, tp-15-10→tp-15-12; tp-10-10→tp-09-06). 25 past questions, only from UP PGT 2010, UP PGT 2009 and UPPSC GIC 2021 (pool `pools/pgt-mock4.tsv`); 65 new. Recall / one-step / medium / hard = 14 / 32 / 38 / 6; 4 match-the-list + 3 multi-statement items.

Files: `items.py` (all 90 items, correct option first, notes aligned), `build.py` (orders the paper, balances the key, places the options; seed 20261204), `verify.py` (second-way checks + structure), `simcheck.py` (TF-IDF check against `solved.txt`, which `dump_solved.py` builds from every file in `data\mq\` — solved papers, expected TGT 1–5, expected PGT 1–3 — plus `mocks\pgt-5\mock.jsonl`), `render.py`/`crop.py` (book pages at full media box; images in `img/`).

#### Counts per unit and kind

| Unit | Questions (mock numbers) | total | past | R | E | M | H |
|---|---|---|---|---|---|---|---|
| 1 Algebra | 1, 13, 17, 19, 21, 24, 27, 28, 30, 32, 39, 46, 49, 53, 60, 62, 67, 71, 76, 84, 89 | 21 | 6 | 4 | 5 | 12 | 0 |
| 2 Calculus | 2, 6, 7, 16, 18, 22, 26, 33, 41, 43, 45, 57, 69, 70, 75, 79, 82, 88 | 18 | 5 | 1 | 8 | 7 | 2 |
| 3 ODE | 14, 25, 29, 42, 64 | 5 | 1 | 1 | 0 | 3 | 1 |
| 4 2-D geometry | 4, 12, 38, 48, 58, 68, 73, 81, 86 | 9 | 3 | 1 | 4 | 3 | 1 |
| 5 Vectors and 3-D | 9, 44, 47, 51, 59, 83 | 6 | 2 | 0 | 3 | 2 | 1 |
| 6 Abstract Algebra | 5, 34, 54, 56, 85 | 5 | 1 | 2 | 3 | 0 | 0 |
| 7 Linear Algebra | 15, 37, 55, 61, 72, 78, 80, 87 | 8 | 2 | 2 | 3 | 2 | 1 |
| 8 Vector Calculus | 10, 20, 40 | 3 | 1 | 0 | 2 | 1 | 0 |
| 9 Mechanics | 23, 31, 36, 50, 52, 65, 66, 74 | 8 | 2 | 2 | 2 | 4 | 0 |
| 10 Trigonometry and complex numbers | 3, 8, 11, 35, 63, 77, 90 | 7 | 2 | 1 | 2 | 4 | 0 |
| **Total** | | **90** | **25** | **14** | **32** | **38** | **6** |

- `difficulty` field: easy 46 (recall 14 + one-step 32), medium 38, hard 6.
- Unit counts = §B1; past questions per unit 6 / 5 / 1 / 3 / 2 / 1 / 2 / 1 / 2 / 2 = §B6 (P4); topic counts checked by `verify.py` against `target_topics.json` (= §B2 + P4 swaps); every topic id is in `topics.txt`.
- Hard items at Q14, Q43, Q47, Q61, Q68, Q79 (1 in Q1–30, 2 in Q31–60, 3 in Q61–90): Q14 y² log y = xyp + p² (Clairaut after Y = log y, past); Q43 lim (xˣ − x)/(1 − x + log x) = −2; Q47 shortest distance between a cube diagonal and a skew edge; Q61 rank and nullity of T(A) = A − Aᵀ on M₂(ℝ); Q68 angle 2α between the lines (x² + y²)sin²α = (x cos θ − y sin θ)²; Q79 x/(1 + x tan x) maximum when x = cos x (past).
- Match-the-list (4): Q8, Q24, Q62, Q74. Multi-statement (3): Q17, Q54, Q82. No assertion–reason. No 'None of these', no 'All of these' (the six past questions that had 'None of these' got real options; in Q14 the book's 'None of these' was its key and was replaced by the actual solution).
- Answer key A/B/C/D = 23/22/23/22; longest run of one letter 3. Units shuffled (4 adjacent same-unit pairs, no three in a row); all-numeric option sets never in ascending/descending order; recall items lean to the second half.
- Syllabus-gap items (§B5) among the 65 new questions: 23 (≥ 22 required): Q3 (tp-10-04), Q7 (tp-05-06), Q9 (tp-13-02), Q10 (tp-14-03), Q29 (tp-08-04), Q33 (tp-05-05), Q37 (tp-03-03), Q38 (tp-11-04), Q41 (tp-06-03), Q42 (tp-08-02), Q43 (tp-05-06), Q47 (tp-13-01), Q54 (tp-04-09), Q55 (tp-03-01), Q56 (tp-04-07), Q60 (tp-16-03), Q61 (tp-03-03), Q64 (tp-08-03), Q65 (tp-15-14), Q70 (tp-06-06), Q73 (tp-11-08), Q82 (tp-07-03), Q85 (tp-04-10). Past questions on gap items as well: binary operation, Leibnitz, Clairaut, cone, catenary, radial–transverse, heights and distances.

#### Past questions used (25: 8 UP PGT 2009, 1 UP PGT 2009, 2010, 6 UP PGT 2010, 10 UPPSC GIC 2021)

| Mock Q | origin | book page, question | printed tag | topic | kind |
|---|---|---|---|---|---|
| 4 | UP PGT 2009, 2010 | p873 Q400 | PGT 2009, 2010 | tp-11-06 | E |
| 5 | UPPSC GIC 2021 | p223 Q1475 | UPPSC GIC 2021 | tp-04-08 | E |
| 12 | UP PGT 2010 | p836 Q180 | PGT 2010 | tp-11-01 | E |
| 14 | UP PGT 2009 | p762 Q1407 | PGT 2009 | tp-08-03 | H |
| 18 | UPPSC GIC 2021 | p501 Q79 | UPPSC GIC 2021 | tp-05-07 | E |
| 20 | UPPSC GIC 2021 | p412 Q287 | UPPSC GIC 2021 | tp-14-02 | E |
| 21 | UPPSC GIC 2021 | p29 Q160 | UPPSC GIC 2021 | tp-01-08 | M |
| 22 | UP PGT 2009 | p521 Q194 | PGT 2009 | tp-06-06 | M |
| 26 | UPPSC GIC 2021 | p632 Q798 | UPPSC GIC 2021 | tp-07-02 | E |
| 31 | UPPSC GIC 2021 | p1096 Q97 | UPPSC GIC 2021 | tp-15-12 | E |
| 35 | UP PGT 2010 | p1032 Q114 | PGT 2010 | tp-09-03 | M |
| 36 | UPPSC GIC 2021 | p1096 Q101 | UPPSC GIC 2021 | tp-15-06 | R |
| 39 | UP PGT 2010 | p110 Q665 | PGT 2010 | tp-01-01 | M |
| 44 | UPPSC GIC 2021 | p946 Q1019 | UPPSC GIC 2021 | tp-13-04 | E |
| 46 | UP PGT 2010 | p130 Q793 | PGT 2010 | tp-01-04 | M |
| 53 | UPPSC GIC 2021 | p983 Q173 | UPPSC GIC 2021 | tp-16-02 | M |
| 59 | UP PGT 2010 | p378 Q89 | PGT 2010 | tp-12-02 | M |
| 63 | UP PGT 2009 | p1052 Q222 | PGT 2009 | tp-09-06 | M |
| 67 | UP PGT 2010 | p110 Q666 | PGT 2010 | tp-01-03 | M |
| 72 | UP PGT 2009 | p340 Q2186 | PGT 2009 | tp-03-02 | E |
| 78 | UP PGT 2009 | p339 Q2184 | PGT 2009 | tp-03-03 | E |
| 79 | UP PGT 2009 | p591 Q579 | PGT 2009 | tp-06-05 | H |
| 86 | UP PGT 2009 | p874 Q403 | PGT 2009 | tp-11-07 | M |
| 88 | UP PGT 2009 | p521 Q197 | PGT 2009 | tp-06-01 | M |
| 89 | UPPSC GIC 2021 | p157 Q966 | UPPSC GIC 2021 | tp-01-02 | R |

Each was read from the page image (crop box reset), solved afresh, and checked against the excluded list and the app's papers. Several pool items were dropped because the same question is already in the app or in another expected PGT paper: p522 Q203 (= LT 2018 Q57), p444 Q106 (= LT 2018 Q147), p520 Q188 and p279 Q1854 (in PGT mock 5), p520 Q190 and p520 Q191 (same skeleton as PGT 3 Q40 / UP TGT 2021 Q123), p412 Q285 (PGT 2/3 Gauss items), p419 Q325 (same skeleton as GIC 2026 Q77), p520 Q189 (≈ PGT 2 Q10), p1056 Q241/Q242 (≈ UP TGT 2021 Q48 / TGT 2026 Q94), p522 Q199 (≈ TGT 3 Q51).

#### Flags

- Q4 (UP PGT 2009, 2010, p873 Q400): Option (a) $\frac5{13}$ (which fits only if the second ellipse had $b>a$) replaced by $\frac{12}{13}$, so that exactly one option fits.
- Q14 (UP PGT 2009, p762 Q1407): Book's option (d) 'None of these' (its key) replaced by the solution itself, $\log y=cx+c^2$; '$p=\frac{dy}{dx}$' added to the stem.
- Q18 (UPPSC GIC 2021, p501 Q79): The three discontinuous functions are not defined at 0; no value assigned there can make them continuous.
- Q26 (UPPSC GIC 2021, p632 Q798): Constant of integration omitted in the options, as printed.
- Q39 (UP PGT 2010, p110 Q665): 'where as' printed as two words, joined; 'None of these' (book option) replaced by a real distractor.
- Q46 (UP PGT 2010, p130 Q793): 'None of these' (book option) replaced by a real distractor.
- Q67 (UP PGT 2010, p110 Q666): 'None of these' (book option) replaced by a real distractor.
- Q78 (UP PGT 2009, p339 Q2184): Options written as sets; 'None of these' (book option) replaced by a real distractor.
- Q79 (UP PGT 2009, p591 Q579): 'None of these' (book option) replaced by a real distractor.
- Q86 (UP PGT 2009, p874 Q403): Equation of the hyperbola added to the stem (the options use $a$, $b$).
- Q88 (UP PGT 2009, p521 Q197): Stem 'find the value of?' rephrased as 'is equal to'; the range $0<x<1$ added.
- Q89 (UPPSC GIC 2021, p157 Q966): The note 'where R is the set of real numbers', printed under option (d), moved into the stem.
- Q33 (new, limit of a sum) has the same *topic* as PGT 5 Q46 and GIC 2026 Q65 (the blueprint requires a tp-05-05 item in P4); the integrand and the answer differ ($\frac13\log2$).
- Q76 (new, $|b+c\ c+a\ a+b|$ cyclic determinant $=2|a\ b\ c|$) scores 0.94 TF-IDF against PGT 1 Q69 ($|1\ a\ b+c|$, value 0) because of the shared entries $b+c$, $c+a$, $a+b$; the determinants, the method and the answer differ.
- Several new items share a theme with items elsewhere (e.g. Q47 shortest distance of skew lines, Q64 Clairaut singular solution, Q74 maximum range on an inclined plane), but each asks a different thing; all near-matches above TF-IDF 0.45 were read and none is the same question or the same skeleton with new numbers.

#### Checks

- `mock.jsonl`: 90 lines, n = 1..90, valid JSON; options/notes 4 each; balanced `$`; no `$$` in questions/options; no `\displaystyle`/`align`; topic counts = target.
- Second-way check by script of every item (`verify.py`, 90 of 90 pass): sympy (limits, integrals, determinants, eigenvalues, ODE solutions, surface of revolution, centres of gravity, moments of inertia), brute force (permutations, necklaces, Fermat, S5 conjugation), numerics (trajectories, rod equilibrium, catenary, triangle identities, Riemann sums). Four of them (P966 binary-operation definition, B11 Riemann-integrability statements, F3 normal-subgroup statements, G6 isomorphism by dimension) are checked by a stated argument rather than a computation; K1 by random rank tests.
- Similarity: `simcheck.py` against all of `data\mq\*.json` (incl. expected PGT 1–3, final versions) and `mocks\pgt-5\mock.jsonl`, plus a topic-by-topic reading of the same-topic items of expected PGT 1–3, expected TGT 1–5 and PGT 5. 36 + 5 + 2 + 5 items were replaced during writing because of overlaps found this way.

### Independent check

#### Expected PGT mock 4: check of 23 November 2026

Checked file: `mocks\pgt-4\mock.jsonl` (copied here as `mock.orig.jsonl`). Output: `mock.checked.jsonl` (90 questions, same format). Every edit is in `apply_fixes.py` and can be reproduced from `mock.orig.jsonl`.

Scripts in this folder: `dumpq.py` (dump without keys), `mine.py` (my 90 answers, written before reading the keys), `verify_ck.py` (second-way checks of the final file), `counts.py` (topic, unit, past, difficulty, key and format counts), `texck.py` (KaTeX sanity and width of inline formulas), `sim.py` (TF-IDF against every file of `data\mq\*.json`, which now includes the final mock 5 `exp-pgt-2026-5.json`), `bytopic.py` (every corpus question of each topic beside mock 4's, read by hand: `bytopic.txt`, `bytopic_final.txt`), `grepc.py` (fragment search of the corpus), `clipq.py` (book crops with the crop box reset to the media box; images in `img\`).

No-repeat corpus: all of `data\mq\*.json` in their versions of 23 November (expected PGT 1 and 2 of 11:53–11:54, expected PGT 3, TGT 3, TGT 4 of 11:47; the by-topic reading was done after those updates) and PGT mock 5 — first the checker's draft, at the end the final `exp-pgt-2026-5.json` (12:24, re-saved 12:25; its questions, options and keys are identical to the checker's last draft of 12:20).

##### 1. My answers and script checks
- I solved all 90 questions before looking at `answer`: my answers agree with the writer's keys in **90 of 90**. No wrong answer found.
- Second-way checks of the final file (`verify_ck.py`): **77 by script** (sympy: limits, integrals, determinants, eigenvalues, ODE substitution, series sums, the ellipse/cone/vector items; numerics: rod equilibrium, projectile on an inclined plane, catenary-free statics, triangle identities, Riemann sum, period; brute force: S5 conjugation, necklaces, LEVEL, book bundles, Fermat in Z13, characteristic of Z7, the general solution of Q35 against a fine scan of [0, 2π)), **13 by stated argument** (Q1, Q17, Q18, Q27, Q31, Q36, Q37, Q39, Q54, Q80, Q82, Q87, Q89). All 90 pass; for every script-checked item the computation singles out exactly one option.
- The four match-the-list items (Q8, Q24, Q62, Q74): every pairing computed (a numeric triangle for Q8, series sums for Q24, enumeration for Q62, a simulated projectile on a 20° plane for Q74); in each, exactly one option gives the full correct matching. Multi-statement items (Q17, Q54, Q82): each statement checked; one option fits.

##### 2. Past questions verified against the book (page images, crop box reset)
All 25 of the writer's past questions were read on the page; stems and options are faithful (options re-ordered as the blueprint asks).

| Q | book page, Q | tag | result |
|---|---|---|---|
| 4 | p873 Q400 | PGT 2009, 2010 | matches; book option (a) 5/13 replaced by 12/13 (see §4) |
| 5 | p223 Q1475 | UPPSC GIC 2021 | matches |
| 12 | p836 Q180 | PGT 2010 | matches |
| 14 | p762 Q1407 | PGT 2009 | matches; book option (d) 'None of these' replaced by the solution (see §4) |
| 18 | p501 Q79 | UPPSC GIC 2021 | matches |
| 20 | p412 Q287 | UPPSC GIC 2021 | matches |
| 21 | p29 Q160 | UPPSC GIC 2021 | matches |
| 22 | p521 Q194 | PGT 2009 | matches |
| 26 | p632 Q798 | UPPSC GIC 2021 | matches (constant of integration omitted, as printed) |
| 31 | p1096 Q97 | UPPSC GIC 2021 | matches |
| 35 | p1032 Q114 | PGT 2010 | matches — **replaced** (repeat, §3) |
| 36 | p1096 Q101 | UPPSC GIC 2021 | matches |
| 39 | p110 Q665 | PGT 2010 | matches; 'None of these' → 13 ≤ x ≤ 63 |
| 44 | p946 Q1019 | UPPSC GIC 2021 | matches — **replaced** (repeat, §3) |
| 46 | p130 Q793 | PGT 2010 | matches; 'None of these' → 20 |
| 53 | p983 Q173 | UPPSC GIC 2021 | matches |
| 59 | p378 Q89 | PGT 2010 | matches |
| 63 | p1052 Q222 | PGT 2009 | matches |
| 67 | p110 Q666 | PGT 2010 | matches; 'None of these' → n = 9, r = 4; book's (c) 'n = 1, r = 5' (misprint) shown as n = 10, r = 5 — flag now says so |
| 72 | p340 Q2186 | PGT 2009 | matches — **replaced** (repeat, §3) |
| 78 | p339 Q2184 | PGT 2009 | matches; options written as sets; 'None of these' → {(0,0,0)} |
| 79 | p591 Q579 | PGT 2009 | matches; 'None of these' → x = tan x |
| 86 | p874 Q403 | PGT 2009 | matches; equation of the hyperbola added to the stem |
| 88 | p521 Q197 | PGT 2009 | matches; '0 < x < 1' added, 'find the value of?' rephrased |
| 89 | p157 Q966 | UPPSC GIC 2021 | matches; the note 'where R is the set of real numbers' moved into the stem |

Book keys: all correct for the book's own options, including Q14 (the book's key (d) 'None of these' is right, since none of its (a)–(c) solves the equation; it is not a wrong key). Book p837 Q184 (now mock 5 Q4) is not used in mock 4.

##### 3. Repeats: questions replaced (mock 4 gives way; topic id, difficulty and key letter kept)
- **Q30** (tp-02-02, easy, C): adj(AB) = (adj B)(adj A) is statement II of LT 2025 Q83 → new: $(kA)^{-1}=\frac1kA^{-1}$.
- **Q35** (tp-09-03, medium, C; past, UP PGT 2010 p1032 Q114): number of solutions of $2\sin^2x+5\sin x-3=0$ in $[0,3\pi]$ has the skeleton of expected TGT 4 Q80 (UP TGT 1999: $(2\cos x-1)(3+2\cos x)=0$ in $[0,2\pi]$, one inadmissible factor). The pool has no other tp-09-03 item → new: general solution of $\sin^4x+\cos^4x=\frac58$ ($x=\frac{n\pi}2\pm\frac\pi6$; the distractor $\frac{n\pi}2\pm\frac\pi3$ was avoided because it is the same set).
- **Q44** (tp-13-04, easy, A; past, GIC 2021 p946 Q1019): the right circular cone $x^2+y^2=z^2\tan^2\alpha$ is a pair of the match-the-list LT 2025 Q130. The pool has no other cone/cylinder item → new: the cone $ax^2+by^2+cz^2=0$ has three mutually perpendicular generators iff $a+b+c=0$ (distractor: $ab+bc+ca=0$, the tangent-plane condition).
- **Q55** (tp-03-01, medium, B): $M_2(\mathbb R)$ = symmetric ⊕ skew-symmetric is the stock fact of UP TGT 2026 Q124 and LT 2018 Q104 → new: which $W$ is a complement of the plane $x=0$ in $\mathbb R^3$ (answer: the line $(t,t,t)$). Option (d) uses the plane $y=2x$ rather than $x=y$, to keep clear of mock 5 Q58.
- **Q56** (tp-04-07, easy, D): the number of $x\in\mathbb Z_{11}$ with $x^{10}=\bar1$ has the skeleton of mock 5 Q34 (number of $x$ with $x^8=e$ in a cyclic group of order 12) → new Fermat item: in $\mathbb Z_{13}$, $\bar a^{-1}=\bar a^{11}$ (not the remainder skeleton of expected PGT 1 Q80).
- **Q72** (tp-03-02, easy, B; past, UP PGT 2009 p340 Q2186): the value of $m$ making $(m,3,1)$ a combination of $(3,2,1),(2,1,0)$ has the skeleton of UP PGT 2026 Q115 and expected PGT 1 Q9 (an entry that makes three vectors of $\mathbb R^3$ dependent). The pool's only other basis/dimension item (p339 Q2183, dimension of 2×2 matrices) repeats the skeleton of mock 5 Q31 → new: dimension (2) of the solution space of $y''+y=0$.
- Past questions: **25 → 22** (Q35, Q44, Q72 are now new; no clean pool item of the same topic). Past per unit: 6 / 5 / 1 / 3 / 1 / 1 / 1 / 1 / 2 / 1 (blueprint P4: 6 / 5 / 1 / 3 / 2 / 1 / 2 / 1 / 2 / 2).
- Q25, Q58, Q75: replaced in a first pass because the mock 5 checker's draft of 12:15 asked the same (order and degree of the DE of $y=c(x-c)^2$; pair perpendicular to a given pair; $\int\sqrt{1+\sin2x}\,dx$). The mock 5 checker then replaced its Q30, Q32, Q89 (draft of 12:18, final file of 12:24), so the originals no longer clash and were **restored** (switch `APPLY_PGT5_SWAPS = False` in `apply_fixes.py`). Final mock 5 Q30 is the ellipse-family DE, Q32 the joint equation for slopes 2 and −3, Q89 $\int\sin^3x\,dx$.

Similar items judged and **kept** (not the same question, skeleton or stock item):
- **Q76** (|b+c c+a a+b; c+a a+b b+c; a+b b+c c+a| = 2|a b c; b c a; c a b|) vs expected PGT 1 Q69 (|1 a b+c; …| = 0, TF-IDF 0.66 now, 0.94 in the writer's run) and mock 5 Q11 (circulant of a−b, b−c, c−a = 0, TF-IDF 0.87): different determinants, different answers (2D vs 0) and different methods (C1+C2+C3 then reduction to the circulant; proportional columns; rows summing to zero). The shared entries b+c, c+a, a+b drive the score. Kept.
- **Q64** (Clairaut: the singular solution comes from eliminating $p$ with $x+f'(p)=0$) vs mock 5 Q77 (singular solution of $(a^2-x^2)p^2+2xyp+b^2-y^2=0$) and expected PGT 1 Q83 (singular solution of $y=px+p^2$): Q64 asks the general rule, the others compute a specific envelope. Kept; the P4 blueprint requires two tp-08-03 items.
- Q28 vs expected PGT 2 Q62 (determinants in x + constants; Q28 is a plain evaluation, PGT 2 needs the AP condition); Q11 ($\tan3A-\tan2A-\tan A$) vs expected TGT 3 Q55 ($A+B+C=\pi$); Q12 ($2|x|+3|y|\le6$) vs LT 2018 Q67 (between $y=|x|-1$ and $y=-|x|+1$); Q73 (transverse common tangent from two equations) vs expected TGT 3 Q47 (direct common tangent from radii); Q5 (generator of $U(7)$) vs the generator items of GIC 2026 Q63, LT 2018 Q109, UP TGT 2021 Q73; Q48 (which quantity is invariant under rotation) vs expected PGT 2 Q55 ($\lambda_1\lambda_2$); Q84 vs LT 2018 Q131; Q63 vs expected TGT 2 Q46 / TGT 3 Q40; Q33 vs GIC 2026 Q65 / LT 2018 Q57 (different sums); Q77 vs expected TGT 3 Q14 (both contain $2\tan^{-1}\frac13$, different ask); Q58 vs mock 5 Q32 (perpendicular pair vs joint equation from slopes); Q55 vs mock 5 Q58 (complement vs dimension of a sum); Q87 vs mock 5 Q31; Q1 vs mock 5 Q49; row a of Q62 (5! = 120) is one pair of a match item, not a question.

##### 4. Other changes (number: what was wrong → what it is now)
- **Q85** (tp-04-10, easy, A): "$n\mathbb Z$ is a maximal ideal iff $n$ is prime". Ideals are not in the UP PGT syllabus (Abstract Algebra: groups, Lagrange, Fermat, normal subgroups, homomorphisms, rings and fields with examples; read from `maths-syl\pgt-2026.pdf`), and the book's ideal questions are from RPSC/OPSC/UPPSC Polytechnic only → new: the characteristic of the field $\mathbb Z_7$ is 7.
- Q4: solution now also says that $b>a$ would give $\frac ab=\frac5{13}$, which is not offered (explains the writer's option change).
- Q14: flag now states that the book's key (d) was right for the book's options.
- Q21: note (b) was false ("condition for $x=-1$ to be a root"; that condition is $1+p+q+r=0$) → "not a GP condition: roots 1, 2, 4 give $p-q+r=1\ne0$".
- Q26: note (a) garbled ("derivative of uv type sign error") → "Wrong sign: $\frac d{dx}(uv'+vu')=uv''+2u'v'+vu''$".
- Q52: note (b) referred to a later note ("the same mistake") → "resolves as if the two directions were perpendicular".
- Q54: solution step $f(gkg^{-1})=f(g)f(g)^{-1}$ skipped $f(k)$ → $f(g)f(k)f(g)^{-1}=f(g)f(g)^{-1}=e'$.
- Q67: flag now records the book's misprinted option (c).
- Q88: note (a) said only "forgets the factor $2x$"; option (a) also has the wrong sign → note says both.
- Phone width: long inline formulas split into shorter `$…$` pieces in the solutions of Q10, Q22, Q26, Q28, Q33, Q38, Q39, Q42, Q54, Q69, Q74, Q75, Q79 (largest remaining segment ≈ 21 em, a fact of Q34 with break points after '=').

Writer's flagged edits judged fair and faithful: Q4 (5/13 removed because it would also be right when $b>a$; 12/13, the common eccentricity, is a fair distractor), Q14 ('None of these', the book's correct key, replaced by the actual general solution $\log y=cx+c^2$, verified by substitution; $p=\frac{dy}{dx}$ added), Q18, Q26, Q39, Q46, Q67, Q78, Q79, Q86, Q88, Q89.

##### 5. Counts (final file)
| Unit | total | past | new |
|---|---|---|---|
| 1 Algebra | 21 | 6 | 15 |
| 2 Calculus | 18 | 5 | 13 |
| 3 ODE | 5 | 1 | 4 |
| 4 2-D | 9 | 3 | 6 |
| 5 Vectors and 3-D | 6 | 1 | 5 |
| 6 Abstract Algebra | 5 | 1 | 4 |
| 7 Linear Algebra | 8 | 1 | 7 |
| 8 Vector Calculus | 3 | 1 | 2 |
| 9 Mechanics | 8 | 2 | 6 |
| 10 Trigonometry | 7 | 1 | 6 |
| **Total** | **90** | **22** | **68** |

- Topic counts equal §B2 with the P4 swaps of §B6 (checked by `counts.py`); every topic id is in `topics.txt`.
- Difficulty: easy 46, medium 38, hard 6 (unchanged; each replacement keeps its label). Hard at Q14, Q43, Q47, Q61, Q68, Q79 (3 in the last third).
- Key A/B/C/D = 23/22/23/22, longest run 3 (unchanged). No 'None of these' or 'All of these'. Match-the-list 4 (Q8, Q24, Q62, Q74), multi-statement 3 (Q17, Q54, Q82). No all-numeric option set in ascending or descending order.
- Syllabus-gap items (§B5) among the new questions: 24 (≥ 22): Q3, Q7, Q9, Q10, Q29, Q33, Q37, Q38, Q41, Q42, Q43, Q44 (cone, new), Q47, Q54, Q55 (direct sum, new), Q56 (Fermat, new), Q60, Q61, Q64, Q65, Q70, Q73, Q82, Q85 (rings and fields, new). All are within the UP PGT 2026 syllabus as printed (Riemann integration, limit of a sum, Rolle/LMVT/Leibnitz/L'Hospital, singular solutions, common tangents, chord of contact, cone, Fermat, normal subgroups, direct sum, transpose of a linear map, rank–nullity, line integrals, catenary, radial–transverse, central orbits, heights and distances, De Moivre).
- Format: valid JSON, 90 lines n = 1..90, four distinct options, answer 0–3, key null, even `$`, no `$$` in questions or options, no `\displaystyle`/`align`, no rupee sign, no `\,'`.

##### 6. Doubtful or worth a second look
- Q76 and Q64 kept on judgement (§3).
- The past-question count is 22, not the blueprint's 25, because no clean pool item of the same topic existed for Q35, Q44 and Q72.
- Q20 (tp-14-02) is a unit normal (gradient), not the directional derivative that §B6 suggests for P4; it is a faithful GIC 2021 question and was kept.
- Difficulty labels: Q3 (continued product of the values, labelled easy) and Q61 (rank and nullity of $A\mapsto A-A^T$, labelled hard) are arguably medium; Q74 (four inclined-plane formulas, easy) is pure recall. Left as they are to keep the blueprint's 46/38/6.
- Q57 (zone of a sphere) and the eigenvalue items follow blueprint topics (tp-07-06, tp-02-05) that the 2026 syllabus text does not name explicitly.

---

## Expected PGT paper 5 · balanced

- In the app: `data/mq/exp-pgt-2026-5.json`, 90 questions (30 asked before), one clock of 100 minutes, −1/3 mark for a wrong answer.

### Writing

### Mock P5 — UP PGT Mathematics, expected paper (December 2026)

**Level** PGT. **Emphasis** (blueprint §B6, mock P5): *balanced*. Base topic table (§B2), no swaps; base difficulty (recall / one-step / medium / hard = 12 / 32 / 40 / 6); 3 match-the-list + 2 multi-statement items; 30 past questions, only from the pool `pools/pgt-mock5.tsv` (UP PGT 2004, 2003, 2002, 2000), with 0 in Linear Algebra (the pool has none), as §B6 sets; 60 new questions.

Output: `mock.jsonl` (90 lines, n = 1..90). Source of every item: `items.py` (correct option first, notes aligned; `patch1.py`–`patch5.py` record the replacements made after the no-repeat checks); `build.py` orders the paper, balances the key and places the options (seed 20261205); `verify.py` re-computes the answers and checks the file; `simcheck.py` compares every question with all papers in `data\mq` (seven solved papers, Expected TGT 1–5, Expected PGT 1–3, all final) and with the PGT mock 4 draft; `grepall.py` searches the same set for key numbers and phrases; `texlint.py` checks the LaTeX. `cs.py` / `render.py` crop and render book pages at full size (crop box reset to the media box); images in `img/`.

#### Counts per unit (= blueprint §B1) and per kind

| Unit | Questions (mock numbers) | total | past | R | E | M | H |
|---|---|---|---|---|---|---|---|
| 1 Algebra | 2, 9, 11, 15, 17, 20, 37, 41, 42, 46, 49, 51, 53, 56, 57, 61, 62, 69, 70, 81, 84 | 21 | 8 | 2 | 8 | 11 | 0 |
| 2 Calculus | 5, 14, 22, 25, 27, 29, 33, 40, 43, 55, 63, 65, 73, 74, 83, 87, 89, 90 | 18 | 6 | 1 | 5 | 9 | 3 |
| 3 ODE | 7, 30, 38, 60, 77 | 5 | 2 | 0 | 1 | 3 | 1 |
| 4 2-D geometry | 4, 19, 21, 32, 50, 54, 64, 68, 72 | 9 | 3 | 1 | 4 | 3 | 1 |
| 5 Vectors and 3-D | 36, 45, 48, 78, 86, 88 | 6 | 2 | 1 | 3 | 2 | 0 |
| 6 Abstract Algebra | 8, 23, 34, 75, 85 | 5 | 2 | 4 | 0 | 1 | 0 |
| 7 Linear Algebra | 12, 26, 31, 47, 52, 58, 71, 82 | 8 | 0 | 0 | 4 | 3 | 1 |
| 8 Vector Calculus | 3, 66, 79 | 3 | 1 | 1 | 1 | 1 | 0 |
| 9 Mechanics | 1, 6, 10, 39, 44, 59, 67, 76 | 8 | 3 | 1 | 5 | 2 | 0 |
| 10 Trigonometry and complex numbers | 13, 16, 18, 24, 28, 35, 80 | 7 | 3 | 1 | 1 | 5 | 0 |
| **Total** | | **90** | **30** | **12** | **32** | **40** | **6** |

- `difficulty` field: easy 44 (recall 12 + one-step 32), medium 40, hard 6.
- Past questions per unit 8 / 6 / 2 / 3 / 2 / 2 / 0 / 1 / 3 / 3, as in §B6. Topic counts equal the §B2 base table exactly (checked by `verify.py` against `blueprint/counts-pgt.json`); every topic id is in `topics.txt`.
- Hard items: Q29, Q43, Q50, Q71, Q77, Q90 — one in Q1–30, two in Q31–60, three in Q61–90 (half in the last third, §0.2).
- Match-the-list (3): Q16, Q74, Q85 (nth derivatives; principal values of inverse circular functions; rings). Multi-statement (2): Q26, Q56 (linear transformations; probability). No assertion–reason. Match keys use three different code patterns (one is the stock 'a – IV, b – III, c – II, d – I').
- Answer key A/B/C/D = 23/22/23/22; longest run of one letter 3. All-numeric option sets are never in ascending or descending order.
- Units shuffled: 6 adjacent same-unit pairs, no three in a row; no two adjacent questions share a topic. Past questions per third: 9 / 10 / 11.
- 'None of these': none as a key; one 'none of A.P., G.P. and H.P.' distractor (Q53). Every 'None of these' option of the past questions was replaced by a real distractor. No 'All of these'.

#### Past questions used (30: UP PGT 2004 ×18, UP PGT 2002 ×9, UP PGT 2003 ×2, UP PGT 2000 ×1)

| Mock Q | origin | book page, question | printed tag | topic | kind |
|---|---|---|---|---|---|
| 3 | UP PGT 2004 | p421 Q334 | PGT 2004 | tp-14-02 | E |
| 4 | UP PGT 2004 | p829 Q142 | PGT 2004, 2011 | tp-11-02 | M |
| 10 | UP PGT 2004 | p1114 Q196 | PGT 2004 | tp-15-05 | M |
| 15 | UP PGT 2004 | p180 Q1134 | PGT 2004 | tp-01-02 | M |
| 18 | UP PGT 2002 | p447 Q123 | PGT 2002 | tp-10-01 | M |
| 20 | UP PGT 2000 | p50 Q283 | PGT 2000 | tp-01-08 | E |
| 24 | UP PGT 2004 | p1035 Q128 | PGT 2004 | tp-09-05 | M |
| 27 | UP PGT 2004 | p658 Q926 | PGT 2004 | tp-07-05 | M |
| 29 | UP PGT 2004 | p659 Q931 | PGT 2004 | tp-07-03 | H |
| 34 | UP PGT 2004 | p180 Q1136 | PGT 2004 | tp-04-08 | R |
| 35 | UP PGT 2002 | p466 Q232 | PGT 2002 | tp-10-10 | M |
| 38 | UP PGT 2002 | p767 Q1425 | PGT 2002 | tp-08-02 | M |
| 39 | UP PGT 2004 | p1114 Q195 | PGT 2004 | tp-15-10 | E |
| 41 | UP PGT 2003 | p139 Q835 | PGT 2003 | tp-01-05 | M |
| 48 | UP PGT 2004 | p379 Q96 | PGT 2004 | tp-12-02 | M |
| 50 | UP PGT 2004 | p876 Q416 | PGT 2004 | tp-11-08 | H |
| 51 | UP PGT 2004 | p286 Q1890 | PGT 2004 | tp-02-03 | M |
| 54 | UP PGT 2004 | p815 Q59 | PGT 2004 | tp-11-04 | M |
| 57 | UP PGT 2004 | p112 Q677 | PGT 2004 | tp-01-04 | M |
| 63 | UP PGT 2004 | p592 Q586 | PGT 2004 | tp-06-03 | M |
| 65 | UP PGT 2002 | p593 Q393 | PGT 2002 | tp-06-05 | M |
| 67 | UP PGT 2002 | p1115 Q201 | PGT 2002 | tp-15-03 | M |
| 69 | UP PGT 2004 | p112 Q676 | PGT 2004/ TGT 1999 | tp-01-03 | E |
| 70 | UP PGT 2004 | p91 Q530 | PGT 2004 | tp-01-06 | M |
| 75 | UP PGT 2003 | p181 Q1145 | PGT 2003 | tp-04-07 | R |
| 77 | UP PGT 2004 | p765 Q1419 | PGT 2004 | tp-08-03 | H |
| 81 | UP PGT 2002 | p289 Q1901 | PGT 2002 | tp-02-03 | M |
| 83 | UP PGT 2002 | p528 Q234 | PGT 2002 | tp-06-01 | M |
| 88 | UP PGT 2002 | p926 Q706 | PGT 2002, UP PCS (Pre) 1996 | tp-13-01 | M |
| 90 | UP PGT 2002 | p526 Q227 | PGT 2002 | tp-05-06 | H |

All were read from the page images (full media box, crops in `img/`), copied with the book's stem and options (options re-ordered for the key balance; misprints fixed and "None of these" replaced as flagged below), and solved independently. None is in `pools/excluded.tsv`, and no page tag shows a paper already in the app. Each was searched in the solved papers and the other expected papers for its key numbers.

Pool items rejected after reading or searching: p49 Q282 ((α+β+γ)(β+γ+δ)… for x⁴ + 6x² − 5x + 4) — its general form is Expected PGT 3 Q42 (it was in the first draft and was replaced by p50 Q283); p445 Q111 (product of cos(π/3ⁿ) + i sin(π/3ⁿ)) — same skeleton as LT 2018 Q147 (π/2ⁿ); p286 Q1888 (x + y − 2z = a … consistent iff a + b + c = 0) — the same system is in the PGT mock 4 draft; p837 Q184 (distance between the lines of x² − 6xy + 9y² + …) — same skeleton as PGT mock 4; p524 Q213 (x = sec θ − cos θ, y = secⁿθ − cosⁿθ) — Expected PGT 3 Q86 (another book place); p289 Q1899 (x + 4y + 10z = λ²) — Expected TGT 2 Q62; p659 Q929 (∫x(1 − x)⁹⁹) — LT 2025 Q52; p379 Q99 (a + 2b ⟂ 5a − 4b) — UP TGT 2021 Q94; p180 Q1133 (onto maps 4 → 2) — Expected PGT 1 Q84; p180 Q1135 (binary operations on an n-set) — Expected PGT 1 Q3; p241 Q1638 (cyclic-group statements) — UP PGT 2026 Q15 (blueprint Appendix); p1114 Q197 (Lami statement) — UP TGT 2026 Q31; p1116 Q211 (1, 2, 3 N on an equilateral triangle) — UP TGT 2026 Q58 skeleton; p446 Q113 (1, ω, ω² equilateral) — Expected TGT 5 Q60; p447 Q126 (ω(1 + ω − ω²)) — close to LT 2018 Q33 and Expected TGT 5 Q42; p1114 Q194 (MI of a solid sphere) — in Expected PGT 1 Q49; p1035 Q130 (book key wrong and the minimum not attained on the open interval); p1066 Q296 (book key keeps the extraneous root x = −1); p133 Q808 (no option correct); p422 Q336 and Q339 (no option correct / unclear print).

#### Flags

- Q3 (UP PGT 2004, p421 Q334): The book's option (d) 'None of the above' replaced by 0.
- Q4 (UP PGT 2004, p829 Q142): Printed 'represents a pair of straight lines is;' read as '... if'. The book's option (d) 'None of these' replaced by a = b.
- Q15 (UP PGT 2004, p180 Q1134): The book's key is (d) [0, 1/4]; 0 is not attained on the open interval (0, 1), so the image is (0, 1/4], the book's option (c).
- Q18 (UP PGT 2002, p447 Q123): The book's option (d) 'None of these' replaced by −3/2 − 2i.
- Q34 (UP PGT 2004, p180 Q1136): '(under multiplication)' added for clarity; the book's option (d) 'None of the above' replaced by '6 only'.
- Q35 (UP PGT 2002, p466 Q232): The book's option (d) 'None of these' replaced by tan θ.
- Q38 (UP PGT 2002, p767 Q1425): The book's options (a) tan y + cot x = c and (c) cot x + tan y = c are the same equation; (c) and (d) 'none of these' replaced by cot y − tan x = c and tan y + tan x = c.
- Q39 (UP PGT 2004, p1114 Q195): g = 9.8 m/s² taken; the book's option (d) 'None of these' replaced by 4.90 metres.
- Q51 (UP PGT 2004, p286 Q1890): The book's option (d) 'None of the above' replaced by −3b.
- Q54 (UP PGT 2004, p815 Q59): P is taken on the major arc QR, as the book intends; on the minor arc the angle would be 3π/4.
- Q65 (UP PGT 2002, p593 Q393): The book's option (d) 'None of these' replaced by e^{-1/e}.
- Q67 (UP PGT 2002, p1115 Q201): The book's key (b) 5√5 forgets to scale the direction (2, −1) to the given magnitude √5; the moment is 5 in magnitude (z-component −5, clockwise). '(in magnitude)' added to the stem.
- Q69 (UP PGT 2004, p112 Q676): Printed '7 to which' read as '7 of which'. The book's option (d) 'None of the above' replaced by 199.
- Q75 (UP PGT 2003, p181 Q1145): Printed 'Set H be a sub-group of a group G and a, b ∈ G' (b unused) and option (a) 'a is non-empty' edited to 'Let H ... and a ∈ G' and 'aH is non-empty'; the book's option (d) 'None of the above' replaced by aH = Ha.
- Q83 (UP PGT 2002, p528 Q234): The book's option (d) 'None of these' replaced by the negative of the key.
- Book keys found wrong: Q15 (book (d), correct (c)) and Q67 (book 5√5, correct 5).

#### Checks

- `verify.py`: 89 of 90 answers re-computed a second way (sympy / mpmath / brute force: sums, determinants, eigenvalues, ranks, limits, derivatives of the options, numerical integrals, enumeration of relations, permutations and subgroups, scans for trigonometric roots). Not scripted: Q66 (name of Stokes's theorem, recall). Structural checks pass: 90 lines of valid JSON, n = 1..90, answer index points at the intended option, four distinct options, topic counts = §B2, topic ids in `topics.txt`, no `$$` in questions/options, balanced `$`, no ₹ in math, longest key run 3.
- `texlint.py`: braces, `\begin`/`\end` pairs and backslashes of every math segment: 0 issues.
- No-repeat check (`simcheck.py`, TF-IDF on words and numbers, plus `grepall.py` key-number and phrase searches) against all 1,465 questions in `data/mq` (UP TGT 2021/2026, UP PGT 2026, LT 2018/2025, DSSSB TGT 2021, GIC 2026, Expected TGT 1–5 and Expected PGT 1–3, all final) and the draft `mocks/pgt-4/mock.jsonl` (version of 23:29). Because the other papers were being written at the same time, about 35 planned or drafted items of this mock were replaced when the same question or skeleton turned up there (e.g. ∫sin⁶x, Σn/(n²+r²), ∫dx/√(x²+2x+5), the 17 N / 7 N resultants, ARRANGE, ∫dx/(1 + 3sin²x), reflection in y = x, S₄ elements of order 2, |a| = 3, |b| = 4, |a + b| = 5, coordinates in the basis {(1,1),(1,−1)}, the area-of-triangle with k, the ratio in which 3x + 4y = 7 divides a segment, the basis {v₁+v₂, v₂+v₃, v₃+v₁}, matrices commuting with a given matrix, the circle of section of a sphere, sphere on a diameter, zⁿ + 1/zⁿ, the sum of the nth roots of unity, King's rule for √sin/(√sin + √cos), rotation-matrix eigenvalues, the 3×4 rank, the subnormal of y² = 4ax). The remaining pairs above 0.45 were read one by one: they share only wording ("is equal to (where C is an arbitrary constant)", "order and degree", "general solution of") or a topic, not the question.
- Within the mock: no two questions repeat an idea (highest TF-IDF pairs 0.76–0.77: Q28/Q51 both use a³ + b³ + c³ − 3abc, but one is De Moivre and the other a determinant of roots; Q11/Q81 are different determinants; Q16/Q74 are match items on different topics).

### Independent check

#### Expected PGT mock 5: check of 22 November 2026

Mock checked: `mocks/pgt-5/mock.jsonl` (the balanced mock, blueprint §B6 P5), copied to `mock.orig.jsonl`. Output: `mock.checked.jsonl` (90 questions, same format). All work in `mockck/pgt-5/` (finished on 23 November, after the API pause).

Scripts: `dumpq.py` (dump without answers), `mine.py` (my 90 answers, written before reading the keys, against the writer's), `ck.py` (sympy / numeric / brute-force checks of the final file), `apply_fixes.py` (every edit, reproducible from `mock.orig.jsonl`), `counts.py` / `texck.py` / `longmath.py` (counts, key balance, JSON shape, KaTeX sanity, long inline formulas), `sim.py` (TF-IDF against all of `data/mq/*.json`), `bytopic.py` (every corpus question of each topic beside mock 5's, read by hand; `bytopic.txt` first run, `bytopic_v2.txt` after the 23 November update of expected PGT 1 and 2), `grepc.py` (regex search of the corpus), `clipq.py` / `stack.py` (book crops with the crop box set to the media box; images in `img/`), `sim4.py` (mock 5 against the PGT mock 4 draft, for the coordinator only).

No-repeat corpus: all of `data\mq\*.json` (1,465 questions): the seven solved papers, expected TGT papers 1–5 and expected PGT papers 1–3, all final, with expected PGT 1 and 2 re-read in their versions of 23 November 11:53–11:54 (exp-pgt-1 Q5, Q32, Q45, Q60 and exp-pgt-2 Q31, Q48, Q53, Q54, Q78 were replaced there; expected TGT 3 Q90 too). PGT mock 4 ignored, as instructed (but see the last section).

##### Counts (final file)

| Unit | Q | Past | New | Easy | Medium | Hard |
|---|---|---|---|---|---|---|
| 1 Algebra | 21 | 9 | 12 | 10 | 11 | 0 |
| 2 Calculus | 18 | 6 | 12 | 6 | 9 | 3 |
| 3 ODE | 5 | 2 | 3 | 1 | 3 | 1 |
| 4 2-D | 9 | 4 | 5 | 5 | 3 | 1 |
| 5 Vectors, 3-D | 6 | 2 | 4 | 4 | 2 | 0 |
| 6 Abstract algebra | 5 | 1 | 4 | 4 | 1 | 0 |
| 7 Linear algebra | 8 | 0 | 8 | 4 | 3 | 1 |
| 8 Vector calculus | 3 | 1 | 2 | 2 | 1 | 0 |
| 9 Mechanics | 8 | 2 | 6 | 6 | 2 | 0 |
| 10 Trigonometry | 7 | 3 | 4 | 2 | 5 | 0 |
| **Total** | **90** | **30** | **60** | **44** | **40** | **6** |

- Topic counts = §B2 base table exactly (asserted by `counts.py` against `blueprint/counts-pgt.json`); every id is in `topics.txt`. Unit counts = §B1. Difficulty 44/40/6 (unchanged; every replacement kept its slot's difficulty). Hard: Q29, 43, 50, 71, 77, 90 (one in Q1–30, two in Q31–60, three in Q61–90).
- Past questions 30 (UP PGT 2004 ×17, 2002 ×9, 2003 ×2, 2000 ×2). Per unit 9/6/2/4/2/1/0/1/2/3 against §B6's 8/6/2/3/2/2/0/1/3/3: the two lost past questions of units 6 and 9 (Q34, Q67) had no clean pool replacement in their topics, so the pool was used for Q9 (unit 1) and Q21 (unit 4) instead, keeping the total at 30.
- Match-the-list 3 (Q16, 74, 85; every pairing re-checked, exactly one option gives the full correct matching in each), multi-statement 2 (Q26, 56). "None"-type options: only Q53's "none of A.P., G.P. and H.P." (a distractor). No "All of these".
- Key A 23, B 22, C 23, D 22; longest run 3 (no letter changed by any replacement). No all-numeric option set in ascending or descending order. No two adjacent questions share a topic (positions unchanged).
- Format: 90 lines of valid JSON, n = 1…90, four distinct options, answer 0–3, key null, even `$`, balanced braces, `\left…\right` and `\begin…\end` paired, no `$$` in stems/options, no `align`/`\displaystyle`, no rupee sign, no `\,'` (`texck.py`: 1,491 math segments, 0 problems). Long inline chains in the solutions of Q29, 33, 41, 51, 56, 63, 70, 74, 87, 90 split at "=" for phone screens (`longmath.py`).

##### Correctness
- I solved all 90 first-draft questions before reading the keys (`mine.py`): all 90 agreed with the writer's keys. The book keys the writer judged wrong are wrong: Q15 (book [0, ¼]; 0 is not attained on the open interval, the image is (0, ¼]) and Q67 (book 5√5; the force vector is (2, −1), moment 5 in magnitude; the question is now replaced anyway).
- `ck.py` on the final file: the keyed option of all 90 questions asserted; 68 of them recomputed a second way (sympy determinants, eigenvalues, integrals, limits, series, symbolic derivatives, the eliminants of Q30/Q60, brute force over S₃ for Q8 and Q75, over permutations for Q84, over 12-element cyclic exponents for Q34, numerical checks for Q24, 28, 35, 43, 48, 80, 83); the other 22 are recall or statement items (Q17, 20, 26, 31, 36, 40, 44, 45, 46, 49, 52, 54, 56, 59, 64, 66, 72, 76, 78, 82, 85, 86), checked by hand. All pass.

##### Past questions verified against the book (page images, crop box = media box)
All 30 past questions of the final file were read on the page and their stems and options compared (re-ordering allowed): Q3 p421 Q334, Q4 p837 Q184 (new choice), Q9 p182 Q1151 (new choice), Q10 p1114 Q196 (options (c), (d) at the top of the right column), Q15 p180 Q1134, Q18 p447 Q123, Q20 p50 Q283, Q21 p877 Q421 (new choice), Q24 p1035 Q128, Q27 p658 Q926, Q29 p659 Q931, Q35 p466 Q232, Q38 p767 Q1425, Q39 p1114 Q195, Q41 p139 Q835, Q45 p379 Q95 (new choice), Q48 p379 Q96, Q50 p837 Q188 (new choice), Q51 p286 Q1890, Q54 p815 Q59, Q57 p112 Q677, Q63 p592 Q586, Q65 p593 Q393, Q69 p112 Q676, Q70 p91 Q530, Q75 p181 Q1145, Q77 p765 Q1419, Q81 p289 Q1902 (new choice), Q83 p528 Q234, Q90 p526 Q227. Also read: p1115 Q201 (the replaced Q67: options 0, 5√5, −√5, 5, book key 5√5) and the unused pool items p836 Q183, p288 Q1897, p1115 Q202, p1117 Q212, p379 Q97. The other replaced past questions (p829 Q142, p180 Q1136, p876 Q416, p289 Q1901, p926 Q706) were not re-read: they left the paper for being repeats, not for their text.
- The writer's repairs are fair and faithful: every replaced "None of these" (Q3 → 0, Q18 → −3/2 − 2i, Q35 → tan θ, Q38 → two new equations because the book's (a) and (c) are the same equation, Q39 → 4.90 m, Q51 → −3b, Q65 → e^{−1/e}, Q69 → 199, Q75 → aH = Ha, Q83 → the negative of the key) is a real, wrong distractor; the reworded stems of Q69 ("7 to which" → "7 of which") and Q75 ("Set H … a, b ∈ G", "a is non-empty" → "Let H … a ∈ G", "aH is non-empty") keep the book's question. Q38's stem is the book's word for word.
- Two repairs the writer made without a flag, now flagged: **Q29** — the book prints the limits the other way round (lower ½, upper −½), which would make 4 log(3/4) (option (b) of the book) right; its working and key use −½ to ½, as the mock does. **Q39** — the stem gave no g; with g = 10 the height is 2.40 m, which is also an option; "(g = 9.8 m/s²)" added, note on 2.40 added.
- New choices: Q21's option (c) is printed "1/e₂² = −1", read as 1/e₂² − 1 (flagged); the book keys of Q184 (√(5/2)), Q1151 (5²), Q421 (1 − 1/e₂²), Q95 (c), Q188 (3) and Q1902 (p) are right.

##### Changes (number: what was wrong → what it is now; topic, difficulty and key letter kept)
Repeats of the no-repeat corpus (replaced; each flag now says why):
- Q4 (tp-11-02, past p829 Q142): $ax^2+by^2+cx+cy=0$ a pair iff $a+b=0$ = the Δ = 0 skeleton of UP PGT 2026 Q110 → book p837 Q184 (PGT 2004), distance between the parallel lines of $x^2-6xy+9y^2+3x-9y-4=0$, √(5/2).
- Q6 (tp-15-02): forces 5, 7, 8 N in equilibrium, angle between 5 and 8 = expected PGT 1 Q81 (a + b + c = 0 with |c| = 7) → resultant of forces AB, BC, CD, DE, EF of a hexagon is AF (polygon of forces). New.
- Q7 (tp-08-04): PI of $(D^2-3D+2)y=e^x$ (failure case) = skeleton of expected PGT 1 Q73 → PI of $(D^2-2D+1)y=x$ is $x+2$. New.
- Q9 (tp-01-01): $n(A\,\Delta\,B)$ from $n(A), n(B), n(A\cup B)$ = two-set counting of UP TGT 2021 Q50 / DSSSB 2021 Q24 → book p182 Q1151 (PGT 2000), elements common to A × B and B × A, 5² ("None of these" → 10).
- Q12 (tp-03-03): rank of an explicit $T$ on ℝ³ = rank/nullity skeleton of UP PGT 2026 Q22, Q89 → $T(x,y,z)=(y,z,x)$, $T^{100}(1,2,3)=(2,3,1)$. New.
- Q21 (tp-11-07): parametric co-ordinates of a point on the hyperbola = the stock item of UP TGT 2026 Q118 (ellipse version, with (a sec θ, b tan θ) among its options) → book p877 Q421 (PGT 2002), $\frac1{e_1^2}=1-\frac1{e_2^2}$.
- Q25 (tp-07-03): $\int_0^2x\sqrt{2-x}\,dx$ = skeleton of LT 2025 Q52 ($\int_0^1x(1-x)^n dx$; the writer had already rejected the book's version of it) → $\int_0^\pi\frac{dx}{5+4\cos x}=\frac\pi3$. New.
- Q30 (tp-08-01): order and degree of $(y'')^{2/3}=(1+y')^{1/2}$ = skeleton of expected TGT 2 Q54 and UP PGT 2026 Q43 → differential equation of the ellipses $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$: $xyy_2+xy_1^2-yy_1=0$. New. (My first replacement, order and degree of the DE of $y=c(x-c)^2$, was dropped because PGT mock 4 Q25 asks exactly that.)
- Q32 (tp-11-02): acute angle between $x^2-7xy+12y^2=0$ = skeleton of expected TGT 2 Q82 and LT 2025 Q139 → joint equation of the lines through O with slopes 2 and −3: $y^2+xy-6x^2=0$. New. (First replacement, the perpendicular pair, dropped: PGT mock 4 Q58.)
- Q33 (tp-07-06): volume generated by $y=\sqrt x$, $0\le x\le4$ = item c of expected PGT 3 Q28 ($y=2\sqrt{ax}$, $a=\frac14$) → volume of the anchor ring, $2\pi^2a^2b$ (Pappus, checked by integration). New.
- Q34 (tp-04-08, past p180 Q1136): generators of $\{6^n\}$ = skeleton of LT 2018 Q109, GIC 2026 Q63, UP TGT 2021 Q73 (no other cyclic-group question in the pool) → solutions of $x^8=e$ in a cyclic group of order 12: 4. New.
- Q45 (tp-12-01): direction cosines of AB, A(1,2,3), B(3,5,9) = LT 2018 Q84 (projections −6, 3, 2: the same numbers 2, 3, 6, 7) → book p379 Q95 (PGT 2004), $|\vec a+\vec b|=|\vec a|+|\vec b|$ only for like vectors or a zero vector.
- Q46 (tp-02-02): λ making a 3×3 matrix singular = det = 0 skeleton of expected TGT 4 Q19, expected PGT 1 Q9, UP PGT 2026 Q115 → $A$ non-singular and $AB=O$ ⇒ $B=O$. New. (An "$A^3=I\Rightarrow A^{-1}$" draft was dropped: skeleton of expected TGT 3 Q21 / PGT 1 Q7.)
- Q50 (tp-11-08, past p876 Q416): common tangent to $y^2=8x$ and $xy=-1$, $y=x+2$ = expected PGT 1 Q50 (same parabola, same answer) → book p837 Q188 (PGT 2002), tangents from (−2, −1) to $y^2=4x$, tan α = 3; labelled hard like the draft (three steps).
- Q52 (tp-03-03): nullity of $T(x,y,z)=x-2y+3z$ = skeleton of UP PGT 2026 Q22, Q89 → images under a linear map of dependent vectors are always dependent. New.
- Q60 (tp-08-01): DE of $y^2=4ax$ **is LT 2025 Q38** (confirmed, as the coordinator's hint said) → DE of $y=e^{cx}$: $x\frac{dy}{dx}=y\log y$. New.
- Q62 (tp-02-05): eigenvector of $\begin{bmatrix}2&1\\1&2\end{bmatrix}$ for 3 = UP PGT 2026 Q35 in another form → product of the eigenvalues of a tridiagonal 3×3 matrix = det = 8 (eigenvalues 1, 2, 4). New.
- Q67 (tp-15-03, past p1115 Q201): moment of a force along a line about a point = $\vec r\times\vec F$ skeleton of UP TGT 2021 Q3, expected TGT 4 Q47 (pool p1117 Q212 is close to expected PGT 2 Q50) → forces 1, 2, 3, 4 N along the sides of a square of side 2 m, total moment about the centre 10 N m. New.
- Q76 (tp-15-01): 3 N and Q N at 60°, resultant √19 = cosine-law skeleton of UP TGT 2026 Q121, expected TGT 4 Q71 → resultant bisects the angle ⇒ P = Q. New. (A "resolution along two directions" draft was dropped: same formula as the new expected PGT 2 Q78.)
- Q79 (tp-14-01): |v|, |a| at t = 0 on a space curve = skeleton of GIC 2026 Q93, expected PGT 2 Q29 → angle between the tangents of $x=t^2, y=2t, z=-t^3$ at t = ±1: $\cos^{-1}\frac9{17}$. New.
- Q81 (tp-02-03, past p289 Q1901): determinant with $a, a^2, 1+a^3$ ⇒ $abc=-1$ = GIC 2026 Q100 with 1 for 2 → book p289 Q1902 (PGT 2002), the determinant with $\cos(p\pm d)x$, $\sin(p\pm d)x$ does not depend on $p$.
- Q86 (tp-12-02): volume of a parallelepiped on given edges = skeleton of DSSSB 2021 Q10 → $\vec a\times\vec b=\vec0$ and $\vec a\cdot\vec b=0$ ⇒ one of them is $\vec0$. New.
- Q88 (tp-13-01, past p926 Q706): shortest distance between two lines = skeleton of expected PGT 1 Q54 (no other clean line question in the pool) → points on $\frac{x-1}2=\frac{y+2}{-2}=\frac{z-3}1$ at distance 6 from (1, −2, 3). New.
- Q89 (tp-07-02): $\int\frac{dx}{x^2(x+1)}$ = partial-fraction skeleton of expected PGT 1 Q16, expected TGT 2 Q34 (and the repeated factor of expected TGT 4 Q56) → $\int\sin^3x\,dx=\frac{\cos^3x}3-\cos x+C$. New. (First replacement, $\int\sqrt{1+\sin2x}\,dx$, dropped: PGT mock 4 Q75.)

Edits in kept questions: Q20 note (a) (it is not "the sum of the roots"); Q29 flag and note (d) (reversed limits in the book); Q39 stem gets "(g = 9.8 m/s²)", note (c), flag; Q41 note (b) (½e(e − 1) comes from e² for $\sum 3^n/n!$, not from 2ⁿ); Q84 stem "by using some or all of the digits" (the count 168 includes the 5-digit numbers; 48 would be the 4-digit reading), flag; long formulas split (list above).

##### Checked and kept (similar idea, different ask or function; listed for the coordinator)
- Q2 det($A^2+I$) from the eigenvalues vs expected PGT 1 Q8 (eigenvalues of adj A) and PGT 3 Q55 (trace of $A^2$).
- Q3 solenoidal ⇒ a (div) vs expected PGT 2 Q64 (irrotational ⇒ a, curl) and PGT 1 Q14 (div($r^n\vec r$) = 0).
- Q5 $\int e^{\sqrt x}dx$ vs UP PGT 2026 Q116 $\int\tan^{-1}\sqrt x\,dx$ (same substitution, other function).
- Q11 (rows add to 0) vs expected PGT 1 Q69 and PGT 3 Q8 (other vanishing determinants).
- Q17 unitary: no unitary item in the corpus (idempotent, involutory, nilpotent, orthogonal definitions are).
- Q25 (new) $\int_0^\pi\frac{dx}{5+4\cos x}$ vs expected TGT 3 Q48 $\int\frac{dx}{1+\cos x}$ (half-angle only; here the $\tan\frac x2$ substitution).
- Q27 (past) region under $y=\sqrt x$ cut off by $x=2y+3$ and the x-axis vs the parabola–line areas of UP TGT 2021 Q6, UP PGT 2026 Q6 (different region; integrate along y). It had the same integrand as the old expected TGT 3 Q90, which was replaced on 23 November.
- Q38 (past, separable after half-angle identities) vs the other separable equations of LT 2018/2025.
- Q43 (vanishing factor removes the corner at x = 1) vs GIC 2026 Q103, expected TGT 5 Q41 (counting corners of sums of moduli).
- Q44 disc about a tangent in its plane vs expected PGT 1 Q49 (match of the standard central moments).
- Q59 SHM speed formula vs expected PGT 1 Q74 (a numerical SHM problem).
- Q77 (past, hard) singular solution of a Clairaut equation in disguise vs expected PGT 1 Q83 ($y=px+p^2$).
- Q78 two spheres touching vs expected PGT 2 Q8 (common tangents of two circles).
- Q30 and Q60 are both formation items (two-parameter ellipses, one-parameter $e^{cx}$), different from the nine families already in the corpus.

##### Doubtful / for the coordinator
- Q50 (book Q188) is labelled hard to keep the count; it is at the easy end of hard (the draft it replaces had the same length).
- Q12's $T^{100}$ item is medium by the number of steps but quick once $T^3=I$ is seen.
- PGT mock 4 (ignored, it gives way): I avoided three items of the current mock 4 when choosing replacements (its Q25 $y=c(x-c)^2$, Q58 perpendicular pair, Q75 $\int\sqrt{1+\sin2x}$). Remaining look-alikes for its checker: mock 4 Q76 (determinant of $b+c, c+a, a+b$ rows) vs mock 5 Q11; mock 4 Q64 (Clairaut singular solution) vs mock 5 Q77; mock 5 now uses book p837 Q184 (distance between the parallel lines of a pair), which the mock 5 writer had once rejected because of a mock 4 draft.

---

## Final audits

### Final audit of the questions written during the checks, TGT papers 1–3

#### Final audit of TGT papers 1–3: 22 November 2026

Audited: the 65 lines of `audit/tgt-1.jsonl` (36), `audit/tgt-2.jsonl` (13) and `audit/tgt-3.jsonl` (16), each read inside its whole paper (`mockck/tgt-k/mock.checked.jsonl`, identical to `data\mq\exp-tgt-2026-k.json` in question, options and key). Outputs: `tgt-1.fixed.jsonl` (11 lines), `tgt-2.fixed.jsonl` (7), `tgt-3.fixed.jsonl` (6). Every fixed line keeps `n`, `topic`, `difficulty`, `level` and `answer`.

##### Method
- **Answers.** I solved each question from stem and options, then ran `verify.py`, which tests all four options of a question and requires exactly one true option, the keyed one (sympy limits, integrals, derivatives, determinants and matrix tests; exact fractions; brute force over subgroup pairs of Z12, S3, V4 and Z2×Z4, over elements of Z2…Z12, over rectangles of a chess board; random-triangle, random-vector and random-coefficient tests). **58 of 65 checked by script, 0 mismatches.** By reasoning only (definitions): T1 Q14, Q25, Q53, Q77, Q86; T2 Q74; T3 Q22. **No wrong answer was found.**
- **New questions.** The six questions written in this audit are checked by `verify_new.py` (6 of 6, each with exactly one true option; T2 Q61 also by Monte Carlo, T3 Q75 by brute force over all groups Zm × Zn up to order 144).
- **Past questions.** All 25 past questions in the audit set (T1 Q10, 37, 49, 60, 65, 69, 76, 82; T2 Q1, 5, 8, 15, 27, 47, 53, 55, 59, 66, 74, 87; T3 Q7, 17, 25, 62, 84) and the twin of T1 Q65 (p119 Q724) were read on my own page images (crop box set to the media box; `crop.py`, `crop2.py`, images in `img/`). Stems and options match the book apart from the flagged repairs; every repair (None of these replaced, misprints, the restored clause of T2 Q55, "variances" in T2 Q47, the second true option removed in T2 Q5 and T2 Q87) is fair and leaves one correct option. The book's printed key agrees with the file wherever it is on the crop (23 of 25; T1 Q60 and T3 Q17 have no key on the crop).
- **Repeats.** `sim.py`: TF-IDF (words + bigrams) of every audited question against all maths questions of `data/mq/*.json` (own question excluded), top matches read; `bytopic2.py`: every question of every paper in the same topic id listed and read (`bytopic.out.txt`), including papers 4, 5 and PGT 1. `exp-pgt-2026-2.json` appeared in the folder during the audit (23:16); I re-ran the similarity check against all 1,375 questions (`sim2.out.txt`, `sim2new.out.txt`) and read every PGT 2 question of the audited topics. The six new questions were run through the same checks (`sim_new.py`); a first draft of the new T1 Q30 (differential equation of xy = c) turned out to mirror PGT 2 Q34 (lines through the origin) and was replaced before output. Rule I applied: a repeat is the same question, the same stem frame with the same procedure and only the numbers or the instance changed, or the same stock fact; a sibling that asks a different standard result (another conic, another body, another kind of equation) is kept. When the two items of a repeat were both mine to change, the authentic past question was kept.
- **Format.** `fmtcheck.py` (valid JSON, 13 fields in order, four distinct options, answer 0–3, topic in `topics.txt`, even `$`, no `$$` in question/options, no `\displaystyle`/`align`, no `\,'`, no ₹ or other non-ASCII inside math, balanced braces and `\left…\right`, no None/All of these, four non-empty notes) and the paper-3 checker's `latexcheck.py` (only KaTeX commands; no numeric option set in order) pass on the three fixed files. On the audit input the only format failures were empty option notes (32 notes in 18 lines).

##### Paper 1 (36 audited, 31 by script)
Changes:
- **Q30 replaced** (tp-08-01, easy, key B). It was "differential equation of y = A cos x + B sin x", the same skeleton as Expected TGT 3 Q45 (y = Ae^{2x} + Be^{-3x}; both eliminate two constants from a linear combination; both were written during the checks). "Forming the equation of a family" is also asked by PGT 1, PGT 2 (Q4, Q34), LT 2018, LT 2025, GIC 2026 and UP PGT 2026, and order/degree by six papers, so the new item uses another line of the same notes page: "Which of the following differential equations is linear?", key x dy/dx + y = x² (distractors y dy/dx + x = 0, (dy/dx)² + y = x, dy/dx + y² = 0; the first is the trap "degree 1 but not linear"). No linearity question exists in the ten papers.
- Empty option notes filled: Q10 (option 4), Q11 (division by 6), Q37 (2/21, 3/4), Q49 (a = h, with an ellipse counter-example), Q53 (integer), Q60 (x = 5, x = 2 tested), Q65 (1/7, 4/49), Q69 (3/2, 3.5 impossible), Q76 (3, 2).
- Q38: the note on option (c) blamed "forgetting i² = −1"; the slip is multiplying real parts and imaginary parts separately. Rewritten.
- All other lines correct as they stand (solutions, notes, facts, topics, difficulty).

##### Paper 2 (13 audited, 12 by script)
Changes:
- **Q1 replaced** (tp-09-05, medium, key C). The past question (UP TGT 2004, p1073 Q331, a cos A = b cos B ⇒ isosceles or right angled) is the same question as Expected PGT 1 Q24 (same stem, same options). Now: if (a + b + c)(b + c − a) = 3bc, then A = 60° (distractors 90°, 120° sign slip, 30° misread of cos A = ½).
- **Q55 replaced** (tp-17-01, medium, key B). The past question (UP TGT 2011, p1219 Q451: A+B 12, B+C 15, C+A 20 days; A alone) has the same skeleton as Expected TGT 3 Q6 (UP TGT 2013: three pair-times; R alone), an exact past question. Now: pipes A and B fill in 20 h and 30 h, C empties in 15 h; all open ⇒ 60 h (distractors: C ignored 12 h, wrong pipe subtracted 20 h, C added 6⅔ h).
- **Q61 replaced** (tp-07-05, medium, key B). The checker's question "area between x² = 4y and y = 4" had the skeleton of LT 2025 Q34 (area between a parabola and its latus rectum, a chord perpendicular to the axis) and of Expected TGT 3 Q90 (parabola and a line). Now: area of the smaller region between x² + y² = 4 and x + y = 2 = π − 2 (distractors π, 3π + 2, 2π − 2).
- Empty notes filled: Q8 (144, 256), Q15 (45), Q47 (5.00, 5.25), Q66 (π/4, π/8, π/3).
- Q5, Q27, Q53, Q59, Q74, Q87 correct as they stand; their repairs checked against the book.
- **Past-question count of paper 2 falls from 35 to 33** (UP TGT 2011 27 → 26, UP TGT 2004 8 → 7; units Commercial 1 → 0, Trigonometry 2 → 1). The paper's `source` text in `exp-tgt-2026-2.json` ("35 questions asked in earlier papers (27 … and 8 …) and 55 new") must be updated to 33 (26 and 7) and 57 new.

##### Paper 3 (16 audited, 15 by script)
Changes:
- **Q75 replaced** (tp-04-05, easy, key D). The checker's "order of the matrix [[0, −1], [1, −1]]" asked the same thing as Expected TGT 2 Q42 (order of 3 in U(10)), Expected TGT 4 Q17 and UP TGT 2026 Q85 / UP TGT 2021 Q23 / LT 2025 Q66: find the order of a given element, in another group. Now: in an abelian group with o(a) = 3, o(b) = 4, o(ab) = 12 (distractors 7 added, 4 larger, 1 g.c.d.).
- **Q23 replaced — not on the audit list.** Its "length of the tangent from (5, 1) to x² + y² + 6x − 4y − 3 = 0" (new) has the same skeleton as the audited past question T2 Q27 (UP TGT 2011, tangent from (2, −3) to 2x² + 2y² = 1). I kept the past question in paper 2 and changed this new one (tp-11-04, easy, key D): circle concentric with x² + y² − 4x + 6y − 3 = 0 through (1, 1) is x² + y² − 4x + 6y − 4 = 0. If the coordinator merges only audited numbers, the alternative is to replace T2 Q27 instead.
- Empty notes filled: Q17 (both distractors refuted with ℓ = 2, n = 8, m = 2√2), Q62 (√2, 3, 2), Q84 (both distractors tested on x² − 3x + 2 = 0).
- Q25: the note on option (a) said only "sign slip in the slope"; 3x − 2y = 5 does not even pass through (3, −2). Rewritten.
- Q4, 7, 18, 22, 26, 33, 38, 39, 45, 47, 78 correct as they stand. Past count of paper 3 unchanged (30).

##### Doubtful, left as they are (for the coordinator)
1. **T2 Q74** (UP TGT 2011, cost-of-living index = Σpₙq₀/Σp₀q₀ × 100) has the same correct formula as **Expected TGT 4 Q7** (Laspeyres' index, new, not under audit); the asks differ (cost of living vs the name Laspeyres). If zero overlap is wanted, change T4 Q7 rather than lose this past question.
2. **T2 Q66** (|a + b| = |a − b| ⇒ angle π/2, UP TGT 2011): the same fact is the key pair of the "not correctly matched" item **LT 2025 Q68**; kept because the solved item is a four-pair match.
3. **T3 Q7** (Cramer, UP TGT 2010) and **UP TGT 2026 Q24** both solve a 3 × 3 system (different system; the 2026 item asks only z). The tp-02-04 slot has no unused skeleton left in the ten papers, so the authentic past question was kept.
4. **T1 Q57** (general solution of sin²θ = ¼) sits next to UP TGT 2026 Q69 (sin θ = ½), Expected TGT 2 Q41 (tan θ = √3) and Expected PGT 2 Q7 (tan θ tan 2θ = 1, same answer nπ ± π/6): same stem frame, a different equation and standard result.
4a. **T1 Q37** (UP TGT 2009, cos of the angle between 2i + 2j − k and 6i − 3j + 2k = 4/21) has the same value as Expected PGT 2 Q54 (angle between the planes 2x + y − 2z = 5 and 3x − 6y − 2z = 7, cos⁻¹ 4/21): different vectors and a different ask (planes), a coincidence of numbers.
5. **T3 Q25** (normal to an ellipse at (3, −2), UP TGT 2010) and **Expected TGT 1 Q8** (normal to 2y + x² = 3 at (1, 1), UP TGT 2016): same frame, different curve and topic; both past.
6. **T3 Q84** (UP TGT 2010) and **Expected TGT 4 Q22**: both "the equation whose roots are …" (general composite roots vs reciprocals of a numeric quadratic).
7. Siblings with a different ask, kept: T1 Q12 vs LT 2025 Q120 (union of subgroups); T3 Q78 vs LT 2025 Q140 (equal powers ⇒ relation of exponents); T1 Q79 vs LT 2018 Q42 (two crossing curves and a vertical line); T1 Q49 vs UP TGT 2026 Q86 and Expected TGT 5 Q31 (parabola vs circle vs pair-of-lines condition; Q49 shares the options "a + b = 0" and "a = b, h = 0"); T1 Q51 vs UP TGT 2021 Q64 (hemispherical shell vs solid hemisphere); T1 Q35 vs Expected TGT 3 Q34 and UP TGT 2026 Q50 (height vs time of flight vs range); T1 Q26 vs Expected PGT 1 Q76 (which group is not / is cyclic, different groups); T3 Q38 vs UP TGT 2026 Q23 (three events vs two); T1 Q52 vs UP TGT 2026 Q93 and Expected TGT 4 Q47 (a cross product vs a unit normal and a moment).
8. **T1 Q22** is the paper's only "hard" item but is closer to medium (LCM, then one congruence); relabelling would break paper 1's 80/9/1 mix.
9. **T3 Q18** (Cantor set) is at the upper edge of the TGT syllabus, though the notes page tp-05-02 teaches it.

##### Seen outside the audit list (not changed)
- Expected TGT 3 Q90 (area between y = x² and y = 2x + 3) has the skeleton of UP TGT 2021 Q6 (area cut off from 4y = 3x² by 2y = 3x + 12).
- Expected TGT 4 Q17 (order of (1 + i)/√2) repeats the ask of Expected TGT 2 Q42; it is on the paper-4 audit list.

##### Files
`verify.py`, `verify_new.py` (answers), `fmtcheck.py` (format), `sim.py`, `sim_new.py`, `bytopic2.py`, `grep.py` (repeats), `crop.py`, `crop2.py`, `img/` (book pages), `build_fixed.py` (writes the three fixed files from the audit lines; the only line not on the audit list is T3 Q23).

### Final audit of the questions written during the checks, TGT papers 4–5

#### Final audit of TGT papers 4–5: 22 November 2026

Audited: the 86 questions the checkers wrote, replaced or repaired in Expected TGT 4 (`audit/tgt-4.jsonl`, 33 lines) and Expected TGT 5 (`audit/tgt-5.jsonl`, 53 lines). The audit lines are identical to `mockck/tgt-k/mock.checked.jsonl` and to the questions now in `data\mq\exp-tgt-2026-4.json` / `-5.json` (checked by script; only TGT 5 Q20's solution differs in the app, where the build already dropped the ₹ signs from the math).

Output: `tgt-4.fixed.jsonl` (6 lines) and `tgt-5.fixed.jsonl` (7 lines), full lines in the audit format, same `n`, topic, level, difficulty and answer index as before, so topic counts, unit counts, difficulty counts and the key balance of both papers are unchanged.

##### How the audit was done
- **Solved blind.** All 86 questions were solved from a dump without keys (`dumpq.py`) before the keys were read: **86 of 86 agree with the key; no wrong answer.**
- **Second way by script** (`verify.py` + `verify_t4.py`, `verify_t5.py`; sympy 1.14, exact fractions, brute force, numeric geometry). Each check computes the true value or tests each statement and requires that exactly one of the four options is right and that it is the keyed one. **78 of the 86 audited questions checked by script, 78 pass.** The other 8 are definitions or statements checked by hand: TGT 4 Q26, Q34, Q59; TGT 5 Q8, Q12, Q27, Q33, Q37. The 10 new questions written in this audit were checked the same way: 9 by script (all pass), TGT 4 Q59 by hand.
- **Past questions against the book** (page images rendered with the crop box set to the media box, `clipq.py`, `img/`): TGT 4 Q3 (p909 Q613), Q11 (p561 Q412), Q16 (p441 Q82, options continue in the right column), Q44 (p1106 Q153), Q53 (p984 Q180), Q80 (p1031 Q106), Q87 (p1053 Q224); TGT 5 Q1 (p650 Q881), Q7 (p651 Q886), Q18 (p88 Q510), Q22 (p323 Q2093), Q44 (p515 Q158), Q63 (p66 Q380), Q68 (p273 Q1817), Q78 (p588 Q563). All 15 match the book (stem, options, tag); the repairs listed in their flags are fair ("None of these" replaced by the true value or a real distractor, options re-ordered, misprints such as $\sin^2(a + b)$ read as $\sin^2(a + y)$). The book's key is wrong in TGT 5 Q7 ($2\pi$, the signed integral; the area is $4\pi$) and is "None of these" in TGT 4 Q3, Q16 and Q53 (whose "None" option the mock replaced by the true value); in the other 11 the book's key is the mock's answer. The mock keys are right in every case. (TGT 4 Q20 and TGT 5 Q48 were replaced for repeating, so their pages were not re-read.)
- **Repeats** (`sim.py`: TF-IDF of question + options against every question of all 13 question files in `data\mq` and against the question's own paper; `bytopic.py`: every question of the same topic id in all 13 files listed and read, `top4.txt`, `top5.txt`). Rule used: a question is a repeat if it is the same question, the same exercise with other numbers (or another function/set of the same shape, solved by the same steps), or the same stock definition. A different definition or formula in a familiar stem, or an application of a fact that another paper asks as recall, is not a repeat (those cases are listed under "doubtful" below).
- **Format** (`fmt.py`): valid JSON, 13 fields in order, four distinct options, answer 0–3, even `$` in every field, braces balanced in math, no `$$` in stems or options, no `align`/`\displaystyle`, no `\,'`, no ₹ inside math, no "None/All of these", every note non-empty, topic ids in `topics.txt`. Run on the audit files and on the fixed lines: the fixed lines are clean.

##### Expected TGT 4 — 33 audited, 30 by script, 0 wrong answers, 6 lines changed

| Q | What was wrong | Now |
|---|---|---|
| 17 | Order of $\frac{1+i}{\sqrt2}$ in $\mathbb C^*$ (= 8): same exercise, another root of unity, as UP TGT 2021 Q23 and LT 2025 Q66 (order of $-i$); UP TGT 2021 Q82 also computes $\left(\frac{1+i}{\sqrt2}\right)^8 = 1$. | New: $a^8 = e$ and $a^{12} = e$ ⇒ greatest possible order of $a$ is $\gcd(8, 12) = 4$ (options 24, 96, 12, **4**). |
| 20 | Past question (UP TGT 2005, p201 Q1320): $n(A' \cap B')$ from $n(U), n(A), n(B), n(A \cap B)$ — the "neither" count of UP TGT 2026 Q21 with other numbers. | New: $n(A) = 4$, $n(B) = 6$ ⇒ least possible $n(A \cup B)$ = **6** (options 10, 4, 2, 6). The paper now has 24 past questions (was 25). |
| 41 | C.G. of a circular arc $\frac{a\sin\alpha}{\alpha}$: word for word Expected PGT 1 Q79 (in the app). | New: C.G. of a uniform wire triangle = **incentre of the triangle formed by the mid-points of the sides** (distractors: centroid, incentre, circumcentre of $ABC$). The other standard bodies are already in the app (solid cone, with the hollow cone as its distractor; solid and hollow hemisphere; semicircular lamina; triangular lamina). |
| 56 | $\int\frac{x\,dx}{(x - 1)(x - 2)}$: same partial-fraction exercise as Expected TGT 2 Q34 ($\int\frac{dx}{(x-1)(x-2)}$, TF-IDF 0.97) and Expected PGT 1 Q16 ($\int\frac{2x+3}{(x-1)(x+2)}dx$). | New: the partial-fraction form of $\frac{x + 5}{(x - 1)^2(x + 2)}$ is **$\frac{A}{x-1} + \frac{B}{(x-1)^2} + \frac{C}{x+2}$** (repeated factor; constants $-\frac13, 2, \frac13$ and the integral given in the solution, checked by differentiation). |
| 59 | Derived set of $(0, 1)$: same exercise with another set as Expected TGT 2 Q36 (derived set of $\{\frac1n\}$). | New: every finite subset of $\mathbb R$ is **closed** (no limit points, $S' = \emptyset \subseteq S$); distractors open / neither / dense. Gap line (limit points, derived sets) kept. |
| 88 | Note (d) said "the negative of the previous option"; $m\cot\beta - n\cot\alpha$ is the negative of (b), not of (c). | Note (d) corrected. Question, answer and solution unchanged. |

Kept after checking (TGT 4): Q3, 11, 12, 16, 23, 26, 30, 31, 34, 42, 44, 45, 50, 51, 53, 54, 60, 61, 67, 70, 72, 76, 78, 79, 80, 83, 87 — correct, one right option each, notes accurate, fit their topic and level. Q16's notes (b), (d) and Q53's notes (b), (c) only say "no correct step gives this" for the book's own distractors; acceptable, not changed.

##### Expected TGT 5 — 53 audited, 48 by script, 0 wrong answers, 7 lines changed

| Q | What was wrong | Now |
|---|---|---|
| 5 | Element in row 2, column 1 of $AB$ for two $2 \times 2$ matrices: the same exercise (even the same position) as UP TGT 2026 Q101. | New: $A$ is $3 \times 4$ and both $A^TB$, $BA^T$ are defined ⇒ $B$ is **$3 \times 4$** (distractors $4 \times 3$, $3 \times 3$, $4 \times 4$, each with its failing product). |
| 20 | Solution had ₹ inside math (`$= ₹750$`, `$= ₹150$`). | Solution rewritten with ₹ outside the math; question unchanged. |
| 32 | $\lim_{x\to1}\frac{x^4 - 1}{x - 1} = 4$: same exercise and same answer as UP TGT 2026 Q120 ($\lim_{x\to2}\frac{x^2-4}{x-2} = 4$). | New: $\lim_{x\to0}\frac{3^x - 2^x}{x}$ = **$\log_e\frac32$** (distractors $\log_e 6$, 1, $\frac32$). |
| 47 | Note (c) was empty. | Note (c) filled in ($n = 3$: sum 8, not 9). |
| 48 | Past question (UP TGT 2003, p440 Q78): $\left|\frac{z - 5i}{z + 5i}\right| = 1$ lies on the $x$-axis — same exercise as LT 2018 Q146 ($\left|\frac{z-3}{z+3}\right| = 2$) and LT 2018 Q40 ($|z + i| > |z - i|$, the same bisector). | New: multiplicative inverse of $3 + 4i$ = **$\frac{3 - 4i}{25}$**. The paper now has 28 past questions (was 29). |
| 55 | $\lim\frac{1^2 + 2^2 + \dots + n^2}{n^3} = \frac13$: word for word UP TGT 2021 Q75. | New (medium): $a_1 = \sqrt2$, $a_{n+1} = \sqrt{2 + a_n}$ ⇒ $\lim a_n$ = **2** (monotone and bounded; $-1$ is the rejected root). A first draft, $\lim\left(\frac{n!}{n^n}\right)^{1/n}$, was dropped because Expected TGT 1 Q44 ($n^{1/n}$) teaches the same Cauchy ratio method. |
| 75 | Latus rectum of $\frac{x^2}{25} + \frac{y^2}{16} = 1$ ($\frac{2b^2}{a}$): same exercise as Expected PGT 1 Q15 (latus rectum of $9x^2 - 16y^2 = 144$), which came into the app after the TGT 5 check; that check had itself treated ellipse and hyperbola eccentricity as one exercise. | New: $SP + S'P$ for a point of the ellipse = **$2a$** (distractors $2b$, $2ae$ = $SS'$, $\frac{2a}{e}$ = distance between directrices). |

Kept after checking (TGT 5): Q1, 4, 7, 8, 9, 11, 12, 14, 15, 16, 18, 21, 22, 25, 26, 27, 28, 30, 31, 33, 35, 37, 39, 40, 43, 44, 45, 46, 50, 51, 52, 54, 57, 60, 63, 66, 67, 68, 76, 78, 81, 83, 84, 85, 87, 89.

Each new question was checked against all 13 question files in the app and its own paper (TF-IDF + reading by topic): no repeat found. New TGT 4 and new TGT 5 questions do not overlap each other.

##### Doubtful or for the coordinator
- **Kept on purpose (different fact in a familiar stem, or application vs recall):** TGT 4 Q60 $\frac{d}{dx}\log_a x$ (UP TGT 2026 Q73 asks $\frac{d}{dx}\log x$; Expected TGT 5 Q74 asks $\frac{d}{dx}a^x$); Q76 product of the $n$th roots of unity (Expected TGT 3 Q87 asks their sum); Q78 $R_i \to R_i + kR_j$ (Expected TGT 1 Q66: rows interchanged); Q51 $z^n + z^{-n} = 2\cos n\theta$ (applied in UP TGT 2021 Q25 and Q82); Q83 intersecting chords with numbers (UP TGT 2026 Q6 states the theorem); Q67 empirical mode with numbers (LT 2025 Q107 states the relation); Q70 HM from AM and GM (Expected TGT 3 Q56: $G^2 = AH$); Q23 involutory $2 \times 2$ (Expected TGT 2 Q85: definition). TGT 5 Q35 "called orthogonal if" — the stem "A square matrix is called … if" is also in UP TGT 2026 Q54 (idempotent), Expected TGT 1 Q77, 2 Q85, 3 Q66; different definition, but the family is crowded. TGT 5 Q31 ($\Delta = 0$ for a pair of lines; UP TGT 2026 Q86 circle, Expected TGT 1 Q49 parabola), Q12 (GFR; Expected TGT 1 Q25 IMR, UP TGT 2026 Q110 CDR), Q16 (range with numbers; UP TGT 2026 Q50 states the formula), Q68 (rank of a numeric $3 \times 4$ matrix; LT 2025 Q78 rank of a $4 \times 4$ matrix of squares). If "same skeleton" is read more strictly, TGT 5 Q35 and Q31 are the first candidates.
- New TGT 4 Q41 (triangular wire) has the stem shape of UP TGT 2026 Q76 (triangular lamina → centroid) but asks a different body with a different answer.
- New TGT 5 Q32 ($\frac{a^x - 1}{x} \to \log_e a$) and TGT 5 Q74 ($\frac{d}{dx}a^x$) rest on the same fact $\log_e a$; different questions.
- TGT 5 Q40 (relations from a 3-set to a 2-set: 64) has the same number as LT 2025 Q91 (reflexive relations on a 3-set: 64); different count, kept.
- TGT 5 Q12: GFR base taken as women aged 15–49 (some texts use 15–44); only one option mentions women, so the key is safe.
- Past-question counts drop by one in each paper (TGT 4: 24; TGT 5: 28) because two past items repeated solved papers in the app; the brief asks for new questions in that case.
- The other expected papers (1–3 and PGT 1) were read as they are in `data\mq` now; if their audits replace questions, re-run `simfixed.py` and `bytopic.py` on these fixed lines.

##### Files (all in this folder)
`dumpq.py`, `full.py` (dumps), `verify.py` + `verify_t4.py` + `verify_t5.py` (second-way checks; they use the fixed line when one exists), `sim.py` / `simfixed.py` (TF-IDF), `bytopic.py` + `top4.txt` / `top5.txt` (same-topic listings), `fmt.py` (format), `clipq.py` + `img/` (book clips), `build.py` (writes the two fixed files), `tgt-4.fixed.jsonl`, `tgt-5.fixed.jsonl`.

### Final check across all papers: five last replacements

#### Final check: cross-paper replacements, 22 November 2026

Five questions of the expected papers repeated a question of another file in `data\mq` and were replaced. Output: `pgt-1.fixed.jsonl` (Q5, Q45, Q60), `tgt-3.fixed.jsonl` (Q90), `tgt-4.fixed.jsonl` (Q7): full lines in the `mock.checked.jsonl` format. Each keeps its `n`, topic, level, difficulty and answer index (so key letters, topic, unit and difficulty counts of both papers are unchanged); `origin` "new"; `flag` "replaced in the final check: repeated <paper and question>". Before writing, the five old lines in `mockck/…/mock.checked.jsonl` were checked to be the questions now in the app (same stem, options, answer, topic).

| Paper · Q | Old question (repeat of) | New question | Answer (index) |
|---|---|---|---|
| PGT 1 · Q5 (tp-08-01, easy) | Order and degree of $[1 + (y')^2]^{3/2} = k\,y''$ (Expected TGT 2 Q54, same DE) | $y = x\log x$ $(x > 0)$ is a solution of: $xy' = y$ / $xy' + y = x$ / **$xy' - y = x$** / $y' - \frac yx = x$ | (c), 2 |
| PGT 1 · Q45 (tp-07-03, hard) | $\int_0^\pi\frac{x\sin x}{1+\cos^2x}dx$ (Expected TGT 5 Q73, same integral) | $\int_0^1\frac{x^4(1-x)^4}{1+x^2}dx$: $\frac{22}7$ / $\frac{22}7+\pi$ / $\frac{22}7-\frac\pi4$ / **$\frac{22}7-\pi$** | (d), 3 |
| PGT 1 · Q60 (tp-06-04, medium) | Angle between $y^2 = x$ and $x^2 = y$ at $(1, 1)$ (Expected TGT 3 Q2: same exercise with $y^2 = 4x$, $x^2 = 4y$) | Cardioid $r = a(1 - \cos\theta)$: angle $\phi$ between radius vector and tangent: $\frac{3\theta}2$ / **$\frac\theta2$** / $\frac\pi2-\frac\theta2$ / $\frac\pi2+\frac\theta2$ | (b), 1 |
| TGT 3 · Q90 (tp-07-05, medium) | Area between $y = x^2$ and $y = 2x + 3$ (UP TGT 2021 Q6: area cut off $4y = 3x^2$ by $2y = 3x + 12$, same skeleton) | Area bounded by $y = \tan x$, its tangent at $x = \frac\pi4$ and the $x$-axis: **$\frac12\log_e2-\frac14$** / $\log_e2-\frac14$ / $\frac12\log_e2$ / $\frac12\log_e2+\frac14$ | (a), 0 |
| TGT 4 · Q7 (tp-16-08, easy) | "Laspeyres' price index number is" $\frac{\sum p_1q_0}{\sum p_0q_0}\times100$ (Expected TGT 2 Q74: cost of living index, the same formula as answer) | Money wage ₹12,000, cost of living index 160 (base 100): real wage = ₹4,800 / **₹7,500** / ₹19,200 / ₹75 | (b), 1 |

Each new line has its own solution, four option notes (the right option's reason, and for each wrong one the slip that produces it) and a fact.

##### How the new questions were chosen
- **Repeat search over all 15 question files in `data\mq`** (both levels, solved and expected; Expected PGT 3 appeared in the folder during this check and was included): `bytopic.py` lists every question of the same topic id (tp-08-01, 07-03, 06-04, 07-05, 16-08, and the neighbours 08-02/03/04, 07-01/02/04, 05-05, 06-07, 07-07), all read; `grep.py` searched texts and solutions for the planned items (real/money wage, cost of living, cardioid, polar, radius vector, $x^{2/3}$, $\cos^3$, astroid, "is a solution", $x\log x$, $22/7$, $x^4(1-x)^4$, $y = \tan x$, "tangent to it", log-sin, …); `sim.py` (TF-IDF of stem + options) ran each new line against every question of every file and against the other new lines. Highest scores: Q5 0.73 (UP TGT 2021 Q13, order of a DE: shared words only), Q45 0.65 (Expected TGT 1 Q9, a triangle with 22 and 7), Q60 0.57 (LT 2018 Q66, tangent to a cycloid), TGT 3 Q90 0.65 (GIC 2026 Q60, ∫dx/(x⁴ − 1)), TGT 4 Q7 0.20. None is the same question, skeleton or stock item.
- **Syllabus items no file asks:** verifying that a given function solves a DE (8.1 notes, OD2); the polar angle $\tan\phi = r\frac{d\theta}{dr}$ (6.4 notes, polar curves); a polynomial-division definite integral; the region between a curve, its tangent and the axis; real wages (16.8 notes, "real wage = money wage ÷ CLI × 100").
- **Drafts dropped because the folder already has them:** $\int_0^1\tan^{-1}\frac1{1-x+x^2}dx$ (split-and-King skeleton of Expected PGT 3 Q46); $\int_0^\infty\frac{x\,dx}{(1+x)(1+x^2)}$ (LT 2018 Q61); $\int_0^\infty e^{-ax}\sin bx\,dx$ (Expected PGT 3 Q84); $\int_0^{\pi/2}\frac{\sin^2x}{\sin x+\cos x}dx$ (rests on Expected PGT 3 Q12); DE of ellipses or of circles touching an axis (Expected PGT 3 Q33, UP PGT 2026 Q125; formation items are crowded); tangent-intercept of the astroid (its first step is Expected TGT 3 Q37, $\frac{dy}{dx} = -\tan t$ for $x = a\cos^3t$); plain area under $y = \tan x$ from 0 to $\frac\pi3$ (an area-under-one-curve item like UP TGT 2026 Q56; the curve–tangent–axis region keeps Mock T3's "area between curves" emphasis).

##### How each answer was verified (`verify.py`, sympy 1.14 + mpmath, run with `python -I`)
Every option is tested; the check passes only if exactly one option is right and it is the keyed one. Result: **5 of 5 pass**; the slip named in each wrong option's note was also recomputed (**21 of 21 note checks pass**).
- **PGT 1 Q5:** $y = x\log x$ substituted in all four equations; residuals (LHS − RHS) simplify to $x$, $2x\log x$, $0$, $1 - x$, and are tested numerically at 5 points: only (c) is an identity.
- **PGT 1 Q45:** sympy's exact integral $= \frac{22}7 - \pi$; `sp.div` confirms quotient $x^6-4x^5+5x^4-4x^2+4$, remainder $-4$; mpmath quadrature $0.00126448926735$; the four options evaluate to 3.142857, 6.284450, 2.357459, 0.001264: only (d) matches.
- **PGT 1 Q60:** $r\frac{d\theta}{dr} - \tan\frac\theta2$ simplifies to 0 (with $\theta = 2u$); independently, $\phi$ computed as the angle between the position vector and the Cartesian tangent vector of $(r\cos\theta, r\sin\theta)$ at 7 values of $\theta$ in $(0, 2\pi)$ agrees with the polar formula and equals only option (b). Notes: $\psi = \theta + \phi = \frac{3\theta}2$ (mod $\pi$) checked from the tangent direction; $\frac\pi2 + \frac\theta2$ is $\phi$ for $r = a(1 + \cos\theta)$.
- **TGT 3 Q90:** tangent $y = 1 + 2\left(x - \frac\pi4\right)$ meets the axis at $\frac\pi4 - \frac12 > 0$; tangent below the curve on $\left[0, \frac\pi4\right]$ (41 sample points); area by vertical strips $= \frac12\log 2 - \frac14$, by horizontal strips ($x = \tan^{-1}y$ to the tangent, $0 \le y \le 1$) $= \frac12\log 2 - \frac14$, by quadrature $0.09657359028$; options 0.096574, 0.443147, 0.346574, 0.596574: only (a).
- **TGT 4 Q7:** exact fractions: $\frac{12000}{160} \times 100 = 7500$; options parsed from the text (4800, 7500, 19200, 75): only (b); distractors $12000 \times 0.4$, $12000 \times 1.6$, $\frac{12000}{160}$ confirmed.

##### Format (`fmt.py`, plus `mockck/pgt-1/texck.py` for KaTeX sanity)
Valid JSON, 13 fields in order, four distinct options, answer 0–3, notes non-empty, topic ids in `topics.txt`, level PGT/TGT matching the paper, origin "new", flag text as required, even `$` everywhere, balanced braces and `\left`/`\right`, no `$$` in stems or options, no `align`/`\displaystyle`, no `\,'`, no ₹ inside math, no "None/All of these", numeric options not ascending (TGT 4 Q7: 4800, 7500, 19200, 75; the values of PGT 1 Q45 and TGT 3 Q90 are not ascending either). **0 issues.**

##### For the coordinator
- PGT 1 Q45 ($\frac{22}7 - \pi$) is a well-known curiosity; a student who knows it answers at once, but it is a genuine long-division computation (hard) and no file asks anything like it.
- TGT 3 Q90 uses $\int\tan x\,dx = \log|\sec x|$, which Expected PGT 2 Q17 asks as recall (match list), and a tangent slope; application, not repeat. TGT 4 Q7 uses the cost of living index that Expected TGT 2 Q74 defines; application, not repeat. PGT 1 Q60's cardioid $r = a(1 + \cos\theta)$ is in UP PGT 2026 Q9 (volume), a different question.
- If any file in `data\mq` changes again, re-run `sim.py` and `bytopic.py` on these fixed lines.

##### Files (this folder)
`build.py` (writes the three fixed files from the source lines), `verify.py` (second-way checks), `fmt.py` (format), `sim.py` (TF-IDF), `bytopic.py` (same-topic listing), `grep.py` (text search), `syl.py` (syllabus PDFs: scanned, no text layer).

### Final audit of the questions written during the checks, PGT papers 1–2

#### Final audit of PGT papers 1–2: 22 November 2026

Audited: the 41 lines of `audit/pgt-1.jsonl` (9) and `audit/pgt-2.jsonl` (32), each read inside its whole paper (`mockck/pgt-k/mock.checked.jsonl`, identical to `data\mq\exp-pgt-2026-k.json` in stem, options, key and topic; `cmp.py`). Outputs: `pgt-1.fixed.jsonl` (4 lines: Q10, Q27, Q32, Q86) and `pgt-2.fixed.jsonl` (9 lines: Q31, Q32, Q45, Q48, Q53, Q54, Q77, Q78, Q88). Every fixed line keeps its `n`, `topic`, `level`, `difficulty` and `answer` index, so key letters, topic, unit and difficulty counts, the match/multi-statement counts and the past-question counts (PGT 1: 25; PGT 2: 32 = 24 UP PGT 2021 + 8 UP PGT 2011) are unchanged. PGT 1 Q5, Q45 and Q60 were not touched; their new versions (`audit/c/pgt-1.fixed.jsonl`) were included in the repeat search.

##### Method
- **Answers.** I solved each of the 41 from stem and options before reading the key; all 41 agree with the key. **No wrong answer was found** (also none in the six versions I replaced). `verify.py` then tests all four options of every question in its final form and passes only if exactly one option is true and it is the keyed one: **41 of 41 checked by script, 41 pass** (sympy integrals, series, eigenvalues, inverses, factorisation, solveset, rotation invariants; brute force over S₄, over all maps {1,2,3}→{a,b}, over ℤ₂³ and over n < 200 for the binomial ratio; random tests for linearity, for tr(AB − BA), for the director sphere (random orthonormal frames), for cos⁻¹x + cos⁻¹y + cos⁻¹z = π and for the sphere between two planes (random α, β); a 1500 × 1500 grid for the centre of gravity of the holed disc; exact fractions). Only the new P2 Q48 rests partly on reasoning (its four statements are standard; the two counterexamples are evaluated in the script). The slips named in the new notes were recomputed too (off-by-one ratio → n = 15, ratio 1:3:5 → n = 7, A − Aᵀ and Aᵀ − A in P1 Q32, the "angles to the horizontal" slip W cos β/sin(α + β) in P2 Q78).
- **Past questions.** All 7 past questions in the set were read on my own renders of the book (crop box reset to the media box; `clip.py`, images in `img/`): P1 Q10 (p1104 Q140, UP PGT 2016), P2 Q7 (p1032 Q110), Q18 (p870 Q379), Q31 old (p1031 Q107), Q32 (p835 Q175), Q43 (p945 Q1017, UP PGT 2021), Q47 (p254 Q1716, UP PGT 2021); plus the replacement P2 Q31 new (p1032 Q111, PGT 2011; not in `pools/excluded.tsv`, in `pools/pgt-mock2.tsv`, used by no other mock). Stems and options match the book apart from the flagged repairs, which are fair: P1 Q10 "none of the above" → a²/4b; P2 Q7 book key (d) "None of these" is wrong (nπ ± π/6 is printed as (b)), "None of these" → the trap (2n + 1)π/6; P2 Q32 book key (d) is right but its solution's (1/3, 1/3) is wrong, the true point (1/3, −1/3) now printed and (−1/7, −1/7) → (1/3, 1/3); P2 Q31 old 67/8 → 65/8. Book keys agree with the file wherever the book's key is correct.
- **Repeats.** `sim.py`/`sim2.py`: TF-IDF (words + bigrams, and character 4-grams) of every question against every maths question of all 15 files in `data\mq` (both levels, solved and expected; Expected PGT 3 included), with the TGT fixed lines of `audit/a`, `audit/b`, `audit/c` and the PGT 1 lines of `audit/c` overriding the app versions, plus `mocks/pgt-3` (and `mockck/pgt-3`), `mocks/pgt-4`, `mocks/pgt-5` (re-run after mocks 4 and 5 were rewritten); top matches read. `bytopic.py`: every question of every file in each of the 34 topic ids involved listed and read (`bt1.txt` … `bt6.txt`, `bt45.txt`); `grep.py` for stock items (onto, trace, latus rectum, area of an ellipse, "which is linear", sin 1/x, idempotent/nilpotent, strings, Z₂, a : b : c, …). Rule applied: a repeat is the same question, the same stem frame and procedure with only the numbers or instance changed, or the same stock fact; a sibling with a different ask or a different standard object is kept (and listed below when close). Each new line was put through the same search: no repeat (closest: P2 Q78 ↔ mock P4 Q50, a rod on the same two planes; P2 Q31 ↔ Expected PGT 3 Q7, a : b : c from exradii).
- **Format.** `fmtcheck.py` on the 41 final lines (valid JSON, 13 fields in order, four distinct options, answer 0–3, topic in `topics.txt`, level PGT, even `$`, no `$$` in stems/options, no `\displaystyle`/`align`, no `\,'`, no ₹ in math, balanced braces and `\left…\right`, no None/All of these, four non-empty notes, numeric option sets not in order) and the PGT 2 checker's `texck.py`/`matck.py` on both fixed files: 0 problems (the script's command whitelist flagged `\dim`, `\mapsto`, `\Delta`, all valid KaTeX). On the audit input the only format failures were 9 empty option notes in 6 lines.

##### Paper 1 (9 audited, 9 by script)
Changes:
- **Q32 replaced** (tp-02-01, medium, key A). "If AB = A and BA = B, then A² =" is the skeleton of **UP TGT 2021 Q39** ("If AB = B and BA = A, then A² + B² =": both matrices idempotent by the same two-line argument). Now: A = [[2, 4, −6], [0, 3, 5], [2, 1, 7]] written as P + Q (P symmetric, Q skew-symmetric); Q = ½(A − Aᵀ) = [[0, 2, −4], [−2, 0, 2], [4, −2, 0]]. Distractors: ½(Aᵀ − A), A − Aᵀ (½ missing), P. (The recall "every square matrix is sym + skew" is LT 2018 Q104 / UP TGT 2026 Q124; this asks the computation.)
- Empty notes filled: Q10 (2a/b: top taken at x = a/b by dropping the 2 of 2bx, then doubled), Q27 (15: off-by-one ratio (n − r)/r; 12: no integer r), Q86 (1: the trace is always 0).
- Q15, Q23, Q38, Q63, Q84 correct as they stand (solutions, notes, facts, topics, difficulty). Q10 matches the book (p1104 Q140).

##### Paper 2 (32 audited, 32 by script)
Changes:
- **Q31 replaced** (tp-09-05, easy, key D) by another past question. "The sides of a triangle are 13, 14, 15; the radius of its incircle" (UP PGT 2011, p1031 Q107) is the skeleton of **UP TGT 2021 Q84** (sides 15, 20, 25 → inradius). Now the pool question p1032 Q111 (PGT 2011): A = 30°, B = 60° ⇒ a : b : c = 1 : √3 : 2 (options re-ordered; book key (a) correct). Distractors 1 : 2 : √3 (b, c swapped), 1 : 2 : 3 (sides ∝ angles), 1 : √2 : 3 (not a triangle). The past count stays 32 (8 from PGT 2011). (p1031 Q108, sin²A + sin²B + sin²C = 2, was not used: same value and trick as LT 2018 Q87.)
- **Q48 replaced** (tp-05-07, easy, key C, still a multi-statement item with the same four option strings). Its statements b (|x − 2| not differentiable at 2) and c (x|x| differentiable at 0) are the two statements of **LT 2018 Q44** (|x| not differentiable at 0; x|x| differentiable everywhere). Now: statements on sums: (a) f, g continuous ⇒ f + g continuous [T]; (b) f + g continuous ⇒ f, g continuous [F: [x], −[x] at 1]; (c) f differentiable, g not ⇒ f + g not differentiable [T]; (d) neither differentiable ⇒ f + g not differentiable [F: |x|, −|x|] → "a and c only".
- **Q53 replaced** (tp-03-02, easy, key D). "dim {(x, y, z, t) ∈ ℝ⁴ : x + y + z + t = 0, x − y = 0}" is the skeleton of **UP PGT 2026 Q78** (dim {(a, b, c, d) : a = 3c, b = 4d} in ℝ⁴: two independent conditions in ℝ⁴, answer 2). Now: a vector space of dimension 3 over ℤ₂ has 2³ = 8 vectors (distractors 6 = 2·3, 9 = 3², 3 = the dimension). No file asks a finite vector space; P2's other tp-03-02 items (Q49 dim ℂ over ℝ, Q90 dim of a span) are different.
- **Q54 numbers changed** (tp-13-02, easy, key B). The planes 2x + y − 2z = 5 and 3x − 6y − 2z = 7 gave the same numbers as **Expected TGT 1 Q37** (UP TGT 2009: angle between 2i + 2j − k and 6i − 3j + 2k: moduli 3 and 7, cosine 4/21), the earlier auditor's doubtful item 4a. Now x + 2y + 2z = 5 and 3x − 6y + 2z = 7: cos θ = |−5|/21, θ = cos⁻¹(5/21); same distractor types (sin⁻¹, one modulus only: cos⁻¹(5/7), 90°); avoids 16/21 (Expected PGT 3 Q15) and 8/21.
- **Q78 replaced** (tp-15-02, medium, key D). "A weight W hangs from strings of 3 m and 4 m fixed 5 m apart; tensions" is the skeleton (weight on two strings, perpendicular here as there, tensions by Lami) of **Expected PGT 1 Q64** and **Expected TGT 3 Q54** (10 N on strings at 30° and 60° to the vertical). Now: a smooth sphere of weight W between two smooth planes inclined at α and β; reaction of the α-plane = W sin β/sin(α + β). Distractors: W sin α/sin(α + β) (the other plane), W cos β/sin(α + β) (reactions taken at α, β to the horizontal), W sin β (only when α + β = 90°).
- Empty notes filled: Q32 (both non-points refuted on the two lines (2x − y − 1)(x − 2y − 1)), Q45 (2 and −1 refuted with x = 1, y = −1, z = 1 and x = y = z = ½), Q77 (π/3), Q88 ((2y, −2x) fails at (1, 0)).
- Correct as they stand: Q2, Q7, Q10, Q11, Q16, Q18, Q33, Q34, Q37, Q39, Q41, Q43, Q47, Q55, Q57, Q59, Q68 (each matrix satisfies exactly one property; exactly one option is the full matching), Q70, Q76, Q79, Q80, Q82, Q89.

##### Doubtful, left as they are (for the coordinator)
1. **P2 Q18** (focus of y² − 4y − 8x + 4 = 0, UP PGT 2011) and **UP TGT 2021 Q90** (directrix of y² + 4x + 4y + 2 = 0): same completing-the-square procedure, a different element asked. Kept as a sibling (authentic past question); if zero overlap is wanted, replace Q18 by another tp-11-05 item.
2. **P2 Q47** (inverse of the rotation matrix f(x), UP PGT 2021) beside **UP PGT 2026 Q19** (same 2 × 2 matrix, A·adj A = kI) and **Expected TGT 4 Q32** (properties of A_α, one being A_αᵀ = A_α⁻¹): different asks; kept.
3. **P2 Q34** (DE of lines through the origin) beside **LT 2025 Q38** (DE of y² = 4ax): formation of a one-parameter family, a different family; kept. (Mock P5 Q60 is LT 2025 Q38 itself; see below.)
4. **P2 Q76** (disc with a hole) beside **Expected TGT 5 Q19** (triangular lamina with GBC removed): same method, different body; kept.
5. **P1 Q15** (latus rectum of 9x² − 16y² = 144) is the hyperbola of **Expected TGT 4 Q1** (its asymptotes) and the axes-swapped one of Expected TGT 3 Q77 (its eccentricity): different asks; kept.
6. **P1 Q23** (range of T) beside UP PGT 2026 Q48 (kernel of a given T); **P1 Q86** (tr(AB − BA) = 0) beside GIC 2026 Q91 (AB − BA skew-symmetric for symmetric A, B); **P2 Q89** (area of a triangle from coordinates) beside Expected TGT 1 Q50 (recall of ½|a × b|): different asks; kept.
7. **P2 Q32** is labelled hard (two linear equations after ∂S/∂x = ∂S/∂y = 0); closer to medium, kept to hold the paper's 6 hard items. **P2 Q7** keeps the trap (2n + 1)π/6 (contains π/2, where tan θ is undefined): mathematically single-answer; its answer nπ ± π/6 is also that of Expected TGT 1 Q57 (sin²θ = ¼), a different equation. **P2 Q43** (director sphere of a central conicoid) is filed under tp-13-03 (The Sphere), the nearest page.

##### Repeats with Expected PGT 3, mock P4, mock P5 (logged only; those papers give way)
- P2 Q2 (elements of order 2 in S₄) = original mock P3 Q64; P2 Q77 ≈ original mock P3 Q70 (DCs with l + m + n = 0, l² + m² − n² = 0); P2 Q39 ≈ original mock P3 Q9 (rectangular lamina): all three already replaced in `mockck/pgt-3` and `exp-pgt-2026-3.json`.
- P2 Q70 (Gauss: ∬ r·n dS over x² + y² + z² = a²) ≈ **Expected PGT 3 Q23** (Gauss over the same sphere, another field, answer 0): same frame.
- P1 Q63 (which map is linear; (x + 1, y) among the options) ≈ **Expected PGT 3 Q44** (statements: is (|a|, 0) linear? is (a + 1, b + c, 0) linear?): same ask.
- Expected PGT 3 Q13 (dim {p ∈ P₃ : p(1) = p′(1) = 0} = 2) has the same skeleton as UP PGT 2026 Q78 (the reason P2 Q53 was replaced).
- P2 Q55 (λ₁λ₂ = ab − h² under rotation) ≈ **mock P4 Q48** (a′ + b′ = a + b under rotation): same stock fact (rotation invariants).
- P2 Q78 new (sphere between two smooth planes α, β) beside **mock P4 Q50** (rod with its ends on the same two planes): same set-up, different body and ask.
- P2 Q34 beside **mock P5 Q60** (DE of y² = 4ax), which is **LT 2025 Q38** itself (P5 must change it anyway).
- P1 Q23 (range of a given T) beside **mock P5 Q12** (rank of a given operator on ℝ³); P2 Q68 beside **mock P5 Q61** (identify a 3 × 3 matrix as idempotent); P1 Q84 beside mock P5 Q37 (number of equivalence relations): siblings.
- P2 Q31 new (a : b : c from the angles) beside Expected PGT 3 Q7 (a : b : c from r₁ = 2r₂ = 3r₃): sibling.

##### Seen outside the audit list (not changed; for the coordinator)
- **PGT 1 Q37** (sin 10° sin 50° sin 70° = 1/8, new) is **Expected TGT 3 Q60** (sin π/18 sin 5π/18 sin 7π/18, UP TGT 2013): the same question in radians. PGT 1 Q37 should be replaced.
- **PGT 1 Q58** (Σ n³/n! = 5e, new) is **Expected TGT 2 Q49** (1 + 2³/2! + 3³/3! + … = 5e, UP TGT 2011): the same series. PGT 1 Q58 should be replaced.
- **PGT 1 Q64** (10 N on strings at 30° and 60° to the vertical, new) is **Expected TGT 3 Q54** (the same, new). One of them should be replaced.
- (PGT 1 Q45 = Expected TGT 5 Q73 was already handled in `audit/c`.)

##### Files (this folder)
`build.py` (writes the two fixed files from the audit lines), `final.py` (the 41 in final form), `verify.py` (answers), `fmtcheck.py` (format), `corpus.py`, `sim.py`, `sim2.py`, `bytopic.py`, `grep.py` (repeats; outputs `sim*.txt`, `bt*.txt`), `clip.py` and `img/` (book pages), `cmp.py` (app file vs checked file), `dump.py`.

### Final audit of the questions written during the checks, PGT paper 3

#### Final audit of PGT paper 3: 22 November 2026

Input: `audit/pgt-3.jsonl` (23 questions: Q2, 8, 9, 16, 17, 19, 20, 22, 23, 42, 43, 52, 58, 59, 60, 64, 69, 70, 71, 77, 81, 85, 86), read against the whole paper `mockck/pgt-3/mock.checked.jsonl`, the checker's `log.md`, and the app file `data\mq\exp-pgt-2026-3.json`. All 23 audited lines are identical to the app file (q, options, answer, explanation, notes, fact, topic). Helper folder: `audit/e/` (scripts `ck.py`, `crop.py`, `booksearch.py`, `sim.py`, `texck.py`, `fix.py`; book crops in `img/`).

Output: `pgt-3.fixed.jsonl` with 6 changed lines (Q8, 9, 16, 70, 77, 86). No answer index, stem or option was changed.

##### Correctness
- I solved all 23 before reading `answer`: all 23 agree with the keys. **No wrong answer.**
- **Checked by script: 23 of 23** (`ck.py`, sympy 1.14 from `ckAQ/lib`), each testing all four options:
  - Q2 zero matrix and closure of each subset under random combinations (only the symmetric set passes); Q8 symbolic determinant = 0 and numeric values; Q9 disc slicing gives $\frac3{10}Ma^2$; Q16 all four centres of gravity by integration (hollow cone, paraboloid, sector, quadrant), then every option parsed: only (b) is the full matching; Q17 all subgroups of $\mathbb Z_{60}$ enumerated (12 in all, one of order 12); Q19 roots of $\sin x+\sin2x+\sin3x$ on $[0,4\pi)$ by bisection compared with each option's family (only (c) matches); Q20 moments with signed forces ($AC=30$, $CB=50$); Q22 general solution of $\vec a\times\vec u=\vec0$ plus the counterexample; Q23 flux computed directly on the parametrised sphere (= 0); Q42 numeric roots of random quartics; Q43 400 random rank-2 products (ranks 1 and 2 only); Q52 partial sums for $n\le40$; Q58 conjugate transpose; Q59 force balance with the geometry, three data sets (tension = (d) only; the wall reaction = (a), as its note says); Q60 residual of each option; Q64 permutation powers (also confirms notes: (b) $=\sigma^2$, (d) $=\sigma^{-1}$); Q69 determinants; Q70 direction vectors; Q71 vector sum (6 N along $OA_5$); Q77 brute force over $S_4$, $S_5$, $D_8$, $C_{12}$ with both conjugation conventions (no $a\ne e$; (a), (b), (c) each fail somewhere); Q81 derivative of each option; Q85 `sympy.vector` curl/grad/Laplacian of every List-I entry, then every option parsed: only (d); Q86 $(x^2+4)y'^2$ against each option at nine $(\theta,n)$ points.
- Solutions, facts and notes read line by line: all correct. Empty or vague notes fixed (below).

##### Past questions against the book (page images, crop box set to the media box)
| Q | Book | Tag | Result |
|---|---|---|---|
| 23 | p428 Q368 | (GIC) PGT 2015 | '+', '=' and $\pi$ are missing in the print; the working prints $\iint_s xy\,dydz+y^2dzdx+yz\,dxdy$ and $\iiint(y+2y+y)$. Restoration right; options $4\pi a^3$, $\frac43\pi a^3$, $\frac{16}3\pi a^3$, 0 (re-ordered); book key 0 correct. |
| 42 | p61 Q354 | UP PCS (Pre) 1997, PGT 2013 | stem and options $k,-k,q,-q$ match (re-ordered); key $k$ correct. |
| 58 | p277 Q1838 | PGT 2013 | first row $0,3,5-2i$ (top band) read with the crop box removed; matrix and the four options match (re-ordered); key skew-Hermitian correct. |
| 70 | p939 Q978 | (GIC) Lecturer 2015 | stem and options as printed; key $90^\circ$ correct. |
| 77 | p233 Q1561 | PGT 2013 | stem matches; book options $a=b$, $a=e$, $b=e$, None of these; "None" replaced by $b^2=e$ (not forced: any $b$ works once $a=e$). Key $a=e$ correct. |
| 86 | p510 Q128 | GIC Lecturer 2015 | $-$, $+$, $\theta$ missing in the stem; the working prints $x=\sec\theta-\cos\theta$, $y=\sec^n\theta-\cos^n\theta$; $(x^2+4)$ is forced by the options $y^2+4$. Book options $n^2(y^2+4)$, $x^2(y^2+4)$, $y^2+4$, None; "None" replaced by $n(y^2+4)$. Key correct. |

##### Match-the-list items
- **Q16** (centres of gravity): a. hollow cone $\frac h3$ from the base (III), b. solid paraboloid $\frac{2h}3$ from the vertex (I), c. sector $\frac{2a\sin\alpha}{3\alpha}$ (IV), d. quadrant $\frac{4\sqrt2a}{3\pi}$ (II): every pairing right, each List-II entry fits exactly one body, exactly one option (b) gives the full matching. **Label easy was not fair** (four less familiar bodies; the paraboloid and the quadrant's $\sqrt2$ need a short computation): relabelled **medium**.
- **Q85** (vector calculus): a. $2\vec a$ (III), b. $2\vec r$ (IV), c. 6 (I), d. $\vec0$ (II): every pairing right, exactly one option (d). Label easy is fair: four standard results for $\vec r$, and scalar/vector types alone eliminate two options.

##### No-repeat check
- `sim.py`: TF-IDF (words + word bigrams) of each audited stem and options against 1622 items: all of `data/mq/*.json` except `exp-pgt-2026-3.json` (7 solved papers, expected TGT 1–5, expected PGT 1–2), `mocks/pgt-4/mock.jsonl`, `mocks/pgt-5/mock.jsonl`, and paper 3's other 67 questions; top 6 per question read. Then every corpus question with the same topic id read beside each audited one (`sim_topic.txt`), plus phrase searches.
- **No repeat found** (none with paper 4 or 5 either, so nothing to list for those papers). Close neighbours read and kept:
  - Q20 (unlike parallel forces, $C$ outside $AB$) vs expected PGT 1 Q72 and expected TGT 3 Q86 (like forces, $C$ between): the other case of the theorem, with the external-division trap; not the same skeleton with new numbers.
  - Q17 (exactly one subgroup of order 12 in $C_{60}$) vs expected TGT 3 Q50 and TGT 2 Q22 (number of all subgroups $=d(n)$): different ask.
  - Q23 vs expected PGT 2 Q70 (same theorem and surface; field $\vec r$, answer $4\pi a^3$): different field, answer by symmetry (the checker noted it too).
  - Q77 vs LT 2018 Q103 / GIC 2026 Q99 ($a^5=e$, $aba^{-1}=b^2$, order of $b$): same conjugation-of-powers tool, different relation and ask.
  - Q2 vs mock P4 Q55 (which pair of subspaces of $M_2(\mathbb R)$ gives a direct sum): different ask. Q69 vs mock P5 Q46 ($\lambda$ making a matrix singular): different. Q58 vs mock P4 Q17 (statements on Hermitian diagonals): different. Q60 vs expected TGT 3 Q45 and mock P5 Q60: same task (form the DE), different family. Q81 vs expected TGT 1 Q40 / UP PGT 2026 Q20: Q81 needs completing the square first.
- Book (`booksearch.py`, text-layer search; formulas there are garbled, so this is a search, not a proof): no match for the new Q71 (hexagon), Q52 (series), Q59 (sphere and wall), Q16 (paraboloid, sector), Q17. **Q8 is book p292 Q1913** (Rajasthan TGT 2015, UPPCS (Pre) 2003; options 0, 3, $\log_e xyz$, $\log_e(x+y+z)$), labelled new; it is in no mock pool and no app paper, so it is not a repeat; recorded in its flag.
- Note: `mocks/pgt-4/mock.jsonl` changed on disk during this audit (its Q8 list items); the check was re-run on the newer file with the same result.

##### Format
`texck.py` on all 23 lines (fixed versions where changed): 13 fields in order, four distinct options, answer 0–3, four non-empty notes, topic ids in `topics.txt`, level PGT, no "None/All of these", even `$`, no `$$` in stems/options, no `align`/`\displaystyle`/`\,'`/₹ in math, balanced braces, `\left`/`\right` and `\begin`/`\end`: 460 math segments, 0 problems.

##### Changes (`pgt-3.fixed.jsonl`)
| Q | Was | Now |
|---|---|---|
| 8 | notes (c), (d) empty | (c) $\log x+\log y+\log z$ is the sum of the common row, not the determinant; (d) sign slip on the diagonal product 1. Flag records the book duplicate p292 Q1913. |
| 9 | note (d) "Twice the true value" named no slip | "Uses $mr^2$ instead of $\frac12mr^2$ for each disc, which doubles the true value." |
| 16 | difficulty easy; solution used $a$ both for the parabola $y^2=4ax$ and the radius | difficulty **medium**; parabola written $y^2=4kx$ |
| 70 | difficulty medium (one step); notes (a), (b) empty | difficulty **easy**; notes say $\cos\theta=0$ for directions $(0,0,1)$, $(1,0,0)$ |
| 77 | note (c) empty | "Not forced: $a=e$, but $b$ can be any element, so $a=b$ fails whenever $b\ne e$." |
| 86 | note (a) empty | the factor in front of $y^2+4$ is $n^2$, from differentiating $\sec^n\theta$, $\cos^n\theta$ |

The Q16/Q70 swap keeps the paper at easy 32 / medium 44 / hard 14 (hard items and the key letters, A 22, B 23, C 22, D 23, unchanged). In the app file the visible changes are the notes of Q8, 9, 70, 77, 86 and the explanation of Q16 (the app has no difficulty field).

##### Doubtful / for the coordinator
- Labels kept but borderline: Q23 easy (Gauss's theorem plus a symmetry step is close to medium); Q64 medium (one power of a cycle, close to easy); Q52 hard (one idea, $S_n=S_{n-1}+n^2$). Each is defensible; changing them would need further swaps.
- Q52 is labelled new but is the well-known IIT-JEE (1988) series item; it is in no app paper and was not found in the book.
- Outside the 23: the app file's Q80 stem differs from `mock.checked.jsonl` (app: "If $P_n=\left(1+\frac1{n^2}\right)\allowbreak\cdots$, then $\lim P_n^{1/n}$"; checked file: the limit written in one formula). Same question; noted only.

### Final audit of the questions written during the checks, PGT paper 5

#### Final audit of PGT paper 5: 23 November 2026

Input: `audit/pgt-5.jsonl` (35 lines: Q3, 4, 6, 7, 9, 12, 18, 21, 25, 30, 32, 33, 34, 35, 38, 39, 45, 46, 50, 51, 52, 60, 62, 65, 67, 69, 75, 76, 79, 81, 83, 84, 86, 88, 89), read inside the whole paper `mockck/pgt-5/mock.checked.jsonl` (12:20) with the checker's `log.md`, and against the app file `data\mq\exp-pgt-2026-5.json` (12:25). All 35 audited lines equal the checked file field for field, and equal the app file in question, options, key, notes, fact and topic; the only difference is the app's Q51 explanation, which splits one long formula further for phone width (same text otherwise).

Output: `pgt-5.fixed.jsonl`, 16 changed lines (Q3, 4, 6, 12, 30, 34, 38, 39, 50, 51, 60, 65, 76, 79, 83, 86). Every line keeps `n`, `topic`, `difficulty`, `level`, `origin` and `answer`. Helper scripts in `audit/f/`: `verify.py` (answers), `crop.py` (book crops, crop box set to the media box, images in `img/`), `sim.py` (TF-IDF), `bytopic.py` (same-topic listing, output `bytopic.out.txt`), `fmt.py` (format), `cmp.py` (audit vs checked vs app), `fix.py` (builds the fixed file from the audit file, reproducible).

##### Correctness
- I solved all 35 from stem and options first; all 35 agree with the keys. **No wrong answer.**
- **Checked by script: 35 of 35** (`verify.py`, sympy 1.14 from `ckAQ/lib`, numpy): every option of every question is evaluated and exactly one must be true, the keyed one. Q3 divergence for each a; Q4 factorisation of the pair and the distance; Q6 50 random hexagons; Q7 each option substituted in $y''-2y'+y=x$; Q9 brute force on random sets; Q12 matrix power; Q18 each option substituted; Q21 random a, b; Q25 quadrature; Q30 residual of each option on random ellipses; Q32 slopes of each option; Q33 washer integral = $2\pi^2a^2b$; Q34 count in $\mathbb Z_n$; Q35 random θ; Q38 implicit slope of each option against the equation; Q39 $u^2/4g$; Q45 each option tested as an "if and only if" on 301 vector pairs (parallel, antiparallel, zero, random); Q46 $AB=O$ solved for random non-singular $A$ (only $B=O$); Q50 tangent slopes 1, $-\frac12$; Q51 numeric roots of random cubics; Q52 300 random maps $\mathbb R^4\to\mathbb R^m$ on dependent triples (also one-one maps: images always dependent); Q60 residual on $y=e^{cx}$; Q62 eigenvalues 1, 2, 4; Q65 grid maximum; Q67 moments by cross products; Q69 brute force on 12 points; Q75 $S_3$ with all six subgroups, each option tested as a sufficient condition; Q76 random force pairs, each option tested as a necessary condition; Q79 tangent vectors; Q81 partial derivative of the determinant in each parameter; Q83 implicit derivative at random points; Q84 brute force over all arrangements; Q86 all integer pairs in $[-2,2]^3$ with both products zero; Q88 solve $|\lambda\vec d|=6$; Q89 derivative of each option. Final run on the fixed lines: 35 OK, 0 problems.
- **Q86 failed the check as it stood**: options (a) $\vec a\perp\vec b$ and (b) $\vec a\parallel\vec b$ are, read literally, the two hypotheses themselves ($\vec a\cdot\vec b=0$, $\vec a\times\vec b=\vec0$), and they also hold when a vector is $\vec0$ (the zero vector is parallel and perpendicular to every vector), so three options were true. Fixed (below).
- Solutions and facts read line by line: all correct. The notes the checker left empty (16 notes in 14 lines; Q34's is replaced with the question) are filled; two notes that named the wrong slip are rewritten (Q38 (b), Q83 (a)). Each new note was checked (e.g. Q38 (a) from $1-\cos2x=2\cos^2x$ gives $\tan y+\tan x=c$; Q79 (d) with $\frac{dy}{dt}=2t$ gives dot product 1; Q51 (d) from dropping $3\alpha\beta\gamma$ in $\sum\alpha^3$; Q30 (d) fails on $x^2+y^2=1$).

##### Past questions against the book (my own page images, crop box = media box)
All 16 past questions in the set were read on the page. Stems and options match the book apart from re-ordering and the flagged repairs, and every repair is fair (each "None of these" became a real wrong option; one correct option in every case). The book's printed key agrees with the file in all 16.

| Q | Book | Tag | Note |
|---|---|---|---|
| 3 | p421 Q334 | PGT 2004 | (d) "None of the above" → 0; key (b) −2 |
| 4 | p837 Q184 | PGT 2004 | options re-ordered; key (c) $\sqrt{5/2}$ |
| 9 | p182 Q1151 | PGT 2000 | (d) None → 10; key (b) $5^2$ |
| 18 | p447 Q123 | PGT 2002 | (b), (c) swapped, (d) None → $-\frac32-2i$; key (a) |
| 21 | p877 Q421 | PGT 2002 | (c) printed "$\frac1{e_2^2}=-1$", read as $\frac1{e_2^2}-1$ (fair); (d) None → $e_2^2-1$; key (b) |
| 35 | p466 Q232 | PGT 2002 | (d) None → tan θ; key (a) sec θ |
| 38 | p767 Q1425 | PGT 2002 | book (a) and (c) are the same equation; replaced as flagged; key (b) |
| 39 | p1114 Q195 | PGT 2004 | no g in the book; "(g = 9.8 m/s²)" needed since 2.40 m (g = 10) is an option; key (c) 2.45 |
| 45 | p379 Q95 | PGT 2004 | options re-ordered; key (c) |
| 50 | p837 Q188 | PGT 2002 | options re-ordered; key (a) 3 |
| 51 | p286 Q1890 | PGT 2004 | (d) None → −3b; key (c) $a^3$ |
| 65 | p593 Q393 | PGT 2002 | (d) None → $e^{-1/e}$; key (b) |
| 69 | p112 Q676 | PGT 2004 / TGT 1999 | "7 to which" → "7 of which"; (d) None → 199; key (b) 185 |
| 75 | p181 Q1145 | PGT 2003 | "Set H … a, b ∈ G" and "a is non-empty" repaired as flagged; (d) None → aH = Ha; key (c) |
| 81 | p289 Q1902 | PGT 2002 | as printed; key (b) p |
| 83 | p528 Q234 | PGT 2002 | (d) None → the negative of the key; key (b) |

Match-the-list: none of the 35 audited lines is a match-the-list item (the paper's three, Q16, 74, 85, were not changed by the checker).

##### No-repeat check
- `sim.py`: TF-IDF (words + bigrams) of each audited stem and options against 1,735 items: every question of `data\mq\*.json` except `exp-pgt-2026-5.json` (seven solved papers, expected TGT 1–5, expected PGT 1–3, and `exp-pgt-2026-4.json`, which appeared at 12:28 and equals `mockck/pgt-4/mock.checked.jsonl` of 12:26 in every question and option), `mockck/pgt-4/mock.checked.jsonl`, and the other 89 questions of paper 5. Top 7 per question read (`sim.out.txt`, `sim.fixed.out.txt` after the fixes).
- `bytopic.py`: every corpus and paper-5 question with the same topic id read beside each audited one (`bytopic.out.txt`, 821 lines).
- **One repeat found and fixed: Q34** (below). No other audited question is the same question, the same skeleton with new numbers, or the same stock item as one in the corpus or in its own paper.
- Close neighbours read and kept (different ask or a different standard result):
  - Q60 (DE of $y=e^{cx}$) vs expected PGT 2 Q34 (DE of lines through the origin) and expected PGT 3 Q60 ($y=\sin(x+c)$): same task, different family, kept as the PGT 3 auditor and the checker did. Note: $\log y=cx$ is a line through the origin in $(x,\log y)$, and the option frames are parallel ($xy'=y$ vs $xy'=y\log y$); see "Doubtful".
  - Q30 (two-constant ellipses) vs expected PGT 2 Q4 ($y=ae^{-bx}$), expected TGT 3 Q45, GIC 2026 Q78: different families. Q30 and Q60 are both formation items in paper 5 (expected PGT 3 also has two: Q33, Q60).
  - Q32 (joint equation from the slopes 2, −3) vs LT 2025 Q139 (angle between $y^2-xy-6x^2=0$, which is Q32's distractor (a)): different ask.
  - Q51 (circulant determinant of the roots) vs paper 5 Q11 (circulant of $a-b$, $b-c$, $c-a$: rows add to 0) and GIC 2026 Q56 ($\sum\alpha^3+3\alpha\beta\gamma$): different reasoning and ask.
  - Q62 (product of eigenvalues = det) vs paper 5 Q2 (det($A^2+I$) from eigenvalues $\lambda^2+1$): Q2's step is the spectral mapping; kept.
  - Q3 (solenoidal ⇒ a) vs expected PGT 2 Q64 (irrotational ⇒ a); Q4 vs expected PGT 1 Q34 (condition for parallel lines); Q6 vs UP PGT 2026 Q34 (triangle of forces: $\vec P+\vec Q+\vec R=\vec0$; Q6 asks the resultant of an open chain); Q46 vs UP TGT 2026 Q105 (unique solution of $AX=B$); Q76 vs UP PGT 2026 Q11 (like parallel forces, answer also P = Q); Q83 vs LT 2018 Q63 (separable equation with the same radicals); Q86 vs expected PGT 3 Q22 ($\vec a\times\vec b=\vec a\times\vec c$).
- **PGT mock 4 (gives way; listed only, nothing changed in paper 5 for it): no repeat.** Look-alikes for mock 4's checker: M4 Q58 (pair through O perpendicular to a given pair) vs P5 Q32 (joint equation from given slopes; M4 adds the perpendicular step); M4 Q40 (unit tangent vector of a space curve) vs P5 Q79 (angle between two tangents); M4 Q76 (determinant with rows $b+c$, … $=2\times$ the circulant) vs P5 Q51 and Q11; M4 Q83 (vector sum of the medians) vs P5 Q6 (vector sum round a hexagon). The checker's own list (M4 Q76 vs P5 Q11, M4 Q64 vs P5 Q77, book p837 Q184 now in P5 Q4) still stands.

##### Format
`fmt.py` on the 35 lines (fixed versions where changed) and on the fixed file: valid JSON, 13 fields in the order of the input, four distinct options, answer 0–3, topic ids in `topics.txt`, level PGT, difficulty label, four non-empty notes, no "None/All of these", even `$`, no `$$` in stems/options, no `align`/`\displaystyle`/`\,'`/₹, no non-ASCII inside math, balanced braces, `\left…\right`, `\begin…\end`, only known KaTeX commands: 704 math segments, 0 problems. Q34's new options (6, 12, 5, 3) are not in ascending or descending order. Key letters unchanged, so the paper's key balance (A 23, B 22, C 23, D 22) and difficulty counts (44/40/6) stand.

##### Fit
Topic ids right for all 35 (Q50's pair of tangents is in tp-11-08's blueprint scope "common tangent of two conics, pair of tangents"; Q35's $u=\log\tan(\frac\pi4+\frac\theta2)$ is the inverse-hyperbolic form, tp-10-10). Difficulty labels fair; board style; all at UP PGT level.

##### Changes (`pgt-5.fixed.jsonl`)
| Q | Was | Now |
|---|---|---|
| 34 | "cyclic group of order 12 … $x^8=e$": answer 4. Same numbers and answer as expected TGT 4 Q17 ($a^8=e$ and $a^{12}=e$ ⇒ greatest order 4); in $C_{12}$ the question reduces to exactly that step. | Order 18, $x^{12}=e$: answer 6 (still option (a)); options 6, 12, 5, 3 (degree 12; e left out; 3 = order of $a^{12}$); solution and notes rewritten, fact unchanged; flag says why. Checked by brute force over $\mathbb Z_{18}$; no corpus item with these numbers. |
| 86 | Options (a) $\vec a\perp\vec b$, (b) $\vec a\parallel\vec b$: literally the hypotheses, and true when a vector is $\vec0$ (three true options). | (a) "$\vec a$ and $\vec b$ are non-zero perpendicular vectors", (b) "… non-zero parallel vectors"; notes (a), (b), (d) rewritten; flag says why. Key (c) "$\vec a=\vec0$ or $\vec b=\vec0$" unchanged. |
| 38 | note (a) empty; note (b) "separates the variables the wrong way round" (not what gives $\cot y-\tan x$) | (a) the wrong identity $1-\cos2x=2\cos^2x$; (b) both identities swapped, giving $\operatorname{cosec}^2y\,dy=-\sec^2x\,dx$ |
| 83 | note (a) "the square root is dropped" ((a) is also inverted) | "Inverts the ratio and drops the square root." |
| 51 | note (d) empty | dropping $3\alpha\beta\gamma$ in $\sum\alpha^3$; solution takes the app's phone-width split of the long formula (text unchanged), so applying this line does not undo the app's split |
| 3, 4, 6, 12, 30, 39, 50, 60, 65, 76, 79 | empty notes: Q3 (a), Q4 (b), Q6 (c), Q12 (d), Q30 (d), Q39 (d), Q50 (a), (b), Q60 (d), Q65 (a), Q76 (b), Q79 (a), (d) | filled: the slip that gives the option, or why it fails (Q50 (a), (b) and Q79 (a) come from no standard slip; their notes say why they are wrong) |

##### Doubtful / for the coordinator
- Q60: kept by the precedent above, but it is the closest call in the set: the DE of $y=e^{cx}$ is the "lines through the origin" item of expected PGT 2 Q34 in the variable $\log y$, with a parallel option frame. tp-08-01 is saturated in the corpus (about twenty items: order/degree, "degree not defined", constants in the solution, linear or not, a dozen families), so a replacement would only be another family.
- Q50: labelled hard; it sits at the easy end of hard (three short steps), as the checker said.
- Q33: labelled easy; easy with Pappus's theorem, medium by integration.

### Final audit of the questions written during the checks, PGT paper 4

#### Final audit of PGT paper 4: 23 November 2026

Audited: the 14 questions of `audit\pgt-4.jsonl` (Q4, Q14, Q30, Q35, Q39, Q44, Q46, Q55, Q56, Q67, Q72, Q78, Q79, Q85), read inside the whole paper `mockck\pgt-4\mock.checked.jsonl`, with the checker's `log.md`. Q28 was not touched (another agent replaces it). The 14 audit lines are identical to the checked mock and to the app file `data\mq\exp-pgt-2026-4.json` (stem, options, answer, topic, notes).

Output: `pgt-4.fixed.jsonl` (8 full lines: Q4, Q14, Q39, Q44, Q46, Q67, Q78, Q79). Scripts in this folder: `verify.py` (second-way checks), `fixes.py` (builds the fixed lines from `audit\pgt-4.jsonl`), `sim.py` (TF-IDF against every `data\mq\*.json` file), `grepc.py` + `pats*.txt` (fragment search), `bytopic.txt` (every corpus question of the audited topics, read by hand), `clip.py` + `img\` (book crops, crop box reset to the media box), `final14.jsonl` (the 14 questions in their final form).

##### 1. Answers
- I solved all 14 before reading `answer`: **14 of 14 agree** with the keys. **No wrong answer.**
- **14 of 14 checked by script** (`verify.py`, every option tested, exactly one right in each): Q4 exact fractions (e² of each ratio, both orientations); Q14 sympy substitution of all four options (option (b) implicitly); Q30 sympy on a 3×3 matrix; Q35 root scan of [0, 2π) (8 roots) against the four solution sets; Q39 enumeration of every possible overlap (39..63), testing "always true" and "exact range"; Q44 numeric search for triads of perpendicular generators on six cones plus the trace identity; Q46 sympy expansion (60); Q55 sympy ranks of U + W and U ∩ W; Q56 brute force over Z₁₃; Q67 (new) brute force over all C(12,4) selections (126); Q72 sympy `dsolve` and Wronskian; Q78 (new) 4000 random small integer matrices (S∘T one-one forces only "T one-one") plus the explicit counterexamples; Q79 sympy derivative, f′ at the first positive root of each option's equation, f″ < 0 at x = cos x; Q85 least n with n·1 = 0 in Z₇.

##### 2. Past questions against the book (page images, crop box = media box)
| Q | book | tag | book options | verdict |
|---|---|---|---|---|
| 4 | p873 Q400 | PGT 2009, 2010 | 5/13, 13/5, 6/13, 13/6 | stem faithful; 5/13 (right if b > a) → 12/13: fair repair |
| 14 | p762 Q1407 | PGT 2009 | log y = cx + x², log y = cx² + eˣ, log x = cy + y², None | faithful; 'None' (the right key) → log y = cx + c²: fair |
| 39 | p110 Q665 | PGT 2010 | x = 39, x = 63, 39 ≤ x ≤ 63, None | faithful; the writer's replacement of 'None' was faulty (change below) |
| 46 | p130 Q793 | PGT 2010 | 30, 60, 40, None | faithful; 'None' → 20: fair |
| 67 | p110 Q666 | PGT 2010 | n=8,r=4; n=9,r=3; n=1,r=5; None | faithful, but replaced (repeat, below) |
| 78 | p339 Q2184 | PGT 2009 | (0,0,c), (a,0,0), (0,b,0), None | faithful, but replaced (repeat, below) |
| 79 | p591 Q579 | PGT 2009 | x = cos x, x = sec x, x = cot x, None | faithful; 'None' → x = tan x: fair |

##### 3. Syllabus (UP PGT 2026, read from `maths-syl\pgt-2026.pdf`)
All 14 final questions are inside it. Notes: Q14 is Clairaut's equation, the standard home of "singular solutions"; Q44 is in "equations of sphere, cone and cylinder" (GIC 2026 asked perpendicular generators too); Q39 (sets) is not named in the text but is the blueprint's tp-01-01 slot and was asked in UP PGT 2026; new Q78 tests "composite of linear transformations", named in the syllabus. **Q85** (characteristic of Z₇) is borderline: the syllabus says only "Ring and Field with examples", and no question in the whole book (1248 pages, all exams) asks a characteristic. I kept it because the characteristic belongs to the chapter on rings, integral domains and fields (before ideals) and is asked here of the standard example Z₇; the ideal item that the checker removed belongs to the separate chapter on ideals and quotient rings.

##### 4. No repeats
Corpus: all 17 files of `data\mq\` (7 solved papers and the 10 expected papers) = 1631 questions, with PGT 4's own 76 other questions included. TF-IDF (top 6 of each), fragment search (characteristic, kernel, nullity, oplus/direct sum, sin⁴, (kA), Fermat, consecutive, coffee, eccentricities, solution space, perpendicular generators, one-one, ∘, no two/adjacent, ...), and reading every corpus question of the 15 topics involved (`bytopic.txt`).

Repeats found (both replaced, see §5):
- **Q67** (UP PGT 2010: ⁿCᵣ₋₁ = 36, ⁿCᵣ = 84, ⁿCᵣ₊₁ = 126 → n, r) has the skeleton of **Expected PGT 1 Q27** (three consecutive binomial coefficients in the ratio 1 : 2 : 3 → n): same data type, same two ratio equations (n − r + 1)/r and (n − r)/(r + 1).
- **Q78** (UP PGT 2009: kernel of T(a,b,c) = (a,b), options as sets) has the skeleton of **UP PGT 2026 Q48** (Ker T of T(x,y,z) = (3x, x − y, 2x + y + z), options {(0,0,x)}, {(x,y,y)}, {(0,0,0)}, {(x,x,x)}), a solved paper students have practised. TF-IDF missed it; found by the reading by topic.

Similar items judged and kept (different ask or different idea, not the same skeleton):
- Q46 (coefficient of x⁵ in (1+x²)⁵(1+x)⁴) vs Expected PGT 5 Q57 (coefficient of t²⁴ in (1+t²)¹²(1+t¹²)(1+t²⁴)): both multiply expansions, but PGT 5's turns on multiplying out the two sparse factors first; Q46 pairs terms of two full expansions. Not a renumbering of each other. Kept (a genuine UP PGT 2010 item) — **judgement call**.
- Q14 vs Expected PGT 1 Q83 (singular solution of y = px + p²) and Expected PGT 3 Q26 (general solution of xp² − yp + a = 0): Q14 needs the substitution Y = log y to reach Clairaut's form and asks the general solution. Kept.
- Q44 vs GIC 2026 Q86 (plane cuts yz + zx + xy = 0 in perpendicular generators) and LT 2025 Q95 (tangent planes; self-reciprocal cone): different results of the cone chapter. Kept.
- Q72 vs Expected PGT 5 Q31, PGT 2 Q49, UP PGT 2026 Q16 (dimension of a matrix space / of ℂ over ℝ): different space and idea (solution space of an ODE). Kept.
- Q30 vs Expected TGT 1 Q33 (|kA|), TGT 1 Q46 ((A⁻¹)ᵀ), GIC 2026 Q117 ((adj A)⁻¹): different stock facts. Q35 vs Expected TGT 1 Q57 (sin²θ = ¼): Q35 needs the reduction sin⁴x + cos⁴x = 1 − ½sin²2x. Q39 vs Expected TGT 4 Q20 (least n(A ∪ B)) and UP TGT 2021 Q50 (Hindi/English, both = 50): different asks. Q55 vs Expected PGT 5 Q58 (dim(W₁ + W₂)). Q56 vs Expected PGT 1 Q80 (remainder of 3¹⁰⁰ mod 7). Q85 vs Expected PGT 1 Q85 (statements on Z₇, Z₉, fields). All kept.
- New Q67: no corpus item above TF-IDF 0.2; the gap idea differs from Expected PGT 1 Q31 (round table, no two girls together: an arrangement) and Expected PGT 3 Q3 (ARRANGE). New Q78: highest match Expected PGT 3 Q67 (0.51, "T: ℝ³ → ℝ² is always not one-one": a dimension argument) — shared vocabulary only; no corpus or PGT 4 item on composites being one-one/onto (the composite items in the corpus only compute g∘f or (g∘f)⁻¹).

##### 5. Changes (number: what was wrong → what it is now)
- **Q39** (two correct options): the writer's replacement of 'None of these', $13\le x\le63$, is itself always true (it follows from $39\le x\le63$; verified by enumeration). → option (a) is now $63\le x\le76$ (not always true: x = 50 is possible), with its note; flag extended. Key unchanged (C).
- **Q67** (repeat, §4) → **new**, tp-01-03, medium, key C: number of ways of selecting 4 of 12 chairs in a row with no two adjacent: ⁹C₄ = 126 (options 210, 495, 126, 35 = ¹⁰C₄, ¹²C₄, ⁹C₄, ⁷C₄; brute force 126).
- **Q78** (repeat, §4) → **new**, tp-03-03, easy, key D: if S∘T is one-one then T is one-one (options: S one-one, S onto, T onto, T one-one; counterexamples in the solution).
- Option notes that were empty or imprecise (the brief asks for four notes): Q4 notes (a), (b) (13/6 and 6/13 give e² = 133/169); Q14 note (b) made exact, note (d) added; Q44 note (b) now says why abc = 0 is neither necessary nor sufficient; Q46 note (c) (5·4 + 10·1: coefficient of x in (1+x)⁴ taken as 1); Q79 notes (a) (x = tan x is where sin x / x is stationary), (c) (at x ≈ 0.86, x² ≠ cos²x), (d) (x sec x = 1 inverted).
- Unchanged and sound: Q30, Q35, Q55, Q56, Q72, Q85 (solutions, notes, facts, topic, difficulty all correct).

Format of the 8 fixed lines: valid JSON, same fields and order, same n / topic / difficulty / answer, four distinct options, four non-empty notes, even `$`, no `$$` in stems or options, no `align`/`\displaystyle`/`\,'`/₹ in math, no 'None of these'; the checker's `texck.py` reports no problems on the 14 final questions (widest inline formulas ≈ 20 em, pre-existing, at relation signs where KaTeX breaks).

##### 6. Effect on the paper (for whoever applies the fixes)
- Past questions 22 → **20** (9 UPPSC GIC 2021, 7 UP PGT 2009 incl. Q4 "2009, 2010", 4 UP PGT 2010); new 68 → **70**. The `paper.source` text of `exp-pgt-2026-4.json` ("22 questions … 8 from UP PGT 2009 and 5 from UP PGT 2010 … and 68 new") must be updated, and Q67 and Q78 lose their `src.from` and "asked in …" labels. Past per unit: Algebra 6 → 5, Linear Algebra 1 → 0 (blueprint P4 wants 6 and 2; the brief prescribes new items for repeats).
- Topic counts, difficulty counts (46 / 38 / 6) and the key letters are unchanged.

##### 7. Doubtful
- Q46 vs Expected PGT 5 Q57 (§4): kept on judgement; if a stricter reading is wanted, Q46 is the one to replace (PGT 4 gives way).
- Q85: borderline syllabus fit (§3); kept.
- Q79 is labelled hard but is three standard steps (arguably medium); Q14 hard is fair (substitution idea). Labels left to keep the blueprint's 6 hard items.

### Final check across all papers: last replacements

#### Final check: last replacements, 23 November 2026

Eight questions of the expected papers replaced because each repeated another question of `data\mq\`. Source lines: `mockck/<level-k>/mock.checked.jsonl` (equal to the app files in question, options, answer, topic and solution; the app's PGT 5 Q60 also had the auditor's filled note, irrelevant now). Outputs in `audit/h/`: `pgt-1.fixed.jsonl` (Q37, 58, 64, 63), `tgt-3.fixed.jsonl` (Q41, 14), `pgt-4.fixed.jsonl` (Q28), `pgt-5.fixed.jsonl` (Q60). Every line keeps `n`, `topic`, `level`, `difficulty`, `answer` and `key` of the source line (so the key letters and the papers' key balance stand); `origin` "new"; `flag` "replaced in the final check: repeated …"; own solution, four notes (why the option is right, or the slip that gives it) and a fact.

Helper scripts (all in `audit/h/`, reproducible): `make.py` builds the four files from the source lines and asserts the kept fields; `verify.py` (output `verify.out.txt`) checks the answers; `fmt.py` the format; `sim.py` (output `sim.out.txt`) the TF-IDF search; `bytopic.py` (outputs `bt-<topic>.txt`), `grepc.py`, `grepm.py` the corpus searches; `mkrender.py` the KaTeX segment list.

##### The eight replacements

| Paper, Q | Old question (repeat of) | New question | Answer |
|---|---|---|---|
| PGT 1 Q37 (tp-09-02, medium) | $\sin10^\circ\sin50^\circ\sin70^\circ=\frac18$ (expected TGT 3 Q60, UP TGT 2013, same product in radians) | $\operatorname{cosec}10^\circ-\sqrt3\sec10^\circ$; options 2, 8, 4, 1 | (c) 4 |
| PGT 1 Q58 (tp-01-05, hard) | $\sum\frac{n^3}{n!}=5e$ (expected TGT 2 Q49, UP TGT 2011) | $1+\frac1{3\cdot4}+\frac1{5\cdot4^2}+\frac1{7\cdot4^3}+\dots$; options $\log_e3$, $\frac12\log_e3$, $2\log_e3$, $\log_e\frac43$ | (a) $\log_e3$ |
| PGT 1 Q64 (tp-15-02, medium) | 10 N weight on strings at $30^\circ$, $60^\circ$ (expected TGT 3 Q54) | uniform rod $AB$, weight $W$, hinged at $A$ to a wall, held horizontal by a string $BC$ to the wall above $A$, $\angle ABC=30^\circ$: tension; options $2W$, $\frac W{\sqrt3}$, $W$, $\frac W2$ | (c) $W$ |
| PGT 1 Q63 (tp-03-03, easy) | which map $\mathbb R^2\to\mathbb R^2$ is linear (expected PGT 3 Q44, GIC 2015) | $T(x,y)=(3x+y,\ x+2y)$ maps the unit square onto a parallelogram of area; options 7, 5, 6, $\frac15$ | (b) 5 |
| TGT 3 Q41 (tp-07-03, medium) | $\int_0^{\pi/2}\frac{\sqrt{\sin x}}{\sqrt{\sin x}+\sqrt{\cos x}}dx=\frac\pi4$ (expected TGT 2 Q2, King's property, $\sin^{10}$) | $\int_0^1\frac{e^x}{1+e^{2x}}dx$; options $\tan^{-1}e$, $\tan^{-1}e-\frac\pi4$, $\frac12\log_e\frac{1+e^2}2$, $\tan^{-1}e+\frac\pi4$ | (b) $\tan^{-1}e-\frac\pi4$ |
| TGT 3 Q14 (tp-09-04, medium) | $2\tan^{-1}\frac13+\tan^{-1}\frac17=\frac\pi4$ (expected PGT 1 Q75, UP PGT 2016, $\tan^{-1}\frac12+\tan^{-1}\frac15+\tan^{-1}\frac18$) | number of real solutions of $\tan^{-1}\sqrt{x(x+1)}+\sin^{-1}\sqrt{x^2+x+1}=\frac\pi2$; options 1, 0, 2, infinitely many | (c) 2 |
| PGT 4 Q28 (tp-02-03, easy) | determinant with rows $x+1,x+2,x+4$ / … $=-2$ (expected PGT 2 Q62, UP PGT 2021) | $a_{11}C_{21}+a_{12}C_{22}+a_{13}C_{23}$ in a third-order determinant ($C_{ij}$ cofactors); options $\Delta$, $-\Delta$, 0, $\Delta^2$ | (c) 0 |
| PGT 5 Q60 (tp-08-01, easy) | DE of $y=e^{cx}$ (expected PGT 2 Q34: with $\log y=cx$ it is "lines through the origin") | DE of $y=\frac Ax+B$; options $xy''-2y'=0$, $xy''+y'=0$, $xy''+2y'=0$, $y''=0$ (written with $\frac{d^2y}{dx^2}$, $\frac{dy}{dx}$) | (c) $x\frac{d^2y}{dx^2}+2\frac{dy}{dx}=0$ |

Level: the PGT items need PGT tools (odd-power log series, statics of a hinged rod, area factor $|\det A|$ of a linear map, alien cofactors, formation of a DE); the two TGT items are Class XII calculus and inverse functions, at the harder end as paper 3 requires (a substitution that changes the limits; a domain argument). Board style: short stems, four options, no "None of these"; numeric options not in ascending order (checked with values: Q37 2, 8, 4, 1; Q58 1.10, 0.55, 2.20, 0.29; Q64 2, 0.58, 1, 0.5 in units of $W$; Q63 7, 5, 6, 0.2; TGT Q41 1.22, 0.43, 0.72, 2.00; TGT Q14 1, 0, 2, ∞).

##### How each answer was verified (`verify.py`, sympy 1.14 and mpmath from `ckAQ/lib`, run with `python -I`)
Every option of every question is evaluated; exactly one is true and it is the keyed one. **8 of 8 OK.**
- PGT 1 Q37: value to 40 digits = 4.000…; `nsimplify` gives 4; options 2, 8, 1 differ. Notes: $\frac{2\sin20^\circ}{\sin20^\circ}=2$, $\frac{2\sin20^\circ}{\frac14\sin20^\circ}=8$, $\frac{\sin20^\circ}{\sin20^\circ}=1$ computed.
- PGT 1 Q58: `nsum` of $\sum_{n\ge0}\frac1{(2n+1)4^n}$ = 1.0986122886681096914 = $\log 3$; sympy `summation` gives $2\tanh^{-1}\frac12=\log3$; the other three options differ. Notes: $\sum\frac{x^{2n+1}}{2n+1}$ at $\frac12$ = $\frac12\log3$; $\frac1x\log3=2\log3$; $\sum\frac1{n4^n}=\log\frac43$ (all computed).
- PGT 1 Q64: the rod's equilibrium solved as a linear system (forces in $x$, $y$ and moments about $A$, with $W=1$, $AB=2$, $C=(0,2\tan30^\circ)$): $T=W$, $|R|=W$; $\angle ABC=30^\circ$ checked. Notes: weight at $B$ gives $2W$, $\cos30^\circ$ for $\sin30^\circ$ gives $\frac W{\sqrt3}$, no $\sin30^\circ$ gives $\frac W2$.
- PGT 1 Q63: image of the square $(0,0),(3,1),(4,3),(1,2)$, shoelace area 5 = $\det A$. Notes 7, 6, $\frac15$ computed.
- TGT 3 Q41: `mp.quad` of the integrand = 0.43288474161982931214 = $\tan^{-1}e-\frac\pi4$ (sympy's closed form agrees to 20 digits); options evaluate to 1.218, 0.433, 0.717, 2.004. Note (c): $\int_0^1\frac{e^{2x}}{1+e^{2x}}dx$ = 0.716890415242 = option (c).
- TGT 3 Q14: sympy `solve_univariate_inequality`: $\{x(x+1)\ge0\}\cap\{x^2+x+1\le1\}=\{-1,0\}$; both satisfy the equation exactly; a grid scan of $[-4,4]$ (step $10^{-5}$) finds no other point where both terms are defined. Count 2; "infinitely many" false.
- PGT 4 Q28: for the symbolic $3\times3$ matrix $(a_{ij})$ the sum expands to 0, while $\Delta$, $-\Delta$, $\Delta^2$ are not identically 0; also 0 for 200 random integer matrices.
- PGT 5 Q60: residuals on $y=\frac Ax+B$: (a) $\frac{4A}{x^2}$, (b) $\frac A{x^2}$, (c) 0, (d) $\frac{2A}{x^3}$; `dsolve` of (c) gives exactly $y=C_1+\frac{C_2}x$. Notes: $y=A\log x+B$ satisfies (b), $y=Ax+B$ satisfies (d); the sign slip $y''=-\frac{2A}{x^3}$ gives (a), dropping the 2 gives (b).

##### No-repeat search (both levels, all of `data\mq`)
- Same topic: every question of the eight topics in the 17 files listed and read (`bt-tp-09-02.txt` 22, `bt-tp-01-05.txt` 15, `bt-tp-15-02.txt` 14, `bt-tp-03-03.txt` 28, `bt-tp-07-03.txt` 42, `bt-tp-09-04.txt` 17, `bt-tp-02-03.txt` 45, `bt-tp-08-01.txt` 27), plus tp-15-01, 15-03…15-06 for the statics item.
- Text: `grepm.py` searches for each candidate's key forms (cosec / sec with degree angles, special angles, $\frac{1+x}{1-x}$, powers of 4, area / parallelogram / unit square, cofactor, hinge / rod / string / inclined plane, $e^{2x}$ and $\int\dots e^x$, $\tan^{-1}\sqrt{}$, "number of real solutions", $\frac Ax$, $x^2\frac{d^2y}{dx^2}$, dimension / Hom, similar matrices), and `sim.py`: TF-IDF (words, LaTeX commands, numbers, word bigrams) of each new stem and options against 1,637 questions (all 17 files, leaving out only the eight replaced items), top 8 read.
- Candidates rejected on the way because they would repeat: $\dim L(\mathbb R^3,\mathbb R^2)=6$ (= expected PGT 5 Q31, $2\times3$ matrices); $\int_0^1\frac{dx}{\sqrt{1+x}-\sqrt x}$ (same conjugate step as expected TGT 3 Q42, next to it); $\int\frac{\sin x\cos x}{1+\sin^4x}$ (same $\sin x\cos x$ substitution as UP TGT 2021 Q98); $\int_0^{\pi/2}\sin2x\tan^{-1}(\sin x)$ (reduces to $\int2t\tan^{-1}t$, UP PGT 2026 Q116); coefficient of $x^2$ in $(1+x)^{1/x}$ (expansion of expected PGT 2 Q86); $\sum\frac{(\log3)^{2n}}{(2n)!}$ (cosh series of expected PGT 4 Q24); partial-fraction log series (GIC 2026 Q116); $e^x(f+f')$ integrals (expected PGT 1 Q6, UP PGT 2026 Q87, UP TGT 2021 Q18); $\tan^{-1}$-addition equations (the replaced skeleton); principal-value items (expected TGT 4 Q54); other DE families that are disguises of corpus items ($xy=c$, $y=cx^n$, $y=c f(x)$: lines through the origin; $Ae^{x}\cos x+\dots$: expected TGT 3 Q45).
- Closest neighbours of the chosen items, read and judged different:
  - PGT 1 Q37 vs expected PGT 2 Q37 ($\cos^2 48^\circ-\sin^2 12^\circ$), UP PGT 2026 Q3 (minimum of $3\cos x+4\sin x+8$): different identity and ask.
  - PGT 1 Q58 vs expected TGT 5 Q18 ($\log_42-\log_82+\dots$), expected TGT 1 Q74 ($1-\frac12+\frac13-\dots$), expected PGT 4 Q24 (match: $e^2$, $\log\frac32$, $\cosh1$, $\sinh1$), expected PGT 2 Q40 and LT 2025 Q103 (values / formula of $\tanh^{-1}$): none uses the odd-power series $\log\frac{1+x}{1-x}=2(x+\frac{x^3}3+\dots)$ or divides a series by $x$.
  - PGT 1 Q64 vs expected PGT 3 Q59 (sphere against a wall on a string), expected PGT 4 Q50 (rod on two planes), UP PGT 2026 Q28 (two rods on a circle): no hinged rod with a string; the hanging-weight items (TGT 1 Q29, TGT 3 Q54) are gone from PGT 1 with the old Q64.
  - PGT 1 Q63 vs expected PGT 1 Q23 (range), Q71 (matrix in a basis), PGT 2 Q46, UP PGT 2026 Q71 (area of a parallelogram on $\vec p+2\vec q$, $2\vec p+\vec q$ by the cross product, a vectors item): no item on the area factor of a linear map.
  - TGT 3 Q41 vs LT 2025 Q85 ($\int_1^e\frac{e^{1+\ln x}}{x^2}dx$), expected PGT 2 Q14 ($\int\frac{dx}{1+e^x}$, log answer), expected TGT 3 Q70 / Q13 (indefinite $\tan^{-1}$ forms): different integrand and technique.
  - TGT 3 Q14 vs UP TGT 2021 Q43, LT 2018 Q98 (number of real solutions of $|x|^2-3|x|+2=0$ etc.: wording only), expected TGT 1 Q72, PGT 2 Q45: no domain-count item in inverse functions.
  - PGT 4 Q28 vs UP TGT 2026 Q9 (cofactor of an element of a $2\times2$ matrix), UP PGT 2026 Q19 ($A\,\operatorname{adj}A=kI$, asks the diagonal $k=|A|$): the off-diagonal sum (alien cofactors) is asked nowhere.
  - PGT 5 Q60 vs expected TGT 3 Q45 (TF-IDF 0.86 from the shared wording "family of curves … $A$ and $B$ are arbitrary constants"; family $Ae^{2x}+Be^{-3x}$, constant-coefficient answer), GIC 2026 Q78 (parabolas, $y'''=0$), PGT 2 Q4 ($ae^{-bx}$): different family and equation; no corpus item has $\frac Ax$.
- Within the eight: highest TF-IDF 0.49 (PGT 1 Q58 ~ TGT 3 Q41, shared $\log_e$, $e$ tokens only).

##### Format and phone width
- `fmt.py`: valid JSON, 13 fields in the source order, kept fields equal to the source, four distinct options and four non-empty notes, no "None/All of these", even `$`, no `$$` anywhere, no `align`, `\displaystyle`, `\dfrac`, `\,'`, ₹, no non-ASCII inside math, balanced braces, `\left…\right`, `\begin…\end`, only known KaTeX commands: 206 math segments, 0 problems.
- KaTeX 0.16.9 (the app's version, from cdnjs) rendered all 154 distinct new segments with `throwOnError` and `strict: 'error'` in a scratch tab of the local app (18 px body font): 0 errors. Widest inline formula after splitting 289 px (PGT 1 Q58 solution); five formulas over 280 px were split into two `$…$` pieces (PGT 1 Q37 solution, fact and note (d); Q58 fact; TGT 3 Q41 solution) and the pieces re-rendered (0 errors, at most 229 px). For comparison the old PGT 1 Q37 solution formula measured 373 px.
