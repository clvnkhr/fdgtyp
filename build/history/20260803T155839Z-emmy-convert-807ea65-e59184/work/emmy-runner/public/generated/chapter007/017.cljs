(defn Cartan-transform
  [Cartan basis-prime]
  (let [basis (Cartan->basis Cartan)
        forms (Cartan->forms Cartan)
        prime-dual-basis (basis->oneform-basis basis-prime)
        prime-vector-basis (basis->vector-basis basis-prime)]
    (let [vector-basis (basis->vector-basis basis)
          oneform-basis (basis->oneform-basis basis)]
      (let [J-inv (mapr oneform-basis prime-vector-basis)
            J (mapr prime-dual-basis vector-basis)]
        (let [omega-prime-forms (procedure->oneform-field
                                  (fn [v] (+ (* J (v J-inv)) (* J (* (forms v) J-inv)))))]
          (make-Cartan omega-prime-forms basis-prime))))))
