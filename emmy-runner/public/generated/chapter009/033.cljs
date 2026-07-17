(defn drop2
  [metric-tensor basis]
  (fn [tensor]
    (fn [v1 v2]
      (contract (fn [e1 w1]
                  (contract (fn [e2 w2] (* (metric-tensor v1 e1) (tensor w1 w2) (metric-tensor e2 v2))) basis))
                basis))))
