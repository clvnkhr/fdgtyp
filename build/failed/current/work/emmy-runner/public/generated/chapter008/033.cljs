(defn cyclic-sum [f] (fn [x y z] (+ (f x y z) (f y z x) (f z x y))))
