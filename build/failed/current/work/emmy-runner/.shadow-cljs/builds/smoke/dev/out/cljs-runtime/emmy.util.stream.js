goog.provide('emmy.util.stream');
/**
 * Realizes, simplifies and prints `n` elements from the supplied sequence `xs`.
 */
emmy.util.stream.seq_print = (function emmy$util$stream$seq_print(n,xs){
var seq__38998 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__38999 = null;
var count__39000 = (0);
var i__39001 = (0);
while(true){
if((i__39001 < count__39000)){
var x = chunk__38999.cljs$core$IIndexed$_nth$arity$2(null,i__39001);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__39104 = seq__38998;
var G__39105 = chunk__38999;
var G__39106 = count__39000;
var G__39107 = (i__39001 + (1));
seq__38998 = G__39104;
chunk__38999 = G__39105;
count__39000 = G__39106;
i__39001 = G__39107;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38998);
if(temp__5825__auto__){
var seq__38998__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38998__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__38998__$1);
var G__39108 = cljs.core.chunk_rest(seq__38998__$1);
var G__39109 = c__5694__auto__;
var G__39110 = cljs.core.count(c__5694__auto__);
var G__39111 = (0);
seq__38998 = G__39108;
chunk__38999 = G__39109;
count__39000 = G__39110;
i__39001 = G__39111;
continue;
} else {
var x = cljs.core.first(seq__38998__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__39112 = cljs.core.next(seq__38998__$1);
var G__39113 = null;
var G__39114 = (0);
var G__39115 = (0);
seq__38998 = G__39112;
chunk__38999 = G__39113;
count__39000 = G__39114;
i__39001 = G__39115;
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
var seq__39007 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__39008 = null;
var count__39009 = (0);
var i__39010 = (0);
while(true){
if((i__39010 < count__39009)){
var x = chunk__39008.cljs$core$IIndexed$_nth$arity$2(null,i__39010);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__39116 = seq__39007;
var G__39117 = chunk__39008;
var G__39118 = count__39009;
var G__39119 = (i__39010 + (1));
seq__39007 = G__39116;
chunk__39008 = G__39117;
count__39009 = G__39118;
i__39010 = G__39119;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39007);
if(temp__5825__auto__){
var seq__39007__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39007__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39007__$1);
var G__39120 = cljs.core.chunk_rest(seq__39007__$1);
var G__39121 = c__5694__auto__;
var G__39122 = cljs.core.count(c__5694__auto__);
var G__39123 = (0);
seq__39007 = G__39120;
chunk__39008 = G__39121;
count__39009 = G__39122;
i__39010 = G__39123;
continue;
} else {
var x = cljs.core.first(seq__39007__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__39124 = cljs.core.next(seq__39007__$1);
var G__39125 = null;
var G__39126 = (0);
var G__39127 = (0);
seq__39007 = G__39124;
chunk__39008 = G__39125;
count__39009 = G__39126;
i__39010 = G__39127;
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
var G__39040 = arguments.length;
switch (G__39040) {
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
return cljs.core.iterate((function (p1__39036_SHARP_){
return (n * p1__39036_SHARP_);
}),x);
}));

(emmy.util.stream.powers.cljs$lang$maxFixedArity = 2);

/**
 * Returns an infinite sequence of `x / n^i`, starting with `i == 0`. `x` defaults
 *   to 1.
 */
emmy.util.stream.zeno = (function emmy$util$stream$zeno(var_args){
var G__39045 = arguments.length;
switch (G__39045) {
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
return cljs.core.iterate((function (p1__39043_SHARP_){
return (p1__39043_SHARP_ / n);
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
var vec__39054 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__39057,o){
var vec__39058 = p__39057;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39058,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39058,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(o) : pred.call(null,o)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(t,o),f], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(f,o)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39054,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39054,(1),null);
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
var G__39065 = arguments.length;
switch (G__39065) {
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

(emmy.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2 = (function (xs,p__39066){
var map__39067 = p__39066;
var map__39067__$1 = cljs.core.__destructure_map(map__39067);
var minterms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39067__$1,new cljs.core.Keyword(null,"minterms","minterms",-1267652170),(2));
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39067__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39067__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),emmy.util.sqrt_machine_epsilon);
var convergence_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39067__$1,new cljs.core.Keyword(null,"convergence-fn","convergence-fn",-157362513),emmy.util.stream.close_enuf_QMARK_(tolerance));
if(cljs.core.empty_QMARK_(xs)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),false,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),null], null);
} else {
var stop_QMARK_ = (cljs.core.truth_(maxterms)?(function (i){
return (i >= maxterms);
}):cljs.core.constantly(false));
var G__39087 = xs;
var vec__39088 = G__39087;
var seq__39089 = cljs.core.seq(vec__39088);
var first__39090 = cljs.core.first(seq__39089);
var seq__39089__$1 = cljs.core.next(seq__39089);
var x1 = first__39090;
var vec__39092 = seq__39089__$1;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39092,(0),null);
var more = vec__39092;
var terms_checked = (1);
var G__39087__$1 = G__39087;
var terms_checked__$1 = terms_checked;
while(true){
var vec__39095 = G__39087__$1;
var seq__39096 = cljs.core.seq(vec__39095);
var first__39097 = cljs.core.first(seq__39096);
var seq__39096__$1 = cljs.core.next(seq__39096);
var x1__$1 = first__39097;
var vec__39098 = seq__39096__$1;
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39098,(0),null);
var more__$1 = vec__39098;
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
var G__39148 = more__$1;
var G__39149 = terms_checked__$3;
G__39087__$1 = G__39148;
terms_checked__$1 = G__39149;
continue;
}
}
break;
}
}
}));

(emmy.util.stream.seq_limit.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=emmy.util.stream.js.map
