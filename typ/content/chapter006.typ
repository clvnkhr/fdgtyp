// Generated from ../../fdg-book/scheme/org/chapter006.org.
// Re-run scripts/convert-org-to-typst.mjs to refresh.
#import "../lib.typ": fdg-chapter, fdg-figure, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX

#fdg-chapter("Over a Map", numbered: true, eq-prefix: "6", ref-label: "chap-6")[
To deal with motion on manifolds we need to think about paths on manifolds and vectors along these paths. Tangent vectors along paths are not vector fields on the manifold because they are defined only on the path. And the path may even cross itself, which would give more than one vector at a point. Here we introduce the concept of a #emph[vector field over a map].#footnote[See Bishop and Goldberg, #emph[Tensor Analysis on Manifolds] @bishop1968tensor.] A vector field over a map assigns a vector to each image point of the map. In general the map may be a function from one manifold to another. If the domain of the map is the manifold of the real line, the range of the map is a 1-dimensional path on the target manifold. One possible way to define a vector field over a map is to assign a tangent vector to each image point of a path, allowing us to work with tangent vectors to paths. A #emph[one-form field over the map] allows us to extract the components of a vector field over the map.

== Vector Fields Over a Map <sec-6.1>
Let $μ$ be a map from points $sans(n)$ in the manifold $sans(N)$ to points $sans(m)$ in the manifold $sans(M)$. A vector over the map $μ$ takes directional derivatives of functions on $sans(M)$ at points $sans(m) = mu (sans(n))$. The vector over the map applied to the function on $sans(M)$ is a function on $sans(N)$.

== Restricted Vector Fields <sec-6.2>
One way to make a vector field over a map is to restrict a vector field on $sans(M)$ to the image of $sans(N)$ over $μ$, as illustrated in figure 6.1.

#fdg-figure(image("../assets/figures/fig-6-1.pdf", width: 49.2%), [The vector field $v$ on $M$ is indicated by arrows. The solid arrows are $v_mu$, the restricted vector field over the map $mu$. The vector field over the map is restricted to the image of $N$ in $M$.])



Let $sans(v)$ be a vector field on $sans(M)$, and $sans(f)$ a function on $sans(M)$. Then

$ sans(v)_mu (sans(f))= sans(v) (sans(f))compose mu\, $ <6.1>

is a vector over the map $μ$. Note that $sans(v)_mu (sans(f))$ is a function on $sans(N)$, not $sans(M)$:

$ sans(v)_mu (sans(f)) (sans(n))= sans(v) (sans(f)) (mu (sans(n))). $ <6.2>

We can implement this definition as:

```scheme
(define ((vector-field->vector-field-over-map mu:N->M) v-on-m)
  (procedure->vector-field
   (lambda (f-on-M)
     (compose (v-on-M f-on-M) mu:N->M))))
```

== Differential of a Map <sec-6.3>
Another way to construct a vector field over a map $μ$ is to transport a vector field from the source manifold $sans(N)$ to the target manifold $sans(M)$ with the #emph[differential] of the map

$ d mu (sans(v)) (sans(f)) (sans(n))= sans(v) (sans(f) compose mu) (sans(n))\, $ <6.3>

which takes its argument in the source manifold $sans(N)$. The differential of a map $μ$ applied to a vector field $sans(v)$ on $sans(N)$ is a vector field over the map. A procedure to compute the differential is:

```scheme
(define (((differential mu) v) f)
(v (compose f mu)))
```

The nomenclature of this subject is confused. The \"differential of a map between manifolds,\" $d mu$, takes one more argument than the \"differential of a real-valued function on a manifold,\" $sans(d) sans(f)$, but when the target manifold of $μ$ is the reals and $I$ is the identity function on the reals,

$ d mu (sans(v)) (I) (sans(n))=(sans(v) (I compose mu)) (sans(n))=(sans(v) (mu)) (sans(n))= sans(d) mu (sans(v)) (sans(n)). $ <6.4>

We avoid this problem in our notation by distinguishing $d$ and $sans(d)$. In our programs we encode $d$ as differential and $sans(d)$ as d.

== Velocity at a Time <sec-6.4>
Let $μ$ be the map from the time line to the manifold $sans(M)$, and $partial\/partial sans(t)$ be a basis vector on the time line. Then $d mu (partial\/partial sans(t))$ is the vector over the map $μ$ that computes the rate of change of functions on $sans(M)$ along the path that is the image of $μ$. This is the velocity vector. We can use the differential to assign a velocity vector to each moment, solving the problem of multiple vectors at a point if the path crosses itself.

== One-Form Fields Over a Map <sec-6.5>
Given a one-form $ω$ on the manifold $sans(M)$, the one-form over the map $mu : sans(N) arrow.r sans(M)$ is constructed as follows:

$ omega^mu (sans(v)_mu) (sans(n))= omega (sans(u)) (mu (sans(n)))upright(", where ") sans(u) (sans(f)) (sans(m))= sans(v)_mu (sans(f)) (sans(n)). $ <6.5>

The object $sans(u)$ is not really a vector field on $sans(M)$ even though we have given it that shape so that the dual vector can apply to it; $sans(u) (sans(f))$ is evaluated only at images $sans(m) = mu (sans(n))$ of points $sans(n)$ in $sans(N)$. If we were defining $sans(u)$ as a vector field we would need the inverse of $μ$ to find the point $sans(n) = mu^(-1) (sans(m))$, but this is not required to define the object $sans(u)$ in a context where there is already an $sans(m)$ associated with the $sans(n)$ of interest. To extend this idea to $k$-forms, we carry each vector argument over the map.

The procedure that constructs a $k$-form over the map from a $k$-form is:

```scheme
(define ((form-field->form-field-over-map mu:N->M) w-on-M)
  (define (make-fake-vector-field V-over-mu n)
    (define ((u f) m)
      ((V-over-mu f) n))
    (procedure->vector-field u))
  (procedure->nform-field
   (lambda vectors-over-map
     (lambda (n)
       ((apply w-on-M
               (map (lambda (V-over-mu)
                      (make fake-vector-field V-over-mu n))
                    vectors-over-map))
        (mu:N->M n))))
   (get-rank w-on-M)))
```

The internal procedure #raw(lang:"scheme", "make-fake-vector-field") counterfeits a vector field $sans(u)$ on $sans(M)$ from the vector field over the map $mu : sans(N) arrow.r sans(M)$. This works here because the only value that is ever passed as `m` is `(mu:N->M n)`.

== Basis Fields Over a Map <sec-6.6>
Let $sans(e)$ be a tuple of basis vector fields, and $tilde(sans(e))$ be the tuple of basis one-forms that is dual to $sans(e)$:

$ tilde(sans(e))^i (sans(e)_j) (sans(m))= delta_j^i . $ <6.6>

The #emph[basis vectors] over the map, $sans(e)^mu$, are particular cases of vectors over a map:

$ sans(e)^mu (sans(f))= sans(e) (sans(f))compose mu . $ <6.7>

And the elements of the #emph[dual basis over the map], $tilde(sans(e))_mu$, are particular cases of one-forms over the map. The basis and dual basis over the map satisfy

$ tilde(sans(e))_mu^i (sans(e)_j^mu) (sans(n))= delta_j^i . $ <6.8>

== Walking on a Sphere <sec-6.7>
For example, let $mu$ map the time line to the unit sphere.#footnote[We execute #raw(lang:"scheme", "(define-coordinates t R1-rect)") to make #raw(lang:"scheme", "t") the coordinate function of the real line.] We use colatitude $theta$ and longitude $phi.alt$ as coordinates on the sphere:

```scheme
(define S2 (make-manifold S^2 2 3))
(define S2-spherical
  (coordinate-system at 'spherical 'north-pole S2))
(define-coordinates (up theta phi) S2-spherical)
(define S2-basis (coordinate-system->basis S2-spherical))
```

A general path on the sphere is:#footnote[We provide a shortcut to make literal manifold maps:

```scheme
(define mu (literal-manifold-map 'mu R1-rect S2-spherical))
```]

```scheme
(define mu
  (compose (point S2-spherical)
           (up (literal-function 'theta)
               (literal-function 'phi))
           (chart R1-rect)))
```

The basis over the map is constructed from the basis on the sphere:

```scheme
(define S2-basis-over-mu
  (basis->basis-over-map mu S2-basis))

(define h
  (literal-manifold-function 'h-spherical S2-spherical))

(((basis->vector-basis S2-basis-over-mu) h)
 ((point R1-rect) 't0))
;; (down
;;  (((partial 0) h-spherical) (up (theta t0) (phi t0)))
;;  (((partial 1) h-spherical) (up (theta t0) (phi t0))))
```

The basis vectors over the map compute derivatives of the function $h$ evaluated on the path at the given time.

We can check that the dual basis over the map does the correct thing:

```scheme
(((basis->1form-basis S2-basis-over-mu)
  (basis->vector-basis S2-basis-over-mu))
 ((point R1-rect) 't0))
;; (up (down 1 0) (down 0 1))
```

== Components of the Velocity <sec-6.8>
Let $χ$ be a tuple of coordinates on $sans(M)$, with associated basis vectors $sans(X)_i$, and dual basis elements $sans(d) sans(x)^i$. The vector basis and dual basis over the map $μ$ are $sans(X)_i^mu$ and $sans(d) sans(x)_mu^i$. The components of the velocity (rates of change of coordinates along the path $μ$) are obtained by applying the dual basis over the map to the velocity

$ v^i (t)= sans(d) sans(x)_mu^i (d mu (partial\/partial sans(t))) (sans(t))\, $ <6.9>

where $t$ is the coordinate for the point $sans(t)$.

For example, the coordinate velocities on a sphere are

```scheme
(((basis->1form-basis S2-basis-over-mu)
  ((differential mu) d/dt))
 ((point R1-rect) 't0))
;; (up ((D theta) t0) ((D phi) t0)))
```

as expected.

== Pullbacks and Pushforwards <sec-6.9>
Maps from one manifold to another can also be used to relate the vector fields and one-form fields on one manifold to those on the other. We have introduced two such relations: restricted vector fields and the differential of a function. However, there are other ways to relate the vector fields and form fields on different manifolds that are connected by a map.

== Pullback and Pushforward of a Function <sec-6.10>
The #emph[pullback] of a function $sans(f)$ on $sans(M)$ over the map $μ$ is defined as

$ mu^(*) sans(f) = sans(f) compose mu . $ <6.10>

This allows us to take a function defined on $sans(M)$ and use it to define a new function on $sans(N)$.

For example, the integral curve of $sans(v)$ evolved for time $t$ as a function of the initial manifold point $sans(m)$ generates a map $phi.alt_t^(sans(v))$ of the manifold onto itself. This is a simple currying#footnote[A function of two arguments may be seen as a function of one argument whose value is a function of the other argument. This can be done in two different ways, depending on which argument is supplied first. The general process of specifying a subset of the arguments to produce a new function of the others is called #emph[currying] the function, in honor of the logician Haskell Curry (1900-1982) who, with Moses Schönfinkel (1889-1942), developed combinatory logic.] of the integral curve of $sans(v)$ from $sans(m)$ as a a function of time: $phi.alt_t^(sans(v)) (sans(m))= gamma_(sans(m))^(sans(v)) (t)$. The evolution of the function $sans(f)$ along an integral curve, equation @3.33, can be written in terms of the pullback over $phi.alt_t^(sans(v))$:

$ (sans(E)_(t\,sans(v)) sans(f)) (sans(m))= sans(f) (phi.alt_t^(sans(v)) (sans(m)))=((phi.alt_t^(sans(v)))^(*)sans(f)) (sans(m)). $ <6.11>

This is implemented as:

```scheme
(define ((pullback-function mu:N->M) f-on-m)
(compose f-on-M mu:N->M))
```

A vector field over the map that was constructed by restriction (equation @6.1) can be seen as the pullback of the function constructed by application of the vector field to a function:

$ sans(v)_mu (sans(f))= sans(v) (sans(f))compose mu = mu^(*) (sans(v) (sans(f))). $ <6.12>

A vector field over the map that was constructed by a differential (equation @6.3) can be seen as the vector field applied to the pullback of the function:

$ d mu (sans(v)) (sans(f)) (sans(n))= sans(v) (sans(f) compose mu) (sans(n))= sans(v) (mu^(*) sans(f)) (sans(n)). $ <6.13>

If we have an inverse for the map $μ$ we can also define a #emph[push-forward] of the function $sans(g)$, defined on the source manifold of the map:#footnote[Notation note: superscript asterisk indicates pullback, subscript asterisk indicates pushforward. Pullbacks and pushforwards are tightly binding operators, so, for example $mu^(*) f (sans(n))=(mu^(*) f) (sans(n))$.]

$ mu_(*) sans(g) = sans(g) compose mu^(-1) . $ <6.14>

== Pushforward of a Vector Field <sec-6.11>
We can also define the #emph[pushforward] of a vector field over the map $μ$. The pushforward takes a vector field $sans(v)$ defined on $sans(N)$. The result takes directional derivatives of functions on $sans(M)$ at a place determined by a point in $sans(M)$:

$ mu_(*) sans(v) (sans(f)) (sans(m))= sans(v) (mu^(*) sans(f)) (mu^(-1) (sans(m)))= sans(v) (sans(f) compose mu) (mu^(-1) (sans(m)))\, $ <6.15>

or

$ mu_(*) sans(v) (sans(f))= mu_(*) (sans(v) (mu^(*) sans(f))). $ <6.16>

Here we expressed the pushforward of the vector field in terms of pullbacks and pushforwards of functions. Note that the pushforward requires the inverse of the map.

If the map is from time to some configuration manifold and represents the time evolution of a process, we can think of the pushforward of a vector field as a velocity measured at a point on the trajectory in the configuration manifold. By contrast, the differential of the map applied to the vector field gives us the velocity vector at each moment in time. Because a trajectory may cross itself, the pushforward is not defined at any point where the crossing occurs, but the differential is always defined.

== Pushforward Along Integral Curves <sec-6.12>
We can push a vector field forward over the map generated by an integral curve of a vector field $sans(w)$, because the inverse is always available.#footnote[The map $phi.alt_t^(sans(w))$ is always invertible: $(phi.alt_t^(sans(w)))^(-1)= phi.alt_(- t)^(sans(w))$ because of the uniqueness of the solutions of the initial-value problem for ordinary differential equations.]

$ ((phi.alt_t^(sans(w)))_(*)sans(v)) (sans(f)) (sans(m))= sans(v) ((phi.alt_t^(sans(w)))^(*)sans(f)) (phi.alt_(- t)^(sans(w)) (sans(m)))= sans(v) (sans(f) compose phi.alt_t^(sans(w))) (phi.alt_(- t)^(sans(w)) (sans(m))). $ <6.17>

This is implemented as:

```scheme
(define ((pushforward-vector mu:N->M mu^-1:M->N) v-on-N)
  (procedure->vector-field
   (lambda (f)
     (compose (v-on-N (compose f mu:N->M)) mu^-1:M->N))))
```

== Pullback of a Vector Field <sec-6.13>
Given a vector field $sans(v)$ on a manifold $sans(M)$ we can pull the vector field back through the map $mu : sans(N) arrow.r sans(M)$ as follows:

$ mu^(*) sans(v) (sans(f)) (sans(n))=(sans(v) (sans(f) compose mu^(-1))) (mu (sans(n))) $ <6.18>

or

$ mu^(*) sans(v) (sans(f))= mu^(*) (sans(v) (mu_(*) sans(f))). $ <6.19>

This may be useful when the map is invertible, as in the flow generated by a vector field.

This is implemented as:

```scheme
(define (pullback-vector-field mu:N->M mu^-1:M->N)
  (pushforward-vector mu^-1:M->N mu:N->M))
```

== Pullback of a Form Field <sec-6.14>
We can also pull back a one-form field $ω$ defined on $sans(M)$, but an honest definition is rarely written. The pullback of a one-form field applied to a vector field is intended to be the same as the one-form field applied to the pushforward of the vector field.

The pullback of a one-form field is often described by the relation

$ mu^(*) omega (sans(v))= omega (mu_(*) sans(v))\, $ <6.20>

but this is wrong, because the two sides are not functions of points in the same manifold. The one-form field $ω$ applies to a vector field on the manifold $sans(M)$, which takes a directional derivative of a function defined on $sans(M)$ and is evaluated at a point on $sans(M)$, but the left-hand side is evaluated at a point on the manifold $sans(N)$.

A more precise description would be

$ mu^(*) omega (sans(v)) (sans(n))= omega (mu_(*) sans(v)) (sans(mu) (sans(n))) $ <6.21>

or

$ mu^(*) omega (sans(v))= mu^(*) (omega (mu_(*) sans(v))). $ <6.22>

Although this is accurate, it may not be effective, because computing the pushforward requires the inverse of the map $μ$. But the inverse is available when the map is the flow generated by a vector field.

In fact it is possible to compute the pullback of a one-form field without having the inverse of the map. Instead we can use form-field-\>form-field-over-map to avoid needing the inverse:

$ mu^(*) omega (sans(v)) (sans(n))= omega^mu (d mu (sans(v))) (n). $ <6.23>

The pullback of a $k$-form generalizes equation @6.21:

$ mu^(*) omega (sans(u)\,sans(v)\,dots.c) (sans(n))= omega (mu_(*)\,sans(u)\,mu_(*)\,sans(v)\,dots.c) (mu (sans(n))). $ <6.24>

This is implemented as follows:#footnote[There is a generic pullback procedure that operates on any kind of manifold object. However, to pull a vector field back requires providing the inverse map.]

```scheme
(define ((pullback-form mu:N->M) omega-on-M)
  (let ((k (get-rank omega-on-M)))
    (if (= k 0)
        ((pullback function mu:N->M) omega-on-M)
        (procedure->nform-field
         (lambda vectors-on-N
           (apply ((form-field->form-field-over-map mu:N->M)
                   omega-on-M)
                  (map (differential mu:N->M) vectors-on-N)))
         k))))
```

== Properties of Pullback <sec-6.15>
The pullback through a map has many nice properties: it distributes through addition and through wedge product:

$ mu^(*) (theta + phi.alt)= mu^(*) theta + mu^(*) phi.alt\, $ <6.25>

$ mu^(*) (theta and phi.alt)= mu^(*) theta and mu^(*) phi.alt . $ <6.26>

The pullback also commutes with the exterior derivative:

$ sans(d) (mu^(*) theta)= mu^(*) (sans(d) theta)\, $ <6.27>

for $theta$ a function or $k$-form field.

We can verify this by computing an example. Let $mu$ map the rectangular plane to rectangular 3-space:

```scheme
(define mu (literal-manifold-map 'MU R2-rect R3-rect))
```

First, let\'s compare the pullback of the exterior derivative of a function with the exterior derivative of the pullback of the function:

```scheme
(define f (literal-manifold-function 'f-rect R3-rect))
(define X (literal-vector-field 'X-rect R2-rect))

(((- ((pullback mu) (d f)) (d ((pull back mu) f))) X)
 ((point R2-rect) (up 'x0 'y0)))
;; 0
```

More generally, we can consider what happens to a form field. For a one-form field the result is as expected:

```scheme
(define theta (literal-1form-field 'THETA R3-rect))
(define Y (literal-vector-field 'Y-rect R2-rect))

(((- ((pullback mu) (d theta)) (d ((pullback mu) theta))) X Y)
 ((point R2-rect) (up 'x0 'y0)))
;; 0
```

== Pushforward of a Form Field <sec-6.16>
By symmetry, it is possible to define the pushforward of a one-form field as

$ mu_(*) omega (sans(v))= mu_(*) (omega (mu^(*) v))\, $ <6.28>

but this is rarely useful.

=== Exercise 6.1: Velocities on a Globe <sec-6.16.1>
We can use manifold functions, vector fields, and one-forms over a map to understand how paths behave.

a. Suppose that a vehicle is traveling east on the Earth at a given rate of change of longitude. What is the actual ground speed of the vehicle?

b. Stereographic projection is useful for navigation because it is conformal (it preserves angles). For the situation of part a, what is the speed measured on a stereographic map? Remember that the stereographic projection is implemented with #raw(lang:"scheme", "S2-Riemann").

But if we used this shortcut, the component functions would be named mu#super[0] and mu#super[1]. Here we wanted to use more mnemonic names for the component functions.
]
