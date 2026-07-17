(let ((x (literal-function 'x))
      (y (literal-function 'y))
      (f (literal-function 'f))
      (E1 (Euler-Lagrange-operator L1)))
  ((- (compose E1
               (Gamma (up (compose x f)
                          (compose y f))
                      4))
      (* (compose E1
                  (Gamma (up x y) 4)
                  f)
         (D f)))
   't))
;; (down 0 0)
