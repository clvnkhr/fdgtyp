(defn sphere->R3
  [R]
  (fn [[_ [theta phi]]] (up (* R (sin theta) (cos phi)) (* R (sin theta) (sin phi)) (* R (cos theta)))))
