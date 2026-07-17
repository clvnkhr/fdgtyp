(def compose (fn [f g] (fn [x] (f (g x)))))

((compose square sin) 2)
;; => 0.826821810431806
