(defn Du
  [v]
  (fn [state] (let [CF (Cartan->forms general-Cartan-2)] (* -1 ((CF v) (Chi-inverse (Sigma state))) (U-select state)))))
