(defn curvature-from-transport
  [Cartan]
  (fn [w v]
    (fn [u]
      (fn [f]
        (let [CF (Cartan->forms Cartan)
              basis (Cartan->basis Cartan)
              fi (basis->oneform-basis basis)
              ei (basis->vector-basis basis)]
          (* (ei f)
             (+ (* (- (- (w (CF v)) (v (CF w))) (CF (commutator w v))) (fi u))
                (- (* (CF w) (* (CF v) (fi u))) (* (CF v) (* (CF w) (fi u)))))))))))
