(defn Riemann-curvature [nabla] (fn [w v] (- (commutator (nabla w) (nabla v)) (nabla (commutator w v)))))
