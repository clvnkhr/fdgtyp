(defn covariant-derivative-vector
  [omega coordsys order]
  (let [Phi (phi coordsys order)] (F->directional-derivative (F-parallel omega Phi coordsys))))

(defn F-parallel
  [omega phi coordsys]
  (fn [v]
    (fn [delta]
      (fn [u]
        (fn [f]
          (fn [m]
            (let [basis (coordinate-system->basis coordsys)]
              (let [etilde (basis->oneform-basis basis)
                    e (basis->vector-basis basis)]
                (let [m0 (((phi v) (- delta)) m)]
                  (let [Aij (+ (identity-like ((omega v) m0)) (* delta (- ((omega v) m0))))
                        ui ((etilde u) m0)]
                    (* ((e f) m) (* Aij ui))))))))))))
