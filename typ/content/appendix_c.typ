// Generated from ../../fdg-book/scheme/org/appendix_c.org.
// Re-run scripts/convert-org-to-typst.mjs to refresh.
#import "../lib.typ": fdg-chapter, fdg-figure, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX

#fdg-chapter("Tensors", numbered: true, eq-prefix: "C", ref-label: "chap-appendix-c")[
There are a variety of objects that have meaning independent of any particular basis. Examples are form fields, vector fields, covariant derivative, and so on. We call objects that are independent of basis #emph[geometric objects]. Some of these are functions that take other geometric objects, such as vector fields and form fields, as arguments and produce further geometric objects. We refer to such functions as #emph[geometric functions]. We want the laws of physics to be independent of the coordinate systems. How we describe an experiment should not affect the result. If we use only geometric objects in our descriptions then this is automatic.

A geometric function of vector fields and form fields that is linear in each argument with functions as multipliers is called a #emph[tensor]. For example, let $sans(T)$ be a geometric function of a vector field and form field that gives a real-number result at the manifold point $sans(m)$. Then

$ sans(T) (sans(f) sans(u) + sans(g) sans(v)\,bold(omega)) &= sans(f) thin sans(T) (sans(u)\,bold(omega))+ sans(g) sans(T) (sans(v)\,bold(omega)) $ <C.1>

$ sans(T) (sans(u)\,sans(f) bold(omega) + sans(g) bold(theta)) &= sans(f) thin sans(T) (sans(u)\,bold(omega))+ sans(g) sans(T) (sans(u)\,bold(theta))\, $ <C.2>

where $sans(u)$ and $sans(v)$ are vector fields, $bold(omega)$ and $bold(theta)$ are form fields, and $sans(f)$ and $sans(g)$ are manifold functions. That a tensor is linear over functions and not just constants is important.

The multilinearity over functions implies that the components of the tensor transform in a particularly simple way as the basis is changed. The components of a real-valued geometric function of vector fields and form fields are obtained by evaluating the function on a set of basis vectors and their dual form basis. In our example,

$ sans(T)_j^i = sans(T) (e_j\,tilde(e)^i)\, $ <C.3>

for basis vector fields $sans(e)_j$ and dual form fields $tilde(e)^i$. On the left, $sans(T)_j^i$ is a function of place (manifold point); on the right, $sans(T)$ is a function of a vector field and a form field that returns a function of place.

Now we consider a change of basis, $sans(e) (sans(f))= sans(e)' (sans(f))sans(J)$ or

$ sans(e)_i (sans(f))= sum_j sans(e)' (sans(f))sans(J)_i^j\, $ <C.4>

Where $sans(J)$ typically depends on place. The corresponding dual basis transforms as

$ tilde(sans(e))^i (sans(v))= sum_j sans(K)_j^i tilde(sans(e))^(' j) (sans(v))\, $ <C.5>

where $sans(K) = sans(J)^(-1)$ or $sum_j sans(K)_j^i (sans(m))sans(J)_k^j (sans(m)) = delta_k^i$.

Because the tensor is multilinear over functions, we can deduce that the tensor components in the two bases are related by, in our example,

$ sans(T)_j^i = sum_(k l) sans(K)_k^i sans(T)_l^(' k) sans(J)_j^l\, $ <C.6>

or

$ sans(T)_j^(' i) = sum_(k l) sans(J)_k^i sans(T)_l^k sans(K)_j^l . $ <C.7>

Tensors are a restricted set of mathematical objects that are geometric, so if we restrict our descriptions to tensor expressions they are #emph[prima facie] independent of the coordinates used to represent them. So if we can represent the physical laws in terms of tensors we have built in the coordinate-system independence.

Let\'s test whether the geometric function $sans(R)$, which we have called the Riemann tensor (see equation @8.2), is indeed a tensor field. A real-valued geometric function is a tensor if it is linear (over the functions) in each of its arguments. We can try it for 3-dimensional rectangular coordinates:

```scheme
(let ((cs R3-rect))
  (let ((u (literal-vector-field 'u-coord cs))
        (v (literal-vector-field 'v-coord cs))
        (w (literal-vector-field 'w-coord cs))
        (x (literal-vector-field 'x-coord cs))
        (omega (literal-1form-field 'omega-coord cs))
        (nu (literal-1form-field 'nu-coord cs))
        (f (literal-manifold-function 'f-coord cs))
        (g (literal-manifold-function 'g-coord cs))
        (nabla (covariant-derivative (literal-Cartan 'G cs)))
        (m (typical-point cs)))
    (let ((F (Riemann nabla)))
      ((up (- (F (+ (* f omega) (* g nu)) u v w)
              (+ (* f (F omega u v w)) (* g (F nu u v w))))
           (- (F omega (+ (* f u) (* g x)) v w)
              (+ (* f (F omega u v w)) (* g (F omega x v w))))
           (- (F omega v (+ (* f u) (* g x)) w)
              (+ (* f (F omega v u w)) (* g (F omega v x w))))
           (- (F omega v w (+ (* f u) (* g x)))
              (+ (* f (F omega v w u)) (* g (F omega v w x)))))
       m))))
;; (up 0 0 0 0)
```

Now that we are convinced that the Riemann tensor is indeed a tensor, we know how its components change under a change of basis. Let

$ sans(R)_(j k l)^i = sans(R) (tilde(sans(e))^i\,sans(e)_j\,sans(e)_k\,sans(e)_l)\, $ <C.8>

then

$ sans(R)_(j k l)^i = sum_(m n p q) sans(K)_m^i sans(R)_(n p q)^(' m) sans(J)_j^n sans(J)_k^p sans(J)_l^q\, $ <C.9>

or

$ sans(R)_(j k l)^(' i) = sum_(m n p q) sans(J)_m^i sans(R)_(n p q)^m sans(K)_j^n sans(K)_k^p sans(K)_l^q . $ <C.10>

Whew!

It is easy to generalize these formulas to tensors with general arguments. We have formulated the general tensor test as a program #raw(lang:"scheme", "tensor-test") that takes the procedure #raw(lang:"scheme", "T") to be tested, a list of argument types, and a coordinate system to be used. It tests each argument for linearity (over functions). If the function passed as T is a tensor, the result will be a list of zeros.

```scheme
(tensor-test (Riemann (covariant-derivative (literal-Cartan 'G
                                                            R3-rect)))
             '(1form vector vector vector)
             R3-rect)
;; (0 0 0 0)
```

and so does the torsion (see equation @8.21):

```scheme
(tensor-test (torsion (covariant-derivative (literal-Cartan 'G
                                                            R3-rect)))
             '(1form vector vector)
             R3-rect)
;; (up 0 0 0)
```

But not all geometric functions are tensors. The covariant derivative is an interesting and important case. The function $sans(F)$, defined by

$ sans(F) (bold(omega)\,sans(u)\,sans(v))= bold(omega) (nabla_(sans(u)) sans(v))\, $ <C.11>

is a geometric object, since the result is independent of the coordinate system used to represent the $nabla$. For example:

```scheme
(define ((F nabla) omega u v)
  (omega ((nabla u) v)))
(((-
   (F (covariant-derivative
       (Christoffel->Cartan (metric->Christoffel-2
                             (coordinate-system->metric S2-spherical)
                             (coordinate-system->basis S2-spherical)))))
   (F (covariant-derivative
       (Christoffel->Cartan
        (metric->Christoffel-2
         (coordinate-system->metric S2-stereographic)
         (coordinate-system->basis S2-stereographic))))))
  (literal-1form-field 'omega S2-spherical)
  (literal-vector-field 'u S2-spherical)
  (literal-vector-field 'v S2-spherical))
 ((point S2-spherical) (up 'theta 'phi)))
;; 0
```

But it is not a tensor field:

```scheme
(tensor-test (F (covariant-derivative (literal-Cartan 'G R3-rect)))
             '(1form vector vector)
             R3-rect)
;; (0 0 MESS)
```

This result tells us that the function $sans(F)$ is linear in its first two arguments but not in its third argument.

That the covariant derivative is not linear over functions in the second vector argument is easy to understand. The first vector argument takes derivatives of the coefficients of the second vector argument, so multiplying these coefficients by a manifold function changes the derivative.
]
