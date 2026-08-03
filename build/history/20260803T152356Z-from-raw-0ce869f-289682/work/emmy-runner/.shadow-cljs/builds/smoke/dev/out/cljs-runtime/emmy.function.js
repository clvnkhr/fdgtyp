goog.provide('emmy.function$');

/**
 * @interface
 */
emmy.function$.IArity = function(){};

var emmy$function$IArity$arity$dyn_33120 = (function (f){
var x__5519__auto__ = (((f == null))?null:f);
var m__5520__auto__ = (emmy.function$.arity[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(f) : m__5520__auto__.call(null,f));
} else {
var m__5518__auto__ = (emmy.function$.arity["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(f) : m__5518__auto__.call(null,f));
} else {
throw cljs.core.missing_protocol("IArity.arity",f);
}
}
});
/**
 * Return the cached or obvious arity of `f` if we know it. Otherwise
 *  delegates to heavy duty reflection.
 */
emmy.function$.arity = (function emmy$function$arity(f){
if((((!((f == null)))) && ((!((f.emmy$function$IArity$arity$arity$1 == null)))))){
return f.emmy$function$IArity$arity$arity$1(f);
} else {
return emmy$function$IArity$arity$dyn_33120(f);
}
});

(emmy.function$.IArity["_"] = true);

(emmy.function$.arity["_"] = (function (o){
var or__5162__auto__ = new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null);
}
}));

(cljs.core.Symbol.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.emmy$function$IArity$arity$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(0)], null);
}));

(cljs.core.MultiFn.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MultiFn.prototype.emmy$function$IArity$arity$arity$1 = (function (f){
var f__$1 = this;
return f__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"arity","arity",-1808556135));
}));
/**
 * Returns true if `f` is of [[v/kind]] `::v/function`, false otherwise.
 */
emmy.function$.function_QMARK_ = (function emmy$function$function_QMARK_(f){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(emmy.value.kind(f),new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744));
});
/**
 * The current Clojurescript definition of `with-meta` first tests its
 * argument with `js-fn?` and generates a MetaFn if so, frustrating our
 * definition of IWithMeta on native JS function objects. This wrapper
 * delegates to our definition, which allows native functions to safely
 * carry metadata. Note that in Clojure one is guaranteed a fresh object
 * with the new metadata, but in Clojurescript the target is mutated.
 * This function is safe to use on freshly created functions, but may
 * require careful consideration in other contexts.
 */
emmy.function$.with_meta = (function emmy$function$with_meta(f,m){
return emmy.value.set_js_meta_BANG_(f,m);
});
/**
 * Appends the supplied `arity` to the metadata of `f`, knocking out any
 *   pre-existing arity notation.
 * 
 *   Optionally accepts a third parameter `m` of metadata to attach to the return
 *   function, in addition to the new `:arity` key.
 */
emmy.function$.with_arity = (function emmy$function$with_arity(var_args){
var G__32412 = arguments.length;
switch (G__32412) {
case 2:
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2 = (function (f,arity){
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$3(f,arity,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$3 = (function (f,arity,m){
var new_meta = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(f),m], 0)),new cljs.core.Keyword(null,"arity","arity",-1808556135),arity);
return emmy.function$.with_meta(f,new_meta);
}));

(emmy.function$.with_arity.cljs$lang$maxFixedArity = 3);

/**
 * Arity-preserving version of `clojure.core/comp`.
 * 
 *   The arity of a composition is the arity of the rightmost (that is, first to be
 *   applied) function term in `fns`.
 */
emmy.function$.compose = (function emmy$function$compose(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33124 = arguments.length;
var i__5898__auto___33125 = (0);
while(true){
if((i__5898__auto___33125 < len__5897__auto___33124)){
args__5903__auto__.push((arguments[i__5898__auto___33125]));

var G__33127 = (i__5898__auto___33125 + (1));
i__5898__auto___33125 = G__33127;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
var a = emmy.function$.arity((function (){var or__5162__auto__ = cljs.core.last(fns);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.identity;
}
})());
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,fns),a);
}));

(emmy.function$.compose.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.function$.compose.cljs$lang$applyTo = (function (seq32419){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32419));
}));

/**
 * meta-preserving version of `clojure.core/memoize`.
 * 
 *   The returned function will have a new `:arity` entry in its metadata with the
 *   `arity` of the original `f`; this is because the process used to figure out a
 *   function's arity will not work across the memoization boundary.
 */
emmy.function$.memoize = (function emmy$function$memoize(f){
var m = cljs.core.meta(f);
var m__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$1(m))?m:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"arity","arity",-1808556135),emmy.function$.arity(f)));
return emmy.function$.with_meta(cljs.core.memoize(f),m__$1);
});
/**
 * For non-functions, acts like [[clojure.core/get]]. For function
 *   arguments (anything that responds true to [[function?]]), returns
 * 
 *   ```clojure
 *   (comp #(clojure.core/get % k) f)
 *   ```
 * 
 *   If `not-found` is supplied it's passed through to the
 *   composed [[clojure.core/get]].
 */
emmy.function$.get = (function emmy$function$get(var_args){
var G__32428 = arguments.length;
switch (G__32428) {
case 2:
return emmy.function$.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.function$.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.function$.get.cljs$core$IFn$_invoke$arity$2 = (function (f,k){
if(emmy.function$.function_QMARK_(f)){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__32423_SHARP_){
return emmy.function$.get.cljs$core$IFn$_invoke$arity$2(p1__32423_SHARP_,k);
}),f], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(f,k);
}
}));

(emmy.function$.get.cljs$core$IFn$_invoke$arity$3 = (function (f,k,not_found){
if(emmy.function$.function_QMARK_(f)){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__32424_SHARP_){
return emmy.function$.get.cljs$core$IFn$_invoke$arity$3(p1__32424_SHARP_,k,not_found);
}),f], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(f,k,not_found);
}
}));

(emmy.function$.get.cljs$lang$maxFixedArity = 3);

/**
 * For non-functions, acts like [[clojure.core/get-in]]. For function
 *   arguments (anything that responds true to [[function?]]), returns
 * 
 *   ```clojure
 *   (comp #(clojure.core/get-in % ks) f)
 *   ```
 * 
 *   If `not-found` is supplied it's passed through to the
 *   composed [[clojure.core/get-in]].
 */
emmy.function$.get_in = (function emmy$function$get_in(var_args){
var G__32435 = arguments.length;
switch (G__32435) {
case 2:
return emmy.function$.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.function$.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.function$.get_in.cljs$core$IFn$_invoke$arity$2 = (function (f,ks){
if(emmy.function$.function_QMARK_(f)){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__32431_SHARP_){
return emmy.function$.get_in.cljs$core$IFn$_invoke$arity$2(p1__32431_SHARP_,ks);
}),f], 0));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(f,ks);
}
}));

(emmy.function$.get_in.cljs$core$IFn$_invoke$arity$3 = (function (f,ks,not_found){
if(emmy.function$.function_QMARK_(f)){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__32432_SHARP_){
return emmy.function$.get_in.cljs$core$IFn$_invoke$arity$3(p1__32432_SHARP_,ks,not_found);
}),f], 0));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(f,ks,not_found);
}
}));

(emmy.function$.get_in.cljs$lang$maxFixedArity = 3);

emmy.function$.zero_like = (function emmy$function$zero_like(f){
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$3((function() { 
var G__33135__delegate = function (args){
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args));
};
var G__33135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33136__i = 0, G__33136__a = new Array(arguments.length -  0);
while (G__33136__i < G__33136__a.length) {G__33136__a[G__33136__i] = arguments[G__33136__i + 0]; ++G__33136__i;}
  args = new cljs.core.IndexedSeq(G__33136__a,0,null);
} 
return G__33135__delegate.call(this,args);};
G__33135.cljs$lang$maxFixedArity = 0;
G__33135.cljs$lang$applyTo = (function (arglist__33137){
var args = cljs.core.seq(arglist__33137);
return G__33135__delegate(args);
});
G__33135.cljs$core$IFn$_invoke$arity$variadic = G__33135__delegate;
return G__33135;
})()
,emmy.function$.arity(f),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"zero-like","zero-like",1759410522)], null));
});
emmy.function$.one_like = (function emmy$function$one_like(f){
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$3((function() { 
var G__33142__delegate = function (args){
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args));
};
var G__33142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33144__i = 0, G__33144__a = new Array(arguments.length -  0);
while (G__33144__i < G__33144__a.length) {G__33144__a[G__33144__i] = arguments[G__33144__i + 0]; ++G__33144__i;}
  args = new cljs.core.IndexedSeq(G__33144__a,0,null);
} 
return G__33142__delegate.call(this,args);};
G__33142.cljs$lang$maxFixedArity = 0;
G__33142.cljs$lang$applyTo = (function (arglist__33145){
var args = cljs.core.seq(arglist__33145);
return G__33142__delegate(args);
});
G__33142.cljs$core$IFn$_invoke$arity$variadic = G__33142__delegate;
return G__33142;
})()
,emmy.function$.arity(f),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"one-like","one-like",887133720)], null));
});
/**
 * Identity function. Returns its argument.
 */
emmy.function$.I = cljs.core.identity;
emmy.function$.identity_like = (function emmy$function$identity_like(f){
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,emmy.function$.arity(f),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"identity-like","identity-like",-98546347)], null));
});
/**
 * Takes a function `f` and a sequence of `shifts`, and returns a new function
 *   that adds each shift to the corresponding argument of `f`. Too many or two few
 *   shifts are ignored.
 * 
 *   ```clojure
 *   ((arg-shift square 3) 4) ==> 49
 *   ((arg-shift square 3 2 1) 4) ==> 49
 *   ```
 */
emmy.function$.arg_shift = (function emmy$function$arg_shift(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33146 = arguments.length;
var i__5898__auto___33147 = (0);
while(true){
if((i__5898__auto___33147 < len__5897__auto___33146)){
args__5903__auto__.push((arguments[i__5898__auto___33147]));

var G__33148 = (i__5898__auto___33147 + (1));
i__5898__auto___33147 = G__33148;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.function$.arg_shift.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.function$.arg_shift.cljs$core$IFn$_invoke$arity$variadic = (function (f,shifts){
var shifts__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(shifts,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)));
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2((function() { 
var G__33151__delegate = function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._PLUS_,xs,shifts__$1));
};
var G__33151 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__33152__i = 0, G__33152__a = new Array(arguments.length -  0);
while (G__33152__i < G__33152__a.length) {G__33152__a[G__33152__i] = arguments[G__33152__i + 0]; ++G__33152__i;}
  xs = new cljs.core.IndexedSeq(G__33152__a,0,null);
} 
return G__33151__delegate.call(this,xs);};
G__33151.cljs$lang$maxFixedArity = 0;
G__33151.cljs$lang$applyTo = (function (arglist__33153){
var xs = cljs.core.seq(arglist__33153);
return G__33151__delegate(xs);
});
G__33151.cljs$core$IFn$_invoke$arity$variadic = G__33151__delegate;
return G__33151;
})()
,emmy.function$.arity(f));
}));

(emmy.function$.arg_shift.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.function$.arg_shift.cljs$lang$applyTo = (function (seq32491){
var G__32492 = cljs.core.first(seq32491);
var seq32491__$1 = cljs.core.next(seq32491);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32492,seq32491__$1);
}));

/**
 * Takes a function `f` and a sequence of `factors`, and returns a new function
 *   that multiplies each factor by the corresponding argument of `f`. Too many or
 *   two few factors are ignored.
 * 
 *   ```clojure
 *   ((arg-scale square 3) 4) ==> 144
 *   ((arg-scale square 3 2 1) 4) ==> 144
 *   ```
 */
emmy.function$.arg_scale = (function emmy$function$arg_scale(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33154 = arguments.length;
var i__5898__auto___33155 = (0);
while(true){
if((i__5898__auto___33155 < len__5897__auto___33154)){
args__5903__auto__.push((arguments[i__5898__auto___33155]));

var G__33156 = (i__5898__auto___33155 + (1));
i__5898__auto___33155 = G__33156;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.function$.arg_scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.function$.arg_scale.cljs$core$IFn$_invoke$arity$variadic = (function (f,factors){
var factors__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(factors,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((1)));
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2((function() { 
var G__33158__delegate = function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,xs,factors__$1));
};
var G__33158 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__33162__i = 0, G__33162__a = new Array(arguments.length -  0);
while (G__33162__i < G__33162__a.length) {G__33162__a[G__33162__i] = arguments[G__33162__i + 0]; ++G__33162__i;}
  xs = new cljs.core.IndexedSeq(G__33162__a,0,null);
} 
return G__33158__delegate.call(this,xs);};
G__33158.cljs$lang$maxFixedArity = 0;
G__33158.cljs$lang$applyTo = (function (arglist__33163){
var xs = cljs.core.seq(arglist__33163);
return G__33158__delegate(xs);
});
G__33158.cljs$core$IFn$_invoke$arity$variadic = G__33158__delegate;
return G__33158;
})()
,emmy.function$.arity(f));
}));

(emmy.function$.arg_scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.function$.arg_scale.cljs$lang$applyTo = (function (seq32516){
var G__32517 = cljs.core.first(seq32516);
var seq32516__$1 = cljs.core.next(seq32516);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32517,seq32516__$1);
}));

(cljs.core.MultiFn.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MultiFn.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744);
}));

(emmy.value.IKind["function"] = true);

(emmy.value.kind["function"] = (function (_){
return new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744);
}));

(cljs.core.Var.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744);
}));

(cljs.core.MetaFn.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MetaFn.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744);
}));
/**
 * Returns true if the supplied function is variadic, false otherwise.
 */
emmy.function$.variadic_QMARK_ = (function emmy$function$variadic_QMARK_(f){
return cljs.core.boolean$(f.cljs$core$IFn$_invoke$arity$variadic);
});

/**
 * When CLJS functions have different arities, the function is represented as a js
 *   object with each arity storied under its own key.
 */
emmy.function$.exposed_arities = (function emmy$function$exposed_arities(f){
var pattern = cljs.core.re_pattern(/invoke\$arity\$\d+/);
var parse = (function (s){
var temp__5825__auto__ = cljs.core.re_find(pattern,s);
if(cljs.core.truth_(temp__5825__auto__)){
var arity = temp__5825__auto__;
return parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(arity,(13)));
} else {
return null;
}
});
var arities = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.cljs$lang$maxFixedArity], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse,cljs.core.js_keys(f)))));
if(cljs.core.empty_QMARK_(arities)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.length], null);
} else {
return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(arities);
}
});

/**
 * Returns a data structure indicating the arity of the supplied function.
 */
emmy.function$.js_arity = (function emmy$function$js_arity(f){
var arities = emmy.function$.exposed_arities(f);
if(emmy.function$.variadic_QMARK_(f)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null),arities)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at-least","at-least",267196846),cljs.core.first(arities)], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),cljs.core.first(arities)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),cljs.core.first(arities),cljs.core.last(arities)], null);

}
}
});
/**
 * Returns the arity of the function f. Computing arities of clojure
 *   functions is a bit complicated. It involves reflection, so the results are
 *   definitely worth memoizing.
 */
emmy.function$.reflect_on_arity = cljs.core.memoize(emmy.function$.js_arity);
/**
 * If true, attempting to pass two functions of incompatible arity
 *   into any binary function, or into [[combine-arities]], will throw. False by
 *   default.
 */
emmy.function$._STAR_strict_arity_checks_STAR_ = false;
(emmy.function$.IArity["function"] = true);

(emmy.function$.arity["function"] = (function (f){
return new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(f),emmy.function$.reflect_on_arity(f));
}));

(cljs.core.MetaFn.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MetaFn.prototype.emmy$function$IArity$arity$arity$1 = (function (f){
var f__$1 = this;
return new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(f__$1),emmy.function$.reflect_on_arity(f__$1));
}));
/**
 * Returns the joint arity of arities `a` and `b`.
 * 
 *   The joint arity is the loosest possible arity specification compatible with
 *   both `a` and `b`. Throws if `a` and `b` are incompatible.
 */
emmy.function$.combine_arities = (function emmy$function$combine_arities(var_args){
var G__32591 = arguments.length;
switch (G__32591) {
case 0:
return emmy.function$.combine_arities.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.function$.combine_arities.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.function$.combine_arities.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.function$.combine_arities.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at-least","at-least",267196846),(0)], null);
}));

(emmy.function$.combine_arities.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(emmy.function$.combine_arities.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var fail = (function emmy$function$fail(){
if(cljs.core.truth_(emmy.function$._STAR_strict_arity_checks_STAR_)){
return emmy.util.illegal((""+"Incompatible arities: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at-least","at-least",267196846),(0)], null);
}
});
if((cljs.core.compare(cljs.core.first(a),cljs.core.first(b)) > (0))){
return emmy.function$.combine_arities.cljs$core$IFn$_invoke$arity$2(b,a);
} else {
try{if(((cljs.core.vector_QMARK_(a)) && ((cljs.core.count(a) === 2)))){
try{var a_0__32723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(0));
if(cljs.core.keyword_identical_QMARK_(a_0__32723,new cljs.core.Keyword(null,"at-least","at-least",267196846))){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 2)))){
try{var b_0__32728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__32728,new cljs.core.Keyword(null,"at-least","at-least",267196846))){
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at-least","at-least",267196846),cljs.core.max.cljs$core$IFn$_invoke$arity$2(k,k2)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e32923){if((e32923 instanceof Error)){
var e__31215__auto__ = e32923;
if((e__31215__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto__;
}
} else {
throw e32923;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32897){if((e32897 instanceof Error)){
var e__31215__auto__ = e32897;
if((e__31215__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 3)))){
try{var b_0__32732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__32732,new cljs.core.Keyword(null,"between","between",1131099276))){
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
var m__$1 = cljs.core.max.cljs$core$IFn$_invoke$arity$2(k,m);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m__$1,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),m__$1], null);
} else {
if((m__$1 < n)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),m__$1,n], null);
} else {
return fail();

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e32914){if((e32914 instanceof Error)){
var e__31215__auto____$1 = e32914;
if((e__31215__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto____$1;
}
} else {
throw e32914;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32904){if((e32904 instanceof Error)){
var e__31215__auto____$1 = e32904;
if((e__31215__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 2)))){
try{var b_0__32739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__32739,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
if((l >= k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),l], null);
} else {
return fail();
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e32910){if((e32910 instanceof Error)){
var e__31215__auto____$2 = e32910;
if((e__31215__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto____$2;
}
} else {
throw e32910;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32905){if((e32905 instanceof Error)){
var e__31215__auto____$2 = e32905;
if((e__31215__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto____$2;
}
} else {
throw e32905;

}
}} else {
throw e__31215__auto____$1;
}
} else {
throw e32904;

}
}} else {
throw e__31215__auto__;
}
} else {
throw e32897;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32894){if((e32894 instanceof Error)){
var e__31215__auto__ = e32894;
if((e__31215__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto__;
}
} else {
throw e32894;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32803){if((e32803 instanceof Error)){
var e__31215__auto__ = e32803;
if((e__31215__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(a)) && ((cljs.core.count(a) === 3)))){
try{var a_0__32747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(0));
if(cljs.core.keyword_identical_QMARK_(a_0__32747,new cljs.core.Keyword(null,"between","between",1131099276))){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 3)))){
try{var b_0__32758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__32758,new cljs.core.Keyword(null,"between","between",1131099276))){
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(2));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(2));
var m__$1 = cljs.core.max.cljs$core$IFn$_invoke$arity$2(m,m2);
var n__$1 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,n2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m__$1,n__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),m__$1], null);
} else {
if((m__$1 < n__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),m__$1,n__$1], null);
} else {
return fail();

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e32880){if((e32880 instanceof Error)){
var e__31215__auto____$1 = e32880;
if((e__31215__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto____$1;
}
} else {
throw e32880;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32849){if((e32849 instanceof Error)){
var e__31215__auto____$1 = e32849;
if((e__31215__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 2)))){
try{var b_0__32761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__32761,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(2));
if((((m <= k)) && ((k <= n)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),k], null);
} else {
return fail();
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e32868){if((e32868 instanceof Error)){
var e__31215__auto____$2 = e32868;
if((e__31215__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto____$2;
}
} else {
throw e32868;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32852){if((e32852 instanceof Error)){
var e__31215__auto____$2 = e32852;
if((e__31215__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto____$2;
}
} else {
throw e32852;

}
}} else {
throw e__31215__auto____$1;
}
} else {
throw e32849;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32846){if((e32846 instanceof Error)){
var e__31215__auto____$1 = e32846;
if((e__31215__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto____$1;
}
} else {
throw e32846;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32808){if((e32808 instanceof Error)){
var e__31215__auto____$1 = e32808;
if((e__31215__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(a)) && ((cljs.core.count(a) === 2)))){
try{var a_0__32769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(0));
if(cljs.core.keyword_identical_QMARK_(a_0__32769,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 2)))){
try{var b_0__32777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__32777,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,l)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),k], null);
} else {
return fail();
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e32828){if((e32828 instanceof Error)){
var e__31215__auto____$2 = e32828;
if((e__31215__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto____$2;
}
} else {
throw e32828;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32823){if((e32823 instanceof Error)){
var e__31215__auto____$2 = e32823;
if((e__31215__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto____$2;
}
} else {
throw e32823;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32820){if((e32820 instanceof Error)){
var e__31215__auto____$2 = e32820;
if((e__31215__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31215__auto____$2;
}
} else {
throw e32820;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32815){if((e32815 instanceof Error)){
var e__31215__auto____$2 = e32815;
if((e__31215__auto____$2 === cljs.core.match.backtrack)){
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b))));
} else {
throw e__31215__auto____$2;
}
} else {
throw e32815;

}
}} else {
throw e__31215__auto____$1;
}
} else {
throw e32808;

}
}} else {
throw e__31215__auto__;
}
} else {
throw e32803;

}
}}
}));

(emmy.function$.combine_arities.cljs$lang$maxFixedArity = 2);

/**
 * Find the most relaxed possible statement of the joint arity of the given sequence of `arities`.
 *   If they are incompatible, an exception is thrown.
 */
emmy.function$.joint_arity = (function emmy$function$joint_arity(arities){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(emmy.function$.combine_arities,arities);
});
/**
 * Returns the most general arity compatible with the aritiies of all entries in
 *   the supplied sequence `xs` of values.
 */
emmy.function$.seq_arity = (function emmy$function$seq_arity(xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.function$.arity),emmy.function$.combine_arities,xs);
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.function","cofunction","emmy.function/cofunction",-944520219));
/**
 * For a unary function `f` (like [[g/sqrt]]), returns a function of one function
 *   `g`. The returned function acts like `(comp f g)`. For example:
 * 
 *   ```clojure
 *   (([[unary-operation]] f) g)
 *   ;;=> (fn [x] (f (g x)))
 *   ```
 */
emmy.function$.unary_operation = (function emmy$function$unary_operation(f){
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,f),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null));
});
/**
 * Given an [[emmy.value/scalar?]] input `x`, returns a function of arity `arity`
 *   that always returns `x` no matter what input it receives.
 * 
 *   For non-numerical `x`, returns `x`.
 */
emmy.function$.coerce_to_fn = (function emmy$function$coerce_to_fn(x,arity){
if(emmy.value.scalar_QMARK_(x)){
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(x),arity);
} else {
return x;
}
});
/**
 * Accepts a binary function `op`, and returns a function of two functions `f` and
 *   `g` which will produce the pointwise operation `op` of the results of applying
 *   both `f` and `g` to the input.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (([[binary-operation]] op) f g)
 *   ;;=> (fn [x] (op (f x) (g x)))
 *   ```
 */
emmy.function$.binary_operation = (function emmy$function$binary_operation(op){
var h = (function emmy$function$binary_operation_$_h(f,g){
var f_arity = ((emmy.value.scalar_QMARK_(f))?emmy.function$.arity(g):emmy.function$.arity(f));
var g_arity = ((emmy.value.scalar_QMARK_(g))?f_arity:emmy.function$.arity(g));
var f1 = emmy.function$.coerce_to_fn(f,f_arity);
var g1 = emmy.function$.coerce_to_fn(g,g_arity);
var arity = emmy.function$.joint_arity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f_arity,g_arity], null));
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2((function() { 
var G__33181__delegate = function (args){
var G__32939 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f1,args);
var G__32940 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(g1,args);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__32939,G__32940) : op.call(null,G__32939,G__32940));
};
var G__33181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33184__i = 0, G__33184__a = new Array(arguments.length -  0);
while (G__33184__i < G__33184__a.length) {G__33184__a[G__33184__i] = arguments[G__33184__i + 0]; ++G__33184__i;}
  args = new cljs.core.IndexedSeq(G__33184__a,0,null);
} 
return G__33181__delegate.call(this,args);};
G__33181.cljs$lang$maxFixedArity = 0;
G__33181.cljs$lang$applyTo = (function (arglist__33185){
var args = cljs.core.seq(arglist__33185);
return G__33181__delegate(args);
});
G__33181.cljs$core$IFn$_invoke$arity$variadic = G__33181__delegate;
return G__33181;
})()
,arity);
});
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2(h,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null));
});
/**
 * Given a generic unary function `generic-op`, define the multimethods necessary
 *   to introduce this operation to function arguments.
 */
emmy.function$.defunary = (function emmy$function$defunary(generic_op){
var unary_op = emmy.function$.unary_operation(generic_op);
return generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),(function (a){
return (unary_op.cljs$core$IFn$_invoke$arity$1 ? unary_op.cljs$core$IFn$_invoke$arity$1(a) : unary_op.call(null,a));
}));
});
/**
 * Given a generic binary function `generic-op` (and an optional `binary-op` to
 *   perform the work), define the multimethods necessary to introduce this
 *   operation to function arguments.
 */
emmy.function$.defbinary = (function emmy$function$defbinary(var_args){
var G__32953 = arguments.length;
switch (G__32953) {
case 1:
return emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1 = (function (generic_op){
return emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$2(generic_op,generic_op);
}));

(emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$2 = (function (generic_op,binary_op){
var binop = emmy.function$.binary_operation(binary_op);
var seq__32959 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744),new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744),new cljs.core.Keyword("emmy.function","cofunction","emmy.function/cofunction",-944520219)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.function","cofunction","emmy.function/cofunction",-944520219),new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null)], null));
var chunk__32960 = null;
var count__32961 = (0);
var i__32962 = (0);
while(true){
if((i__32962 < count__32961)){
var signature = chunk__32960.cljs$core$IIndexed$_nth$arity$2(null,i__32962);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,signature,((function (seq__32959,chunk__32960,count__32961,i__32962,signature,binop){
return (function (a,b){
return (binop.cljs$core$IFn$_invoke$arity$2 ? binop.cljs$core$IFn$_invoke$arity$2(a,b) : binop.call(null,a,b));
});})(seq__32959,chunk__32960,count__32961,i__32962,signature,binop))
);


var G__33198 = seq__32959;
var G__33199 = chunk__32960;
var G__33200 = count__32961;
var G__33201 = (i__32962 + (1));
seq__32959 = G__33198;
chunk__32960 = G__33199;
count__32961 = G__33200;
i__32962 = G__33201;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__32959);
if(temp__5825__auto__){
var seq__32959__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32959__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__32959__$1);
var G__33202 = cljs.core.chunk_rest(seq__32959__$1);
var G__33203 = c__5694__auto__;
var G__33204 = cljs.core.count(c__5694__auto__);
var G__33205 = (0);
seq__32959 = G__33202;
chunk__32960 = G__33203;
count__32961 = G__33204;
i__32962 = G__33205;
continue;
} else {
var signature = cljs.core.first(seq__32959__$1);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,signature,((function (seq__32959,chunk__32960,count__32961,i__32962,signature,seq__32959__$1,temp__5825__auto__,binop){
return (function (a,b){
return (binop.cljs$core$IFn$_invoke$arity$2 ? binop.cljs$core$IFn$_invoke$arity$2(a,b) : binop.call(null,a,b));
});})(seq__32959,chunk__32960,count__32961,i__32962,signature,seq__32959__$1,temp__5825__auto__,binop))
);


var G__33208 = cljs.core.next(seq__32959__$1);
var G__33209 = null;
var G__33210 = (0);
var G__33211 = (0);
seq__32959 = G__33208;
chunk__32960 = G__33209;
count__32961 = G__33210;
i__32962 = G__33211;
continue;
}
} else {
return null;
}
}
break;
}
}));

(emmy.function$.defbinary.cljs$lang$maxFixedArity = 2);

emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$2(emmy.generic.add,emmy.generic._PLUS_);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$2(emmy.generic.sub,emmy.generic._);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$2(emmy.generic.mul,emmy.generic._STAR_);
emmy.function$.defunary(emmy.generic.invert);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$2(emmy.generic.div,emmy.generic.divide);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.expt);
emmy.function$.defunary(emmy.generic.sqrt);
emmy.function$.defunary(emmy.generic.negate);
emmy.function$.defunary(emmy.generic.negative_QMARK_);
emmy.function$.defunary(emmy.generic.abs);
emmy.function$.defunary(emmy.generic.floor);
emmy.function$.defunary(emmy.generic.ceiling);
emmy.function$.defunary(emmy.generic.integer_part);
emmy.function$.defunary(emmy.generic.fractional_part);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.quotient);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.remainder);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.modulo);
emmy.function$.defunary(emmy.generic.sin);
emmy.function$.defunary(emmy.generic.cos);
emmy.function$.defunary(emmy.generic.tan);
emmy.function$.defunary(emmy.generic.asin);
emmy.function$.defunary(emmy.generic.acos);
emmy.function$.defunary(emmy.generic.atan);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.atan);
emmy.function$.defunary(emmy.generic.sinh);
emmy.function$.defunary(emmy.generic.cosh);
emmy.function$.defunary(emmy.generic.tanh);
emmy.function$.defunary(emmy.generic.square);
emmy.function$.defunary(emmy.generic.cube);
emmy.function$.defunary(emmy.generic.exp);
emmy.function$.defunary(emmy.generic.log);
emmy.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),(function (f){
return (function (g){
return (function (a){
var G__33007 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__33007) : g.call(null,G__33007));
});
});
}));
emmy.function$.defunary(emmy.generic.determinant);
emmy.function$.defunary(emmy.generic.trace);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.gcd);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.lcm);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.exact_divide);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.solve_linear);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.solve_linear_right);
emmy.function$.defunary(emmy.generic.dimension);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.dot_product);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.inner_product);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.outer_product);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.cross_product);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.make_rectangular);
emmy.function$.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.make_polar);
emmy.function$.defunary(emmy.generic.real_part);
emmy.function$.defunary(emmy.generic.imag_part);
emmy.function$.defunary(emmy.generic.magnitude);
emmy.function$.defunary(emmy.generic.angle);
emmy.function$.defunary(emmy.generic.conjugate);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),(function (_){
return false;
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),(function (_){
return false;
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),(function (_){
return false;
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),(function (f){
return emmy.function$.zero_like(f);
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),(function (f){
return emmy.function$.one_like(f);
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),(function (f){
return emmy.function$.identity_like(f);
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),(function (f){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.exact_QMARK_,f], 0));
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),(function (f){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(emmy.value.object_name_map),f,(((f instanceof cljs.core.MultiFn))?(function (){var temp__5823__auto__ = cljs.core.get_method(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null));
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)) : m.call(null,new cljs.core.Keyword(null,"name","name",1843675177)));
} else {
return f;
}
})():(((f instanceof cljs.core.MetaFn))?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(f.meta,f):((cljs.core.var_QMARK_(f))?emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(f)):f
))));
}));
/**
 * Returns a new function that composes a 'tag extraction' step with `f`. The
 *   returned fn will
 * 
 *   - call the underlying `f`, producing `result`
 *   - return `(extract-tangent result tag mode)`
 * 
 *   If called within the scope of a function waiting for the same `tag`, the
 *   returned function will remap any instance of `tag` that appears in any
 *   differential argument passed to it to a private `fresh` tag, to prevent
 *   internal perturbation confusion. Any tangent components in the final result
 *   tagged with `fresh` will be remapped in the final result back to `tag`.
 * 
 *   If called _outside_ of a function waiting for `tag` no tag remapping will
 *   occur.
 */
emmy.function$.extract_tangent_fn = (function emmy$function$extract_tangent_fn(f,tag,mode){
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2((function() { 
var G__33216__delegate = function (args){
if(emmy.dual.tag_active_QMARK_(tag)){
var fresh = emmy.dual.fresh_tag();
return emmy.dual.replace_tag(emmy.dual.extract_tangent(emmy.dual.with_active_tag(tag,f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33058_SHARP_){
return emmy.dual.replace_tag(p1__33058_SHARP_,tag,fresh);
}),args)),tag,mode),fresh,tag);
} else {
return emmy.dual.extract_tangent(emmy.dual.with_active_tag(tag,f,args),tag,mode);
}
};
var G__33216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33217__i = 0, G__33217__a = new Array(arguments.length -  0);
while (G__33217__i < G__33217__a.length) {G__33217__a[G__33217__i] = arguments[G__33217__i + 0]; ++G__33217__i;}
  args = new cljs.core.IndexedSeq(G__33217__a,0,null);
} 
return G__33216__delegate.call(this,args);};
G__33216.cljs$lang$maxFixedArity = 0;
G__33216.cljs$lang$applyTo = (function (arglist__33218){
var args = cljs.core.seq(arglist__33218);
return G__33216__delegate(args);
});
G__33216.cljs$core$IFn$_invoke$arity$variadic = G__33216__delegate;
return G__33216;
})()
,emmy.function$.arity(f));
});
/**
 * Returns a new function that composes a 'tag replacement' step with `f`.
 * 
 *   If called within the scope of a function waiting for the same `tag`, the
 *   returned function will:
 * 
 *   - make a fresh tag, and replace all `old` tags with `fresh` in the inputs
 *   - call `f`, producing `result`
 *   - return `(replace-tag result old new)`
 *   - remap any tangent component in the result tagged with `fresh` back to `old`.
 * 
 *   If called _outside_ of a function waiting for `tag`, the returned function
 *   will apply `f` to its arguments and call `(replace-tag result old new)` with
 *   no tag-rerouting.
 */
emmy.function$.replace_tag_fn = (function emmy$function$replace_tag_fn(f,old,new$){
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2((function() { 
var G__33219__delegate = function (args){
if(emmy.dual.tag_active_QMARK_(old)){
var fresh = emmy.dual.fresh_tag();
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33072_SHARP_){
return emmy.dual.replace_tag(p1__33072_SHARP_,old,fresh);
}),args);
return emmy.dual.replace_tag(emmy.dual.replace_tag(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1),old,new$),fresh,old);
} else {
return emmy.dual.replace_tag(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args),old,new$);
}
};
var G__33219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33221__i = 0, G__33221__a = new Array(arguments.length -  0);
while (G__33221__i < G__33221__a.length) {G__33221__a[G__33221__i] = arguments[G__33221__i + 0]; ++G__33221__i;}
  args = new cljs.core.IndexedSeq(G__33221__a,0,null);
} 
return G__33219__delegate.call(this,args);};
G__33219.cljs$lang$maxFixedArity = 0;
G__33219.cljs$lang$applyTo = (function (arglist__33222){
var args = cljs.core.seq(arglist__33222);
return G__33219__delegate(args);
});
G__33219.cljs$core$IFn$_invoke$arity$variadic = G__33219__delegate;
return G__33219;
})()
,emmy.function$.arity(f));
});
(cljs.core.MultiFn.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MultiFn.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (f,old,new$){
var f__$1 = this;
return emmy.function$.replace_tag_fn(f__$1,old,new$);
}));

(cljs.core.MultiFn.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (f,tag,mode){
var f__$1 = this;
return emmy.function$.extract_tangent_fn(f__$1,tag,mode);
}));

(cljs.core.MultiFn.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (f,id){
var f__$1 = this;
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__33096_SHARP_){
return emmy.dual.extract_id(p1__33096_SHARP_,id);
}),f__$1);
}));

(emmy.dual.IPerturbed["function"] = true);

(emmy.dual.replace_tag["function"] = (function (f,old,new$){
return emmy.function$.replace_tag_fn(f,old,new$);
}));

(emmy.dual.extract_tangent["function"] = (function (f,tag,mode){
return emmy.function$.extract_tangent_fn(f,tag,mode);
}));

(emmy.dual.extract_id["function"] = (function (f,id){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__33098_SHARP_){
return emmy.dual.extract_id(p1__33098_SHARP_,id);
}),f);
}));

(cljs.core.MetaFn.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MetaFn.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (f,old,new$){
var f__$1 = this;
return emmy.function$.replace_tag_fn(f__$1.afn,old,new$);
}));

(cljs.core.MetaFn.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (f,tag,mode){
var f__$1 = this;
return emmy.function$.extract_tangent_fn(f__$1.afn,tag,mode);
}));

(cljs.core.MetaFn.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (f,id){
var f__$1 = this;
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__33099_SHARP_){
return emmy.dual.extract_id(p1__33099_SHARP_,id);
}),f__$1.afn);
}));

//# sourceMappingURL=emmy.function.js.map
