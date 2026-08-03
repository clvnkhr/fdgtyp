(defn lower
  [metric]
  (fn [u]
    (letfn [(omega [v] (metric v u))]
      (procedure->oneform-field omega))))
