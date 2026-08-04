goog.provide('emmy.generic');
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.zero_QMARK_ !== 'undefined')){
} else {
/**
 * generic zero?.
 * 
 * Is true if `x` is an additive identity.
 */
emmy.generic.zero_QMARK_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26098 = cljs.core.get_global_hierarchy;
return (fexpr__26098.cljs$core$IFn$_invoke$arity$0 ? fexpr__26098.cljs$core$IFn$_invoke$arity$0() : fexpr__26098.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","zero?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26099 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"zero?","zero?",325758897,null)], null);
return (fexpr__26099.cljs$core$IFn$_invoke$arity$1 ? fexpr__26099.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26099.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.one_QMARK_ !== 'undefined')){
} else {
/**
 * generic one?.
 * 
 * Is true if `x` is a multiplicative identity.
 */
emmy.generic.one_QMARK_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26100 = cljs.core.get_global_hierarchy;
return (fexpr__26100.cljs$core$IFn$_invoke$arity$0 ? fexpr__26100.cljs$core$IFn$_invoke$arity$0() : fexpr__26100.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","one?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26101 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"one?","one?",1787102903,null)], null);
return (fexpr__26101.cljs$core$IFn$_invoke$arity$1 ? fexpr__26101.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26101.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.identity_QMARK_ !== 'undefined')){
} else {
/**
 * generic identity?.
 * 
 * Like `one?`, but this is true of square identity matrices as well.
 *   No matrix is considered `one?` because its function as a multiplicative
 *   identity depends on the shape of the other multiplicand.
 */
emmy.generic.identity_QMARK_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26102 = cljs.core.get_global_hierarchy;
return (fexpr__26102.cljs$core$IFn$_invoke$arity$0 ? fexpr__26102.cljs$core$IFn$_invoke$arity$0() : fexpr__26102.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","identity?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26103 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"identity?","identity?",-1064576891,null)], null);
return (fexpr__26103.cljs$core$IFn$_invoke$arity$1 ? fexpr__26103.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26103.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.zero_like !== 'undefined')){
} else {
/**
 * generic zero-like.
 * 
 * In general, this procedure returns the additive identity of the type of its
 *   argument, if it exists. For numbers this is 0.
 */
emmy.generic.zero_like = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26104 = cljs.core.get_global_hierarchy;
return (fexpr__26104.cljs$core$IFn$_invoke$arity$0 ? fexpr__26104.cljs$core$IFn$_invoke$arity$0() : fexpr__26104.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","zero-like"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26105 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"zero-like","zero-like",-895025247,null)], null);
return (fexpr__26105.cljs$core$IFn$_invoke$arity$1 ? fexpr__26105.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26105.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.one_like !== 'undefined')){
} else {
/**
 * generic one-like.
 * 
 * In general, this procedure returns the multiplicative identity of the type of
 *   its argument, if it exists. For numbers this is 1.
 */
emmy.generic.one_like = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26106 = cljs.core.get_global_hierarchy;
return (fexpr__26106.cljs$core$IFn$_invoke$arity$0 ? fexpr__26106.cljs$core$IFn$_invoke$arity$0() : fexpr__26106.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","one-like"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26108 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"one-like","one-like",-1767302049,null)], null);
return (fexpr__26108.cljs$core$IFn$_invoke$arity$1 ? fexpr__26108.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26108.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.identity_like !== 'undefined')){
} else {
/**
 * generic identity-like.
 * 
 * Like `one-like` but works for square matrices.
 */
emmy.generic.identity_like = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26109 = cljs.core.get_global_hierarchy;
return (fexpr__26109.cljs$core$IFn$_invoke$arity$0 ? fexpr__26109.cljs$core$IFn$_invoke$arity$0() : fexpr__26109.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","identity-like"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26110 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"identity-like","identity-like",1541985180,null)], null);
return (fexpr__26110.cljs$core$IFn$_invoke$arity$1 ? fexpr__26110.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26110.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.exact_QMARK_ !== 'undefined')){
} else {
/**
 * generic exact?.
 * 
 * Entries that are exact are available for `gcd`, among other operations.
 */
emmy.generic.exact_QMARK_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26111 = cljs.core.get_global_hierarchy;
return (fexpr__26111.cljs$core$IFn$_invoke$arity$0 ? fexpr__26111.cljs$core$IFn$_invoke$arity$0() : fexpr__26111.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","exact?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26112 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exact?","exact?",-2028776167,null)], null);
return (fexpr__26112.cljs$core$IFn$_invoke$arity$1 ? fexpr__26112.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26112.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.freeze !== 'undefined')){
} else {
/**
 * generic freeze.
 * 
 * Freezing an expression means removing wrappers and other metadata from
 *   subexpressions, so that the result is basically a pure S-expression with the
 *   same structure as the input. Doing this will rob an expression of useful
 *   information for further computation; so this is intended to be done just
 *   before simplification and printing, to simplify those processes.
 */
emmy.generic.freeze = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26117 = cljs.core.get_global_hierarchy;
return (fexpr__26117.cljs$core$IFn$_invoke$arity$0 ? fexpr__26117.cljs$core$IFn$_invoke$arity$0() : fexpr__26117.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","freeze"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26118 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"freeze","freeze",-610969460,null)], null);
return (fexpr__26118.cljs$core$IFn$_invoke$arity$1 ? fexpr__26118.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26118.call(null,k__25838__auto__));
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [String], null),(function (s){
return s;
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),(function (_){
return null;
}));
/**
 * Returns `true` if `x` is both a [[number?]] and [[zero?]], false otherwise.
 */
emmy.generic.numeric_zero_QMARK_ = (function emmy$generic$numeric_zero_QMARK_(x){
var and__5160__auto__ = emmy.value.number_QMARK_(x);
if(and__5160__auto__){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__5160__auto__;
}
});
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.add !== 'undefined')){
} else {
/**
 * generic add.
 * 
 * Returns the sum of arguments `a` and `b`.
 * 
 *   See [[+]] for a variadic version of [[add]].
 */
emmy.generic.add = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26119 = cljs.core.get_global_hierarchy;
return (fexpr__26119.cljs$core$IFn$_invoke$arity$0 ? fexpr__26119.cljs$core$IFn$_invoke$arity$0() : fexpr__26119.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","add"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26120 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__26120.cljs$core$IFn$_invoke$arity$1 ? fexpr__26120.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26120.call(null,k__25838__auto__));
}));
/**
 * Generic implementation of `+`. Returns the sum of all supplied arguments. `(+)`
 *   returns 0, the additive identity.
 * 
 *   When applied between numbers, acts like `clojure.core/+`. Dispatch is open,
 *   however, making it possible to 'add' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (+ [1 2 3] [2 3 4])
 *   ;;=> (up 3 5 7)
 *   ```
 */
emmy.generic._PLUS_ = (function emmy$generic$_PLUS_(var_args){
var G__26125 = arguments.length;
switch (G__26125) {
case 0:
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___26717 = arguments.length;
var i__5898__auto___26719 = (0);
while(true){
if((i__5898__auto___26719 < len__5897__auto___26717)){
args_arr__5922__auto__.push((arguments[i__5898__auto___26719]));

var G__26721 = (i__5898__auto___26719 + (1));
i__5898__auto___26719 = G__26721;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (0);
}));

(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(emmy.generic.numeric_zero_QMARK_(x))){
return y;
} else {
if(cljs.core.truth_(emmy.generic.numeric_zero_QMARK_(y))){
return x;
} else {
return emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}));

(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(emmy.generic._PLUS_,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(x,y),more);
}));

/** @this {Function} */
(emmy.generic._PLUS_.cljs$lang$applyTo = (function (seq26122){
var G__26123 = cljs.core.first(seq26122);
var seq26122__$1 = cljs.core.next(seq26122);
var G__26124 = cljs.core.first(seq26122__$1);
var seq26122__$2 = cljs.core.next(seq26122__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26123,G__26124,seq26122__$2);
}));

(emmy.generic._PLUS_.cljs$lang$maxFixedArity = (2));

if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.negate !== 'undefined')){
} else {
/**
 * generic negate.
 * 
 * Returns the negation of `a`.
 * 
 *   Equivalent to `(- (g/zero-like a) a)`.
 */
emmy.generic.negate = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26126 = cljs.core.get_global_hierarchy;
return (fexpr__26126.cljs$core$IFn$_invoke$arity$0 ? fexpr__26126.cljs$core$IFn$_invoke$arity$0() : fexpr__26126.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","negate"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26127 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_){
return (-1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null)], null);
return (fexpr__26127.cljs$core$IFn$_invoke$arity$1 ? fexpr__26127.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26127.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.sub !== 'undefined')){
} else {
/**
 * generic sub.
 * 
 * Returns the difference of `a` and `b`.
 * 
 *   Equivalent to `(+ a (negate b))`.
 * 
 *   See [[-]] for a variadic version of [[sub]].
 */
emmy.generic.sub = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26128 = cljs.core.get_global_hierarchy;
return (fexpr__26128.cljs$core$IFn$_invoke$arity$0 ? fexpr__26128.cljs$core$IFn$_invoke$arity$0() : fexpr__26128.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sub"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26129 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (_,___$1){
return (-1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__26129.cljs$core$IFn$_invoke$arity$1 ? fexpr__26129.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26129.call(null,k__25838__auto__));
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
return emmy.generic.add.cljs$core$IFn$_invoke$arity$2(a,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b));
}));
/**
 * Generic implementation of `-`.
 * 
 *   If one argument is supplied, returns the negation of `a`. Else returns the
 *   difference of the first argument `a` and the sum of all remaining
 *   arguments. `(-)` returns 0.
 * 
 *   When applied between numbers, acts like `clojure.core/-`. Dispatch is open,
 *   however, making it possible to 'subtract' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (- [1 2 3] [2 3 4])
 *   ;;=> (up -1 -1 -1)
 * 
 *   (- [1 10])
 *   ;;=> (up -1 -10)
 *   ```
 */
emmy.generic._ = (function emmy$generic$_(var_args){
var G__26134 = arguments.length;
switch (G__26134) {
case 0:
return emmy.generic._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.generic._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___26726 = arguments.length;
var i__5898__auto___26727 = (0);
while(true){
if((i__5898__auto___26727 < len__5897__auto___26726)){
args_arr__5922__auto__.push((arguments[i__5898__auto___26727]));

var G__26728 = (i__5898__auto___26727 + (1));
i__5898__auto___26727 = G__26728;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.generic._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.generic._.cljs$core$IFn$_invoke$arity$0 = (function (){
return (0);
}));

(emmy.generic._.cljs$core$IFn$_invoke$arity$1 = (function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(x);
}));

(emmy.generic._.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(emmy.generic.numeric_zero_QMARK_(y))){
return x;
} else {
if(cljs.core.truth_(emmy.generic.numeric_zero_QMARK_(x))){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(y);
} else {
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}));

(emmy.generic._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.generic._PLUS_,y,more));
}));

/** @this {Function} */
(emmy.generic._.cljs$lang$applyTo = (function (seq26131){
var G__26132 = cljs.core.first(seq26131);
var seq26131__$1 = cljs.core.next(seq26131);
var G__26133 = cljs.core.first(seq26131__$1);
var seq26131__$2 = cljs.core.next(seq26131__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26132,G__26133,seq26131__$2);
}));

(emmy.generic._.cljs$lang$maxFixedArity = (2));

if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.mul !== 'undefined')){
} else {
/**
 * generic mul.
 * 
 * Returns the product of `a` and `b`.
 * 
 *   See [[*]] for a variadic version of [[mul]].
 */
emmy.generic.mul = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26135 = cljs.core.get_global_hierarchy;
return (fexpr__26135.cljs$core$IFn$_invoke$arity$0 ? fexpr__26135.cljs$core$IFn$_invoke$arity$0() : fexpr__26135.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","mul"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26136 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,y){
return y;
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (x,_){
return x;
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__26136.cljs$core$IFn$_invoke$arity$1 ? fexpr__26136.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26136.call(null,k__25838__auto__));
}));
/**
 * Generic implementation of `*`. Returns the product of all supplied
 *   arguments. `(*)` returns 1, the multiplicative identity.
 * 
 *   When applied between numbers, acts like `clojure.core/*`. Dispatch is open,
 *   however, making it possible to 'multiply' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (* 2 #emmy/complex "3 + 1i")
 *   ;;=> #emmy/complex "6 + 2i"
 *   ```
 */
emmy.generic._STAR_ = (function emmy$generic$_STAR_(var_args){
var G__26141 = arguments.length;
switch (G__26141) {
case 0:
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___26732 = arguments.length;
var i__5898__auto___26733 = (0);
while(true){
if((i__5898__auto___26733 < len__5897__auto___26732)){
args_arr__5922__auto__.push((arguments[i__5898__auto___26733]));

var G__26734 = (i__5898__auto___26733 + (1));
i__5898__auto___26733 = G__26734;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (1);
}));

(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var numx_QMARK_ = emmy.value.numerical_QMARK_(x);
var numy_QMARK_ = emmy.value.numerical_QMARK_(y);
if(cljs.core.truth_((function (){var and__5160__auto__ = numx_QMARK_;
if(and__5160__auto__){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__5160__auto__;
}
})())){
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(y);
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = numy_QMARK_;
if(and__5160__auto__){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(y);
} else {
return and__5160__auto__;
}
})())){
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = numx_QMARK_;
if(and__5160__auto__){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__5160__auto__;
}
})())){
return y;
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = numy_QMARK_;
if(and__5160__auto__){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(y);
} else {
return and__5160__auto__;
}
})())){
return x;
} else {
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}
}
}));

(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
}));

/** @this {Function} */
(emmy.generic._STAR_.cljs$lang$applyTo = (function (seq26138){
var G__26139 = cljs.core.first(seq26138);
var seq26138__$1 = cljs.core.next(seq26138);
var G__26140 = cljs.core.first(seq26138__$1);
var seq26138__$2 = cljs.core.next(seq26138__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26139,G__26140,seq26138__$2);
}));

(emmy.generic._STAR_.cljs$lang$maxFixedArity = (2));


if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.invert !== 'undefined')){
} else {
/**
 * generic invert.
 * 
 * Returns the multiplicative inverse of `a`.
 * 
 *   Equivalent to `(/ 1 a)`.
 */
emmy.generic.invert = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26152 = cljs.core.get_global_hierarchy;
return (fexpr__26152.cljs$core$IFn$_invoke$arity$0 ? fexpr__26152.cljs$core$IFn$_invoke$arity$0() : fexpr__26152.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","invert"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26155 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
var G__26156 = (-1);
var G__26157 = (emmy.generic.square.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x) : emmy.generic.square.call(null,x));
return (emmy.generic.div.cljs$core$IFn$_invoke$arity$2 ? emmy.generic.div.cljs$core$IFn$_invoke$arity$2(G__26156,G__26157) : emmy.generic.div.call(null,G__26156,G__26157));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null)], null);
return (fexpr__26155.cljs$core$IFn$_invoke$arity$1 ? fexpr__26155.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26155.call(null,k__25838__auto__));
}));
emmy.generic._STAR_in_default_invert_STAR_ = false;
emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
var _STAR_in_default_invert_STAR__orig_val__26158 = emmy.generic._STAR_in_default_invert_STAR_;
var _STAR_in_default_invert_STAR__temp_val__26159 = true;
(emmy.generic._STAR_in_default_invert_STAR_ = _STAR_in_default_invert_STAR__temp_val__26159);

try{return (emmy.generic.div.cljs$core$IFn$_invoke$arity$2 ? emmy.generic.div.cljs$core$IFn$_invoke$arity$2((1),a) : emmy.generic.div.call(null,(1),a));
}finally {(emmy.generic._STAR_in_default_invert_STAR_ = _STAR_in_default_invert_STAR__orig_val__26158);
}}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.div !== 'undefined')){
} else {
/**
 * generic div.
 * 
 * Returns the result of dividing `a` and `b`.
 * 
 *   Equivalent to `(* a (negate b))`.
 * 
 *   See [[/]] for a variadic version of [[div]].
 */
emmy.generic.div = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26162 = cljs.core.get_global_hierarchy;
return (fexpr__26162.cljs$core$IFn$_invoke$arity$0 ? fexpr__26162.cljs$core$IFn$_invoke$arity$0() : fexpr__26162.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","div"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26163 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,y){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2((1),y);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (x,y){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(x),(emmy.generic.square.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.square.cljs$core$IFn$_invoke$arity$1(y) : emmy.generic.square.call(null,y)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__26163.cljs$core$IFn$_invoke$arity$1 ? fexpr__26163.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26163.call(null,k__25838__auto__));
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
if(cljs.core.truth_(emmy.generic._STAR_in_default_invert_STAR_)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No implementation of [[invert]] or [[div]].",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)], null));
} else {
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(a,emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(b));
}
}));
/**
 * Generic implementation of `/`.
 * 
 *   If one argument is supplied, returns the multiplicative inverse of `a`. Else
 *   returns the result of dividing first argument `a` by the product of all
 *   remaining arguments. `(/)` returns 1, the multiplicative identity.
 * 
 *   When applied between numbers, acts like `clojure.core//`. Dispatch is open,
 *   however, making it possible to 'divide' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (/ [2 4 6] 2)
 *   ;;=> (up 1 2 3)
 *   ```
 */
emmy.generic._SLASH_ = (function emmy$generic$_SLASH_(var_args){
var G__26168 = arguments.length;
switch (G__26168) {
case 0:
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___26748 = arguments.length;
var i__5898__auto___26749 = (0);
while(true){
if((i__5898__auto___26749 < len__5897__auto___26748)){
args_arr__5922__auto__.push((arguments[i__5898__auto___26749]));

var G__26751 = (i__5898__auto___26749 + (1));
i__5898__auto___26749 = G__26751;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (1);
}));

(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(x);
}));

(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.value.number_QMARK_(y);
if(and__5160__auto__){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(y);
} else {
return and__5160__auto__;
}
})())){
return x;
} else {
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(x,y);
}
}));

(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,y,more));
}));

/** @this {Function} */
(emmy.generic._SLASH_.cljs$lang$applyTo = (function (seq26165){
var G__26166 = cljs.core.first(seq26165);
var seq26165__$1 = cljs.core.next(seq26165);
var G__26167 = cljs.core.first(seq26165__$1);
var seq26165__$2 = cljs.core.next(seq26165__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26166,G__26167,seq26165__$2);
}));

(emmy.generic._SLASH_.cljs$lang$maxFixedArity = (2));

/**
 * Alias for [[/]].
 */
emmy.generic.divide = emmy.generic._SLASH_;
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.exact_divide !== 'undefined')){
} else {
/**
 * generic exact-divide.
 * 
 * Similar to the binary case of [[/]], but throws if `(g/exact? <result>)`
 *   returns false.
 */
emmy.generic.exact_divide = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26171 = cljs.core.get_global_hierarchy;
return (fexpr__26171.cljs$core$IFn$_invoke$arity$0 ? fexpr__26171.cljs$core$IFn$_invoke$arity$0() : fexpr__26171.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","exact-divide"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26173 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exact-divide","exact-divide",-836167490,null)], null);
return (fexpr__26173.cljs$core$IFn$_invoke$arity$1 ? fexpr__26173.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26173.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.exp !== 'undefined')){
} else {
/**
 * generic exp.
 * 
 * Returns the base-e exponential of `x`. Equivalent to `(expt e x)`, given
 *   some properly-defined `e` symbol.
 */
emmy.generic.exp = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26179 = cljs.core.get_global_hierarchy;
return (fexpr__26179.cljs$core$IFn$_invoke$arity$0 ? fexpr__26179.cljs$core$IFn$_invoke$arity$0() : fexpr__26179.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","exp"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26181 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),emmy.generic.exp,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp","exp",1378825265,null)], null);
return (fexpr__26181.cljs$core$IFn$_invoke$arity$1 ? fexpr__26181.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26181.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.exp2 !== 'undefined')){
} else {
/**
 * generic exp2.
 * 
 * Returns the base-2 exponential of `x`. Equivalent to `(expt 2 x)`.
 */
emmy.generic.exp2 = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26182 = cljs.core.get_global_hierarchy;
return (fexpr__26182.cljs$core$IFn$_invoke$arity$0 ? fexpr__26182.cljs$core$IFn$_invoke$arity$0() : fexpr__26182.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","exp2"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.exp2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26185 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp2","exp2",603509626,null)], null);
return (fexpr__26185.cljs$core$IFn$_invoke$arity$1 ? fexpr__26185.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26185.call(null,k__25838__auto__));
}));
emmy.generic.exp2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return (emmy.generic.expt.cljs$core$IFn$_invoke$arity$2 ? emmy.generic.expt.cljs$core$IFn$_invoke$arity$2((2),x) : emmy.generic.expt.call(null,(2),x));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.exp10 !== 'undefined')){
} else {
/**
 * generic exp10.
 * 
 * Returns the base-10 exponential of `x`. Equivalent to `(expt 10 x)`.
 */
emmy.generic.exp10 = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26187 = cljs.core.get_global_hierarchy;
return (fexpr__26187.cljs$core$IFn$_invoke$arity$0 ? fexpr__26187.cljs$core$IFn$_invoke$arity$0() : fexpr__26187.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","exp10"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.exp10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26194 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp10","exp10",-1005012445,null)], null);
return (fexpr__26194.cljs$core$IFn$_invoke$arity$1 ? fexpr__26194.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26194.call(null,k__25838__auto__));
}));
emmy.generic.exp10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return (emmy.generic.expt.cljs$core$IFn$_invoke$arity$2 ? emmy.generic.expt.cljs$core$IFn$_invoke$arity$2((10),x) : emmy.generic.expt.call(null,(10),x));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.log !== 'undefined')){
} else {
/**
 * generic log.
 * 
 * Returns the natural logarithm of `x`.
 */
emmy.generic.log = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26206 = cljs.core.get_global_hierarchy;
return (fexpr__26206.cljs$core$IFn$_invoke$arity$0 ? fexpr__26206.cljs$core$IFn$_invoke$arity$0() : fexpr__26206.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","log"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26207 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),emmy.generic.invert,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log","log",45015523,null)], null);
return (fexpr__26207.cljs$core$IFn$_invoke$arity$1 ? fexpr__26207.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26207.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.log2 !== 'undefined')){
} else {
/**
 * generic log2.
 * 
 * Returns the base-2 logarithm of `x`, i.e., $log_2(x)$.
 */
emmy.generic.log2 = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26208 = cljs.core.get_global_hierarchy;
return (fexpr__26208.cljs$core$IFn$_invoke$arity$0 ? fexpr__26208.cljs$core$IFn$_invoke$arity$0() : fexpr__26208.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","log2"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26209 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log2","log2",-1850656939,null)], null);
return (fexpr__26209.cljs$core$IFn$_invoke$arity$1 ? fexpr__26209.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26209.call(null,k__25838__auto__));
}));
var l2_26764 = Math.log((2));
emmy.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(x),l2_26764);
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.log10 !== 'undefined')){
} else {
/**
 * generic log10.
 * 
 * Returns the base-10 logarithm of `x`, i.e., $log_10(x)$.
 */
emmy.generic.log10 = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26210 = cljs.core.get_global_hierarchy;
return (fexpr__26210.cljs$core$IFn$_invoke$arity$0 ? fexpr__26210.cljs$core$IFn$_invoke$arity$0() : fexpr__26210.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","log10"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26211 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log10","log10",891257803,null)], null);
return (fexpr__26211.cljs$core$IFn$_invoke$arity$1 ? fexpr__26211.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26211.call(null,k__25838__auto__));
}));
var l10_26765 = Math.log((10));
emmy.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(x),l10_26765);
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.expt !== 'undefined')){
} else {
/**
 * generic expt
 */
emmy.generic.expt = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26215 = cljs.core.get_global_hierarchy;
return (fexpr__26215.cljs$core$IFn$_invoke$arity$0 ? fexpr__26215.cljs$core$IFn$_invoke$arity$0() : fexpr__26215.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","expt"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26218 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x,y){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(y,emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(y,(1))));
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (x,y){
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.value.number_QMARK_(x);
if(and__5160__auto__){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__5160__auto__;
}
})())){
if(emmy.value.number_QMARK_(y)){
if(cljs.core.not((emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(y) : emmy.generic.negative_QMARK_.call(null,y)))){
return (0);
} else {
return emmy.util.illegal("Derivative undefined: expt");
}
} else {
return (0);
}
} else {
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(x,y));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"expt","expt",2123850345,null)], null);
return (fexpr__26218.cljs$core$IFn$_invoke$arity$1 ? fexpr__26218.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26218.call(null,k__25838__auto__));
}));
/**
 * Default implementation of exponentiation for integral exponents `e`.
 * 
 *   This implementation uses ['Exponentation by
 *   Squaring'](https://en.wikipedia.org/wiki/Exponentiation_by_squaring), and will
 *   work for any type that implements `g/mul`.
 * 
 *   The multiplication operation is looked up once and cached at the beginning of
 *   computation.
 */
emmy.generic.default_expt = (function emmy$generic$default_expt(s,e){
if(emmy.value.native_integral_QMARK_(e)){
} else {
throw (new Error("Assert failed: (v/native-integral? e)"));
}

var kind = emmy.value.kind(s);
var temp__5823__auto__ = cljs.core.get_method(emmy.generic.mul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,kind], null));
if(cljs.core.truth_(temp__5823__auto__)){
var mul_SINGLEQUOTE_ = temp__5823__auto__;
var expt_SINGLEQUOTE_ = (function emmy$generic$default_expt_$_expt_SINGLEQUOTE_(base,pow){
var n = pow;
var y = emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(base);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__26772 = n__$1;
var G__26773 = y;
var G__26774 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : mul_SINGLEQUOTE_.call(null,z,z));
n = G__26772;
y = G__26773;
z = G__26774;
continue;
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(n__$1))){
return (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : mul_SINGLEQUOTE_.call(null,z,y));
} else {
var G__26775 = n__$1;
var G__26776 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : mul_SINGLEQUOTE_.call(null,z,y));
var G__26777 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : mul_SINGLEQUOTE_.call(null,z,z));
n = G__26775;
y = G__26776;
z = G__26777;
continue;

}
}
break;
}
});
if((e > (0))){
return expt_SINGLEQUOTE_(s,e);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(e))){
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(s);
} else {
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(expt_SINGLEQUOTE_(s,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(e)));

}
}
} else {
return emmy.util.illegal((""+"No g/mul implementation registered for kind "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)));
}
});
emmy.generic.relative_integer_tolerance = ((100) * emmy.util.machine_epsilon);
emmy.generic.absolute_integer_tolerance = 1.0E-20;
/**
 * Returns true if `x` is either:
 * 
 *   - [[integral?]],
 *   - a floating point number either < [[absolute-integer-tolerance]] (if near
 *  zero) or within [[relative-integer-tolerance]] of the closest integer,
 * 
 *   false otherwise.
 */
emmy.generic.almost_integral_QMARK_ = (function emmy$generic$almost_integral_QMARK_(x){
var or__5162__auto__ = emmy.value.integral_QMARK_(x);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var and__5160__auto__ = cljs.core.float_QMARK_(x);
if(and__5160__auto__){
var x__$1 = x;
var z = Math.round(x__$1);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(z))){
return (Math.abs(x__$1) < 1.0E-20);
} else {
return (Math.abs(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(x__$1,z),z)) < emmy.generic.relative_integer_tolerance);
}
} else {
return and__5160__auto__;
}
}
});
/**
 * Returns true if the supplied argument is an exact numerical zero, false
 *   otherwise.
 */
emmy.generic.exact_zero_QMARK_ = (function emmy$generic$exact_zero_QMARK_(n){
var and__5160__auto__ = emmy.value.number_QMARK_(n);
if(and__5160__auto__){
var and__5160__auto____$1 = emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(n);
if(cljs.core.truth_(and__5160__auto____$1)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(n);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (s,e){
if(emmy.value.native_integral_QMARK_(e)){
return emmy.generic.default_expt(s,e);
} else {
return emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(e,emmy.generic.log.cljs$core$IFn$_invoke$arity$1(s)));
}
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.square !== 'undefined')){
} else {
/**
 * generic square
 */
emmy.generic.square = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26221 = cljs.core.get_global_hierarchy;
return (fexpr__26221.cljs$core$IFn$_invoke$arity$0 ? fexpr__26221.cljs$core$IFn$_invoke$arity$0() : fexpr__26221.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","square"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26223 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2((2),x);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"square","square",-1842001092,null)], null);
return (fexpr__26223.cljs$core$IFn$_invoke$arity$1 ? fexpr__26223.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26223.call(null,k__25838__auto__));
}));
emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(x,(2));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.cube !== 'undefined')){
} else {
/**
 * generic cube
 */
emmy.generic.cube = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26225 = cljs.core.get_global_hierarchy;
return (fexpr__26225.cljs$core$IFn$_invoke$arity$0 ? fexpr__26225.cljs$core$IFn$_invoke$arity$0() : fexpr__26225.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","cube"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26228 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2((3),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cube","cube",138920159,null)], null);
return (fexpr__26228.cljs$core$IFn$_invoke$arity$1 ? fexpr__26228.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26228.call(null,k__25838__auto__));
}));
emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(x,(3));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.sqrt !== 'undefined')){
} else {
/**
 * generic sqrt
 */
emmy.generic.sqrt = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26229 = cljs.core.get_global_hierarchy;
return (fexpr__26229.cljs$core$IFn$_invoke$arity$0 ? fexpr__26229.cljs$core$IFn$_invoke$arity$0() : fexpr__26229.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sqrt"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26230 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(x),(2)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null)], null);
return (fexpr__26230.cljs$core$IFn$_invoke$arity$1 ? fexpr__26230.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26230.call(null,k__25838__auto__));
}));
emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.div.cljs$core$IFn$_invoke$arity$2((1),(2)),emmy.generic.log.cljs$core$IFn$_invoke$arity$1(x)));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.negative_QMARK_ !== 'undefined')){
} else {
/**
 * generic negative?.
 * 
 * Returns true if the argument `a` is less than `(g/zero-like a)`,
 *   false otherwise. The default implementation depends on a proper Comparable
 *   implementation on the type.`
 */
emmy.generic.negative_QMARK_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26232 = cljs.core.get_global_hierarchy;
return (fexpr__26232.cljs$core$IFn$_invoke$arity$0 ? fexpr__26232.cljs$core$IFn$_invoke$arity$0() : fexpr__26232.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","negative?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26233 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"negative?","negative?",374534410,null)], null);
return (fexpr__26233.cljs$core$IFn$_invoke$arity$1 ? fexpr__26233.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26233.call(null,k__25838__auto__));
}));
emmy.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
return (cljs.core.compare(a,emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(a)) < (0));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.infinite_QMARK_ !== 'undefined')){
} else {
/**
 * generic infinite?.
 * 
 * Returns true if `a` is either numerically infinite (i.e., equal to `##Inf`) or
 *   a compound number (complex or quaterion, for example) with some infinite
 *   component.
 */
emmy.generic.infinite_QMARK_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26237 = cljs.core.get_global_hierarchy;
return (fexpr__26237.cljs$core$IFn$_invoke$arity$0 ? fexpr__26237.cljs$core$IFn$_invoke$arity$0() : fexpr__26237.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","infinite?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26241 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null)], null);
return (fexpr__26241.cljs$core$IFn$_invoke$arity$1 ? fexpr__26241.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26241.call(null,k__25838__auto__));
}));
emmy.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return false;
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.abs !== 'undefined')){
} else {
/**
 * generic abs
 */
emmy.generic.abs = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26243 = cljs.core.get_global_hierarchy;
return (fexpr__26243.cljs$core$IFn$_invoke$arity$0 ? fexpr__26243.cljs$core$IFn$_invoke$arity$0() : fexpr__26243.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","abs"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26244 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"abs","abs",1394505050,null)], null);
return (fexpr__26244.cljs$core$IFn$_invoke$arity$1 ? fexpr__26244.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26244.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.floor !== 'undefined')){
} else {
/**
 * generic floor.
 * 
 * Returns the largest integer less than or equal to `a`.
 * 
 *   Extensions beyond real numbers may behave differently; see the [Documentation
 *   site](https://cljdoc.org/d/org.mentat/emmy/CURRENT/doc/basics/generics)
 *   for more detail.
 */
emmy.generic.floor = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26248 = cljs.core.get_global_hierarchy;
return (fexpr__26248.cljs$core$IFn$_invoke$arity$0 ? fexpr__26248.cljs$core$IFn$_invoke$arity$0() : fexpr__26248.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","floor"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26249 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null);
return (fexpr__26249.cljs$core$IFn$_invoke$arity$1 ? fexpr__26249.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26249.call(null,k__25838__auto__));
}));
emmy.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((emmy.generic.integer_part.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.integer_part.cljs$core$IFn$_invoke$arity$1(a) : emmy.generic.integer_part.call(null,a)),(1));
} else {
return (emmy.generic.integer_part.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.integer_part.cljs$core$IFn$_invoke$arity$1(a) : emmy.generic.integer_part.call(null,a));
}
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.ceiling !== 'undefined')){
} else {
/**
 * generic ceiling.
 * 
 * Returns the result of rounding `a` up to the next largest integer.
 * 
 *   Extensions beyond real numbers may behave differently; see the [Documentation
 *   site](https://cljdoc.org/d/org.mentat/emmy/CURRENT/doc/basics/generics)
 *   for more detail.
 */
emmy.generic.ceiling = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26252 = cljs.core.get_global_hierarchy;
return (fexpr__26252.cljs$core$IFn$_invoke$arity$0 ? fexpr__26252.cljs$core$IFn$_invoke$arity$0() : fexpr__26252.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","ceiling"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26253 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null)], null);
return (fexpr__26253.cljs$core$IFn$_invoke$arity$1 ? fexpr__26253.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26253.call(null,k__25838__auto__));
}));
emmy.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.floor.cljs$core$IFn$_invoke$arity$1(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(a)));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.integer_part !== 'undefined')){
} else {
/**
 * generic integer-part.
 * 
 * Returns the integer part of `a` by removing any fractional digits.
 */
emmy.generic.integer_part = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26254 = cljs.core.get_global_hierarchy;
return (fexpr__26254.cljs$core$IFn$_invoke$arity$0 ? fexpr__26254.cljs$core$IFn$_invoke$arity$0() : fexpr__26254.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","integer-part"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26255 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null)], null);
return (fexpr__26255.cljs$core$IFn$_invoke$arity$1 ? fexpr__26255.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26255.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.fractional_part !== 'undefined')){
} else {
/**
 * generic fractional-part.
 * 
 * Returns the fractional part of the given value, defined as `x - ⌊x⌋`.
 * 
 *   For positive numbers, this is identical to `(- a (integer-part a))`. For
 *   negative `a`, because [[floor]] truncates toward negative infinity, you might
 *   be surprised to find that [[fractional-part]] returns the distance between `a`
 *   and the next-lowest integer:
 * 
 * ```clojure
 * (= 0.6 (fractional-part -0.4))
 * ```
 */
emmy.generic.fractional_part = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26256 = cljs.core.get_global_hierarchy;
return (fexpr__26256.cljs$core$IFn$_invoke$arity$0 ? fexpr__26256.cljs$core$IFn$_invoke$arity$0() : fexpr__26256.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","fractional-part"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26258 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null)], null);
return (fexpr__26258.cljs$core$IFn$_invoke$arity$1 ? fexpr__26258.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26258.call(null,k__25838__auto__));
}));
emmy.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(a,emmy.generic.floor.cljs$core$IFn$_invoke$arity$1(a));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.quotient !== 'undefined')){
} else {
/**
 * generic quotient
 */
emmy.generic.quotient = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26259 = cljs.core.get_global_hierarchy;
return (fexpr__26259.cljs$core$IFn$_invoke$arity$0 ? fexpr__26259.cljs$core$IFn$_invoke$arity$0() : fexpr__26259.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","quotient"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26263 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null)], null);
return (fexpr__26263.cljs$core$IFn$_invoke$arity$1 ? fexpr__26263.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26263.call(null,k__25838__auto__));
}));
/**
 * The default implementation for [[modulo]] depends on the identity:
 * 
 *   x mod y == x - y ⌊x/y⌋
 * 
 *   This is the Knuth definition described
 *   by [Wikipedia](https://en.wikipedia.org/wiki/Modulo_operation).
 */
emmy.generic.modulo_default = (function emmy$generic$modulo_default(a,b){
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(a,emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(b,emmy.generic.floor.cljs$core$IFn$_invoke$arity$1(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(a,b))));
});
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.modulo !== 'undefined')){
} else {
/**
 * generic modulo.
 * 
 * Returns the result of the
 *   mathematical [Modulo](https://en.wikipedia.org/wiki/Modulo_operation)
 *   operation between `a` and `b` (using the Knuth definition listed).
 * 
 *  The contract satisfied by [[modulo]] is:
 * 
 * ```clojure
 * (= a (+ (* b (floor (/ a b)))
 *      (modulo a b)))
 * ```
 * 
 *  For numbers, this differs from the contract offered by [[remainder]]
 *  because `(floor (/ a b))` rounds toward negative infinity, while
 *  the [[quotient]] operation in the contract for [[remainder]] rounds toward 0.
 * 
 *  The result will be either `0` or of the same sign as the divisor `b`.
 */
emmy.generic.modulo = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26267 = cljs.core.get_global_hierarchy;
return (fexpr__26267.cljs$core$IFn$_invoke$arity$0 ? fexpr__26267.cljs$core$IFn$_invoke$arity$0() : fexpr__26267.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","modulo"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26269 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"modulo","modulo",725580254,null)], null);
return (fexpr__26269.cljs$core$IFn$_invoke$arity$1 ? fexpr__26269.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26269.call(null,k__25838__auto__));
}));
emmy.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
return emmy.generic.modulo_default(a,b);
}));
emmy.generic.remainder_default = (function emmy$generic$remainder_default(n,d){
var divnd = emmy.generic.div.cljs$core$IFn$_invoke$arity$2(n,d);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(n),emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(d))){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(d,emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(divnd,emmy.generic.floor.cljs$core$IFn$_invoke$arity$1(divnd)));
} else {
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(d,emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(divnd,emmy.generic.ceiling.cljs$core$IFn$_invoke$arity$1(divnd)));
}
});
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.remainder !== 'undefined')){
} else {
/**
 * generic remainder.
 * 
 * Returns the remainder of dividing the dividend `a` by divisor `b`.
 * 
 *  The contract satisfied by [[remainder]] is:
 * 
 * ```clojure
 * (= a (+ (* b (quotient a b))
 *      (remainder a b)))
 * ```
 * 
 *  For numbers, this differs from the contract offered by [[modulo]]
 *  because [[quotient]] rounds toward 0, while `(floor (/ a b))` rounds toward
 *  negative infinity.
 * 
 *  The result will be either `0` or of the same sign as the dividend `a`.
 */
emmy.generic.remainder = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26270 = cljs.core.get_global_hierarchy;
return (fexpr__26270.cljs$core$IFn$_invoke$arity$0 ? fexpr__26270.cljs$core$IFn$_invoke$arity$0() : fexpr__26270.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","remainder"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26271 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null)], null);
return (fexpr__26271.cljs$core$IFn$_invoke$arity$1 ? fexpr__26271.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26271.call(null,k__25838__auto__));
}));
emmy.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (n,d){
return emmy.generic.remainder_default(n,d);
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.gcd !== 'undefined')){
} else {
/**
 * generic gcd.
 * 
 * Returns the [greatest common
 *   divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of the two
 *   inputs `a` and `b`.
 */
emmy.generic.gcd = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26276 = cljs.core.get_global_hierarchy;
return (fexpr__26276.cljs$core$IFn$_invoke$arity$0 ? fexpr__26276.cljs$core$IFn$_invoke$arity$0() : fexpr__26276.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","gcd"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26280 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"gcd","gcd",1659909537,null)], null);
return (fexpr__26280.cljs$core$IFn$_invoke$arity$1 ? fexpr__26280.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26280.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.lcm !== 'undefined')){
} else {
/**
 * generic lcm.
 * 
 * Returns the [least common
 *   multiple](https://en.wikipedia.org/wiki/Least_common_multiple) of the two
 *   inputs `a` and `b`.
 */
emmy.generic.lcm = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26281 = cljs.core.get_global_hierarchy;
return (fexpr__26281.cljs$core$IFn$_invoke$arity$0 ? fexpr__26281.cljs$core$IFn$_invoke$arity$0() : fexpr__26281.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","lcm"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.lcm.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26282 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null)], null);
return (fexpr__26282.cljs$core$IFn$_invoke$arity$1 ? fexpr__26282.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26282.call(null,k__25838__auto__));
}));
emmy.generic.lcm.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
var g = emmy.generic.gcd.cljs$core$IFn$_invoke$arity$2(a,b);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(g))){
return g;
} else {
return emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.exact_divide.cljs$core$IFn$_invoke$arity$2(a,g),b));
}
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.cos !== 'undefined')){
} else {
/**
 * generic cos.
 * 
 * Returns the [cosine](https://en.wikipedia.org/wiki/Sine_and_cosine) of the
 *   supplied argument `a`.
 */
emmy.generic.cos = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26284 = cljs.core.get_global_hierarchy;
return (fexpr__26284.cljs$core$IFn$_invoke$arity$0 ? fexpr__26284.cljs$core$IFn$_invoke$arity$0() : fexpr__26284.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","cos"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26286 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1((emmy.generic.sin.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(x) : emmy.generic.sin.call(null,x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cos","cos",-1452677493,null)], null);
return (fexpr__26286.cljs$core$IFn$_invoke$arity$1 ? fexpr__26286.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26286.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.sin !== 'undefined')){
} else {
/**
 * generic sin.
 * 
 * Returns the [sine](https://en.wikipedia.org/wiki/Sine_and_cosine) of the
 *   supplied argument `a`.
 */
emmy.generic.sin = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26289 = cljs.core.get_global_hierarchy;
return (fexpr__26289.cljs$core$IFn$_invoke$arity$0 ? fexpr__26289.cljs$core$IFn$_invoke$arity$0() : fexpr__26289.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sin"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26291 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),emmy.generic.cos,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sin","sin",1721439389,null)], null);
return (fexpr__26291.cljs$core$IFn$_invoke$arity$1 ? fexpr__26291.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26291.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.tan !== 'undefined')){
} else {
/**
 * generic tan.
 * 
 * Computes the trigonometric tangent function of the supplied argument `a`.
 * 
 * Equivalent to `(/ (sin a) (cos a))`.
 */
emmy.generic.tan = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26296 = cljs.core.get_global_hierarchy;
return (fexpr__26296.cljs$core$IFn$_invoke$arity$0 ? fexpr__26296.cljs$core$IFn$_invoke$arity$0() : fexpr__26296.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","tan"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26304 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tan","tan",-1380825876,null)], null);
return (fexpr__26304.cljs$core$IFn$_invoke$arity$1 ? fexpr__26304.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26304.call(null,k__25838__auto__));
}));
emmy.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(x));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.cot !== 'undefined')){
} else {
/**
 * generic cot.
 * 
 * Computes the trigonometric cotangent function of the supplied argument `a`.
 * 
 * Equivalent to `(invert (tan a))`, or `(/ (cos a) (sin a))`.
 */
emmy.generic.cot = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26305 = cljs.core.get_global_hierarchy;
return (fexpr__26305.cljs$core$IFn$_invoke$arity$0 ? fexpr__26305.cljs$core$IFn$_invoke$arity$0() : fexpr__26305.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","cot"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.cot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26306 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.square.cljs$core$IFn$_invoke$arity$1((emmy.generic.csc.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.csc.cljs$core$IFn$_invoke$arity$1(x) : emmy.generic.csc.call(null,x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cot","cot",-1635649012,null)], null);
return (fexpr__26306.cljs$core$IFn$_invoke$arity$1 ? fexpr__26306.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26306.call(null,k__25838__auto__));
}));
emmy.generic.cot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(x));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.sec !== 'undefined')){
} else {
/**
 * generic sec.
 * 
 * Computes the secant of the supplied argument `a`.
 * 
 * Equivalent to `(invert (cos a))`.
 */
emmy.generic.sec = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26307 = cljs.core.get_global_hierarchy;
return (fexpr__26307.cljs$core$IFn$_invoke$arity$0 ? fexpr__26307.cljs$core$IFn$_invoke$arity$0() : fexpr__26307.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sec"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26309 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.sec.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.tan.cljs$core$IFn$_invoke$arity$1(x));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sec","sec",60154974,null)], null);
return (fexpr__26309.cljs$core$IFn$_invoke$arity$1 ? fexpr__26309.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26309.call(null,k__25838__auto__));
}));
emmy.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(x));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.csc !== 'undefined')){
} else {
/**
 * generic csc.
 * 
 * Computes the cosecant of the supplied argument `a`.
 * 
 * Equivalent to `(invert (sin a))`.
 */
emmy.generic.csc = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26310 = cljs.core.get_global_hierarchy;
return (fexpr__26310.cljs$core$IFn$_invoke$arity$0 ? fexpr__26310.cljs$core$IFn$_invoke$arity$0() : fexpr__26310.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","csc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.csc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26313 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.cot.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.csc.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"csc","csc",-427853492,null)], null);
return (fexpr__26313.cljs$core$IFn$_invoke$arity$1 ? fexpr__26313.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26313.call(null,k__25838__auto__));
}));
emmy.generic.csc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(x));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.atan !== 'undefined')){
} else {
/**
 * generic atan.
 * 
 * Computes the inverse tangent of the supplied argument `a`. Given two
 *   arguments `a` and `b`, returns the inverse tangent of the angle formed by the
 *   point `(b, a)` in a 2-dimensional euclidean plane.
 * 
 *   The two-argument version is sometimes
 *   called [Atan2](https://en.wikipedia.org/wiki/Atan2).
 */
emmy.generic.atan = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26314 = cljs.core.get_global_hierarchy;
return (fexpr__26314.cljs$core$IFn$_invoke$arity$0 ? fexpr__26314.cljs$core$IFn$_invoke$arity$0() : fexpr__26314.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","atan"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26316 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function() {
var G__26933 = null;
var G__26933__1 = (function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
});
var G__26933__2 = (function (y,x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(y)));
});
G__26933 = function(y,x){
switch(arguments.length){
case 1:
return G__26933__1.call(this,y);
case 2:
return G__26933__2.call(this,y,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26933.cljs$core$IFn$_invoke$arity$1 = G__26933__1;
G__26933.cljs$core$IFn$_invoke$arity$2 = G__26933__2;
return G__26933;
})()
,new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (y,x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(y),emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(y)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(1),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"atan","atan",-1026550135,null)], null);
return (fexpr__26316.cljs$core$IFn$_invoke$arity$1 ? fexpr__26316.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26316.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.asin !== 'undefined')){
} else {
/**
 * generic asin.
 * 
 * Computes the inverse sine of the supplied argument `a`.
 * 
 * Defaults to `atan(x/sqrt(1-x^2))`.
 */
emmy.generic.asin = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26320 = cljs.core.get_global_hierarchy;
return (fexpr__26320.cljs$core$IFn$_invoke$arity$0 ? fexpr__26320.cljs$core$IFn$_invoke$arity$0() : fexpr__26320.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","asin"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26322 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asin","asin",-904130570,null)], null);
return (fexpr__26322.cljs$core$IFn$_invoke$arity$1 ? fexpr__26322.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26322.call(null,k__25838__auto__));
}));
emmy.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.atan.cljs$core$IFn$_invoke$arity$1(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)))));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.acos !== 'undefined')){
} else {
/**
 * generic acos.
 * 
 * Computes the inverse cosine of the supplied argument `a`.
 * 
 * Defaults to `atan(sqrt(1-x^2)/x)`.
 */
emmy.generic.acos = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26323 = cljs.core.get_global_hierarchy;
return (fexpr__26323.cljs$core$IFn$_invoke$arity$0 ? fexpr__26323.cljs$core$IFn$_invoke$arity$0() : fexpr__26323.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acos"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26324 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acos","acos",353741763,null)], null);
return (fexpr__26324.cljs$core$IFn$_invoke$arity$1 ? fexpr__26324.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26324.call(null,k__25838__auto__));
}));
emmy.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.atan.cljs$core$IFn$_invoke$arity$1(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x))),x));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.acot !== 'undefined')){
} else {
/**
 * generic acot.
 * 
 * Computes the [inverse
 *  cotangent](https://mathworld.wolfram.com/InverseCotangent.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `pi/2 - atan(x)`.
 */
emmy.generic.acot = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26329 = cljs.core.get_global_hierarchy;
return (fexpr__26329.cljs$core$IFn$_invoke$arity$0 ? fexpr__26329.cljs$core$IFn$_invoke$arity$0() : fexpr__26329.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acot"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26334 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acot","acot",1103016569,null)], null);
return (fexpr__26334.cljs$core$IFn$_invoke$arity$1 ? fexpr__26334.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26334.call(null,k__25838__auto__));
}));
emmy.generic.acot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(Math.PI,(2)),emmy.generic.atan.cljs$core$IFn$_invoke$arity$1(x));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.asec !== 'undefined')){
} else {
/**
 * generic asec.
 * 
 * Computes the [inverse
 *  secant](https://mathworld.wolfram.com/InverseSecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `atan(sqrt(x^2 - 1))`.
 */
emmy.generic.asec = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26342 = cljs.core.get_global_hierarchy;
return (fexpr__26342.cljs$core$IFn$_invoke$arity$0 ? fexpr__26342.cljs$core$IFn$_invoke$arity$0() : fexpr__26342.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","asec"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.asec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26347 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asec","asec",-81933685,null)], null);
return (fexpr__26347.cljs$core$IFn$_invoke$arity$1 ? fexpr__26347.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26347.call(null,k__25838__auto__));
}));
emmy.generic.asec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.atan.cljs$core$IFn$_invoke$arity$1(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1))));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.acsc !== 'undefined')){
} else {
/**
 * generic acsc.
 * 
 * Computes the [inverse
 *  cosecant](https://mathworld.wolfram.com/InverseCosecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `atan(1 / sqrt(x^2 - 1))`.
 */
emmy.generic.acsc = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26348 = cljs.core.get_global_hierarchy;
return (fexpr__26348.cljs$core$IFn$_invoke$arity$0 ? fexpr__26348.cljs$core$IFn$_invoke$arity$0() : fexpr__26348.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acsc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acsc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26349 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1))))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acsc","acsc",-1149851176,null)], null);
return (fexpr__26349.cljs$core$IFn$_invoke$arity$1 ? fexpr__26349.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26349.call(null,k__25838__auto__));
}));
emmy.generic.acsc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.atan.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1)))));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.cosh !== 'undefined')){
} else {
/**
 * generic cosh.
 * 
 * Computes the [hyperbolic
 *  cosine](https://mathworld.wolfram.com/HyperbolicCosine.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `(e^x + e^{-x}) / 2`.
 */
emmy.generic.cosh = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26354 = cljs.core.get_global_hierarchy;
return (fexpr__26354.cljs$core$IFn$_invoke$arity$0 ? fexpr__26354.cljs$core$IFn$_invoke$arity$0() : fexpr__26354.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","cosh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26359 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),emmy.generic.sinh,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null)], null);
return (fexpr__26359.cljs$core$IFn$_invoke$arity$1 ? fexpr__26359.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26359.call(null,k__25838__auto__));
}));
emmy.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(x))),(2));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.sinh !== 'undefined')){
} else {
/**
 * generic sinh.
 * 
 * Computes the [hyperbolic
 *  sine](https://mathworld.wolfram.com/HyperbolicSine.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `(e^x - e^{-x}) / 2`.
 */
emmy.generic.sinh = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26372 = cljs.core.get_global_hierarchy;
return (fexpr__26372.cljs$core$IFn$_invoke$arity$0 ? fexpr__26372.cljs$core$IFn$_invoke$arity$0() : fexpr__26372.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sinh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26379 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),emmy.generic.cosh,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null)], null);
return (fexpr__26379.cljs$core$IFn$_invoke$arity$1 ? fexpr__26379.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26379.call(null,k__25838__auto__));
}));
emmy.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(x))),(2));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.tanh !== 'undefined')){
} else {
/**
 * generic tanh.
 * 
 * Computes the [hyperbolic
 *  tangent](https://mathworld.wolfram.com/HyperbolicTangent.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `sinh(x) / cosh(x)`.
 */
emmy.generic.tanh = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26392 = cljs.core.get_global_hierarchy;
return (fexpr__26392.cljs$core$IFn$_invoke$arity$0 ? fexpr__26392.cljs$core$IFn$_invoke$arity$0() : fexpr__26392.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","tanh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26393 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic.tanh.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanh","tanh",480481797,null)], null);
return (fexpr__26393.cljs$core$IFn$_invoke$arity$1 ? fexpr__26393.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26393.call(null,k__25838__auto__));
}));
emmy.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
var exp2x = emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,x));
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(exp2x,(1)),emmy.generic.add.cljs$core$IFn$_invoke$arity$2(exp2x,(1)));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.sech !== 'undefined')){
} else {
/**
 * generic sech.
 * 
 * Computes the [hyperbolic
 *  secant](https://mathworld.wolfram.com/HyperbolicSecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `1 / cosh(x)`.
 */
emmy.generic.sech = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26394 = cljs.core.get_global_hierarchy;
return (fexpr__26394.cljs$core$IFn$_invoke$arity$0 ? fexpr__26394.cljs$core$IFn$_invoke$arity$0() : fexpr__26394.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sech"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26395 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.sech.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.tanh.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sech","sech",-1403979131,null)], null);
return (fexpr__26395.cljs$core$IFn$_invoke$arity$1 ? fexpr__26395.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26395.call(null,k__25838__auto__));
}));
emmy.generic.sech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2((2),emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(x))));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.coth !== 'undefined')){
} else {
/**
 * generic coth.
 * 
 * Computes the [hyperbolic
 *  cotangent](https://mathworld.wolfram.com/HyperbolicCotangent.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `cosh(x) / sinh(x)`.
 */
emmy.generic.coth = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26396 = cljs.core.get_global_hierarchy;
return (fexpr__26396.cljs$core$IFn$_invoke$arity$0 ? fexpr__26396.cljs$core$IFn$_invoke$arity$0() : fexpr__26396.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","coth"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.coth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26397 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.square.cljs$core$IFn$_invoke$arity$1((emmy.generic.csch.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.csch.cljs$core$IFn$_invoke$arity$1(x) : emmy.generic.csch.call(null,x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"coth","coth",1130257730,null)], null);
return (fexpr__26397.cljs$core$IFn$_invoke$arity$1 ? fexpr__26397.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26397.call(null,k__25838__auto__));
}));
emmy.generic.coth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
var exp2x = emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,x));
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(exp2x,(1)),emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(exp2x,(1)));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.csch !== 'undefined')){
} else {
/**
 * generic csch.
 * 
 * Computes the [hyperbolic
 *  cosecant](https://mathworld.wolfram.com/HyperbolicCosecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `1 / sinh(x)`.
 */
emmy.generic.csch = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26398 = cljs.core.get_global_hierarchy;
return (fexpr__26398.cljs$core$IFn$_invoke$arity$0 ? fexpr__26398.cljs$core$IFn$_invoke$arity$0() : fexpr__26398.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","csch"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.csch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26402 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.coth.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.csch.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"csch","csch",-1950330545,null)], null);
return (fexpr__26402.cljs$core$IFn$_invoke$arity$1 ? fexpr__26402.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26402.call(null,k__25838__auto__));
}));
emmy.generic.csch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2((2),emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(x))));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.acosh !== 'undefined')){
} else {
/**
 * generic acosh.
 * 
 * Computes the [inverse hyperbolic
 *  cosine](https://mathworld.wolfram.com/InverseHyperbolicCosine.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `2 ln(sqrt((x+1)/2) + sqrt((x-1)/2))`.
 */
emmy.generic.acosh = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26412 = cljs.core.get_global_hierarchy;
return (fexpr__26412.cljs$core$IFn$_invoke$arity$0 ? fexpr__26412.cljs$core$IFn$_invoke$arity$0() : fexpr__26412.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acosh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26413 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(x,(1))),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null)], null);
return (fexpr__26413.cljs$core$IFn$_invoke$arity$1 ? fexpr__26413.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26413.call(null,k__25838__auto__));
}));
emmy.generic.acosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2((2),emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1)),(2))),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(x,(1)),(2))))));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.asinh !== 'undefined')){
} else {
/**
 * generic asinh.
 * 
 * Computes the [inverse hyperbolic
 *  sine](https://mathworld.wolfram.com/InverseHyperbolicSine.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `ln(x + sqrt(1 + x^2))`.
 */
emmy.generic.asinh = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26426 = cljs.core.get_global_hierarchy;
return (fexpr__26426.cljs$core$IFn$_invoke$arity$0 ? fexpr__26426.cljs$core$IFn$_invoke$arity$0() : fexpr__26426.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","asinh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26427 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null)], null);
return (fexpr__26427.cljs$core$IFn$_invoke$arity$1 ? fexpr__26427.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26427.call(null,k__25838__auto__));
}));
emmy.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)))));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.atanh !== 'undefined')){
} else {
/**
 * generic atanh.
 * 
 * Computes the [inverse hyperbolic
 *  tangent](https://mathworld.wolfram.com/InverseHyperbolicTangent.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `1/2 ln((1+x)/(1-x))`.
 */
emmy.generic.atanh = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26433 = cljs.core.get_global_hierarchy;
return (fexpr__26433.cljs$core$IFn$_invoke$arity$0 ? fexpr__26433.cljs$core$IFn$_invoke$arity$0() : fexpr__26433.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","atanh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26434 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)], null);
return (fexpr__26434.cljs$core$IFn$_invoke$arity$1 ? fexpr__26434.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26434.call(null,k__25838__auto__));
}));
emmy.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2((1),x)),emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),x))),(2));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.acoth !== 'undefined')){
} else {
/**
 * generic acoth.
 * 
 * Computes the [inverse hyperbolic
 *  cotangent](https://mathworld.wolfram.com/InverseHyperbolicCotangent.html) of
 *  the supplied argument `a`.
 * 
 * defaults to `1/2 ln((x+1)/(x-1))`.
 */
emmy.generic.acoth = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26436 = cljs.core.get_global_hierarchy;
return (fexpr__26436.cljs$core$IFn$_invoke$arity$0 ? fexpr__26436.cljs$core$IFn$_invoke$arity$0() : fexpr__26436.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acoth"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acoth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26437 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acoth","acoth",1639672811,null)], null);
return (fexpr__26437.cljs$core$IFn$_invoke$arity$1 ? fexpr__26437.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26437.call(null,k__25838__auto__));
}));
emmy.generic.acoth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1))),emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(x,(1)))),(2));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.asech !== 'undefined')){
} else {
/**
 * generic asech.
 * 
 * Computes the [inverse hyperbolic
 *  secant](https://mathworld.wolfram.com/InverseHyperbolicSecant.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `ln((1 + sqrt(1-x^2)) / x)`.
 */
emmy.generic.asech = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26438 = cljs.core.get_global_hierarchy;
return (fexpr__26438.cljs$core$IFn$_invoke$arity$0 ? fexpr__26438.cljs$core$IFn$_invoke$arity$0() : fexpr__26438.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","asech"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.asech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26444 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
var x_PLUS_1 = emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1));
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(x,x_PLUS_1),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),x),x_PLUS_1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asech","asech",-316284500,null)], null);
return (fexpr__26444.cljs$core$IFn$_invoke$arity$1 ? fexpr__26444.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26444.call(null,k__25838__auto__));
}));
emmy.generic.asech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.add.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)))),x));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.acsch !== 'undefined')){
} else {
/**
 * generic acsch.
 * 
 * Computes the [inverse hyperbolic
 *  cosecant](https://mathworld.wolfram.com/InverseHyperbolicCosecant.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `ln((1 + sqrt(1+x^2)) / x)`.
 */
emmy.generic.acsch = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26447 = cljs.core.get_global_hierarchy;
return (fexpr__26447.cljs$core$IFn$_invoke$arity$0 ? fexpr__26447.cljs$core$IFn$_invoke$arity$0() : fexpr__26447.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acsch"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acsch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26448 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1))))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acsch","acsch",-1449651634,null)], null);
return (fexpr__26448.cljs$core$IFn$_invoke$arity$1 ? fexpr__26448.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26448.call(null,k__25838__auto__));
}));
emmy.generic.acsch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.add.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)))),x));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.sinc !== 'undefined')){
} else {
/**
 * generic sinc.
 * 
 * The unnormalized [sinc
 *   function](https://en.wikipedia.org/wiki/Sinc_function), equivalent to
 *   $\frac{\sin x}{x}$ but defined to be equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Sinc_function)
 * - [Mathworld page on Sinc](https://mathworld.wolfram.com/SincFunction.html)
 * - [Boost notes on [[sinc]]
 *   and [[sinch]]](https://www.boost.org/doc/libs/1_65_0/libs/math/doc/html/math_toolkit/sinc/sinc_overview.html)
 */
emmy.generic.sinc = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26449 = cljs.core.get_global_hierarchy;
return (fexpr__26449.cljs$core$IFn$_invoke$arity$0 ? fexpr__26449.cljs$core$IFn$_invoke$arity$0() : fexpr__26449.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sinc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sinc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26461 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(x),x),emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinc","sinc",60189925,null)], null);
return (fexpr__26461.cljs$core$IFn$_invoke$arity$1 ? fexpr__26461.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26461.call(null,k__25838__auto__));
}));
emmy.generic.sinc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(x);
} else {
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(x),x);
}
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.tanc !== 'undefined')){
} else {
/**
 * generic tanc.
 * 
 * `tanc` is defined, by analogy with [[sinc]], to be equal to $\frac{\tan
 *   x}{x}$ for nonzero $x$ and equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Tanc_function)
 * - [Mathworld page on Sinc](https://mathworld.wolfram.com/TancFunction.html)
 */
emmy.generic.tanc = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26476 = cljs.core.get_global_hierarchy;
return (fexpr__26476.cljs$core$IFn$_invoke$arity$0 ? fexpr__26476.cljs$core$IFn$_invoke$arity$0() : fexpr__26476.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","tanc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.tanc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26477 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
var sx = emmy.generic.sec.cljs$core$IFn$_invoke$arity$1(x);
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sx,sx),x),emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.tan.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanc","tanc",-1009303983,null)], null);
return (fexpr__26477.cljs$core$IFn$_invoke$arity$1 ? fexpr__26477.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26477.call(null,k__25838__auto__));
}));
emmy.generic.tanc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(x);
} else {
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.tan.cljs$core$IFn$_invoke$arity$1(x),x);
}
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.sinhc !== 'undefined')){
} else {
/**
 * generic sinhc.
 * 
 * The [sinhc function](https://en.wikipedia.org/wiki/Sinhc_function),
 *   equivalent to $\frac{\sinh x}{x}$ but defined to be equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Sinhc_function)
 * - [Mathworld page on Sinhc](https://mathworld.wolfram.com/SinhcFunction.html)
 */
emmy.generic.sinhc = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26478 = cljs.core.get_global_hierarchy;
return (fexpr__26478.cljs$core$IFn$_invoke$arity$0 ? fexpr__26478.cljs$core$IFn$_invoke$arity$0() : fexpr__26478.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sinhc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sinhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26481 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(x),x),emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinhc","sinhc",-1445515294,null)], null);
return (fexpr__26481.cljs$core$IFn$_invoke$arity$1 ? fexpr__26481.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26481.call(null,k__25838__auto__));
}));
emmy.generic.sinhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(x);
} else {
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(x),x);
}
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.tanhc !== 'undefined')){
} else {
/**
 * generic tanhc.
 * 
 * The [tanhc function](https://en.wikipedia.org/wiki/Tanhc_function),
 *   equivalent to $\frac{\tanh x}{x}$ but defined to be equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Tanhc_function)
 * - [Mathworld page on Tanhc](https://mathworld.wolfram.com/TanhcFunction.html)
 */
emmy.generic.tanhc = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26494 = cljs.core.get_global_hierarchy;
return (fexpr__26494.cljs$core$IFn$_invoke$arity$0 ? fexpr__26494.cljs$core$IFn$_invoke$arity$0() : fexpr__26494.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","tanhc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.tanhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26499 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
var sx = emmy.generic.sech.cljs$core$IFn$_invoke$arity$1(x);
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sx,sx),x),emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.tanh.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanhc","tanhc",991235322,null)], null);
return (fexpr__26499.cljs$core$IFn$_invoke$arity$1 ? fexpr__26499.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26499.call(null,k__25838__auto__));
}));
emmy.generic.tanhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(x);
} else {
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.tanh.cljs$core$IFn$_invoke$arity$1(x),x);
}
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.make_rectangular !== 'undefined')){
} else {
/**
 * generic make-rectangular
 */
emmy.generic.make_rectangular = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26516 = cljs.core.get_global_hierarchy;
return (fexpr__26516.cljs$core$IFn$_invoke$arity$0 ? fexpr__26516.cljs$core$IFn$_invoke$arity$0() : fexpr__26516.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","make-rectangular"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26519 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null)], null);
return (fexpr__26519.cljs$core$IFn$_invoke$arity$1 ? fexpr__26519.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26519.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.make_polar !== 'undefined')){
} else {
/**
 * generic make-polar
 */
emmy.generic.make_polar = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26522 = cljs.core.get_global_hierarchy;
return (fexpr__26522.cljs$core$IFn$_invoke$arity$0 ? fexpr__26522.cljs$core$IFn$_invoke$arity$0() : fexpr__26522.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","make-polar"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26526 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null)], null);
return (fexpr__26526.cljs$core$IFn$_invoke$arity$1 ? fexpr__26526.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26526.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.real_part !== 'undefined')){
} else {
/**
 * generic real-part
 */
emmy.generic.real_part = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26530 = cljs.core.get_global_hierarchy;
return (fexpr__26530.cljs$core$IFn$_invoke$arity$0 ? fexpr__26530.cljs$core$IFn$_invoke$arity$0() : fexpr__26530.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","real-part"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26531 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null)], null);
return (fexpr__26531.cljs$core$IFn$_invoke$arity$1 ? fexpr__26531.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26531.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.imag_part !== 'undefined')){
} else {
/**
 * generic imag-part
 */
emmy.generic.imag_part = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26536 = cljs.core.get_global_hierarchy;
return (fexpr__26536.cljs$core$IFn$_invoke$arity$0 ? fexpr__26536.cljs$core$IFn$_invoke$arity$0() : fexpr__26536.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","imag-part"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26537 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null)], null);
return (fexpr__26537.cljs$core$IFn$_invoke$arity$1 ? fexpr__26537.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26537.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.magnitude !== 'undefined')){
} else {
/**
 * generic magnitude
 */
emmy.generic.magnitude = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26547 = cljs.core.get_global_hierarchy;
return (fexpr__26547.cljs$core$IFn$_invoke$arity$0 ? fexpr__26547.cljs$core$IFn$_invoke$arity$0() : fexpr__26547.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","magnitude"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26551 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
return (fexpr__26551.cljs$core$IFn$_invoke$arity$1 ? fexpr__26551.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26551.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.angle !== 'undefined')){
} else {
/**
 * generic angle
 */
emmy.generic.angle = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26554 = cljs.core.get_global_hierarchy;
return (fexpr__26554.cljs$core$IFn$_invoke$arity$0 ? fexpr__26554.cljs$core$IFn$_invoke$arity$0() : fexpr__26554.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","angle"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.angle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26556 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)], null);
return (fexpr__26556.cljs$core$IFn$_invoke$arity$1 ? fexpr__26556.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26556.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.conjugate !== 'undefined')){
} else {
/**
 * generic conjugate
 */
emmy.generic.conjugate = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26557 = cljs.core.get_global_hierarchy;
return (fexpr__26557.cljs$core$IFn$_invoke$arity$0 ? fexpr__26557.cljs$core$IFn$_invoke$arity$0() : fexpr__26557.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","conjugate"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26562 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"conjugate","conjugate",-1063123193,null)], null);
return (fexpr__26562.cljs$core$IFn$_invoke$arity$1 ? fexpr__26562.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26562.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.transpose !== 'undefined')){
} else {
/**
 * generic transpose
 */
emmy.generic.transpose = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26567 = cljs.core.get_global_hierarchy;
return (fexpr__26567.cljs$core$IFn$_invoke$arity$0 ? fexpr__26567.cljs$core$IFn$_invoke$arity$0() : fexpr__26567.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","transpose"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26573 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"transpose","transpose",1165804847,null)], null);
return (fexpr__26573.cljs$core$IFn$_invoke$arity$1 ? fexpr__26573.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26573.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.trace !== 'undefined')){
} else {
/**
 * generic trace
 */
emmy.generic.trace = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26577 = cljs.core.get_global_hierarchy;
return (fexpr__26577.cljs$core$IFn$_invoke$arity$0 ? fexpr__26577.cljs$core$IFn$_invoke$arity$0() : fexpr__26577.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","trace"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.trace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26578 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"trace","trace",557784112,null)], null);
return (fexpr__26578.cljs$core$IFn$_invoke$arity$1 ? fexpr__26578.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26578.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.determinant !== 'undefined')){
} else {
/**
 * generic determinant
 */
emmy.generic.determinant = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26582 = cljs.core.get_global_hierarchy;
return (fexpr__26582.cljs$core$IFn$_invoke$arity$0 ? fexpr__26582.cljs$core$IFn$_invoke$arity$0() : fexpr__26582.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","determinant"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.determinant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26584 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"determinant","determinant",-580156910,null)], null);
return (fexpr__26584.cljs$core$IFn$_invoke$arity$1 ? fexpr__26584.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26584.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.dimension !== 'undefined')){
} else {
/**
 * generic dimension
 */
emmy.generic.dimension = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26591 = cljs.core.get_global_hierarchy;
return (fexpr__26591.cljs$core$IFn$_invoke$arity$0 ? fexpr__26591.cljs$core$IFn$_invoke$arity$0() : fexpr__26591.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","dimension"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26597 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"dimension","dimension",-2111181571,null)], null);
return (fexpr__26597.cljs$core$IFn$_invoke$arity$1 ? fexpr__26597.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26597.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.dot_product !== 'undefined')){
} else {
/**
 * generic dot-product
 */
emmy.generic.dot_product = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26602 = cljs.core.get_global_hierarchy;
return (fexpr__26602.cljs$core$IFn$_invoke$arity$0 ? fexpr__26602.cljs$core$IFn$_invoke$arity$0() : fexpr__26602.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","dot-product"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26604 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"dot-product","dot-product",-203055892,null)], null);
return (fexpr__26604.cljs$core$IFn$_invoke$arity$1 ? fexpr__26604.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26604.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.inner_product !== 'undefined')){
} else {
/**
 * generic inner-product
 */
emmy.generic.inner_product = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26608 = cljs.core.get_global_hierarchy;
return (fexpr__26608.cljs$core$IFn$_invoke$arity$0 ? fexpr__26608.cljs$core$IFn$_invoke$arity$0() : fexpr__26608.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","inner-product"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26614 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"inner-product","inner-product",-1963110418,null)], null);
return (fexpr__26614.cljs$core$IFn$_invoke$arity$1 ? fexpr__26614.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26614.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.outer_product !== 'undefined')){
} else {
/**
 * generic outer-product
 */
emmy.generic.outer_product = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26615 = cljs.core.get_global_hierarchy;
return (fexpr__26615.cljs$core$IFn$_invoke$arity$0 ? fexpr__26615.cljs$core$IFn$_invoke$arity$0() : fexpr__26615.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","outer-product"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.outer_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26619 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"outer-product","outer-product",491531252,null)], null);
return (fexpr__26619.cljs$core$IFn$_invoke$arity$1 ? fexpr__26619.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26619.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.cross_product !== 'undefined')){
} else {
/**
 * generic cross-product
 */
emmy.generic.cross_product = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26621 = cljs.core.get_global_hierarchy;
return (fexpr__26621.cljs$core$IFn$_invoke$arity$0 ? fexpr__26621.cljs$core$IFn$_invoke$arity$0() : fexpr__26621.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","cross-product"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26622 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cross-product","cross-product",-823528331,null)], null);
return (fexpr__26622.cljs$core$IFn$_invoke$arity$1 ? fexpr__26622.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26622.call(null,k__25838__auto__));
}));
emmy.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (a){
return a;
}));
emmy.generic.trace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (a){
return a;
}));
emmy.generic.determinant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (a){
return a;
}));
emmy.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (_){
return (1);
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (l,r){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(l,r);
}));
emmy.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (l,r){
return emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(l,r);
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.solve_linear !== 'undefined')){
} else {
/**
 * generic solve-linear.
 * 
 * For a given `a` and `b`, returns `x` such that `a*x = b`.
 * 
 *   See[[solve-linear-right]] for a similar function that solves for `a = x*b`.
 */
emmy.generic.solve_linear = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26637 = cljs.core.get_global_hierarchy;
return (fexpr__26637.cljs$core$IFn$_invoke$arity$0 ? fexpr__26637.cljs$core$IFn$_invoke$arity$0() : fexpr__26637.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","solve-linear"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26638 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"solve-linear","solve-linear",481545288,null)], null);
return (fexpr__26638.cljs$core$IFn$_invoke$arity$1 ? fexpr__26638.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26638.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.solve_linear_right !== 'undefined')){
} else {
/**
 * generic solve-linear-right.
 * 
 * For a given `a` and `b`, returns `x` such that `a = x*b`.
 * 
 *   See[[solve-linear]] for a similar function that solves for `a*x = b`.
 */
emmy.generic.solve_linear_right = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26640 = cljs.core.get_global_hierarchy;
return (fexpr__26640.cljs$core$IFn$_invoke$arity$0 ? fexpr__26640.cljs$core$IFn$_invoke$arity$0() : fexpr__26640.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","solve-linear-right"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26642 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"solve-linear-right","solve-linear-right",-1518292405,null)], null);
return (fexpr__26642.cljs$core$IFn$_invoke$arity$1 ? fexpr__26642.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26642.call(null,k__25838__auto__));
}));
/**
 * Alias for [[solve-linear]]; present for compatibility with the original
 *   `scmutils` codebase.
 * 
 *   NOTE: In `scmutils`, `solve-linear-left` and `solve-linear` act identically in
 *   all cases except matrices. `solve-linear-left` only accepted a column
 *   matrix (or up structure) in the `b` position, while `solve-linear` accepted
 *   either a column or row (up or down structure).
 * 
 *   In Emmy, both functions accept either type.
 */
emmy.generic.solve_linear_left = (function emmy$generic$solve_linear_left(a,b){
return emmy.generic.solve_linear.cljs$core$IFn$_invoke$arity$2(a,b);
});
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (x,y){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(y,x);
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (x,y){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(x,y);
}));
emmy.generic.derivative_symbol = new cljs.core.Symbol(null,"D","D",1632515634,null);
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.partial_derivative !== 'undefined')){
} else {
/**
 * generic partial-derivative
 */
emmy.generic.partial_derivative = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26646 = cljs.core.get_global_hierarchy;
return (fexpr__26646.cljs$core$IFn$_invoke$arity$0 ? fexpr__26646.cljs$core$IFn$_invoke$arity$0() : fexpr__26646.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","partial-derivative"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26647 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"partial-derivative","partial-derivative",-1901056819,null)], null);
return (fexpr__26647.cljs$core$IFn$_invoke$arity$1 ? fexpr__26647.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26647.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.Lie_derivative !== 'undefined')){
} else {
/**
 * generic Lie-derivative
 */
emmy.generic.Lie_derivative = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26648 = cljs.core.get_global_hierarchy;
return (fexpr__26648.cljs$core$IFn$_invoke$arity$0 ? fexpr__26648.cljs$core$IFn$_invoke$arity$0() : fexpr__26648.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","Lie-derivative"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.Lie_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26649 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"Lie-derivative","Lie-derivative",-641072185,null)], null);
return (fexpr__26649.cljs$core$IFn$_invoke$arity$1 ? fexpr__26649.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26649.call(null,k__25838__auto__));
}));
if((typeof emmy !== 'undefined') && (typeof emmy.generic !== 'undefined') && (typeof emmy.generic.simplify !== 'undefined')){
} else {
/**
 * generic simplify
 */
emmy.generic.simplify = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26651 = cljs.core.get_global_hierarchy;
return (fexpr__26651.cljs$core$IFn$_invoke$arity$0 ? fexpr__26651.cljs$core$IFn$_invoke$arity$0() : fexpr__26651.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","simplify"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25838__auto__){
var fexpr__26654 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"simplify","simplify",1041318062,null)], null);
return (fexpr__26654.cljs$core$IFn$_invoke$arity$1 ? fexpr__26654.cljs$core$IFn$_invoke$arity$1(k__25838__auto__) : fexpr__26654.call(null,k__25838__auto__));
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
return a;
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (a){
return a;
}));
emmy.value.add_object_symbols_BANG_(cljs.core.PersistentHashMap.fromArrays([cljs.core._SLASH_,cljs.core._PLUS_,cljs.core._LT__EQ_,cljs.core.mod,cljs.core._STAR_,emmy.generic._STAR_,cljs.core._EQ_,cljs.core.rem,cljs.core.neg_QMARK_,cljs.core._GT__EQ_,emmy.generic._,cljs.core.infinite_QMARK_,cljs.core._LT_,cljs.core._GT_,emmy.generic._SLASH_,cljs.core.quot,emmy.generic._PLUS_,cljs.core._],[new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"negative?","negative?",374534410,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"-","-",-471816912,null)]));

//# sourceMappingURL=emmy.generic.js.map
