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
