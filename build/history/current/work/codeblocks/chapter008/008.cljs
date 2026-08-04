(defn g [v] (fn [state] (make-state ((Dsigma v) state) ((Du v) state))))
