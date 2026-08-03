(defn curl
  [metric orthonormal-basis]
  (let [star (Hodge-star metric orthonormal-basis)
        sharp (raise metric orthonormal-basis)
        flat (lower metric)]
    (compose sharp star d flat)))
