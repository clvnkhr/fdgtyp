;; page 159
(define (g-Minkowski u v)
  (+ (* -1 (square ':c) (dct u) (dct v))
     (* (dx u) (dx v))
     (* (dy u) (dy v))
     (* (dz u) (dz v))))

;; page 160
(define SR-vector-basis (down (* (/ 1 ':c) d/dct) d/dx d/dy d/dz))
(define SR-1form-basis (up (* ':c dct) dx dy dz))
(define SR-basis (make-basis SR-vector-basis SR-1form-basis))

(define (Faraday Ex Ey Ez Bx By Bz)
  (+ (* Ex ':c (wedge dx dct))
     (* Ey ':c (wedge dy dct))
     (* Ez ':c (wedge dz dct))
     (* Bx (wedge dy dz))
     (* By (wedge dz dx))
     (* Bz (wedge dx dy))))

;; page 161
(define (Maxwell Ex Ey Ez Bx By Bz)
  (+ (* -1 ':c Bx (wedge dx dct))
     (* -1 ':c By (wedge dy dct))
     (* -1 ':c Bz (wedge dz dct))
     (* Ex (wedge dy dz))
     (* Ey (wedge dz dx))
     (* Ez (wedge dx dy))))

(define (J charge-density Ix Iy Iz)
  (- (* (/ 1 ':c) (+ (* Ix dx) (* Iy dy) (* Iz dz)))
     (* charge-density 'c dct)))

;; page 163
(((d F) (* (/ 1 ':c) d/dct) d/dy d/dz) an-event)
(((d F) (* (/ 1 ':c) d/dct) d/dz d/dx) an-event)
(((d F) (* (/ 1 ':c) d/dct) d/dx d/dy) an-event)

;; page 164
(((- (d (SR-star F)) (* 4 :pi (SR-star 4-current)))
  (* (/ 1 ':c) d/dct) d/dy d/dz)
 an-event)

(((- (d (SR-star F)) (* 4 :pi (SR-star 4-current)))
  (* (/ 1 ':c) d/dct) d/dz d/dx)
 an-event)

(((- (d (SR-star F)) (* 4 :pi (SR-star 4-current)))
  (* (/ 1 ':c) d/dct) d/dx d/dy)
 an-event)
