goog.provide('emmy.numsymb');
/**
 * When bound to a simplifier (a function from symbolic expression => symbolic
 *   expression), this simplifier will be called after every operation performed on
 *   `emmy.abstract.number` instances.
 * 
 *   `nil` by default.
 */
emmy.numsymb._STAR_incremental_simplifier_STAR_ = null;
emmy.numsymb.operator = cljs.core.first;
emmy.numsymb.operands = cljs.core.rest;
/**
 * Returns a function which will decide if its argument is a sequence commencing
 *   with s.
 */
emmy.numsymb.is_expression_QMARK_ = (function emmy$numsymb$is_expression_QMARK_(s){
return (function (x){
return ((cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1(x) : emmy.numsymb.operator.call(null,x)),s)));
});
});
emmy.numsymb.sum_QMARK_ = emmy.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"+","+",-740910886,null));
emmy.numsymb.product_QMARK_ = emmy.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"*","*",345799209,null));
emmy.numsymb.sqrt_QMARK_ = emmy.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null));
emmy.numsymb.expt_QMARK_ = emmy.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"expt","expt",2123850345,null));
emmy.numsymb.quotient_QMARK_ = emmy.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"/","/",-1371932971,null));
emmy.numsymb.arctan_QMARK_ = emmy.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"atan","atan",-1026550135,null));
emmy.numsymb.derivative_QMARK_ = emmy.numsymb.is_expression_QMARK_(emmy.generic.derivative_symbol);
emmy.numsymb.iterated_derivative_QMARK_ = (function emmy$numsymb$iterated_derivative_QMARK_(expr){
var and__5160__auto__ = cljs.core.seq_QMARK_(expr);
if(and__5160__auto__){
var and__5160__auto____$1 = emmy.numsymb.expt_QMARK_((emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1(expr) : emmy.numsymb.operator.call(null,expr)));
if(cljs.core.truth_(and__5160__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.generic.derivative_symbol,cljs.core.second((emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1(expr) : emmy.numsymb.operator.call(null,expr))));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
/**
 * Returns a wrapper around f that attempts to preserve exactness if the input is
 *   numerically exact, else passes through to f.
 */
emmy.numsymb.with_exactness_preserved = (function emmy$numsymb$with_exactness_preserved(f,sym_or_fn){
var process__$1 = (((sym_or_fn instanceof cljs.core.Symbol))?(function (s){
return (new cljs.core.List(null,sym_or_fn,(new cljs.core.List(null,s,null,(1),null)),(2),null));
}):sym_or_fn);
return (function (s){
if(emmy.value.number_QMARK_(s)){
var q = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(s) : f.call(null,s));
if(cljs.core.not(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(s))){
return q;
} else {
if(cljs.core.truth_(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(q))){
return q;
} else {
return (process__$1.cljs$core$IFn$_invoke$arity$1 ? process__$1.cljs$core$IFn$_invoke$arity$1(s) : process__$1.call(null,s));
}
}
} else {
return (process__$1.cljs$core$IFn$_invoke$arity$1 ? process__$1.cljs$core$IFn$_invoke$arity$1(s) : process__$1.call(null,s));
}
});
});
/**
 * Modulo and remainder are very similar, so can benefit from a shared set of
 *   simplifications.
 */
emmy.numsymb.mod_rem = (function emmy$numsymb$mod_rem(a,b,f,sym){
if(((emmy.value.number_QMARK_(a)) && (emmy.value.number_QMARK_(b)))){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,b) : f.call(null,a,b));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return (0);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return (0);
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return a;
} else {
return (new cljs.core.List(null,sym,(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
}
}
});
emmy.numsymb.add = (function emmy$numsymb$add(a,b){
if(((emmy.value.number_QMARK_(a)) && (emmy.value.number_QMARK_(b)))){
return emmy.generic.add.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(emmy.value.number_QMARK_(a)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return b;
} else {
if(cljs.core.truth_(emmy.numsymb.sum_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : emmy.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
} else {
if(emmy.value.number_QMARK_(b)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return a;
} else {
if(cljs.core.truth_(emmy.numsymb.sum_QMARK_(a))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : emmy.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
} else {
if(cljs.core.truth_(emmy.numsymb.sum_QMARK_(a))){
if(cljs.core.truth_(emmy.numsymb.sum_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : emmy.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : emmy.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : emmy.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
} else {
if(cljs.core.truth_(emmy.numsymb.sum_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : emmy.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
}
}
});
emmy.numsymb.sub = (function emmy$numsymb$sub(a,b){
if(((emmy.value.number_QMARK_(a)) && (emmy.value.number_QMARK_(b)))){
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(emmy.value.number_QMARK_(a)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));
}
} else {
if(emmy.value.number_QMARK_(b)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return a;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return (0);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
}
});
emmy.numsymb.negate = (function emmy$numsymb$negate(x){
return emmy.numsymb.sub((0),x);
});
emmy.numsymb.mul = (function emmy$numsymb$mul(a,b){
if(((emmy.value.number_QMARK_(a)) && (emmy.value.number_QMARK_(b)))){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(emmy.value.number_QMARK_(a)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return a;
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return b;
} else {
if(cljs.core.truth_(emmy.numsymb.product_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : emmy.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
} else {
if(emmy.value.number_QMARK_(b)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return b;
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return a;
} else {
if(cljs.core.truth_(emmy.numsymb.product_QMARK_(a))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : emmy.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
} else {
if(cljs.core.truth_(emmy.numsymb.product_QMARK_(a))){
if(cljs.core.truth_(emmy.numsymb.product_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : emmy.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : emmy.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : emmy.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
} else {
if(cljs.core.truth_(emmy.numsymb.product_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : emmy.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
}
}
});
emmy.numsymb.div = (function emmy$numsymb$div(a,b){
if(((emmy.value.number_QMARK_(a)) && (emmy.value.number_QMARK_(b)))){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(emmy.value.number_QMARK_(a)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return a;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));
}
} else {
if(emmy.value.number_QMARK_(b)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return emmy.util.arithmetic_ex("division by zero");
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return a;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
});
emmy.numsymb.invert = (function emmy$numsymb$invert(x){
return emmy.numsymb.div((1),x);
});
emmy.numsymb.modulo = (function emmy$numsymb$modulo(a,b){
return emmy.numsymb.mod_rem(a,b,emmy.numsymb.modulo,new cljs.core.Symbol(null,"modulo","modulo",725580254,null));
});
emmy.numsymb.remainder = (function emmy$numsymb$remainder(a,b){
return emmy.numsymb.mod_rem(a,b,emmy.numsymb.remainder,new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null));
});
emmy.numsymb.floor = (function emmy$numsymb$floor(a){
if(emmy.value.number_QMARK_(a)){
return emmy.generic.floor.cljs$core$IFn$_invoke$arity$1(a);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"floor","floor",-772394748,null),(new cljs.core.List(null,a,null,(1),null)),(2),null));
}
});
emmy.numsymb.ceiling = (function emmy$numsymb$ceiling(a){
if(emmy.value.number_QMARK_(a)){
return emmy.generic.ceiling.cljs$core$IFn$_invoke$arity$1(a);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),(new cljs.core.List(null,a,null,(1),null)),(2),null));
}
});
emmy.numsymb.integer_part = (function emmy$numsymb$integer_part(a){
if(emmy.value.number_QMARK_(a)){
return emmy.generic.integer_part.cljs$core$IFn$_invoke$arity$1(a);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),(new cljs.core.List(null,a,null,(1),null)),(2),null));
}
});
emmy.numsymb.fractional_part = (function emmy$numsymb$fractional_part(a){
if(emmy.value.number_QMARK_(a)){
return emmy.generic.fractional_part.cljs$core$IFn$_invoke$arity$1(a);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),(new cljs.core.List(null,a,null,(1),null)),(2),null));
}
});
emmy.numsymb.pi = Math.PI;
emmy.numsymb.pi_over_4 = (emmy.numsymb.pi / (4));
emmy.numsymb.two_pi = ((2) * emmy.numsymb.pi);
emmy.numsymb.pi_over_2 = ((2) * emmy.numsymb.pi_over_4);
emmy.numsymb.n_COLON_zero_mod_pi_QMARK_ = (function emmy$numsymb$n_COLON_zero_mod_pi_QMARK_(x){
return emmy.generic.almost_integral_QMARK_((x / emmy.numsymb.pi));
});
emmy.numsymb.n_COLON_pi_over_2_mod_2pi_QMARK_ = (function emmy$numsymb$n_COLON_pi_over_2_mod_2pi_QMARK_(x){
return emmy.generic.almost_integral_QMARK_(((1) / ((x - emmy.numsymb.pi_over_2) - emmy.numsymb.two_pi)));
});
emmy.numsymb.n_COLON__pi_over_2_mod_2pi_QMARK_ = (function emmy$numsymb$n_COLON__pi_over_2_mod_2pi_QMARK_(x){
return emmy.generic.almost_integral_QMARK_(((x + emmy.numsymb.pi_over_2) / emmy.numsymb.two_pi));
});
emmy.numsymb.n_COLON_pi_mod_2pi_QMARK_ = (function emmy$numsymb$n_COLON_pi_mod_2pi_QMARK_(x){
return emmy.generic.almost_integral_QMARK_(((x - emmy.numsymb.pi) / emmy.numsymb.two_pi));
});
emmy.numsymb.n_COLON_pi_over_2_mod_pi_QMARK_ = (function emmy$numsymb$n_COLON_pi_over_2_mod_pi_QMARK_(x){
return emmy.generic.almost_integral_QMARK_(((x - emmy.numsymb.pi_over_2) / emmy.numsymb.pi));
});
emmy.numsymb.n_COLON_zero_mod_2pi_QMARK_ = (function emmy$numsymb$n_COLON_zero_mod_2pi_QMARK_(x){
return emmy.generic.almost_integral_QMARK_((x / emmy.numsymb.two_pi));
});
emmy.numsymb.n_COLON__pi_over_4_mod_pi_QMARK_ = (function emmy$numsymb$n_COLON__pi_over_4_mod_pi_QMARK_(x){
return emmy.generic.almost_integral_QMARK_(((x + emmy.numsymb.pi_over_4) / emmy.numsymb.pi));
});
emmy.numsymb.n_COLON_pi_over_4_mod_pi_QMARK_ = (function emmy$numsymb$n_COLON_pi_over_4_mod_pi_QMARK_(x){
return emmy.generic.almost_integral_QMARK_(((x - emmy.numsymb.pi_over_4) / emmy.numsymb.pi));
});
emmy.numsymb.zero_mod_pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null,new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null);
emmy.numsymb.pi_over_2_mod_2pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null], null), null);
emmy.numsymb._pi_over_2_mod_2pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null);
emmy.numsymb.pi_mod_2pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null], null), null);
emmy.numsymb.pi_over_2_mod_pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null);
emmy.numsymb.zero_mod_2pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null);
emmy.numsymb._pi_over_4_mod_pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-4","-pi-over-4",-640936368,null),null], null), null);
emmy.numsymb.pi_over_4_mod_pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"+pi-over-4","+pi-over-4",-1289502545,null),null,new cljs.core.Symbol(null,"pi-over-4","pi-over-4",1610173659,null),null], null), null);
/**
 * Implementation of sine that attempts to apply optimizations at the call site.
 *   If it's not possible to do this (if the expression is symbolic, say), returns
 *   a symbolic form.
 */
emmy.numsymb.sin = (function emmy$numsymb$sin(x){
if(emmy.value.number_QMARK_(x)){
if(cljs.core.truth_(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
} else {
if(emmy.numsymb.n_COLON_zero_mod_pi_QMARK_(x)){
return (0);
} else {
if(emmy.numsymb.n_COLON_pi_over_2_mod_2pi_QMARK_(x)){
return (1);
} else {
if(emmy.numsymb.n_COLON__pi_over_2_mod_2pi_QMARK_(x)){
return (-1);
} else {
return Math.sin(x);

}
}
}
}
} else {
if((x instanceof cljs.core.Symbol)){
if(cljs.core.truth_((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null,new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null,new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null,new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).call(null,x)))){
return (0);
} else {
if(cljs.core.truth_((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null], null), null).call(null,x)))){
return (1);
} else {
if(cljs.core.truth_((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).call(null,x)))){
return (-1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
});
/**
 * Implementation of cosine that attempts to apply optimizations at the call site.
 *   If it's not possible to do this (if the expression is symbolic, say), returns
 *   a symbolic form.
 */
emmy.numsymb.cos = (function emmy$numsymb$cos(x){
if(emmy.value.number_QMARK_(x)){
if(cljs.core.truth_(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return (1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
} else {
if(emmy.numsymb.n_COLON_pi_over_2_mod_pi_QMARK_(x)){
return (0);
} else {
if(emmy.numsymb.n_COLON_zero_mod_2pi_QMARK_(x)){
return (1);
} else {
if(emmy.numsymb.n_COLON_pi_mod_2pi_QMARK_(x)){
return (-1);
} else {
return Math.cos(x);

}
}
}
}
} else {
if((x instanceof cljs.core.Symbol)){
if(cljs.core.truth_((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).call(null,x)))){
return (0);
} else {
if(cljs.core.truth_((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).call(null,x)))){
return (1);
} else {
if(cljs.core.truth_((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null], null), null).call(null,x)))){
return (-1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
});
/**
 * Implementation of tangent that attempts to apply optimizations at the call site.
 *   If it's not possible to do this (if the expression is symbolic, say), returns
 *   a symbolic form.
 */
emmy.numsymb.tan = (function emmy$numsymb$tan(x){
if(emmy.value.number_QMARK_(x)){
if(cljs.core.truth_(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
} else {
if(emmy.numsymb.n_COLON_zero_mod_pi_QMARK_(x)){
return (0);
} else {
if(emmy.numsymb.n_COLON_pi_over_4_mod_pi_QMARK_(x)){
return (1);
} else {
if(emmy.numsymb.n_COLON__pi_over_4_mod_pi_QMARK_(x)){
return (-1);
} else {
if(emmy.numsymb.n_COLON_pi_over_2_mod_pi_QMARK_(x)){
return emmy.util.illegal("Undefined: tan");
} else {
return Math.tan(x);

}
}
}
}
}
} else {
if((x instanceof cljs.core.Symbol)){
if(cljs.core.truth_((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null,new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null,new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null,new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).call(null,x)))){
return (0);
} else {
if(cljs.core.truth_((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"+pi-over-4","+pi-over-4",-1289502545,null),null,new cljs.core.Symbol(null,"pi-over-4","pi-over-4",1610173659,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"+pi-over-4","+pi-over-4",-1289502545,null),null,new cljs.core.Symbol(null,"pi-over-4","pi-over-4",1610173659,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"+pi-over-4","+pi-over-4",-1289502545,null),null,new cljs.core.Symbol(null,"pi-over-4","pi-over-4",1610173659,null),null], null), null).call(null,x)))){
return (1);
} else {
if(cljs.core.truth_((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-4","-pi-over-4",-640936368,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-4","-pi-over-4",-640936368,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-4","-pi-over-4",-640936368,null),null], null), null).call(null,x)))){
return (-1);
} else {
if(cljs.core.truth_((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).call(null,x)))){
return emmy.util.illegal("Undefined: tan");
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
});
emmy.numsymb.csc = (function emmy$numsymb$csc(x){
if(emmy.value.number_QMARK_(x)){
if(cljs.core.not(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.generic.csc.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.util.illegal((""+"Zero argument -- g/csc"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.numsymb.sin(x),null,(1),null))], 0))));
}
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.numsymb.sin(x),null,(1),null))], 0))));
}
});
emmy.numsymb.sec = (function emmy$numsymb$sec(x){
if(emmy.value.number_QMARK_(x)){
if(cljs.core.not(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.generic.sec.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return (1);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.numsymb.cos(x),null,(1),null))], 0))));
}
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.numsymb.cos(x),null,(1),null))], 0))));
}
});
emmy.numsymb.asin = (function emmy$numsymb$asin(x){
if(emmy.value.number_QMARK_(x)){
if(cljs.core.not(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.generic.asin.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
emmy.numsymb.acos = (function emmy$numsymb$acos(x){
if(emmy.value.number_QMARK_(x)){
if(cljs.core.not(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.generic.acos.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
emmy.numsymb.atan = (function emmy$numsymb$atan(var_args){
var G__36795 = arguments.length;
switch (G__36795) {
case 1:
return emmy.numsymb.atan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.numsymb.atan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numsymb.atan.cljs$core$IFn$_invoke$arity$1 = (function (y){
if(emmy.value.number_QMARK_(y)){
if(cljs.core.not(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(y))){
return emmy.generic.atan.cljs$core$IFn$_invoke$arity$1(y);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(y))){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,y,null,(1),null)),(2),null));
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,y,null,(1),null)),(2),null));
}
}));

(emmy.numsymb.atan.cljs$core$IFn$_invoke$arity$2 = (function (y,x){
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.numsymb.atan.cljs$core$IFn$_invoke$arity$1(y);
} else {
if(cljs.core.truth_(emmy.generic.exact_zero_QMARK_(y))){
if(emmy.value.number_QMARK_(x)){
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return new cljs.core.Symbol(null,"pi","pi",176774184,null);
} else {
return (0);
}
} else {
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),new cljs.core.Symbol(null,"numsymb-atan","numsymb-atan",-1523379191,null));
if(cljs.core.truth_(and__5160__auto__)){
return (0);
} else {
return and__5160__auto__;
}
}
} else {
if(cljs.core.truth_(emmy.generic.exact_zero_QMARK_(x))){
if(emmy.value.number_QMARK_(y)){
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(y))){
return cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)));
} else {
return cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2));
}
} else {
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),new cljs.core.Symbol(null,"numsymb-atan","numsymb-atan",-1523379191,null));
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2));
} else {
return and__5160__auto__;
}
}
} else {
if(((emmy.value.number_QMARK_(x)) && (((emmy.value.number_QMARK_(y)) && (((cljs.core.not(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core.not(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(y))))))))){
return emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(y,x);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,y,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));

}
}
}
}
}));

(emmy.numsymb.atan.cljs$lang$maxFixedArity = 2);

emmy.numsymb.cosh = (function emmy$numsymb$cosh(x){
if(emmy.value.number_QMARK_(x)){
if(cljs.core.not(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return (1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
emmy.numsymb.sinh = (function emmy$numsymb$sinh(x){
if(emmy.value.number_QMARK_(x)){
if(cljs.core.not(emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
emmy.numsymb.tanh = (function emmy$numsymb$tanh(x){
return emmy.numsymb.div(emmy.numsymb.sinh(x),emmy.numsymb.cosh(x));
});
emmy.numsymb.coth = (function emmy$numsymb$coth(x){
return emmy.numsymb.div(emmy.numsymb.cosh(x),emmy.numsymb.sinh(x));
});
emmy.numsymb.sech = (function emmy$numsymb$sech(x){
return emmy.numsymb.div((1),emmy.numsymb.cosh(x));
});
emmy.numsymb.csch = (function emmy$numsymb$csch(x){
return emmy.numsymb.div((1),emmy.numsymb.sinh(x));
});
emmy.numsymb.acot = (function emmy$numsymb$acot(x){
return emmy.numsymb.sub(cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),emmy.numsymb.atan.cljs$core$IFn$_invoke$arity$1(x));
});
/**
 * Symbolic expression handler for abs.
 */
emmy.numsymb.abs = (function emmy$numsymb$abs(x){
if(emmy.value.number_QMARK_(x)){
return emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(x);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"abs","abs",1394505050,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
emmy.numsymb.gcd = (function emmy$numsymb$gcd(a,b){
if(((emmy.value.number_QMARK_(a)) && (emmy.value.number_QMARK_(b)))){
return emmy.generic.gcd.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(emmy.value.number_QMARK_(a)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return b;
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return (1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
} else {
if(emmy.value.number_QMARK_(b)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return a;
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return (1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return a;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
}
}
});
emmy.numsymb.lcm = (function emmy$numsymb$lcm(a,b){
if(((emmy.value.number_QMARK_(a)) && (emmy.value.number_QMARK_(b)))){
return emmy.generic.lcm.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(emmy.value.number_QMARK_(a)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return (0);
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return b;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
} else {
if(emmy.value.number_QMARK_(b)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return (0);
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return a;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return a;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
}
}
});
/**
 * Square root implementation that attempts to preserve exact numbers wherever
 *   possible. If the incoming value is not exact, simply computes sqrt.
 */
emmy.numsymb.sqrt = emmy.numsymb.with_exactness_preserved(emmy.generic.sqrt,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null));
/**
 * Attempts to preserve exact precision if the argument is exact; else, evaluates
 *   symbolically or numerically.
 */
emmy.numsymb.log = emmy.numsymb.with_exactness_preserved(emmy.generic.log,new cljs.core.Symbol(null,"log","log",45015523,null));
/**
 * Attempts to preserve exact precision if the argument is exact; else, evaluates
 *   symbolically or numerically.
 */
emmy.numsymb.exp = emmy.numsymb.with_exactness_preserved(emmy.generic.exp,new cljs.core.Symbol(null,"exp","exp",1378825265,null));
/**
 * Attempts to preserve exact precision if either argument is exact; else,
 *   evaluates symbolically or numerically.
 */
emmy.numsymb.expt = (function emmy$numsymb$expt(b,e){
if(((emmy.value.number_QMARK_(b)) && (emmy.value.number_QMARK_(e)))){
return emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(b,e);
} else {
if(emmy.value.number_QMARK_(b)){
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return (1);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,e,null,(1),null))], 0))));

}
} else {
if(emmy.value.number_QMARK_(e)){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(e))){
return (1);
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(e))){
return b;
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.integer_QMARK_(e);
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core.even_QMARK_(e);
if(and__5160__auto____$1){
return emmy.numsymb.sqrt_QMARK_(b);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})())){
var G__36834 = cljs.core.first((emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : emmy.numsymb.operands.call(null,b)));
var G__36835 = cljs.core.quot(e,(2));
return (emmy.numsymb.expt.cljs$core$IFn$_invoke$arity$2 ? emmy.numsymb.expt.cljs$core$IFn$_invoke$arity$2(G__36834,G__36835) : emmy.numsymb.expt.call(null,G__36834,G__36835));
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.numsymb.expt_QMARK_(b);
if(cljs.core.truth_(and__5160__auto__)){
return ((emmy.value.number_QMARK_(cljs.core.second((emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : emmy.numsymb.operands.call(null,b))))) && (cljs.core.integer_QMARK_((cljs.core.second((emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : emmy.numsymb.operands.call(null,b))) * e))));
} else {
return and__5160__auto__;
}
})())){
var G__36836 = cljs.core.first((emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : emmy.numsymb.operands.call(null,b)));
var G__36837 = (cljs.core.second((emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : emmy.numsymb.operands.call(null,b))) * e);
return (emmy.numsymb.expt.cljs$core$IFn$_invoke$arity$2 ? emmy.numsymb.expt.cljs$core$IFn$_invoke$arity$2(G__36836,G__36837) : emmy.numsymb.expt.call(null,G__36836,G__36837));
} else {
if((e < (0))){
return emmy.numsymb.invert((function (){var G__36838 = b;
var G__36839 = (- e);
return (emmy.numsymb.expt.cljs$core$IFn$_invoke$arity$2 ? emmy.numsymb.expt.cljs$core$IFn$_invoke$arity$2(G__36838,G__36839) : emmy.numsymb.expt.call(null,G__36838,G__36839));
})());
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,e,null,(1),null))], 0))));

}
}
}
}
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,e,null,(1),null))], 0))));

}
}
}
});
emmy.numsymb.conjugate_transparent_operators = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 31, [new cljs.core.Symbol(null,"csch","csch",-1950330545,null),null,new cljs.core.Symbol(null,"cube","cube",138920159,null),null,new cljs.core.Symbol(null,"up","up",1370819414,null),null,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null,new cljs.core.Symbol(null,"exp10","exp10",-1005012445,null),null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,new cljs.core.Symbol(null,"invert","invert",-1100858266,null),null,new cljs.core.Symbol(null,"log","log",45015523,null),null,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,new cljs.core.Symbol(null,"sec","sec",60154974,null),null,new cljs.core.Symbol(null,"negate","negate",337772450,null),null,new cljs.core.Symbol(null,"sech","sech",-1403979131,null),null,new cljs.core.Symbol(null,"log10","log10",891257803,null),null,new cljs.core.Symbol(null,"square","square",-1842001092,null),null,new cljs.core.Symbol(null,"exp2","exp2",603509626,null),null,new cljs.core.Symbol(null,"*","*",345799209,null),null,new cljs.core.Symbol(null,"log2","log2",-1850656939,null),null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),null,new cljs.core.Symbol(null,"csc","csc",-427853492,null),null,new cljs.core.Symbol(null,"acos","acos",353741763,null),null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,new cljs.core.Symbol(null,"down","down",-1089190199,null),null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),null,new cljs.core.Symbol(null,"tanh","tanh",480481797,null),null], null), null);
emmy.numsymb.make_rectangular = (function emmy$numsymb$make_rectangular(r,i){
if(cljs.core.truth_(emmy.generic.exact_zero_QMARK_(i))){
return r;
} else {
if(((emmy.value.real_QMARK_(r)) && (emmy.value.real_QMARK_(i)))){
return emmy.generic.make_rectangular.cljs$core$IFn$_invoke$arity$2(r,i);
} else {
return emmy.numsymb.add(r,emmy.numsymb.mul(emmy.complex.I,i));

}
}
});
emmy.numsymb.make_polar = (function emmy$numsymb$make_polar(m,a){
if(cljs.core.truth_(emmy.generic.exact_zero_QMARK_(m))){
return m;
} else {
if(cljs.core.truth_(emmy.generic.exact_zero_QMARK_(a))){
return m;
} else {
if(((emmy.value.real_QMARK_(m)) && (emmy.value.real_QMARK_(a)))){
return emmy.generic.make_polar.cljs$core$IFn$_invoke$arity$2(m,a);
} else {
return emmy.numsymb.mul(m,emmy.numsymb.add(emmy.numsymb.cos(a),emmy.numsymb.mul(emmy.complex.I,emmy.numsymb.sin(a))));

}
}
}
});
emmy.numsymb.conjugate = (function emmy$numsymb$conjugate(z){
if(emmy.value.number_QMARK_(z)){
return emmy.generic.conjugate.cljs$core$IFn$_invoke$arity$1(z);
} else {
if(((cljs.core.seq_QMARK_(z)) && (cljs.core.contains_QMARK_(emmy.numsymb.conjugate_transparent_operators,(emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1(z) : emmy.numsymb.operator.call(null,z)))))){
return cljs.core.cons((emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1(z) : emmy.numsymb.operator.call(null,z)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.numsymb.conjugate,(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(z) : emmy.numsymb.operands.call(null,z))));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"conjugate","conjugate",-1063123193,null),(new cljs.core.List(null,z,null,(1),null)),(2),null));

}
}
});
emmy.numsymb.magnitude = emmy.numsymb.with_exactness_preserved(emmy.generic.magnitude,(function (a){
return emmy.numsymb.sqrt(emmy.numsymb.mul(emmy.numsymb.conjugate(a),a));
}));
emmy.numsymb.real_part = (function emmy$numsymb$real_part(z){
if(emmy.value.number_QMARK_(z)){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1(z);
} else {
return emmy.numsymb.mul(emmy.generic.div.cljs$core$IFn$_invoke$arity$2((1),(2)),emmy.numsymb.add(z,emmy.numsymb.conjugate(z)));
}
});
emmy.numsymb.imag_part = (function emmy$numsymb$imag_part(z){
if(emmy.value.number_QMARK_(z)){
return emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1(z);
} else {
return emmy.numsymb.mul(emmy.generic.div.cljs$core$IFn$_invoke$arity$2((1),(2)),emmy.numsymb.mul(emmy.complex.complex.cljs$core$IFn$_invoke$arity$2((0),(-1)),emmy.numsymb.sub(z,emmy.numsymb.conjugate(z))));
}
});
emmy.numsymb.angle = emmy.numsymb.with_exactness_preserved(emmy.generic.angle,(function (z){
return emmy.numsymb.atan.cljs$core$IFn$_invoke$arity$2(emmy.numsymb.imag_part(z),emmy.numsymb.real_part(z));
}));
/**
 * Returns the symbolic dot product of the two supplied numbers `z1` and `z2`.
 * 
 *   If both are numbers, defers to [[emmy.generic/dot-product]]. Else,
 *   returns
 * 
 *   $$\Re(z_1)\Re(z_2) + \Im(z_1)\Im(z_2)$$
 */
emmy.numsymb.dot_product = (function emmy$numsymb$dot_product(z1,z2){
if(((emmy.value.number_QMARK_(z1)) && (emmy.value.number_QMARK_(z2)))){
return emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(z1,z2);
} else {
if(emmy.value.real_QMARK_(z1)){
return emmy.numsymb.mul(z1,emmy.numsymb.real_part(z2));
} else {
if(emmy.value.real_QMARK_(z2)){
return emmy.numsymb.mul(emmy.numsymb.real_part(z1),z2);
} else {
return emmy.numsymb.add(emmy.numsymb.mul(emmy.numsymb.real_part(z1),emmy.numsymb.real_part(z2)),emmy.numsymb.mul(emmy.numsymb.imag_part(z1),emmy.numsymb.imag_part(z2)));

}
}
}
});
/**
 * Returns the symbolic derivative of the expression `expr`, which should
 *   represent a function like `f`.
 * 
 *   If the expression is already a derivative like `(D f)` or `((expt D 2) f)`,
 *   `derivative` will increase the power of the exponent.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (derivative 'f)              ;;=> (D f)
 *   (derivative '(D f))          ;;=> ((expt D 2) f)
 *   (derivative '((expt D 2) f)) ;;=> ((expt D 3) f)
 *   ```
 */
emmy.numsymb.derivative = (function emmy$numsymb$derivative(expr){
if(cljs.core.truth_(emmy.numsymb.derivative_QMARK_(expr))){
var f = cljs.core.first((emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(expr) : emmy.numsymb.operands.call(null,expr)));
return (new cljs.core.List(null,emmy.numsymb.expt(emmy.generic.derivative_symbol,(2)),(new cljs.core.List(null,f,null,(1),null)),(2),null));
} else {
if(cljs.core.truth_(emmy.numsymb.iterated_derivative_QMARK_(expr))){
var pow = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1(expr) : emmy.numsymb.operator.call(null,expr)),(2));
var f = cljs.core.first((emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(expr) : emmy.numsymb.operands.call(null,expr)));
return (new cljs.core.List(null,emmy.numsymb.expt(emmy.generic.derivative_symbol,(pow + (1))),(new cljs.core.List(null,f,null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,emmy.generic.derivative_symbol,(new cljs.core.List(null,expr,null,(1),null)),(2),null));

}
}
});
/**
 * For symbolic arguments, returns a symbolic expression representing the logical
 *   conjuction of `l` and `r`.
 * 
 *   If either side is `true?`, returns the other side. If either side is `false?`,
 *   returns `false`.
 */
emmy.numsymb.sym_COLON_and = (function emmy$numsymb$sym_COLON_and(l,r){
if(l === true){
return r;
} else {
if(l === false){
return l;
} else {
if(r === true){
return l;
} else {
if(r === false){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,r)){
return r;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"and","and",668631710,null),(new cljs.core.List(null,l,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null));

}
}
}
}
}
});
/**
 * For symbolic arguments, returns a symbolic expression representing the logical
 *   disjunction of `l` and `r`.
 * 
 *   If either side is `true?`, returns `true`. If either side is `false?`,
 *   returns the other side.
 */
emmy.numsymb.sym_COLON_or = (function emmy$numsymb$sym_COLON_or(l,r){
if(l === true){
return l;
} else {
if(l === false){
return r;
} else {
if(r === true){
return r;
} else {
if(r === false){
return l;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,r)){
return r;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"or","or",1876275696,null),(new cljs.core.List(null,l,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null));

}
}
}
}
}
});
/**
 * For symbolic `x`, returns a symbolic expression representing the logical
 *   negation of `x`. For boolean `x`, returns the negation of `x`.
 */
emmy.numsymb.sym_COLON_not = (function emmy$numsymb$sym_COLON_not(x){
if(cljs.core.boolean_QMARK_(x)){
return (!(x));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
emmy.numsymb.sym_COLON_bin_EQ_ = (function emmy$numsymb$sym_COLON_bin_EQ_(l,r){
var num_l_QMARK_ = emmy.value.number_QMARK_(l);
var num_r_QMARK_ = emmy.value.number_QMARK_(r);
if(((num_l_QMARK_) && (num_r_QMARK_))){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(l,r);
} else {
if(((num_l_QMARK_) || (num_r_QMARK_))){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,r)){
return true;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,l,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null));

}
}
}
});
emmy.numsymb.sym_COLON__EQ_ = (function emmy$numsymb$sym_COLON__EQ_(var_args){
var G__36868 = arguments.length;
switch (G__36868) {
case 0:
return emmy.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___36919 = arguments.length;
var i__5898__auto___36920 = (0);
while(true){
if((i__5898__auto___36920 < len__5897__auto___36919)){
args_arr__5922__auto__.push((arguments[i__5898__auto___36920]));

var G__36921 = (i__5898__auto___36920 + (1));
i__5898__auto___36920 = G__36921;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
}));

(emmy.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
}));

(emmy.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return emmy.numsymb.sym_COLON_bin_EQ_(x,y);
}));

(emmy.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var xs = cljs.core.cons(x,cljs.core.cons(y,more));
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),xs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__36870){
var vec__36872 = p__36870;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36872,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36872,(1),null);
var temp__5823__auto__ = emmy.numsymb.sym_COLON_bin_EQ_(x__$1,y__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var eq = temp__5823__auto__;
return emmy.numsymb.sym_COLON_and(acc,eq);
} else {
return cljs.core.reduced(false);
}
}),true,pairs);
}));

/** @this {Function} */
(emmy.numsymb.sym_COLON__EQ_.cljs$lang$applyTo = (function (seq36865){
var G__36866 = cljs.core.first(seq36865);
var seq36865__$1 = cljs.core.next(seq36865);
var G__36867 = cljs.core.first(seq36865__$1);
var seq36865__$2 = cljs.core.next(seq36865__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36866,G__36867,seq36865__$2);
}));

(emmy.numsymb.sym_COLON__EQ_.cljs$lang$maxFixedArity = (2));

emmy.numsymb.sym_COLON_zero_QMARK_ = (function emmy$numsymb$sym_COLON_zero_QMARK_(x){
if(emmy.value.number_QMARK_(x)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,(0),(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
}
});
emmy.numsymb.sym_COLON_one_QMARK_ = (function emmy$numsymb$sym_COLON_one_QMARK_(x){
if(emmy.value.number_QMARK_(x)){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
}
});
emmy.numsymb.symbolic_operator_table = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"csch","csch",-1950330545,null),new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),new cljs.core.Symbol(null,"cube","cube",138920159,null),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"invert","invert",-1100858266,null),new cljs.core.Symbol(null,"dot-product","dot-product",-203055892,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol(null,"coth","coth",1130257730,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"sec","sec",60154974,null),new cljs.core.Symbol(null,"negate","negate",337772450,null),new cljs.core.Symbol(null,"sech","sech",-1403979131,null),new cljs.core.Symbol(null,"square","square",-1842001092,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null),new cljs.core.Symbol(null,"csc","csc",-427853492,null),new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null),new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol(null,"acot","acot",1103016569,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"inner-product","inner-product",-1963110418,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"conjugate","conjugate",-1063123193,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"derivative","derivative",-1233120304,null),new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identity?","identity?",-1064576891,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null),new cljs.core.Symbol(null,"one?","one?",1787102903,null)],[emmy.numsymb.remainder,emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(emmy.numsymb.sym_COLON_and,true,cljs.core.false_QMARK_),emmy.numsymb.csch,emmy.numsymb.make_polar,(function (p1__36878_SHARP_){
return emmy.numsymb.expt(p1__36878_SHARP_,(3));
}),emmy.numsymb.sinh,emmy.numsymb.sin,emmy.numsymb.tan,emmy.numsymb.cos,emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$2(emmy.numsymb.gcd,(0)),emmy.numsymb.modulo,emmy.util.aggregate.group.cljs$core$IFn$_invoke$arity$5(emmy.numsymb.div,emmy.numsymb.mul,emmy.numsymb.invert,(1),emmy.generic.zero_QMARK_),emmy.numsymb.abs,emmy.numsymb.invert,emmy.numsymb.dot_product,emmy.numsymb.sym_COLON_not,emmy.numsymb.real_part,emmy.numsymb.log,emmy.numsymb.sym_COLON__EQ_,emmy.numsymb.cosh,emmy.numsymb.coth,emmy.numsymb.expt,emmy.numsymb.fractional_part,emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$2(emmy.numsymb.add,(0)),emmy.numsymb.sec,emmy.numsymb.negate,emmy.numsymb.sech,(function (p1__36879_SHARP_){
return emmy.numsymb.expt(p1__36879_SHARP_,(2));
}),emmy.numsymb.magnitude,emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(emmy.numsymb.mul,(1),emmy.generic.zero_QMARK_),emmy.numsymb.sym_COLON_zero_QMARK_,emmy.numsymb.atan,emmy.numsymb.make_rectangular,emmy.numsymb.csc,emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(emmy.numsymb.lcm,(1),emmy.generic.zero_QMARK_),emmy.numsymb.acos,emmy.numsymb.acot,emmy.numsymb.floor,emmy.numsymb.imag_part,emmy.util.aggregate.group.cljs$core$IFn$_invoke$arity$4(emmy.numsymb.sub,emmy.numsymb.add,emmy.numsymb.negate,(0)),emmy.numsymb.dot_product,emmy.numsymb.ceiling,emmy.numsymb.conjugate,emmy.numsymb.sqrt,emmy.numsymb.asin,emmy.numsymb.exp,emmy.numsymb.integer_part,emmy.numsymb.derivative,emmy.numsymb.tanh,emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(emmy.numsymb.sym_COLON_or,false,cljs.core.true_QMARK_),emmy.numsymb.sym_COLON_one_QMARK_,emmy.numsymb.angle,emmy.numsymb.sym_COLON_one_QMARK_]);
/**
 * Given a symbol (like `'+`) returns an applicable operator if there is a
 *   corresponding symbolic operator construction available.
 */
emmy.numsymb.symbolic_operator = (function emmy$numsymb$symbolic_operator(s){
return (emmy.numsymb.symbolic_operator_table.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.symbolic_operator_table.cljs$core$IFn$_invoke$arity$1(s) : emmy.numsymb.symbolic_operator_table.call(null,s));
});

//# sourceMappingURL=emmy.numsymb.js.map
