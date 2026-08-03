goog.provide('emmy.series.impl');
/**
 * Form the infinite sequence starting with the supplied values. The
 *   remainder of the series will be filled with the zero-value
 *   corresponding to the first of the given values.
 */
emmy.series.impl.__GT_series = (function emmy$series$impl$__GT_series(xs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return xs;
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(cljs.core.first(xs)));
}),null,null)));
});
emmy.series.impl.negate = (function emmy$series$impl$negate(xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate,xs);
});
emmy.series.impl.seq_COLON__PLUS_ = (function emmy$series$impl$seq_COLON__PLUS_(f,g){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._PLUS_,f,g);
});
emmy.series.impl.c_PLUS_seq = (function emmy$series$impl$c_PLUS_seq(c,f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.first(f)),cljs.core.rest(f));
}),null,null));
});
emmy.series.impl.seq_PLUS_c = (function emmy$series$impl$seq_PLUS_c(f,c){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f),c),cljs.core.rest(f));
}),null,null));
});
emmy.series.impl.seq_COLON__ = (function emmy$series$impl$seq_COLON__(f,g){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._,f,g);
});
emmy.series.impl.seq_c = (function emmy$series$impl$seq_c(f,c){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(emmy.generic._.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f),c),cljs.core.rest(f));
}),null,null));
});
emmy.series.impl.c_seq = (function emmy$series$impl$c_seq(c,f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(emmy.generic._.cljs$core$IFn$_invoke$arity$2(c,cljs.core.first(f)),emmy.series.impl.negate(cljs.core.rest(f)));
}),null,null));
});
emmy.series.impl.seq_STAR_c = (function emmy$series$impl$seq_STAR_c(f,c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33224_SHARP_){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(p1__33224_SHARP_,c);
}),f);
});
emmy.series.impl.c_STAR_seq = (function emmy$series$impl$c_STAR_seq(c,f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33227_SHARP_){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(c,p1__33227_SHARP_);
}),f);
});
emmy.series.impl.seq_COLON__STAR_ = (function emmy$series$impl$seq_COLON__STAR_(f,g){
var step = (function emmy$series$impl$seq_COLON__STAR__$_step(f__$1){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.first(f__$1)))){
return cljs.core.cons(cljs.core.first(f__$1),emmy$series$impl$seq_COLON__STAR__$_step(cljs.core.rest(f__$1)));
} else {
var f_STAR_g = emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f__$1),cljs.core.first(g));
var f_STAR_G1 = emmy.series.impl.c_STAR_seq(cljs.core.first(f__$1),cljs.core.rest(g));
var F1_STAR_G = emmy$series$impl$seq_COLON__STAR__$_step(cljs.core.rest(f__$1));
return cljs.core.cons(f_STAR_g,emmy.series.impl.seq_COLON__PLUS_(f_STAR_G1,F1_STAR_G));
}
}),null,null));
});
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.first(g)))){
return cljs.core.cons(cljs.core.first(g),(function (){var G__33230 = f;
var G__33231 = cljs.core.rest(g);
return (emmy.series.impl.seq_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.series.impl.seq_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__33230,G__33231) : emmy.series.impl.seq_COLON__STAR_.call(null,G__33230,G__33231));
})());
} else {
return step(f);
}
}),null,null));
});
emmy.series.impl.div = (function emmy$series$impl$div(f,g){
return (new cljs.core.LazySeq(null,(function (){
var f0 = cljs.core.first(f);
var fs = cljs.core.rest(f);
var g0 = cljs.core.first(g);
var gs = cljs.core.rest(g);
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(f0);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(g0);
} else {
return and__5160__auto__;
}
})())){
return (emmy.series.impl.div.cljs$core$IFn$_invoke$arity$2 ? emmy.series.impl.div.cljs$core$IFn$_invoke$arity$2(fs,gs) : emmy.series.impl.div.call(null,fs,gs));
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(f0))){
return cljs.core.cons(f0,(emmy.series.impl.div.cljs$core$IFn$_invoke$arity$2 ? emmy.series.impl.div.cljs$core$IFn$_invoke$arity$2(fs,g) : emmy.series.impl.div.call(null,fs,g)));
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(g0))){
return emmy.util.arithmetic_ex("ERROR: denominator has a zero constant term");
} else {
var q = emmy.generic.div.cljs$core$IFn$_invoke$arity$2(f0,g0);
return cljs.core.cons(q,(function (){var G__33238 = emmy.series.impl.seq_COLON__(fs,emmy.series.impl.c_STAR_seq(q,gs));
var G__33239 = g;
return (emmy.series.impl.div.cljs$core$IFn$_invoke$arity$2 ? emmy.series.impl.div.cljs$core$IFn$_invoke$arity$2(G__33238,G__33239) : emmy.series.impl.div.call(null,G__33238,G__33239));
})());

}
}
}
}),null,null));
});
emmy.series.impl.invert = (function emmy$series$impl$invert(f){
return (new cljs.core.LazySeq(null,(function (){
var finv = emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(cljs.core.first(f));
var F1_STAR_Finv = emmy.series.impl.seq_COLON__STAR_(cljs.core.rest(f),(emmy.series.impl.invert.cljs$core$IFn$_invoke$arity$1 ? emmy.series.impl.invert.cljs$core$IFn$_invoke$arity$1(f) : emmy.series.impl.invert.call(null,f)));
var tail = emmy.series.impl.c_STAR_seq(finv,emmy.series.impl.negate(F1_STAR_Finv));
return cljs.core.cons(finv,tail);
}),null,null));
});
emmy.series.impl.c_div_seq = (function emmy$series$impl$c_div_seq(c,f){
return emmy.series.impl.c_STAR_seq(c,emmy.series.impl.invert(f));
});
emmy.series.impl.seq_div_c = (function emmy$series$impl$seq_div_c(f,c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33242_SHARP_){
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(p1__33242_SHARP_,c);
}),f);
});
emmy.series.impl.compose = (function emmy$series$impl$compose(f,g){
var step = (function emmy$series$impl$compose_$_step(f__$1){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.first(g)))){
} else {
throw (new Error("Assert failed: (g/zero? (first g))"));
}

var vec__33259 = f__$1;
var seq__33260 = cljs.core.seq(vec__33259);
var first__33261 = cljs.core.first(seq__33260);
var seq__33260__$1 = cljs.core.next(seq__33260);
var f0 = first__33261;
var fs = seq__33260__$1;
var gs = cljs.core.rest(g);
var tail = emmy.series.impl.seq_COLON__STAR_(gs,emmy$series$impl$compose_$_step(fs));
return cljs.core.cons(f0,tail);
}),null,null));
});
return step(f);
});
emmy.series.impl.revert = (function emmy$series$impl$revert(f){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.first(f)))){
} else {
throw (new Error("Assert failed: (g/zero? (first f))"));
}

var step = (function emmy$series$impl$revert_$_step(f__$1){
return (new cljs.core.LazySeq(null,(function (){
var F1 = cljs.core.rest(f__$1);
var R = emmy$series$impl$revert_$_step(f__$1);
return cljs.core.cons((0),emmy.series.impl.invert(emmy.series.impl.compose(F1,R)));
}),null,null));
});
return step(f);
});
emmy.series.impl.deriv = (function emmy$series$impl$deriv(f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,cljs.core.rest(f),cljs.core.iterate(cljs.core.inc,(1)));
});
emmy.series.impl.integral = (function emmy$series$impl$integral(var_args){
var G__33272 = arguments.length;
switch (G__33272) {
case 1:
return emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$1 = (function (s){
return emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$2(s,(0));
}));

(emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$2 = (function (s,constant_term){
return cljs.core.cons(constant_term,cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic.div,s,cljs.core.iterate(cljs.core.inc,(1))));
}));

(emmy.series.impl.integral.cljs$lang$maxFixedArity = 2);

emmy.series.impl.expt = (function emmy$series$impl$expt(s,e){
var expt = (function emmy$series$impl$expt_$_expt(base,pow){
var n = pow;
var y = emmy.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__33353 = n__$1;
var G__33354 = y;
var G__33355 = emmy.series.impl.seq_COLON__STAR_(z,z);
n = G__33353;
y = G__33354;
z = G__33355;
continue;
} else {
if((n__$1 === (0))){
return emmy.series.impl.seq_COLON__STAR_(z,y);
} else {
var G__33357 = n__$1;
var G__33358 = emmy.series.impl.seq_COLON__STAR_(z,y);
var G__33359 = emmy.series.impl.seq_COLON__STAR_(z,z);
n = G__33357;
y = G__33358;
z = G__33359;
continue;

}
}
break;
}
});
if((e > (0))){
return expt(s,e);
} else {
if((e === (0))){
return emmy.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
} else {
return emmy.series.impl.invert(expt(s,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(e)));

}
}
});
emmy.series.impl.sqrt = (function emmy$series$impl$sqrt(p__33289){
var vec__33290 = p__33289;
var seq__33291 = cljs.core.seq(vec__33290);
var first__33292 = cljs.core.first(seq__33291);
var seq__33291__$1 = cljs.core.next(seq__33291);
var f1 = first__33292;
var vec__33293 = seq__33291__$1;
var seq__33294 = cljs.core.seq(vec__33293);
var first__33295 = cljs.core.first(seq__33294);
var seq__33294__$1 = cljs.core.next(seq__33294);
var f2 = first__33295;
var fs = seq__33294__$1;
var f = vec__33290;
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(f1);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(f2);
} else {
return and__5160__auto__;
}
})())){
return cljs.core.cons(f1,(emmy.series.impl.sqrt.cljs$core$IFn$_invoke$arity$1 ? emmy.series.impl.sqrt.cljs$core$IFn$_invoke$arity$1(fs) : emmy.series.impl.sqrt.call(null,fs)));
} else {
var const$ = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(f1);
var step = (function emmy$series$impl$sqrt_$_step(g){
return (new cljs.core.LazySeq(null,(function (){
return emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$2(emmy.series.impl.div(emmy.series.impl.deriv(g),emmy.series.impl.c_STAR_seq((2),emmy$series$impl$sqrt_$_step(g))),const$);
}),null,null));
});
return step(f);
}
});
var xs_33362 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.iterate(cljs.core.inc,(9)));
emmy.series.impl.expx = (new cljs.core.LazySeq(null,(function (){
return emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$2(emmy.series.impl.expx,(1));
}),null,null));
emmy.series.impl.sinx = (new cljs.core.LazySeq(null,(function (){
return emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$1(emmy.series.impl.cosx);
}),null,null));
emmy.series.impl.cosx = (new cljs.core.LazySeq(null,(function (){
return emmy.series.impl.c_seq((1),emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$1(emmy.series.impl.sinx));
}),null,null));
emmy.series.impl.tanx = emmy.series.impl.div(emmy.series.impl.sinx,emmy.series.impl.cosx);
emmy.series.impl.secx = emmy.series.impl.invert(emmy.series.impl.cosx);
emmy.series.impl.asinx = emmy.series.impl.revert(emmy.series.impl.sinx);
emmy.series.impl.atanx = emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$1(cljs.core.cycle(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(-1),(0)], null)));
emmy.series.impl.acosx = emmy.series.impl.c_seq((Math.PI / (2)),emmy.series.impl.asinx);
emmy.series.impl.acotx = emmy.series.impl.c_seq((Math.PI / (2)),emmy.series.impl.atanx);
emmy.series.impl.coshx = (new cljs.core.LazySeq(null,(function (){
return emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$2(emmy.series.impl.sinhx,(1));
}),null,null));
emmy.series.impl.sinhx = (new cljs.core.LazySeq(null,(function (){
return emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$1(emmy.series.impl.coshx);
}),null,null));
emmy.series.impl.tanhx = emmy.series.impl.div(emmy.series.impl.sinhx,emmy.series.impl.coshx);
emmy.series.impl.asinhx = emmy.series.impl.revert(emmy.series.impl.sinhx);
emmy.series.impl.atanhx = emmy.series.impl.revert(emmy.series.impl.tanhx);
emmy.series.impl.log1_x = emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((-1)));
emmy.series.impl.log1_PLUS_x = emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$1(cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
emmy.series.impl.catalan = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.catalan,emmy.series.impl.catalan);
}),null,null)));


emmy.series.impl.tree_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return emmy.series.impl.forest_SINGLEQUOTE_;
}),null,null)));
emmy.series.impl.list_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return emmy.series.impl.list_SINGLEQUOTE_;
}),null,null)));
emmy.series.impl.forest_SINGLEQUOTE_ = emmy.series.impl.compose(emmy.series.impl.list_SINGLEQUOTE_,emmy.series.impl.tree_SINGLEQUOTE_);
emmy.series.impl.fib = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,emmy.series.impl.fib,cljs.core.rest(emmy.series.impl.fib));
}),null,null)));
emmy.series.impl.binomial_STAR_ = (function emmy$series$impl$binomial_STAR_(n){
var f = (function emmy$series$impl$binomial_STAR__$_f(acc,prev,n__$1,k){
while(true){
if((n__$1 === (0))){
return acc;
} else {
var next = ((prev * n__$1) / k);
var acc_SINGLEQUOTE_ = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,next);
var G__33363 = acc_SINGLEQUOTE_;
var G__33364 = next;
var G__33365 = (n__$1 - (1));
var G__33366 = (k + (1));
acc = G__33363;
prev = G__33364;
n__$1 = G__33365;
k = G__33366;
continue;
}
break;
}
});
return cljs.core.persistent_BANG_(f(cljs.core.transient$(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)),(1),n,(1)));
});
/**
 * The coefficients of (1+x)^n
 */
emmy.series.impl.binomial = (function emmy$series$impl$binomial(n){
return emmy.series.impl.__GT_series(emmy.series.impl.binomial_STAR_(n));
});
/**
 * The sequence of [Harmonic
 *   numbers](https://en.wikipedia.org/wiki/Harmonic_number), starting from n=1.
 */
emmy.series.impl.harmonic = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_,cljs.core.iterate(cljs.core.inc,(1))));
/**
 * The sequence of [Bell numbers](https://en.wikipedia.org/wiki/Bell_number),
 *   starting from n=1.
 */
emmy.series.impl.bell = cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.special.factorial.bell,cljs.core.iterate(cljs.core.inc,(1)));

//# sourceMappingURL=emmy.series.impl.js.map
