(def X (literal-vector-field 'X-rect R3-rect))

(def Y (literal-vector-field 'Y-rect R3-rect))

(def Z (literal-vector-field 'Z-rect R3-rect))

(def a (literal-manifold-function 'alpha R3-rect))

(def b (literal-manifold-function 'beta R3-rect))

(def c (literal-manifold-function 'gamma R3-rect))

(def omega (+ (* a (wedge dx dy)) (* b (wedge dy dz)) (* c (wedge dz dx))))

(defn L1 [X] (fn [omega] (+ ((interior-product X) (d omega)) (d ((interior-product X) omega)))))

((- (((Lie-derivative X) omega) Y Z) (((L1 X) omega) Y Z)) ((point R3-rect) (up 'x0 'y0 'z0)))
;; => (- (- (+ (* (+ (* (+ (* (Y-rect↑2 (up x0 y0 z0)) (Z-rect↑0 (up x0 y0 z0)))
;;    (* -1 (Z-rect↑2 (up x0 y0 z0)) (Y-rect↑0 (up x0 y0 z0)))) (((partial 0)
;;    gamma) (up x0 y0 z0))) (* (+ (* (gamma (up x0 y0 z0))... <result truncated:
;;    42116 characters total; inspect in the web runner>

0
;; => 0
