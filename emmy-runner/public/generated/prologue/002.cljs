(defn Gamma [w] (fn [t] (up t (w t) ((D w) t))))
