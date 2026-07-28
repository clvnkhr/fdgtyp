(define a (literal-manifold-function 'a-rect R3-rect))
(define b (literal-manifold-function 'b-rect R3-rect))
(define c (literal-manifold-function 'c-rect R3-rect))

(define flux-through-boundary-element
  (+ (* a (wedge dy dz))
     (* b (wedge dz dx))
     (* c (wedge dx dy))))
