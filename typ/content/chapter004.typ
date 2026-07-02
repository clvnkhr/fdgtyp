// Generated from ../../fdg-book/scheme/org/chapter004.org.
// Re-run scripts/convert-org-to-typst.mjs to refresh.
#import "../lib.typ": fdg-chapter, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX

#fdg-chapter("Basis Fields", numbered: true, eq-prefix: "4", ref-label: "chap-4")[
A vector field may be written as a linear combination of basis vector fields. If #raw(lang:"scheme", "n") is the dimension, then any set of #raw(lang:"scheme", "n") linearly independent vector fields may be used as a basis. The coordinate basis $sans(X)$ is an example of a basis.#footnote[We cannot say if the basis vectors are orthogonal or normalized until we introduce a metric.] We will see later that not every basis is a coordinate basis: in order to be a coordinate basis, there must be a coordinate system such that each basis element is the directional derivative operator in a corresponding coordinate direction.

Let $sans(e)$ be a tuple of basis vector fields, such as the coordinate basis $sans(X)$. The general vector field $sans(v)$ applied to an arbitrary manifold function $sans(f)$ can be expressed as a linear combination

$ sans(v) (sans(f)) (sans(m))= sans(e) (sans(f)) (sans(m))sans(b) (sans(m))= sum_i sans(e)_i (sans(f)) (sans(m))sans(b)^i (sans(m))\, $ <4.1>

where $sans(b)$ is a tuple-valued coefficient function on the manifold. When expressed in a coordinate basis, the coefficients that specify the direction of the vector are naturally expressed as functions $b^i$ of the coordinates of the manifold point. Here, the coefficient function $sans(b)$ is more naturally expressed as a tuple-valued function on the manifold. If $b$ is the coefficient function expressed as a function of coordinates, then $sans(b) = b compose chi$ is the coefficient function as a function on the manifold.

The coordinate-basis forms have a simple definition in terms of the coordinate-basis vectors and the coordinates (equation @3.40). With this choice, the dual property, equation @3.41, holds without further fuss. More generally, we can define a basis of one-forms $tilde(sans(e))$ that is dual to $sans(e)$ in that the property

$ tilde(sans(e))^i (sans(e)_j) (sans(m))= delta_j^i $ <4.2>

is satisfied, analogous to property @3.41. Figure 4.1 illustrates the duality of basis fields.

#align(center)[#image("../assets/figures/fig-4-1.pdf", width: 92%)]

To solve for the dual basis $tilde(sans(e))$ given the basis $sans(e)$, we express the basis vectors $sans(e)$ in terms of a coordinate basis#footnote[We write the vector components on the right and the tuple of basis vectors on the left because if we think of the basis vectors as organized as a row and the components as organized as a column then the formula is just a matrix multiplication.]

$ sans(e)_j (sans(f))= sum_k sans(X)_k (sans(f))sans(c)_j^k\, $ <4.3>

and the dual one-forms $tilde(sans(e))$ in terms of the dual coordinate one-forms

$ tilde(sans(e))^i (sans(v))= sum_l sans(d)_l^i tilde(sans(X))^l (sans(v))\, $ <4.4>

then

$ tilde(sans(e))^i (sans(e)_j) = sum_l sans(d)_l^i tilde(sans(X))^l (sans(e)_j) = sum_l sans(d)_l^i sans(e)_j (chi^l) = sum_l sans(d)_l^i sum_k sans(X)_k (chi^l) sans(c)_j^k = sum_(k l) sans(d)_l^i delta_k^l sans(c)_j^k = sum_k sans(d)_k^i sans(c)_j^k . $ <4.5>

Applying this at $sans(m)$ we get

$ tilde(sans(e))^i (sans(e)_j) (sans(m))= delta_j^i = sum_k sans(d)_k^i (sans(m))sans(c)_j^k (sans(m)). $ <4.6>

So the $sans(d)$ coefficients can be determined from the $sans(c)$ coefficents (essentially by matrix inversion).

A set of vector fields ${ sans(e)_i }$ may be linearly independent in the sense that a weighted sum of them may not be identically zero over a region, yet it may not be a basis in that region. The problem is that there may be some places in the region where the vectors are not independent. For example, two of the vectors may be parallel at a point but not parallel elsewhere in the region. At such a point $sans(m)$ the determinant of the matrix $sans(c) (sans(m))$ is zero. So at these points we cannot define the dual basis forms.#footnote[This is why the set of vector fields and the set of one-form fields are modules rather than vector spaces.]

The dual form fields can be used to determine the coefficients $sans(b)$ of a vector field $sans(v)$ relative to a basis $sans(e)$, by applying the dual basis form fields $tilde(sans(e))$ to the vector field. Let

$ sans(v) (sans(f))= sum_i sans(e)_i (sans(f))sans(b)^i . $ <4.7>

Then

$ tilde(sans(e))^j (sans(v))= sans(b)^j . $ <4.8>

Define two general vector fields:

```scheme
(define e0
  (+ (* (literal-manifold-function 'e0x R2-rect) d/dx)
     (* (literal-manifold-function 'e0y R2-rect) d/dy)))

(define e1
  (+ (* (literal-manifold-function 'e1x R2-rect) d/dx)
     (* (literal-manifold-function 'e1y R2-rect) d/dy)))
```

We use these as a vector basis and compute the dual:

```scheme
(define e-vector-basis (down e0 e1))
(define e-dual-basis
  (vector-basis->dual e-vector-basis R2-polar))
```

The procedure vector-basis-\>dual requires an auxiliary coordinate system (here #raw(lang:"scheme", "R2-polar")) to get the $sans(c)_j^k$ coefficient functions from which we compute the $sans(d)_i^k$ coefficient functions. However, the final result is independent of this coordinate system. Then we can verify that the bases $sans(e)$ and $tilde(sans(e))$ satisfy the dual relationship (equation @3.41) by applying the dual basis to the vector basis:

```scheme
((e-dual-basis e-vector-basis) R2-rect-point)
;; (up (down 1 0) (down 0 1))
```

Note that the dual basis was computed relative to the polar coordinate system: the resulting objects are independent of the coordinates in which they were expressed!

Or we can make a general vector field with this basis and then pick out the coefficients by applying the dual basis:

```scheme
(define v
  (* (up (literal-manifold-function 'b^0 R2-rect)
         (literal-manifold-function 'b^1 R2-rect))
     e-vector-basis))

((e-dual-basis v) R2-rect-point)
;; (up (bˆ0 (up x0 y0)) (bˆ1 (up x0 y0)))
```

== Change of Basis <sec-4.1>
Suppose that we have a vector field v expressed in terms of one basis $sans(e)$ and we want to reexpress it in terms of another basis $sans(e')$. We have

$ sans(v) (sans(f))= sum_i sans(e)_i (sans(f))sans(b)^i = sum_i sans(e')_j (sans(f))sans(b')^j . $ <4.9>

The coefficients $sans(b')$ can be obtained from $sans(v)$ by applying the dual basis

$ sans(b')^j = sans(tilde(e)')^j (sans(v))= sum_i sans(tilde(e)')^j (sans(e)_i)sans(b)^i . $ <4.10>

Let

$ sans(J)_i^j = sans(tilde(e)')^j (sans(e)_i)\, $ <4.11>

then

$ sans(b')^j = sum_i sans(J)_i^j sans(b)^i\, $ <4.12>

and

$ sans(e)_i (sans(f))= sum_j sans(e')_j (sans(f))sans(J)_i^j . $ <4.13>

The Jacobian $sans(J)$ is a structure of manifold functions. Using tuple arithmetic, we can write

$ sans(b') = sans(J) sans(b) $ <4.14>

and

$ sans(e) (sans(f))= sans(e') (sans(f))sans(J) . $ <4.15>

We can write

```scheme
(define (Jacobian to-basis from-basis)
  (s:map/r (basis->1form-basis to-basis)
           (basis->vector-basis from-basis)))
```

The polar components are:

```scheme
(define b-polar
  (* (Jacobian (coordinate-system->basis R2-polar)
               (coordinate-system->basis R2-rect))
     b-rect))

(b-polar ((point R2-rect) (up 'x0 'y0)))
;; (up
;;  (/ (+ (* x0 (bˆ0 (up x0 y0))) (* y0 (bˆ1 (up x0 y0))))
;;     (sqrt (+ (expt x0 2) (expt y0 2))))
;;  (/ (+ (* x0 (bˆ1 (up x0 y0))) (* -1 y0 (bˆ0 (up x0 y0))))
;;     (+ (expt x0 2) (expt y0 2))))
```

We can also get the polar components directly:

```scheme
(((coordinate-system->1form-basis R2-polar)
  (literal-vector-field 'b R2-rect))
 ((point R2-rect) (up 'x0 'y0)))

;; (up
;;  (/ (+ (* x0 (bˆ0 (up x0 y0))) (* y0 (bˆ1 (up x0 y0))))
;;     (sqrt (+ (expt x0 2) (expt y0 2))))
;;  (/ (+ (* x0 (bˆ1 (up x0 y0))) (* -1 y0 (bˆ0 (up x0 y0))))
;;     (+ (expt x0 2) (expt y0 2))))
```

We see that they are the same.

If $sans(K)$ is the Jacobian that relates the basis vectors in the other direction

$ sans(e') (sans(f))= sans(e) (sans(f))sans(K) $ <4.16>

then

$ sans(K) sans(J) = sans(I) = sans(J) sans(K) $ <4.17>

where $sans(I)$ is a manifold function that returns the multiplicative identity.

The dual basis transforms oppositely. Let

$ bold(omega) = sum_i sans(a)_i tilde(sans(e))^(' i) . $ <4.18>

The coefficients are#footnote[We see from equations @4.15 and @4.16 that $sans(J)$ and $sans(K)$ are inverses. We can obtain their coefficients by: $sans(J)_i^j = tilde(sans(e))^(' j) (sans(e)_i)$ and $sans(K)_i^j = tilde(sans(e))^j (sans(e)'_i)$.]

$ sans(a)_i = bold(omega) (sans(e)_i)= sum_j sans(a)'_j tilde(sans(e))^(' j) (sans(e)_i)= sum_j sans(a)'_j sans(J)_i^j $ <4.19>

or, in tuple arithmetic,

$ sans(a) = sans(a)' sans(J) . $ <4.20>

Because of equation @4.18 we can deduce

$ tilde(sans(e)) = sans(K) tilde(sans(e))' . $ <4.21>

== Rotation Basis <sec-4.2>
One interesting basis for rotations in 3-dimensional space is not a coordinate basis.

Rotations are the actions of the special orthogonal group SO(3), which is a 3-dimensional manifold. The elements of this group may be represented by the set of $3 times 3$ orthogonal matrices with determinant $+ 1$.

We can use a coordinate patch on this manifold with Euler angle coordinates: each element has three coordinates, $theta$, $phi.alt$, $psi$. A manifold point may be represented by a rotation matrix. The rotation matrix for Euler angles is a product of three simple rotations: $M (theta\,phi.alt\,psi)= R_z (phi.alt)R_x (theta)R_z (psi)$, where $R_x$ and $R_z$ are functions that take an angle and produce the matrices representing rotations about the $x$ and $z$ axes, respectively. We can visualize $theta$ as the colatitude of the pole from the $hat(z)$-axis, $phi.alt$ as the longitude, and $psi_a$ as the rotation around the pole.

Given a rotation specified by Euler angles, how do we change the Euler angle to correspond to an incremental rotation of size $epsilon.alt$ about the $hat(x)$-axis? The direction $(a\,b\,c)$ is constrained by the equation

$ R_x (epsilon.alt)M (theta\,phi.alt\,psi)= M (theta + a epsilon.alt\,phi.alt + b epsilon.alt\,psi + c epsilon.alt). $ <4.22>

Linear equations for $(a\,b\,c)$ can be found by taking the derivative of this equation with respect to $epsilon.alt$. We find

$ 0 = c cos theta + b\, $ <4.23>

$ 0 = a sin phi.alt - c cos phi.alt sin theta\, $ <4.24>

$ 1 = c sin phi.alt sin theta + a cos phi.alt\, $ <4.25>

with the solution

$ a = cos phi.alt\, $ <4.26>

$ b = - frac(sin phi.alt cos theta, sin theta)\, $ <4.27>

$ c = frac(sin phi.alt, sin theta) . $ <4.28>

Therefore, we can write the basis vector field that takes directional derivatives in the direction of incremental $x$ rotations as

$ sans(e)_x = a frac(partial, partial theta) + b frac(partial, partial phi.alt) + c frac(partial, partial psi) = cos phi.alt frac(partial, partial theta) - frac(sin phi.alt cos theta, sin theta) frac(partial, partial phi.alt) + frac(sin phi.alt, sin theta) frac(partial, partial psi) . $ <4.29>

Similarly, vector fields for the incremental y and z rotations are

$ sans(e)_y = frac(cos phi.alt cos theta, sin theta) frac(partial, partial phi.alt) + sin phi.alt frac(partial, partial theta) - frac(cos phi.alt, sin theta) frac(partial, partial psi) $ <4.30>

$ sans(e)_z = frac(partial, partial phi.alt) . $ <4.31>

== Commutators <sec-4.3>
The commutator of two vector fields is defined as

$ [sans(v)\,sans(w)] (sans(f))= sans(v) (sans(w) (sans(f)))- sans(w) (sans(v) (sans(f))). $ <4.32>

In the special case that the two vector fields are coordinate basis fields, the commutator is zero:

$ [sans(X)_i \, sans(X)_j] (sans(f))= sans(X)_i (sans(X)_j (sans(f))) - sans(X)_j (sans(X)_i (sans(f))) = partial_i partial_j (sans(f) compose chi^(-1)) compose chi - partial_j partial_i (sans(f) compose chi^(-1)) compose chi = 0\, $ <4.33>

because the individual partial derivatives commute. The vanishing commutator is telling us that we get to the same manifold point by integrating from a point along first one basis vector field and then another as from integrating in the other order. If the commutator is zero we can use the integral curves of the basis vector fields to form a coordinate mesh.

More generally, the commutator of two vector fields is a vector field. Let $sans(v)$ be a vector field with coefficient function $sans(c) = c compose chi$, and $sans(u)$ be a vector field with coefficient function $sans(b) = b compose chi$, both with respect to the coordinate basis $sans(X)$. Then

$ [sans(u)\,sans(v)] (sans(f))= sans(u) (sans(v) (sans(f)))- sans(v) (sans(u) (sans(f)))= sans(u) (sum_i sans(X)_i (sans(f)) sans(c)^i) - sans(v) (sum_j sans(X)_j (sans(f)) sans(b)^j) = sum_j sans(X)_j (sum_i sans(X)_i (sans(f)) sans(c)^i) sans(b)^j - sum_i sans(X)_i (sum_j sans(X)_j (sans(f)) sans(b)^j) sans(c)^i = sum_(i j) [sans(X)_j \, sans(X)_i] (sans(f))sans(c)^i sans(med b)^j + sum_i sans(X)_i (sans(f))sum_j (sans(X)_j (sans(c)^i) sans(b)^j - sans(X)_j (sans(med b)^i) sans(c)^j) = sum_i sans(X)_i (sans(f))sans(a)^i\, $ <4.34>

where the coefficient function $sans(a)$ of the commutator vector field is

$ sans(a)^i = sum_j (sans(X)_j (sans(c)^i) sans(b)^j - sans(X)_j (sans(b)^i) sans(c)^j) = sans(u) (sans(c)^i) - sans(v) (sans(b)^i) . $ <4.35>

We used the fact, shown above, that the commutator of two coordinate basis fields is zero.

We can check this formula for the commutator for the general vector fields #raw(lang:"scheme", "e0") and #raw(lang:"scheme", "e1") in polar coordinates:

```scheme
(let* ((polar-basis (coordinate-system->basis R2-polar))
       (polar-vector-basis (basis->vector-basis polar-basis))
       (polar-dual-basis (basis->1form-basis polar-basis))
       (f (literal-manifold-function 'f-rect R2-rect)))
  ((- ((commutator e0 e1) f)
      (* (- (e0 (polar-dual-basis e1))
            (e1 (polar-dual-basis e0)))
         (polar-vector-basis f)))
   R2-rect-point))
;; 0
```

Let $sans(e)$ be a tuple of basis vector fields. The commutator of two basis fields can be expressed in terms of the basis vector fields:

$ [sans(e)_i\,sans(e)_j] (sans(f))= sum_k sans(d)_(i j)^k sans(e)_k (sans(f))\, $ <4.36>

where $sans(d)_(i j)^k$ are functions of $sans(m)$, called the #emph[structure constants] for the basis vector fields. The coefficients are

$ sans(d)_(i j)^k = tilde(sans(e))^k ([sans(e)_i \, sans(e)_j]) . $ <4.37>

The commutator $[sans(u)\,sans(v)]$ with respect to a non-coordinate basis $sans(e)_i$ is

$ [sans(u)\,sans(v)] (sans(f))= sum_k sans(e)_k (sans(f)) (sans(u) (sans(c)^k) - sans(v) (sans(b)^k) + sum_(i j) sans(c)^i sans(b)^j sans(d)_(j i)^k) $ <4.38>

Define the vector fields #raw(lang:"scheme", "Jx"), #raw(lang:"scheme", "Jy"), and #raw(lang:"scheme", "Jz") that generate rotations about the three rectangular axes in three dimensions:#footnote[Using

```scheme
(define R3-rect (coordinate-system-at 'rectangular 'origin R3))
(define-coordinates (up x y z) R3-rect)
(define R3-rect-point ((point R3-rect) (up 'x0 'y0 'z0)))
(define g (literal-manifold-function 'g-rect R3-rect))
```]

```scheme
(define Jz (- (* x d/dy) (* y d/dx)))
(define Jx (- (* y d/dz) (* z d/dy)))
(define Jy (- (* z d/dx) (* x d/dz)))

(((+ (commutator Jx Jy) Jz) g) R3-rect-point)
;; 0

(((+ (commutator Jy Jz) Jx) g) R3-rect-point)
;; 0

(((+ (commutator Jz Jx) Jy) g) R3-rect-point)
;; 0
```

We see that

$ [sans(J)_x \, sans(J)_y] = - sans(J)_z [sans(J)_y \, sans(J)_z] = - sans(J)_x [sans(J)_z \, sans(J)_x] = - sans(J)_y $ <4.39>

We can also compute the commutators for the basis vector fields $sans(e)_x$, $sans(e)_y$, and $sans(e)_z$ in the SO(3) manifold (see equations @4.29 -- @4.31) that correspond to rotations about the $x$, $y$, and $z$ axes, respectively:#footnote[Using

```scheme
(define Euler-angles (coordinate-system-at 'Euler 'Euler-patch SO3))
(define Euler-angles-chi-inverse (point Euler-angles))
(define-coordinates (up theta phi psi) Euler-angles)
(define SO3-point ((point Euler-angles) (up 'theta 'phi 'psi)))
(define f (literal-manifold-function 'f-Euler Euler-angles))
```]

```scheme
(((+ (commutator e x e y) e z) f) SO3-point)
;; 0

(((+ (commutator e y e z) e x) f) SO3-point)
;; 0

(((+ (commutator e z e x) e y) f) SO3-point)
;; 0
```

You can tell if a set of basis vector fields is a coordinate basis by calculating the commutators. If they are nonzero, then the basis is not a coordinate basis. If they are zero then the basis vector fields can be integrated to give the coordinate system.

Recall equation @3.31

$ (e^(t sans(v))) (sans(m)) = (sans(f) compose phi.alt_t^(sans(v))) (sans(m)) . $ <4.40>

Iterating this equation, we find

$ (e^(s sans(w)) e^(t sans(v))) (sans(m)) = (sans(f) compose phi.alt_t^(sans(v)) compose phi.alt_s^(sans(w))) (sans(m)) . $ <4.41>

Notice that the evolution under $sans(w)$ occurs before the evolution under $sans(v)$.

To illustrate the meaning of the commutator, consider the evolution around a small loop with sides made from the integral curves of two vector fields $sans(v)$ and $sans(w)$. We will first follow $sans(v)$, then $sans(w)$, then $- sans(v)$, and then $- sans(w)$:

$ (e^(epsilon.alt sans(v)) e^(epsilon.alt sans(w)) e^(- epsilon.alt sans(v)) e^(- epsilon.alt sans(w)) sans(f)) (sans(m)) . $ <4.42>

To second order in $epsilon.alt$ the result is#footnote[For non-commuting operators $A$ and $B$,

$ e^A e^B e^(- A) e^(- B) = (1 + A + A^2 / 2 + dots.c) (1 + B + B^2 / 2 + dots.c) times (1 - A + A^2 / 2 + dots.c) (1 - B + B^2 / 2 + dots.c) = 1 +[A\,B]+ dots.c\, $

to second order in $A$ and $B$. All higher-order terms can be written in terms of higher-order commutators of $A$ and $B$. An example of a higher-order commutator is $[A\,[A\,B]]$.]

$ (e^(epsilon.alt^2[sans(v)\,sans(w)]) sans(f)) (sans(m)) $ <4.43>

This result is illustrated in figure 4.2.

#align(center)[#image("../assets/figures/fig-4-2.pdf", width: 92%)]

Take a point $sans(0)$ in $sans(M)$ as the origin. Then, presuming $[sans(e)_i\,sans(e)_j]= 0$, the coordinates $x$ of the point $sans(m)$ in the coordinate system corresponding to the $sans(e)$ basis satisfy#footnote[Here $x$ is an up-tuple structure of components, and $sans(e)$ is down-tuple structure of basis vectors. The product of the two contracts to make a scaled vector, along which we translate by one unit.]

$ sans(m) = phi.alt_1^(x sans(e)) (sans(0))= chi^(-1) (x)\, $ <4.44>

where $chi$ is the coordinate function being defined. Because the elements of $sans(e)$ commute, we can translate separately along the integral curves in any order and reach the same point; the terms in the exponential can be factored into separate exponentials if needed.

== Exercise 4.1: Alternate Angles <sec-4.4>
Note that the Euler angles are singular at $theta = 0$ (where $phi.alt$ and $psi$ become degenerate), so the representations of $sans(e)_x$, $sans(e)_y$, and $sans(e)_z$ (defined in equations @4.29 -- @4.31) have problems there. An alternate coordinate system avoids this problem, while introducing a similar problem elsewhere in the manifold. Consider the \"alternate angles\" $(theta_a\,phi.alt_a\,psi_a)$ which define a rotation matrix via $M (theta_a\,phi.alt_a\,psi_a)= R_z (phi.alt_a)R_x (theta_a)R_y (psi_a)$.

#strong[a.] Where does the singularity appear in these alternate coordinates? Do you think you could define a coordinate system for rotations that has no singularities?

#strong[b.] What do the $sans(e)_x$, $sans(e)_y$, and $sans(e)_z$ basis vector fields look like in this coordinate system?

== Exercise 4.2: General Commutators <sec-4.5>
Verify equation @4.38.

== Exercise 4.3: SO(3) Basis and Angular Momentum Basis <sec-4.6>
How are $sans(J)_x$, $sans(J)_y$, and $sans(J)_z$ related to $sans(e)_x$, $sans(e)_y$, and $sans(e)_z$ in equations @4.29 -- @4.31?
]
