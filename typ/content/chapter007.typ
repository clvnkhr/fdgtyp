// Generated from ../../fdg-book/scheme/org/chapter007.org.
// Re-run scripts/convert-org-to-typst.mjs to refresh.
#import "../lib.typ": fdg-chapter, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX

#fdg-chapter("Directional Derivatives", numbered: true, eq-prefix: "7", ref-label: "chap-7")[
The vector field was a generalization of the directional derivative to functions on a manifold. When we want to generalize the directional derivative idea to operate on other manifold objects, such as directional derivatives of vector fields or of form fields, there are several useful choices. In the same way that a vector field applies to a function to produce a function, we will build directional derivatives so that when applied to any object it will produce another object of the same kind. All directional derivatives require a vector field to give the direction and scale factor.

We will have a choice of directional derivative operators that give different results for the rate of change of vector and form fields along integral curves. But all directional derivative operators must agree when computing rates of change of functions along integral curves. When applied to functions, all directional derivative operators give:

$ cal(D)_(sans(v)) (sans(f))= sans(v) (sans(f)). $ <7.1>

Next we specify the directional derivative of a vector field $sans(u)$ with respect to a vector field $sans(v)$. Let an integral curve of the vector field $sans(v)$ be $γ$, parameterized by $t$, and let $sans(m) = gamma (t)$. Let $sans(u)'$ be a vector field that results from transporting the vector field $sans(u)$ along $γ$ for a parameter increment $δ$. How $sans(u)$ is transported to make $sans(u)'$ determines the type of derivative. We formulate the method of transport by:

$ sans(u)' = F_delta^(sans(v)) sans(u) . $ <7.2>

We can asume without loss of generality that $F_delta^(sans(v)) sans(u)$ is a linear transformation over the reals on $sans(u)$, because we care about its behavior only in an incremental region around $delta = 0$.

Let $g$ be the comparison of the original vector field at a point with the transported vector field at that point:

$ g (delta)= sans(u) (sans(f)) (sans(m))-(F_delta^(sans(v)) sans(u)) (sans(f)) (sans(m)). $ <7.3>

So we can compute the directional derivative operator using only ordinary derivatives:

$ cal(D)_(sans(v)) sans(u) (sans(f)) (sans(m))= D g (0). $ <7.4>

The result $cal(D)_(sans(v)) sans(u)$ is of type vector field.

The general pattern of constructing a directional derivative operator from a transport operator is given by the following schema:#footnote[The directional derivative of a vector field must itself be a vector field. Thus the real program for this must make the function of $sans(f)$ into a vector field. However, we leave out this detail here to make the structure clear.]

```scheme
(define (((((F->directional-derivative F) v) u) f) m)
(define (g delta)
(- ((u f) m) (((((F v) delta) u) f) m)))
((D g) 0))
```

The linearity of transport implies that

$ cal(D)_(sans(v)) (alpha sans(O) + beta sans(P))= alpha cal(D)_(sans(v)) sans(O) + beta cal(D)_(sans(v)) sans(P)\, $ <7.5>

for any real $α$ and $β$ and manifold objects $sans(O)$ and $sans(P)$.

The directional derivative obeys superposition in its vector-field argument:

$ cal(D)_(sans(v) + sans(w)) = cal(D)_(sans(v)) + cal(D)_(sans(w)) . $ <7.6>

The directional derivative is homogeneous over the reals in its vector-field argument:

$ cal(D)_(alpha sans(v)) = alpha cal(D)_(sans(v))\, $ <7.7>

for any real $α$.#footnote[For some derivative operators $α$ can be a real-valued manifold function.] This follows from the fact that for evolution along integral curves: when $α$ is a real number,

$ phi.alt_t^(alpha sans(v)) (sans(m))= phi.alt_(alpha t)^(sans(v)) (sans(m)). $ <7.8>

When applied to products of functions, directional derivative operators satisfy Leibniz\'s rule:

$ cal(D)_(sans(v)) (sans(f) sans(g))= sans(f) (cal(D)_(sans(v)) sans(g))+(cal(D)_(sans(v)) sans(f))sans(g) . $ <7.9>

The Leibniz rule is extended to applications of one-form fields to vector fields:

$ cal(D)_(sans(v)) (omega (sans(y)))= omega (cal(D)_(sans(v)) sans(y))+(cal(D)_(sans(v)) omega) (sans(y)). $ <7.10>

The extension of the Leibniz rule, combined with the choice of transport of a vector field, determines the action of the directional derivative on form fields.#footnote[The action on functions, vector fields, and one-form fields suffices to define the action on all tensor fields. See Appendix @chap-appendix-c.]

== Lie Derivative <sec-7.1>
The Lie derivative is one kind of directional derivative operator. We write the Lie derivative operator with respect to a vector field $sans(v)$ as $cal(L)_(sans(v))$.

== Functions <sec-7.2>
The Lie derivative of the function $sans(f)$ with respect to the vector field $sans(v)$ is given by:

$ cal(L)_(sans(v)) sans(f) = sans(v) (sans(f)). $ <7.11>

The tangent vector $sans(v)$ measures the rate of change of $sans(f)$ along integral curves.

== Vector Fields <sec-7.3>
For the Lie derivative of a vector field $sans(y)$ with respect to a vector field $sans(v)$ we choose the transport operator $F_delta^(sans(v)) sans(y)$ to be the pushforward of $sans(y)$ along the integral curves of $sans(v)$. Recall equation @6.15. So the Lie derivative of $sans(y)$ with respect to $sans(v)$ at the point $sans(m)$ is

$ (cal(L)_(sans(v)) sans(y)) (sans(f)) (sans(m))= D g (0)\, $ <7.12>

where

$ g (delta)= sans(y) (sans(f)) (sans(m))-((phi.alt_delta^(sans(v)))_(*)sans(y)) (sans(f)) (sans(m)). $ <7.13>

We can construct a procedure that computes the Lie derivative of a vector field by supplying an appropriate transport operator (F-Lie phi) for F in our schema F-\>directional-derivative. In this first stab at the Lie derivative, we introduce a coordinate system and we expand the integral curve to a given order. Because in the schema we evaluate the derivative of $g$ at 0, the dependence on the order and the coordinate system disappears. They will not be needed in the final version.

```scheme
(define (Lie-directional coordsys order)
(let ((Phi (phi coordsys order)))
(F->directional-derivative (F-Lie Phi))))

(define (((F-Lie phi) v) delta)
(pushforward-vector ((phi v) delta) ((phi v) (- delta))))

(define ((((phi coordsys order) v) delta) m)
((point coordsys)
(series:sum (((exp (* delta v)) (chart coordsys)) m)
order)))
```

Expand the quantities in equation @7.13 to first order in $δ$:

$ g (delta)= sans(y) (sans(f)) (sans(m))-(phi.alt_(delta *)^(sans(v)) sans(y)) (sans(f)) (sans(m))= sans(y) (sans(f)) (sans(m))- sans(y) (sans(f) compose phi.alt_delta^(sans(v))) (phi.alt_(- delta)^(sans(v)) (sans(m)))=(sans(y) (sans(f))- sans(y) (sans(f) + delta sans(v) (sans(f))+ dots.c)+ delta sans(v) (sans(y) (sans(f) + delta sans(v) (sans(f))+ dots.c))) (sans(m))+ dots.c =(- delta sans(y) (sans(v) (sans(f)))+ delta sans(v) (sans(y) (sans(f)))) (sans(m))+ dots.c = delta[sans(v)\,sans(y)] (sans(f)) (sans(m))+ cal(O) (delta^2). $ <7.14>

So the Lie derivative of a vector field $sans(y)$ with respect to a vector field $sans(v)$ is a vector field that is defined by its behavior when applied to an arbitrary manifold function $sans(f)$:

$ (cal(L)_(sans(v)) sans(y)) (sans(f))=[sans(v)\,sans(y)] (sans(f)) $ <7.15>

Verifying this computation

```scheme
(let ((v (literal-vector-field 'v-rect R3-rect))
(w (literal-vector-field 'w-rect R3-rect))
(f (literal-manifold-function 'f-rect R3-rect)))
((- ((((Lie-directional R3-rect 2) v) w) f)
((commutator v w) f))
((point R3-rect) (up 'x0 'y0 'z0))))
0
```

Although this is tested to second order, evaluating the derivative at zero ensures that first order is enough. So we can safely define:

```scheme
(define ((Lie-derivative-vector V) Y)
(commutator V Y))
```

We can think of the Lie derivative as the rate of change of the manifold function $sans(y) (sans(f))$ as we move in the $sans(v)$ direction, adjusted to take into account that some of the variation is due to the variation of $sans(f)$:

$ (cal(L)_(sans(v)) sans(y)) (sans(f))=[sans(v)\,sans(y)] (sans(f))= sans(v) (sans(y) (sans(f)))- sans(y) (sans(v) (sans(f)))= sans(v) (sans(y) (sans(f)))- sans(y) (cal(L)_(sans(v)) (sans(f))). $ <7.16>

The first term in the commutator, $sans(v) (sans(y) (sans(f)))$, measures the rate of change of the combination $sans(y) (sans(f))$ along the integral curves of $sans(v)$. The change in $sans(y) (sans(f))$ is due to both the intrinsic change in $sans(y)$ along the curve and the change in $sans(f)$ along the curve; the second term in the commutator subtracts this latter quantity. The result is the intrinsic change in $sans(y)$ along the integral curves of $sans(v)$.

Additionally, we can extend the product rule, for any manifold function $sans(g)$ and any vector field $sans(u)$:

$ cal(L)_(sans(v)) (sans(g) sans(u)) (sans(f))=[sans(v)\,sans(g) sans(u)] (sans(f))= sans(v) (sans(g))sans(u) (sans(f))+ sans(g)[sans(v)\,sans(u)] (sans(f))=(cal(L)_(sans(v)) sans(g))sans(u) (sans(f))+ sans(g) (cal(L)_(sans(v)) sans(u)) (sans(f)). $ <7.17>

== An Alternate View <sec-7.4>
We can write the vector field

$ sans(y) (sans(f))= sum_i y^i sans(e)_i (sans(f)). $ <7.18>

By the extended product rule (equation @7.17) we get

$ cal(L)_(sans(v)) sans(y) (sans(f))= sum_i(sans(v) (sans(y)^i)sans(e)_i (sans(f))+ sans(y)^i cal(L)_(sans(v)) cal(e)_i (sans(f))). $ <7.19>

Because the Lie derivative of a vector field is a vector field, we can extract the components of $cal(L)_(sans(v)) sans(e)_i$ using the dual basis. We define $Delta_j^i (sans(v))$ to be those components:

$ Delta_j^i (sans(v))= tilde(sans(e))^i (cal(L)_(sans(v)) sans(e)_j)= tilde(sans(e))^i ([sans(v)\,sans(e)_j]). $ <7.20>

So the Lie derivative can be written

$ (cal(L)_(sans(v)) sans(y)) (sans(f))= sum_i #scale(x: 240%, y: 240%)[(] sans(v) (sans(y)^i)+ sum_j Delta_j^i (sans(v))sans(y)^j #scale(x: 240%, y: 240%)[)] sans(e)_i (f). $ <7.21>

The components of the Lie derivatives of the basis vector fields are the structure constants for the basis vector fields. (See equation @4.37.) The structure constants are antisymmetric in the lower indices:

$ tilde(sans(e))^i (cal(L)_(sans(e)_k) sans(e)_j)= tilde(sans(e))^i ([sans(e)_k\,sans(e)_j])= sans(d)_(k j)^i . $ <7.22>

Resolving $sans(v)$ into components and applying the product rule, we get

$ (cal(L)_(sans(v)) sans(y)) (sans(f))= sum_k #scale(x: 120%, y: 120%)[(] sans(v)^k[sans(e)_k\,sans(y)] (sans(f))- sans(y) (sans(v)^k)sans(e)_k) (sans(f))#scale(x: 120%, y: 120%)[)] . $ <7.23>

So $Delta_j^i$ is related to the structure constants by

$ Delta_j^i (sans(v))= tilde(sans(e))^i (cal(L)_(sans(v)) sans(e)_j)= sum_k #scale(x: 120%, y: 120%)[(] sans(v)^k tilde(sans(e))^i ([sans(e)_k\,sans(e)_j])- sans(e)_j (sans(v)^k)tilde(sans(e))^i (sans(e)_k)#scale(x: 120%, y: 120%)[)] = sum_k #scale(x: 120%, y: 120%)[(] sans(v)^k sans(d)_(k j)^i - sans(e)_j (sans(v)^k)delta_k^i #scale(x: 120%, y: 120%)[)] = sum_k sans(v)^k sans(d)_(k j)^i - sans(e)_j (sans(v)^i). $ <7.24>

Note: Despite their appearance, the $Delta_j^i$ are not form fields because $Delta_j^i (sans(f) sans(v)) != sans(f) Delta_j^i (sans(v))$.

== Form Fields <sec-7.5>
We can also define the Lie derivative of a form field $ω$ with respect to the vector field $sans(v)$ by its action on an arbitrary vector field $sans(y)$, using the extended Leibniz rule (see equation @7.10):

$ (cal(L)_(sans(v)) (omega)) (sans(y)) "≡" sans(v) (omega (sans(y)))- omega (cal(L)_(sans(v)) sans(y)). $ <7.25>

The first term computes the rate of change of the combination $omega (sans(y))$ along the integral curve of $sans(v)$, while the second subtracts $ω$ applied to the change in $sans(y)$. The result is the change in $ω$ along the curve.

The Lie derivative of a $k$-form field $ω$ with respect to a vector field $sans(v)$ is a $k$-form field that is defined by its behavior when applied to $k$ arbitrary vector fields $sans(w)_0\,dots.c\,sans(w)_(k - 1)$. We generalize equation @7.25:

$ cal(L)_(sans(v)) omega (sans(w)_0\,dots.c\,sans(w)_(k - 1))= sans(v) (omega (sans(w)_0\,dots.c\,sans(w)_(k - 1)))- sum_(i=0)^(k - 1) omega (sans(w)_0\,dots.c\,cal(L)_(sans(v)) sans(w)_i\,dots.c\,sans(w)_(k - 1)). $ <7.26>

== Uniform Interpretation <sec-7.6>
Consider abstracting equations @7.16, (@7.25), and @7.27. The Lie derivative of an object, $sans(a)$, that can apply to other objects, $sans(b)$, to produce manifold functions, $sans(a) (sans(b)): sans(M) arrow.r sans(R)^n$, is

$ (cal(L)_(sans(v)) sans(a)) (sans(b))= sans(v) (sans(a) (sans(b)))- sans(a) (cal(L)_(sans(v)) sans(b)). $ <7.27>

The first term in this expression computes the rate of change of the compound object $sans(a) (sans(b))$ along integral curves of $sans(v)$, while the second subtracts the change in $sans(a)$ due to the change in $sans(b)$ along the curves. The result is a measure of the \"intrinsic\" change in $sans(a)$ along integral curves of $sans(v)$, with $sans(b)$ held \"fixed.\"

== Properties of the Lie Derivative <sec-7.7>
As required by properties 7.7-7.5, the Lie derivative is linear in its arguments:

$ cal(L)_(alpha sans(v) + beta sans(w)) = alpha cal(L)_(sans(v)) + beta cal(L)_(sans(w))\, $ <7.28>

and

$ cal(L)_(sans(v)) (alpha sans(a) + beta sans(b))= alpha cal(L)_(sans(v)) sans(a) + beta cal(L)_(sans(v)) sans(b)\, $ <7.29>

with $alpha\,beta in sans(R)$ and vector fields or one-form fields $sans(a)$ and $sans(b)$.

For any $k$-form field $ω$ and any vector field $sans(v)$ the exterior derivative commutes with the Lie derivative with respect to the vector field:

$ cal(L)_(sans(v)) (sans(d) omega)= sans(d) (cal(L)_(sans(v)) omega). $ <7.30>

If $ω$ is an element of surface then $sans(d) omega$ is an element of volume. The Lie derivative computes the rate of change of its argument under a deformation described by the vector field. The answer is the same whether we deform the surface before computing the volume or compute the volume and then deform it.

We can verify this in 3-dimensional rectangular space for a general one-form field:#footnote[In these experiments we need some setup.

```scheme
(define a (literal-manifold-function 'alpha R3-rect))
(define b (literal-manifold-function 'beta R3-rect))
(define c (literal-manifold-function 'gamma R3-rect))
```]

```scheme
(((- ((Lie-derivative V) (d theta))
(d ((Lie-derivative V) theta)))
X Y)
R3-rect-point)
0
```

and for the general two-form field:

```scheme
(((- ((Lie-derivative V) (d omega))
(d ((Lie-derivative V) omega)))
X Y Z)
R3-rect-point)
0
```

The Lie derivative satisfies another nice elementary relationship. If $sans(v)$ and $sans(w)$ are two vector fields, then

$ [cal(L)_(sans(v))\,cal(L)_(sans(w))]= cal(L)_([sans(v)\,sans(w)]) . $ <7.31>

Again, for our general one-form field $θ$:

```scheme
((((- (commutator (Lie-derivative X) (Lie-derivative Y))
(Lie-derivative (commutator X Y)))
theta)
Z)
R3-rect-point)
0
```

and for the two-form field $ω$:

```scheme
((((- (commutator (Lie-derivative X) (Lie-derivative Y))
(Lie-derivative (commutator X Y)))
omega)
Z V)
R3-rect-point)
0
```

== Exponentiating Lie Derivatives <sec-7.8>
The Lie derivative computes the rate of change of objects as they are advanced along integral curves. The Lie derivative of an object produces another object of the same type, so we can iterate Lie derivatives. This gives us Taylor series for objects along the curve.

The operator $e^(t cal(L)_(sans(v))) = 1 + t cal(L)_v + frac(t^2, 2 !) cal(L)_(sans(v))^2 + dots.c$ evolves objects along the curve by parameter $t$. For example, the exponential of a Lie derivative applied to a vector field is

$ e^(t cal(L)_(sans(v))) sans(y) = sans(y) + t cal(L)_(sans(v)) sans(y) + t^2 / 2 cal(L)_(sans(v))^2 sans(y) + dots.c = sans(y) + t[sans(v)\,sans(y)]+ t^2 / 2[sans(v)\,[sans(v)\,sans(y)]]+ dots.c . $ <7.32>

Consider a simple case. We advanced the coordinate-basis vector field $partial\/partial sans(y)$ by an angle $a$ around the circle. Let $sans(J)_z = x partial\/partial sans(y) - y partial\/partial sans(x)$, the circular vector field. We recall

```scheme
(define Jz (- (* x d/dy) (* y d/dx)))
```

We can apply the exponential of the Lie derivative with respect to $sans(J)_z$ to $partial\/partial sans(y)$. We examine how the result affects a general function on the manifold:

```scheme
(series:for-each print-expression
((((exp (* 'a (Lie-derivative Jz))) d/dy)
(literal-manifold-function 'f-rect R3-rect))
((point R3-rect) (up 1 0 0)))
5)
/(((partial 0) f-rect) (up 1 0))/
/(* -1 a (((partial 1) f-rect) (up 1 0)))/
/(* -1/2 (expt a 2) (((partial 0) f-rect) (up 1 0)))/
/(* 1/6 (expt a 3) (((partial 1) f-rect) (up 1 0)))/
/(* 1/24 (expt a 4) (((partial 0) f-rect) (up 1 0)))/
/;Value: .../
```

Apparently the result is

$ upright("exp") (alpha cal(L)_((sans(x) thin partial\/partial sans(y) - sans(y) thin partial\/partial sans(x))))frac(partial, partial sans(y)) = - sin(a)frac(partial, partial sans(x)) + cos(a)frac(partial, partial sans(y)) . $ <7.33>

== Interior Product <sec-7.9>
There is a simple but useful operation available between vector fields and form fields called #emph[interior product]. This is the substitution of a vector field $sans(v)$ into the first argument of a $p$-form field $ω$ to produce a $p - 1$-form field:

$ (i_(sans(v)) omega) (sans(v)_1\,dots.c sans(v)_(sans(p) - 1))= omega (sans(v)\,sans(v)_1\,dots.c sans(v)_(sans(p - 1))). $ <7.34>

There is a mundane identity corresponding to the product rule for the Lie derivative of an interior product:

$ cal(L)_(sans(v)) (i_(sans(y)) omega)= i_(cal(L)_(sans(v)) sans(y)) omega + i_(sans(y)) (cal(L)_(sans(v)) omega). $ <7.35>

And there is a rather nice identity for the Lie derivative in terms of the interior product and the exterior derivative, called #emph[Cartan\'s formula]:

$ cal(L)_(sans(v)) omega = i_(sans(v)) (sans(d) omega)+ sans(d) (i_(sans(v)) omega). $ <7.36>

We can verify Cartan\'s formula in a simple case with a program:

```scheme
(define X (literal-vector-field 'X-rect R3-rect))
(define Y (literal-vector-field 'Y-rect R3-rect))
(define Z (literal-vector-field 'Z-rect R3-rect))

(define a (literal-manifold-function 'alpha R3-rect))
(define b (literal-manifold-function 'beta R3-rect))
(define c (literal-manifold-function 'gamma R3-rect))

(define omega
(+ (* a (wedge dx dy))
(* b (wedge dy dz))
(* c (wedge dz dx))))

(define ((L1 X) omega)
(+ ((interior-product X) (d omega))
(d ((interior-product X) omega))))

((- (((Lie-derivative X) omega) Y Z)
(((L1 X) omega) Y Z))
((point R3-rect) (up 'x0 'y0 'z0)))
0
```

Note that $i_(sans(v)) compose i_(sans(u)) + i_(sans(u)) compose i_(sans(v)) = 0$. One consequence of this is that $i_(sans(v)) compose i_(sans(v)) = 0$.

== Covariant Derivative <sec-7.10>
The covariant derivative is another kind of directional derivative operator. We write the covariant derivative operator with respect to a vector field $sans(v)$ as $nabla_(sans(v))$. This is pronounced \"covariant derivative with respect to $sans(v)$\" or \"nabla $sans(v)$\.\"

== Covariant Derivative of Vector Fields <sec-7.11>
We may also choose our $F_delta^(sans(v)) sans(u)$ to define what we mean by \"parallel\" transport of the vector field $sans(u)$ along an integral curve of the vector field $sans(v)$. This may correspond to our usual understanding of parallel in situations where we have intuitive insight.

The notion of parallel transport is path dependent. Remember our example from the Introduction, #fdg-page-ref(<intro-parallel-transport>): Start at the North Pole carrying a stick along a line of longitude to the Equator, always pointing it south, parallel to the surface of the Earth. Then proceed eastward for some distance, still pointing the stick south. Finally, return to the North Pole along this new line of longitude, keeping the stick pointing south all the time. At the pole the stick will not point in the same direction as it did at the beginning of the trip, and the discrepancy will depend on the amount of eastward motion.#footnote[In the introduction the stick was always kept east-west rather than pointing south, but the phenomenon is the same!]

So if we try to carry a stick parallel to itself and tangent to the sphere, around a closed path, the stick generally does not end up pointing in the same direction as it started. The result of carrying the stick from one point on the sphere to another depends on the path taken. However, the direction of the stick at the endpoint of a path does not depend on the rate of transport, just on the particular path on which it is carried. Parallel transport over a zero-length path is the identity.

A vector may be resolved as a linear combination of other vectors. If we parallel-transport each component, and form the same linear combination, we get the transported original vector. Thus parallel transport on a particular path for a particular distance is a linear operation.

So the transport function $F_delta^(sans(v))$ is a linear operator on the components of its argument, and thus:

$ F_delta^(sans(v)) sans(u) (sans(f)) (sans(m))= sum_(i\,j) (A_j^i (delta) (sans(u)^j compose phi.alt_(- delta)^(sans(v)))sans(e)_i (sans(f))) (sans(m)) $ <7.37>

for some functions $A_j^i$ that depend on the particular path (hence its tangent vector $sans(v)$) and the initial point. We reach back along the integral curve to pick up the components of $sans(u)$ and then parallel-transport them forward by the matrix $A_j^i (delta)$ to form the components of the parallel-transported vector at the advanced point.

As before, we compute

$ nabla_(sans(v)) sans(u) (sans(f)) (sans(m))= D g (0)\, $ <7.38>

where

$ g (delta)= sans(u) (sans(f)) (sans(m))-(F_delta^(sans(v)) sans(u)) (sans(f)) (sans(m)). $ <7.39>

Expanding with respect to a basis ${sans(e)_i}$ we get

$ g (delta)= sum_i #scale(x: 300%, y: 300%)[(] sans(u)^i sans(e)_i (sans(f))- sum_j A_j^i (delta) (sans(u)^j compose phi.alt_(- delta)^(sans(v)))sans(e)_i (sans(f))#scale(x: 300%, y: 300%)[)] (sans(m)). $ <7.40>

By the product rule for derivatives,

$ D g (delta)= sum_(i j) #scale(x: 120%, y: 120%)[(] A_j^i (delta) ((sans(v) (sans(u)^j))compose phi.alt_(- delta)^(sans(v)))sans(e)_i (sans(f))- D A_j^i (delta) (sans(u)^j compose phi.alt_(- delta)^(sans(v)))sans(e)_i (sans(f))#scale(x: 120%, y: 120%)[)] (sans(m)). $ <7.41>

So, since $A_j^i (0) (sans(m))$ is the identity multiplier, and $phi.alt_0^(sans(v))$ is the identity function,

$ D g (0)= sum_i #scale(x: 300%, y: 300%)[(] sans(v) (sans(u)^i) (sans(m))sans(e)_i (sans(f))- sum_j D A_j^i (0)sans(u)^j (sans(m))sans(e)_i (sans(f))#scale(x: 300%, y: 300%)[)] thin (sans(m)). $ <7.42>

We need $D A_j^i (0)$. Parallel transport depends on the path, but not on the parameterization of the path. From this we can deduce that $D A_j^i (0)$ can be written as one-form fields applied to the vector field $sans(v)$, as follows.

Introduce $B$ to make the dependence of $A$s on $sans(v)$ explicit:

$ A_j^i (delta)= B_j^i (sans(v)) (delta). $ <7.43>

Parallel transport depends on the path but not on the rate along the path. Incrementally, if we scale the vector field $sans(v)$ by $ξ$,

$ frac(d, d delta) (B (sans(v)) (delta))= frac(d, d delta) (B (xi sans(v)) (delta\/xi)). $ <7.44>

Using the chain rule

$ D (B (sans(v))) (delta)= 1 / xi D (B (xi sans(v))) (delta / xi)\, $ <7.45>

so, for $delta = 0$,

$ xi D (B (sans(v))) (0)= D (B (xi sans(v))) (0). $ <7.46>

The scale factor $ξ$ can vary from place to place. So $D A_j^i (0)$ is homogeneous in $sans(v)$ over manifold functions. This is stronger than the homogeneity required by equation @7.7.

The superposition property (equation @7.6) is true of the ordinary directional derivative of manifold functions. By analogy we require it to be true of directional derivatives of vector fields.

These two properties imply that $D A_j^i (0)$ is a one-form field:

$ D A_j^i (0)= - pi.alt_j^i (sans(v))\, $ <7.47>

where the minus sign is a matter of convention.

As before, we can take a stab at computing the covariant derivative of a vector field by supplying an appropriate transport operator for F in F-\>directional-derivative. Again, this is expanded to a given order with a given coordinate system. These will be unnecessary in the final version.

```scheme
(define (covariant-derivative-vector omega coordsys order)
(let ((Phi (phi coordsys order)))
(F->directional-derivative
(F-parallel omega Phi coordsys))))

(define ((((((F-parallel omega phi coordsys) v) delta) u) f) m)
(let ((basis (coordinate-system->basis coordsys)))
(let ((etilde (basis->1form-basis basis))
(e (basis->vector-basis basis)))
(let ((m0 (((phi v) (- delta)) m)))
(let ((Aij (+ (identity-like ((omega v) m0))
(* delta (- ((omega v) m0)))))
(ui ((etilde u) m0)))
(* ((e f) m) (* Aij ui)))))))
```

So

$ D g (0)= sum_i (sans(v) (sans(u)^i) (sans(m)) + sum_j pi.alt_j^i (sans(v)) (sans(m)) sans(u)^j (sans(m))) sans(e)_i (sans(f)) (sans(m)). $ <7.48>

Thus the covariant derivative is

$ nabla_(sans(v)) sans(u) (sans(f))= sum_i (sans(v) (sans(u)^i) + sum_j pi.alt_j^i (sans(v)) sans(u)^j) sans(e)_i (sans(f)). $ <7.49>

The one-form fields $pi.alt_j^i$ are called the #emph[Cartan one-forms], or the #emph[connection one-forms]. They are defined with respect to the basis $sans(e)$.

As a program, the covariant derivative is:#footnote[This program is incomplete. It must construct a vector field; it must make a differential operator; and it does not apply to functions or forms.]

```scheme
(define ((((covariant-derivative-vector Cartan) V) U) f)
(let ((basis (Cartan->basis Cartan))
(Cartan-forms (Cartan->forms Cartan)))
(let ((vector-basis (basis->vector-basis basis))
(1form-basis (basis->1-form-basis basis)))
(let ((u-components (1form-basis U)))
(* (vector-basis f)
(+ (V u-components)
(* (Cartan-forms V) u-components)))))))
```

An important property of $nabla_(sans(v)) sans(u)$ is that it is linear over manifold functions $sans(g)$ in the first argument

$ nabla_(sans(g) sans(v)) sans(u) (sans(f))= sans(g) nabla_(sans(v)) sans(u) (sans(f))\, $ <7.50>

consistent with the fact that the Cartan forms $pi.alt_j^i$ share the same property.

Additionally, we can extend the product rule, for any manifold function $sans(g)$ and any vector field $sans(u)$:

$ nabla_(sans(v)) (sans(g) sans(u)) (sans(f))= sum_i (sans(v) (sans(g u)^i) + sum_j pi.alt_j^i (sans(v)) sans(g u)^j) sans(e)_i (sans(f))= sum_i sans(v) (sans(g))sans(u)^i sans(e)_i (sans(f))+ sans(g) nabla_(sans(v)) (sans(u)) (sans(f))=(nabla_(sans(v)) sans(g))sans(u) (sans(f))+ sans(g) nabla_(sans(v)) (sans(u)) (sans(f)). $ <7.51>

== An Alternate View <sec-7.12>
As we did with the Lie derivative (equations @7.18 - @7.21), we can write the vector field

$ sans(u) (sans(f)) (sans(m))= sum_i sans(u)^i (sans(m))sans(e)_i (sans(f)) (sans(m)). $ <7.52>

By the extended product rule, equation @7.51, we get:

$ nabla_(sans(v)) sans(u) (sans(f))= sum_i(sans(v) (sans(u)^i)sans(e)_i (sans(f))+ sans(u)^i nabla_(sans(v)) sans(e)_i (sans(f))). $ <7.53>

Because the covariant derivative of a vector field is a vector field we can extract the components of $nabla_(sans(v)) sans(e)_i$ using the dual basis:

$ pi.alt_j^i (sans(v))= tilde(sans(e))^i (nabla_(sans(v)) sans(e)_j). $ <7.54>

This gives an alternate expression for the Cartan one forms. So

$ nabla_(sans(v)) sans(u) (sans(f))= sum_i (sans(v) (sans(u)^i) + sum_j pi.alt_j^i (sans(v)) sans(u)^j) sans(e)_i (sans(f)). $ <7.55>

This analysis is parallel to the analysis of the Lie derivative, except that here we have the Cartan form fields $pi.alt_j^i$ and there we had $Delta_j^i$, which are not form fields.

Notice that the Cartan forms appear here (equation @7.53) in terms of the covariant derivatives of the basis vectors. By contrast, in the first derivation (see equation @7.42) the Cartan forms appear as the derivatives of the linear forms that accomplish the parallel transport of the coefficients.

The Cartan forms can be constructed from the dual basis one-forms:

$ pi.alt_j^i (sans(v)) (sans(m))= sum_k Gamma_(j k)^i (sans(m))tilde(sans(e))^k (sans(v)) (sans(m)). $ <7.56>

The connection coefficient functions $Gamma_(j k)^i$ are called the #emph[Christoffel coefficients] (traditionally called #emph[Christoffel symbols]).#footnote[This terminology may be restricted to the case in which the basis is a coordinate basis.] Making use of the structures,#footnote[The structure of the Cartan forms $pi.alt$ together with this equation forces the shape of the Christoffel coefficient structure.], the Cartan forms are

$ pi.alt (sans(v))= Gamma tilde(sans(e)) (sans(v)). $ <7.57>

Conversely, the Christoffel coefficients may be obtained from the Cartan forms

$ Gamma_(j k)^i = pi.alt_j^i (sans(e)_k). $ <7.58>

== Covariant Derivative of One-Form Fields <sec-7.13>
The covariant derivative of a vector field induces a compatible covariant derivative for a one-form field. Because the application of a one-form field to a vector field yields a manifold function, we can evaluate the covariant derivative of such an application. Let $τ$ be a one-form field and $sans(w)$ be a vector field. Then

$ nabla_(sans(v)) (tau (sans(w)))= sans(v) (sum_j tau_j sans(w)^j) = sum_j(sans(v) (tau_j)sans(w)^j + tau_j sans(v) (sans(w)^j))= sum_j (sans(v) (tau_j) sans(w)^j + tau_j (tilde(sans(e))^j (nabla_(sans(v)) sans(w)) - sum_k pi.alt_k^j (sans(v)) sans(w)^k)) = sum_j (sans(v) (tau_j) sans(w)^j - tau_j sum_k pi.alt_k^j (sans(v)) sans(w)^k) + tau (nabla_(sans(v)) sans(w))= sum_j (sans(v) (tau_j) tilde(sans(e))^j - tau_j sum_k pi.alt_k^j (sans(v)) tilde(sans(e))^k) (sans(w))+ tau (nabla_(sans(v)) sans(w)). $ <7.59>

So if we define the covariant derivative of a one-form field to be

$ nabla_(sans(v)) (tau)= sum_k (sans(v) (tau_k) - sum_j tau_j pi.alt_k^j (sans(v))) tilde(sans(e))^k\, $ <7.60>

then the generalized product rule holds:

$ nabla_(sans(v)) (tau (sans(u)))=(nabla_(sans(v)) tau) (sans(u))+ tau (nabla_(sans(v)) sans(u)). $ <7.61>

Alternatively, assuming the generalized product rule forces the definition of covariant derivative of a one-form field.

As a program this is

```scheme
(define ((((covariant-derivative-1form Cartan) V) tau) U)
(let ((nabla_V ((covariant-derivative-vector Cartan) V)))
(- (V (tau U)) (tau (nabla_V U)))))
```

This program extends naturally to higher-rank form fields:

```scheme
(define ((((covariant-derivative-form Cartan) V) tau) vs)
(let ((k (get-rank tau))
(nabla_V ((covariant-derivative-vector Cartan) V)))
(- (V (apply tau vs))
(sigma (lambda (i)
(apply tau
(list-with-substituted-coord vs i
(nabla_V (list-ref vs i)))))
0 (- k 1)))))
```

== Change of Basis <sec-7.14>
The basis-independence of the covariant derivative implies a relationship between the Cartan forms in one basis and the equivalent Cartan forms in another basis. Recall (equation @4.13) that the basis vector fields of two bases are always related by a linear transformation. Let $sans(J)$ be the matrix of coefficient functions and let $sans(e)$ and $sans(e)'$ be down tuples of basis vector fields. then

$ sans(e) (sans(f))= sans(e)' (sans(f))sans(J) . $ <7.62>

We want the covariant derivative to be independent of basis. This will determine how the connection transforms with a change of basis:

$ nabla_(sans(v)) sans(u) (sans(f))= sum_i sans(e)_i (sans(f)) (sans(v) (sans(u)^i) + sum_j pi.alt_j^i (sans(v)) upright(u)^j) = sum_(i j k) sans(e)'_i (sans(f))sans(J)_j^i (sans(v) ((sans(J)^(-1))_k^j (sans(u)')^k) + sum_l pi.alt_k^j (sans(v)) (sans(J)^(-1))_l^k (sans(u)')^l) = sum_i sans(e)'_i (sans(f)) (sans(v) ((sans(u)')^i) + sum_(j k) sans(J)_j^i sans(v) ((sans(J)^(-1))_k^j) (sans(u)')^k + sum_(j k l) sans(J)_j^i pi.alt_k^j (sans(v)) (sans(J)^(-1))_l^k (sans(u)')^l) = sum_i sans(e)'_i (sans(f)) (sans(v) ((sans(u)')^i) + sum_j (pi.alt')_j^i (sans(v)) (sans(u)')^j) . $ <7.63>

The last line of equation @7.62 gives the formula for the covariant derivative we would have written down naturally in the primed coordinates; comparing with the next-to-last line, we see that

$ pi.alt' (sans(v))= sans(J v) (sans(J)^(-1))+ sans(J) pi.alt (sans(v))sans(J)^(-1) . $ <7.64>

This transformation rule is weird. It is not a linear transformation of $pi.alt$ because the first term is an offset that depends on $sans(v)$. So it is not required that $pi.alt' = 0$ when $pi.alt = 0$. Thus $pi.alt$ is not a tensor field. See Appendix @chap-appendix-c.

We can write equation @7.61 in terms of components

$ sans(e)_i (sans(f))= sum_j sans(e)'_j (sans(f))sans(J)_i^j . $ <7.65>

Let $sans(K) = sans(J)^(-1)$, so $sum_j sans(K)_j^i (sans(m))sans(J)_k^j (sans(m))= delta_k^i$. Then

$ pi.alt'_l^i (sans(v))= sum_j sans(J)_j^i sans(v) (sans(K)_l^j)+ sum_(j k) sans(J)_j^i pi.alt_k^j (sans(v))sans(K)_l^k . $ <7.66>

The transformation rule for $pi.alt$ is implemented in the following program:

```scheme
(define (Cartan-transform Cartan basis-prime)
(let ((basis (Cartan->basis Cartan))
(forms (Cartan->forms Cartan))
(prime-dual-basis (basis->1form-basis basis-prime))
(prime-vector-basis (basis->vector-basis basis-prime)))
(let ((vector-basis (basis->vector-basis basis))
(1form-basis (basis->1form-basis basis)))
(let ((J-inv (s:map/r 1form-basis prime-vector-basis))
(J (s:map/r prime-dual-basis vector-basis)))
(let ((omega-prime-forms
(procedure->1form-field
(lambda (v)
(+ (* J (v J-inv))
(* J (* (forms v) J-inv)))))))
(make-Cartan omega-prime-forms basis-prime))))))
```

The s:map/r procedure constructs a tuple of the same shape as its second argument whose elements are the result of applying the first argument to the corresponding elements of the second argument.

We can illustrate that the covariant derivative is independent of the coordinate system in a simple case, using rectangular and polar coordinates in the plane.#footnote[We will need a few definitions:

```scheme
(define R2-rect-basis (coordinate-system->basis R2-rect))
(define R2-polar-basis (coordinate-system->basis R2-polar))
(define-coordinates (up x y) R2-rect)
(define-coordinates (up r theta) R2-polar)
```] We can choose Christoffel coefficients for rectangular coordinates that are all zero:#footnote[Since the Christoffel coefficients are basis-dependent they are packaged with the basis.]

```scheme
(define R2-rect-Christoffel
(make-Christoffel
(let ((zero (lambda (m) 0)))
(down (down (up zero zero)
(up zero zero))
(down (up zero zero)
(up zero zero))))
R2-rect-basis))
```

With these Christoffel coefficients, parallel transport preserves the components relative to the rectangular basis. This corresponds to our usual notion of parallel in the plane. We will see later in Chapter 9 that these Christoffel coefficients are a natural choice for the plane. From these we obtain the Cartan form:#footnote[The code for making the Cartan forms is as follows:

```scheme
(define (Christoffel->Cartan Christoffel)
(let ((basis (Christoffel->basis Christoffel))
(Christoffel-symbols (Christoffel->symbols Christoffel)))
(make-Cartan
(* Christoffel-symbols (basis->1-form-basis basis))
basis)))
```]

```scheme
(define R2-rect-Cartan
(Christoffel->Cartan R2-rect-Christoffel))
```

And from equation @7.63 we can get the corresponding Cartan form for polar coordinates:

```scheme
(define R2-polar-Cartan
(Cartan-transform R2-rect-Cartan R2-polar-basis))
```

The vector field $partial\/partial theta$ generates a rotation in the plane (the same as circular). The covariant derivative with respect to $partial\/partial sans(x)$ of $partial\/partial theta$ applied to an arbitrary manifold function is:

```scheme
(define circular (- (* x d/dy) (* y d/x)))

(define f (literal-manifold-function 'f-rect R2-rect))
(define R2-rect-point ((point R2-rect) (up 'x0 'y0)))

(((((covariant-derivative R2-rect-Cartan) d/dx)
circular)
f)
R2-rect-point)
/(((partial 1) f-rect) (up x0 y0))/
```

Note that this is the same thing as $partial\/partial sans(y)$ applied to the function:

```scheme
((d/dy f) R2-rect-point)
/(((partial 1) f-rect) (up x0 y0))/
```

In rectangular coordinates, where the Christoffel coefficients are zero, the covariant derivative $nabla_(sans(u)) sans(v)$ is the vector whose coefficients are obtained by applying $sans(u)$ to the coefficients of $sans(v)$. Here, only one coefficient of $partial\/partial theta$ depends on $x$, the coefficient of $partial\/partial sans(y)$, and it depends linearly on $x$. So $nabla_(partial\/partial sans(x)) partial\/partial theta = partial\/partial sans(y)$. (See figure 7.1.)

#align(center)[#image("../assets/figures/fig-7-1.pdf", width: 92%)]

Note that we get the same answer if we use polar coordinates to compute the covariant derivative:

```scheme
(((((covariant-derivative R2-polar-Cartan) d/dx) J) f)
R2-rect-point)
/(((partial 1) f-rect) (up x0 y0))/
```

In rectangular coordinates the Christoffel coefficients are all zero; in polar coordinates there are nonzero coefficients, but the value of the covariant derivative is the same. In polar coordinates the basis elements vary with position, and the Christoffel coefficients compensate for this.

Of course, this is a pretty special situation. Let\'s try something more general:

```scheme
(define V (literal-vector-field 'V-rect R2-rect))
(define W (literal-vector-field 'W-rect R2-rect))

(((((- (covariant-derivative R2-rect-Cartan)
(covariant-derivative R2-polar-Cartan))
V)
W)
f)
R2-rect-point)
0
```

== Parallel Transport <sec-7.15>
We have defined parallel transport of a vector field along integral curves of another vector field. But not all paths are integral curves of a vector field. For example, paths that cross themselves are not integral curves of any vector field.

Here we extend the idea of a parallel transport of a stick to make sense for arbitrary paths on the manifold. Any path can be written as a map $γ$ from the real-line manifold to the manifold $sans(M)$. We construct a vector field over the map $sans(u)_gamma$ by parallel-transporting the stick to all points on the path $γ$.

For any path $γ$ there are locally directional derivatives of functions on $sans(M)$ defined by tangent vectors to the curve. The vector over the map $sans(w)_gamma = d gamma (partial\/partial sans(t))$ is a directional derivative of functions on the manifold $M$ along the path $γ$.

Our goal is to determine the equations satisfied by the vector field over the map $sans(u)_gamma$. Consider the parallel-transport $F_delta^(sans(w)_gamma) sans(u)_gamma$.#footnote[The argument $sans(w)_gamma$ makes sense because our parallel-transport operator never depended on the vector field tangent to the integral curve existing off of the curve. Because the connection is a form field (see equation @7.47), it does not depend on the value of its vector argument anywhere except at the point where it is being evaluated.

The argument $sans(u)_gamma$ is more difficult. We must modify equation @7.37:

$ F_delta^(sans(w)_gamma) sans(u)_gamma (sans(f)) (t)= sum_(i\,j) A_j^i (delta)u^j (t - delta)sans(e)_i^gamma (sans(f)) (t). $ <7.84>] So a vector field $sans(u)_gamma$ is parallel-transported to itself if and only if $sans(u)_gamma = F_delta^(sans(w)_gamma) sans(u)_gamma$. Restricted to a path, the equation analogous to equation @7.40 is

$ g (delta)= sum_i (u^i (t) - sum_j A_j^i (delta) u^j (t - delta)) sans(e)_i^gamma (sans(f)) (sans(t))\, $ <7.67>

where the coefficient function $u^i$ is now a function on the real-line parameter manifold and where we have rewritten the basis as a basis over the map $γ$.#footnote[You may have noticed that $t$ and $sans(t)$ appear here. The real-line manifold point $sans(t)$ has coordinate $t$.] Here $g (delta)= 0$ if $sans(u)_gamma$ is parallel-transported into itself.

Taking the derivative and setting $delta = 0$ we find

$ 0 = sum_i (D u^i (t) + sum_j^gamma pi.alt_j^i (sans(w)_gamma) (t) u^j (t)) sans(e)_i^gamma (sans(f)) (sans(t)). $ <7.68>

But this implies that

$ 0 = D u^i (t)+ sum_j^gamma pi.alt_j^i (sans(w)_gamma) (sans(t))u^j (t)\, $ <7.69>

an ordinary differential equation in the coefficients of $sans(u)_gamma$.

We can abstract these equations of parallel transport by inventing a covariant derivative over a map. We also generalize the time line to a source manifold $sans(N)$.

$ nabla_(sans(v))^gamma sans(u)_gamma (sans(f)) (sans(n))= sum_i (sans(v) (u^i) (sans(n)) + sum_j^gamma pi.alt_j^i (d gamma (sans(v))) (sans(n)) u^j (sans(n))) sans(e)_i^gamma (sans(f)) (sans(n))\, $ <7.70>

where the map $gamma : sans(N) arrow.r sans(M)\,sans(v)$ is a vector on $sans(N)$, $sans(u)_gamma$ is a vector over the map $γ$, $sans(f)$ is a function on $sans(M)$, and $sans(n)$ is a point in $sans(N)$. Indeed, if $sans(w)$ is a vector field on $sans(M)$, $sans(f)$ is a manifold function on $sans(M)$, and if $d gamma (sans(v))= sans(w)_gamma$ then

$ nabla_(sans(v))^gamma sans(u)_gamma (sans(f)) (sans(n))= nabla_(sans(w)) sans(u) (sans(f)) (gamma (sans(n))). $ <7.71>

This is why we are justified in calling $nabla_(sans(v))^gamma$ a covariant derivative.

Respecializing the source manifold to the real line, we can write the equations governing the parallel transport of $sans(u)_gamma$ as

$ nabla_(partial\/partial sans(t))^gamma sans(u)_gamma = 0 . $ <7.72>

We obtain the set of differential equations @7.68 for the coordinates of $sans(u)_gamma$, the vector over the map $γ$, that is parallel-transported along the curve $γ$:

$ D u^i (t)+ sum_j^gamma pi.alt_j^i (d gamma (partial\/partial t)) (sans(t))u^j (t)= 0 . $ <7.73>

Expressing the Cartan forms in terms of the Christoffel coefficients we obtain

$ D u^i (t)+ sum_(j\,k) Gamma_(j k)^i (gamma (sans(t)))D sigma^k (t)u^j (t)= 0 $ <7.74>

where $sigma = chi_(sans(M)) compose gamma compose chi_(sans(R))^(-1)$ are the coordinates of the path ($chi_(sans(M))$ and $chi_(sans(R))$ are the coordinate functions for $sans(M)$ and the real line).

== On a Sphere <sec-7.16>
Let\'s figure out what the equations of parallel transport of $sans(u)_gamma$, an arbitrary vector over the map $γ$, along an arbitrary path $γ$ on a sphere are. We start by constructing the necessary manifold.

```scheme
(define sphere (make-manifold S^2 2 3))
(define S2-spherical
(coordinate-system-at 'spherical 'north-pole sphere))
(define S2-basis
(coordinate-system->basis S2-spherical))
```

We need the path $γ$, which we represent as a map from the real line to $sans(M)$, and $sans(w)$, the parallel-transported vector over the map:

```scheme
(define gamma
(compose (point S2-spherical)
(up (literal-function 'alpha)
(literal-function 'beta))
(chart R1-rect)))
```

where alpha is the colatitude and beta is the longitude.

We also need an arbitrary vector field u#sub[gamma] over the map gamma. To make this we multiply the structure of literal component functions by the vector basis structure.

```scheme
(define basis-over-gamma
(basis->basis-over-map gamma S2-basis))

(define u_gamma
(* (up (compose (literal-function 'u^0)
(chart R1-rect))
(compose (literal-function 'u^1)
(chart R1-rect)))
(basis->vector-basis basis-over-gamma)))
```

We specify a connection by giving the Christoffel coefficients.#footnote[We will show later that these Christoffel coefficients are a natural choice for the sphere.]

```scheme
(define S2-Christoffel
(make-Christoffel
(let ((zero (lambda (point) 0)))
(down (down (up zero zero)
(up zero (/ 1 (tan theta))))
(down (up zero (/1 (tan theta)))
(up (-  (* (sin theta) (cos theta))) zero))))
S2-basis))

(define sphere-Cartan (Christoffel->Cartan S2-Christoffel))
```

Finally, we compute the residual of the equation @7.71 that governs parallel transport for this situation:#footnote[If we give covariant-derivative an extra argument, in addition to the Cartan form, the covariant derivative treats the extra argument as a map and transforms the Cartan form to work over the map.]

```scheme
(define-coordinates t R1-rect)

(s:map/r
(lambda (omega)
((omega
(((covariant-derivative sphere-Cartan gamma)
d/dt)
u_gamma))
((point R1-rect) 'tau)))
(basis->1form-basis basis-over-gamma))
/(up + (* -1/
/(sin (alpha tau))/
/(cos (alpha tau))/
/((D beta) tau)/
/(u^1 tau))/
/((D u^0) tau))/
/(/ (+ (* (u^0 tau) (cos (alpha tau)) ((D beta) tau))/
/(* ((D alpha) tau) (cos (alpha tau)) (u^1 tau))/
/(* ((D u^1) tau) (sin (alpha tau))))/
/(sign (alpha tau))))/
```

Thus the equations governing the evolution of the components of the transported vector are:

$ D u^0 (tau)= sin(alpha (tau))cos(alpha (tau))D beta (tau)u^1 (tau)\, $ <7.75>

$ D u^1 (tau)= - frac(cos(alpha (tau)), sin(alpha (tau))) (D beta (tau)u^0 (tau)+ D alpha (tau)u^1 (tau)). $ <7.76>

These equations describe the transport on a sphere, but more generally they look like

$ D u (tau)= f (sigma (tau)\,D sigma (tau))u (tau)\, $ <7.77>

where $σ$ is the tuple of the coordinates of the path on the manifold and $u$ is the tuple of the components of the vector. The equation is linear in $u$ and is driven by the path $σ$, as in a variational equation.

We now set this up for numerical integration. Let $s (t)=(t\,u (t))$ be a state tuple, combining the time and the coordinates of $sans(u)_gamma$ at that time. Then we define $g$:

$ g (s (t))= D s (t)=(1\,D u (t))\, $ <7.78>

where $D u (t)$ is the tuple of right-hand sides of equation @7.72.

== On a Great Circle <sec-7.17>
We illustrate parallel transport in a case where we should know the answer: we carry a vector along a great circle of a sphere. Given a path and Cartan forms for the manifold we can produce a state derivative suitable for numerical integration. Such a state derivative takes a state and produces the derivative of the state.

```scheme
(define (g gamma Cartan)
(let ((omega
((Cartan->forms
(Cartan->Cartan-over-map Cartan gamma))
((differential gamma) d/dt))))
(define ((the-state-derivative) state)
(let ((t ((point R1-rect) (ref state 0)))
(u (ref state 1)))
(up 1 (* -1 (omega t) u))))
the-state-derivative))
```

The path on the sphere will be the target of a map from the real line. We choose one that starts at the origin of longitudes on the equator and follows the great circle that makes a given tilt angle with the equator.

```scheme
(define ((transform tilt) coords)
(let ((colat (red coords 0))
(long (ref coord 1)))
(let ((x (* (sin colat) (cos long)))
(y (* (sin colat) (sign  long)))
(z (cos colat)))
(let ((vp ((rotate-x tilt) (up x y z))))
(let ((colatp (acos (ref vp 2)))
(longp (atan (ref vp 1) (ref vp 0))))
(up colatp long p))))))

(define (tilted-path tilt)
(define (coords t)
((transform tilt) (up :pi/2 t)))
(compose (point S2-spherical)
coords
(chart R1-rect)))
```

A southward pointing vector, with components (up 1 0), is transformed to an initial vector for the tilted path by multiplying by the derivative of the tilt transform at the initial point. We then parallel transport this vector by numerically integrating the differential equations. In this example we tilt by 1 radian, and we advance for $pi\/2$ radians. In this case we know the answer: by advancing by $pi\/2$ we walk around the circle a quarter of the way and at that point the transported vector points south:

```scheme
((state-advancer (g (tilted-path 1) sphere-Cartan))
(up 0 (* ((D (transform 1)) (up :pi/2 0)) (up 1 0)))
pi/2)
/up 1.5707963267948957/
/(up .9999999999997626 7.376378522558262e-13))/
```

However, if we transport by 1 radian rather than $pi\/2$, the numbers are not so pleasant, and the transported vector no longer points south:

```scheme
((state-advancer (g (tilted-path 1) (sphere-Cartan))
(up 0 (* ((D (transform 1)) (up :pi/2 0)) (up 1 0)))
1)
/(up 1. (up .7651502649360408 .9117920272006472))/
```

But the transported vector can be obtained by tilting the original southward-pointing vector after parallel-transporting along the equator:#footnote[A southward-pointing vector remains southward-pointing when it is parallel-transported along the equator. To do this we do not have to integrate the differential equations, because we know the answer.]

```scheme
(* ((D (transform 1)) (up :pi/2 1)) (up 1 0))
/(up .7651502649370375 .9117920272004736)/
```

== Geodesic Motion <sec-7.18>
In geodesic motion the velocity vector is parallel-transported by itself. Recall (equation @6.9) that the velocity is the differential of the vector $partial\/partial sans(t)$ over the map $γ$. The equation of geodesic motion is#footnote[The equation of a geodesic path is often said to be

$ nabla_(sans(v)) sans(v) = 0\, $ <7.83>

but this is nonsense. The geodesic equation is a constraint on the path, but the path does not appear in this equation. Further, the velocity along a path is not a vector field, so it cannot appear in either argument to the covariant derivative.

What is true is that a vector field $sans(v)$ all of whose integral curves are geodesics satisfies equation @7.77.]

$ nabla_(partial\/partial sans(t))^gamma d gamma (partial\/partial sans(t))= 0 . $ <7.79>

In coordinates, this is

$ D^2 sigma^i (t)+ sum_(j k) Gamma_(j k)^i (gamma (t))D sigma^j (t)D sigma^k (t)= 0\, $ <7.80>

where $sigma (t)$ is the coordinate path corresponding to the manifold path $γ$.

For example, let\'s consider geodesic motion on the surface of a unit sphere. We let gamma be a map from the real line to the sphere, with colatitude alpha and longitude beta, as before. The geodesic equation is:

```scheme
(show-expression
(((((covariant-derivative sphere-Cartan gamma)
d/dt)
((differential gamma) d/dt))
(chart S2-spherical))
((point R1-rect) 't0)))
```

$ vec(- cos(alpha (t 0))sin(alpha (t 0)) (D beta (t 0))^2+ D^2 alpha (t 0)frac(2 D beta (t 0)cos(alpha (t 0))D alpha (t 0), sin(alpha (t))) + D^2 beta (t 0)) $ <7.81>

The geodesic equation is the same as the Lagrange equation for free motion constrained to the surface of the unit sphere. The Lagrangian for motion on the sphere is the composition of the free-particle Lagrangian and the state transformation induced by the coordinate constraint:#footnote[The method of formulating a system with constraints by composing a free system with the state-space coordinate transformation that represents the constraints can be found in @sussman2001sicm, section 1.6.3. The procedure F-\>C takes a coordinate transformation and produces a corresponding transformation of Lagrangian state.]

```scheme
(define (Lfree s)
(* 1/2 (square (velocity s))))

(define (sphere->R3 s)
(let ((q (coordinate s)))
(let ((theta (ref q 0)) (phi (ref q 1)))
(up (* (sin theta) (cos phi))
(* (sin theta) (sin phi))
(cos theta)))))

(define Lsphere
(compose Lfree (F->C sphere->R3)))
```

Then the Lagrange equations are:

```scheme
(show-expression
(((Lagrange-equations Lsphere)
(up (literal-function 'alpha)
(literal-function 'beta)))
't))
```

$ mat(delim: "[", -(D beta (t))^2sin (alpha (t))cos(alpha (t))+ D^2 alpha (t)2 D alpha (t)D beta (t)sin(alpha (t))cos(alpha (t))+ D^2 beta (t) (sin(alpha (t)))^2) $ <7.82>

The Lagrange equations are true of the same paths as the geodesic equations. The second Lagrange equation is the second geodesic equation multiplied by $(sin(alpha (t)))^2$, and the Lagrange equations are arranged in a down tuple, whereas the geodesic equations are arranged in an up tuple.#footnote[The geodesic equations and the Lagrange equations are related by a contraction with the metric.] The two systems are equivalent unless $alpha (t)= 0$, where the coordinate system is singular.

=== Exercise 7.1: Hamiltonian Evolution <sec-7.18.1>
We have just seen that the Lagrange equations for the motion of a free particle constrained to the surface of a sphere determine the geodesics on the sphere. We can investigate the phenomenon in the Hamiltonian formulation. The Hamiltonian is obtained from the Lagrangian by a Legendre transformation:

```scheme
(define Hsphere
(Lagrangian->Hamiltonian Lsphere))
```

We can get the coordinate representation of the Hamiltonian vector field as follows:

```scheme
((phase-space-derivative Hsphere)
(up 't (up 'theta 'phi) (down 'p_theta 'p_phi)))
/(up 1/
/(up p_theta/
/(/ p_phi (expt (sin theta) 2)))/
/(down (/ (* (expt p_phi 2) (cos theta))/
/(expt (sin theta) 3))/
/0))/
```

The state space for Hamiltonian evolution has five dimensions: time, two dimensions of position on the sphere, and two dimensions of momentum:

```scheme
(define state-space
(make-manifold R^n 5))
(define states
(coordinate-system-at 'rectangular 'origin state-space))
(define-coordinates
(up t (up theta phi) (down p_theta p_phi))
states)
```

So now we have coordinate functions and the coordinate-basis vector fields and coordinate-basis one-form fields.

a. Define the Hamiltonian vector field as a linear combination of these fields.

b. Obtain the first few terms of the Taylor series for the evolution of the coordinates $(theta\,phi.alt)$ by exponentiating the Lie derivative of the Hamiltonian vector field.

=== Exercise 7.2: Lie Derivative and Covariant Derivative <sec-7.18.2>
How are the Lie derivative and the covariant derivative related?

a. Prove that for every vector field there exists a connection such that the covariant derivative for that connection and the given vector field is equivalent to the Lie derivative with respect to that vector field.

b. Show that there is no connection that for every vector field makes the Lie derivative the same as the covariant derivative with the chosen connection.

```scheme
(define-coordinates (up x y z) R3-rect)

(define theta (+ (* a dx) (* b dy) (* c dz)))

(define omega
(+ (* a (wedge dy dz))
(* b (wedge dz dx))
(* c (wedge dx dy))))

(define X (literal-vector-field 'X-rect R3-rect))
(define Y (literal-vector-field 'Y-rect R3-rect))
(define Z (literal-vector-field 'Z-rect R3-rect))
(define V (literal-vector-field 'V-rect R3-rect))
(define R3-rect-point
((point R3-rect) (up 'x0 'y0 'z0)))
```
]
