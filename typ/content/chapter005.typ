// Generated from ../../fdg-book/scheme/org/chapter005.org.
// Re-run scripts/convert-org-to-typst.mjs to refresh.
#import "../lib.typ": fdg-chapter, curl, grad, Lap, div, length

#fdg-chapter("Integration", numbered: true, eq-prefix: "5", ref-label: "chap-5")[
We know how to integrate real-valued functions of a real variable. We want to extend this idea to manifolds, in such a way that the integral is independent of the coordinate system used to compute it.

The integral of a real-valued function of a real variable is the limit of a sum of products of the values of the function on subintervals and the lengths of the increments of the independent variable in those subintervals:

$ integral_a^b f = integral_a^b f (x)d x = lim_(Delta x_i arrow.r 0) sum_i f (x_i)Delta x_i $ <5.1>

If we change variables $(x = g (y))$, then the form of the integral changes:

$ integral_a^b f = integral_a^b f (x)d x = integral_(g^(-1) (a))^(g^(-1) (b)) f (g (y))D g (y)d y = integral_(g^(-1) (a))^(g^(-1) (b)) (f compose g)D g $ <5.2>

We can make a coordinate-independent notion of integration in the following way. An interval of the real line is a 1-dimensional manifold with boundary. We can assign a coordinate chart $χ$ to this manifold. Let $x = chi (sans(m))$. The coordinate basis is associated with a coordinate-basis vector field, here $partial\/partial sans(x)$. Let $ω$ be a one-form on this manifold. The application of $ω$ to $partial\/partial sans(x)$ is a real-valued function on the manifold. If we compose this with the inverse chart, we get a real-valued function of a real variable. We can then write the usual integral of this function

$ I = integral_a^b omega (partial\/partial sans(x))compose chi^(-1) $ <5.3>

It turns out that the value of this integral is independent of the coordinate chart used in its definition. Consider a different coordinate chart $x' = chi' (sans(m))$, with associated basis vector field $partial\/partial x'$. Let $g = chi' compose chi^(-1)$. We have

$ integral_(a')^(b') bold(omega) (partial \/ partial upright(x)') compose chi^(' - 1) = integral_(a')^(b') bold(omega) (partial \/ partial upright(x) (D (chi compose chi^(' - 1)) compose chi')) compose chi^(' - 1) = integral_(a')^(b') (bold(omega) (partial \/ partial upright(x)) D (chi compose chi^(' - 1)) compose chi') compose chi^(' - 1) = integral_(a')^(b') (bold(omega) (partial \/ partial upright(x)) compose chi^(' - 1)) D (chi compose chi^(' - 1)) = integral_a^b (((bold(omega) (partial \/ partial upright(x)) compose chi^(-1)) D (chi compose chi^(' - 1))) compose g) D g = integral_a^b bold(omega) (partial\/partial upright(x))compose chi^(-1)\, $ <5.4>

where we have used the rule for coordinate transformations of basis vectors (equation @3.19), linearity of forms in the first two lines, and the rule for change-of-variables under an integral in the last line.#footnote[Note $(D (chi compose chi^(' - 1))compose (chi' compose chi^(-1)))D (chi' compose chi^(-1))= 1$. With $g = chi' compose chi^(-1)$ this is $(D (g^(-1) compose g) (D g)= 1$.]

Because the integral is independent of the coordinate chart, we can write simply

$ I = integral_(sans(M)) omega\, $ <5.5>

where $sans(M)$ is the 1-dimensional manifold with boundary corresponding to the interval.

We are exploiting the fact that coordinate basis vectors in different coordinate systems are related by a Jacobian (see equation @3.19), which cancels the Jacobian that appears in the change-of-variables formula for integration (see equation @5.2).

== Higher Dimensions <sec-5.1>
We have seen that we can integrate one-forms on 1-dimensional manifolds. We need higher-rank forms that we can integrate on higher-dimensional manifolds in a coordinate-independent manner.

Consider the integral of a real-valued function, $sans(f) : sans(R)^n arrow.r sans(R)$, over a region $sans(U)$ in $sans(R)^n$. Under a coordinate transformation $g : sans(R)^n arrow.r sans(R)^n$, we have#footnote[The determinant is the unique function of the rows of its argument that i) is linear in each row, ii) changes sign under any interchange of rows, and iii) is one when applied to the identity multiplier.]

$ integral_(sans(U)) sans(f) = integral_(g^(-1) (sans(U))) (sans(f) compose g)det(D g). $ <5.6>

A rank $n$ form field takes $n$ vector field arguments and produces a real-valued manifold function: $omega (sans(v)\,sans(w)\,dots\,sans(u)) (sans(m))$. By analogy with the 1-dimensional case, higher-rank forms are linear in each argument. Higher-rank forms must also be antisymmetric under interchange of any two arguments in order to make a coordinate-free definition of integration analogous to equation @5.3.

Consider an integral in the coordinate system $χ$:

$ integral_(chi (sans(U))) omega (sans(X)_0\,sans(X)_1\,dots)compose chi^(-1) . $ <5.7>

Under coordinate transformations $g = chi compose chi'^(-1)$, the integral becomes

$ integral_(chi' (sans(U))) bold(omega) (sans(X)_0\,sans(X)_1\,dots)compose chi^(' - 1) det(D g) . $ <5.8>

Using the change-of-basis formula, equation @3.19:

$ sans(X) (sans(f))= sans(X)' (sans(f)) (D (chi' compose chi^(-1)))compose chi = sans(X)' (sans(f)) (D (g^(-1))compose chi . $ <5.9>

If we let $M =(D (g^(-1)))compose chi$ then

$ (omega (sans(X)_0\,sans(X)_1\,dots)compose chi^(' - 1))det(D g)=(omega (sans(X)' M_0\,sans(X)' M_1\,dots)compose chi^(' - 1))det(D g)=(omega (sans(X)'_0\,sans(X)'_1\,dots)compose chi^(' - 1))alpha (M_0\,M_1\,dots)det(D g)\, $ <5.10>

using the multilinearity of $bold(omega)$, where $M_i$ is the $i^(upright("th"))$ column of $M$. The function $alpha$ is multilinear in the columns of $M$. To make a coordinate-independent integration we want the expression (@5.10) to be the same as the integrand in

$ I' = integral_(chi' (sans(U))) omega (sans(X)'_0\,sans(X)'_1\,dots)compose chi^(' - 1) . $ <5.11>

For this to be the case, $alpha (M_0\,M_1\,dots)$ must be $(det(D (g))^(-1)= det(M)$. So $α$ is an antisymmetric function, and thus so is $ω$.

Thus higher-rank form fields must be antisymmetric multilinear functions from vector fields to manifold functions. So we have a coordinate-independent definition of integration of form fields on a manifold and we can write

$ I = I' = integral_(sans(U)) omega $ <5.12>

== Wedge Product <sec-5.2>
There are several ways we can construct antisymmetric higher-rank forms. Given two one-form fields $ω$ and $τ$ we can form a two-form field $omega and tau$ as follows:

$ (omega and tau) (sans(v)\,sans(w))= omega (sans(v))tau (sans(w))- omega (sans(w))tau (sans(v)). $ <5.13>

More generally we can form the wedge of higher-rank forms. Let $ω$ be a $k$-form field and $τ$ be an $l$-form field. We can form a $(k + l)$-form field $omega and tau$ as follows:

$ omega and tau = frac((k + l)!, k ! l !) upright("Alt") (omega "⊗" tau) $ <5.14>

where, if $η$ is a function on $m$ vectors,

$ upright("Alt") (eta) (sans(v)_0\,dots\,sans(v)_(m - 1))= frac(1, m !) sum_(sigma epsilon.alt upright("Perm") (m)) upright("Parity") (sigma)eta (sans(v)_(sigma (0))\,dots\,sans(v)_(sigma (m - 1)))\, $ <5.15>

and where

$ omega "⊗" tau (sans(v)_0\,dots\,sans(v)_(k - 1)\,sans(v)_k\,dots\,sans(v)_(k + l - 1))= omega (sans(v)_0\,dots\,sans(v)_(k - 1))tau (sans(v)_k\,dots\,sans(v)_(k + l - 1)). $ <5.16>

The wedge product is associative, and thus we need not specify the order of a multiple application. The factorial coefficients of these formulas are chosen so that

$ (sans(d) sans(x) and sans(d) sans(y) and dots) (partial\/partial sans(x))\,partial\/partial sans(y)\,dots)= 1 . $ <5.17>

This is true independent of the coordinate system.

Equation @5.17 gives us

$ integral_(sans(U)) sans(d) sans(x) and sans(d) sans(y) and dots.c = upright("Volume") (sans(U)) $ <5.18>

where $upright("Volume") (sans(U))$ is the ordinary volume of the region corresponding to $sans(U)$ in the Euclidean space of $sans(R)^n$ with the orthonormal coordinate system $(x\,y\,dots.c)$.#footnote[By using the word \"orthonormal\" here we are assuming that the range of the coordinate chart is an ordinary Euclidean space with the usual Euclidean metric. The coordinate basis in that chart is orthonormal. Under these conditions we can usefully use words like \"length,\" \"area,\" and \"volume\" in the coordinate space.]

#align(center)[#image("../assets/figures/fig-5-1.pdf", width: 92%)]

An example two-form (see figure 5.1) is the oriented area of a parallelogram in the $(x\,y)$ coordinate plane at the point $sans(m)$ spanned by two vectors $sans(u) = sans(u)^0 partial\/partial sans(x) + sans(u)^1 partial\/partial sans(y)$ and $sans(v) = sans(v)^0 partial\/partial sans(x) + sans(v)^1 partial\/partial sans(y),$ which is given by

$ sans(A) (sans(u)\,sans(v)) (sans(m))= sans(u)^0 (sans(m))sans(v)^1 - sans(v)^0 (sans(m))sans(u)^1 (sans(m)). $ <5.19>

Note that this is the area of the parallelogram in the coordinate plane, which is the range of the coordinate function. It is not the area on the manifold. To define that, we need more structure --- the metric. We will put a metric on the manifold in Chapter 9.

== 3-Dimensional Euclidean Space <sec-5.3>
Let\'s specialize to 3-dimensional Euclidean space. Following equation @5.18 we can write the coordinate-area two-form in another way: $sans(A) = sans(d) sans(x) "∧" sans(d) sans(y).$ As code:

```scheme
(define-coordinates (up x y z) R3-rect)

(define u (+ (* 'u^0 d/dx) (* 'u^1 d/dy)))
(define v (+ (* 'v^0 d/dx) (* 'v^1 d/dy)))

(((wedge dx dy) u v) R3-rect-point)
;; (+ (* u^0 v^1) (* -1 u^1 v^0))
```

If we use cylindrical coordinates and define cylindrical vector fields we get the analogous answer in cylindrical coordinates:

```scheme
(define-coordinates (up r theta z) R3-cyl)

(define a (+ (* 'a^0 d/dr) (* 'a^1 d/dtheta)))
(define b (+ (* 'b^0 d/dr) (* 'b^1 d/dtheta)))

(((wedge dr dtheta) ab) ((point R3-cyl) (up 'r0 'theta0 'z0)))
;; (+ (* a^0 b^1 ) (* -1 a^1 b^0))
```

The moral of this story is that this is the area of the parallelogram in the coordinate plane. It is not the area of the manifold!

There is a similar story with volumes. The wedge product of the elements of the coordinate basis is a three-form that measures our usual idea of coordinate volumes in $sans(R)^3$ with a Euclidean metric:

```scheme
(define u (+ (* 'u^0 d/dx) (* 'u^1 d/dy) (* 'u^2 d/dz)))
(define v (+ (* 'v^0 d/dx) (* 'v^1 d/dy) (* 'v^2 d/dz)))
(define w (+ (* 'w^0 d/dx) (* 'w^1 d/dy) (* 'w^2 d/dz)))

(((wedge dx dy dz) u v w) R3-rect-point)
;; (+ (* u^0 v^1 w^2)
;;    (* -1 u^0 v^2 w^1)
;;    (* -1 u^1 v^0 w^2)
;;    (* u^1 v^2 w^0)
;;    (* u^2 v^0 w^1)
;;    (* -1 u^2 v^1 w^0))
```

This last expression is the determinant of a $3 times 3$ matrix:

```scheme
(- (((wedge dx dy dz) u v w) R3-rect-point)
   (determinant
    (matrix-by-rows (list 'u^0 'u^1 'u^2)
                    (list 'v^0 'v^1 'v^2)
                    (list 'w^0 'w^1 'w^2))))
;; 0
```

If we did the same operations in cylindrical coordinates we would get the analogous formula, showing that what we are computing is volume in the coordinate space, not volume on the manifold.

Because of antisymmetry, if the rank of a form is greater than the dimension of the manifold then the form is identically zero. The $k$-forms on an $n$-dimensional manifold form a module of dimension $binom(n, k)$. We can write a coordinate-basis expression for a $k$-form as

$ omega = sum_(i_0\,dots.c\,i_(k - 1))^n omega_(i_0\,dots.c\,i_(k - 1)) sans(d) sans(x)^(i_0) and dots.c and sans(d) sans(x)^(i_(k - 1)) . $ <5.20>

The antisymmetry of the wedge product implies that

$ omega_(i_(sigma (0))\,dots.c\,i_(sigma (k - 1))) = upright("Parity") (sigma)omega_(i_0\,dots.c\,i_(k - 1))\, $ <5.21>

from which we see that there are only $binom(n, k)$ independent components of $ω$.

== Exercise 5.1: Wedge Product <sec-5.4>
Pick a coordinate system and use the computer to verify that

a. the wedge product is associative for forms in your coordinate system; b. formula (@5.17) is true in your coordinate system.

== Exterior Derivative <sec-5.5>
The intention of introducing the exterior derivative is to capture all of the classical theorems of \"vector analysis\" into one unified Stokes\'s Theorem, which asserts that the integral of a form on the boundary of a manifold is the integral of the exterior derivative of the form on the interior of the manifold:#footnote[This is a generalization of the Fundamental Theorem of Calculus.]

$ integral_(partial sans(M)) omega = integral_(sans(M)) sans(d) omega . $ <5.22>

As we have seen in equation @3.34, the differential of a function on a manifold is a one-form field. If a function on a manifold is considered to be a form field of rank zero,#footnote[A manifold function $sans(f)$ induces a form field $hat(sans(f))$ of rank 0 as follows:

$ hat(sans(f)) () (sans(m))= sans(f) (sans(m)). $ <5.40>] then the differential operator increases the rank of the form by one. We can generalize this to $k$-form fields with the exterior derivative operation.

Consider a one-form $ω$. We define#footnote[The definition is chosen to make Stokes\'s Theorem pretty.]

$ sans(d) omega (sans(v)_1\,sans(v)_2)= sans(v)_1 (omega (sans(v)_2))- sans(v)_2 (omega (sans(v)_1))- omega ([sans(v)_1\,sans(v)_2]). $ <5.23>

More generally, the exterior derivative of a $k$-form field is a $k + 1$-form field, given by:#footnote[See Spivak, Differential Geometry, Volume 1, p.289.]

$ sans(d) omega (sans(v)_0\,dots.c\,sans(v)_k)= sum_(i=0)^k {((- 1)^i sans(v)_i (omega (sans(v)_0 \, dots.c \, sans(v)_(i - 1) \, sans(v)_(i + 1) \, dots.c \, sans(v)_k)) + sum_(j=i + 1)^k (- 1)^(i + j) omega (sans(v)_i \, sans(v)_j] \, sans(v)_0 \, dots.c \, sans(v)_(i - 1) \, sans(v)_(i + 1) \, dots.c \, sans(v)_(j - 1) \, sans(v)_(j + 1) \, dots.c \, sans(v)_k))} . $ <5.24>

This formula is coordinate-system independent. This is the way we compute the exterior derivative in our software.

If the form field $ω$ is represented in a coordinate basis

$ omega = sum_(i_0=0\,dots.c\,i_(k - 1) = 0)^(n - 1) sans(a)_(i_0\,dots.c\,i_(k - 1)) sans(d) sans(x)^(i_0) and dots.c and sans(d) sans(x)^(i_(k - 1)) $ <5.25>

then the exterior derivative can be expressed as

$ sans(d) omega = sum_(i_0=0\,dots.c\,i_(k - 1) = 0)^(n - 1) sans(d) sans(a)_(i_0\,dots.c\,i_(k - 1)) sans(d) sans(x)^(i_0) and dots.c and sans(d) sans(x)^(i_(k - 1)) . $ <5.26>

Though this formula is expressed in terms of a coordinate basis, the result is independent of the choice of coordinate system.

== Computing Exterior Derivatives <sec-5.6>
We can test that the computation indicated by equation @5.24 is equivalent to the computation indicated by equation @5.26 in three dimensions with a general one-form field:

```scheme
(define a (literal-manifold-function 'alpha R3-rect))
(define b (literal-manifold-function 'beta R3-rect))
(define c (literal-manifold-function 'gamma R3-rect))

(define theta (+ (* a dx) (* b dy) (* c dz)))
```

The test will require two arbitrary vector fields

```scheme
(define X (literal-vector-field 'X-rect R3-rect))
(define Y (literal-vector-field 'Y-rect R3-rect))

(((- (d theta)
     (+ (wedge (d a) dx)
        (wedge (d b) dy)
        (wedge (d c) dz)))
  X Y)
 R3-rect-point)
;; 0
```

We can also try a general two-form field in 3-dimensional space:

Let

$ omega = a sans(d) sans(y) and sans(d) sans(z) + b sans(d) sans(z) and sans(d) sans(x) + c sans(d) sans(x) and sans(d) sans(y)\, $ <5.27>

where $a = α ˆ χ,$ $b = β ˆ χ,$ $c = γ ˆ χ,$ and $α$, $β$, and $γ$ are real-valued functions of three real arguments. As a program,

```scheme
(define omega
  (+ (* a (wedge dy dz))
     (* b (wedge dz dx))
     (* c (wedge dx dy))))
```

Here we need another vector field because our result will be a three-form field.

```scheme
(define Z (literal-vector-field 'Z-rect R3-rect))

(((- (d omega)
     (+ (wedge (d a) dy dz)
        (wedge (d b) dz dx)
        (wedge (d c) dx dy)))
  X Y Z)
 R3-rect-point)
;; 0
```

== Properties of Exterior Derivatives <sec-5.7>
The exterior derivative of the wedge of two form fields obeys the graded Leibniz rule. It can be written in terms of the exterior derivatives of the component form fields:

$ sans(d) (omega and tau)= sans(d) omega and tau +(- 1)^k omega and sans(d) tau\, $ <5.28>

where $k$ is the rank of $ω$.

A form field $ω$ that is the exterior derivative of another form field $omega = sans(d) theta$ is called exact. A form field whose exterior derivative is zero is called closed.

Every exact form field is a closed form field: applying the exterior derivative operator twice always yields zero:

$ sans(d)^2 omega = 0 $ <5.29>

This is equivalent to the statement that partial derivatives with respect to different variables commute.#footnote[See Spivak, Calculus on Manifolds, p.92]

It is easy to show equation @5.29 for manifold functions:

$ sans(d)^2 sans(f) (sans(u)\,sans(v))= sans(d) (sans(d) sans(f)) (sans(u)\,sans(v))= sans(u) (sans(d) sans(f) (sans(v)))- sans(v) (sans(d) sans(f) (sans(u)))- sans(d) sans(f) ([sans(u)\,sans(v)])= sans(u) (sans(v) (sans(f)))- sans(v) (sans(u) (sans(f)))-[sans(u)\,sans(v)] (sans(f))= 0 $ <5.30>

Consider the general one-form field $theta$ defined on 3-dimensional rectangular space. Taking two exterior derivatives of $theta$ yields a three-form field. It is zero:

```scheme
(((d (d theta)) X Y Z) R3-rect-point)
0
```

Not every closed form field is an exact form field. Whether a closed form field is exact depends on the topology of a manifold.

== Stokes\'s Theorem <sec-5.8>
The proof of the general Stokes\'s Theorem for n-dimensional orientable manifolds is quite complicated, but it is easy to see how it works for a 2-dimensional region $sans(M)$ that can be covered with a single coordinate patch.#footnote[We do not develop the machinery for integration on chains that is usually needed for a full proof of Stokes\'s Theorem. This is adequately done in other books. A beautiful treatment can be found in Spivak, Calculus on Manifolds @spivak1965calculus.]

Given a coordinate chart $chi (sans(m))=(sans(x) (sans(m))\,sans(y) (sans(m)))$ we can obtain a pair of coordinate-basis vectors $partial\/partial sans(x) = X_0$ and $partial\/partial sans(y) = X_1$.

The coordinate image of $sans(M)$ can be divided into small rectangular areas in the $(x\,y)$ coordinate plane. The union of the rectangular areas gives the coordinate image of $sans(M)$. The clockwise integrals around the boundaries of the rectangles cancel on neighboring rectangles, because the boundary is traversed in opposite directions. But on the boundary of the coordinate image of $sans(M)$ the boundary integrals do not cancel, yielding an integral on the boundary of $sans(M)$. Area integrals over the rectangular areas add to produce an integral over the entire coordinate image of $sans(M)$.

So, consider Stokes\'s Theorem on a small patch $sans(P)$ of the manifold for which the coordinates form a rectangular region $(x_(m i n) < x < x_(m a x) upright("and") y_(m i n) < y < y_(m a x))$. Stokes\'s Theorem on $sans(P)$ states

$ integral_(partial sans(P)) omega = integral_(sans(P)) sans(d) omega . $ <5.31>

The area integral on the right can be written as an ordinary multidimensional integral using the coordinate basis vectors (recall that the integral is independent of the choice of coordinates):

$ integral_(chi (sans(P))) sans(d) omega (partial\/partial sans(x)\,partial\/partial sans(y))compose chi^(-1) = integral_(x_(m i n))^(x_(m a x)) integral_(y_(m i n))^(y_(m a x)) (partial\/partial sans(x) (omega (partial\/partial sans(y)))- partial\/partial sans(y) (omega (partial\/partial sans(x))))compose chi^(-1) . $ <5.32>

We have used equation @5.23 to expand the exterior derivative.

Consider just the first term of the right-hand side of equation @5.32. Then using the definition of basis vector field $partial\/partial sans(x)$ we obtain

$ integral_(x_(m i n))^(x_(m a x)) integral_(y_(m i n))^(y_(m a x)) (partial\/partial sans(x) (omega (partial\/partial sans(y)))compose chi^(-1))= integral_(x_(m i n))^(x_(m a x)) integral_(y_(m i n))^(y_(m a x)) (X_0 (omega (partial\/partial sans(y)))compose chi^(-1))= integral_(x_(m i n))^(x_(m a x)) integral_(y_(m i n))^(y_(m a x)) partial_0 ((omega (partial\/partial sans(y)))compose chi^(-1)). $ <5.33>

This integral can now be evaluated using the Fundamental Theorem of Calculus. Accumulating the results for both integrals

$ integral_(chi (sans(P))) sans(d) omega (partial\/partial sans(x)\,partial\/partial sans(y))compose chi^(-1) = integral_(x_(m i n))^(x_(m a x)) ((omega (partial\/partial sans(x)))compose chi^(-1)) (x\,y_(m i n))d x integral_(y_(m i n))^(y_(m a x)) ((omega (partial\/partial sans(y))compose chi^(-1)) (x_(m a x)\,y)d y - integral_(x_(m i n))^(x_(m a x)) ((omega (partial\/partial sans(x)))compose chi^(-1)) (x\,y_(m a x))d x - integral_(y_(m i n))^(y_(m a x)) ((omega (partial\/partial sans(y)))compose chi^(-1)) (x_(m i n)\,y)d y = integral_(partial sans(P)) omega\, $ <5.34>

as was to be shown.

== Vector Integral Theorems <sec-5.9>
Green\'s Theorem states that for an arbitrary compact set $M subset upright(R)^2$, a 2-dimensional Euclidean space:

$ integral_(partial M) ((alpha compose chi)sans(d) sans(x) +(beta compose chi)sans(d) sans(y))= integral_M ((partial_0 beta - partial_1 alpha)compose chi)sans(d) sans(x) and sans(d) sans(y) . $ <5.35>

We can test this. By Stokes\'s Theorem, the integrands are related by an exterior derivative. We need some vectors to test our forms:

```scheme
(define v (literal-vector-field 'v-rect R2-rect))
(define w (literal-vector-field 'w-rect R2-rect))
```

We can now test our integrands:#footnote[Using #raw(lang:"scheme", "(define R2-rect-basis (coordinate-system->basis R2-rect))").

Here we extract $sans(d) sans(x)$ and $sans(d) sans(y)$ from R2-rect-basis to avoid globally installing coordinates.]

```scheme
(define alpha (literal-function 'alpha R2->R))
(define beta (literal function 'beta R2->R))

(let ((dx (ref (basis->1form-basis R2-rect-basis) 0))
      (dy (ref (basis-1>form-basis R2-rect-basis) 1)))
  (((- (d (+ (* (compose alpha (chart R2-rect)) dx)
             (* (compose beta (chart R2-rect)) dy)))
       (* (compose (- ((partial 0) beta)
                      ((partial 1) alpha))
                   (chart R2-rect))
          (wedge dx dy)))
    v w)
   R2-rect-point))
;; 0
```

We can also compute the integrands for the Divergence Theorem: For an arbitrary compact set $M subset upright(R)^3$ and a vector field $sans(w)$

$ integral_M upright(div) (sans(w))d V = integral_(partial M) sans(w) dot.op sans(n) d A $ <5.36>

where $sans(n)$ is the outward-pointing normal to the surface $partial M$. Again, the integrands should be related by an exterior derivative, if this is an instance of Stokes\'s Theorem.

Note that even the statement of this theorem cannot be made with the machinery we have developed at this point. The concepts \"outward-pointing normal,\" area $A$, and volume $V$ on the manifold are not definable without using a metric

```scheme
(see Chapter 9). However, for orthonormal rectangular coordinates in
$\mathrm{R}^{3}$ we can interpret the integrands in terms of forms.
```

Let the vector field describing the flow of stuff be

$ sans(w) = sans(a) frac(partial, partial sans(x)) + sans(b) frac(partial, partial sans(y)) + sans(c) frac(partial, partial sans(z)) . $ <5.37>

The rate of leakage of stuff through each element of the boundary is $sans(w) dot.op sans(n) d A$. We interpret this as the two-form

$ sans(a) thin sans(d) sans(y) and sans(d) sans(z) + sans(b) thin sans(d) sans(z) and sans(d) sans(x) + sans(c) thin sans(d) sans(x) and sans(d) sans(y)\, $ <5.38>

because any part of the boundary will have $y upright("-") z$, $z upright("-") x$, and $x upright("-") y$ components, and each such component will pick up contributions from the normal component of the flux $w$. Formalizing this as code we have

```scheme
(define a (literal-manifold-function 'a-rect R3-rect))
(define b (literal-manifold-function 'b-rect R3-rect))
(define c (literal-manifold function 'c-rect R3-rect))

(define flux-through-boundary-element
  (+ (* a (wedge dy dz))
     (* b (wedge dz dx))
     (* c (wedge dx dy))))
```

The rate of production of stuff in each element of volume is $upright(div) (sans(w))d V$. We interpret this as the three-form

$ (frac(partial, partial sans(x)) sans(a) + frac(partial, partial sans(y)) sans(b) + frac(partial, partial sans(z)) sans(c))med sans(d) sans(x) and sans(d) sans(y) and sans(d) sans(z) . $ <5.39>

or:

```scheme
(define production-in-volume-element
  (* (+ (d/dx a) (d/dy b) (d/dz c))
     (wedge dx dy dz)))
```

Assuming Stokes\'s Theorem, the exterior derivative of the leakage of stuff per unit area through the boundary must be the rate of production of stuff per unit volume in the interior. We check this by applying the difference to arbitrary vector fields at an arbitrary point:

```scheme
(define X (literal-vector-field 'X-rect R3-rect))
(define Y (literal-vector-field 'Y-rect R3-rect))
(define Z (literal-vector-field 'Z-rect R3-rect))

(((- production-in-volume-element
     (d flux-through-boundary-element))
  X Y Z)
 R3-rect-point)
0
```

as expected.

== Exercise 5.2: Graded Formula <sec-5.10>
Derive equation @5.28.

== Exercise 5.3: Iterated Exterior Derivative <sec-5.11>
We have shown that the equation @5.29 is true for manifold functions. Show that it is true for any form field.
]
