(defn covariant-derivative-oneform
  [Cartan]
  (fn [V]
    (fn [tau]
      (fn [U]
        (let [nabla_V ((covariant-derivative-vector Cartan) V)]
          (- (V (tau U)) (tau (nabla_V U))))))))
