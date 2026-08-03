(defn L2 [mass metric] (fn [place velocity] (* (/ 1 2) mass ((metric velocity velocity) place))))
