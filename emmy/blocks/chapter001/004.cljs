(defn F->C
  [F]
  (fn [state] (up (state->t state) (F state) (+ (((partial 0) F) state) (* (((partial 1) F) state) (velocity state))))))
