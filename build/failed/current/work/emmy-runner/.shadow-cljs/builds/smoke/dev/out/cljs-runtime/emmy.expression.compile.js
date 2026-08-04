goog.provide('emmy.expression.compile');
emmy.expression.compile.fn_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Dict of `<symbol> -> {:sym <symbolic-fn>, :f <evaluated-fn>}`. The keys
 *   constitute the set of operations allowed to appear within the body of the
 *   compiled function.
 * 
 *   If you're compiling a function for use with the numerical routines, the
 *   library assumes that your function operates only on doubles (even though you
 *   wrote it with generic routines).
 */
emmy.expression.compile.compiled_fn_whitelist = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"down","down",-1089190199,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null),new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","quot","clojure.core/quot",-292848233,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.quot], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","rem","clojure.core/rem",-160175829,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.rem], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sinh","Math/sinh",-996945022,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58700_SHARP_){
return Math.sinh(p1__58700_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sin","Math/sin",1723896309,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58693_SHARP_){
return Math.sin(p1__58693_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","tan","Math/tan",-1378236364,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58694_SHARP_){
return Math.tan(p1__58694_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","cos","Math/cos",-1454544429,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58692_SHARP_){
return Math.cos(p1__58692_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","mod","clojure.core/mod",215755142,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.mod], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._SLASH_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","abs","Math/abs",1400569394,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58689_SHARP_){
return Math.abs(p1__58689_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","log","Math/log",46490779,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58690_SHARP_){
return Math.log(p1__58690_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","cosh","Math/cosh",-1954958918,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58699_SHARP_){
return Math.cosh(p1__58699_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","pow","Math/pow",193807960,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58685_SHARP_,p2__58687_SHARP_){
return Math.pow(p1__58685_SHARP_,p2__58687_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("Math","floor","Math/floor",-774722964,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (x){
return (x - Math.floor(x));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._PLUS_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._STAR_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","atan","Math/atan",-1027632159,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58697_SHARP_){
return Math.atan(p1__58697_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","acos","Math/acos",357181099,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58695_SHARP_){
return Math.acos(p1__58695_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","floor","Math/floor",-774722964,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58702_SHARP_){
return Math.floor(p1__58702_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","acosh","Math/acosh",-2007025431,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58705_SHARP_){
return Math.acosh(p1__58705_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","ceil","Math/ceil",-186204017,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58703_SHARP_){
return Math.ceil(p1__58703_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("emmy.structure","down","emmy.structure/down",-104137184,null),new cljs.core.Keyword(null,"f","f",-1597136552),emmy.structure.down], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sqrt","Math/sqrt",377394374,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58688_SHARP_){
return Math.sqrt(p1__58688_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","asin","Math/asin",-889681202,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58696_SHARP_){
return Math.asin(p1__58696_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","exp","Math/exp",1383313257,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58691_SHARP_){
return Math.exp(p1__58691_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","trunc","Math/trunc",1386774702,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58704_SHARP_){
return Math.trunc(p1__58704_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","asinh","Math/asinh",-1387635973,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58706_SHARP_){
return Math.asinh(p1__58706_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","tanh","Math/tanh",479074141,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58701_SHARP_){
return Math.tanh(p1__58701_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","atanh","Math/atanh",-1910277884,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__58707_SHARP_){
return Math.atanh(p1__58707_SHARP_);
})], null)]);
/**
 * Dict of `<symbol> -> <symbolic-fn>`. See [[compiled-fn-whitelist]] for more
 *   detail.
 */
emmy.expression.compile.sym__GT_resolved_form = emmy.util.map_vals(new cljs.core.Keyword(null,"sym","sym",-1444860305),emmy.expression.compile.compiled_fn_whitelist);
/**
 * Similar to [[compiled-fn-whitelist]], but restricted to numeric operations.
 */
emmy.expression.compile.numeric_whitelist = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(emmy.expression.compile.compiled_fn_whitelist,new cljs.core.Symbol(null,"up","up",1370819414,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"down","down",-1089190199,null)], 0));
/**
 * Takes a function body and returns a new body with all numeric operations
 *   like `(/ 1 2)` evaluated and all numerical literals converted to `double` or
 *   `js/Number`.
 */
emmy.expression.compile.apply_numeric_ops = (function emmy$expression$compile$apply_numeric_ops(body){
return clojure.walk.postwalk((function (expr){
if(emmy.value.real_QMARK_(expr)){
return emmy.util.double$(expr);
} else {
if(cljs.core.sequential_QMARK_(expr)){
var vec__58721 = expr;
var seq__58722 = cljs.core.seq(vec__58721);
var first__58723 = cljs.core.first(seq__58722);
var seq__58722__$1 = cljs.core.next(seq__58722);
var f = first__58723;
var xs = seq__58722__$1;
var temp__5823__auto__ = (function (){var and__5160__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,xs);
if(and__5160__auto__){
return (emmy.expression.compile.numeric_whitelist.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.compile.numeric_whitelist.cljs$core$IFn$_invoke$arity$1(f) : emmy.expression.compile.numeric_whitelist.call(null,f));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return emmy.util.double$(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(m),xs));
} else {
return expr;
}
} else {
return expr;

}
}
}),body);
});
emmy.expression.compile._STAR_mode_STAR_ = new cljs.core.Keyword(null,"native","native",-613060878);
/**
 * Set of all supported compilation modes.
 */
emmy.expression.compile.valid_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"native","native",-613060878),null,new cljs.core.Keyword(null,"clj","clj",-660495428),null,new cljs.core.Keyword(null,"sci","sci",-1317785218),null], null), null);
/**
 * Given a keyword `mode` specifying a compilation mode, returns `mode` if valid,
 *   and throws otherwise.
 */
emmy.expression.compile.validate_mode_BANG_ = (function emmy$expression$compile$validate_mode_BANG_(mode){
var or__5162__auto__ = (emmy.expression.compile.valid_modes.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.compile.valid_modes.cljs$core$IFn$_invoke$arity$1(mode) : emmy.expression.compile.valid_modes.call(null,mode));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invalid compilation mode supplied: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)+". Please supply (or bind to `*mode*`) one of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.compile.valid_modes)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"valid-mode","valid-mode",1171609710),emmy.expression.compile.valid_modes], null));
}
});
/**
 * Validates and returns the dynamically bound compilation [[*mode*]].
 *   Throws on an invalid setting.
 */
emmy.expression.compile.compiler_mode = (function emmy$expression$compile$compiler_mode(){
return emmy.expression.compile.validate_mode_BANG_(emmy.expression.compile._STAR_mode_STAR_);
});
/**
 * Set the default compilation mode by supplying an entry from [[valid-modes]].
 */
emmy.expression.compile.set_compiler_mode_BANG_ = (function emmy$expression$compile$set_compiler_mode_BANG_(mode){
emmy.expression.compile.validate_mode_BANG_(mode);

return (emmy.expression.compile._STAR_mode_STAR_ = mode);
});
/**
 * Generates compiled function argument symbols for input and output state and
 *   parameters when compiling in primitive mode. A type hint is attached to
 *   the symbols to avoid reflection.
 */
emmy.expression.compile.primitive_state_symbols = (function emmy$expression$compile$primitive_state_symbols(gensym){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58729_SHARP_){
return cljs.core.with_meta(p1__58729_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null)], null));
}),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((3),gensym));
});
/**
 * Computes the argument list corresponding to `state-model` according to
 *   the `:calling-convention` in the code object. The argument list will be
 *   placed stored in the `:argv` key, and the original state model itself
 *   in `:state-model`.
 * 
 *   - `state-model`: a structure of symbols representing the state value
 *  operated on by the state derivative
 * 
 *   Effectively, there are four classes of signature handled here.
 * 
 *   In each of the following displays, the parameter argument list
 *   `[p0...]` will be present only if the key `:params` is present
 *   on the code object, corresponding to the use of the
 *   `:generic-params?` compilation option.
 * 
 *   - `:structure => (fn [[t [x0 x1] [v0 v1]] [p0 p1 ...]] ...) `
 * 
 *   This is the typical signature for a state derivative discussed in
 *   SICM. It maps a state tuple to its time derivative; structure in,
 *   structure out.
 * 
 *   - `:primitive => (fn [ys yps ps])`
 * 
 *   ODE solvers can gain efficiency if they may allocate
 *   long-lived input and output vectors. Bindings for the individual
 *   state elements are inserted into the code's local variables.
 *   The input vector `ys` should have the same length as the flat
 *   form of `state-model`. The derivative should be returned by
 *   mutating the array `yps`. The parameters `ps` will also be a
 *   primitive array, which (like `ys`) should be considered read-only.
 * 
 *   = `:native => (fn [t [x0 x1] [v0 v1]] ...)
 * 
 *   It is useful to compile functions with arbitrary argument structure
 *   too. The native convention allows you to get the same argument list
 *   that you provide to `fn` to create the function. This is convenient
 *   for use with univariate integration libraries.
 */
emmy.expression.compile.state_argv = (function emmy$expression$compile$state_argv(p__58732,gensym_fn){
var map__58733 = p__58732;
var map__58733__$1 = cljs.core.__destructure_map(map__58733);
var code = map__58733__$1;
var calling_convention = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"calling-convention","calling-convention",-1148806156));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"state-model","state-model",371967018));
var argv = (function (){var G__58734 = calling_convention;
var G__58734__$1 = (((G__58734 instanceof cljs.core.Keyword))?G__58734.fqn:null);
switch (G__58734__$1) {
case "primitive":
return emmy.expression.compile.primitive_state_symbols((function (){
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1("a") : gensym_fn.call(null,"a"));
}));

break;
case "structure":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,state_model)], null);

break;
case "native":
return state_model;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid calling convention supplied",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"calling-convention","calling-convention",-1148806156),calling_convention], null));

}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code,new cljs.core.Keyword(null,"argv","argv",-1462790895),(cljs.core.truth_((function (){var and__5160__auto__ = params;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(calling_convention,new cljs.core.Keyword(null,"primitive","primitive",1884541424));
} else {
return and__5160__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(argv,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,params)):argv));
});
/**
 * Returns a new let expression with the supplied `bindings` wrapping `exp`. If
 *   `exp` is already a let expression, the `bindings` will be appended (or
 *   prepended, if `prepend?`) to the existing ones. Each binding is a two-element
 *   list [var value].
 */
emmy.expression.compile.append_bindings = (function emmy$expression$compile$append_bindings(var_args){
var args__5903__auto__ = [];
var len__5897__auto___58818 = arguments.length;
var i__5898__auto___58819 = (0);
while(true){
if((i__5898__auto___58819 < len__5897__auto___58818)){
args__5903__auto__.push((arguments[i__5898__auto___58819]));

var G__58820 = (i__5898__auto___58819 + (1));
i__5898__auto___58819 = G__58820;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return emmy.expression.compile.append_bindings.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(emmy.expression.compile.append_bindings.cljs$core$IFn$_invoke$arity$variadic = (function (exp,bindings,prepend_QMARK_){
var z = clojure.zip.seq_zip(exp);
var unpaired_bindings = (function (){var iter__5649__auto__ = (function emmy$expression$compile$iter__58740(s__58741){
return (new cljs.core.LazySeq(null,(function (){
var s__58741__$1 = s__58741;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__58741__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var kv = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__58741__$1,kv,xs__6385__auto__,temp__5825__auto__,z){
return (function emmy$expression$compile$iter__58740_$_iter__58742(s__58743){
return (new cljs.core.LazySeq(null,((function (s__58741__$1,kv,xs__6385__auto__,temp__5825__auto__,z){
return (function (){
var s__58743__$1 = s__58743;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__58743__$1);
if(temp__5825__auto____$1){
var s__58743__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58743__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__58743__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__58745 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__58744 = (0);
while(true){
if((i__58744 < size__5648__auto__)){
var a = cljs.core._nth(c__5647__auto__,i__58744);
cljs.core.chunk_append(b__58745,a);

var G__58826 = (i__58744 + (1));
i__58744 = G__58826;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58745),emmy$expression$compile$iter__58740_$_iter__58742(cljs.core.chunk_rest(s__58743__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58745),null);
}
} else {
var a = cljs.core.first(s__58743__$2);
return cljs.core.cons(a,emmy$expression$compile$iter__58740_$_iter__58742(cljs.core.rest(s__58743__$2)));
}
} else {
return null;
}
break;
}
});})(s__58741__$1,kv,xs__6385__auto__,temp__5825__auto__,z))
,null,null));
});})(s__58741__$1,kv,xs__6385__auto__,temp__5825__auto__,z))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(kv));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,emmy$expression$compile$iter__58740(cljs.core.rest(s__58741__$1)));
} else {
var G__58827 = cljs.core.rest(s__58741__$1);
s__58741__$1 = G__58827;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(bindings);
})();
return clojure.zip.root(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.zip.node(clojure.zip.next(z)),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)))?clojure.zip.edit(clojure.zip.right(clojure.zip.next(z)),(function (existing_bindings){
if(cljs.core.truth_(prepend_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(unpaired_bindings,existing_bindings));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(existing_bindings,unpaired_bindings);
}
})):clojure.zip.replace(z,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(unpaired_bindings),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,clojure.zip.node(z),null,(1),null))], 0)))))));
}));

(emmy.expression.compile.append_bindings.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(emmy.expression.compile.append_bindings.cljs$lang$applyTo = (function (seq58737){
var G__58738 = cljs.core.first(seq58737);
var seq58737__$1 = cljs.core.next(seq58737);
var G__58739 = cljs.core.first(seq58737__$1);
var seq58737__$2 = cljs.core.next(seq58737__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58738,G__58739,seq58737__$2);
}));

/**
 * Invokes [[emmy.expression.cse/extract-common-subexpressions]] on `x`.
 * 
 *   Local bindings for the common sub-expressions found are appended to the
 *   binding structure of the body, and the (possibly) simplified code replaces
 *   that in the previous code body.
 */
emmy.expression.compile.cse = (function emmy$expression$compile$cse(x,gensym_fn){
return emmy.expression.cse.extract_common_subexpressions(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x),(function (new_body,new_locals){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"body","body",-2049205669),((cljs.core.seq(new_locals))?emmy.expression.compile.append_bindings(new_body,new_locals):new_body));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gensym-fn","gensym-fn",-883485832),gensym_fn], null));
});
/**
 * In the primitive calling convention case, introduces a sequence of local
 *   variables for each of the state variables, retrieving the values from the
 *   primitive input array. Returns an updated code object.
 */
emmy.expression.compile.primitive_bindings = (function emmy$expression$compile$primitive_bindings(p__58746){
var map__58747 = p__58746;
var map__58747__$1 = cljs.core.__destructure_map(map__58747);
var code = map__58747__$1;
var argv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58747__$1,new cljs.core.Keyword(null,"argv","argv",-1462790895));
var calling_convention = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58747__$1,new cljs.core.Keyword(null,"calling-convention","calling-convention",-1148806156));
var state_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58747__$1,new cljs.core.Keyword(null,"state-model","state-model",371967018));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58747__$1,new cljs.core.Keyword(null,"params","params",710516235));
var local_vars_from_array = (function emmy$expression$compile$primitive_bindings_$_local_vars_from_array(array_symbol,vars){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,array_symbol,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null))], 0))))], null);
}),vars);
});
var G__58748 = calling_convention;
var G__58748__$1 = (((G__58748 instanceof cljs.core.Keyword))?G__58748.fqn:null);
switch (G__58748__$1) {
case "primitive":
var vec__58749 = argv;
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58749,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58749,(1),null);
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58749,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(code,new cljs.core.Keyword(null,"body","body",-2049205669),emmy.expression.compile.append_bindings,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(local_vars_from_array(ys,cljs.core.flatten(state_model)),local_vars_from_array(ps,params)),new cljs.core.Keyword(null,"prepend","prepend",342616040));

break;
default:
return code;

}
});
/**
 * If the calling convention is `:primitive`, and the top level of the
 * expression we're compiling is a structure (introduced by `up`, `down`
 * or `vector`), then replace the expression with a sequence of `aset`
 * instructions to store the individual values to a flat primitive array.
 */
emmy.expression.compile.primitive_body = (function emmy$expression$compile$primitive_body(p__58752){
var map__58753 = p__58752;
var map__58753__$1 = cljs.core.__destructure_map(map__58753);
var code = map__58753__$1;
var calling_convention = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58753__$1,new cljs.core.Keyword(null,"calling-convention","calling-convention",-1148806156));
var argv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58753__$1,new cljs.core.Keyword(null,"argv","argv",-1462790895));
var children_QMARK_ = (function emmy$expression$compile$primitive_body_$_children_QMARK_(x){
var and__5160__auto__ = cljs.core.sequential_QMARK_(x);
if(and__5160__auto__){
var G__58757 = cljs.core.first(x);
var fexpr__58756 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"down","down",-1089190199,null),"null",new cljs.core.Symbol(null,"vector","vector",-751469611,null),"null",new cljs.core.Symbol(null,"up","up",1370819414,null),"null"], null), null);
return (fexpr__58756.cljs$core$IFn$_invoke$arity$1 ? fexpr__58756.cljs$core$IFn$_invoke$arity$1(G__58757) : fexpr__58756.call(null,G__58757));
} else {
return and__5160__auto__;
}
});
var aset_form = (function emmy$expression$compile$primitive_body_$_aset_form(index,value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,index,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,value,null,(1),null))], 0))));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(calling_convention,new cljs.core.Keyword(null,"primitive","primitive",1884541424))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(code,new cljs.core.Keyword(null,"body","body",-2049205669),(function (body){
if(cljs.core.truth_(children_QMARK_(body))){
var array_symbol = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var values = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(children_QMARK_,cljs.core.rest(cljs.core.tree_seq(children_QMARK_,cljs.core.rest,body)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doto","cljs.core/doto",-1284816239,null),null,(1),null)),(new cljs.core.List(null,array_symbol,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(aset_form,values)], 0))));
} else {
return body;
}
}));
} else {
return code;
}
});
/**
 * Reuseable context for SCI compilation. Fork with `sci/fork` to ensure that no
 *   call to `sci/eval-*` can inject state that another call can see.
 */
emmy.expression.compile.sci_context = sci.core.init(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Math","Math",2033287572,null),Math], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"emmy.structure","emmy.structure",-1841347423,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"up","up",1370819414,null),emmy.structure.up,new cljs.core.Symbol(null,"down","down",-1089190199,null),emmy.structure.down], null)], null)], null));
/**
 * Since JavaScript likes commas between array elements:
 * 
 * [a [b c [d e] f]] -> "[a, [b, c, [d, e], f]]"
 * 
 * However, [] (which occurs in parameter-free state functions) will appear as
 *   "_" in the argument list. While it's not wrong to destructure an empty list
 *   in JavaScript, nil is not iterable, and so can't serve as an empty list
 *   argument as it can in Clojure. Instead, we "discard" the argument by letting
 *   it bind to a dummy name: in this way, either nil or [] can serve as the empty
 *   argument
 */
emmy.expression.compile.commafy_arglist = (function emmy$expression$compile$commafy_arglist(a){
var c = clojure.walk.postwalk((function (f){
if(cljs.core.sequential_QMARK_(f)){
if(cljs.core.seq(f)){
var as = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",f);
return (""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(as)+"]");
} else {
return "_";
}
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
}
}),a);
return c;
});
/**
 * Given an unevaluated source code form `f-form` representing a function,
 *   evaluates `f-form` using the bindings in [[sci-context]].
 * 
 *   Generate these forms by setting `*mode*` to `:source`.
 */
emmy.expression.compile.sci_eval = (function emmy$expression$compile$sci_eval(f_form){
return sci.core.eval_form(sci.core.fork(emmy.expression.compile.sci_context),f_form);
});
/**
 * Returns Clojure source for a function that implements `body`, given
 *   a map with keys:
 * 
 *   - `:argv`: a vector of symbols to serve as the function's arguments.
 *  The vector may be nested for sequence destructuring.
 * 
 *   - `:body`: a function body making use of any symbol in argv above
 */
emmy.expression.compile.compile__GT_clj = (function emmy$expression$compile$compile__GT_clj(p__58758){
var map__58759 = p__58758;
var map__58759__$1 = cljs.core.__destructure_map(map__58759);
var argv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58759__$1,new cljs.core.Keyword(null,"argv","argv",-1462790895));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58759__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return clojure.walk.postwalk_replace(emmy.expression.compile.sym__GT_resolved_form,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(argv)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,body,null,(1),null))], 0)))));
});
/**
 * Returns an array containing JavaScript source for a function that implements
 *   its code object argument in a form suitable for application of the Function
 *   constructor.
 */
emmy.expression.compile.compile__GT_js = (function emmy$expression$compile$compile__GT_js(p__58760){
var map__58761 = p__58760;
var map__58761__$1 = cljs.core.__destructure_map(map__58761);
var argv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58761__$1,new cljs.core.Keyword(null,"argv","argv",-1462790895));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58761__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var argv__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy.expression.compile.commafy_arglist,argv);
var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var do_body = (function (z){
if(cljs.core.truth_((function (){var and__5160__auto__ = clojure.zip.branch_QMARK_(z);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.zip.node(clojure.zip.next(z)),new cljs.core.Symbol("cljs.core","doto","cljs.core/doto",-1284816239,null));
} else {
return and__5160__auto__;
}
})())){
var z__$1 = clojure.zip.next(clojure.zip.next(z));
var var$ = clojure.zip.node(z__$1);
if((var$ instanceof cljs.core.Symbol)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Expecting a symbol (referring to a primitive array)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),var$], null));
}

var seq__58762_58854 = cljs.core.seq(clojure.zip.rights(z__$1));
var chunk__58763_58855 = null;
var count__58764_58856 = (0);
var i__58765_58857 = (0);
while(true){
if((i__58765_58857 < count__58764_58856)){
var vec__58772_58858 = chunk__58763_58855.cljs$core$IIndexed$_nth$arity$2(null,i__58765_58857);
var aset_58859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58772_58858,(0),null);
var ix_58860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58772_58858,(1),null);
var value_58861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58772_58858,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aset_58859,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Expecting an aset statement",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),aset_58859], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,(""+"  "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ix_58860)+"] = "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((emmy.expression.render.__GT_JavaScript.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.__GT_JavaScript.cljs$core$IFn$_invoke$arity$1(value_58861) : emmy.expression.render.__GT_JavaScript.call(null,value_58861)))+";"));


var G__58863 = seq__58762_58854;
var G__58864 = chunk__58763_58855;
var G__58865 = count__58764_58856;
var G__58866 = (i__58765_58857 + (1));
seq__58762_58854 = G__58863;
chunk__58763_58855 = G__58864;
count__58764_58856 = G__58865;
i__58765_58857 = G__58866;
continue;
} else {
var temp__5825__auto___58867 = cljs.core.seq(seq__58762_58854);
if(temp__5825__auto___58867){
var seq__58762_58868__$1 = temp__5825__auto___58867;
if(cljs.core.chunked_seq_QMARK_(seq__58762_58868__$1)){
var c__5694__auto___58869 = cljs.core.chunk_first(seq__58762_58868__$1);
var G__58870 = cljs.core.chunk_rest(seq__58762_58868__$1);
var G__58871 = c__5694__auto___58869;
var G__58872 = cljs.core.count(c__5694__auto___58869);
var G__58873 = (0);
seq__58762_58854 = G__58870;
chunk__58763_58855 = G__58871;
count__58764_58856 = G__58872;
i__58765_58857 = G__58873;
continue;
} else {
var vec__58775_58874 = cljs.core.first(seq__58762_58868__$1);
var aset_58875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58775_58874,(0),null);
var ix_58876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58775_58874,(1),null);
var value_58877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58775_58874,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aset_58875,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Expecting an aset statement",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),aset_58875], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,(""+"  "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ix_58876)+"] = "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((emmy.expression.render.__GT_JavaScript.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.__GT_JavaScript.cljs$core$IFn$_invoke$arity$1(value_58877) : emmy.expression.render.__GT_JavaScript.call(null,value_58877)))+";"));


var G__58878 = cljs.core.next(seq__58762_58868__$1);
var G__58879 = null;
var G__58880 = (0);
var G__58881 = (0);
seq__58762_58854 = G__58878;
chunk__58763_58855 = G__58879;
count__58764_58856 = G__58880;
i__58765_58857 = G__58881;
continue;
}
} else {
}
}
break;
}

return clojure.zip.next(z__$1);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,(""+"  return "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__58778 = clojure.zip.node(z);
return (emmy.expression.render.__GT_JavaScript.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.__GT_JavaScript.cljs$core$IFn$_invoke$arity$1(G__58778) : emmy.expression.render.__GT_JavaScript.call(null,G__58778));
})())+";"));
}
});
var do_let = (function (z){
if(cljs.core.truth_((function (){var and__5160__auto__ = clojure.zip.branch_QMARK_(z);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.zip.node(clojure.zip.next(z)),new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null));
} else {
return and__5160__auto__;
}
})())){
var z__$1 = clojure.zip.next(clojure.zip.next(z));
var seq__58779_58884 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clojure.zip.node(z__$1)));
var chunk__58780_58885 = null;
var count__58781_58886 = (0);
var i__58782_58887 = (0);
while(true){
if((i__58782_58887 < count__58781_58886)){
var vec__58789_58888 = chunk__58780_58885.cljs$core$IIndexed$_nth$arity$2(null,i__58782_58887);
var var_58889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58789_58888,(0),null);
var value_58890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58789_58888,(1),null);
if(((cljs.core.seq_QMARK_(value_58890)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(value_58890),new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,(""+"  const "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_58889)+" = "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value_58890,(1)))+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value_58890,(2)))+"];"));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,(""+"  const "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_58889)+" = "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((emmy.expression.render.__GT_JavaScript.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.__GT_JavaScript.cljs$core$IFn$_invoke$arity$1(value_58890) : emmy.expression.render.__GT_JavaScript.call(null,value_58890)))+";"));
}


var G__58891 = seq__58779_58884;
var G__58892 = chunk__58780_58885;
var G__58893 = count__58781_58886;
var G__58894 = (i__58782_58887 + (1));
seq__58779_58884 = G__58891;
chunk__58780_58885 = G__58892;
count__58781_58886 = G__58893;
i__58782_58887 = G__58894;
continue;
} else {
var temp__5825__auto___58895 = cljs.core.seq(seq__58779_58884);
if(temp__5825__auto___58895){
var seq__58779_58896__$1 = temp__5825__auto___58895;
if(cljs.core.chunked_seq_QMARK_(seq__58779_58896__$1)){
var c__5694__auto___58897 = cljs.core.chunk_first(seq__58779_58896__$1);
var G__58898 = cljs.core.chunk_rest(seq__58779_58896__$1);
var G__58899 = c__5694__auto___58897;
var G__58900 = cljs.core.count(c__5694__auto___58897);
var G__58901 = (0);
seq__58779_58884 = G__58898;
chunk__58780_58885 = G__58899;
count__58781_58886 = G__58900;
i__58782_58887 = G__58901;
continue;
} else {
var vec__58792_58902 = cljs.core.first(seq__58779_58896__$1);
var var_58903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58792_58902,(0),null);
var value_58904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58792_58902,(1),null);
if(((cljs.core.seq_QMARK_(value_58904)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(value_58904),new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,(""+"  const "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_58903)+" = "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value_58904,(1)))+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value_58904,(2)))+"];"));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.conj,(""+"  const "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_58903)+" = "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((emmy.expression.render.__GT_JavaScript.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.__GT_JavaScript.cljs$core$IFn$_invoke$arity$1(value_58904) : emmy.expression.render.__GT_JavaScript.call(null,value_58904)))+";"));
}


var G__58905 = cljs.core.next(seq__58779_58896__$1);
var G__58906 = null;
var G__58907 = (0);
var G__58908 = (0);
seq__58779_58884 = G__58905;
chunk__58780_58885 = G__58906;
count__58781_58886 = G__58907;
i__58782_58887 = G__58908;
continue;
}
} else {
}
}
break;
}

return clojure.zip.next(z__$1);
} else {
return z;
}
});
do_body(do_let(clojure.zip.seq_zip(body)));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(argv__$1,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.deref(buffer)));
});
/**
 * Dispatches the `code` object to the compiler corresponding to the current
 *   runtime environment.
 */
emmy.expression.compile.compile_native = (function emmy$expression$compile$compile_native(code){
var g = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(Function,emmy.expression.compile.compile__GT_js(code));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calling-convention","calling-convention",-1148806156).cljs$core$IFn$_invoke$arity$1(code),new cljs.core.Keyword(null,"primitive","primitive",1884541424))){
return g;
} else {
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj,g);
}
});
/**
 * Returns a Clojure function evaluated using SCI. The returned fn implements
 *   `code`, given:
 * 
 *   - `code`: a code object, which we hand off to the Clojure compiler
 */
emmy.expression.compile.compile_sci = (function emmy$expression$compile$compile_sci(code){
return emmy.expression.compile.sci_eval(emmy.expression.compile.compile__GT_clj(code));
});
/**
 * Given a (structural) initial `state` and a `gensym-fn` function from symbol =>
 *   generated symbol walks the structure and converts all structures to vectors
 *   and all non-structural elements to gensymmed symbols.
 */
emmy.expression.compile.state__GT_argv = (function emmy$expression$compile$state__GT_argv(state,gensym_fn){
var rec = (function emmy$expression$compile$state__GT_argv_$_rec(s){
if(emmy.structure.structure_QMARK_(s)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy$expression$compile$state__GT_argv_$_rec,s);
} else {
var G__58796 = new cljs.core.Symbol(null,"y","y",-117328249,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__58796) : gensym_fn.call(null,G__58796));
}
});
return rec(state);
});
/**
 * Returns a compiled, simplified function with signature `(f state params?)`,
 *   given:
 * 
 *   - a state function that can accept a symbolic arguments
 * 
 *   - `params`: really any sequence of count equal to the number of arguments
 *  taken by `f`. The values are ignored. If the specific value `false` is
 *  provided, then `f` is considered to be the function to compile itself, and not
 *  the producer of such a function via application of parameters.
 * 
 *   - `initial-state`: Some structure of the same shape as the argument expected
 *  by the fn returned by the state function `f`. Only the shape matters; the
 *  values are ignored.
 * 
 *   - an optional argument `opts`. Options accepted are:
 * 
 *  - `:calling-convention`: May have one of the following values. (In
 *    each of these examples, assume that the initial state
 *    `(up 1 (up 2 3) (up 3 4)) has been provided.)
 * 
 *    - `:structure`: The arguments to the compiled function will have
 *      the same shape as the initial-state, and elements of that state
 *      will be made available to the function via argument destructuring
 *      in function signature, e.g.:
 * 
 *      ```clojure
 *      (fn [[y1 [y2 y3] [y4 y5]]] [p1 ...] ...)
 *      ```
 * 
 *    - `:primitive`: The compiled function will expect a primitive array
 *      containing the state in flat form to be passed as the first
 *      argument, and will return its value by mutating its second argument,
 *      which will also be a primitive array of the same size. The parameters
 *      will be provided via a third primitive array:
 * 
 *      ```clojure
 *      (fn [ys yps ps] ...)
 *      ```
 * 
 *      This is the fastest form, as no allocations are needed to destructure
 *      arguments list or to construct the return value, but requires the use
 *      of primitive arrays (not general Clojure sequences, even if mutable) by
 *      the caller. The generated code will use `aget` and `aset` on the arrays.
 * 
 *  - `:generic-params?`: if `true` (default), the returned function will take a
 *    second argument for the parameters of the state derivative and keep params
 *    generic. If false, the returned function will take a single state argument,
 *    and the supplied params will be hardcoded; moreover, the resulting compiled
 *    function will not be cached.
 * 
 *  - `:mode`: Explicitly set the compilation mode to one of the values
 *    in [[valid-modes]]. Explicit alternative to dynamically binding [[*mode*]].
 * 
 *  - `:cache`: If falsy, the compilation cache is avoided (it will neither
 *    be consulted nor updated).
 * 
 *  - `:gensym-fn` allows injection of a symbol generator for unit test
 *    purposes
 * 
 *  - `:arity` records the arity selected for a compiled non-state function
 *    and is ordinarily provided automatically by [[compile-fn]].
 * 
 *  - `:simplify?` If `true`, simplify the expanded function body before proceeding
 *    to subexpression elimination and successive steps. If `false`, skip this step.
 *    Defaults to `true`.
 * 
 *   The returned, compiled function expects all `Double` (or `js/Number`) for all
 *   state primitives. The function body is simplified and all common
 *   subexpressions identified during compilation are extracted and computed only
 *   once.
 * 
 *   Function compilations are cached with a key that attempts to capture all of
 *   the relevant information 
 */
emmy.expression.compile.compile_state_fn = (function emmy$expression$compile$compile_state_fn(var_args){
var G__58798 = arguments.length;
switch (G__58798) {
case 3:
return emmy.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$3 = (function (f,params,initial_state){
return emmy.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$4(f,params,initial_state,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$4 = (function (f,params,initial_state,p__58799){
var map__58800 = p__58799;
var map__58800__$1 = cljs.core.__destructure_map(map__58800);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58800__$1,new cljs.core.Keyword(null,"mode","mode",654403691),emmy.expression.compile._STAR_mode_STAR_);
var calling_convention = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58800__$1,new cljs.core.Keyword(null,"calling-convention","calling-convention",-1148806156),new cljs.core.Keyword(null,"structure","structure",1563832083));
var arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58800__$1,new cljs.core.Keyword(null,"arity","arity",-1808556135));
var generic_params_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58800__$1,new cljs.core.Keyword(null,"generic-params?","generic-params?",918310827),cljs.core.boolean$(params));
var gensym_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58800__$1,new cljs.core.Keyword(null,"gensym-fn","gensym-fn",-883485832),emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$1((4)));
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58800__$1,new cljs.core.Keyword(null,"cache?","cache?",-1601953949),true);
var simplify_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58800__$1,new cljs.core.Keyword(null,"simplify?","simplify?",78948489),true);
var key = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"calling-convention","calling-convention",-1148806156),calling_convention,new cljs.core.Keyword(null,"generic-params?","generic-params?",918310827),generic_params_QMARK_,new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"arity","arity",-1808556135),arity,new cljs.core.Keyword(null,"f","f",-1597136552),f], null);
var temp__5823__auto__ = (function (){var and__5160__auto__ = cache_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
var fexpr__58801 = cljs.core.deref(emmy.expression.compile.fn_cache);
return (fexpr__58801.cljs$core$IFn$_invoke$arity$1 ? fexpr__58801.cljs$core$IFn$_invoke$arity$1(key) : fexpr__58801.call(null,key));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var cached_fn = temp__5823__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"emmy.expression.compile",null,607,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled state function cache hit"], null);
}),null)),null,298571733,null);

return cached_fn;
} else {
var sw = emmy.util.stopwatch.stopwatch();
var mode__$1 = emmy.expression.compile.validate_mode_BANG_(mode);
var wrap = (function() { 
var G__58916__delegate = function (code,p__58802){
var map__58803 = p__58802;
var map__58803__$1 = cljs.core.__destructure_map(map__58803);
var opts = map__58803__$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),code], null),opts], 0));
};
var G__58916 = function (code,var_args){
var p__58802 = null;
if (arguments.length > 1) {
var G__58917__i = 0, G__58917__a = new Array(arguments.length -  1);
while (G__58917__i < G__58917__a.length) {G__58917__a[G__58917__i] = arguments[G__58917__i + 1]; ++G__58917__i;}
  p__58802 = new cljs.core.IndexedSeq(G__58917__a,0,null);
} 
return G__58916__delegate.call(this,code,p__58802);};
G__58916.cljs$lang$maxFixedArity = 1;
G__58916.cljs$lang$applyTo = (function (arglist__58918){
var code = cljs.core.first(arglist__58918);
var p__58802 = cljs.core.rest(arglist__58918);
return G__58916__delegate(code,p__58802);
});
G__58916.cljs$core$IFn$_invoke$arity$variadic = G__58916__delegate;
return G__58916;
})()
;
var generic_state = emmy.expression.compile.state__GT_argv(initial_state,gensym_fn);
var params__$1 = (function (){var and__5160__auto__ = params;
if(cljs.core.truth_(and__5160__auto__)){
if(cljs.core.truth_(generic_params_QMARK_)){
var iter__5649__auto__ = (function emmy$expression$compile$iter__58804(s__58805){
return (new cljs.core.LazySeq(null,(function (){
var s__58805__$1 = s__58805;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__58805__$1);
if(temp__5825__auto__){
var s__58805__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58805__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__58805__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__58807 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__58806 = (0);
while(true){
if((i__58806 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__58806);
cljs.core.chunk_append(b__58807,(function (){var G__58808 = new cljs.core.Symbol(null,"p","p",1791580836,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__58808) : gensym_fn.call(null,G__58808));
})());

var G__58921 = (i__58806 + (1));
i__58806 = G__58921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58807),emmy$expression$compile$iter__58804(cljs.core.chunk_rest(s__58805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58807),null);
}
} else {
var _ = cljs.core.first(s__58805__$2);
return cljs.core.cons((function (){var G__58809 = new cljs.core.Symbol(null,"p","p",1791580836,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__58809) : gensym_fn.call(null,G__58809));
})(),emmy$expression$compile$iter__58804(cljs.core.rest(s__58805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(params);
} else {
return params;
}
} else {
return and__5160__auto__;
}
})();
var g = (((!(params__$1 === false)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,params__$1):f);
var h = (function (){var G__58810 = calling_convention;
var G__58810__$1 = (((G__58810 instanceof cljs.core.Keyword))?G__58810.fqn:null);
switch (G__58810__$1) {
case "native":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(g,generic_state);

break;
default:
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(generic_state) : g.call(null,generic_state));

}
})();
var code = emmy.expression.compile.primitive_bindings(emmy.expression.compile.cse(emmy.expression.compile.primitive_body(cljs.core.update.cljs$core$IFn$_invoke$arity$3(emmy.expression.compile.state_argv(wrap(emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(simplify_QMARK_)?emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(h):h)),new cljs.core.Keyword(null,"calling-convention","calling-convention",-1148806156),calling_convention,new cljs.core.Keyword(null,"params","params",710516235),(cljs.core.truth_(generic_params_QMARK_)?params__$1:null),new cljs.core.Keyword(null,"state-model","state-model",371967018),generic_state),gensym_fn),new cljs.core.Keyword(null,"body","body",-2049205669),emmy.expression.compile.apply_numeric_ops)),(function (){
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1("_") : gensym_fn.call(null,"_"));
})));
var compiler = (function (){var G__58811 = mode__$1;
var G__58811__$1 = (((G__58811 instanceof cljs.core.Keyword))?G__58811.fqn:null);
switch (G__58811__$1) {
case "source":
return emmy.expression.compile.compile__GT_js;

break;
case "clj":
return emmy.expression.compile.compile__GT_clj;

break;
case "js":
return emmy.expression.compile.compile__GT_js;

break;
case "native":
return emmy.expression.compile.compile_native;

break;
case "sci":
return emmy.expression.compile.compile_sci;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58811__$1))));

}
})();
var compiled_fn = (compiler.cljs$core$IFn$_invoke$arity$1 ? compiler.cljs$core$IFn$_invoke$arity$1(code) : compiler.call(null,code));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"emmy.expression.compile",null,640,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled function in",sw.emmy$util$stopwatch$IStopwatch$repr$arity$1(null)], null);
}),null)),null,-368687219,null);

if(cljs.core.truth_((function (){var and__5160__auto__ = cache_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return generic_params_QMARK_;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(emmy.expression.compile.fn_cache,cljs.core.assoc,key,compiled_fn);
} else {
}

return compiled_fn;
}
}));

(emmy.expression.compile.compile_state_fn.cljs$lang$maxFixedArity = 4);

emmy.expression.compile.retrieve_arity = (function emmy$expression$compile$retrieve_arity(f){
var vec__58812 = emmy.function$.arity(f);
var kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58812,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58812,(1),null);
var arity = vec__58812;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kwd,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
return n;
} else {
return emmy.util.illegal((""+"`compile-fn` can only infer arity for functions with just one\n           arity, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)+". Please pass an explicit `n`."));
}
});
/**
 * Returns a compiled, simplified version of `f`, given a function `f` of arity
 *   `n` (i.e., able to accept `n` symbolic arguments).
 * 
 *   `n` defaults to `([[f/arity]] f)`.
 * 
 *   You may also specify options in the third argument. See [[compile-state-fn]]
 *   for information on the options supported.
 * 
 *   The returned, compiled function expects `n` `Double` (or `js/Number`)
 *   arguments. The function body is simplified and all common subexpressions
 *   identified during compilation are extracted and computed only once.
 */
emmy.expression.compile.compile_fn = (function emmy$expression$compile$compile_fn(var_args){
var G__58816 = arguments.length;
switch (G__58816) {
case 1:
return emmy.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$2(f,emmy.expression.compile.retrieve_arity(f));
}));

(emmy.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$2 = (function (f,n){
return emmy.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$3(f,n,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$3 = (function (f,n,opts){
var argv = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
})));
return emmy.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$4(f,false,argv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calling-convention","calling-convention",-1148806156),new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"arity","arity",-1808556135),n], null),opts], 0)));
}));

(emmy.expression.compile.compile_fn.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=emmy.expression.compile.js.map
