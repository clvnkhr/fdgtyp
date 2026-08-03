import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.calculus.form_field.js";
import "./emmy.calculus.manifold.js";
import "./emmy.calculus.metric.js";
import "./emmy.calculus.vector_field.js";
import "./emmy.env.js";
import "./emmy.mechanics.lagrange.js";
import "./emmy.operator.js";
import "./emmy.simplify.js";
import "./fdg.slow_checks.js";
goog.provide('fdg.compat');
fdg.compat.procedure__GT_vector_field = emmy.calculus.vector_field.procedure__GT_vector_field;
fdg.compat.procedure__GT_oneform_field = emmy.calculus.form_field.procedure__GT_oneform_field;
fdg.compat.procedure__GT_nform_field = emmy.calculus.form_field.procedure__GT_nform_field;
fdg.compat.get_rank = emmy.calculus.form_field.get_rank;
fdg.compat.invert = emmy.calculus.metric.invert;
fdg.compat.make_operator = emmy.operator.make_operator;
fdg.compat.spherical__GT_stereographic = fdg.slow_checks.spherical__GT_stereographic;
fdg.compat.transform_stereographic_Christoffel_to_spherical = fdg.slow_checks.transform_stereographic_Christoffel_to_spherical;
fdg.compat.time = cljs.core.first;
fdg.compat.coordinate = cljs.core.second;
fdg.compat.coordinates = cljs.core.second;
fdg.compat.velocity = (function fdg$compat$velocity(p1__54345_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__54345_SHARP_,(2));
});
fdg.compat.velocities = (function fdg$compat$velocities(p1__54346_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__54346_SHARP_,(2));
});
/**
 * Canonical time-coordinate vector field used across chapters.
 */
fdg.compat.d_COLON_dt = (emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R1_rect) : emmy.env.coordinate_system__GT_vector_basis.call(null,emmy.env.R1_rect));
/**
 * Curve-parameter vector field, kept distinct from spacetime d:dt bindings.
 */
fdg.compat.d_COLON_dtau = (emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R1_rect) : emmy.env.coordinate_system__GT_vector_basis.call(null,emmy.env.R1_rect));
fdg.compat.pair_QMARK_ = (function fdg$compat$pair_QMARK_(value){
return cljs.core.boolean$(((cljs.core.seq_QMARK_(value)) && (cljs.core.seq(value))));
});
fdg.compat.series_COLON_for_each = (function fdg$compat$series_COLON_for_each(f,series,n){
var seq__54347 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,series));
var chunk__54348 = null;
var count__54349 = (0);
var i__54350 = (0);
while(true){
if((i__54350 < count__54349)){
var term = chunk__54348.cljs$core$IIndexed$_nth$arity$2(null,i__54350);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(term) : f.call(null,term));


var G__54443 = seq__54347;
var G__54444 = chunk__54348;
var G__54445 = count__54349;
var G__54446 = (i__54350 + (1));
seq__54347 = G__54443;
chunk__54348 = G__54444;
count__54349 = G__54445;
i__54350 = G__54446;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__54347);
if(temp__5825__auto__){
var seq__54347__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54347__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__54347__$1);
var G__54447 = cljs.core.chunk_rest(seq__54347__$1);
var G__54448 = c__5694__auto__;
var G__54449 = cljs.core.count(c__5694__auto__);
var G__54450 = (0);
seq__54347 = G__54447;
chunk__54348 = G__54448;
count__54349 = G__54449;
i__54350 = G__54450;
continue;
} else {
var term = cljs.core.first(seq__54347__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(term) : f.call(null,term));


var G__54451 = cljs.core.next(seq__54347__$1);
var G__54452 = null;
var G__54453 = (0);
var G__54454 = (0);
seq__54347 = G__54451;
chunk__54348 = G__54452;
count__54349 = G__54453;
i__54350 = G__54454;
continue;
}
} else {
return null;
}
}
break;
}
});
fdg.compat.for_each = (function fdg$compat$for_each(f,values){
var seq__54351 = cljs.core.seq(values);
var chunk__54352 = null;
var count__54353 = (0);
var i__54354 = (0);
while(true){
if((i__54354 < count__54353)){
var value = chunk__54352.cljs$core$IIndexed$_nth$arity$2(null,i__54354);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));


var G__54456 = seq__54351;
var G__54457 = chunk__54352;
var G__54458 = count__54353;
var G__54459 = (i__54354 + (1));
seq__54351 = G__54456;
chunk__54352 = G__54457;
count__54353 = G__54458;
i__54354 = G__54459;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__54351);
if(temp__5825__auto__){
var seq__54351__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54351__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__54351__$1);
var G__54460 = cljs.core.chunk_rest(seq__54351__$1);
var G__54461 = c__5694__auto__;
var G__54462 = cljs.core.count(c__5694__auto__);
var G__54463 = (0);
seq__54351 = G__54460;
chunk__54352 = G__54461;
count__54353 = G__54462;
i__54354 = G__54463;
continue;
} else {
var value = cljs.core.first(seq__54351__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));


var G__54464 = cljs.core.next(seq__54351__$1);
var G__54465 = null;
var G__54466 = (0);
var G__54467 = (0);
seq__54351 = G__54464;
chunk__54352 = G__54465;
count__54353 = G__54466;
i__54354 = G__54467;
continue;
}
} else {
return null;
}
}
break;
}
});
fdg.compat.sigma = (function fdg$compat$sigma(f,low,high){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(emmy.env._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$2(low,(high + (1)))));
});
fdg.compat.list_with_substituted_coord = (function fdg$compat$list_with_substituted_coord(values,i,value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(values),i,value);
});
fdg.compat.show_expression = (function fdg$compat$show_expression(value){
return value;
});
fdg.compat.all_zero_QMARK_ = (function fdg$compat$all_zero_QMARK_(value){
if(cljs.core.truth_((function (){var or__5162__auto__ = (emmy.env.structure_QMARK_.cljs$core$IFn$_invoke$arity$1 ? emmy.env.structure_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : emmy.env.structure_QMARK_.call(null,value));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.sequential_QMARK_(value);
}
})())){
return cljs.core.every_QMARK_(fdg.compat.all_zero_QMARK_,value);
} else {
if(typeof value === 'number'){
return (value === (0));
} else {
return emmy.env.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(value);

}
}
});
/**
 * Return `result` only after every primitive component of `checks` is zero.
 */
fdg.compat.verified_zero = (function fdg$compat$verified_zero(result,checks){
if(cljs.core.truth_(fdg.compat.all_zero_QMARK_(checks))){
return result;
} else {
throw (new Error((""+"Expected exact zero checks, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.env.freeze.cljs$core$IFn$_invoke$arity$1(checks)], 0))))));
}
});
/**
 * Prove an expression is exactly zero without rational-function GCD reduction.
 */
fdg.compat.polynomially_verified_zero = (function fdg$compat$polynomially_verified_zero(expression){
return fdg.compat.verified_zero((0),emmy.simplify._STAR_poly_simplify_STAR_.call(null,expression));
});
fdg.compat.literal_field = (function fdg$compat$literal_field(coordsys,type){
var G__54355 = type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"scalar","scalar",-1043076198,null),G__54355)){
var G__54356 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"g","g",-916345864,null));
var G__54357 = coordsys;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__54356,G__54357) : emmy.env.literal_manifold_function.call(null,G__54356,G__54357));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"function","function",-486723946,null),G__54355)){
var G__54358 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"g","g",-916345864,null));
var G__54359 = coordsys;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__54358,G__54359) : emmy.env.literal_manifold_function.call(null,G__54358,G__54359));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"up","up",1370819414,null),G__54355)){
var G__54360 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"v","v",1661996586,null));
var G__54361 = coordsys;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__54360,G__54361) : emmy.env.literal_vector_field.call(null,G__54360,G__54361));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"vector","vector",-751469611,null),G__54355)){
var G__54362 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"v","v",1661996586,null));
var G__54363 = coordsys;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__54362,G__54363) : emmy.env.literal_vector_field.call(null,G__54362,G__54363));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"down","down",-1089190199,null),G__54355)){
var G__54364 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"omega","omega",1917797179,null));
var G__54365 = coordsys;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__54364,G__54365) : emmy.env.literal_oneform_field.call(null,G__54364,G__54365));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"oneform","oneform",1030816042,null),G__54355)){
var G__54366 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"omega","omega",1917797179,null));
var G__54367 = coordsys;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__54366,G__54367) : emmy.env.literal_oneform_field.call(null,G__54366,G__54367));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"one-form","one-form",-381588575,null),G__54355)){
var G__54368 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"omega","omega",1917797179,null));
var G__54369 = coordsys;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__54368,G__54369) : emmy.env.literal_oneform_field.call(null,G__54368,G__54369));
} else {
throw (new Error((""+"Bad tensor argument type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
}
}
}
}
}
}
});
fdg.compat.tensor_test = (function fdg$compat$tensor_test(tensor,types,coordsys){
var args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54370_SHARP_){
return fdg.compat.literal_field(coordsys,p1__54370_SHARP_);
}),types);
var f = fdg.compat.literal_field(coordsys,new cljs.core.Symbol(null,"scalar","scalar",-1043076198,null));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
var thing = fdg.compat.literal_field(coordsys,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(types,i));
return emmy.env.freeze.cljs$core$IFn$_invoke$arity$1(emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__54382 = emmy.calculus.manifold.typical_point(coordsys);
var fexpr__54381 = (function (){var G__54383 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tensor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,i,(function (){var G__54385 = (function (){var G__54387 = f;
var G__54388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(args,i);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__54387,G__54388) : emmy.env._STAR_.call(null,G__54387,G__54388));
})();
var G__54386 = thing;
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__54385,G__54386) : emmy.env._PLUS_.call(null,G__54385,G__54386));
})()));
var G__54384 = (function (){var G__54389 = (function (){var G__54391 = f;
var G__54392 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tensor,args);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__54391,G__54392) : emmy.env._STAR_.call(null,G__54391,G__54392));
})();
var G__54390 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tensor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,i,thing));
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__54389,G__54390) : emmy.env._PLUS_.call(null,G__54389,G__54390));
})();
return (emmy.env._.cljs$core$IFn$_invoke$arity$2 ? emmy.env._.cljs$core$IFn$_invoke$arity$2(G__54383,G__54384) : emmy.env._.call(null,G__54383,G__54384));
})();
return (fexpr__54381.cljs$core$IFn$_invoke$arity$1 ? fexpr__54381.cljs$core$IFn$_invoke$arity$1(G__54382) : fexpr__54381.call(null,G__54382));
})()));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(types)));
});
fdg.compat.emmy_keyword = (function fdg$compat$emmy_keyword(value){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = cljs.core.namespace(value);
if(cljs.core.truth_(temp__5823__auto__)){
var prefix = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(value)));
} else {
return cljs.core.name(value);
}
})());
});
fdg.compat.patch = (function fdg$compat$patch(patch_name,manifold_value){
return emmy.calculus.manifold.get_patch(manifold_value,fdg.compat.emmy_keyword(patch_name));
});
fdg.compat.coordinate_system = (function fdg$compat$coordinate_system(system_name,patch_value){
return emmy.calculus.manifold.coordinate_system_at(new cljs.core.Keyword(null,"manifold","manifold",-1940328209).cljs$core$IFn$_invoke$arity$1(patch_value),fdg.compat.emmy_keyword(system_name),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(patch_value));
});
fdg.compat.R2__GT_R = cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"UP","UP",-1898089532,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),new cljs.core.Symbol(null,"Real","Real",374292741,null)),new cljs.core.Symbol(null,"Real","Real",374292741,null));
fdg.compat.Lagrange_explicit = emmy.mechanics.lagrange.Lagrangian__GT_acceleration;
fdg.compat.R2_rect_point = (function (){var G__54394 = (function (){var G__54395 = new cljs.core.Symbol(null,"x0","x0",2051374914,null);
var G__54396 = new cljs.core.Symbol(null,"y0","y0",1751986334,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__54395,G__54396) : emmy.env.up.call(null,G__54395,G__54396));
})();
var fexpr__54393 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.point.call(null,emmy.env.R2_rect));
return (fexpr__54393.cljs$core$IFn$_invoke$arity$1 ? fexpr__54393.cljs$core$IFn$_invoke$arity$1(G__54394) : fexpr__54393.call(null,G__54394));
})();
fdg.compat.Chi_inverse = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.point.call(null,emmy.env.R2_rect));
fdg.compat.Chi = (emmy.env.chart.cljs$core$IFn$_invoke$arity$1 ? emmy.env.chart.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.chart.call(null,emmy.env.R2_rect));
fdg.compat.general_Cartan_2 = (function (){var G__54397 = (function (){var G__54398 = new cljs.core.Symbol(null,"Gamma","Gamma",681602978,null);
var G__54399 = emmy.env.R2_rect;
return (emmy.env.literal_Christoffel_2.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_Christoffel_2.cljs$core$IFn$_invoke$arity$2(G__54398,G__54399) : emmy.env.literal_Christoffel_2.call(null,G__54398,G__54399));
})();
return (emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1 ? emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1(G__54397) : emmy.env.Christoffel__GT_Cartan.call(null,G__54397));
})();
fdg.compat.R3_rect_point = (function (){var G__54401 = (function (){var G__54402 = new cljs.core.Symbol(null,"x0","x0",2051374914,null);
var G__54403 = new cljs.core.Symbol(null,"y0","y0",1751986334,null);
var G__54404 = new cljs.core.Symbol(null,"z0","z0",-775585087,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$3 ? emmy.env.up.cljs$core$IFn$_invoke$arity$3(G__54402,G__54403,G__54404) : emmy.env.up.call(null,G__54402,G__54403,G__54404));
})();
var fexpr__54400 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R3_rect) : emmy.env.point.call(null,emmy.env.R3_rect));
return (fexpr__54400.cljs$core$IFn$_invoke$arity$1 ? fexpr__54400.cljs$core$IFn$_invoke$arity$1(G__54401) : fexpr__54400.call(null,G__54401));
})();
fdg.compat.R4_rect_point = (function (){var G__54406 = (function (){var G__54407 = new cljs.core.Symbol(null,"x0","x0",2051374914,null);
var G__54408 = new cljs.core.Symbol(null,"y0","y0",1751986334,null);
var G__54409 = new cljs.core.Symbol(null,"z0","z0",-775585087,null);
var G__54410 = new cljs.core.Symbol(null,"w0","w0",-56918729,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$4 ? emmy.env.up.cljs$core$IFn$_invoke$arity$4(G__54407,G__54408,G__54409,G__54410) : emmy.env.up.call(null,G__54407,G__54408,G__54409,G__54410));
})();
var fexpr__54405 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R4_rect) : emmy.env.point.call(null,emmy.env.R4_rect));
return (fexpr__54405.cljs$core$IFn$_invoke$arity$1 ? fexpr__54405.cljs$core$IFn$_invoke$arity$1(G__54406) : fexpr__54405.call(null,G__54406));
})();
fdg.compat.R2_rect_basis = (emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.coordinate_system__GT_basis.call(null,emmy.env.R2_rect));
fdg.compat.b_rect = (function (){var G__54412 = (function (){var G__54413 = new cljs.core.Symbol(null,"b","b",-1172211299,null);
var G__54414 = emmy.env.R2_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__54413,G__54414) : emmy.env.literal_vector_field.call(null,G__54413,G__54414));
})();
var fexpr__54411 = (emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.coordinate_system__GT_oneform_basis.call(null,emmy.env.R2_rect));
return (fexpr__54411.cljs$core$IFn$_invoke$arity$1 ? fexpr__54411.cljs$core$IFn$_invoke$arity$1(G__54412) : fexpr__54411.call(null,G__54412));
})();
fdg.compat.g = (function (){var G__54415 = new cljs.core.Symbol(null,"g-rect","g-rect",979033459,null);
var G__54416 = emmy.env.R3_rect;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__54415,G__54416) : emmy.env.literal_manifold_function.call(null,G__54415,G__54416));
})();
fdg.compat.d_COLON_dx = emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.coordinate_system__GT_vector_basis.call(null,emmy.env.R2_rect)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
fdg.compat.d_COLON_dy = emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.coordinate_system__GT_vector_basis.call(null,emmy.env.R2_rect)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
fdg.compat.d_COLON_dz = emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R3_rect) : emmy.env.coordinate_system__GT_vector_basis.call(null,emmy.env.R3_rect)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
fdg.compat.dx = emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.coordinate_system__GT_oneform_basis.call(null,emmy.env.R2_rect)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
fdg.compat.dy = emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.coordinate_system__GT_oneform_basis.call(null,emmy.env.R2_rect)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
fdg.compat.dz = emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R3_rect) : emmy.env.coordinate_system__GT_oneform_basis.call(null,emmy.env.R3_rect)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
fdg.compat.d_COLON_dtheta = emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.coordinate_system__GT_vector_basis.call(null,emmy.env.S2_spherical)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
fdg.compat.d_COLON_dphi = emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_vector_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.coordinate_system__GT_vector_basis.call(null,emmy.env.S2_spherical)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
fdg.compat.dtheta = emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.coordinate_system__GT_oneform_basis.call(null,emmy.env.S2_spherical)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
fdg.compat.dphi = emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.coordinate_system__GT_oneform_basis.call(null,emmy.env.S2_spherical)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
fdg.compat.theta = (function fdg$compat$theta(point){
return emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__54417 = (emmy.env.chart.cljs$core$IFn$_invoke$arity$1 ? emmy.env.chart.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.chart.call(null,emmy.env.S2_spherical));
return (fexpr__54417.cljs$core$IFn$_invoke$arity$1 ? fexpr__54417.cljs$core$IFn$_invoke$arity$1(point) : fexpr__54417.call(null,point));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
});
fdg.compat.phi = (function fdg$compat$phi(point){
return emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__54418 = (emmy.env.chart.cljs$core$IFn$_invoke$arity$1 ? emmy.env.chart.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.chart.call(null,emmy.env.S2_spherical));
return (fexpr__54418.cljs$core$IFn$_invoke$arity$1 ? fexpr__54418.cljs$core$IFn$_invoke$arity$1(point) : fexpr__54418.call(null,point));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
});
fdg.compat.S2_basis = (emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.coordinate_system__GT_basis.call(null,emmy.env.S2_spherical));
fdg.compat.S2_Christoffel = (emmy.env.metric__GT_Christoffel_2.cljs$core$IFn$_invoke$arity$2 ? emmy.env.metric__GT_Christoffel_2.cljs$core$IFn$_invoke$arity$2(emmy.calculus.metric.S2_metric,fdg.compat.S2_basis) : emmy.env.metric__GT_Christoffel_2.call(null,emmy.calculus.metric.S2_metric,fdg.compat.S2_basis));
fdg.compat.sphere_Cartan = (emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1 ? emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1(fdg.compat.S2_Christoffel) : emmy.env.Christoffel__GT_Cartan.call(null,fdg.compat.S2_Christoffel));
fdg.compat.T = fdg.compat.d_COLON_dtheta;
fdg.compat.U = fdg.compat.d_COLON_dphi;
fdg.compat.m = (function (){var G__54420 = (function (){var G__54421 = new cljs.core.Symbol(null,"theta0","theta0",-722641636,null);
var G__54422 = new cljs.core.Symbol(null,"phi0","phi0",-1013479339,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__54421,G__54422) : emmy.env.up.call(null,G__54421,G__54422));
})();
var fexpr__54419 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.point.call(null,emmy.env.S2_spherical));
return (fexpr__54419.cljs$core$IFn$_invoke$arity$1 ? fexpr__54419.cljs$core$IFn$_invoke$arity$1(G__54420) : fexpr__54419.call(null,G__54420));
})();
fdg.compat.Cartan = fdg.compat.sphere_Cartan;
fdg.compat.nabla = (emmy.env.covariant_derivative.cljs$core$IFn$_invoke$arity$1 ? emmy.env.covariant_derivative.cljs$core$IFn$_invoke$arity$1(fdg.compat.Cartan) : emmy.env.covariant_derivative.call(null,fdg.compat.Cartan));
fdg.compat.omega = (function (){var G__54423 = new cljs.core.Symbol(null,"omega-rect","omega-rect",969735142,null);
var G__54424 = emmy.env.R4_rect;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__54423,G__54424) : emmy.env.literal_oneform_field.call(null,G__54423,G__54424));
})();
fdg.compat.f = (function (){var G__54425 = new cljs.core.Symbol(null,"f-sphere","f-sphere",-165467547,null);
var G__54426 = emmy.env.S2_spherical;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__54425,G__54426) : emmy.env.literal_manifold_function.call(null,G__54425,G__54426));
})();
fdg.compat.X = (function (){var G__54427 = new cljs.core.Symbol(null,"X-rect","X-rect",-682747308,null);
var G__54428 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__54427,G__54428) : emmy.env.literal_vector_field.call(null,G__54427,G__54428));
})();
fdg.compat.Y = (function (){var G__54429 = new cljs.core.Symbol(null,"Y-rect","Y-rect",-2116956248,null);
var G__54430 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__54429,G__54430) : emmy.env.literal_vector_field.call(null,G__54429,G__54430));
})();
fdg.compat.Z = (function (){var G__54431 = new cljs.core.Symbol(null,"Z-rect","Z-rect",-912835945,null);
var G__54432 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__54431,G__54432) : emmy.env.literal_vector_field.call(null,G__54431,G__54432));
})();
fdg.compat.V = (function (){var G__54433 = new cljs.core.Symbol(null,"V-rect","V-rect",-754424260,null);
var G__54434 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__54433,G__54434) : emmy.env.literal_vector_field.call(null,G__54433,G__54434));
})();
fdg.compat.e_x = (function (){var G__54435 = new cljs.core.Symbol(null,"e\u2191x","e\u2191x",-351434082,null);
var G__54436 = emmy.env.Euler_angles;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__54435,G__54436) : emmy.env.literal_oneform_field.call(null,G__54435,G__54436));
})();
fdg.compat.e_y = (function (){var G__54437 = new cljs.core.Symbol(null,"e\u2191y","e\u2191y",1217750238,null);
var G__54438 = emmy.env.Euler_angles;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__54437,G__54438) : emmy.env.literal_oneform_field.call(null,G__54437,G__54438));
})();
fdg.compat.e_z = (function (){var G__54439 = new cljs.core.Symbol(null,"e\u2191z","e\u2191z",1284832759,null);
var G__54440 = emmy.env.Euler_angles;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__54439,G__54440) : emmy.env.literal_oneform_field.call(null,G__54439,G__54440));
})();
/**
 * Base frame assumed, but not defined, by the Chapter 11 text.
 */
fdg.compat.home = emmy.env.base_frame_maker(new cljs.core.Symbol(null,"home","home",1565974218,null),new cljs.core.Symbol(null,"home","home",1565974218,null));
/**
 * Adapts FDG's variadic scmutils frame-maker protocol to Emmy's parameter-map protocol.
 */
fdg.compat.legacy_frame_maker = (function fdg$compat$legacy_frame_maker(coordinates__GT_event,event__GT_coordinates){
var make = (function (){var G__54441 = (function (ancestor_frame,this_frame,params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(coordinates__GT_event,ancestor_frame,this_frame,params);
});
var G__54442 = (function (ancestor_frame,this_frame,params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(event__GT_coordinates,ancestor_frame,this_frame,params);
});
return (emmy.env.frame_maker.cljs$core$IFn$_invoke$arity$2 ? emmy.env.frame_maker.cljs$core$IFn$_invoke$arity$2(G__54441,G__54442) : emmy.env.frame_maker.call(null,G__54441,G__54442));
})();
return (function() { 
var G__54469__delegate = function (name,ancestor_frame,params){
return (make.cljs$core$IFn$_invoke$arity$3 ? make.cljs$core$IFn$_invoke$arity$3(name,ancestor_frame,params) : make.call(null,name,ancestor_frame,params));
};
var G__54469 = function (name,ancestor_frame,var_args){
var params = null;
if (arguments.length > 2) {
var G__54470__i = 0, G__54470__a = new Array(arguments.length -  2);
while (G__54470__i < G__54470__a.length) {G__54470__a[G__54470__i] = arguments[G__54470__i + 2]; ++G__54470__i;}
  params = new cljs.core.IndexedSeq(G__54470__a,0,null);
} 
return G__54469__delegate.call(this,name,ancestor_frame,params);};
G__54469.cljs$lang$maxFixedArity = 2;
G__54469.cljs$lang$applyTo = (function (arglist__54471){
var name = cljs.core.first(arglist__54471);
arglist__54471 = cljs.core.next(arglist__54471);
var ancestor_frame = cljs.core.first(arglist__54471);
var params = cljs.core.rest(arglist__54471);
return G__54469__delegate(name,ancestor_frame,params);
});
G__54469.cljs$core$IFn$_invoke$arity$variadic = G__54469__delegate;
return G__54469;
})()
;
});
/**
 * Marks a known compatibility gap without allowing a misleading result.
 */
fdg.compat.unsupported_BANG_ = (function fdg$compat$unsupported_BANG_(block_id,explanation){
throw (new Error((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(explanation))));
});
/**
 * Identity helper useful while inspecting intermediate values in SCI.
 */
fdg.compat.show = (function fdg$compat$show(value){
return value;
});

//# sourceMappingURL=fdg.compat.js.map
