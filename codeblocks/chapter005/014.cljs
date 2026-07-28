(def X (literal-vector-field 'X-rect R3-rect))

(def Y (literal-vector-field 'Y-rect R3-rect))

(def Z (literal-vector-field 'Z-rect R3-rect))

(((- production-in-volume-element (d flux-through-boundary-element)) X Y Z) R3-rect-point)
;; => (- (* (+ (((partial 0) a-rect) (up x0 y0 z0)) (((partial 1) b-rect) (up x0
;;    y0 z0)) (((partial 2) c-rect) (up x0 y0 z0))) 0.5 (+ (* (X-rect↑0 (up x0 y0
;;    z0)) (+ (* (Y-rect↑1 (up x0 y0 z0)) (Z-rect↑2 (up... <result truncated:
;;    22253 characters total; inspect in the web runner>

0
;; => 0
