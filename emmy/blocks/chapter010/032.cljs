;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((- (d (SR-star F)) (* 4 'pi (SR-star four-current))) d:dct d:dy d:dz) an-event))
;; => (/ (+ (* c (((partial 0) Ex) (up ct0 x0 y0 z0))) (* -1 c (((partial 2) Bz) (up ct0 x0 y0 z0))) (* c (((partial 3) By) (up ct0 x0 y0 z0))) (* 4 pi (Ix (up ct0 x0 y0 z0)))) c)
