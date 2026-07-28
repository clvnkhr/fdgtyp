(def eta-inverse (invert g-Minkowski SR-basis))

(defn Force
  [charge F four-velocity component]
  (* -1
     charge
     (contract (fn [a b] (contract (fn [e w] (* (w four-velocity) (F e a) (eta-inverse b component))) SR-basis))
               SR-basis)))
