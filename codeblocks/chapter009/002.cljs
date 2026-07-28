(defn raise
  [metric basis]
  (let [gi (invert metric basis)] (fn [omega] (contract (fn [e i w↑i] (* (gi omega w↑i) e i)) basis))))
