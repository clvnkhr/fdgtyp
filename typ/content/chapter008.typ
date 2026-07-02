// Generated from ../../fdg-book/scheme/org/chapter008.org.
// Re-run scripts/convert-org-to-typst.mjs to refresh.
#import "../lib.typ": fdg-chapter, fdg-figure, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX

#fdg-chapter("Curvature", numbered: true, eq-prefix: "8", ref-label: "chap-8")[
If the intrinsic curvature of a manifold is not zero, a vector parallel-transported around a small loop will end up different from the vector that started. We saw the consequence of this before, on #fdg-page-ref(<intro-parallel-transport>) and #fdg-page-ref(<sec-7.16>). The Riemann tensor encapsulates this idea.

The Riemann curvature operator is

$ cal(R) (sans(w)\,sans(v))=[nabla_(sans(w))\,nabla_(sans(v))]- nabla_([sans(w)\,sans(v)]) . $ <8.1>

The traditional Riemann tensor is

$ cal(R) (bold(omega)\,sans(u)\,sans(v)\,sans(w)) =\
 bold(omega) ((cal(R) (sans(w) \, sans(v))) (sans(u)))\, $ <8.2>

where $bold(omega)$ is a one-form field that measures the incremental change in the vector field $sans(u)$ caused by parallel-transporting it around the loop defined by the vector fields $sans(w)$ and $sans(v)$. $sans(R)$ allows us to compute the #emph[intrinsic curvature] of a manifold at a point.

The Riemann curvature is computed by

```scheme
(define ((Riemann-curvature nabla) w v)
  (- (commutator (nabla w) (nabla v))
     (nabla (commutator w v))))
```

The #raw(lang:"scheme", "Riemann-curvature") procedure is parameterized by the relevant #raw(lang:"scheme", "covariant-derivative") operator #raw(lang:"scheme", "nabla"), which implements $nabla$. The #raw(lang:"scheme", "nabla") is itself dependent on the connection, which provides the details of the local geometry. The same #raw(lang:"scheme", "Riemann-curvature") procedure works for ordinary covariant derivatives and for covariant derivatives over a map. Given two vector fields, the result of #raw(lang:"scheme", "((Riemann-curvature nabla) w v)") is a procedure that takes a vector field and produces a vector field so we can implement the Riemann tensor as

```scheme
(define ((Riemann nabla) omega u w v)
  (omega (((Riemann-curvature nabla) w v) u)))
```

So, for example,#footnote[The connection specified by #raw(lang:"scheme", "sphere-Cartan") is defined in Section #fdg-ref-page(<sec-7.16>).]

```scheme
(((Riemann (covariant-derivative sphere-Cartan))
  dphi d/dtheta d/dphi d/dtheta)
 ((point S2-spherical) (up 'theta0 'phi0)))
;; 1
```

Here we have computed the $φ$ component of the result of carrying a $partial\/partial theta$ basis vector around the parallelogram defined by $partial\/partial phi.alt$ and $partial\/partial theta$. The result shows a net rotation in the $phi.alt$ direction.

Most of the sixteen coefficients of the Riemann tensor for the sphere are zero. The following are the nonzero coefficients:

$ sans(R) (sans(d) theta \, frac(partial, partial phi.alt) \, frac(partial, partial theta) \, frac(partial, partial phi.alt)) \
 (chi^(-1) (q^theta \, q^phi.alt)) = (sin (q^theta))^2\,\
 sans(R) (sans(d) theta \, frac(partial, partial phi.alt) \, frac(partial, partial phi.alt) \, frac(partial, partial theta)) \
 (chi^(-1) (q^theta \, q^phi.alt)) = - (sin (q^theta))^2\,\
 sans(R) (sans(d) phi.alt \, frac(partial, partial theta) \, frac(partial, partial theta) \, frac(partial, partial phi.alt)) \
 (chi^(-1) (q^theta \, q^phi.alt)) = - 1\,\
 sans(R) (sans(d) phi.alt \, frac(partial, partial theta) \, frac(partial, partial phi.alt) \, frac(partial, partial theta)) \
 (chi^(-1) (q^theta \, q^phi.alt)) = 1 . $ <8.3>

== Explicit Transport <sec-8.1>
We will show that the result of the Riemann calculation of the change in a vector, as we traverse a loop, is what we get by explicitly calculating the transport. The coordinates of the vector to be transported are governed by the differential equations (see equation @7.72)

$ D u^i (t)= - sum_j pi.alt_j^i (sans(v)) (chi^(-1) (sigma (t))) u^j (t) $ <8.4>

and the coordinates as a function of time, $sigma = chi compose gamma compose chi_(sans(R))^(-1)$, of the path $gamma$, are governed by the differential equations#footnote[The map $gamma$ takes points on the real line to points on the target manifold. The chart $chi$ gives coordinates of points on the target manifold while $chi_(sans(R))$ gives a time coordinate on the real line.]

$ D sigma (t)= sans(v) (chi) (chi^(-1) (sigma (t))) . $ <8.5>

We have to integrate these equations @8.4, @8.5 together to transport the vector over the map $sans(u)_gamma$ a finite distance along the vector field $sans(v)$.

Let $s (t)=(sigma (t)\,u (t))$ be a state tuple, combining $sigma$ the coordinates of $gamma$, and $u$ the coordinates of $sans(u)_gamma$. Then

$ D s (t)= (D sigma (t) \, D u (t)) = g (s (t))\, $ <8.6>

where $g$ is the tuple of right-hand sides of equations @8.4, @8.5.

The differential equations describing the evolution of a function $h$ of state $s$ along the state path are

$ D (h compose s)=(D h compose s) (g compose s)= L_g h compose s\, $ <8.7>

defining the operator $L_g$.

Exponentiation gives a finite evolution:#footnote[The series may not converge for large increments in the independent variable. In this case it is appropriate to numerically integrate the differential equations directly.]

$ h(s (t + epsilon.alt))= (e^(epsilon.alt L_g) h) (s (t)) . $ <8.8>

The finite parallel transport of the vector with components $u$ is

$ u (t + epsilon.alt)= (e^(epsilon.alt L_g) U) (s (t))\, $ <8.9>

where the selector $U (sigma\,u)= u$, and the initial state is $s (t)=(sigma (t)\,u (t))$.

Consider parallel-transporting a vector $sans(u)$ around a parallelogram defined by two coordinate-basis vector fields $sans(w)$ and $sans(v)$. The vector $sans(u)$ is really a vector over a map, where the map is the parametric curve describing our parallelogram. This map is implicitly defined in terms of the vector fields $sans(w)$ and $sans(v)$. Let $g_w$ and $g_v$ be the right-hand sides of the differential equations for parallel transport along $sans(w)$ and $sans(v)$ respectively. Then evolution along $sans(w)$ for interval $epsilon.alt$, then along $sans(v)$ for interval $epsilon.alt$, then reversing $sans(w)$, and reversing $sans(v)$, brings $sigma$ back to where it started to second order in $epsilon.alt$.

The state $s =(sigma\,u)$ after transporting $s_0$ around the loop is#footnote[The parallel-transport operators are evolution operators, and therefore descend into composition:

$ e_A (F compose G)= F compose (e^A G)\, $ <8.33>

for any state function $G$ and any compatible $F$. As a consequence, we have the following identity:

$ e^A e^B I = e^A ((e^B I) compose I) = \
 (e^B I) compose (e^A I)\, $ <8.34>

where $I$ is the identity function on states.]

$ (e^(- epsilon.alt L_(g_v)) I) compose (e^(- epsilon.alt L_(g_w)) I) compose (e^(epsilon.alt L_(g_v)) I) \
 compose (e^(epsilon.alt L_(g_w)) I) (s_0) \
 quad = (e^(epsilon.alt L_(g_w)) e^(epsilon.alt L_(g_v)) e^(- epsilon.alt L_(g_w)) e^(- epsilon.alt L_(g_v)) I) (s_0) \
 quad = (e^(epsilon.alt^2 [L_(g_w) \, L_(g_v)] + dots.c) I) (s_0) . $ <8.10>

So the lowest-order change in the transported vector is

$ epsilon.alt^2 U (([L_(g_w) \, L_(g_v)] I) (s_0))\, $ <8.11>

where $U (sigma\,u)= u$.

However , if $sans(w)$ and $sans(v)$ do not commute, the indicated loop does not bring $sigma$ back to the starting point, to second order in $epsilon.alt$. We must account for the commutator. (See figure 4.2.) In the general case the lowest order change in the transported vector is

$ epsilon.alt^2 U ((([L_(g_w) \, L_(g_v)] - L_(g_([w\,v]))) I) (s_0))\, $ <8.12>

This is what the Riemann tensor computation gives, scaled by $epsilon.alt^2$.

=== Verification in Two Dimensions <sec-8.1.1>
We can verify this in two dimensions. We need to make the structure representing a state:

```scheme
(define (make-state sigma u) (vector sigma u))

(define (Sigma state) (ref state 0))

(define (U-select state) (ref state 1))
```

And now we get to the meat of the matter: First we find the rate of change of the components of the vector $sans(u)$ as we carry it along the vector field $sans(v)$.#footnote[The setup for this experiment is a bit complicated. We need to make a manifold with a general connection.

```scheme
(define Chi-inverse (point R2-rect))
(define Chi (chart R2-rect))
```]

```scheme
(define ((Du v) state)
  (let ((CF (Cartan->forms general-Cartan-2)))
    (* -1
       ((CF v) (Chi-inverse (Sigma state)))
       (U-select state))))
```

We also need to determine the rate of change of the coordinates of the integral curve of $sans(v)$.

```scheme
(define ((Dsigma v) state)
  ((v Chi) (Chi-inverse (Sigma state))))
```

Putting these together to make the derivative of the state vector

```scheme
(define ((g v) state)
  (make-state ((Dsigma v) state) ((Du v) state)))
```

gives us just what we need to construct the differential operator for evolution of the combined state:

```scheme
(define (L v)
  (define ((l h) state)
    (* ((D h) state) ((g v) state)))
  (make-operator l))
```

So now we can demonstrate that the lowest-order change resulting from explicit parallel transport of a vector around an infinitesimal loop is what is computed by the Riemann curvature.

```scheme
(let ((U (literal-vector-field 'U-rect R2-rect))
      (W (literal-vector-field 'W-rect R2-rect))
      (V (literal-vector-field 'V-rect R2-rect))
      (sigma (up 'sigma0 'sigma1)))
  (let ((nabla (covariant-derivative general-Cartan-2))
        (m (Chi-inverse sigma)))
    (let ((s (make-state sigma ((U Chi) m))))
      (- (((- (commutator (L V) (L W))
              (L (commutator V W)))
           U-select)
          s)
         (((((Riemann-curvature nabla) W V) U) Chi) m)))))
;; (up 0 0)
```

=== Geometrically <sec-8.1.2>
The explicit transport above was done with differential equations operating on a state consisting of coordinates and components of the vector being transported. We can simplify this so that it is entirely built on manifold objects, eliminating the state. After a long algebraic story we find that

$ ((cal(R) (sans(w)\,sans(v))) (sans(u))) (sans(f))\
 quad = sans(e) (sans(f)){(sans(w) (pi.alt (sans(v)))- sans(v) (pi.alt (sans(w)))- pi.alt ([sans(w)\,sans(v)]))tilde(sans(e)) (sans(u))\
 quad + pi.alt (sans(w))pi.alt (sans(v))tilde(sans(e)) (sans(u))- pi.alt (sans(v))pi.alt (sans(w))tilde(sans(e)) (sans(u))} $ <8.13>

or as a program:

```scheme
(define ((((curvature-from-transport Cartan) w v) u) f)
  (let* ((CF (Cartan->forms Cartan))
         (basis (Cartan->basis Cartan))
         (fi (basis->1form-basis basis))
         (ei (basis->vector-basis basis)))
    (* (ei f)
       (+ (* (- (- (w (CF v)) (v (CF w)))
                (CF (commutator w v)))
             (fi u))
          (- (* (CF w) (* (CF v) (fi u)))
             (* (CF v) (* (CF w) (fi u))))))))
```

This computes the same operator as the traditional Riemann curvature operator:

```scheme
(define (test coordsys Cartan)
  (let ((m (typical-point coordsys))
        (u (literal-vector-field 'u-coord coordsys))
        (w (literal-vector-field 'w-coord coordsys))
        (v (literal-vector-field 'v-coord coordsys))
        (f (literal-manifold-function 'f-coord coordsys)))
    (let ((nabla (covariant-derivative Cartan)))
      (- (((((curvature-from-transport Cartan) w v) u) f) m)
         (((((Riemann-curvature nabla) w v) u) f) m)))))

(test R2-rect general-Cartan-2)
;; 0

(test R2-polar general-Cartan-2)
;; 0
```

=== Terms of the Riemann Curvature <sec-8.1.3>
Since the Riemann curvature is defined as in equation @8.1,

$ cal(R) (sans(w)\,sans(v))=[nabla_(sans(w))\,nabla_(sans(v))]- nabla_([sans(w)\,sans(v)])\, $ <8.14>

it is natural#footnote[People often say \"Geodesic evolution is exponentiation of the covariant derivative.\" But this is wrong. The evolution is by exponentiation of $L_g$.] to identify these terms with the corresponding terms in

$ (([L_(g_w) \, L_(g_v)] - L_(g_([w\,v]))) U) (s_0). $ <8.15>

Unfortunately, this does not work, as demonstrated below:

```scheme
(let ((U (literal-vector-field 'U-rect R2-rect))
      (V (literal-vector-field 'V-rect R2-rect))
      (W (literal-vector-field 'W-rect R2-rect))
      (nabla (covariant-derivative general-Cartan-2))
      (sigma (up 'sigma0 'sigma1)))
  (let ((m (Chi-inverse sigma)))
    (let ((s (make-state sigma ((U Chi) m))))
      (- (((commutator (L W) (L V)) U-select) s)
         ((((commutator (nabla W) (nabla V)) U) Chi)
          m)))))
;; a nonzero mess
```

The obvious identification does not work, but neither does the other one!

```scheme
(let ((U (literal-vector-field 'U-rect R2-rect))
      (V (literal-vector-field 'V-rect R2-rect))
      (W (literal-vector-field 'W-rect R2-rect))
      (nabla (covariant-derivative general-Cartan-2))
      (sigma (up 'sigma0 'sigma1)))
  (let ((m (Chi-inverse sigma)))
    (let ((s (make-state sigma ((U Chi) m))))
      (- (((commutator (L W) (L V)) U-select) s)
         ((((nabla (commutator W V)) U) Chi)
          m)))))
;; a nonzero mess
```

Let\'s compute the two parts of the Riemann curvature operator and see how this works out. First, recall

$ nabla_(sans(v)) sans(u) (sans(f))= sum_i sans(e)_i (sans(f)) (sans(v) (tilde(sans(e))^i (sans(u))) \
 + sum_j pi.alt_j^i (sans(v)) tilde(sans(e))^j (sans(u))) \
 &= sans(e) (sans(f)) (sans(v) (tilde(sans(e)) (sans(u)))\
 + pi.alt (sans(v))tilde(sans(e)) (sans(u)))\, $ <8.16>

where the second form uses tuple arithmetic. Now let\'s consider the first part of the Riemann curvature operator:

$ [nabla_(sans(w)) \, nabla_(sans(v))] sans(u) \
 &= nabla_(sans(w)) nabla_(sans(v)) sans(u) - nabla_(sans(v)) nabla_(sans(w)) sans(u) \
 &= sans(e) { sans(w) (sans(v) (tilde(sans(e)) (sans(u)))+ pi.alt (sans(v))tilde(sans(e)) (sans(u)))\
 + pi.alt (sans(w)) (sans(v) (tilde(sans(e)) (sans(u)))+ pi.alt (sans(v))tilde(sans(e)) (sans(u)))} \
 - sans(e) { sans(v) (sans(w) (tilde(sans(e)) (sans(u)))+ pi.alt (sans(w))tilde(sans(e)) (sans(u)))\
 + pi.alt (sans(v)) (sans(w) (tilde(sans(e)) (sans(u)))+ pi.alt (sans(w))tilde(sans(e)) (sans(u)))} \
 &= sans(e) {[sans(w)\,sans(v)]tilde(sans(e)) (sans(u))\
 + sans(w) (pi.alt (sans(v)))tilde(sans(e)) (sans(u))- sans(v) (pi.alt (sans(w)))tilde(sans(e)) (sans(u))\
 + pi.alt (sans(w))pi.alt (sans(v))tilde(sans(e)) (sans(u))- pi.alt (sans(v))pi.alt (sans(w))tilde(sans(e)) (sans(u))} . $ <8.17>

The second term of the Riemann curvature operator is

$ nabla_([sans(w)\,sans(v)]) sans(u) = sans(e) {[sans(w) \, sans(v)] tilde(sans(e)) (sans(u)) \
 + pi.alt ([sans(w) \, sans(v)]) tilde(sans(e)) (u)} . $ <8.18>

The difference of these is the Riemann curvature operator. Notice that the first term in each cancels, and the rest gives equation @8.13.

=== Ricci Curvature <sec-8.1.4>
One measure of the curvature is the Ricci tensor, which is computed from the Riemann tensor by

$ R (sans(u)\,sans(v))= sum_i sans(R) (tilde(sans(e))^i \, sans(u) \, sans(e)_i \, sans(v)) . $ <8.19>

Expressed as a program:

```scheme
(define ((Ricci nabla basis) u v)
  (contract (lambda (ei wi) ((Riemann nabla) wi u ei v))
            basis))
```

Einstein\'s field equation @9.27 for gravity, which we will encounter later, is expressed in terms of the Ricci tensor.

=== Exercise 8.1: Ricci of a Sphere <sec-8.1.5>
Compute the components of the Ricci tensor of the surface of a sphere.

=== Exercise 8.2: Pseudosphere <sec-8.1.6>
A pseudosphere is a surface in 3-dimensional space. It is a surface of revolution of a tractrix about its asymptote (along the $hat(z)$-axis). We can make coordinates for the surface $(t\,theta)$ where $t$ is the coordinate along the asymptote and $theta$ is the angle of revolution. We embed the pseudosphere in rectangular 3-dimensional space with

```scheme
(define (pseudosphere q)
  (let ((t (ref q 0)) (theta (ref q 1)))
    (up (* (sech t) (cos theta))
        (* (sech t) (sin theta))
        (- t (tanh t)))))
```

The structure of Christoffel coefficients for the pseudosphere is

```scheme
(down
 (down (up (/ (+ (* 2 (expt (cosh t) 2) (expt (sinh t) 2))
                 (* -2 (expt (sinh t) 4)) (expt (cosh t) 2)
                 (* -2 (expt (sinh t) 2)))
              (+ (* (cosh t) (expt (sinh t) 3))
                 (* (cosh t) (sinh t))))
           0)
       (up 0
           (/ (* -1 (sinh t)) (cosh t))))
 (down (up 0
           (/ (* -1 (sinh t)) (cosh t)))
       (up (/ (cosh t) (+ (expt (sinh t) 3) (sinh t)))
           0)))
```

Note that this is independent of $theta$.

Compute the components of the Ricci tensor.

== Torsion <sec-8.2>
There are many connections that describe the local properties of any particular manifold. A connection has a property called #emph[torsion], which is computed as follows:

$ cal(T) (sans(u)\,sans(v))= nabla_(sans(u)) sans(v) - nabla_(sans(v)) sans(u) -[sans(u)\,sans(v)]. $ <8.20>

The torsion takes two vector fields and produces a vector field. The torsion depends on the covariant derivative, which is constructed from the connection.

We account for this dependency by parameterizing the program by #raw(lang:"scheme", "nabla").

```scheme
(define ((torsion-vector nabla) u v)
  (- (- ((nabla u) v) ((nabla v) u))
     (commutator u v)))

(define ((torsion nabla) omega u v)
  (omega ((torsion-vector nabla) u v)))
```

The torsion for the connection for the 2-sphere specified by the Christoffel coefficients #raw(lang:"scheme", "S2-Christoffel") above is zero. We demonstrate this by applying the torsion to the basis vector fields:

```scheme
(for-each
 (lambda (x)
   (for-each
    (lambda (y)
      (print-expression
       ((((torsion-vector (covariant-derivative sphere-Cartan))
          x y)
         (literal-manifold-function 'f S2-spherical))
        ((point S2-spherical) (up 'theta0 'phi0)))))
    (list d/dtheta d/dphi)))
 (list d/dtheta d/dphi))
;; 0
;; 0
;; 0
;; 0
```

=== Torsion Doesn\'t Affect Geodesics <sec-8.2.1>
There are multiple connections that give the same geodesic curves. Among these connections there is always one with zero torsion. Thus, if you care about only geodesics, it is appropriate to use a torsion-free connection.

Consider a basis $sans(e)$ and its dual $tilde(sans(e))$. The components of the torsion are

$ tilde(sans(e)) (sans(T) (sans(e)_i \, sans(e)_j)) = Gamma_(i j)^k + Gamma_(j i)^k + Gamma_(i j)^k\, $ <8.21>

where $sans(d)_(i j)^k$ are the structure constants of the basis. See equations @4.37, @4.38. For a commuting basis the structure constants are zero, and the components of the torsion are the antisymmetric part of $Gamma$ with respect to the lower indices.

Recall the geodesic equation @7.79:

$ D^2 sigma^i (t)= sum_(j k) Gamma_(j k)^i (gamma (t))D sigma^j (t)D sigma^k (t = 0 . $ <8.22>

Observe that the lower indices of $Gamma$ are contracted with two copies of the velocity. Because the use of $Gamma$ is symmetrical here, any asymmetry of $Gamma$ in its lower indices is irrelevant to the geodesics. Thus one can study the geodesics of any connection by first symmetrizing the connection, eliminating torsion. The resulting equations will be simpler.

== Geodesic Deviation <sec-8.3>
Geodesics may converge and intersect (as in the lines of longitude on a sphere) or they may diverge (for example, on a saddle). To capture this notion requires some measure of the convergence or divergence, but this requires metrics (see Chapter 9). But even in the absence of a metric we can define a quantity, the #emph[geodesic deviation], that can be interpreted in terms of relative acceleration of neighboring geodesics from a reference geodesic.

Let there be a one-parameter family of geodesics, with parameter $s$, and let $sans(T)$ be the vector field of tangent vectors to those geodesics:

$ nabla_(sans(T)) sans(T) = 0 . $ <8.23>

We can parameterize travel along the geodesics with parameter $t$: a geodesic curve $gamma_s (t)= phi.alt_t^(sans(T)) (sans(m)_s)$ where

$ sans(f) compose phi.alt_t^(sans(T)) (sans(m)_s)= (e^(t T) sans(f)) (sans(m)_s). $ <8.24>

Let $U = partial\/partial s$ be the vector field corresponding to the displacement of neighboring geodesics. Locally, $(t\,s)$ is a coordinate system on the 2-dimensional submanifold formed by the family of geodesics. The vector fields $sans(T)$ and $sans(U)$ are a coordinate basis for this coordinate system, so $[sans(T) \, sans(U)] = 0$.

The geodesic deviation vector field is defined as:

$ nabla_(sans(T)) (nabla_(sans(T)) sans(U)). $ <8.25>

If the connection has zero torsion, the geodesic deviation can be related to the Riemann curvature:

$ nabla_(sans(T)) (nabla_(sans(T)) sans(U))= - cal(R) (sans(U)\,sans(T)) (sans(T))\, $ <8.26>

as follows, using equation @8.21,

$ nabla_(sans(T)) (nabla_(sans(T)) sans(U))= nabla_(sans(T)) (nabla_(sans(U)) sans(T))\, $ <8.27>

because both the torsion is zero and $[sans(T)\,sans(U)]= 0$. Continuing

$ nabla_(sans(T)) (nabla_(sans(T)) sans(U))= nabla_(sans(T)) (nabla_(sans(U)) sans(T))\
 &= nabla_(sans(T)) (nabla_(sans(U)) sans(T))+ nabla_(sans(U)) (nabla_(sans(T)) sans(T))- nabla_(sans(U)) (nabla_(sans(T)) sans(T))\
 &= nabla_(sans(U)) (nabla_(sans(T)) sans(T))- cal(R) (sans(U)\,sans(T)) (sans(T))\
 &= - cal(R) (sans(U)\,sans(T)) (sans(T)). $ <8.28>

In the last line the first term was dropped because $sans(T)$ satisfies the geodesic equation @8.24.

The geodesic deviation is defined without using a metric, but it helps to have a metric (see Chapter 9) to interpret the geodesic deviation. Consider two neighboring geodesics, with parameters $s$ and $s + Delta s$. Given a metric we can assume that $t$ is proportional to path length along each geodesic, and we can define a distance $delta (s\,t\,Delta s)$ between the geodesics at the same value of the parameter $t$. So the velocity of separation of the two geodesics is

$ (nabla_(sans(T)) sans(U))= partial_1 delta (s\,t\,Delta s)hat(s) $ <8.29>

where $hat(s)$ is a unit vector in the direction of increasing $s$. So $nabla_(sans(T)) U$ is the factor of increase of velocity with increase of separation. Similarly, the geodesic deviation can be interpreted as the factor of increase of acceleration with increase of separation:

$ nabla sans(T) (nabla_(sans(T)) sans(U))= partial_1 partial_1 delta (s\,t\,Delta s)hat(s) . $ <8.30>

=== Longitude Lines on a Sphere <sec-8.3.1>
Consider longitude lines on the unit sphere.#footnote[The setup for this example is:

```scheme
(define-coordinates (up theta phi) S2-spherical)
(define T d/dtheta)
(define U d/dphi)
(define m ((point S2-spherical) (up 'theta0 'phi0)))
(define Cartan (Christoffel->Cartan S2-Christoffel))
(define nabla (covariant-derivative Cartan))
```] Let #raw(lang:"scheme", "theta") be colatitude and #raw(lang:"scheme", "phi") be longitude. These are the parameters $s$ and $t$, respectively. Then let #raw(lang:"scheme", "T") be the vector field #raw(lang:"scheme", "d/dtheta") that is tangent to the longitude lines.

We can verify that every longitude line is a geodesic:

```scheme
((omega (((covariant-derivative Cartan) T) T)) m)
;; 0
```

where #raw(lang:"scheme", "omega") is an arbitrary one-form field.

Now let #raw(lang:"scheme", "U") be #raw(lang:"scheme", "d/dphi"), then #raw(lang:"scheme", "U") commutes with #raw(lang:"scheme", "T"):

```scheme
(((commutator U T) f) m)
;; 0
```

The torsion for the usual connection for the sphere is zero:

```scheme
(let ((X (literal-vector-field 'X-sphere S2-spherical))
      (Y (literal-vector-field 'Y-sphere S2-spherical)))
  ((((torsion-vector nabla) X Y) f) m))
;; 0
```

So we can compute the geodesic deviation using #raw(lang:"scheme", "Riemann")

```scheme
((+ (omega ((nabla T) ((nabla T) U)))
    ((Riemann nabla) omega T U T))
 m)
;; 0
```

confirming equation @8.29.

Lines of longitude are geodesics. How do the lines of longitude behave? As we proceed from the North Pole, the lines of constant longitude diverge. At the Equator they are parallel and they converge towards the South Pole.

Let\'s compute $nabla_(sans(T)) sans(U)$ and $nabla_(sans(T)) (nabla_(sans(T)) sans(U))$. We know that the distance is purely in the $phi.alt$ direction, so

```scheme
((dphi ((nabla T) U)) m)
;; (/ (cos theta0) (sin theta0))

((dphi ((nabla T) ((nabla T) U))) m)
;; -1
```

Let\'s interpret these results. On a sphere of radius $R$ the distance at colatitude $theta$ between two geodesics separated by $Delta phi.alt$ is $d (phi.alt\,theta\,Delta phi.alt)= R sin(theta)Delta phi.alt$. Assuming that $theta$ is uniformly increasing with time, the magnitude of the velocity is just the $theta$-derivative of this distance:

```scheme
(define ((delta R) phi theta Delta-phi)
  (* R (sin theta) Delta-phi))

(((partial 1) (delta 'R)) 'phi0 'theta0 'Delta-phi)
;; (* Delta-phi R (cos theta0))
```

The direction of the velocity is the unit vector in the $phi.alt$ direction:

```scheme
(define phi-hat
  (* (/ 1 (sin theta)) d/dphi))
```

This comes from the fact that the separation of lines of longitude is proportional to the sine of the colatitude. So the velocity vector field is the product.

We can measure the $phi.alt$ component with $d phi.alt$:

```scheme
((dphi (* (((partial 1) (delta 'R))
           'phi0 'theta0 'Delta-phi)
          phi-hat))
 m)
;; (/ (* Delta-phi R (cos theta0)) (sin theta0))
```

This agrees with $nabla_(sans(T)) sans(U) Delta phi.alt$ for the unit sphere. Indeed, the lines of longitude diverge until they reach the Equator and then they converge.

Similarly, the magnitude of the acceleration is

```scheme
(((partial 1) ((partial 1) (delta 'R)))
 'phi0 'theta0 'Delta-phi)
;; (* -1 Delta-phi R (sin theta0))
```

and the acceleration vector is the product of this result with $hat(phi.alt)$. Measuring this with $d phi.alt$ we get:

```scheme
((dphi (* (((partial 1) ((partial 1) (delta 'R)))
           'phi0 'theta0 'Delta-phi)
          phi-hat))
 m)
;; (* -1 Delta-phi R)
```

And this agrees with the calculation of $nabla_(sans(T)) nabla_(sans(T)) sans(U) Delta phi.alt$ for the unit sphere. We see that the separation of the lines of longitude are uniformly decelerated as they progress from pole to pole.

== Bianchi Identities <sec-8.4>
There are some important mathematical properties of the Riemann curvature. These identities will be used to constrain the possible geometries that can occur.

A system with a symmetric connection, $Gamma_(j k)^i = Gamma_(j k)^i$, is torsion free.#footnote[Setup for this section:

```scheme
(define omega (literal-1form-field 'omega-rect R4-rect))
(define X (literal-vector-field 'X-rect R4-rect))
(define Y (literal-vector-field 'Y-rect R4-rect))
(define Z (literal-vector-field 'Z-rect R4-rect))
(define V (literal-vector-field 'V-rect R4-rect))
```]

```scheme
(define nabla
  (covariant-derivative
   (Christoffel->Cartan
    (symmetrize-Christoffel
     (literal-Christoffel-2 'C R4-rect)))))

(((torsion nabla) omega X Y)
 (typical-point R4-rect))
;; 0
```

The Bianchi identities are defined in terms of a cyclic-summation operator, which is most easily described as a Scheme procedure:

```scheme
(define ((cyclic-sum f) x y z)
  (+ (f x y z)
     (f y z x)
     (f z x y)))
```

The first Bianchi identity is

$ sans(R) (omega\,sans(x)\,sans(y)\,sans(z))\
 + sans(R) (omega\,sans(y)\,sans(z)\,sans(x))\
 + sans(R) (omega\,sans(z)\,sans(x)\,sans(y))= 0\, $ <8.31>

or, as a program:

```scheme
(((cyclic-sum
   (lambda (x y z)
     ((Riemann nabla) omega x y z)))
  X Y Z)
 (typical-point R4-rect))
;; 0
```

The second Bianchi identity is

$ nabla_(sans(x)) sans(R) (omega\,sans(v)\,sans(y)\,sans(z))\
 + nabla_(sans(y)) sans(R) (omega\,sans(v)\,sans(z)\,sans(x))\
 + nabla_(sans(z)) sans(R) (omega\,sans(v)\,sans(x)\,sans(y))= 0 $ <8.32>

or, as a program:

```scheme
(((cyclic-sum
   (lambda (x y z)
     (((nabla x) (Riemann nabla))
      omega V y z)))
  X Y Z)
 (typical-point R4-rect))
;; 0
```

Things get more complicated when there is torsion. We can make a general connection, which has torsion:

```scheme
(define nabla
  (covariant-derivative
   (Christoffel->Cartan
    (literal-Christoffel-2 'C R4-rect))))

(define R (Riemann nabla))
(define T (torsion-vector nabla))

(define (TT omega x y)
  (omega (T x y)))
```

The first Bianchi identity is now:#footnote[The Bianchi identities are much nastier to write in traditional mathematical notation than as Scheme programs.]

```scheme
(((cyclic-sum
   (lambda (x y z)
     (- (R omega x y z)
        (+ (omega (T (T x y) z))
           (((nabla x) TT) omega y z)))))
  X Y Z)
 (typical-point R4-rect))
;; 0
```

and the second Bianchi identity for a general connection is

```scheme
(((cyclic-sum
   (lambda (x y z)
     (+ (((nabla x) R) omega V y z)
        (R omega V (T x y) z))))
  X Y Z)
 (typical-point R4-rect))
;; 0
```

We now make the Cartan forms from the most general 2-dimensional Christoffel coefficient structure:

```scheme
(define general-Cartan-2
  (Christoffel->Cartan
   (literal-Christoffel-2 'Gamma R2-rect)))
```

 @misner1973gravitation, @carroll2003spacetime, and @schutz1985first use our definition. @wald1984general uses a different convention for the order of arguments and a different sign. See Appendix @chap-appendix-c for a definition of tensors.
]
