// Generated from ../../fdg-book/scheme/org/chapter002.org.
// Re-run scripts/convert-org-to-typst.mjs to refresh.
#import "../lib.typ": fdg-chapter, fdg-figure, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX

#fdg-chapter("Manifolds", numbered: true, eq-prefix: "2", ref-label: "chap-2")[
A #emph[manifold] is a generalization of our idea of a smooth surface embedded in Euclidean space. For an #emph[n]-dimensional manifold, around every point there is a simply-connected open set, the #emph[coordinate patch], and a one-to-one continuous function, the #emph[coordinate function] or #emph[chart], mapping every point in that open set to a tuple of #emph[n] real numbers, the #emph[coordinates]. In general, several charts are needed to label all points on a manifold. It is required that if a region is in more than one coordinate patch then the coordinates are consistent in that the function mapping one set of coordinates to another is continuous (and perhaps differentiable to some degree). A consistent system of coordinate patches and coordinate functions that covers the entire manifold is called an #emph[atlas].

An example of a 2-dimensional manifold is the surface of a sphere or of a coffee cup. The space of all configurations of a planar double pendulum is a more abstract example of a 2-dimensional manifold. A manifold that looks locally Euclidean may not look like Euclidean space globally: for example, it may not be simply connected. The surface of the coffee cup is not simply connected, because there is a hole in the handle for your fingers.

An example of a coordinate function is the function that maps points in a simply-connected open neighborhood of the surface of a sphere to the tuple of latitude and longitude#footnote[The open set for a latitude-longitude coordinate system cannot include either pole (because longitude is not defined at the poles) or the 180° meridian (where the longitude is discontinuous). Other coordinate systems are needed to cover these places.]. If we want to talk about motion on the Earth, we can identify the space of configurations to a 2-sphere (the surface of a 3-dimensional ball). The map from the 2-sphere to the 3-dimensional coordinates of a point on the surface of the Earth captures the shape of the Earth.

Two angles specify the configuration of the planar double pendulum. The manifold of configurations is a torus, where each point on the torus corresponds to a configuration of the double pendulum. The constraints, such as the lengths of the pendulum rods, are built into the map between the generalized coordinates of points on the torus and the arrangements of masses in 3-dimensional space.

There are computational objects that we can use to model manifolds. For example, we can make an object that represents the plane#footnote[The expression `R^n` gives only one kind of manifold. We also have spheres `S^n` and `SO3`.]

```scheme
(define R2 (make-manifold R^n 2))
```

and give it the name `R2`. One useful patch of the plane is the one that contains the origin and covers the entire plane#footnote[The word `origin` is an arbitrary symbol here. It labels a predefined patch in `R^n` manifolds.].

```scheme
(define U (patch 'origin R2))
```

== Coordinate Functions <sec-2.1>
A coordinate function $chi$ maps points in a coordinate patch of a manifold to a coordinate tuple#footnote[In the text that follows we will use sans-serif names, such as $sans(f)$, $sans(v)$, $sans(m)$, to refer to objects defined on the manifold. Objects that are defined on coordinates (tuples of real numbers) will be named with symbols like $f$, $v$, $x$.]:

$ x = chi (m)\, $ <2.1>

where $x$ may have a convenient tuple structure. Usually, the coordinates are arranged as an \"up structure\"; the coordinates are selected with superscripts:

$ x^i = chi^i (m). $ <2.2> The number of independent components of $x$ is the dimension of the manifold.

Assume we have two coordinate functions $chi$ and $chi'$. The coordinate transformation from $chi'$ coordinates to $chi$ coordinates is just the composition $chi compose chi^(' - 1)$ , where $chi^(' - 1)$ is the functional inverse of $chi'$ (see figure 2.1).

#fdg-figure(image("../assets/figures/fig-2-1.pdf", width: 49.2%), [Here there are two overlapping coordinate patches that are the domains of the two coordinate functions $chi$ and $chi'$. It is possible to represent manifold points in the overlap using either coordinate system. The coordinate transformation from $chi'$ coordinates to $chi$ coordinates is just the composition $chi compose chi'^(-1)$.])

 We assume that the coordinate transformation is continuous and differentiable to any degree we require.

Given a coordinate system `coordsys` for a patch on a manifold the procedure that implements the function $chi$ that gives coordinates for a point is (`chart coordsys`). The procedure that implements the inverse map that gives a point for coordinates is (`point coordsys`).

We can have both rectangular and polar coordinates on a patch of the plane identified by the origin:#footnote[The rectangular coordinates are good for the entire plane, but the polar coordinates are singular at the origin because the angle is not defined. Also, the patch for polar coordinates must exclude one ray from the origin, because of the angle variable.]#footnote[We can avoid explicitly naming the patch:

```scheme
(define R2-rect (coordinate-system-at 'rectangular 'origin R2))
```]

```scheme
;; Some charts on the patch U
(define R2-rect (coordinate-system 'rectangular U))
(define R2-polar (coordinate-system 'polar/cylindrical U))
```

For each of the coordinate systems above we obtain the coordinate functions and their inverses:

```scheme
(define R2-rect-chi (chart R2-rect))
(define R2-rect-chi-inverse (point R2-rect))
(define R2-polar-chi (chart R2-polar))
(define R2-polar-chi-inverse (point R2-polar))
```

The coordinate transformations are then just compositions. The polar coordinates of a rectangular point are:

```scheme
((compose R2-polar-chi R2-rect-chi-inverse) (up 'x0 'y0))
;;(up (sqrt (+ (expt x0 2) (expt y0 2))) (atan y0 x0))
```

And the rectangular coordinates of a polar point are:

```scheme
((compose R2-rect-chi R2-polar-chi-inverse) (up 'r0 'theta0))
;;(up (* r0 (cos theta0)) (* r0 (sin theta0)))
```

And we can obtain the Jacobian of the polar-to-rectangular transformation by taking its derivative#footnote[See Appendix @chap-appendix-b for an introduction to tuple arithmetic and a discussion of derivatives of functions with structured input or output.]:

```scheme
((D (compose R2-rect-chi R2-polar-chi-inverse)) (up 'r0 'theta0))
;;(down (up (cos theta0) (sin theta0))
;;      (up (* -1 r0 (sin theta0)) (* r0 (cos theta0))))
```

== Manifold functions <sec-2.2>
Let $sans(f)$ be a real-valued function on a manifold $sans(M)$: this function maps points $sans(m)$ on the manifold to real numbers.

This function has a coordinate representation $f_chi$ with respect to the coordinate function $chi$ (see figure 2.2):

#fdg-figure(image("../assets/figures/fig-2-2.pdf", width: 49.2%), [The coordinate function $chi$ maps points on the manifold in the coordinate patch to a tuple of coordinates. A function $f$ on the manifold $M$ can be represented in coordinates by a function $f_chi = f compose chi^(-1)$.])

 $ f_chi = sans(f) compose chi^(-1) . $ <2.3> Both the coordinate representation $f_chi$ and the tuple $x$ depend on the coordinate system, but the value $f_chi (x)$ is independent of coordinates: $ f_chi (x)=(sans(f) compose chi^(-1)) (chi (sans(m)))= sans(f) (sans(m)). $ <2.4> The subscript $chi$ may be dropped when it is unambiguous.

For example, in a 2-dimensional real manifold the coordinates of a manifold point $m$ are a pair of real numbers, $ (x\,y)= chi (sans(m))\, $ <2.5> and the manifold function $sans(f)$ is represented in coordinates by a function $f$ that takes a pair of real numbers and produces a real number $ f : sans(R)^2 arrow.r sans(R) f :(x\,y)arrow.r f (x\,y). $ <2.6> We define our manifold function $ sans(f) : sans(M) arrow.r sans(R) sans(f) : sans(m) arrow.r (f compose chi) (sans(m)). $ <2.7>

== #emph[Manifold Functions Are Coordinate Independent] <sec-2.3>
We can illustrate the coordinate independence with a program. We will show that an arbitrary manifold function $sans(f)$, when defined by its coordinate representation in rectangular coordinates, has the same behavior when applied to a manifold point independent of whether the point is specified in rectangular or polar coordinates.

We define a manifold function by specifying its behavior in rectangular coordinates#footnote[Alternatively, we can define the same function in a shorthand

```scheme
(define f (literal-manifold-function 'f-rect R2-rect))
```]:

```scheme
(define f (compose (literal-function 'f-rect R2->R) R2-rect-chi))
```

where `R2->R` is a signature for functions that map an up structure of two reals to a real:

```scheme
(define R2->R (-> (UP Real Real) Real))
```

We can specify a typical manifold point using its rectangular coordinates:

```scheme
(define R2-rect-point (R2-rect-chi-inverse (up 'x0 'y0)))
```

We can describe the #emph[same point] using its polar coordinates:

```scheme
(define corresponding-polar-point
  (R2-polar-chi-inverse (up (sqrt (+ (square 'x0) (square 'y0)))
                            (atan 'y0 'x0))))
```

`(f R2-rect-point)` and `(f corresponding-polar-point)` agree, even though the point has been specified in two different coordinate systems:

```scheme
(f R2-rect-point)
;;(f-rect (up x0 y0))

(f corresponding-polar-point)
;;(f-rect (up x0 y0))
```

== Naming Coordinate Functions <sec-2.4>
To make things a bit easier, we can give names to the individual coordinate functions associated with a coordinate system. Here we name the coordinate functions for the `R2-rect` coordinate system `x` and `y` and for the `R2-polar` coordinate system `r` and `theta`.

```scheme
(define-coordinates (up x y) R2-rect)
(define-coordinates (up r theta) R2-polar)
```

This allows us to extract the coordinates from a point, independent of the coordinate system used to specify the point.

```scheme
(x (R2-rect-chi-inverse (up 'x0 'y0)))
;;x0

(x (R2-polar-chi-inverse (up 'r0 'theta0)))
;;(* r0 (cos theta0))

(r (R2-polar-chi-inverse (up 'r0 'theta0)))
;;r0

(r (R2-rect-chi-inverse (up 'x0 'y0)))
;;(sqrt (+ (expt x0 2) (expt y0 2)))

(theta (R2-rect-chi-inverse (up 'x0 'y0)))
;;(atan y0 x0)
```

We can work with the coordinate functions in a natural manner, defining new manifold functions in terms of them#footnote[This is actually a nasty, but traditional, abuse of notation. An expression like $cos(r)$ can either mean the cosine of the angle $r$ (if $r$ is a number), or the composition $cos compose r$ (if $r$ is a function). In our system `(cos r)` behaves in this way---either computing the cosine of `r` or being treated as `(compose cos r)` depending on what `r` is.]:

```scheme
(define h (+ (* x (square r)) (cube y)))

(h R2-rect-point)
;;(+ (expt x0 3) (* x0 (expt y0 2))
;;   (expt y0 3))
```

We can also apply `h` to a point defined in terms of its polar coordinates:

```scheme
(h (R2-polar-chi-inverse (up 'r0 'theta0)))
;;(+ (* (expt r0 3) (expt (sin theta0) 3))
;;   (* (expt r0 3) (cos theta0)))
```

== Exercise 2.1: Curves <sec-2.5>
A curve may be specified in different coordinate systems. For example, a cardioid constructed by rolling a circle of radius a around another circle of the same radius is described in polar coordinates by the equation $ r = 2 a (1 + cos(theta)). $

We can convert this to rectangular coordinates by evaluating the residual in rectangular coordinates.

```scheme
(define-coordinates (up r theta) R2-polar)
((- r (* 2 'a (+ 1 (cos theta)))) ((point R2-rect) (up 'x 'y)))
;;(/ (+ (* -2 a x)
;;      (* -2 a (sqrt (+ (expt x 2) (expt y 2))))
;;      (expt x 2) (expt y 2))
;;   (sqrt (+ (expt x 2) (expt y 2))))
```

The numerator of this expression is the equivalent residual in rectangular coordinates. If we rearrange terms and square it we get the traditional formula for the cardioid $ (x^2 + y^2 - 2 a x)^2= 4 a^2 (x^2 + y^2). $

#strong[a.]
The rectangular coordinate equation for the Lemniscate of Bernoulli is $ (x^2 + y^2)^2= 2 a^2 (x^2 - y^2). $ Find the expression in polar coordinates.

#strong[b.]
Describe a helix space curve in both rectangular and cylindrical coordinates. Use the computer to show the correspondence. Note that we provide a cylindrical coordinate system on the manifold $upright(bold(R)) 3$ for you to use. It is called `R3-cyl`\; with coordinates `(r, theta, z)`.

== Exercise 2.2: Stereographic Projection <sec-2.6>
A stereographic projection is a correspondence between points on the unit sphere and points on the plane cutting the sphere at its equator. (See figure 2.3.)

#fdg-figure(image("../assets/figures/fig-2-3.pdf", width: 49.2%), [For each point on the sphere (except for its north pole) a line is drawn from the north pole through the point and extending to the equatorial plane. The corresponding point on the plane is where the line intersects the plane. The rectangular coordinates of this point on the plane are the Riemann coordinates of the point on the sphere. The points on the plane can also be specified with polar coordinates $(rho, theta)$ and the points on the sphere are specified both by Riemann coordinates and the traditional colatitude and longitude $(phi, lambda)$.])



The coordinate system for points on the sphere in terms of rectangular coordinates of corresponding points on the plane is `S2-Riemann`#footnote[The plane with the addition of a point at infinity is conformally equivalent to the sphere by this correspondence. This correspondence is called the Riemann sphere, in honor of the great mathematician Bernard Riemann (1826--1866), who made major contributions to geometry.]. The procedure `(chart S2-Riemann)` gives the rectangular coordinates on the plane for every point on the sphere, except for the North Pole. The procedure `(point S2-Riemann)` gives the point on the sphere given rectangular coordinates on the plane. The usual spherical coordinate system on the sphere is `S2-spherical`.

We can compute the colatitude and longitude of a point on the sphere corresponding to a point on the plane with the following incantation:

```scheme
((compose (chart S2-spherical)
          (point S2-Riemann)
          (chart R2-rect)
          (point R2-polar))
 (up 'rho 'theta))
;;(up (acos (/ (+ -1 (expt rho 2))
;;             (+ +1 (expt rho 2))))
;;    theta)
```

Perform an analogous computation to get the polar coordinates of the point on the plane corresponding to a point on the sphere given by its colatitude and longitude.
]
