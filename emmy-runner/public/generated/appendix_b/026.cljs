(defn f [v] (let [x (ref v 0) y (ref v 1)] (* (square x) (cube y))))

(defn g [v] (let [x (ref v 0) y (ref v 1)] (up (f v) y)))

(def h (compose f g))
