(defn sum? [expression] (and (pair? expression) (= (first expression) '+)))

(sum? '(+ 3 a))
;; => true

(sum? '(* 3 a))
;; => false
