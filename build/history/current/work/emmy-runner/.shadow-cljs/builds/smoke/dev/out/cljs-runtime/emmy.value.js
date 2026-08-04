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

var emmy$value$Numerical$numerical_QMARK_$dyn_22533 = (function (x){
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
return emmy$value$Numerical$numerical_QMARK_$dyn_22533(x);
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

var emmy$value$IKind$kind$dyn_22535 = (function (this$){
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
return emmy$value$IKind$kind$dyn_22535(this$);
}
});

emmy.value.argument_kind = (function emmy$value$argument_kind(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22538 = arguments.length;
var i__5898__auto___22539 = (0);
while(true){
if((i__5898__auto___22539 < len__5897__auto___22538)){
args__5903__auto__.push((arguments[i__5898__auto___22539]));

var G__22540 = (i__5898__auto___22539 + (1));
i__5898__auto___22539 = G__22540;
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
(emmy.value.argument_kind.cljs$lang$applyTo = (function (seq22356){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22356));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__22395 = cljs.core.get_global_hierarchy;
return (fexpr__22395.cljs$core$IFn$_invoke$arity$0 ? fexpr__22395.cljs$core$IFn$_invoke$arity$0() : fexpr__22395.call(null));
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

var seq__22415_22604 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.value.goog$module$goog$math$Long,goog.math.Integer,emmy.util.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),goog.math.Integer,emmy.util.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),emmy.value.goog$module$goog$math$Long,emmy.util.long$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.value.goog$module$goog$math$Long,BigInt,emmy.util.bigint], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,BigInt,emmy.util.bigint], null)], null));
var chunk__22416_22605 = null;
var count__22417_22606 = (0);
var i__22418_22607 = (0);
while(true){
if((i__22418_22607 < count__22417_22606)){
var vec__22437_22609 = chunk__22416_22605.cljs$core$IIndexed$_nth$arity$2(null,i__22418_22607);
var from_22610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22437_22609,(0),null);
var to_22611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22437_22609,(1),null);
var f_22612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22437_22609,(2),null);
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_22610,to_22611], null),((function (seq__22415_22604,chunk__22416_22605,count__22417_22606,i__22418_22607,vec__22437_22609,from_22610,to_22611,f_22612){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f_22612.cljs$core$IFn$_invoke$arity$1 ? f_22612.cljs$core$IFn$_invoke$arity$1(l) : f_22612.call(null,l)),r);
});})(seq__22415_22604,chunk__22416_22605,count__22417_22606,i__22418_22607,vec__22437_22609,from_22610,to_22611,f_22612))
);

emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_22611,from_22610], null),((function (seq__22415_22604,chunk__22416_22605,count__22417_22606,i__22418_22607,vec__22437_22609,from_22610,to_22611,f_22612){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(f_22612.cljs$core$IFn$_invoke$arity$1 ? f_22612.cljs$core$IFn$_invoke$arity$1(r) : f_22612.call(null,r)));
});})(seq__22415_22604,chunk__22416_22605,count__22417_22606,i__22418_22607,vec__22437_22609,from_22610,to_22611,f_22612))
);


var G__22615 = seq__22415_22604;
var G__22616 = chunk__22416_22605;
var G__22617 = count__22417_22606;
var G__22618 = (i__22418_22607 + (1));
seq__22415_22604 = G__22615;
chunk__22416_22605 = G__22616;
count__22417_22606 = G__22617;
i__22418_22607 = G__22618;
continue;
} else {
var temp__5825__auto___22620 = cljs.core.seq(seq__22415_22604);
if(temp__5825__auto___22620){
var seq__22415_22621__$1 = temp__5825__auto___22620;
if(cljs.core.chunked_seq_QMARK_(seq__22415_22621__$1)){
var c__5694__auto___22622 = cljs.core.chunk_first(seq__22415_22621__$1);
var G__22623 = cljs.core.chunk_rest(seq__22415_22621__$1);
var G__22624 = c__5694__auto___22622;
var G__22625 = cljs.core.count(c__5694__auto___22622);
var G__22626 = (0);
seq__22415_22604 = G__22623;
chunk__22416_22605 = G__22624;
count__22417_22606 = G__22625;
i__22418_22607 = G__22626;
continue;
} else {
var vec__22460_22627 = cljs.core.first(seq__22415_22621__$1);
var from_22628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460_22627,(0),null);
var to_22629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460_22627,(1),null);
var f_22630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460_22627,(2),null);
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_22628,to_22629], null),((function (seq__22415_22604,chunk__22416_22605,count__22417_22606,i__22418_22607,vec__22460_22627,from_22628,to_22629,f_22630,seq__22415_22621__$1,temp__5825__auto___22620){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f_22630.cljs$core$IFn$_invoke$arity$1 ? f_22630.cljs$core$IFn$_invoke$arity$1(l) : f_22630.call(null,l)),r);
});})(seq__22415_22604,chunk__22416_22605,count__22417_22606,i__22418_22607,vec__22460_22627,from_22628,to_22629,f_22630,seq__22415_22621__$1,temp__5825__auto___22620))
);

emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_22629,from_22628], null),((function (seq__22415_22604,chunk__22416_22605,count__22417_22606,i__22418_22607,vec__22460_22627,from_22628,to_22629,f_22630,seq__22415_22621__$1,temp__5825__auto___22620){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(f_22630.cljs$core$IFn$_invoke$arity$1 ? f_22630.cljs$core$IFn$_invoke$arity$1(r) : f_22630.call(null,r)));
});})(seq__22415_22604,chunk__22416_22605,count__22417_22606,i__22418_22607,vec__22460_22627,from_22628,to_22629,f_22630,seq__22415_22621__$1,temp__5825__auto___22620))
);


var G__22638 = cljs.core.next(seq__22415_22621__$1);
var G__22639 = null;
var G__22640 = (0);
var G__22641 = (0);
seq__22415_22604 = G__22638;
chunk__22416_22605 = G__22639;
count__22417_22606 = G__22640;
i__22418_22607 = G__22641;
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
var metadata_symbol_22670 = Symbol.for("Symbol.__emmy_meta__");
(cljs.core.IMeta["function"] = true);

(cljs.core._meta["function"] = (function (f){
var or__5162__auto__ = emmy.value.goog$module$goog$object.get(f,metadata_symbol_22670);
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
(o[metadata_symbol_22670] = m);

return o;
});
/**
 * Make s callable. This is done by re-hosting all of the object properties of `s`
 *    in a new native JS function which delegates to the Clojure application. The
 *    result of the application of this new function is supplied to the continuation `k`.
 */
emmy.value.make_es6_callable = (function emmy$value$make_es6_callable(s,k){
var f = (function() { 
var G__22672__delegate = function (xs){
var G__22499 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(s,xs);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__22499) : k.call(null,G__22499));
};
var G__22672 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__22674__i = 0, G__22674__a = new Array(arguments.length -  0);
while (G__22674__i < G__22674__a.length) {G__22674__a[G__22674__i] = arguments[G__22674__i + 0]; ++G__22674__i;}
  xs = new cljs.core.IndexedSeq(G__22674__a,0,null);
} 
return G__22672__delegate.call(this,xs);};
G__22672.cljs$lang$maxFixedArity = 0;
G__22672.cljs$lang$applyTo = (function (arglist__22678){
var xs = cljs.core.seq(arglist__22678);
return G__22672__delegate(xs);
});
G__22672.cljs$core$IFn$_invoke$arity$variadic = G__22672__delegate;
return G__22672;
})()
;
Object.setPrototypeOf(f,Object.getPrototypeOf(s));

var seq__22500_22680 = cljs.core.seq(Object.getOwnPropertyNames(s));
var chunk__22501_22681 = null;
var count__22502_22682 = (0);
var i__22503_22683 = (0);
while(true){
if((i__22503_22683 < count__22502_22682)){
var property_name_22688 = chunk__22501_22681.cljs$core$IIndexed$_nth$arity$2(null,i__22503_22683);
(f[property_name_22688] = emmy.value.goog$module$goog$object.get(s,property_name_22688));


var G__22689 = seq__22500_22680;
var G__22690 = chunk__22501_22681;
var G__22691 = count__22502_22682;
var G__22692 = (i__22503_22683 + (1));
seq__22500_22680 = G__22689;
chunk__22501_22681 = G__22690;
count__22502_22682 = G__22691;
i__22503_22683 = G__22692;
continue;
} else {
var temp__5825__auto___22693 = cljs.core.seq(seq__22500_22680);
if(temp__5825__auto___22693){
var seq__22500_22694__$1 = temp__5825__auto___22693;
if(cljs.core.chunked_seq_QMARK_(seq__22500_22694__$1)){
var c__5694__auto___22695 = cljs.core.chunk_first(seq__22500_22694__$1);
var G__22696 = cljs.core.chunk_rest(seq__22500_22694__$1);
var G__22697 = c__5694__auto___22695;
var G__22698 = cljs.core.count(c__5694__auto___22695);
var G__22699 = (0);
seq__22500_22680 = G__22696;
chunk__22501_22681 = G__22697;
count__22502_22682 = G__22698;
i__22503_22683 = G__22699;
continue;
} else {
var property_name_22700 = cljs.core.first(seq__22500_22694__$1);
(f[property_name_22700] = emmy.value.goog$module$goog$object.get(s,property_name_22700));


var G__22702 = cljs.core.next(seq__22500_22694__$1);
var G__22703 = null;
var G__22704 = (0);
var G__22705 = (0);
seq__22500_22680 = G__22702;
chunk__22501_22681 = G__22703;
count__22502_22682 = G__22704;
i__22503_22683 = G__22705;
continue;
}
} else {
}
}
break;
}

var seq__22504_22708 = cljs.core.seq(Object.getOwnPropertySymbols(s));
var chunk__22505_22709 = null;
var count__22506_22710 = (0);
var i__22507_22711 = (0);
while(true){
if((i__22507_22711 < count__22506_22710)){
var property_symbol_22713 = chunk__22505_22709.cljs$core$IIndexed$_nth$arity$2(null,i__22507_22711);
(f[property_symbol_22713] = emmy.value.goog$module$goog$object.get(s,property_symbol_22713));


var G__22716 = seq__22504_22708;
var G__22717 = chunk__22505_22709;
var G__22718 = count__22506_22710;
var G__22719 = (i__22507_22711 + (1));
seq__22504_22708 = G__22716;
chunk__22505_22709 = G__22717;
count__22506_22710 = G__22718;
i__22507_22711 = G__22719;
continue;
} else {
var temp__5825__auto___22721 = cljs.core.seq(seq__22504_22708);
if(temp__5825__auto___22721){
var seq__22504_22723__$1 = temp__5825__auto___22721;
if(cljs.core.chunked_seq_QMARK_(seq__22504_22723__$1)){
var c__5694__auto___22724 = cljs.core.chunk_first(seq__22504_22723__$1);
var G__22725 = cljs.core.chunk_rest(seq__22504_22723__$1);
var G__22726 = c__5694__auto___22724;
var G__22727 = cljs.core.count(c__5694__auto___22724);
var G__22728 = (0);
seq__22504_22708 = G__22725;
chunk__22505_22709 = G__22726;
count__22506_22710 = G__22727;
i__22507_22711 = G__22728;
continue;
} else {
var property_symbol_22729 = cljs.core.first(seq__22504_22723__$1);
(f[property_symbol_22729] = emmy.value.goog$module$goog$object.get(s,property_symbol_22729));


var G__22732 = cljs.core.next(seq__22504_22723__$1);
var G__22733 = null;
var G__22734 = (0);
var G__22735 = (0);
seq__22504_22708 = G__22732;
chunk__22505_22709 = G__22733;
count__22506_22710 = G__22734;
i__22507_22711 = G__22735;
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
