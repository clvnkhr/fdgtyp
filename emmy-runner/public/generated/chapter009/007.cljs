(defn metric->Lagrangian
  [metric coordsys]
  (letfn [(L [state]
            (let [q (ref state 1)
                  qd (ref state 2)]
              (def v (components->vector-field (fn [m] qd) coordsys))
              ((* (/ 1 2) (metric v v)) ((point coordsys) q))))]
    L))
