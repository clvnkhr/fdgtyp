(defn evolution [order] (fn [delta-t v] (fn [f] (fn [m] (series:sum (((exp (* delta-t v)) f) m) order)))))
