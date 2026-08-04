goog.provide('emmy.numerical.minimize');
/**
 * Find the minimum of the function `f: R -> R` in the interval `[a, b]`.
 * 
 *   If an `observe` function is supplied, it will be invoked with the iteration
 *   count and the values of x and f(x) at each search step.
 */
emmy.numerical.minimize.minimize = (function emmy$numerical$minimize$minimize(var_args){
var G__49478 = arguments.length;
switch (G__49478) {
case 3:
return emmy.numerical.minimize.minimize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.minimize.minimize.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.minimize.minimize.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.minimize.minimize.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.constantly(null));
}));

(emmy.numerical.minimize.minimize.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,observe){
return emmy.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$4(f,a,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),observe], null));
}));

(emmy.numerical.minimize.minimize.cljs$lang$maxFixedArity = 4);

/**
 * Entrypoint for multidimensional minimization routines.
 * 
 *   See [[emmy.numerical.multimin.nelder-mead/nelder-mead]] for the only
 *   supported option.
 */
emmy.numerical.minimize.multidimensional_minimize = (function emmy$numerical$minimize$multidimensional_minimize(var_args){
var args__5903__auto__ = [];
var len__5897__auto___49487 = arguments.length;
var i__5898__auto___49488 = (0);
while(true){
if((i__5898__auto___49488 < len__5897__auto___49487)){
args__5903__auto__.push((arguments[i__5898__auto___49488]));

var G__49489 = (i__5898__auto___49488 + (1));
i__5898__auto___49488 = G__49489;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return emmy.numerical.minimize.multidimensional_minimize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(emmy.numerical.minimize.multidimensional_minimize.cljs$core$IFn$_invoke$arity$variadic = (function (func,x0,p__49484){
var map__49485 = p__49484;
var map__49485__$1 = cljs.core.__destructure_map(map__49485);
var opts = map__49485__$1;
var info_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49485__$1,new cljs.core.Keyword(null,"info?","info?",361925553));
var result = emmy.numerical.multimin.nelder_mead.nelder_mead(func,x0,opts);
if(cljs.core.truth_(new cljs.core.Keyword(null,"converged?","converged?",1779059976).cljs$core$IFn$_invoke$arity$1(result))){
if(cljs.core.truth_(info_QMARK_)){
return result;
} else {
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result);
}
} else {
return emmy.util.failure_to_converge((""+"multidimensional-minimize failed to converge: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)));
}
}));

(emmy.numerical.minimize.multidimensional_minimize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(emmy.numerical.minimize.multidimensional_minimize.cljs$lang$applyTo = (function (seq49481){
var G__49482 = cljs.core.first(seq49481);
var seq49481__$1 = cljs.core.next(seq49481);
var G__49483 = cljs.core.first(seq49481__$1);
var seq49481__$2 = cljs.core.next(seq49481__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49482,G__49483,seq49481__$2);
}));


//# sourceMappingURL=emmy.numerical.minimize.js.map
