goog.provide('emmy.util.stream');
/**
 * Realizes, simplifies and prints `n` elements from the supplied sequence `xs`.
 */
emmy.util.stream.seq_print = (function emmy$util$stream$seq_print(n,xs){
var seq__38861 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__38862 = null;
var count__38863 = (0);
var i__38864 = (0);
while(true){
if((i__38864 < count__38863)){
var x = chunk__38862.cljs$core$IIndexed$_nth$arity$2(null,i__38864);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__38966 = seq__38861;
var G__38967 = chunk__38862;
var G__38968 = count__38863;
var G__38969 = (i__38864 + (1));
seq__38861 = G__38966;
chunk__38862 = G__38967;
count__38863 = G__38968;
i__38864 = G__38969;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38861);
if(temp__5825__auto__){
var seq__38861__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38861__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__38861__$1);
var G__38970 = cljs.core.chunk_rest(seq__38861__$1);
var G__38971 = c__5694__auto__;
var G__38972 = cljs.core.count(c__5694__auto__);
var G__38973 = (0);
seq__38861 = G__38970;
chunk__38862 = G__38971;
count__38863 = G__38972;
i__38864 = G__38973;
continue;
} else {
var x = cljs.core.first(seq__38861__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__38974 = cljs.core.next(seq__38861__$1);
var G__38975 = null;
var G__38976 = (0);
var G__38977 = (0);
seq__38861 = G__38974;
chunk__38862 = G__38975;
count__38863 = G__38976;
i__38864 = G__38977;
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
var seq__38880 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__38881 = null;
var count__38882 = (0);
var i__38883 = (0);
while(true){
if((i__38883 < count__38882)){
var x = chunk__38881.cljs$core$IIndexed$_nth$arity$2(null,i__38883);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__38980 = seq__38880;
var G__38981 = chunk__38881;
var G__38982 = count__38882;
var G__38983 = (i__38883 + (1));
seq__38880 = G__38980;
chunk__38881 = G__38981;
count__38882 = G__38982;
i__38883 = G__38983;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38880);
if(temp__5825__auto__){
var seq__38880__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38880__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__38880__$1);
var G__38984 = cljs.core.chunk_rest(seq__38880__$1);
var G__38985 = c__5694__auto__;
var G__38986 = cljs.core.count(c__5694__auto__);
var G__38987 = (0);
seq__38880 = G__38984;
chunk__38881 = G__38985;
count__38882 = G__38986;
i__38883 = G__38987;
continue;
} else {
var x = cljs.core.first(seq__38880__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__38988 = cljs.core.next(seq__38880__$1);
var G__38989 = null;
var G__38990 = (0);
var G__38991 = (0);
seq__38880 = G__38988;
chunk__38881 = G__38989;
count__38882 = G__38990;
i__38883 = G__38991;
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
var G__38903 = arguments.length;
switch (G__38903) {
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
return cljs.core.iterate((function (p1__38895_SHARP_){
return (n * p1__38895_SHARP_);
}),x);
}));

(emmy.util.stream.powers.cljs$lang$maxFixedArity = 2);

/**
 * Returns an infinite sequence of `x / n^i`, starting with `i == 0`. `x` defaults
 *   to 1.
 */
emmy.util.stream.zeno = (function emmy$util$stream$zeno(var_args){
var G__38913 = arguments.length;
switch (G__38913) {
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
return cljs.core.iterate((function (p1__38907_SHARP_){
return (p1__38907_SHARP_ / n);
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
var vec__38924 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38927,o){
var vec__38928 = p__38927;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38928,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38928,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(o) : pred.call(null,o)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(t,o),f], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(f,o)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38924,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38924,(1),null);
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
var G__38937 = arguments.length;
switch (G__38937) {
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

(emmy.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2 = (function (xs,p__38939){
var map__38940 = p__38939;
var map__38940__$1 = cljs.core.__destructure_map(map__38940);
var minterms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38940__$1,new cljs.core.Keyword(null,"minterms","minterms",-1267652170),(2));
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38940__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38940__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),emmy.util.sqrt_machine_epsilon);
var convergence_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38940__$1,new cljs.core.Keyword(null,"convergence-fn","convergence-fn",-157362513),emmy.util.stream.close_enuf_QMARK_(tolerance));
if(cljs.core.empty_QMARK_(xs)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),false,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),null], null);
} else {
var stop_QMARK_ = (cljs.core.truth_(maxterms)?(function (i){
return (i >= maxterms);
}):cljs.core.constantly(false));
var G__38947 = xs;
var vec__38948 = G__38947;
var seq__38949 = cljs.core.seq(vec__38948);
var first__38950 = cljs.core.first(seq__38949);
var seq__38949__$1 = cljs.core.next(seq__38949);
var x1 = first__38950;
var vec__38951 = seq__38949__$1;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38951,(0),null);
var more = vec__38951;
var terms_checked = (1);
var G__38947__$1 = G__38947;
var terms_checked__$1 = terms_checked;
while(true){
var vec__38954 = G__38947__$1;
var seq__38955 = cljs.core.seq(vec__38954);
var first__38956 = cljs.core.first(seq__38955);
var seq__38955__$1 = cljs.core.next(seq__38955);
var x1__$1 = first__38956;
var vec__38957 = seq__38955__$1;
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38957,(0),null);
var more__$1 = vec__38957;
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
var G__39001 = more__$1;
var G__39002 = terms_checked__$3;
G__38947__$1 = G__39001;
terms_checked__$1 = G__39002;
continue;
}
}
break;
}
}
}));

(emmy.util.stream.seq_limit.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=emmy.util.stream.js.map
