goog.provide('emmy.pattern.rule');
/**
 * Convenient predicate that always passes.
 */
emmy.pattern.rule._EQ__GT_ = cljs.core.constantly(true);
/**
 * Predicate that fails for all inputs.
 */
emmy.pattern.rule._BANG__EQ__GT_ = cljs.core.constantly(false);
/**
 * Wraps the argument `x` in a form that will always successfully return from a
 *   consequence function, whatever its value.
 * 
 *   Use [[succeed]] to return `nil` or `false` from a consequence function. For
 *   all other return values, returning `(succeed x)` is identical to returning
 *   `x`
 */
emmy.pattern.rule.succeed = emmy.pattern.consequence.succeed;
/**
 * Singleton object representing the failure of a matcher to match its input.
 *   Check for failure with [[failed?]]
 */
emmy.pattern.rule.failure = emmy.pattern.match.failure;
/**
 * Returns true if `x` is equivalent to the failure sentinel [[failure]], false
 *   otherwise.
 */
emmy.pattern.rule.failed_QMARK_ = emmy.pattern.match.failed_QMARK_;
/**
 * Builds the pattern portion of a rule from the supplied pattern form or matcher
 *   combinator and optional predicate `pred`.
 * 
 *   See [[emmy.pattern.syntax]] for the allowed syntax pattern, or [[emmy.pattern.match]]
 *   for details on matcher combinators.
 * 
 *   See [[match/matcher]] for more detailed documentation.
 */
emmy.pattern.rule.pattern_STAR_ = (function emmy$pattern$rule$pattern_STAR_(var_args){
var G__36576 = arguments.length;
switch (G__36576) {
case 1:
return emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (form){
return emmy.pattern.match.matcher.cljs$core$IFn$_invoke$arity$1(form);
}));

(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (form,pred){
if(cljs.core.truth_((function (){var and__5160__auto__ = pred;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pred,emmy.pattern.rule._EQ__GT_);
} else {
return and__5160__auto__;
}
})())){
return emmy.pattern.match.matcher.cljs$core$IFn$_invoke$arity$2(form,pred);
} else {
return emmy.pattern.match.matcher.cljs$core$IFn$_invoke$arity$1(form);
}
}));

(emmy.pattern.rule.pattern_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Takes an unevaluated pattern form (or matcher combinator) and an optional
 *   predicate `pred`, and returns a matcher appropriate for passing to [[rule*]].
 */
emmy.pattern.rule.pattern = (function emmy$pattern$rule$pattern(var_args){
var G__36580 = arguments.length;
switch (G__36580) {
case 3:
return emmy.pattern.rule.pattern.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.pattern.rule.pattern.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.rule.pattern.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,form){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.pattern.rule","pattern*","emmy.pattern.rule/pattern*",1606954511,null),null,(1),null)),(new cljs.core.List(null,emmy.pattern.syntax.compile_pattern(form),null,(1),null)))));
}));

(emmy.pattern.rule.pattern.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,form,pred){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.pattern.rule","pattern*","emmy.pattern.rule/pattern*",1606954511,null),null,(1),null)),(new cljs.core.List(null,emmy.pattern.syntax.compile_pattern(form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(pred)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred], null):null)], 0))));
}));

(emmy.pattern.rule.pattern.cljs$lang$maxFixedArity = 4);

/**
 * Accepts a skeleton expression `form` and returns a function from a pattern
 *   matcher's binding map to a data structure of identical shape to `skel`, with:
 * 
 *   - all variable binding forms like `?x` replaced by their entries in the
 *  binding map
 *   - same with any segment or reverse-segment binding form like `??x` or `$$x`,
 *  with the added note that these will be spliced in
 *   - any `unquote` or `unquote-splicing` forms respected.
 * 
 *   Compared to [[template]], these two forms are equivalent:
 * 
 *   ```clojure
 *   (fn [m] (template m <form>))
 *   (consequence <form>)
 *   ```
 */
emmy.pattern.rule.consequence = (function emmy$pattern$rule$consequence(_AMPERSAND_form,_AMPERSAND_env,form){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
var sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.pattern.consequence.compile_skeleton(sym,form),null,(1),null))], 0))));
});
/**
 * Provided with a single `form`, [[template]] is similar to Clojure's `unquote`
 *   facility, except that symbols are not prefixed by namespace. For example:
 * 
 *   ```clojure
 *   (let [x 10]
 *  (template (+ ~x y z ~@[4 5])))
 *   ;;=> (+ 10 y z 4 5)
 *   ```
 * 
 *   When you provide a binding map `m`, [[template]] returns its input form, but
 *   replaces any:
 * 
 *   - variable binding form like `?x`
 *   - segment binding form like `??x`
 *   - reverse-segment binding form, like `$$x`
 * 
 *   with the appropriate entry in `m`. (`m` can be a symbol referencing a binding
 *   map in the environment.)
 * 
 *   Splices and unquote splices are respected. For example:
 * 
 *   ```clojure
 *   (let [m {'?x 10 '?y 12 '??z [1 2 3]}]
 *  (template m (+ ?x ?y ??z ~m ~@[1 2])))
 *   ;;=> (+ 10 12 1 2 3 {?x 10, ?y 12, ??z [1 2 3]} 1 2)
 *   ```
 */
emmy.pattern.rule.template = (function emmy$pattern$rule$template(var_args){
var G__36583 = arguments.length;
switch (G__36583) {
case 3:
return emmy.pattern.rule.template.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.pattern.rule.template.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.rule.template.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,form){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return emmy.pattern.consequence.compile_skeleton(cljs.core.PersistentArrayMap.EMPTY,form);
}));

(emmy.pattern.rule.template.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,m,form){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
var sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,m,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.pattern.consequence.compile_skeleton(sym,form),null,(1),null))], 0))));
}));

(emmy.pattern.rule.template.cljs$lang$maxFixedArity = 4);

/**
 * Functional version of [[rule]]. See [[rule]] for documentation.
 */
emmy.pattern.rule.rule_STAR_ = (function emmy$pattern$rule$rule_STAR_(match,handler){
var match__$1 = ((cljs.core.fn_QMARK_(match))?match:emmy.pattern.match.matcher.cljs$core$IFn$_invoke$arity$1(match));
return (function (data){
var result = (match__$1.cljs$core$IFn$_invoke$arity$1 ? match__$1.cljs$core$IFn$_invoke$arity$1(data) : match__$1.call(null,data));
if(emmy.pattern.match.failed_QMARK_(result)){
return emmy.pattern.match.failure;
} else {
return emmy.pattern.consequence.unwrap((function (){var or__5162__auto__ = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(result) : handler.call(null,result));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.match.failure;
}
})());
}
});
});
/**
 * Returns compiled, macro-ready input for [[rule*]] based on the contract
 *   described by [[rule]].
 */
emmy.pattern.rule.compile_rule = (function emmy$pattern$rule$compile_rule(var_args){
var G__36585 = arguments.length;
switch (G__36585) {
case 2:
return emmy.pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$2 = (function (p,consequent_fn){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.pattern.rule","rule*","emmy.pattern.rule/rule*",192682942,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.pattern.rule","pattern","emmy.pattern.rule/pattern",592549338,null),null,(1),null)),(new cljs.core.List(null,p,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,consequent_fn,null,(1),null))], 0))));
}));

(emmy.pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$3 = (function (p,pred,skeleton){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.pattern.rule","rule*","emmy.pattern.rule/rule*",192682942,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.pattern.rule","pattern","emmy.pattern.rule/pattern",592549338,null),null,(1),null)),(new cljs.core.List(null,p,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.pattern.rule","consequence","emmy.pattern.rule/consequence",-1340910887,null),null,(1),null)),(new cljs.core.List(null,skeleton,null,(1),null))))),null,(1),null))], 0))));
}));

(emmy.pattern.rule.compile_rule.cljs$lang$maxFixedArity = 3);

/**
 * Accepts either:
 * 
 *   - A pattern written using the syntax from `emmy.pattern.syntax` and a consequence
 *  function from binding map => failure or return form, or
 *   - A pattern, predicate and a consequence _skeleton_,
 * 
 *   And returns a rule. A rule is a function from some data object to either
 * 
 *   - A special `failure` singleton (test for this with [[failed?]]), or
 *   - A successful transformation provided by a consequence function.
 * 
 *   In the 2-argument case, you must provide an explicit function of the binding
 *   map. A return of `failure`, `nil` or `false` will cause the whole rule to
 *   fail. To successfully return `nil` or `false`, wrap the result in [[succeed]].
 * 
 *   Notes for the 3-argument case:
 * 
 *   - If the predicate returns `nil`, `false` or `failure`, the rule fails.
 * 
 *   - The predicate can succeed by returning anything else. If the return value is
 *  a map, the rule will call the consequence function with this map merged in to
 *  the bindings.
 * 
 *   - the third form is a consequence 'skeleton' instead of an explicit function
 *  See [[consequence]] for details.
 */
emmy.pattern.rule.rule = (function emmy$pattern$rule$rule(var_args){
var G__36598 = arguments.length;
switch (G__36598) {
case 4:
return emmy.pattern.rule.rule.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return emmy.pattern.rule.rule.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.rule.rule.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,pattern,consequent_fn){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return emmy.pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$2(pattern,consequent_fn);
}));

(emmy.pattern.rule.rule.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,pattern,pred,skeleton){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return emmy.pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$3(pattern,pred,skeleton);
}));

(emmy.pattern.rule.rule.cljs$lang$maxFixedArity = 5);

/**
 * Rule that always succeeds by returning its input data unchanged.
 */
emmy.pattern.rule.pass = (function emmy$pattern$rule$pass(data){
return data;
});
/**
 * Rule that always fails with an explicit `failure`, no matter the input.
 */
emmy.pattern.rule.fail = (function emmy$pattern$rule$fail(_){
return emmy.pattern.rule.failure;
});
/**
 * Returns a rule that will pass its input data on unchanged if `(f data)` returns
 *   true and fail otherwise.
 */
emmy.pattern.rule.predicate = (function emmy$pattern$rule$predicate(f){
return (function (data){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data)))){
return data;
} else {
return emmy.pattern.rule.failure;
}
});
});
/**
 * Returns a rule that matches any input and always returns `x`.
 */
emmy.pattern.rule.return$ = (function emmy$pattern$rule$return(x){
return (function (_){
return x;
});
});
/**
 * Takes a rule `r` and returns a new rule that calls `r` with its input.
 * 
 *   The returned rule returns:
 * 
 *   - `(succeed-r (r data)) if `(r data)` is successful,
 *   - `(fail-r data) otherwise.
 */
emmy.pattern.rule.branch = (function emmy$pattern$rule$branch(r,succeed_r,fail_r){
return (function (data){
var result = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(data) : r.call(null,data));
if(cljs.core.truth_((emmy.pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? emmy.pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : emmy.pattern.rule.failed_QMARK_.call(null,result)))){
return (fail_r.cljs$core$IFn$_invoke$arity$1 ? fail_r.cljs$core$IFn$_invoke$arity$1(data) : fail_r.call(null,data));
} else {
return (succeed_r.cljs$core$IFn$_invoke$arity$1 ? succeed_r.cljs$core$IFn$_invoke$arity$1(result) : succeed_r.call(null,result));
}
});
});
/**
 * Identical to the multi-arity [[choice]], but accepts an explicit sequence.
 */
emmy.pattern.rule.choice_STAR_ = (function emmy$pattern$rule$choice_STAR_(rules){
return (function (data){
var rules__$1 = rules;
while(true){
if(cljs.core.empty_QMARK_(rules__$1)){
return emmy.pattern.rule.failure;
} else {
var answer = (function (){var fexpr__36620 = cljs.core.first(rules__$1);
return (fexpr__36620.cljs$core$IFn$_invoke$arity$1 ? fexpr__36620.cljs$core$IFn$_invoke$arity$1(data) : fexpr__36620.call(null,data));
})();
if(cljs.core.truth_((emmy.pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? emmy.pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(answer) : emmy.pattern.rule.failed_QMARK_.call(null,answer)))){
var G__36776 = cljs.core.rest(rules__$1);
rules__$1 = G__36776;
continue;
} else {
return answer;
}
}
break;
}
});
});
/**
 * Accepts any number of `rules` and returns a new `rule` that attempts to apply
 *   each rule in `rules` to its input data. Returns the first non-failing rule's
 *   result, or `failure` if no rule succeeds.
 * 
 *   NOTE: The zero-arity `(choice)` returns [[fail]], a rule that fails for any
 *   input.
 * 
 *   See [[choice*]] for an identical function that accepts an explicit sequence.
 */
emmy.pattern.rule.choice = (function emmy$pattern$rule$choice(var_args){
var G__36629 = arguments.length;
switch (G__36629) {
case 0:
return emmy.pattern.rule.choice.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.pattern.rule.choice.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___36778 = arguments.length;
var i__5898__auto___36779 = (0);
while(true){
if((i__5898__auto___36779 < len__5897__auto___36778)){
args_arr__5922__auto__.push((arguments[i__5898__auto___36779]));

var G__36780 = (i__5898__auto___36779 + (1));
i__5898__auto___36779 = G__36780;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return emmy.pattern.rule.choice.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(emmy.pattern.rule.choice.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.pattern.rule.fail;
}));

(emmy.pattern.rule.choice.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(emmy.pattern.rule.choice.cljs$core$IFn$_invoke$arity$variadic = (function (r,rs){
return emmy.pattern.rule.choice_STAR_(cljs.core.cons(r,rs));
}));

/** @this {Function} */
(emmy.pattern.rule.choice.cljs$lang$applyTo = (function (seq36627){
var G__36628 = cljs.core.first(seq36627);
var seq36627__$1 = cljs.core.next(seq36627);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36628,seq36627__$1);
}));

(emmy.pattern.rule.choice.cljs$lang$maxFixedArity = (1));

/**
 * Identical to the multi-arity [[pipe]], but accepts an explicit sequence.
 */
emmy.pattern.rule.pipe_STAR_ = (function emmy$pattern$rule$pipe_STAR_(rules){
return (function (data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev,r){
var result = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(prev) : r.call(null,prev));
if(cljs.core.truth_((emmy.pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? emmy.pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : emmy.pattern.rule.failed_QMARK_.call(null,result)))){
return cljs.core.reduced(emmy.pattern.rule.failure);
} else {
return result;
}
}),data,rules);
});
});
/**
 * Accepts any number of `rules` and returns a new `rule` that attempts to pipe
 *   its input `data` through each rule in `rules`. Only succeeds if every rule
 *   succeeds on the previous rule's successful output.
 * 
 *   NOTE: The zero-arity `(pipe)` returns [[pass]], a rule that succeeds for any
 *   input by returning the input unchanged.
 * 
 *   See [[pipe*]] for an identical function that accepts an explicit sequence.
 */
emmy.pattern.rule.pipe = (function emmy$pattern$rule$pipe(var_args){
var G__36655 = arguments.length;
switch (G__36655) {
case 0:
return emmy.pattern.rule.pipe.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.pattern.rule.pipe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___36782 = arguments.length;
var i__5898__auto___36783 = (0);
while(true){
if((i__5898__auto___36783 < len__5897__auto___36782)){
args_arr__5922__auto__.push((arguments[i__5898__auto___36783]));

var G__36784 = (i__5898__auto___36783 + (1));
i__5898__auto___36783 = G__36784;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return emmy.pattern.rule.pipe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(emmy.pattern.rule.pipe.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.pattern.rule.pass;
}));

(emmy.pattern.rule.pipe.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(emmy.pattern.rule.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (r,rs){
return emmy.pattern.rule.pipe_STAR_(cljs.core.cons(r,rs));
}));

/** @this {Function} */
(emmy.pattern.rule.pipe.cljs$lang$applyTo = (function (seq36650){
var G__36651 = cljs.core.first(seq36650);
var seq36650__$1 = cljs.core.next(seq36650);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36651,seq36650__$1);
}));

(emmy.pattern.rule.pipe.cljs$lang$maxFixedArity = (1));

/**
 * Returns a rule that applies the rule `r` iteratively `n` times to the input
 *   data, failing if any application fails.
 * 
 *   For example, these forms are equivalent, except that the [[n-times]] version
 *   will fail immediately if any application fails vs passing on its failure:
 * 
 *   ```clojure
 *   (n-times 3 my-rule)
 *   (fn [data]
 *  (my-rule (my-rule (my-rule data))))
 *   ```
 */
emmy.pattern.rule.n_times = (function emmy$pattern$rule$n_times(n,r){
return emmy.pattern.rule.pipe_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,r));
});
/**
 * Returns `true` if `r` was marked as an 'attempt' rule, i.e., a rule that will
 *   never fail, but return its input on a failed match.
 */
emmy.pattern.rule.attempt_QMARK_ = (function emmy$pattern$rule$attempt_QMARK_(r){
return new cljs.core.Keyword("emmy.pattern.rule","attempt?","emmy.pattern.rule/attempt?",1709760667).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(r),false);
});
/**
 * Marks the supplied rule as an 'attempt' rule that won't fail.
 */
emmy.pattern.rule.as_attempt = (function emmy$pattern$rule$as_attempt(r){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(r,cljs.core.assoc,new cljs.core.Keyword("emmy.pattern.rule","attempt?","emmy.pattern.rule/attempt?",1709760667),true);
});
/**
 * Takes a rule `r` and returns a new rule that return either `(r data)` if `r` is
 *   successful, or its original input on failure.
 * 
 *   NOTE that the returned rule will never fail! This makes it inappropriate to
 *   use with [[choice]], for example, if you expect any rule supplied after this
 *   one to ever be matched. [[attempt]] rules are great choices for the final rule
 *   passed to [[choice]], however.
 */
emmy.pattern.rule.attempt = (function emmy$pattern$rule$attempt(r){
if(cljs.core.truth_(emmy.pattern.rule.attempt_QMARK_(r))){
return r;
} else {
return emmy.pattern.rule.as_attempt(emmy.pattern.rule.choice.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.pass], 0)));
}
});
/**
 * Takes a predicate function `f` and a rule `r`, and returns a new rule that will
 *   return `(r data)` if `(f data)` is true, fail otherwise.
 */
emmy.pattern.rule.guard = (function emmy$pattern$rule$guard(f,r){
return emmy.pattern.rule.pipe.cljs$core$IFn$_invoke$arity$variadic(emmy.pattern.rule.predicate(f),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));
});
/**
 * Similar to `clojure.core/iterate` for rule application.
 * 
 *   Takes a rule `r` and returns a new rule that will return the last non-failing
 *   result of the sequence `[data (r data) (r (r data)) ...]`
 * 
 *   This might be `data` itself if `r` fails on first application. This means that
 *   the returned rule will never fail.
 */
emmy.pattern.rule.iterated = (function emmy$pattern$rule$iterated(r){
return emmy.pattern.rule.as_attempt((function (data){
while(true){
var result = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(data) : r.call(null,data));
if(cljs.core.truth_((emmy.pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? emmy.pattern.rule.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : emmy.pattern.rule.failed_QMARK_.call(null,result)))){
return data;
} else {
var G__36785 = result;
data = G__36785;
continue;
}
break;
}
}));
});
/**
 * Returns a new rule which repeatedly applies `r` as long as `f` continues to
 *   return `true` between the input and output of the rule `r` applied iteratively
 *   to the input `data`.
 * 
 *   See [[until]] for a similar function that treats its predicate differently.
 */
emmy.pattern.rule.while$ = (function emmy$pattern$rule$while(f,r){
return emmy.pattern.rule.as_attempt((function emmy$pattern$rule$while_$_rec(data){
return emmy.pattern.rule.pipe.cljs$core$IFn$_invoke$arity$variadic(emmy.pattern.rule.attempt(r),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (data_STAR_){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(data,data_STAR_) : f.call(null,data,data_STAR_)))){
return emmy$pattern$rule$while_$_rec(data_STAR_);
} else {
return data_STAR_;
}
})], 0))(data);
}));
});
/**
 * Returns a new rule which repeatedly applies `r` until `f` returns `true`
 *   between the input and output of the rule `r` applied iteratively to the input
 *   `data`, signaling completion.
 * 
 *   See [[while]] for a similar function that treats its predicate differently.
 */
emmy.pattern.rule.until = (function emmy$pattern$rule$until(f,r){
return emmy.pattern.rule.as_attempt((function (data){
while(true){
var data_STAR_ = (function (){var fexpr__36701 = emmy.pattern.rule.attempt(r);
return (fexpr__36701.cljs$core$IFn$_invoke$arity$1 ? fexpr__36701.cljs$core$IFn$_invoke$arity$1(data) : fexpr__36701.call(null,data));
})();
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(data,data_STAR_) : f.call(null,data,data_STAR_)))){
return data_STAR_;
} else {
var G__36786 = data_STAR_;
data = G__36786;
continue;
}
break;
}
}));
});
/**
 * Takes a rule `r` and returns a new rule that applies `r` to `data` iteratively
 *   until (= input (r input)).
 */
emmy.pattern.rule.fixed_point = (function emmy$pattern$rule$fixed_point(r){
return emmy.pattern.rule.until(cljs.core._EQ_,r);
});
/**
 * Takes a rule `r` and returns a new version of `r` tagged with a unique `id`.
 *   The returned rule calls the side-effecting `f` with
 * 
 *   ```clojure
 *   {:id id, :in data}
 *   ```
 * 
 *   Before calling `r` with `data`, and calls `f` with
 * 
 *   ```clojure
 *   {:id id, :out (r data)}
 *   ```
 * 
 *   when the rule returns.
 */
emmy.pattern.rule.trace = (function emmy$pattern$rule$trace(var_args){
var G__36707 = arguments.length;
switch (G__36707) {
case 1:
return emmy.pattern.rule.trace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.pattern.rule.trace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.pattern.rule.trace.cljs$core$IFn$_invoke$arity$1 = (function (r){
return emmy.pattern.rule.trace.cljs$core$IFn$_invoke$arity$2(r,cljs.core.prn);
}));

(emmy.pattern.rule.trace.cljs$core$IFn$_invoke$arity$2 = (function (r,f){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("t_");
return (function (data){
var G__36710_36788 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"in","in",-1531184865),data], null);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36710_36788) : f.call(null,G__36710_36788));

var result = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(data) : r.call(null,data));
var G__36713_36789 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"out","out",-910545517),result], null);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36713_36789) : f.call(null,G__36713_36789));

return result;
});
}));

(emmy.pattern.rule.trace.cljs$lang$maxFixedArity = 2);

/**
 * Given a rule `the-rule` and a possibly-nested expression `expr`, attempts to
 *   apply `the-rule` to all subexpressions in breadth-first order. If the
 *   transformed form is equivalent, returns its input so that [[identical?]]
 *   checks before and after don't break.
 * 
 *   Descends correctly into vectors, sequences and dictionaries.
 * 
 *   NOTE: [[try-subexpressions]] assumes that [[the-rule]] will always succeed,
 *   returning its input on a failed match.
 */
emmy.pattern.rule.try_subexpressions = (function emmy$pattern$rule$try_subexpressions(the_rule,expr){
if(cljs.core.sequential_QMARK_(expr)){
var processed = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(the_rule,expr));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expr,processed)){
return expr;
} else {
if(cljs.core.vector_QMARK_(expr)){
return cljs.core.vec(processed);
} else {
return processed;
}
}
} else {
if(cljs.core.map_QMARK_(expr)){
var processed = emmy.util.map_vals(the_rule,expr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expr,processed)){
return expr;
} else {
return processed;
}
} else {
return expr;

}
}
});
/**
 * Given some rule `the-rule`, returns a new rule that accepts potentially nested
 *   `data` and applies `the-rule` to all subexpressions in depth-first order, from
 *   the leaves on up.
 * 
 *   The transformation is applied a single time to all subexpressions.
 *   See [[iterated-bottom-up]] for a version that will iterate to convergence.
 */
emmy.pattern.rule.bottom_up = (function emmy$pattern$rule$bottom_up(the_rule){
var r = emmy.pattern.rule.attempt(the_rule);
return emmy.pattern.rule.as_attempt((function emmy$pattern$rule$bottom_up_$_rec(expression){
var G__36721 = emmy.pattern.rule.try_subexpressions(emmy$pattern$rule$bottom_up_$_rec,expression);
return (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(G__36721) : r.call(null,G__36721));
}));
});
/**
 * Given some rule `the-rule`, returns a new rule that accepts potentially nested
 *   `data` and applies `the-rule` to all subexpressions on the way down AND back
 *   up a traversal. This is a sort of hybrid of breadth-first, depth-first.
 * 
 *   The transformation is applied a single time to all subexpressions.
 *   See [[iterated-top-down]] for a version that will iterate to convergence.
 */
emmy.pattern.rule.top_down = (function emmy$pattern$rule$top_down(the_rule){
var r = emmy.pattern.rule.attempt(the_rule);
return emmy.pattern.rule.as_attempt((function emmy$pattern$rule$top_down_$_rec(expr){
var G__36726 = emmy.pattern.rule.try_subexpressions(emmy$pattern$rule$top_down_$_rec,(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(expr) : r.call(null,expr)));
return (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(G__36726) : r.call(null,G__36726));
}));
});
/**
 * Version of [[bottom-up]] that iterates on each subexpression to convergence
 *   before each subexpression returns. Any change in a subexpression triggers a
 *   new iterated-bottom-up replacement of that subexpression.
 * 
 *   The returned rule keeps an internal memoization cache and will return
 *   immediately for subexpressions it's seen before.
 */
emmy.pattern.rule.iterated_bottom_up = (function emmy$pattern$rule$iterated_bottom_up(the_rule){
var r = emmy.pattern.rule.attempt(the_rule);
var rec = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rec_STAR_ = (function emmy$pattern$rule$iterated_bottom_up_$_rec_STAR_(expr){
var processed = emmy.pattern.rule.try_subexpressions(cljs.core.deref(rec),expr);
var answer = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(processed) : r.call(null,processed));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(answer,processed)){
return answer;
} else {
var fexpr__36738 = cljs.core.deref(rec);
return (fexpr__36738.cljs$core$IFn$_invoke$arity$1 ? fexpr__36738.cljs$core$IFn$_invoke$arity$1(answer) : fexpr__36738.call(null,answer));
}
});
cljs.core.reset_BANG_(rec,cljs.core.memoize(rec_STAR_));

return emmy.pattern.rule.as_attempt(cljs.core.deref(rec));
});
/**
 * Version of [[top-down]] that iterates on each subexpression to convergence
 *   before each subexpression returns. Any change in a subexpression triggers a
 *   new iterated-top-down replacement of that subexpression.
 * 
 *   The returned rule keeps an internal memoization cache and will return
 *   immediately for subexpressions it's seen before.
 */
emmy.pattern.rule.iterated_top_down = (function emmy$pattern$rule$iterated_top_down(the_rule){
var r = emmy.pattern.rule.attempt(the_rule);
var rec = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rec_STAR_ = (function emmy$pattern$rule$iterated_top_down_$_rec_STAR_(expr){
var answer = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(expr) : r.call(null,expr));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(answer,expr)){
var processed = emmy.pattern.rule.try_subexpressions(cljs.core.deref(rec),expr);
var answer__$1 = (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(processed) : r.call(null,processed));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(answer__$1,processed)){
return answer__$1;
} else {
var fexpr__36753 = cljs.core.deref(rec);
return (fexpr__36753.cljs$core$IFn$_invoke$arity$1 ? fexpr__36753.cljs$core$IFn$_invoke$arity$1(answer__$1) : fexpr__36753.call(null,answer__$1));
}
} else {
var fexpr__36754 = cljs.core.deref(rec);
return (fexpr__36754.cljs$core$IFn$_invoke$arity$1 ? fexpr__36754.cljs$core$IFn$_invoke$arity$1(answer) : fexpr__36754.call(null,answer));
}
});
cljs.core.reset_BANG_(rec,cljs.core.memoize(rec_STAR_));

return emmy.pattern.rule.as_attempt(cljs.core.deref(rec));
});
/**
 * Given some number of `rules`, returns a new rule that will act like [[choice]]
 *   and attempt to apply each rule to the input data, returning the first match.
 * 
 *   If all `rules` fail, the returned rule will return its input `data`.
 * 
 *   See [[ruleset]] for a macro that allows inline rule definition.
 */
emmy.pattern.rule.ruleset_STAR_ = (function emmy$pattern$rule$ruleset_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36791 = arguments.length;
var i__5898__auto___36792 = (0);
while(true){
if((i__5898__auto___36792 < len__5897__auto___36791)){
args__5903__auto__.push((arguments[i__5898__auto___36792]));

var G__36796 = (i__5898__auto___36792 + (1));
i__5898__auto___36792 = G__36796;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return emmy.pattern.rule.attempt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.pattern.rule.choice,rules));
}));

(emmy.pattern.rule.ruleset_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.pattern.rule.ruleset_STAR_.cljs$lang$applyTo = (function (seq36755){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36755));
}));

/**
 * Accepts triplets of the form:
 * 
 *   <pattern> <predicate> <consequence-template>
 * 
 *   and returns a new rule that will attempt to match the rules compiled from each
 *   triplet in sequence, returning the filled-in `<consequence-template>` of the
 *   first successful match.
 * 
 *   If none of the rules match, the returned rule returns its input data
 *   unchanged.
 * 
 *   See [[ruleset*]] for a function version that takes explicit
 *   already-constructed rules.
 */
emmy.pattern.rule.ruleset = (function emmy$pattern$rule$ruleset(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36798 = arguments.length;
var i__5898__auto___36799 = (0);
while(true){
if((i__5898__auto___36799 < len__5897__auto___36798)){
args__5903__auto__.push((arguments[i__5898__auto___36799]));

var G__36800 = (i__5898__auto___36799 + (1));
i__5898__auto___36799 = G__36800;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return emmy.pattern.rule.ruleset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(emmy.pattern.rule.ruleset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,patterns_and_consequences){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),(cljs.core.mod(cljs.core.count(patterns_and_consequences),(3)) === (0))], null);

var inputs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),patterns_and_consequences);
var rules = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36756_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.pattern.rule.compile_rule,p1__36756_SHARP_);
}),inputs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.pattern.rule","ruleset*","emmy.pattern.rule/ruleset*",-886313707,null),null,(1),null)),rules)));
}));

(emmy.pattern.rule.ruleset.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(emmy.pattern.rule.ruleset.cljs$lang$applyTo = (function (seq36757){
var G__36758 = cljs.core.first(seq36757);
var seq36757__$1 = cljs.core.next(seq36757);
var G__36759 = cljs.core.first(seq36757__$1);
var seq36757__$2 = cljs.core.next(seq36757__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36758,G__36759,seq36757__$2);
}));

/**
 * Given some number of `rules`, returns a new rule that will attempt to apply
 *   each rule to its input expression (and every subexpression of the input,
 *   bottom up), iterating until no rule causes any change in any level of the
 *   supplied expression.
 */
emmy.pattern.rule.rule_simplifier = (function emmy$pattern$rule$rule_simplifier(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36801 = arguments.length;
var i__5898__auto___36802 = (0);
while(true){
if((i__5898__auto___36802 < len__5897__auto___36801)){
args__5903__auto__.push((arguments[i__5898__auto___36802]));

var G__36803 = (i__5898__auto___36802 + (1));
i__5898__auto___36802 = G__36803;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return emmy.pattern.rule.iterated_bottom_up(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.pattern.rule.pipe,cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.pattern.rule.attempt,rules)));
}));

(emmy.pattern.rule.rule_simplifier.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.pattern.rule.rule_simplifier.cljs$lang$applyTo = (function (seq36760){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36760));
}));

/**
 * Alias for [[rule-simplifier]].
 */
emmy.pattern.rule.term_rewriting = (function emmy$pattern$rule$term_rewriting(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36808 = arguments.length;
var i__5898__auto___36809 = (0);
while(true){
if((i__5898__auto___36809 < len__5897__auto___36808)){
args__5903__auto__.push((arguments[i__5898__auto___36809]));

var G__36810 = (i__5898__auto___36809 + (1));
i__5898__auto___36809 = G__36810;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.pattern.rule.term_rewriting.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.pattern.rule.term_rewriting.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.pattern.rule.rule_simplifier,rules);
}));

(emmy.pattern.rule.term_rewriting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.pattern.rule.term_rewriting.cljs$lang$applyTo = (function (seq36761){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36761));
}));


//# sourceMappingURL=emmy.pattern.rule.js.map
