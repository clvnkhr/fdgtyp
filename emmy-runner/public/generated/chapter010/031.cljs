;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((- (d (SR-star F)) (* 4 'pi (SR-star four-current))) d:dx d:dy d:dz) an-event))
;; => (+ (* -4 pi (rho (up ct0 x0 y0 z0))) (((partial 1) Ex) (up ct0 x0 y0 z0)) (((partial 2) Ey) (up ct0 x0 y0 z0)) (((partial 3) Ez) (up ct0 x0 y0 z0)))
