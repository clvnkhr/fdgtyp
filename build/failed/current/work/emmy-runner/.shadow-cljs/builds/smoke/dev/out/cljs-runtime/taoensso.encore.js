goog.provide('taoensso.encore');
goog.scope(function(){
  taoensso.encore.goog$module$goog$object = goog.module.get('goog.object');
  taoensso.encore.goog$module$goog$array = goog.module.get('goog.array');
});
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(43),(0)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args> <attrs>]
 *   with support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__30469 = arguments.length;
switch (G__30469) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
}));

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__30473 = ((((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30473,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30473,(1),null);
var vec__30476 = ((((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30476,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30476,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (function (){var b2__28441__auto__ = cljs.core.meta(sym);
if(cljs.core.truth_(b2__28441__auto__)){
var m = b2__28441__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,attrs__$1);
} else {
return attrs__$1;
}
})();
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2,attrs__$3], null);
}));

(taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3);

taoensso.encore.core_merge = cljs.core.merge;
taoensso.encore.core_update_in = cljs.core.update_in;

taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});
taoensso.encore.quote_arglists = (function taoensso$encore$quote_arglists(m){
var b2__28441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
if(cljs.core.truth_(b2__28441__auto__)){
var x = b2__28441__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))));
} else {
return m;
}
});
taoensso.encore.alias_src_attrs = (function taoensso$encore$alias_src_attrs(m){
return cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"deprecated","deprecated",1498275348)], null));
});
/**
 * Returns current value of dynamic assertion data.
 */
taoensso.encore.get_truss_data = taoensso.truss.get_data;

/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__30563 = arguments.length;
switch (G__30563) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
}));

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if((((s == null)) || ((s === "")))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)) : taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?(function (){var G__30580 = cljs.core.symbol;
var G__30581 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__30580,G__30581) : taoensso.encore.map_keys.call(null,G__30580,G__30581));
})():readers);
var default$__$1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)) : taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/read-edn] Unexpected arg type (expected string or nil)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(s)], null)], null));
}
}
}));

(taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2);

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__30591 = arguments.length;
switch (G__30591) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
}));

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR__orig_val__30603 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__30604 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__30605 = null;
var _STAR_print_length_STAR__temp_val__30606 = null;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__30605);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__30606);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__30604);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__30603);
}}));

(taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2);

/**
 * Copy of `core/ex-message` (added in Clojure v1.10)
 */
taoensso.encore.ex_message = (function taoensso$encore$ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
/**
 * Copy of `core/ex-cause` (added in Clojure v1.10)
 */
taoensso.encore.ex_cause = (function taoensso$encore$ex_cause(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.cause;
} else {
return null;
}
});
/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__28441__auto__ = (function (){var and__5160__auto__ = x;
if(cljs.core.truth_(and__5160__auto__)){
var or__5162__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(b2__28441__auto__)){
var data_map = b2__28441__auto__;
var base_map = (function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type(err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_map,data_map);
} else {
return null;
}
});
taoensso.encore.error_message = (function taoensso$encore$error_message(x){
if((x instanceof Error)){
return x.message;
} else {
return null;
}
});
taoensso.encore._matching_error = (function taoensso$encore$_matching_error(var_args){
var G__30685 = arguments.length;
switch (G__30685) {
case 1:
return taoensso.encore._matching_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._matching_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._matching_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore._matching_error.cljs$core$IFn$_invoke$arity$1 = (function (err){
return err;
}));

(taoensso.encore._matching_error.cljs$core$IFn$_invoke$arity$2 = (function (c,err){
var b2__28441__auto__ = ((cljs.core.fn_QMARK_(c))?(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(err) : c.call(null,err)):(function (){var G__30701 = c;
var G__30701__$1 = (((G__30701 instanceof cljs.core.Keyword))?G__30701.fqn:null);
switch (G__30701__$1) {
case "all":
case "any":
return taoensso.encore.some_QMARK_(err);

break;
case "common":
case "default":
return (err instanceof Error);

break;
default:
return (err instanceof c);

}
})());
if(cljs.core.truth_(b2__28441__auto__)){
var match_QMARK_ = b2__28441__auto__;
return err;
} else {
return null;
}
}));

(taoensso.encore._matching_error.cljs$core$IFn$_invoke$arity$3 = (function (c,pattern,err){
var b2__28441__auto__ = (function (){var and__5160__auto__ = taoensso.encore._matching_error.cljs$core$IFn$_invoke$arity$2(c,err);
if(cljs.core.truth_(and__5160__auto__)){
if((pattern == null)){
return true;
} else {
if(cljs.core.map_QMARK_(pattern)){
var b2__28441__auto__ = cljs.core.ex_data(err);
if(cljs.core.truth_(b2__28441__auto__)){
var data = b2__28441__auto__;
return (taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2(data,pattern) : taoensso.encore.submap_QMARK_.call(null,data,pattern));
} else {
return false;
}
} else {
return cljs.core.boolean$(cljs.core.re_find(cljs.core.re_pattern(pattern),taoensso.encore.error_message(err)));
}
}
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(b2__28441__auto__)){
var match_QMARK_ = b2__28441__auto__;
return err;
} else {
return null;
}
}));

(taoensso.encore._matching_error.cljs$lang$maxFixedArity = 3);

var get_default_error_fn_33792 = (function (base_data){
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$3(base_data,new cljs.core.Keyword("error","msg","error/msg",-1549923468),"Error thrown during reduction");
var base_data__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base_data,new cljs.core.Keyword("error","msg","error/msg",-1549923468));
return (function taoensso$encore$default_error_fn(data,cause){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(msg,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_data__$1,data),cause);
});
});
/**
 * Returns wrapper around given reducing function `rf` so that if `rf`
 *  throws, (error-fn <thrown-error> <contextual-data>) will be called.
 * 
 *  The default `error-fn` will rethrow the original error, wrapped in
 *  extra contextual information to aid debugging.
 * 
 *  See also `catching-xform`.
 */
taoensso.encore.catching_rf = (function taoensso$encore$catching_rf(var_args){
var G__30807 = arguments.length;
switch (G__30807) {
case 1:
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$1 = (function (rf){
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2(get_default_error_fn_33792(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf], null)),rf);
}));

(taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2 = (function (error_fn,rf){
var error_fn__$1 = ((cljs.core.map_QMARK_(error_fn))?get_default_error_fn_33792(error_fn):error_fn);
return (function() {
var taoensso$encore$catching_rf = null;
var taoensso$encore$catching_rf__0 = (function (){
try{return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
}catch (e30822){var t = e30822;
var G__30824 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null))], null);
var G__30825 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__30824,G__30825) : error_fn__$1.call(null,G__30824,G__30825));
}});
var taoensso$encore$catching_rf__1 = (function (acc){
try{return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
}catch (e30830){var t = e30830;
var G__30833 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(acc)], null)], null)], null);
var G__30834 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__30833,G__30834) : error_fn__$1.call(null,G__30833,G__30834));
}});
var taoensso$encore$catching_rf__2 = (function (acc,in$){
try{return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
}catch (e30837){var t = e30837;
var G__30838 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"in","in",109346662,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(acc)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),in$,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(in$)], null)], null)], null);
var G__30839 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__30838,G__30839) : error_fn__$1.call(null,G__30838,G__30839));
}});
var taoensso$encore$catching_rf__3 = (function (acc,k,v){
try{return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
}catch (e30845){var t = e30845;
var G__30847 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(acc)], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(k)], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(v)], null)], null)], null);
var G__30848 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__30847,G__30848) : error_fn__$1.call(null,G__30847,G__30848));
}});
taoensso$encore$catching_rf = function(acc,k,v){
switch(arguments.length){
case 0:
return taoensso$encore$catching_rf__0.call(this);
case 1:
return taoensso$encore$catching_rf__1.call(this,acc);
case 2:
return taoensso$encore$catching_rf__2.call(this,acc,k);
case 3:
return taoensso$encore$catching_rf__3.call(this,acc,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$catching_rf__0;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$catching_rf__1;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$catching_rf__2;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$catching_rf__3;
return taoensso$encore$catching_rf;
})()
}));

(taoensso.encore.catching_rf.cljs$lang$maxFixedArity = 2);

/**
 * Like `catching-rf`, but applies to a transducer (`xform`).
 * 
 *   Makes debugging transductions much easier by greatly improving
 *   the information provided in any errors thrown by `xform` or the
 *   reducing fn:
 * 
 *  (transduce
 *    (catching-xform (comp (filter even?) (map inc))) ; Modified xform
 *    <reducing-fn>
 *    <...>)
 */
taoensso.encore.catching_xform = (function taoensso$encore$catching_xform(var_args){
var G__30857 = arguments.length;
switch (G__30857) {
case 2:
return taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$2 = (function (error_fn,xform){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (rf){
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2(error_fn,rf);
}),xform);
}));

(taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.catching_rf,xform);
}));

(taoensso.encore.catching_xform.cljs$lang$maxFixedArity = 2);

/**
 * Given a {:before ?(fn []) :after ?(fn [])} map, returns cross-platform
 *   test fixtures for use by both `clojure.test` and `cljs.test`:
 * 
 *  (let [f (test-fixtures {:before (fn [] (test-setup))})]
 *    (clojure.test/use-fixtures :once f)
 *       (cljs.test/use-fixtures :once f))
 */
taoensso.encore.test_fixtures = (function taoensso$encore$test_fixtures(fixtures_map){
var e_33818 = (function (){try{if(cljs.core.map_QMARK_(fixtures_map)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e30868){if((e30868 instanceof Error)){
var e_33818 = e30868;
return e_33818;
} else {
throw e30868;

}
}})();
if((e_33818 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),864,new cljs.core.Symbol(null,"map?","map?",-1780568534,null),fixtures_map,e_33818,null);
}

return fixtures_map;
});
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string'));
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return ((x === true) || (x === false));
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.transient_QMARK_ = (function taoensso$encore$transient_QMARK_(x){
return (x instanceof cljs.core.ITransientCollection);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return ((taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__5160__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5160__auto____$1)){
return true;
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__5160__auto__ = (x instanceof cljs.core.Symbol);
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5160__auto____$1)){
return true;
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__5160__auto__ = (x instanceof cljs.core.Keyword);
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__5160__auto____$1)){
return true;
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return ((typeof x === 'string') && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")))));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return ((typeof x === 'string') && ((!(clojure.string.blank_QMARK_(x)))));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2))));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3))));
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   finite (excl. NaN and infinities).
 */
taoensso.encore.finite_num_QMARK_ = (function taoensso$encore$finite_num_QMARK_(x){
return Number.isFinite(x);
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   a fixed-precision integer.
 */
taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return ((taoensso.encore.finite_num_QMARK_(x)) && ((parseFloat(x) === parseInt(x,(10)))));
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   a fixed-precision floating-point (incl. NaN and infinities).
 */
taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return ((typeof x === 'number') && ((!((parseFloat(x) === parseInt(x,(10)))))));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return (x === (0));
});

taoensso.encore.nzero_num_QMARK_ = (function taoensso$encore$nzero_num_QMARK_(x){
return (!((x === (0))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (x > (0));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (x < (0));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((!((x < (0))))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((x > (0))));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((x < (0))));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((!((x < (0))))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((x > (0))));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((x < (0))));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((!((x < (0))))));
});
/**
 * Returns true iff given number in unsigned unit proportion interval ∈ℝ[0,1].
 */
taoensso.encore.pnum_QMARK_ = (function taoensso$encore$pnum_QMARK_(x){
var and__5160__auto__ = typeof x === 'number';
if(and__5160__auto__){
var n = x;
return (((n >= 0.0)) && ((n <= 1.0)));
} else {
return and__5160__auto__;
}
});
/**
 * Returns true iff given number in signed unit proportion interval ∈ℝ[-1,1].
 */
taoensso.encore.rnum_QMARK_ = (function taoensso$encore$rnum_QMARK_(x){
var and__5160__auto__ = typeof x === 'number';
if(and__5160__auto__){
var n = x;
return (((n >= -1.0)) && ((n <= 1.0)));
} else {
return and__5160__auto__;
}
});
var c_33853 = (new cljs.core.Delay((function (){
return cljs.core.async.impl.channels.ManyToManyChannel;
}),null));
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
var c__5196__auto__ = cljs.core.deref(c_33853);
var x__5197__auto__ = x;
return (x__5197__auto__ instanceof c__5196__auto__);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__28441__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__28441__auto__)){
var ns = b2__28441__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank_trim = (function taoensso$encore$as__QMARK_nblank_trim(x){
if(typeof x === 'string'){
var s = clojure.string.trim(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return null;
} else {
return s;
}
} else {
return null;
}
});


taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__28441__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__28441__auto__)){
var n = b2__28441__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__28441__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__28441__auto__)){
var n = b2__28441__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__28441__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__28441__auto__)){
var n = b2__28441__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__28441__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__28441__auto__)){
var n = b2__28441__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__28441__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__28441__auto__)){
var n = b2__28441__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pnum = (function taoensso$encore$as__QMARK_pnum(x){
var b2__28441__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__28441__auto__)){
var f = b2__28441__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_rnum = (function taoensso$encore$as__QMARK_rnum(x){
var b2__28441__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__28441__auto__)){
var f = b2__28441__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < -1.0)){
return -0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if(((x === true) || (x === false))){
return x;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")))))))){
return false;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1")))))))){
return true;
} else {
return null;
}
}
}
}
});

var regex_33882 = /^[^\s@]+@[^\s@]+\.\S*[^\.]$/;
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(var_args){
var G__31163 = arguments.length;
switch (G__31163) {
case 1:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((320),_QMARK_s);
}));

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__28441__auto__ = (function (){var and__5160__auto__ = _QMARK_s;
if(cljs.core.truth_(and__5160__auto__)){
return clojure.string.trim(_QMARK_s);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(b2__28441__auto__)){
var s = b2__28441__auto__;
if((cljs.core.count(s) <= max_len)){
return cljs.core.re_find(regex_33882,s);
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(var_args){
var G__31174 = arguments.length;
switch (G__31174) {
case 1:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
var b2__28441__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(_QMARK_s);
if(cljs.core.truth_(b2__28441__auto__)){
var email = b2__28441__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__28441__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(max_len,_QMARK_s);
if(cljs.core.truth_(b2__28441__auto__)){
var email = b2__28441__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e31178){var _ = e31178;
return false;
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Lightweight `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__31183 = arguments.length;
switch (G__31183) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(taoensso.encore.some_QMARK_,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(pred,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"[encore/is!] "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)))+" failed against arg: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))),(function (){var G__31191 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred,new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null)], null);
var G__31192 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__31193 = data;
return (taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(G__31191,G__31192,G__31193) : taoensso.encore.assoc_some.call(null,G__31191,G__31192,G__31193));
})());
}
}));

(taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(kind,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"[encore/as-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(kind))+"] failed against arg: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-kind","pred-kind",138885083),kind,new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null)], null));
});
var _as_throw_33907 = taoensso.encore._as_throw;
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nzero","nzero",2053173656),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x));
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nblank","nblank",626815585),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x));
}
});

taoensso.encore.as_nblank_trim = (function taoensso$encore$as_nblank_trim(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_nblank_trim(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nblank-trim","nblank-trim",-1443525862),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"nblank-trim","nblank-trim",-1443525862),x));
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x));
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kw","kw",1158308175),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x));
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x));
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qname","qname",-1983612179),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x));
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(var_args){
var G__31221 = arguments.length;
switch (G__31221) {
case 1:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5162__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email","email",1415816706),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x));
}
}));

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5162__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email","email",1415816706),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x));
}
}));

(taoensso.encore.as_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(var_args){
var G__31236 = arguments.length;
switch (G__31236) {
case 1:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5162__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nemail","nemail",318708381),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x));
}
}));

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5162__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nemail","nemail",318708381),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x));
}
}));

(taoensso.encore.as_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt","udt",2011712751),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x));
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"int","int",-1741416922),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x));
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x));
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x));
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"float","float",-1732389368),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x));
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x));
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x));
}
});

taoensso.encore.as_pnum = (function taoensso$encore$as_pnum(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_pnum(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pnum","pnum",-602522434),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"pnum","pnum",-602522434),x));
}
});

taoensso.encore.as_rnum = (function taoensso$encore$as_rnum(x){
var or__5162__auto__ = taoensso.encore.as__QMARK_rnum(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rnum","rnum",-783850724),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"rnum","rnum",-783850724),x));
}
});

taoensso.encore.as_pnum_BANG_ = (function taoensso$encore$as_pnum_BANG_(x){
if(taoensso.encore.pnum_QMARK_(x)){
return x;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pnum!","pnum!",837651383),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"pnum!","pnum!",837651383),x));
}
});

taoensso.encore.as_rnum_BANG_ = (function taoensso$encore$as_rnum_BANG_(x){
if(taoensso.encore.rnum_QMARK_(x)){
return x;
} else {
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rnum!","rnum!",-567516079),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"rnum!","rnum!",-567516079),x));
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return (_as_throw_33907.cljs$core$IFn$_invoke$arity$2 ? _as_throw_33907.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bool","bool",1444635321),x) : _as_throw_33907.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x));
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__31330 = arguments.length;
switch (G__31330) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
}));

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2);

taoensso.encore.convey_reduced = (function taoensso$encore$convey_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return cljs.core.reduced(x);
} else {
return x;
}
});
/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__31367){
var vec__31370 = p__31367;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31370,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31370,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(var_args){
var G__31380 = arguments.length;
switch (G__31380) {
case 3:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3 = (function (rf,init,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4 = (function (rf,init,start,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5 = (function (rf,init,start,end,step){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,end,step));
}));

(taoensso.encore.reduce_n.cljs$lang$maxFixedArity = 5);

/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 *  As `reduce-kv` against vector coll, but works on any seqable coll type.
 */
taoensso.encore.reduce_indexed = (function taoensso$encore$reduce_indexed(rf,init,coll){
var c = (taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.counter.call(null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var G__31391 = acc;
var G__31392 = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
var G__31393 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__31391,G__31392,G__31393) : rf.call(null,G__31391,G__31392,G__31393));
}),init,coll);
});
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__31396 = acc;
var G__31397 = k;
var G__31398 = taoensso.encore.goog$module$goog$object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__31396,G__31397,G__31398) : f.call(null,G__31396,G__31397,G__31398));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__31401_SHARP_,p2__31400_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__31400_SHARP_) : proc.call(null,p2__31400_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__31404_SHARP_,p2__31402_SHARP_,p3__31403_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__31402_SHARP_,p3__31403_SHARP_) : proc.call(null,p2__31402_SHARP_,p3__31403_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__31407_SHARP_,p2__31405_SHARP_,p3__31406_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__31405_SHARP_,p3__31406_SHARP_) : proc.call(null,p2__31405_SHARP_,p3__31406_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__31410_SHARP_,p2__31408_SHARP_,p3__31409_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__31408_SHARP_,p3__31409_SHARP_) : proc.call(null,p2__31408_SHARP_,p3__31409_SHARP_));
}),null,obj);

return null;
});
var rf_33976 = (function (pred){
return (function (_acc,in$){
var b2__28441__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__28441__auto__)){
var p = b2__28441__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
taoensso.encore.rsome = (function taoensso$encore$rsome(var_args){
var G__31416 = arguments.length;
switch (G__31416) {
case 2:
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_33976(pred),null,coll);
}));

(taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_33976(pred)),null,coll);
}));

(taoensso.encore.rsome.cljs$lang$maxFixedArity = 3);


var rf_33981 = (function (pred){
return (function (_acc,k,v){
var b2__28441__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__28441__auto__)){
var p = b2__28441__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
var tf_33982 = (function (pred){
return (function (_acc,p__31424){
var vec__31426 = p__31424;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31426,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31426,(1),null);
var b2__28441__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__28441__auto__)){
var p = b2__28441__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
});
});
taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv(rf_33981(pred),null,coll);
});

var rf_33984 = (function (pred){
return (function (_acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
});
});
taoensso.encore.rfirst = (function taoensso$encore$rfirst(var_args){
var G__31440 = arguments.length;
switch (G__31440) {
case 2:
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_33984(pred),null,coll);
}));

(taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_33984(pred)),null,coll);
}));

(taoensso.encore.rfirst.cljs$lang$maxFixedArity = 3);


var rf_33987 = (function (pred){
return (function (_acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
});
});
var tf_33988 = (function (pred){
return (function (_acc,p__31444){
var vec__31446 = p__31444;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31446,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31446,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
});
});
taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv(rf_33987(pred),null,coll);
});

var rf_33989 = (function (pred){
return (function (_acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(var_args){
var G__31452 = arguments.length;
switch (G__31452) {
case 2:
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf_33989(pred),true,coll);
}));

(taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf_33989(pred)),true,coll);
}));

(taoensso.encore.revery_QMARK_.cljs$lang$maxFixedArity = 3);


var rf_33999 = (function (pred){
return (function (_acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
var tf_34000 = (function (pred){
return (function (_acc,p__31457){
var vec__31458 = p__31457;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31458,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31458,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
});
});
taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv(rf_33999(pred),true,coll);
});
/**
 * Reduces given sequential xs and ys as pairs (e.g. key-val pairs).
 *   Calls (rf acc x y) for each sequential pair.
 * 
 *   Useful, among other things, as a more flexible version of `zipmap`.
 */
taoensso.encore.reduce_zip = (function taoensso$encore$reduce_zip(rf,init,xs,ys){
if(((cljs.core.vector_QMARK_(xs)) && (cljs.core.vector_QMARK_(ys)))){
var n = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),cljs.core.count(ys));
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
var G__31469 = acc;
var G__31470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(xs,idx);
var G__31471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ys,idx);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__31469,G__31470,G__31471) : rf.call(null,G__31469,G__31470,G__31471));
}),init,n);
} else {
var acc = init;
var xs__$1 = cljs.core.seq(xs);
var ys__$1 = cljs.core.seq(ys);
while(true){
if(((xs__$1) && (ys__$1))){
var G__34007 = (function (){var G__31472 = acc;
var G__31473 = cljs.core.first(xs__$1);
var G__31474 = cljs.core.first(ys__$1);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__31472,G__31473,G__31474) : rf.call(null,G__31472,G__31473,G__31474));
})();
var G__34008 = cljs.core.next(xs__$1);
var G__34009 = cljs.core.next(ys__$1);
acc = G__34007;
xs__$1 = G__34008;
ys__$1 = G__34009;
continue;
} else {
return acc;
}
break;
}
}
});
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__31479 = arguments.length;
switch (G__31479) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (Math.abs((x - y)) < 0.001);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return (Math.abs((x - y)) < signf);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3);

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.clamp_int = (function taoensso$encore$clamp_int(nmin,nmax,n){
var nmin__$1 = cljs.core.long$(nmin);
var nmax__$1 = cljs.core.long$(nmax);
var n__$1 = cljs.core.long$(n);
if((n__$1 < nmin__$1)){
return nmin__$1;
} else {
if((n__$1 > nmax__$1)){
return nmax__$1;
} else {
return n__$1;
}
}
});
taoensso.encore.clamp_float = (function taoensso$encore$clamp_float(nmin,nmax,n){
var nmin__$1 = nmin;
var nmax__$1 = nmax;
var n__$1 = n;
if((n__$1 < nmin__$1)){
return nmin__$1;
} else {
if((n__$1 > nmax__$1)){
return nmax__$1;
} else {
return n__$1;
}
}
});
taoensso.encore.pnum_complement = (function taoensso$encore$pnum_complement(pnum){
return (1.0 - pnum);
});
taoensso.encore.as_pnum_complement = (function taoensso$encore$as_pnum_complement(x){
return (1.0 - taoensso.encore.as_pnum(x));
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__31527 = arguments.length;
switch (G__31527) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"round","round",2009433328),null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (kind,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(kind,null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (kind,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__31540 = kind;
var G__31540__$1 = (((G__31540 instanceof cljs.core.Keyword))?G__31540.fqn:null);
switch (G__31540__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/round*] Unexpected round kind (expected \u2208 #{:round :floor :ceil :trunc})",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),kind,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(kind)], null)], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
}));

(taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3);

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});

taoensso.encore.perc = (function taoensso$encore$perc(n,divisor){
return Math.round(((n / divisor) * 100.0));
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__31569 = arguments.length;
switch (G__31569) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
}));

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__31572){
var map__31573 = p__31572;
var map__31573__$1 = cljs.core.__destructure_map(map__31573);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31573__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31573__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31573__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
}));

(taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2);

taoensso.encore.chance = (function taoensso$encore$chance(p){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < p);
});
taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = (((typeof window !== 'undefined'))?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,(function (){var G__31593 = cljs.core.meta(x);
var G__31594 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__31593,G__31594) : taoensso.encore.merge.call(null,G__31593,G__31594));
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__31614 = arguments.length;
switch (G__31614) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34037 = arguments.length;
var i__5898__auto___34038 = (0);
while(true){
if((i__5898__auto___34038 < len__5897__auto___34037)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34038]));

var G__34039 = (i__5898__auto___34038 + (1));
i__5898__auto___34038 = G__34039;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)));
}));

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__5160__auto__ = taoensso.encore.some_QMARK_(x);
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__5160__auto____$1){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((function (p1__31607_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__31607_SHARP_,x);
}),more);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}));

/** @this {Function} */
(taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq31611){
var G__31612 = cljs.core.first(seq31611);
var seq31611__$1 = cljs.core.next(seq31611);
var G__31613 = cljs.core.first(seq31611__$1);
var seq31611__$2 = cljs.core.next(seq31611__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31612,G__31613,seq31611__$2);
}));

(taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__31633 = arguments.length;
switch (G__31633) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34043 = arguments.length;
var i__5898__auto___34044 = (0);
while(true){
if((i__5898__auto___34044 < len__5897__auto___34043)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34044]));

var G__34045 = (i__5898__auto___34044 + (1));
i__5898__auto___34044 = G__34045;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((3) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((3)),(0),null)):null);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5923__auto__);

}
});

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
}));

/** @this {Function} */
(taoensso.encore.nnil.cljs$lang$applyTo = (function (seq31629){
var G__31630 = cljs.core.first(seq31629);
var seq31629__$1 = cljs.core.next(seq31629);
var G__31631 = cljs.core.first(seq31629__$1);
var seq31629__$2 = cljs.core.next(seq31629__$1);
var G__31632 = cljs.core.first(seq31629__$2);
var seq31629__$3 = cljs.core.next(seq31629__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31630,G__31631,G__31632,seq31629__$3);
}));

(taoensso.encore.nnil.cljs$lang$maxFixedArity = (3));

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__31647 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31647,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31647,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__28441__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__28441__auto__)){
var s = b2__28441__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__28441__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__28441__auto__)){
var s = b2__28441__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__31655 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31655,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31655,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31655,(2),null);
var vec__31658 = ((cljs.core.vector_QMARK_(min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31658,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31658,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31658,(2),null);
var vec__31661 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31652_SHARP_){
var or__5162__auto__ = p1__31652_SHARP_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31661,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31661,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31661,(2),null);
if((((xc > xm__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && ((((yc > ym__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__31672 = arguments.length;
switch (G__31672) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(taoensso.encore.queue.cljs$lang$maxFixedArity = 1);

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34054 = arguments.length;
var i__5898__auto___34055 = (0);
while(true){
if((i__5898__auto___34055 < len__5897__auto___34054)){
args__5903__auto__.push((arguments[i__5898__auto___34055]));

var G__34060 = (i__5898__auto___34055 + (1));
i__5898__auto___34055 = G__34060;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
}));

(taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq31674){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31674));
}));

taoensso.encore.ensure_vec = (function taoensso$encore$ensure_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return cljs.core.vec(x);
}
});
taoensso.encore.ensure_set = (function taoensso$encore$ensure_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
/**
 * Like `assoc` for JS objects.
 */
taoensso.encore.oset = (function taoensso$encore$oset(o,k,v){
return taoensso.encore.goog$module$goog$object.set((((o == null))?({}):o),cljs.core.name(k),v);
});
var sentinel_34064 = ({});
/**
 * Experimental. Like `assoc-in` for JS objects.
 */
taoensso.encore.oset_in = (function taoensso$encore$oset_in(o,ks,v){
var o__$1 = (((o == null))?({}):o);
var b2__28441__auto__ = cljs.core.seq(ks);
if(b2__28441__auto__){
var ks__$1 = b2__28441__auto__;
var o_next = o__$1;
var ks_next = ks__$1;
while(true){
var k1 = cljs.core.name(cljs.core.first(ks_next));
var o_next__$1 = (function (){var o_next_STAR_ = taoensso.encore.goog$module$goog$object.get(o_next,k1,sentinel_34064);
if((o_next_STAR_ === sentinel_34064)){
var new_obj = ({});
taoensso.encore.goog$module$goog$object.set(o_next,k1,new_obj);

return new_obj;
} else {
return o_next_STAR_;
}
})();
var b2__28441__auto____$1 = cljs.core.next(ks_next);
if(b2__28441__auto____$1){
var ks_next__$1 = b2__28441__auto____$1;
var G__34067 = o_next__$1;
var G__34068 = ks_next__$1;
o_next = G__34067;
ks_next = G__34068;
continue;
} else {
taoensso.encore.goog$module$goog$object.set(o_next__$1,k1,v);

return o__$1;
}
break;
}
} else {
return o__$1;
}
});
/**
 * Like `get` for JS objects.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__31710 = arguments.length;
switch (G__31710) {
case 1:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1 = (function (k){
return taoensso.encore.goog$module$goog$object.get(window,cljs.core.name(k));
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return taoensso.encore.goog$module$goog$object.get(o,cljs.core.name(k),null);
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return taoensso.encore.goog$module$goog$object.get(o,cljs.core.name(k),not_found);
}));

(taoensso.encore.oget.cljs$lang$maxFixedArity = 3);

var sentinel_34073 = ({});
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = (function taoensso$encore$oget_in(var_args){
var G__31721 = arguments.length;
switch (G__31721) {
case 1:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(window,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = taoensso.encore.goog$module$goog$object.get(o__$1,cljs.core.name(cljs.core.first(ks__$1)),sentinel_34073);
if((o__$2 === sentinel_34073)){
return not_found;
} else {
var G__34076 = o__$2;
var G__34077 = cljs.core.next(ks__$1);
o__$1 = G__34076;
ks__$1 = G__34077;
continue;
}
} else {
return o__$1;
}
break;
}
}));

(taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3);

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__31731 = arguments.length;
switch (G__31731) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34079 = arguments.length;
var i__5898__auto___34081 = (0);
while(true){
if((i__5898__auto___34081 < len__5897__auto___34079)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34081]));

var G__34084 = (i__5898__auto___34081 + (1));
i__5898__auto___34081 = G__34084;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq31728){
var G__31729 = cljs.core.first(seq31728);
var seq31728__$1 = cljs.core.next(seq31728);
var G__31730 = cljs.core.first(seq31728__$1);
var seq31728__$2 = cljs.core.next(seq31728__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31729,G__31730,seq31728__$2);
}));

(taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2));


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__31745 = arguments.length;
switch (G__31745) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34094 = arguments.length;
var i__5898__auto___34095 = (0);
while(true){
if((i__5898__auto___34095 < len__5897__auto___34094)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34095]));

var G__34096 = (i__5898__auto___34095 + (1));
i__5898__auto___34095 = G__34096;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq31741){
var G__31742 = cljs.core.first(seq31741);
var seq31741__$1 = cljs.core.next(seq31741);
var G__31743 = cljs.core.first(seq31741__$1);
var seq31741__$2 = cljs.core.next(seq31741__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31742,G__31743,seq31741__$2);
}));

(taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2));

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__31765 = arguments.length;
switch (G__31765) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34099 = arguments.length;
var i__5898__auto___34100 = (0);
while(true){
if((i__5898__auto___34100 < len__5897__auto___34099)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34100]));

var G__34101 = (i__5898__auto___34100 + (1));
i__5898__auto___34100 = G__34101;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((3) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5923__auto__);

}
});

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq31760){
var G__31761 = cljs.core.first(seq31760);
var seq31760__$1 = cljs.core.next(seq31760);
var G__31762 = cljs.core.first(seq31760__$1);
var seq31760__$2 = cljs.core.next(seq31760__$1);
var G__31763 = cljs.core.first(seq31760__$2);
var seq31760__$3 = cljs.core.next(seq31760__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31761,G__31762,G__31763,seq31760__$3);
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__31778 = arguments.length;
switch (G__31778) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34112 = arguments.length;
var i__5898__auto___34113 = (0);
while(true){
if((i__5898__auto___34113 < len__5897__auto___34112)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34113]));

var G__34115 = (i__5898__auto___34113 + (1));
i__5898__auto___34113 = G__34115;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((3) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5923__auto__);

}
});

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq31774){
var G__31775 = cljs.core.first(seq31774);
var seq31774__$1 = cljs.core.next(seq31774);
var G__31776 = cljs.core.first(seq31774__$1);
var seq31774__$2 = cljs.core.next(seq31774__$1);
var G__31777 = cljs.core.first(seq31774__$2);
var seq31774__$3 = cljs.core.next(seq31774__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31775,G__31776,G__31777,seq31774__$3);
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv if its value is not nil, otherwise dissocs it.
 */
taoensso.encore.dis_assoc_some = (function taoensso$encore$dis_assoc_some(var_args){
var G__31794 = arguments.length;
switch (G__31794) {
case 3:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34119 = arguments.length;
var i__5898__auto___34120 = (0);
while(true){
if((i__5898__auto___34120 < len__5897__auto___34119)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34120]));

var G__34122 = (i__5898__auto___34120 + (1));
i__5898__auto___34120 = G__34122;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((3) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((3)),(0),null)):null);
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5923__auto__);

}
});

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.dis_assoc_some.cljs$lang$applyTo = (function (seq31790){
var G__31791 = cljs.core.first(seq31790);
var seq31790__$1 = cljs.core.next(seq31790);
var G__31792 = cljs.core.first(seq31790__$1);
var seq31790__$2 = cljs.core.next(seq31790__$1);
var G__31793 = cljs.core.first(seq31790__$2);
var seq31790__$3 = cljs.core.next(seq31790__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31791,G__31792,G__31793,seq31790__$3);
}));

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.dis_assoc_some.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__31808 = arguments.length;
switch (G__31808) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34127 = arguments.length;
var i__5898__auto___34128 = (0);
while(true){
if((i__5898__auto___34128 < len__5897__auto___34127)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34128]));

var G__34129 = (i__5898__auto___34128 + (1));
i__5898__auto___34128 = G__34129;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((3) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5923__auto__);

}
});

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq31804){
var G__31805 = cljs.core.first(seq31804);
var seq31804__$1 = cljs.core.next(seq31804);
var G__31806 = cljs.core.first(seq31804__$1);
var seq31804__$2 = cljs.core.next(seq31804__$1);
var G__31807 = cljs.core.first(seq31804__$2);
var seq31804__$3 = cljs.core.next(seq31804__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31805,G__31806,G__31807,seq31804__$3);
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3));

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__31819 = arguments.length;
switch (G__31819) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
}));

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
}));

(taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3);

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__31833 = arguments.length;
switch (G__31833) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
}));

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
}));

(taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3);

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__31854 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31854,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
if(cljs.core.vector_QMARK_(xs)){
var vec__31859 = taoensso.encore.vsplit_last(xs);
var vn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31859,(0),null);
var vl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31859,(1),null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(vn,vl) : f.call(null,vn,vl));
} else {
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__31866 = xs__$1;
var seq__31867 = cljs.core.seq(vec__31866);
var first__31868 = cljs.core.first(seq__31867);
var seq__31867__$1 = cljs.core.next(seq__31867);
var x1 = first__31868;
var xn = seq__31867__$1;
if(xn){
var G__34144 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__34145 = xn;
butlast = G__34144;
xs__$1 = G__34145;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3(coll,(0),n);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return ((cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(taoensso.encore.ensure_set(x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34149 = arguments.length;
var i__5898__auto___34150 = (0);
while(true){
if((i__5898__auto___34150 < len__5897__auto___34149)){
args__5903__auto__.push((arguments[i__5898__auto___34150]));

var G__34153 = (i__5898__auto___34150 + (1));
i__5898__auto___34150 = G__34153;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last((function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,taoensso.encore.seq_kvs(lx));
}),args));
}));

(taoensso.encore.mapply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.mapply.cljs$lang$applyTo = (function (seq31877){
var G__31878 = cljs.core.first(seq31877);
var seq31877__$1 = cljs.core.next(seq31877);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31878,seq31877__$1);
}));

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__31890 = arguments.length;
switch (G__31890) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34156 = arguments.length;
var i__5898__auto___34157 = (0);
while(true){
if((i__5898__auto___34157 < len__5897__auto___34156)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34157]));

var G__34158 = (i__5898__auto___34157 + (1));
i__5898__auto___34157 = G__34158;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
}));

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
}));

/** @this {Function} */
(taoensso.encore.into_all.cljs$lang$applyTo = (function (seq31886){
var G__31887 = cljs.core.first(seq31886);
var seq31886__$1 = cljs.core.next(seq31886);
var G__31888 = cljs.core.first(seq31886__$1);
var seq31886__$2 = cljs.core.next(seq31886__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31887,G__31888,seq31886__$2);
}));

(taoensso.encore.into_all.cljs$lang$maxFixedArity = (2));

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((((n > (10))) && (taoensso.encore.editable_QMARK_(coll)))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__31899 = arguments.length;
switch (G__31899) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
}));

(taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__31907 = arguments.length;
switch (G__31907) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
}));

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY));
return (function() {
var G__34181 = null;
var G__34181__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__34181__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__34181__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
seen_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen_.cljs$core$IDeref$_deref$arity$1(null),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__34181 = function(acc,input){
switch(arguments.length){
case 0:
return G__34181__0.call(this);
case 1:
return G__34181__1.call(this,acc);
case 2:
return G__34181__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34181.cljs$core$IFn$_invoke$arity$0 = G__34181__0;
G__34181.cljs$core$IFn$_invoke$arity$1 = G__34181__1;
G__34181.cljs$core$IFn$_invoke$arity$2 = G__34181__2;
return G__34181;
})()
});
}));

(taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1);

var p_BANG__34183 = cljs.core.persistent_BANG_;
var t_34184 = cljs.core.transient$;
taoensso.encore.invert_map = (function taoensso$encore$invert_map(m){
var G__31918 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),(function (){var G__31919 = cljs.core.PersistentArrayMap.EMPTY;
return (t_34184.cljs$core$IFn$_invoke$arity$1 ? t_34184.cljs$core$IFn$_invoke$arity$1(G__31919) : t_34184.call(null,G__31919));
})(),m);
return (p_BANG__34183.cljs$core$IFn$_invoke$arity$1 ? p_BANG__34183.cljs$core$IFn$_invoke$arity$1(G__31918) : p_BANG__34183.call(null,G__31918));
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
var G__31922 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),(function (){var G__31923 = cljs.core.PersistentArrayMap.EMPTY;
return (t_34184.cljs$core$IFn$_invoke$arity$1 ? t_34184.cljs$core$IFn$_invoke$arity$1(G__31923) : t_34184.call(null,G__31923));
})(),m);
return (p_BANG__34183.cljs$core$IFn$_invoke$arity$1 ? p_BANG__34183.cljs$core$IFn$_invoke$arity$1(G__31922) : p_BANG__34183.call(null,G__31922));
});

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__31925 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),(t_34184.cljs$core$IFn$_invoke$arity$1 ? t_34184.cljs$core$IFn$_invoke$arity$1(m) : t_34184.call(null,m)),m);
return (p_BANG__34183.cljs$core$IFn$_invoke$arity$1 ? p_BANG__34183.cljs$core$IFn$_invoke$arity$1(G__31925) : p_BANG__34183.call(null,G__31925));
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__31926 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),(t_34184.cljs$core$IFn$_invoke$arity$1 ? t_34184.cljs$core$IFn$_invoke$arity$1(m) : t_34184.call(null,m)),m);
return (p_BANG__34183.cljs$core$IFn$_invoke$arity$1 ? p_BANG__34183.cljs$core$IFn$_invoke$arity$1(G__31926) : p_BANG__34183.call(null,G__31926));
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__31927 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),(t_34184.cljs$core$IFn$_invoke$arity$1 ? t_34184.cljs$core$IFn$_invoke$arity$1(m) : t_34184.call(null,m)),m);
return (p_BANG__34183.cljs$core$IFn$_invoke$arity$1 ? p_BANG__34183.cljs$core$IFn$_invoke$arity$1(G__31927) : p_BANG__34183.call(null,G__31927));
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__31932 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),(t_34184.cljs$core$IFn$_invoke$arity$1 ? t_34184.cljs$core$IFn$_invoke$arity$1(m) : t_34184.call(null,m)),m);
return (p_BANG__34183.cljs$core$IFn$_invoke$arity$1 ? p_BANG__34183.cljs$core$IFn$_invoke$arity$1(G__31932) : p_BANG__34183.call(null,G__31932));
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__31934 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),(t_34184.cljs$core$IFn$_invoke$arity$1 ? t_34184.cljs$core$IFn$_invoke$arity$1(m) : t_34184.call(null,m)),m);
return (p_BANG__34183.cljs$core$IFn$_invoke$arity$1 ? p_BANG__34183.cljs$core$IFn$_invoke$arity$1(G__31934) : p_BANG__34183.call(null,G__31934));
}
});
/**
 * Returns a map like the one given, replacing keys using
 *   the given {<old-new> <new-key>} replacements.
 *   O(min(n_replacements, n_m)).
 */
taoensso.encore.rename_keys = (function taoensso$encore$rename_keys(replacements,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.empty_QMARK_(m)){
return m;
} else {
if(cljs.core.empty_QMARK_(replacements)){
return m;
} else {
if((cljs.core.count(m) > cljs.core.count(replacements))){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,old_k,new_k){
var b2__28441__auto__ = cljs.core.find(m,old_k);
if(cljs.core.truth_(b2__28441__auto__)){
var e = b2__28441__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,old_k),new_k,cljs.core.val(e));
} else {
return acc;
}
}),cljs.core.transient$(m),replacements));
} else {
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,old_k,v){
var b2__28441__auto__ = cljs.core.find(replacements,old_k);
if(cljs.core.truth_(b2__28441__auto__)){
var e = b2__28441__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,old_k),cljs.core.val(e),v);
} else {
return acc;
}
}),cljs.core.transient$(m),m));
}
}
}
}
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((function (p1__31945_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__31945_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but:.
 *  - Empty ks will return (f m), not act like [nil] ks.
 *  - Adds support for `not-found`.
 *  - Adds support for special return vals: `:swap/dissoc`, `:swap/abort`.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__31953 = arguments.length;
switch (G__31953) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
}));

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
if(cljs.core.empty_QMARK_(ks)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
} else {
var v = (function (){var G__31954 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31954) : f.call(null,G__31954));
})();
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("swap","abort","swap/abort",508048993)) : taoensso.encore.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("swap","abort","swap/abort",508048993))))){
return m;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))){
return (taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks) : taoensso.encore.dissoc_in.call(null,m,ks));
} else {
return cljs.core.assoc_in(m,ks,v);
}
}
}
}));

(taoensso.encore.update_in.cljs$lang$maxFixedArity = 4);

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__31959 = arguments.length;
switch (G__31959) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
}));

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq(ks)){
return taoensso.encore.fsplit_last((function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}),ks);
} else {
return false;
}
}));

(taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3);

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__31980 = arguments.length;
switch (G__31980) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34214 = arguments.length;
var i__5898__auto___34215 = (0);
while(true){
if((i__5898__auto___34215 < len__5897__auto___34214)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34215]));

var G__34216 = (i__5898__auto___34215 + (1));
i__5898__auto___34215 = G__34216;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((3) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((3)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5923__auto__);

}
});

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k),more);
}));
}));

/** @this {Function} */
(taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq31975){
var G__31976 = cljs.core.first(seq31975);
var seq31975__$1 = cljs.core.next(seq31975);
var G__31977 = cljs.core.first(seq31975__$1);
var seq31975__$2 = cljs.core.next(seq31975__$1);
var G__31978 = cljs.core.first(seq31975__$2);
var seq31975__$3 = cljs.core.next(seq31975__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31976,G__31977,G__31978,seq31975__$3);
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
if(cljs.core.seq(ks)){
return taoensso.encore.fsplit_last((function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m,ks__$1,lk);
}),ks);
} else {
return m;
}
}));

(taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3));

taoensso.encore.node_paths = (function taoensso$encore$node_paths(var_args){
var G__31995 = arguments.length;
switch (G__31995) {
case 1:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(cljs.core.associative_QMARK_,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2 = (function (node_pred,m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3 = (function (node_pred,m,basis){
var basis__$1 = (function (){var or__5162__auto__ = basis;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((node_pred.cljs$core$IFn$_invoke$arity$1 ? node_pred.cljs$core$IFn$_invoke$arity$1(v) : node_pred.call(null,v)))){
var paths_from_basis = taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(basis__$1,k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,in$){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,in$);
}),acc,paths_from_basis);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(basis__$1,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),m));
}));

(taoensso.encore.node_paths.cljs$lang$maxFixedArity = 3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__32006 = arguments.length;
switch (G__32006) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34234 = arguments.length;
var i__5898__auto___34235 = (0);
while(true){
if((i__5898__auto___34235 < len__5897__auto___34234)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34235]));

var G__34236 = (i__5898__auto___34235 + (1));
i__5898__auto___34235 = G__34236;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
}));

/** @this {Function} */
(taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq32001){
var G__32002 = cljs.core.first(seq32001);
var seq32001__$1 = cljs.core.next(seq32001);
var G__32003 = cljs.core.first(seq32001__$1);
var seq32001__$2 = cljs.core.next(seq32001__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32002,G__32003,seq32001__$2);
}));

(taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2));

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if(((s1) && (s2))){
var G__34240 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__34241 = cljs.core.next(s1);
var G__34242 = cljs.core.next(s2);
v = G__34240;
s1 = G__34241;
s2 = G__34242;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
var not_found_34244 = ({});
taoensso.encore._merge_with = (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv((function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_34244);
if((lv === not_found_34244)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return ((cljs.core.map_QMARK_(rv)) && (cljs.core.map_QMARK_(lv)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new_rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
}
}),(function (){var or__5162__auto__ = acc;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
}),null,maps);
});
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34248 = arguments.length;
var i__5898__auto___34249 = (0);
while(true){
if((i__5898__auto___34249 < len__5897__auto___34248)){
args__5903__auto__.push((arguments[i__5898__auto___34249]));

var G__34251 = (i__5898__auto___34249 + (1));
i__5898__auto___34249 = G__34251;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(false,(function (x,y){
return y;
}),maps);
}));

(taoensso.encore.merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.merge.cljs$lang$applyTo = (function (seq32026){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32026));
}));


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34256 = arguments.length;
var i__5898__auto___34257 = (0);
while(true){
if((i__5898__auto___34257 < len__5897__auto___34256)){
args__5903__auto__.push((arguments[i__5898__auto___34257]));

var G__34258 = (i__5898__auto___34257 + (1));
i__5898__auto___34257 = G__34258;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(false,f,maps);
}));

(taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq32028){
var G__32029 = cljs.core.first(seq32028);
var seq32028__$1 = cljs.core.next(seq32028);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32029,seq32028__$1);
}));


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34262 = arguments.length;
var i__5898__auto___34263 = (0);
while(true){
if((i__5898__auto___34263 < len__5897__auto___34262)){
args__5903__auto__.push((arguments[i__5898__auto___34263]));

var G__34264 = (i__5898__auto___34263 + (1));
i__5898__auto___34263 = G__34264;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(new cljs.core.Keyword(null,"nest","nest",-314993663),(function (x,y){
return y;
}),maps);
}));

(taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq32035){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32035));
}));


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34266 = arguments.length;
var i__5898__auto___34267 = (0);
while(true){
if((i__5898__auto___34267 < len__5897__auto___34266)){
args__5903__auto__.push((arguments[i__5898__auto___34267]));

var G__34268 = (i__5898__auto___34267 + (1));
i__5898__auto___34267 = G__34268;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(new cljs.core.Keyword(null,"nest","nest",-314993663),f,maps);
}));

(taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq32045){
var G__32046 = cljs.core.first(seq32045);
var seq32045__$1 = cljs.core.next(seq32045);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32046,seq32045__$1);
}));

/**
 * Returns true iff `sub` is a (possibly nested) submap of `m`,
 *   i.e. iff every (nested) value in `sub` has the same (nested) value in `m`.
 * 
 *   Warning: uses stack recursion, so supports only limited nesting.
 */
taoensso.encore.submap_QMARK_ = (function taoensso$encore$submap_QMARK_(m,sub){
return cljs.core.reduce_kv((function (_,k,v){
if(cljs.core.map_QMARK_(v)){
var sub_STAR_ = v;
var m_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var b2__28441__auto__ = (function (){var and__5160__auto__ = cljs.core.map_QMARK_(m_STAR_);
if(and__5160__auto__){
return (taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.submap_QMARK_.cljs$core$IFn$_invoke$arity$2(m_STAR_,sub_STAR_) : taoensso.encore.submap_QMARK_.call(null,m_STAR_,sub_STAR_));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(b2__28441__auto__)){
var match_QMARK_ = b2__28441__auto__;
return true;
} else {
return cljs.core.reduced(false);
}
} else {
var sval = v;
var mval = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500));
var b2__28441__auto__ = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(sval,new cljs.core.Keyword("submap","nx","submap/nx",-765719666)) : taoensso.encore.kw_identical_QMARK_.call(null,sval,new cljs.core.Keyword("submap","nx","submap/nx",-765719666))))?(taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(mval,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500)) : taoensso.encore.kw_identical_QMARK_.call(null,mval,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500))):cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sval,mval));
if(cljs.core.truth_(b2__28441__auto__)){
var match_QMARK_ = b2__28441__auto__;
return true;
} else {
return cljs.core.reduced(false);
}
}
}),true,sub);
});
/**
 * Like `select-keys` but supports nested key spec:
 * 
 *  (select-nested-keys
 *    {:a :A :b :B :c {:c1 :C1 :c2 :C2} :d :D} ; `src-map`
 *    [:a {:c [:c1], :d [:d1 :d2]}]) ; `key-spec`
 * 
 *    => {:a :A, :c {:c1 :C1}, :d :D}
 * 
 *   Note that as with the `{:d [:d1 :d2]}` spec in the example above,
 *   if spec expects a nested map but the actual value is not a map,
 *   the actual value will be included in output as-is.
 * 
 *   Has the same behaviour as `select-keys` when `key-spec` is a
 *   simple vector of keys.
 */
taoensso.encore.select_nested_keys = (function taoensso$encore$select_nested_keys(src_map,key_spec){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$select_nested_keys_$_rf(acc,spec_in){
if(cljs.core.map_QMARK_(spec_in)){
return cljs.core.reduce_kv((function (acc__$1,k,nested_spec_in){
if(cljs.core.contains_QMARK_(src_map,k)){
var src_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(src_map,k);
if(cljs.core.map_QMARK_(src_val)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,k,(taoensso.encore.select_nested_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.select_nested_keys.cljs$core$IFn$_invoke$arity$2(src_val,nested_spec_in) : taoensso.encore.select_nested_keys.call(null,src_val,nested_spec_in)));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,k,src_val);
}
} else {
return acc__$1;
}
}),acc,spec_in);
} else {
var k = spec_in;
if(cljs.core.contains_QMARK_(src_map,k)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(src_map,k));
} else {
return acc;
}
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),key_spec));
});
taoensso.encore.atom_tag = new cljs.core.Symbol(null,"clojure.lang.IAtom","clojure.lang.IAtom",2048990995,null);
/**
 * Impln. for 0-key resets
 */
taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,m1){
while(true){
var m0 = cljs.core.deref(atom_);
cljs.core.reset_BANG_(atom_,m1);

return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m1,m1) : return$.call(null,m0,m0,m1,m1));
break;
}
});
/**
 * Impln. for 1-key resets
 */
taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
cljs.core.reset_BANG_(atom_,m1);

var G__32066 = m0;
var G__32067 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__32068 = m1;
var G__32069 = v1;
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__32066,G__32067,G__32068,G__32069) : return$.call(null,G__32066,G__32067,G__32068,G__32069));
break;
}
});
/**
 * Impln. for n-key resets
 */
taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__28441__auto__ = cljs.core.seq(ks);
if(b2__28441__auto__){
var ks_seq = b2__28441__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
cljs.core.reset_BANG_(atom_,m1);

var G__32074 = m0;
var G__32075 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__32076 = m1;
var G__32077 = v1;
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__32074,G__32075,G__32076,G__32077) : return$.call(null,G__32074,G__32075,G__32076,G__32077));
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_34290 = (function (m0,v0,m1,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics, returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var G__32084 = arguments.length;
switch (G__32084) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_34290,atom_,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_34290,atom_,ks,null,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_34290,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4);


/**
 * Like `reset-in!` but optimized for single-key case.
 */
taoensso.encore.reset_val_BANG_ = (function taoensso$encore$reset_val_BANG_(var_args){
var G__32093 = arguments.length;
switch (G__32093) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_34290,atom_,k,null,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_34290,atom_,k,not_found,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4);

var sentinel_34298 = ({});
var return_34299 = (function (m0,v0,m1,v1){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v0,v1);
});
/**
 * Like `reset-in!` but returns true iff the atom's value changed.
 */
taoensso.encore.reset_in_BANG__QMARK_ = (function taoensso$encore$reset_in_BANG__QMARK_(var_args){
var G__32111 = arguments.length;
switch (G__32111) {
case 2:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_34299,atom_,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_34299,atom_,ks,sentinel_34298,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_34299,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$lang$maxFixedArity = 4);


/**
 * Like `reset-in!?` but optimized for single-key case.
 */
taoensso.encore.reset_val_BANG__QMARK_ = (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,sentinel_34298,new_val);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val);
});
/**
 * Atomically swaps value of `atom_` to `val` and returns
 *   true iff the atom's value changed. See also `reset-in!?`.
 */
taoensso.encore.reset_BANG__QMARK_ = (function taoensso$encore$reset_BANG__QMARK_(atom_,val){
while(true){
var old = cljs.core.deref(atom_);
cljs.core.reset_BANG_(atom_,val);

return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,val);
break;
}
});

/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

(taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
}));

(taoensso.encore.Swapped.cljs$lang$type = true);

(taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped");

(taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"taoensso.encore/Swapped");
}));

/**
 * Positional factory function for taoensso.encore/Swapped.
 */
taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.return_swapped = (function taoensso$encore$return_swapped(sw,m0,m1){
var rv = sw.returnv;
var G__32133 = rv;
var G__32133__$1 = (((G__32133 instanceof cljs.core.Keyword))?G__32133.fqn:null);
switch (G__32133__$1) {
case "swap/changed?":
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m1,m0);

break;
case "swap/new":
return m1;

break;
case "swap/old":
return m0;

break;
default:
return rv;

}
});
/**
 * Impln. for 0-key swaps
 */
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var m0 = cljs.core.deref(atom_);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m0) : f.call(null,m0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var m1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(m1,new cljs.core.Keyword("swap","abort","swap/abort",508048993)) : taoensso.encore.kw_identical_QMARK_.call(null,m1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))))){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m0,m0) : return$.call(null,m0,m0,m0,m0));
}
} else {
cljs.core.reset_BANG_(atom_,m1);

if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,m0,m1,m1) : return$.call(null,m0,m0,m1,m1));
}
}
break;
}
});
/**
 * Impln. for 1-key swaps
 */
taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
cljs.core.reset_BANG_(atom_,m1);

var G__32146 = m0;
var G__32147 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__32148 = m1;
var G__32149 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__32146,G__32147,G__32148,G__32149) : return$.call(null,G__32146,G__32147,G__32148,G__32149));
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(v1,new cljs.core.Keyword("swap","abort","swap/abort",508048993)) : taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))))){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m0);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m0,v0) : return$.call(null,m0,v0,m0,v0));
}
} else {
var m1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
cljs.core.reset_BANG_(atom_,m1);

if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m1,v1) : return$.call(null,m0,v0,m1,v1));
}
}
break;
}
}
});
/**
 * Impln. for n-key swaps
 */
taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__28441__auto__ = cljs.core.seq(ks);
if(b2__28441__auto__){
var ks_seq = b2__28441__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__28441__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__28441__auto__))
,ks);
cljs.core.reset_BANG_(atom_,m1);

var G__32169 = m0;
var G__32170 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__32171 = m1;
var G__32172 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(G__32169,G__32170,G__32171,G__32172) : return$.call(null,G__32169,G__32170,G__32171,G__32172));
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(v1,new cljs.core.Keyword("swap","abort","swap/abort",508048993)) : taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))))){
if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m0);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m0,v0) : return$.call(null,m0,v0,m0,v0));
}
} else {
var m1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)) : taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))))?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__28441__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__28441__auto__))
,ks):cljs.core.assoc_in(m0,ks,v1));
cljs.core.reset_BANG_(atom_,m1);

if(sw_QMARK_){
return taoensso.encore.return_swapped(s1,m0,m1);
} else {
return (return$.cljs$core$IFn$_invoke$arity$4 ? return$.cljs$core$IFn$_invoke$arity$4(m0,v0,m1,v1) : return$.call(null,m0,v0,m1,v1));
}
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});
var return_34321 = (function (m0,v0,m1,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var G__32183 = arguments.length;
switch (G__32183) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_34321,atom_,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_34321,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_34321,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4);


/**
 * Like `swap-in!` but optimized for single-key case.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(var_args){
var G__32191 = arguments.length;
switch (G__32191) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_34321,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_34321,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__32202 = arguments.length;
switch (G__32202) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
}));

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,(function (v0){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),v0);
}));
}));

(taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__28441__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__28441__auto__)){
var perf = b2__28441__auto__;
var b2__28441__auto____$1 = (function (){var or__5162__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__5162__auto____$2)){
return or__5162__auto____$2;
} else {
var or__5162__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__5162__auto____$3)){
return or__5162__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__28441__auto____$1)){
var f = b2__28441__auto____$1;
return (function (){
return ((1000000) * cljs.core.long$(f.call(perf)));
});
} else {
return (function (){
return ((1000000) * (new Date()).getTime());
});
}
} else {
return (function (){
return ((1000000) * (new Date()).getTime());
});
}
})();
/**
 * Like `core/memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__34333__delegate = function (args){
return cljs.core.deref((function (){var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_),args);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null))]);
}
})),args);
}
})());
};
var G__34333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34334__i = 0, G__34334__a = new Array(arguments.length -  0);
while (G__34334__i < G__34334__a.length) {G__34334__a[G__34334__i] = arguments[G__34334__i + 0]; ++G__34334__i;}
  args = new cljs.core.IndexedSeq(G__34334__a,0,null);
} 
return G__34333__delegate.call(this,args);};
G__34333.cljs$lang$maxFixedArity = 0;
G__34333.cljs$lang$applyTo = (function (arglist__34335){
var args = cljs.core.seq(arglist__34335);
return G__34333__delegate(args);
});
G__34333.cljs$core$IFn$_invoke$arity$variadic = G__34333__delegate;
return G__34333;
})()
;
});
/**
 * For Clj: fastest possible memoize. Non-racey, 0-3 arity only.
 *   For Cljs: just passes through to `core/memoize`.
 */
taoensso.encore.fmemoize = (function taoensso$encore$fmemoize(f){
return cljs.core.memoize(f);
});
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(rate){
return (Math.random() <= rate);
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

(taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.SimpleCacheEntry.cljs$lang$type = true);

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry");

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"taoensso.encore/SimpleCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/SimpleCacheEntry.
 */
taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

(taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.TickedCacheEntry.cljs$lang$type = true);

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry");

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"taoensso.encore/TickedCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/TickedCacheEntry.
 */
taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref(atom_);
var v1 = (function (){var G__32243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32243) : f.call(null,G__32243));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
cljs.core.reset_BANG_(atom_,m1);

return v1;
break;
}
});
/**
 * Returns a cached version of given referentially transparent function `f`.
 * 
 *   Like `core/memoize` but:
 *  - Often faster, depending on options.
 *  - Prevents race conditions on writes.
 *  - Supports cache invalidation by prepending args with:
 *    - `:mem/del`   ; Delete cached item for subsequent args, returns nil.
 *    - `:mem/fresh` ; Renew  cached item for subsequent args, returns new val.
 * 
 *  - Supports options:
 *    - `ttl-ms` ; Expire cached items after <this> many msecs.
 *    - `size`   ; Restrict cache size to <this> many items at the next garbage
 *               ; collection (GC).
 * 
 *    - `gc-every` ; Run garbage collection (GC) approximately once every
 *                 ; <this> many calls to cached fn. If unspecified, GC rate
 *                 ; will be determined automatically based on `size`.
 * 
 *   See also `defn-cached`, `fmemoize`, `memoize-last`.
 */
taoensso.encore.cache = (function taoensso$encore$cache(var_args){
var G__32260 = arguments.length;
switch (G__32260) {
case 1:
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = ({});
return (function() { 
var taoensso$encore$cached__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("mem","del","mem/del",574870667)) : taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","del","mem/del",574870667))))){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(x2,new cljs.core.Keyword("mem","all","mem/all",892075139)) : taoensso.encore.kw_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139))))){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache_.cljs$core$IDeref$_deref$arity$1(null),xn));
}

return null;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)) : taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133))))){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var taoensso$encore$cached = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__34344__i = 0, G__34344__a = new Array(arguments.length -  0);
while (G__34344__i < G__34344__a.length) {G__34344__a[G__34344__i] = arguments[G__34344__i + 0]; ++G__34344__i;}
  xs = new cljs.core.IndexedSeq(G__34344__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,xs);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__34345){
var xs = cljs.core.seq(arglist__34345);
return taoensso$encore$cached__delegate(xs);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
}));

(taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2 = (function (p__32273,f){
var map__32274 = p__32273;
var map__32274__$1 = cljs.core.__destructure_map(map__32274);
var opts = map__32274__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32274__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var ttl_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32274__$1,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875));
var gc_every = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32274__$1,new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691));
var e_34347 = (function (){try{if((function (x){
return taoensso.truss.impl.ks_LT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),null], null), null),x);
})(opts)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32279){if((e32279 instanceof Error)){
var e_34347 = e32279;
return e_34347;
} else {
throw e32279;

}
}})();
if((e_34347 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),2561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ks<=","ks<=",1664853833),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),"null",new cljs.core.Keyword(null,"size","size",1098693007),"null",new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),"null"], null), null)], null),opts,e_34347,null);
}

if(cljs.core.truth_((function (x){
var or__5162__auto__ = (x == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.pos_num_QMARK_)(x);
}
})(size))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),2562,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-num?","pos-num?",976533390,null)], null),size,null,null);
}

if(cljs.core.truth_((function (x){
var or__5162__auto__ = (x == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.pos_num_QMARK_)(x);
}
})(ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),2562,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-num?","pos-num?",976533390,null)], null),ttl_ms,null,null);
}

if(cljs.core.truth_((function (x){
var or__5162__auto__ = (x == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.pos_num_QMARK_)(x);
}
})(gc_every))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),2562,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-num?","pos-num?",976533390,null)], null),gc_every,null,null);
}


if(cljs.core.truth_(size)){
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var ticker = (taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.counter.call(null));
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$((function (){var or__5162__auto__ = ttl_ms;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})());
var ttl_QMARK_ = (!((ttl_ms__$1 === (0))));
var size__$1 = cljs.core.long$(size);
var gc_every__$1 = cljs.core.long$((function (){var or__5162__auto__ = gc_every;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return taoensso.encore.clamp_int((1000),(16000),size__$1);
}
})());
return (function() { 
var taoensso$encore$cached__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a1,new cljs.core.Keyword("mem","del","mem/del",574870667)) : taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667))))){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a2,new cljs.core.Keyword("mem","all","mem/all",892075139)) : taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139))))){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var tick = (ticker.cljs$core$IFn$_invoke$arity$0 ? ticker.cljs$core$IFn$_invoke$arity$0() : ticker.call(null));
var instant = ((ttl_QMARK_)?(new Date()).getTime():(0));
if((((cljs.core.rem(tick,gc_every__$1) === (0))) && ((cljs.core.count(cljs.core.deref(cache_)) >= (1.1 * size__$1))))){
var latch_34353 = null;
cljs.core.reset_BANG_(latch_,latch_34353);

if(ttl_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__5162__auto__ = m;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
}));
} else {
}

var snapshot_34356 = cljs.core.deref(cache_);
var n_to_gc_34357 = (cljs.core.count(snapshot_34356) - size__$1);
if((n_to_gc_34357 >= (0.1 * size__$1))){
var ks_to_gc_34358 = (function (){var G__32321 = n_to_gc_34357;
var G__32322 = (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_34356,k);
return (e.tick_lru + e.tick_lfu);
});
var G__32323 = cljs.core.keys(snapshot_34356);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__32321,G__32322,G__32323) : taoensso.encore.top.call(null,G__32321,G__32322,G__32323));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),cljs.core.transient$((function (){var or__5162__auto__ = m;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_34358));
}));
} else {
}
} else {
}

var fresh_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)) : taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,(function (_QMARK_e){
if(cljs.core.truth_((function (){var or__5162__auto__ = (_QMARK_e == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
}));
return cljs.core.deref(e.delay);
}
};
var taoensso$encore$cached = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34363__i = 0, G__34363__a = new Array(arguments.length -  0);
while (G__34363__i < G__34363__a.length) {G__34363__a[G__34363__i] = arguments[G__34363__i + 0]; ++G__34363__i;}
  args = new cljs.core.IndexedSeq(G__34363__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,args);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__34364){
var args = cljs.core.seq(arglist__34364);
return taoensso$encore$cached__delegate(args);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
} else {
if(cljs.core.truth_(ttl_ms)){
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
var gc_rate = (function (){var gce = (function (){var or__5162__auto__ = gc_every;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return 8000.0;
}
})();
return (1.0 / cljs.core.long$(gce));
})();
return (function() { 
var taoensso$encore$cached__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a1,new cljs.core.Keyword("mem","del","mem/del",574870667)) : taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667))))){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a2,new cljs.core.Keyword("mem","all","mem/all",892075139)) : taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139))))){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if(cljs.core.truth_((gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1 ? gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1(gc_rate) : gc_now_QMARK_.call(null,gc_rate)))){
var latch_34365 = null;
cljs.core.reset_BANG_(latch_,latch_34365);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__5162__auto__ = m;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
}));
} else {
}

var fresh_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)) : taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,(function (_QMARK_e){
if(cljs.core.truth_((function (){var or__5162__auto__ = (_QMARK_e == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant));
} else {
return _QMARK_e;
}
}));
return cljs.core.deref(e.delay);
}
};
var taoensso$encore$cached = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34368__i = 0, G__34368__a = new Array(arguments.length -  0);
while (G__34368__i < G__34368__a.length) {G__34368__a[G__34368__i] = arguments[G__34368__i + 0]; ++G__34368__i;}
  args = new cljs.core.IndexedSeq(G__34368__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,args);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__34369){
var args = cljs.core.seq(arglist__34369);
return taoensso$encore$cached__delegate(args);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
} else {
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1(f);
}
}
}));

(taoensso.encore.cache.cljs$lang$maxFixedArity = 2);

/**
 * Alternative way to call `cache`, provided mostly for back compatibility.
 *   See `cache` docstring for details.
 */
taoensso.encore.memoize = (function taoensso$encore$memoize(var_args){
var G__32370 = arguments.length;
switch (G__32370) {
case 1:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1(f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),ttl_ms], null),f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3 = (function (size,ttl_ms,f){
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),ttl_ms], null),f);
}));

(taoensso.encore.memoize.cljs$lang$maxFixedArity = 3);


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

(taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitSpec.cljs$lang$type = true);

(taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec");

(taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"taoensso.encore/LimitSpec");
}));

/**
 * Positional factory function for taoensso.encore/LimitSpec.
 */
taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

(taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitEntry.cljs$lang$type = true);

(taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry");

(taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"taoensso.encore/LimitEntry");
}));

/**
 * Positional factory function for taoensso.encore/LimitEntry.
 */
taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
});

(taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-sid","worst-sid",1427291395,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitHits.cljs$lang$type = true);

(taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits");

(taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"taoensso.encore/LimitHits");
}));

/**
 * Positional factory function for taoensso.encore/LimitHits.
 */
taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_34371 = (function (n,ms){
var e_34372 = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32388){if((e32388 instanceof Error)){
var e_34372 = e32388;
return e_34372;
} else {
throw e32388;

}
}})();
if((e_34372 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),2776,new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),n,e_34372,null);
}

var e_34374 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32389){if((e32389 instanceof Error)){
var e_34374 = e32389;
return e_34374;
} else {
throw e32389;

}
}})();
if((e_34374 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),2776,new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),ms,e_34374,null);
}


return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,sid,p__32391){
var vec__32392 = p__32391;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32392,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32392,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_34371(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__32395){
var vec__32396 = p__32395;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32396,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32396,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32396,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__5162__auto__ = _QMARK_id;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (i__$1){
return (i__$1 + (1));
})(i.cljs$core$IDeref$_deref$arity$1(null)));
}
})(),limit_spec_34371(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/cond!] No matching clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});
/**
 * Experimental. Like `limiter` but returns [<state_> <limiter>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(var_args){
var G__32406 = arguments.length;
switch (G__32406) {
case 1:
return taoensso.encore.limiter_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.limiter_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.limiter_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (specs){
return taoensso.encore.limiter_STAR_.cljs$core$IFn$_invoke$arity$2(null,specs);
}));

(taoensso.encore.limiter_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (opts,specs){
if(cljs.core.empty_QMARK_(specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reqs_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var specs__$1 = taoensso.encore.coerce_limit_specs(specs);
var map__32419 = opts;
var map__32419__$1 = cljs.core.__destructure_map(map__32419);
var req_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32419__$1,new cljs.core.Keyword(null,"req-id-fn","req-id-fn",-1580886496),cljs.core.identity);
var gc_every = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32419__$1,new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),16000.0);
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var gc_rate = (function (){var gce = cljs.core.long$(gc_every);
return (1.0 / gce);
})();
var f1 = (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
var rid__$1 = (req_id_fn.cljs$core$IFn$_invoke$arity$1 ? req_id_fn.cljs$core$IFn$_invoke$arity$1(rid) : req_id_fn.call(null,rid));
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.not(peek_QMARK_);
if(and__5160__auto__){
return (gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1 ? gc_now_QMARK_.cljs$core$IFn$_invoke$arity$1(gc_rate) : gc_now_QMARK_.call(null,gc_rate));
} else {
return and__5160__auto__;
}
})())){
var latch_34377 = null;
cljs.core.reset_BANG_(latch_,latch_34377);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,(function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,rid__$2,entries){
var new_entries = cljs.core.reduce_kv((function (acc__$1,sid,e){
var b2__28441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__28441__auto__)){
var s = b2__28441__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
}
}),entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$2);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$2,new_entries);
}
}),cljs.core.transient$((function (){var or__5162__auto__ = reqs;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
}));
} else {
}

while(true){
var reqs = cljs.core.deref(reqs_);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid__$1);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv(((function (reqs,entries,instant,rid__$1,latch_,reqs_,specs__$1,map__32419,map__32419__$1,req_id_fn,gc_every,gc_now_QMARK_,gc_rate){
return (function (acc,sid,e){
var b2__28441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__28441__auto__)){
var s = b2__28441__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,rid__$1,latch_,reqs_,specs__$1,map__32419,map__32419__$1,req_id_fn,gc_every,gc_now_QMARK_,gc_rate))
,null,entries));
if(cljs.core.truth_((function (){var or__5162__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__28441__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__28441__auto__)){
var h = b2__28441__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__28441__auto__ = cljs.core.deref(latch_);
if(cljs.core.truth_(b2__28441__auto__)){
var l = b2__28441__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__28441__auto__,reqs,entries,_QMARK_hits,instant,rid__$1,latch_,reqs_,specs__$1,map__32419,map__32419__$1,req_id_fn,gc_every,gc_now_QMARK_,gc_rate){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__28441__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__28441__auto____$1)){
var e = b2__28441__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__28441__auto__,reqs,entries,_QMARK_hits,instant,rid__$1,latch_,reqs_,specs__$1,map__32419,map__32419__$1,req_id_fn,gc_every,gc_now_QMARK_,gc_rate))
,entries,specs__$1);
cljs.core.reset_BANG_(reqs_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid__$1,new_entries));

return null;
}
}
break;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,(function() {
var taoensso$encore$check_limits_BANG_ = null;
var taoensso$encore$check_limits_BANG___0 = (function (){
return f1(null,false);
});
var taoensso$encore$check_limits_BANG___1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(cmd,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)) : taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","reset","rl/reset",-800926172))))){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(req_id,new cljs.core.Keyword("rl","all","rl/all",892118056)) : taoensso.encore.kw_identical_QMARK_.call(null,req_id,new cljs.core.Keyword("rl","all","rl/all",892118056))))){
cljs.core.reset_BANG_(reqs_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reqs_,cljs.core.dissoc,(req_id_fn.cljs$core$IFn$_invoke$arity$1 ? req_id_fn.cljs$core$IFn$_invoke$arity$1(req_id) : req_id_fn.call(null,req_id)));
}

return null;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(cmd,new cljs.core.Keyword("rl","peek","rl/peek",-291391771)) : taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","peek","rl/peek",-291391771))))){
return f1(req_id,true);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/limiter*] Unexpected limiter command",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cmd,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(cmd)], null),new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));
}
}
});
taoensso$encore$check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$check_limits_BANG___0;
taoensso$encore$check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$check_limits_BANG___1;
taoensso$encore$check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$check_limits_BANG___2;
return taoensso$encore$check_limits_BANG_;
})()
], null);
}
}));

(taoensso.encore.limiter_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(var_args){
var G__32457 = arguments.length;
switch (G__32457) {
case 1:
return taoensso.encore.limiter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.limiter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.limiter.cljs$core$IFn$_invoke$arity$1 = (function (specs){
return taoensso.encore.limiter.cljs$core$IFn$_invoke$arity$2(null,specs);
}));

(taoensso.encore.limiter.cljs$core$IFn$_invoke$arity$2 = (function (opts,specs){
var vec__32460 = taoensso.encore.limiter_STAR_.cljs$core$IFn$_invoke$arity$2(opts,specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32460,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32460,(1),null);
return f;
}));

(taoensso.encore.limiter.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.Counter = (function (n_){
this.n_ = n_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.Counter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.n_);
}));

(taoensso.encore.Counter.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__32471 = (arguments.length - (1));
switch (G__32471) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(taoensso.encore.Counter.prototype.apply = (function (self__,args32466){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32466)));
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (c){
return (c + (1));
})(cljs.core._deref(self__.n_)));

return n;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$1 = (function (add){
var self__ = this;
var _ = this;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (c){
return (c + add);
})(cljs.core._deref(self__.n_)));

return n;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$2 = (function (action,n){
var self__ = this;
var _ = this;
var G__32491 = action;
var G__32491__$1 = (((G__32491 instanceof cljs.core.Keyword))?G__32491.fqn:null);
switch (G__32491__$1) {
case "add":
cljs.core._vreset_BANG_(self__.n_,(function (c){
return (c + n);
})(cljs.core._deref(self__.n_)));

return null;

break;
case "set":
cljs.core.vreset_BANG_(self__.n_,n);

return null;

break;
case "set=":
case "set-get":
return cljs.core.vreset_BANG_(self__.n_,n);

break;
case "=set":
case "get-set":
var o = cljs.core.deref(self__.n_);
cljs.core.vreset_BANG_(self__.n_,n);

return o;

break;
case "=+":
case "get-add":
var o = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (c){
return (c + n);
})(cljs.core._deref(self__.n_)));

return o;

break;
case "+=":
case "add-get":
return cljs.core._vreset_BANG_(self__.n_,(function (c){
return (c + n);
})(cljs.core._deref(self__.n_)));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32491__$1))));

}
}));

(taoensso.encore.Counter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n_","n_",-613247798,null)], null);
}));

(taoensso.encore.Counter.cljs$lang$type = true);

(taoensso.encore.Counter.cljs$lang$ctorStr = "taoensso.encore/Counter");

(taoensso.encore.Counter.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"taoensso.encore/Counter");
}));

/**
 * Positional factory function for taoensso.encore/Counter.
 */
taoensso.encore.__GT_Counter = (function taoensso$encore$__GT_Counter(n_){
return (new taoensso.encore.Counter(n_));
});

/**
 * Returns a fast atomic Counter with `init` initial int value:
 *  - (<counter>    ) -> add 1, return old val
 *  - (<counter> <n>) -> add n, return old val
 * 
 *  Experimental 3-arity version takes an `action`:
 *    :add, :set, :set-get, :get-set, :get-add, :add-get
 */
taoensso.encore.counter = (function taoensso$encore$counter(var_args){
var G__32504 = arguments.length;
switch (G__32504) {
case 0:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((0));
}));

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new taoensso.encore.Counter(cljs.core.volatile_BANG_(init)));
}));

(taoensso.encore.counter.cljs$lang$maxFixedArity = 1);

taoensso.encore.rc_deref = (function taoensso$encore$rc_deref(msecs,ts_,n_skip_,gc_fn){
var t1 = (new Date()).getTime();
var n_skip0 = cljs.core.deref(n_skip_);
var ts = cljs.core.deref(ts_);
var n_total = cljs.core.count(ts);
var n_window = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,t0){
if(((t1 - t0) <= msecs)){
return (n + (1));
} else {
return n;
}
}),(0),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ts,n_skip0));
var n_skip1 = (n_total - n_window);
if((n_skip0 < n_skip1)){
cljs.core.reset_BANG_(n_skip_,n_skip1);

if((n_skip1 > (10000))){
(gc_fn.cljs$core$IFn$_invoke$arity$1 ? gc_fn.cljs$core$IFn$_invoke$arity$1(n_skip1) : gc_fn.call(null,n_skip1));
} else {
}
} else {
}

return n_window;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.RollingCounter = (function (msecs,ts_,n_skip_){
this.msecs = msecs;
this.ts_ = ts_;
this.n_skip_ = n_skip_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.RollingCounter.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__32530 = (arguments.length - (1));
switch (G__32530) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(taoensso.encore.RollingCounter.prototype.apply = (function (self__,args32529){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32529)));
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ts_,(function (){var t1 = (new Date()).getTime();
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,t1);
});
})());

return this$;
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.rc_deref(self__.msecs,self__.ts_,self__.n_skip_,(function taoensso$encore$gc(n_skip1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ts_,(function (v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,n_skip1);
}));

return cljs.core.reset_BANG_(self__.n_skip_,(0));
}));
}));

(taoensso.encore.RollingCounter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"msecs","msecs",-942455216,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"ts_","ts_",775102722,null),new cljs.core.Symbol(null,"n-skip_","n-skip_",-1562682054,null)], null);
}));

(taoensso.encore.RollingCounter.cljs$lang$type = true);

(taoensso.encore.RollingCounter.cljs$lang$ctorStr = "taoensso.encore/RollingCounter");

(taoensso.encore.RollingCounter.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"taoensso.encore/RollingCounter");
}));

/**
 * Positional factory function for taoensso.encore/RollingCounter.
 */
taoensso.encore.__GT_RollingCounter = (function taoensso$encore$__GT_RollingCounter(msecs,ts_,n_skip_){
return (new taoensso.encore.RollingCounter(msecs,ts_,n_skip_));
});

/**
 * Experimental. Returns a RollingCounter that you can:
 *  - Invoke to increment count in last `msecs` window and return RollingCounter.
 *  - Deref  to return    count in last `msecs` window.
 */
taoensso.encore.rolling_counter = (function taoensso$encore$rolling_counter(msecs){
return (new taoensso.encore.RollingCounter(cljs.core.long$((function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(msecs)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32543){if((e32543 instanceof Error)){
var e = e32543;
return e;
} else {
throw e32543;

}
}})();
if((e == null)){
return msecs;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3055,new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),msecs,e,null);
}
})()),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))));
});
taoensso.encore.system_newline = "\n";
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__32564 = arguments.length;
switch (G__32564) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34420 = arguments.length;
var i__5898__auto___34422 = (0);
while(true){
if((i__5898__auto___34422 < len__5897__auto___34420)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34422]));

var G__34423 = (i__5898__auto___34422 + (1));
i__5898__auto___34422 = G__34423;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
}));

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s),more);
}));

/** @this {Function} */
(taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq32559){
var G__32561 = cljs.core.first(seq32559);
var seq32559__$1 = cljs.core.next(seq32559);
var G__32563 = cljs.core.first(seq32559__$1);
var seq32559__$2 = cljs.core.next(seq32559__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32561,G__32563,seq32559__$2);
}));

(taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2));

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *   support.
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__32576 = arguments.length;
switch (G__32576) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__5160__auto__ = separator;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__5160__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll)));
}
}
}));

(taoensso.encore.str_join.cljs$lang$maxFixedArity = 3);

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__32578 = arguments.length;
switch (G__32578) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
}));

(taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4);

/**
 * Returns ?substring from given string.
 * 
 *   Like `subs` but:
 *  - Provides consistent clj/s behaviour.
 *  - Never throws (snaps to valid indexes).
 *  - Indexes may be -ive (=> indexed from end of string).
 * 
 *   Returns nil when requested substring would be empty.
 */
taoensso.encore.get_substr_by_idx = (function taoensso$encore$get_substr_by_idx(var_args){
var G__32585 = arguments.length;
switch (G__32585) {
case 2:
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$2 = (function (s,start_idx){
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3(s,start_idx,null);
}));

(taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3 = (function (s,start_idx,end_idx){
if(cljs.core.truth_(s)){
var s__$1 = s;
var full_len = s__$1.length;
var start_idx__$1 = (((start_idx == null))?(0):start_idx);
var end_idx__$1 = (((end_idx == null))?full_len:end_idx);
if((((start_idx__$1 === (0))) && ((end_idx__$1 >= full_len)))){
return s__$1;
} else {
var start_idx__$2 = (((start_idx__$1 < (0)))?(full_len + start_idx__$1):start_idx__$1);
var start_idx__$3 = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),start_idx__$2);
var end_idx__$2 = (((end_idx__$1 < (0)))?(full_len + end_idx__$1):end_idx__$1);
var end_idx__$3 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(full_len,end_idx__$2);
if((start_idx__$3 >= end_idx__$3)){
return null;
} else {
return s__$1.substring(start_idx__$3,end_idx__$3);
}
}
} else {
return null;
}
}));

(taoensso.encore.get_substr_by_idx.cljs$lang$maxFixedArity = 3);

/**
 * Returns ?substring from given string.
 *   Like `get-substr-by-idx`, but takes a substring-length 3rd argument.
 */
taoensso.encore.get_substr_by_len = (function taoensso$encore$get_substr_by_len(var_args){
var G__32596 = arguments.length;
switch (G__32596) {
case 2:
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$2 = (function (s,start_idx){
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3(s,start_idx,null);
}));

(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3 = (function (s,start_idx,sub_len){
if(cljs.core.truth_(s)){
var s__$1 = s;
var full_len = s__$1.length;
var sub_len__$1 = (((sub_len == null))?full_len:sub_len);
if((sub_len__$1 > (0))){
var start_idx__$1 = (((start_idx == null))?(0):start_idx);
if((((start_idx__$1 === (0))) && ((sub_len__$1 >= full_len)))){
return s__$1;
} else {
var start_idx__$2 = (((start_idx__$1 < (0)))?(full_len + start_idx__$1):start_idx__$1);
var start_idx__$3 = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),start_idx__$2);
var end_idx = (start_idx__$3 + sub_len__$1);
var end_idx__$1 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(full_len,end_idx);
if((start_idx__$3 >= end_idx__$1)){
return null;
} else {
return s__$1.substring(start_idx__$3,end_idx__$1);
}
}
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.get_substr_by_len.cljs$lang$maxFixedArity = 3);

/**
 * Returns true iff given strings are equal, ignoring case.
 */
taoensso.encore.case_insensitive_str_EQ_ = (function taoensso$encore$case_insensitive_str_EQ_(s1,s2){
var or__5162__auto__ = (s1 === s2);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var l1 = s1.length;
var l2 = s2.length;
var and__5160__auto__ = (l1 === l2);
if(and__5160__auto__){
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4((function (acc,idx){
var c1 = s1.charAt(idx).toLowerCase();
var c2 = s2.charAt(idx).toLowerCase();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c1,c2)){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,(0),l1);
} else {
return and__5160__auto__;
}
}
});
/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = (""+"g"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.ignoreCase)?"i":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.multiline)?"m":null)));
var replacement__$1 = ((typeof replacement === 'string')?replacement:(function() { 
var G__34445__delegate = function (args){
var G__32608 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__32608) : replacement.call(null,G__32608));
};
var G__34445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34446__i = 0, G__34446__a = new Array(arguments.length -  0);
while (G__34446__i < G__34446__a.length) {G__34446__a[G__34446__i] = arguments[G__34446__i + 0]; ++G__34446__i;}
  args = new cljs.core.IndexedSeq(G__34446__a,0,null);
} 
return G__34445__delegate.call(this,args);};
G__34445.cljs$lang$maxFixedArity = 0;
G__34445.cljs$lang$applyTo = (function (arglist__34447){
var args = cljs.core.seq(arglist__34447);
return G__34445__delegate(args);
});
G__34445.cljs$core$IFn$_invoke$arity$variadic = G__34445__delegate;
return G__34445;
})()
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw (""+"Invalid match arg: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(match));
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if((((void 0 === x)) || ((x == null)))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(var_args){
var G__32612 = arguments.length;
switch (G__32612) {
case 2:
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (fmt,args){
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3(taoensso.encore.nil__GT_str,fmt,args);
}));

(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (xform,fmt,args){
if((fmt == null)){
return "";
} else {
var args__$1 = (cljs.core.truth_(xform)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(xform,args):args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
}
}));

(taoensso.encore.format_STAR_.cljs$lang$maxFixedArity = 3);


/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34451 = arguments.length;
var i__5898__auto___34452 = (0);
while(true){
if((i__5898__auto___34452 < len__5897__auto___34451)){
args__5903__auto__.push((arguments[i__5898__auto___34452]));

var G__34453 = (i__5898__auto___34452 + (1));
i__5898__auto___34452 = G__34453;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,args);
}));

(taoensso.encore.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.format.cljs$lang$applyTo = (function (seq32615){
var G__32616 = cljs.core.first(seq32615);
var seq32615__$1 = cljs.core.next(seq32615);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32616,seq32615__$1);
}));

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll)));
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var in$__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref(acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref(acc_empty_QMARK__);
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__5162__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll)));
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34463 = arguments.length;
var i__5898__auto___34464 = (0);
while(true){
if((i__5898__auto___34464 < len__5897__auto___34463)){
args__5903__auto__.push((arguments[i__5898__auto___34464]));

var G__34467 = (i__5898__auto___34464 + (1));
i__5898__auto___34464 = G__34467;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
}));

(taoensso.encore.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.path.cljs$lang$applyTo = (function (seq32633){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32633));
}));

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427,
 *     https://github.com/clojure/clojurescript/pull/194
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__32654 = arguments.length;
switch (G__32654) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
}));

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var quad_hex = (function (){
var unpadded_hex = cljs.core.rand_int((65536)).toString((16));
var G__32655 = ((unpadded_hex).length);
switch (G__32655) {
case (1):
return (""+"000"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded_hex));

break;
case (2):
return (""+"00"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded_hex));

break;
case (3):
return (""+"0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded_hex));

break;
default:
return unpadded_hex;

}
});
var ver_trip_hex = ((16384) | ((4095) & cljs.core.rand_int((65536)))).toString((16));
var res_trip_hex = ((32768) | ((16383) & cljs.core.rand_int((65536)))).toString((16));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ver_trip_hex)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(res_trip_hex)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex()));
}));

(taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1);

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34476 = arguments.length;
var i__5898__auto___34477 = (0);
while(true){
if((i__5898__auto___34477 < len__5897__auto___34476)){
args__5903__auto__.push((arguments[i__5898__auto___34477]));

var G__34479 = (i__5898__auto___34477 + (1));
i__5898__auto___34477 = G__34479;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs)));
}));

(taoensso.encore.into_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.into_str.cljs$lang$applyTo = (function (seq32662){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32662));
}));

/**
 * Constant-time string equality checker.
 *   Useful to prevent timing attacks, etc.
 */
taoensso.encore.const_str_EQ_ = (function taoensso$encore$const_str_EQ_(s1,s2){
if(cljs.core.truth_((function (){var and__5160__auto__ = s1;
if(cljs.core.truth_(and__5160__auto__)){
return s2;
} else {
return and__5160__auto__;
}
})())){
var vx = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1"], null);
var v1 = cljs.core.vec(s1);
var v2 = cljs.core.vec(s2);
var n1 = cljs.core.count(v1);
var n2 = cljs.core.count(v2);
var nmax = cljs.core.max.cljs$core$IFn$_invoke$arity$2(n1,n2);
var nmin = cljs.core.min.cljs$core$IFn$_invoke$arity$2(n1,n2);
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
if((idx >= nmin)){
var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(1)));
if(and__5160__auto__){
return acc;
} else {
return and__5160__auto__;
}
} else {
var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v1,idx),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v2,idx));
if(and__5160__auto__){
return acc;
} else {
return and__5160__auto__;
}
}
}),true,nmax);
} else {
return null;
}
});
/**
 * Returns `size` random bytes using `secure-rng` or `js/window.crypto`.
 */
taoensso.encore.secure_rand_bytes = (function taoensso$encore$secure_rand_bytes(size){
var b2__28441__auto__ = window.crypto;
if(cljs.core.truth_(b2__28441__auto__)){
var crypto = b2__28441__auto__;
var ba = (new Uint8Array(size));
crypto.getRandomValues(ba);

return ba;
} else {
return null;
}
});
taoensso.encore.nanoid_alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
/**
 * Ref.
 *  Java impl.: https://bit.ly/3dtYv73,
 *    JS impl.: https://bit.ly/3fYv1zT,
 *  Motivation: https://bit.ly/2VhWuEO
 */
taoensso.encore.parse_alphabet = taoensso.encore.fmemoize((function (alphabet,len){
var an = cljs.core.count(alphabet);
var len__$1 = cljs.core.long$(len);
var _ = (((((an < (1))) || ((an > (256)))))?(function (){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`alphabet`: must be \u2115\u2208[1,256]",cljs.core.PersistentArrayMap.EMPTY)})():null);
var ___$1 = (((len__$1 <= (0)))?(function (){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`len`: must be \u2115\u2208[0,\u221E)",cljs.core.PersistentArrayMap.EMPTY)})():null);
var mask = (((2) << (Math.floor((Math.log((an - (1))) / Math.log((2)))) | 0)) - (1));
var step = cljs.core.long$(Math.ceil((((1.6 * mask) * len__$1) / an)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mask,step,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,alphabet)], null);
}));
/**
 * Experimental.
 *   Given `alphabet` (a string of possible characters), returns a securely
 *   random string of length `len`.
 * 
 *   Trying to do this the obvious/naive way (by repeatedly generating a secure
 *   random number and mapping it to an alphabet character with modulo) actually
 *   introduces bias into ids that can be exploited by an attacker.
 * 
 *   The method used here is designed to eliminate that bias.
 *   Based on https://bit.ly/3dtYv73.
 */
taoensso.encore.secure_rand_id = (function taoensso$encore$secure_rand_id(alphabet,len){
var vec__32722 = taoensso.encore.parse_alphabet(alphabet,len);
var mask = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32722,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32722,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32722,(2),null);
var an = cljs.core.count(v);
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
while(true){
var ba = taoensso.encore.secure_rand_bytes(step);
var result = taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3(((function (ba,vec__32722,mask,step,v,an,sb){
return (function (acc,idx){
var alpha_idx = (mask & (ba[idx]));
if((alpha_idx >= an)){
return acc;
} else {
var acc__$1 = taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(alpha_idx) : v.call(null,alpha_idx)));
if((cljs.core.count(acc__$1) === len)){
return cljs.core.reduced((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc__$1)));
} else {
return acc__$1;
}
}
});})(ba,vec__32722,mask,step,v,an,sb))
,sb,step);
if(typeof result === 'string'){
return result;
} else {
continue;
}
break;
}
});
var alphabet_34490 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_");
var mask_34491 = (63);
/**
 * Experimental. Optimized variant of `secure-rand-id` that returns Nano IDs
 *  as in https://github.com/ai/nanoid.
 */
taoensso.encore.nanoid = (function taoensso$encore$nanoid(var_args){
var G__32743 = arguments.length;
switch (G__32743) {
case 0:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1((21));
}));

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1 = (function (len){
var ba = taoensso.encore.secure_rand_bytes(len);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,(function (){var G__32750 = (mask_34491 & (ba[idx]));
return (alphabet_34490.cljs$core$IFn$_invoke$arity$1 ? alphabet_34490.cljs$core$IFn$_invoke$arity$1(G__32750) : alphabet_34490.call(null,G__32750));
})());
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),ba.length)));
}));

(taoensso.encore.nanoid.cljs$lang$maxFixedArity = 1);

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
/**
 * Like `core/sort` but:
 *  - Returns a vector.
 *  - `comparator` can be `:asc`, `:desc`, or an arbitrary comparator.
 *  - An optional `keyfn` may be provided, as in `core/sort-by`.
 */
taoensso.encore.sortv = (function taoensso$encore$sortv(var_args){
var G__32762 = arguments.length;
switch (G__32762) {
case 1:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,new cljs.core.Keyword(null,"asc","asc",356854569),coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2 = (function (comparator,coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,comparator,coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_keyfn,comparator,coll){
if(cljs.core.seq(coll)){
var comparator__$1 = (function (){var G__32770 = comparator;
var G__32770__$1 = (((G__32770 instanceof cljs.core.Keyword))?G__32770.fqn:null);
switch (G__32770__$1) {
case "asc":
return cljs.core.compare;

break;
case "dsc":
case "desc":
return (function (x,y){
return cljs.core.compare(y,x);
});

break;
default:
return comparator;

}
})();
var comparator__$2 = (function (){var b2__28441__auto__ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_keyfn,cljs.core.identity))?_QMARK_keyfn:null);
if(cljs.core.truth_(b2__28441__auto__)){
var kfn = b2__28441__auto__;
return (function (x,y){
var G__32771 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(x) : kfn.call(null,x));
var G__32772 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(y) : kfn.call(null,y));
return (comparator__$1.cljs$core$IFn$_invoke$arity$2 ? comparator__$1.cljs$core$IFn$_invoke$arity$2(G__32771,G__32772) : comparator__$1.call(null,G__32771,G__32772));
});
} else {
return comparator__$1;
}
})();
var a = cljs.core.to_array(coll);
taoensso.encore.goog$module$goog$array.stableSort(a,cljs.core.fn__GT_comparator(comparator__$2));

return cljs.core.with_meta(cljs.core.vec(a),cljs.core.meta(coll));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.sortv.cljs$lang$maxFixedArity = 3);

var sentinel_34500 = ({});
var nil__GT_sentinel_34501 = (function (x){
if((x == null)){
return sentinel_34500;
} else {
return x;
}
});
var sentinel__GT_nil_34502 = (function (x){
if((x === sentinel_34500)){
return null;
} else {
return x;
}
});
/**
 * Reduces the top `n` items from `coll` of N items.
 *  Clj impln is O(N.logn) vs O(N.logN) for (take n (sort-by ...)).
 */
taoensso.encore.reduce_top = (function taoensso$encore$reduce_top(var_args){
var G__32777 = arguments.length;
switch (G__32777) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$(cljs.core.min.cljs$core$IFn$_invoke$arity$2(coll_size,cljs.core.long$(n)));
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
}));

(taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6);

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__32779 = arguments.length;
switch (G__32779) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_(to)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
}));

(taoensso.encore.top_into.cljs$lang$maxFixedArity = 5);

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__32837 = arguments.length;
switch (G__32837) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
}));

(taoensso.encore.top.cljs$lang$maxFixedArity = 4);

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34519 = arguments.length;
var i__5898__auto___34521 = (0);
while(true){
if((i__5898__auto___34521 < len__5897__auto___34519)){
args__5903__auto__.push((arguments[i__5898__auto___34521]));

var G__34523 = (i__5898__auto___34521 + (1));
i__5898__auto___34521 = G__34523;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__32862){
var map__32863 = p__32862;
var map__32863__$1 = cljs.core.__destructure_map(map__32863);
var opts = map__32863__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
taoensso.truss.impl.revery_QMARK_((function (__in){
if(cljs.core.truth_((function (){var fexpr__32864 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null);
return (fexpr__32864.cljs$core$IFn$_invoke$arity$1 ? fexpr__32864.cljs$core$IFn$_invoke$arity$1(__in) : fexpr__32864.call(null,__in));
})())){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3667,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),"null",new cljs.core.Keyword(null,"secs","secs",1532330091),"null",new cljs.core.Keyword(null,"months","months",-45571637),"null",new cljs.core.Keyword(null,"days","days",-1394072564),"null",new cljs.core.Keyword(null,"mins","mins",467369676),"null",new cljs.core.Keyword(null,"hours","hours",58380855),"null",new cljs.core.Keyword(null,"years","years",-1298579689),"null",new cljs.core.Keyword(null,"ms","ms",-1152709733),"null",new cljs.core.Keyword(null,"weeks","weeks",1844596125),"null"], null), null),__in,null,null);
}
}),cljs.core.keys(opts));

return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
}));

(taoensso.encore.ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.ms.cljs$lang$applyTo = (function (seq32855){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32855));
}));

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.auto_env = (function taoensso$encore$auto_env(prop){
if(cljs.core.truth_(prop)){
return taoensso.encore.str_replace(clojure.string.upper_case(prop),/[.-]/,"_");
} else {
return null;
}
});
taoensso.encore.console_log = (((typeof console !== 'undefined'))?(function() { 
var G__34532__delegate = function (xs){
var b2__28441__auto__ = console.log;
if(cljs.core.truth_(b2__28441__auto__)){
var f = b2__28441__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__34532 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__34535__i = 0, G__34535__a = new Array(arguments.length -  0);
while (G__34535__i < G__34535__a.length) {G__34535__a[G__34535__i] = arguments[G__34535__i + 0]; ++G__34535__i;}
  xs = new cljs.core.IndexedSeq(G__34535__a,0,null);
} 
return G__34532__delegate.call(this,xs);};
G__34532.cljs$lang$maxFixedArity = 0;
G__34532.cljs$lang$applyTo = (function (arglist__34536){
var xs = cljs.core.seq(arglist__34536);
return G__34532__delegate(xs);
});
G__34532.cljs$core$IFn$_invoke$arity$variadic = G__34532__delegate;
return G__34532;
})()
:(function() { 
var G__34537__delegate = function (xs){
return null;
};
var G__34537 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__34538__i = 0, G__34538__a = new Array(arguments.length -  0);
while (G__34538__i < G__34538__a.length) {G__34538__a[G__34538__i] = arguments[G__34538__i + 0]; ++G__34538__i;}
  xs = new cljs.core.IndexedSeq(G__34538__a,0,null);
} 
return G__34537__delegate.call(this,xs);};
G__34537.cljs$lang$maxFixedArity = 0;
G__34537.cljs$lang$applyTo = (function (arglist__34541){
var xs = cljs.core.seq(arglist__34541);
return G__34537__delegate(xs);
});
G__34537.cljs$core$IFn$_invoke$arity$variadic = G__34537__delegate;
return G__34537;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34544 = arguments.length;
var i__5898__auto___34545 = (0);
while(true){
if((i__5898__auto___34545 < len__5897__auto___34544)){
args__5903__auto__.push((arguments[i__5898__auto___34545]));

var G__34546 = (i__5898__auto___34545 + (1));
i__5898__auto___34545 = G__34546;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.logp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.logp.cljs$lang$applyTo = (function (seq32933){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32933));
}));


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34549 = arguments.length;
var i__5898__auto___34550 = (0);
while(true){
if((i__5898__auto___34550 < len__5897__auto___34549)){
args__5903__auto__.push((arguments[i__5898__auto___34550]));

var G__34551 = (i__5898__auto___34550 + (1));
i__5898__auto___34550 = G__34551;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.sayp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.sayp.cljs$lang$applyTo = (function (seq32938){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32938));
}));


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34554 = arguments.length;
var i__5898__auto___34555 = (0);
while(true){
if((i__5898__auto___34555 < len__5897__auto___34554)){
args__5903__auto__.push((arguments[i__5898__auto___34555]));

var G__34556 = (i__5898__auto___34555 + (1));
i__5898__auto___34555 = G__34556;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,xs));
}));

(taoensso.encore.logf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.logf.cljs$lang$applyTo = (function (seq32950){
var G__32951 = cljs.core.first(seq32950);
var seq32950__$1 = cljs.core.next(seq32950);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32951,seq32950__$1);
}));


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34557 = arguments.length;
var i__5898__auto___34558 = (0);
while(true){
if((i__5898__auto___34558 < len__5897__auto___34557)){
args__5903__auto__.push((arguments[i__5898__auto___34558]));

var G__34559 = (i__5898__auto___34558 + (1));
i__5898__auto___34558 = G__34559;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(fmt,xs));
}));

(taoensso.encore.sayf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.sayf.cljs$lang$applyTo = (function (seq32957){
var G__32958 = cljs.core.first(seq32957);
var seq32957__$1 = cljs.core.next(seq32957);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32958,seq32957__$1);
}));

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__28441__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__28441__auto__)){
var js_win = b2__28441__auto__;
var b2__28441__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__28441__auto____$1)){
var loc = b2__28441__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *     be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref(taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = (((typeof FormData !== 'undefined'))?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = (((typeof File !== 'undefined'))?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
return goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(params)).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = (function (uri,params){
if(cljs.core.truth_(taoensso.encore.js_form_data_QMARK_(params))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_34565 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32992){if((e32992 instanceof Error)){
var e_34565 = e32992;
return e_34565;
} else {
throw e32992;

}
}})();
if((e_34565 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),4103,new cljs.core.Symbol(null,"map?","map?",-1780568534,null),params,e_34565,null);
}

if(cljs.core.truth_((function (){var and__5160__auto__ = (typeof FormData !== 'undefined');
if(and__5160__auto__){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__5160__auto__;
}
})())){
var form_data = (new FormData());
var seq__32994_34568 = cljs.core.seq(params);
var chunk__32995_34569 = null;
var count__32996_34570 = (0);
var i__32997_34571 = (0);
while(true){
if((i__32997_34571 < count__32996_34570)){
var vec__33005_34573 = chunk__32995_34569.cljs$core$IIndexed$_nth$arity$2(null,i__32997_34571);
var k_34574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33005_34573,(0),null);
var v_34575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33005_34573,(1),null);
form_data.append(cljs.core.name(k_34574),v_34575);


var G__34576 = seq__32994_34568;
var G__34577 = chunk__32995_34569;
var G__34578 = count__32996_34570;
var G__34579 = (i__32997_34571 + (1));
seq__32994_34568 = G__34576;
chunk__32995_34569 = G__34577;
count__32996_34570 = G__34578;
i__32997_34571 = G__34579;
continue;
} else {
var temp__5825__auto___34581 = cljs.core.seq(seq__32994_34568);
if(temp__5825__auto___34581){
var seq__32994_34582__$1 = temp__5825__auto___34581;
if(cljs.core.chunked_seq_QMARK_(seq__32994_34582__$1)){
var c__5694__auto___34583 = cljs.core.chunk_first(seq__32994_34582__$1);
var G__34584 = cljs.core.chunk_rest(seq__32994_34582__$1);
var G__34585 = c__5694__auto___34583;
var G__34586 = cljs.core.count(c__5694__auto___34583);
var G__34587 = (0);
seq__32994_34568 = G__34584;
chunk__32995_34569 = G__34585;
count__32996_34570 = G__34586;
i__32997_34571 = G__34587;
continue;
} else {
var vec__33019_34589 = cljs.core.first(seq__32994_34582__$1);
var k_34590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33019_34589,(0),null);
var v_34591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33019_34589,(1),null);
form_data.append(cljs.core.name(k_34590),v_34591);


var G__34593 = cljs.core.next(seq__32994_34582__$1);
var G__34594 = null;
var G__34595 = (0);
var G__34596 = (0);
seq__32994_34568 = G__34593;
chunk__32995_34569 = G__34594;
count__32996_34570 = G__34595;
i__32997_34571 = G__34596;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode(params)], null);
}
}
});
return (function (uri,method,params){
if(cljs.core.truth_((function (x){
var or__5162__auto__ = (x == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_)(x);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.js_form_data_QMARK_)(x);
}
}
})(params))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),4115,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"js-form-data?","js-form-data?",-1807235094,null)], null),params,null,null);
}

var G__33024 = method;
var G__33024__$1 = (((G__33024 instanceof cljs.core.Keyword))?G__33024.fqn:null);
switch (G__33024__$1) {
case "get":
return url_encode(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33024__$1))));

}
});
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *     {:method     :post
 *      :params     {:username "Rich Hickey" :type "Awesome"}
 *      :headers    {"Foo" "Bar"}
 *      :resp-type  :text
 *      :timeout-ms 7000
 *      :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *     }
 *     (fn async-callback-fn [resp-map]
 *       (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *         ;; ?status ; ∈ #{nil 200 404 ...}, non-nil iff server responded
 *         ;; ?error  ; ∈ #{nil <http-error-status-code> <exception> :timeout
 *                          :abort :http-error :exception :xhr-pool-depleted}
 *         (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__33035,callback_fn){
var map__33037 = p__33035;
var map__33037__$1 = cljs.core.__destructure_map(map__33037);
var opts = map__33037__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33037__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33037__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33037__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33037__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33037__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33037__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
if(cljs.core.truth_((function (x){
var or__5162__auto__ = (x == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_)(x);
}
})(timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),4147,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null)], null),timeout_ms,null,null);
}

var b2__28441__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__28441__auto__)){
var xhr = b2__28441__auto__;
try{var timeout_ms__$1 = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__33047 = method;
var G__33047__$1 = (((G__33047 instanceof cljs.core.Keyword))?G__33047.fqn:null);
switch (G__33047__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33047__$1))));

}
})();
var vec__33044 = taoensso.encore.coerce_xhr_params(uri,method,params);
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33044,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33044,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys((function (p1__33033_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__33033_SHARP_));
}),headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__28441__auto____$1 = new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__28441__auto____$1)){
var pf = b2__28441__auto____$1;
xhr.setProgressEventsEnabled(true);

return goog.events.listen(xhr,goog.net.EventType.PROGRESS,(function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__5160__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__5160__auto__;
}
})())?(loaded / total):null);
var G__33048 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null);
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(G__33048) : pf.call(null,G__33048));
}));
} else {
return null;
}
})();
var G__33049_34612 = xhr;
goog.events.listenOnce(G__33049_34612,goog.net.EventType.READY,(function (_){
return cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);
}));

goog.events.listenOnce(G__33049_34612,goog.net.EventType.COMPLETE,(function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__33050 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type)));
var match_QMARK_ = (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});
if(match_QMARK_("/edn")){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(match_QMARK_("/json")){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(match_QMARK_("/xml")){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
try{var G__33054 = resp_type__$1;
var G__33054__$1 = (((G__33054 instanceof cljs.core.Keyword))?G__33054.fqn:null);
switch (G__33054__$1) {
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33054__$1))));

}
}catch (e33053){var _e = e33053;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33050,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33050,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33050,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

var G__33055 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)]),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__33055) : callback_fn.call(null,G__33055));
}));


xhr.setTimeoutInterval((function (){var or__5162__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e33042){var e = e33042;
cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);

var G__33043_34626 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__33043_34626) : callback_fn.call(null,G__33043_34626));

return null;
}} else {
var G__33056_34627 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__33056_34627) : callback_fn.call(null,G__33056_34627));

return null;
}
});
/**
 * Based on https://goo.gl/fBqy6e
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),s),"*","%2A");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34633 = arguments.length;
var i__5898__auto___34634 = (0);
while(true){
if((i__5898__auto___34634 < len__5897__auto___34633)){
args__5903__auto__.push((arguments[i__5898__auto___34634]));

var G__34635 = (i__5898__auto___34634 + (1));
i__5898__auto___34634 = G__34635;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__33069){
var vec__33072 = p__33069;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33072,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
} else {
return null;
}
}));

(taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq33064){
var G__33065 = cljs.core.first(seq33064);
var seq33064__$1 = cljs.core.next(seq33064);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33065,seq33064__$1);
}));

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode(taoensso.encore.as_qname(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode((function (){var or__5162__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
}
})())));
});
var join = (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__5649__auto__ = (function taoensso$encore$format_query_string_$_iter__33088(s__33089){
return (new cljs.core.LazySeq(null,(function (){
var s__33089__$1 = s__33089;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__33089__$1);
if(temp__5825__auto__){
var s__33089__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33089__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__33089__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__33091 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__33090 = (0);
while(true){
if((i__33090 < size__5648__auto__)){
var vec__33097 = cljs.core._nth(c__5647__auto__,i__33090);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__33091,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5162__auto__ = cljs.core.seq(v);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__34638 = (i__33090 + (1));
i__33090 = G__34638;
continue;
} else {
var G__34639 = (i__33090 + (1));
i__33090 = G__34639;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33091),taoensso$encore$format_query_string_$_iter__33088(cljs.core.chunk_rest(s__33089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33091),null);
}
} else {
var vec__33109 = cljs.core.first(s__33089__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33109,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33109,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5162__auto__ = cljs.core.seq(v);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__33088(cljs.core.rest(s__33089__$2)));
} else {
var G__34643 = cljs.core.rest(s__33089__$2);
s__33089__$1 = G__34643;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__28441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__28441__auto__)){
var cur = b2__28441__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34649 = arguments.length;
var i__5898__auto___34651 = (0);
while(true){
if((i__5898__auto___34651 < len__5897__auto___34649)){
args__5903__auto__.push((arguments[i__5898__auto___34651]));

var G__34652 = (i__5898__auto___34651 + (1));
i__5898__auto___34651 = G__34652;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__33119){
var vec__33120 = p__33119;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33120,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33120,(1),null);
if(((clojure.string.blank_QMARK_(s)) || ((!(taoensso.encore.str_contains_QMARK_(s,"=")))))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,param){
var b2__28441__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__28441__auto__)){
var vec__33124 = b2__28441__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33124,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
}));

(taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq33116){
var G__33117 = cljs.core.first(seq33116);
var seq33116__$1 = cljs.core.next(seq33116);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33117,seq33116__$1);
}));

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__33130 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__28441__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__28441__auto__)){
var qstr = b2__28441__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr));
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
var G__34658__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"[encore/stubfn] Attempted to call uninitialized stub fn ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+")"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stub","stub",1339145807),name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__34658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34660__i = 0, G__34660__a = new Array(arguments.length -  0);
while (G__34660__i < G__34660__a.length) {G__34660__a[G__34660__i] = arguments[G__34660__i + 0]; ++G__34660__i;}
  args = new cljs.core.IndexedSeq(G__34660__a,0,null);
} 
return G__34658__delegate.call(this,args);};
G__34658.cljs$lang$maxFixedArity = 0;
G__34658.cljs$lang$applyTo = (function (arglist__34661){
var args = cljs.core.seq(arglist__34661);
return G__34658__delegate(args);
});
G__34658.cljs$core$IFn$_invoke$arity$variadic = G__34658__delegate;
return G__34658;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/stubfn] Unexpected unstub type (expected fn)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unstub","unstub",-1300593509),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),f,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(f)], null)], null));
}
});
var always_34664 = (function taoensso$encore$always(_QMARK_in_str){
return true;
});
var never_34666 = (function taoensso$encore$never(_QMARK_in_str){
return false;
});
var wild_str__GT__QMARK_re_pattern_34667 = (function (s){
if(taoensso.encore.str_contains_QMARK_(s,"*")){
return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace((""+"^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+"$"),".","\\."),"*","(.*)"));
} else {
return null;
}
});
var compile_34668 = (function taoensso$encore$compile(spec,cache_QMARK_){
while(true){
if(cljs.core.truth_((function (){var fexpr__33164 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,new cljs.core.Keyword(null,"any","any",1705907423),null], null), null);
return (fexpr__33164.cljs$core$IFn$_invoke$arity$1 ? fexpr__33164.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__33164.call(null,spec));
})())){
return always_34664;
} else {
if(cljs.core.truth_((function (){var fexpr__33166 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"none","none",1333468478)]);
return (fexpr__33166.cljs$core$IFn$_invoke$arity$1 ? fexpr__33166.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__33166.call(null,spec));
})())){
return never_34666;
} else {
if(taoensso.encore.re_pattern_QMARK_(spec)){
return ((function (spec,cache_QMARK_,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667){
return (function (in_str){
return cljs.core.re_find(spec,in_str);
});
;})(spec,cache_QMARK_,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667))
} else {
if(typeof spec === 'string'){
var b2__28441__auto__ = wild_str__GT__QMARK_re_pattern_34667(spec);
if(cljs.core.truth_(b2__28441__auto__)){
var re_pattern = b2__28441__auto__;
var G__34675 = re_pattern;
var G__34676 = cache_QMARK_;
spec = G__34675;
cache_QMARK_ = G__34676;
continue;
} else {
return ((function (spec,cache_QMARK_,b2__28441__auto__,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667){
return (function (in_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_str,spec);
});
;})(spec,cache_QMARK_,b2__28441__auto__,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667))
}
} else {
if(((cljs.core.vector_QMARK_(spec)) || (cljs.core.set_QMARK_(spec)))){
if(cljs.core.truth_((function (){var fexpr__33169 = cljs.core.set(spec);
return (fexpr__33169.cljs$core$IFn$_invoke$arity$1 ? fexpr__33169.cljs$core$IFn$_invoke$arity$1("*") : fexpr__33169.call(null,"*"));
})())){
return always_34664;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(spec),(1))){
var G__34678 = cljs.core.first(spec);
var G__34679 = cache_QMARK_;
spec = G__34678;
cache_QMARK_ = G__34679;
continue;
} else {
var vec__33170 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (spec,cache_QMARK_,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667){
return (function (p__33178,spec__$1){
var vec__33179 = p__33178;
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33179,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33179,(1),null);
var b2__28441__auto__ = ((taoensso.encore.re_pattern_QMARK_(spec__$1))?spec__$1:wild_str__GT__QMARK_re_pattern_34667(spec__$1));
if(cljs.core.truth_(b2__28441__auto__)){
var re_pattern = b2__28441__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fixed_strs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(re_patterns,re_pattern)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fixed_strs,spec__$1),re_patterns], null);
}
});})(spec,cache_QMARK_,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),spec);
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33170,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33170,(1),null);
var fx_match = cljs.core.not_empty(fixed_strs);
var re_match = (function (){var b2__28441__auto__ = cljs.core.not_empty(re_patterns);
if(cljs.core.truth_(b2__28441__auto__)){
var re_patterns__$1 = b2__28441__auto__;
var f = ((function (spec,cache_QMARK_,re_patterns__$1,b2__28441__auto__,vec__33170,fixed_strs,re_patterns,fx_match,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667){
return (function (in_str){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(((function (spec,cache_QMARK_,re_patterns__$1,b2__28441__auto__,vec__33170,fixed_strs,re_patterns,fx_match,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667){
return (function (p1__33155_SHARP_){
return cljs.core.re_find(p1__33155_SHARP_,in_str);
});})(spec,cache_QMARK_,re_patterns__$1,b2__28441__auto__,vec__33170,fixed_strs,re_patterns,fx_match,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667))
,re_patterns__$1);
});})(spec,cache_QMARK_,re_patterns__$1,b2__28441__auto__,vec__33170,fixed_strs,re_patterns,fx_match,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667))
;
if(cljs.core.truth_(cache_QMARK_)){
return taoensso.encore.fmemoize(f);
} else {
return f;
}
} else {
return null;
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = fx_match;
if(cljs.core.truth_(and__5160__auto__)){
return re_match;
} else {
return and__5160__auto__;
}
})())){
return ((function (spec,cache_QMARK_,vec__33170,fixed_strs,re_patterns,fx_match,re_match,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667){
return (function (in_str){
var or__5162__auto__ = (fx_match.cljs$core$IFn$_invoke$arity$1 ? fx_match.cljs$core$IFn$_invoke$arity$1(in_str) : fx_match.call(null,in_str));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (re_match.cljs$core$IFn$_invoke$arity$1 ? re_match.cljs$core$IFn$_invoke$arity$1(in_str) : re_match.call(null,in_str));
}
});
;})(spec,cache_QMARK_,vec__33170,fixed_strs,re_patterns,fx_match,re_match,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667))
} else {
if(cljs.core.truth_(fx_match)){
return fx_match;
} else {
if(cljs.core.truth_(re_match)){
return re_match;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/cond!] No matching clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[enc/compile-str-filter] Unexpected spec type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),spec,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(spec)], null)], null));
}
}
}
}
}
break;
}
});
/**
 * Compiles given spec and returns a fast (fn conform? [?in-str]).
 * 
 *  Spec may be:
 *    - A regex pattern. Will conform on match.
 *    - A string, in which any "*"s will act as wildcards (#".*").
 *      Will conform on match.
 * 
 *    - A vector or set of regex patterns or strings.
 *      Will conform on ANY match.
 *      If you need literal "*"s, use an explicit regex pattern instead.
 * 
 *    - {:allow <allow-spec> :deny <deny-spec> :cache? <bool>}.
 *      Will conform iff allow-spec matches AND deny-spec does NOT.
 * 
 *  Input may be: namespace strings, class names, etc.
 *  Useful as string allowlist (whitelist) and/or denylist (blacklist).
 * 
 *  Spec examples:
 *    #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *    {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}
 */
taoensso.encore.compile_str_filter = (function taoensso$encore$compile_str_filter(spec){
while(true){
if(cljs.core.map_QMARK_(spec)){
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"cache?","cache?",-1601953949));
var allow_spec = (function (){var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"whitelist","whitelist",-979294437));
}
})();
var deny_spec = (function (){var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"deny","deny",1589338523));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
}
})();
var allow = (function (){var b2__28441__auto__ = allow_spec;
if(cljs.core.truth_(b2__28441__auto__)){
var as = b2__28441__auto__;
return compile_34668(as,cache_QMARK_);
} else {
return null;
}
})();
var deny = (function (){var b2__28441__auto__ = deny_spec;
if(cljs.core.truth_(b2__28441__auto__)){
var ds = b2__28441__auto__;
return compile_34668(ds,cache_QMARK_);
} else {
return null;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deny,always_34664)){
return never_34666;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,never_34666)){
return never_34666;
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = allow;
if(cljs.core.truth_(and__5160__auto__)){
return deny;
} else {
return and__5160__auto__;
}
})())){
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667,compile_34668){
return (function (_QMARK_in_str){
var in_str = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_in_str));
if(cljs.core.truth_((allow.cljs$core$IFn$_invoke$arity$1 ? allow.cljs$core$IFn$_invoke$arity$1(in_str) : allow.call(null,in_str)))){
if(cljs.core.truth_((deny.cljs$core$IFn$_invoke$arity$1 ? deny.cljs$core$IFn$_invoke$arity$1(in_str) : deny.call(null,in_str)))){
return false;
} else {
return true;
}
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667,compile_34668))
} else {
if(cljs.core.truth_(allow)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,always_34664)){
return always_34664;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667,compile_34668){
return (function (_QMARK_in_str){
if(cljs.core.truth_((function (){var G__33195 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_in_str));
return (allow.cljs$core$IFn$_invoke$arity$1 ? allow.cljs$core$IFn$_invoke$arity$1(G__33195) : allow.call(null,G__33195));
})())){
return true;
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667,compile_34668))
}
} else {
if(cljs.core.truth_(deny)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deny,never_34666)){
return always_34664;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667,compile_34668){
return (function (_QMARK_in_str){
if(cljs.core.truth_((function (){var G__33198 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_in_str));
return (deny.cljs$core$IFn$_invoke$arity$1 ? deny.cljs$core$IFn$_invoke$arity$1(G__33198) : deny.call(null,G__33198));
})())){
return false;
} else {
return true;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_34664,never_34666,wild_str__GT__QMARK_re_pattern_34667,compile_34668))
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/compile-str-filter] `allow-spec` and `deny-spec` cannot both be nil",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow-spec","allow-spec",448749872),allow_spec,new cljs.core.Keyword(null,"deny-spec","deny-spec",-1074984268),deny_spec], null));
}
}
}
}
}
} else {
var G__34694 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),spec,new cljs.core.Keyword(null,"deny","deny",1589338523),null], null);
spec = G__34694;
continue;
}
break;
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

var taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_34695 = (function (_,msecs,f){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__5520__auto__.call(null,_,msecs,f));
} else {
var m__5518__auto__ = (taoensso.encore._schedule_timeout["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__5518__auto__.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
});
taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
return taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_34695(_,msecs,f);
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
}));

(taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true);

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl");

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"taoensso.encore/DefaultTimeoutImpl");
}));

/**
 * Positional factory function for taoensso.encore/DefaultTimeoutImpl.
 */
taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.default_timeout_impl_ !== 'undefined')){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = ({});

taoensso.encore._tout_cancelled = ({});

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_pending) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending)))){
return new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352);
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_cancelled) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled)))){
return new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279);
} else {
return cljs.core.deref(result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

var taoensso$encore$ITimeoutFuture$tf_state$dyn_34702 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (taoensso.encore.tf_state["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
});
/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_state$dyn_34702(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_poll$dyn_34703 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (taoensso.encore.tf_poll["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
});
/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_poll$dyn_34703(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_34704 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (taoensso.encore.tf_done_QMARK_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
});
/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_34704(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_34705 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (taoensso.encore.tf_pending_QMARK_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
});
/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_34705(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_34707 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
});
/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_34707(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_34709 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (taoensso.encore.tf_cancel_BANG_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
});
/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_34709(_);
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result(cljs.core.deref(self__.result__));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var G__33223 = cljs.core.deref(self__.result__);
var G__33224 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__33223,G__33224) : taoensso.encore.kw_identical_QMARK_.call(null,G__33223,G__33224));
})());
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__33225 = cljs.core.deref(self__.result__);
var G__33226 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__33225,G__33226) : taoensso.encore.kw_identical_QMARK_.call(null,G__33225,G__33226));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__33227 = cljs.core.deref(self__.result__);
var G__33228 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__33227,G__33228) : taoensso.encore.kw_identical_QMARK_.call(null,G__33227,G__33228));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null);
}));

(taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
}));

(taoensso.encore.TimeoutFuture.cljs$lang$type = true);

(taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture");

(taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"taoensso.encore/TimeoutFuture");
}));

/**
 * Positional factory function for taoensso.encore/TimeoutFuture.
 */
taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__33232 = arguments.length;
switch (G__33232) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
}));

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.encore._tout_pending);
var cas_f = (function (){
var result_ = (new cljs.core.Delay((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),null));
if(cljs.core.compare_and_set_BANG_(result__,taoensso.encore._tout_pending,result_)){
return cljs.core.deref(result_);
} else {
return null;
}
});
var impl_34723 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_34723,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
}));

(taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3);

taoensso.encore.regular_num_QMARK_ = taoensso.encore.finite_num_QMARK_;

taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.memoize_STAR_ = taoensso.encore.memoize;

taoensso.encore.memoize_ = taoensso.encore.memoize;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.idx_fn = taoensso.encore.counter;

taoensso.encore.vec_STAR_ = taoensso.encore.ensure_vec;

taoensso.encore.set_STAR_ = taoensso.encore.ensure_set;

taoensso.encore.have_transducers_QMARK_ = true;

taoensso.encore.pval_QMARK_ = taoensso.encore.pnum_QMARK_;

taoensso.encore.as__QMARK_pval = taoensso.encore.as__QMARK_pnum;

taoensso.encore.as_pval = taoensso.encore.as_pnum;

/**
 * Prefer `get-substr-by-idx`
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__33254 = arguments.length;
switch (G__33254) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
}));

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
}));

(taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `get-substr-by-len`
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__33260 = arguments.length;
switch (G__33260) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
}));

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
}));

(taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3);


taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

var nolist_QMARK__34732 = (function (p1__33241_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]),p1__33241_SHARP_);
});
/**
 * Deprecated, prefer `compile-str-filter` instead.
 */
taoensso.encore.compile_ns_filter = (function taoensso$encore$compile_ns_filter(var_args){
var G__33262 = arguments.length;
switch (G__33262) {
case 1:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1 = (function (ns_pattern){
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2(ns_pattern,null);
}));

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2 = (function (whitelist,blacklist){
if(((nolist_QMARK__34732(whitelist)) && (nolist_QMARK__34732(blacklist)))){
return (function (_){
return true;
});
} else {
return taoensso.encore.compile_str_filter(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),whitelist,new cljs.core.Keyword(null,"deny","deny",1589338523),blacklist], null));
}
}));

(taoensso.encore.compile_ns_filter.cljs$lang$maxFixedArity = 2);


taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34734 = arguments.length;
var i__5898__auto___34735 = (0);
while(true){
if((i__5898__auto___34735 < len__5897__auto___34734)){
args__5903__auto__.push((arguments[i__5898__auto___34735]));

var G__34736 = (i__5898__auto___34735 + (1));
i__5898__auto___34735 = G__34736;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__33267){
var vec__33268 = p__33267;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33268,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33268,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__5162__auto__ = type;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
}));

(taoensso.encore.round.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.round.cljs$lang$applyTo = (function (seq33265){
var G__33266 = cljs.core.first(seq33265);
var seq33265__$1 = cljs.core.next(seq33265);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33266,seq33265__$1);
}));


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__33272 = arguments.length;
switch (G__33272) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}));

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
}));

(taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3);


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34744 = arguments.length;
var i__5898__auto___34745 = (0);
while(true){
if((i__5898__auto___34745 < len__5897__auto___34744)){
args__5903__auto__.push((arguments[i__5898__auto___34745]));

var G__34746 = (i__5898__auto___34745 + (1));
i__5898__auto___34745 = G__34746;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
}));

(taoensso.encore.join_once.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.join_once.cljs$lang$applyTo = (function (seq33275){
var G__33276 = cljs.core.first(seq33275);
var seq33275__$1 = cljs.core.next(seq33275);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33276,seq33275__$1);
}));


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ensure_set(x),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((function (p__33292){
var vec__33293 = p__33292;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33293,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33293,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33293,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter.cljs$core$IFn$_invoke$arity$1(specs);
return (function() { 
var G__34749__delegate = function (args){
var b2__28441__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__28441__auto__)){
var vec__33312 = b2__28441__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33312,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33312,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__34749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34750__i = 0, G__34750__a = new Array(arguments.length -  0);
while (G__34750__i < G__34750__a.length) {G__34750__a[G__34750__i] = arguments[G__34750__i + 0]; ++G__34750__i;}
  args = new cljs.core.IndexedSeq(G__34750__a,0,null);
} 
return G__34749__delegate.call(this,args);};
G__34749.cljs$lang$maxFixedArity = 0;
G__34749.cljs$lang$applyTo = (function (arglist__34751){
var args = cljs.core.seq(arglist__34751);
return G__34749__delegate(args);
});
G__34749.cljs$core$IFn$_invoke$arity$variadic = G__34749__delegate;
return G__34749;
})()
;
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return (function() { 
var G__34752__delegate = function (args){
var b2__28441__auto__ = rl();
if(cljs.core.truth_(b2__28441__auto__)){
var backoff = b2__28441__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__34752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34753__i = 0, G__34753__a = new Array(arguments.length -  0);
while (G__34753__i < G__34753__a.length) {G__34753__a[G__34753__i] = arguments[G__34753__i + 0]; ++G__34753__i;}
  args = new cljs.core.IndexedSeq(G__34753__a,0,null);
} 
return G__34752__delegate.call(this,args);};
G__34752.cljs$lang$maxFixedArity = 0;
G__34752.cljs$lang$applyTo = (function (arglist__34754){
var args = cljs.core.seq(arglist__34754);
return G__34752__delegate(args);
});
G__34752.cljs$core$IFn$_invoke$arity$variadic = G__34752__delegate;
return G__34752;
})()
;
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return (function() { 
var G__34755__delegate = function (args){
var b2__28441__auto__ = rl();
if(cljs.core.truth_(b2__28441__auto__)){
var backoff_ms = b2__28441__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__34755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34756__i = 0, G__34756__a = new Array(arguments.length -  0);
while (G__34756__i < G__34756__a.length) {G__34756__a[G__34756__i] = arguments[G__34756__i + 0]; ++G__34756__i;}
  args = new cljs.core.IndexedSeq(G__34756__a,0,null);
} 
return G__34755__delegate.call(this,args);};
G__34755.cljs$lang$maxFixedArity = 0;
G__34755.cljs$lang$applyTo = (function (arglist__34757){
var args = cljs.core.seq(arglist__34757);
return G__34755__delegate(args);
});
G__34755.cljs$core$IFn$_invoke$arity$variadic = G__34755__delegate;
return G__34755;
})()
;
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34758 = arguments.length;
var i__5898__auto___34759 = (0);
while(true){
if((i__5898__auto___34759 < len__5897__auto___34758)){
args__5903__auto__.push((arguments[i__5898__auto___34759]));

var G__34760 = (i__5898__auto___34759 + (1));
i__5898__auto___34759 = G__34760;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__33345){
var vec__33346 = p__33345;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33346,(0),null);
var b2__28441__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__28441__auto__)){
var js_win = b2__28441__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = nattempt;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
}));

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq33337){
var G__33338 = cljs.core.first(seq33337);
var seq33337__$1 = cljs.core.next(seq33337);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33338,seq33337__$1);
}));


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined')){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34761 = arguments.length;
var i__5898__auto___34762 = (0);
while(true){
if((i__5898__auto___34762 < len__5897__auto___34761)){
args__5903__auto__.push((arguments[i__5898__auto___34762]));

var G__34763 = (i__5898__auto___34762 + (1));
i__5898__auto___34762 = G__34763;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.tracef.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.tracef.cljs$lang$applyTo = (function (seq33374){
var G__33375 = cljs.core.first(seq33374);
var seq33374__$1 = cljs.core.next(seq33374);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33375,seq33374__$1);
}));


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34764 = arguments.length;
var i__5898__auto___34765 = (0);
while(true){
if((i__5898__auto___34765 < len__5897__auto___34764)){
args__5903__auto__.push((arguments[i__5898__auto___34765]));

var G__34766 = (i__5898__auto___34765 + (1));
i__5898__auto___34765 = G__34766;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.debugf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.debugf.cljs$lang$applyTo = (function (seq33384){
var G__33385 = cljs.core.first(seq33384);
var seq33384__$1 = cljs.core.next(seq33384);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33385,seq33384__$1);
}));


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34767 = arguments.length;
var i__5898__auto___34768 = (0);
while(true){
if((i__5898__auto___34768 < len__5897__auto___34767)){
args__5903__auto__.push((arguments[i__5898__auto___34768]));

var G__34769 = (i__5898__auto___34768 + (1));
i__5898__auto___34768 = G__34769;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.infof.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.infof.cljs$lang$applyTo = (function (seq33408){
var G__33413 = cljs.core.first(seq33408);
var seq33408__$1 = cljs.core.next(seq33408);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33413,seq33408__$1);
}));


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34770 = arguments.length;
var i__5898__auto___34771 = (0);
while(true){
if((i__5898__auto___34771 < len__5897__auto___34770)){
args__5903__auto__.push((arguments[i__5898__auto___34771]));

var G__34772 = (i__5898__auto___34771 + (1));
i__5898__auto___34771 = G__34772;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,(""+"WARN: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)),xs);
} else {
return null;
}
}));

(taoensso.encore.warnf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.warnf.cljs$lang$applyTo = (function (seq33425){
var G__33426 = cljs.core.first(seq33425);
var seq33425__$1 = cljs.core.next(seq33425);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33426,seq33425__$1);
}));


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34773 = arguments.length;
var i__5898__auto___34774 = (0);
while(true){
if((i__5898__auto___34774 < len__5897__auto___34773)){
args__5903__auto__.push((arguments[i__5898__auto___34774]));

var G__34775 = (i__5898__auto___34774 + (1));
i__5898__auto___34774 = G__34775;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,(""+"ERROR: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)),xs);
} else {
return null;
}
}));

(taoensso.encore.errorf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.errorf.cljs$lang$applyTo = (function (seq33434){
var G__33435 = cljs.core.first(seq33434);
var seq33434__$1 = cljs.core.next(seq33434);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33435,seq33434__$1);
}));


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34776 = arguments.length;
var i__5898__auto___34777 = (0);
while(true){
if((i__5898__auto___34777 < len__5897__auto___34776)){
args__5903__auto__.push((arguments[i__5898__auto___34777]));

var G__34778 = (i__5898__auto___34777 + (1));
i__5898__auto___34777 = G__34778;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,(""+"FATAL: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)),xs);
} else {
return null;
}
}));

(taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq33446){
var G__33447 = cljs.core.first(seq33446);
var seq33446__$1 = cljs.core.next(seq33446);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33447,seq33446__$1);
}));


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34779 = arguments.length;
var i__5898__auto___34780 = (0);
while(true){
if((i__5898__auto___34780 < len__5897__auto___34779)){
args__5903__auto__.push((arguments[i__5898__auto___34780]));

var G__34781 = (i__5898__auto___34780 + (1));
i__5898__auto___34780 = G__34781;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.reportf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.reportf.cljs$lang$applyTo = (function (seq33461){
var G__33462 = cljs.core.first(seq33461);
var seq33461__$1 = cljs.core.next(seq33461);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33462,seq33461__$1);
}));


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34782 = arguments.length;
var i__5898__auto___34783 = (0);
while(true){
if((i__5898__auto___34783 < len__5897__auto___34782)){
args__5903__auto__.push((arguments[i__5898__auto___34783]));

var G__34784 = (i__5898__auto___34783 + (1));
i__5898__auto___34783 = G__34784;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__33477){
var vec__33478 = p__33477;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33478,(0),null);
var comparator = (function (){var or__5162__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__33244_SHARP_,p2__33245_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__33244_SHARP_,p2__33245_SHARP_) : comparator.call(null,p1__33244_SHARP_,p2__33245_SHARP_)) > (0))){
return p2__33245_SHARP_;
} else {
return p1__33244_SHARP_;
}
}),coll);
}));

(taoensso.encore.greatest.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.greatest.cljs$lang$applyTo = (function (seq33469){
var G__33473 = cljs.core.first(seq33469);
var seq33469__$1 = cljs.core.next(seq33469);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33473,seq33469__$1);
}));


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34789 = arguments.length;
var i__5898__auto___34790 = (0);
while(true){
if((i__5898__auto___34790 < len__5897__auto___34789)){
args__5903__auto__.push((arguments[i__5898__auto___34790]));

var G__34791 = (i__5898__auto___34790 + (1));
i__5898__auto___34790 = G__34791;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__33489){
var vec__33490 = p__33489;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33490,(0),null);
var comparator = (function (){var or__5162__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__33246_SHARP_,p2__33247_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__33246_SHARP_,p2__33247_SHARP_) : comparator.call(null,p1__33246_SHARP_,p2__33247_SHARP_)) < (0))){
return p2__33247_SHARP_;
} else {
return p1__33246_SHARP_;
}
}),coll);
}));

(taoensso.encore.least.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.least.cljs$lang$applyTo = (function (seq33483){
var G__33484 = cljs.core.first(seq33483);
var seq33483__$1 = cljs.core.next(seq33483);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33484,seq33483__$1);
}));


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__5162__auto__ = x;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__33499,seen__$1){
while(true){
var vec__33500 = p__33499;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33500,(0),null);
var xs__$1 = vec__33500;
var b2__28441__auto__ = cljs.core.seq(xs__$1);
if(b2__28441__auto__){
var s = b2__28441__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__34796 = cljs.core.rest(s);
var G__34797 = seen__$1;
p__33499 = G__34796;
seen__$1 = G__34797;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__33506 = arguments.length;
switch (G__33506) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
}));

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__33513,in$){
var vec__33514 = p__33513;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33514,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33514,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
}));

(taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2);


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)) : taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34803 = arguments.length;
var i__5898__auto___34804 = (0);
while(true){
if((i__5898__auto___34804 < len__5897__auto___34803)){
args__5903__auto__.push((arguments[i__5898__auto___34804]));

var G__34805 = (i__5898__auto___34804 + (1));
i__5898__auto___34804 = G__34805;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__33520){
var vec__33521 = p__33520;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)) : taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs((function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
}));

(taoensso.encore.as_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.as_map.cljs$lang$applyTo = (function (seq33518){
var G__33519 = cljs.core.first(seq33518);
var seq33518__$1 = cljs.core.next(seq33518);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33519,seq33518__$1);
}));


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n)));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34812 = arguments.length;
var i__5898__auto___34813 = (0);
while(true){
if((i__5898__auto___34813 < len__5897__auto___34812)){
args__5903__auto__.push((arguments[i__5898__auto___34813]));

var G__34814 = (i__5898__auto___34813 + (1));
i__5898__auto___34813 = G__34814;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref(taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
})));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
}));

(taoensso.encore.memoized.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.memoized.cljs$lang$applyTo = (function (seq33535){
var G__33536 = cljs.core.first(seq33535);
var seq33535__$1 = cljs.core.next(seq33535);
var G__33537 = cljs.core.first(seq33535__$1);
var seq33535__$2 = cljs.core.next(seq33535__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33536,G__33537,seq33535__$2);
}));


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(signed_idx,max_idx);
} else {
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(signed_idx + max_idx));
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34823 = arguments.length;
var i__5898__auto___34824 = (0);
while(true){
if((i__5898__auto___34824 < len__5897__auto___34823)){
args__5903__auto__.push((arguments[i__5898__auto___34824]));

var G__34825 = (i__5898__auto___34824 + (1));
i__5898__auto___34824 = G__34825;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__33556){
var map__33557 = p__33556;
var map__33557__$1 = cljs.core.__destructure_map(map__33557);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33557__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33557__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__29044__auto__ = (start_idx_STAR_ + max_len);
var n2__29045__auto__ = xlen;
if((n1__29044__auto__ > n2__29045__auto__)){
return n2__29045__auto__;
} else {
return n1__29044__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
}));

(taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq33550){
var G__33551 = cljs.core.first(seq33550);
var seq33550__$1 = cljs.core.next(seq33550);
var G__33552 = cljs.core.first(seq33550__$1);
var seq33550__$2 = cljs.core.next(seq33550__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33551,G__33552,seq33550__$2);
}));


/**
 * Deprecated, prefer `get-substr-by-idx` or `get-substr-by-len`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34827 = arguments.length;
var i__5898__auto___34828 = (0);
while(true){
if((i__5898__auto___34828 < len__5897__auto___34827)){
args__5903__auto__.push((arguments[i__5898__auto___34828]));

var G__34829 = (i__5898__auto___34828 + (1));
i__5898__auto___34828 = G__34829;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__33564){
var vec__33566 = p__33564;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566,(0),null);
var vec__33571 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33571,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33571,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.substr.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.substr.cljs$lang$applyTo = (function (seq33560){
var G__33561 = cljs.core.first(seq33560);
var seq33560__$1 = cljs.core.next(seq33560);
var G__33562 = cljs.core.first(seq33560__$1);
var seq33560__$2 = cljs.core.next(seq33560__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33561,G__33562,seq33560__$2);
}));



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34834 = arguments.length;
var i__5898__auto___34835 = (0);
while(true){
if((i__5898__auto___34835 < len__5897__auto___34834)){
args__5903__auto__.push((arguments[i__5898__auto___34835]));

var G__34836 = (i__5898__auto___34835 + (1));
i__5898__auto___34835 = G__34836;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__33583){
var vec__33584 = p__33583;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33584,(0),null);
var vec__33587 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33587,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33587,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq33574){
var G__33575 = cljs.core.first(seq33574);
var seq33574__$1 = cljs.core.next(seq33574);
var G__33576 = cljs.core.first(seq33574__$1);
var seq33574__$2 = cljs.core.next(seq33574__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33575,G__33576,seq33574__$2);
}));


taoensso.encore.sentinel = ({});

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(taoensso.encore.sentinel_QMARK_(x)){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(taoensso.encore.singleton_QMARK_(coll)){
var vec__33601 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33601,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if(((ks__$1) && (vs__$1))){
var G__34842 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__34843 = cljs.core.next(ks__$1);
var G__34844 = cljs.core.next(vs__$1);
m = G__34842;
ks__$1 = G__34843;
vs__$1 = G__34844;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34846 = arguments.length;
var i__5898__auto___34847 = (0);
while(true){
if((i__5898__auto___34847 < len__5897__auto___34846)){
args__5903__auto__.push((arguments[i__5898__auto___34847]));

var G__34848 = (i__5898__auto___34847 + (1));
i__5898__auto___34847 = G__34848;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__33627 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33627,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33627,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33627,(2),null);
var f = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"reset","reset",-800929946)) : taoensso.encore.kw_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"reset","reset",-800929946))))?(function (_){
return valf;
}):valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
}));

(taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq33616){
var G__33617 = cljs.core.first(seq33616);
var seq33616__$1 = cljs.core.next(seq33616);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33617,seq33616__$1);
}));


var return_34849 = (function (m0,v0,m1,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Deprecated, prefer `swap-in!` with `swapped` return value.
 */
taoensso.encore.swap_in_BANG__STAR_ = (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__33637 = arguments.length;
switch (G__33637) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_34849,atom_,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_34849,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_34849,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4);


/**
 * Deprecated, prefer `swap-val!` with `swapped` return value.
 */
taoensso.encore.swap_val_BANG__STAR_ = (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__33646 = arguments.length;
switch (G__33646) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_34849,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_34849,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4);


taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

//# sourceMappingURL=taoensso.encore.js.map
