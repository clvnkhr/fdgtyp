(defn Lfree [s] (* (/ 1 2) (square (velocity s))))

(defn sphere->R3
  [s]
  (let [q (coordinate s)]
    (let [theta (ref q 0)
          phi (ref q 1)]
      (up (* (sin theta) (cos phi)) (* (sin theta) (sin phi)) (cos theta)))))

(def Lsphere (compose Lfree (F->C sphere->R3)))
