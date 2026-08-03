(defn test
  [coordsys Cartan]
  (let [m (typical-point coordsys)
        u (literal-vector-field 'u-coord coordsys)
        w (literal-vector-field 'w-coord coordsys)
        v (literal-vector-field 'v-coord coordsys)
        f (literal-manifold-function 'f-coord coordsys)]
    (let [nabla (covariant-derivative Cartan)]
      (- (((((curvature-from-transport Cartan) w v) u) f) m)
         (((((Riemann-curvature nabla) w v) u) f) m)))))

(simplify (test R2-rect general-Cartan-2))
;; => 0

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (test R2-polar general-Cartan-2))
;; => 0
