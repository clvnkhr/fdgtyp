(defn f
  [radius]
  (let [area (* 4 pi (square radius)) volume (* (/ 4 3) pi (cube radius))] (/ volume area)))

(f 3)
;; => 0.9999999999999999
