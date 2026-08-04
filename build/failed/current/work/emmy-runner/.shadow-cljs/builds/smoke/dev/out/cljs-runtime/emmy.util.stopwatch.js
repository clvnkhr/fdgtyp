goog.provide('emmy.util.stopwatch');

/**
 * @interface
 */
emmy.util.stopwatch.IStopwatch = function(){};

var emmy$util$stopwatch$IStopwatch$running_QMARK_$dyn_36730 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.util.stopwatch.running_QMARK_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (emmy.util.stopwatch.running_QMARK_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStopwatch.running?",this$);
}
}
});
emmy.util.stopwatch.running_QMARK_ = (function emmy$util$stopwatch$running_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.emmy$util$stopwatch$IStopwatch$running_QMARK_$arity$1 == null)))))){
return this$.emmy$util$stopwatch$IStopwatch$running_QMARK_$arity$1(this$);
} else {
return emmy$util$stopwatch$IStopwatch$running_QMARK_$dyn_36730(this$);
}
});

var emmy$util$stopwatch$IStopwatch$start$dyn_36732 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.util.stopwatch.start[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (emmy.util.stopwatch.start["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStopwatch.start",this$);
}
}
});
emmy.util.stopwatch.start = (function emmy$util$stopwatch$start(this$){
if((((!((this$ == null)))) && ((!((this$.emmy$util$stopwatch$IStopwatch$start$arity$1 == null)))))){
return this$.emmy$util$stopwatch$IStopwatch$start$arity$1(this$);
} else {
return emmy$util$stopwatch$IStopwatch$start$dyn_36732(this$);
}
});

var emmy$util$stopwatch$IStopwatch$stop$dyn_36734 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.util.stopwatch.stop[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (emmy.util.stopwatch.stop["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStopwatch.stop",this$);
}
}
});
emmy.util.stopwatch.stop = (function emmy$util$stopwatch$stop(this$){
if((((!((this$ == null)))) && ((!((this$.emmy$util$stopwatch$IStopwatch$stop$arity$1 == null)))))){
return this$.emmy$util$stopwatch$IStopwatch$stop$arity$1(this$);
} else {
return emmy$util$stopwatch$IStopwatch$stop$dyn_36734(this$);
}
});

var emmy$util$stopwatch$IStopwatch$reset$dyn_36735 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.util.stopwatch.reset[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (emmy.util.stopwatch.reset["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStopwatch.reset",this$);
}
}
});
emmy.util.stopwatch.reset = (function emmy$util$stopwatch$reset(this$){
if((((!((this$ == null)))) && ((!((this$.emmy$util$stopwatch$IStopwatch$reset$arity$1 == null)))))){
return this$.emmy$util$stopwatch$IStopwatch$reset$arity$1(this$);
} else {
return emmy$util$stopwatch$IStopwatch$reset$dyn_36735(this$);
}
});

var emmy$util$stopwatch$IStopwatch$_elapsed$dyn_36736 = (function (this$,unit){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.util.stopwatch._elapsed[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,unit) : m__5520__auto__.call(null,this$,unit));
} else {
var m__5518__auto__ = (emmy.util.stopwatch._elapsed["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,unit) : m__5518__auto__.call(null,this$,unit));
} else {
throw cljs.core.missing_protocol("IStopwatch.-elapsed",this$);
}
}
});
/**
 * Displays the current elapsed time in the supplied units.
 */
emmy.util.stopwatch._elapsed = (function emmy$util$stopwatch$_elapsed(this$,unit){
if((((!((this$ == null)))) && ((!((this$.emmy$util$stopwatch$IStopwatch$_elapsed$arity$2 == null)))))){
return this$.emmy$util$stopwatch$IStopwatch$_elapsed$arity$2(this$,unit);
} else {
return emmy$util$stopwatch$IStopwatch$_elapsed$dyn_36736(this$,unit);
}
});

var emmy$util$stopwatch$IStopwatch$repr$dyn_36737 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.util.stopwatch.repr[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (emmy.util.stopwatch.repr["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStopwatch.repr",this$);
}
}
});
/**
 * Prints a string representation of the stopwatch.
 */
emmy.util.stopwatch.repr = (function emmy$util$stopwatch$repr(this$){
if((((!((this$ == null)))) && ((!((this$.emmy$util$stopwatch$IStopwatch$repr$arity$1 == null)))))){
return this$.emmy$util$stopwatch$IStopwatch$repr$arity$1(this$);
} else {
return emmy$util$stopwatch$IStopwatch$repr$dyn_36737(this$);
}
});

/**
 * Wrapper that handles a default implementation.
 */
emmy.util.stopwatch.elapsed = (function emmy$util$stopwatch$elapsed(var_args){
var G__36702 = arguments.length;
switch (G__36702) {
case 1:
return emmy.util.stopwatch.elapsed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.util.stopwatch.elapsed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.util.stopwatch.elapsed.cljs$core$IFn$_invoke$arity$1 = (function (sw){
return emmy.util.stopwatch._elapsed(sw,new cljs.core.Keyword(null,"nanos","nanos",-1777059258));
}));

(emmy.util.stopwatch.elapsed.cljs$core$IFn$_invoke$arity$2 = (function (sw,unit){
return emmy.util.stopwatch._elapsed(sw,unit);
}));

(emmy.util.stopwatch.elapsed.cljs$lang$maxFixedArity = 2);

/**
 * Allowed units of time, ordered from most precise to least.
 */
emmy.util.stopwatch.units = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nanos","nanos",-1777059258),new cljs.core.Keyword(null,"micros","micros",420024622),new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"days","days",-1394072564)], null);
emmy.util.stopwatch.abbreviate = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"nanos","nanos",-1777059258),"ns",new cljs.core.Keyword(null,"micros","micros",420024622),"\u03BCs",new cljs.core.Keyword(null,"millis","millis",-1338288387),"ms",new cljs.core.Keyword(null,"seconds","seconds",-445266194),"s",new cljs.core.Keyword(null,"minutes","minutes",1319166394),"min",new cljs.core.Keyword(null,"hours","hours",58380855),"h",new cljs.core.Keyword(null,"days","days",-1394072564),"d"], null);
var __GT_micros_36739 = 1000.0;
var __GT_ms_36740 = (__GT_micros_36739 * 1000.0);
var __GT_s_36741 = (__GT_ms_36740 * 1000.0);
var __GT_m_36742 = (__GT_s_36741 * (60));
var __GT_h_36743 = (__GT_m_36742 * (60));
var __GT_d_36744 = (__GT_h_36743 * (24));
emmy.util.stopwatch.from_nanos = (function emmy$util$stopwatch$from_nanos(ns,unit){
return (ns / (function (){var G__36704 = unit;
var G__36704__$1 = (((G__36704 instanceof cljs.core.Keyword))?G__36704.fqn:null);
switch (G__36704__$1) {
case "nanos":
return (1);

break;
case "micros":
return __GT_micros_36739;

break;
case "millis":
return __GT_ms_36740;

break;
case "seconds":
return __GT_s_36741;

break;
case "minutes":
return __GT_m_36742;

break;
case "hours":
return __GT_h_36743;

break;
case "days":
return __GT_d_36744;

break;
default:
return emmy.util.illegal((""+"Unknown unit: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)));

}
})());
});
/**
 * Returns a pair of [value, unit].
 */
emmy.util.stopwatch.choose_unit = (function emmy$util$stopwatch$choose_unit(ns){
var or__5162__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__36706_SHARP_){
return (p1__36706_SHARP_ > (1));
}),cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__36705_SHARP_){
return emmy.util.stopwatch.from_nanos(ns,p1__36705_SHARP_);
}),cljs.core.identity),cljs.core.reverse(emmy.util.stopwatch.units))));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"nanos","nanos",-1777059258)], null);
}
});

/**
* @constructor
 * @implements {emmy.util.stopwatch.IStopwatch}
*/
emmy.util.stopwatch.Stopwatch = (function (elapsed_fn,offset,is_running_QMARK_){
this.elapsed_fn = elapsed_fn;
this.offset = offset;
this.is_running_QMARK_ = is_running_QMARK_;
});
(emmy.util.stopwatch.Stopwatch.prototype.emmy$util$stopwatch$IStopwatch$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.util.stopwatch.Stopwatch.prototype.emmy$util$stopwatch$IStopwatch$running_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.is_running_QMARK_;
}));

(emmy.util.stopwatch.Stopwatch.prototype.emmy$util$stopwatch$IStopwatch$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.is_running_QMARK_)){
return this$__$1;
} else {
return (new emmy.util.stopwatch.Stopwatch(stopwatch.core.start(),self__.offset,true));
}
}));

(emmy.util.stopwatch.Stopwatch.prototype.emmy$util$stopwatch$IStopwatch$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.is_running_QMARK_)){
var offset_SINGLEQUOTE_ = emmy.util.stopwatch.elapsed.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"nanos","nanos",-1777059258));
return (new emmy.util.stopwatch.Stopwatch(cljs.core.constantly(offset_SINGLEQUOTE_),offset_SINGLEQUOTE_,false));
} else {
return this$__$1;
}
}));

(emmy.util.stopwatch.Stopwatch.prototype.emmy$util$stopwatch$IStopwatch$reset$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new emmy.util.stopwatch.Stopwatch(null,(0),false));
}));

(emmy.util.stopwatch.Stopwatch.prototype.emmy$util$stopwatch$IStopwatch$_elapsed$arity$2 = (function (_,unit){
var self__ = this;
var ___$1 = this;
return emmy.util.stopwatch.from_nanos((cljs.core.truth_(self__.is_running_QMARK_)?((self__.elapsed_fn.cljs$core$IFn$_invoke$arity$0 ? self__.elapsed_fn.cljs$core$IFn$_invoke$arity$0() : self__.elapsed_fn.call(null)) + self__.offset):self__.offset),unit);
}));

(emmy.util.stopwatch.Stopwatch.prototype.emmy$util$stopwatch$IStopwatch$repr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__36710 = emmy.util.stopwatch.choose_unit(emmy.util.stopwatch.elapsed.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"nanos","nanos",-1777059258)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36710,(0),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36710,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((emmy.util.stopwatch.abbreviate.cljs$core$IFn$_invoke$arity$1 ? emmy.util.stopwatch.abbreviate.cljs$core$IFn$_invoke$arity$1(unit) : emmy.util.stopwatch.abbreviate.call(null,unit))));
}));

(emmy.util.stopwatch.Stopwatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elapsed-fn","elapsed-fn",151101040,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"is-running?","is-running?",146316447,null)], null);
}));

(emmy.util.stopwatch.Stopwatch.cljs$lang$type = true);

(emmy.util.stopwatch.Stopwatch.cljs$lang$ctorStr = "emmy.util.stopwatch/Stopwatch");

(emmy.util.stopwatch.Stopwatch.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.util.stopwatch/Stopwatch");
}));

/**
 * Positional factory function for emmy.util.stopwatch/Stopwatch.
 */
emmy.util.stopwatch.__GT_Stopwatch = (function emmy$util$stopwatch$__GT_Stopwatch(elapsed_fn,offset,is_running_QMARK_){
return (new emmy.util.stopwatch.Stopwatch(elapsed_fn,offset,is_running_QMARK_));
});


/**
* @constructor
 * @implements {emmy.util.stopwatch.IStopwatch}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
emmy.util.stopwatch.t_emmy$util$stopwatch36713 = (function (stopwatch,sw,meta36714){
this.stopwatch = stopwatch;
this.sw = sw;
this.meta36714 = meta36714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.util.stopwatch.t_emmy$util$stopwatch36713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36715,meta36714__$1){
var self__ = this;
var _36715__$1 = this;
return (new emmy.util.stopwatch.t_emmy$util$stopwatch36713(self__.stopwatch,self__.sw,meta36714__$1));
}));

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36715){
var self__ = this;
var _36715__$1 = this;
return self__.meta36714;
}));

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.prototype.emmy$util$stopwatch$IStopwatch$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.prototype.emmy$util$stopwatch$IStopwatch$running_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return emmy.util.stopwatch.running_QMARK_(cljs.core.deref(self__.sw));
}));

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.prototype.emmy$util$stopwatch$IStopwatch$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.sw,emmy.util.stopwatch.start);

return this$__$1;
}));

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.prototype.emmy$util$stopwatch$IStopwatch$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.sw,emmy.util.stopwatch.stop);

return this$__$1;
}));

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.prototype.emmy$util$stopwatch$IStopwatch$reset$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.sw,emmy.util.stopwatch.reset);

return this$__$1;
}));

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.prototype.emmy$util$stopwatch$IStopwatch$_elapsed$arity$2 = (function (_,unit){
var self__ = this;
var ___$1 = this;
return emmy.util.stopwatch._elapsed(cljs.core.deref(self__.sw),unit);
}));

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.prototype.emmy$util$stopwatch$IStopwatch$repr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return emmy.util.stopwatch.repr(cljs.core.deref(self__.sw));
}));

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.prototype.toString = (function (){
var self__ = this;
var _ = this;
return emmy.util.stopwatch.repr(cljs.core.deref(self__.sw));
}));

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stopwatch","stopwatch",-1262782731,null),new cljs.core.Symbol(null,"sw","sw",-1821321856,null),new cljs.core.Symbol(null,"meta36714","meta36714",1591763621,null)], null);
}));

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.cljs$lang$type = true);

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.cljs$lang$ctorStr = "emmy.util.stopwatch/t_emmy$util$stopwatch36713");

(emmy.util.stopwatch.t_emmy$util$stopwatch36713.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.util.stopwatch/t_emmy$util$stopwatch36713");
}));

/**
 * Positional factory function for emmy.util.stopwatch/t_emmy$util$stopwatch36713.
 */
emmy.util.stopwatch.__GT_t_emmy$util$stopwatch36713 = (function emmy$util$stopwatch$__GT_t_emmy$util$stopwatch36713(stopwatch__$1,sw,meta36714){
return (new emmy.util.stopwatch.t_emmy$util$stopwatch36713(stopwatch__$1,sw,meta36714));
});


/**
 * Accepts some object implementing `IStopWatch` and returns a mutable
 *   implementation that wraps an immutable stopwatch in an atom.
 */
emmy.util.stopwatch.wrapped = (function emmy$util$stopwatch$wrapped(stopwatch__$1){
var sw = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(stopwatch__$1);
return (new emmy.util.stopwatch.t_emmy$util$stopwatch36713(stopwatch__$1,sw,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns an implementation of [[IStopwatch]].
 */
emmy.util.stopwatch.stopwatch = (function emmy$util$stopwatch$stopwatch(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36752 = arguments.length;
var i__5898__auto___36753 = (0);
while(true){
if((i__5898__auto___36753 < len__5897__auto___36752)){
args__5903__auto__.push((arguments[i__5898__auto___36753]));

var G__36754 = (i__5898__auto___36753 + (1));
i__5898__auto___36753 = G__36754;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.util.stopwatch.stopwatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.util.stopwatch.stopwatch.cljs$core$IFn$_invoke$arity$variadic = (function (p__36728){
var map__36729 = p__36728;
var map__36729__$1 = cljs.core.__destructure_map(map__36729);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36729__$1,new cljs.core.Keyword(null,"started?","started?",-1301062863),true);
var watch = (new emmy.util.stopwatch.Stopwatch(null,(0),false));
return emmy.util.stopwatch.wrapped((cljs.core.truth_(started_QMARK_)?watch.emmy$util$stopwatch$IStopwatch$start$arity$1(null):watch));
}));

(emmy.util.stopwatch.stopwatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.util.stopwatch.stopwatch.cljs$lang$applyTo = (function (seq36724){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36724));
}));


//# sourceMappingURL=emmy.util.stopwatch.js.map
