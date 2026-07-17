(define ((extended-rotation R) xi)
  (make-4tuple
   (4tuple->ct xi)
   (R (4tuple->space xi))))
