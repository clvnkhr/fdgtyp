(defn sphere->R3
  [R]
  (fn [state]
    (let [q (coordinate state)]
      (let [theta (ref q 0)
            phi (ref q 1)]
        (up (* R (sin theta) (cos phi)) (* R (sin theta) (sin phi)) (* R (cos theta)))))))
