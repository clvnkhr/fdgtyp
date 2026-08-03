(def L2 (metric->Lagrangian (literal-metric 'm R2-rect) R2-rect))

(defn L1 [state] (sqrt (* 2 (L2 state))))
