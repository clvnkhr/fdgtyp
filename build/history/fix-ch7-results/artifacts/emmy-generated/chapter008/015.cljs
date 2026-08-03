(defn Ricci [nabla basis] (fn [u v] (contract (fn [ei wi] ((Riemann nabla) wi u ei v)) basis)))
