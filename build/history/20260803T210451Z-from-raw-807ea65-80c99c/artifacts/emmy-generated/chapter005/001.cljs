(define-coordinates (up x y z) R3-rect)

(def u (+ (* 'u↑0 d:dx) (* 'u↑1 d:dy)))

(def v (+ (* 'v↑0 d:dx) (* 'v↑1 d:dy)))

(((wedge dx dy) u v) R3-rect-point)
;; => (+ (* u↑0 v↑1) (* -1 v↑0 u↑1))
