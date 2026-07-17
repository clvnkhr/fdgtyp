(defn Tperfect-fluid
  [rho p c metric]
  (define-coordinates (up t r theta phi) spacetime-sphere)
  (let [basis (coordinate-system->basis spacetime-sphere)
        inverse-metric (invert metric basis)]
    (letfn [(T [w1 w2]
              (+ (* (+ (compose rho t) (/ (compose p t) (square c))) (w1 d:dt) (w2 d:dt))
                 (* (compose p t) (inverse-metric w1 w2))))]
      T)))
