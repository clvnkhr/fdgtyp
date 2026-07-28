(defn g-sphere
  [R]
  (fn [u v] (* (square R) (+ (* (dtheta u) (dtheta v)) (* (compose (square sin) theta) (dphi u) (dphi v))))))
