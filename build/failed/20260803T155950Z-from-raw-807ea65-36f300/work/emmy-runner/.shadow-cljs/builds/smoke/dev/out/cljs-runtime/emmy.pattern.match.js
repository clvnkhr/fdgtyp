goog.provide('emmy.pattern.match');
/**
 * Matcher which will fail for any input.
 */
emmy.pattern.match.fail = (function emmy$pattern$match$fail(_,___$1,___$2){
return null;
});
/**
 * Matcher that succeeds (with no new bindings) for any input, passing along its
 *   input frame.
 */
emmy.pattern.match.pass = (function emmy$pattern$match$pass(frame,_,succeed){
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame) : succeed.call(null,frame));
});
/**
 * Takes a `new-frame` of bindings and returns a matcher that will ignore its
 *   input and always succeed by replacing the current map of bindings with
 *   `new-frame`.
 */
emmy.pattern.match.with_frame = (function emmy$pattern$match$with_frame(new_frame){
return (function (_,___$1,succeed){
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(new_frame) : succeed.call(null,new_frame));
});
});
/**
 * Takes a function from `frame` to a new frame (or false) and any number of
 *   arguments `args`, and returns a matcher that will ignore its input and
 * 
 *   - succeed with `(apply f frame args)` if that value is truthy,
 *   - fail otherwise.
 */
emmy.pattern.match.update_frame = (function emmy$pattern$match$update_frame(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33634 = arguments.length;
var i__5898__auto___33635 = (0);
while(true){
if((i__5898__auto___33635 < len__5897__auto___33634)){
args__5903__auto__.push((arguments[i__5898__auto___33635]));

var G__33636 = (i__5898__auto___33635 + (1));
i__5898__auto___33635 = G__33636;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.pattern.match.update_frame.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.pattern.match.update_frame.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function (frame,_,succeed){
var temp__5825__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,frame,args);
if(cljs.core.truth_(temp__5825__auto__)){
var new_frame = temp__5825__auto__;
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(new_frame) : succeed.call(null,new_frame));
} else {
return null;
}
});
}));

(emmy.pattern.match.update_frame.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.pattern.match.update_frame.cljs$lang$applyTo = (function (seq33330){
var G__33331 = cljs.core.first(seq33330);
var seq33330__$1 = cljs.core.next(seq33330);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33331,seq33330__$1);
}));

/**
 * Takes a predicate function `pred` and returns a matcher that succeeds (with no
 *   new bindings) if its data input passes the predicate, fails otherwise.
 */
emmy.pattern.match.predicate = (function emmy$pattern$match$predicate(pred){
return (function emmy$pattern$match$predicate_$_predicate_match(frame,data,succeed){
var and__5160__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(data) : pred.call(null,data));
if(cljs.core.truth_(and__5160__auto__)){
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame) : succeed.call(null,frame));
} else {
return and__5160__auto__;
}
});
});
/**
 * Takes a predicate function `pred` and returns a matcher that succeeds (with no
 *   new bindings) if its data input passes the predicate, fails otherwise.
 */
emmy.pattern.match.frame_predicate = (function emmy$pattern$match$frame_predicate(pred){
return (function emmy$pattern$match$frame_predicate_$_frame_pred(frame,_,succeed){
var and__5160__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(frame) : pred.call(null,frame));
if(cljs.core.truth_(and__5160__auto__)){
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame) : succeed.call(null,frame));
} else {
return and__5160__auto__;
}
});
});
/**
 * Takes some input `x` and returns a matcher which succeeds if its data input is
 *   equal to `x` (via `=` or the optional `eq-fn` argument). Fails otherwise.
 * 
 *   The frame is not modified.
 */
emmy.pattern.match.eq = (function emmy$pattern$match$eq(var_args){
var G__33359 = arguments.length;
switch (G__33359) {
case 1:
return emmy.pattern.match.eq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.pattern.match.eq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.match.eq.cljs$core$IFn$_invoke$arity$1 = (function (x){
return emmy.pattern.match.eq.cljs$core$IFn$_invoke$arity$2(x,cljs.core._EQ_);
}));

(emmy.pattern.match.eq.cljs$core$IFn$_invoke$arity$2 = (function (x,eq_fn){
return emmy.pattern.match.predicate((function (other){
return (eq_fn.cljs$core$IFn$_invoke$arity$2 ? eq_fn.cljs$core$IFn$_invoke$arity$2(x,other) : eq_fn.call(null,x,other));
}));
}));

(emmy.pattern.match.eq.cljs$lang$maxFixedArity = 2);

/**
 * Takes a binding variable `sym` and an optional predicate `pred`, and returns a
 *   matcher that binds its input to `sym` in the returned `frame`.
 * 
 *   The returned matcher only succeeds if `input` passes `pred`.
 * 
 *   If `sym` is already present in `frame`, the matcher only succeeds if the
 *   values are equal, fails otherwise.
 * 
 *   NOTE: If `sym` is the wildcard `_`, the returned matcher will not introduce a
 *   new binding, but _will_ still check the predicate.
 */
emmy.pattern.match.bind = (function emmy$pattern$match$bind(var_args){
var G__33364 = arguments.length;
switch (G__33364) {
case 1:
return emmy.pattern.match.bind.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.pattern.match.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.match.bind.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return emmy.pattern.match.bind.cljs$core$IFn$_invoke$arity$2(sym,(function (_){
return true;
}));
}));

(emmy.pattern.match.bind.cljs$core$IFn$_invoke$arity$2 = (function (sym,pred){
if(emmy.pattern.syntax.wildcard_QMARK_(sym)){
return emmy.pattern.match.predicate(pred);
} else {
return (function emmy$pattern$match$bind_match(frame,data,succeed){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(data) : pred.call(null,data)))){
var temp__5823__auto__ = cljs.core.find(frame,sym);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__33365 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33365,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33365,(1),null);
var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding,data);
if(and__5160__auto__){
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame) : succeed.call(null,frame));
} else {
return and__5160__auto__;
}
} else {
var G__33368 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,sym,data);
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(G__33368) : succeed.call(null,G__33368));
}
} else {
return null;
}
});
}
}));

(emmy.pattern.match.bind.cljs$lang$maxFixedArity = 2);

/**
 * Returns a matcher that passes its `frame` on to `success-pattern` if `pred`
 *   succeeds on its data input, fails otherwise.
 */
emmy.pattern.match.match_when = (function emmy$pattern$match$match_when(pred,success_pattern){
var match = (emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(success_pattern) : emmy.pattern.match.pattern__GT_combinators.call(null,success_pattern));
return (function (frame,xs,success){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(xs) : pred.call(null,xs)))){
return (match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(frame,xs,success) : match.call(null,frame,xs,success));
} else {
return null;
}
});
});
/**
 * Returns a matcher that passes its `frame` on to `success-pattern` if `pred`
 *   succeeds on its data input, `fail-pattern` otherwise.
 * 
 *   If no `fail-matcher` is supplied, the behavior is equivalent
 *   to [[match-when]].
 */
emmy.pattern.match.match_if = (function emmy$pattern$match$match_if(var_args){
var G__33373 = arguments.length;
switch (G__33373) {
case 2:
return emmy.pattern.match.match_if.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.pattern.match.match_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.match.match_if.cljs$core$IFn$_invoke$arity$2 = (function (pred,success_pattern){
return emmy.pattern.match.match_when(pred,success_pattern);
}));

(emmy.pattern.match.match_if.cljs$core$IFn$_invoke$arity$3 = (function (pred,success_pattern,fail_pattern){
var s_match = (emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(success_pattern) : emmy.pattern.match.pattern__GT_combinators.call(null,success_pattern));
var f_match = (emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(fail_pattern) : emmy.pattern.match.pattern__GT_combinators.call(null,fail_pattern));
return (function (frame,xs,success){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(xs) : pred.call(null,xs)))){
return (s_match.cljs$core$IFn$_invoke$arity$3 ? s_match.cljs$core$IFn$_invoke$arity$3(frame,xs,success) : s_match.call(null,frame,xs,success));
} else {
return (f_match.cljs$core$IFn$_invoke$arity$3 ? f_match.cljs$core$IFn$_invoke$arity$3(frame,xs,success) : f_match.call(null,frame,xs,success));
}
});
}));

(emmy.pattern.match.match_if.cljs$lang$maxFixedArity = 3);

/**
 * Takes a sequence of patterns, and returns a matcher that will apply its
 *   arguments to each matcher in turn. Returns the value of the first pattern that
 *   succeeds.
 */
emmy.pattern.match.or = (function emmy$pattern$match$or(var_args){
var G__33379 = arguments.length;
switch (G__33379) {
case 0:
return emmy.pattern.match.or.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.pattern.match.or.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___33672 = arguments.length;
var i__5898__auto___33673 = (0);
while(true){
if((i__5898__auto___33673 < len__5897__auto___33672)){
args_arr__5922__auto__.push((arguments[i__5898__auto___33673]));

var G__33676 = (i__5898__auto___33673 + (1));
i__5898__auto___33673 = G__33676;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return emmy.pattern.match.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(emmy.pattern.match.or.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.pattern.match.fail;
}));

(emmy.pattern.match.or.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return (emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(pattern) : emmy.pattern.match.pattern__GT_combinators.call(null,pattern));
}));

(emmy.pattern.match.or.cljs$core$IFn$_invoke$arity$variadic = (function (pattern,more){
var matchers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.pattern.match.pattern__GT_combinators,cljs.core.cons(pattern,more));
return (function emmy$pattern$match$call(frame,xs,succeed){
return cljs.core.some((function (p1__33374_SHARP_){
return (p1__33374_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__33374_SHARP_.cljs$core$IFn$_invoke$arity$3(frame,xs,succeed) : p1__33374_SHARP_.call(null,frame,xs,succeed));
}),matchers);
});
}));

/** @this {Function} */
(emmy.pattern.match.or.cljs$lang$applyTo = (function (seq33376){
var G__33377 = cljs.core.first(seq33376);
var seq33376__$1 = cljs.core.next(seq33376);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33377,seq33376__$1);
}));

(emmy.pattern.match.or.cljs$lang$maxFixedArity = (1));

/**
 * Takes a sequence of patterns and returns a matcher that will apply its
 *   arguments to the first pattern;
 * 
 *   If that match succeeds, the next pattern will be called with the new, returned
 *   frame (and the original data and success continuation).
 * 
 *   The returned matcher succeeds only of all patterns succeed, and returns the
 *   value of the final pattern.
 */
emmy.pattern.match.and = (function emmy$pattern$match$and(var_args){
var G__33391 = arguments.length;
switch (G__33391) {
case 0:
return emmy.pattern.match.and.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.pattern.match.and.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___33681 = arguments.length;
var i__5898__auto___33682 = (0);
while(true){
if((i__5898__auto___33682 < len__5897__auto___33681)){
args_arr__5922__auto__.push((arguments[i__5898__auto___33682]));

var G__33683 = (i__5898__auto___33682 + (1));
i__5898__auto___33682 = G__33683;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return emmy.pattern.match.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(emmy.pattern.match.and.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.pattern.match.pass;
}));

(emmy.pattern.match.and.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return (emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(pattern) : emmy.pattern.match.pattern__GT_combinators.call(null,pattern));
}));

(emmy.pattern.match.and.cljs$core$IFn$_invoke$arity$variadic = (function (pattern,more){
var matchers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.pattern.match.pattern__GT_combinators,cljs.core.cons(pattern,more));
return (function (frame,xs,succeed){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,matcher){
if(cljs.core.truth_(acc)){
return (matcher.cljs$core$IFn$_invoke$arity$3 ? matcher.cljs$core$IFn$_invoke$arity$3(acc,xs,succeed) : matcher.call(null,acc,xs,succeed));
} else {
return cljs.core.reduced(acc);
}
}),frame,matchers);
});
}));

/** @this {Function} */
(emmy.pattern.match.and.cljs$lang$applyTo = (function (seq33389){
var G__33390 = cljs.core.first(seq33389);
var seq33389__$1 = cljs.core.next(seq33389);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33390,seq33389__$1);
}));

(emmy.pattern.match.and.cljs$lang$maxFixedArity = (1));

/**
 * Takes a `pattern` and returns a matcher that will apply its arguments to the
 *   `pattern`. The returned pattern will succeed with the original frame if
 *   `pattern` fails, and fail if `pattern` succeeds.
 */
emmy.pattern.match.not = (function emmy$pattern$match$not(pattern){
var match = (emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(pattern) : emmy.pattern.match.pattern__GT_combinators.call(null,pattern));
return (function (frame,xs,succeed){
if(cljs.core.truth_((match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(frame,xs,succeed) : match.call(null,frame,xs,succeed)))){
return null;
} else {
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame) : succeed.call(null,frame));
}
});
});
/**
 * Takes a matcher and returns `f` with its metadata modified such
 *   that [[segment-matcher?]] will return `true` when applied to `f`.
 */
emmy.pattern.match.as_segment_matcher = (function emmy$pattern$match$as_segment_matcher(f){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,new cljs.core.Keyword("emmy.pattern.match","segment?","emmy.pattern.match/segment?",-1563429454),true);
});
/**
 * Returns true if the supplied matcher `f` is a segment matcher, false
 *   otherwise.
 */
emmy.pattern.match.segment_matcher_QMARK_ = (function emmy$pattern$match$segment_matcher_QMARK_(f){
return new cljs.core.Keyword("emmy.pattern.match","segment?","emmy.pattern.match/segment?",-1563429454).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(f),false);
});
/**
 * Takes a binding variable `sym` and returns a matcher that calls its success
 *   continuation with successively longer prefixes of its (sequential) data input
 *   bound to `sym` inside the frame.
 * 
 *   If `sym` is already present in the frame, the returned matcher only succeeds
 *   if the bound value is a prefix of the data argument `xs`.
 * 
 *   If `sym` matches the wildcard symbol `_`, the behavior is the same, but no new
 *   binding is introduced.
 * 
 *   NOTE: the returned matcher will call its success continuation with TWO
 *   arguments; the new frame and the remaining elements in `xs`. This is a
 *   different contract than all other matchers, making `segment` appropriate for
 *   use inside `sequence`.
 */
emmy.pattern.match.segment = (function emmy$pattern$match$segment(var_args){
var G__33415 = arguments.length;
switch (G__33415) {
case 1:
return emmy.pattern.match.segment.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.pattern.match.segment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.match.segment.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return emmy.pattern.match.segment.cljs$core$IFn$_invoke$arity$2(sym,cljs.core.constantly(true));
}));

(emmy.pattern.match.segment.cljs$core$IFn$_invoke$arity$2 = (function (sym,pred){
return emmy.pattern.match.as_segment_matcher((function emmy$pattern$match$segment_match(frame,xs,succeed){
var xs__$1 = (function (){var or__5162__auto__ = xs;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.sequential_QMARK_(xs__$1)){
var temp__5823__auto__ = (function (){var and__5160__auto__ = (!(emmy.pattern.syntax.wildcard_QMARK_(sym)));
if(and__5160__auto__){
return (frame.cljs$core$IFn$_invoke$arity$1 ? frame.cljs$core$IFn$_invoke$arity$1(sym) : frame.call(null,sym));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var binding = temp__5823__auto__;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(binding) : pred.call(null,binding)))){
var binding_count = cljs.core.count(binding);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(binding_count,xs__$1),binding)){
var G__33432 = frame;
var G__33433 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(binding_count,xs__$1);
return (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(G__33432,G__33433) : succeed.call(null,G__33432,G__33433));
} else {
return null;
}
} else {
return null;
}
} else {
var prefix = cljs.core.PersistentVector.EMPTY;
var suffix = xs__$1;
while(true){
var or__5162__auto__ = (function (){var and__5160__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(prefix) : pred.call(null,prefix));
if(cljs.core.truth_(and__5160__auto__)){
var new_frame = ((emmy.pattern.syntax.wildcard_QMARK_(sym))?frame:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,sym,prefix));
return (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(new_frame,suffix) : succeed.call(null,new_frame,suffix));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = cljs.core.seq(suffix);
if(and__5160__auto__){
var G__33707 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,cljs.core.first(suffix));
var G__33708 = cljs.core.next(suffix);
prefix = G__33707;
suffix = G__33708;
continue;
} else {
return and__5160__auto__;
}
}
break;
}
}
} else {
return null;
}
}));
}));

(emmy.pattern.match.segment.cljs$lang$maxFixedArity = 2);

/**
 * Similar to [[segment]], but matches the entire remaining sequential argument
 *   `xs`. Fails if its input is not sequential, or `sym` is already bound to some
 *   other variable or non-equal sequence.
 * 
 *   If `sym` matches the wildcard symbol `_`, succeeds if `xs` is a sequence and
 *   introduces NO new bindings.
 * 
 *   Calls its continuation with the new frame and `nil`, always.
 */
emmy.pattern.match.entire_segment = (function emmy$pattern$match$entire_segment(var_args){
var G__33457 = arguments.length;
switch (G__33457) {
case 1:
return emmy.pattern.match.entire_segment.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.pattern.match.entire_segment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.match.entire_segment.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return emmy.pattern.match.entire_segment.cljs$core$IFn$_invoke$arity$2(sym,cljs.core.constantly(true));
}));

(emmy.pattern.match.entire_segment.cljs$core$IFn$_invoke$arity$2 = (function (sym,pred){
return emmy.pattern.match.as_segment_matcher((function emmy$pattern$match$entire_segment_match(frame,xs,succeed){
var xs__$1 = (function (){var or__5162__auto__ = xs;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.sequential_QMARK_(xs__$1);
if(and__5160__auto__){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(xs__$1) : pred.call(null,xs__$1));
} else {
return and__5160__auto__;
}
})())){
if(emmy.pattern.syntax.wildcard_QMARK_(sym)){
return (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(frame,null) : succeed.call(null,frame,null));
} else {
var temp__5823__auto__ = (frame.cljs$core$IFn$_invoke$arity$1 ? frame.cljs$core$IFn$_invoke$arity$1(sym) : frame.call(null,sym));
if(cljs.core.truth_(temp__5823__auto__)){
var binding = temp__5823__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xs__$1,binding)){
return (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(frame,null) : succeed.call(null,frame,null));
} else {
return null;
}
} else {
var G__33468 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,sym,xs__$1);
var G__33469 = null;
return (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(G__33468,G__33469) : succeed.call(null,G__33468,G__33469));
}
}
} else {
return null;
}
}));
}));

(emmy.pattern.match.entire_segment.cljs$lang$maxFixedArity = 2);

/**
 * Returns a matcher that takes a binding variable `sym`, and succeeds if it's
 *   called with a sequential data argument with a prefix that is the REVERSE of
 *   the sequence bound to `sym` in `frame`.
 * 
 *   Fails if any of the following are true:
 * 
 *   - `sym` is not bound in the frame
 *   - `sym` is bound to something other than a vector prefix created by `segment`
 *   - the data argument does not have a prefix matching the reverse of vector
 *  bound to `sym`.
 */
emmy.pattern.match.reverse_segment = (function emmy$pattern$match$reverse_segment(var_args){
var G__33478 = arguments.length;
switch (G__33478) {
case 1:
return emmy.pattern.match.reverse_segment.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.pattern.match.reverse_segment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.match.reverse_segment.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return emmy.pattern.match.reverse_segment.cljs$core$IFn$_invoke$arity$2(sym,cljs.core.constantly(true));
}));

(emmy.pattern.match.reverse_segment.cljs$core$IFn$_invoke$arity$2 = (function (sym,pred){
return emmy.pattern.match.as_segment_matcher((function emmy$pattern$match$reverse_segment_match(frame,xs,succeed){
var xs__$1 = (function (){var or__5162__auto__ = xs;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.sequential_QMARK_(xs__$1)){
var temp__5825__auto__ = (frame.cljs$core$IFn$_invoke$arity$1 ? frame.cljs$core$IFn$_invoke$arity$1(sym) : frame.call(null,sym));
if(cljs.core.truth_(temp__5825__auto__)){
var binding = temp__5825__auto__;
if(cljs.core.vector_QMARK_(binding)){
var binding_count = cljs.core.count(binding);
var reversed = cljs.core.rseq(binding);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(binding_count,xs__$1),reversed);
if(and__5160__auto__){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(xs__$1) : pred.call(null,xs__$1));
} else {
return and__5160__auto__;
}
})())){
var G__33483 = frame;
var G__33484 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(binding_count,xs__$1);
return (succeed.cljs$core$IFn$_invoke$arity$2 ? succeed.cljs$core$IFn$_invoke$arity$2(G__33483,G__33484) : succeed.call(null,G__33483,G__33484));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
}));

(emmy.pattern.match.reverse_segment.cljs$lang$maxFixedArity = 2);

/**
 * Version of [[sequence]] that takes an explicit sequence of `patterns`, vs the
 *   multi-arity version. See [[sequence]] for documentation.
 */
emmy.pattern.match.sequence_STAR_ = (function emmy$pattern$match$sequence_STAR_(patterns){
return (function emmy$pattern$match$sequence_STAR__$_sequence_match(frame,xs,succeed){
if(cljs.core.sequential_QMARK_(xs)){
var step = (function emmy$pattern$match$sequence_STAR__$_sequence_match_$_step(frame__$1,items,matchers){
var try_elem = (function emmy$pattern$match$sequence_STAR__$_sequence_match_$_step_$_try_elem(matcher){
var G__33535 = frame__$1;
var G__33536 = cljs.core.first(items);
var G__33537 = (function (new_frame){
return emmy$pattern$match$sequence_STAR__$_sequence_match_$_step(new_frame,cljs.core.next(items),cljs.core.next(matchers));
});
return (matcher.cljs$core$IFn$_invoke$arity$3 ? matcher.cljs$core$IFn$_invoke$arity$3(G__33535,G__33536,G__33537) : matcher.call(null,G__33535,G__33536,G__33537));
});
var try_segment = (function emmy$pattern$match$sequence_STAR__$_sequence_match_$_step_$_try_segment(matcher){
var G__33538 = frame__$1;
var G__33539 = items;
var G__33540 = (function (new_frame,new_xs){
return emmy$pattern$match$sequence_STAR__$_sequence_match_$_step(new_frame,new_xs,cljs.core.next(matchers));
});
return (matcher.cljs$core$IFn$_invoke$arity$3 ? matcher.cljs$core$IFn$_invoke$arity$3(G__33538,G__33539,G__33540) : matcher.call(null,G__33538,G__33539,G__33540));
});
if(cljs.core.truth_(matchers)){
var m = cljs.core.first(matchers);
if(cljs.core.truth_(emmy.pattern.match.segment_matcher_QMARK_(m))){
return try_segment(m);
} else {
var and__5160__auto__ = cljs.core.seq(items);
if(and__5160__auto__){
return try_elem(m);
} else {
return and__5160__auto__;
}
}
} else {
if(cljs.core.seq(items)){
return false;
} else {
return (succeed.cljs$core$IFn$_invoke$arity$1 ? succeed.cljs$core$IFn$_invoke$arity$1(frame__$1) : succeed.call(null,frame__$1));

}
}
});
var matchers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.pattern.match.pattern__GT_combinators,patterns);
return step(frame,xs,matchers);
} else {
return null;
}
});
});
/**
 * Takes a sequence of patterns and returns a matcher that accepts a sequential
 *   data input, and attempts to match successive items (or segments) in the
 *   sequence with the supplied patterns.
 * 
 *   The returned matcher succeeds if `patterns` can consume all elements, fails
 *   otherwise (or of any of the supplied patterns fails on its argument).
 * 
 *   On success, the returned matcher calls its success continuation with a frame
 *   processed by each pattern in sequence.
 */
emmy.pattern.match.sequence = (function emmy$pattern$match$sequence(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33737 = arguments.length;
var i__5898__auto___33739 = (0);
while(true){
if((i__5898__auto___33739 < len__5897__auto___33737)){
args__5903__auto__.push((arguments[i__5898__auto___33739]));

var G__33742 = (i__5898__auto___33739 + (1));
i__5898__auto___33739 = G__33742;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.pattern.match.sequence.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.pattern.match.sequence.cljs$core$IFn$_invoke$arity$variadic = (function (patterns){
return emmy.pattern.match.sequence_STAR_(patterns);
}));

(emmy.pattern.match.sequence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.pattern.match.sequence.cljs$lang$applyTo = (function (seq33544){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33544));
}));

/**
 * Given a pattern (built using the syntax elements described in
 *   `emmy.pattern.syntax`), returns a matcher combinator that will successfully
 *   match data structures described by the input pattern, and fail otherwise.
 */
emmy.pattern.match.pattern__GT_combinators = (function emmy$pattern$match$pattern__GT_combinators(pattern){
if(cljs.core.fn_QMARK_(pattern)){
return pattern;
} else {
if(cljs.core.truth_(emmy.pattern.syntax.binding_QMARK_(pattern))){
return emmy.pattern.match.bind.cljs$core$IFn$_invoke$arity$2(emmy.pattern.syntax.variable_name(pattern),emmy.pattern.syntax.restriction(pattern));
} else {
if(cljs.core.truth_(emmy.pattern.syntax.segment_QMARK_(pattern))){
return emmy.pattern.match.segment.cljs$core$IFn$_invoke$arity$2(emmy.pattern.syntax.variable_name(pattern),emmy.pattern.syntax.restriction(pattern));
} else {
if(cljs.core.truth_(emmy.pattern.syntax.reverse_segment_QMARK_(pattern))){
return emmy.pattern.match.reverse_segment.cljs$core$IFn$_invoke$arity$2(emmy.pattern.syntax.reverse_segment_name(pattern),emmy.pattern.syntax.restriction(pattern));
} else {
if(emmy.pattern.syntax.wildcard_QMARK_(pattern)){
return emmy.pattern.match.pass;
} else {
if(((cljs.core.seq_QMARK_(pattern)) || (cljs.core.vector_QMARK_(pattern)))){
if(cljs.core.empty_QMARK_(pattern)){
return emmy.pattern.match.eq.cljs$core$IFn$_invoke$arity$1(pattern);
} else {
return emmy.pattern.match.sequence_STAR_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.pattern.match.pattern__GT_combinators,cljs.core.butlast(pattern)),(function (){var p = cljs.core.last(pattern);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(emmy.pattern.syntax.segment_QMARK_(p))?emmy.pattern.match.entire_segment.cljs$core$IFn$_invoke$arity$2(emmy.pattern.syntax.variable_name(p),emmy.pattern.syntax.restriction(p)):(emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1 ? emmy.pattern.match.pattern__GT_combinators.cljs$core$IFn$_invoke$arity$1(p) : emmy.pattern.match.pattern__GT_combinators.call(null,p)))], null);
})()));
}
} else {
return emmy.pattern.match.eq.cljs$core$IFn$_invoke$arity$1(pattern);

}
}
}
}
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
emmy.pattern.match.Failure = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(emmy.pattern.match.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(emmy.pattern.match.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k33548,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__33560 = k33548;
switch (G__33560) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33548,else__5472__auto__);

}
}));

(emmy.pattern.match.Failure.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__33561){
var vec__33562 = p__33561;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(emmy.pattern.match.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#emmy.pattern.match.Failure{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(emmy.pattern.match.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33547){
var self__ = this;
var G__33547__$1 = this;
return (new cljs.core.RecordIter((0),G__33547__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(emmy.pattern.match.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(emmy.pattern.match.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new emmy.pattern.match.Failure(self__.__meta,self__.__extmap,self__.__hash));
}));

(emmy.pattern.match.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(emmy.pattern.match.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-73365589 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(emmy.pattern.match.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33549,other33550){
var self__ = this;
var this33549__$1 = this;
return (((!((other33550 == null)))) && ((((this33549__$1.constructor === other33550.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33549__$1.__extmap,other33550.__extmap)))));
}));

(emmy.pattern.match.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new emmy.pattern.match.Failure(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(emmy.pattern.match.Failure.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k33548){
var self__ = this;
var this__5476__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k33548);
}));

(emmy.pattern.match.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__33547){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__33584 = cljs.core.keyword_identical_QMARK_;
var expr__33585 = k__5478__auto__;
return (new emmy.pattern.match.Failure(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__33547),null));
}));

(emmy.pattern.match.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(emmy.pattern.match.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__33547){
var self__ = this;
var this__5468__auto____$1 = this;
return (new emmy.pattern.match.Failure(G__33547,self__.__extmap,self__.__hash));
}));

(emmy.pattern.match.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(emmy.pattern.match.Failure.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(emmy.pattern.match.Failure.cljs$lang$type = true);

(emmy.pattern.match.Failure.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"emmy.pattern.match/Failure",null,(1),null));
}));

(emmy.pattern.match.Failure.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"emmy.pattern.match/Failure");
}));

/**
 * Positional factory function for emmy.pattern.match/Failure.
 */
emmy.pattern.match.__GT_Failure = (function emmy$pattern$match$__GT_Failure(){
return (new emmy.pattern.match.Failure(null,null,null));
});

/**
 * Factory function for emmy.pattern.match/Failure, taking a map of keywords to field values.
 */
emmy.pattern.match.map__GT_Failure = (function emmy$pattern$match$map__GT_Failure(G__33551){
var extmap__5511__auto__ = (function (){var G__33590 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__33551);
if(cljs.core.record_QMARK_(G__33551)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33590);
} else {
return G__33590;
}
})();
return (new emmy.pattern.match.Failure(null,cljs.core.not_empty(extmap__5511__auto__),null));
});

/**
 * Singleton object representing the failure of a matcher to match its input.
 *   Check for failure with [[failed?]]
 */
emmy.pattern.match.failure = (new emmy.pattern.match.Failure(null,null,null));
/**
 * Returns true if `x` is equivalent to the failure sentinel [[failure]], false
 *   otherwise.
 */
emmy.pattern.match.failed_QMARK_ = (function emmy$pattern$match$failed_QMARK_(x){
return (x instanceof emmy.pattern.match.Failure);
});
/**
 * Takes a `pattern` or matcher combinator, and returns a function from a data
 *   object to either:
 * 
 *   - A successful map of bindings extracted by matching the supplied `pattern` or
 *  combinator to the input data
 *   - An explicit `failure` object
 * 
 *   Check for failure with [[failed?]].
 * 
 *   Optionally, you can supply a predicate `pred`. `pred` takes the map of
 *   bindings from a successful match and returns either:
 * 
 *   - `nil`, `false` or the explicit `failure` object to force a match failure,
 *  potentially causing a backtrack back into the data
 *   - a map of NEW bindings to merge into the binding map (and signal success)
 * 
 *   Any other truthy value signals success with no new bindings.
 */
emmy.pattern.match.matcher = (function emmy$pattern$match$matcher(var_args){
var G__33602 = arguments.length;
switch (G__33602) {
case 1:
return emmy.pattern.match.matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.pattern.match.matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.match.matcher.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
var match = emmy.pattern.match.pattern__GT_combinators(pattern);
return (function (data){
var or__5162__auto__ = (function (){var G__33607 = cljs.core.PersistentArrayMap.EMPTY;
var G__33608 = data;
var G__33609 = cljs.core.identity;
return (match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(G__33607,G__33608,G__33609) : match.call(null,G__33607,G__33608,G__33609));
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.match.failure;
}
});
}));

(emmy.pattern.match.matcher.cljs$core$IFn$_invoke$arity$2 = (function (pattern,pred){
var match = emmy.pattern.match.pattern__GT_combinators(pattern);
var success = (function (frame){
var temp__5825__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(frame) : pred.call(null,frame));
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
if(cljs.core.truth_((function (){var and__5160__auto__ = m;
if(cljs.core.truth_(and__5160__auto__)){
return emmy.pattern.match.not(emmy.pattern.match.failed_QMARK_(m));
} else {
return and__5160__auto__;
}
})())){
if(cljs.core.map_QMARK_(m)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frame,m], 0));
} else {
return frame;
}
} else {
return null;
}
} else {
return null;
}
});
return (function (data){
var or__5162__auto__ = (function (){var G__33615 = cljs.core.PersistentArrayMap.EMPTY;
var G__33616 = data;
var G__33617 = success;
return (match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(G__33615,G__33616,G__33617) : match.call(null,G__33615,G__33616,G__33617));
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.match.failure;
}
});
}));

(emmy.pattern.match.matcher.cljs$lang$maxFixedArity = 2);

/**
 * Convenience function that creates a matcher from the supplied `pattern` (and
 *   optional predicate `pred`) and immediately applies it to `data`.
 * 
 *   Equivalent to:
 * 
 *   ```clojure
 *   ((matcher pattern pred) data)
 *   ```
 */
emmy.pattern.match.match = (function emmy$pattern$match$match(var_args){
var G__33619 = arguments.length;
switch (G__33619) {
case 2:
return emmy.pattern.match.match.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.pattern.match.match.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.match.match.cljs$core$IFn$_invoke$arity$2 = (function (pattern,data){
return emmy.pattern.match.matcher.cljs$core$IFn$_invoke$arity$1(pattern)(data);
}));

(emmy.pattern.match.match.cljs$core$IFn$_invoke$arity$3 = (function (pattern,pred,data){
return emmy.pattern.match.matcher.cljs$core$IFn$_invoke$arity$2(pattern,pred)(data);
}));

(emmy.pattern.match.match.cljs$lang$maxFixedArity = 3);

/**
 * Takes a `pattern` and side-effecting callback function `f`, and returns a
 *   matcher that calls `f` with a map of bindings for every possible match of
 *   `pattern` to its input data.
 * 
 *   For a convenience function that applies the matcher to data immediately,
 *   see [[foreach]].
 * 
 *   NOTE: If you pass a segment matcher, `f` must accept two arguments - the
 *   binding map, and the sequence of all remaining items that the segment
 *   matcher rejected.
 */
emmy.pattern.match.foreach_matcher = (function emmy$pattern$match$foreach_matcher(pattern,f){
var match = emmy.pattern.match.pattern__GT_combinators(pattern);
var cont = (function() {
var G__33809 = null;
var G__33809__1 = (function (frame){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(frame) : f.call(null,frame));

return false;
});
var G__33809__2 = (function (frame,xs){
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(frame,xs) : f.call(null,frame,xs));

return false;
});
G__33809 = function(frame,xs){
switch(arguments.length){
case 1:
return G__33809__1.call(this,frame);
case 2:
return G__33809__2.call(this,frame,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33809.cljs$core$IFn$_invoke$arity$1 = G__33809__1;
G__33809.cljs$core$IFn$_invoke$arity$2 = G__33809__2;
return G__33809;
})()
;
return (function (data){
var G__33624 = cljs.core.PersistentArrayMap.EMPTY;
var G__33625 = data;
var G__33626 = cont;
return (match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(G__33624,G__33625,G__33626) : match.call(null,G__33624,G__33625,G__33626));
});
});
/**
 * Convenience function that creates a [[foreach-matcher]] from the supplied
 *   `pattern` and callback `f` and immediately applies it to `data`.
 * 
 *   Equivalent to:
 * 
 *   ```clojure
 *   ((foreach-matcher pattern pred) data)
 *   ```
 */
emmy.pattern.match.foreach = (function emmy$pattern$match$foreach(pattern,f,data){
return emmy.pattern.match.foreach_matcher(pattern,f)(data);
});
/**
 * Takes a `pattern` and callback function `f`, and returns a matcher that takes a
 *   `data` argument and returns a sequence of every possible match of `pattern` to
 *   the data.
 * 
 *   For a convenience function that applies the matcher to data immediately,
 *   see [[all-results]].
 * 
 *   NOTE: If you pass a segment matcher, `f` must accept two arguments - the
 *   binding map, and the sequence of all remaining items that the segment
 *   matcher rejected.
 */
emmy.pattern.match.all_results_matcher = (function emmy$pattern$match$all_results_matcher(pattern){
var match = emmy.pattern.match.pattern__GT_combinators(pattern);
return (function (data){
var results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var cont = (function() {
var G__33814 = null;
var G__33814__1 = (function (frame){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,frame);

return false;
});
var G__33814__2 = (function (frame,xs){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame,xs], null));

return false;
});
G__33814 = function(frame,xs){
switch(arguments.length){
case 1:
return G__33814__1.call(this,frame);
case 2:
return G__33814__2.call(this,frame,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33814.cljs$core$IFn$_invoke$arity$1 = G__33814__1;
G__33814.cljs$core$IFn$_invoke$arity$2 = G__33814__2;
return G__33814;
})()
;
var G__33628_33815 = cljs.core.PersistentArrayMap.EMPTY;
var G__33629_33816 = data;
var G__33630_33817 = cont;
(match.cljs$core$IFn$_invoke$arity$3 ? match.cljs$core$IFn$_invoke$arity$3(G__33628_33815,G__33629_33816,G__33630_33817) : match.call(null,G__33628_33815,G__33629_33816,G__33630_33817));

return cljs.core.deref(results);
});
});
/**
 * Convenience function that creates an [[all-results-matcher]] from the supplied
 *   `pattern` and immediately applies it to `data`.
 * 
 *   Equivalent to:
 * 
 *   ```clojure
 *   ((all-results-matcher pattern pred) data)
 *   ```
 */
emmy.pattern.match.all_results = (function emmy$pattern$match$all_results(pattern,data){
return emmy.pattern.match.all_results_matcher(pattern)(data);
});

//# sourceMappingURL=emmy.pattern.match.js.map
