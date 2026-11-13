# NET / JRF corner: CSIR NET Mathematical Sciences notes

## Unit 1, check of 14 November 2026

Independent check of the eighteen notes `data/net/csir-mathematics/ma-u1-01.txt` to `ma-u1-18.txt`. Every statement, table entry and counter-example was worked out. No outright false theorem was found. The corrections are missing hypotheses, a wrong reason in one table, an incorrect definition of convexity, overstated "exactly" or "includes all" claims, and gaps in standard examination material. `tools/check_net.py` ends with `0 problems`. The chapter names and key lines in `data/net/csir-mathematics.json` are correct and were left unchanged.

### 01 Sets, countability and the real number system
- Corrected: "$\sup(A+B) = \sup A + \sup B$" now says "for non-empty bounded sets". The identity needs both sets to be non-empty and bounded.
- Corrected: the table entry "All functions from N to {0,1}" repeated "all sequences of 0s and 1s" from the row above. It now reads "all functions N to N; all bijections of N".
- Added: countable "eventually constant (or eventually zero) integer sequences" against uncountable "all infinite subsets of N".

### 02 Point-set topology of the real line
- Corrected: "$\{1/m + 1/n\}$" now names its index set, $m, n \in \mathbb{N}$. The table values were checked and are right.
- Corrected: "A compact subset contains its sup and inf" now says "non-empty compact subset".
- Added: the Cantor set has the cardinality of $\mathbb{R}$, and $C + C = [0,2]$. A non-empty perfect set is uncountable. Closed sets are $G_\delta$ and open sets are $F_\sigma$.

### 03 Sequences of real numbers
- Corrected: Stolz-Cesàro said "$b_n$ increases to $\infty$". It now says "strictly increasing with $b_n \to \infty$", because the quotient divides by $b_{n+1} - b_n$, which must not be 0.
- Corrected: the lim sup and lim inf inequalities for sums now carry the condition "right-hand side not $\infty - \infty$", with an example where the inequality is strict.
- Added: $a_{n+1} - a_n \to 0$ does not make a sequence Cauchy ($\sqrt{n}$, $\log n$). The set of limit points of a sequence is closed.

### 04 Series of real numbers
- Corrected: the geometric series now has its index range, $n \ge 0$. The sum $1/(1-r)$ is right only from $n = 0$.
- Added: $\sum (-1)^n/n^p$ converges for $p > 0$ and absolutely only for $p > 1$. For $a_n \ge 0$ with $\sum a_n$ convergent, $\sum \sqrt{a_n}/n$ converges but $\sum \sqrt{a_n}$ need not. Pringsheim: for decreasing $a_n$ with $\sum a_n$ convergent, $n a_n \to 0$.

### 05 Limits, continuity and uniform continuity
- Corrected: the table gave "product of two uniformly continuous functions" as the reason that $x \sin x$ is not uniformly continuous. That is not a reason, since such products can be uniformly continuous. The new reason is the pair of sequences $2n\pi + 1/n$ and $2n\pi$.
- Corrected: the reason "unbounded slope" for $e^x$ has been replaced by explicit sequences, $n + 1/n$ and $n$. An unbounded derivative alone does not rule out uniform continuity ($\sqrt{x}$).
- Corrected: "monotone function" now says "monotone function on an interval".
- Added: $e^x$ on $(-\infty, 0]$ is uniformly continuous. A uniformly continuous function on $\mathbb{R}$ grows at most linearly. A continuous function on an interval that takes only rational values is constant.

### 06 Differentiability and the mean value theorems
- Corrected: convexity was defined as "$f'' \ge 0$". It is now defined by the chord inequality, with "$f'' \ge 0$" as the test for twice-differentiable $f$. The old definition excluded non-differentiable convex functions such as $\lvert x \rvert$.
- Corrected: $x^\alpha \sin(1/x)$ is now written $\lvert x \rvert^\alpha \sin(1/x)$, because $x^\alpha$ is undefined for $x < 0$ and non-integer $\alpha$. The thresholds $\alpha > 0$, $> 1$ and $> 2$ were checked and are right.
- Corrected: the Cauchy mean value theorem now needs $g' \ne 0$ on $(a,b)$ and gives $c \in (a,b)$. L'Hôpital's rule now needs $g' \ne 0$ near the point.
- Added: $\lvert f' \rvert < 1$ alone does not give a fixed point: $f(x) = x + \pi/2 - \tan^{-1} x$. The converse of L'Hôpital's rule fails: $x^2 \sin(1/x) / x$.

### 07 Riemann integration and improper integrals
- Corrected: the Leibniz rule now requires $u$ and $v$ to be differentiable. The recap line "$F$ is differentiable where $f$ is continuous" now says "at least where", since $F$ may be differentiable elsewhere too.
- Added: a composition of integrable functions need not be integrable (Thomae followed by a step function gives Dirichlet). Changing finitely many values does not affect integrability. Two table rows: $\int_0^\infty x^{p-1}/(1+x)\,dx$ converges for $0 < p < 1$, to $\pi/\sin p\pi$; $\int_0^\infty \sin(x^2)\,dx$ converges.

### 08 Bounded variation, Lebesgue measure and integral
- Corrected: "a BV function has only jump discontinuities" now says "discontinuities of the first kind (jump or removable)". A BV function can have a removable discontinuity, for example the indicator of a single point.
- Corrected: the monotone convergence theorem and Fatou's lemma now say "measurable" (with a.e. convergence in the monotone convergence theorem).
- Added: the fat Cantor set (nowhere dense with positive measure), and outer regularity of measurable sets.

### 09 Sequences and series of functions
- Corrected: nothing false. All $M_n$ values were recomputed: $1/2$, $1/(2\sqrt{n})$ and $\sqrt{n/(2e)}$ are right.
- Added: table rows for $x^n(1-x)$ (uniform convergence) and $nx(1-x^2)^n$ (integral limit $1/2 \ne 0$). For uniform convergence of $\sum f_n$, $\sup \lvert f_n \rvert \to 0$ is necessary. Radii of $\sum a_n x^{2n}$ and $\sum n^k a_n x^n$.

### 10 Functions of several variables
- Corrected: Schwarz's theorem now asks for the mixed partials to exist near the point and be continuous at it.
- Corrected: Euler's theorem now asks for a differentiable $f$. Lagrange multipliers now need $\nabla g \ne 0$. The Hessian test now needs a $C^2$ function at a critical point.
- Added: the classic $xy(x^2 - y^2)/(x^2 + y^2)$, whose mixed partials at the origin are $-1$ and $1$. All five table examples were verified.

### 11 Metric spaces and normed linear spaces
- Corrected: the matrix table said "nilpotent matrices: not compact" and "$SL_n$ unbounded" without a size condition. Both are false for $n = 1$, so $n \ge 2$ was added. The header claimed all sets are in $M_n(\mathbb{R})$; it now reads "real unless stated".
- Corrected: the flash card "closed and bounded implies compact only in $\mathbb{R}^n$" now reads "in $\mathbb{R}^n$ and any finite-dimensional normed space". The Baire theorem now says "non-empty".
- Added: rows for $GL_n(\mathbb{C})$ (connected), $U(n)$ and symmetric positive definite matrices. Density of $GL_n(\mathbb{R})$, and of diagonalisable matrices in $M_n(\mathbb{C})$ but not in $M_n(\mathbb{R})$. Completeness rows for the metrics $\lvert \tan^{-1}x - \tan^{-1}y \rvert$ (not complete) and $\lvert x^3 - y^3 \rvert$ (complete).

### 12 Vector spaces, subspaces, basis and dimension
- Corrected: "solutions of a linear ODE of order $n$" now says "homogeneous linear ODE", since the solutions of a non-homogeneous equation do not form a vector space. The dimension-formula box now says "finite-dimensional spaces".
- Added: skew-Hermitian matrices over $\mathbb{R}$ ($n^2$), $M_n(\mathbb{C})$ over $\mathbb{R}$ ($2n^2$), and matrices commuting with a diagonal matrix with distinct diagonal entries ($n$). Over $F_q$, the numbers of $k$-dimensional and $(n-k)$-dimensional subspaces are equal.

### 13 Linear transformations
- Corrected: for projections, "eigenvalues 0 and 1" became "among 0 and 1". "rank = trace" is now limited to real or complex spaces, because over $F_p$ the trace is only the rank mod $p$. The same change was made in the flash card.
- Corrected: the nilpotent bound "$k \le n$" now refers to the least such $k$. "$L(V,W)$ has dimension $mn$" now says $\dim V \cdot \dim W$, because $m$ and $n$ were not defined there. "Equality if the other factor is invertible" is now stated precisely.
- Added: $\operatorname{rank} T^2 = \operatorname{rank} T$ if and only if $V = N(T) \oplus R(T)$. $AB = I$ implies $BA = I$ for square matrices, and this fails in infinite dimensions (shift operators).

### 14 Matrices, rank, determinants and linear equations
- Corrected: "Normal includes all the types above" was false, because a complex symmetric matrix need not be normal. The entry now lists Hermitian, skew-Hermitian, unitary and the real symmetric, skew-symmetric and orthogonal matrices.
- Corrected: "a consistent $Ax = b$, $b \ne 0$, has exactly $n - r + 1$ linearly independent solutions" now reads "the largest number of linearly independent solutions is $n - r + 1$". "Infinitely many solutions" is now limited to $\mathbb{R}$ or $\mathbb{C}$, since over $F_q$ the count is finite. The formula for $\operatorname{adj}(\operatorname{adj} A)$ now says $n \ge 2$.
- Added: $\operatorname{adj}(AB) = \operatorname{adj} B \operatorname{adj} A$, and the matrix determinant lemma $\det(I + uv^T) = 1 + v^T u$.

### 15 Eigenvalues, eigenvectors and diagonalisation
- Corrected: "any polynomial with distinct roots gives diagonalisable" was false over $\mathbb{R}$ (the rotation by $90^\circ$ satisfies $x^2 + 1$). It now requires a polynomial that splits over $F$ into distinct linear factors, and $x^2 - 1$ needs characteristic not 2.
- Corrected: idempotent and involutory eigenvalues are now "among" 0, 1 and $\pm 1$. Row-stochastic now says "entries $\ge 0$". $A^{-1}v = \lambda^{-1}v$ now says "for invertible $A$".
- Added: eigenvalues of $p(A)$ and of $\operatorname{adj} A$. Equal row sums give an eigenvalue. $A^k = I$ implies diagonalisable over $\mathbb{C}$.

### 16 Canonical forms: triangular and Jordan forms
- Corrected: none needed. The table, the partition counts $p(1), \dots, p(7)$, the block-count formula and the $n \le 3$ statement were all verified.
- Added: counting similarity classes under $f(A) = 0$ with $f$ having $k$ distinct roots in the field: $\binom{n+k-1}{k-1}$ classes, for example 10 for $3 \times 3$ complex matrices with $A^3 = I$.

### 17 Inner product spaces
- Corrected: positive definite was defined only by $\langle Tx, x \rangle > 0$ and then called "self-adjoint". Over $\mathbb{R}$ this does not force symmetry (for example the rows $(1,1)$ and $(-1,1)$). Self-adjointness is now part of the definition, with a note that over $\mathbb{C}$ it follows automatically.
- Corrected: the Hoffman and Kunze reference now cites chapters 8 and 9, since operators on inner product spaces are in chapter 9.
- Added: an orthogonal projection row ($P^2 = P = P^*$). Over $\mathbb{C}$, $\langle Tx, x \rangle = 0$ for all $x$ implies $T = 0$, but not over $\mathbb{R}$.

### 18 Quadratic forms
- Corrected: none false. The congruence class counts $(n+1)(n+2)/2$ (real) and $n + 1$ (complex symmetric) and the 3 by 3 value 10 were verified.
- Added: a form $x^T B x$ with non-symmetric $B$ has matrix $(B + B^T)/2$. A product of positive definite matrices has positive eigenvalues, and it is positive definite if the matrices commute.

### References
- All four links open and show what the text says: MIT OCW 18.100A (Real Analysis, Fall 2020), 18.06 (Linear Algebra, Spring 2010, Strang), 18.02SC (Multivariable Calculus, Fall 2010), and the CSIR-HRDG home page. The NPTEL link in the JSON also works. The CSIR-HRDG home page shows only a language choice when fetched, so the NET notices could not be seen on the fetched page.
- Book chapters were checked against the known tables of contents: Rudin 1 to 11, Bartle and Sherbert (4th ed.) 1 to 11, Royden and Fitzpatrick (4th ed.) 2 to 6, Hoffman and Kunze 1 to 10, Axler, Friedberg, Insel and Spence, Strang (Linear Algebra and Its Applications), Apostol (Mathematical Analysis, 2nd ed., chapters 12 and 13), Simmons, de Barra. All match. Only the Hoffman and Kunze citation in note 17 was widened.
- Not certain: chapter numbers depend on the edition. They match the editions above, but older editions of Axler or Bartle and Sherbert number some chapters differently. The chapter descriptions given for S. K. Mapa, Malik and Arora, and Kumaresan are subject names rather than chapter numbers, and they are consistent with those books.
