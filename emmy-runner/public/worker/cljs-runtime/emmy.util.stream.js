import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs.pprint.js";
import "./emmy.generic.js";
import "./emmy.util.js";
goog.provide('emmy.util.stream');
/**
 * Realizes, simplifies and prints `n` elements from the supplied sequence `xs`.
 */
emmy.util.stream.seq_print = (function emmy$util$stream$seq_print(n,xs){
var seq__71264 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__71265 = null;
var count__71266 = (0);
var i__71267 = (0);
while(true){
if((i__71267 < count__71266)){
var x = chunk__71265.cljs$core$IIndexed$_nth$arity$2(null,i__71267);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__71360 = seq__71264;
var G__71361 = chunk__71265;
var G__71362 = count__71266;
var G__71363 = (i__71267 + (1));
seq__71264 = G__71360;
chunk__71265 = G__71361;
count__71266 = G__71362;
i__71267 = G__71363;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__71264);
if(temp__5825__auto__){
var seq__71264__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71264__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__71264__$1);
var G__71364 = cljs.core.chunk_rest(seq__71264__$1);
var G__71365 = c__5694__auto__;
var G__71366 = cljs.core.count(c__5694__auto__);
var G__71367 = (0);
seq__71264 = G__71364;
chunk__71265 = G__71365;
count__71266 = G__71366;
i__71267 = G__71367;
continue;
} else {
var x = cljs.core.first(seq__71264__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__71368 = cljs.core.next(seq__71264__$1);
var G__71369 = null;
var G__71370 = (0);
var G__71371 = (0);
seq__71264 = G__71368;
chunk__71265 = G__71369;
count__71266 = G__71370;
i__71267 = G__71371;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Realizes, simplifies and pretty-prints `n` elements from the supplied sequence
 *   `xs`.
 */
emmy.util.stream.pprint = (function emmy$util$stream$pprint(n,xs){
var seq__71272 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__71273 = null;
var count__71274 = (0);
var i__71275 = (0);
while(true){
if((i__71275 < count__71274)){
var x = chunk__71273.cljs$core$IIndexed$_nth$arity$2(null,i__71275);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__71372 = seq__71272;
var G__71373 = chunk__71273;
var G__71374 = count__71274;
var G__71375 = (i__71275 + (1));
seq__71272 = G__71372;
chunk__71273 = G__71373;
count__71274 = G__71374;
i__71275 = G__71375;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__71272);
if(temp__5825__auto__){
var seq__71272__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71272__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__71272__$1);
var G__71376 = cljs.core.chunk_rest(seq__71272__$1);
var G__71377 = c__5694__auto__;
var G__71378 = cljs.core.count(c__5694__auto__);
var G__71379 = (0);
seq__71272 = G__71376;
chunk__71273 = G__71377;
count__71274 = G__71378;
i__71275 = G__71379;
continue;
} else {
var x = cljs.core.first(seq__71272__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__71380 = cljs.core.next(seq__71272__$1);
var G__71381 = null;
var G__71382 = (0);
var G__71383 = (0);
seq__71272 = G__71380;
chunk__71273 = G__71381;
count__71274 = G__71382;
i__71275 = G__71383;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Returns an infinite sequence of `x * n^i`, starting with `i == 0`. `x` defaults
 *   to 1.
 */
emmy.util.stream.powers = (function emmy$util$stream$powers(var_args){
var G__71295 = arguments.length;
switch (G__71295) {
case 1:
return emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$1 = (function (n){
return emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$2(n,(1));
}));

(emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
return cljs.core.iterate((function (p1__71291_SHARP_){
return (n * p1__71291_SHARP_);
}),x);
}));

(emmy.util.stream.powers.cljs$lang$maxFixedArity = 2);

/**
 * Returns an infinite sequence of `x / n^i`, starting with `i == 0`. `x` defaults
 *   to 1.
 */
emmy.util.stream.zeno = (function emmy$util$stream$zeno(var_args){
var G__71306 = arguments.length;
switch (G__71306) {
case 1:
return emmy.util.stream.zeno.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.util.stream.zeno.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.util.stream.zeno.cljs$core$IFn$_invoke$arity$1 = (function (n){
return emmy.util.stream.zeno.cljs$core$IFn$_invoke$arity$2(n,(1));
}));

(emmy.util.stream.zeno.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
return cljs.core.iterate((function (p1__71299_SHARP_){
return (p1__71299_SHARP_ / n);
}),x);
}));

(emmy.util.stream.zeno.cljs$lang$maxFixedArity = 2);

/**
 * Generates a new vector of length `n` by applying the function `f` to integers
 *   in the range $[0,n)$.
 */
emmy.util.stream.vector_COLON_generate = (function emmy$util$stream$vector_COLON_generate(n,f){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
/**
 * Returns a pair of vectors:
 * 
 *   - the first contains the items in coll for which (pred item) returns true
 *   - the second contains the items for which (pred item) returns false
 * 
 *   pred must be free of side-effects.
 */
emmy.util.stream.separatev = (function emmy$util$stream$separatev(pred,coll){
var vec__71307 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__71310,o){
var vec__71311 = p__71310;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71311,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71311,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(o) : pred.call(null,o)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(t,o),f], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(f,o)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71307,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71307,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(ts),cljs.core.persistent_BANG_(fs)], null);
});
/**
 * relative closeness, transitioning to absolute closeness when we get
 *   significantly smaller than 1.
 */
emmy.util.stream.close_enuf_QMARK_ = (function emmy$util$stream$close_enuf_QMARK_(tolerance){
return (function (h1,h2){
return (emmy.generic.abs.cljs$core$IFn$_invoke$arity$1((h1 - h2)) <= ((0.5 * tolerance) * (((2) + emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(h1)) + emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(h2))));
});
});
/**
 * Accepts a sequence, iterates through it and returns a dictionary of this form:
 * 
 *   {:converged? <boolean>
 * :terms-checked <int>
 * :result <sequence element>}
 * 
 *   `:converged?` is true if the sequence reached convergence by passing the tests
 *   described below, false otherwise.
 * 
 *   `:terms-checked` will be equal to the number of items examined in the
 *   sequence.
 * 
 *   `:result` holds the final item examined in the sequence.
 * 
 *   ## Optional keyword args:
 * 
 *   `:convergence-fn` user-supplied function of two successive elements in `xs`
 *   that stops iteration and signals convergence if it returns true.
 * 
 *   `:minterms` `seq-limit` won't return until at least this many terms from the
 *   sequence have been processed.
 * 
 *   `:maxterms` `seq-limit` will return (with `:converged? false`) after
 *   processing this many elements without passing any other checks.
 * 
 *   `:tolerance` A combination of relative and absolute tolerance. defaults to
 *   `sqrt(machine epsilon)`.
 */
emmy.util.stream.seq_limit = (function emmy$util$stream$seq_limit(var_args){
var G__71316 = arguments.length;
switch (G__71316) {
case 1:
return emmy.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return emmy.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2 = (function (xs,p__71319){
var map__71323 = p__71319;
var map__71323__$1 = cljs.core.__destructure_map(map__71323);
var minterms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71323__$1,new cljs.core.Keyword(null,"minterms","minterms",-1267652170),(2));
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71323__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71323__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),emmy.util.sqrt_machine_epsilon);
var convergence_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71323__$1,new cljs.core.Keyword(null,"convergence-fn","convergence-fn",-157362513),emmy.util.stream.close_enuf_QMARK_(tolerance));
if(cljs.core.empty_QMARK_(xs)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),false,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),null], null);
} else {
var stop_QMARK_ = (cljs.core.truth_(maxterms)?(function (i){
return (i >= maxterms);
}):cljs.core.constantly(false));
var G__71335 = xs;
var vec__71336 = G__71335;
var seq__71337 = cljs.core.seq(vec__71336);
var first__71338 = cljs.core.first(seq__71337);
var seq__71337__$1 = cljs.core.next(seq__71337);
var x1 = first__71338;
var vec__71339 = seq__71337__$1;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71339,(0),null);
var more = vec__71339;
var terms_checked = (1);
var G__71335__$1 = G__71335;
var terms_checked__$1 = terms_checked;
while(true){
var vec__71342 = G__71335__$1;
var seq__71343 = cljs.core.seq(vec__71342);
var first__71344 = cljs.core.first(seq__71343);
var seq__71343__$1 = cljs.core.next(seq__71343);
var x1__$1 = first__71344;
var vec__71345 = seq__71343__$1;
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71345,(0),null);
var more__$1 = vec__71345;
var terms_checked__$2 = terms_checked__$1;
if(cljs.core.empty_QMARK_(more__$1)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),false,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),terms_checked__$2,new cljs.core.Keyword(null,"result","result",1415092211),x1__$1], null);
} else {
var terms_checked__$3 = (terms_checked__$2 + (1));
var converged_QMARK_ = (convergence_fn.cljs$core$IFn$_invoke$arity$2 ? convergence_fn.cljs$core$IFn$_invoke$arity$2(x1__$1,x2__$1) : convergence_fn.call(null,x1__$1,x2__$1));
if(cljs.core.truth_((function (){var and__5160__auto__ = (terms_checked__$3 >= minterms);
if(and__5160__auto__){
var or__5162__auto__ = converged_QMARK_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return stop_QMARK_(terms_checked__$3);
}
} else {
return and__5160__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),converged_QMARK_,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),terms_checked__$3,new cljs.core.Keyword(null,"result","result",1415092211),x2__$1], null);
} else {
var G__71394 = more__$1;
var G__71395 = terms_checked__$3;
G__71335__$1 = G__71394;
terms_checked__$1 = G__71395;
continue;
}
}
break;
}
}
}));

(emmy.util.stream.seq_limit.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=emmy.util.stream.js.map
