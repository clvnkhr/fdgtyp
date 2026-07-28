(define (proposed-solution t)
  (* 'a (cos (+ (* 'omega t) 'phi))))

(->tex
 (((Lagrange-equations (L-harmonic 'm 'k))
   proposed-solution)
  't))
