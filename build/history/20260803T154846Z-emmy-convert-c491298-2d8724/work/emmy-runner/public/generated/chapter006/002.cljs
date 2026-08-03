(defn differential [mu] (fn [v] (fn [f] (v (compose f mu)))))
