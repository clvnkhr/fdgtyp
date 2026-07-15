// Generated from ../../fdg-book/scheme/org/chapter009.org.
// Re-run scripts/convert-org-to-typst.mjs to refresh.
#import "../lib.typ": fdg-chapter, fdg-figure, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX

#fdg-chapter("Metrics", numbered: true, eq-prefix: "9", ref-label: "chap-9")[
We often want to impose further structure on a manifold to allow us to define lengths and angles. This is done by generalizing the idea of the Euclidean dot product, which allows us to compute lengths of vectors and angles between vectors in traditional vector algebra.

For vectors $arrow(u) = u^x hat(x) + u^y hat(y) + u^z hat(z)$ and $arrow(v) = v^x hat(x) + v^y hat(y) + v^z hat(z)$ the dot product is $arrow(u) dot.op arrow(v) = u^x v^x + u^y v^y + u^z v^z$. The generalization is to provide coefficients for these terms and to include cross terms, consistent with the requirement that the function of two vectors is symmetric. This symmetric, bilinear, real-valued function of two vector fields is called a #emph[metric field].

For example, the natural metric on a sphere of radius $R$ is

$ sans(g) (sans(u)\,sans(v))= R^2 (sans(d) theta (sans(u)) sans(d) theta (sans(v)) + (sin theta)^2 sans(d) phi.alt (sans(u)) sans(d) phi.alt (sans(v)))\, $ <9.1>

and the Minkowski metric on the 4-dimensional space of special relativity is

$ sans(g) (sans(u)\,sans(v))= sans(d) x (sans(u))sans(d) x (sans(v)) + sans(d) y (sans(u))sans(d) y (sans(v)) + sans(d) z (sans(u))sans(d) z (sans(v)) - c^2 sans(d) t (sans(u))sans(d) t (sans(v)). $ <9.2>

Although these examples are expressed in terms of a coordinate basis, the value of the metric on vector fields does not depend on the coordinate system that is used to specify the metric.

Given a metric field $sans(g)$ and a vector field $sans(v)$ the scalar field $sans(g (v\,v))$ is the squared length of the vector at each point of the manifold.

#heading(level: 2, numbering: none)[Metric Music]
The metric can be used to construct a one-form field $bold(omega)_(sans(u))$ from a vector field $sans(u)$, such that for any vector field $sans(v)$ we have

$ omega_(sans(u)) (sans(v))= sans(g (v\,u)) . $ <9.3>

The operation of constructing a one-form field from a vector field using a metric is called \"lowering\" the vector field. It is sometimes notated as

$ bold(omega)_(sans(u)) = g^flat (sans(u)). $ <9.4>

There is also an inverse metric that takes two one-form fields. It is defined by the relation

$ delta_k^i = sum_j g^(-1) (tilde(sans(e))^i \, tilde(sans(e))^j) sans(g) (sans(e)_j\,sans(e)_k) . $ <9.5>

where $sans(e)$ and $tilde(sans(e))$ are any basis and its dual basis.

The inverse metric can be used to construct a vector field $sans(v)_omega$ from a one-form field $bold(omega)$, such that for any one-form field $bold(tau)$ we have

$ bold(tau) (sans(v)_omega)= sans(g)^(-1) (bold(omega)\,bold(tau)). $ <9.6>

This definition is implicit, but the vector field can be explicitly computed from the one-form field with respect to a basis as follows:

$ sans(v)_omega = sum_i g^(-1) (bold(omega) \, tilde(sans(e))^i) sans(e)_i . $ <9.7>

The operation of constructing a vector field from a one-form field using a metric is called \"raising\" the one-form field. It is sometimes notated

$ sans(v)_omega = sans(g)^sharp (bold(omega)). $ <9.8>

The raising and lowering operations allow one to interchange the vector fields and the one-form fields. However they should not be confused with the dual operation that allows one to construct a dual one-form basis from a vector basis or construct a vector basis from a one-form basis. The dual operation that interchanges bases is defined without assigning a metric structure on the space.

Lowering a vector field with respect to a metric is a simple program:

```scheme
(define ((lower metric) u)
  (define (omega v) (metric v u))
  (procedure->1form-field omega))
```

But raising a one-form field to make a vector field is a bit more complicated:

```scheme
(define (raise metric basis)
  (let ((gi (metric:invert metric basis)))
    (lambda (omega)
      (contract (lambda (e i w^i)
                  (* (gi omega w^i) e i))
                basis))))
```

where #raw(lang:"scheme", "contract") is the trace over a basis of a two-argument function that takes a vector field and a one-form field as its arguments.#footnote[Notice that #raw(lang:"scheme", "raise") and #raw(lang:"scheme", "lower") are not symmetrical. This is because vector fields and form fields are not symmetrical: a vector field takes a manifold function as its argument, whereas a form field takes a vector field as its argument. This asymmetry is not apparent in traditional treatments based on index notation.]

```scheme
(define (contract proc basis)
  (let ((vector-basis (basis->vector-basis basis))
        (1form-basis (basis->1form-basis basis)))
    (s:sigma/r proc
               vector-basis
               1form-basis)))
```

== Metric Compatibility <sec-9.1>
A connection is said to be compatible with a metric $sans(g)$ if the covariant derivative for that connection obeys the \"product rule\":

$ Delta_(sans(X)) (g (sans(Y) \, sans(Z))) = g (Delta_(sans(X)) (sans(Y)) \, sans(Z)) + g (sans(Y) \, Delta_(sans(X)) (sans(Z))) . $ <9.9>

For a metric there is a unique torsion-free connection that is compatible with it. The Christoffel coefficients of the first kind are computed from the metric by the following:

$ macron(Gamma)_(i j k) = 1 / 2 (sans(e)_k (sans(g) (sans(e)_i \, sans(e)_j)) + sans(e)_j (sans(g) (sans(e)_i \, sans(e)_k)) - sans(e)_i (sans(g) (sans(e)_j \, sans(e)_k))) $ <9.10>

for the coordinate basis $sans(e)$. We can then construct the Christoffel coefficients of the second kind (the ones used previously to define a connection) by \"raising the first index.\" To do this we define a function of three vectors, with a weird currying:

$ sum_(i j k) macron(Gamma)_(i j k) tilde(sans(e))^i (sans(u))tilde(sans(e))^j (sans(v))tilde(sans(e))^k (sans(w)) . $ <9.11>

This function takes two vector fields and produces a one-form field. We can use it with equation @9.7 to construct a new function that takes two vector fields and produces a vector field:

$ hat(Gamma) (sans(v)\,sans(w)) &= sum_i sans(g)^(-1) (tilde(Gamma) (sans(v) \, sans(w)) \, tilde(sans(e))^i) sans(e)_i . $ <9.12>

We can now construct the Christoffel coefficients of the second kind:

$ Gamma_(j k)^i = tilde(sans(e))^i (hat(Gamma) (sans(e)_j \, sans(e)_k))  &= sum_m macron(Gamma)_(m j k) sans(g)^(-1) (tilde(sans(e))^m \, tilde(sans(e))^i) $ <9.13>

The Cartan forms are then just

$ pi.alt_j^i  &= sum_k Gamma_(j k)^i tilde(upright(e))^k \
 &= sum_k tilde(upright(e))^i (hat(Gamma) (upright(e)_j \, upright(e)_k)) tilde(upright(e))^k . $ <9.14>

So, for example, we can compute the Christoffel coefficients for the sphere from the metric for the sphere. First, we need the metric:

```scheme
(define ((g-sphere R) u v)
  (* (square R)
     (+ (* (dtheta u) (dtheta v))
        (* (compose (square sin) theta)
           (dphi u)
           (dphi v)))))
```

The Christoffel coefficients of the first kind are a complex structure with all three indices down:

```scheme
((Christoffel->symbols
  (metric->Christoffel-1 (g-sphere 'R) S2-basis))
 ((point S2-spherical) (up 'theta0 'phi0)))
;; (down
;;  (down (down 0 0)
;;        (down 0 (* (* (cos theta0) (sin theta0)) (expt R 2))))
;;  (down (down 0 (* (* (cos theta0) (sin theta0)) (expt R 2)))
;;        (down (* (* -1 (cos theta0) (sin theta0)) (expt R 2))
;;              0)))
```

And the Christoffel coefficients of the second kind have the innermost index up:

```scheme
((Christoffel->symbols
  (metric->Christoffel-2 (g-sphere 'R) S2-basis))
 ((point S2-spherical) (up 'theta0 'phi0)))
;; (down (down (up 0 0)
;;             (up 0 (/ (cos theta0) (sin theta0))))
;;       (down (up 0 (/ (cos theta0) (sin theta0)))
;;             (up (* -1 (cos theta0) (sin theta0)) 0)))
```

=== Exercise 9.1: Metric Compatibility <sec-9.1.1>
The connections constructed from a metric by equation @9.13 are \"metric compatible,\" as described in equation @9.9. Demonstrate that this is true for a literal metric, as described in Section #fdg-ref-page(<sec-1.2>), in $upright(bold(R))^4$. Your program should produce a zero.

== Metrics and Lagrange Equations <sec-9.2>
In the Introduction (Chapter 1) we showed that the Lagrange equations for a free particle constrained to a 2-dimensional surface are equivalent to the geodesic equations for motion on that surface. We illustrated that in detail in Section @sec-7.4 for motion on a sphere.

Here we expand this understanding to show that the Christoffel symbols can be derived from the Lagrange equations. Specifically, if we solve the Lagrange equations for the acceleration (the highest-order derivatives) we find that the Christoffel symbols are the symmetrized coefficients of the quadratic velocity terms.

Consider the Lagrange equations for a free particle, with Lagrangian

$ L_2 (t\,x\,v)= 1 / 2 g (x) (v\,v). $ <9.15>

If we solve the Lagrange equations for the accelerations, the accelerations can be expressed with the geodesic equations @7.79:

$ D^2 q^i + sum_(j k) (Gamma_(j k)^i compose chi^(-1) compose q) D q^j D q^k = 0 . $ <9.16>

We can verify this computationally. Given a metric, we can construct a Lagrangian where the kinetic energy is the metric applied to the velocity twice: The kinetic energy is proportional to the squared length of the velocity vector.

```scheme
(define (metric->Lagrangian metric coordsys)
  (define (L state)
    (let ((q (ref state 1)) (qd (ref state 2)))
      (define v
        (components->vector-field (lambda (m) qd) coordsys))
      ((* 1/2 (metric v v)) ((point coordsys) q))))
  L)
```

The following code compares the Christoffel symbols with the coefficients of the terms of second order in velocity appearing in the accelerations, determined by solving the Lagrange equations for the highest-order derivative.#footnote[The procedure #raw(lang:"scheme", "Lagrange-explicit") produces the accelerations of the coordinates. In this code the division operator (#raw(lang:"scheme", "/")) multiplies its first argument on the left by the inverse of its second argument.

```scheme
(define (Lagrange-explicit L)
  (let ((P ((partial 2) L))
        (F ((partial 1) L)))
    (/ (- F (+ ((partial 0) P) (* ((partial 1) P) velocity)))
       ((partial 2) P))))
```] We extract these terms by taking two partials with respect to the structure of velocities. Because the elementary partials commute we get two copies of each coefficient, requiring a factor of 1/2.

```scheme
(let* ((metric (literal-metric 'g R3-rect))
       (q (typical-coords R3-rect))
       (L2 (metric->Lagrangian metric R3-rect)))
  (+ (* 1/2
        (((expt (partial 2) 2) (Lagrange-explicit L2))
         (up 't q (corresponding-velocities q))))
     ((Christoffel->symbols
       (metric->Christoffel-2 metric
                              (coordinate-system->basis R3-rect)))
      ((point R3-rect) q))))
;; (down (down (up 0 0 0) (up 0 0 0) (up 0 0 0))
;;       (down (up 0 0 0) (up 0 0 0) (up 0 0 0))
;;       (down (up 0 0 0) (up 0 0 0) (up 0 0 0)))
```

We get a structure of zeros, demonstrating the correspondence between Christoffel symbols and coefficients of the Lagrange equations.

Thus, if we have a metric specifying an inner product, the geodesic equations are equivalent to the Lagrange equations for the Lagrangian that is equal to the inner product of the generalized velocities with themselves

== Kinetic Energy or Arc Length <sec-9.3>
A geodesic is a path of stationary length with respect to variations in the path that keep the endpoints fixed. On the other hand, the solutions of the Lagrange equations are paths of stationary action that keep the endpoints fixed. How are these solutions related?

The integrand of the traditional action is the Lagrangian, which is in this case the Lagrangian $L_2$, the kinetic energy. The integrand of the arc length is

$ L_1 (t\,x\,v)= sqrt(g (x) (v\,v)) = sqrt(2 L_2 (t\,x\,v)) $ <9.17>

and the path length is

$ tau = integral_(t_1)^(t_2) L_1 (t \, q (t) \, D q (t)) d t . $ <9.18>

If we compute the Lagrange equations for $L_2$ we get the Lagrange equations for $L_1$ with a correction term. Since

$ L_2 (t\,x\,v)= 1 / 2(L_1 (t\,x\,v))^2\, $ <9.19>

and the Lagrange operator for $L_2$ is#footnote[$upright(bold(E))$ is the Euler-Lagrange operator, which gives the residuals of the Lagrange equations for a Lagrangian. $upright(bold(Gamma))$ extends a configuration-space path $q$ to make a state-space path, with as many terms as needed: $upright(bold(Gamma))[q] (t)=(t\,q (t)\,D q (t)\,dots.c)$. The total time derivative $D_t$ is defined by $D_t F compose upright(bold(Gamma))[q]= D (F compose upright(bold(Gamma)) [q])$ for any state function $F$ and path $q$. The Lagrange equations are $upright(bold(E))[L]compose Gamma[q]= 0$. See @sussman2001sicm for more details.]

$ bold(E)[L_2]= D_t partial_2 L_2 - partial_1 L_2\, $

we find

$ bold(E)[L_2]= L_1 bold(E)[L_1]+ partial_2 L_1 D_t L_1 . $ <9.20>

$L_2$ is the kinetic energy. It is conserved along solution paths, since there is no explicit time dependence. Because of the relation between $L_1$ and $L_2$, $L_1$ is also a conserved quantity. Let $L_1$ take the constant value $a$ on the geodesic coordinate path $q$ we are considering. Then $tau = a (t_2 - t_1)$. Since $L_1$ is conserved, $(D_t L_1)compose bold(Gamma)[q]= 0$ on the geodesic path $q$, and both $bold(E)[L_1]compose bold(Gamma)[q]= 0$ and $bold(E)[L_2]compose bold(Gamma)[q]= 0$, as required by equation @9.20.

Since $L_2$ is homogeneous of degree 2 in the velocities, $L_1$ is homogeneous of degree 1. So we cannot solve for the highest-order derivative in the Lagrange-Euler equations derived from $L_1$: The Lagrange equations of the Lagrangian $L_1$ are dependent. But although they do not uniquely specify the evolution, they do specify the geodesic path.

On the other hand, we can solve for the highest-order derivative in $bold(E)[L_2]$. This is because $L_1 bold(E)[L_1]$ is homogeneous of degree 2. So the equations derived from $L_2$ uniquely

=== For Two Dimensions <sec-9.3.1>
We can show this is true for a 2-dimensional system with a general metric. We define the Lagrangians in terms of this metric:

```scheme
(define L2
  (metric->Lagrangian (literal-metric 'm R2-rect)
                      R2-rect))

(define (L1 state)
  (sqrt (* 2 (L2 state))))
```

Although the mass matrix of $L_2$ is nonsingular

```scheme
(determinant
 (((partial 2) ((partial 2) L2))
  (up 't (up 'x 'y) (up 'vx 'vy))))
;; (+ (* (m_00 (up x y)) (m_11 (up x y)))
;;    (* -1 (expt (m_01 (up x y)) 2)))
```

the mass matrix of $L_1$ has determinant zero

```scheme
(determinant
 (((partial 2) ((partial 2) L1))
  (up 't (up 'x 'y) (up 'vx 'vy))))
;; 0
```

showing that these Lagrange equations are dependent.

We can show this dependence explicitly, for a simple system. Consider the simplest possible system, a geodesic (straight line) in a plane:

```scheme
(define (L1 state)
  (sqrt (square (velocity state))))

(((Lagrange-equations L1)
  (up (literal-function 'x) (literal-function 'y)))
 't)
;; (down
;;  (/ (+ (* (((expt D 2) x) t) (expt ((D y) t) 2))
;;        (* -1 ((D x) t) ((D y) t) (((expt D 2) y) t)))
;;     (expt (+ (expt ((D x) t) 2) (expt ((D y) t) 2)) 3/2))
;;  (/ (+ (* -1 (((expt D 2) x) t) ((D x) t) ((D y) t))
;;        (* (expt ((D x) t) 2) (((expt D 2) y) t)))
;;     (expt (+ (expt ((D x) t) 2) (expt ((D y) t) 2)) 3/2)))

```

These residuals must be zero; so the numerators must be zero.#footnote[We cheated: We hand-simplified the denominator to make the result more obvious.] They are:

$ D^2 x thin (D y)^2= D x thin D y thin D^2 y \
 D^2 x thin D x thin D y =(D x)^2thin D^2 y $

Note that the only constraint is $D^2 x thin D y = D x thin D^2 y$, so the resulting Lagrange equations are dependent.

This is enough to determine that the result is a straight line, without specifying the rate along the line. Suppose $y = f (x)$, for path $(x (t)\,y (t))$. Then

$ D y = D f (x)thin D x upright(" and ") D^2 y = D^2 f (x)thin D x + D f (x)thin D^2 (x). $

Substituting, we get

$ D f (x)thin D x thin D^2 x = D x (D^2 f (x) thin D x + D f (x) thin D^2 x) $

or

$ D f (x)thin D^2 x = D^2 f (x)thin D x + D f (x)thin D^2 x\, $

so $D^2 f (x)= 0$. Thus $f$ is a straight line, as required.

=== Reparametrization <sec-9.3.2>
More generally, a differential equation system $F[q] (t)= 0$ is said to be #emph[reparameterized] if the coordinate path $q$ is replaced with a new coordinate path $q compose f$. For example, we may change the scale of the independent variable. The system $F[q compose f]= 0$ is said to be independent of the parameterization if and only if $F[q]compose f = 0$. So the differential equation system is satisfied by $q compose f$ if and only if it is satisfied by $q$.

The Lagrangian $L_1$ is homogeneous of degree 1 in the velocities; so

$ bold(E)[L_1]compose Gamma[q compose f] - (bold(E) [L_1] compose Gamma [q] compose f) D f = 0 . $ <9.21>

We can check this in a simple case. For two dimensions $q =(x\,y)$, the condition under which a reparameterization $f$ of the geodesic paths with coordinates $q$ satisfies the Lagrange equations for $L_1$ is:

```scheme
(let ((x (literal-function 'x))
      (y (literal-function 'y))
      (f (literal-function 'f))
      (E1 (Euler-Lagrange-operator L1)))
  ((- (compose E1
               (Gamma (up (compose x f)
                          (compose y f))
                      4))
      (* (compose E1
                  (Gamma (up x y) 4)
                  f)
         (D f)))
   't))
;; (down 0 0)
```

This residual is identically satisfied, showing that the Lagrange equations for $L_1$ are independent of the parameterization of the independent variable.

The Lagrangian $L_2$ is homogeneous of degree 2 in the velocities; so

$ bold(E)[L_2][q compose f]-(bold(E)[L_2][q]compose f) (D f)^2 &= (partial_2 L_2 compose Gamma [q] compose f) (D^2 f). $ <9.22>

Although the Euler-Lagrange equations for $L_1$ are invariant under an arbitrary reparameterization $(D f != 0)$, the Euler-Lagrange equations for $L_2$ are invariant only for a restricted set of $f$. The conditions under which a reparameterization $f$ of geodesic paths with coordinates $q$ satisfies the Lagrange equations for $L_2$ are:

```scheme
(let ((q (up (literal-function 'x) (literal-function 'y)))
      (f (literal-function 'f)))
  ((- (compose (Euler-Lagrange-operator L2)
               (Gamma (compose q f) 4))
      (* (compose (Euler-Lagrange-operator L2)
                  (Gamma q 4)
                  f)
         (expt (D f) 2)))
   't))
;; (down
;;  (* (+ (* ((D x) (f t)) (m 00 (up (x (f t)) (y (f t)))))
;;        (* ((D y) (f t)) (m 01 (up (x (f t)) (y (f t))))))
;;     (((expt D 2) f) t))
;;  (* (+ (* ((D x) (f t)) (m 01 (up (x (f t)) (y (f t)))))
;;        (* ((D y) (f t)) (m 11 (up (x (f t)) (y (f t))))))
;;     (((expt D 2) f) t)))
```

We see that if these expressions must be zero, then $D^2 f = 0$. This tells us that $f$ is at most affine in $t : f (t)= a t + b$.

=== Exercise 9.2: SO(3) Geodesics <sec-9.3.3>
We have derived a basis for SO(3) in terms of incremental rotations around the rectangular axes. See equations @4.29, @4.30, @4.31. We can use the dual basis to define a metric on SO(3).

```scheme
(define (SO3-metric v1 v2)
  (+ (* (e^x v1) (e^x v2))
     (* (e^y v1) (e^y v2))
     (* (e^z v1) (e^z v2))))
```

This metric determines a connection. Show that uniform rotation about an arbitrary axis traces a geodesic on SO(3).

=== Exercise 9.3: Curvature of a Spherical Surface <sec-9.3.4>
The 2-dimensional surface of a 3-dimensional sphere can be embedded in three dimensions with a metric that depends on the radius:

```scheme
(define M (make-manifold S^2-type 2 3))
(define spherical
  (coordinate-system-at 'spherical 'north-pole M))
(define-coordinates (up theta phi) spherical)
(define spherical-basis (coordinate-system->basis spherical))

(define ((spherical-metric r) v1 v2)
  (* (square r)
     (+ (* (dtheta v1) (dtheta v2))
        (* (square (sin theta))
           (dphi v1) (dphi v2)))))
```

If we raise one index of the Ricci tensor (see equation @8.20) by contracting it with the inverse of the metric tensor we can further contract it to obtain a scalar manifold function:

$ R = sum_(i j) sans(g) (tilde(sans(e))^i \, tilde(sans(e))^j) r (sans(e)^i \, sans(e)^j) . $ <9.23>

The #raw(lang:"scheme", "trace2down") procedure converts a tensor that takes two vector fields into a tensor that takes a vector field and a one-form field, and then it contracts the result over a basis to make a trace. It is useful for getting the Ricci scalar from the Ricci tensor, given a metric and a basis.

```scheme
(define ((trace2down metric basis) tensor)
  (let ((inverse-metric-tensor
         (metric:invert metric-tensor basis)))
    (contract
     (lambda (v1 w1)
       (contract
        (lambda (v w)
          (* (inverse-metric-tensor w1 w)
             (tensor v v1)))
        basis))
     basis)))
```

Evaluate the Ricci scalar for a sphere of radius $r$ to obtain a measure of its intrinsic curvature. You should obtain the answer $2\/r^2$.

=== Exercise 9.4: Curvature of a Pseudosphere <sec-9.3.5>
Compute the scalar curvature of the pseudosphere (see exercise 8.2). You should obtain the value −2.

== General Relativity <sec-9.4>
By analogy to Newtonian mechanics, relativistic mechanics has two parts. There are equations of motion that describe how particles move under the influence of \"forces\" and there are field equations that describe how the forces arise. In general relativity the only force considered is gravity. However, gravity is not treated as a force. Instead, gravity arises from curvature in the spacetime, and the equations of motion are motion along geodesics of that space.

The geodesic equations for a spacetime with the metric

$ sans(g) (sans(v)_1, sans(v)_2) = - c^2 lr(1 + frac(2 V, c^2)) sans(d) sans(t) (sans(v)_1) sans(d) sans(t) (sans(v)_2) + sans(d) sans(x) (sans(v)_1) sans(d) sans(x) (sans(v)_2) + sans(d) sans(y) (sans(v)_1) sans(d) sans(y) (sans(v)_2) + sans(d) sans(z) (sans(v)_1) sans(d) sans(z) (sans(v)_2) $ <9.24>

are Newton\'s equations to lowest order in $V\/c^2$:

$ D^2 arrow(x) (t) = - grad V (arrow(x) (t)). $ <9.25>

=== Exercise 9.5: Newton\'s Equations <sec-9.4.1>
Verify that Newton\'s equations @9.25 are indeed the lowest-order terms of the geodesic equations for the metric #ref(<9.24>).

Einstein\'s field equations tell how the local energy-momentum distribution determines the local shape of the spacetime, as described by the metric tensor $g$. The equations are traditionally written

$ R_(mu nu) - 1 / 2 R g_(mu nu) + Lambda g_(mu nu) = frac(8 pi G, c^4) T_(mu nu) $ <9.26>

where $R_(mu nu)$ are the components of the Ricci tensor (equation @8.20), $R$ is the Ricci scalar (equation @9.23),#footnote[The tensor with components $G_(mu nu) = R_(mu nu) - 1 / 2 R g_(mu nu)$ is called the Einstein tensor. In his search for an appropriate field equation for gravity, Einstein demanded #emph[general covariance] (independence of coordinate system) and local Lorentz invariance (at each point transformations must preserve the line element). These considerations led Einstein to look for a tensor equation (see Appendix @chap-appendix-c).] and $Lambda$ is the cosmological constant.

$T_(mu nu)$ are the components of the stress-energy tensor describing the energy-momentum distribution. Equivalently, one can write

$ R_(mu nu) = frac(8 pi G, c^4) (T_(mu nu) - 1 / 2 T g_(mu nu)) - Lambda g_(mu nu) $ <9.27>

where $T = T_(mu nu) g^(mu nu)$.#footnote[Start with equation @9.26. Raise one index of both sides, and then contract. Notice that the trace $g_mu^mu = 4$, the dimension of spacetime. This gets $R = - (frac(8 pi G, c^4)) T$ , from which we can deduce equation @9.27.]

Einstein\'s field equations arise from a heuristic derivation by analogy to the Poisson equation for a Newtonian gravitational field:

$ Lap (V)= 4 pi G rho $ <9.28>

where $V$ is the gravitational potential field at a point, $rho$ is the mass density at that point, and $Lap$ is the Laplacian operator.

The time-time component of the Ricci tensor derived from the metric #ref(<9.24>) is the Laplacian of the potential, to lowest order.

```scheme
(define (Newton-metric M G c V)
  (let ((a
         (+ 1 (* (/ 2 (square c))
                 (compose V (up x y z))))))
    (define (g v1 v2)
      (+ (* -1 (square c) a (dt v1) (dt v2))
         (* (dx v1) (dx v2))
         (* (dy v1) (dy v2))
         (* (dz v1) (dz v2))))
    g))

(define (Newton-connection M G c V)
  (Christoffel->Cartan
   (metric->Christoffel-2 (Newton-metric M G c V)
                          spacetime-rect-basis)))

(define nabla
  (covariant-derivative
   (Newton-connection 'M 'G ':c
                      (literal-function 'V (-> (UP Real Real Real) Real)))))


(((Ricci nabla (coordinate-system->basis spacetime-rect))
  d/dt d/dt)
 ((point spacetime-rect) (up 't 'x 'y 'z)))
;; mess
```

The leading terms of the mess are

```scheme
(+ (((partial 0) ((partial 0) V)) (up x y z))
   (((partial 1) ((partial 1) V)) (up x y z))
   (((partial 2) ((partial 2) V)) (up x y z)))
```

which is the Laplacian of V . The other terms are smaller by $V\/c^2$.

Now consider the right-hand side of equation @9.27. In the Poisson equation the source of the gravitational potential is the density of matter. Let the time-time component of the stress-energy tensor $T_00$ be the matter density $rho$. Here is a program for the stress-energy tensor:

```scheme
(define (Tdust rho)
  (define (T w1 w2)
    (* rho (w1 d/dt) (w2 d/dt)))
  T)
```

If we evaluate the right-hand side expression we obtain#footnote[The procedure #raw(lang:"scheme", "trace2down") is defined in Section #fdg-ref-page(<sec-9.3.4>). This expression also uses #raw(lang:"scheme", "drop2"), which converts a tensor field that takes two one-form fields into a tensor field that takes two vector fields. Its definition is

```scheme
(define ((drop2 metric-tensor basis) tensor)
  (lambda (v1 v2)
    (contract
     (lambda (e1 w1)
       (contract
        (lambda (e2 w2)
          (* (metric-tensor v1 e1) (tensor w1 w2) (metric-tensor e2 v2)))
        basis))
     basis)))
```]

```scheme
(let ((g (Newton-metric 'M 'G ':c V)))
  (let ((T ij ((drop2 g spacetime-rect-basis) (Tdust 'rho))))
    (let ((T ((trace2down g spacetime-rect-basis) T ij)))
      ((- (T ij d/dt d/dt) (* 1/2 T (g d/dt d/dt)))
       ((point spacetime-rect) (up 't 'x 'y 'z))))))
;; (* 1/2 (expt :c 4) rho)
```

So, to make the Poisson analogy we get

$ R_(mu nu) = frac(8 pi G, c^4) (T_(mu nu) - 1 / 2 T g_(mu nu)) - Lambda g_(mu nu) $ <9.29>

as required.

=== Exercise 9.6: Curvature of Schwarzschild Spacetime <sec-9.4.2>
In spherical coordinates around a nonrotating gravitating body the metric of Schwarzschild spacetime is given as:#footnote[The spacetime manifold is built from $upright(bold(R))^4$ with the addition of appropriate coordinate systems:

```scheme
(define spacetime (make-manifold R^n 4))
(define spacetime-rect
  (coordinate-system-at 'rectangular 'origin spacetime))
(define spacetime-sphere
  (coordinate-system-at 'spacetime-spherical 'origin spacetime))
```]

```scheme
(define-coordinates (up t r theta phi) spacetime-sphere)

(define (Schwarzschild-metric M G c)
  (let ((a (- 1 (/ (* 2 G M) (* (square c) r)))))
    (lambda (v1 v2)
      (+ (* -1 (square c) a (dt v1) (dt v2))
         (* (/ 1 a) (dr v1) (dr v2))
         (* (square r)
            (+ (* (dtheta v1) (dtheta v2))
               (* (square (sin theta))
                  (dphi v1) (dphi v2))))))))
```

Show that the Ricci curvature of the Schwarzschild spacetime is zero. Use the definition of the Ricci tensor in equation @8.20.

=== Exercise 9.7: Circular Orbits in Schwarzschild Spacetime <sec-9.4.3>
Test particles move along geodesics in spacetime. Now that we have a metric for Schwarzschild spacetime (Section #fdg-ref-page(<sec-9.4.2>)) we can use it to construct the geodesic equations and determine how test particles move. Consider circular orbits. For example, the circular orbit along a line of constant longitude is a geodesic, so it should satisfy the geodesic equations. Here is the equation of a circular path along the zero longitude line.

```scheme
(define (prime-meridian r omega)
  (compose (point spacetime-sphere)
           (lambda (t) (up t r (* omega t) 0))
           (chart R1-rect)))
```

This equation will satisfy the geodesic equations for compatible values of the radius #raw(lang:"scheme", "r") and the angular velocity #raw(lang:"scheme", "omega"). If you substitute this into the geodesic equation and set the residual to zero you will obtain a constraint relating #raw(lang:"scheme", "r") and #raw(lang:"scheme", "omega"). Do it.

Surprise: You should find out that $omega^2 r^3 = G M$ --- Kepler\'s law!

=== Exercise 9.8: Stability of Circular Orbits <sec-9.4.4>
In Schwarzschild spacetime there are stable circular orbits if the coordinate $r$ is large enough, but below that value all orbits are unstable. The critical value of $r$ is larger than the Schwarzschild horizon radius. Let\'s find that value.

For example, we can consider a perturbation of the orbit of constant longitude. Here is the result of adding an exponential variation of size #raw(lang:"scheme", "epsilon"):

```scheme
(define (prime-meridian+X r epsilon X)
  (compose
   (point spacetime-sphere)
   (lambda (t)
     (up (+ t (* epsilon (* (ref X 0) (exp (* 'lambda t)))))
         (+ r (* epsilon (* (ref X 1) (exp (* 'lambda t)))))
         (+ (* (sqrt (/ (* 'G 'M) (expt r 3))) t)
            (* epsilon (* (ref X 2) (exp (* 'lambda t)))))
         0))
   (chart R1-rect)))
```

Plugging this into the geodesic equation yields a structure of residuals:

```scheme
(define (geodesic-equation+X-residuals eps X)
  (let ((gamma (prime-meridian+X 'r eps X)))
    (((((covariant-derivative Cartan gamma) d/dtau)
       ((differential gamma) d/dtau))
      (chart spacetime-sphere))
     ((point R1-rect) 't))))
```

The characteristic equation in the eigenvalue #raw(lang:"scheme", "lambda") can be obtained as the numerator of the expression:

```scheme
(determinant
 (submatrix (((* (partial 1) (partial 0))
              geodesic-equation+X-residuals)
             0
             (up 0 0 0))
            0 3 0 3))
```

Show that the orbits are unstable if $r < 6 G M\/c^2$.

=== Exercise 9.9: Friedmann-Lemaître-Robertson-Walker <sec-9.4.5>
The Einstein tensor $G_(mu nu)$ (see footnote 5) can be expressed as a program:

```scheme
(define (Einstein coordinate-system metric-tensor)
  (let* ((basis (coordinate-system->basis coordinate-system))
         (connection
          (Christoffel->Cartan
           (metric->Christoffel-2 metric-tensor basis)))
         (nabla (covariant-derivative connection))
         (Ricci-tensor (Ricci nabla basis))
         (Ricci-scalar
          ((trace2down metric-tensor basis) Ricci-tensor)))
    (define (Einstein-tensor v1 v2)
      (- (Ricci-tensor v1 v2)
         (* 1/2 Ricci-scalar (metric-tensor v1 v2))))
    Einstein-tensor))

(define (Einstein-field-equation
         coordinate-system metric-tensor Lambda stress-energy-tensor)
  (let ((Einstein-tensor
         (Einstein coordinate-system metric-tensor)))
    (define EFE-residuals
      (- (+ Einstein-tensor (* Lambda metric-tensor))
         (* (/ (* 8 :pi :G) (expt :c 4))
            stress-energy-tensor)))
    EFE-residuals))
```

One exact solution to the Einstein equations was found by Alexander Friedmann in 1922. He showed that a metric for an isotropic and homogeneous spacetime was consistent with a similarly isotropic and homogeneous stress-energy tensor in Einstein\'s equations. In this case the residuals of the Einstein equations gave ordinary differential equations for the time-dependent scale of the universe. These are called the Robertson-Walker equations. Friedmann\'s metric is:

```scheme
(define (FLRW-metric c k R)
  (define-coordinates (up t r theta phi) spacetime-sphere)
  (let ((a (/ (square (compose R t)) (- 1 (* k (square r)))))
        (b (square (* (compose R t) r))))
    (define (g v1 v2)
      (+ (* -1 (square c) (dt v1) (dt v2))
         (* a (dr v1) (dr v2))
         (* b (+ (* (dtheta v1) (dtheta v2))
                 (* (square (sin theta))
                    (dphi v1) (dphi v2))))))
    g))
```

Here #raw(lang:"scheme", "c") is the speed of light, #raw(lang:"scheme", "k") is the intrinsic curvature, and #raw(lang:"scheme", "R") is a length scale that is a function of time.

The associated stress-energy tensor is

```scheme
(define (Tperfect-fluid rho p c metric)
  (define-coordinates (up t r theta phi) spacetime-sphere)
  (let* ((basis (coordinate-system->basis spacetime-sphere))
         (inverse-metric (metric:invert metric basis)))
    (define (T w1 w2)
      (+ (* (+ (compose rho t)
               (/ (compose p t) (square c)))
            (w1 d/dt) (w2 d/dt))
         (* (compose p t) (inverse-metric w1 w2))))
    T))
```

where #raw(lang:"scheme", "rho") is the energy density, and #raw(lang:"scheme", "p") is the pressure in an ideal fluid model.

The Robertson-Walker equations are:

$ (frac(D R (t), R (t)))^2 + frac(k c^2, (R (t))^2) - frac(Lambda c^2, 3) = frac(8 pi G, 3) rho (t)\,\
 2 frac(D^2 R (t), R (t)) - 2 / 3 Lambda c^2 = - 8 pi G (frac(rho (t), 3) + frac(p (t), c^2)) . $ <9.30>

Use the programs supplied to derive the Robertson-Walker equations.

=== Exercise 9.10: Cosmology <sec-9.4.6>
For energy to be conserved, the stress-energy tensor must be constrained so that its covariant divergence is zero

$ sum_mu Delta_(e_mu) T (tilde(sans(e))^mu \, omega) = 0 $ <9.31>

for every one-form $omega$.

a. Show that for the perfect fluid stress-energy tensor and the FLRW metric this constraint is equivalent to the differential equation

$ D (c^2 rho R^3) + p D (R^3) = 0 . $ <9.32>

b. Assume that in a \"matter-dominated universe\" radiation pressure is negligible, so $p = 0$. Using the Robertson-Walker equations @9.30 and the energy conservation equation @9.32 show that the observation of an expanding universe is compatible with a negative curvature universe, a flat universe, or a positive curvature universe: $k in {- 1 \, 0 \, + 1}$.
]
