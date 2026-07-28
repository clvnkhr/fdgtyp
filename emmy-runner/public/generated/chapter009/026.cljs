(defn prime-meridian [r omega] (compose (point spacetime-sphere) (fn [t] (up t r (* omega t) 0)) (chart R1-rect)))
