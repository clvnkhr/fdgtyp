(defn general-boost2
  [direction v:c]
  (fn [four-tuple-prime]
    (let [delta-ct-prime (four-tuple->ct four-tuple-prime)
          delta-x-prime (four-tuple->space four-tuple-prime)]
      (let [betasq (square v:c)]
        (let [bx (dot-product direction delta-x-prime)
              gamma (/ 1 (sqrt (- 1 betasq)))]
          (let [alpha (- gamma 1)]
            (let [delta-ct (* gamma (+ delta-ct-prime (* bx v:c)))
                  delta-x (+ (* gamma v:c direction delta-ct-prime) delta-x-prime (* alpha direction bx))]
              (make-four-tuple delta-ct delta-x))))))))
