import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.math.integer.js";
import "./goog.math.long.js";
import "./clojure.walk.js";
goog.provide('emmy.util');
goog.scope(function(){
  emmy.util.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
/**
 * Takes a function and returns a pair of:
 * 
 *   - an atom that keeps track of fn invocation counts,
 *   - the instrumented fn
 */
emmy.util.counted = (function emmy$util$counted(var_args){
var G__61532 = arguments.length;
switch (G__61532) {
case 1:
return emmy.util.counted.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.util.counted.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.util.counted.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.util.counted.cljs$core$IFn$_invoke$arity$2(f,(0));
}));

(emmy.util.counted.cljs$core$IFn$_invoke$arity$2 = (function (f,initial_count){
var count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [count,(function (x){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.inc);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
})], null);
}));

(emmy.util.counted.cljs$lang$maxFixedArity = 2);

emmy.util.compute_sqrt = Math.sqrt;
emmy.util.compute_expt = Math.pow;
emmy.util.compute_abs = Math.abs;
emmy.util.biginttype = BigInt;
emmy.util.inttype = goog.math.Integer;
emmy.util.longtype = emmy.util.goog$module$goog$math$Long;
emmy.util.keyset = (function emmy$util$keyset(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(m));
});
/**
 * Returns a map of identical type and key set to `m`, with each value `v`
 *   transformed by the supplied function`f` into `(f v)`.
 */
emmy.util.map_vals = (function emmy$util$map_vals(f,m){
return cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.empty(m),m);
});
/**
 * Returns true if s matches the regex pattern re, false otherwise.
 */
emmy.util.re_matches_QMARK_ = (function emmy$util$re_matches_QMARK_(re,s){
return re.test(s);
});
emmy.util.bigint = (function emmy$util$bigint(x){
return BigInt(x);
});
/**
 * Returns true if the supplied `x` is a `BigInt`, false otherwise.
 */
emmy.util.bigint_QMARK_ = (function emmy$util$bigint_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bigint",goog.typeOf(x));
});
emmy.util.parse_bigint = (function emmy$util$parse_bigint(x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.util","bigint","emmy.util/bigint",-894648022,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
emmy.util.biginteger = (function emmy$util$biginteger(x){
return BigInt(x);
});
emmy.util.int$ = (function emmy$util$int(x){
return goog.math.Integer.fromNumber(x);
});
emmy.util.long$ = (function emmy$util$long(x){
return emmy.util.goog$module$goog$math$Long.fromNumber(x);
});
emmy.util.double$ = (function emmy$util$double(x){
if(typeof x === 'number'){
return x;
} else {
return Number(x);
}
});
emmy.util.unsupported = (function emmy$util$unsupported(s){
throw Error(s);
});
emmy.util.exception = (function emmy$util$exception(s){
throw Error(s);
});
/**
 * Returns a string containing a randomly generated unique identifier.
 */
emmy.util.uuid = (function emmy$util$uuid(){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
});
emmy.util.illegal = (function emmy$util$illegal(s){
throw Error(s);
});
emmy.util.interrupted = (function emmy$util$interrupted(s){
throw Error(s);
});
emmy.util.illegal_state = (function emmy$util$illegal_state(s){
throw Error(s);
});
emmy.util.arithmetic_ex = (function emmy$util$arithmetic_ex(s){
throw Error(s);
});
emmy.util.timeout_ex = (function emmy$util$timeout_ex(s){
throw Error(s);
});
emmy.util.failure_to_converge = (function emmy$util$failure_to_converge(s){
throw Error(s);
});
emmy.util.throwable_QMARK_ = (function emmy$util$throwable_QMARK_(t){
return (t instanceof Error);
});
/**
 * Walks x, removing namespaces from any symbols that are found.
 *   Convenient in unit tests, where the distinction between symbols
 *   in `clojure.core` vs. `cljs.core` is unimportant
 */
emmy.util.without_symbol_namespaces = (function emmy$util$without_symbol_namespaces(x){
return clojure.walk.postwalk((function (s){
if(cljs.core.qualified_symbol_QMARK_(s)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(s));
} else {
return s;
}
}),x);
});
emmy.util.machine_epsilon = (function (){var e = 1.0;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,(e + 1.0))){
return (e * 2.0);
} else {
var G__61597 = (e / 2.0);
e = G__61597;
continue;
}
break;
}
})();
emmy.util.sqrt_machine_epsilon = Math.sqrt(emmy.util.machine_epsilon);
emmy.util.parse_int = (function emmy$util$parse_int(s){
return Number.parseInt(s);
});
emmy.util.parse_double = (function emmy$util$parse_double(s){
return Number.parseFloat(s);
});
emmy.util.nan_QMARK_ = (function emmy$util$nan_QMARK_(x){
return Number.isNaN(x);
});

//# sourceMappingURL=emmy.util.js.map
