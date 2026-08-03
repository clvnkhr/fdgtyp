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

var emmy$value$Numerical$numerical_QMARK_$dyn_47232 = (function (x){
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
return emmy$value$Numerical$numerical_QMARK_$dyn_47232(x);
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

var emmy$value$IKind$kind$dyn_47233 = (function (this$){
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
return emmy$value$IKind$kind$dyn_47233(this$);
}
});

emmy.value.argument_kind = (function emmy$value$argument_kind(var_args){
var args__5903__auto__ = [];
var len__5897__auto___47234 = arguments.length;
var i__5898__auto___47235 = (0);
while(true){
if((i__5898__auto___47235 < len__5897__auto___47234)){
args__5903__auto__.push((arguments[i__5898__auto___47235]));

var G__47236 = (i__5898__auto___47235 + (1));
i__5898__auto___47235 = G__47236;
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
(emmy.value.argument_kind.cljs$lang$applyTo = (function (seq47203){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47203));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47205 = cljs.core.get_global_hierarchy;
return (fexpr__47205.cljs$core$IFn$_invoke$arity$0 ? fexpr__47205.cljs$core$IFn$_invoke$arity$0() : fexpr__47205.call(null));
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

var seq__47206_47237 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.value.goog$module$goog$math$Long,goog.math.Integer,emmy.util.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),goog.math.Integer,emmy.util.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),emmy.value.goog$module$goog$math$Long,emmy.util.long$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.value.goog$module$goog$math$Long,BigInt,emmy.util.bigint], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,BigInt,emmy.util.bigint], null)], null));
var chunk__47207_47238 = null;
var count__47208_47239 = (0);
var i__47209_47240 = (0);
while(true){
if((i__47209_47240 < count__47208_47239)){
var vec__47216_47241 = chunk__47207_47238.cljs$core$IIndexed$_nth$arity$2(null,i__47209_47240);
var from_47242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47216_47241,(0),null);
var to_47243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47216_47241,(1),null);
var f_47244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47216_47241,(2),null);
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_47242,to_47243], null),((function (seq__47206_47237,chunk__47207_47238,count__47208_47239,i__47209_47240,vec__47216_47241,from_47242,to_47243,f_47244){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f_47244.cljs$core$IFn$_invoke$arity$1 ? f_47244.cljs$core$IFn$_invoke$arity$1(l) : f_47244.call(null,l)),r);
});})(seq__47206_47237,chunk__47207_47238,count__47208_47239,i__47209_47240,vec__47216_47241,from_47242,to_47243,f_47244))
);

emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_47243,from_47242], null),((function (seq__47206_47237,chunk__47207_47238,count__47208_47239,i__47209_47240,vec__47216_47241,from_47242,to_47243,f_47244){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(f_47244.cljs$core$IFn$_invoke$arity$1 ? f_47244.cljs$core$IFn$_invoke$arity$1(r) : f_47244.call(null,r)));
});})(seq__47206_47237,chunk__47207_47238,count__47208_47239,i__47209_47240,vec__47216_47241,from_47242,to_47243,f_47244))
);


var G__47245 = seq__47206_47237;
var G__47246 = chunk__47207_47238;
var G__47247 = count__47208_47239;
var G__47248 = (i__47209_47240 + (1));
seq__47206_47237 = G__47245;
chunk__47207_47238 = G__47246;
count__47208_47239 = G__47247;
i__47209_47240 = G__47248;
continue;
} else {
var temp__5825__auto___47249 = cljs.core.seq(seq__47206_47237);
if(temp__5825__auto___47249){
var seq__47206_47250__$1 = temp__5825__auto___47249;
if(cljs.core.chunked_seq_QMARK_(seq__47206_47250__$1)){
var c__5694__auto___47251 = cljs.core.chunk_first(seq__47206_47250__$1);
var G__47252 = cljs.core.chunk_rest(seq__47206_47250__$1);
var G__47253 = c__5694__auto___47251;
var G__47254 = cljs.core.count(c__5694__auto___47251);
var G__47255 = (0);
seq__47206_47237 = G__47252;
chunk__47207_47238 = G__47253;
count__47208_47239 = G__47254;
i__47209_47240 = G__47255;
continue;
} else {
var vec__47219_47256 = cljs.core.first(seq__47206_47250__$1);
var from_47257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47219_47256,(0),null);
var to_47258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47219_47256,(1),null);
var f_47259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47219_47256,(2),null);
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_47257,to_47258], null),((function (seq__47206_47237,chunk__47207_47238,count__47208_47239,i__47209_47240,vec__47219_47256,from_47257,to_47258,f_47259,seq__47206_47250__$1,temp__5825__auto___47249){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f_47259.cljs$core$IFn$_invoke$arity$1 ? f_47259.cljs$core$IFn$_invoke$arity$1(l) : f_47259.call(null,l)),r);
});})(seq__47206_47237,chunk__47207_47238,count__47208_47239,i__47209_47240,vec__47219_47256,from_47257,to_47258,f_47259,seq__47206_47250__$1,temp__5825__auto___47249))
);

emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_47258,from_47257], null),((function (seq__47206_47237,chunk__47207_47238,count__47208_47239,i__47209_47240,vec__47219_47256,from_47257,to_47258,f_47259,seq__47206_47250__$1,temp__5825__auto___47249){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(f_47259.cljs$core$IFn$_invoke$arity$1 ? f_47259.cljs$core$IFn$_invoke$arity$1(r) : f_47259.call(null,r)));
});})(seq__47206_47237,chunk__47207_47238,count__47208_47239,i__47209_47240,vec__47219_47256,from_47257,to_47258,f_47259,seq__47206_47250__$1,temp__5825__auto___47249))
);


var G__47260 = cljs.core.next(seq__47206_47250__$1);
var G__47261 = null;
var G__47262 = (0);
var G__47263 = (0);
seq__47206_47237 = G__47260;
chunk__47207_47238 = G__47261;
count__47208_47239 = G__47262;
i__47209_47240 = G__47263;
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
var metadata_symbol_47264 = Symbol.for("Symbol.__emmy_meta__");
(cljs.core.IMeta["function"] = true);

(cljs.core._meta["function"] = (function (f){
var or__5162__auto__ = emmy.value.goog$module$goog$object.get(f,metadata_symbol_47264);
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
(o[metadata_symbol_47264] = m);

return o;
});
/**
 * Make s callable. This is done by re-hosting all of the object properties of `s`
 *    in a new native JS function which delegates to the Clojure application. The
 *    result of the application of this new function is supplied to the continuation `k`.
 */
emmy.value.make_es6_callable = (function emmy$value$make_es6_callable(s,k){
var f = (function() { 
var G__47265__delegate = function (xs){
var G__47222 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(s,xs);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__47222) : k.call(null,G__47222));
};
var G__47265 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__47266__i = 0, G__47266__a = new Array(arguments.length -  0);
while (G__47266__i < G__47266__a.length) {G__47266__a[G__47266__i] = arguments[G__47266__i + 0]; ++G__47266__i;}
  xs = new cljs.core.IndexedSeq(G__47266__a,0,null);
} 
return G__47265__delegate.call(this,xs);};
G__47265.cljs$lang$maxFixedArity = 0;
G__47265.cljs$lang$applyTo = (function (arglist__47267){
var xs = cljs.core.seq(arglist__47267);
return G__47265__delegate(xs);
});
G__47265.cljs$core$IFn$_invoke$arity$variadic = G__47265__delegate;
return G__47265;
})()
;
Object.setPrototypeOf(f,Object.getPrototypeOf(s));

var seq__47223_47268 = cljs.core.seq(Object.getOwnPropertyNames(s));
var chunk__47224_47269 = null;
var count__47225_47270 = (0);
var i__47226_47271 = (0);
while(true){
if((i__47226_47271 < count__47225_47270)){
var property_name_47272 = chunk__47224_47269.cljs$core$IIndexed$_nth$arity$2(null,i__47226_47271);
(f[property_name_47272] = emmy.value.goog$module$goog$object.get(s,property_name_47272));


var G__47273 = seq__47223_47268;
var G__47274 = chunk__47224_47269;
var G__47275 = count__47225_47270;
var G__47276 = (i__47226_47271 + (1));
seq__47223_47268 = G__47273;
chunk__47224_47269 = G__47274;
count__47225_47270 = G__47275;
i__47226_47271 = G__47276;
continue;
} else {
var temp__5825__auto___47277 = cljs.core.seq(seq__47223_47268);
if(temp__5825__auto___47277){
var seq__47223_47278__$1 = temp__5825__auto___47277;
if(cljs.core.chunked_seq_QMARK_(seq__47223_47278__$1)){
var c__5694__auto___47279 = cljs.core.chunk_first(seq__47223_47278__$1);
var G__47280 = cljs.core.chunk_rest(seq__47223_47278__$1);
var G__47281 = c__5694__auto___47279;
var G__47282 = cljs.core.count(c__5694__auto___47279);
var G__47283 = (0);
seq__47223_47268 = G__47280;
chunk__47224_47269 = G__47281;
count__47225_47270 = G__47282;
i__47226_47271 = G__47283;
continue;
} else {
var property_name_47284 = cljs.core.first(seq__47223_47278__$1);
(f[property_name_47284] = emmy.value.goog$module$goog$object.get(s,property_name_47284));


var G__47285 = cljs.core.next(seq__47223_47278__$1);
var G__47286 = null;
var G__47287 = (0);
var G__47288 = (0);
seq__47223_47268 = G__47285;
chunk__47224_47269 = G__47286;
count__47225_47270 = G__47287;
i__47226_47271 = G__47288;
continue;
}
} else {
}
}
break;
}

var seq__47227_47289 = cljs.core.seq(Object.getOwnPropertySymbols(s));
var chunk__47228_47290 = null;
var count__47229_47291 = (0);
var i__47230_47292 = (0);
while(true){
if((i__47230_47292 < count__47229_47291)){
var property_symbol_47293 = chunk__47228_47290.cljs$core$IIndexed$_nth$arity$2(null,i__47230_47292);
(f[property_symbol_47293] = emmy.value.goog$module$goog$object.get(s,property_symbol_47293));


var G__47294 = seq__47227_47289;
var G__47295 = chunk__47228_47290;
var G__47296 = count__47229_47291;
var G__47297 = (i__47230_47292 + (1));
seq__47227_47289 = G__47294;
chunk__47228_47290 = G__47295;
count__47229_47291 = G__47296;
i__47230_47292 = G__47297;
continue;
} else {
var temp__5825__auto___47298 = cljs.core.seq(seq__47227_47289);
if(temp__5825__auto___47298){
var seq__47227_47299__$1 = temp__5825__auto___47298;
if(cljs.core.chunked_seq_QMARK_(seq__47227_47299__$1)){
var c__5694__auto___47300 = cljs.core.chunk_first(seq__47227_47299__$1);
var G__47301 = cljs.core.chunk_rest(seq__47227_47299__$1);
var G__47302 = c__5694__auto___47300;
var G__47303 = cljs.core.count(c__5694__auto___47300);
var G__47304 = (0);
seq__47227_47289 = G__47301;
chunk__47228_47290 = G__47302;
count__47229_47291 = G__47303;
i__47230_47292 = G__47304;
continue;
} else {
var property_symbol_47305 = cljs.core.first(seq__47227_47299__$1);
(f[property_symbol_47305] = emmy.value.goog$module$goog$object.get(s,property_symbol_47305));


var G__47306 = cljs.core.next(seq__47227_47299__$1);
var G__47307 = null;
var G__47308 = (0);
var G__47309 = (0);
seq__47227_47289 = G__47306;
chunk__47228_47290 = G__47307;
count__47229_47291 = G__47308;
i__47230_47292 = G__47309;
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
