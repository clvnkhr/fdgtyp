(defn test
  [coordsys Cartan]
  (let [m (typical-point coordsys)
        u (literal-vector-field 'u-coord coordsys)
        w (literal-vector-field 'w-coord coordsys)
        v (literal-vector-field 'v-coord coordsys)
        f (literal-manifold-function 'f-coord coordsys)]
    (let [nabla (covariant-derivative Cartan)]
      (- (((((curvature-from-transport Cartan) w v) u) f) m) (((((Riemann-curvature nabla) w v) u) f) m)))))
