goog.provide('emmy.util.stream');
/**
 * Realizes, simplifies and prints `n` elements from the supplied sequence `xs`.
 */
emmy.util.stream.seq_print = (function emmy$util$stream$seq_print(n,xs){
var seq__38983 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__38984 = null;
var count__38985 = (0);
var i__38986 = (0);
while(true){
if((i__38986 < count__38985)){
var x = chunk__38984.cljs$core$IIndexed$_nth$arity$2(null,i__38986);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__39077 = seq__38983;
var G__39078 = chunk__38984;
var G__39079 = count__38985;
var G__39080 = (i__38986 + (1));
seq__38983 = G__39077;
chunk__38984 = G__39078;
count__38985 = G__39079;
i__38986 = G__39080;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38983);
if(temp__5825__auto__){
var seq__38983__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38983__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__38983__$1);
var G__39081 = cljs.core.chunk_rest(seq__38983__$1);
var G__39082 = c__5694__auto__;
var G__39083 = cljs.core.count(c__5694__auto__);
var G__39084 = (0);
seq__38983 = G__39081;
chunk__38984 = G__39082;
count__38985 = G__39083;
i__38986 = G__39084;
continue;
} else {
var x = cljs.core.first(seq__38983__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__39085 = cljs.core.next(seq__38983__$1);
var G__39086 = null;
var G__39087 = (0);
var G__39088 = (0);
seq__38983 = G__39085;
chunk__38984 = G__39086;
count__38985 = G__39087;
i__38986 = G__39088;
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
var seq__39000 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__39001 = null;
var count__39002 = (0);
var i__39003 = (0);
while(true){
if((i__39003 < count__39002)){
var x = chunk__39001.cljs$core$IIndexed$_nth$arity$2(null,i__39003);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__39089 = seq__39000;
var G__39090 = chunk__39001;
var G__39091 = count__39002;
var G__39092 = (i__39003 + (1));
seq__39000 = G__39089;
chunk__39001 = G__39090;
count__39002 = G__39091;
i__39003 = G__39092;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39000);
if(temp__5825__auto__){
var seq__39000__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39000__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39000__$1);
var G__39093 = cljs.core.chunk_rest(seq__39000__$1);
var G__39094 = c__5694__auto__;
var G__39095 = cljs.core.count(c__5694__auto__);
var G__39096 = (0);
seq__39000 = G__39093;
chunk__39001 = G__39094;
count__39002 = G__39095;
i__39003 = G__39096;
continue;
} else {
var x = cljs.core.first(seq__39000__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__39097 = cljs.core.next(seq__39000__$1);
var G__39098 = null;
var G__39099 = (0);
var G__39100 = (0);
seq__39000 = G__39097;
chunk__39001 = G__39098;
count__39002 = G__39099;
i__39003 = G__39100;
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
var G__39013 = arguments.length;
switch (G__39013) {
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
return cljs.core.iterate((function (p1__39008_SHARP_){
return (n * p1__39008_SHARP_);
}),x);
}));

(emmy.util.stream.powers.cljs$lang$maxFixedArity = 2);

/**
 * Returns an infinite sequence of `x / n^i`, starting with `i == 0`. `x` defaults
 *   to 1.
 */
emmy.util.stream.zeno = (function emmy$util$stream$zeno(var_args){
var G__39024 = arguments.length;
switch (G__39024) {
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
return cljs.core.iterate((function (p1__39022_SHARP_){
return (p1__39022_SHARP_ / n);
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
var vec__39037 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__39043,o){
var vec__39044 = p__39043;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39044,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39044,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(o) : pred.call(null,o)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(t,o),f], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(f,o)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39037,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39037,(1),null);
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
var G__39053 = arguments.length;
switch (G__39053) {
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

(emmy.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2 = (function (xs,p__39054){
var map__39055 = p__39054;
var map__39055__$1 = cljs.core.__destructure_map(map__39055);
var minterms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39055__$1,new cljs.core.Keyword(null,"minterms","minterms",-1267652170),(2));
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39055__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39055__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),emmy.util.sqrt_machine_epsilon);
var convergence_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39055__$1,new cljs.core.Keyword(null,"convergence-fn","convergence-fn",-157362513),emmy.util.stream.close_enuf_QMARK_(tolerance));
if(cljs.core.empty_QMARK_(xs)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),false,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),null], null);
} else {
var stop_QMARK_ = (cljs.core.truth_(maxterms)?(function (i){
return (i >= maxterms);
}):cljs.core.constantly(false));
var G__39063 = xs;
var vec__39064 = G__39063;
var seq__39065 = cljs.core.seq(vec__39064);
var first__39066 = cljs.core.first(seq__39065);
var seq__39065__$1 = cljs.core.next(seq__39065);
var x1 = first__39066;
var vec__39067 = seq__39065__$1;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39067,(0),null);
var more = vec__39067;
var terms_checked = (1);
var G__39063__$1 = G__39063;
var terms_checked__$1 = terms_checked;
while(true){
var vec__39071 = G__39063__$1;
var seq__39072 = cljs.core.seq(vec__39071);
var first__39073 = cljs.core.first(seq__39072);
var seq__39072__$1 = cljs.core.next(seq__39072);
var x1__$1 = first__39073;
var vec__39074 = seq__39072__$1;
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39074,(0),null);
var more__$1 = vec__39074;
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
var G__39107 = more__$1;
var G__39108 = terms_checked__$3;
G__39063__$1 = G__39107;
terms_checked__$1 = G__39108;
continue;
}
}
break;
}
}
}));

(emmy.util.stream.seq_limit.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=emmy.util.stream.js.map
