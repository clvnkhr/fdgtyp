(defn make-state [sigma u] (vector sigma u))

(defn Sigma [state] (ref state 0))

(defn U-select [state] (ref state 1))
