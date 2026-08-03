(defn F->directional-derivative
  [F]
  (fn [v]
    (fn [u]
      (fn [f]
        (fn [m]
          (letfn [(g [delta] (- ((u f) m) (((((F v) delta) u) f) m)))]
            ((D g) 0)))))))
