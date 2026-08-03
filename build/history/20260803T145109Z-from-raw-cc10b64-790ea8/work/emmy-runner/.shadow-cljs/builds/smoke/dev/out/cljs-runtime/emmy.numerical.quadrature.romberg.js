goog.provide('emmy.numerical.quadrature.romberg');
/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the open interval $(a, b)$ by applying Richardson extrapolation to
 *   successive integral estimates from the Midpoint rule.
 * 
 *   Returns estimates formed by combining $n, 3n, 9n, ...$ slices, geometrically
 *   increasing by a factor of 3 with each estimate. This factor of 3 is because,
 *   internally, the Midpoint method is able to recycle old function evaluations
 *   through this factor of 3.
 * 
 *   Romberg integration converges quite fast by cancelling one error term in the
 *   taylor series expansion of $f$ with each examined term. If your function is
 *   _not_ smooth this may cause you trouble, and you may want to investigate a
 *   lower-order method.
 * 
 *   ### Optional arguments:
 * 
 *   If supplied, `:n` (default 1) specifies the initial number of slices to use.
 */
emmy.numerical.quadrature.romberg.open_sequence = (function emmy$numerical$quadrature$romberg$open_sequence(var_args){
var G__56546 = arguments.length;
switch (G__56546) {
case 3:
return emmy.numerical.quadrature.romberg.open_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.quadrature.romberg.open_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.romberg.open_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.quadrature.romberg.open_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.quadrature.romberg.open_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__56569){
var map__56570 = p__56569;
var map__56570__$1 = cljs.core.__destructure_map(map__56570);
var opts = map__56570__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56570__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
if(typeof n === 'number'){
} else {
throw (new Error("Assert failed: (number? n)"));
}

return emmy.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$4(emmy.numerical.quadrature.midpoint.midpoint_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,opts),(3),(2),(2));
}));

(emmy.numerical.quadrature.romberg.open_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed interval $[a, b]$ by applying Richardson extrapolation to
 *   successive integral estimates from the Trapezoid rule.
 * 
 *   Returns estimates formed by combining $n, 2n, 4n, ...$ slices, geometrically
 *   increasing by a factor of 2 with each estimate.
 * 
 *   Romberg integration converges quite fast by cancelling one error term in the
 *   taylor series expansion of $f$ with each examined term. If your function is
 *   _not_ smooth this may cause you trouble, and you may want to investigate a
 *   lower-order method.
 * 
 *   ### Optional arguments:
 * 
 *   If supplied, `:n` (default 1) specifies the initial number of slices to use.
 */
emmy.numerical.quadrature.romberg.closed_sequence = (function emmy$numerical$quadrature$romberg$closed_sequence(var_args){
var G__56574 = arguments.length;
switch (G__56574) {
case 3:
return emmy.numerical.quadrature.romberg.closed_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.quadrature.romberg.closed_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.romberg.closed_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.quadrature.romberg.closed_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.quadrature.romberg.closed_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__56576){
var map__56577 = p__56576;
var map__56577__$1 = cljs.core.__destructure_map(map__56577);
var opts = map__56577__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56577__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
if(typeof n === 'number'){
} else {
throw (new Error("Assert failed: (number? n)"));
}

return emmy.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$4(emmy.numerical.quadrature.trapezoid.trapezoid_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,opts),(2),(2),(2));
}));

(emmy.numerical.quadrature.romberg.closed_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Higher-level abstraction over `closed-sequence` and `open-sequence`. Identical
 *   to those functions (see their docstrings), but internally chooses either
 *   implementation based on the interval specified inside of `opts`.
 * 
 *   Defaults to the same behavior as `open-sequence`.
 */
emmy.numerical.quadrature.romberg.romberg_sequence = (function emmy$numerical$quadrature$romberg$romberg_sequence(var_args){
var G__56580 = arguments.length;
switch (G__56580) {
case 3:
return emmy.numerical.quadrature.romberg.romberg_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.quadrature.romberg.romberg_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.romberg.romberg_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.quadrature.romberg.romberg_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.quadrature.romberg.romberg_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,opts){
var seq_fn = ((emmy.numerical.quadrature.common.closed_QMARK_(emmy.numerical.quadrature.common.interval(opts)))?emmy.numerical.quadrature.romberg.closed_sequence:emmy.numerical.quadrature.romberg.open_sequence);
return (seq_fn.cljs$core$IFn$_invoke$arity$4 ? seq_fn.cljs$core$IFn$_invoke$arity$4(f,a,b,opts) : seq_fn.call(null,f,a,b,opts));
}));

(emmy.numerical.quadrature.romberg.romberg_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns an estimate of the integral of `f` over the open interval $(a, b)$
 *   generated by applying Richardson extrapolation to successive integral
 *   estimates from the Midpoint rule.
 * 
 *   Considers $1, 3, 9 ... 3^n$ windows into $(a, b)$ for each successive
 *   estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See [[open-sequence]] for more information about Romberg integration, caveats
 *   that might apply when using this integration method and information on the
 *   optional args in `opts` that customize this function's behavior.
 */
emmy.numerical.quadrature.romberg.open_integral = emmy.numerical.quadrature.common.make_integrator_fn(emmy.numerical.quadrature.midpoint.single_midpoint,emmy.numerical.quadrature.romberg.open_sequence);
/**
 * Returns an estimate of the integral of `f` over the closed interval $[a, b]$
 *   generated by applying Richardson extrapolation to successive integral
 *   estimates from the Trapezoid rule.
 * 
 *   Considers $1, 2, 4 ... 2^n$ windows into $[a, b]$ for each successive
 *   estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See [[closed-sequence]] for more information about Romberg integration, caveats
 *   that might apply when using this integration method and information on the
 *   optional args in `opts` that customize this function's behavior.
 */
emmy.numerical.quadrature.romberg.closed_integral = emmy.numerical.quadrature.common.make_integrator_fn(emmy.numerical.quadrature.trapezoid.single_trapezoid,emmy.numerical.quadrature.romberg.closed_sequence);

//# sourceMappingURL=emmy.numerical.quadrature.romberg.js.map
