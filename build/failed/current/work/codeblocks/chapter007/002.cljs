(defn Lie-directional
  [coordsys order]
  (let [Phi (phi coordsys order)] (F->directional-derivative (F-Lie Phi))))

(defn F-Lie [phi] (fn [v] (fn [delta] (pushforward-vector ((phi v) delta) ((phi v) (- delta))))))

(defn phi
  [coordsys order]
  (fn [v]
    (fn [delta]
      (fn [m] ((point coordsys) (series:sum (((exp (* delta v)) (chart coordsys)) m) order))))))
