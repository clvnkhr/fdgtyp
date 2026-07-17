(defn components->vector-field
  [components coordsys]
  (letfn [(v [f] (compose (* (D (compose f (point coordsys))) components) (chart coordsys)))]
    (procedure->vector-field v)))
