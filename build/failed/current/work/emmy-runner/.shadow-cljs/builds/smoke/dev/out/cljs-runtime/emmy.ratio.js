goog.provide('emmy.ratio');
emmy.ratio.ratiotype = emmy.bigfraction.Fraction;
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(emmy.ratio.ratiotype,new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404));
emmy.ratio.ratio_QMARK_ = (function emmy$ratio$ratio_QMARK_(r){
return (r instanceof emmy.bigfraction.Fraction);
});

/**
 * @interface
 */
emmy.ratio.IRational = function(){};

var emmy$ratio$IRational$numerator$dyn_26856 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (emmy.ratio.numerator[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (emmy.ratio.numerator["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IRational.numerator",_);
}
}
});
emmy.ratio.numerator = (function emmy$ratio$numerator(_){
if((((!((_ == null)))) && ((!((_.emmy$ratio$IRational$numerator$arity$1 == null)))))){
return _.emmy$ratio$IRational$numerator$arity$1(_);
} else {
return emmy$ratio$IRational$numerator$dyn_26856(_);
}
});

var emmy$ratio$IRational$denominator$dyn_26865 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (emmy.ratio.denominator[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (emmy.ratio.denominator["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IRational.denominator",_);
}
}
});
emmy.ratio.denominator = (function emmy$ratio$denominator(_){
if((((!((_ == null)))) && ((!((_.emmy$ratio$IRational$denominator$arity$1 == null)))))){
return _.emmy$ratio$IRational$denominator$arity$1(_);
} else {
return emmy$ratio$IRational$denominator$dyn_26865(_);
}
});

(emmy.ratio.IRational["_"] = true);

(emmy.ratio.numerator["_"] = (function (x){
return x;
}));

(emmy.ratio.denominator["_"] = (function (_){
return (1);
}));

(emmy.bigfraction.Fraction.prototype.emmy$ratio$IRational$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.bigfraction.Fraction.prototype.emmy$ratio$IRational$numerator$arity$1 = (function (x){
var x__$1 = this;
return emmy.bigfraction.numerator(x__$1);
}));

(emmy.bigfraction.Fraction.prototype.emmy$ratio$IRational$denominator$arity$1 = (function (x){
var x__$1 = this;
return emmy.bigfraction.denominator(x__$1);
}));
/**
 * Construct a ratio.
 */
emmy.ratio.rationalize = (function emmy$ratio$rationalize(var_args){
var G__26755 = arguments.length;
switch (G__26755) {
case 1:
return emmy.ratio.rationalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.ratio.rationalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.ratio.rationalize.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(emmy.value.integral_QMARK_(x)){
return x;
} else {
if((x instanceof emmy.bigfraction.Fraction)){
return x;
} else {
if(emmy.value.real_QMARK_(x)){
return emmy.bigfraction.real__GT_(x);
} else {
return emmy.util.arithmetic_ex((""+"Cannot rationalize "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));

}
}
}
}));

(emmy.ratio.rationalize.cljs$core$IFn$_invoke$arity$2 = (function (n,d){
return emmy.bigfraction.promote(emmy.bigfraction.make(n,d));
}));

(emmy.ratio.rationalize.cljs$lang$maxFixedArity = 2);

emmy.ratio.ratio_pattern = /(-?\d+)\/(\d+)/;
/**
 * Parser for the `#emmy/ratio` literal.
 */
emmy.ratio.parse_ratio = (function emmy$ratio$parse_ratio(x){
if(emmy.value.number_QMARK_(x)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.ratio","rationalize","emmy.ratio/rationalize",2140571274,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
} else {
if(typeof x === 'string'){
var temp__5823__auto__ = cljs.core.re_matches(emmy.ratio.ratio_pattern,x);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__26759 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26759,(0),null);
var numerator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26759,(1),null);
var denominator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26759,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.ratio","rationalize","emmy.ratio/rationalize",2140571274,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.util","bigint","emmy.util/bigint",-894648022,null),null,(1),null)),(new cljs.core.List(null,numerator,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.util","bigint","emmy.util/bigint",-894648022,null),null,(1),null)),(new cljs.core.List(null,denominator,null,(1),null))))),null,(1),null))], 0))));
} else {
return emmy.util.illegal((""+"Invalid ratio: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
}
} else {
if(((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.ratio","rationalize","emmy.ratio/rationalize",2140571274,null),null,(1),null)),x)));
} else {
return emmy.util.illegal((""+"Invalid ratio: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));

}
}
}
});
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.ratio.ratiotype], null),(function (_){
return true;
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.ratio.ratiotype], null),(function (x){
var n = emmy.ratio.numerator(x);
var d = emmy.ratio.denominator(x);
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(d))){
return n;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(n),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(d),null,(1),null))], 0))));
}
}));
(emmy.bigfraction.Fraction.prototype.emmy$value$INumericTower$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.bigfraction.Fraction.prototype.emmy$value$IReal$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.bigfraction.Fraction.prototype.emmy$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.bigfraction.Fraction.prototype.emmy$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(emmy.bigfraction.Fraction.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.bigfraction.Fraction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (x,other){
var x__$1 = this;
if((other instanceof emmy.bigfraction.Fraction)){
return emmy.bigfraction.eq(x__$1,other);
} else {
var and__5160__auto__ = emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(x__$1.d);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1.n,other);
} else {
return and__5160__auto__;
}

}
}));

(emmy.bigfraction.Fraction.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.bigfraction.Fraction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#emmy/ratio \"",x__$1.n,"/",x__$1.d,"\""], 0));
}));

emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),emmy.bigfraction.Fraction], null),(function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,l);
}));

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,emmy.bigfraction.Fraction], null),(function (a,b){
return emmy.bigfraction.promote(emmy.bigfraction.add(a,b));
}));

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,emmy.bigfraction.Fraction], null),(function (a,b){
return emmy.bigfraction.promote(emmy.bigfraction.sub(a,b));
}));

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,emmy.bigfraction.Fraction], null),(function (a,b){
return emmy.bigfraction.promote(emmy.bigfraction.mul(a,b));
}));

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,emmy.bigfraction.Fraction], null),(function (a,b){
return emmy.bigfraction.promote(emmy.bigfraction.div(a,b));
}));

emmy.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,emmy.bigfraction.Fraction], null),(function (a,b){
return emmy.bigfraction.promote(emmy.bigfraction.div(a,b));
}));

emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (c){
return emmy.bigfraction.zero_QMARK_(c);
}));

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (c){
return emmy.bigfraction.one_QMARK_(c);
}));

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (c){
return emmy.bigfraction.one_QMARK_(c);
}));

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (_){
return (0);
}));

emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (_){
return (1);
}));

emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (_){
return (1);
}));

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (a){
return emmy.bigfraction.promote(emmy.bigfraction.neg(a));
}));

emmy.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (a){
return emmy.bigfraction.neg_QMARK_(a);
}));

emmy.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (_){
return false;
}));

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (a){
return emmy.bigfraction.promote(emmy.bigfraction.invert(a));
}));

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (a){
return emmy.bigfraction.promote(emmy.bigfraction.mul(a,a));
}));

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (a){
return emmy.bigfraction.promote(emmy.bigfraction.integer_power(a,(3)));
}));

emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (a){
return emmy.bigfraction.promote(emmy.bigfraction.abs(a));
}));

emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (a){
return emmy.bigfraction.promote(emmy.bigfraction.abs(a));
}));

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (a,b){
return emmy.bigfraction.promote(emmy.bigfraction.integer_power(a,b));
}));

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,emmy.bigfraction.Fraction], null),(function (a,b){
return emmy.bigfraction.promote((cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.bigfraction.denominator(b)))?emmy.bigfraction.integer_power(a,emmy.bigfraction.numerator(b)):emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(emmy.bigfraction.__GT_real(a),emmy.bigfraction.__GT_real(b))));
}));

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction], null),(function (a){
if((a < (0))){
return emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.bigfraction.__GT_real(a));
} else {
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.ratio.numerator(a)),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.ratio.denominator(a)));
}
}));

emmy.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,emmy.bigfraction.Fraction], null),(function (a,b){
return emmy.bigfraction.promote(emmy.bigfraction.quotient(a,b));
}));

emmy.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,emmy.bigfraction.Fraction], null),(function (a,b){
return emmy.bigfraction.promote(emmy.bigfraction.remainder(a,b));
}));

emmy.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,emmy.bigfraction.Fraction], null),(function (a,b){
return emmy.bigfraction.promote(emmy.bigfraction.remainder(emmy.bigfraction.add(emmy.bigfraction.remainder(a,b),b),b));
}));

emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,emmy.bigfraction.Fraction], null),(function (a,b){
return emmy.bigfraction.promote(emmy.bigfraction.gcd(a,b));
}));

/**
 * Anything that `upcast-number` doesn't catch will hit this and pull a floating
 *      point value out of the ratio.
 */
emmy.ratio.downcast_fraction = (function emmy$ratio$downcast_fraction(op){
op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
var G__26818 = emmy.bigfraction.__GT_real(a);
var G__26819 = b;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26818,G__26819) : op.call(null,G__26818,G__26819));
}));

return op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),emmy.bigfraction.Fraction], null),(function (a,b){
var G__26825 = a;
var G__26826 = emmy.bigfraction.__GT_real(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26825,G__26826) : op.call(null,G__26825,G__26826));
}));
});

/**
 * Integrals can stay exact, so they become ratios before op.
 */
emmy.ratio.upcast_number = (function emmy$ratio$upcast_number(op){
op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.bigfraction.Fraction,new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (a,b){
var G__26835 = a;
var G__26836 = emmy.bigfraction.integer__GT_(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26835,G__26836) : op.call(null,G__26835,G__26836));
}));

return op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),emmy.bigfraction.Fraction], null),(function (a,b){
var G__26837 = emmy.bigfraction.integer__GT_(a);
var G__26838 = b;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26837,G__26838) : op.call(null,G__26837,G__26838));
}));
});

emmy.ratio.upcast_number(emmy.generic.exact_divide);

emmy.ratio.upcast_number(emmy.generic.gcd);

emmy.ratio.downcast_fraction(emmy.generic.expt);

var seq__26841_26894 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.add,emmy.generic.mul,emmy.generic.sub,emmy.generic.gcd,emmy.generic.lcm,emmy.generic.modulo,emmy.generic.remainder,emmy.generic.quotient,emmy.generic.div], null));
var chunk__26842_26895 = null;
var count__26843_26896 = (0);
var i__26844_26897 = (0);
while(true){
if((i__26844_26897 < count__26843_26896)){
var op_26898 = chunk__26842_26895.cljs$core$IIndexed$_nth$arity$2(null,i__26844_26897);
emmy.ratio.upcast_number(op_26898);

emmy.ratio.downcast_fraction(op_26898);


var G__26900 = seq__26841_26894;
var G__26901 = chunk__26842_26895;
var G__26902 = count__26843_26896;
var G__26903 = (i__26844_26897 + (1));
seq__26841_26894 = G__26900;
chunk__26842_26895 = G__26901;
count__26843_26896 = G__26902;
i__26844_26897 = G__26903;
continue;
} else {
var temp__5825__auto___26905 = cljs.core.seq(seq__26841_26894);
if(temp__5825__auto___26905){
var seq__26841_26906__$1 = temp__5825__auto___26905;
if(cljs.core.chunked_seq_QMARK_(seq__26841_26906__$1)){
var c__5694__auto___26908 = cljs.core.chunk_first(seq__26841_26906__$1);
var G__26909 = cljs.core.chunk_rest(seq__26841_26906__$1);
var G__26910 = c__5694__auto___26908;
var G__26911 = cljs.core.count(c__5694__auto___26908);
var G__26912 = (0);
seq__26841_26894 = G__26909;
chunk__26842_26895 = G__26910;
count__26843_26896 = G__26911;
i__26844_26897 = G__26912;
continue;
} else {
var op_26914 = cljs.core.first(seq__26841_26906__$1);
emmy.ratio.upcast_number(op_26914);

emmy.ratio.downcast_fraction(op_26914);


var G__26915 = cljs.core.next(seq__26841_26906__$1);
var G__26916 = null;
var G__26917 = (0);
var G__26918 = (0);
seq__26841_26894 = G__26915;
chunk__26842_26895 = G__26916;
count__26843_26896 = G__26917;
i__26844_26897 = G__26918;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=emmy.ratio.js.map
