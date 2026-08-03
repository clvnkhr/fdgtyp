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
fdg.compat.velocity = (function fdg$compat$velocity(p1__65120_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__65120_SHARP_,(2));
});
fdg.compat.velocities = (function fdg$compat$velocities(p1__65121_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__65121_SHARP_,(2));
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
var seq__65122 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,series));
var chunk__65123 = null;
var count__65124 = (0);
var i__65125 = (0);
while(true){
if((i__65125 < count__65124)){
var term = chunk__65123.cljs$core$IIndexed$_nth$arity$2(null,i__65125);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(term) : f.call(null,term));


var G__65218 = seq__65122;
var G__65219 = chunk__65123;
var G__65220 = count__65124;
var G__65221 = (i__65125 + (1));
seq__65122 = G__65218;
chunk__65123 = G__65219;
count__65124 = G__65220;
i__65125 = G__65221;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65122);
if(temp__5825__auto__){
var seq__65122__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65122__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__65122__$1);
var G__65222 = cljs.core.chunk_rest(seq__65122__$1);
var G__65223 = c__5694__auto__;
var G__65224 = cljs.core.count(c__5694__auto__);
var G__65225 = (0);
seq__65122 = G__65222;
chunk__65123 = G__65223;
count__65124 = G__65224;
i__65125 = G__65225;
continue;
} else {
var term = cljs.core.first(seq__65122__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(term) : f.call(null,term));


var G__65226 = cljs.core.next(seq__65122__$1);
var G__65227 = null;
var G__65228 = (0);
var G__65229 = (0);
seq__65122 = G__65226;
chunk__65123 = G__65227;
count__65124 = G__65228;
i__65125 = G__65229;
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
var seq__65126 = cljs.core.seq(values);
var chunk__65127 = null;
var count__65128 = (0);
var i__65129 = (0);
while(true){
if((i__65129 < count__65128)){
var value = chunk__65127.cljs$core$IIndexed$_nth$arity$2(null,i__65129);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));


var G__65230 = seq__65126;
var G__65231 = chunk__65127;
var G__65232 = count__65128;
var G__65233 = (i__65129 + (1));
seq__65126 = G__65230;
chunk__65127 = G__65231;
count__65128 = G__65232;
i__65129 = G__65233;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65126);
if(temp__5825__auto__){
var seq__65126__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65126__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__65126__$1);
var G__65234 = cljs.core.chunk_rest(seq__65126__$1);
var G__65235 = c__5694__auto__;
var G__65236 = cljs.core.count(c__5694__auto__);
var G__65237 = (0);
seq__65126 = G__65234;
chunk__65127 = G__65235;
count__65128 = G__65236;
i__65129 = G__65237;
continue;
} else {
var value = cljs.core.first(seq__65126__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));


var G__65238 = cljs.core.next(seq__65126__$1);
var G__65239 = null;
var G__65240 = (0);
var G__65241 = (0);
seq__65126 = G__65238;
chunk__65127 = G__65239;
count__65128 = G__65240;
i__65129 = G__65241;
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
var G__65130 = type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"scalar","scalar",-1043076198,null),G__65130)){
var G__65131 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"g","g",-916345864,null));
var G__65132 = coordsys;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__65131,G__65132) : emmy.env.literal_manifold_function.call(null,G__65131,G__65132));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"function","function",-486723946,null),G__65130)){
var G__65133 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"g","g",-916345864,null));
var G__65134 = coordsys;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__65133,G__65134) : emmy.env.literal_manifold_function.call(null,G__65133,G__65134));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"up","up",1370819414,null),G__65130)){
var G__65135 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"v","v",1661996586,null));
var G__65136 = coordsys;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__65135,G__65136) : emmy.env.literal_vector_field.call(null,G__65135,G__65136));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"vector","vector",-751469611,null),G__65130)){
var G__65137 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"v","v",1661996586,null));
var G__65138 = coordsys;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__65137,G__65138) : emmy.env.literal_vector_field.call(null,G__65137,G__65138));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"down","down",-1089190199,null),G__65130)){
var G__65139 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"omega","omega",1917797179,null));
var G__65140 = coordsys;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__65139,G__65140) : emmy.env.literal_oneform_field.call(null,G__65139,G__65140));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"oneform","oneform",1030816042,null),G__65130)){
var G__65141 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"omega","omega",1917797179,null));
var G__65142 = coordsys;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__65141,G__65142) : emmy.env.literal_oneform_field.call(null,G__65141,G__65142));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"one-form","one-form",-381588575,null),G__65130)){
var G__65143 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"omega","omega",1917797179,null));
var G__65144 = coordsys;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__65143,G__65144) : emmy.env.literal_oneform_field.call(null,G__65143,G__65144));
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
var args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__65145_SHARP_){
return fdg.compat.literal_field(coordsys,p1__65145_SHARP_);
}),types);
var f = fdg.compat.literal_field(coordsys,new cljs.core.Symbol(null,"scalar","scalar",-1043076198,null));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
var thing = fdg.compat.literal_field(coordsys,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(types,i));
return emmy.env.freeze.cljs$core$IFn$_invoke$arity$1(emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65157 = emmy.calculus.manifold.typical_point(coordsys);
var fexpr__65156 = (function (){var G__65158 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tensor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,i,(function (){var G__65160 = (function (){var G__65162 = f;
var G__65163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(args,i);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65162,G__65163) : emmy.env._STAR_.call(null,G__65162,G__65163));
})();
var G__65161 = thing;
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__65160,G__65161) : emmy.env._PLUS_.call(null,G__65160,G__65161));
})()));
var G__65159 = (function (){var G__65164 = (function (){var G__65166 = f;
var G__65167 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tensor,args);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65166,G__65167) : emmy.env._STAR_.call(null,G__65166,G__65167));
})();
var G__65165 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tensor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,i,thing));
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__65164,G__65165) : emmy.env._PLUS_.call(null,G__65164,G__65165));
})();
return (emmy.env._.cljs$core$IFn$_invoke$arity$2 ? emmy.env._.cljs$core$IFn$_invoke$arity$2(G__65158,G__65159) : emmy.env._.call(null,G__65158,G__65159));
})();
return (fexpr__65156.cljs$core$IFn$_invoke$arity$1 ? fexpr__65156.cljs$core$IFn$_invoke$arity$1(G__65157) : fexpr__65156.call(null,G__65157));
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
fdg.compat.R2_rect_point = (function (){var G__65169 = (function (){var G__65170 = new cljs.core.Symbol(null,"x0","x0",2051374914,null);
var G__65171 = new cljs.core.Symbol(null,"y0","y0",1751986334,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65170,G__65171) : emmy.env.up.call(null,G__65170,G__65171));
})();
var fexpr__65168 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.point.call(null,emmy.env.R2_rect));
return (fexpr__65168.cljs$core$IFn$_invoke$arity$1 ? fexpr__65168.cljs$core$IFn$_invoke$arity$1(G__65169) : fexpr__65168.call(null,G__65169));
})();
fdg.compat.Chi_inverse = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.point.call(null,emmy.env.R2_rect));
fdg.compat.Chi = (emmy.env.chart.cljs$core$IFn$_invoke$arity$1 ? emmy.env.chart.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.chart.call(null,emmy.env.R2_rect));
fdg.compat.general_Cartan_2 = (function (){var G__65172 = (function (){var G__65173 = new cljs.core.Symbol(null,"Gamma","Gamma",681602978,null);
var G__65174 = emmy.env.R2_rect;
return (emmy.env.literal_Christoffel_2.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_Christoffel_2.cljs$core$IFn$_invoke$arity$2(G__65173,G__65174) : emmy.env.literal_Christoffel_2.call(null,G__65173,G__65174));
})();
return (emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1 ? emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1(G__65172) : emmy.env.Christoffel__GT_Cartan.call(null,G__65172));
})();
fdg.compat.R3_rect_point = (function (){var G__65176 = (function (){var G__65177 = new cljs.core.Symbol(null,"x0","x0",2051374914,null);
var G__65178 = new cljs.core.Symbol(null,"y0","y0",1751986334,null);
var G__65179 = new cljs.core.Symbol(null,"z0","z0",-775585087,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$3 ? emmy.env.up.cljs$core$IFn$_invoke$arity$3(G__65177,G__65178,G__65179) : emmy.env.up.call(null,G__65177,G__65178,G__65179));
})();
var fexpr__65175 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R3_rect) : emmy.env.point.call(null,emmy.env.R3_rect));
return (fexpr__65175.cljs$core$IFn$_invoke$arity$1 ? fexpr__65175.cljs$core$IFn$_invoke$arity$1(G__65176) : fexpr__65175.call(null,G__65176));
})();
fdg.compat.R4_rect_point = (function (){var G__65181 = (function (){var G__65182 = new cljs.core.Symbol(null,"x0","x0",2051374914,null);
var G__65183 = new cljs.core.Symbol(null,"y0","y0",1751986334,null);
var G__65184 = new cljs.core.Symbol(null,"z0","z0",-775585087,null);
var G__65185 = new cljs.core.Symbol(null,"w0","w0",-56918729,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$4 ? emmy.env.up.cljs$core$IFn$_invoke$arity$4(G__65182,G__65183,G__65184,G__65185) : emmy.env.up.call(null,G__65182,G__65183,G__65184,G__65185));
})();
var fexpr__65180 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R4_rect) : emmy.env.point.call(null,emmy.env.R4_rect));
return (fexpr__65180.cljs$core$IFn$_invoke$arity$1 ? fexpr__65180.cljs$core$IFn$_invoke$arity$1(G__65181) : fexpr__65180.call(null,G__65181));
})();
fdg.compat.R2_rect_basis = (emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.coordinate_system__GT_basis.call(null,emmy.env.R2_rect));
fdg.compat.b_rect = (function (){var G__65187 = (function (){var G__65188 = new cljs.core.Symbol(null,"b","b",-1172211299,null);
var G__65189 = emmy.env.R2_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__65188,G__65189) : emmy.env.literal_vector_field.call(null,G__65188,G__65189));
})();
var fexpr__65186 = (emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.coordinate_system__GT_oneform_basis.call(null,emmy.env.R2_rect));
return (fexpr__65186.cljs$core$IFn$_invoke$arity$1 ? fexpr__65186.cljs$core$IFn$_invoke$arity$1(G__65187) : fexpr__65186.call(null,G__65187));
})();
fdg.compat.g = (function (){var G__65190 = new cljs.core.Symbol(null,"g-rect","g-rect",979033459,null);
var G__65191 = emmy.env.R3_rect;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__65190,G__65191) : emmy.env.literal_manifold_function.call(null,G__65190,G__65191));
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
return emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__65192 = (emmy.env.chart.cljs$core$IFn$_invoke$arity$1 ? emmy.env.chart.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.chart.call(null,emmy.env.S2_spherical));
return (fexpr__65192.cljs$core$IFn$_invoke$arity$1 ? fexpr__65192.cljs$core$IFn$_invoke$arity$1(point) : fexpr__65192.call(null,point));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
});
fdg.compat.phi = (function fdg$compat$phi(point){
return emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__65193 = (emmy.env.chart.cljs$core$IFn$_invoke$arity$1 ? emmy.env.chart.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.chart.call(null,emmy.env.S2_spherical));
return (fexpr__65193.cljs$core$IFn$_invoke$arity$1 ? fexpr__65193.cljs$core$IFn$_invoke$arity$1(point) : fexpr__65193.call(null,point));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
});
fdg.compat.S2_basis = (emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.coordinate_system__GT_basis.call(null,emmy.env.S2_spherical));
fdg.compat.S2_Christoffel = (emmy.env.metric__GT_Christoffel_2.cljs$core$IFn$_invoke$arity$2 ? emmy.env.metric__GT_Christoffel_2.cljs$core$IFn$_invoke$arity$2(emmy.calculus.metric.S2_metric,fdg.compat.S2_basis) : emmy.env.metric__GT_Christoffel_2.call(null,emmy.calculus.metric.S2_metric,fdg.compat.S2_basis));
fdg.compat.sphere_Cartan = (emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1 ? emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1(fdg.compat.S2_Christoffel) : emmy.env.Christoffel__GT_Cartan.call(null,fdg.compat.S2_Christoffel));
fdg.compat.T = fdg.compat.d_COLON_dtheta;
fdg.compat.U = fdg.compat.d_COLON_dphi;
fdg.compat.m = (function (){var G__65195 = (function (){var G__65196 = new cljs.core.Symbol(null,"theta0","theta0",-722641636,null);
var G__65197 = new cljs.core.Symbol(null,"phi0","phi0",-1013479339,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65196,G__65197) : emmy.env.up.call(null,G__65196,G__65197));
})();
var fexpr__65194 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.point.call(null,emmy.env.S2_spherical));
return (fexpr__65194.cljs$core$IFn$_invoke$arity$1 ? fexpr__65194.cljs$core$IFn$_invoke$arity$1(G__65195) : fexpr__65194.call(null,G__65195));
})();
fdg.compat.Cartan = fdg.compat.sphere_Cartan;
fdg.compat.nabla = (emmy.env.covariant_derivative.cljs$core$IFn$_invoke$arity$1 ? emmy.env.covariant_derivative.cljs$core$IFn$_invoke$arity$1(fdg.compat.Cartan) : emmy.env.covariant_derivative.call(null,fdg.compat.Cartan));
fdg.compat.omega = (function (){var G__65198 = new cljs.core.Symbol(null,"omega-rect","omega-rect",969735142,null);
var G__65199 = emmy.env.R4_rect;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__65198,G__65199) : emmy.env.literal_oneform_field.call(null,G__65198,G__65199));
})();
fdg.compat.f = (function (){var G__65200 = new cljs.core.Symbol(null,"f-sphere","f-sphere",-165467547,null);
var G__65201 = emmy.env.S2_spherical;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__65200,G__65201) : emmy.env.literal_manifold_function.call(null,G__65200,G__65201));
})();
fdg.compat.X = (function (){var G__65202 = new cljs.core.Symbol(null,"X-rect","X-rect",-682747308,null);
var G__65203 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__65202,G__65203) : emmy.env.literal_vector_field.call(null,G__65202,G__65203));
})();
fdg.compat.Y = (function (){var G__65204 = new cljs.core.Symbol(null,"Y-rect","Y-rect",-2116956248,null);
var G__65205 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__65204,G__65205) : emmy.env.literal_vector_field.call(null,G__65204,G__65205));
})();
fdg.compat.Z = (function (){var G__65206 = new cljs.core.Symbol(null,"Z-rect","Z-rect",-912835945,null);
var G__65207 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__65206,G__65207) : emmy.env.literal_vector_field.call(null,G__65206,G__65207));
})();
fdg.compat.V = (function (){var G__65208 = new cljs.core.Symbol(null,"V-rect","V-rect",-754424260,null);
var G__65209 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__65208,G__65209) : emmy.env.literal_vector_field.call(null,G__65208,G__65209));
})();
fdg.compat.e_x = (function (){var G__65210 = new cljs.core.Symbol(null,"e\u2191x","e\u2191x",-351434082,null);
var G__65211 = emmy.env.Euler_angles;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__65210,G__65211) : emmy.env.literal_oneform_field.call(null,G__65210,G__65211));
})();
fdg.compat.e_y = (function (){var G__65212 = new cljs.core.Symbol(null,"e\u2191y","e\u2191y",1217750238,null);
var G__65213 = emmy.env.Euler_angles;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__65212,G__65213) : emmy.env.literal_oneform_field.call(null,G__65212,G__65213));
})();
fdg.compat.e_z = (function (){var G__65214 = new cljs.core.Symbol(null,"e\u2191z","e\u2191z",1284832759,null);
var G__65215 = emmy.env.Euler_angles;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__65214,G__65215) : emmy.env.literal_oneform_field.call(null,G__65214,G__65215));
})();
/**
 * Base frame assumed, but not defined, by the Chapter 11 text.
 */
fdg.compat.home = emmy.env.base_frame_maker(new cljs.core.Symbol(null,"home","home",1565974218,null),new cljs.core.Symbol(null,"home","home",1565974218,null));
/**
 * Adapts FDG's variadic scmutils frame-maker protocol to Emmy's parameter-map protocol.
 */
fdg.compat.legacy_frame_maker = (function fdg$compat$legacy_frame_maker(coordinates__GT_event,event__GT_coordinates){
var make = (function (){var G__65216 = (function (ancestor_frame,this_frame,params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(coordinates__GT_event,ancestor_frame,this_frame,params);
});
var G__65217 = (function (ancestor_frame,this_frame,params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(event__GT_coordinates,ancestor_frame,this_frame,params);
});
return (emmy.env.frame_maker.cljs$core$IFn$_invoke$arity$2 ? emmy.env.frame_maker.cljs$core$IFn$_invoke$arity$2(G__65216,G__65217) : emmy.env.frame_maker.call(null,G__65216,G__65217));
})();
return (function() { 
var G__65242__delegate = function (name,ancestor_frame,params){
return (make.cljs$core$IFn$_invoke$arity$3 ? make.cljs$core$IFn$_invoke$arity$3(name,ancestor_frame,params) : make.call(null,name,ancestor_frame,params));
};
var G__65242 = function (name,ancestor_frame,var_args){
var params = null;
if (arguments.length > 2) {
var G__65243__i = 0, G__65243__a = new Array(arguments.length -  2);
while (G__65243__i < G__65243__a.length) {G__65243__a[G__65243__i] = arguments[G__65243__i + 2]; ++G__65243__i;}
  params = new cljs.core.IndexedSeq(G__65243__a,0,null);
} 
return G__65242__delegate.call(this,name,ancestor_frame,params);};
G__65242.cljs$lang$maxFixedArity = 2;
G__65242.cljs$lang$applyTo = (function (arglist__65244){
var name = cljs.core.first(arglist__65244);
arglist__65244 = cljs.core.next(arglist__65244);
var ancestor_frame = cljs.core.first(arglist__65244);
var params = cljs.core.rest(arglist__65244);
return G__65242__delegate(name,ancestor_frame,params);
});
G__65242.cljs$core$IFn$_invoke$arity$variadic = G__65242__delegate;
return G__65242;
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
