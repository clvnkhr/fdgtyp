(defn FLRW-metric
  [c k R]
  (define-coordinates (up t r theta phi) spacetime-sphere)
  (let [a (/ (square (compose R t)) (- 1 (* k (square r))))
        b (square (* (compose R t) r))]
    (letfn [(g [v1 v2]
              (+ (* -1 (square c) (dt v1) (dt v2))
                 (* a (dr v1) (dr v2))
                 (* b (+ (* (dtheta v1) (dtheta v2)) (* (square (sin theta)) (dphi v1) (dphi v2))))))]
      g)))
