;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((d F) d:dct d:dz d:dx) an-event))
;; => (+ (((partial 0) By) (up ct0 x0 y0 z0)) (((partial 3) Ex) (up ct0 x0 y0 z0)) (* -1 (((partial 1) Ez) (up ct0 x0 y0 z0))))
