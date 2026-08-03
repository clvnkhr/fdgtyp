(defn Lfree [mass] (fn [state] (* (/ 1 2) mass (square (velocity state)))))
