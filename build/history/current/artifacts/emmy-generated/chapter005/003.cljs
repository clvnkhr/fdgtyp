(def u (+ (* 'u↑0 d:dx) (* 'u↑1 d:dy) (* 'u↑2 d:dz)))

(def v (+ (* 'v↑0 d:dx) (* 'v↑1 d:dy) (* 'v↑2 d:dz)))

(def w (+ (* 'w↑0 d:dx) (* 'w↑1 d:dy) (* 'w↑2 d:dz)))

(simplify (((wedge dx dy dz) u v w) R3-rect-point))
