(defn pseudosphere
  [q]
  (let [t (ref q 0) theta (ref q 1)] (up (* (sech t) (cos theta)) (* (sech t) (sin theta)) (- t (tanh t)))))
