export function normalizeImportedOrgSource(source, stem = "") {
  const normalized = source
    .replace(/\(\/(\d)/g, "(/ $1")
    .replaceAll(
      "(make fake-vector-field V-over-mu n)",
      "(make-fake-vector-field V-over-mu n)",
    )
    .replaceAll(
      "(compose (literal-function 'f-rect R2->R) R2-rect-chi)",
      "(compose (literal-function 'f-rect R2->R) R2-rect-chi))",
    )
    .replaceAll(
      "(define R2-rect-point (R2-rect-chi-inverse (up 'x0 'y0))))",
      "(define R2-rect-point (R2-rect-chi-inverse (up 'x0 'y0)))",
    )
    .replaceAll(
      "(define SR-vector-basis (coordinate-system->vector-basis SR))",
      "(define SR-vector-basis (coordinate-system->vector-basis SR))\n"
        + "(define SR-basis (coordinate-system->basis SR))",
    )
    .replaceAll(
      "(define S2-basis\n(coordinate-system->basis S2-spherical))",
      "(define S2-basis\n(coordinate-system->basis S2-spherical))\n"
        + "(define-coordinates (up theta phi) S2-spherical)",
    )
    .replaceAll(
      "(define T d/dtheta)\n(define U d/dphi)\n"
        + "(define m ((point S2-spherical) (up 'theta0 'phi0)))\n"
        + "(define Cartan (Christoffel->Cartan S2-Christoffel))\n"
        + "(define nabla (covariant-derivative Cartan))",
      "(define T d/dtheta)\n(define U d/dphi)\n"
        + "(define m ((point S2-spherical) (up 'theta0 'phi0)))\n"
        + "(define Cartan (Christoffel->Cartan S2-Christoffel))\n"
        + "(define nabla (covariant-derivative Cartan))\n"
        + "(define omega (literal-1form-field 'omega-sphere S2-spherical))\n"
        + "(define f (literal-manifold-function 'f S2-spherical))",
    )
    .replaceAll(
      "(define (Force charge F 4velocity component)",
      "(define eta-inverse (invert g-Minkowski SR-basis))\n\n"
        + "(define (Force charge F 4velocity component)",
    )
    .replaceAll("((wedge dr dtheta) ab)", "((wedge dr dtheta) a b)")
    .replaceAll("basis-1>form-basis", "basis->1form-basis")
    .replaceAll("(define circular (- (* x d/dy) (* y d/x)))",
                "(define circular (- (* x d/dy) (* y d/dx)))")
    .replaceAll("literal-manifold function", "literal-manifold-function")
    .replaceAll("literal-oneform-field", "literal-1form-field")
    .replaceAll(
      "(literal-manifold-function f S2-spherical)",
      "(literal-manifold-function 'f S2-spherical)",
    )
    .replaceAll("of the the following definitions", "of the following definitions")
    .replaceAll(
      "             (* ((D f) x) (b x)))))\n       (make-operator coordinatized-v))",
      "             (* ((D f) x) (b x))))\n         (make-operator coordinatized-v))",
    )
    .replaceAll(
      "(define Jz (- (* x d/dy) (* y d/dx)))",
      "(define-coordinates (up x y z) R3-rect)\n"
        + "(define Jz (- (* x d/dy) (* y d/dx)))",
    )
    .replaceAll(
      "(((+ (commutator e x e y) e z) f) SO3-point)",
      "(define Euler-angles (coordinate-system-at 'Euler 'Euler-patch SO3))\n"
        + "(define-coordinates (up theta phi psi) Euler-angles)\n"
        + "(define SO3-point ((point Euler-angles) (up 'theta 'phi 'psi)))\n"
        + "(define f (literal-manifold-function 'f-Euler Euler-angles))\n\n"
        + "(define e_x\n"
        + "  (+ (* (cos phi) d/dtheta)\n"
        + "     (* -1 (/ (* (sin phi) (cos theta)) (sin theta)) d/dphi)\n"
        + "     (* (/ (sin phi) (sin theta)) d/dpsi)))\n"
        + "(define e_y\n"
        + "  (+ (/ (* (cos phi) (cos theta) d/dphi) (sin theta))\n"
        + "     (* (sin phi) d/dtheta)\n"
        + "     (* -1 (/ (cos phi) (sin theta)) d/dpsi)))\n"
        + "(define e_z d/dphi)\n\n"
        + "(((+ (commutator e_x e_y) e_z) f) SO3-point)",
    )
    .replaceAll("(((+ (commutator e y e z) e x) f) SO3-point)",
                "(((+ (commutator e_y e_z) e_x) f) SO3-point)")
    .replaceAll("(((+ (commutator e z e x) e y) f) SO3-point)",
                "(((+ (commutator e_z e_x) e_y) f) SO3-point)")
    // A coordinate one-form and its matching coordinate vector are dual.
    // The historical output comment incorrectly reports dx(d/dx) as zero.
    .replaceAll(
      "((dx d/dx) R2-rect-point)\n       ;; 0",
      "((dx d/dx) R2-rect-point)\n       ;; 1",
    )
    .replaceAll("illlustrate", "illustrate")
    .replaceAll("(metric:invert metric-tensor basis)", "(metric:invert metric basis)")
    .replaceAll("(let ((T ij ((drop2 g spacetime-rect-basis) (Tdust 'rho))))",
                "(let ((T_ij ((drop2 g spacetime-rect-basis) (Tdust 'rho))))")
    .replaceAll("(trace2down g spacetime-rect-basis) T ij",
                "(trace2down g spacetime-rect-basis) T_ij")
    .replaceAll("(T ij d/dt d/dt)", "(T_ij d/dt d/dt)")
    // The book's errata records the terms omitted from this historical
    // evaluator result. Repair the temporary imported source so both emitted
    // language editions show the actual value.
    .replaceAll(
      ";; (* 1/2 (expt :c 4) rho)",
      ";; (+ (* 1/2 (expt :c 4) rho)\n"
        + ";;    (* 2 (expt :c 2) rho (V (up x y z)))\n"
        + ";;    (* 2 rho (expt (V (up x y z)) 2)))",
    )
    .replaceAll(
      "(define (Newton-metric M G c V)",
      "(define-coordinates (up t x y z) spacetime-rect)\n"
        + "(define spacetime-rect-basis (coordinate-system->basis spacetime-rect))\n\n"
        + "(define (Newton-metric M G c V)",
    )
    .replaceAll(
      "(define (geodesic-equation+X-residuals eps X)",
      "(define Cartan\n"
        + "  (Christoffel->Cartan\n"
        + "   (metric->Christoffel-2\n"
        + "    (Schwarzschild-metric 'M 'G ':c)\n"
        + "    (coordinate-system->basis spacetime-sphere))))\n\n"
        + "(define (geodesic-equation+X-residuals eps X)",
    )
    .replaceAll(
      "(define nabla\n  (covariant-derivative\n   (Newton-connection 'M 'G ':c\n                      (literal-function 'V (-> (UP Real Real Real) Real)))))",
      "(define V (literal-function 'V (-> (UP Real Real Real) Real)))\n\n"
        + "(define nabla\n  (covariant-derivative\n   (Newton-connection 'M 'G ':c V)))",
    )
    .replaceAll(
      "    #+begin_src scheme\n(define A\n  (make-SR-frame 'A home",
      "    #+begin_src scheme\n"
        + "(define home\n"
        + "  ((frame-maker base-frame-point base-frame-chart)\n"
        + "   'home 'home))\n\n"
        + "(define A\n"
        + "  (make-SR-frame 'A home",
    );

  if (stem === "errata") return normalized;
  return normalized
    .replaceAll("(make-manifold S^2 2 3)", "(make-manifold S^2-type 2 3)")
    .replaceAll(
      "(((((covariant-derivative R2-polar-Cartan) d/dx) J) f)",
      "(((((covariant-derivative R2-polar-Cartan) d/dx) circular) f)",
    );
}
