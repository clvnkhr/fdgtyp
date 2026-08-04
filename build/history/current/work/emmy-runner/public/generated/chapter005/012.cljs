(def a (literal-manifold-function 'a-rect R3-rect))

(def b (literal-manifold-function 'b-rect R3-rect))

(def c (literal-manifold-function 'c-rect R3-rect))

(def flux-through-boundary-element (+ (* a (wedge dy dz)) (* b (wedge dz dx)) (* c (wedge dx dy))))
