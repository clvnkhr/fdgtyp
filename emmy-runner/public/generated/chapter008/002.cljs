(defn Riemann [nabla] (fn [omega u w v] (omega (((Riemann-curvature nabla) w v) u))))
