goog.provide('taoensso.timbre.appenders.core');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33578 = arguments.length;
var i__5898__auto___33579 = (0);
while(true){
if((i__5898__auto___33579 < len__5897__auto___33578)){
args__5903__auto__.push((arguments[i__5898__auto___33579]));

var G__33580 = (i__5898__auto___33579 + (1));
i__5898__auto___33579 = G__33580;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__33528){
var vec__33530 = p__33528;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33530,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (data){
var map__33534 = data;
var map__33534__$1 = cljs.core.__destructure_map(map__33534);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33534__$1,new cljs.core.Keyword(null,"output_","output_",-36797880));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.force(output_)], 0));
})], null);
}));

(taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq33524){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33524));
}));

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   Use ^:meta {:raw-console? true} as first argument to logging call if
 *   you want args sent to console in a raw format enabling console-based
 *   pretty-printing of JS objects, etc. E.g.:
 * 
 *     (info                             my-js-obj) ; Send string   to console
 *     (info ^:meta {:raw-console? true} my-js-obj) ; Send raw args to console
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *     `/taoensso/timbre/appenders/core\.js$`
 *     `/taoensso/timbre\.js$`
 *     `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33587 = arguments.length;
var i__5898__auto___33588 = (0);
while(true){
if((i__5898__auto___33588 < len__5897__auto___33587)){
args__5903__auto__.push((arguments[i__5898__auto___33588]));

var G__33589 = (i__5898__auto___33588 + (1));
i__5898__auto___33588 = G__33589;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__33546){
var vec__33548 = p__33546;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33548,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),(((!((typeof console !== 'undefined'))))?(function (data){
return null;
}):(function (){var level__GT_logger = (function (level){
var or__5162__auto__ = (function (){var G__33555 = level;
var G__33555__$1 = (((G__33555 instanceof cljs.core.Keyword))?G__33555.fqn:null);
switch (G__33555__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33555__$1))));

}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return console.log;
}
});
return (function (data){
var temp__5825__auto__ = level__GT_logger(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5825__auto__)){
var logger = temp__5825__auto__;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061)], null));
}
})())){
var output = (function (){var G__33565 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"?err","?err",549653299),null], 0));
var fexpr__33564 = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(data);
return (fexpr__33564.cljs$core$IFn$_invoke$arity$1 ? fexpr__33564.cljs$core$IFn$_invoke$arity$1(G__33565) : fexpr__33564.call(null,G__33565));
})();
var args = (function (){var vargs = new cljs.core.Keyword(null,"vargs","vargs",-966597273).cljs$core$IFn$_invoke$arity$1(data);
var temp__5823__auto__ = new cljs.core.Keyword(null,"?err","?err",549653299).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5823__auto__)){
var err = temp__5823__auto__;
return cljs.core.cons(output,cljs.core.cons(err,vargs));
} else {
return cljs.core.cons(output,vargs);
}
})();
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,cljs.core.force(new cljs.core.Keyword(null,"output_","output_",-36797880).cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
})())], null);
}));

(taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq33542){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33542));
}));

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

//# sourceMappingURL=taoensso.timbre.appenders.core.js.map
