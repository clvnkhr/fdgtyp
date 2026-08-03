(defn L
  [v]
  (letfn [(l [h] (fn [state] (* ((D h) state) ((g v) state))))]
    (make-operator l)))
