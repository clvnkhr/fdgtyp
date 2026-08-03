(defn contract
  [proc basis]
  (let [vector-basis (basis->vector-basis basis)
        oneform-basis (basis->oneform-basis basis)]
    (sumr proc vector-basis oneform-basis)))
