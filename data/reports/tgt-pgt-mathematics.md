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

## Chapter 6, check of 22 November 2026

Source: `pdfclean\clean.pdf`, PDF pages 56 to 68 (printed 55 to 67), read from the page images (100 dpi, `p-056.png` to `p-068.png` in this folder). PDF page 69 was read too: it starts with 7.1, so 6.7 ends on page 68.

Nothing of the PDF was missing. Every box, bullet, formula, table, question (D1 to D7, PD1, PD2, ID1 to ID3, TN1, TN2, MM1 to MM9, MV1 to MV3), solution, boxed answer, shortcut, figure and caption is in the pages with the same mathematics and wording. Meta labels (dates, "formula pages p.2") are dropped as allowed.

Every derivative, limit, extremum, value of $c$, radius of curvature and standard-curve fact, in the PDF text and in the additions, was recomputed with sympy (script `ch6.py`). All agree, except MM5 (a slip, below). Formula widths were checked with `width.py`. Figures were rendered (`fig-*.png`, `figs-montage.png`) and measured from their SVG coordinates (`figcheck*.py`).

### tp-06-01 (Derivative: meaning and rules)
- Checked: the definition, the rules, the standard-derivative table (sec⁻¹ and cosec⁻¹ numerically), D1 to D7, the shortcut. D3's range remarks checked at x = 0.3, −0.5, 2, −2: correct.
- Added `! check | Conditions added` after the table: log x needs x > 0, aˣ needs a > 0, xⁿ for real n needs x > 0, sin⁻¹ and cos⁻¹ need |x| < 1, sec⁻¹ and cosec⁻¹ need |x| > 1.
- Added `! check | A condition added` after the shortcut: the rule for f^g needs f > 0.
- Additions: Example 2 now says "for t ≠ 0" (the answer 3/(4t)). The rest (first principles, x^x slopes, flash cards, exam, recap) is correct.
- Layout only: D1 (b) and D5 (a) moved to display lines, D5 (b) split into two inline formulas (they were too wide for a phone).

### tp-06-02 (Partial differentiation and Euler's theorem)
- Checked PD1, PD2, Examples 1 to 3, the polar Jacobian: correct.
- Added `! check | Conditions added` after the first box: Euler's theorem needs continuous first partial derivatives (second partials for the second formula), and u(tx, ty) = tⁿu for t > 0 (example √(x² + y²)).
- Added `! check | Conditions added` after the add-on: the corollary needs f′(u) ≠ 0; the implicit derivative needs f_y ≠ 0.
- Layout only: PD1's long line put on an aligned display.

### tp-06-03 (Increasing and decreasing functions)
- Checked ID1 to ID3, Examples 1 to 3, the −1/x remark: correct.
- Added `! check | Each interval separately` after ID2: the boxed union means each interval on its own (f(−3) = 84 > f(4) = −98); the same for ID3 (b). The PDF's boxed answer is kept.

### tp-06-04 (Tangents and normals)
- Checked TN1, TN2, Examples 1 to 3, the subnormal 2a: correct.
- Added `! check | A condition added` after the first box: the normal formula needs f′(x₀) ≠ 0; the normals for a horizontal and a vertical tangent.

### tp-06-05 (Maxima and minima)
- Checked MM1 to MM9, the shortcut results (cylinder and cone in a sphere, open box, closed cylinder), Examples 1 and 2: correct.
- First derivative test: "no change: point of inflection" now reads "no change: neither (often a point of inflection)", with `! check | A statement made precise` (no extremum; 3x + |x| has a critical point without inflection).
- Slip corrected in MM5: "D = c" for c ≤ 1/2 now reads "D = |c|", with `! check | A slip in the notes` (D = c is negative for c < 0; the two nearest points for c ≥ 1/2). Checked numerically for c = −2, 0, 0.3, 0.5, 1, 3.
- Added `! check | A condition added` after the shortcut: x + k/x ≥ 2√k needs k > 0.

### tp-06-06 (Mean value theorems)
- Checked MV1 to MV3 (MV3 numerically for n = 3), the values of c for x², 1/x and √x, the tan x and log(1 + x) series, the nth-derivative formulas, Examples 1 to 3: correct.
- Added `! check | Conditions added` after the add-on: Cauchy's hypotheses; 0 < a < b for √(ab) (−√(ab) if a < b < 0) and 0 ≤ a < b for √x; the hypotheses of Taylor's theorem and Rₙ → 0 for the series; L'Hospital needs lim f′/g′ (example (x + sin x)/x); m!/(m − n)! is for whole numbers n ≤ m; φ = tan⁻¹(b/a) only when a > 0 (checked: the formula fails for a = −2).
- Layout only: MV3's Leibnitz step and Example 3 put on aligned displays.

### tp-06-07 (Curvature, asymptotes and curve tracing)
- Checked the three radius formulas and the standard values (parabola 2a, ellipse b²/a, catenary y²/c, cardioid (2/3)√(2ar)), the standard-curves table (cycloid 8a and 3πa², astroid 3πa²/8 and 6a, cardioid 3πa²/2 and 8a, lemniscate a², folium loop 3a²/2 and its asymptote), Examples 1 to 3: correct.
- Added `! check | Conditions added` after the curvature box: a non-zero denominator, ρ is the absolute value, and which ellipse, catenary and cardioid the values are for.
- Added `! check | Conditions added` after the checklist: algebraic curves; a non-constant coefficient; φₙ′(m) ≠ 0, and the rule when φₙ′(m) = φₙ₋₁(m) = 0; the folium's asymptote worked out by the rule.

### Figures (not changed; for the owner)
- folium.svg: only the loop and the second-quadrant branch are drawn. The fourth-quadrant branch (t < −1 in x = 3at/(1 + t³), y = 3at²/(1 + t³)) is missing: it leaves the origin tangent to the y-axis and approaches x + y + a = 0. The PDF figure has the same gap.
- tangent-normal.svg: the normal meets the tangent at about 79°, not 90° (slopes 0.98 and −0.68 in the SVG). The PDF figure also marks the right angle and the angle θ; the SVG has neither, though the text refers to θ.
- nearest-point.svg: the red segment ends on the parabola but not at the nearest point (it meets the curve at about 78°; the true foot is near (177, 97) instead of (185, 79)). Minor.
- rise-fall.svg: the label "f′ < 0" overlaps the y-axis. Cosmetic.
- chord-tangent, sign-scheme, max-min, abs-min, cone-cylinder, mean-value (tangent at c parallel to AB), curvature-circle (circle radius equals the radius of curvature of the drawn parabola): correct.

### Placement (not changed)
- TGT: 6.1, 6.4, 6.3, 6.5 and 6.7 are under Unit 11, Differentiation (differentiation, tangent and normal, maxima and minima, tracing of simple curves); 6.6 under Unit 6 with Rolle's theorem. Correct. 6.2 is rightly not in TGT.
- PGT: all seven pages are under Unit 2, "Functions of one variable", in syllabus order. Remark: 6.2 (partial differentiation) is about functions of two variables and is not named in the PGT syllabus (it supports Unit 8, gradient and directional derivatives); 6.7 is not named either. Both can stay, but the owner may prefer a part of their own.
- Keys describe the pages. Suggestions: the 6.1 key could add "implicit, logarithmic and parametric differentiation"; the 6.5 key could add "extrema of functions of two variables".

`python -I -X utf8 tools/check_net.py`: last line `0 problems`.

## Chapter 7, sections 7.1 to 7.5, check of 22 November 2026

Source: clean.pdf, PDF pages 69 to 75 (printed 68 to 74), read from the page images (rendered at 140 dpi, files c-69-0.png to c-75-1.png in this folder); the text layer was used only to confirm that no sentence was missed. 7.5 ends on PDF page 75, where the heading of 7.6 starts.

Nothing of the PDF was missing. Every box, bullet, formula, the table of standard integrals, the five partial-fraction forms, the properties P1 to P8, the questions IN1 to IN4, DI1 to DI4, BG1, AR1 to AR3, their solutions and boxed answers, the three shortcut boxes, the Riemann add-on, the figures and the two captions are on the pages with the same mathematics and wording. Meta labels ("From your notes", "Formula pages 1–27", "your volume notes") were already dropped or reworded as the brief says.

Every formula, integral, limit, area and boxed answer, in the PDF text and in the additions, was recomputed with sympy (script ch7.py in this folder; sympy installed in lib\). All are correct: each antiderivative of the table differentiates back to its integrand; DI1 to DI4, the ready answers, BG1, AR1 to AR3, the ready-made areas, and all added examples agree. Wallis' formula and the Gamma form were checked against the integral for all m, n from 0 to 8.

### tp-07-01 (Indefinite integrals: standard forms)
- Slip in the notes corrected: $\log\tan\left(\frac{\pi}{4} + \frac{x}{2}\right)$ and $\log\tan\frac{x}{2}$ now carry a modulus (the tangent is negative at $x = 2$ and $x = -1$). Red box "A modulus and conditions added" after the table box.
- Conditions added in the same box: $a > 0$, and $a \neq 1$ for $\int a^x$; $\int \frac{dx}{x\sqrt{x^2 - 1}} = \sec^{-1} x$ for $x > 1$, $\sec^{-1}\lvert x \rvert$ in general.
- Additions: "same derivative differ by a constant" now says "on an interval"; linear substitution now says $a \neq 0$; the derivative of $\log\lvert \sec x + \tan x \rvert$ moved to a two-line display (it was too long inline for a phone).
- Examples 1 to 3 and the cards: correct, no change.

### tp-07-02 (Methods of integration)
- Conditions added (red box after the partial-fraction forms): proper fractions only; $a, b, c$ distinct in forms (1), (3), (4); in form (5) $x^2 + bx + c$ has no real roots ($b^2 < 4c$).
- Long inline solutions put on display lines, same mathematics: IN2 (ii), IN3, Example 1 (now says which step uses IN2 (i)), the boxed answer of Example 2.
- ILATE bullet reworded: "when the integrand is a log or an inverse trigonometric function alone (as in $\int \log x\,dx$), take 1 as the second factor".
- IN1 to IN4, the shortcut formulas ($e^{ax}\sin bx$, $e^{ax}\cos bx$, $t = \tan\frac{x}{2}$, $px + q = A(2ax + b) + B$) and Examples 1 to 3: correct.

### tp-07-03 (Definite integrals)
- Conditions added (red box after the first box): $f$ integrable on $[a, b]$, and $F' = f$ on the whole of $[a, b]$, with the counter-example $\int_{-1}^1 \frac{dx}{x^2}$.
- Conditions added (red box after the ready answers): $\frac{b - a}{2}$ needs $f(x) + f(a + b - x) \neq 0$; in the period rule $n$ is a whole number (counter-example $n = \frac{1}{2}$ with $\sin x$).
- DI3 solution split into a three-line display (it was one inline line of about 64 characters).
- DI1 is titled "P4" but uses P5; the page already explains P5 is P4 with $a = 0$. No change.
- DI1 to DI4, the ready answers ($\frac{\pi}{4}$ for every $n$ tested, $-\frac{\pi}{2}\log 2$, the $x f(\sin x)$ rule) and Examples 1 to 3 ($\frac{\pi^2}{4}$, $\frac{5}{2}$, 20): correct.

### tp-07-04 (Beta and Gamma functions; Wallis' formula)
- Conditions added (red box after the note box): $m, n > 0$ for $B$, $n > 0$ for $\Gamma$; $\Gamma(n) = (n - 1)\Gamma(n - 1)$ for $n > 1$, $= (n - 1)!$ for positive integers; the Gamma form of $\int_0^{\pi/2}\sin^m\cos^n$ for $m, n > -1$; Wallis for whole numbers $m, n \geq 0$.
- Conditions added (red box after the Riemann add-on): $f$ bounded on a closed interval $[a, b]$, inf and sup over all partitions, with the example $\frac{1}{\sqrt{x}}$ on $[0, 1]$.
- Wallis display split into three lines (it was about 61 characters wide).
- Additions corrected: "refining a partition lowers $U$ and raises $L$" now "never raises $U$ and never lowers $L$" (they can stay equal); Leibnitz's rule now states "continuous $f$, differentiable $g$".
- BG1 ($\frac{5\pi}{32}$, $\frac{16}{315}$, $\frac{3\sqrt{\pi}}{4}$) and Examples 1 to 3 ($\frac{1}{280}$, $\frac{2}{35}$, $2x\cos x^2$): correct.

### tp-07-05 (Area under and between curves)
- Conditions added (red box after the note box): "upper minus lower" needs the curves not to cross between $a$ and $b$; meaning of the polar and parametric formulas ($x$ increasing, $y \geq 0$).
- Conditions added (red box after the ready-made areas): $a > 0$ (also in AR1), $m > 0$ for $y = mx$ (else $\frac{8a^2}{3\lvert m \rvert^3}$); the equations of the cycloid, astroid and cardioid meant.
- AR1 solution and Example 3 put on display lines; Example 3 now shows the three terms of $(1 + \cos\theta)^2$.
- The general bullet now gives $a, b > 0$ and the meeting point $x = 4a^{1/3}b^{2/3}$ (checked: area $\frac{16ab}{3}$).
- Figure caption (a page addition; the PDF figure has none) changed from "cut into thin vertical strips" to "with one thin vertical strip", which is what the figure shows.
- AR1 to AR3, the ready-made areas and Examples 1 to 3: correct.

### Figures (not edited)
- area-even.svg and area-odd.svg: correct (the odd one shades both parts between the curve and the $x$-axis).
- riemann-sum.svg: rectangles correct (left end points, heights $f(a + rh)$, last one ends at $b$). Defect: the curve leaves the top of the picture and its label "y = f(x)" sits at y = -25 in the SVG, outside the viewBox (0 to 186), so it does not show (the PDF figure shows it). Fix: move the label inside, e.g. to about x 200, y 40, or flatten the curve.
- two-parabolas.svg: defect. The curves meet at (224, -24), above the top of the viewBox, so the region is cut open at the top and the meeting point is not seen; both labels "y² = 4ax" (y -29) and "x² = 4by" (y -53) are outside the picture and do not show. The PDF figure shows the meeting point and both labels. Fix: scale the curves so they meet at about y 30 and put the labels inside the viewBox. The strip itself is correct.

### Placement (JSON, not edited)
- tgt-mathematics.json, u11 Calculus / Integration: tp-07-01, 02, 03, 05. Correct; tp-07-04 is rightly left out (Beta, Gamma and Riemann integration are not in the TGT syllabus).
- pgt-mathematics.json, u2 Calculus / Integration: tp-07-01 to 05. Correct (methods of integration, limit of a sum, properties, area, Riemann integration).
- Key lines describe the pages. Suggestion only: the key of tp-07-03 could name "limit of a sum" (a PGT syllabus item).

### Checker
`python -I -X utf8 tools/check_net.py`: last line `0 problems`.

## Chapter 7, sections 7.6 to 7.10, check of 22 November 2026

Source: clean.pdf, PDF pages 75 to 92 (printed 74 to 91), read from the page images (`p75-075.png` to `p92-092.png` in this folder). Section 7.6 starts at the foot of PDF page 75; Chapter 8 starts on PDF page 93.

Nothing of the PDF was missing. Every box, bullet, formula, figure, caption, table, question, solution, boxed answer, note, shortcut and check box of 7.6 to 7.10 is on the pages with the same mathematics. The PDF has these questions: V1 to V7, V9, V10, V12 / V22, V13, V14, V15, V18, V19, V21, V23, V24, V25 (7.8); S1 to S4, S6 to S11, S13, S14, S15 (7.9); ME1 (7.10). All are on the pages. The gaps in the numbering (no V8, V11, V16, V17, V20, S5, S12) are in the PDF itself.

Every result, of the PDF text and of the additions, was recomputed numerically with mpmath (script `verify.py` in this folder, 75 checks, all agree). The only wrong value in these sections is the notebook's S15 value, which the PDF itself already corrects in a red box; the page has that box.

Display lines were measured with `width.py` (rough count of visible characters). Every displayed row is now under about 43 characters, and no inline formula is over about 33. `fmt.py` checks dollars, braces, `\left`/`\right`, aligned blocks, boxes and spelling: 0 problems.

### tp-07-06 (Volumes and surfaces of solids of revolution — formulas)
- Checked against PDF pages 75 to 77: strip method, the four volume formulas, polar area revolved (three axes), surface formulas, the six figure-tracing tips. Box title "Chapter 8 of your notes" (a notebook reference) is "Volumes and surfaces of revolution"; the teal box is a `! note`, as in tp-06-07.
- Split three surface-formula display lines (the widest about 75 characters) into aligned rows. "(about the initial line)" now reads "(about initial line)", as in the PDF.
- Added `! check | Condition added` after the formula box: in the surface formulas $y$, $x$, $r\sin\theta$, $r\cos\theta$ are distances, so they must be $\geq 0$ on the arc; the polar volume formulas need the region on one side of the axis ($0 \leq \theta_1 < \theta_2 \leq \pi$ about the initial line, and the matching conditions about $\theta = \frac{\pi}{2}$ and $\theta = \gamma$).
- Additions corrected: the washer formula now says $0 \leq y_1 \leq y \leq y_2$ (it is wrong for a region that crosses the axis); Pappus's theorems now say the axis must not cross the region.
- Examples 1 to 3 (cone, sphere, cylinder), flash cards, exam and recap boxes: correct.

### tp-07-07 (Figure gallery: curves used in these questions)
- Checked against PDF pages 77 and 78: the nine figures and captions, and the shortcut box "Read the figure from the equation". All present and correct.
- Additions checked: the table of the nine curves (cusps, nodes, asymptotes, where each curve exists), "What it means", flash cards, recap. All correct. No change.

### tp-07-08 (Volumes: all questions of the exercise, fully solved)
- Checked against PDF pages 78 to 86: all 19 question boxes, including the figures, the V4 note and the V18 table. All answers correct: $\frac{2}{3}\pi a^3$, $\pi h^2(a - \frac{h}{3})$, $\frac{5}{32}$, $\frac{4}{5}\pi a^3$, the mean proportional, the catenary, $\frac{\pi^2a^3}{2}$, $2\pi a^3(\log 2 - \frac{2}{3})$, $\frac{\pi a^4}{12}$, $\frac{16\pi a^3}{105}$ and $\frac{32\pi a^3}{105}$, $\frac{23\pi a^3}{60}$, $\frac{1536\pi}{5}$, $\frac{1}{2}\pi^2a^3$, $\pi^2a^3$ and $5\pi^2a^3$, $\pi a^3(\frac{3}{2}\pi^2 - \frac{8}{3})$, $\frac{3}{4}\pi$, $2\pi^2a^3$, $\frac{4}{3}\pi a^3$, $\frac{8}{3}\pi a^3$.
- Split into aligned rows the 20 display lines that were too wide for a phone (up to about 90 characters), and moved the long inline formulas of V18 (i), V19 and V21 onto display lines. In V19 the three integrals $I_1$, $I_2$, $I_3$ are now one aligned display instead of a bullet list. V18 (i) now starts "(i) About the $x$-axis:" to match "(ii) About $y = 2a$".
- "What it means" claimed that the missing numbers (V8, V11, V16, V17, V20) "are not part of" the exercise, which the PDF does not say. It now says only that the notes give no V8, V11, V16, V17 or V20, and solve V12 and V22 together.
- V14 caption: the figure shows both halves of the basin, but $x^3 = 64y$ has $y < 0$ for $x < 0$. Caption now: "section of the basin: the curve $x^3 = 64y$ ($x \geq 0$) up to $y = 8$ and its mirror image in the $y$-axis".
- Flash cards, exam and recap boxes: correct.

### tp-07-09 (Surfaces: all questions of the exercise, fully solved)
- Checked against PDF pages 86 to 91: all 13 question boxes, the red box on S15, and the "Ready answers for MCQs" shortcut (10 items). All answers correct, including S15 $= \frac{48\sqrt{2}}{5}\pi a^2$ (the notebook's $\frac{32}{5}\pi a^2$ is the S14 value, as the red box says).
- Split six wide display rows (S8, S9, S10 area, S11 twice, Example 3) and moved the long inline formula of S14 onto an aligned display.
- Addition corrected: Archimedes' zone result holds between planes perpendicular to the axis of the cylinder, not "any two parallel planes".
- Examples 1 to 3 (torus by Pappus, cone surface $\pi rl$, astroid $\frac{12}{5}\pi a^2$), flash cards, exam and recap: correct.

### tp-07-10 (Mensuration (TGT))
- Checked against PDF page 92: figure, formula sheet (6 rows), green add-on box, ME1 ($R^3 = 294$, $R \approx 6.65$ cm; CSA $175\pi \approx 550$ cm²). Box title "Formula sheet p.1" is "Formula sheet" (page reference dropped).
- Split the bucket example's display line (about 60 characters) into two rows.
- Examples 1 to 5 (18 cm, 22 litres, 21 % and 33.1 %, 84 cm², 22 cm and 154 cm²), flash cards, exam and recap: correct.

### Figures (not edited)
- disc-method.svg: the blue curve $y = f(x)$ is drawn only from $x = 60$ to $x = 152.5$ (viewBox units); from there to $b$ the curve is only the thin black edge of the shaded region, and the blue label "$y = f(x)$" sits next to the black part. Extending the blue polyline to $x = 260$ fixes it.
- curve-strophoid.svg: the loop is not closed at $(a, 0)$. Both polylines stop at $x = 126.8$ ($y = 57.9$ and $62.1$), leaving a visible gap at the tip of the loop, where the curve should cross the axis with a vertical tangent. Adding the point $(127, 60)$ to both polylines closes it.
- vol-hemisphere.svg: the end of the arc runs through the label "(a, 0)"; moving the label a little right or down would make it easier to read. Cosmetic only.
- vol-basin.svg: shows both halves (the section of the basin); the caption now says so.
- All other figures (the other eight gallery curves, vol-cap, vol-reel with the region between arc and axis shaded, vol-cycloid-vertex, vol-param-loop, vol-cardioid, surf-cycloid-arch, solids) show what their captions and the text say. Several are drawn with different horizontal and vertical scales (witch, basin, cycloid arch); this is fine for sketches.

### Placement (JSON, not edited)
- tgt-mathematics.json, unit u11 Calculus, part "Integration": tp-07-06 to tp-07-10. Correct: the TGT syllabus asks for "definite integrals and their applications in finding the area between curves, and the volumes and surfaces of the cylinder, the cone and the sphere". The key lines describe the pages.
- pgt-mathematics.json, unit u2 Calculus, part "Integration": tp-07-06 to tp-07-09. The PGT syllabus names only "applications in finding the area under simple curves", not volumes or surfaces. The pages do no harm there, but the owner may want to remove them from PGT, or keep them as extra practice. tp-07-10 is rightly TGT only.

### Checker
`python -I -X utf8 tools/check_net.py`: last line `0 problems`.

## Chapters 6 and 7, after the checks (22 November 2026)

- Figures redrawn as the checkers asked: `folium.svg` now has its fourth-quadrant branch (missing in the PDF figure too); `tangent-normal.svg` is drawn to one scale, so the normal meets the tangent at a right angle, and shows the angle θ and the right-angle mark; `nearest-point.svg` is drawn to one scale, so the segment meets the parabola at its true nearest point $(h, k)$; the labels of `rise-fall.svg`, `riemann-sum.svg`, `two-parabolas.svg` (which now shows the meeting point $(4a, 4b)$) and `vol-hemisphere.svg` sit inside the frame and clear of the curves; `disc-method.svg` draws the curve in full; the loop of `curve-strophoid.svg` closes at $(a, 0)$.
- Placement: in PGT, 6.2 (partial differentiation, two variables) and 6.7 (curvature, asymptotes, tracing) moved to a part of their own, "Partial differentiation and curves"; key lines of 6.1, 6.5 and 7.3 extended as suggested.
- Phone width: 75 display formulas of 6.1–7.10 were still wider than a 375-pixel screen. They were split into one step per line (mostly at their top-level "="; a few by hand at a "+" or "×"). A script compared every split formula with its checked text, ignoring line breaks, alignment marks and spacing: the mathematics is unchanged (the only difference is answer (b) of 6.1, moved from an inline formula to a display of its own). In the browser at 375 pixels all 17 pages render with no KaTeX error, no formula wider than the screen and every figure loaded.

## Chapter 8, check of 22 November 2026

Source: clean.pdf, PDF pages 93 to 99 (printed 92 to 98), read from the page images `c8-093.png` to `c8-099.png` in this folder. Chapter 8 starts at the top of PDF page 93; page 99 holds only the end of 8.5 (the cardioid bullet and OT1).

Nothing of the PDF was missing. Every box, bullet, formula, figure, caption, question, solution, boxed answer and shortcut of 8.1 to 8.5 is on the pages with the same mathematics and words. The PDF questions are OD1 to OD3, FO1 to FO7, CL1, CC1, CC2 and OT1; all are on the pages. Two parts of PDF boxes were shown outside their box on the page (a blank line ended the box too early); both are now inside, as in the PDF. The figure of 8.5 is now inside its box, as in the PDF.

No slip in the PDF. Every result of the PDF text and of the additions was recomputed with sympy (script `verify.py` in this folder, 71 checks, all agree).

`width.py` (rough visible width): no display row over 45 characters, no inline formula over 35. `fmt.py` (dollars, braces, `\left`/`\right`, boxes, solutions, spelling): 0 problems. All five files have LF line endings. `tools/check_net.py`: 0 problems.

### tp-08-01 (Order, degree and formation)
- Checked against PDF pages 93 and 94: the note box (four bullets), OD1, OD2, OD3 (a) to (d), the shortcut box. All present, same words.
- Recomputed OD1 orders and degrees, OD2, OD3 (a) to (d) (including $y' = \frac{2xy}{x^2 - y^2}$ and $xyy'' + x(y')^2 - yy' = 0$), the check-box example $y = (a + b)x$, the shortcut counts, Examples 1 to 3 and the flash cards. All correct.
- No change.

### tp-08-02 (First order, first degree equations)
- Checked against PDF pages 94 to 96: the note box (items 1 to 4, written as bullets "(1)" to "(4)", and the four integrating-factor rules), FO1 to FO6, the Bernoulli add-on, FO7, the shortcut box.
- Change: removed the blank line before "**Integrating factors** when …". It ended the note box, so the four integrating-factor rules were shown after the box as ordinary text; in the PDF they are inside the blue box.
- Change: the added check box said that dividing by $(1 - e^x)\tan y$ in FO1 may lose $\tan y = 0$. That is not so: $\tan y = 0$ is the case $C = 0$ of the answer. What is lost is the line $x = 0$ (where $1 - e^x = 0$), which satisfies the equation. The sentence now says this.
- Recomputed FO1 to FO7 (each answer checked against the equation), $Mx + Ny = -y^4$, $Mx - Ny = 3x^3y^3$, the ratio $\frac{3}{x}$ and IF $x^3$, the exact potentials of FO4, FO5, FO6, the Bernoulli reduction, the three exact combinations, Examples 1 to 3. All correct.

### tp-08-03 (Higher degree equations; singular solutions (PGT))
- Checked against PDF pages 95 to 97: the add-on box (five bullets, the discriminants $EN^2C^3$ and $ET^2C$), the figure and its caption, CL1.
- Recomputed CL1 (both signs of $p$; the check box on the sign is right), the Clairaut differentiation, Examples 1 to 3. All correct.
- Change: Example 3 was titled "reducing to Clairaut's form", but the equation is already in Clairaut's form (the solution says so) and nothing is reduced. Title now "Clairaut's form with a square root".
- Figure `clairaut.svg`: checked numerically. The parabola is $y^2 = 4ax$ with $a \approx 8$ px, and each of the 12 lines has intercept $\frac{a}{c}$ to within 0.1 px, so they are its tangents, six on each branch. It shows what the caption says. Left for the owner (cosmetic): the white box behind the label "envelope y² = 4ax" (opacity 0.9) is drawn on top of the lower branch, so the red curve fades out under the label at the bottom right.

### tp-08-04 (Linear equations with constant coefficients (PGT))
- Checked against PDF pages 97 and 98: the add-on box (CF, the four PI rules, Cauchy–Euler), CC1 (a) to (c), CC2, the shortcut box.
- Change: removed the blank line before "**Cauchy–Euler** …", which ended the add-on box too early; in the PDF the Cauchy–Euler line is inside the green box.
- Conditions added to the existing check box: the rule $x\frac{e^{ax}}{f'(a)}$ needs $f'(a) \neq 0$; the rule for $x^m$ needs $f(0) \neq 0$, otherwise write $f(D) = D^kg(D)$, expand $\frac{1}{g(D)}$ and integrate $k$ times (checked on $(D^2 + D)y = x$).
- Recomputed CC1 (a) to (c), CC2, the failing-case formulas for $\sin ax$ and $\cos ax$ ($a = 1, 2, 3$), the $e^{ax}$ failing cases, the shortcut, Examples 1 to 3. All correct.

### tp-08-05 (Orthogonal trajectories)
- Checked against PDF pages 98 and 99: the add-on box with its figure and caption, the four pairs of families, OT1.
- Change: the figure line now stands inside the add-on box as its first line, where the PDF has it (it stood before the box).
- Recomputed the four pairs (circles and lines, $y^2 = 4ax$ and $2x^2 + y^2 = c$, $xy = c$ and $x^2 - y^2 = c$, the two cardioids by $\tan\phi_1\tan\phi_2 = -1$), OT1, Examples 1 to 3, the self-orthogonal confocal conics (one numerical case) and the polar rule in the check box. All correct.
- Figure `orth-circles.svg`: three circles about the origin and six lines through the centre. It matches the caption.

### Placement
- `tgt-mathematics.json`, unit u11 (Calculus), part "Differential equations": tp-08-01 and tp-08-02. These match the TGT items "Order and degree of a differential equation" and "General solution of … first order and first degree". Right.
- `pgt-mathematics.json`, unit u3 (Ordinary Differential Equations): all five pages. They match the PGT items order and degree, formation (08-01), first order and first degree (08-02), singular solutions (08-03), linear equations with constant coefficients and homogeneous (Cauchy–Euler) equations (08-04). Right.
- Orthogonal trajectories (08-05) is not named in either syllabus. It only uses forming a DE and first-order equations, so PGT u3 is a fair home. Optional suggestion: it could also be listed in TGT u11, since it needs nothing beyond the TGT items.
- The `key` lines describe the pages correctly. No change suggested.

## Chapter 9, check of 22 November 2026

Source: clean.pdf, PDF pages 100 to 108 (printed 99 to 107), read from the page images (`p-100.png` to `p-108.png` in this folder) and the text layer (`p100-108.txt`).

Nothing of the PDF was missing. Every box, bullet, formula, table, figure, question (TI1 to TI3, TE1, TE2, IT0 to IT2, TR1, TR2, HD1), solution, boxed answer, shortcut box and the add-on table of 9.1 to 9.6 is on the pages with the same mathematics and words. Three PDF passages sat outside their box on the pages (a blank line after a table ends a box); they are now inside it (see below).

Every number, identity and step, of the PDF text and of the additions, was recomputed numerically (`verify.py`, 1791 checks, all agree; identities tested at random points, triangle results on random triangles, Euler's formula with coordinates, the ambiguous case by solving for the third side). No slip was found in the PDF. In the additions, two check boxes were imprecise (tp-09-02, tp-09-06) and were reworded.

Formula widths were measured with `width.py` (rough count of visible characters, as in the earlier checks): every display row is now at most 36, every inline formula at most 33. `fmt.py` (dollars, braces, aligned blocks, boxes, spelling, LF endings): 0 problems. `tools/check_net.py`: 0 problems.

### tp-09-01 (Trigonometric ratios and the unit circle)
- Checked against PDF page 100: unit-circle figure, circular measure, signs, allied angles, table of special values, the line on 18°, 36°, 15°, 75°, 22½°, the sin/cos figure. All present and correct. The two check boxes (radians; tan 90° not defined) are correct.
- Change: removed the blank line between the table and "Also sin 18° = ..." so that line stays inside the note box, as in the PDF.
- Change: Example 2, the inline chain for tan(−300°) (about 48 characters) is now a two-row display.
- Additions (radian, allied-angle rule, periods, ranges, Examples 1 to 3, cards, exam, recap): correct.

### tp-09-02 (Trigonometric identities)
- Checked against PDF pages 101 and 102: all seven bullets, TI1, TI2, TI3 and the shortcut box. All present and correct.
- Change: the cos 2θ display line (about 47 characters) split into two aligned rows. The TI1 display lines (about 41) split into two rows each, for phone width.
- Change: the existing check box said tan(A ± B) needs "tan A tan B ≠ ±1 as the case may be"; it now says ≠ 1 for A + B and ≠ −1 for A − B.
- Added `! check | Condition added` after TI2: the identity holds only where cos A + cos 3A = 2 cos 2A cos A ≠ 0, i.e. cos A ≠ 0 and cos 2A ≠ 0 (the factor 2 cos A is cancelled).
- Change: the check box after the shortcut said the tan identity needs "no angle equal to π/2"; for real A, B, C with A + B + C = π it needs no angle an odd multiple of π/2 (and the cot identity no angle a multiple of π). Reworded.
- Additions (half angles, a sin x + b cos x = √(a² + b²) sin(x + α), Examples 1 to 3, cards): correct.

### tp-09-03 (Trigonometric equations)
- Checked against PDF pages 102 and 103: the table of general solutions, TE1, TE2. All present and correct. The check box (α in the last row, |c| ≤ √(a² + b²), tan α defined) is correct.
- Change: TE1, the inline chain (about 57 characters) is now a three-row display. TE2, the display line (about 38) split at ⇒ into two rows.
- Additions (why (−1)ⁿ, principal solution, Examples 1 to 3; the roots of sin 3θ + sin θ were also found by a sign scan: only multiples of π/2): correct.

### tp-09-04 (Inverse circular functions)
- Checked against PDF pages 103 to 105: table of principal ranges, eight bullets, the box "Why the ranges are restricted", six graphs with captions, IT0, IT1, IT2, shortcut. All present and correct. The check box (domains of the three π/2 sums; tan⁻¹ sum for xy > 1) is correct.
- Change: removed the blank line between the table and the bullets, so the eight bullets are inside the note box, as in the PDF.
- Change: the bullet sin⁻¹x + cos⁻¹x = tan⁻¹x + cot⁻¹x = sec⁻¹x + cosec⁻¹x = π/2 (about 46 characters inline) is now two inline formulas.
- Additions (sin⁻¹(sin θ) = π − θ on [π/2, 3π/2], domains, Examples 1 to 3 including the rejected root x = −1, cards): correct.

### tp-09-05 (Properties and solution of triangles)
- Checked against PDF pages 105 to 107: notation box, three figures with captions, rules box, radii box with relations, TR1, TR2, the add-on table and the ambiguous case. All present and correct. Both check boxes (O and I in Euler's formula; A right or obtuse) are correct.
- Change: removed the blank line between the add-on table and "Ambiguous case ...", so that paragraph is inside the green box, as in the PDF.
- Change: recap line with the area formulas (about 37 characters inline) split into two formulas.
- Additions (sine rule and circumcircle, Δ = rs, Examples 1 to 3, cards): correct.

### tp-09-06 (Heights and distances)
- Checked against PDF pages 107 and 108: figure, the box with the two-position formula, HD1, shortcut. All present and correct. The first check box (level ground, B between A and the foot) is correct.
- Change: the second check box said h = √(ab) "is for two points on the same side of the tower". The result h² = ab only needs a and b to be the distances from the foot; it holds for points on opposite sides too. Reworded so it says what a and b are and drops the false restriction.
- Additions (where the formula comes from, depression = elevation, Examples 1 to 3, cards): correct.

### Figures
All twelve figures rendered (`fig-*.png`) and checked: unit-circle (P, sin θ, cos θ, ASTC labels), sin-cos (zeros and extremes at the right multiples of π/2), the six inverse-function figures (dark piece on [−π/2, π/2], [0, π], (−π/2, π/2); inverse graphs with the right ranges and asymptotes), tri-circum (O is equidistant from A, B, C: 59.0), tri-in (I is the incentre, distance 34.6 to all three sides), tri-ex (I₁ is the excentre opposite A; distances to BC and to AB, AC produced are 57.1 against a drawn radius 57.2, half a pixel, invisible), heights (α at A, β at B, d = AB, h, right angle at the foot). No figure problem.

### Placement
TGT: 9.1 to 9.5 are in Unit 7 (Trigonometry), 9.6 in Unit 8, which in the official TGT syllabus is where "Heights and distances" stands (under Complex Numbers). PGT: all six in Unit 10 (Trigonometry), in the order of the syllabus (equations, triangles, inverse functions, heights). The `key` lines describe the pages. No change suggested.

### Left for the owner
- The pages (here: "*one–one and onto*" in tp-09-04 and "*ambiguous case*" in tp-09-05, and many other chapters) use single asterisks for italics. `fmt` in app.js (line 2263) only turns `**…**` into bold, so these asterisks are shown as they are. Either teach `fmt` italics or drop the single asterisks site-wide.

## Chapters 8 and 9, after the checks (22 November 2026)

- `clairaut.svg`: the label moved below the plot, so that nothing covers the parabola.
- Single-asterisk italics (`*…*`) used to show their asterisks on every notes page (19 places in the maths notes). `fmt` in `app.js` now turns them into italics, but only outside formulas, so stars inside `$…$` such as $T^*$ stay as they are (checked on the CSIR NET page with twelve such formulas).
- Phone width: 22 display formulas of 8.2, 8.4 and 9.1 to 9.6 were still wider than a 375-pixel screen. They were split into one step per line; a script compared every display formula with the checked text, ignoring line breaks, alignment marks and spacing: no difference. In the browser at 375 pixels all 11 pages render with no KaTeX error and nothing wider than the screen.

## Chapter 10, sections 10.1 to 10.6, check of 22 November 2026

Source: clean.pdf, PDF pages 109 to 114 (printed 108 to 113), read from the page images (`p-109.png` to `p-114.png` in this folder) and the text layer (`p109-114.txt`).

Nothing of the PDF was missing. Every box, bullet, formula, table, figure, question (AR1, DM1, DM2, SR1, CR1, CR2), solution, boxed answer, shortcut box and add-on box of 10.1 to 10.6 is on the pages, with the same mathematics and words. Box titles that were only meta labels ("Complex notes, Chapter 1", "Complex notes, Chapter 1–2", "Complex LT, 25/04/26", "Your notes p.19") are replaced by short titles, as allowed.

Every number, identity and step, of the PDF text and of the additions, was recomputed numerically (`verify.py`, 20636 checks, all agree): powers of i, conjugate and modulus rules on random numbers, the quadrant table against `cmath.phase` on 500 random points and the axes, AR1 (a) to (f), De Moivre for n = −6 to 6, DM1 for n = −4 to 7 and random θ, DM2, roots of complex numbers and of unity (sum, product, regular polygon), the square-root formula with its sign rule on 500 random numbers, the Cauchy–Riemann equations by finite differences (z², z̄, eᶻ, |z|², polar form for z³), CR2 along y = mx, Milne–Thomson. No slip was found in the PDF.

Formula widths were measured with `width.py` (rough count of visible characters, as in the earlier checks): every display row is now at most 35, every inline formula at most 31. `fmt.py` (dollars, braces, aligned blocks, boxes, cards, spelling, LF endings): 0 problems. `tools/check_net.py`: 0 problems.

### tp-10-01 (Complex numbers: basic definitions)
- Checked against PDF page 109: six bullets, the Re/Im display, the Argand figure and its caption. All present and correct.
- The check box (a, b real; z₂ ≠ 0 in the quotient rule; equality in the triangle inequality only when one number is 0 or one is a positive multiple of the other) is correct.
- Additions (equality, division by the conjugate, real/imaginary tests, distance; Examples 1 to 3: i¹⁰³ = −i, sum 0, (3 + 4i)/(1 − 2i) = −1 + 2i with modulus √5, z = 2 + i; cards, exam, recap): correct.
- No change.

### tp-10-02 (Argument (amplitude) of a complex number)
- Checked against PDF pages 109 and 110: the figure, a = r cos θ, b = r sin θ, the basic-angle display, the paragraphs on the argument and general values. All present and correct.
- Change: in the PDF the figure is the first item inside the "From your notes" box; on the page it stood before the box. The `^` line is now the first line of the note box.
- The check box (z ≠ 0; a ≠ 0 in tan α = |b/a|, α = π/2 when a = 0) is correct.
- Additions (two coordinates for one point, why the quadrant matters, arguments of products; Examples 1 and 2: −√3 + i has r = 2, α = π/6, argument 5π/6; general values of arg i; cards): correct.

### tp-10-03 (Principal argument)
- Checked against PDF pages 110 and 111: definition, method, the eight-row table, the four-panel figure with its captions, AR1, the shortcut box. All present and correct.
- The check box (non-zero numbers; Arg z̄ = −Arg z fails on the negative real axis, where both are π) is correct.
- Additions (why (−π, π], tan⁻¹(b/a) wrong by π in quadrants II and III, adjusting; Example 1: (1 + i)(−1 + i) = −2, Arg π; Example 2: (−1 − i)³ = 2 − 2i, Arg −π/4; cards): correct.
- No change.

### tp-10-04 (Polar form, Euler's form and De Moivre's theorem)
- Checked against PDF page 112: five bullets, the cos/sin display, DM1, DM2, the add-on on roots. All present and correct. roots-unity.svg is an addition.
- Change: the Product bullet (inline formula about 48 characters) now has its formula on a two-row display; the words "for n factors the angles add" follow it.
- Change: the DM1 statement (inline, about 47) is now a two-row display; the first display of the solution (about 48) is split into two aligned rows.
- Added `! check | Condition added` after DM1: n is an integer, as in De Moivre's theorem, and for n < 0 also cos(θ/2) ≠ 0 (for θ an odd multiple of π both sides are undefined). The identity is false in general for other n (with principal powers, n = 1/2, θ = 4 gives 1.535 against 0.986i).
- Change: the check box after the note box ("A condition added", on p/q in lowest terms) is now "Conditions added" and also says that n is an integer in 1 = e^{2nπi} and −1 = e^{(2n+1)πi}.
- The check box on roots (z ≠ 0, n ≥ 1; polygon for n ≥ 3; sum 0 for n ≥ 2) is correct.
- Additions (why angles add, multiplying by z, cos 3θ and sin 3θ; Examples 1 to 3: cube roots of −8 are −2 and 1 ± i√3, (1 + ω − ω²)(1 − ω + ω²) = 4, (1 + i)⁻⁸ = 1/16; cards, exam, recap): correct.

### tp-10-05 (Square root of a complex number)
- Checked against PDF page 113: the corrected formula, the sign rule, the derivation, SR1. All present and correct.
- The check box (b = 0: ±√a for a ≥ 0, ±i√(−a) for a < 0, either inner sign) is correct.
- Additions (two opposite roots, why the sign rule, polar check; Example 1: √(2i) = ±(1 + i); Example 2: discriminant −2i, roots 2 and 1 + i; card √i = ±(1 + i)/√2): correct.
- No change.

### tp-10-06 (Analytic functions and Cauchy–Riemann equations)
- Checked against PDF pages 113 and 114: four bullets, the box "Necessary but not sufficient", CR1, CR2, the Milne–Thomson add-on. All present and correct.
- Change: the first check box now also says that the polar form of the C–R equations needs z ≠ 0 (r > 0); the PDF leaves this out.
- The Milne–Thomson check box (f up to an added constant ic; u must be harmonic) is correct.
- Additions (where C–R come from, the ∂f/∂z̄ test, harmonic conjugates; Example 1: u = eˣ cos y gives f = eᶻ + ic; Example 2: |z|² differentiable only at 0, analytic nowhere; cards): correct.

### Figures
All four figures rendered (`fig-*.png`) and checked.
- argand.svg: z = a + ib, z̄ = a − ib mirrored in the real axis, |z|, a, b. Correct.
- arg-quadrants.svg: the four arcs are centred at the origin and run anticlockwise in I and II (α, π − α) and clockwise in III and IV (−(π − α), −α), as the caption says. Correct. Small difference from the PDF: the PDF marks the basic angle α in each panel; the SVG does not. Optional.
- roots-unity.svg: six points at 0°, 60°, …, 300° on the circle, hexagon drawn, labels 1 and e^{iπ/3} at the right points. Correct.
- argument.svg: **one fault, left for the owner.** The grey "θ + 2π" arc, `M61.0,112.0 A11,11 0 1 0 59.0,105.7`, has large-arc 1 and sweep 0, so the renderer puts its centre at (70, 105.7), not at the origin O (50, 112); it appears as a small circle beside O, crossing the θ arc. With sweep flag 1 (`A11,11 0 1 1 59.0,105.7`) the arc is centred at O, as in the PDF; a test render of that change is `fig-argument-sweep1.png` (the figure file itself was not changed). The red θ arc is correctly centred at O.

### Placement
TGT: 10.1 to 10.5 are in Unit 8 (Complex Numbers), part "Complex numbers and De Moivre's theorem", matching "Addition and multiplication of complex numbers" and "De Moivre's theorem and its applications". 10.6 is in the part "Functions of a complex variable" of the same unit, the nearest syllabus item. PGT: all six in Unit 10 (Trigonometry), part "Complex numbers", matching "Complex numbers; De Moivre's theorem and its applications". The `key` lines describe the pages. No change suggested.

### Left for the owner
- argument.svg: change the sweep flag of the grey arc from 0 to 1 (see Figures).
- arg-quadrants.svg: optionally label α in each panel, as in the PDF.

## Chapter 10, sections 10.7 to 10.11, check of 22 November 2026

Source: clean.pdf, PDF pages 115 to 128 (printed 114 to 127), read from the page images (`p-115.png` to `p-128.png` in this folder) and the text layer (`p115-128.txt`).

Nothing of the PDF was missing. Every box, bullet, table, figure, shortcut box and question of 10.7 to 10.11 is on the pages with the same mathematics and words: E1.1, E1.3 to E1.25, E1.27 to E1.29; L1 to L3, L6 to L11, L13 to L25; P1, P7, P8, P10, P11, P13, P16; IN1, IN4 to IN9, IN11 to IN14, IN18; the 18 results and the "how to attack" box. The missing numbers (E1.2, E1.26, L4, L5, L12, P2 to P6, P9, P12, P14, P15, IN2, IN3, IN10, IN15 to IN17) are not in the PDF either (searched the text layer; the question titles match one to one).

Every identity and step, of the PDF text and of the additions, was checked numerically with mpmath at 40 digits (`verify.py`, 1640 checks, all agree). Identities for complex arguments were tested at six random complex points each. "If f(α + iβ) = x + iy, prove …" questions were tested by solving the hypothesis with asin, acos or atan and checking the claim. General values were tested for several n. Edge cases were tested in `edge.py`. One condition was missing in the PDF (L23) and several conditions were added for the additions; no slip in a formula was found.

Formula widths were measured with `width.py`: every display row is now at most 41, every inline formula at most 33. `fmt.py` (dollars, braces, aligned blocks, \left/\right per row, boxes, flash cards, LF endings): 0 problems. `tools/check_net.py`: 0 problems.

### tp-10-07 (Exponential, circular and hyperbolic functions)
- Checked against PDF pages 115 and 116: definitions box with the proof, properties box, figure, Osborn shortcut, E1.1, E1.3 to E1.5, E1.6. All present and correct. The three check boxes ((e^z)^n for integer n; tan² counts as a product of two sinh's; the domain of E1.6) are correct.
- Change: the sin iθ proof (display, about 42 characters) split into two aligned rows.
- Change: the cosh 2x chain (about 42 inline) is now two inline formulas.
- Change: E1.1, the "Similarly …" chain (about 43 inline) is now three inline formulas; E1.3(a) (about 36 inline) two formulas.
- Change: E1.5, the display line (about 50) split into two aligned rows.
- Change: exam box said "the Gudermannian α = log tan(π/4 + θ/2)". α is the inverse Gudermannian of θ; it now says "i.e. θ is the Gudermannian of α".
- Additions (even and odd parts, hyperbola, graphs, Example 1 cosh x = 5/4 gives x = ± log 2, Example 2 Osborn, cards): correct.

### tp-10-08 (Separation into real and imaginary parts)
- Checked against PDF pages 117 to 121: the table of eight separations with the method for fractions, E1.7(iii) to E1.25, E1.27 to E1.29. All present and correct. The check boxes (real variables; tan z = i has no solution; E1.20 sign of u; x real in E1.28) are correct.
- Added `! check | A note added` after E1.25: the proof says the second root is ≥ 1, so sin²θ is the first; when sin²x = 1 the second root is exactly 1, and it is excluded only because it would give sinh²φ = −sinh²y/D < 0.
- Changes for phone width: E1.7(iii) (62), E1.8 and E1.9 (46 each), E1.14 two displays (about 42 and 51), E1.15 (66), E1.19 (42), E1.20 (47 inline, now a display), E1.22 (46), E1.23 (52 and 46 inline, now two displays), E1.28 (54), Example 2 (67 inline, now a display) split into aligned rows; E1.11, E1.12, E1.15, E1.16, E1.25 and E1.29 long inline chains split into two inline formulas.
- Additions (two equations from one, conjugate trick, Example 1 sin i and cos(1 + i), Example 2 |sin z|², cards): correct.

### tp-10-09 (Logarithm of a complex number)
- Checked against PDF pages 121 to 125: the note box, L1 to L25 (as numbered), Exercise 2 P1 to P16 (as numbered). All present and correct. The check boxes (log(z₁z₂) can fail for principal values; principal arguments in L15/L16; P8 needs x sec y > 0) are correct.
- Change: the check box after L6 to L10 was garbled ("(b) also needs |b| < a is **not** required — but (d) uses (b), so it needs a > 0 …"). (d) in fact holds for any a, b with a² ≠ b² and for every value of the log (tan has period π). Rewritten.
- Added `! check | A condition added` after L23 (missing condition in the PDF): the result needs a² > b². The quotient is (a + ib)/(a − ib); for a² < b² its Log is i[(2n + 1)π + tan⁻¹(2ab/(a² − b²))] (a = 0, b = 1 gives Log(−1) = (2n + 1)πi, not 2nπi). Verified numerically.
- Added `! check | A condition added` after P10 and P11: (a) needs cos α > 0, as in L10; for cos α < 0 the factor is e^{α + (2m+1)π} with |cos α|. Verified numerically.
- Changes for phone width: the principal-value display (42), L15 and L16 boxed results (50 each, now boxed two-row blocks), L22 (54), L23 statement (34 inline, now a display) and argument (51), L24 (42), P1 (45) split; L13 and P7 inline chains split.
- Additions (why many values, i^i = e^{−π/2} ≈ 0.208, Example 1 (1 + i)^i, Example 2 log(−1 − i) = ½ log 2 − 3πi/4, cards): correct. L20 was also tested on the negative real axis (y = 0, x < 0): it still holds.

### tp-10-10 (Inverse circular and inverse hyperbolic functions)
- Checked against PDF pages 125 to 127: the note box with the sinh⁻¹ proof, IN1, IN4 to IN9, IN11 to IN14, IN18. All present and correct. IN1, IN4, IN9, IN11 and IN12 agree with mpmath's principal values. The check boxes (real domains; IN7 for 0 < θ < π/2; IN12 needs x/a > 0) are correct.
- Added `! check | A condition added` after IN13, IN14, IN18: (a) needs −π/2 < θ < π/2; as cosh is even the full answer is x = ± log(sec θ + tan θ), and log(sec θ + tan θ) is the value with the sign of θ (the solution's √(sec²θ − 1) = tan θ needs θ ≥ 0).
- Changes for phone width: IN1 statement (49 inline, now a display) and IN4 (49) split into two rows; IN7 and IN9 statements (38 inline) split into two inline formulas.
- Additions (why logarithms appear, Example 1 sinh⁻¹(3/4) = log 2 and tanh⁻¹(1/2) = ½ log 3, Example 2 sin⁻¹2 = π/2 + i log(2 + √3), cards): correct.

### tp-10-11 (Important results and exam tips: complex numbers)
- Checked against PDF pages 127 and 128: the 18 results and the "how to attack" box. All present and correct; each result was recomputed.
- Change: the check box item "(16): principal value of log a, a ≠ 0" reworded to "(16): a ≠ 0; the principal value of a^z uses the principal value log a".
- Change: "What it means" said "Most UP PGT questions come from the third layer, most TGT questions from the first". The syllabus texts say the opposite of what this suggests: the TGT syllabus names exponential, circular and hyperbolic functions and separation into real and imaginary parts, the PGT syllabus only complex numbers and De Moivre's theorem. Replaced by a sentence saying what each syllabus names.
- Additions (Example 1 MCQ test, Example 2 |cos i| = cosh 1 ≈ 1.543 and Arg(1 + i)⁴ = π, cards): correct.

### Figures
hyperbolic.svg rendered (`fig-hyperbolic.png`) and measured from its coordinates: cosh x has its minimum 1 at 0 and touches the dashed line y = 1; sinh x is odd, increasing and below cosh x; tanh x goes through 0 with slope 1 and lies between the dashed lines y = ±1 (1 unit = 26 px, scales consistent). Correct. Two small cosmetic points for the owner: the label "cosh x" touches the blue curve at its last letter, and the dashed lines y = 1 and y = −1 carry no labels.

### Placement
TGT: 10.7 to 10.11 are in Unit 8 (Complex Numbers), part "Functions of a complex variable"; the syllabus names exponential, circular and hyperbolic functions of a complex variable and separation into real and imaginary parts, and 10.9 and 10.10 belong with them. PGT: all five in Unit 10, part "Complex numbers" (syllabus: complex numbers; De Moivre's theorem and its applications). The `key` lines describe the pages. No change suggested.

### Left for the owner
- L23 in the notes themselves needs the condition a² > b² (now stated on the page).
- The figure label points above.

## Chapter 10, after the checks (22 November 2026)

- `argument.svg`: the grey "θ + 2π" mark was an arc drawn about the wrong centre; it is now a full dashed circle about $O$. `arg-quadrants.svg` labels the basic angle $\alpha$ in each panel, as the PDF does. `hyperbolic.svg`: the "cosh x" label moved off its curve and the lines $y = \pm 1$ are labelled.
- Phone width: 63 display formulas of 10.1 to 10.10 were still wider than a 375-pixel screen, and two long inline formulas in 10.9 could not wrap. They were split into one step per line (two inline formulas became displays; one fraction of E1.7(iii) is written as a product of two fractions, and $\frac{[\ldots]}{4}$ in E1.17 as $\frac{1}{4}[\ldots]$, the same values). A script compared every other display formula with the checked text, ignoring line breaks, alignment marks and spacing: no difference. In the browser at 375 pixels all 11 pages render with no KaTeX error and nothing wider than the screen.

## Chapter 11, sections 11.1 to 11.4, check of 22 November 2026

Source: clean.pdf, PDF pages 129 to 136 (printed 128 to 135), read from the page images (`p-129.png` to `p-136.png` in this folder) and the text layer (`p129-136.txt`). 11.5 starts on PDF page 136; nothing after the 11.4 shortcut box was used.

Nothing of the PDF was missing. Every box, bullet, sub-bullet, table, figure, question (L1, L2, PL1, PL2, GE1 to GE4, C1, C2), boxed answer and shortcut box of 11.1 to 11.4 is on the pages with the same mathematics and words. The "LT 2018", "LT 2025" titles stay.

Every number and step, of the PDF text and of the additions, was recomputed in `verify.py` (exact fractions for the questions, random tests for the general formulas; 4648 checks, all agree). No slip was found in the PDF. Conditions and notes were added as listed below.

The five figures were rendered (`fig-*.png`) and measured from the SVG coordinates: they are correct (see each page).

`tools/check_net.py`: 0 problems. All four files have LF line endings.

### tp-11-01 (Points and straight lines)
- Checked against PDF pages 129 and 130: the basic formulas add-on, the forms box with its figure, the angle, distance and image box with its figure, L1, L2. All present and correct. L1: d = 3/5, image (−1, 4) (mid-point (0, 3) is on the line). L2: tan θ = 1.
- Section, external division, incentre, area, image, foot and distance formulas tested at random points: all correct.
- Change: in the check box on the forms, the intercept form needs a line that cuts both axes away from the origin; "not parallel to an axis" was added (a line parallel to an axis has no intercept on it).
- Change: added to the check box on the angle, distance and image: the image formula needs a, b ≠ 0; if a = 0 read α = x₁, if b = 0 read β = y₁.
- Change: the Loney reference gave "chapters 1 to 6". I could not check the chapter numbers offline; as I recall the book, chapter 6 is on equations representing two or more straight lines (the pair of lines). The reference now names the chapters by subject ("the chapters on coordinates and on the straight line").
- Additions (what it means, Example 1 x + y = 5, Example 2 d = 2, Example 3 area 12, cards, exam, recap): correct.
- Figures: line-forms (p is perpendicular to the line, α is its angle) and line-image (PM ⊥ line, M is the mid-point of PP′) are correct. The PDF figure has a right-angle mark at the foot of p; the SVG has none (not needed).
- Placement: TGT Unit 10 (Cartesian plane, straight line) and PGT Unit 4. Right; the key describes the page.

### tp-11-02 (Pair of straight lines)
- Checked against PDF pages 131 and 132: the box (figure, slopes, angle, real or imaginary lines with the three sub-bullets and the examples, bisectors, Δ, distance between parallel lines with the example, point of intersection), PL1, PL2, the homogenisation add-on. All present and correct.
- Distance example: (x + 2y + 4)(x + 2y − 1) expands correctly; both forms give √5. PL1: h² − ab = 25/4, tan θ = 1, factors (y − 3x)(y + 2x). PL2: the five terms are −8, −5/2, −1, −1, 25/2, so Δ = 0; the lines are (x − y − 1)(x − 4y + 2).
- Slopes, angle, bisector, both distance formulas and the point of intersection tested on random pairs: correct. The existing check boxes (b ≠ 0, h ≠ 0, ab ≠ h², n ≠ 0 for homogenising) are correct.
- Change: the Loney reference gave "chapter 7" (as I recall, chapter 7 is the transformation of coordinates). It now reads "the chapter on equations representing two or more straight lines".
- Additions (what it means, Example 1 perpendicular lines, Example 2 λ = (9 ± √5)/2, also confirmed by Δ = 0, cards, exam, recap): correct.
- Figure pair-lines: the two green lines are the exact bisectors of the blue and red lines (18.4° and 108.4°). Correct.
- Placement: TGT Unit 10 ("homogeneous equation of the second degree and pair of straight lines; bisectors and angle") and PGT Unit 4. Right; the key describes the page.

### tp-11-03 (General equation of the second degree)
- Checked against PDF pages 132 to 134: the box with Δ, the table of six rows, the centre rule, GE1 to GE3, the transformation add-on, GE4, the shortcut box. All present and correct.
- GE1: the five terms 250, 90, −45, −125, −90 give Δ = 80; the centre (−1, 0) and the reduced equation 5X² − 6XY + 5Y² + 5 = 0 are correct. GE2: centre (1, 1). GE3: Δ = −192, a real ellipse 3(x − 3)² + 4(y − 3)² = 16. GE4: a′, b′ = 2, 8, e = √3/2. Shortcut: e = 4/5 and 5/3.
- The real or imaginary ellipse rule (Δ(a + b) < 0) was tested on 300 random ellipses; c′ = Δ/(ab − h²) holds. Rotation by tan 2θ = 2h/(a − b) removes the xy term, and a + b, ab − h² are invariant (random tests).
- Change: the circle check box said "needs Δ ≠ 0 and g² + f² − ac ≥ 0"; together these mean > 0, which was unclear. Rewritten: a ≠ 0; Δ = a(ac − g² − f²); real circle when g² + f² − ac > 0 (that is Δ(a + b) < 0, as for a real ellipse), point circle when it is 0 (Δ = 0), no real points when it is negative.
- Added `! check | A note added` after GE2: like GE1, this conic has no real points (Δ = 16, Δ(a + b) > 0; it becomes 5X² − 6XY + 5Y² + 1 = 0). The centre (1, 1) is still right. This is not a slip in the question, but the notes treat GE1 the same way.
- Change: the Loney reference gave "chapter 15"; as I recall, chapter 15 is the polar equation of a conic and the general equation is in chapters 16 and 17. It now reads "the chapters on the general equation of the second degree".
- Additions (what it means, Example 1 parabola Δ = −1, Example 2 rectangular hyperbola Δ = −25/4, cards, exam, recap): correct.
- Placement: TGT Unit 10 (conditions for the general equation; transformation of axes) and PGT Unit 4 (classification of the general equation). Right; the key describes the page.

### tp-11-04 (Circle)
- Checked against PDF pages 134 to 136: the circle box with its figure and the two sub-bullets, the sector and segment box, the two-circles figure, the "more circle results" add-on, C1, C2, the shortcut box. All present and correct.
- C1: r = 5, S₁ = 9 (also (distance)² − r² = 34 − 25), L = 3. C2: 3x + 4y = 25; the chord x + 2y = 5 meets the circle at (5, 0) and (−3, 4), mid-point (1, 2). The area RL³/(R² + L²), the tangency condition, the director circle, both common tangent lengths and T = S₁ were tested at random: correct.
- Change: the circle figure stood above the box; in the PDF it is inside the box. Moved inside (first line of the box).
- Change: the check box said T = 0, T = S₁ and L = √S₁ all need the normal form. Only L = √S₁ does; T = 0, T = S₁ and SS₁ = T² do not change when the equation is multiplied by a constant. Rewritten.
- Added `! check | A condition added` after the sector box: θ is the angle at the centre in radians; (r²/2)(θ − sin θ) is the segment on the arc of angle θ, the minor segment when θ < π.
- Change: added to the add-on check box that S₁ − S₂ = 0 needs both circles with x² and y² coefficients 1.
- Kept the Loney reference "chapters 8 and 9 (the circle)": it agrees with my memory of the book (the circle; systems of circles), but I could not check it offline.
- Additions (what it means, Example 1 x² + y² − 4x − 6y = 0, Example 2 orthogonal, d² = r₁² + r₂² = 10, cards, exam, recap): correct.
- Figures: circle-tangents (the tangent points satisfy cos φ = R/d, so the lines are tangent; the chord of contact joins them) and two-circles (d = 38, 32, 22, 8, 3 against radii 20 and 12 give exactly 4, 3, 2, 1, 0 common tangents) are correct.
- Placement: TGT Unit 10 (conics, tangent, pair of tangents) and PGT Unit 4 (pair of tangents and chord of contact). Right; the key describes the page. Suggestion for the owner: TGT Unit 9 (Geometry: circle and sector, segment, arc and chord, tangent to a circle) has no pages; tp-11-04 (sector, segment, arc, tangents) could also be listed there.

### Left for the owner
- The Loney chapter numbers on tp-11-05 to tp-11-08 (parabola 10, ellipse 11, hyperbola 12, polar 14) follow the same numbering as the old references here; as I recall the book they are parabola 10 and 11, ellipse 12 and 13, hyperbola 14, polar equation 15. Please check against your copy (those pages are outside this check).

## Chapter 11, sections 11.5 to 11.8, and Chapter 12, check of 22 November 2026

Source: clean.pdf, PDF pages 136 to 143 (printed 135 to 142), read from the page images (`p-136.png` to `p-143.png` at 80 dpi, `h-136.png` to `h-143.png` at 150 dpi, and clips `c136b.png` to `c143a.png` at 170 dpi, all in this folder). 11.5 starts partway down PDF page 136; Chapter 12 ends on PDF page 143.

Nothing of the PDF was missing. Every box, bullet, formula, figure, shortcut box and question of 11.5 to 11.8, 12.1 and 12.2 is on the pages with the same mathematics and words: P1, P2, the parametric add-on; the ellipse note, add-on and E1; the hyperbola note, add-on, H1 and the H + C = 2A shortcut; the polar add-on with its figure and PC1; the 12.1 add-on with its figure; the three 12.2 note boxes (dot, cross, triple products) with their figures, V1 to V4, the "More identities" add-on and the shortcut box. No slip was found in the PDF mathematics.

Every formula, step and boxed answer, of the PDF text and of the additions, was checked numerically in `verify.py` (plain Python floats, random test values: 2703 checks, all agree). It covers the intersection discriminants of line and parabola, ellipse and hyperbola; slope-form tangents; parametric tangents and normals of all three conics and of xy = c²; focal chords; director circles; conjugate diameters; focal distances; the conjugate-eccentricity relation; the polar chord, tangent, directrix and focal-chord results (also for a hyperbola line meeting both branches); the common tangent; Lagrange, Binet–Cauchy, BAC–CAB, [a+b b+c c+a], [a×b b×c c×a], the moment about a line, the half-angle formulas and every numbered question and example. `tools/check_net.py`: 0 problems. LF line endings kept.

### tp-11-05 (Parabola)
- Checked against PDF pages 136 and 137: figure, note box (4 bullets), P1 (normal y = 2x − 30, foot (10, −10)), P2 (y = 2x + ½), parametric add-on. All present and correct. The existing check box (a > 0; m ≠ 0 in the intersection test; foot of the normal (am², −2am)) is correct.
- Added `! check | A condition added` after the parametric add-on: the focal-chord and normal results use 1/t and 2/t₁, so they need t ≠ 0, t₁ ≠ 0 (at the vertex the focal line and the normal are both the axis, which meets the curve once).
- Additions (focus–directrix derivation, Example 1 x² = −12y, Example 2 latus rectum as a focal chord, cards, exam and recap boxes): correct.

### tp-11-06 (Ellipse)
- Checked against PDF pages 137 and 138: figure, note box (3 bullets), add-on (parametric form, director and auxiliary circles, focal distances, area), E1 (a = 5, b = 3, e = 4/5, foci (±4, 0), directrices x = ±25/4, LR 18/5). All present and correct. The check box (normal form needs sin θ, cos θ ≠ 0; PS₁ = a + ex, PS₂ = a − ex) is correct.
- Change: "What it means" said the y-coordinate is "shrunk by b/a"; it now says "multiplied by b/a" (the factor, not a subtraction).
- Change: Example 2 boxed "x ± 5" at the end of "y = x ± √(16 + 9) = …"; the box now holds the whole answer y = x ± 5.
- Additions (two definitions, eccentric angle, Example 1 x²/25 + y²/16 = 1, cards): correct.

### tp-11-07 (Hyperbola)
- Checked against PDF pages 138 and 139: figure, note box, add-on (asymptotes, tangent, director circle, conjugate hyperbola, xy = c²), H1 (e = 5/3, foci (±5, 0), asymptotes y = ±4x/3), shortcut H + C = 2A. All present and correct. The check box (slope-form tangent only for |m| > b/a; director circle real only for a > b, a point for a = b) is correct.
- No change.
- Additions (asymptotes as the limit, conjugate hyperbola, Example 1 asymptotes x + 1 = ±2(y + 1) with k = −3 confirmed by Δ = 0, Example 2 x + 4y = 8 at (4, 1), cards): correct.

### tp-11-08 (Polar equation of a conic; common tangents (PGT))
- Checked against PDF page 139: the add-on with its figure (l/r = 1 + e cos θ, axis at angle α, chord, tangent, directrix, focal chord, common tangents with the example x + y + a = 0) and PC1 (e = 5/4, hyperbola, l = 2). All present and correct. The orientation in the existing check box (initial line from the focus towards its directrix, θ = 0 gives the nearer vertex at l/(1 + e)) agrees with the formula and with the figure.
- Added to the existing check box: r₁, r₂ in the focal chord property are signed; for a hyperbola whose line through S meets both branches the distances satisfy |1/SP − 1/SQ| = 2/l (verified numerically).
- Change: "What it means" now says "($S$ between $P$ and $Q$)" after "every chord PQ through the focus", for the same reason.
- Change: the exam box wrote "l/r = A + B cos θ"; with l already the semi-latus rectum this is confusing, so it is now "k/r = A + B cos θ" (after dividing by A, l = k/A).
- Additions (derivation of the polar form, minus sign, Example 1 r = 6/(1 + cos θ): parabola, LR 12, Example 2 common tangent, cards): correct.

### tp-12-01 (Vector algebra: basics)
- Checked against PDF page 140: the add-on with its figure (5 bullets). All present and correct. The check box (non-zero vector for unit vector and DCs; internal and external section; meaning of a, b, θ) is correct.
- Change: "Collinear points" now says "(with A ≠ C)"; if A = C ≠ B the test AB = λ·AC fails although the points are collinear.
- Added to "What it means": direction ratios (the components, or the same non-zero multiple of all three; PGT syllabus) and a bullet on the difference of vectors and relative velocity, v_A − v_B (TGT syllabus, Unit 12, names both; neither the PDF nor the page had them).
- Additions (Example 1 unit vector ⅔, −⅓, ⅔; Example 2 resultant 7 N; Example 3 point (3, 0, 5); cards): correct.

### tp-12-02 (Scalar (dot) and vector (cross) products)
- Checked against PDF pages 140 to 143: the dot-product box with figure and the work bullet, the cross-product box with figure, the triple-products box with figure, V1 (a·b = −4, θ = cos⁻¹(−4/9), projection −4/3), V2 (area √21/2), V3 (det = 3λ − 12, λ = 4), V4 (W = 40), the "More identities" add-on, the shortcut box (cube angles cos⁻¹⅓ and cos⁻¹(1/√3)). All present and correct. The three check boxes (non-zero vectors for a·b = 0; zero vector parallel to all; volume = |[a b c]|) are correct.
- Change: the recap gave "volume [a b c]; tetrahedron ⅙[a b c]" without absolute values, against the page's own check box; now |[a b c]| and ⅙|[a b c]|.
- Change: "What it means" says a·b̂ is the "(signed)" length of the shadow (it is negative for an obtuse angle, as in V1).
- Additions (Example 1 ±(i − j + k)/√3, Example 2 volume 2, BAC–CAB, cards): correct.

### Figures
All eight figures were rendered (`fig-*.png`) and measured from their coordinates.
- parabola.svg: a = 20 px; directrix, latus rectum ends (a, ±2a) and P on the curve are exact (PS = PM = 71.2 px). Correct.
- ellipse.svg: foci at ±ae and directrix at a/e match a = 88, b = 57.2 px; P lies on the curve. Correct.
- hyperbola.svg: foci at ±ae match a = 35.2 px and the asymptote slope b/a = 0.875. Correct. The caption names P, but no point P is drawn (the PDF figure has none either).
- polar-conic.svg: S is the right focus of the drawn ellipse, P is on it, θ is measured from the initial line. Correct and consistent with l/r = 1 + e cos θ. The PDF figure also draws the semi-latus rectum l as a red segment from S; the SVG leaves it out (cosmetic).
- vec-parallelogram.svg: geometry correct (b − a runs from the tip of a to the tip of b). **The label "a + b" starts at x = 194 in a 200-wide viewBox, so it is cut off at the right edge (only "a" shows).** Move it left or widen the viewBox.
- vec-projection.svg, vec-cross.svg, vec-triple.svg: correct.

### Placement
TGT: 11.5 to 11.8 are in Unit 10 (Coordinate Geometry), part "Conics" (syllabus: standard equations of the conics, tangents and normals, parametric equations, standard polar equation of a conic); 12.1 and 12.2 in Unit 12 (Vector Analysis), part "Vectors" (position, displacement, free and unit vectors; composition; scalar, vector and triple products; work and moment). PGT: 11.5 to 11.8 in Unit 4 (Coordinate Geometry of Two Dimensions; syllabus names tangents and normals and common tangents to two conics); 12.1 and 12.2 in Unit 5, part "Vectors". The `key` lines describe the pages. No change suggested. One remark: the PDF heading of 11.8 says "(PGT)", but the polar equation of a conic is named in the TGT syllabus only and common tangents in the PGT syllabus only; the page is rightly listed in both.

### Left for the owner
- The cut-off "a + b" label in vec-parallelogram.svg.
- Optional: the semi-latus rectum l in polar-conic.svg, and a point P in hyperbola.svg.

## Chapter 13, sections 13.1 to 13.3, check of 22 November 2026

Source pages read: clean.pdf, PDF pages 144 to 155 (printed 143 to 154), as page images at 80 dpi, plus the pdftotext layer for the running words. 13.4 starts on PDF page 156 and was not checked here.

Completeness: nothing of the PDF was missing. Every box, bullet, formula, figure, worked question (DL1 to DL2, PL1 to PL9, Sp1 to Sp13), boxed answer and shortcut box is on the pages, with the same mathematics and wording. Notebook headings in box titles ("3D LT Mains, 12-22/02/26", "The Sphere (B.Sc. I yr), 23-26/02/26") were already replaced by plain titles ("The plane", "The sphere"), as on the published chapters. "LT pre 2025" on Sp9 and the "(Ex. 14-16)" style labels stay.

Mathematics: every number, determinant, cross product, distance, angle, boxed answer and step was recomputed in Python (verify.py in this folder, 68 checks, all pass). This includes the additions (examples, flash cards, tricks). No slip was found in the PDF or in the additions.

Figures: dir-cosines, plane-normal, line-plane, skew-lines, sphere, sphere-diameter, sphere-touch, sphere-section and two-spheres were rendered and looked at. Each shows what its caption and the text say (P on both circles in two-spheres, P on the circle with the right angle in sphere-diameter, N, p, R, C in sphere-section, the right angle at L1 in skew-lines). No figure problem.

Placement: tp-13-01 to tp-13-03 are in the "Three-dimensional geometry" part of TGT unit u10 (Coordinate Geometry, whose syllabus names the sphere, cone and cylinder; the line and the plane are their groundwork) and of PGT unit u5 (Vectors and Three-Dimensional Geometry, whose syllabus names lines, planes, angles, distances and the sphere). The key lines describe the pages. No change suggested. One remark: the PGT syllabus names "intersection of two lines"; no page works an example of it (only line and plane, and two planes).

check_net.py: last line "0 problems".

### tp-13-01 (Direction cosines and the straight line)
- Checked against PDF pages 144 to 145: the notes box with its figure, DL1, DL2; the existing "Conditions added" box is correct.
- Recomputed DL1 (DRs 2, -3, 5; point (13/5, 23/5, 0)), DL2 (sum 4/3, checked for random directions), the sin^2 sum 2, Examples 1 and 2 (60 degrees) and the cube flash card.
- Change: in "What it means" the projection bullet now names P(x1, y1, z1) and Q(x2, y2, z2), because the formula uses these coordinates and the points were not defined.
- Left for the owner: in DL2 the PDF lists the diagonals as (1/sqrt3)(+-1, +-1, 1) but writes cos delta for (1, 1, -1); this is the same diagonal with the opposite sense, and the squares are equal, so nothing was changed.

### tp-13-02 (The plane)
- Checked against PDF pages 145 to 149: the three notes boxes, the two figures between them, PL1 to PL9 and the shortcut box.
- Recomputed PL1 (6/sqrt29, foot (12/29, -18/29, 24/29), DCs -6/7, 3/7, 2/7), PL2, PL3 (normal (16, 24, 32)), PL4 (20x + 23y + 26z = 69, also checked on a point of the common line), PL5 (determinant 0), PL6 (4/21, 5/(7 sqrt3)), PL7 (13/7, 8/21), PL8 (5x - 4y - z = 7; 6/sqrt34), PL9 (3/sqrt2), the image formula and Examples 1 and 2.
- Change: the check box after the figures now also says that (alpha, beta, gamma) is the image of (x1, y1, z1) and that -1 in place of -2 gives the foot. Reason: the PDF does not name alpha, beta, gamma. Title changed to "Conditions added".
- Change: new check box after the shortcut box: in the tetrahedron volume, a, b, c are the three edges from one vertex. Reason: the PDF leaves this out.
- Left for the owner: the second reference is NCERT Class 12 Part II chapter 11; the rationalised NCERT edition (2023 on) dropped the plane from that chapter, so an older edition is meant.

### tp-13-03 (The Sphere)
- Checked against PDF pages 149 to 155: the notes boxes (sphere, two spheres, tangent plane, tangency steps, pole and polar, angle between spheres), the three figures inside boxes, Sp1 to Sp13 and the shortcut box.
- Recomputed Sp1 to Sp13: constants 4, -11, -20, -22, -13 and -11; Sp2 centre (2, -3, -1), r = 3; Sp5 r = 7; Sp8 both lambdas give tangency; Sp9 centre (1, -2, 3) on the plane and circle radius equal to sphere radius 2; Sp10 radius sqrt7, centre (1, 3, 4); Sp11 numerically; Sp12 point (-1, 4, -2) lies on both sphere and plane; the tangency condition, the orthogonality equivalence and the shortcut formula for the point of contact; Examples 1 and 2.
- Change: in the "Conditions added" box on two spheres, "between" became "strictly between", with "at either end they touch at one point". Reason: at the end values the spheres touch and there is no circle.
- Change: new check box after Sp13: it needs p != 0, since a plane through the centre is the polar of no point.
- Change: the check box after the angle-between-spheres box now says that theta is the angle C1PC2 between the radii (the normals of the tangent planes) and that the spheres must meet. Title changed to "Conditions added".
- Change: new check box after the "Sphere in 10 seconds" shortcut: the plane is written ax + by + cz + d = 0 and the plane value is that left side at C. Reason: with the form lx + my + nz = p used just above, the sign of the value would otherwise be unclear.
- Left for the owner: nothing else.

## Chapter 13, sections 13.4 and 13.5, and Chapter 14, check of 22 November 2026

Source pages read: clean.pdf pages 156 to 167 (printed 155 to 166), as page images at 80 dpi, plus page 168 to confirm that section 14.3 ends on page 167 (page 168 starts chapter 15).

Nothing of the PDF was missing. Every box, bullet, formula, worked question, solution, boxed answer, shortcut and figure of sections 13.4, 13.5, 14.1, 14.2 and 14.3 is on the pages, in order, with the same words (meta labels dropped as the brief says; titles "page G-266", "05/03/26", "11/03/26", "LT 2025" kept). No slip in the PDF was found.

Every number, expansion, derivative and integral of the PDF text and of the additions was recomputed with sympy (script `verify.py` in this folder). All agree. One sympy line (the Laplacian of $r^n$) needed a numerical check because the simplifier did not close it; the formula $n(n+1)r^{n-2}$ is right.

### tp-13-04 (The Cone)

- Checked: definition, $\Delta$ and its expansion, generator test, cone through the axes; Co1, Co2 (expansions); the 4 × 4 cone condition; Co3 (vertex and condition; the 4 × 4 determinant is $abc(d - u^2/a - v^2/b - w^2/c)$); Co4 (vertex $(2, 2, 1)$, $F = 0$ there, $\Delta = -72$); cofactors $A \dots H$; self-reciprocal example; Co5; Co6 ($a + b + c = 0$, $A + B + C = -7$); right circular cone formula and the $z$-axis case; Co7. Additions: Example 1 ($yz - 8zx + 9xy = 0$ contains both lines), Example 2 (a point at $60°$ to the axis lies on it), flash cards, exam and recap boxes. The three check boxes already on the page are correct.
- Change: added a check box after Co3: $a, b, c \neq 0$ are needed, and then the condition is exactly the cone condition. Reason: the PDF divides by $a, b, c$ without saying so.
- Change: added a check box after Co4: $\Delta = -72 \neq 0$, so the cone is proper (the PDF finds the vertex but does not test $\Delta$).
- Change: rewrote the "Why homogeneous" bullet of What it means. The old sentence ("a polynomial with that property in every degree is homogeneous") was unclear; the new one states $f(tx, ty, tz) = t^2 f(x, y, z)$.

### tp-13-05 (The Cylinder)

- Checked: definition, types 1 and 2; Cy1 (full expansion); Cy2 (meeting point and the boxed equation); right circular cylinder (projection, and the simplified form equals $\lvert \vec{AP} \times \vec{b} \rvert^2$); Cy3 (expansion of the square, $AP^2$, boxed answer); Cy4; enveloping cylinder (checked by the tangency discriminant). Additions: both examples, flash cards, exam and recap boxes. The check box already on the page is correct.
- No change.

### tp-14-01 (Differentiation of vector functions)

- Checked: product rules, triple product rule, tangent vector, constant length and direction; Example 1 (speed $\sqrt{2}$, acceleration), Example 2; flash cards. The check box already on the page is correct.
- No change.

### tp-14-02 (Gradient, divergence and curl)

- Checked: all standard results for $r$ (gradients, $\operatorname{div}(r^n\vec{r})$, $\nabla^2 r^n$), all four product identities with general fields, curl grad, div curl, grad of $\vec{r} \cdot \vec{a}$ and of $[\vec{r}\ \vec{a}\ \vec{b}]$, $(\vec{a} \cdot \nabla)\vec{r}$; G1 to G7 (G6: the cross product and $-4\hat{i} - 8\hat{j}$); shortcut ($\operatorname{curl}(\vec{\omega} \times \vec{r}) = 2\vec{\omega}$, $f(r)\vec{r}$ irrotational). Additions: Example 1 (the point lies on both surfaces, $\cos\theta = \frac{8}{3\sqrt{21}}$), Example 2 ($a = -2$), flash cards.
- Change: in the second check box, added "$\nabla\frac{f}{g}$ needs $g \neq 0$".
- Change: added a check box after the shortcut: $\vec{\omega}$ constant, $f$ differentiable, $r \neq 0$ for the $r^n$ results. Reason: the PDF shortcut leaves these out.

### tp-14-03 (Line, surface and volume integrals; integral theorems)

- Checked: Green, Gauss and Stokes statements; addon formulas; IT1 by the divergence theorem and by summing the six face integrals (both $\frac{3}{2}$); IT2 by Green and by the four sides directly (both $\frac{3}{2}$); IT3; IT4 (curl $\vec{0}$, potential, work $202$). Additions: ellipse area $\pi ab$, flux of $\hat{k}$, flash cards. The two check boxes already on the page are correct.
- Change: added a check box after the shortcut: "curl $\vec{0}$ gives zero circulation" and "div $0$ gives zero flux" need $\vec{F}$ smooth on the whole region inside. Counterexamples checked: $\vec{r}/r^3$ (flux $4\pi$ through a sphere about the origin) and $(-y\hat{i} + x\hat{j})/(x^2 + y^2)$ (circulation $2\pi$ round the unit circle).

### Figures

All nine figures were rendered and checked (cone, right-cone, cylinder, right-cylinder, vec-tangent, grad-normal, thm-green, thm-stokes, thm-gauss). They match their captions: the $\theta$ arc in right-cone lies between the axis and $VP$; $PQ$ is perpendicular to the axis in right-cylinder; in vec-tangent the red vector is tangent to the curve at the tip of $\vec{r}(t)$ (slopes agree); in grad-normal the green line is tangent at $P$ and the red $\nabla\phi$ is perpendicular to it; thm-green is traversed anticlockwise; in thm-stokes the arrow on $C$ agrees with the upward $\hat{n}$ by the right-hand rule; thm-gauss shows radial outward normals.
- Small remarks for the owner (no change made): the labels in vec-tangent read "r(t)" and "dr/dt" without vector arrows; in grad-normal the upper (lighter) level curve has no label, where the PDF figure labels it $= c_2$.

### Placement

- tp-13-04 and tp-13-05: TGT unit "Coordinate Geometry", chapter "Three-dimensional geometry" (syllabus Unit-10: "Three-dimensional geometry of the sphere, the cone and the cylinder"); PGT unit "Vectors and Three-Dimensional Geometry" (syllabus: "Equations of the sphere, the cone and the cylinder"). Correct.
- tp-14-01 to tp-14-03: PGT unit "Vector Calculus" only (syllabus Unit-8). Correct; the TGT syllabus has no vector calculus.
- The `key` lines describe the pages. No suggestion.

`python -I -X utf8 tools/check_net.py`: last line `0 problems`.

## Chapters 11 to 14, after the checks (22 November 2026)

- Figures: `vec-parallelogram.svg` is wider, so the label a + b is no longer cut off; `hyperbola.svg` now shows the point P with PS₁ and PS₂; `polar-conic.svg` draws the semi-latus rectum l, as the PDF figure does; `grad-normal.svg` labels both level curves, φ = c₁ through P and the higher φ = c₂, as the PDF does (the captions say so). The labels of `vec-tangent.svg` are left without vector arrows.
- Book references: the Loney references on tp-11-04 to tp-11-08 and the Shanti Narayan references on tp-13-03 to tp-13-05 now name the chapters by subject, since the chapter numbers could not be checked offline. The NCERT reference on tp-13-02 says that the plane is in the older editions.
- tp-13-01 gained Example 3 (where two lines meet), a card and an exam line, because the PGT syllabus names the intersection of two lines and no page worked it.
- The suggestion to list tp-11-04 also under TGT Unit 9 was not taken: Unit 9 is Euclidean geometry, which Chapter 17 of the notes covers; tp-11-04 is coordinate geometry.
- Phone width: 53 display formulas of 11.2 to 14.3 were wider than a 375-pixel screen. They were split one step per line, and long boxed answers are boxed over two or three lines. Two were rewritten with the same value: in the right circular cone of 13.4 the factor cos²θ stands before the bracket, and in 13.5 AQ = [...]/√(a² + b² + c²) is written as 1/√(a² + b² + c²) × [...]. A script compared every other display formula with the checked text, ignoring line breaks, alignment marks and spacing: no difference. In the browser at 375 pixels all 18 pages render with no KaTeX error and nothing wider than the screen.
