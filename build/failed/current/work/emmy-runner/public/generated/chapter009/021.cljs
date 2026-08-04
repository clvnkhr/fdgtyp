(defn Tdust
  [rho]
  (letfn [(T [w1 w2] (* rho (w1 d:dt) (w2 d:dt)))]
    T))
