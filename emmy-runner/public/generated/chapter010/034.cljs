;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((- (d (SR-star F)) (* 4 'pi (SR-star four-current))) d:dct d:dx d:dy) an-event))
;; => (/ (+ (* c (((partial 0) Ez) (up ct0 x0 y0 z0))) (* -1 c (((partial 1) By) (up ct0 x0 y0 z0))) (* c (((partial 2) Bx) (up ct0 x0 y0 z0))) (* 4 pi (Iz (up ct0 x0 y0 z0)))) c)
