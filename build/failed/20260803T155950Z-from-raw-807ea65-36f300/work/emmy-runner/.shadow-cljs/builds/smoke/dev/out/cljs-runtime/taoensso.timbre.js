goog.provide('taoensso.timbre');
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(43),(0)], null));
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36495 = arguments.length;
var i__5898__auto___36496 = (0);
while(true){
if((i__5898__auto___36496 < len__5897__auto___36495)){
args__5903__auto__.push((arguments[i__5898__auto___36496]));

var G__36500 = (i__5898__auto___36496 + (1));
i__5898__auto___36496 = G__36500;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,taoensso.timbre._STAR_config_STAR_,args));
}));

(taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq36129){
var G__36130 = cljs.core.first(seq36129);
var seq36129__$1 = cljs.core.next(seq36129);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36130,seq36129__$1);
}));

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(config){
return taoensso.timbre.swap_config_BANG_((function (_old){
return config;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(config){
return taoensso.timbre.swap_config_BANG_((function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old,config], 0));
}));
});
var err_36504 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_36505 = (function (p1__36139_SHARP_){
var G__36140 = p1__36139_SHARP_;
var G__36140__$1 = (((G__36140 instanceof cljs.core.Keyword))?G__36140.fqn:null);
switch (G__36140__$1) {
case "trace":
return (0);

break;
case "debug":
return (1);

break;
case "info":
return (2);

break;
case "warn":
return (3);

break;
case "error":
return (4);

break;
case "fatal":
return (5);

break;
case "report":
return (6);

break;
default:
return null;

}
});
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_(level__GT_int_36505(x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_36505(x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_36504,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__5162__auto__ = level__GT_int_36505(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_36504,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});
var valid_level__GT_int_36513 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((valid_level__GT_int_36513.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_36513.cljs$core$IFn$_invoke$arity$1(x) : valid_level__GT_int_36513.call(null,x)) >= (valid_level__GT_int_36513.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_36513.cljs$core$IFn$_invoke$arity$1(y) : valid_level__GT_int_36513.call(null,y)));
});
var fn_QMARK__36514 = cljs.core.fn_QMARK_;
var compile_36515 = taoensso.encore.fmemoize((function (x){
return taoensso.encore.compile_str_filter(x);
}));
var conform_QMARK__STAR__36516 = taoensso.encore.fmemoize((function (x,ns){
var fexpr__36153 = compile_36515(x);
return (fexpr__36153.cljs$core$IFn$_invoke$arity$1 ? fexpr__36153.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__36153.call(null,ns));
}));
var conform_QMARK__36517 = (function (ns_filter,ns){
if(cljs.core.truth_((fn_QMARK__36514.cljs$core$IFn$_invoke$arity$1 ? fn_QMARK__36514.cljs$core$IFn$_invoke$arity$1(ns_filter) : fn_QMARK__36514.call(null,ns_filter)))){
return (ns_filter.cljs$core$IFn$_invoke$arity$1 ? ns_filter.cljs$core$IFn$_invoke$arity$1(ns) : ns_filter.call(null,ns));
} else {
return conform_QMARK__STAR__36516(ns_filter,ns);
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__36517(ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize((function (specs,ns){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((function (p__36157){
var vec__36158 = p__36157;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36158,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36158,(1),null);
if(cljs.core.truth_(conform_QMARK__STAR__36516(ns_pattern,ns))){
return taoensso.timbre.valid_level(min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_36519 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_36520 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
var G__36165 = (function (){var or__5162__auto__ = ((cljs.core.vector_QMARK_(x))?ns__GT__QMARK_min_level_36520(x,ns):x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
})();
return (valid_level_36519.cljs$core$IFn$_invoke$arity$1 ? valid_level_36519.cljs$core$IFn$_invoke$arity$1(G__36165) : valid_level_36519.call(null,G__36165));
});
var leglist_36521 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_((function (){var fexpr__36170 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]);
return (fexpr__36170.cljs$core$IFn$_invoke$arity$1 ? fexpr__36170.cljs$core$IFn$_invoke$arity$1(x) : fexpr__36170.call(null,x));
})())){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.timbre.legacy_ns_filter = (function taoensso$timbre$legacy_ns_filter(ns_whitelist,ns_blacklist){
var ns_whitelist__$1 = leglist_36521(ns_whitelist);
var ns_blacklist__$1 = leglist_36521(ns_blacklist);
if(cljs.core.truth_((function (){var or__5162__auto__ = ns_whitelist__$1;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return ns_blacklist__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),ns_whitelist__$1,new cljs.core.Keyword(null,"deny","deny",1589338523),ns_blacklist__$1], null);
} else {
return null;
}
});
var level_GT__EQ__36524 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__36525 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_36526 = taoensso.timbre.get_min_level;
var legacy_ns_filter_36527 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__36178 = arguments.length;
switch (G__36178) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"trace","trace",-1082747415),level,null,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,_QMARK_config);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (default_min_level,level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__5162__auto__ = _QMARK_config;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = (function (){var G__36187 = default_min_level;
var G__36188 = (function (){var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"level","level",1290497552));
}
})();
var G__36189 = _QMARK_ns_str;
return (get_min_level_36526.cljs$core$IFn$_invoke$arity$3 ? get_min_level_36526.cljs$core$IFn$_invoke$arity$3(G__36187,G__36188,G__36189) : get_min_level_36526.call(null,G__36187,G__36188,G__36189));
})();
if(cljs.core.truth_((level_GT__EQ__36524.cljs$core$IFn$_invoke$arity$2 ? level_GT__EQ__36524.cljs$core$IFn$_invoke$arity$2(level,min_level) : level_GT__EQ__36524.call(null,level,min_level)))){
var temp__5823__auto__ = (function (){var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var G__36191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774));
var G__36192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142));
return (legacy_ns_filter_36527.cljs$core$IFn$_invoke$arity$2 ? legacy_ns_filter_36527.cljs$core$IFn$_invoke$arity$2(G__36191,G__36192) : legacy_ns_filter_36527.call(null,G__36191,G__36192));
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var ns_filter = temp__5823__auto__;
if(cljs.core.truth_((may_log_ns_QMARK__36525.cljs$core$IFn$_invoke$arity$2 ? may_log_ns_QMARK__36525.cljs$core$IFn$_invoke$arity$2(ns_filter,_QMARK_ns_str) : may_log_ns_QMARK__36525.call(null,ns_filter,_QMARK_ns_str)))){
return true;
} else {
return false;
}
} else {
return true;
}
} else {
return false;
}
}));

(taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 4);

taoensso.timbre.set_min_level = (function taoensso$timbre$set_min_level(config,min_level){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"min-level","min-level",1634684919),taoensso.timbre.valid_level(min_level));
});
taoensso.timbre.set_min_level_BANG_ = (function taoensso$timbre$set_min_level_BANG_(min_level){
return taoensso.timbre.swap_config_BANG_((function (old){
return taoensso.timbre.set_min_level(old,min_level);
}));
});
/**
 * Returns given Timbre `config` with its `:min-level` modified so that
 *   the given namespace has the specified minimum logging level.
 * 
 *   When no namespace is provided, `*ns*` will be used.
 *   When `?min-level` is nil, any minimum level specifications for the
 *   *exact* given namespace will be removed.
 * 
 *   See `*config*` docstring for more about `:min-level`.
 *   See also `set-min-level!` for a util to directly modify `*config*`.
 */
taoensso.timbre.set_ns_min_level = (function taoensso$timbre$set_ns_min_level(var_args){
var G__36209 = arguments.length;
switch (G__36209) {
case 2:
return taoensso.timbre.set_ns_min_level.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.set_ns_min_level.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.timbre.set_ns_min_level.cljs$core$IFn$_invoke$arity$2 = (function (config,_QMARK_min_level){
return taoensso.timbre.set_ns_min_level.cljs$core$IFn$_invoke$arity$3(config,cljs.core._STAR_ns_STAR_,_QMARK_min_level);
}));

(taoensso.timbre.set_ns_min_level.cljs$core$IFn$_invoke$arity$3 = (function (config,ns,_QMARK_min_level){
var ns__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
var min_level_STAR_ = (function (){var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",taoensso.timbre.valid_level(x)], null)], null);
}
})();
var min_level_STAR___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__36214){
var vec__36215 = p__36214;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36215,(0),null);
var _pattern_min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36215,(1),null);
var entry = vec__36215;
var temp__5823__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_pattern,ns__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_pattern,cljs.core.PersistentHashSet.createAsIfByAssoc([ns__$1]))));
if(temp__5823__auto__){
var exact_match_QMARK_ = temp__5823__auto__;
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,entry);
}
}),(function (){var temp__5823__auto__ = _QMARK_min_level;
if(cljs.core.truth_(temp__5823__auto__)){
var new_min_level = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,taoensso.timbre.valid_level(new_min_level)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),min_level_STAR_);
var min_level_STAR___$2 = (function (){var temp__5823__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(min_level_STAR___$1),(1)))?(function (){var vec__36222 = min_level_STAR___$1;
var vec__36225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36222,(0),null);
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_pattern,"*")){
return level;
} else {
return null;
}
})():null);
if(cljs.core.truth_(temp__5823__auto__)){
var simplified = temp__5823__auto__;
return simplified;
} else {
return cljs.core.not_empty(min_level_STAR___$1);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"min-level","min-level",1634684919),min_level_STAR___$2);
}));

(taoensso.timbre.set_ns_min_level.cljs$lang$maxFixedArity = 3);

/**
 * Like `set-ns-min-level` but directly modifies `*config*`.
 * 
 *   Can conveniently set the minimum log level for the current ns:
 *  (set-ns-min-level! :info) => Sets min-level for current *ns*
 * 
 *   See `set-ns-min-level` for details.
 */
taoensso.timbre.set_ns_min_level_BANG_ = (function taoensso$timbre$set_ns_min_level_BANG_(var_args){
var G__36231 = arguments.length;
switch (G__36231) {
case 1:
return taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_min_level){
return taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_ns_STAR_,_QMARK_min_level);
}));

(taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ns,_QMARK_min_level){
return taoensso.timbre.swap_config_BANG_((function (config){
return taoensso.timbre.set_ns_min_level.cljs$core$IFn$_invoke$arity$3(config,ns,_QMARK_min_level);
}));
}));

(taoensso.timbre.set_ns_min_level_BANG_.cljs$lang$maxFixedArity = 2);

if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre.get_rate_limiter !== 'undefined')){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.fmemoize((function (appender_id,specs){
return taoensso.encore.limiter.cljs$core$IFn$_invoke$arity$1(specs);
}));
}
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__36240 = timestamp_opts;
var map__36240__$1 = cljs.core.__destructure_map(map__36240);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36240__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern,new cljs.core.Keyword(null,"iso8601","iso8601",609352650)) : taoensso.encore.kw_identical_QMARK_.call(null,pattern,new cljs.core.Keyword(null,"iso8601","iso8601",609352650))))){
return (new Date(instant)).toISOString();
} else {
return (new goog.i18n.DateTimeFormat(pattern)).format(instant);
}
});

/**
 * Default (fn [data]) -> final output string, used to produce
 *   final formatted output_ string from final log data.
 * 
 *   Options (included as `:output-opts` in data sent to fns below):
 * 
 *  :error-fn ; When present and (:?err data) present,
 *            ; (error-fn data) will be called to generate output
 *            ; (e.g. a stacktrace) for the error.
 *            ;
 *            ; Default value: `default-output-error-fn`.
 *            ; Use `nil` value to exclude error output.
 * 
 *  :msg-fn   ; When present, (msg-fn data) will be called to
 *            ; generate a message from `vargs` (vector of raw
 *            ; logging arguments).
 *            ;
 *            ; Default value: `default-output-msg-fn`.
 *            ; Use `nil` value to exclude message output.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var G__36250 = arguments.length;
switch (G__36250) {
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (base_output_opts,data){
var data__$1 = ((cljs.core.empty_QMARK_(base_output_opts))?data:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_output_opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325)))));
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1(data__$1);
}));

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
var map__36251 = data;
var map__36251__$1 = cljs.core.__destructure_map(map__36251);
var output_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = cljs.core.force(timestamp_);
if(cljs.core.truth_(temp__5825__auto__)){
var ts = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)+" ");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(level)))+" "+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "?";
}
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = _QMARK_line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "?";
}
})())+"] - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(output_opts,new cljs.core.Keyword(null,"msg-fn","msg-fn",-1873033940),taoensso.timbre.default_output_msg_fn);
if(cljs.core.truth_(temp__5825__auto__)){
var msg_fn = temp__5825__auto__;
return (msg_fn.cljs$core$IFn$_invoke$arity$1 ? msg_fn.cljs$core$IFn$_invoke$arity$1(data) : msg_fn.call(null,data));
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
var temp__5825__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(output_opts,new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),taoensso.timbre.default_output_error_fn);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ef = temp__5825__auto____$1;
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_opts,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694)))){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.system_newline)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((ef.cljs$core$IFn$_invoke$arity$1 ? ef.cljs$core$IFn$_invoke$arity$1(data) : ef.call(null,data))));
}
} else {
return null;
}
} else {
return null;
}
})()));
}));

(taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2);

taoensso.timbre.default_arg__GT_str_fn = (function taoensso$timbre$default_arg__GT_str_fn(x){
if((x == null)){
return "nil";
} else {
if(typeof x === 'string'){
return x;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}
}
});
taoensso.timbre.legacy_arg__GT_str_fn = (function taoensso$timbre$legacy_arg__GT_str_fn(x){
if((x == null)){
return "nil";
} else {
if(cljs.core.record_QMARK_(x)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;
}
}
});
taoensso.timbre.str_join = (function taoensso$timbre$str_join(var_args){
var G__36270 = arguments.length;
switch (G__36270) {
case 1:
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.default_arg__GT_str_fn,xs);
}));

(taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$2 = (function (arg__GT_str_fn,xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(arg__GT_str_fn),xs);
}));

(taoensso.timbre.str_join.cljs$lang$maxFixedArity = 2);

/**
 * (fn [data]) -> string, used by `default-output-fn` to generate output
 *   for `:vargs` value (vector of raw logging arguments) in log data.
 */
taoensso.timbre.default_output_msg_fn = (function taoensso$timbre$default_output_msg_fn(p__36275){
var map__36276 = p__36275;
var map__36276__$1 = cljs.core.__destructure_map(map__36276);
var data = map__36276__$1;
var msg_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword(null,"msg-type","msg-type",-2132567822));
var _QMARK_msg_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891));
var vargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var output_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325));
var map__36279 = output_opts;
var map__36279__$1 = cljs.core.__destructure_map(map__36279);
var arg__GT_str_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36279__$1,new cljs.core.Keyword(null,"arg->str-fn","arg->str-fn",2064845310),taoensso.timbre.default_arg__GT_str_fn);
var G__36281 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__36281)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),G__36281)){
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$2(arg__GT_str_fn,vargs);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),G__36281)){
if(typeof _QMARK_msg_fmt === 'string'){
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(_QMARK_msg_fmt,vargs);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timbre format-style logging call without a format pattern string",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891),_QMARK_msg_fmt,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(_QMARK_msg_fmt),new cljs.core.Keyword(null,"vargs","vargs",-966597273),vargs], null));
}
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36281))));

}
}
}
});
/**
 * Default (fn [data]) -> string, used by `default-output-fn` to
 *   generate output for `:?err` value in log data.
 * 
 *   For Clj:
 *   Uses `io.aviso/pretty` to return an attractive stacktrace.
 *   Options:
 *     :stacktrace-fonts ; See `io.aviso.exception/*fonts*`
 * 
 *   For Cljs:
 *   Returns simple stacktrace string.
 */
taoensso.timbre.default_output_error_fn = (function taoensso$timbre$default_output_error_fn(p__36284){
var map__36286 = p__36284;
var map__36286__$1 = cljs.core.__destructure_map(map__36286);
var data = map__36286__$1;
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36286__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var output_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36286__$1,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325));
var err = (function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_err)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36293){if((e36293 instanceof Error)){
var e = e36293;
return e;
} else {
throw e36293;

}
}})();
if((e == null)){
return _QMARK_err;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.timbre","taoensso.timbre",407940729,null),479,new cljs.core.Symbol("taoensso.truss.impl","some?","taoensso.truss.impl/some?",-1118207366,null),_QMARK_err,e,null);
}
})();
var nl = taoensso.encore.system_newline;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(err.stack)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = cljs.core.ex_data(err);
if(cljs.core.truth_(temp__5825__auto__)){
var d = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nl)+"ex-data:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nl)+"    "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d], 0))));
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = cljs.core.ex_cause(err);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nl)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nl)+"Caused by:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nl)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__36295 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"?err","?err",549653299),c);
return (taoensso.timbre.default_output_error_fn.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.default_output_error_fn.cljs$core$IFn$_invoke$arity$1(G__36295) : taoensso.timbre.default_output_error_fn.call(null,G__36295));
})()));
} else {
return null;
}
})()));
});
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492)) : taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492)));
var fmt_msg_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(msg_type,new cljs.core.Keyword(null,"f","f",-1597136552)) : taoensso.encore.kw_identical_QMARK_.call(null,msg_type,new cljs.core.Keyword(null,"f","f",-1597136552)));
var vec__36299 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36299,(0),null);
if(cljs.core.truth_((function (){var and__5160__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return taoensso.encore.error_QMARK_(v0);
} else {
return and__5160__auto__;
}
})())){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.encore.vrest(vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__36302 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36302,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.map_QMARK_(v0);
if(and__5160__auto__){
return new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v0));
} else {
return and__5160__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.truth_(auto_error_QMARK_)){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_meta,new cljs.core.Keyword(null,"err","err",-2089457205));
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.encore.vrest(vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__36308 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36308,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.protected_fn = (function taoensso$timbre$protected_fn(error_msg,f){
return (function (data){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));
}catch (e36315){var t = e36315;
var map__36316 = data;
var map__36316__$1 = cljs.core.__destructure_map(map__36316);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36316__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36316__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36316__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36316__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(error_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"location","location",1815599388),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "?";
}
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = _QMARK_line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "?";
}
})())),new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),f], null),t);
}});
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var G__36324 = arguments.length;
switch (G__36324) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
if(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,config)){
var instant_36576 = (new Date());
var context_36577 = taoensso.timbre._STAR_context_STAR_;
var vargs_36578 = cljs.core.deref(vargs_);
var vec__36329_36579 = taoensso.timbre.parse_vargs(_QMARK_err,msg_type,vargs_36578);
var _QMARK_err_36580__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36329_36579,(0),null);
var _QMARK_meta_36581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36329_36579,(1),null);
var _QMARK_msg_fmt_36582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36329_36579,(2),null);
var vargs_36583__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36329_36579,(3),null);
var data_36584 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5162__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"spying?","spying?",1753444487),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"vargs","vargs",-966597273),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"msg-type","msg-type",-2132567822),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?err_","?err_",789480858),new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891)],[instant_36576,spying_QMARK_,config,vargs_36583__$1,_QMARK_file,(function (){var fexpr__36332 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__36332.cljs$core$IFn$_invoke$arity$1 ? fexpr__36332.cljs$core$IFn$_invoke$arity$1(level) : fexpr__36332.call(null,level));
})(),_QMARK_ns_str,level,msg_type,_QMARK_err_36580__$1,context_36577,_QMARK_line,(new cljs.core.Delay((function (){
return _QMARK_err_36580__$1;
}),null)),_QMARK_meta_36581,_QMARK_msg_fmt_36582]));
var _QMARK_data_36585 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
}),data_36584,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"middleware","middleware",1462115504)));
var temp__5825__auto___36588 = _QMARK_data_36585;
if(cljs.core.truth_(temp__5825__auto___36588)){
var data_36589__$1 = temp__5825__auto___36588;
var map__36335_36590 = data_36589__$1;
var map__36335_36591__$1 = cljs.core.__destructure_map(map__36335_36590);
var vargs_36592__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36335_36591__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var data_36593__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_36589__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148),(new cljs.core.Delay((function (){
return vargs_36592__$2;
}),null)));
var data_36594__$3 = taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(data_36593__$2,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return taoensso.timbre.protected_fn("Timbre error when calling (msg-fn <data>)",taoensso.timbre.default_output_msg_fn)(data_36593__$2);
}),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hash_","hash_",-827203612),(new cljs.core.Delay((function (){
return cljs.core.hash((function (){var b2__28441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_meta_36581,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(b2__28441__auto__)){
var id = b2__28441__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,callsite_id,level], null);
} else {
var b2__28441__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_meta_36581,new cljs.core.Keyword(null,"id!","id!",218090956));
if(cljs.core.truth_(b2__28441__auto____$1)){
var id = b2__28441__auto____$1;
return id;
} else {
var b2__28441__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_meta_36581,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(b2__28441__auto____$2)){
var h = b2__28441__auto____$2;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,callsite_id,_QMARK_msg_fmt_36582,level], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vargs_36592__$2,callsite_id,_QMARK_msg_fmt_36582,level], null);
}
}
}
})());
}),null))], 0));
var get_timestamp_delay_36595 = (function (){var get_shared_delay = taoensso.encore.fmemoize((function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp(opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_36594__$3,new cljs.core.Keyword(null,"instant","instant",655498374)));
}),null));
}));
var base_opts_ = (new cljs.core.Delay((function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.default_timestamp_opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807)));
}),null));
return (function (_QMARK_appender_opts){
if(cljs.core.truth_((function (){var or__5162__auto__ = (_QMARK_appender_opts == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(_QMARK_appender_opts,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)) : taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_appender_opts,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)));
}
})())){
return get_shared_delay(cljs.core.deref(base_opts_));
} else {
return get_shared_delay(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(base_opts_),_QMARK_appender_opts));
}
});
})();
var get_output_fn_36596 = (function (){var base_fn = taoensso.encore.fmemoize(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn));
return (function (_QMARK_appender_fn){
return taoensso.timbre.protected_fn("Timbre error when calling (output-fn <data>)",(cljs.core.truth_((function (){var or__5162__auto__ = (_QMARK_appender_fn == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(_QMARK_appender_fn,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)) : taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_appender_fn,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)));
}
})())?base_fn:_QMARK_appender_fn));
});
})();
var base_output_opts_36597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325));
cljs.core.reduce_kv((function (_,id,appender){
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
if(cljs.core.truth_(and__5160__auto__)){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,appender);
} else {
return and__5160__auto__;
}
})())){
var rate_limit_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022));
var rate_limit_okay_QMARK_ = (function (){var or__5162__auto__ = cljs.core.empty_QMARK_(rate_limit_specs);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter(id,rate_limit_specs);
return cljs.core.not((function (){var G__36352 = cljs.core.force(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_36594__$3,new cljs.core.Keyword(null,"hash_","hash_",-827203612)));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__36352) : rl_fn.call(null,G__36352));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__36354 = appender;
var map__36354__$1 = cljs.core.__destructure_map(map__36354);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var timestamp_ = get_timestamp_delay_36595(cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807)));
var output_fn = get_output_fn_36596(cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539)));
var output_opts = (function (){var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return base_output_opts_36597;
}
})();
var output_ = (new cljs.core.Delay((function (){
var G__36359 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data_36594__$3,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"output-opts","output-opts",-793411325),output_opts], 0));
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__36359) : output_fn.call(null,G__36359));
}),null));
var data__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_36594__$3,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325),output_opts,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"output_","output_",-36797880),output_,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_], null));
var _QMARK_data__$1 = (function (){var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,new cljs.core.Keyword(null,"middleware-fn","middleware-fn",-61585752));
if(cljs.core.truth_(temp__5823__auto__)){
var mfn = temp__5823__auto__;
return (mfn.cljs$core$IFn$_invoke$arity$1 ? mfn.cljs$core$IFn$_invoke$arity$1(data__$4) : mfn.call(null,data__$4));
} else {
return data__$4;
}
})();
var temp__5825__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__5825__auto____$1)){
var data__$5 = temp__5825__auto____$1;
return (apfn.cljs$core$IFn$_invoke$arity$1 ? apfn.cljs$core$IFn$_invoke$arity$1(data__$5) : apfn.call(null,data__$5));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"appenders","appenders",1245583998)));
} else {
}
} else {
}

return null;
}));

(taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 11);

taoensso.timbre.fline = (function taoensso$timbre$fline(and_form){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(and_form));
});
taoensso.timbre.deterministic_rand = cljs.core.rand;
/**
 * Alpha, subject to change.
 * 
 *   Iterates through all appenders in config (enabled or not), and
 *   calls (:shutdown-fn appender) whenever that fn exists.
 * 
 *   This signals to these appenders that they should immediately
 *   close/release any resources that they may have open/acquired,
 *   and permanently noop on future logging requests.
 * 
 *   Returns the set of appender-ids that had a shutdown-fn called.
 * 
 *   This fn is called automatically on JVM shutdown, but can also
 *   be called manually.
 */
taoensso.timbre.shutdown_appenders_BANG_ = (function taoensso$timbre$shutdown_appenders_BANG_(var_args){
var G__36378 = arguments.length;
switch (G__36378) {
case 0:
return taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$1(taoensso.timbre._STAR_config_STAR_);
}));

(taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (config){
return cljs.core.reduce_kv((function (acc,appender_id,appender){
var temp__5823__auto__ = new cljs.core.Keyword(null,"shutdown-fn","shutdown-fn",-1360269181).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__5823__auto__)){
var sfn = temp__5823__auto__;
(sfn.cljs$core$IFn$_invoke$arity$0 ? sfn.cljs$core$IFn$_invoke$arity$0() : sfn.call(null));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,appender_id);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config));
}));

(taoensso.timbre.shutdown_appenders_BANG_.cljs$lang$maxFixedArity = 1);

taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Controls (:timestamp_ data)
 */
taoensso.timbre.default_timestamp_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"iso8601","iso8601",609352650)], null);
/**
 * Default/example Timbre `*config*` value:
 * 
 *  {:min-level :debug #_[["taoensso.*" :error] ["*" :debug]]
 *   :ns-filter #{"*"} #_{:deny #{"taoensso.*"} :allow #{"*"}}
 * 
 *   :middleware [] ; (fns [data]) -> ?data, applied left->right
 * 
 *   :timestamp-opts default-timestamp-opts ; {:pattern _ :locale _ :timezone _}
 *   :output-fn default-output-fn ; (fn [data]) -> final output for use by appenders
 * 
 *   :appenders
 *   #?(:clj
 *      {:println (println-appender {:stream :auto})
 *       ;; :spit (spit-appender    {:fname "./timbre-spit.log"})
 *       }
 * 
 *      :cljs
 *      (if (exists? js/window)
 *        {:console (console-appender {})}
 *        {:println (println-appender {})}))}
 * 
 *  See `*config*` for more info.
 */
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-level","min-level",1634684919),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807),taoensso.timbre.default_timestamp_opts,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),(function (){var G__36382 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__36382) : taoensso.timbre.console_appender.call(null,G__36382));
})()], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"println","println",1920840330),(function (){var G__36384 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1(G__36384) : taoensso.timbre.println_appender.call(null,G__36384));
})()], null))], null);
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined')){
} else {
/**
 * This config map controls all Timbre behaviour including:
 *  - When to log (via min-level and namespace filtering)
 *  - How  to log (which appenders to use, etc.)
 *  - What to log (how log data will be transformed to final
 *                 output for use by appenders)
 * 
 *   Initial config value will be (in descending order of preference):
 * 
 *  1. `taoensso.timbre.config.edn`   JVM property  (read as EDN)
 *  2. `TAOENSSO_TIMBRE_CONFIG_EDN`   Env var       (read as EDN)
 *  3. `./taoensso.timbre.config.edn` resource file (read as EDN)
 *  4. Value of `default-config`
 * 
 *   For all EDN cases (1-3): the EDN can represent either a Clojure map
 *   to merge into `default-config`, or a qualified symbol that'll
 *   resolve to a Clojure map to merge into `default-config`.
 * 
 *   See `default-config` for more info on the base/default config.
 * 
 *   You can modify the config value with standard `alter-var-root`,
 *   or `binding`.
 * 
 *   For convenience, there's also some dedicated helper utils:
 * 
 *  - `set-config!`, `merge-config!`        ; Mutate *config*
 *  - `set-min-level!`, `set-min-ns-level!` ; Mutate *config* :min-level
 *  - `with-config`, `with-merged-config`   ; Bind *config*
 *  - `with-min-level`                      ; Bind *config* :min-level
 * 
 * 
 *   MAIN CONFIG OPTIONS
 * 
 *  :min-level
 *    Logging will occur only if a logging call's level is >= this
 *    min-level. Possible values, in order:
 * 
 *      :trace  = level 0
 *      :debug  = level 1 ; Default min-level
 *      :info   = level 2
 *      :warn   = level 3
 *      :error  = level 4 ; Error type
 *      :fatal  = level 5 ; Error type
 *      :report = level 6 ; High general-purpose (non-error) type
 * 
 *    It's also possible to set a namespace-specific min-level by
 *    providing a vector that maps `ns-pattern`s to min-levels, e.g.:
 *    `[[#{"taoensso.*"} :error] ... [#{"*"} :debug]]`.
 * 
 *    Example `ns-pattern`s:
 *      #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *      {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}.
 * 
 *    See also `set-min-ns-level!` for a helper tool.
 * 
 *  :ns-filter
 *    Logging will occur only if a logging call's namespace is permitted
 *    by this ns-filter. Possible values:
 * 
 *      - Arbitrary (fn may-log-ns? [ns]) predicate fn.
 *      - An `ns-pattern` (see :min-level docs above).
 * 
 *    Useful for turning off logging in noisy libraries, etc.
 * 
 *  :middleware
 *    Vector of simple (fn [data]) -> ?new-data fns (applied left->right)
 *    that transform the data map dispatched to appender fns. If any middleware
 *    returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *    Useful for layering advanced functionality. Similar to Ring middleware.
 * 
 *  :timestamp-opts ; Config map, see `default-timestamp-opts`
 *  :output-fn      ; (fn [data]) -> final output for use by appenders,
 *                  ; see `default-output-fn` for example
 *  :output-opts    ; Optional map added to data sent to output-fn
 * 
 *  :appenders ; {<appender-id> <appender-map>}
 * 
 *    Where each appender-map has keys:
 *      :enabled?        ; Must be truthy to log
 *      :min-level       ; Optional *additional* appender-specific min-level
 *      :ns-filter       ; Optional *additional* appender-specific ns-filter
 * 
 *      :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *                       ; Tip: consider calling (shutdown-agents) as part of your
 *                       ; application shutdown if you have this enabled for any
 *                       ; appenders.
 * 
 *      :rate-limit      ; [[<ncalls-limit> <window-msecs>] ...], or nil
 *                       ; Appender will noop a call after exceeding given number
 *                       ; of the "same" calls within given rolling window/s.
 *                       ;
 *                       ; Example:
 *                       ;   [[100  (encore/ms :mins  1)]
 *                       ;    [1000 (encore/ms :hours 1)]] will noop a call after:
 *                       ;
 *                       ;   - >100  "same" calls in 1 rolling minute, or
 *                       ;   - >1000 "same" calls in 1 rolling hour
 *                       ;
 *                       ; "Same" calls are identified by default as the
 *                       ; combined hash of:
 *                       ;   - Callsite (i.e. each individual Timbre macro form)
 *                       ;   - Logging level
 *                       ;   - All arguments provided for logging
 *                       ;
 *                       ; You can manually override call identification:
 *                       ;   (timbre/infof ^:meta {:id "my-limiter-call-id"} ...)
 *                       ;
 * 
 *      :timestamp-opts  ; Optional appender-specific override for top-level option
 *      :output-fn       ; Optional appender-specific override for top-level option
 *      :output-opts     ; Optional appender-specific override for top-level option
 * 
 *      :fn              ; (fn [data]) -> side-effects, with keys described below
 * 
 *   LOG DATA
 *  A single map with keys:
 *    :config          ; Entire active config map
 *    :context         ; `*context*` value at log time (see `with-context`)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Call's level keyword (e.g. :info) (>= active min-level)
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :spying?         ; Is call occuring via the `spy` macro?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :?meta           ; First-arg map when it has ^:meta metadata, used as a
 *                       way of passing advanced per-call options to appenders
 *    :vargs           ; Vector of raw args provided to logging call
 *    :timestamp_      ; Forceable - string
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> final output for use by appenders
 *    :output_         ; Forceable result of calling (output-fn <this-data-map>)
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   COMPILE-TIME LEVEL/NS ELISION
 *  To control :min-level and :ns-filter at compile-time, use:
 * 
 *    - `taoensso.timbre.min-level.edn`  JVM property (read as EDN)
 *    - `taoensso.timbre.ns-pattern.edn` JVM property (read as EDN)
 * 
 *    - `TAOENSSO_TIMBRE_MIN_LEVEL_EDN`  env var      (read as EDN)
 *    - `TAOENSSO_TIMBRE_NS_PATTERN_EDN` env var      (read as EDN)
 * 
 *  Note that compile-time options will OVERRIDE options in `*config*`.
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.default_config;
}
taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

/**
 * DEPRECATED, prefer `default-config`
 */
taoensso.timbre.example_config = taoensso.timbre.default_config;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2(level,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns)));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36606 = arguments.length;
var i__5898__auto___36607 = (0);
while(true){
if((i__5898__auto___36607 < len__5897__auto___36606)){
args__5903__auto__.push((arguments[i__5898__auto___36607]));

var G__36608 = (i__5898__auto___36607 + (1));
i__5898__auto___36607 = G__36608;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$1(xs);
}));

(taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq36390){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36390));
}));


var ret__5952__auto___36609 = (function (){
taoensso.timbre.with_log_level = (function taoensso$timbre$with_log_level(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36610 = arguments.length;
var i__5898__auto___36611 = (0);
while(true){
if((i__5898__auto___36611 < len__5897__auto___36610)){
args__5903__auto__.push((arguments[i__5898__auto___36611]));

var G__36612 = (i__5898__auto___36611 + (1));
i__5898__auto___36611 = G__36612;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-min-level","taoensso.timbre/with-min-level",-1301385696,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_log_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_log_level.cljs$lang$applyTo = (function (seq36403){
var G__36404 = cljs.core.first(seq36403);
var seq36403__$1 = cljs.core.next(seq36403);
var G__36405 = cljs.core.first(seq36403__$1);
var seq36403__$2 = cljs.core.next(seq36403__$1);
var G__36406 = cljs.core.first(seq36403__$2);
var seq36403__$3 = cljs.core.next(seq36403__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36404,G__36405,G__36406,seq36403__$3);
}));

return null;
})()
;
(taoensso.timbre.with_log_level.cljs$lang$macro = true);


var ret__5952__auto___36613 = (function (){
taoensso.timbre.with_logging_config = (function taoensso$timbre$with_logging_config(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36614 = arguments.length;
var i__5898__auto___36615 = (0);
while(true){
if((i__5898__auto___36615 < len__5897__auto___36614)){
args__5903__auto__.push((arguments[i__5898__auto___36615]));

var G__36616 = (i__5898__auto___36615 + (1));
i__5898__auto___36615 = G__36616;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-config","taoensso.timbre/with-config",-1144239945,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_logging_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_logging_config.cljs$lang$applyTo = (function (seq36420){
var G__36421 = cljs.core.first(seq36420);
var seq36420__$1 = cljs.core.next(seq36420);
var G__36422 = cljs.core.first(seq36420__$1);
var seq36420__$2 = cljs.core.next(seq36420__$1);
var G__36423 = cljs.core.first(seq36420__$2);
var seq36420__$3 = cljs.core.next(seq36420__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36421,G__36422,G__36423,seq36420__$3);
}));

return null;
})()
;
(taoensso.timbre.with_logging_config.cljs$lang$macro = true);


var ret__5952__auto___36619 = (function (){
taoensso.timbre.logp = (function taoensso$timbre$logp(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36620 = arguments.length;
var i__5898__auto___36621 = (0);
while(true){
if((i__5898__auto___36621 < len__5897__auto___36620)){
args__5903__auto__.push((arguments[i__5898__auto___36621]));

var G__36622 = (i__5898__auto___36621 + (1));
i__5898__auto___36621 = G__36622;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log","taoensso.timbre/log",-1743194436,null),null,(1),null)),args)));
}));

(taoensso.timbre.logp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.logp.cljs$lang$applyTo = (function (seq36436){
var G__36437 = cljs.core.first(seq36436);
var seq36436__$1 = cljs.core.next(seq36436);
var G__36438 = cljs.core.first(seq36436__$1);
var seq36436__$2 = cljs.core.next(seq36436__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36437,G__36438,seq36436__$2);
}));

return null;
})()
;
(taoensso.timbre.logp.cljs$lang$macro = true);


var ret__5952__auto___36623 = (function (){
taoensso.timbre.log_env = (function taoensso$timbre$log_env(var_args){
var G__36450 = arguments.length;
switch (G__36450) {
case 2:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",(arguments.length - (2))].join("")));

}
});

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,level){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"&env",null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,level,name){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,name){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log*","taoensso.timbre/log*",1207553629,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","get-env","taoensso.timbre/get-env",92671901,null),null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.timbre.log_env.cljs$lang$macro = true);


/**
 * DEPRECATED, prefer `set-min-level!`
 */
taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"min-level","min-level",1634684919),level);
}));
});

var ret__5952__auto___36627 = (function (){
/**
 * DEPRECATED, prefer `with-min-level`
 */
taoensso.timbre.with_level = (function taoensso$timbre$with_level(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36628 = arguments.length;
var i__5898__auto___36629 = (0);
while(true){
if((i__5898__auto___36629 < len__5897__auto___36628)){
args__5903__auto__.push((arguments[i__5898__auto___36629]));

var G__36630 = (i__5898__auto___36629 + (1));
i__5898__auto___36629 = G__36630;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(taoensso.timbre.with_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,(1),null)),(new cljs.core.List(null,level,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_level.cljs$lang$applyTo = (function (seq36462){
var G__36463 = cljs.core.first(seq36462);
var seq36462__$1 = cljs.core.next(seq36462);
var G__36464 = cljs.core.first(seq36462__$1);
var seq36462__$2 = cljs.core.next(seq36462__$1);
var G__36465 = cljs.core.first(seq36462__$2);
var seq36462__$3 = cljs.core.next(seq36462__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36463,G__36464,G__36465,seq36462__$3);
}));

return null;
})()
;
(taoensso.timbre.with_level.cljs$lang$macro = true);


/**
 * DEPRECATED, use `default-output-error-fn` instead
 */
taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__36480 = arguments.length;
switch (G__36480) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,null);
}));

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
return taoensso.timbre.default_output_error_fn(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"?err","?err",549653299),err,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325),opts], null));
}));

(taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=taoensso.timbre.js.map
