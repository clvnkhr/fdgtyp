goog.provide('emmy.expression.render');
/**
 * Historical preference is to write `sin^2(x)` rather than `(sin(x))^2`.
 */
emmy.expression.render.rewrite_trig_powers = emmy.pattern.rule.choice.cljs$core$IFn$_invoke$arity$variadic(emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__48672){
var r__36234__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__48673 = new cljs.core.Symbol(null,"f","f",43394975,null);
return (fexpr__48673.cljs$core$IFn$_invoke$arity$1 ? fexpr__48673.cljs$core$IFn$_invoke$arity$1(G__48672) : fexpr__48673.call(null,G__48672));
})(),(2)], null)),(function (){var fexpr__48674 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__48674.cljs$core$IFn$_invoke$arity$1 ? fexpr__48674.cljs$core$IFn$_invoke$arity$1(G__48672) : fexpr__48674.call(null,G__48672));
})()], null));
var or__5162__auto__ = r__36234__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36234__auto__);
}
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.return$(null)], 0));
/**
 * The simplifier returns sums of products; for negative summands the simplifier
 *   negates by wrapping with `(* -1 ...)`. For rendering, we prefer to use a unary
 *   minus.
 */
emmy.expression.render.rewrite_negation = emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [-1.0,null,(-1),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__48678){
var r__36234__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),(function (){var fexpr__48681 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__48681.cljs$core$IFn$_invoke$arity$1 ? fexpr__48681.cljs$core$IFn$_invoke$arity$1(G__48678) : fexpr__48681.call(null,G__48678));
})()], null));
var or__5162__auto__ = r__36234__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36234__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [-1.0,null,(-1),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__48688){
var r__36234__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__48693 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__48693.cljs$core$IFn$_invoke$arity$1 ? fexpr__48693.cljs$core$IFn$_invoke$arity$1(G__48688) : fexpr__48693.call(null,G__48688));
})()))], null));
var or__5162__auto__ = r__36234__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36234__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c","?c",870679775,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__48699){
var r__36234__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__48676_SHARP_){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1((function (){var G__48700 = new cljs.core.Symbol(null,"?c","?c",870679775,null);
return (p1__48676_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48676_SHARP_.cljs$core$IFn$_invoke$arity$1(G__48700) : p1__48676_SHARP_.call(null,G__48700));
})());
})(G__48699),(function (){var fexpr__48701 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__48701.cljs$core$IFn$_invoke$arity$1 ? fexpr__48701.cljs$core$IFn$_invoke$arity$1(G__48699) : fexpr__48701.call(null,G__48699));
})()], null))], null));
var or__5162__auto__ = r__36234__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36234__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c","?c",870679775,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__48702){
var r__36234__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__48677_SHARP_){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1((function (){var G__48703 = new cljs.core.Symbol(null,"?c","?c",870679775,null);
return (p1__48677_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48677_SHARP_.cljs$core$IFn$_invoke$arity$1(G__48703) : p1__48677_SHARP_.call(null,G__48703));
})());
})(G__48702)], null),(function (){var fexpr__48705 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__48705.cljs$core$IFn$_invoke$arity$1 ? fexpr__48705.cljs$core$IFn$_invoke$arity$1(G__48702) : fexpr__48705.call(null,G__48702));
})()))], null));
var or__5162__auto__ = r__36234__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36234__auto__);
}
}))], 0));
/**
 * renders a pair of the form `[numerator denominator]` as a infix ratio of the
 *   form `num/denom`.
 * 
 *   If the pair contains only one entry `x`, it's coerced to `[1 x]` (and treated
 *   as a denominator).
 */
emmy.expression.render.render_infix_ratio = (function emmy$expression$render$render_infix_ratio(p__48714){
var vec__48715 = p__48714;
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48715,(0),null);
var denom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48715,(1),null);
var xs = vec__48715;
var n = cljs.core.count(xs);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))) && (emmy.value.integral_QMARK_(num)))){
return (""+"1/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(2))) && (((emmy.value.integral_QMARK_(num)) && (emmy.value.integral_QMARK_(denom)))))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(denom));
} else {
return null;
}
}
});
/**
 * Base function for infix renderers. This is meant to be specialized via
 *   options for the treatment desired. Returns a rendering function. The options are:
 * 
 *   - `precedence-map`: a map from (symbol or keyword) to numbers. Higher numbers
 *  mean higher precedence. This guides parenthesization.
 *   - `juxtapose-multiply`: a string that will be placed between factors in a
 *  product. Defaults to `*`.
 *   - `infix?` A function mapping symbols to boolean, used to decide if a function
 *  application should be written as `x f y` or `f(x, y)`.
 *   - `render-primitive` is a function used to render symbols, numeric constants
 *  etc. into string form.
 *   - `parenthesize` is a function used to wrap parens around objects when
 *  needed. It defaults to the obvious thing.
 *   - `special-handlers` is a map from symbol to a function of operator and
 *  arguments, used to provide custom rendering for things like exponentiation
 *  which might not be rendered either as infix or prefix.
 *   - `rename-functions` is a map supplying replacement function names to be used
 *  just before the expression is written.
 */
emmy.expression.render.make_infix_renderer = (function emmy$expression$render$make_infix_renderer(var_args){
var args__5903__auto__ = [];
var len__5897__auto___49112 = arguments.length;
var i__5898__auto___49113 = (0);
while(true){
if((i__5898__auto___49113 < len__5897__auto___49112)){
args__5903__auto__.push((arguments[i__5898__auto___49113]));

var G__49114 = (i__5898__auto___49113 + (1));
i__5898__auto___49113 = G__49114;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic = (function (p__48735){
var map__48736 = p__48735;
var map__48736__$1 = cljs.core.__destructure_map(map__48736);
var juxtapose_multiply = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48736__$1,new cljs.core.Keyword(null,"juxtapose-multiply","juxtapose-multiply",-1262547042)," * ");
var special_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48736__$1,new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),cljs.core.PersistentArrayMap.EMPTY);
var infix_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48736__$1,new cljs.core.Keyword(null,"infix?","infix?",41062120),cljs.core.PersistentArrayMap.EMPTY);
var render_primitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48736__$1,new cljs.core.Keyword(null,"render-primitive","render-primitive",-529994613));
var rename_functions = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48736__$1,new cljs.core.Keyword(null,"rename-functions","rename-functions",-358633973),cljs.core.PersistentArrayMap.EMPTY);
var parenthesize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48736__$1,new cljs.core.Keyword(null,"parenthesize","parenthesize",-1945667578),(function (p1__48722_SHARP_){
return (""+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48722_SHARP_)+")");
}));
var precedence_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48736__$1,new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799));
var rewrite_trig_squares = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48736__$1,new cljs.core.Keyword(null,"rewrite-trig-squares","rewrite-trig-squares",747917607),false);
var maybe_rewrite_negation = (function emmy$expression$render$maybe_rewrite_negation(loc){
var result = (function (){var G__48783 = clojure.zip.node(loc);
return (emmy.expression.render.rewrite_negation.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.rewrite_negation.cljs$core$IFn$_invoke$arity$1(G__48783) : emmy.expression.render.rewrite_negation.call(null,G__48783));
})();
if((loc === result)){
return loc;
} else {
return clojure.zip.replace(loc,result);
}
});
var render_unary_node = (function emmy$expression$render$render_unary_node(op,arg,upper_op){
var G__48790 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"+","+",-740910886,null),G__48790)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*","*",345799209,null),G__48790)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"u-","u-",1997472866,null),G__48790)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(upper_op,new cljs.core.Symbol(null,"+","+",-740910886,null))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hint","hint",439639918),new cljs.core.Keyword(null,"unary-minus","unary-minus",737624832),new cljs.core.Keyword(null,"term","term",-1817390416),arg], null);
} else {
return (""+"- "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"/","/",-1371932971,null),G__48790)){
if(emmy.value.integral_QMARK_(arg)){
return (""+"1/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg));
} else {
return (""+"1 / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg));
}
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg));

}
}
}
}
});
var precedence = (function emmy$expression$render$precedence(op){
while(true){
var or__5162__auto__ = (precedence_map.cljs$core$IFn$_invoke$arity$1 ? precedence_map.cljs$core$IFn$_invoke$arity$1(op) : precedence_map.call(null,op));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.seq_QMARK_(op)){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(op))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.first(op))))){
var G__49119 = cljs.core.second(op);
op = G__49119;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"partial","partial",1881673272,null),cljs.core.first(op))){
var G__48803 = new cljs.core.Symbol(null,"D","D",1632515634,null);
return (precedence_map.cljs$core$IFn$_invoke$arity$1 ? precedence_map.cljs$core$IFn$_invoke$arity$1(G__48803) : precedence_map.call(null,G__48803));
} else {
return (precedence_map.cljs$core$IFn$_invoke$arity$1 ? precedence_map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"apply","apply",1320385493)) : precedence_map.call(null,new cljs.core.Keyword(null,"apply","apply",1320385493)));

}
}
} else {
if((op instanceof cljs.core.Symbol)){
return (precedence_map.cljs$core$IFn$_invoke$arity$1 ? precedence_map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"apply","apply",1320385493)) : precedence_map.call(null,new cljs.core.Keyword(null,"apply","apply",1320385493)));
} else {
return (0);

}
}
}
break;
}
});
var maybe_rename_function = (function emmy$expression$render$maybe_rename_function(f){
var or__5162__auto__ = (rename_functions.cljs$core$IFn$_invoke$arity$1 ? rename_functions.cljs$core$IFn$_invoke$arity$1(f) : rename_functions.call(null,f));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return f;
}
});
var render_loc = (function emmy$expression$render$render_loc(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
var fn_loc = clojure.zip.next(maybe_rewrite_trig_squares(maybe_rewrite_negation(loc)));
var arg_loc = (function (){var a = clojure.zip.right(fn_loc);
while(true){
var a_SINGLEQUOTE_ = clojure.zip.replace(a,emmy$expression$render$render_loc(a));
var temp__5823__auto__ = clojure.zip.right(a_SINGLEQUOTE_);
if(cljs.core.truth_(temp__5823__auto__)){
var r = temp__5823__auto__;
var G__49138 = r;
a = G__49138;
continue;
} else {
return clojure.zip.up(a_SINGLEQUOTE_);
}
break;
}
})();
var vec__48804 = clojure.zip.node(arg_loc);
var seq__48805 = cljs.core.seq(vec__48804);
var first__48806 = cljs.core.first(seq__48805);
var seq__48805__$1 = cljs.core.next(seq__48805);
var op = first__48806;
var args = seq__48805__$1;
var upper_op = (function (){var and__5160__auto__ = clojure.zip.up(arg_loc);
if(cljs.core.truth_(and__5160__auto__)){
return clojure.zip.node(clojure.zip.leftmost(arg_loc));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_((infix_QMARK_.cljs$core$IFn$_invoke$arity$1 ? infix_QMARK_.cljs$core$IFn$_invoke$arity$1(op) : infix_QMARK_.call(null,op)))){
return parenthesize_if((function (){var and__5160__auto__ = (infix_QMARK_.cljs$core$IFn$_invoke$arity$1 ? infix_QMARK_.cljs$core$IFn$_invoke$arity$1(upper_op) : infix_QMARK_.call(null,upper_op));
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = precedence_LT__EQ_(op,upper_op);
if(cljs.core.truth_(and__5160__auto____$1)){
return cljs.core.not((function (){var or__5162__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Symbol(null,"*","*",345799209,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(upper_op,new cljs.core.Symbol(null,"u-","u-",1997472866,null))));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return ratio_expr_QMARK_(op,args);
}
})());
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})(),(function (){var or__5162__auto__ = (function (){var temp__5825__auto__ = (special_handlers.cljs$core$IFn$_invoke$arity$1 ? special_handlers.cljs$core$IFn$_invoke$arity$1(op) : special_handlers.call(null,op));
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(args) : handler.call(null,args));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
return render_unary_node(op,cljs.core.first(args),upper_op);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Symbol(null,"+","+",-740910886,null))){
var u_term = (function (t){
var map__48810 = t;
var map__48810__$1 = cljs.core.__destructure_map(map__48810);
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48810__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48810__$1,new cljs.core.Keyword(null,"term","term",-1817390416));
if(cljs.core.truth_(hint)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hint,new cljs.core.Keyword(null,"unary-minus","unary-minus",737624832)))?"-":"+"),term], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",t], null);
}
});
var vec__48807 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(u_term,args);
var seq__48808 = cljs.core.seq(vec__48807);
var first__48809 = cljs.core.first(seq__48808);
var seq__48808__$1 = cljs.core.next(seq__48808);
var t = first__48809;
var terms = seq__48808__$1;
var terms__$1 = cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(t),"+"))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(t,(1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(t),"-"))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,(0),"- "):t
)),(function (){var iter__5649__auto__ = (function emmy$expression$render$render_loc_$_iter__48812(s__48813){
return (new cljs.core.LazySeq(null,(function (){
var s__48813__$1 = s__48813;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48813__$1);
if(temp__5825__auto__){
var s__48813__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48813__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__48813__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__48815 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__48814 = (0);
while(true){
if((i__48814 < size__5648__auto__)){
var vec__48817 = cljs.core._nth(c__5647__auto__,i__48814);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48817,(0),null);
var t__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48817,(1),null);
cljs.core.chunk_append(b__48815,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pm)+" "),t__$1], null));

var G__49145 = (i__48814 + (1));
i__48814 = G__49145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48815),emmy$expression$render$render_loc_$_iter__48812(cljs.core.chunk_rest(s__48813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48815),null);
}
} else {
var vec__48822 = cljs.core.first(s__48813__$2);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48822,(0),null);
var t__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48822,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pm)+" "),t__$1], null),emmy$expression$render$render_loc_$_iter__48812(cljs.core.rest(s__48813__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(terms);
})());
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.cat,cljs.core.str,terms__$1);
} else {
var sep = (function (){var G__48828 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*","*",345799209,null),G__48828)){
var or__5162__auto____$1 = juxtapose_multiply;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return " * ";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expt","expt",2123850345,null),G__48828)){
return "^";
} else {
return (""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)+" ");

}
}
})();
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(sep),cljs.core.str,args);

}
}
}
})());
} else {
return parenthesize_if((function (){var and__5160__auto__ = upper_op;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = (infix_QMARK_.cljs$core$IFn$_invoke$arity$1 ? infix_QMARK_.cljs$core$IFn$_invoke$arity$1(upper_op) : infix_QMARK_.call(null,upper_op));
if(cljs.core.truth_(and__5160__auto____$1)){
return precedence_LT__EQ_(op,upper_op);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})(),(function (){var or__5162__auto__ = (function (){var and__5160__auto__ = (special_handlers.cljs$core$IFn$_invoke$arity$1 ? special_handlers.cljs$core$IFn$_invoke$arity$1(op) : special_handlers.call(null,op));
if(cljs.core.truth_(and__5160__auto__)){
var fexpr__48829 = (special_handlers.cljs$core$IFn$_invoke$arity$1 ? special_handlers.cljs$core$IFn$_invoke$arity$1(op) : special_handlers.call(null,op));
return (fexpr__48829.cljs$core$IFn$_invoke$arity$1 ? fexpr__48829.cljs$core$IFn$_invoke$arity$1(args) : fexpr__48829.call(null,args));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parenthesize_if((function (){var and__5160__auto__ = clojure.zip.branch_QMARK_(fn_loc);
if(cljs.core.truth_(and__5160__auto__)){
return precedence_GT_(new cljs.core.Keyword(null,"apply","apply",1320385493),clojure.zip.node(clojure.zip.next(fn_loc)));
} else {
return and__5160__auto__;
}
})(),maybe_rename_function(emmy$expression$render$render_loc(clojure.zip.next(arg_loc)))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parenthesize_if((function (){var or__5162__auto____$1 = precedence_LT__EQ_(op,new cljs.core.Keyword(null,"apply","apply",1320385493));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = (cljs.core.count(args) > (1));
if(or__5162__auto____$2){
return or__5162__auto____$2;
} else {
return clojure.zip.branch_QMARK_(clojure.zip.right(fn_loc));
}
}
})(),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",args))));
}
})());
}
} else {
var n = clojure.zip.node(loc);
var or__5162__auto__ = (function (){var and__5160__auto__ = render_primitive;
if(cljs.core.truth_(and__5160__auto__)){
return (render_primitive.cljs$core$IFn$_invoke$arity$1 ? render_primitive.cljs$core$IFn$_invoke$arity$1(n) : render_primitive.call(null,n));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return n;
}
}
});
var parenthesize_if = (function emmy$expression$render$parenthesize_if(b,x){
if(cljs.core.truth_(b)){
return (parenthesize.cljs$core$IFn$_invoke$arity$1 ? parenthesize.cljs$core$IFn$_invoke$arity$1(x) : parenthesize.call(null,x));
} else {
return x;
}
});
var precedence_LT__EQ_ = (function emmy$expression$render$precedence_LT__EQ_(a,b){
return cljs.core.not(precedence_GT_(a,b));
});
var maybe_rewrite_trig_squares = (function emmy$expression$render$maybe_rewrite_trig_squares(loc){
var temp__5823__auto__ = (function (){var and__5160__auto__ = rewrite_trig_squares;
if(cljs.core.truth_(and__5160__auto__)){
return emmy.expression.render.rewrite_trig_powers(clojure.zip.node(loc));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var result = temp__5823__auto__;
return clojure.zip.replace(loc,result);
} else {
return loc;
}
});
var ratio_expr_QMARK_ = (function emmy$expression$render$ratio_expr_QMARK_(op,p__48830){
var vec__48831 = p__48830;
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48831,(0),null);
var denom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48831,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"/","/",-1371932971,null),op)) && (((emmy.value.integral_QMARK_(num)) && ((((denom == null)) || (emmy.value.integral_QMARK_(denom)))))));
});
var precedence_GT_ = (function emmy$expression$render$precedence_GT_(a,b){
return (precedence(a) > precedence(b));
});
return (function (expr){
var result = render_loc(clojure.zip.seq_zip(emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(expr)));
if(typeof result === 'string'){
return result;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result));
}
});
}));

(emmy.expression.render.make_infix_renderer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.expression.render.make_infix_renderer.cljs$lang$applyTo = (function (seq48731){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48731));
}));

emmy.expression.render.decimal_superscripts = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2070","\u00B9","\u00B2","\u00B3","\u2074","\u2075","\u2076","\u2077","\u2078","\u2079"], null);
emmy.expression.render.decimal_subscripts = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2080","\u2081","\u2082","\u2083","\u2084","\u2085","\u2086","\u2087","\u2088","\u2089"], null);
emmy.expression.render.subscript_pattern = /(.+)_([0-9a-zA-ZϖγηΦνΩδυσιΔρϵωϱςψΠπϑΞκφχζΨτΓΛΘΥμθαℓβΣξλφε]+)$/;
emmy.expression.render.superscript_pattern = /(.+)↑([0-9a-zA-ZϖγηΦνΩδυσιΔρϵωϱςψΠπϑΞκφχζΨτΓΛΘΥμθαℓβΣξλφε]+)$/;
/**
 * Greek letter names we want to recognize that aren't supported by TeX, mapped to
 *   their unicode characters.
 */
emmy.expression.render.non_TeX_greek = cljs.core.PersistentHashMap.fromArrays(["Epsilon","Mu","Iota","omicron","Omicron","Eta","Zeta","Alpha","Rho","Chi","Nu","Tau","Kappa","Beta"],["\u0395","\u039C","\u0399","\u03BF","O","\u0397","\u0396","\u0391","\u03A1","\u03A7","\u039D","\u03A4","\u039A","\u0392"]);
/**
 * Mapping of TeX-supported characters (Greek letter names and a few others) to
 *   their corresponding unicode characters.
 */
emmy.expression.render.sym__GT_unicode = cljs.core.PersistentHashMap.fromArrays(["ldots","varpi","gamma","eta","Phi","nu","Omega","delta","upsilon","sigma","iota","Delta","rho","varepsilon","omega","varrho","varsigma","psi","Pi","pi","vartheta","Xi","kappa","varphi","chi","zeta","Psi","tau","Gamma","Lambda","Theta","Upsilon","mu","theta","alpha","ell","beta","Sigma","xi","lambda","phi","epsilon"],["...","\u03D6","\u03B3","\u03B7","\u03A6","\u03BD","\u03A9","\u03B4","\u03C5","\u03C3","\u03B9","\u0394","\u03C1","\u03F5","\u03C9","\u03F1","\u03C2","\u03C8","\u03A0","\u03C0","\u03D1","\u039E","\u03BA","\u03C6","\u03C7","\u03B6","\u03A8","\u03C4","\u0393","\u039B","\u0398","\u03A5","\u03BC","\u03B8","\u03B1","\u2113","\u03B2","\u03A3","\u03BE","\u03BB","\u03C6","\u03B5"]);
/**
 * Map of of TeX-compatible greek letter names to their \-prefixed LaTeX code
 *   versions. alpha -> \alpha, for example.
 */
emmy.expression.render.TeX_letters = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__48834){
var vec__48835 = p__48834;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48835,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(""+"\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null);
})),emmy.expression.render.sym__GT_unicode);
/**
 * Full mapping of special-cased TeX symbols to their TeX codes. This includes all
 *   greek letters in both english ('alpha') and unicode ('α') versions, plus a few
 *   more special-cased symbols.
 */
emmy.expression.render.TeX_map = (function (){var sym__GT_tex = emmy.util.map_vals((function (p1__48841_SHARP_){
return (""+"\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48841_SHARP_));
}),clojure.set.map_invert(emmy.expression.render.sym__GT_unicode));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.expression.render.TeX_letters,sym__GT_tex,cljs.core.PersistentHashMap.fromArrays(["cosh","csc","cot","atan","sin","_","tan","cos","sinh","sec","asin","tanh","acos"],["\\sinh","\\csc","\\cot","\\arctan","\\sin","\\_","\\tan","\\cos","\\sinh","\\sec","\\arcsin","\\sinh","\\arccos"])], 0));
})();
emmy.expression.render.digit__GT_int = (function emmy$expression$render$digit__GT_int(d){
return parseInt(d);
});
/**
 * Given an integer, returns a string where each digit of the
 *   integer is used as the index into the replacement map scripts,
 *   which is expected to be indexable by integers in the range [0..9].
 */
emmy.expression.render.n__GT_script = (function emmy$expression$render$n__GT_script(n,scripts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48848_SHARP_){
var G__48849 = emmy.expression.render.digit__GT_int(p1__48848_SHARP_);
return (scripts.cljs$core$IFn$_invoke$arity$1 ? scripts.cljs$core$IFn$_invoke$arity$1(G__48849) : scripts.call(null,G__48849));
}),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))));
});
emmy.expression.render.n__GT_subscript = (function emmy$expression$render$n__GT_subscript(p1__48850_SHARP_){
return emmy.expression.render.n__GT_script(p1__48850_SHARP_,emmy.expression.render.decimal_subscripts);
});
emmy.expression.render.n__GT_superscript = (function emmy$expression$render$n__GT_superscript(p1__48851_SHARP_){
return emmy.expression.render.n__GT_script(p1__48851_SHARP_,emmy.expression.render.decimal_superscripts);
});
emmy.expression.render.infix_sym__GT_unicode = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.expression.render.non_TeX_greek,emmy.expression.render.sym__GT_unicode], 0));
/**
 * Given some infinite value, returns a string representation of ##Inf or ##-Inf
 *   appropriate for infix rendering, else returns `nil`.
 */
emmy.expression.render.infinity__GT_infix = (function emmy$expression$render$infinity__GT_infix(x){
var G__48854 = x;
switch (G__48854) {
case Infinity:
return "\u221E";

break;
case -Infinity:
return "-\u221E";

break;
default:
return null;

}
});
/**
 * Converts an S-expression to printable infix form. Numeric exponents are
 *   written as superscripts. Partial derivatives get subscripts.
 */
emmy.expression.render.__GT_infix = emmy.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"u-","u-",1997472866,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"D","D",1632515634,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null)],[(6),(3),(3),(3),(5),(8),(3),(4),(1),(9),(4),(5),(7),(3),(9),(4),(5),(2),(5)]),new cljs.core.Keyword(null,"infix?","infix?",41062120),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),"null",new cljs.core.Symbol(null,"=","=",-1501502141,null),"null",new cljs.core.Symbol(null,"<","<",993667236,null),"null",new cljs.core.Symbol(null,"<=","<=",1244895369,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,"expt","expt",2123850345,null),"null",new cljs.core.Symbol(null,">",">",1085014381,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,">=",">=",1016916022,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null",new cljs.core.Symbol(null,"modulo","modulo",725580254,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),"null"], null), null),new cljs.core.Keyword(null,"juxtapose-multiply","juxtapose-multiply",-1262547042)," ",new cljs.core.Keyword(null,"rewrite-trig-squares","rewrite-trig-squares",747917607),true,new cljs.core.Keyword(null,"rename-functions","rename-functions",-358633973),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),"frac",new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),"int",new cljs.core.Symbol(null,"not","not",1044554643,null),"\u00AC"], null),new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"or","or",1876275696,null)],[(function (p__48855){
var vec__48856 = p__48855;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48856,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48856,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" % "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));
}),(function (p__48863){
var vec__48864 = p__48863;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48864,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48864,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" \u2227 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));
}),(function (p__48867){
var vec__48868 = p__48867;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48868,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48868,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" mod "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));
}),emmy.expression.render.render_infix_ratio,(function (p__48871){
var vec__48872 = p__48871;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48872,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48872,(1),null);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.integer_QMARK_(e);
if(and__5160__auto__){
return cljs.core.complement(cljs.core.neg_QMARK_)(e);
} else {
return and__5160__auto__;
}
})())){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.n__GT_superscript(e)));
} else {
return null;
}
}),(function (p__48876){
var vec__48877 = p__48876;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48877,(0),null);
return (""+"\u230A"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"\u230B");
}),(function (ds){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ds),(1))) && (cljs.core.integer_QMARK_(cljs.core.first(ds))))){
return (""+"\u2202"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.n__GT_subscript(cljs.core.first(ds))));
} else {
return null;
}
}),(function (p__48884){
var vec__48885 = p__48884;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48885,(0),null);
return (""+"\u2308"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"\u2309");
}),(function (p__48888){
var vec__48889 = p__48888;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48889,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48889,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" \u2228 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));
})]),new cljs.core.Keyword(null,"render-primitive","render-primitive",-529994613),(function emmy$expression$render$r(v){
var or__5162__auto__ = emmy.expression.render.infinity__GT_infix(v);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var s = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
var or__5162__auto____$1 = (emmy.expression.render.infix_sym__GT_unicode.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.infix_sym__GT_unicode.cljs$core$IFn$_invoke$arity$1(s) : emmy.expression.render.infix_sym__GT_unicode.call(null,s));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var pred__48896 = cljs.core.re_find;
var expr__48897 = s;
var temp__5823__auto__ = (pred__48896.cljs$core$IFn$_invoke$arity$2 ? pred__48896.cljs$core$IFn$_invoke$arity$2(emmy.expression.render.superscript_pattern,expr__48897) : pred__48896.call(null,emmy.expression.render.superscript_pattern,expr__48897));
if(cljs.core.truth_(temp__5823__auto__)){
var p__5603__auto__ = temp__5823__auto__;
return (function (p__48899){
var vec__48900 = p__48899;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48900,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48900,(1),null);
var superscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48900,(2),null);
var temp__5823__auto____$1 = cljs.core.re_matches(/[0-9]+/,superscript);
if(cljs.core.truth_(temp__5823__auto____$1)){
var n = temp__5823__auto____$1;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy$expression$render$r(stem))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.n__GT_superscript(n)));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy$expression$render$r(stem))+"\u2191"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy$expression$render$r(superscript)));
}
})(p__5603__auto__);
} else {
var temp__5823__auto____$1 = (pred__48896.cljs$core$IFn$_invoke$arity$2 ? pred__48896.cljs$core$IFn$_invoke$arity$2(emmy.expression.render.subscript_pattern,expr__48897) : pred__48896.call(null,emmy.expression.render.subscript_pattern,expr__48897));
if(cljs.core.truth_(temp__5823__auto____$1)){
var p__5603__auto__ = temp__5823__auto____$1;
return (function (p__48907){
var vec__48908 = p__48907;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48908,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48908,(1),null);
var subscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48908,(2),null);
var temp__5823__auto____$2 = cljs.core.re_matches(/[0-9]+/,subscript);
if(cljs.core.truth_(temp__5823__auto____$2)){
var n = temp__5823__auto____$2;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy$expression$render$r(stem))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.n__GT_subscript(n)));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy$expression$render$r(stem))+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy$expression$render$r(subscript)));
}
})(p__5603__auto__);
} else {
return v;
}
}
}
}
})], 0));
/**
 * Wrap the argument, as a string, in braces
 */
emmy.expression.render.brace = (function emmy$expression$render$brace(s){
return (""+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+"}");
});
/**
 * Wrap the argument in braces, as a string, unless it's just a single character
 */
emmy.expression.render.maybe_brace = (function emmy$expression$render$maybe_brace(s){
if(((typeof s === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),(1))))){
return s;
} else {
return emmy.expression.render.brace(s);
}
});
/**
 * Given some infinite value, returns a (string) representation of the LaTeX
 *   commands required to render ##Inf or ##-Inf.
 * 
 *   Returns `nil` for all other inputs.
 */
emmy.expression.render.infinity__GT_tex = (function emmy$expression$render$infinity__GT_tex(x){
var G__48911 = x;
switch (G__48911) {
case Infinity:
return "\\infty";

break;
case -Infinity:
return "-\\infty";

break;
default:
return null;

}
});
/**
 * If true, [[->TeX]] will render down tuples as vertical matrices with square
 *   braces. Defaults to false.
 */
emmy.expression.render._STAR_TeX_vertical_down_tuples_STAR_ = false;
/**
 * If true, [[->TeX]] will render symbols with more than 1 character
 *   using a sans-serif typestyle via `\mathsf`. Defaults to true.
 */
emmy.expression.render._STAR_TeX_sans_serif_symbols_STAR_ = true;
emmy.expression.render.displaystyle = (function emmy$expression$render$displaystyle(s){
return (""+"\\displaystyle{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+"}");
});
emmy.expression.render.__GT_TeX_STAR_ = (function (){var TeX_accent = (function (accent){
return (function (p__48920){
var vec__48921 = p__48920;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48921,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48921,(1),null);
return (""+"\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(accent)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace((emmy.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1(stem) : emmy.expression.render.__GT_TeX_STAR_.call(null,stem)))));
});
});
var dot = TeX_accent("dot");
var ddot = TeX_accent("ddot");
var hat = TeX_accent("hat");
var bar = TeX_accent("bar");
var vec = TeX_accent("vec");
var tilde = TeX_accent("tilde");
var prime = (function (p__48926){
var vec__48927 = p__48926;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48927,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48927,(1),null);
var x = emmy.expression.render.maybe_brace((emmy.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1(stem) : emmy.expression.render.__GT_TeX_STAR_.call(null,stem)));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"^\\prime");
});
var primeprime = (function (p__48933){
var vec__48934 = p__48933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48934,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48934,(1),null);
var x = emmy.expression.render.maybe_brace((emmy.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1(stem) : emmy.expression.render.__GT_TeX_STAR_.call(null,stem)));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"^{\\prime\\prime}");
});
var parenthesize = (function (p1__48914_SHARP_){
return (""+"\\left("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48914_SHARP_)+"\\right)");
});
return emmy.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"u-","u-",1997472866,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"D","D",1632515634,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null)],[(6),(3),(3),(3),(5),(8),(3),(4),(1),(9),(1),(0),(7),(3),(9),(4),(5),(2),(5)]),new cljs.core.Keyword(null,"parenthesize","parenthesize",-1945667578),parenthesize,new cljs.core.Keyword(null,"infix?","infix?",41062120),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),"null",new cljs.core.Symbol(null,"=","=",-1501502141,null),"null",new cljs.core.Symbol(null,"<","<",993667236,null),"null",new cljs.core.Symbol(null,"<=","<=",1244895369,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,"expt","expt",2123850345,null),"null",new cljs.core.Symbol(null,">",">",1085014381,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,">=",">=",1016916022,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null",new cljs.core.Symbol(null,"modulo","modulo",725580254,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),"null"], null), null),new cljs.core.Keyword(null,"juxtapose-multiply","juxtapose-multiply",-1262547042),"\\,",new cljs.core.Keyword(null,"rewrite-trig-squares","rewrite-trig-squares",747917607),true,new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"matrix-by-rows","matrix-by-rows",-1400856559,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"column-matrix","column-matrix",977710190,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"down","down",-1089190199,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"or","or",1876275696,null)],[(function (p__48965){
var vec__48966 = p__48965;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48966,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48966,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(x))+" \\mathbin{\\%} "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(y)));
}),(function (p__48969){
var vec__48970 = p__48969;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48970,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48970,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" \\land "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));
}),(function (x){
var body = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \\cr \\cr ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.expression.render.displaystyle,x));
return (""+"\\begin{pmatrix}"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)+"\\end{pmatrix}");
}),(function (p1__48919_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \\geq ",p1__48919_SHARP_);
}),(function (p__48982){
var vec__48983 = p__48982;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48983,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48983,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(x))+" \\bmod "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(y)));
}),(function (xs){
var n = cljs.core.count(xs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return (""+"\\frac"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.brace((1)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.brace(cljs.core.first(xs))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(2))){
return (""+"\\frac"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.brace(cljs.core.first(xs)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.brace(cljs.core.second(xs))));
} else {
return null;
}
}
}),(function (rows){
var body = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \\cr \\cr ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
var row_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.expression.render.displaystyle,emmy.expression.render.__GT_TeX_STAR_),row);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" & ",row_SINGLEQUOTE_);
}),rows));
return (""+"\\begin{bmatrix}"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)+"\\end{bmatrix}");
}),(function (p__48986){
var vec__48987 = p__48986;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48987,(0),null);
return (""+"\\lnot"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parenthesize(x)));
}),(function (x){
var body = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \\cr \\cr ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.expression.render.displaystyle,x));
return (""+"\\begin{bmatrix}"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)+"\\end{bmatrix}");
}),(function (p1__48918_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \\leq ",p1__48918_SHARP_);
}),(function (p__48990){
var vec__48991 = p__48990;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48991,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48991,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(x))+"^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(e)));
}),(function (p__48994){
var vec__48995 = p__48994;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48995,(0),null);
return (""+"\\mathsf{frac} "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parenthesize(x)));
}),(function (p__48998){
var vec__48999 = p__48998;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48999,(0),null);
return (""+"\\left\\lfloor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" \\right\\rfloor");
}),(function (ds){
return (""+"\\partial_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",ds))));
}),(function (p__49003){
var vec__49004 = p__49003;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49004,(0),null);
return (""+"\\left\\lceil "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" \\right\\rceil");
}),(function (x){
var sep = (cljs.core.truth_(emmy.expression.render._STAR_TeX_vertical_down_tuples_STAR_)?" \\cr \\cr ":"&");
var body = clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.expression.render.displaystyle,x));
return (""+"\\begin{bmatrix}"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)+"\\end{bmatrix}");
}),(function (p1__48917_SHARP_){
return (""+"\\sqrt "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(cljs.core.first(p1__48917_SHARP_))));
}),(function (p__49007){
var vec__49008 = p__49007;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49008,(0),null);
return (""+"\\mathsf{int} "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parenthesize(x)));
}),(function (p__49011){
var vec__49012 = p__49011;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49012,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49012,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" \\lor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));
})]),new cljs.core.Keyword(null,"render-primitive","render-primitive",-529994613),(function emmy$expression$render$r(v){
if(emmy.ratio.ratio_QMARK_(v)){
return (""+"\\frac"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.brace(emmy.ratio.numerator(v)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.brace(emmy.ratio.denominator(v))));
} else {
var or__5162__auto__ = emmy.expression.render.infinity__GT_tex(v);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var s = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
var or__5162__auto____$1 = (emmy.expression.render.TeX_map.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.TeX_map.cljs$core$IFn$_invoke$arity$1(s) : emmy.expression.render.TeX_map.call(null,s));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var pred__49015 = cljs.core.re_find;
var expr__49016 = s;
var temp__5823__auto__ = (pred__49015.cljs$core$IFn$_invoke$arity$2 ? pred__49015.cljs$core$IFn$_invoke$arity$2(emmy.expression.render.superscript_pattern,expr__49016) : pred__49015.call(null,emmy.expression.render.superscript_pattern,expr__49016));
if(cljs.core.truth_(temp__5823__auto__)){
var p__5603__auto__ = temp__5823__auto__;
return (function (p__49018){
var vec__49019 = p__49018;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49019,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49019,(1),null);
var superscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49019,(2),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(emmy$expression$render$r(stem)))+"^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(emmy$expression$render$r(superscript))));
})(p__5603__auto__);
} else {
var temp__5823__auto____$1 = (pred__49015.cljs$core$IFn$_invoke$arity$2 ? pred__49015.cljs$core$IFn$_invoke$arity$2(emmy.expression.render.subscript_pattern,expr__49016) : pred__49015.call(null,emmy.expression.render.subscript_pattern,expr__49016));
if(cljs.core.truth_(temp__5823__auto____$1)){
var p__5603__auto__ = temp__5823__auto____$1;
return (function (p__49022){
var vec__49023 = p__49022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49023,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49023,(1),null);
var subscript = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49023,(2),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(emmy$expression$render$r(stem)))+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.maybe_brace(emmy$expression$render$r(subscript))));
})(p__5603__auto__);
} else {
var temp__5823__auto____$2 = (function (){var G__49026 = /(.+)dotdot$/;
var G__49027 = expr__49016;
return (pred__49015.cljs$core$IFn$_invoke$arity$2 ? pred__49015.cljs$core$IFn$_invoke$arity$2(G__49026,G__49027) : pred__49015.call(null,G__49026,G__49027));
})();
if(cljs.core.truth_(temp__5823__auto____$2)){
var p__5603__auto__ = temp__5823__auto____$2;
return ddot(p__5603__auto__);
} else {
var temp__5823__auto____$3 = (function (){var G__49028 = /(.+)dot$/;
var G__49029 = expr__49016;
return (pred__49015.cljs$core$IFn$_invoke$arity$2 ? pred__49015.cljs$core$IFn$_invoke$arity$2(G__49028,G__49029) : pred__49015.call(null,G__49028,G__49029));
})();
if(cljs.core.truth_(temp__5823__auto____$3)){
var p__5603__auto__ = temp__5823__auto____$3;
return dot(p__5603__auto__);
} else {
var temp__5823__auto____$4 = (function (){var G__49030 = /(.+)hat$/;
var G__49031 = expr__49016;
return (pred__49015.cljs$core$IFn$_invoke$arity$2 ? pred__49015.cljs$core$IFn$_invoke$arity$2(G__49030,G__49031) : pred__49015.call(null,G__49030,G__49031));
})();
if(cljs.core.truth_(temp__5823__auto____$4)){
var p__5603__auto__ = temp__5823__auto____$4;
return hat(p__5603__auto__);
} else {
var temp__5823__auto____$5 = (function (){var G__49032 = /(.+)primeprime$/;
var G__49033 = expr__49016;
return (pred__49015.cljs$core$IFn$_invoke$arity$2 ? pred__49015.cljs$core$IFn$_invoke$arity$2(G__49032,G__49033) : pred__49015.call(null,G__49032,G__49033));
})();
if(cljs.core.truth_(temp__5823__auto____$5)){
var p__5603__auto__ = temp__5823__auto____$5;
return primeprime(p__5603__auto__);
} else {
var temp__5823__auto____$6 = (function (){var G__49034 = /(.+)prime$/;
var G__49035 = expr__49016;
return (pred__49015.cljs$core$IFn$_invoke$arity$2 ? pred__49015.cljs$core$IFn$_invoke$arity$2(G__49034,G__49035) : pred__49015.call(null,G__49034,G__49035));
})();
if(cljs.core.truth_(temp__5823__auto____$6)){
var p__5603__auto__ = temp__5823__auto____$6;
return prime(p__5603__auto__);
} else {
var temp__5823__auto____$7 = (function (){var G__49036 = /(.+)bar$/;
var G__49037 = expr__49016;
return (pred__49015.cljs$core$IFn$_invoke$arity$2 ? pred__49015.cljs$core$IFn$_invoke$arity$2(G__49036,G__49037) : pred__49015.call(null,G__49036,G__49037));
})();
if(cljs.core.truth_(temp__5823__auto____$7)){
var p__5603__auto__ = temp__5823__auto____$7;
return bar(p__5603__auto__);
} else {
var temp__5823__auto____$8 = (function (){var G__49038 = /(.+)vec$/;
var G__49039 = expr__49016;
return (pred__49015.cljs$core$IFn$_invoke$arity$2 ? pred__49015.cljs$core$IFn$_invoke$arity$2(G__49038,G__49039) : pred__49015.call(null,G__49038,G__49039));
})();
if(cljs.core.truth_(temp__5823__auto____$8)){
var p__5603__auto__ = temp__5823__auto____$8;
return vec(p__5603__auto__);
} else {
var temp__5823__auto____$9 = (function (){var G__49040 = /(.+)tilde$/;
var G__49041 = expr__49016;
return (pred__49015.cljs$core$IFn$_invoke$arity$2 ? pred__49015.cljs$core$IFn$_invoke$arity$2(G__49040,G__49041) : pred__49015.call(null,G__49040,G__49041));
})();
if(cljs.core.truth_(temp__5823__auto____$9)){
var p__5603__auto__ = temp__5823__auto____$9;
return tilde(p__5603__auto__);
} else {
if((((v instanceof cljs.core.Symbol)) && ((((((s).length) > (1))) && (cljs.core.not(cljs.core.re_matches(/^d[a-zαωθφ]/,s))))))){
if(cljs.core.truth_(emmy.expression.render._STAR_TeX_sans_serif_symbols_STAR_)){
return (""+"\\mathsf"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.brace(s)));
} else {
return emmy.expression.render.brace(s);
}
} else {
return v;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})], 0));
})();
/**
 * Convert the given expression to TeX format, as a string.
 * 
 *   If you set the `:equation` keyword argument to a truthy value, the result will
 *   be wrapped in an equation environment. `:equation <string>` will insert a
 *   `\label{<string>}` entry inside the equation environment.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [expr (+ 'x 'xy)]
 *  (println
 *    (->TeX expr :equation "label!")))
 * 
 *   \begin{equation}
 *   \label{label!}
 *   x + y
 *   \end{equation}
 *   ```
 *   
 */
emmy.expression.render.__GT_TeX = (function emmy$expression$render$__GT_TeX(var_args){
var args__5903__auto__ = [];
var len__5897__auto___49180 = arguments.length;
var i__5898__auto___49181 = (0);
while(true){
if((i__5898__auto___49181 < len__5897__auto___49180)){
args__5903__auto__.push((arguments[i__5898__auto___49181]));

var G__49185 = (i__5898__auto___49181 + (1));
i__5898__auto___49181 = G__49185;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.expression.render.__GT_TeX.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.expression.render.__GT_TeX.cljs$core$IFn$_invoke$arity$variadic = (function (expr,p__49046){
var map__49047 = p__49046;
var map__49047__$1 = cljs.core.__destructure_map(map__49047);
var equation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49047__$1,new cljs.core.Keyword(null,"equation","equation",-499527745));
var tex_string = (emmy.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1 ? emmy.expression.render.__GT_TeX_STAR_.cljs$core$IFn$_invoke$arity$1(expr) : emmy.expression.render.__GT_TeX_STAR_.call(null,expr));
if(cljs.core.truth_(equation)){
var label = ((((typeof equation === 'string') && (cljs.core.seq(equation))))?(""+"\\label{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(equation)+"}\n"):"");
return (""+"\\begin{equation}\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tex_string)+"\n\\end{equation}");
} else {
return tex_string;
}
}));

(emmy.expression.render.__GT_TeX.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.expression.render.__GT_TeX.cljs$lang$applyTo = (function (seq49044){
var G__49045 = cljs.core.first(seq49044);
var seq49044__$1 = cljs.core.next(seq49044);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49045,seq49044__$1);
}));

/**
 * Converts an S-expression to JavaScript.
 */
emmy.expression.render.__GT_JavaScript = (function (){var make_js_vector = (function (p1__49049_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1("[")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",p1__49049_SHARP_))+cljs.core.str.cljs$core$IFn$_invoke$arity$1("]"));
});
return emmy.expression.render.make_infix_renderer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precedence-map","precedence-map",1892598799),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"u-","u-",1997472866,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"D","D",1632515634,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"and","and",668631710,null)],[(7),(2),(2),(2),(5),(2),(3),(1),(8),(9),(5),(8),(2),(3),(1)]),new cljs.core.Keyword(null,"infix?","infix?",41062120),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),"null",new cljs.core.Symbol(null,"=","=",-1501502141,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null"], null), null),new cljs.core.Keyword(null,"rename-functions","rename-functions",-358633973),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null),new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)],["Math.sinh","Math.sin","Math.tan","Math.cos","Math.abs","!","Math.log","Math.cosh","Math.pow","Math.atan","Math.acos","Math.floor","Math.acosh","Math.ceil","Math.sqrt","Math.asin","Math.exp","Math.trunc","Math.asinh","Math.tanh","Math.atanh"]),new cljs.core.Keyword(null,"render-primitive","render-primitive",-529994613),(function (p1__49050_SHARP_){
if((p1__49050_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.munge(p1__49050_SHARP_);
} else {
return p1__49050_SHARP_;
}
}),new cljs.core.Keyword(null,"special-handlers","special-handlers",-582917928),(function (){var parens = (function (x){
return (""+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+")");
});
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"up","up",1370819414,null),make_js_vector,new cljs.core.Symbol(null,"down","down",-1089190199,null),make_js_vector,new cljs.core.Symbol(null,"modulo","modulo",725580254,null),(function (p__49055){
var vec__49056 = p__49055;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49056,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49056,(1),null);
return parens((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parens((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parens((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+" % "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b))))+" + "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b))))+" % "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)));
}),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),(function (p__49071){
var vec__49072 = p__49071;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49072,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49072,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+" % "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
}),new cljs.core.Symbol(null,"and","and",668631710,null),(function (p__49075){
var vec__49076 = p__49075;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49076,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49076,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+" && "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
}),new cljs.core.Symbol(null,"or","or",1876275696,null),(function (p__49079){
var vec__49080 = p__49079;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49080,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49080,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+" || "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
}),new cljs.core.Symbol(null,"/","/",-1371932971,null),emmy.expression.render.render_infix_ratio], null);
})()], 0));
})();

//# sourceMappingURL=emmy.expression.render.js.map
