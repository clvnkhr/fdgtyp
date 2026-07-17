(defn general-boost
  [beta]
  (fn [xi-p]
    (let [gamma (expt (- 1 (square beta)) (/ -1 2))]
      (let [factor (/ (- gamma 1) (square beta))]
        (let [xi-p-time (four-tuple->ct xi-p)
              xi-p-space (four-tuple->space xi-p)]
          (let [beta-dot-xi-p (dot-product beta xi-p-space)]
            (make-four-tuple (* gamma (+ xi-p-time beta-dot-xi-p))
                             (+ (* gamma beta xi-p-time) xi-p-space (* factor beta beta-dot-xi-p)))))))))
