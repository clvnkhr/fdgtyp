(let ((B-origin-home-coords
       ((chart home)
        ((point B)
         (make-SR-coordinates B (up 'ct 0 0 0))))))
  (/ (ref B-origin-home-coords 1)
     (ref B-origin-home-coords 0)))
;; (/ (+ va/c vb/c) (+ 1 (* va/c vb/c)))
