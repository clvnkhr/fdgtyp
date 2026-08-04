goog.provide('emmy.numerical.quadrature.common');
emmy.numerical.quadrature.common._STAR_roundoff_cutoff_STAR_ = 1.0E-14;
emmy.numerical.quadrature.common.open = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.numerical.quadrature.common","open","emmy.numerical.quadrature.common/open",-708131519),new cljs.core.Keyword("emmy.numerical.quadrature.common","open","emmy.numerical.quadrature.common/open",-708131519)], null);
emmy.numerical.quadrature.common.closed = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.numerical.quadrature.common","closed","emmy.numerical.quadrature.common/closed",-1976285246),new cljs.core.Keyword("emmy.numerical.quadrature.common","closed","emmy.numerical.quadrature.common/closed",-1976285246)], null);
emmy.numerical.quadrature.common.open_closed = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.numerical.quadrature.common","open","emmy.numerical.quadrature.common/open",-708131519),new cljs.core.Keyword("emmy.numerical.quadrature.common","closed","emmy.numerical.quadrature.common/closed",-1976285246)], null);
emmy.numerical.quadrature.common.closed_open = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.numerical.quadrature.common","closed","emmy.numerical.quadrature.common/closed",-1976285246),new cljs.core.Keyword("emmy.numerical.quadrature.common","open","emmy.numerical.quadrature.common/open",-708131519)], null);
emmy.numerical.quadrature.common.infinities = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [Infinity,null,-Infinity,null], null), null);
/**
 * Returns true if the argument represents an explicit `closed` interval, false
 *   otherwise.
 */
emmy.numerical.quadrature.common.closed_QMARK_ = (function emmy$numerical$quadrature$common$closed_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,emmy.numerical.quadrature.common.closed);
});
emmy.numerical.quadrature.common.open_QMARK_ = cljs.core.complement(emmy.numerical.quadrature.common.closed_QMARK_);
emmy.numerical.quadrature.common.close_l = (function emmy$numerical$quadrature$common$close_l(p__54241){
var vec__54242 = p__54241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54242,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54242,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.numerical.quadrature.common","closed","emmy.numerical.quadrature.common/closed",-1976285246),r], null);
});
emmy.numerical.quadrature.common.close_r = (function emmy$numerical$quadrature$common$close_r(p__54246){
var vec__54247 = p__54246;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54247,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54247,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,new cljs.core.Keyword("emmy.numerical.quadrature.common","closed","emmy.numerical.quadrature.common/closed",-1976285246)], null);
});
emmy.numerical.quadrature.common.open_l = (function emmy$numerical$quadrature$common$open_l(p__54250){
var vec__54251 = p__54250;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54251,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54251,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.numerical.quadrature.common","open","emmy.numerical.quadrature.common/open",-708131519),r], null);
});
emmy.numerical.quadrature.common.open_r = (function emmy$numerical$quadrature$common$open_r(p__54254){
var vec__54255 = p__54254;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54255,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54255,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,new cljs.core.Keyword("emmy.numerical.quadrature.common","open","emmy.numerical.quadrature.common/open",-708131519)], null);
});
emmy.numerical.quadrature.common.flip = (function emmy$numerical$quadrature$common$flip(p__54274){
var vec__54275 = p__54274;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54275,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54275,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,l], null);
});
/**
 * Extracts the interval (or `open` as a default) from the supplied integration
 *   options dict.
 */
emmy.numerical.quadrature.common.interval = (function emmy$numerical$quadrature$common$interval(opts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"interval","interval",1708495417),emmy.numerical.quadrature.common.open);
});
/**
 * Sets the specified interval to a key inside the suppled `opts` map of arbitrary
 *   integration options.
 */
emmy.numerical.quadrature.common.with_interval = (function emmy$numerical$quadrature$common$with_interval(opts,interval){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"interval","interval",1708495417),interval);
});
/**
 * Accepts:
 * 
 *   - a dictionary of arbitrary options
 *   - one of the 4 interval modification functions
 * 
 *   and returns a dict of options with `f` applied to the contained interval (or
 *   `open` if no interval is set).
 *   
 */
emmy.numerical.quadrature.common.update_interval = (function emmy$numerical$quadrature$common$update_interval(opts,f){
var k = new cljs.core.Keyword(null,"interval","interval",1708495417);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,k,(function (){var G__54283 = emmy.numerical.quadrature.common.interval(opts);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54283) : f.call(null,G__54283));
})());
});
/**
 * Returns true if the range $[a, b]$ is strip narrow enough to pass the following
 *   test:
 * 
 *   |b - a| / |a| + |b| <= `cutoff`
 * 
 *   False otherwise. This inequality measures how close the two floating point
 *   values are, scaled by the sum of their magnitudes.
 */
emmy.numerical.quadrature.common.narrow_slice_QMARK_ = (function emmy$numerical$quadrature$common$narrow_slice_QMARK_(a,b,cutoff){
var sum = (Math.abs(a) + Math.abs(b));
return (((sum <= cutoff)) || ((Math.abs((b - a)) <= (cutoff * sum))));
});
/**
 * Generates an `integrator` function from two functions with the following
 *   signatures and descriptions:
 * 
 *   - `(area-fn f a b)` estimates the integral of `f` over the interval `(a, b)`
 *   with no subdivision, nothing clever at all.
 * 
 *   - `(seq-fn f a b opts)` returns a sequence of successively refined estimates
 *   of the integral of `f` over `(a, b)`. `opts` can contain kv pairs that
 *   configure the behavior of the sequence function (a sequence of the number of
 *   integration slices to use, for example.)
 * 
 *   The returned function has the signature:
 * 
 *   `(f a b opts)`
 * 
 *   All `opts` are passed on to `seq-fn`, _and_ to `us/seq-limit` internally,
 *   where the options configure the checks on sequence convergence.
 */
emmy.numerical.quadrature.common.make_integrator_fn = (function emmy$numerical$quadrature$common$make_integrator_fn(area_fn,seq_fn){
return (function() {
var emmy$numerical$quadrature$common$make_integrator_fn_$_call = null;
var emmy$numerical$quadrature$common$make_integrator_fn_$_call__3 = (function (f,a,b){
return emmy$numerical$quadrature$common$make_integrator_fn_$_call.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
});
var emmy$numerical$quadrature$common$make_integrator_fn_$_call__4 = (function (f,a,b,p__54284){
var map__54285 = p__54284;
var map__54285__$1 = cljs.core.__destructure_map(map__54285);
var opts = map__54285__$1;
var roundoff_cutoff = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54285__$1,new cljs.core.Keyword(null,"roundoff-cutoff","roundoff-cutoff",1739938187),emmy.numerical.quadrature.common._STAR_roundoff_cutoff_STAR_);
if(emmy.numerical.quadrature.common.narrow_slice_QMARK_(a,b,roundoff_cutoff)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"emmy.numerical.quadrature.common",null,136,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Integrating narrow slice: ",a,b], null);
}),null)),null,2009675594,null);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(1),new cljs.core.Keyword(null,"result","result",1415092211),(area_fn.cljs$core$IFn$_invoke$arity$3 ? area_fn.cljs$core$IFn$_invoke$arity$3(f,a,b) : area_fn.call(null,f,a,b))], null);
} else {
return emmy.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2((seq_fn.cljs$core$IFn$_invoke$arity$4 ? seq_fn.cljs$core$IFn$_invoke$arity$4(f,a,b,opts) : seq_fn.call(null,f,a,b,opts)),opts);
}
});
emmy$numerical$quadrature$common$make_integrator_fn_$_call = function(f,a,b,p__54284){
switch(arguments.length){
case 3:
return emmy$numerical$quadrature$common$make_integrator_fn_$_call__3.call(this,f,a,b);
case 4:
return emmy$numerical$quadrature$common$make_integrator_fn_$_call__4.call(this,f,a,b,p__54284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emmy$numerical$quadrature$common$make_integrator_fn_$_call.cljs$core$IFn$_invoke$arity$3 = emmy$numerical$quadrature$common$make_integrator_fn_$_call__3;
emmy$numerical$quadrature$common$make_integrator_fn_$_call.cljs$core$IFn$_invoke$arity$4 = emmy$numerical$quadrature$common$make_integrator_fn_$_call__4;
return emmy$numerical$quadrature$common$make_integrator_fn_$_call;
})()
});
/**
 * Taken from `clojure.tools.macro/name-with-attributes`.
 * 
 *   Handles optional docstrings and attribute maps for a name to be defined in a
 *   list of macro arguments. If the first macro argument is a string, it is added
 *   as a docstring to name and removed from the macro argument list. If afterwards
 *   the first macro argument is a map, its entries are added to the name's
 *   metadata map and the map is removed from the macro argument list. The return
 *   value is a vector containing the name with its extended metadata map and the
 *   list of unprocessed macro arguments.
 */
emmy.numerical.quadrature.common.name_with_attributes = (function emmy$numerical$quadrature$common$name_with_attributes(var_args){
var G__54288 = arguments.length;
switch (G__54288) {
case 2:
return emmy.numerical.quadrature.common.name_with_attributes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.numerical.quadrature.common.name_with_attributes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.common.name_with_attributes.cljs$core$IFn$_invoke$arity$2 = (function (name,body){
return emmy.numerical.quadrature.common.name_with_attributes.cljs$core$IFn$_invoke$arity$3(name,body,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.quadrature.common.name_with_attributes.cljs$core$IFn$_invoke$arity$3 = (function (name,body,meta){
var vec__54290 = ((typeof cljs.core.first(body) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(body),cljs.core.next(body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body], null));
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54290,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54290,(1),null);
var vec__54293 = ((cljs.core.map_QMARK_(cljs.core.first(body__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(body__$1),cljs.core.next(body__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,body__$1], null));
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54293,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54293,(1),null);
var attr__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,attr], 0));
var attr__$2 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr__$1);
var attr__$3 = (cljs.core.truth_((meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(name) : meta.call(null,name)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(name) : meta.call(null,name)),attr__$2):attr__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(name,attr__$3),body__$2], null);
}));

(emmy.numerical.quadrature.common.name_with_attributes.cljs$lang$maxFixedArity = 3);

/**
 * Helper macro for defining integrators.
 */
emmy.numerical.quadrature.common.defintegrator = (function emmy$numerical$quadrature$common$defintegrator(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54330 = arguments.length;
var i__5898__auto___54331 = (0);
while(true){
if((i__5898__auto___54331 < len__5897__auto___54330)){
args__5903__auto__.push((arguments[i__5898__auto___54331]));

var G__54332 = (i__5898__auto___54331 + (1));
i__5898__auto___54331 = G__54332;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return emmy.numerical.quadrature.common.defintegrator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(emmy.numerical.quadrature.common.defintegrator.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sym,body){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
var meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(1),null)),(2),null))], null);
var vec__54300 = emmy.numerical.quadrature.common.name_with_attributes.cljs$core$IFn$_invoke$arity$3(sym,body,meta);
var sym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54300,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54300,(1),null);
var map__54303 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,body__$1);
var map__54303__$1 = cljs.core.__destructure_map(map__54303);
var area_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54303__$1,new cljs.core.Keyword(null,"area-fn","area-fn",-1818898652));
var seq_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54303__$1,new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231));
if(cljs.core.truth_(seq_fn)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"defintegrator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)+": seq-fn cannot be nil"))+"\n"+"seq-fn")));
}

if(cljs.core.truth_(area_fn)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"defintegrator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)+": area-fn cannot be nil"))+"\n"+"area-fn")));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,sym__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.numerical.quadrature.common","make-integrator-fn","emmy.numerical.quadrature.common/make-integrator-fn",1387673449,null),null,(1),null)),(new cljs.core.List(null,area_fn,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,seq_fn,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(emmy.numerical.quadrature.common.defintegrator.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(emmy.numerical.quadrature.common.defintegrator.cljs$lang$applyTo = (function (seq54296){
var G__54297 = cljs.core.first(seq54296);
var seq54296__$1 = cljs.core.next(seq54296);
var G__54298 = cljs.core.first(seq54296__$1);
var seq54296__$2 = cljs.core.next(seq54296__$1);
var G__54299 = cljs.core.first(seq54296__$2);
var seq54296__$3 = cljs.core.next(seq54296__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54297,G__54298,G__54299,seq54296__$3);
}));


//# sourceMappingURL=emmy.numerical.quadrature.common.js.map
