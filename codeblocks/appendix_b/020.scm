(define H
  (literal-function
   'H
   (-> (UP Real (UP Real Real) (DOWN Real Real)) Real)))

(H s)
;; (H (up t (up x y) (down p_x p_y)))

((D H) s)
;; (down
;;  (((partial 0) H) (up t (up x y) (down p_x p_y)))
;;  (down (((partial 1 0) H) (up t (up x y) (down p_x p_y)))
;;        (((partial 1 1) H) (up t (up x y) (down p_x p_y))))
;;  (up (((partial 2 0) H) (up t (up x y) (down p_x p_y)))
;;      (((partial 2 1) H) (up t (up x y) (down p_x p_y)))))
