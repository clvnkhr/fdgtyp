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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26073 = cljs.core.get_global_hierarchy;
return (fexpr__26073.cljs$core$IFn$_invoke$arity$0 ? fexpr__26073.cljs$core$IFn$_invoke$arity$0() : fexpr__26073.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","zero?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26074 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"zero?","zero?",325758897,null)], null);
return (fexpr__26074.cljs$core$IFn$_invoke$arity$1 ? fexpr__26074.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26074.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26075 = cljs.core.get_global_hierarchy;
return (fexpr__26075.cljs$core$IFn$_invoke$arity$0 ? fexpr__26075.cljs$core$IFn$_invoke$arity$0() : fexpr__26075.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","one?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26076 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"one?","one?",1787102903,null)], null);
return (fexpr__26076.cljs$core$IFn$_invoke$arity$1 ? fexpr__26076.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26076.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26079 = cljs.core.get_global_hierarchy;
return (fexpr__26079.cljs$core$IFn$_invoke$arity$0 ? fexpr__26079.cljs$core$IFn$_invoke$arity$0() : fexpr__26079.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","identity?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26081 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"identity?","identity?",-1064576891,null)], null);
return (fexpr__26081.cljs$core$IFn$_invoke$arity$1 ? fexpr__26081.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26081.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26082 = cljs.core.get_global_hierarchy;
return (fexpr__26082.cljs$core$IFn$_invoke$arity$0 ? fexpr__26082.cljs$core$IFn$_invoke$arity$0() : fexpr__26082.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","zero-like"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26083 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"zero-like","zero-like",-895025247,null)], null);
return (fexpr__26083.cljs$core$IFn$_invoke$arity$1 ? fexpr__26083.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26083.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26087 = cljs.core.get_global_hierarchy;
return (fexpr__26087.cljs$core$IFn$_invoke$arity$0 ? fexpr__26087.cljs$core$IFn$_invoke$arity$0() : fexpr__26087.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","one-like"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26088 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"one-like","one-like",-1767302049,null)], null);
return (fexpr__26088.cljs$core$IFn$_invoke$arity$1 ? fexpr__26088.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26088.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26089 = cljs.core.get_global_hierarchy;
return (fexpr__26089.cljs$core$IFn$_invoke$arity$0 ? fexpr__26089.cljs$core$IFn$_invoke$arity$0() : fexpr__26089.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","identity-like"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26091 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"identity-like","identity-like",1541985180,null)], null);
return (fexpr__26091.cljs$core$IFn$_invoke$arity$1 ? fexpr__26091.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26091.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26095 = cljs.core.get_global_hierarchy;
return (fexpr__26095.cljs$core$IFn$_invoke$arity$0 ? fexpr__26095.cljs$core$IFn$_invoke$arity$0() : fexpr__26095.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","exact?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26097 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exact?","exact?",-2028776167,null)], null);
return (fexpr__26097.cljs$core$IFn$_invoke$arity$1 ? fexpr__26097.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26097.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26101 = cljs.core.get_global_hierarchy;
return (fexpr__26101.cljs$core$IFn$_invoke$arity$0 ? fexpr__26101.cljs$core$IFn$_invoke$arity$0() : fexpr__26101.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","freeze"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26104 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"freeze","freeze",-610969460,null)], null);
return (fexpr__26104.cljs$core$IFn$_invoke$arity$1 ? fexpr__26104.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26104.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26106 = cljs.core.get_global_hierarchy;
return (fexpr__26106.cljs$core$IFn$_invoke$arity$0 ? fexpr__26106.cljs$core$IFn$_invoke$arity$0() : fexpr__26106.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","add"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26107 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__26107.cljs$core$IFn$_invoke$arity$1 ? fexpr__26107.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26107.call(null,k__25826__auto__));
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
var G__26112 = arguments.length;
switch (G__26112) {
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
var len__5897__auto___26747 = arguments.length;
var i__5898__auto___26748 = (0);
while(true){
if((i__5898__auto___26748 < len__5897__auto___26747)){
args_arr__5922__auto__.push((arguments[i__5898__auto___26748]));

var G__26749 = (i__5898__auto___26748 + (1));
i__5898__auto___26748 = G__26749;
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
(emmy.generic._PLUS_.cljs$lang$applyTo = (function (seq26109){
var G__26110 = cljs.core.first(seq26109);
var seq26109__$1 = cljs.core.next(seq26109);
var G__26111 = cljs.core.first(seq26109__$1);
var seq26109__$2 = cljs.core.next(seq26109__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26110,G__26111,seq26109__$2);
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26114 = cljs.core.get_global_hierarchy;
return (fexpr__26114.cljs$core$IFn$_invoke$arity$0 ? fexpr__26114.cljs$core$IFn$_invoke$arity$0() : fexpr__26114.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","negate"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26116 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_){
return (-1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null)], null);
return (fexpr__26116.cljs$core$IFn$_invoke$arity$1 ? fexpr__26116.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26116.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26118 = cljs.core.get_global_hierarchy;
return (fexpr__26118.cljs$core$IFn$_invoke$arity$0 ? fexpr__26118.cljs$core$IFn$_invoke$arity$0() : fexpr__26118.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sub"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26119 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (_,___$1){
return (-1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__26119.cljs$core$IFn$_invoke$arity$1 ? fexpr__26119.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26119.call(null,k__25826__auto__));
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
var G__26124 = arguments.length;
switch (G__26124) {
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
var len__5897__auto___26755 = arguments.length;
var i__5898__auto___26756 = (0);
while(true){
if((i__5898__auto___26756 < len__5897__auto___26755)){
args_arr__5922__auto__.push((arguments[i__5898__auto___26756]));

var G__26757 = (i__5898__auto___26756 + (1));
i__5898__auto___26756 = G__26757;
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
(emmy.generic._.cljs$lang$applyTo = (function (seq26121){
var G__26122 = cljs.core.first(seq26121);
var seq26121__$1 = cljs.core.next(seq26121);
var G__26123 = cljs.core.first(seq26121__$1);
var seq26121__$2 = cljs.core.next(seq26121__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26122,G__26123,seq26121__$2);
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26128 = cljs.core.get_global_hierarchy;
return (fexpr__26128.cljs$core$IFn$_invoke$arity$0 ? fexpr__26128.cljs$core$IFn$_invoke$arity$0() : fexpr__26128.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","mul"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26130 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,y){
return y;
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (x,_){
return x;
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__26130.cljs$core$IFn$_invoke$arity$1 ? fexpr__26130.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26130.call(null,k__25826__auto__));
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
var G__26137 = arguments.length;
switch (G__26137) {
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
var len__5897__auto___26763 = arguments.length;
var i__5898__auto___26764 = (0);
while(true){
if((i__5898__auto___26764 < len__5897__auto___26763)){
args_arr__5922__auto__.push((arguments[i__5898__auto___26764]));

var G__26768 = (i__5898__auto___26764 + (1));
i__5898__auto___26764 = G__26768;
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
(emmy.generic._STAR_.cljs$lang$applyTo = (function (seq26133){
var G__26134 = cljs.core.first(seq26133);
var seq26133__$1 = cljs.core.next(seq26133);
var G__26135 = cljs.core.first(seq26133__$1);
var seq26133__$2 = cljs.core.next(seq26133__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26134,G__26135,seq26133__$2);
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26150 = cljs.core.get_global_hierarchy;
return (fexpr__26150.cljs$core$IFn$_invoke$arity$0 ? fexpr__26150.cljs$core$IFn$_invoke$arity$0() : fexpr__26150.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","invert"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26153 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
var G__26154 = (-1);
var G__26155 = (emmy.generic.square.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x) : emmy.generic.square.call(null,x));
return (emmy.generic.div.cljs$core$IFn$_invoke$arity$2 ? emmy.generic.div.cljs$core$IFn$_invoke$arity$2(G__26154,G__26155) : emmy.generic.div.call(null,G__26154,G__26155));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null)], null);
return (fexpr__26153.cljs$core$IFn$_invoke$arity$1 ? fexpr__26153.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26153.call(null,k__25826__auto__));
}));
emmy.generic._STAR_in_default_invert_STAR_ = false;
emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
var _STAR_in_default_invert_STAR__orig_val__26156 = emmy.generic._STAR_in_default_invert_STAR_;
var _STAR_in_default_invert_STAR__temp_val__26157 = true;
(emmy.generic._STAR_in_default_invert_STAR_ = _STAR_in_default_invert_STAR__temp_val__26157);

try{return (emmy.generic.div.cljs$core$IFn$_invoke$arity$2 ? emmy.generic.div.cljs$core$IFn$_invoke$arity$2((1),a) : emmy.generic.div.call(null,(1),a));
}finally {(emmy.generic._STAR_in_default_invert_STAR_ = _STAR_in_default_invert_STAR__orig_val__26156);
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26158 = cljs.core.get_global_hierarchy;
return (fexpr__26158.cljs$core$IFn$_invoke$arity$0 ? fexpr__26158.cljs$core$IFn$_invoke$arity$0() : fexpr__26158.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","div"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26159 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,y){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2((1),y);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (x,y){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(x),(emmy.generic.square.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.square.cljs$core$IFn$_invoke$arity$1(y) : emmy.generic.square.call(null,y)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__26159.cljs$core$IFn$_invoke$arity$1 ? fexpr__26159.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26159.call(null,k__25826__auto__));
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
var G__26164 = arguments.length;
switch (G__26164) {
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
var len__5897__auto___26788 = arguments.length;
var i__5898__auto___26789 = (0);
while(true){
if((i__5898__auto___26789 < len__5897__auto___26788)){
args_arr__5922__auto__.push((arguments[i__5898__auto___26789]));

var G__26791 = (i__5898__auto___26789 + (1));
i__5898__auto___26789 = G__26791;
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
(emmy.generic._SLASH_.cljs$lang$applyTo = (function (seq26161){
var G__26162 = cljs.core.first(seq26161);
var seq26161__$1 = cljs.core.next(seq26161);
var G__26163 = cljs.core.first(seq26161__$1);
var seq26161__$2 = cljs.core.next(seq26161__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26162,G__26163,seq26161__$2);
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26166 = cljs.core.get_global_hierarchy;
return (fexpr__26166.cljs$core$IFn$_invoke$arity$0 ? fexpr__26166.cljs$core$IFn$_invoke$arity$0() : fexpr__26166.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","exact-divide"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26167 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exact-divide","exact-divide",-836167490,null)], null);
return (fexpr__26167.cljs$core$IFn$_invoke$arity$1 ? fexpr__26167.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26167.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26169 = cljs.core.get_global_hierarchy;
return (fexpr__26169.cljs$core$IFn$_invoke$arity$0 ? fexpr__26169.cljs$core$IFn$_invoke$arity$0() : fexpr__26169.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","exp"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26170 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),emmy.generic.exp,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp","exp",1378825265,null)], null);
return (fexpr__26170.cljs$core$IFn$_invoke$arity$1 ? fexpr__26170.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26170.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26171 = cljs.core.get_global_hierarchy;
return (fexpr__26171.cljs$core$IFn$_invoke$arity$0 ? fexpr__26171.cljs$core$IFn$_invoke$arity$0() : fexpr__26171.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","exp2"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.exp2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26172 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp2","exp2",603509626,null)], null);
return (fexpr__26172.cljs$core$IFn$_invoke$arity$1 ? fexpr__26172.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26172.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26177 = cljs.core.get_global_hierarchy;
return (fexpr__26177.cljs$core$IFn$_invoke$arity$0 ? fexpr__26177.cljs$core$IFn$_invoke$arity$0() : fexpr__26177.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","exp10"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.exp10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26178 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp10","exp10",-1005012445,null)], null);
return (fexpr__26178.cljs$core$IFn$_invoke$arity$1 ? fexpr__26178.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26178.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26179 = cljs.core.get_global_hierarchy;
return (fexpr__26179.cljs$core$IFn$_invoke$arity$0 ? fexpr__26179.cljs$core$IFn$_invoke$arity$0() : fexpr__26179.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","log"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26180 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),emmy.generic.invert,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log","log",45015523,null)], null);
return (fexpr__26180.cljs$core$IFn$_invoke$arity$1 ? fexpr__26180.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26180.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26181 = cljs.core.get_global_hierarchy;
return (fexpr__26181.cljs$core$IFn$_invoke$arity$0 ? fexpr__26181.cljs$core$IFn$_invoke$arity$0() : fexpr__26181.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","log2"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26182 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log2","log2",-1850656939,null)], null);
return (fexpr__26182.cljs$core$IFn$_invoke$arity$1 ? fexpr__26182.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26182.call(null,k__25826__auto__));
}));
var l2_26813 = Math.log((2));
emmy.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(x),l2_26813);
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26183 = cljs.core.get_global_hierarchy;
return (fexpr__26183.cljs$core$IFn$_invoke$arity$0 ? fexpr__26183.cljs$core$IFn$_invoke$arity$0() : fexpr__26183.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","log10"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26186 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log10","log10",891257803,null)], null);
return (fexpr__26186.cljs$core$IFn$_invoke$arity$1 ? fexpr__26186.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26186.call(null,k__25826__auto__));
}));
var l10_26816 = Math.log((10));
emmy.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(x),l10_26816);
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26187 = cljs.core.get_global_hierarchy;
return (fexpr__26187.cljs$core$IFn$_invoke$arity$0 ? fexpr__26187.cljs$core$IFn$_invoke$arity$0() : fexpr__26187.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","expt"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26188 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x,y){
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
return (fexpr__26188.cljs$core$IFn$_invoke$arity$1 ? fexpr__26188.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26188.call(null,k__25826__auto__));
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
var G__26834 = n__$1;
var G__26835 = y;
var G__26836 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : mul_SINGLEQUOTE_.call(null,z,z));
n = G__26834;
y = G__26835;
z = G__26836;
continue;
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(n__$1))){
return (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : mul_SINGLEQUOTE_.call(null,z,y));
} else {
var G__26837 = n__$1;
var G__26838 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : mul_SINGLEQUOTE_.call(null,z,y));
var G__26839 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : mul_SINGLEQUOTE_.call(null,z,z));
n = G__26837;
y = G__26838;
z = G__26839;
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26191 = cljs.core.get_global_hierarchy;
return (fexpr__26191.cljs$core$IFn$_invoke$arity$0 ? fexpr__26191.cljs$core$IFn$_invoke$arity$0() : fexpr__26191.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","square"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26192 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2((2),x);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"square","square",-1842001092,null)], null);
return (fexpr__26192.cljs$core$IFn$_invoke$arity$1 ? fexpr__26192.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26192.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26193 = cljs.core.get_global_hierarchy;
return (fexpr__26193.cljs$core$IFn$_invoke$arity$0 ? fexpr__26193.cljs$core$IFn$_invoke$arity$0() : fexpr__26193.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","cube"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26196 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2((3),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cube","cube",138920159,null)], null);
return (fexpr__26196.cljs$core$IFn$_invoke$arity$1 ? fexpr__26196.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26196.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26197 = cljs.core.get_global_hierarchy;
return (fexpr__26197.cljs$core$IFn$_invoke$arity$0 ? fexpr__26197.cljs$core$IFn$_invoke$arity$0() : fexpr__26197.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sqrt"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26198 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(x),(2)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null)], null);
return (fexpr__26198.cljs$core$IFn$_invoke$arity$1 ? fexpr__26198.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26198.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26200 = cljs.core.get_global_hierarchy;
return (fexpr__26200.cljs$core$IFn$_invoke$arity$0 ? fexpr__26200.cljs$core$IFn$_invoke$arity$0() : fexpr__26200.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","negative?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26201 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"negative?","negative?",374534410,null)], null);
return (fexpr__26201.cljs$core$IFn$_invoke$arity$1 ? fexpr__26201.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26201.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26202 = cljs.core.get_global_hierarchy;
return (fexpr__26202.cljs$core$IFn$_invoke$arity$0 ? fexpr__26202.cljs$core$IFn$_invoke$arity$0() : fexpr__26202.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","infinite?"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26203 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null)], null);
return (fexpr__26203.cljs$core$IFn$_invoke$arity$1 ? fexpr__26203.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26203.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26206 = cljs.core.get_global_hierarchy;
return (fexpr__26206.cljs$core$IFn$_invoke$arity$0 ? fexpr__26206.cljs$core$IFn$_invoke$arity$0() : fexpr__26206.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","abs"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26210 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"abs","abs",1394505050,null)], null);
return (fexpr__26210.cljs$core$IFn$_invoke$arity$1 ? fexpr__26210.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26210.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26215 = cljs.core.get_global_hierarchy;
return (fexpr__26215.cljs$core$IFn$_invoke$arity$0 ? fexpr__26215.cljs$core$IFn$_invoke$arity$0() : fexpr__26215.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","floor"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26218 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null);
return (fexpr__26218.cljs$core$IFn$_invoke$arity$1 ? fexpr__26218.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26218.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26219 = cljs.core.get_global_hierarchy;
return (fexpr__26219.cljs$core$IFn$_invoke$arity$0 ? fexpr__26219.cljs$core$IFn$_invoke$arity$0() : fexpr__26219.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","ceiling"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26229 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null)], null);
return (fexpr__26229.cljs$core$IFn$_invoke$arity$1 ? fexpr__26229.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26229.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26235 = cljs.core.get_global_hierarchy;
return (fexpr__26235.cljs$core$IFn$_invoke$arity$0 ? fexpr__26235.cljs$core$IFn$_invoke$arity$0() : fexpr__26235.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","integer-part"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26236 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null)], null);
return (fexpr__26236.cljs$core$IFn$_invoke$arity$1 ? fexpr__26236.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26236.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26237 = cljs.core.get_global_hierarchy;
return (fexpr__26237.cljs$core$IFn$_invoke$arity$0 ? fexpr__26237.cljs$core$IFn$_invoke$arity$0() : fexpr__26237.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","fractional-part"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26238 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null)], null);
return (fexpr__26238.cljs$core$IFn$_invoke$arity$1 ? fexpr__26238.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26238.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26242 = cljs.core.get_global_hierarchy;
return (fexpr__26242.cljs$core$IFn$_invoke$arity$0 ? fexpr__26242.cljs$core$IFn$_invoke$arity$0() : fexpr__26242.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","quotient"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26243 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null)], null);
return (fexpr__26243.cljs$core$IFn$_invoke$arity$1 ? fexpr__26243.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26243.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26245 = cljs.core.get_global_hierarchy;
return (fexpr__26245.cljs$core$IFn$_invoke$arity$0 ? fexpr__26245.cljs$core$IFn$_invoke$arity$0() : fexpr__26245.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","modulo"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26246 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"modulo","modulo",725580254,null)], null);
return (fexpr__26246.cljs$core$IFn$_invoke$arity$1 ? fexpr__26246.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26246.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26247 = cljs.core.get_global_hierarchy;
return (fexpr__26247.cljs$core$IFn$_invoke$arity$0 ? fexpr__26247.cljs$core$IFn$_invoke$arity$0() : fexpr__26247.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","remainder"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26249 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null)], null);
return (fexpr__26249.cljs$core$IFn$_invoke$arity$1 ? fexpr__26249.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26249.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26250 = cljs.core.get_global_hierarchy;
return (fexpr__26250.cljs$core$IFn$_invoke$arity$0 ? fexpr__26250.cljs$core$IFn$_invoke$arity$0() : fexpr__26250.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","gcd"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26254 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"gcd","gcd",1659909537,null)], null);
return (fexpr__26254.cljs$core$IFn$_invoke$arity$1 ? fexpr__26254.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26254.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26255 = cljs.core.get_global_hierarchy;
return (fexpr__26255.cljs$core$IFn$_invoke$arity$0 ? fexpr__26255.cljs$core$IFn$_invoke$arity$0() : fexpr__26255.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","lcm"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.lcm.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26256 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null)], null);
return (fexpr__26256.cljs$core$IFn$_invoke$arity$1 ? fexpr__26256.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26256.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26259 = cljs.core.get_global_hierarchy;
return (fexpr__26259.cljs$core$IFn$_invoke$arity$0 ? fexpr__26259.cljs$core$IFn$_invoke$arity$0() : fexpr__26259.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","cos"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26260 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1((emmy.generic.sin.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(x) : emmy.generic.sin.call(null,x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cos","cos",-1452677493,null)], null);
return (fexpr__26260.cljs$core$IFn$_invoke$arity$1 ? fexpr__26260.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26260.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26263 = cljs.core.get_global_hierarchy;
return (fexpr__26263.cljs$core$IFn$_invoke$arity$0 ? fexpr__26263.cljs$core$IFn$_invoke$arity$0() : fexpr__26263.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sin"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26268 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),emmy.generic.cos,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sin","sin",1721439389,null)], null);
return (fexpr__26268.cljs$core$IFn$_invoke$arity$1 ? fexpr__26268.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26268.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26269 = cljs.core.get_global_hierarchy;
return (fexpr__26269.cljs$core$IFn$_invoke$arity$0 ? fexpr__26269.cljs$core$IFn$_invoke$arity$0() : fexpr__26269.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","tan"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26270 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tan","tan",-1380825876,null)], null);
return (fexpr__26270.cljs$core$IFn$_invoke$arity$1 ? fexpr__26270.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26270.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26271 = cljs.core.get_global_hierarchy;
return (fexpr__26271.cljs$core$IFn$_invoke$arity$0 ? fexpr__26271.cljs$core$IFn$_invoke$arity$0() : fexpr__26271.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","cot"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.cot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26273 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.square.cljs$core$IFn$_invoke$arity$1((emmy.generic.csc.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.csc.cljs$core$IFn$_invoke$arity$1(x) : emmy.generic.csc.call(null,x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cot","cot",-1635649012,null)], null);
return (fexpr__26273.cljs$core$IFn$_invoke$arity$1 ? fexpr__26273.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26273.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26275 = cljs.core.get_global_hierarchy;
return (fexpr__26275.cljs$core$IFn$_invoke$arity$0 ? fexpr__26275.cljs$core$IFn$_invoke$arity$0() : fexpr__26275.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sec"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26278 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.sec.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.tan.cljs$core$IFn$_invoke$arity$1(x));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sec","sec",60154974,null)], null);
return (fexpr__26278.cljs$core$IFn$_invoke$arity$1 ? fexpr__26278.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26278.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26281 = cljs.core.get_global_hierarchy;
return (fexpr__26281.cljs$core$IFn$_invoke$arity$0 ? fexpr__26281.cljs$core$IFn$_invoke$arity$0() : fexpr__26281.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","csc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.csc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26283 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.cot.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.csc.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"csc","csc",-427853492,null)], null);
return (fexpr__26283.cljs$core$IFn$_invoke$arity$1 ? fexpr__26283.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26283.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26285 = cljs.core.get_global_hierarchy;
return (fexpr__26285.cljs$core$IFn$_invoke$arity$0 ? fexpr__26285.cljs$core$IFn$_invoke$arity$0() : fexpr__26285.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","atan"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26286 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function() {
var G__27021 = null;
var G__27021__1 = (function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
});
var G__27021__2 = (function (y,x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(y)));
});
G__27021 = function(y,x){
switch(arguments.length){
case 1:
return G__27021__1.call(this,y);
case 2:
return G__27021__2.call(this,y,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27021.cljs$core$IFn$_invoke$arity$1 = G__27021__1;
G__27021.cljs$core$IFn$_invoke$arity$2 = G__27021__2;
return G__27021;
})()
,new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (y,x){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(y),emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(y)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(1),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"atan","atan",-1026550135,null)], null);
return (fexpr__26286.cljs$core$IFn$_invoke$arity$1 ? fexpr__26286.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26286.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26288 = cljs.core.get_global_hierarchy;
return (fexpr__26288.cljs$core$IFn$_invoke$arity$0 ? fexpr__26288.cljs$core$IFn$_invoke$arity$0() : fexpr__26288.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","asin"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26291 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asin","asin",-904130570,null)], null);
return (fexpr__26291.cljs$core$IFn$_invoke$arity$1 ? fexpr__26291.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26291.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26296 = cljs.core.get_global_hierarchy;
return (fexpr__26296.cljs$core$IFn$_invoke$arity$0 ? fexpr__26296.cljs$core$IFn$_invoke$arity$0() : fexpr__26296.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acos"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26297 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acos","acos",353741763,null)], null);
return (fexpr__26297.cljs$core$IFn$_invoke$arity$1 ? fexpr__26297.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26297.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26298 = cljs.core.get_global_hierarchy;
return (fexpr__26298.cljs$core$IFn$_invoke$arity$0 ? fexpr__26298.cljs$core$IFn$_invoke$arity$0() : fexpr__26298.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acot"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26299 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acot","acot",1103016569,null)], null);
return (fexpr__26299.cljs$core$IFn$_invoke$arity$1 ? fexpr__26299.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26299.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26301 = cljs.core.get_global_hierarchy;
return (fexpr__26301.cljs$core$IFn$_invoke$arity$0 ? fexpr__26301.cljs$core$IFn$_invoke$arity$0() : fexpr__26301.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","asec"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.asec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26306 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asec","asec",-81933685,null)], null);
return (fexpr__26306.cljs$core$IFn$_invoke$arity$1 ? fexpr__26306.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26306.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26318 = cljs.core.get_global_hierarchy;
return (fexpr__26318.cljs$core$IFn$_invoke$arity$0 ? fexpr__26318.cljs$core$IFn$_invoke$arity$0() : fexpr__26318.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acsc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acsc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26327 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1))))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acsc","acsc",-1149851176,null)], null);
return (fexpr__26327.cljs$core$IFn$_invoke$arity$1 ? fexpr__26327.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26327.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26331 = cljs.core.get_global_hierarchy;
return (fexpr__26331.cljs$core$IFn$_invoke$arity$0 ? fexpr__26331.cljs$core$IFn$_invoke$arity$0() : fexpr__26331.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","cosh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26332 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),emmy.generic.sinh,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null)], null);
return (fexpr__26332.cljs$core$IFn$_invoke$arity$1 ? fexpr__26332.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26332.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26335 = cljs.core.get_global_hierarchy;
return (fexpr__26335.cljs$core$IFn$_invoke$arity$0 ? fexpr__26335.cljs$core$IFn$_invoke$arity$0() : fexpr__26335.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sinh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26336 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),emmy.generic.cosh,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null)], null);
return (fexpr__26336.cljs$core$IFn$_invoke$arity$1 ? fexpr__26336.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26336.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26349 = cljs.core.get_global_hierarchy;
return (fexpr__26349.cljs$core$IFn$_invoke$arity$0 ? fexpr__26349.cljs$core$IFn$_invoke$arity$0() : fexpr__26349.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","tanh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26356 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic.tanh.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanh","tanh",480481797,null)], null);
return (fexpr__26356.cljs$core$IFn$_invoke$arity$1 ? fexpr__26356.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26356.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26370 = cljs.core.get_global_hierarchy;
return (fexpr__26370.cljs$core$IFn$_invoke$arity$0 ? fexpr__26370.cljs$core$IFn$_invoke$arity$0() : fexpr__26370.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sech"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26383 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.sech.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.tanh.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sech","sech",-1403979131,null)], null);
return (fexpr__26383.cljs$core$IFn$_invoke$arity$1 ? fexpr__26383.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26383.call(null,k__25826__auto__));
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

emmy.generic.coth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26401 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.square.cljs$core$IFn$_invoke$arity$1((emmy.generic.csch.cljs$core$IFn$_invoke$arity$1 ? emmy.generic.csch.cljs$core$IFn$_invoke$arity$1(x) : emmy.generic.csch.call(null,x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"coth","coth",1130257730,null)], null);
return (fexpr__26401.cljs$core$IFn$_invoke$arity$1 ? fexpr__26401.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26401.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26414 = cljs.core.get_global_hierarchy;
return (fexpr__26414.cljs$core$IFn$_invoke$arity$0 ? fexpr__26414.cljs$core$IFn$_invoke$arity$0() : fexpr__26414.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","csch"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.csch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26420 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.coth.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.csch.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"csch","csch",-1950330545,null)], null);
return (fexpr__26420.cljs$core$IFn$_invoke$arity$1 ? fexpr__26420.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26420.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26425 = cljs.core.get_global_hierarchy;
return (fexpr__26425.cljs$core$IFn$_invoke$arity$0 ? fexpr__26425.cljs$core$IFn$_invoke$arity$0() : fexpr__26425.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acosh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26431 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(x,(1))),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null)], null);
return (fexpr__26431.cljs$core$IFn$_invoke$arity$1 ? fexpr__26431.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26431.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26444 = cljs.core.get_global_hierarchy;
return (fexpr__26444.cljs$core$IFn$_invoke$arity$0 ? fexpr__26444.cljs$core$IFn$_invoke$arity$0() : fexpr__26444.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","asinh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26454 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null)], null);
return (fexpr__26454.cljs$core$IFn$_invoke$arity$1 ? fexpr__26454.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26454.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26457 = cljs.core.get_global_hierarchy;
return (fexpr__26457.cljs$core$IFn$_invoke$arity$0 ? fexpr__26457.cljs$core$IFn$_invoke$arity$0() : fexpr__26457.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","atanh"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26461 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)], null);
return (fexpr__26461.cljs$core$IFn$_invoke$arity$1 ? fexpr__26461.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26461.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26477 = cljs.core.get_global_hierarchy;
return (fexpr__26477.cljs$core$IFn$_invoke$arity$0 ? fexpr__26477.cljs$core$IFn$_invoke$arity$0() : fexpr__26477.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acoth"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acoth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26487 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acoth","acoth",1639672811,null)], null);
return (fexpr__26487.cljs$core$IFn$_invoke$arity$1 ? fexpr__26487.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26487.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26490 = cljs.core.get_global_hierarchy;
return (fexpr__26490.cljs$core$IFn$_invoke$arity$0 ? fexpr__26490.cljs$core$IFn$_invoke$arity$0() : fexpr__26490.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","asech"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.asech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26493 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
var x_PLUS_1 = emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1));
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(x,x_PLUS_1),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2((1),x),x_PLUS_1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asech","asech",-316284500,null)], null);
return (fexpr__26493.cljs$core$IFn$_invoke$arity$1 ? fexpr__26493.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26493.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26508 = cljs.core.get_global_hierarchy;
return (fexpr__26508.cljs$core$IFn$_invoke$arity$0 ? fexpr__26508.cljs$core$IFn$_invoke$arity$0() : fexpr__26508.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","acsch"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.acsch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26510 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1))))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acsch","acsch",-1449651634,null)], null);
return (fexpr__26510.cljs$core$IFn$_invoke$arity$1 ? fexpr__26510.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26510.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26528 = cljs.core.get_global_hierarchy;
return (fexpr__26528.cljs$core$IFn$_invoke$arity$0 ? fexpr__26528.cljs$core$IFn$_invoke$arity$0() : fexpr__26528.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sinc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sinc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26533 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(x),x),emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinc","sinc",60189925,null)], null);
return (fexpr__26533.cljs$core$IFn$_invoke$arity$1 ? fexpr__26533.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26533.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26535 = cljs.core.get_global_hierarchy;
return (fexpr__26535.cljs$core$IFn$_invoke$arity$0 ? fexpr__26535.cljs$core$IFn$_invoke$arity$0() : fexpr__26535.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","tanc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.tanc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26537 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
var sx = emmy.generic.sec.cljs$core$IFn$_invoke$arity$1(x);
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sx,sx),x),emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.tan.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanc","tanc",-1009303983,null)], null);
return (fexpr__26537.cljs$core$IFn$_invoke$arity$1 ? fexpr__26537.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26537.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26541 = cljs.core.get_global_hierarchy;
return (fexpr__26541.cljs$core$IFn$_invoke$arity$0 ? fexpr__26541.cljs$core$IFn$_invoke$arity$0() : fexpr__26541.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","sinhc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.sinhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26546 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(x),x),emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinhc","sinhc",-1445515294,null)], null);
return (fexpr__26546.cljs$core$IFn$_invoke$arity$1 ? fexpr__26546.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26546.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26568 = cljs.core.get_global_hierarchy;
return (fexpr__26568.cljs$core$IFn$_invoke$arity$0 ? fexpr__26568.cljs$core$IFn$_invoke$arity$0() : fexpr__26568.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","tanhc"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.tanhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26570 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
var sx = emmy.generic.sech.cljs$core$IFn$_invoke$arity$1(x);
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sx,sx),x),emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.generic.tanh.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanhc","tanhc",991235322,null)], null);
return (fexpr__26570.cljs$core$IFn$_invoke$arity$1 ? fexpr__26570.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26570.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26578 = cljs.core.get_global_hierarchy;
return (fexpr__26578.cljs$core$IFn$_invoke$arity$0 ? fexpr__26578.cljs$core$IFn$_invoke$arity$0() : fexpr__26578.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","make-rectangular"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26580 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null)], null);
return (fexpr__26580.cljs$core$IFn$_invoke$arity$1 ? fexpr__26580.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26580.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26582 = cljs.core.get_global_hierarchy;
return (fexpr__26582.cljs$core$IFn$_invoke$arity$0 ? fexpr__26582.cljs$core$IFn$_invoke$arity$0() : fexpr__26582.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","make-polar"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26586 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null)], null);
return (fexpr__26586.cljs$core$IFn$_invoke$arity$1 ? fexpr__26586.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26586.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26590 = cljs.core.get_global_hierarchy;
return (fexpr__26590.cljs$core$IFn$_invoke$arity$0 ? fexpr__26590.cljs$core$IFn$_invoke$arity$0() : fexpr__26590.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","real-part"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26604 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null)], null);
return (fexpr__26604.cljs$core$IFn$_invoke$arity$1 ? fexpr__26604.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26604.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26611 = cljs.core.get_global_hierarchy;
return (fexpr__26611.cljs$core$IFn$_invoke$arity$0 ? fexpr__26611.cljs$core$IFn$_invoke$arity$0() : fexpr__26611.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","imag-part"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26614 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null)], null);
return (fexpr__26614.cljs$core$IFn$_invoke$arity$1 ? fexpr__26614.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26614.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26620 = cljs.core.get_global_hierarchy;
return (fexpr__26620.cljs$core$IFn$_invoke$arity$0 ? fexpr__26620.cljs$core$IFn$_invoke$arity$0() : fexpr__26620.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","magnitude"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26631 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
return (fexpr__26631.cljs$core$IFn$_invoke$arity$1 ? fexpr__26631.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26631.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26635 = cljs.core.get_global_hierarchy;
return (fexpr__26635.cljs$core$IFn$_invoke$arity$0 ? fexpr__26635.cljs$core$IFn$_invoke$arity$0() : fexpr__26635.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","angle"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.angle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26640 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)], null);
return (fexpr__26640.cljs$core$IFn$_invoke$arity$1 ? fexpr__26640.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26640.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26641 = cljs.core.get_global_hierarchy;
return (fexpr__26641.cljs$core$IFn$_invoke$arity$0 ? fexpr__26641.cljs$core$IFn$_invoke$arity$0() : fexpr__26641.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","conjugate"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26642 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"conjugate","conjugate",-1063123193,null)], null);
return (fexpr__26642.cljs$core$IFn$_invoke$arity$1 ? fexpr__26642.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26642.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26646 = cljs.core.get_global_hierarchy;
return (fexpr__26646.cljs$core$IFn$_invoke$arity$0 ? fexpr__26646.cljs$core$IFn$_invoke$arity$0() : fexpr__26646.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","transpose"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26650 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"transpose","transpose",1165804847,null)], null);
return (fexpr__26650.cljs$core$IFn$_invoke$arity$1 ? fexpr__26650.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26650.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26655 = cljs.core.get_global_hierarchy;
return (fexpr__26655.cljs$core$IFn$_invoke$arity$0 ? fexpr__26655.cljs$core$IFn$_invoke$arity$0() : fexpr__26655.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","trace"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.trace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26656 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"trace","trace",557784112,null)], null);
return (fexpr__26656.cljs$core$IFn$_invoke$arity$1 ? fexpr__26656.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26656.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26660 = cljs.core.get_global_hierarchy;
return (fexpr__26660.cljs$core$IFn$_invoke$arity$0 ? fexpr__26660.cljs$core$IFn$_invoke$arity$0() : fexpr__26660.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","determinant"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.determinant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26662 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"determinant","determinant",-580156910,null)], null);
return (fexpr__26662.cljs$core$IFn$_invoke$arity$1 ? fexpr__26662.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26662.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26666 = cljs.core.get_global_hierarchy;
return (fexpr__26666.cljs$core$IFn$_invoke$arity$0 ? fexpr__26666.cljs$core$IFn$_invoke$arity$0() : fexpr__26666.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","dimension"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26669 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"dimension","dimension",-2111181571,null)], null);
return (fexpr__26669.cljs$core$IFn$_invoke$arity$1 ? fexpr__26669.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26669.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26676 = cljs.core.get_global_hierarchy;
return (fexpr__26676.cljs$core$IFn$_invoke$arity$0 ? fexpr__26676.cljs$core$IFn$_invoke$arity$0() : fexpr__26676.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","dot-product"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26677 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"dot-product","dot-product",-203055892,null)], null);
return (fexpr__26677.cljs$core$IFn$_invoke$arity$1 ? fexpr__26677.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26677.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26680 = cljs.core.get_global_hierarchy;
return (fexpr__26680.cljs$core$IFn$_invoke$arity$0 ? fexpr__26680.cljs$core$IFn$_invoke$arity$0() : fexpr__26680.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","inner-product"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26685 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"inner-product","inner-product",-1963110418,null)], null);
return (fexpr__26685.cljs$core$IFn$_invoke$arity$1 ? fexpr__26685.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26685.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26686 = cljs.core.get_global_hierarchy;
return (fexpr__26686.cljs$core$IFn$_invoke$arity$0 ? fexpr__26686.cljs$core$IFn$_invoke$arity$0() : fexpr__26686.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","outer-product"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.outer_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26687 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"outer-product","outer-product",491531252,null)], null);
return (fexpr__26687.cljs$core$IFn$_invoke$arity$1 ? fexpr__26687.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26687.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26688 = cljs.core.get_global_hierarchy;
return (fexpr__26688.cljs$core$IFn$_invoke$arity$0 ? fexpr__26688.cljs$core$IFn$_invoke$arity$0() : fexpr__26688.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","cross-product"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26689 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cross-product","cross-product",-823528331,null)], null);
return (fexpr__26689.cljs$core$IFn$_invoke$arity$1 ? fexpr__26689.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26689.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26693 = cljs.core.get_global_hierarchy;
return (fexpr__26693.cljs$core$IFn$_invoke$arity$0 ? fexpr__26693.cljs$core$IFn$_invoke$arity$0() : fexpr__26693.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","solve-linear"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26694 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"solve-linear","solve-linear",481545288,null)], null);
return (fexpr__26694.cljs$core$IFn$_invoke$arity$1 ? fexpr__26694.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26694.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26695 = cljs.core.get_global_hierarchy;
return (fexpr__26695.cljs$core$IFn$_invoke$arity$0 ? fexpr__26695.cljs$core$IFn$_invoke$arity$0() : fexpr__26695.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","solve-linear-right"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26696 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"solve-linear-right","solve-linear-right",-1518292405,null)], null);
return (fexpr__26696.cljs$core$IFn$_invoke$arity$1 ? fexpr__26696.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26696.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26698 = cljs.core.get_global_hierarchy;
return (fexpr__26698.cljs$core$IFn$_invoke$arity$0 ? fexpr__26698.cljs$core$IFn$_invoke$arity$0() : fexpr__26698.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","partial-derivative"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26699 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"partial-derivative","partial-derivative",-1901056819,null)], null);
return (fexpr__26699.cljs$core$IFn$_invoke$arity$1 ? fexpr__26699.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26699.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26701 = cljs.core.get_global_hierarchy;
return (fexpr__26701.cljs$core$IFn$_invoke$arity$0 ? fexpr__26701.cljs$core$IFn$_invoke$arity$0() : fexpr__26701.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","Lie-derivative"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.Lie_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26703 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"Lie-derivative","Lie-derivative",-641072185,null)], null);
return (fexpr__26703.cljs$core$IFn$_invoke$arity$1 ? fexpr__26703.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26703.call(null,k__25826__auto__));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26704 = cljs.core.get_global_hierarchy;
return (fexpr__26704.cljs$core$IFn$_invoke$arity$0 ? fexpr__26704.cljs$core$IFn$_invoke$arity$0() : fexpr__26704.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.generic","simplify"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__25826__auto__){
var fexpr__26705 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"simplify","simplify",1041318062,null)], null);
return (fexpr__26705.cljs$core$IFn$_invoke$arity$1 ? fexpr__26705.cljs$core$IFn$_invoke$arity$1(k__25826__auto__) : fexpr__26705.call(null,k__25826__auto__));
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
return a;
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (a){
return a;
}));
emmy.value.add_object_symbols_BANG_(cljs.core.PersistentHashMap.fromArrays([cljs.core._SLASH_,cljs.core._PLUS_,cljs.core._LT__EQ_,cljs.core.mod,cljs.core._STAR_,emmy.generic._STAR_,cljs.core._EQ_,cljs.core.rem,cljs.core.neg_QMARK_,cljs.core._GT__EQ_,emmy.generic._,cljs.core.infinite_QMARK_,cljs.core._LT_,cljs.core._GT_,emmy.generic._SLASH_,cljs.core.quot,emmy.generic._PLUS_,cljs.core._],[new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"negative?","negative?",374534410,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"-","-",-471816912,null)]));

//# sourceMappingURL=emmy.generic.js.map
