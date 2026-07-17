(defn Lc
  [mass metric coordsys]
  (let [e (coordinate-system->vector-basis coordsys)] (fn [[_ x v]] ((L2 mass metric) ((point coordsys) x) (* e v)))))
