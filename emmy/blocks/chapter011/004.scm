(define ((general-boost beta) xi-p)
  (let ((gamma (expt (- 1 (square beta)) -1/2)))
    (let ((factor (/ (- gamma 1) (square beta))))
      (let ((xi-p-time (4tuple->ct xi-p))
            (xi-p-space (4tuple->space xi-p)))
        (let ((beta-dot-xi-p (dot-product beta xi-p-space)))
          (make-4-tuple
           (* gamma (+ xi-p-time beta-dot-xi-p))
           (+ (* gamma beta xi-p-time)
              xi-p-space
              (* factor beta beta-dot-xi-p))))))))
