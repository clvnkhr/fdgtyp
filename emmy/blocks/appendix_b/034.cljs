(defn f [x y] (* (square x) (cube y)))

(defn g [x y] (up (f x y) y))

(defn h [x y] (f (f x y) y))
