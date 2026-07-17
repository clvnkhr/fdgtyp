(defn trace2down
  [metric basis]
  (fn [tensor]
    (let [inverse-metric-tensor (invert metric basis)]
      (contract (fn [v1 w1] (contract (fn [v w] (* (inverse-metric-tensor w1 w) (tensor v v1))) basis)) basis))))
