// Generated from ../../fdg-book/scheme/org/chapter003.org.
// Re-run scripts/convert-org-to-typst.mjs to refresh.
#import "../lib.typ": fdg-chapter, fdg-figure, fdg-cetz-figure, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX

#fdg-chapter("Vector Fields and One-Form Fields", numbered: true, eq-prefix: "3", ref-label: "chap-3")[
We want a way to think about how a function varies on a manifold. Suppose we have some complex linkage, such as a multiple pendulum. The potential energy is an important function on the multi-dimensional configuration manifold of the linkage. To understand the dynamics of the linkage we need to know how the potential energy changes as the configuration changes. The change in potential energy for a step of a certain size in a particular direction in the configuration space is a real physical quantity; it does not depend on how we measure the direction or the step size. What exactly this means is to be determined: What is a step size? What is a direction? We cannot subtract two configurations to determine the distance between them. It is our job here to make sense of this idea.

So we would like something like a derivative, but there are problems. Since we cannot subtract two manifold points, we cannot take the derivative of a manifold function in the way described in elementary calculus. But we can take the derivative of a coordinate representation of a manifold function, because it takes real-number coordinates as its arguments. This is a start, but it is not independent of coordinate system. Let\'s see what we can build out of this.

== Vector Fields <sec-3.1>
In multiple dimensions the derivative of a function is the multiplier for the best linear approximation of the function at each argument point:#footnote[In multiple dimensions the derivative $D f (x)$ is a down tuple structure of the partial derivatives and the increment $Delta x$ is an up tuple structure, so the indicated product is to be interpreted as a contraction. (See equation @B.8.)]

$ f (x + Delta x)approx f (x)+(D f (x))Delta x $ <3.1>

The derivative $D f (x)$ is independent of $Delta x$. Although the derivative depends on the coordinates, the product $(D f (x))Delta x$ is invariant under change of coordinates in the following sense. Let $phi.alt = chi compose chi^(' - 1)$ be a coordinate transformation, and $x = phi.alt (y)$. Then $Delta x = D phi.alt (y)Delta y$ is the linear approximation to the change in $x$ when $y$ changes by $Delta y$. If $f$ and $g$ are the representations of a manifold function in the two coordinate systems, $g (y)= f (phi.alt (y))= f (x)$, then the linear approximations to the increments in $f$ and $g$ are equal:

$ D g (y)Delta y = D f (phi.alt (y)) (D phi.alt (y)Delta y)= D f (x)Delta x . $ <3.2>

The invariant product $(D f (x))Delta x$ is the #emph[directional derivative] of $f$ at $x$ with respect to the vector specified by the tuple of components $Delta x$ in the coordinate system. We can generalize this idea to allow the vector at each point to depend on the point, making a #emph[vector field]. Let b be a function of coordinates. We then have a directional derivative of $f$ at each point $x$, determined by $b$

$ D_b (f) (x)=(D f (x))b (x). $ <3.3>

Now we bring this back to the manifold and develop a useful generalization of the idea of directional derivative for functions on a manifold, rather than functions on $bb(R)^n$. A #emph[vector field] on a manifold is an assignment of a vector to each point on the manifold. In elementary geometry, a vector is an arrow anchored at a point on the manifold with a magnitude and a direction. In differential geometry, a vector is an operator that takes directional derivatives of manifold functions at its anchor point. The direction and magnitude of the vector are the direction and scale factor of the directional derivative.

Let $sans(m)$ be a point on a manifold, $sans(v)$ be a vector field on the manifold, and $sans(f)$ be a real-valued function on the manifold. Then $sans(v) (sans(f))$ is the directional derivative of the function $sans(f)$ and $sans(v) (sans(f)) (sans(m))$ is the directional derivative of the function $sans(f)$ at the point $sans(m)$. The vector field is an operator that takes a real-valued manifold function and a manifold point and produces a number. The order of arguments is chosen to make $sans(v) (sans(f))$ be a new manifold function that can be manipulated further. Directional derivative operators, unlike ordinary derivative operators, produce a result of the same type as their argument. Note that there is no mention here of any coordinate system. The vector field specifies a direction and magnitude at each manifold point that is independent of how it is described using any coordinate system.

A useful way to characterize a vector field in a particular coordinate system is by applying it to the coordinate functions. The resulting functions $b_(chi\,sans(v))^i$ are called the #emph[coordinate component functions] or #emph[coefficient functions] of the vector field; they measure how quickly the coordinate functions change in the direction of the vector field, scaled by the magnitude of the vector field:

$ b_(chi\,sans(v))^i = sans(v) (chi^i)compose chi^(-1) . $ <3.4>

Note that we have chosen the coordinate components to be functions of the coordinate tuple, not of a manifold point.

A vector with coordinate components $b_(chi\,sans(v))$ applies to a manifold function $sans(f)$ via $ sans(v) (sans(f)) (sans(m)) &= ((D (sans(f) compose chi^(-1))b_(chi\,sans(v)))compose chi) (sans(m))\
 &= D (sans(f) compose chi^(-1)) (chi (sans(m)))b_(chi\,sans(v)) (chi (sans(m)))\
 &= sum_i partial_i (sans(f) compose chi^(-1)) (chi (sans(m)))b_(chi\,sans(v))^i (chi (sans(m))). $ <3.5> In equation @3.4, the quantity $sans(f) compose$ is the coordinate representation of the manifold function $sans(f)$. We take its derivative, and weight the components of the derivative with the coordinate components $b_(chi\,sans(v))$ of the vector field that specify its direction and magnitude. Since this product is a function of coordinates we use $chi$ to extract the coordinates from the manifold point m. In equation @3.5, the composition of the product with the coordinate chart $chi$ is replaced by function evaluation. In equation @3.6 the tuple multiplication is expressed explicitly as a sum of products of corresponding components. So the application of the vector is a linear combination of the partial derivatives of $sans(f)$ in the coordinate directions weighted by the vector components. This computes the rate of change of $sans(f)$ in the direction specified by the vector.

Equations @3.3 and @3.5 are consistent: $ sans(v) (x) (chi^(-1) (x)) &= D (chi compose chi^(-1)) (x)b_(chi\,sans(v)) (x)\
 &= D (I) (x)b_(chi\,sans(v)) (x)\
 &= b_(chi\,sans(v)) (x). $ <3.6>

The coefficient tuple $b_(chi\,sans(v)) (x)$ is an up structure compatible for addition to the coordinates. Note that for any vector field v the coefficients $b_(chi\,sans(v)) (x)$ are different for different coordinate functions $chi$. In the text that follows we will usually drop the subscripts on $b$, understanding that it is dependent on the coordinate system and the vector field.

We implement the definition of a vector field #ref(<3.4>) as:

```scheme
(define (components->vector-field components coordsys)
  (define (v f)
    (compose (* (D (compose f (point coordsys))) components)
             (chart coordsys)))
  (procedure->vector-field v))
```

The vector field is an operator, like derivative.#footnote[An operator is just like a procedure except that multiplication is interpreted as composition. For example, the derivative procedure is made into an operator `D` so that we can say `(expt D 2)` and expect it to compute the second derivative. The procedure `procedure->vector-field` makes a vector-field operator.]

Given a coordinate system and coefficient functions that map coordinates to real values, we can make a vector field. For example, a general vector field can be defined by giving components relative to the coordinate system `R2-rect` by

```scheme
(define v
  (components->vector-field (up (literal-function 'b^0 R2->R)
                                (literal-function 'b^1 R2->R))
                            R2-rect))
```

To make it convenient to define literal vector fields we provide a shorthand: `(define v (literal-vector-field 'b R2-rect))` This makes a vector field with component functions named `b^0` and `b^1` and names the result `v`. When this vector field is applied to an arbitrary manifold function it gives the directional derivative of that manifold function in the direction specified by the components `b^0` and `b^1`:

```scheme
((v (literal-manifold-function 'f-rect R2-rect)) R2-rect-point)
;; (+ (* (((partial 0) f-rect) (up x0 y0)) (b?0 (up x0 y0)))
;;    (* (((partial 1) f-rect) (up x0 y0)) (b?1 (up x0 y0))))
```

This result is what we expect from equation @3.6.

We can recover the coordinate components of the vector field by applying the vector field to the coordinate chart:

```scheme
((v (chart R2-rect)) R2-rect-point)
;; (up (b?0 (up x y)) (b?1 (up x y)))
```

=== Coordinate Representation <sec-3.1.1>

The vector field $sans(v)$ has a coordinate representation $v$: $ sans(v) (sans(f)) (sans(m)) &= D (f compose chi^(-1)) (chi (sans(m)))b (chi (sans(m)))\
 &= D f (x)b (x)\
 &= v (f) (x)\, $ <3.7> with the definitions $f = sans(f) compose chi^(-1)$ and $x = chi (sans(m))$. The function $b$ is the coefficient function for the vector field $sans(v)$. It provides a scale factor for the component in each coordinate direction. However, $v$ is the coordinate representation of the vector field $sans(v)$ in that it takes directional derivatives of coordinate representations of manifold functions.

Given a vector field `v` and a coordinate system coordsys we can construct the coordinate representation of the vector field.#footnote[The `make-operator` procedure takes a procedure and returns an operator.]

```scheme
(define (coordinatize v coordsys)
  (define ((coordinatized-v f) x)
    (let ((b (compose (v (chart coordsys)) (point coordsys))))
      (* ((D f) x) (b x))))
  (make-operator coordinatized-v))
```

We can apply a coordinatized vector field to a function of coordinates to get the same answer as before.

```scheme
(((coordinatize v R2-rect) (literal-function 'f-rect R2->R)) (up 'x0
                                                                 'y0))
;; (+ (* (((partial 0) f-rect) (up x0 y0)) (b?0 (up x0 y0)))
;;    (* (((partial 1) f-rect) (up x0 y0)) (b?1 (up x0 y0))))
```

=== Vector Field Properties <sec-3.1.2>

The vector fields on a manifold form a vector space over the field of real numbers and a module over the ring of real-valued manifold functions. A module is like a vector space except that there is no multiplicative inverse operation on the scalars of a module. Manifold functions that are not the zero function do not necessarily have multiplicative inverses, because they can have isolated zeros. So the manifold functions form a ring, not a field, and vector fields must be a module over the ring of manifold functions rather than a vector space.

Vector fields have the following properties. Let $sans(u)$ and $sans(v)$ be vector fields and let $alpha$ be a real-valued manifold function. Then $ (sans(u) + sans(v)) (f)= sans(u) (sans(f))+ sans(v) (sans(f)) (alpha sans(f)) (sans(f))= alpha (sans(u) (sans(f))). $ <3.8>

Vector fields are linear operators. Assume $sans(f)$ and $sans(g)$ are functions on the manifold, $a$ and $b$ are real constants.#footnote[If $sans(f)$ has structured output then $sans(v) (sans(f))$ is the structure resulting from $sans(v)$ being applied to each component of $sans(f)$.] The constants $a$ and $b$ are not manifold functions, because vector fields take derivatives. See equation @3.13. $ sans(v) (a sans(f) + b sans(g)) (sans(m))= a sans(v) (sans(f)) (sans(m))+ b sans(v) (sans(g)) (sans(m)) sans(v) (a sans(f)) (sans(m))= a sans(v) (sans(f)) (sans(m)) $ <3.9> Vector fields satisfy the product rule (Leibniz rule). $ sans(v) (sans(f g)) (sans(m))= sans(v) (sans(f)) (sans(m))sans(g) (sans(m))+ sans(f) (sans(m))sans(v) (sans(g)) (sans(m)) $ <3.10> Vector fields satisfy the chain rule. Let $F$ be a function on the range of $sans(f)$. $ sans(v) (F compose sans(f)) (sans(m))= D F (sans(f) (sans(m)))sans(v) (sans(f)) (sans(m)) $ <3.11>

== Coordinate-Basis Vector Fields <sec-3.2>
For an $n$-dimensional manifold any set of $n$ linearly independent vector fields#footnote[A set of vector fields, ${ sans(v)_i }$, is linearly independent with respect to manifold functions if we cannot find nonzero manifold functions, ${ sans(a)_i }$, such that $ sum_i sans(a)_i sans(v)_i (sans(f))= sans(0) (sans(f))\, $ where $sans(0)$ is the vector field such that $sans(0) (sans(f)) (sans(m))= 0$ for all $sans(f)$ and $sans(m)$.] form a #emph[basis] in that any vector field can be expressed as a linear combination of the basis fields with manifold-function coefficients. Given a coordinate system we can construct a basis as follows: we choose the component tuple $b_i (x)$ (see equation @3.5) to be the $i$th unit tuple $u_i (x)$---an up tuple with one in the $i$th position and zeros in all other positions---selecting the partial derivative in that direction. Here $u_i$ is a constant function. Like $b$, it formally takes coordinates of a point as an argument, but it ignores them. We then define the basis vector field $sans(X)_i$ by $ sans(X)_i (sans(f)) (sans(m))= D (sans(f) compose chi^(-1)) (chi (sans(m)))u_i (chi (sans(m))) = partial_i (sans(f) compose chi^(-1)) (chi (sans(m))). $ <3.12>

In terms of $sans(X)_i$ the vector field of equation @3.6 is $ sans(v) (sans(f)) (sans(m))= sum_i sans(X)_i (sans(f)) (sans(m))b^i (chi (sans(m))). $ <3.13> We can also write $ sans(v) (sans(f)) (sans(m))= sans(X) (sans(f)) (sans(m))b (chi (sans(m)))\, $ <3.14> letting the tuple algebra do its job.

The basis vector field is often written $ frac(partial, partial x^i) = sans(X)_i\, $ <3.15> to call to mind that it is an operator that computes the directional derivative in the ith coordinate direction.

In addition to making the coordinate functions, the procedure `define-coordinates` also makes the traditional named basis vectors. Using these we can examine the application of a rectangular basis vector to a polar coordinate function:

```scheme
(define-coordinates (up x y) R2-rect)
(define-coordinates (up r theta) R2-polar)

((d/dx (square r)) R2-rect-point)
;; (* 2 x0)
```

More general functions and vectors can be made as combinations of these simple pieces:

```scheme
(((+ d/dx (* 2 d/dy)) (+ (square r) (* 3 x))) R2-rect-point)
;; (+ 3 (* 2 x0) (* 4 y0))
```

=== Coordinate Transformations <sec-3.2.1>

Consider a coordinate change from the chart $chi$ to the chart $chi'$. $ sans(sans(X)) (sans(f)) (m) &= D (sans(f) compose chi^(-1)) (chi (sans(m)))\
 &= D (sans(f) compose (chi')^(-1)compose chi' compose chi^(-1)) (chi (sans(m)))\
 &= D (sans(f) compose (chi')^(-1)) (chi' (sans(m))) (D (chi' compose chi^(-1))) (chi (sans(m)))\
 &= sans(X)' (sans(f)) (sans(m)) (D (chi' compose chi^(-1))) (chi (sans(m))). $ <3.16> This is the rule for the transformation of basis vector fields. The second factor can be recognized as \`\`∂x\'/∂x,\'\' the Jacobian.#footnote[This notation helps one remember the transformation rule:

$ frac(partial f, partial x^i) = sum_j frac(partial f, partial x^(' j)) frac(partial x^(' j), partial x^i)\, $

which is the relation in the usual Leibniz notation. As Spivak pointed out in #emph[Calculus on Manifolds], p.45, $f$ means something different on each side of the equation.]

The vector field does not depend on coordinates. So, from equation @3.17, we have $ sans(v) (sans(f)) (sans(m))= sans(X) (sans(f)) (sans(m))b (chi (sans(m)))= sans(X)' (sans(f)) (sans(m))b'(chi' (sans(m))). $ <3.17> Using equation @3.19 with $x = chi (sans(m))$ and $x' = chi' (sans(m))$, we deduce $ D (chi' compose chi^(-1)) (x)b (x)= b'(x'). $ <3.18> Because $chi' compose chi^(-1)$ is the inverse function of $chi compose (chi')^(-1)$, their derivatives are multiplicative inverses, $ D (chi' compose chi^(-1)) (x)=(D (chi compose (chi')^(-1)) (x'))^(-1)\, $ <3.19> and so $ b (x)= D (chi compose (chi')^(-1)) (x')b'(x')\, $ <3.20> as expected.#footnote[For coordinate paths $q$ and $q'$ related by $q (t)=(chi compose (chi')^(-1)) (q'(t))$ the velocities are related by $D q (t)= D (chi compose (chi')^(-1)) (q'(t))D q'(t)$. Abstracting off paths, we get $v = D (chi compose (chi')^(-1)) (x')v'$.]

It is traditional to express this rule by saying that the basis elements transform #emph[covariantly] and the coefficients of a vector in terms of a basis transform contravariantly; their product is invariant under the transformation.

== Integral Curves <sec-3.3>
A vector field gives a direction and rate for every point on a manifold. We can start at any point and go in the direction specified by the vector field, tracing out a parametric curve on the manifold. This curve is an #emph[integral curve] of the vector field.

More formally, let $sans(v)$ be a vector field on the manifold $sans(M)$. An integral curve $gamma_(sans(m))^(sans(v)) : sans(R) arrow.r sans(M)$ of $sans(v)$ is a parametric path on $sans(M)$ satisfying $ D (sans(f) compose gamma_(sans(m))^(sans(v))) (t)= sans(v) (sans(f)) (gamma_(sans(m))^(sans(v)) (t))=(sans(v) (sans(f))compose gamma_(sans(m))^(sans(v))) (t) gamma_(sans(m))^(sans(v)) (0)= sans(m)\, $ <3.21> for arbitrary functions $sans(f)$ on the manifold, with real values or structured real values. The rate of change of a function along an integral curve is the vector field applied to the function evaluated at the appropriate place along the curve. Often we will simply write $gamma$, rather than $gamma_(sans(m))^(sans(v))$. Another useful variation is $phi.alt_t^(sans(v)) (sans(m))= gamma_(sans(m))^(sans(v)) (t)$.

We can recover the differential equations satisfied by a coordinate representation of the integral curve by letting $sans(f) = chi$, the coordinate function, and letting $sigma = chi compose gamma$ be the coordinate path corresponding to the curve $gamma$. Then the derivative of the coordinate path $sigma$ is $ D sigma (t) &= D (chi compose gamma) (t)\
 &=(sans(v) (chi)compose gamma) (t)\
 &=(sans(v) (chi)compose chi^(-1) compose chi compose gamma) (t)\
 &=(b compose sigma) (t) $ <3.22> where $b = sans(v) (chi)compose chi^(-1)$ is the coefficient function for the vector field $sans(v)$ for coordinates $chi$ (see equation @3.7). So the coordinate path $sigma$ satisfies the differential equations $ D sigma = b compose sigma . $ <3.23>

Differential equations for the integral curve can be expressed only in a coordinate representation, because we cannot go from one point on the manifold to another by addition of an increment. However, we can do this by adding the coordinates to an increment of coordinates and then finding the corresponding point on the manifold.

Iterating the process described by equation @3.24 we can compute higher-order derivatives of functions along the integral curve: $ D (sans(f) compose gamma) &= sans(v) (sans(f))compose gamma \
 D^2 (sans(f) compose gamma) &= D (sans(v) (sans(f))compose gamma)= sans(v) (sans(v) (sans(f)))compose gamma \
 dots.c \
 D^n (sans(f) compose gamma) &= sans(v)^n (sans(f))compose gamma $ <3.24>

Thus, the evolution of $sans(f) compose gamma$ can be written formally as a Taylor series in the parameter: $ (f compose gamma) (t) &=(f compose gamma) (0)+ t D (sans(f) compose gamma) (0)+ 1 / 2 t^2 D^2 (sans(f) compose gamma) (0)+ dots.c \
 &=(e^(t D) (sans(f) compose gamma)) (0)\
 &= e^(t sans(v) sans(f)) (gamma (0)). $ <3.25> Using $phi.alt$ rather than $gamma$ $ (sans(f) compose gamma_(sans(m))^(sans(v))) (t)=(sans(f) compose phi.alt_t^(sans(v))) (sans(m))\, $ <3.26> so, when the series converges, $ (e^(t sans(v)) sans(f)) (sans(m))=(sans(f) compose phi.alt_t^(sans(v))) (sans(m)). $ <3.27>

In particular, let $sans(f) = chi$, then $ sigma (t)=(chi compose gamma) (t)=(e^(t D) (chi compose gamma)) (0)=(e^(t sans(v)) chi) (gamma (0))\, $ <3.28> a Taylor series representation of the solution to the differential equation @3.27.

For example, a vector field circular that generates a rotation about the origin is:#footnote[In this expression `d/dx` and `d/dy` are vector fields that take directional derivatives of manifold functions and evaluate them at manifold points; `x` and `y` are manifold functions. `define-coordinates` was used to create these operators and functions, see #fdg-page-ref(<sec-2.4>).

Note that circular is an operator---a property inherited from `d/dx` and `d/dy`.]

```scheme
(define circular (- (* x d/dy) (* y d/dx)))
```

We can exponentiate the circular vector field, to generate an evolution in a circle around the origin starting at `(1, 0)`:

```scheme
(series:for-each
 print-expression
 (((exp (* 't circular)) (chart R2-rect)) ((point R2-rect) (up 1 0)))
 6)
;; (up 1 0)
;; (up 0 t)
;; (up (* -1/2 (expt t 2)) 0)
;; (up 0 (* -1/6 (expt t 3)))
;; (up (* 1/24 (expt t 4)) 0)
;; (up 0 (* 1/120 (expt t 5)))
```

These are the first six terms of the series expansion of the coordinates of the position for parameter `t`.

We can define an evolution operator $sans(E)_(Delta t\,sans(v))$ using equation @3.31 $ (E_(Delta t\,sans(v)) sans(f)) (sans(m))=(e^(Delta t sans(v)) sans(f)) (sans(m))=(sans(f) compose phi.alt_(Delta t)^(sans(v)) (sans(m)). $ <3.29> We can approximate the evolution operator by summing the series up to a given order:

```scheme
(define ((((evolution order) delta-t v) f) m)
  (series:sum (((exp (* delta-t v)) f) m) order))
```

We can evolve circular from the initial point up to the parameter `t`, and accumulate the first six terms as follows:

```scheme
((((evolution 6) 'delta-t circular) (chart R2-rect))
 ((point R2-rect) (up 1 0)))
;; (up (+ (* -1/720 (expt delta-t 6))
;;        (* 1/24 (expt delta-t 4))
;;        (* -1/2 (expt delta-t 2))
;;        1)
;;     (+ (* 1/120 (expt delta-t 5))
;;        (* -1/6 (expt delta-t 3))
;;        delta-t))
```

Note that these are just the series for $cos Delta t$ and $sin Delta t$, so the coordinate tuple of the evolved point is $(cos Delta t\,sin Delta t)$.

For functions whose series expansions have finite radius of convergence, evolution can progress beyond the point at which the Taylor series converges because evolution is well defined whenever the integral curve is defined.

#strong[Exercise 3.1: State Derivatives]

Newton\'s equations for the motion of a particle in a plane, subject to a force that depends only on the position in the plane, are a system of second-order differential equations for the rectangular coordinates $(X\,Y)$ of the particle: $ D^2 X (t)= A_x (X (t)\,Y (t))upright(" and ") D^2 Y (t)= A_y (X (t)\,Y (t))\, $ <3.30> where $A$ is the acceleration of the particle.

These are equivalent to a system of first-order equations for the coordinate path $sigma = chi compose gamma$, where $chi =(sans(t)\,sans(x)\,sans(y)\,sans(v)_x\,sans(v)_y)$ is a coordinate system on the manifold $bb(R)^5$. Then our equations are: $ D (sans(t) compose gamma) &= 1 \
 D (sans(x) compose gamma) &= sans(v)_x compose gamma \
 D (sans(y) compose gamma) &= sans(v)_y compose gamma \
 D (sans(v)_x compose gamma) &= A_x (sans(x) compose gamma\,sans(y) compose gamma)\
 D (sans(v)_y compose gamma) &= A_y (sans(x) compose gamma\,sans(y) compose gamma) $ <3.31> Construct a vector field on $bb(R)^5$ corresponding to this system of differential equations. Derive the first few terms in the series solution of this problem by exponentiation.

== One-Form Fields <sec-3.4>
A vector field that gives a velocity for each point on a topographic map of the surface of the Earth can be applied to a function, such as one that gives the height for each point on the topographic map, or a map that gives the temperature for each point. The vector field then provides the rate of change of the height or temperature as one moves in the way described by the vector field. Alternatively, we can think of a topographic map, which gives the height at each point, as measuring a velocity field at each point. For example, we may be interested in the velocity of the wind or the trajectories of migrating birds. The topographic map gives the rate of change of height at each point for each velocity vector field. The rate of change of height can be thought of as the number of equally-spaced (in height) contours that are pierced by each velocity vector in the vector field.

=== Differential of a Function <sec-3.4.1>

For example, consider the #emph[differential]#footnote[The differential of a manifold function will turn out to be a special case of the exterior derivative, which will be introduced later.] df of a manifold function $sans(f)$, defined as follows. If $sans(d f)$ is applied to a vector field $sans(v)$ we obtain $ sans(d f) (sans(v))= sans(v) (sans(f))\, $ <3.32> which is a function of a manifold point.

The differential of the height function on the topographic map is a function that gives the rate of change of height at each point for a velocity vector field. This gives the same answer as the velocity vector field applied to the height function.

The differential of a function is linear in the vector fields. The differential is also a linear operator on functions: if $sans(f)_1$ and $sans(f)_2$ are manifold functions, and if $c$ is a real constant, then $ sans(d) (sans(f)_1 + sans(f)_2)= sans(d f)_1 + sans(d f)_2 $ <3.33> and $ sans(d) (c sans(f))= c sans(d f) . $ <3.34> Note that $c$ is not a manifold function.

=== One-Form Fields <sec-3.4.2>

A one-form field is a generalization of this idea; it is something that measures a vector field at each point.

#emph[One-form fields] are linear functions of vector fields that produce real-valued functions on the manifold. A one-form field is linear in vector fields: if $omega$ is a one-form field, $sans(v)$ and $sans(w)$ are vector fields, and $c$ is a manifold function, then $ omega (sans(v) + sans(w))= omega (sans(v))+ omega (sans(w)) $ <3.35> and $ omega (sans(c v))= sans(c) omega (sans(v)). $ <3.36>

Sums and scalar products of one-form fields on a manifold have the following properties. If $omega$ and $theta$ are one-form fields, and if $sans(f)$ is a real-valued manifold function, then: $ (omega + theta) (sans(v))= omega (sans(v))+ theta (sans(v))\, (sans(f) omega) (sans(v))= sans(f) omega (sans(v)). $ <3.37>

=== Coordinate-Basis One-Form Fields <sec-3.4.3>

Given a coordinate function $chi$, we define the coordinate-basis one-form fields $tilde(sans(X))^i$ by $ tilde(sans(X))^i (sans(v)) (sans(m))= sans(v) (chi^i) (sans(m)) $ <3.38> or collectively $ tilde(sans(X)) (sans(v)) (sans(m))= sans(v) (chi) (sans(m)). $ <3.39> With this definition the coordinate-basis one-form fields are dual to the coordinate-basis vector fields in the following sense (see equation @3.15):#footnote[The Kronecker delta $delta_j^i$ is one if $i = j$ and zero otherwise.] $ tilde(sans(X))^i (sans(X)_j) (sans(m))= sans(X)_j (chi^i) (sans(m))= partial_j (chi^i compose chi^(-1)) (chi (sans(m)))= delta_j^i . $ <3.40> The tuple of basis one-form fields $tilde(X) (sans(v)) (sans(m))$ is an up structure like that of $chi$.

The general one-form field $omega$ is a linear combination of coordinate-basis one-form fields: $ omega (sans(v))=(a compose chi)tilde(sans(X)) (sans(v)) $ <3.41> with coefficient-function tuple $a (x)$, for $x = chi (sans(m))$. We can write this more simply as $ omega (sans(v))=(a compose chi)tilde(sans(X)) (sans(v))\, $ <3.42> because everything is evaluated at $sans(m)$.

The coefficient tuple can be recovered from the one-form field:#footnote[The analogous recovery of coefficient tuples from vector fields is equation @3.3: $b^i_(chi, sans(v)) = sans(v)(chi^i) compose chi^(-1)$.] $ a_i (x)= omega (tilde(X)_i) (chi^(-1) (x)). $ <3.43> This follows from the dual relationship #ref(<3.41>). We can see this as a program:#footnote[The procedure `components->1form-field` is analogous to the procedure `components->vector-field` introduced earlier.]

```scheme
(define omega
  (components->1form-field (down (literal-function 'a 0 R2->R)
                                 (literal-function 'a 1 R2->R))
                           R2-rect))

((omega (down d/dx d/dy)) R2-rect-point)
;;       (down (a_0 (up x0 y0)) (a_1 (up x0 y0)))
```

We provide a shortcut for this construction:

```scheme
(define omega (literal-1form-field 'a R2-rect))
```

A differential can be expanded in a coordinate basis: $ sans(d f) (sans(v))= sum_i sans(c)_i tilde(sans(X))^i (sans(v)). $ <3.44> The coefficients $sans(c)_i = sans(d f) (sans(X)_i)= sans(X)_i (sans(f))= partial_i (sans(f) compose chi^(-1))compose chi$ are the partial derivatives of the coordinate representation of $sans(f)$ in the coordinate system of the basis:

```scheme
(((d (literal-manifold-function 'f-rect R2-rect))
  (coordinate-system->vector-basis R2-rect))
 R2-rect-point)
;;(down (((partial 0) f-rect) (up x0 y0))
;;      (((partial 1) f-rect) (up x0 y0)))
```

However, if the coordinate system of the basis differs from the coordinates of the representation of the function, the result is complicated by the chain rule:

```scheme
(((d (literal-manifold-function 'f-polar R2-polar))
  (coordinate-system->vector-basis R2-rect))
 ((point R2-polar) (up 'r 'theta)))
;;(down (- (* (((partial 0) f-polar) (up r theta)) (cos theta))
;;         (/ (* (((partial 1) f-polar) (up r theta))
;;               (sin theta))
;;            r))
;;      (+ (* (((partial 0) f-polar) (up r theta)) (sin theta))
;;         (/ (* (((partial 1) f-polar) (up r theta))
;;               (cos theta))
;;            r))
```

) The coordinate-basis one-form fields can be used to find the coefficients of vector fields in the corresponding coordinate vector-field basis: $ tilde(sans(X))^i (sans(v))= sans(v) (chi^i)= b^i compose chi $ <3.45> or collectively, $ tilde(sans(X)) (sans(v))= sans(v) (chi)= b compose chi . $ <3.46>

A coordinate-basis one-form field is often written $sans(d x)^i$. This traditional notation for the coordinate-basis one-form fields is justified by the relation: $ sans(d x)^i = tilde(sans(X))^i = sans(d) (chi^i). $ <3.47> The `define-coordinates` procedure also makes the basis one-form fields with these traditional names inherited from the coordinates.

We can illlustrate the duality of the coordinate-basis vector fields and the coordinate-basis one-form fields:

```scheme
(define-coordinates (up x y) R2-rect)

((dx d/dy) R2-rect-point)
;; 0

((dx d/dx) R2-rect-point)
;; 0
```

We can use the coordinate-basis one-form fields to extract the coefficients of `circular` on the rectangular vector basis:

```scheme
((dx circular) R2-rect-point)
;; (* -1 y0)

((dy circular) R2-rect-point)
;; x0
```

But we can also find the coefficients on the polar vector basis:

```scheme
((dr circular) R2-rect-point)
;; 0

((dtheta circular) R2-rect-point)
;; 1
```

So `circular` is the same as `d/dtheta`, as we can see by applying them both to the general function `f`:

```scheme
(define f (literal-manifold-function 'f-rect R2-rect))
(((- circular d/dtheta) f) R2-rect-point)
0
```

=== Not All One-Form Fields Are Differentials <sec-3.4.4>

Although all one-form fields can be constructed as linear combinations of basis one-form fields, not all one-form fields are differentials of functions.

The coefficients of a differential are (see equation @3.45): $ sans(c)_i = sans(X)_i (sans(f))= sans(d f) (sans(X)_i) $ <3.48> and partial derivatives of functions commute $ sans(X)_i (sans(X)_j (sans(f)))= sans(X)_j (sans(X)_i (sans(f))). $ <3.49> As a consequence, the coefficients of a differential are constrained $ sans(X)_i (sans(c)_j)= sans(X)_j (sans(c)_i)\, $ <3.50> but a one-form field can be constructed with arbitrary coefficient functions. For example: $ sans(x d x) + sans(x d y) $ <3.51> is not a differential of any function. This is why we started with the basis one-form fields and built the general one-form fields in terms of them.

=== Coordinate Transformations <sec-3.4.5>

Consider a coordinate change from the chart $chi$ to the chart $chi'$. $ tilde(sans(X)) (sans(v)) &= sans(v) (chi)\
 &= sans(v) (chi compose (chi')^(-1)compose chi')\
 &=(D (chi compose (chi')^(-1))compose chi')sans(v) (chi')\
 &=(D (chi compose (chi')^(-1))compose chi')compose tilde(sans(X))' (v)\, $ <3.52> where the third line follows from the chain rule for vector fields.

One-form fields are independent of coordinates. So, $ omega (v)=(a compose chi)tilde(sans(X)) (v)=(a' compose chi')tilde(sans(X))' (v). $ <3.53> Eqs. @3.54 and @3.53 require that the coefficients transform under coordinate transformations as follows: $ a (chi (sans(m)))D (chi compose (chi')^(-1)) (chi' (sans(m)))= a'(chi' (sans(m)))\, $ <3.54> or $ a (chi (sans(m)))= a'(chi' (sans(m))) (D (chi compose (chi')^(-1)) (chi' (sans(m))))^(-1). $ <3.55>

The coefficient tuple $a (x)$ is a down structure compatible for contraction with $b (x)$. Let $sans(v)$ be the vector with coefficient tuple $b (x)$, and $omega$ be the one-form with coefficient tuple $a (x)$. Then, by equation @3.43, $ omega (sans(v))=(a compose chi) (b compose chi). $ <3.56> As a program:

```scheme
(define omega (literal-1form-field 'a R2-rect))

(define v (literal-vector-field 'b R2-rect))

((omega v) R2-rect-point)
;; (+ (* (b^0 (up x y)) (a_0 (up x0 y0)))
;;    (* (b^1 (up x y)) (a_1 (up x0 y0))))
```

Comparing equation @3.56 with equation @3.23 we see that one-form components and vector components transform oppositely, so that $ a (x)b (x)= a'(x')b'(x')\, $ <3.57> as expected because $omega (sans(v)) (sans(m))$ is independent of coordinates.

#strong[Exercise 3.2: Verification]

Verify that the coefficients of a one-form field transform as described in equation @3.56. You should use equation @3.44 in your derivation.

#strong[Exercise 3.3: Hill Climbing]

The topography of a region on the Earth can be specified by a manifold function $sans(h)$ that gives the altitude at each point on the manifold. Let $sans(v)$ be a vector field on the manifold, perhaps specifying a direction and rate of walking at every point on the manifold.

#strong[a.] Form an expression that gives the power that must be expended to follow the vector field at each point.

#strong[b.] Write this as a computational expression.
]
