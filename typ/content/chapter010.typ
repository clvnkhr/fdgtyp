// Generated from ../../fdg-book/scheme/org/chapter010.org.
// Re-run scripts/convert-org-to-typst.mjs to refresh.
#import "../lib.typ": fdg-chapter, curl, grad, Lap, div, length

#fdg-chapter("Hodge Star and Electrodynamics", numbered: true)[
The vector space of $p$-form fields on an $n$-dimensional manifold has dimension $n !\/((n - p)! p !)$. This is the same dimension as the space of $(n - p)$-form fields. So these vector spaces are isomorphic. If we have a metric there is a natural isomorphism: for each $p$-form field $bold(omega)$ on an $n$-dimensional manifold there is an $(n - p)$-form field $sans(g)^(*) bold(omega)$, called its #emph[Hodge dual].#footnote[The traditional notion is to just use an asterisk; we use $g^convolve$ to emphasize that this duality depends on the choice of metric $g$.] The Hodge dual should not be confused with the duality of vector bases and one-form bases, which is defined without reference to a metric. The Hodge dual is useful for the elegant formalization of electrodynamics.

In Euclidean 3-space, if we think of a one-form as a foliation of the space, then the dual is a two-form, which can be thought of as a pack of square tubes, whose axes are perpendicular to the leaves of the foliation. The original one-form divides these tubes up into volume elements. For example, the dual of the basis oneform dx is the two-form $sans(g)^(*) sans(d) x = sans(d) y and sans(d) z$. We may think of $sans(d) x$ as a set of planes perpendicular to the $hat(x)$-axis. Then $sans(g)^(*) sans(d) x$ is a set of tubes parallel to the $hat(x)$-axis. In higher-dimensional spaces the visualization is more complicated, but the basic idea is the same. The Hodge dual of a two-form in four dimensions is a twoform that is perpendicular to the given two-form. However, if the metric is indefinite (e.g., the Lorentz metric) there is an added complication with the signs.

The Hodge dual is a linear operator, so it can be defined by its action on the basis elements. Let ${partial \/ partial sans(x)^0 \, dots.c \, partial \/ partial x^(n - 1)}$ be an orthonormal basis of vector fields#footnote[We have a metric, so we can define \"orthonormal\" and\"use it to construct an orthonormal basis given any basis. The Gram-Schmidt procedure does the job.] and let ${sans(d) x^0 \, dots.c \, sans(d) x^(n - 1)}$ be the ordinary dual basis for the one-forms. Then the $(n - p)$-form $sans(g)^convolve bold(omega)$ that is the Hodge dual of the $p$-form $bold(omega)$ can be defined by its coefficients with respect to the basis, using indices, as

$ (sans(g)^(*) bold(omega))_(j_p dots.c j_(n - 1)) #h(2em) = sum_(i_0 dots.c i_(p - 1) j_0 dots.c j_(p - 1)) frac(1, p !) omega_(i_0 dots.c i_(p - 1)) g^(i_0 j_0) dots.c g^(i_(p - 1) j_(p - 1)) epsilon.alt_(j_0 dots.c j_(n - 1)) $

where $g^(i j)$ are the coefficients of the inverse metric and $epsilon.alt_(j_0 dots.c j_(n - 1))$ is either $- 1$ or $+ 1$ if the permutation ${0 dots.c n - 1} mapsto {j_0 dots.c j_(n - 1)}$ is odd or even, respectively.

== Relationship to Vector Calculus
In 3-dimensional Euclidean space the traditional vector derivative operations are gradient, curl, and divergence. If $hat(upright(x))$, $hat(upright(y))$, $hat(upright(z))$ are the usual orthonormal rectangular vector basis, $f$ a function on the space, and $arrow(v)$ a vector field on the space, then

$ grad (f)= frac(partial f, partial x) hat(upright(x)) + frac(partial f, partial y) hat(upright(y)) + frac(partial f, partial z) hat(upright(z)) curl (arrow(upright(v)))= (frac(partial v_z, partial y) - frac(partial v_y, partial z)) hat(upright(x)) + (frac(partial v_x, partial z) - frac(partial v_z, partial x)) hat(upright(y)) + (frac(partial v_y, partial x) - frac(partial v_x, partial y)) hat(upright(x)) div (arrow(upright(v)))= frac(partial v_x, partial x) + frac(partial v_y, partial y) + frac(partial v_z, partial z) . $

Recall the meaning of the traditional vector operations. Traditionally we assume that there is a metric that allows us to determine distances between locations and angles between vectors. Such a metric establishes local scale factors relating coordinate increments to actual distances. The vector gradient, $grad (f)$, points in the direction of steepest increase in the function with respect to actual distances. By contrast, the gradient one-form, df, does not depend on a metric, so there is no concept of distance built in to it. Nevertheless, the concepts are related. The gradient one-form is given by

$ sans(d f) = (frac(partial, partial sans(x)) sans(f)) sans(d x) + (frac(partial, partial sans(y)) sans(f)) sans(d y) + (frac(partial, partial sans(z)) sans(f)) sans(d z) . $

The traditional gradient vector field is then just the raised gradient one-form (see equation 9.8). So

$ grad (sans(f))= g^sharp (sans(d f)) (d f) $

is computed by

```scheme
(define (gradient metric basis)
  (compose (raise metric basis) d))
```

Let $theta$ be a one-form field:

$ theta = theta_x sans(d x) + theta_y sans(d y) + theta_z sans(d z) . $

We compute

$ sans(d) theta = (frac(partial theta_z, partial sans(y)) - frac(partial theta_y, partial sans(z))) sans(d y) and sans(d z) + (frac(partial theta_x, partial sans(z)) - frac(partial theta_z, partial sans(x))) sans(d z) and sans(d x) + (frac(partial theta_y, partial sans(x)) - frac(partial theta_x, partial sans(y))) sans(d x) and sans(d y) . $

So the exterior-derivative expression corresponding to the vector-calculus curl is:

$ g^(*) (sans(d) theta) = (frac(partial theta_z, partial sans(y)) - frac(partial theta_y, partial sans(z))) sans(d x) + (frac(partial theta_x, partial sans(z)) - frac(partial theta_z, partial sans(x))) sans(d x) + (frac(partial theta_y, partial sans(x)) - frac(partial theta_x, partial sans(y))) sans(d z) . $

Thus, the curl of a vector field $sans(v)$ is

$ curl (sans(v))= g^sharp (g^(*) (sans(d) (g^flat (sans(v)))))\, $

which can be computed with

```scheme
(define (curl metric orthonormal-basis)
  (let ((star (Hodge-star metric orthonormal-basis))
        (sharp (raise metric orthonormal-basis))
        (flat (lower metric)))
    (compose sharp star d flat)))
```

Also, we compute

$ sans(d) (g^(*) theta)= (frac(partial theta_x, partial sans(x)) + frac(partial theta_y, partial sans(y)) + frac(partial theta_z, partial sans(z))) sans(d x) and sans(d y) and sans(d z) . $

So the exterior-derivative expression corresponding to the vector-calculus $div$ is

$ g^(*) sans(d) (g^(*) theta)= frac(partial theta_x, partial sans(x)) + frac(partial theta_y, partial sans(y)) + frac(partial theta_z, partial sans(z)) . $

Thus, the divergence of a vector field $sans(v)$ is

$ div (sans(v))= g^(*) (sans(d) (g^(*) (g^flat (sans(v))))) . $

It is easily computed:

```scheme
(define (divergence metric orthonormal-basis)
  (let ((star (Hodge-star metric orthonormal-basis))
        (flat (lower metric)))
    (compose star d star flat)))
```

The divergence is defined even if we don\'t have a metric, but have only a connection. In that case the divergence can be computed with

```scheme
(define (((divergence Cartan) v) point)
  (let ((basis (Cartan->basis Cartan))
        (nabla (covariant-derivative Cartan)))
    (contract
     (lambda (ei wi)
       ((wi ((nabla ei) v)) point))
     basis)))

```

If the Cartan form is derived from a metric these programs yield the same answer.

The Laplacian is, as expected, the composition of the divergence and the gradient:

```scheme
(define (Laplacian metric orthonormal-basis)
  (compose (divergence metric orthonormal-basis)
           (gradient metric orthonormal-basis)))
```

== Spherical Coordinates
We can illustrate these by computing the formulas for the vector-calculus operators in spherical coordinates. We start with a 3-dimensional manifold, and we set up the conditions for spherical coordinates.

```scheme
(define spherical R3-rect)

(define-coordinates (up r theta phi) spherical)

(define R3-spherical-point
  ((point spherical) (up 'r0 'theta0 'phi0)))
```

The geometry is specified by the metric:

```scheme
(define (spherical-metric v1 v2)
  (+ (* (dr v1) (dr v2))
     (* (square r)
        (+ (* (dtheta v1) (dtheta v2))
           (* (expt (sin theta) 2)
              (dphi v1) (dphi v2))))))
```

We also need an orthonormal basis for the spherical coordinates. The coordinate basis is orthogonal but not normalized.

```scheme
(define e_0 d/dr)

(define e_1 (* (/ 1 r) d/dtheta))

(define e_2 (* (/ 1 (* r (sin theta))) d/dphi))

(define orthonormal-spherical-vector-basis
  (down e_0 e_1 e_2))

(define orthonormal-spherical-1form-basis
  (vector-basis->dual orthonormal-spherical-vector-basis
                      spherical))

(define orthonormal-spherical-basis
  (make-basis orthonormal-spherical-vector-basis
              orthonormal-spherical-1form-basis))
```

The components of the gradient of a scalar field are obtained using the dual basis:

```scheme
((orthonormal-spherical-1form-basis
  ((gradient spherical-metric orthonormal-spherical-basis)
   (literal-manifold-function 'f spherical)))
 R3-spherical-point)
;; (up (((partial 0) f) (up r0 theta0 phi0))
;;     (/ (((partial 1) f) (up r0 theta0 phi0))
;;        r0)
;;     (/ (((partial 2) f) (up r0 theta0 phi0))
;;        (* r0 (sin theta0))))
```

To get the formulas for curl and divergence we need a vector field with components with respect to the normalized basis.

```scheme
(define v
  (+ (* (literal-manifold-function 'v^0 spherical) e_0)
     (* (literal-manifold-function 'v^1 spherical) e_1)
     (* (literal-manifold-function 'v^2 spherical) e_2)))
```

The curl is a bit complicated:

```scheme
((orthonormal-spherical-1form-basis
  ((curl spherical-metric orthonormal-spherical-basis) v))
 R3-spherical-point)
;; (up
;;  (/ (+ (* (sin theta0)
;;           (((partial 1) vˆ2) (up r0 theta0 phi0)))
;;        (* (cos theta0) (vˆ2 (up r0 theta0 phi0)))
;;        (* -1 (((partial 2) vˆ1) (up r0 theta0 phi0))))
;;     (* r0 (sin theta0)))
;;  (/ (+ (* -1 r0 (sin theta0)
;;           (((partial 0) vˆ2) (up r0 theta0 phi0)))
;;        (* -1 (sin theta0) (vˆ2 (up r0 theta0 phi0)))
;;        (((partial 2) vˆ0) (up r0 theta0 phi0)))
;;     (* r0 (sin theta0)))
;;  (/ (+ (* r0 (((partial 0) vˆ1) (up r0 theta0 phi0)))
;;        (vˆ1 (up r0 theta0 phi0))
;;        (* -1 (((partial 1) vˆ0) (up r0 theta0 phi0))))
;;     r0))
```

But the divergence and Laplacian are simpler

```scheme
(((divergence spherical-metric orthonormal-spherical-basis) v)
 R3-spherical-point)
;; (+ (((partial 0) vˆ0) (up r0 theta0 phi0))
;;    (/ (* 2 (vˆ0 (up r0 theta0 phi0))) r0)
;;    (/ (((partial 1) vˆ1) (up r0 theta0 phi0)) r0)
;;    (/ (* (vˆ1 (up r0 theta0 phi0)) (cos theta0))
;;       (* r0 (sin theta0)))
;;    (/ (((partial 2) vˆ2) (up r0 theta0 phi0))
;;       (* r0 (sin theta0))))
```

```scheme
(((Laplacian spherical-metric orthonormal-spherical-basis)
  (literal-manifold-function 'f spherical))
 R3-spherical-point)
;; (+ (((partial 0) ((partial 0) f)) (up r0 theta0 phi0))
;;    (/ (* 2 (((partial 0) f) (up r0 theta0 phi0)))
;;       r0)
;;    (/ (((partial 1) ((partial 1) f)) (up r0 theta0 phi0))
;;       (expt r0 2))
;;    (/ (* (cos theta0) (((partial 1) f) (up r0 theta0 phi0)))
;;       (* (expt r0 2) (sin theta0)))
;;    (/ (((partial 2) ((partial 2) f)) (up r0 theta0 phi0))
;;       (* (expt r0 2) (expt (sin theta0) 2))))
```

== The Wave Equation
The kinematics of special relativity can be formulated on a flat 4-dimensional spacetime manifold.

```scheme
(define SR R4-rect)
(define-coordinates (up ct x y z) SR)
(define an-event ((point SR) (up 'ct0 'x0 'y0 'z0)))

(define a-vector
  (+ (* (literal-manifold-function 'v^t SR) d/dct)
     (* (literal-manifold-function 'v^x SR) d/dx)
     (* (literal-manifold-function 'v^y SR) d/dy)
     (* (literal-manifold-function 'v^z SR) d/dz)))
```

The Minkowski metric is#footnote[The metric in relativity is not positive definite, so nonzero vectors can have zero length.]

$ sans(g) (sans(u)\,sans(v))= - c^2 sans(d t) (sans(u))thin sans(d t) (sans(v))+ sans(d x) (sans(u))thin sans(d x) (sans(v))+ sans(d y) (sans(u))thin sans(d y) (sans(v))+ sans(d z) (sans(u))thin sans(d z) (sans(v)). $

As a program:

```scheme
(define (g-Minkowski u v)
  (+ (* -1 (dct u) (dct v))
     (* (dx u) (dx v))
     (* (dy u) (dy v))
     (* (dz u) (dz v))))
```

The length of a vector is described in terms of the metric:

$ sigma = sans(g) (sans(v)\,sans(v)). $

If $sigma$ is positive the vector is #emph[spacelike] and its square root is the #emph[proper length] of the vector. If $sigma$ is negative the vector is #emph[timelike] and the square root of its negation is the #emph[proper time] of the vector. If $sigma$ is zero the vector is #emph[lightlike] or #emph[null].

```scheme
((g-Minkowski a-vector a-vector) an-event)
;; (+ (* -1 (expt (vˆt (up ct0 x0 y0 z0)) 2))
;;    (expt (vˆx (up ct0 x0 y0 z0)) 2)
;;    (expt (vˆy (up ct0 x0 y0 z0)) 2)
;;    (expt (vˆz (up ct0 x0 y0 z0)) 2))
```

As an example of vector calculus in four dimensions, we can compute the wave equation for a scalar field in 4-dimensional spacetime.

We need an orthonormal basis for the spacetime:

```scheme
(define SR-vector-basis (coordinate-system->vector-basis SR))
```

We check that it is orthonormal with respect to the metric:

```scheme
((g-Minkowski SR-vector-basis SR-vector-basis) an-event)
;; (down (down -1 0 0 0)
;;       (down 0 1 0 0)
;;       (down 0 0 1 0)
;;       (down 0 0 0 1))
```

So, the Laplacian of a scalar field is the wave equation!

```scheme
(define p (literal-manifold-function 'phi SR))
```

```scheme
(((Laplacian g-Minkowski SR-basis) p) an-event)
;; (+ (((partial 0) ((partial 0) phi)) (up ct0 x0 y0 z0))
;;    (* -1 (((partial 1) ((partial 1) phi)) (up ct0 x0 y0 z0)))
;;    (* -1 (((partial 2) ((partial 2) phi)) (up ct0 x0 y0 z0)))
;;    (* -1 (((partial 3) ((partial 3) phi)) (up ct0 x0 y0 z0))))
```

== Electrodynamics
Using Hodge duals we can represent electrodynamics in an elegant way. Maxwell\'s electrodynamics is invariant under Lorentz transformations. We use 4-dimensional rectangular coordinates for the flat spacetime of special relativity.

In this formulation of electrodynamics the electric and magnetic fields are represented together as a two-form field, the #emph[Faraday tensor]. Under Lorentz transformations the individual components are mixed. The Faraday tensor is:#footnote[This representation is from Misner, Thorne, and Wheeler, #emph[Gravitation], p.108.]

```scheme
(define (Faraday Ex Ey Ez Bx By Bz)
  (+ (* Ex (wedge dx dct))
     (* Ey (wedge dy dct))
     (* Ez (wedge dz dct))
     (* Bx (wedge dy dz))
     (* By (wedge dz dx))
     (* Bz (wedge dx dy))))
```

The Hodge dual of the Faraday tensor exchanges the electric and magnetic fields, negating the components that will involve time. The result is called the #emph[Maxwell tensor]:

```scheme
(define (Maxwell Ex Ey Ez Bx By Bz)
  (+ (* -1 Bx (wedge dx dct))
     (* -1 By (wedge dy dct))
     (* -1 Bz (wedge dz dct))
     (* Ex (wedge dy dz))
     (* Ey (wedge dz dx))
     (* Ez (wedge dx dy))))
```

We make a Hodge dual operator for this situation:

```scheme
(define SR-star (Hodge-star g-Minkowski SR-basis))
```

And indeed, it transforms the Faraday tensor into the Maxwell tensor:

```scheme
(((- (SR-star (Faraday 'Ex 'Ey 'Ez 'Bx 'By 'Bz))
     (Maxwell 'Ex 'Ey 'Ez 'Bx 'By 'Bz))
  (literal-vector-field 'u SR)
  (literal-vector-field 'v SR))
 an-event)
;; 0
```

One way to get electric fields is to have charges; magnetic fields can arise from motion of charges. In this formulation we combine the charge density and the current to make a one-form field:

```scheme
(define (J charge-density Ix Iy Iz)
  (- (* (/ 1 :c) (+ (* Ix dx) (* Iy dy) (* Iz dz)))
     (* charge-density dct)))
```

The coefficient #raw(lang:"verbatim", "(/ 1 :c)") makes the components of the one-form uniform with respect to units.

To develop Maxwell\'s equations we need a general Faraday field and a general current-density field:

```scheme
(define F
  (Faraday (literal-manifold-function 'Ex SR)
           (literal-manifold-function 'Ey SR)
           (literal-manifold-function 'Ez SR)
           (literal-manifold-function 'Bx SR)
           (literal-manifold-function 'By SR)
           (literal-manifold-function 'Bz SR)))

(define 4-current
  (J (literal-manifold-function 'rho SR)
     (literal-manifold-function 'Ix SR)
     (literal-manifold-function 'Iy SR)
     (literal-manifold-function 'Iz SR)))
```

== Maxwell\'s Equations
Maxwell\'s equations in the language of differential forms are

$ sans(d F) = 0\, $

$ sans(d) (g^(*) sans(F)) = 4 pi g^(*) sans(J) . $

The first equation gives us what would be written in vector notation as

$ div arrow(B) = 0\, $

$ curl arrow(E) = - 1 / c frac(d arrow(B), d t) . $

The second equation gives us what would be written in vector notation as

$ div arrow(E) = 4 pi rho\, $

$ curl arrow(B) = 1 / c frac(d arrow(E), d t) + frac(4 pi, c) arrow(I) . $

To see how these work out, we evaluate each component of $sans(d F)$ and $sans(d) (g^(*) sans(F))- 4 pi g^(*) sans(J)$. Since these are both two-form fields, their exterior derivatives are three-form fields, so we have to provide three basis vectors to get each component. Each component equation will yield one of Maxwell\'s equations, written in coordinates, without vector notation. So, the purely spatial component $sans(d F) (partial\/partial x\,partial\/partial y\,partial\/partial z)$ of equation 10.13 is equation 10.15:

```scheme
(((d F) d/dx d/dy d/dz) an-event)
;; (+ (((partial 1) Bx) (up ct0 x0 y0 z0))
;;    (((partial 2) By) (up ct0 x0 y0 z0))
;;    (((partial 3) Bz) (up ct0 x0 y0 z0)))
```

$ frac(partial B_x, partial x) + frac(partial B_y, partial y) + frac(partial B_z, partial z) = 0 $

The three mixed space and time components of equation 10.13 are equation 10.16:

```scheme
(((d F) d/dct d/dy d/dz) an-event)
;; (+ (((partial 0) Bx) (up ct0 x0 y0 z0))
;;    (((partial 2) Ez) (up ct0 x0 y0 z0))
;;    (* -1 (((partial 3) Ey) (up ct0 x0 y0 z0))))
```

$ frac(partial E_z, partial y) - frac(partial E_y, partial z) = 1 / c frac(partial B_x, partial t)\, $

```scheme
(((d F) d/dct d/dz d/dx) an-event)
;; (+ (((partial 0) By) (up ct0 x0 y0 z0))
;;    (((partial 3) Ex) (up ct0 x0 y0 z0))
;;    (* -1 (((partial 1) Ez) (up ct0 x0 y0 z0))))
```

$ frac(partial E_x, partial z) - frac(partial E_z, partial x) = 1 / c frac(partial B_y, partial t)\, $

```scheme
(((d F) d/dct d/dx d/dy) an-event)
;; (+ (((partial 0) Bz) (up ct0 x0 y0 z0))
;;    (((partial 1) Ey) (up ct0 x0 y0 z0))
;;    (* -1 (((partial 2) Ex) (up ct0 x0 y0 z0))))
```

$ frac(partial E_y, partial x) - frac(partial E_x, partial y) = 1 / c frac(partial B_z, partial t) . $

The purely spatial component of equation 10.14 is equation 10.17:

```scheme
(((- (d (SR-star F)) (* 4 :pi (SR-star 4-current)))
  d/dx d/dy d/dz)
 an-event)
;; (+ (* -4 :pi (rho (up ct0 x0 y0 z0)))
;;    (((partial 1) Ex) (up ct0 x0 y0 z0))
;;    (((partial 2) Ey) (up ct0 x0 y0 z0))
;;    (((partial 3) Ez) (up ct0 x0 y0 z0)))
```

$ frac(partial E_x, partial x) + frac(partial E_y, partial y) + frac(partial E_z, partial z) = 4 pi rho . $

And finally, the three mixed time and space components of equation 10.14 are equation 10.18:

```scheme
(((- (d (SR-star F)) (* 4 :pi (SR-star 4-current)))
  d/dct d/dy d/dz)
 an-event)
;; (+ (((partial 0) Ex) (up ct0 x0 y0 z0))
;;    (* -1 (((partial 2) Bz) (up ct0 x0 y0 z0)))
;;    (((partial 3) By) (up ct0 x0 y0 z0))
;;    (/ (* 4 :pi (Ix (up ct0 x0 y0 z0))) :c))
```

$ frac(partial B_y, partial z) - frac(partial B_z, partial y) = - 1 / c frac(partial E_x, partial t) - frac(4 pi, c) I_x\, $

```scheme
(((- (d (SR-star F)) (* 4 :pi (SR-star 4-current)))
  d/dct d/dz d/dx)
 an-event)
;; (+ (((partial 0) Ey) (up ct0 x0 y0 z0))
;;    (* -1 (((partial 3) Bx) (up ct0 x0 y0 z0)))
;;    (((partial 1) Bz) (up ct0 x0 y0 z0))
;;    (/ (* 4 :pi (Iy (up ct0 x0 y0 z0))) :c))
```

$ frac(partial B_z, partial x) - frac(partial B_x, partial z) = - 1 / c frac(partial E_y, partial t) - frac(4 pi, c) I_y\, $

```scheme
(((- (d (SR-star F)) (* 4 :pi (SR-star 4-current)))
  d/dct d/dx d/dy)
 an-event)
;; (+ (((partial 0) Ez) (up ct0 x0 y0 z0))
;;    (* -1 (((partial 1) By) (up ct0 x0 y0 z0)))
;;    (((partial 2) Bx) (up ct0 x0 y0 z0))
;;    (/ (* 4 :pi (Iz (up ct0 x0 y0 z0))) :c))
```

$ frac(partial B_x, partial y) - frac(partial B_y, partial x) = - 1 / c frac(partial E_z, partial t) - frac(4 pi, c) I_z . $

== Lorentz Force
The classical force on a charged particle moving in a electromagnetic field is

$ arrow(f) = q (arrow(E) + 1 / c arrow(v) times arrow(B)) . $

We can compute this in coordinates. We construct arbitrary $arrow(E)$ and $arrow(B)$ vector fields and an arbitrary velocity:

```scheme
(define E
  (up (literal-manifold-function 'Ex SR)
      (literal-manifold-function 'Ey SR)
      (literal-manifold-function 'Ez SR)))

(define B
  (up (literal-manifold-function 'Bx SR)
      (literal-manifold-function 'By SR)
      (literal-manifold-function 'Bz SR)))

(define V (up 'V_x 'V_y 'V_z))
```

The 3-space force that results is a mess:

```scheme
(* 'q (+ (E an-event) (cross-product V (B an-event))))
;; (up (+ (* q (Ex (up ct0 x0 y0 z0)))
;;        (* q V_y (Bz (up ct0 x0 y0 z0)))
;;        (* -1 q V_z (By (up ct0 x0 y0 z0))))
;;     (+ (* q (Ey (up ct0 x0 y0 z0)))
;;        (* -1 q V_x (Bz (up ct0 x0 y0 z0)))
;;        (* q V_z (Bx (up ct0 x0 y0 z0))))
;;     (+ (* q (Ez (up ct0 x0 y0 z0)))
;;        (* q V_x (By (up ct0 x0 y0 z0)))
;;        (* -1 q V_y (Bx (up ct0 x0 y0 z0)))))
```

The relativistic Lorentz 4-force is usually written in coordinates as

$ f^nu = - sum_(alpha\,mu) q U^mu F_(mu alpha) eta^(alpha nu)\, $

where $U$ is the 4-velocity of the charged particle, $F$ is the Faraday tensor, and $eta^(alpha nu)$ are the components of the inverse of the Minkowski metric. Here is a program that computes a component of the force in terms of the Faraday tensor. The desired component is specified by a one-form.

```scheme
(define (Force charge F 4velocity component)
  (* -1 charge
     (contract (lambda (a b)
                 (contract (lambda (e w)
                             (* (w 4velocity)
                                (F e a)
                                (eta-inverse b component)))
                           SR-basis))
               SR-basis)))
```

So, for example, the force in the $hat(x)$ direction for a stationary particle is

```scheme
((Force 'q F d/dct dx) an-event)
;; (* q (Ex (up ct0 x0 y0 z0)))
```

Notice that the 4-velocity $partial\/partial c t$ is the 4-velocity of a stationary particle!

If we give a particle a more general timelike 4-velocity in the $hat(x)$ direction we can see how the $hat(y)$ component of the force involves both the electric and magnetic field:

```scheme
(define (Ux beta)
  (+ (* (/ 1 (sqrt (- 1 (square beta)))) d/dct)
     (* (/ beta (sqrt (- 1 (square beta)))) d/dx)))
```

```scheme
((Force 'q F (Ux 'v/c) dy) an-event)
;; (/ (+ (* -1 q v/c (Bz (up ct0 x0 y0 z0)))
;;       (* q (Ey (up ct0 x0 y0 z0))))
;;    (sqrt (+ 1 (* -1 (expt v/c 2)))))
```

=== Exercise 10.1: Relativistic Lorentz Force
Compute all components of the 4-force for a general timelike 4-velocity.

a. Compare these components to the components of the nonrelativistic force given above. Interpret the differences.

b. What is the meaning of the time component? For example, consider:

```scheme
((Force 'q F (Ux 'v/c) dct) an-event)
;; (/ (* q v/c (Ex (up ct0 x0 y0 z0)))
;;    (sqrt (+ 1 (* -1 (expt v/c 2)))))
```

c. Subtract the structure of components of the relativistic 3-space force from the structure of the spatial components of the 4-space force to show that they are equal.
]
