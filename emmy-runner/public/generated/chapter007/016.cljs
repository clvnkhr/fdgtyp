(defn covariant-derivative-form
  [Cartan]
  (fn [V]
    (fn [tau]
      (fn [vs]
        (let [k (get-rank tau)
              nabla_V ((covariant-derivative-vector Cartan) V)]
          (- (V (apply tau vs))
             (sigma (fn [i] (apply tau (list-with-substituted-coord vs i (nabla_V (nth vs i)))))
                    0
                    (- k 1))))))))
