goog.provide('emmy.polynomial.gcd');
/**
 * Pair of the form [number Keyword], where keyword is one of the supported units
 *   from [[emmy.util.stopwatch]]. If Euclidean GCD takes longer than this time
 *   limit, the system will bail out by throwing an exception.
 */
emmy.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),new cljs.core.Keyword(null,"millis","millis",-1338288387)], null);
emmy.polynomial.gcd._STAR_clock_STAR_ = null;
/**
 * When true, multivariate GCD will cache each recursive step in the Euclidean GCD
 *   algorithm, and attempt to shortcut out on a successful cache hit. True by
 *   default.
 */
emmy.polynomial.gcd._STAR_poly_gcd_cache_enable_STAR_ = true;
/**
 * When true, multivariate GCD will log each `u` and `v` input and the result of
 *   each step, along with the recursive level of the logged GCD computation. False
 *   by default.
 */
emmy.polynomial.gcd._STAR_poly_gcd_debug_STAR_ = false;
emmy.polynomial.gcd.gcd_memo = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
emmy.polynomial.gcd.gcd_cache_hit = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
emmy.polynomial.gcd.gcd_cache_miss = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
emmy.polynomial.gcd.gcd_trivial_constant = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
emmy.polynomial.gcd.gcd_monomials = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
/**
 * When called, logs statistics about the GCD memoization cache, and the number of
 *   times the system has encountered monomial or other trivial GCDs. 
 */
emmy.polynomial.gcd.gcd_stats = (function emmy$polynomial$gcd$gcd_stats(){
var memo_count_38916 = cljs.core.count(cljs.core.deref(emmy.polynomial.gcd.gcd_memo));
if((memo_count_38916 > (0))){
var hits_38917 = cljs.core.deref(emmy.polynomial.gcd.gcd_cache_hit);
var misses_38918 = cljs.core.deref(emmy.polynomial.gcd.gcd_cache_miss);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"emmy.polynomial.gcd",null,71,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.string.format("GCD cache hit rate %.2f%% (%d entries)",((100) * (hits_38917 / (hits_38917 + misses_38918))),memo_count_38916)], null);
}),null)),null,-1143507686,null);
} else {
}

return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"emmy.polynomial.gcd",null,76,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.string.format("GCD triv %d mono %d",cljs.core.deref(emmy.polynomial.gcd.gcd_trivial_constant),cljs.core.deref(emmy.polynomial.gcd.gcd_monomials))], null);
}),null)),null,-190209174,null);
});
/**
 * Generates a DEBUG logging statement guarded by the [[*poly-gcd-debug*]] dynamic
 *   variable.
 */
emmy.polynomial.gcd.dbg = (function emmy$polynomial$gcd$dbg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___38921 = arguments.length;
var i__5898__auto___38922 = (0);
while(true){
if((i__5898__auto___38922 < len__5897__auto___38921)){
args__5903__auto__.push((arguments[i__5898__auto___38922]));

var G__38923 = (i__5898__auto___38922 + (1));
i__5898__auto___38922 = G__38923;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return emmy.polynomial.gcd.dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(emmy.polynomial.gcd.dbg.cljs$core$IFn$_invoke$arity$variadic = (function (level,where,xs){
if(cljs.core.truth_(emmy.polynomial.gcd._STAR_poly_gcd_debug_STAR_)){
var xs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,xs);
var xs_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [where,level], null),xs__$1);
var xs_s = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",xs_SINGLEQUOTE_);
var prefix = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"  "));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"emmy.polynomial.gcd",null,90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,xs_s], null);
}),null)),null,117156733,null);
} else {
return null;
}
}));

(emmy.polynomial.gcd.dbg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(emmy.polynomial.gcd.dbg.cljs$lang$applyTo = (function (seq38716){
var G__38717 = cljs.core.first(seq38716);
var seq38716__$1 = cljs.core.next(seq38716);
var G__38718 = cljs.core.first(seq38716__$1);
var seq38716__$2 = cljs.core.next(seq38716__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38717,G__38718,seq38716__$2);
}));

/**
 * Returns true if the [[*clock*]] dynamic variable contains a Stopwatch with an
 *   elapsed time that's passed the limit allowed by the
 *   dynamic [[*poly-gcd-time-limit*]], false otherwise.
 */
emmy.polynomial.gcd.time_expired_QMARK_ = (function emmy$polynomial$gcd$time_expired_QMARK_(){
var and__5160__auto__ = emmy.polynomial.gcd._STAR_clock_STAR_;
if(cljs.core.truth_(and__5160__auto__)){
var vec__38737 = emmy.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_;
var ticks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38737,(0),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38737,(1),null);
return (emmy.util.stopwatch.elapsed.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.gcd._STAR_clock_STAR_,units) > ticks);
} else {
return and__5160__auto__;
}
});
/**
 * When called, if [[time-expired?]] returns `true`, logs a warning and throws a
 *   TimeoutException, signaling that the GCD process has gone on past its allowed
 *   time limit.
 */
emmy.polynomial.gcd.maybe_bail_out_BANG_ = (function emmy$polynomial$gcd$maybe_bail_out_BANG_(description){
if(cljs.core.truth_(emmy.polynomial.gcd.time_expired_QMARK_())){
var s = goog.string.format("Timed out: %s after %s",description,emmy.util.stopwatch.repr(emmy.polynomial.gcd._STAR_clock_STAR_));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"emmy.polynomial.gcd",null,108,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}),null)),null,663336066,null);

return emmy.util.timeout_ex(s);
} else {
return null;
}
});
/**
 * Given an explicit `timeout` and a no-argument function `thunk`, calls `thunk`
 *   in a context where [[*poly-gcd-time-limit*]] is dynamically bound to
 *   `timeout`. Calling [[time-expired?]] or [[maybe-bail-out!]] inside `thunk`
 *   will signal failure appropriately if `thunk` has taken longer than `timeout`.
 */
emmy.polynomial.gcd.with_limited_time = (function emmy$polynomial$gcd$with_limited_time(timeout,thunk){
var _STAR_poly_gcd_time_limit_STAR__orig_val__38742 = emmy.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_;
var _STAR_clock_STAR__orig_val__38743 = emmy.polynomial.gcd._STAR_clock_STAR_;
var _STAR_poly_gcd_time_limit_STAR__temp_val__38744 = timeout;
var _STAR_clock_STAR__temp_val__38745 = emmy.util.stopwatch.stopwatch();
(emmy.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_ = _STAR_poly_gcd_time_limit_STAR__temp_val__38744);

(emmy.polynomial.gcd._STAR_clock_STAR_ = _STAR_clock_STAR__temp_val__38745);

try{return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
}finally {(emmy.polynomial.gcd._STAR_clock_STAR_ = _STAR_clock_STAR__orig_val__38743);

(emmy.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_ = _STAR_poly_gcd_time_limit_STAR__orig_val__38742);
}});
/**
 * Attempts to call `f` with arguments `u` and `v`, but only after checking that
 *   `[u v]` is not present in the global GCD memoization cache. If not, calls `(f
 *   u v)` and registers the result in [[gcd-memo]] before returning the result.
 * 
 *   Use the [[*poly-gcd-cache-enable*]] dynamic variable to turn the cache on and
 *   off.
 */
emmy.polynomial.gcd.cached = (function emmy$polynomial$gcd$cached(f,u,v){
var temp__5823__auto__ = (function (){var and__5160__auto__ = emmy.polynomial.gcd._STAR_poly_gcd_cache_enable_STAR_;
if(cljs.core.truth_(and__5160__auto__)){
var G__38752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null);
var fexpr__38751 = cljs.core.deref(emmy.polynomial.gcd.gcd_memo);
return (fexpr__38751.cljs$core$IFn$_invoke$arity$1 ? fexpr__38751.cljs$core$IFn$_invoke$arity$1(G__38752) : fexpr__38751.call(null,G__38752));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var g = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.gcd.gcd_cache_hit,cljs.core.inc);

return g;
} else {
var result = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,v) : f.call(null,u,v));
if(cljs.core.truth_(emmy.polynomial.gcd._STAR_poly_gcd_cache_enable_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.gcd.gcd_cache_miss,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emmy.polynomial.gcd.gcd_memo,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null),result);
} else {
}

return result;
}
});
/**
 * Takes two polynomials `u` and `v` and any number of 'continuation' functions,
 *   and returns the result of threading `u` and `v` through all continuation
 *   functions.
 * 
 *   Each function, except the last, should have signature `[p q k]`, where `p` and
 *   `q` are polynomials and k is a continuation of the same type.
 * 
 *   The last function should have signature `[p q]` without a continuation
 *   argument.
 * 
 *   For example, the following forms are equivalent:
 * 
 *   ```clojure
 *   (cont-> u v f1 f2 f3)
 *   (f1 u v (fn [u' v']
 *          (f2 u' v' f3)))
 *   ```
 */
emmy.polynomial.gcd.cont__GT_ = (function emmy$polynomial$gcd$cont__GT_(var_args){
var G__38766 = arguments.length;
switch (G__38766) {
case 1:
return emmy.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___38932 = arguments.length;
var i__5898__auto___38933 = (0);
while(true){
if((i__5898__auto___38933 < len__5897__auto___38932)){
args_arr__5922__auto__.push((arguments[i__5898__auto___38933]));

var G__38934 = (i__5898__auto___38933 + (1));
i__5898__auto___38933 = G__38934;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((3) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((3)),(0),null)):null);
return emmy.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5923__auto__);

}
});

(emmy.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$1 = (function (p__38777){
var vec__38778 = p__38777;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38778,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null);
}));

(emmy.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$2 = (function (p__38783,f){
var vec__38784 = p__38783;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38784,(1),null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,v) : f.call(null,u,v));
}));

(emmy.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$3 = (function (p__38789,f1,f2){
var vec__38790 = p__38789;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38790,(1),null);
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(u,v,f2) : f1.call(null,u,v,f2));
}));

(emmy.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p__38793,f1,f2,more){
var vec__38796 = p__38793;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38796,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38796,(1),null);
var G__38799 = u;
var G__38800 = v;
var G__38801 = (function (u_SINGLEQUOTE_,v_SINGLEQUOTE_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(emmy.polynomial.gcd.cont__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u_SINGLEQUOTE_,v_SINGLEQUOTE_], null),f2,more);
});
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(G__38799,G__38800,G__38801) : f1.call(null,G__38799,G__38800,G__38801));
}));

/** @this {Function} */
(emmy.polynomial.gcd.cont__GT_.cljs$lang$applyTo = (function (seq38762){
var G__38763 = cljs.core.first(seq38762);
var seq38762__$1 = cljs.core.next(seq38762);
var G__38764 = cljs.core.first(seq38762__$1);
var seq38762__$2 = cljs.core.next(seq38762__$1);
var G__38765 = cljs.core.first(seq38762__$2);
var seq38762__$3 = cljs.core.next(seq38762__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38763,G__38764,G__38765,seq38762__$3);
}));

(emmy.polynomial.gcd.cont__GT_.cljs$lang$maxFixedArity = (3));

/**
 * Given a sequence of polynomial terms, returns a pair of functions of one
 *   polynomial argument that respectively sort and unsort the variables in the
 *   polynomial by increasing degree.
 */
emmy.polynomial.gcd.terms__GT_sort_PLUS_unsort = (function emmy$polynomial$gcd$terms__GT_sort_PLUS_unsort(terms){
if((cljs.core.count(terms) <= (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,cljs.core.identity], null);
} else {
return emmy.polynomial.exponent.__GT_sort_PLUS_unsort(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.impl.exponents),emmy.polynomial.exponent.lcm,terms));
}
});
/**
 * Accepts two polynomials `u` and `v` and calls `continuation` with the variable
 *   indices in each polynomial rearranged to make GCD go faster. Undoes the
 *   rearrangement on return.
 * 
 *   When passed either non-polynomials or univariate polynomials,
 *   returns `(continue u v)` unchanged.
 * 
 *   Variables are sorted by increasing degree, where the degree is considered
 *   across terms of both `u` and `v`. Discussed in ['Evaluation of the Heuristic
 *   Polynomial
 *   GCD'](https://people.eecs.berkeley.edu/~fateman/282/readings/liao.pdf) by Liao
 *   and Fateman [1995].
 */
emmy.polynomial.gcd.with_optimized_variable_order = (function emmy$polynomial$gcd$with_optimized_variable_order(u,v,continue$){
if(((emmy.polynomial.multivariate_QMARK_(u)) || (emmy.polynomial.multivariate_QMARK_(v)))){
var l_terms = ((emmy.polynomial.polynomial_QMARK_(u))?emmy.polynomial.bare_terms(u):cljs.core.PersistentVector.EMPTY);
var r_terms = ((emmy.polynomial.polynomial_QMARK_(v))?emmy.polynomial.bare_terms(v):cljs.core.PersistentVector.EMPTY);
var vec__38812 = emmy.polynomial.gcd.terms__GT_sort_PLUS_unsort(cljs.core.into.cljs$core$IFn$_invoke$arity$2(l_terms,r_terms));
var sort = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38812,(0),null);
var unsort = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38812,(1),null);
return emmy.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2(unsort,(function (){var G__38816 = emmy.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2(sort,u);
var G__38817 = emmy.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2(sort,v);
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(G__38816,G__38817) : continue$.call(null,G__38816,G__38817));
})());
} else {
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(u,v) : continue$.call(null,u,v));
}
});
/**
 * Given some polynomial `p`, and a multi-arity `gcd` function for its
 *   coefficients, returns a pair of the polynomial's content and primitive.
 * 
 *   The 'content' of a polynomial is the greatest common divisor of its
 *   coefficients. The 'primitive part' of a polynomial is the quotient of the
 *   polynomial by its content.
 * 
 *   See Wikipedia's ['Primitive Part and
 *   Content'](https://en.wikipedia.org/wiki/Primitive_part_and_content) page for
 *   more details. 
 */
emmy.polynomial.gcd.__GT_content_PLUS_primitive = (function emmy$polynomial$gcd$__GT_content_PLUS_primitive(p,gcd){
var coeffs = emmy.polynomial.coefficients(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coeffs))){
var content = cljs.core.first(coeffs);
var primitive = emmy.polynomial.map_coefficients((function (_){
return (1);
}),p);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content,primitive], null);
} else {
var content = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gcd,coeffs);
var primitive = (cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(content))?p:emmy.polynomial.map_coefficients((function (p1__38820_SHARP_){
return emmy.generic.exact_divide.cljs$core$IFn$_invoke$arity$2(p1__38820_SHARP_,content);
}),p));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content,primitive], null);
}
});
/**
 * Given a multi-arity `gcd` routine, returns a function of polynomials `u` and
 *   `v` and a continuation `continue`.
 * 
 *   The returned function calls the `continue` continuation with the [primitive
 *   parts](https://en.wikipedia.org/wiki/Primitive_part_and_content) of `u` and
 *   `v` respectively.
 * 
 *   On return, [[with-content-removed]]'s returned function scales the result back
 *   up by the `gcd` of the contents of `u` and `v` (i.e., the greatest common
 *   divisor across the coefficients of both polynomials).
 * 
 *   [[with-content-removed]] is intended for use with multivariate polynomials. In
 *   this case, `u` and `v` are considered to be univariate polynomials with
 *   polynomial coefficients.
 */
emmy.polynomial.gcd.with_content_removed = (function emmy$polynomial$gcd$with_content_removed(gcd){
return (function (u,v,continue$){
var vec__38830 = emmy.polynomial.gcd.__GT_content_PLUS_primitive(u,gcd);
var ku = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38830,(0),null);
var pu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38830,(1),null);
var vec__38833 = emmy.polynomial.gcd.__GT_content_PLUS_primitive(v,gcd);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38833,(0),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38833,(1),null);
var d = (gcd.cljs$core$IFn$_invoke$arity$2 ? gcd.cljs$core$IFn$_invoke$arity$2(ku,kv) : gcd.call(null,ku,kv));
var result = (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(pu,pv) : continue$.call(null,pu,pv));
var result__$1 = ((emmy.polynomial.polynomial_QMARK_(result))?result:emmy.polynomial.constant.cljs$core$IFn$_invoke$arity$2((1),result));
return emmy.polynomial.scale_l(d,result__$1);
});
});
/**
 * Given a multi-arity `gcd` routine, returns a function of polynomials `u` and
 *   `v` and a continuation `continue`.
 * 
 *   This function determines whether or not `u` and `v` have any variables in
 *   common. If they don't, then it's not possible for any common divisor to share
 *   variables; the function returns the `gcd` of the coefficients of `u` and `v`.
 * 
 *   If they do, the function returns `(continue u v)`.
 */
emmy.polynomial.gcd.with_trivial_constant_gcd_check = (function emmy$polynomial$gcd$with_trivial_constant_gcd_check(gcd){
return (function (u,v,continue$){
if(emmy.polynomial.polynomial_QMARK_(u)){
} else {
throw (new Error("Assert failed: (p/polynomial? u)"));
}

if(emmy.polynomial.polynomial_QMARK_(v)){
} else {
throw (new Error("Assert failed: (p/polynomial? v)"));
}

var u_vars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.util.keyset,emmy.polynomial.impl.exponents),emmy.polynomial.bare_terms(u)));
var v_vars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.util.keyset,emmy.polynomial.impl.exponents),emmy.polynomial.bare_terms(v)));
if(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(u_vars,v_vars))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.gcd.gcd_trivial_constant,cljs.core.inc);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gcd,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.coefficients(u),emmy.polynomial.coefficients(v)));
} else {
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(u,v) : continue$.call(null,u,v));
}
});
});
/**
 * Given a `binary-gcd` function for computing greatest common divisors, returns a
 *   multi-arity function that returns `0` when called with no arguments, and
 *   reduces multiple arguments with `binary-gcd`, aborting if any `one?` is
 *   reached.
 * 
 *   NOTE: This is only appropriate if you don't expect rational coefficients; the
 *   GCD of 1 and a rational number IS that other number, so the `g/one?` guard is
 *   not appropriate.
 */
emmy.polynomial.gcd.__GT_gcd = (function emmy$polynomial$gcd$__GT_gcd(binary_gcd){
return emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(binary_gcd,(0),emmy.generic.one_QMARK_);
});
emmy.polynomial.gcd.primitive_gcd = emmy.polynomial.gcd.__GT_gcd((function (l,r){
if(((emmy.value.number_QMARK_(l)) && (emmy.value.number_QMARK_(r)))){
return emmy.generic.gcd.cljs$core$IFn$_invoke$arity$2(l,r);
} else {
return (1);
}
}));
/**
 * Returns the GCD of some polynomial `p` and a non-polynomial `n`; this is simply
 *   the GCD of `n` and all coefficients of `p`.
 */
emmy.polynomial.gcd.gcd_poly_number = (function emmy$polynomial$gcd$gcd_poly_number(p,n){
if(emmy.polynomial.polynomial_QMARK_(p)){
} else {
throw (new Error("Assert failed: (p/polynomial? p)"));
}

if(emmy.polynomial.coeff_QMARK_(n)){
} else {
throw (new Error("Assert failed: (p/coeff? n)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.polynomial.gcd.primitive_gcd,n,emmy.polynomial.coefficients(p));
});
/**
 * Given two polynomials `u` and `v`, attempts to return the greatest common
 *   divisor of `u` and `v` by testing for trivial cases. If no trivial case
 *   applies, returns `nil`.
 */
emmy.polynomial.gcd.trivial_gcd = (function emmy$polynomial$gcd$trivial_gcd(u,v){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(u))){
return emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(v))){
return emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(u);
} else {
if(emmy.polynomial.coeff_QMARK_(u)){
if(emmy.polynomial.coeff_QMARK_(v)){
return emmy.polynomial.gcd.primitive_gcd(u,v);
} else {
return emmy.polynomial.gcd.gcd_poly_number(v,u);
}
} else {
if(emmy.polynomial.coeff_QMARK_(v)){
return emmy.polynomial.gcd.gcd_poly_number(u,v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(u,v)){
return emmy.polynomial.abs(u);
} else {
return null;

}
}
}
}
}
});
/**
 * Returns the greatest common divisor of some monomial `m` and a polynomial `p`.
 *   The GCD of these two inputs is a monomial (or bare coefficient) with:
 * 
 *   - coefficient portion equal to the GCD of the coefficient of both sides
 *   - power product equal to the GCD of the power products of all `p` terms with
 *  the power product of `m`
 */
emmy.polynomial.gcd.monomial_gcd = (function emmy$polynomial$gcd$monomial_gcd(m,p){
if(emmy.polynomial.monomial_QMARK_(m)){
} else {
throw (new Error("Assert failed: (p/monomial? m)"));
}

if(emmy.polynomial.polynomial_QMARK_(p)){
} else {
throw (new Error("Assert failed: (p/polynomial? p)"));
}

var vec__38855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.bare_terms(m),(0));
var mono_expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38855,(0),null);
var mono_coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38855,(1),null);
var expts = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.impl.exponents),emmy.polynomial.exponent.gcd,mono_expts,emmy.polynomial.bare_terms(p));
var coeff = emmy.polynomial.gcd.gcd_poly_number(p,mono_coeff);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.gcd.gcd_monomials,cljs.core.inc);

return emmy.polynomial.terms__GT_polynomial(emmy.polynomial.bare_arity(m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,coeff)], null));
});
/**
 * Given some multivariate `gcd` function, returns a function of polynomials `u`
 *   and `v` that returns greatest common divisor of `u` and `v` using
 *   the [Euclidean algorithm for multivariate
 *   polynomials](https://en.wikipedia.org/wiki/Polynomial_greatest_common_divisor#Euclidean_algorithm).
 * 
 *   `u` and `v` are assumed to be either non-polynomial coefficients or univariate
 *   polynomials. To use [[euclidean-gcd]] for multivariate polynomials, convert
 *   the polynomial to univariate first using [[p/lower-arity]] recursively.
 */
emmy.polynomial.gcd.euclidean_gcd = (function emmy$polynomial$gcd$euclidean_gcd(gcd){
return (function (u,v){
while(true){
emmy.polynomial.gcd.maybe_bail_out_BANG_("euclid inner loop");

var or__5162__auto__ = emmy.polynomial.gcd.trivial_gcd(u,v);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var vec__38877 = emmy.polynomial.pseudo_remainder(u,v);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38877,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38877,(1),null);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(r))){
return emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
} else {
var vec__38884 = emmy.polynomial.gcd.__GT_content_PLUS_primitive(r,gcd);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38884,(0),null);
var prim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38884,(1),null);
var G__38964 = v;
var G__38965 = prim;
u = G__38964;
v = G__38965;
continue;
}
}
break;
}
});
});
/**
 * Given two univariate polynomials `u` and `v`, returns the greatest common
 *   divisor of `u` and `v` calculated using Knuth's algorithm 4.6.1E.
 */
emmy.polynomial.gcd.univariate_gcd = (function emmy$polynomial$gcd$univariate_gcd(u,v){
if(emmy.polynomial.univariate_QMARK_(u)){
} else {
throw (new Error("Assert failed: (p/univariate? u)"));
}

if(emmy.polynomial.univariate_QMARK_(v)){
} else {
throw (new Error("Assert failed: (p/univariate? v)"));
}

return emmy.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null),emmy.polynomial.gcd.with_content_removed(emmy.polynomial.gcd.primitive_gcd),emmy.polynomial.gcd.euclidean_gcd(emmy.polynomial.gcd.primitive_gcd));
});
/**
 * Given two polynomials `u` and `v` (potentially multivariate) with
 *   non-polynomial coefficients, returns the greatest common divisor of `u` and
 *   `v` calculated using a multivariate extension of Knuth's algorithm 4.6.1E.
 * 
 *   Optionally takes a debugging `level`. To see the debugging logs generated over
 *   the course of the run, set [[*poly-gcd-debug*]] to true.
 * 
 *   NOTE: [[full-gcd]] Internally checks that it hasn't run out a stopwatch set
 *   with [[with-limited-time]]; you can wrap a call to [[full-gcd]] in this
 *   function to limit its execution time.
 * 
 *   For example, this form will throw a TimeoutException after 1 second:
 * 
 *   ```clojure
 *   (with-limited-time [1 :seconds]
 *  (fn [] (full-gcd u v)))
 *   ```
 */
emmy.polynomial.gcd.full_gcd = (function emmy$polynomial$gcd$full_gcd(var_args){
var G__38892 = arguments.length;
switch (G__38892) {
case 2:
return emmy.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$2 = (function (u,v){
return emmy.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$3((0),u,v);
}));

(emmy.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$3 = (function (level,u,v){
var attempt = (function emmy$polynomial$gcd$attempt(u__$1,v__$1){
var or__5162__auto__ = emmy.polynomial.gcd.trivial_gcd(u__$1,v__$1);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var arity = emmy.polynomial.check_same_arity(u__$1,v__$1);
if(emmy.polynomial.monomial_QMARK_(u__$1)){
return emmy.polynomial.gcd.monomial_gcd(u__$1,v__$1);
} else {
if(emmy.polynomial.monomial_QMARK_(v__$1)){
return emmy.polynomial.gcd.monomial_gcd(v__$1,u__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,(1))){
return emmy.polynomial.gcd.univariate_gcd(u__$1,v__$1);
} else {
var rec = (function (u__$2,v__$2){
return emmy.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$3((level + (1)),u__$2,v__$2);
});
var next_gcd = emmy.polynomial.gcd.__GT_gcd(rec);
emmy.polynomial.gcd.maybe_bail_out_BANG_("full-gcd");

return emmy.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1], null),emmy.polynomial.with_lower_arity,emmy.polynomial.gcd.with_content_removed(next_gcd),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.polynomial.gcd.euclidean_gcd(next_gcd)], 0));

}
}
}
}
});
emmy.polynomial.gcd.dbg.cljs$core$IFn$_invoke$arity$variadic(level,"full-gcd",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([u,v], 0));

var result = emmy.polynomial.gcd.cached(attempt,u,v);
emmy.polynomial.gcd.dbg.cljs$core$IFn$_invoke$arity$variadic(level,"<-",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));

return result;
}));

(emmy.polynomial.gcd.full_gcd.cljs$lang$maxFixedArity = 3);

/**
 * Higher-level wrapper around [[full-gcd]] that:
 * 
 *   - optimizes the case where `u` and `v` share no variables
 *   - sorts the variables in `u` and `v` in order of increasing degree
 * 
 *   before attempting [[full-gcd]]. See [[full-gcd]] for a full description.
 */
emmy.polynomial.gcd.classical_gcd = (function emmy$polynomial$gcd$classical_gcd(u,v){
return emmy.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null),emmy.polynomial.gcd.with_trivial_constant_gcd_check(emmy.polynomial.gcd.primitive_gcd),emmy.polynomial.gcd.with_optimized_variable_order,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.polynomial.gcd.full_gcd], 0));
});
/**
 * Dispatches to [[classical-gcd]] with an enforced time limit
 *   of [[*poly-gcd-time-limit*]].
 * 
 *   NOTE this function is the place to add support for other GCD methods, like
 *   sparse polynomial GCD, that are coming down the pipe.
 */
emmy.polynomial.gcd.gcd_dispatch = (function emmy$polynomial$gcd$gcd_dispatch(u,v){
var or__5162__auto__ = emmy.polynomial.gcd.trivial_gcd(u,v);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.polynomial.gcd.with_limited_time(emmy.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_,(function (){
return emmy.polynomial.gcd.classical_gcd(u,v);
}));
}
});
/**
 * Returns the greatest common divisor of `u` and `v`, calculated by a
 *   multivariate extension to the [Euclidean algorithm for multivariate
 *   polynomials](https://en.wikipedia.org/wiki/Polynomial_greatest_common_divisor#Euclidean_algorithm).
 *   `u` and `v` can be polynomials or non-polynomials coefficients.
 */
emmy.polynomial.gcd.gcd = emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.gcd.gcd_dispatch,(0));
/**
 * Returns the least common multiple of (possibly polynomial) arguments `u` and
 *   `v`, using [[gcd]] to calculate the gcd portion of
 * 
 *   ```
 *   (/ (g/abs (* u v))
 *   (gcd u v))
 *   ```
 */
emmy.polynomial.gcd.lcm = (function emmy$polynomial$gcd$lcm(u,v){
if(((emmy.polynomial.polynomial_QMARK_(u)) || (emmy.polynomial.polynomial_QMARK_(v)))){
var g = emmy.polynomial.gcd.gcd_dispatch(u,v);
return emmy.polynomial.abs(emmy.polynomial.mul(emmy.polynomial.evenly_divide(u,g),v));
} else {
return emmy.generic.lcm.cljs$core$IFn$_invoke$arity$2(u,v);
}
});
/**
 * Returns the greatest common divisor of all partial derivatives of the
 *   polynomial `p` using binary applications of the [[gcd]] algorithm between each
 *   partial derivative.
 * 
 *   This algorithm assumes that all coefficients are integral, and halts when it
 *   encounters a result that responds true to [[emmy.value/one?]].
 * 
 *   If a non-[[p/Polynomial]] is supplied, returns 1.
 */
emmy.polynomial.gcd.gcd_Dp = (function emmy$polynomial$gcd$gcd_Dp(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.halt_when.cljs$core$IFn$_invoke$arity$1(emmy.generic.one_QMARK_),emmy.polynomial.gcd.gcd,emmy.polynomial.partial_derivatives(p));
} else {
return (1);
}
});
emmy.polynomial.defbinary(emmy.generic.lcm,emmy.polynomial.gcd.lcm);
emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (u,v){
return emmy.polynomial.gcd.gcd_dispatch(u,v);
}));
emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864)], null),(function (u,v){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(v))){
return u;
} else {
return emmy.polynomial.gcd.gcd_poly_number(u,v);
}
}));
emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864),new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (u,v){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(u))){
return v;
} else {
return emmy.polynomial.gcd.gcd_poly_number(v,u);
}
}));

//# sourceMappingURL=emmy.polynomial.gcd.js.map
