(defn torsion-vector [nabla] (fn [u v] (- (- ((nabla u) v) ((nabla v) u)) (commutator u v))))

(defn torsion [nabla] (fn [omega u v] (omega ((torsion-vector nabla) u v))))
