;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((- (d (SR-star F)) (* 4 'pi (SR-star four-current))) d:dct d:dz d:dx) an-event))
;; => (/ (+ (* c (((partial 0) Ey) (up ct0 x0 y0 z0))) (* -1 c (((partial 3) Bx) (up ct0 x0 y0 z0))) (* c (((partial 1) Bz) (up ct0 x0 y0 z0))) (* 4 pi (Iy (up ct0 x0 y0 z0)))) c)
