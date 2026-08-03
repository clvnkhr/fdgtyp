goog.provide('emmy.rational_function.interpolate');
/**
 * Returns the value of `P(x)`, where `P` is rational function fit (using the
 *   Bulirsch-Stoer algorithm, of similar style to Neville's algorithm described in
 *   [[emmy.numerical.interpolate.polynomial]]) to every point in the supplied
 *   sequence `points`.
 * 
 *   `points`: is a sequence of pairs of the form `[x (f x)]`.
 * 
 *   "The Bulirsch-Stoer algorithm produces the so-called diagonal rational
 *   function, with the degrees of numerator and denominator equal (if m is even)
 *   or with the degree of the denominator larger by one if m is odd." ~ Press,
 *   Numerical Recipes, p105
 * 
 *   The implementation follows [Equation 3.2.3 on on page 105 of
 *   Press](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-2.pdf).
 * 
 *   References:
 * 
 *  - Stoer & Bulirsch, ['Introduction to Numerical Analysis'](https://www.amazon.com/Introduction-Numerical-Analysis-Applied-Mathematics/dp/144193006X)
 *  - [PDF of the same reference](http://www.math.uni.wroc.pl/~olech/metnum2/Podreczniki/(eBook)%20Introduction%20to%20Numerical%20Analysis%20-%20J.Stoer,R.Bulirsch.pdf)
 *  - Press's Numerical Recipes (p105), [Section 3.2](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-2.pdf)
 */
emmy.rational_function.interpolate.bulirsch_stoer_recursive = (function emmy$rational_function$interpolate$bulirsch_stoer_recursive(points,x){
var evaluate = (function emmy$rational_function$interpolate$bulirsch_stoer_recursive_$_evaluate(points__$1,x__$1){
if(cljs.core.empty_QMARK_(points__$1)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(points__$1))){
var vec__36819 = points__$1;
var vec__36822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36819,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36822,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36822,(1),null);
return y;
} else {
var l_branch = cljs.core.pop(points__$1);
var r_branch = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(points__$1,(1));
var center = cljs.core.pop(r_branch);
var vec__36825 = cljs.core.first(points__$1);
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36825,(0),null);
var vec__36828 = cljs.core.peek(points__$1);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36828,(0),null);
var rl = emmy$rational_function$interpolate$bulirsch_stoer_recursive_$_evaluate(l_branch,x__$1);
var rr = emmy$rational_function$interpolate$bulirsch_stoer_recursive_$_evaluate(r_branch,x__$1);
var rc = emmy$rational_function$interpolate$bulirsch_stoer_recursive_$_evaluate(center,x__$1);
var p = emmy.generic._.cljs$core$IFn$_invoke$arity$2(rr,rl);
var q = emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(x__$1,xl),emmy.generic._.cljs$core$IFn$_invoke$arity$2(x__$1,xr)),emmy.generic._.cljs$core$IFn$_invoke$arity$2((1),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(p,emmy.generic._.cljs$core$IFn$_invoke$arity$2(rr,rc)))),(1));
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(rr,emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(p,q));

}
}
});
var point_array = cljs.core.vec(points);
return evaluate(point_array,x);
});
emmy.rational_function.interpolate.bs_prepare = (function emmy$rational_function$interpolate$bs_prepare(p__36832){
var vec__36833 = p__36832;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36833,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36833,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,(0),fx], null);
});
emmy.rational_function.interpolate.bs_merge = (function emmy$rational_function$interpolate$bs_merge(x){
return (function (p__36838,p__36839){
var vec__36840 = p__36838;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36840,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36840,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36840,(2),null);
var rl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36840,(3),null);
var vec__36843 = p__36839;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36843,(0),null);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36843,(1),null);
var rc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36843,(2),null);
var rr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36843,(3),null);
var p = (rr - rl);
var q = ((((x - xl) / (x - xr)) * ((1) - (p / (rr - rc)))) - (1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,xr,rl,(rr + (p / q))], null);
});
});
emmy.rational_function.interpolate.bs_present = (function emmy$rational_function$interpolate$bs_present(row){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,row);
});
/**
 * Takes
 * 
 *   - a (potentially lazy) sequence of `points` of the form `[x (f x)]` and
 *   - a point `x` to interpolate
 * 
 *   and generates a lazy sequence of approximations of `P(x)`. Each entry in the
 *   return sequence incorporates one more point from `points` into the `P(x)`
 *   estimate.
 * 
 *   `P(x)` is rational function fit (using the Bulirsch-Stoer algorithm, of
 *   similar style to Neville's algorithm described
 *   in [[emmy.numerical.interpolate.polynomial]]) to every point in the
 *   supplied sequence `points`.
 * 
 *   "The Bulirsch-Stoer algorithm produces the so-called diagonal rational
 *   function, with the degrees of numerator and denominator equal (if m is even)
 *   or with the degree of the denominator larger by one if m is odd." ~ Press,
 *   Numerical Recipes, p105
 * 
 *   The implementation follows [Equation 3.2.3 on on page 105 of
 *   Press](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-2.pdf).
 * 
 *   ### Column
 * 
 *   If you supply an integer for the third (optional) `column` argument,
 *   `bulirsch-stoer` will return that /column/ offset the interpolation tableau
 *   instead of the first row. This will give you a sequence of nth-order
 *   polynomial approximations taken between point `i` and the next `n` points.
 * 
 *   As a reminder, this is the shape of the tableau:
 * 
 *   ```
 *   p0 p01 p012 p0123 p01234
 *   p1 p12 p123 p1234 .
 *   p2 p23 p234 .     .
 *   p3 p34 .    .     .
 *   p4 .   .    .     .
 *   ```
 * 
 *   So supplying a `column` of `1` gives a sequence of 2-point approximations
 *   between pairs of points; `2` gives 3-point approximations between successive
 *   triplets, etc.
 * 
 *   References:
 * 
 *  - Stoer & Bulirsch, ['Introduction to Numerical Analysis'](https://www.amazon.com/Introduction-Numerical-Analysis-Applied-Mathematics/dp/144193006X)
 *  - [PDF of the same reference](http://www.math.uni.wroc.pl/~olech/metnum2/Podreczniki/(eBook)%20Introduction%20to%20Numerical%20Analysis%20-%20J.Stoer,R.Bulirsch.pdf)
 *  - Press's Numerical Recipes (p105), [Section 3.2](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-2.pdf)
 */
emmy.rational_function.interpolate.bulirsch_stoer = (function emmy$rational_function$interpolate$bulirsch_stoer(var_args){
var G__36847 = arguments.length;
switch (G__36847) {
case 2:
return emmy.rational_function.interpolate.bulirsch_stoer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.rational_function.interpolate.bulirsch_stoer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.rational_function.interpolate.bulirsch_stoer.cljs$core$IFn$_invoke$arity$2 = (function (points,x){
return emmy.rational_function.interpolate.bulirsch_stoer.cljs$core$IFn$_invoke$arity$3(points,x,null);
}));

(emmy.rational_function.interpolate.bulirsch_stoer.cljs$core$IFn$_invoke$arity$3 = (function (points,x,column){
var merge = emmy.rational_function.interpolate.bs_merge(x);
var tableau = emmy.polynomial.interpolate.tableau_fn(emmy.rational_function.interpolate.bs_prepare,merge,points);
return emmy.rational_function.interpolate.bs_present((cljs.core.truth_(column)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tableau,column):emmy.polynomial.interpolate.first_terms(tableau)));
}));

(emmy.rational_function.interpolate.bulirsch_stoer.cljs$lang$maxFixedArity = 3);

/**
 * Processes an initial point `[x (f x)]` into the required state:
 * 
 *   ```
 *   [x_l, x_r, C, D]
 *   ```
 * 
 *   The recursion starts with $C = D = f(x)$.
 */
emmy.rational_function.interpolate.mbs_prepare = (function emmy$rational_function$interpolate$mbs_prepare(p__36851){
var vec__36853 = p__36851;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36853,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36853,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,fx,fx], null);
});
/**
 * Implements the recursion rules described in Press's Numerical Recipes, [section
 *   3.2](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-2.pdf) to generate x_l, x_r,
 *   C and D for a tableau node, given the usual left and left-up tableau entries.
 * 
 *   This merge function ALSO includes a 'zero denominator fix used by Bulirsch and
 *   Stoer and Henon', in the words of Sussman from `rational.scm` in the scmutils
 *   package.
 * 
 *   If the denominator is 0, we pass along `C` from the up-left node and `d` from
 *   the previous entry in the row. Otherwise, we use the algorithm to calculate.
 * 
 *   TODO understand why this works, or where it helps!
 */
emmy.rational_function.interpolate.mbs_merge = (function emmy$rational_function$interpolate$mbs_merge(x){
return (function (p__36864,p__36865){
var vec__36866 = p__36864;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36866,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36866,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36866,(2),null);
var dl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36866,(3),null);
var vec__36869 = p__36865;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36869,(0),null);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36869,(1),null);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36869,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36869,(3),null);
var c_d = (cr - dl);
var d_STAR_ratio = (((x - xl) / (x - xr)) * dl);
var den = (d_STAR_ratio - cr);
if((den === (0))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"emmy.rational-function.interpolate",null,190,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero denominator!"], null);
}),null)),null,-993265357,null);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,xr,cr,dl], null);
} else {
var cnum = (d_STAR_ratio * c_d);
var dnum = (cr * c_d);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,xr,(cnum / den),(dnum / den)], null);
}
});
});
/**
 * Similar to [[bulirsch-stoer]] (the interface is identical) but slightly more
 *   efficient. Internally this builds up its estimates by tracking the delta from
 *   the previous estimate.
 * 
 *   This non-obvious change lets us swap an addition in for a division,
 *   making the algorithm slightly more efficient.
 * 
 *   See [[bulirsch-stoer]] for usage information, and info about the required
 *   structure of the arguments.
 * 
 *   References:
 * 
 * - Press's Numerical Recipes (p105), [Section 3.2](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-2.pdf)
 */
emmy.rational_function.interpolate.modified_bulirsch_stoer = (function emmy$rational_function$interpolate$modified_bulirsch_stoer(points,x){
return emmy.polynomial.interpolate.mn_present(emmy.polynomial.interpolate.first_terms(emmy.polynomial.interpolate.tableau_fn(emmy.rational_function.interpolate.mbs_prepare,emmy.rational_function.interpolate.mbs_merge(x),points)));
});
/**
 * Given some point `x`, returns a fold that accumulates rows of a rational
 *   function interpolation tableau providing successively better estimates (at the
 *   value `x`) of a rational function interpolated to all seen points.
 * 
 *   The 2-arity aggregation step takes:
 * 
 *   - `previous-row`: previous row of an interpolation tableau
 *   - a new point of the form `[x_new (f x_new)]`
 * 
 *   Returns a function that accepts:
 * 
 *   - `previous-row`: previous row of an interpolation tableau
 *   - a new point of the form `[x (f x)]`
 * 
 *   and returns the next row of the tableau using the algorithm described in
 *   [[bulirsch-stoer]].
 */
emmy.rational_function.interpolate.bulirsch_stoer_fold = (function emmy$rational_function$interpolate$bulirsch_stoer_fold(x){
return emmy.polynomial.interpolate.tableau_fold_fn(emmy.rational_function.interpolate.bs_prepare,emmy.rational_function.interpolate.bs_merge(x),(function (row){
return cljs.core.peek(cljs.core.last(row));
}));
});
/**
 * Given some point `x`, returns a fold that accumulates rows of a rational
 *   function interpolation tableau providing successively better estimates (at the
 *   value `x`) of a rational function interpolated to all seen points.
 * 
 *   The 2-arity aggregation step takes:
 * 
 *   - `previous-row`: previous row of an interpolation tableau
 *   - a new point of the form `[x_new (f x_new)]`
 * 
 *   Returns a function that accepts:
 * 
 *   - `previous-row`: previous row of an interpolation tableau
 *   - a new point of the form `[x (f x)]`
 * 
 *   and returns the next row of the tableau using the algorithm described in
 *   [[modified-bulirsch-stoer]].
 */
emmy.rational_function.interpolate.modified_bulirsch_stoer_fold = (function emmy$rational_function$interpolate$modified_bulirsch_stoer_fold(x){
return emmy.polynomial.interpolate.tableau_fold_fn(emmy.rational_function.interpolate.mbs_prepare,emmy.rational_function.interpolate.mbs_merge(x),emmy.polynomial.interpolate.mn_present_final);
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns the best approximation of `x` using a rational
 *   function fitted to all points in `xs` using the algorithm described
 *   in [[modified-bulirsch-stoer]].
 * 
 *   Faster than, but equivalent to, `(last ([[bulirsch-stoer]] xs x))`
 */
emmy.rational_function.interpolate.bulirsch_stoer_sum = (function emmy$rational_function$interpolate$bulirsch_stoer_sum(x){
return emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$1(emmy.rational_function.interpolate.bulirsch_stoer_fold(x));
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns a lazy sequence of successive approximations of
 *   `x` using rational functions fitted to the first point, then the first and
 *   second points, etc. using the algorithm described
 *   in [[modified-bulirsch-stoer]].
 * 
 *   Equivalent to `([[bulirsch-stoer]] xs x)`.
 */
emmy.rational_function.interpolate.bulirsch_stoer_scan = (function emmy$rational_function$interpolate$bulirsch_stoer_scan(x){
return emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$1(emmy.rational_function.interpolate.bulirsch_stoer_fold(x));
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns the best approximation of `x` using a rational
 *   function fitted to all points in `xs` using the algorithm described
 *   in [[modified-bulirsch-stoer]].
 * 
 *   Faster than, but equivalent to, `(last ([[modified-bulirsch-stoer]] xs x))`
 */
emmy.rational_function.interpolate.modified_bulirsch_stoer_sum = (function emmy$rational_function$interpolate$modified_bulirsch_stoer_sum(x){
return emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$1(emmy.rational_function.interpolate.modified_bulirsch_stoer_fold(x));
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns a lazy sequence of successive approximations of
 *   `x` using rational functions fitted to the first point, then the first and
 *   second points, etc. using the algorithm described
 *   in [[modified-bulirsch-stoer]].
 * 
 *   Equivalent to `([[modified-bulirsch-stoer]] xs x)`.
 */
emmy.rational_function.interpolate.modified_bulirsch_stoer_scan = (function emmy$rational_function$interpolate$modified_bulirsch_stoer_scan(x){
return emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$1(emmy.rational_function.interpolate.modified_bulirsch_stoer_fold(x));
});

//# sourceMappingURL=emmy.rational_function.interpolate.js.map
