(defn covariant-derivative-vector
  [Cartan]
  (fn [V]
    (fn [U]
      (fn [f]
        (let [basis (Cartan->basis Cartan)
              Cartan-forms (Cartan->forms Cartan)]
          (let [vector-basis (basis->vector-basis basis)
                oneform-basis (basis->oneform-basis basis)]
            (let [u-components (oneform-basis U)]
              (* (vector-basis f) (+ (V u-components) (* (Cartan-forms V) u-components))))))))))
