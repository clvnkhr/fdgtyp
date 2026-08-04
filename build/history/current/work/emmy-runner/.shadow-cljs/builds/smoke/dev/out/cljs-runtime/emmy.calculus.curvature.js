goog.provide('emmy.calculus.curvature');
emmy.calculus.curvature.Riemann_curvature = (function emmy$calculus$curvature$Riemann_curvature(nabla){
return (function (u,v){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.operator.commutator((nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(u) : nabla.call(null,u)),(nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(v) : nabla.call(null,v))),(function (){var G__48597 = emmy.operator.commutator(u,v);
return (nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(G__48597) : nabla.call(null,G__48597));
})());
});
});
emmy.calculus.curvature.Riemann = (function emmy$calculus$curvature$Riemann(nabla){
var Riemann_tensor = (function emmy$calculus$curvature$Riemann_$_Riemann_tensor(w,x,u,v){
var G__48612 = (function (){var fexpr__48613 = emmy.calculus.curvature.Riemann_curvature(nabla)(u,v);
return (fexpr__48613.cljs$core$IFn$_invoke$arity$1 ? fexpr__48613.cljs$core$IFn$_invoke$arity$1(x) : fexpr__48613.call(null,x));
})();
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(G__48612) : w.call(null,G__48612));
});
return emmy.calculus.indexed.with_argument_types(Riemann_tensor,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null));
});
emmy.calculus.curvature.Ricci = (function emmy$calculus$curvature$Ricci(nabla,basis){
var Ricci_tensor = (function emmy$calculus$curvature$Ricci_$_Ricci_tensor(u,v){
return emmy.calculus.basis.contract((function (ei,wi){
var fexpr__48617 = emmy.calculus.curvature.Riemann(nabla);
return (fexpr__48617.cljs$core$IFn$_invoke$arity$4 ? fexpr__48617.cljs$core$IFn$_invoke$arity$4(wi,u,ei,v) : fexpr__48617.call(null,wi,u,ei,v));
}),basis);
});
return emmy.calculus.indexed.with_argument_types(Ricci_tensor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null));
});
emmy.calculus.curvature.torsion_vector = (function emmy$calculus$curvature$torsion_vector(nabla){
return (function (X,Y){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__48618 = (nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(X) : nabla.call(null,X));
return (fexpr__48618.cljs$core$IFn$_invoke$arity$1 ? fexpr__48618.cljs$core$IFn$_invoke$arity$1(Y) : fexpr__48618.call(null,Y));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__48619 = (nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(Y) : nabla.call(null,Y));
return (fexpr__48619.cljs$core$IFn$_invoke$arity$1 ? fexpr__48619.cljs$core$IFn$_invoke$arity$1(X) : fexpr__48619.call(null,X));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),emmy.operator.commutator(X,Y))], 0));
});
});
emmy.calculus.curvature.torsion = (function emmy$calculus$curvature$torsion(nabla){
var the_torsion = (function emmy$calculus$curvature$torsion_$_the_torsion(w,x,y){
var G__48621 = emmy.calculus.curvature.torsion_vector(nabla)(x,y);
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(G__48621) : w.call(null,G__48621));
});
return emmy.calculus.indexed.with_argument_types(the_torsion,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null));
});
emmy.calculus.curvature.curvature_components = (function emmy$calculus$curvature$curvature_components(nabla,coord_sys){
var d_COLON_dxs = emmy.calculus.vector_field.coordinate_system__GT_vector_basis(coord_sys);
var dxs = emmy.calculus.form_field.coordinate_system__GT_oneform_basis(coord_sys);
var point = emmy.calculus.manifold.point(coord_sys)(emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null)], 0)));
var fexpr__48624 = emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (dx){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (d_COLON_dx){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (d_COLON_dy){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (d_COLON_dz){
var G__48625 = (function (){var fexpr__48626 = emmy.calculus.curvature.Riemann_curvature(nabla)(d_COLON_dy,d_COLON_dz);
return (fexpr__48626.cljs$core$IFn$_invoke$arity$1 ? fexpr__48626.cljs$core$IFn$_invoke$arity$1(d_COLON_dx) : fexpr__48626.call(null,d_COLON_dx));
})();
return (dx.cljs$core$IFn$_invoke$arity$1 ? dx.cljs$core$IFn$_invoke$arity$1(G__48625) : dx.call(null,G__48625));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d_COLON_dxs], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d_COLON_dxs], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d_COLON_dxs], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dxs], 0));
return (fexpr__48624.cljs$core$IFn$_invoke$arity$1 ? fexpr__48624.cljs$core$IFn$_invoke$arity$1(point) : fexpr__48624.call(null,point));
});

//# sourceMappingURL=emmy.calculus.curvature.js.map
