# UP TGT / PGT Mathematics: checks

## Chapter 1, check of 22 November 2026

Checked: the notes files `data/net/maths/tp-01-01.txt` to `tp-01-09.txt` against chapter 1 of the owner's notes PDF (PDF pages 13 to 23, printed pages 12 to 22, read from the page images); the figures in `data/net/maths/fig/`; the syllabus files `data/net/tgt-mathematics.txt` and `data/net/pgt-mathematics.txt` against the official 2026 syllabi (TGT code 07, PGT code 08, English and Hindi pages); the placement files `tgt-mathematics.json` and `pgt-mathematics.json`; and the logo-free PDF. Every number in the notes was recomputed with a script (brute force where possible).

### Notes, file by file

In every file all boxes, bullets, formulas, numbered questions, solutions, boxed answers, shortcuts and figure captions of the PDF section are present with the same mathematics. Where a statement of the PDF itself needed a condition, the condition was written into the statement and a `! check` box was added right after it.

**tp-01-01, Sets and set operations**
- Nothing missing.
- PDF statement corrected: "$2^n - 2$ non-empty proper subsets" needs $n \geq 1$ (for $n = 0$ it gives $-1$). Condition added, check box added.
- Added: a bullet on kinds of sets (empty, singleton, finite, infinite; $\{0\}$ and $\{\phi\}$ are not empty).
- S1, S2 and Examples 1 to 5 recomputed: correct.

**tp-01-02, Relations and functions**
- Nothing missing.
- PDF statement corrected: $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$ was given without a hypothesis; "(for bijections $f$, $g$)" added, check box added.
- Added: the older names one–one into, many–one into and onto; a sentence in Example 5 showing that $f$ really maps into $\mathbb{R} - \{1\}$; a short section on binary operations (commutative, associative, identity, inverse, why $n^{n^2}$ and $n^{n(n+1)/2}$) with Example 6, since "binary operations" is a PGT syllabus item.
- Verified by brute force on a 3-element set: 64 reflexive, 64 symmetric, 216 antisymmetric, 8 reflexive and symmetric, 5 equivalence relations; Bell numbers 1, 2, 5, 15, 52; onto counts 150, 36, 14; 16 binary operations on a 2-set, 8 of them commutative.

**tp-01-03, Permutations and combinations**
- Nothing missing.
- PDF statements corrected (one check box): the necklace count $\frac{(n-1)!}{2}$ needs $n \geq 3$; the triangle count ${}^nC_3 - {}^mC_3$ assumes no other three points collinear; the divisor count $(a+1)(b+1)(c+1)$ needs $p, q, r$ distinct primes. The table row on necklaces now says $n \geq 3$.
- All answers recomputed (180, 200, 120, 48, 91, 3024, 6561, 1344, 480, 301, 286, 84, 24 and 18, $D_3, D_4, D_5$, 35): correct.

**tp-01-04, Binomial theorem**
- Nothing missing.
- PDF statement corrected: "even-placed sum = odd-placed sum $= 2^{n-1}$" needs $n \geq 1$. Condition and check box added.
- Fixed: Example 5 wrote an approximation with "="; now "$\approx$", with the range $\lvert x \rvert < 1$ and the true value $1.0099505\ldots$
- BT1 (84), BT2 ($\frac{35}{8}x^{12}$), 1792, $-35x$ and $\frac{35}{x}$, the remainder 1: correct.

**tp-01-05, Exponential and logarithmic series**
- Nothing missing.
- PDF statements corrected: the ranges were missing for $a^x$ ($a > 0$), $\log(1 - x)$ ($-1 \leq x < 1$) and $\log \frac{1+x}{1-x}$ ($\lvert x \rvert < 1$). Added in the formulas, check box added.
- Fixed: Example 5 answer now boxed.
- Checked numerically: $\sum n^k/n! = e, 2e, 5e, 15e$; $3e$; $\log 2$; $\cosh 1$.

**tp-01-06, Sequences and series: AP, GP, HP**
- Nothing missing.
- PDF statements corrected: the GP sum $\frac{a(r^n - 1)}{r - 1}$ needs $r \neq 1$; "Means of $a, b$" became "Means of positive $a, b$" (the existing check box on $A \geq G \geq H$ now also covers $r \neq 1$); the shortcut $T_n = S_n - S_{n-1}$ holds for $n \geq 2$ with $T_1 = S_1$, new check box with $S_n = n^2 + 1$.
- Added: geometric means are inserted between positive numbers.
- 440, 16, 385, 189, 6.4, $\frac{1}{41}$, $\frac{n(n+1)(n+2)}{3}$, $\frac{9}{4}$, $6n + 2$: correct.

**tp-01-07, Number system, surds, logarithms, polynomials**
- Nothing missing (the PDF's "(TGT)" in the section title is carried by the lead paragraph).
- PDF statements corrected (one check box): $a = bq + r$ is Euclid's *division* lemma (integers $a$, $b > 0$), not "Euclid's lemma"; HCF $\times$ LCM $= ab$ holds for two positive integers only; the surd formula needs $a \neq b$; the log laws need positive arguments and a base $a > 0$, $a \neq 1$ ($\log x^2 = 2 \log \lvert x \rvert$).
- Coverage added: the TGT Algebra items "linear equations in two unknowns" and "simultaneous equations in three unknowns" were covered only by the consistency test. New section with substitution, elimination and cross-multiplication, Example 8 (two unknowns) and Example 9 (three unknowns); exam box updated; componendo and dividendo now states $a \neq b$.
- $2^{50}$ has 16 digits, HCF 10 and LCM 5460, the factorisations, $k = 4$: correct.

**tp-01-08, Quadratic equations and theory of equations**
- Nothing missing.
- PDF statements corrected: the nature of the roots read from $D$ needs real coefficients ($a \neq 0$); $\lvert \alpha - \beta \rvert = \frac{\sqrt{D}}{\lvert a \rvert}$ needs $D \geq 0$ (for $D < 0$ it is $\frac{\sqrt{-D}}{\lvert a \rvert}$). Check box added with $x^2 - ix = 0$.
- Fixed wording: "perfect square" became "square of a rational number"; the sentence on the least and greatest value made precise.
- Roots 1, 4, 7 and 1, 2, 4; $2 \pm i$ and 1; $x^3 - 6x^2 + 11x - 7$; $\sum \alpha^2 = -2$, $\sum \frac{1}{\alpha} = \frac{3}{4}$; one real root of $x^3 + 2x - 5$: correct.

**tp-01-09, Peano's postulates and mathematical induction**
- Nothing missing; the PDF's "(TGT)" is now stated in the lead paragraph.
- No error in the PDF text.
- Added: a note that some books start the natural numbers at 0; the numerals 2, 3, 4 are now defined as successors in the addition example.
- $n^2 + n + 41$ is prime for $n = 0$ to $39$ and equals $41^2$ at $n = 40$: correct.

### Figures

All 15 SVG files show what their captions say and match the PDF figures: the shaded regions of $A \cup B$, $A \cap B$, $A - B$, $A'$, $A \Delta B$, $(A \cup B)'$ and $(A \cap B)'$; the seven regions $a$ to $g$ of the three-set diagram in the PDF's positions (checked point by point against the three circles); the arrow diagrams (one–one into a 4-element set with one unused point; onto a 2-element set with two arrows to one point; a bijection of 3-element sets); Pascal's triangle up to 1 5 10 10 5 1; the parabolas cutting, touching and missing the $x$-axis. No fix needed. Two cosmetic differences, optional: `map-bijection.svg` pairs $a \to 3$, $b \to 2$, $c \to 1$, while the PDF draws $a \to 2$, $b \to 3$, $c \to 1$; the arms of the $D = 0$ and $D < 0$ parabolas run out of the top of the frame and the vertex of the $D > 0$ parabola touches the bottom edge.

### Syllabus files

**tgt-mathematics.txt**: every item of the official English text is present, in the official order of units. Changes in this check:
- Removed sub-headings that are not in the official text: three in Algebra, three in Real Analysis, and "Differential equations" in Calculus (its two items stay under Integration, where the official text puts them). "Real sequences" is kept as an item.
- "Sums of the series of squares and cubes of natural numbers" became "Sums of the series of natural numbers and of their squares and cubes", as in the English text ("Squares and Cubes and Natural Numbers").
- The main differences of the Hindi text are now noted in brackets, and the closing note says so.

Misprints of the official English text corrected in the file (all of them): "Work time and Speed time" to work and time, speed and time; "Measurement of central tendency" to measures; "Measurement of deflection" to measures of dispersion (Hindi: विक्षेपण); "Statistics of birth/death" to statistics of birth and death; "Index" to index numbers (Hindi: सूचकांक); "Factor of Second degree polynomials" to factors of second-degree polynomials; "Linear equation of two unknown Variables" to linear equations in two unknowns; "Logarithmic" to logarithms; "Gramer's Rule" to Cramer's rule; "Theory of addition and Multiplication" to theorems of addition and multiplication; "Subsets" to a subset; "Lagrange Theorem" to Lagrange's theorem; "propertities" to properties; "Cauchy Criterian" to Cauchy's criterion; "Roll's Theorem" to Rolle's theorem; "Circular measurement" to circular measure; "ratio's of sum, difference, factors and multiples" to ratios of sum and difference of angles and of multiple and sub-multiple angles (as in the Hindi text); "circumscircle, inner circle, exterior circle" to circumcircle, incircle and escribed circles; "De moivre's" to De Moivre's; "Height and distance" to heights and distances; "functions of complex valued functions" to functions of a complex variable; "Pythogoras Theorem and its expansion" to Pythagoras theorem and its extension; "Tangent line of circle" to tangent to a circle; "alternate sector and angle" to alternate segment and its angles (Hindi: एकांतर वृत्त खण्ड); "segments of chord and formed rectangle" to the rectangle formed by them; "planer shapes" to plane figures; "Co-ordinate" to coordinate; "transformation of origin and co-ordinate axes" to shift of origin and rotation of axes; "section of conic by bisecting lime" to intersection of a line with a conic (Hindi: छेदक रेखा, a secant line); "ordered triod" to ordered triad; "Tripple Product" to triple products; "Rules of Triangle" to triangle law of forces; "resolution in two perpendicular forces" to resolution into two perpendicular components; "transversal" to transverse.

Differences between the English and Hindi TGT texts: Statistics, "pictorial" (Hindi: आलेखीय, graphical); Algebra, "Squares and Cubes and Natural Numbers" (Hindi: series of squares and cubes of natural numbers); Trigonometry, "factors and multiples" (Hindi: multiple and sub-multiple angles); Geometry, "sector of circle" (Hindi: वृत्तखण्ड, segment), "alternate sector" (Hindi: alternate segment), "congruence" (Hindi: समरूपता, similarity); Coordinate Geometry, the Hindi text adds the straight line after the Cartesian plane, names the ellipse among the curves of the general second-degree equation, and adds the equation of the normal at a point of a conic; Calculus, the Hindi text adds the definition of differentiation and says "area under plane curves" where the English says "area between curves"; Set Theory, the Hindi text says "applications of the axiom of induction".

**pgt-mathematics.txt**: every item of the official text is present, in the official order of units and headings. The heading "Equations and series" is not official (both texts give that paragraph no heading); it is kept so that these items are not read as part of Determinants, and the closing note now says it is supplied. Misprints corrected: "Type of relations" to types; "Equivalence class" to equivalence classes; "composite of function" to composite of functions; "Lagrange and Cauchy mean value theorems" to Lagrange's and Cauchy's; "L. Hospital's rule" to L'Hospital's rule; "Leibnitz theorem" to Leibnitz's theorem; "Chord of contacts" to chord of contact; "Gauss-divergence theorem" to Gauss's divergence theorem; "Lagrange theorem" to Lagrange's theorem. Differences of the Hindi text: "परिवर्त फलन" (transpose function) where the English has inverse of a function, and "असममित" (asymmetric) where the English has skew-symmetric, both misprints of the Hindi text; otherwise the two texts agree.

No `$` sign in either syllabus file.

### Placement

TGT: Algebra holds 1.7 and 1.8 ("Numbers, polynomials and equations") and 1.6, 1.3, 1.4, 1.5 ("Series and counting"); Set Theory holds 1.1, 1.2 and 1.9. Each fits the official items (surds, polynomials, logarithms, number system, quadratic equations, theory of equations, progressions, sums of series, permutations and combinations, binomial theorem, exponential and logarithmic series; rules of set algebra, equivalence relation, mappings, Peano's postulates and induction). "Set operations" in the Algebra unit is covered by 1.1 under Set Theory, since a chapter can appear only once in a subject. PGT: Algebra holds 1.1 and 1.2 under "Relations and functions" (sets are not named in the PGT syllabus, but 1.1 is the groundwork for relations) and 1.8, 1.6, 1.3, 1.4, 1.5 under "Equations and series"; 1.7 and 1.9 are TGT-only topics and are correctly left out. The "key" lines describe the topics correctly. No change to the JSON files.

### Logo-free PDF

`data/net/maths/UP-TGT-PGT-Mathematics-Notes.pdf` has 218 pages. Its text (`pdftotext`, plain and `-layout`) is byte-identical to the original's. The 218 logo images (one per page) are replaced by 1 × 1 placeholders; the cover, the contents page, printed page 12 and the last page, rendered at 50 dpi, show no logo.

### Checker

`python -I -X utf8 tools/check_net.py`: the chapter 1 notes, both syllabus files and both JSON files raise no problem. The last line is `1 problems`; the one problem is "maths/: notes files that no chapter uses", the files of later chapters (`tp-02-*` to `tp-05-*` at the last run) that were added to the folder while this check ran and are not yet placed in the JSON files. It is outside this check.

## Chapters 2 and 3, check of 22 November 2026

Source: UP_TGT_PGT_Maths_Notes_ComicSans.pdf, PDF pages 24 to 34 (printed 23 to 33), read as page images.
Every PDF box, bullet, formula, matrix, question (M1, I1, DT1 to DT4, LS1, LS2, EV1, EV2, LA1, LA2, the two unnumbered examples), solution, boxed answer, shortcut, figure and caption was found in the notes; nothing from the PDF was missing.
Every number was recomputed with exact fractions (scratchpad ckAN/verify.py): all products, transposes, inverses, cofactors, determinants (symbolic ones by random substitution), ranks, eigenvalues, eigenvectors and Cayley–Hamilton results of the PDF and of the added examples are correct.
All 1117 formulas of the eight files were rendered with KaTeX 0.16.9 at the app's size (19px, 1.06em): 0 errors; after the changes no displayed formula is wider than 306px inside a box or 320px outside, and no unbreakable inline piece is wider than 233px.

### tp-02-01 Types of matrices and transpose
- PDF error (check box added): "Eigenvalues: symmetric — real; orthogonal — modulus 1" holds only for real matrices; wording now "real symmetric", "real orthogonal"; counter-example $\begin{bmatrix} 1 & i \\ i & 1 \end{bmatrix}$ (eigenvalues $1 \pm i$). Noted that $AB - BA = I$ is ruled out for real or complex matrices.
- Wide displays split: $(AB)_{11}$ display, $P$ and $Q$ of M1 (aligned, words "(symmetric)", "(skew)" kept), $AB$/$BA$, $A^2$/$N^2$; orthogonal example rewritten without the over-wide product.
- Added: symmetric and skew-symmetric rows in the table, "square" for triangular; clearer order of $AB$; why $(AB)' = B'A'$; Example 2 (sum and product of $3 \times 3$ matrices, TGT item, with a check of $(AB)' = B'A'$); a flash card on orders of products; exam line on sums and products. Examples renumbered 1 to 5.

### tp-02-02 Inverse of a matrix
- PDF condition added (check box): $(AB)^{-1} = B^{-1}A^{-1}$ and $(A')^{-1} = (A^{-1})'$ need invertible square matrices of the same order; bullet amended.
- I1 split into one display per row operation; Example 1 and Example 2 displays split.
- Added: a singular example, why the determinant decides invertibility, a flash card on a singular matrix, "singular and non-singular" in the exam box.

### tp-02-03 Determinants
- PDF condition added (check box): $(\text{adj}\,A)^{-1} = \frac{A}{\lvert A \rvert}$ needs $\lvert A \rvert \neq 0$ (bullet amended); adj rules are for $n \geq 2$.
- DT1, DT2, DT3 determinants moved onto displayed lines; DT1, DT3, Vandermonde, circulant and expansion displays split to fit.
- Added: definition of 1×1 and 2×2 determinants (TGT "definition of a determinant"); zero row and row-times-k properties, rows ↔ columns; why DT3's first determinant equals the Vandermonde (two column swaps); Example 1 now computes minors and cofactors of row 1 and checks the "other row gives 0" rule (TGT "minors and cofactors"); flash card on minor vs cofactor; exam line.

### tp-02-04 Rank and systems of linear equations
- PDF condition added (check box): "non-trivial solution iff $\lvert A \rvert = 0$" is for square $A$; in general iff $\rho(A) < n$ (example $x + y + z = 0$, $x - y = 0$). Recap amended.
- LS1 and LS2 displays split; LS1 now shows $x = \Delta_1/\Delta$ etc. with a check; LS2 names its row operations; Example 2 determinant displayed.
- Added: Example 4 (classic $\lambda$, $\mu$ question: unique / none / infinitely many); a bullet tying Cramer, inverse and elimination together.

### tp-02-05 Eigenvalues and the Cayley–Hamilton theorem
- PDF facts for $A^{-1}$ and adj A now say "(for non-singular A)"; the existing check box was correct and kept.
- Added: why $X \neq 0$ matters, multiplicity in sum/product, tr adj A as the sum of diagonal 2×2 minors, $\lvert A \rvert \neq 0$ in the 2×2 inverse formula, Example 4 (3×3 characteristic equation, eigenvalues 1, 1, 4, and $A^{-1}$ by Cayley–Hamilton).

### tp-03-01 Vector spaces and subspaces
- PDF conditions added (check box): $\dim(W_1 + W_2)$ formula needs $W_1$, $W_2$ finite-dimensional; $\dim V/W$ needs $V$ finite-dimensional; the quotient space's scalar multiplication $a(v + W) = av + W$ was missing from the definition and is added.
- Added: direct sum = unique decomposition (axes of $\mathbb{R}^2$); $u + W = v + W \iff u - v \in W$, zero coset; Example 4 (a quotient of $\mathbb{R}^3$, equal cosets, dimension 1); flash card; recap line.

### tp-03-02 Linear dependence, basis, dimension
- No PDF error. "**Solution.**" label added to the PDF example; its display split; "Yes" explained.
- Added: why the matrix-space dimensions hold; testing polynomials and matrices via coefficients; Example 4 (basis $1 + x$, $x + x^2$, $1 + x^2$ of $P_2$).

### tp-03-03 Linear transformations
- PDF conditions added (check box): rank–nullity needs $V$ finite-dimensional; $(ST)^{-1} = T^{-1}S^{-1}$ needs $S$, $T$ invertible; matrices, rank of the transpose and $\dim L(V, W)$ are for finite dimensions, transpose matrix in dual bases. Bullets amended.
- Fixed in added text: "a quick sign is $T(0) \neq 0$" sat next to $(x^2, y)$, which has $T(0) = 0$; now says $T(0) = 0$ does not prove linearity, with the failing case.
- Added: composite and transpose (dual space, $A'c$) explanations; singular example (LA2); Examples 4 (composite, $ST \neq TS$, both singular), 5 (transpose of a map), 6 (matrix in another basis); flash card; recap line. "**Solution.**" label added to the PDF rank–nullity example.

### Figure
- rank-nullity.svg: matches the PDF figure (V with kernel, W with image containing 0, arrows T and kernel → 0); labels inside their ellipses; caption matches. No change.

### Placement and key lines
- TGT unit 3 and PGT unit 1 "Determinants and matrices" / "Matrices and determinants": order 2.1, 2.3, 2.2, 2.4, 2.5 (determinants before the inverse) is sensible because the inverse uses the adjoint. PGT unit 7: 3.1, 3.2, 3.3. Key lines agree with the content. Optional: TGT/PGT key of tp-02-01 could say "sums and products" now that a 3×3 sum/product example exists. No placement errors.

### Checker
python -I -X utf8 tools/check_net.py → last line: 0 problems

## Chapter 4, check of 22 November 2026

Source: UP_TGT_PGT_Maths_Notes_ComicSans.pdf, PDF pages 35 to 45 (printed 34 to 44), read as page images. Every box, bullet, table, question (G1, G2, G3, MD1, P1 to P4, O1, L1, CY1, NS1, RG1), boxed answer, shortcut, add-on, figure and caption of sections 4.1 to 4.10 was found in the notes with the same mathematics. Nothing from the PDF was missing. All computations were redone with Python (helper scripts ch4.py, ch4b.py, ch4c.py in this folder); permutation products were computed reading LEFT TO RIGHT (in fg, f first).

### tp-04-01 (4.1 Binary operations and groups)
- PDF content complete; Cayley table of {1, -1, i, -i} correct; G1 identities and inverses verified ((d) and (e) by exact fractions).
- Added (PDF, needed conditions): identity axiom now says "for every a in G"; {m/2^n} now states m in Z, n = 0, 1, 2, ...; matrix groups stated as real a, b under matrix multiplication. New `! check | Conditions added` box after the examples box.

### tp-04-02 (4.2 Elementary properties of groups)
- PDF content complete and correct.
- Added material fixed: Example 1 now says why every element of a group of order 4 has order 1, 2 or 4 (Lagrange). Example 2 now states the product convention: (1 2)(1 3) = (1 2 3) left to right, (1 3 2) right to left.

### tp-04-03 (4.3 Addition and multiplication modulo m)
- PDF content complete; MD1 products and inverses verified; "{1, ..., n-1} under x_n is a group iff n prime" verified for n = 2..29.
- PDF statement corrected: "inverse of a is m - a" holds for a not 0 (0 is its own inverse). New `! check | The inverse of 0` box.
- PDF shortcut corrected: n >= 2, and U(n) = {a : 1 <= a <= n - 1, gcd(a, n) = 1} under x_n (without the range the set is infinite). New `! check | Conditions added` box.
- Added: the actual multiplication table of U(8) in Example 1 (the question asked for a table; only products were given).

### tp-04-04 (4.4 Permutations and S_n)
- PDF content complete. Every product checked left to right: (1 3)(1 9)(1 4)(1 5) = (1 3 9 4 5); P1 (a) (1 6)(2 5 3) = (1 6)(2 5)(2 3), odd; (b) (1 2 5 6)(3 4)(8 9), 5 transpositions, odd; P2 odd, even, order 3; P3 inverses correct and (1 3 2 5)(1 4 3)(2 5 1) = (1 2)(3 5 4), inverse (1 2)(3 4 5) (right to left it would be (1 5 4 2)); P4 Klein product correct. S5 orders, number of 3-cycles in S4 (8) and r-cycle formula verified.
- PDF statement corrected: "exactly n!/2 are even" needs n >= 2. New `! check | Conditions added` box, which also says that the transposition splittings (bullet and P1) use the left-to-right reading and gives the right-to-left form.
- P3 solution now says "Composing left to right", traces two symbols and gives the right-to-left answer for contrast.
- Added: 2 <= r <= n in the r-cycle count; n >= 2 for |A_n| in the recap; a recap line on the product convention.

### tp-04-05 (4.5 Order of an element)
- PDF content complete; O1, the shortcut, the table (U(7): 3, 2, 6, 4, 5, 1) and Examples 1 to 3 verified.
- Added a bullet: o(a^k) divides o(a) when o(a) is finite (stronger than the PDF's o(a^k) <= o(a), which is true).

### tp-04-06 (4.6 Subgroups)
- PDF content complete; the existing non-empty check box is right.
- Added material fixed: "that is why the subgroups of Z are nZ" was a non sequitur; now gives the reason (least positive element). Trivial/proper wording now notes the other usage of "proper".
- Coverage (subgroup generated by a subset): added <empty set> = {e} and an S3 example, <(1 2 3)> = A3 of order 3 and <(1 2), (1 2 3)> = S3 (verified by computing the closure).

### tp-04-07 (4.7 Cosets and Lagrange's theorem)
- PDF content complete; L1 (4, 4), Examples 1 to 4 verified; A4 has subgroups of orders 1, 2, 3, 4, 12 only (brute force).
- PDF statement corrected: "any two cosets are either equal or disjoint" holds for two left (or two right) cosets only; in S3 with H = {e, (1 2)}, (1 3)H = {(1 3), (1 3 2)} and H(1 3) = {(1 3), (1 2 3)} overlap but differ.
- PDF statement corrected: Cayley's map a -> f_a with f_a(x) = ax is a homomorphism only for right-to-left composition; with the notes' left-to-right reading f_a f_b = f_ba (checked in S3). Now f_a(x) = xa. Both in a new `! check | Two corrections` box.
- Coverage: coset decomposition bullet now says finite index and mentions right cosets; added Example 5 (left and right coset decompositions of S3, left to right) and, for "Fermat's theorem and its application", a bullet and Example 6 (inverse of 3 mod 7 = 3^5 = 5).

### tp-04-08 (4.8 Cyclic groups)
- PDF content complete; CY1, phi values (8, 12, 15, 20, 30, 36), tau(12) = 6, tau(36) = 9, U(10) = <3>, U(9) = <2> verified.
- PDF formula corrected: tau(n) = (k1 + 1)...(kr + 1) needs distinct primes. New `! check | A condition added` box.
- Coverage (subgroups of a cyclic group): added the short proof that every subgroup of <a> is cyclic.

### tp-04-09 (4.9 Normal subgroups, quotient groups, homomorphisms)
- PDF content complete; NS1, number of homomorphisms Z_m -> Z_n = gcd(m, n) (checked for m, n <= 24), Examples 1 to 4 verified.
- PDF statement corrected: quotient group needs H normal; o(G/H) = o(G)/o(H) needs G finite; the gcd count is of group homomorphisms. New `! check | Conditions added` box.
- Coverage (fundamental theorem of homomorphism): added why Ka -> f(a) is well defined, one-one, onto and a homomorphism. "Order of f(a) divides order of a" now says "when that is finite". Example 4 now says the conjugate is the same in either reading and traces it.

### tp-04-10 (4.10 Rings, integral domains, fields, ideals)
- PDF content complete; RG1, Z12 units and zero divisors, characteristic of Z3 x Z4 = 12 verified.
- PDF statements corrected: integral domain, field and skew field need 1 != 0 (else the zero ring is a "field" of characteristic 1); cancellation is of a non-zero factor; the subring test is for a non-empty S and all a, b in S. New `! check | Conditions added` box.
- PDF add-on corrected: Z_n facts need n >= 2; the maximal/prime ideal facts need a commutative ring with unity (and ideals other than R) and are "iff". New `! check | Conditions added` box; recap updated to match.
- Added material fixed: "four ring facts" (there are three rules) replaced by a derivation of the sign rules; "pZ is maximal (and prime)" restated for n >= 2.
- Coverage (rings and fields with examples): subring-test example (2Z yes, odd integers no) and Example 4, Q(sqrt 2) is a field, Z[i] is an integral domain but not a field. Figure caption now says "p prime".

### Figures
- perm-cycles.svg: arrows 1 -> 3 -> 4 -> 1 (blue) and 2 <-> 5 (red), same layout as the PDF; correct.
- cosets.svg: H, aH, bH, cH of equal width with the PDF caption; correct.
- z12-lattice.svg: Z12; <2> order 6, <3> order 4; <4> order 3, <6> order 2; {0}; edges Z12-<2>, Z12-<3>, <2>-<4>, <2>-<6>, <3>-<6>, <4>-{0}, <6>-{0}: the correct inclusion diagram, as in the PDF.
- rings-fields.svg: Z6 outside the integral domains, Z inside them but outside the fields, Q, R, C, Zp in the fields (label positions checked against the ellipses); correct. No figure changed.

### Placement
- tgt-mathematics.json (unit 5 Set Theory, part "Groups"): 4.1, 4.2, 4.3, 4.5, 4.6, 4.8, 4.7, 4.9. Covers "group and group homomorphism", "subgroup generated by a subset", "cyclic group", "order of an element", "subgroups of a cyclic group", "coset decomposition", "Lagrange". 4.4 and 4.10 correctly left out (no S_n or rings in the TGT syllabus). Key lines match the pages.
- pgt-mathematics.json (unit 6 Abstract Algebra): all ten topics; key lines match the pages.
- Minor remark, not an error: in both subjects 4.8 comes before 4.7 (syllabus order), while 4.8 ("every group of prime order is cyclic") and 4.5 use Lagrange's theorem from 4.7. The new text in 4.2 and 4.6 that uses Lagrange cites 4.7; the order itself can stay.

### Checker
`python -I -X utf8 tools/check_net.py`: last line `0 problems`.

## Chapter 5, check of 22 November 2026

Source: UP_TGT_PGT_Maths_Notes_ComicSans.pdf, PDF pages 46 to 55 (printed 45 to 54), read from the page images. Every box, bullet, formula, the master table, the questions CT1, TP1, SQ1, SR1, SR2, LM1 to LM4, CD1 to CD3, their solutions and boxed answers, the shortcuts, the figures and their captions are present in the notes files with the same mathematics. Nothing from the PDF was missing. All limits, sums and examples were recomputed numerically (script `ch5.py` in this folder); all agree.

### tp-05-01 (5.1 Set theory and functions)
- Box title "Real for TGT part 2" (a reference to the handwritten notes) replaced by "Sets, logic and functions".
- PDF statement made precise, with a `! check` box: "Axiom of Regularity: no set is an element of itself" is a consequence of the axiom, not the axiom; the axiom (every non-empty set has an element disjoint from it) and the one-line deduction are given.
- Error in the added material fixed: "axioms such as regularity rule such collections out" was wrong (regularity makes every set ordinary; it is the axiom of separation that keeps the Russell collection out). Rewritten, with a new bullet on why the paradox reaches "the collection of all sets".
- Added: definitions of one–one and onto with examples ($2n$ on $\mathbb{N}$, $x^2$ onto $[0, \infty)$, $x^3$ on $\mathbb{R}$); flash card on Russell's paradox reworded.

### tp-05-02 (5.2 Countability and cardinal numbers)
- PDF statements corrected, `! check | Conditions added` after the first box: "contains a countable subset" must be "countably infinite"; removing a finite set keeps the cardinality only for an infinite set; "any two intervals" need more than one point ($a < b$, $c < d$); Axiom I (onto map) and the countably infinite subset use the axiom of choice.
- `! check` after the tools box: T7 (countable union of countable sets) uses the axiom of choice; the disjoint open intervals must be non-empty; "every interval" means a non-degenerate one.
- `! check` after the cardinal-arithmetic box: $\alpha + \beta = \alpha\beta = \max(\alpha, \beta)$ in general uses the axiom of choice; direct for $\aleph_0$ and $c$.
- Added (What it means): "denumerable" and the two meanings of countable; the Schröder–Bernstein theorem with the example $[0, 1] \sim (0, 1)$ and the correct form of the interleaving argument (one–one, not onto); notation $\alpha = \lvert A \rvert$, $B^A$, $\lvert P(X) \rvert = 2^{\lvert X \rvert}$; independence of the continuum hypothesis (Gödel, Cohen); repeats such as 2/2 are skipped in the listing.
- Example 2 retitled ("countable unions" → "a product of countable sets": it uses T4, a product).

### tp-05-03 (5.3 Order properties, bounds, point-set topology)
- PDF statement corrected, `! check`: the irrational $\frac{r}{\sqrt{2}}$ needs a non-zero rational $r$; how to place it between $a < b$.
- PDF statement corrected, `! check`: nested intervals must be non-empty (as well as closed and bounded); counter-examples $(0, \frac{1}{n})$ and $[n, \infty)$.
- Added for the syllabus item "Axioms of real numbers": a `! remember` box with the field, order and completeness axioms (and a flash card); exam box mentions them.
- Added: definition of compactness (open covers) and the failure of Heine–Borel outside $\mathbb{R}$ (discrete metric on $\mathbb{N}$); both hypotheses of Bolzano–Weierstrass needed, with $(-1)^n$; Example 4 (interior, derived set, closure, boundary and an isolated point of $[0, 1) \cup \{2\}$); recap now says "in $\mathbb{R}$" for compact = closed + bounded.
- The neighbourhood figure moved under the heading "Open and closed sets, limit points" (still between the two PDF boxes, as in the PDF).
- Master table, TP1, metric box: checked, no change.

### tp-05-04 (5.4 Sequences)
- Cauchy-sequence definition given its quantifiers ("for every $\varepsilon > 0$ there is $N$").
- lim sup / lim inf bullet restricted to bounded sequences, with the $(-1)^n$ example.
- Added Example 5: divergence of the harmonic partial sums by Cauchy's criterion (syllabus item).
- SQ1 and Examples 1 to 4 recomputed: correct.

### tp-05-05 (5.5 Series)
- PDF statements corrected, `! check | Conditions added`: the geometric series needs $a \neq 0$ (and diverges to $\pm\infty$ with the sign of $a$ for $r \geq 1$); the limit-of-a-sum formula needs $f$ integrable on $[0, 1]$; the comparison, condensation, root, ratio, Raabe, logarithmic and De Morgan–Bertrand tests are for positive terms.
- PDF add-on corrected, `! check`: $\sum \frac{1}{n(\log n)^p}$ starts at $n = 2$.
- Added Example 5 (limits of integration 0 to 2: answer $\log 3$) and Example 6 (Cauchy condensation on $\sum \frac{1}{n \log n}$).
- SR1, SR2 and Examples 1 to 4 recomputed: correct.

### tp-05-06 (5.6 Limits)
- PDF error corrected, `! check | Conditions added`: LHL and RHL need $h \to 0^+$ (the PDF wrote $h \to 0$, under which both would be the same limit); $f^g \to A^B$ and $\log f \to \log A$ need $A > 0$; $\frac{x^n - a^n}{x - a} \to na^{n-1}$ for positive integers $n$, for other real $n$ with $a > 0$; $a_0, b_0$ non-zero leading coefficients.
- `! check` after the shortcut: the limits are as $x \to 0$, and $\frac{a^x - 1}{x} \to \log a$ needs $a > 0$.
- Added: L'Hospital's rule (PGT syllabus) with an example.
- LM1 to LM4 and Examples 1 to 4 recomputed: correct.

### tp-05-07 (5.7 Continuity and differentiability)
- PDF shortcut made precise, `! check`: for non-integer $n$, $x^n$ need not be defined for $x < 0$ (read $\lvert x \rvert^n$); the derivative computation behind the thresholds $n > 1$, $n > 2$.
- Added for the TGT syllabus: Rolle's theorem expanded (geometric meaning), Example 5 verifying it ($c = 2$) and showing $\lvert x \rvert$ on $[-1, 1]$ fails it, a flash card, and a line in the exam box; Example 4 classifying four discontinuities; a note on "mixed" discontinuity in other books.
- CD1 to CD3 and Examples 1 to 3 recomputed: correct.

### Figures
- rationals-listing, cantor-set (stages exact: thirds, ninths, 27ths), neighbourhood, one-over-n (points at $\frac{1}{n}$ to scale), one-sided-limits, disc-removable, disc-jump, disc-infinite, disc-corner: correct and faithful to the PDF.
- sequence-band.svg: one defect, not edited (outside the allowed files): the term at $n = N$ (circle at x 120, y 101) sits just outside the band (y 86 to 100), whereas the caption says all terms from $N$ on lie in the band. Moving it to about y 96 fixes it.

### Placement (JSON, not edited)
- tgt-mathematics.json, unit u6: all seven chapters placed sensibly. Key lines are accurate; suggestions only: tp-05-03 could name "axioms of the real numbers", tp-05-07 could name "Rolle's theorem" (both TGT syllabus items now covered in the notes).
- pgt-mathematics.json, unit u2: tp-05-06 and tp-05-07 under "Functions of one variable", tp-05-05 under "Integration" (limit of a sum): correct; key lines accurate.

### Checker
`python -I -X utf8 tools/check_net.py`: last line `0 problems`.
