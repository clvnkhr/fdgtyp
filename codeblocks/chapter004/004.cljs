(def v (* (up (literal-manifold-function 'b↑0 R2-rect) (literal-manifold-function 'b↑1 R2-rect)) e-vector-basis))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((e-dual-basis v) R2-rect-point))
;; => (up (b↑0 (up x0 y0)) (b↑1 (up x0 y0)))
