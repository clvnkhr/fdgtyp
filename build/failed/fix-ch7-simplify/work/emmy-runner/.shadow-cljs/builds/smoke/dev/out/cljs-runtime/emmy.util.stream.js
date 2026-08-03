goog.provide('emmy.util.stream');
/**
 * Realizes, simplifies and prints `n` elements from the supplied sequence `xs`.
 */
emmy.util.stream.seq_print = (function emmy$util$stream$seq_print(n,xs){
var seq__38937 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__38938 = null;
var count__38939 = (0);
var i__38940 = (0);
while(true){
if((i__38940 < count__38939)){
var x = chunk__38938.cljs$core$IIndexed$_nth$arity$2(null,i__38940);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__39050 = seq__38937;
var G__39051 = chunk__38938;
var G__39052 = count__38939;
var G__39053 = (i__38940 + (1));
seq__38937 = G__39050;
chunk__38938 = G__39051;
count__38939 = G__39052;
i__38940 = G__39053;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38937);
if(temp__5825__auto__){
var seq__38937__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38937__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__38937__$1);
var G__39055 = cljs.core.chunk_rest(seq__38937__$1);
var G__39056 = c__5694__auto__;
var G__39057 = cljs.core.count(c__5694__auto__);
var G__39058 = (0);
seq__38937 = G__39055;
chunk__38938 = G__39056;
count__38939 = G__39057;
i__38940 = G__39058;
continue;
} else {
var x = cljs.core.first(seq__38937__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__39060 = cljs.core.next(seq__38937__$1);
var G__39061 = null;
var G__39062 = (0);
var G__39063 = (0);
seq__38937 = G__39060;
chunk__38938 = G__39061;
count__38939 = G__39062;
i__38940 = G__39063;
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
var seq__38963 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__38964 = null;
var count__38965 = (0);
var i__38966 = (0);
while(true){
if((i__38966 < count__38965)){
var x = chunk__38964.cljs$core$IIndexed$_nth$arity$2(null,i__38966);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__39064 = seq__38963;
var G__39065 = chunk__38964;
var G__39066 = count__38965;
var G__39067 = (i__38966 + (1));
seq__38963 = G__39064;
chunk__38964 = G__39065;
count__38965 = G__39066;
i__38966 = G__39067;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38963);
if(temp__5825__auto__){
var seq__38963__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38963__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__38963__$1);
var G__39069 = cljs.core.chunk_rest(seq__38963__$1);
var G__39070 = c__5694__auto__;
var G__39071 = cljs.core.count(c__5694__auto__);
var G__39072 = (0);
seq__38963 = G__39069;
chunk__38964 = G__39070;
count__38965 = G__39071;
i__38966 = G__39072;
continue;
} else {
var x = cljs.core.first(seq__38963__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__39073 = cljs.core.next(seq__38963__$1);
var G__39074 = null;
var G__39075 = (0);
var G__39076 = (0);
seq__38963 = G__39073;
chunk__38964 = G__39074;
count__38965 = G__39075;
i__38966 = G__39076;
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
var G__38979 = arguments.length;
switch (G__38979) {
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
return cljs.core.iterate((function (p1__38976_SHARP_){
return (n * p1__38976_SHARP_);
}),x);
}));

(emmy.util.stream.powers.cljs$lang$maxFixedArity = 2);

/**
 * Returns an infinite sequence of `x / n^i`, starting with `i == 0`. `x` defaults
 *   to 1.
 */
emmy.util.stream.zeno = (function emmy$util$stream$zeno(var_args){
var G__38982 = arguments.length;
switch (G__38982) {
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
return cljs.core.iterate((function (p1__38980_SHARP_){
return (p1__38980_SHARP_ / n);
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
var vec__38994 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38998,o){
var vec__38999 = p__38998;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38999,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38999,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(o) : pred.call(null,o)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(t,o),f], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(f,o)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38994,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38994,(1),null);
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
var G__39010 = arguments.length;
switch (G__39010) {
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

(emmy.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2 = (function (xs,p__39011){
var map__39012 = p__39011;
var map__39012__$1 = cljs.core.__destructure_map(map__39012);
var minterms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39012__$1,new cljs.core.Keyword(null,"minterms","minterms",-1267652170),(2));
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39012__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39012__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),emmy.util.sqrt_machine_epsilon);
var convergence_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39012__$1,new cljs.core.Keyword(null,"convergence-fn","convergence-fn",-157362513),emmy.util.stream.close_enuf_QMARK_(tolerance));
if(cljs.core.empty_QMARK_(xs)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),false,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),null], null);
} else {
var stop_QMARK_ = (cljs.core.truth_(maxterms)?(function (i){
return (i >= maxterms);
}):cljs.core.constantly(false));
var G__39023 = xs;
var vec__39024 = G__39023;
var seq__39025 = cljs.core.seq(vec__39024);
var first__39026 = cljs.core.first(seq__39025);
var seq__39025__$1 = cljs.core.next(seq__39025);
var x1 = first__39026;
var vec__39027 = seq__39025__$1;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39027,(0),null);
var more = vec__39027;
var terms_checked = (1);
var G__39023__$1 = G__39023;
var terms_checked__$1 = terms_checked;
while(true){
var vec__39036 = G__39023__$1;
var seq__39037 = cljs.core.seq(vec__39036);
var first__39038 = cljs.core.first(seq__39037);
var seq__39037__$1 = cljs.core.next(seq__39037);
var x1__$1 = first__39038;
var vec__39039 = seq__39037__$1;
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39039,(0),null);
var more__$1 = vec__39039;
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
var G__39094 = more__$1;
var G__39095 = terms_checked__$3;
G__39023__$1 = G__39094;
terms_checked__$1 = G__39095;
continue;
}
}
break;
}
}
}));

(emmy.util.stream.seq_limit.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=emmy.util.stream.js.map
