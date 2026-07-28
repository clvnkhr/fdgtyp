(defn coordinatize
  [v coordsys]
  (letfn [(coordinatized-v [f] (fn [x] (let [b (compose (v (chart coordsys)) (point coordsys))] (* ((D f) x) (b x)))))]
    (make-operator coordinatized-v)))
