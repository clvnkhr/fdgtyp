import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.bigfraction.js";
import "./emmy.util.js";
import "./goog.array.array.js";
import "./goog.object.object.js";
import "./goog.math.long.js";
import "./goog.math.integer.js";
goog.provide('emmy.value');
goog.scope(function(){
  emmy.value.goog$module$goog$array = goog.module.get('goog.array');
  emmy.value.goog$module$goog$object = goog.module.get('goog.object');
  emmy.value.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});

/**
 * @interface
 */
emmy.value.Numerical = function(){};

var emmy$value$Numerical$numerical_QMARK_$dyn_20742 = (function (x){
var x__5519__auto__ = (((x == null))?null:x);
var m__5520__auto__ = (emmy.value.numerical_QMARK_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5520__auto__.call(null,x));
} else {
var m__5518__auto__ = (emmy.value.numerical_QMARK_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5518__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("Numerical.numerical?",x);
}
}
});
/**
 * Returns true if `x` is a purely numerical value and should be considered for
 * numerical simplifications, such as $x * 1 == x$ or $x * 0 ==
 * 0$.
 * 
 *   [[numerical?]] should return `false` if `x` has additional, non-numerical
 * structure that should be preserved.
 */
emmy.value.numerical_QMARK_ = (function emmy$value$numerical_QMARK_(x){
if((((!((x == null)))) && ((!((x.emmy$value$Numerical$numerical_QMARK_$arity$1 == null)))))){
return x.emmy$value$Numerical$numerical_QMARK_$arity$1(x);
} else {
return emmy$value$Numerical$numerical_QMARK_$dyn_20742(x);
}
});


/**
 * @interface
 */
emmy.value.INumericTower = function(){};


/**
 * @interface
 */
emmy.value.IReal = function(){};

(emmy.value.Numerical["_"] = true);

(emmy.value.numerical_QMARK_["_"] = (function (_){
return false;
}));

/**
 * @interface
 */
emmy.value.IKind = function(){};

var emmy$value$IKind$kind$dyn_20744 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.value.kind[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (emmy.value.kind["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IKind.kind",this$);
}
}
});
emmy.value.kind = (function emmy$value$kind(this$){
if((((!((this$ == null)))) && ((!((this$.emmy$value$IKind$kind$arity$1 == null)))))){
return this$.emmy$value$IKind$kind$arity$1(this$);
} else {
return emmy$value$IKind$kind$dyn_20744(this$);
}
});

emmy.value.argument_kind = (function emmy$value$argument_kind(var_args){
var args__5903__auto__ = [];
var len__5897__auto___20746 = arguments.length;
var i__5898__auto___20747 = (0);
while(true){
if((i__5898__auto___20747 < len__5897__auto___20746)){
args__5903__auto__.push((arguments[i__5898__auto___20747]));

var G__20748 = (i__5898__auto___20747 + (1));
i__5898__auto___20747 = G__20748;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.value.argument_kind.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.value.argument_kind.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy.value.kind,args);
}));

(emmy.value.argument_kind.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.value.argument_kind.cljs$lang$applyTo = (function (seq20635){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20635));
}));

emmy.value.object_name_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
emmy.value.seqtype = new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.Cons,new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.IndexedSeq,new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector,new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.LazySeq,new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.List,new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.Range,new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979));
/**
 * Returns true if x is an integral number that Clojure's math operations work
 *   with, false otherwise.
 */
emmy.value.native_integral_QMARK_ = (function emmy$value$native_integral_QMARK_(x){
return cljs.core.integer_QMARK_(x);
});
/**
 * Returns true if x is an integral number, false otherwise.
 */
emmy.value.integral_QMARK_ = (function emmy$value$integral_QMARK_(x){
return ((cljs.core.int_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bigint",goog.typeOf(x))));
});
/**
 * Returns true if `x` is either an integral number or a floating point number (i.e.,
 *   in the numeric tower but not complex), false otherwise.
 */
emmy.value.real_QMARK_ = (function emmy$value$real_QMARK_(x){
return ((typeof x === 'number') || ((((x instanceof goog.math.Integer)) || ((((x instanceof emmy.value.goog$module$goog$math$Long)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bigint",goog.typeOf(x))) || ((x instanceof emmy.bigfraction.Fraction)))))))));
});
/**
 * Returns true if `x` is any number type in the numeric tower:
 * 
 *   - integral
 *   - floating point
 *   - complex
 *   - fraction
 * 
 *   false otherwise.
 */
emmy.value.number_QMARK_ = (function emmy$value$number_QMARK_(x){
var or__5162__auto__ = typeof x === 'number';
if(or__5162__auto__){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = (x instanceof goog.math.Integer);
if(or__5162__auto____$1){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = (x instanceof emmy.value.goog$module$goog$math$Long);
if(or__5162__auto____$2){
return or__5162__auto____$2;
} else {
var or__5162__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bigint",goog.typeOf(x));
if(or__5162__auto____$3){
return or__5162__auto____$3;
} else {
var or__5162__auto____$4 = (x instanceof emmy.bigfraction.Fraction);
if(or__5162__auto____$4){
return or__5162__auto____$4;
} else {
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.emmy$value$INumericTower$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(emmy.value.INumericTower,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(emmy.value.INumericTower,x);
}
}
}
}
}
}
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514));
/**
 * Returns true for anything that derives from `::scalar`, i.e., any numeric type in
 *   the numeric tower that responds true to [[number?]], plus symbolic expressions
 *   generated by [[emmy.abstract.number/literal-number]],
 * 
 *   false otherwise.
 */
emmy.value.scalar_QMARK_ = (function emmy$value$scalar_QMARK_(x){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(emmy.value.kind(x),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514));
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(Number,new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(BigInt,new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(goog.math.Integer,new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(emmy.value.goog$module$goog$math$Long,new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786));
(emmy.value.Numerical["number"] = true);

(emmy.value.numerical_QMARK_["number"] = (function (_){
return true;
}));
(emmy.value.IKind["number"] = true);

(emmy.value.kind["number"] = (function (x){
if(cljs.core.truth_((function (){var and__5160__auto__ = Number.isInteger(x);
if(cljs.core.truth_(and__5160__auto__)){
return (Math.abs(x) < Number.MAX_SAFE_INTEGER);
} else {
return and__5160__auto__;
}
})())){
return new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061);
} else {
return new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091);
}
}));

(emmy.value.IKind["boolean"] = true);

(emmy.value.kind["boolean"] = (function (x){
return cljs.core.type(x);
}));

(emmy.value.IKind["null"] = true);

(emmy.value.kind["null"] = (function (_){
return null;
}));

(emmy.value.IKind["_"] = true);

(emmy.value.kind["_"] = (function (o){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$2(o,cljs.core.type(o));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.value !== 'undefined') && (typeof emmy.value._EQ_ !== 'undefined')){
} else {
emmy.value._EQ_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__20684 = cljs.core.get_global_hierarchy;
return (fexpr__20684.cljs$core$IFn$_invoke$arity$0 ? fexpr__20684.cljs$core$IFn$_invoke$arity$0() : fexpr__20684.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.value","="),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979),new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979)], null),(function (l,r){
return (l === r);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (l,r){
var and__5160__auto__ = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(l),cljs.core.count(r));
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.value._EQ_,l,r));
} else {
return and__5160__auto__;
}
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (l,r){
if(((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(emmy.value.kind(l),new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(emmy.value.kind(r),new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979))))){
return false;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,r);
}
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),BigInt], null),(function (l,r){
return (l == r);
}));

emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),(function (l,r){
return (l == r);
}));

var seq__20685_20790 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.value.goog$module$goog$math$Long,goog.math.Integer,emmy.util.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),goog.math.Integer,emmy.util.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),emmy.value.goog$module$goog$math$Long,emmy.util.long$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.value.goog$module$goog$math$Long,BigInt,emmy.util.bigint], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,BigInt,emmy.util.bigint], null)], null));
var chunk__20686_20791 = null;
var count__20687_20792 = (0);
var i__20688_20793 = (0);
while(true){
if((i__20688_20793 < count__20687_20792)){
var vec__20695_20797 = chunk__20686_20791.cljs$core$IIndexed$_nth$arity$2(null,i__20688_20793);
var from_20798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20695_20797,(0),null);
var to_20799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20695_20797,(1),null);
var f_20800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20695_20797,(2),null);
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_20798,to_20799], null),((function (seq__20685_20790,chunk__20686_20791,count__20687_20792,i__20688_20793,vec__20695_20797,from_20798,to_20799,f_20800){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f_20800.cljs$core$IFn$_invoke$arity$1 ? f_20800.cljs$core$IFn$_invoke$arity$1(l) : f_20800.call(null,l)),r);
});})(seq__20685_20790,chunk__20686_20791,count__20687_20792,i__20688_20793,vec__20695_20797,from_20798,to_20799,f_20800))
);

emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_20799,from_20798], null),((function (seq__20685_20790,chunk__20686_20791,count__20687_20792,i__20688_20793,vec__20695_20797,from_20798,to_20799,f_20800){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(f_20800.cljs$core$IFn$_invoke$arity$1 ? f_20800.cljs$core$IFn$_invoke$arity$1(r) : f_20800.call(null,r)));
});})(seq__20685_20790,chunk__20686_20791,count__20687_20792,i__20688_20793,vec__20695_20797,from_20798,to_20799,f_20800))
);


var G__20810 = seq__20685_20790;
var G__20811 = chunk__20686_20791;
var G__20812 = count__20687_20792;
var G__20813 = (i__20688_20793 + (1));
seq__20685_20790 = G__20810;
chunk__20686_20791 = G__20811;
count__20687_20792 = G__20812;
i__20688_20793 = G__20813;
continue;
} else {
var temp__5825__auto___20814 = cljs.core.seq(seq__20685_20790);
if(temp__5825__auto___20814){
var seq__20685_20815__$1 = temp__5825__auto___20814;
if(cljs.core.chunked_seq_QMARK_(seq__20685_20815__$1)){
var c__5694__auto___20816 = cljs.core.chunk_first(seq__20685_20815__$1);
var G__20818 = cljs.core.chunk_rest(seq__20685_20815__$1);
var G__20819 = c__5694__auto___20816;
var G__20820 = cljs.core.count(c__5694__auto___20816);
var G__20821 = (0);
seq__20685_20790 = G__20818;
chunk__20686_20791 = G__20819;
count__20687_20792 = G__20820;
i__20688_20793 = G__20821;
continue;
} else {
var vec__20700_20822 = cljs.core.first(seq__20685_20815__$1);
var from_20823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20700_20822,(0),null);
var to_20824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20700_20822,(1),null);
var f_20825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20700_20822,(2),null);
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_20823,to_20824], null),((function (seq__20685_20790,chunk__20686_20791,count__20687_20792,i__20688_20793,vec__20700_20822,from_20823,to_20824,f_20825,seq__20685_20815__$1,temp__5825__auto___20814){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f_20825.cljs$core$IFn$_invoke$arity$1 ? f_20825.cljs$core$IFn$_invoke$arity$1(l) : f_20825.call(null,l)),r);
});})(seq__20685_20790,chunk__20686_20791,count__20687_20792,i__20688_20793,vec__20700_20822,from_20823,to_20824,f_20825,seq__20685_20815__$1,temp__5825__auto___20814))
);

emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_20824,from_20823], null),((function (seq__20685_20790,chunk__20686_20791,count__20687_20792,i__20688_20793,vec__20700_20822,from_20823,to_20824,f_20825,seq__20685_20815__$1,temp__5825__auto___20814){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(f_20825.cljs$core$IFn$_invoke$arity$1 ? f_20825.cljs$core$IFn$_invoke$arity$1(r) : f_20825.call(null,r)));
});})(seq__20685_20790,chunk__20686_20791,count__20687_20792,i__20688_20793,vec__20700_20822,from_20823,to_20824,f_20825,seq__20685_20815__$1,temp__5825__auto___20814))
);


var G__20833 = cljs.core.next(seq__20685_20815__$1);
var G__20834 = null;
var G__20835 = (0);
var G__20836 = (0);
seq__20685_20790 = G__20833;
chunk__20686_20791 = G__20834;
count__20687_20792 = G__20835;
i__20688_20793 = G__20836;
continue;
}
} else {
}
}
break;
}

emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.value.goog$module$goog$math$Long,emmy.value.goog$module$goog$math$Long], null),(function (l,r){
return l.equals(r);
}));

emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (l,r){
return l.equals(r);
}));

(cljs.core.IEquiv["number"] = true);

(cljs.core._equiv["number"] = (function (this$,other){
if(typeof other === 'number'){
return (this$ === other);
} else {
if(emmy.value.scalar_QMARK_(other)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$,other.valueOf());
} else {
return false;

}
}
}));

(goog.math.Integer.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Integer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.math.Integer,cljs.core.type(other))){
return this$__$1.equals(other);
} else {
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,other.valueOf());
}
}));

(emmy.value.goog$module$goog$math$Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.value.goog$module$goog$math$Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.value.goog$module$goog$math$Long,cljs.core.type(other))){
return this$__$1.equals(other);
} else {
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,other.valueOf());
}
}));
(BigInt.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash(this$__$1.toString((16)));
}));

(BigInt.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var this$__$1 = this;
var other = o.valueOf();
if(emmy.util.bigint_QMARK_(other)){
return (this$__$1 == other);
} else {
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,other);
}
}));

(BigInt.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var x__$1 = this;
var rep = ((((((x__$1 < (0)))?(- x__$1):x__$1) < Number.MAX_SAFE_INTEGER))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)):(""+"\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)+"\""));
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#emmy/bigint ",rep], 0));
}));
(emmy.value.goog$module$goog$math$Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.value.goog$module$goog$math$Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.hashCode();
}));

(emmy.value.goog$module$goog$math$Long.prototype.valueOf = (function (){
var this$ = this;
return this$.toNumber();
}));

(goog.math.Integer.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Integer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash(this$__$1.toString((16)));
}));

(goog.math.Integer.prototype.valueOf = (function (){
var this$ = this;
return this$.toNumber();
}));
(cljs.core.IComparable["number"] = true);

(cljs.core._compare["number"] = (function (this$,o){
var other = o.valueOf();
if(emmy.value.real_QMARK_(other)){
return emmy.value.goog$module$goog$array.defaultCompare(this$,other);
} else {
throw (new Error((""+"Cannot compare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(o))));
}
}));

(BigInt.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,o){
var this$__$1 = this;
var other = o.valueOf();
if(emmy.value.real_QMARK_(other)){
return emmy.value.goog$module$goog$array.defaultCompare(this$__$1,other);
} else {
throw (new Error((""+"Cannot compare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(o))));
}
}));

(goog.math.Integer.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Integer.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,o){
var this$__$1 = this;
var other = o.valueOf();
if((other instanceof goog.math.Integer)){
return this$__$1.compare(other);
} else {
if(emmy.value.real_QMARK_(other)){
return emmy.value.goog$module$goog$array.defaultCompare(this$__$1,other);
} else {
throw (new Error((""+"Cannot compare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(o))));

}
}
}));

(emmy.value.goog$module$goog$math$Long.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.value.goog$module$goog$math$Long.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,o){
var this$__$1 = this;
var other = o.valueOf();
if((other instanceof emmy.value.goog$module$goog$math$Long)){
return this$__$1.compare(other);
} else {
if(emmy.value.real_QMARK_(other)){
return emmy.value.goog$module$goog$array.defaultCompare(this$__$1,other);
} else {
throw (new Error((""+"Cannot compare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(o))));

}
}
}));
(BigInt.prototype.emmy$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.emmy$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(goog.math.Integer.prototype.emmy$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Integer.prototype.emmy$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(emmy.value.goog$module$goog$math$Long.prototype.emmy$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.value.goog$module$goog$math$Long.prototype.emmy$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(BigInt.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var ___$1 = this;
return BigInt;
}));

(goog.math.Integer.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Integer.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var ___$1 = this;
return goog.math.Integer;
}));

(emmy.value.goog$module$goog$math$Long.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.value.goog$module$goog$math$Long.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var ___$1 = this;
return emmy.value.goog$module$goog$math$Long;
}));
var metadata_symbol_20866 = Symbol.for("Symbol.__emmy_meta__");
(cljs.core.IMeta["function"] = true);

(cljs.core._meta["function"] = (function (f){
var or__5162__auto__ = emmy.value.goog$module$goog$object.get(f,metadata_symbol_20866);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return null;
}
}));

/**
 * Mutates the native JS object `o` to have the given metadata. The
 *     previous metadata, if any, is discarded. `o` is returned.
 */
emmy.value.set_js_meta_BANG_ = (function emmy$value$set_js_meta_BANG_(o,m){
(o[metadata_symbol_20866] = m);

return o;
});
/**
 * Make s callable. This is done by re-hosting all of the object properties of `s`
 *    in a new native JS function which delegates to the Clojure application. The
 *    result of the application of this new function is supplied to the continuation `k`.
 */
emmy.value.make_es6_callable = (function emmy$value$make_es6_callable(s,k){
var f = (function() { 
var G__20867__delegate = function (xs){
var G__20717 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(s,xs);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20717) : k.call(null,G__20717));
};
var G__20867 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__20868__i = 0, G__20868__a = new Array(arguments.length -  0);
while (G__20868__i < G__20868__a.length) {G__20868__a[G__20868__i] = arguments[G__20868__i + 0]; ++G__20868__i;}
  xs = new cljs.core.IndexedSeq(G__20868__a,0,null);
} 
return G__20867__delegate.call(this,xs);};
G__20867.cljs$lang$maxFixedArity = 0;
G__20867.cljs$lang$applyTo = (function (arglist__20869){
var xs = cljs.core.seq(arglist__20869);
return G__20867__delegate(xs);
});
G__20867.cljs$core$IFn$_invoke$arity$variadic = G__20867__delegate;
return G__20867;
})()
;
Object.setPrototypeOf(f,Object.getPrototypeOf(s));

var seq__20719_20870 = cljs.core.seq(Object.getOwnPropertyNames(s));
var chunk__20720_20871 = null;
var count__20721_20872 = (0);
var i__20722_20873 = (0);
while(true){
if((i__20722_20873 < count__20721_20872)){
var property_name_20874 = chunk__20720_20871.cljs$core$IIndexed$_nth$arity$2(null,i__20722_20873);
(f[property_name_20874] = emmy.value.goog$module$goog$object.get(s,property_name_20874));


var G__20875 = seq__20719_20870;
var G__20876 = chunk__20720_20871;
var G__20877 = count__20721_20872;
var G__20878 = (i__20722_20873 + (1));
seq__20719_20870 = G__20875;
chunk__20720_20871 = G__20876;
count__20721_20872 = G__20877;
i__20722_20873 = G__20878;
continue;
} else {
var temp__5825__auto___20879 = cljs.core.seq(seq__20719_20870);
if(temp__5825__auto___20879){
var seq__20719_20880__$1 = temp__5825__auto___20879;
if(cljs.core.chunked_seq_QMARK_(seq__20719_20880__$1)){
var c__5694__auto___20881 = cljs.core.chunk_first(seq__20719_20880__$1);
var G__20882 = cljs.core.chunk_rest(seq__20719_20880__$1);
var G__20883 = c__5694__auto___20881;
var G__20884 = cljs.core.count(c__5694__auto___20881);
var G__20885 = (0);
seq__20719_20870 = G__20882;
chunk__20720_20871 = G__20883;
count__20721_20872 = G__20884;
i__20722_20873 = G__20885;
continue;
} else {
var property_name_20886 = cljs.core.first(seq__20719_20880__$1);
(f[property_name_20886] = emmy.value.goog$module$goog$object.get(s,property_name_20886));


var G__20887 = cljs.core.next(seq__20719_20880__$1);
var G__20888 = null;
var G__20889 = (0);
var G__20890 = (0);
seq__20719_20870 = G__20887;
chunk__20720_20871 = G__20888;
count__20721_20872 = G__20889;
i__20722_20873 = G__20890;
continue;
}
} else {
}
}
break;
}

var seq__20725_20891 = cljs.core.seq(Object.getOwnPropertySymbols(s));
var chunk__20726_20892 = null;
var count__20727_20893 = (0);
var i__20728_20894 = (0);
while(true){
if((i__20728_20894 < count__20727_20893)){
var property_symbol_20895 = chunk__20726_20892.cljs$core$IIndexed$_nth$arity$2(null,i__20728_20894);
(f[property_symbol_20895] = emmy.value.goog$module$goog$object.get(s,property_symbol_20895));


var G__20896 = seq__20725_20891;
var G__20897 = chunk__20726_20892;
var G__20898 = count__20727_20893;
var G__20899 = (i__20728_20894 + (1));
seq__20725_20891 = G__20896;
chunk__20726_20892 = G__20897;
count__20727_20893 = G__20898;
i__20728_20894 = G__20899;
continue;
} else {
var temp__5825__auto___20900 = cljs.core.seq(seq__20725_20891);
if(temp__5825__auto___20900){
var seq__20725_20901__$1 = temp__5825__auto___20900;
if(cljs.core.chunked_seq_QMARK_(seq__20725_20901__$1)){
var c__5694__auto___20902 = cljs.core.chunk_first(seq__20725_20901__$1);
var G__20903 = cljs.core.chunk_rest(seq__20725_20901__$1);
var G__20904 = c__5694__auto___20902;
var G__20905 = cljs.core.count(c__5694__auto___20902);
var G__20906 = (0);
seq__20725_20891 = G__20903;
chunk__20726_20892 = G__20904;
count__20727_20893 = G__20905;
i__20728_20894 = G__20906;
continue;
} else {
var property_symbol_20907 = cljs.core.first(seq__20725_20901__$1);
(f[property_symbol_20907] = emmy.value.goog$module$goog$object.get(s,property_symbol_20907));


var G__20908 = cljs.core.next(seq__20725_20901__$1);
var G__20909 = null;
var G__20910 = (0);
var G__20911 = (0);
seq__20725_20891 = G__20908;
chunk__20726_20892 = G__20909;
count__20727_20893 = G__20910;
i__20728_20894 = G__20911;
continue;
}
} else {
}
}
break;
}

return f;
});
/**
 * Returns a predicate that returns true if its argument matches the supplied
 *   kind-keyword `k`, false otherwise.
 */
emmy.value.kind_predicate = (function emmy$value$kind_predicate(x){
var k = emmy.value.kind(x);
return (function (x2){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(emmy.value.kind(x2),k);
});
});
/**
 * Comparator. Clone of [[cljs.core/compare]] that works with the expanded
 *    Emmy numeric tower.
 * 
 *   Returns a negative number, zero, or a positive number when x is logically
 *   'less than', 'equal to', or 'greater than' y. Uses IComparable if available
 *   and google.array.defaultCompare for objects of the same type and special-cases
 *   nil to be less than any other object.
 */
emmy.value.compare = (function emmy$value$compare(x,y){
if((x === y)){
return (0);
} else {
if((x == null)){
return (-1);
} else {
if((y == null)){
return (1);
} else {
if(typeof x === 'number'){
var yv = y.valueOf();
if(emmy.value.real_QMARK_(yv)){
return emmy.value.goog$module$goog$array.defaultCompare(x,yv);
} else {
throw (new Error((""+"Cannot compare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y))));
}
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2048))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IComparable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IComparable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IComparable,x))){
return cljs.core._compare(x,y);
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = (function (){var or__5162__auto__ = typeof x === 'string';
if(or__5162__auto__){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = cljs.core.array_QMARK_(x);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return ((x === true) || (x === false));
}
}
})();
if(cljs.core.truth_(and__5160__auto__)){
return (cljs.core.type(x) === cljs.core.type(y));
} else {
return and__5160__auto__;
}
})())){
return emmy.value.goog$module$goog$array.defaultCompare(x,y);
} else {
throw (new Error((""+"Cannot compare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y))));
}

}
}
}
}
}
});
emmy.value.add_object_symbols_BANG_ = (function emmy$value$add_object_symbols_BANG_(o__GT_syms){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(emmy.value.object_name_map,cljs.core.into,o__GT_syms);
});
/**
 * Returns a function that tests whether two values are within ε of each other.
 */
emmy.value.within = (function emmy$value$within(ε){
return (function (x,y){
return (Math.abs((x - y)) < ε);
});
});
emmy.value.twopi = ((2) * Math.PI);
emmy.value.principal_value = (function emmy$value$principal_value(cuthigh){
var cutlow = (cuthigh - emmy.value.twopi);
return (function (x){
if((((cutlow <= x)) && ((x < cuthigh)))){
return x;
} else {
var y = (x - (emmy.value.twopi * Math.floor((x / emmy.value.twopi))));
if((y < cuthigh)){
return y;
} else {
return (y - emmy.value.twopi);
}
}
});
});

//# sourceMappingURL=emmy.value.js.map
