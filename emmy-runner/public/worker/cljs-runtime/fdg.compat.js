import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.calculus.form_field.js";
import "./emmy.calculus.manifold.js";
import "./emmy.calculus.metric.js";
import "./emmy.calculus.vector_field.js";
import "./emmy.env.js";
import "./emmy.mechanics.lagrange.js";
import "./emmy.operator.js";
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
fdg.compat.velocity = (function fdg$compat$velocity(p1__78753_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__78753_SHARP_,(2));
});
fdg.compat.velocities = (function fdg$compat$velocities(p1__78754_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__78754_SHARP_,(2));
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
var seq__78758 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,series));
var chunk__78759 = null;
var count__78760 = (0);
var i__78761 = (0);
while(true){
if((i__78761 < count__78760)){
var term = chunk__78759.cljs$core$IIndexed$_nth$arity$2(null,i__78761);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(term) : f.call(null,term));


var G__78898 = seq__78758;
var G__78899 = chunk__78759;
var G__78900 = count__78760;
var G__78901 = (i__78761 + (1));
seq__78758 = G__78898;
chunk__78759 = G__78899;
count__78760 = G__78900;
i__78761 = G__78901;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__78758);
if(temp__5825__auto__){
var seq__78758__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78758__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__78758__$1);
var G__78902 = cljs.core.chunk_rest(seq__78758__$1);
var G__78903 = c__5694__auto__;
var G__78904 = cljs.core.count(c__5694__auto__);
var G__78905 = (0);
seq__78758 = G__78902;
chunk__78759 = G__78903;
count__78760 = G__78904;
i__78761 = G__78905;
continue;
} else {
var term = cljs.core.first(seq__78758__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(term) : f.call(null,term));


var G__78906 = cljs.core.next(seq__78758__$1);
var G__78907 = null;
var G__78908 = (0);
var G__78909 = (0);
seq__78758 = G__78906;
chunk__78759 = G__78907;
count__78760 = G__78908;
i__78761 = G__78909;
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
var seq__78762 = cljs.core.seq(values);
var chunk__78763 = null;
var count__78764 = (0);
var i__78765 = (0);
while(true){
if((i__78765 < count__78764)){
var value = chunk__78763.cljs$core$IIndexed$_nth$arity$2(null,i__78765);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));


var G__78910 = seq__78762;
var G__78911 = chunk__78763;
var G__78912 = count__78764;
var G__78913 = (i__78765 + (1));
seq__78762 = G__78910;
chunk__78763 = G__78911;
count__78764 = G__78912;
i__78765 = G__78913;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__78762);
if(temp__5825__auto__){
var seq__78762__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78762__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__78762__$1);
var G__78914 = cljs.core.chunk_rest(seq__78762__$1);
var G__78915 = c__5694__auto__;
var G__78916 = cljs.core.count(c__5694__auto__);
var G__78917 = (0);
seq__78762 = G__78914;
chunk__78763 = G__78915;
count__78764 = G__78916;
i__78765 = G__78917;
continue;
} else {
var value = cljs.core.first(seq__78762__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));


var G__78918 = cljs.core.next(seq__78762__$1);
var G__78919 = null;
var G__78920 = (0);
var G__78921 = (0);
seq__78762 = G__78918;
chunk__78763 = G__78919;
count__78764 = G__78920;
i__78765 = G__78921;
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
fdg.compat.literal_field = (function fdg$compat$literal_field(coordsys,type){
var G__78778 = type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"scalar","scalar",-1043076198,null),G__78778)){
var G__78779 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"g","g",-916345864,null));
var G__78780 = coordsys;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__78779,G__78780) : emmy.env.literal_manifold_function.call(null,G__78779,G__78780));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"function","function",-486723946,null),G__78778)){
var G__78781 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"g","g",-916345864,null));
var G__78782 = coordsys;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__78781,G__78782) : emmy.env.literal_manifold_function.call(null,G__78781,G__78782));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"up","up",1370819414,null),G__78778)){
var G__78783 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"v","v",1661996586,null));
var G__78784 = coordsys;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__78783,G__78784) : emmy.env.literal_vector_field.call(null,G__78783,G__78784));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"vector","vector",-751469611,null),G__78778)){
var G__78785 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"v","v",1661996586,null));
var G__78786 = coordsys;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__78785,G__78786) : emmy.env.literal_vector_field.call(null,G__78785,G__78786));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"down","down",-1089190199,null),G__78778)){
var G__78787 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"omega","omega",1917797179,null));
var G__78788 = coordsys;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__78787,G__78788) : emmy.env.literal_oneform_field.call(null,G__78787,G__78788));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"oneform","oneform",1030816042,null),G__78778)){
var G__78789 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"omega","omega",1917797179,null));
var G__78790 = coordsys;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__78789,G__78790) : emmy.env.literal_oneform_field.call(null,G__78789,G__78790));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"one-form","one-form",-381588575,null),G__78778)){
var G__78791 = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"omega","omega",1917797179,null));
var G__78792 = coordsys;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__78791,G__78792) : emmy.env.literal_oneform_field.call(null,G__78791,G__78792));
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
var args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78793_SHARP_){
return fdg.compat.literal_field(coordsys,p1__78793_SHARP_);
}),types);
var f = fdg.compat.literal_field(coordsys,new cljs.core.Symbol(null,"scalar","scalar",-1043076198,null));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
var thing = fdg.compat.literal_field(coordsys,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(types,i));
return emmy.env.freeze.cljs$core$IFn$_invoke$arity$1(emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__78806 = emmy.calculus.manifold.typical_point(coordsys);
var fexpr__78805 = (function (){var G__78807 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tensor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,i,(function (){var G__78809 = (function (){var G__78811 = f;
var G__78812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(args,i);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__78811,G__78812) : emmy.env._STAR_.call(null,G__78811,G__78812));
})();
var G__78810 = thing;
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__78809,G__78810) : emmy.env._PLUS_.call(null,G__78809,G__78810));
})()));
var G__78808 = (function (){var G__78813 = (function (){var G__78815 = f;
var G__78816 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tensor,args);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__78815,G__78816) : emmy.env._STAR_.call(null,G__78815,G__78816));
})();
var G__78814 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tensor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(args,i,thing));
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__78813,G__78814) : emmy.env._PLUS_.call(null,G__78813,G__78814));
})();
return (emmy.env._.cljs$core$IFn$_invoke$arity$2 ? emmy.env._.cljs$core$IFn$_invoke$arity$2(G__78807,G__78808) : emmy.env._.call(null,G__78807,G__78808));
})();
return (fexpr__78805.cljs$core$IFn$_invoke$arity$1 ? fexpr__78805.cljs$core$IFn$_invoke$arity$1(G__78806) : fexpr__78805.call(null,G__78806));
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
fdg.compat.R2_rect_point = (function (){var G__78818 = (function (){var G__78819 = new cljs.core.Symbol(null,"x0","x0",2051374914,null);
var G__78820 = new cljs.core.Symbol(null,"y0","y0",1751986334,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__78819,G__78820) : emmy.env.up.call(null,G__78819,G__78820));
})();
var fexpr__78817 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.point.call(null,emmy.env.R2_rect));
return (fexpr__78817.cljs$core$IFn$_invoke$arity$1 ? fexpr__78817.cljs$core$IFn$_invoke$arity$1(G__78818) : fexpr__78817.call(null,G__78818));
})();
fdg.compat.Chi_inverse = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.point.call(null,emmy.env.R2_rect));
fdg.compat.Chi = (emmy.env.chart.cljs$core$IFn$_invoke$arity$1 ? emmy.env.chart.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.chart.call(null,emmy.env.R2_rect));
fdg.compat.general_Cartan_2 = (function (){var G__78821 = (function (){var G__78822 = new cljs.core.Symbol(null,"Gamma","Gamma",681602978,null);
var G__78823 = emmy.env.R2_rect;
return (emmy.env.literal_Christoffel_2.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_Christoffel_2.cljs$core$IFn$_invoke$arity$2(G__78822,G__78823) : emmy.env.literal_Christoffel_2.call(null,G__78822,G__78823));
})();
return (emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1 ? emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1(G__78821) : emmy.env.Christoffel__GT_Cartan.call(null,G__78821));
})();
fdg.compat.R3_rect_point = (function (){var G__78825 = (function (){var G__78826 = new cljs.core.Symbol(null,"x0","x0",2051374914,null);
var G__78827 = new cljs.core.Symbol(null,"y0","y0",1751986334,null);
var G__78828 = new cljs.core.Symbol(null,"z0","z0",-775585087,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$3 ? emmy.env.up.cljs$core$IFn$_invoke$arity$3(G__78826,G__78827,G__78828) : emmy.env.up.call(null,G__78826,G__78827,G__78828));
})();
var fexpr__78824 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R3_rect) : emmy.env.point.call(null,emmy.env.R3_rect));
return (fexpr__78824.cljs$core$IFn$_invoke$arity$1 ? fexpr__78824.cljs$core$IFn$_invoke$arity$1(G__78825) : fexpr__78824.call(null,G__78825));
})();
fdg.compat.R4_rect_point = (function (){var G__78830 = (function (){var G__78831 = new cljs.core.Symbol(null,"x0","x0",2051374914,null);
var G__78832 = new cljs.core.Symbol(null,"y0","y0",1751986334,null);
var G__78833 = new cljs.core.Symbol(null,"z0","z0",-775585087,null);
var G__78834 = new cljs.core.Symbol(null,"w0","w0",-56918729,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$4 ? emmy.env.up.cljs$core$IFn$_invoke$arity$4(G__78831,G__78832,G__78833,G__78834) : emmy.env.up.call(null,G__78831,G__78832,G__78833,G__78834));
})();
var fexpr__78829 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.R4_rect) : emmy.env.point.call(null,emmy.env.R4_rect));
return (fexpr__78829.cljs$core$IFn$_invoke$arity$1 ? fexpr__78829.cljs$core$IFn$_invoke$arity$1(G__78830) : fexpr__78829.call(null,G__78830));
})();
fdg.compat.R2_rect_basis = (emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.coordinate_system__GT_basis.call(null,emmy.env.R2_rect));
fdg.compat.b_rect = (function (){var G__78840 = (function (){var G__78841 = new cljs.core.Symbol(null,"b","b",-1172211299,null);
var G__78842 = emmy.env.R2_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__78841,G__78842) : emmy.env.literal_vector_field.call(null,G__78841,G__78842));
})();
var fexpr__78839 = (emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_oneform_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.R2_rect) : emmy.env.coordinate_system__GT_oneform_basis.call(null,emmy.env.R2_rect));
return (fexpr__78839.cljs$core$IFn$_invoke$arity$1 ? fexpr__78839.cljs$core$IFn$_invoke$arity$1(G__78840) : fexpr__78839.call(null,G__78840));
})();
fdg.compat.g = (function (){var G__78843 = new cljs.core.Symbol(null,"g-rect","g-rect",979033459,null);
var G__78844 = emmy.env.R3_rect;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__78843,G__78844) : emmy.env.literal_manifold_function.call(null,G__78843,G__78844));
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
return emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__78851 = (emmy.env.chart.cljs$core$IFn$_invoke$arity$1 ? emmy.env.chart.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.chart.call(null,emmy.env.S2_spherical));
return (fexpr__78851.cljs$core$IFn$_invoke$arity$1 ? fexpr__78851.cljs$core$IFn$_invoke$arity$1(point) : fexpr__78851.call(null,point));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
});
fdg.compat.phi = (function fdg$compat$phi(point){
return emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__78855 = (emmy.env.chart.cljs$core$IFn$_invoke$arity$1 ? emmy.env.chart.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.chart.call(null,emmy.env.S2_spherical));
return (fexpr__78855.cljs$core$IFn$_invoke$arity$1 ? fexpr__78855.cljs$core$IFn$_invoke$arity$1(point) : fexpr__78855.call(null,point));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
});
fdg.compat.S2_basis = (emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1 ? emmy.env.coordinate_system__GT_basis.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.coordinate_system__GT_basis.call(null,emmy.env.S2_spherical));
fdg.compat.S2_Christoffel = (emmy.env.metric__GT_Christoffel_2.cljs$core$IFn$_invoke$arity$2 ? emmy.env.metric__GT_Christoffel_2.cljs$core$IFn$_invoke$arity$2(emmy.calculus.metric.S2_metric,fdg.compat.S2_basis) : emmy.env.metric__GT_Christoffel_2.call(null,emmy.calculus.metric.S2_metric,fdg.compat.S2_basis));
fdg.compat.sphere_Cartan = (emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1 ? emmy.env.Christoffel__GT_Cartan.cljs$core$IFn$_invoke$arity$1(fdg.compat.S2_Christoffel) : emmy.env.Christoffel__GT_Cartan.call(null,fdg.compat.S2_Christoffel));
fdg.compat.T = fdg.compat.d_COLON_dtheta;
fdg.compat.U = fdg.compat.d_COLON_dphi;
fdg.compat.m = (function (){var G__78863 = (function (){var G__78864 = new cljs.core.Symbol(null,"theta0","theta0",-722641636,null);
var G__78865 = new cljs.core.Symbol(null,"phi0","phi0",-1013479339,null);
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__78864,G__78865) : emmy.env.up.call(null,G__78864,G__78865));
})();
var fexpr__78862 = (emmy.env.point.cljs$core$IFn$_invoke$arity$1 ? emmy.env.point.cljs$core$IFn$_invoke$arity$1(emmy.env.S2_spherical) : emmy.env.point.call(null,emmy.env.S2_spherical));
return (fexpr__78862.cljs$core$IFn$_invoke$arity$1 ? fexpr__78862.cljs$core$IFn$_invoke$arity$1(G__78863) : fexpr__78862.call(null,G__78863));
})();
fdg.compat.Cartan = fdg.compat.sphere_Cartan;
fdg.compat.nabla = (emmy.env.covariant_derivative.cljs$core$IFn$_invoke$arity$1 ? emmy.env.covariant_derivative.cljs$core$IFn$_invoke$arity$1(fdg.compat.Cartan) : emmy.env.covariant_derivative.call(null,fdg.compat.Cartan));
fdg.compat.omega = (function (){var G__78866 = new cljs.core.Symbol(null,"omega-rect","omega-rect",969735142,null);
var G__78867 = emmy.env.R4_rect;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__78866,G__78867) : emmy.env.literal_oneform_field.call(null,G__78866,G__78867));
})();
fdg.compat.f = (function (){var G__78868 = new cljs.core.Symbol(null,"f-sphere","f-sphere",-165467547,null);
var G__78869 = emmy.env.S2_spherical;
return (emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_manifold_function.cljs$core$IFn$_invoke$arity$2(G__78868,G__78869) : emmy.env.literal_manifold_function.call(null,G__78868,G__78869));
})();
fdg.compat.X = (function (){var G__78870 = new cljs.core.Symbol(null,"X-rect","X-rect",-682747308,null);
var G__78871 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__78870,G__78871) : emmy.env.literal_vector_field.call(null,G__78870,G__78871));
})();
fdg.compat.Y = (function (){var G__78872 = new cljs.core.Symbol(null,"Y-rect","Y-rect",-2116956248,null);
var G__78873 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__78872,G__78873) : emmy.env.literal_vector_field.call(null,G__78872,G__78873));
})();
fdg.compat.Z = (function (){var G__78874 = new cljs.core.Symbol(null,"Z-rect","Z-rect",-912835945,null);
var G__78875 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__78874,G__78875) : emmy.env.literal_vector_field.call(null,G__78874,G__78875));
})();
fdg.compat.V = (function (){var G__78877 = new cljs.core.Symbol(null,"V-rect","V-rect",-754424260,null);
var G__78878 = emmy.env.R4_rect;
return (emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_vector_field.cljs$core$IFn$_invoke$arity$2(G__78877,G__78878) : emmy.env.literal_vector_field.call(null,G__78877,G__78878));
})();
fdg.compat.e_x = (function (){var G__78880 = new cljs.core.Symbol(null,"e\u2191x","e\u2191x",-351434082,null);
var G__78881 = emmy.env.Euler_angles;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__78880,G__78881) : emmy.env.literal_oneform_field.call(null,G__78880,G__78881));
})();
fdg.compat.e_y = (function (){var G__78882 = new cljs.core.Symbol(null,"e\u2191y","e\u2191y",1217750238,null);
var G__78883 = emmy.env.Euler_angles;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__78882,G__78883) : emmy.env.literal_oneform_field.call(null,G__78882,G__78883));
})();
fdg.compat.e_z = (function (){var G__78884 = new cljs.core.Symbol(null,"e\u2191z","e\u2191z",1284832759,null);
var G__78885 = emmy.env.Euler_angles;
return (emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2 ? emmy.env.literal_oneform_field.cljs$core$IFn$_invoke$arity$2(G__78884,G__78885) : emmy.env.literal_oneform_field.call(null,G__78884,G__78885));
})();
/**
 * Base frame assumed, but not defined, by the Chapter 11 text.
 */
fdg.compat.home = emmy.env.base_frame_maker(new cljs.core.Symbol(null,"home","home",1565974218,null),new cljs.core.Symbol(null,"home","home",1565974218,null));
/**
 * Adapts FDG's variadic scmutils frame-maker protocol to Emmy's parameter-map protocol.
 */
fdg.compat.legacy_frame_maker = (function fdg$compat$legacy_frame_maker(coordinates__GT_event,event__GT_coordinates){
var make = (function (){var G__78891 = (function (ancestor_frame,this_frame,params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(coordinates__GT_event,ancestor_frame,this_frame,params);
});
var G__78892 = (function (ancestor_frame,this_frame,params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(event__GT_coordinates,ancestor_frame,this_frame,params);
});
return (emmy.env.frame_maker.cljs$core$IFn$_invoke$arity$2 ? emmy.env.frame_maker.cljs$core$IFn$_invoke$arity$2(G__78891,G__78892) : emmy.env.frame_maker.call(null,G__78891,G__78892));
})();
return (function() { 
var G__78931__delegate = function (name,ancestor_frame,params){
return (make.cljs$core$IFn$_invoke$arity$3 ? make.cljs$core$IFn$_invoke$arity$3(name,ancestor_frame,params) : make.call(null,name,ancestor_frame,params));
};
var G__78931 = function (name,ancestor_frame,var_args){
var params = null;
if (arguments.length > 2) {
var G__78932__i = 0, G__78932__a = new Array(arguments.length -  2);
while (G__78932__i < G__78932__a.length) {G__78932__a[G__78932__i] = arguments[G__78932__i + 2]; ++G__78932__i;}
  params = new cljs.core.IndexedSeq(G__78932__a,0,null);
} 
return G__78931__delegate.call(this,name,ancestor_frame,params);};
G__78931.cljs$lang$maxFixedArity = 2;
G__78931.cljs$lang$applyTo = (function (arglist__78933){
var name = cljs.core.first(arglist__78933);
arglist__78933 = cljs.core.next(arglist__78933);
var ancestor_frame = cljs.core.first(arglist__78933);
var params = cljs.core.rest(arglist__78933);
return G__78931__delegate(name,ancestor_frame,params);
});
G__78931.cljs$core$IFn$_invoke$arity$variadic = G__78931__delegate;
return G__78931;
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
