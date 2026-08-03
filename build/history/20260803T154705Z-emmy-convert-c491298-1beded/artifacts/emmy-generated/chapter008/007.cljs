(defn Dsigma [v] (fn [state] ((v Chi) (Chi-inverse (Sigma state)))))
