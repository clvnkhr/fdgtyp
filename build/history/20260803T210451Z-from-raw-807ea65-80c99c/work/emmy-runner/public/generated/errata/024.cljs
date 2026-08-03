;; page 159
(defn g-Minkowski
  [u v]
  (+ (* -1 (square 'c) (dct u) (dct v)) (* (dx u) (dx v)) (* (dy u) (dy v)) (* (dz u) (dz v))))

(def SR-vector-basis (down (* (/ 1 'c) d:dct) d:dx d:dy d:dz))

(def SR-oneform-basis (up (* 'c dct) dx dy dz))

(def SR-basis (make-basis SR-vector-basis SR-oneform-basis))

(defn Faraday
  [Ex Ey Ez Bx By Bz]
  (+ (* Ex 'c (wedge dx dct))
     (* Ey 'c (wedge dy dct))
     (* Ez 'c (wedge dz dct))
     (* Bx (wedge dy dz))
     (* By (wedge dz dx))
     (* Bz (wedge dx dy))))

(defn Maxwell
  [Ex Ey Ez Bx By Bz]
  (+ (* -1 'c Bx (wedge dx dct))
     (* -1 'c By (wedge dy dct))
     (* -1 'c Bz (wedge dz dct))
     (* Ex (wedge dy dz))
     (* Ey (wedge dz dx))
     (* Ez (wedge dx dy))))

(defn J
  [charge-density Ix Iy Iz]
  (- (* (/ 1 'c) (+ (* Ix dx) (* Iy dy) (* Iz dz))) (* charge-density 'c dct)))

(((d F) (* (/ 1 'c) d:dct) d:dy d:dz) an-event)

(((d F) (* (/ 1 'c) d:dct) d:dz d:dx) an-event)

(((d F) (* (/ 1 'c) d:dct) d:dx d:dy) an-event)

(((- (d (SR-star F)) (* 4 'pi (SR-star four-current))) (* (/ 1 'c) d:dct) d:dy d:dz) an-event)

(((- (d (SR-star F)) (* 4 'pi (SR-star four-current))) (* (/ 1 'c) d:dct) d:dz d:dx) an-event)

(((- (d (SR-star F)) (* 4 'pi (SR-star four-current))) (* (/ 1 'c) d:dct) d:dx d:dy) an-event)
