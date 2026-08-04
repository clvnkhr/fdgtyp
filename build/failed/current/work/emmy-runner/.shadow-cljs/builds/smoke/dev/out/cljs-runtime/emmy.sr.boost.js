goog.provide('emmy.sr.boost');
emmy.sr.boost.make_four_tuple = (function emmy$sr$boost$make_four_tuple(ct,p__59179){
var vec__59180 = p__59179;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59180,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59180,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59180,(2),null);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ct,x,y,z], 0));
});
emmy.sr.boost.four_tuple__GT_ct = (function emmy$sr$boost$four_tuple__GT_ct(p__59185){
var vec__59190 = p__59185;
var ct = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59190,(0),null);
return ct;
});
emmy.sr.boost.four_tuple__GT_space = (function emmy$sr$boost$four_tuple__GT_space(p__59195){
var vec__59196 = p__59195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59196,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59196,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59196,(2),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59196,(3),null);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,z], 0));
});
emmy.sr.boost.proper_time_interval = (function emmy$sr$boost$proper_time_interval(four_tuple){
return emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.sr.boost.four_tuple__GT_ct(four_tuple)),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.sr.boost.four_tuple__GT_space(four_tuple))));
});
emmy.sr.boost.proper_space_interval = (function emmy$sr$boost$proper_space_interval(four_tuple){
return emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.sr.boost.four_tuple__GT_space(four_tuple)),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.sr.boost.four_tuple__GT_ct(four_tuple))));
});
emmy.sr.boost.general_boost = (function emmy$sr$boost$general_boost(beta){
return (function (xi_p){
var gamma = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(beta))));
var factor = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((-1),gamma),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(beta));
var xi_p_time = emmy.sr.boost.four_tuple__GT_ct(xi_p);
var xi_p_space = emmy.sr.boost.four_tuple__GT_space(xi_p);
var beta_dot_xi_p = emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(beta,xi_p_space);
return emmy.sr.boost.make_four_tuple(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(gamma,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(xi_p_time,beta_dot_xi_p)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(gamma,beta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xi_p_time], 0)),xi_p_space,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(factor,beta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([beta_dot_xi_p], 0))], 0)));
});
});
/**
 * Takes a unit 3-vector `direction` (representing a direction) and a velocity
 *   `v:c` normalized by `C`.
 */
emmy.sr.boost.general_boost2 = (function emmy$sr$boost$general_boost2(direction,v_COLON_c){
return (function (four_tuple_prime){
var delta_ct_prime = emmy.sr.boost.four_tuple__GT_ct(four_tuple_prime);
var delta_x_prime = emmy.sr.boost.four_tuple__GT_space(four_tuple_prime);
var betasq = emmy.generic.square.cljs$core$IFn$_invoke$arity$1(v_COLON_c);
var bx = emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(direction,delta_x_prime);
var gamma = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._.cljs$core$IFn$_invoke$arity$2((1),betasq)));
var alpha = emmy.generic._.cljs$core$IFn$_invoke$arity$2(gamma,(1));
var delta_ct = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(gamma,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(delta_ct_prime,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(bx,v_COLON_c)));
var delta_x = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(gamma,v_COLON_c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([direction,delta_ct_prime], 0)),delta_x_prime,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(alpha,direction,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bx], 0))], 0));
return emmy.sr.boost.make_four_tuple(delta_ct,delta_x);
});
});
emmy.sr.boost.extended_rotation = (function emmy$sr$boost$extended_rotation(R){
return (function (xi_p){
return emmy.sr.boost.make_four_tuple(emmy.sr.boost.four_tuple__GT_ct(xi_p),(function (){var G__59214 = emmy.sr.boost.four_tuple__GT_space(xi_p);
return (R.cljs$core$IFn$_invoke$arity$1 ? R.cljs$core$IFn$_invoke$arity$1(G__59214) : R.call(null,G__59214));
})());
});
});

//# sourceMappingURL=emmy.sr.boost.js.map
