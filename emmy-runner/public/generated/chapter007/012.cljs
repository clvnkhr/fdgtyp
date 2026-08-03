(def X (literal-vector-field 'X-rect R3-rect))

(def Y (literal-vector-field 'Y-rect R3-rect))

(def Z (literal-vector-field 'Z-rect R3-rect))

(def a (literal-manifold-function 'alpha R3-rect))

(def b (literal-manifold-function 'beta R3-rect))

(def c (literal-manifold-function 'gamma R3-rect))

(def omega (+ (* a (wedge dx dy)) (* b (wedge dy dz)) (* c (wedge dz dx))))

(defn L1 [X] (fn [omega] (+ ((interior-product X) (d omega)) (d ((interior-product X) omega)))))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((- (((Lie-derivative X) omega) Y Z) (((L1 X) omega) Y Z))
            ((point R3-rect) (up 'x0 'y0 'z0))))
;; => 0
