goog.provide('emmy.calculus.metric');
emmy.calculus.metric.embedding_map__GT_metric_components = (function emmy$calculus$metric$embedding_map__GT_metric_components(n,xi__GT_rectangular){
var h = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(xi__GT_rectangular) : emmy.calculus.derivative.D.call(null,xi__GT_rectangular));
var ref = (function (f,k){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__48615_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__48615_SHARP_,k);
}),f], 0));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return emmy.structure.down.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.structure.down.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(h,h)], 0))], 0));
} else {
return emmy.structure.generate(n,new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),(function (i){
return emmy.structure.generate(n,new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),(function (j){
return emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(ref(h,i),ref(h,j));
}));
}));
}
});
emmy.calculus.metric.coordinate_system__GT_metric_components = (function emmy$calculus$metric$coordinate_system__GT_metric_components(coordsys){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(coordsys));
var xi__GT_x = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.calculus.manifold.manifold_point_representation,emmy.calculus.manifold.point(coordsys)], 0));
return emmy.calculus.metric.embedding_map__GT_metric_components(n,xi__GT_x);
});
emmy.calculus.metric.coordinate_system__GT_metric = (function emmy$calculus$metric$coordinate_system__GT_metric(coordinate_system){
var basis = emmy.calculus.basis.coordinate_system__GT_basis(coordinate_system);
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
var __GT_components = emmy.calculus.metric.coordinate_system__GT_metric_components(coordinate_system);
var Chi = emmy.calculus.manifold.chart(coordinate_system);
var the_metric = (function emmy$calculus$metric$coordinate_system__GT_metric_$_the_metric(v1,v2){
return (function (m){
var gcoeffs = (function (){var G__48631 = Chi(m);
return (__GT_components.cljs$core$IFn$_invoke$arity$1 ? __GT_components.cljs$core$IFn$_invoke$arity$1(G__48631) : __GT_components.call(null,G__48631));
})();
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(gcoeffs,(function (){var fexpr__48633 = (oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v1) : oneform_basis.call(null,v1));
return (fexpr__48633.cljs$core$IFn$_invoke$arity$1 ? fexpr__48633.cljs$core$IFn$_invoke$arity$1(m) : fexpr__48633.call(null,m));
})()),(function (){var fexpr__48635 = (oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v2) : oneform_basis.call(null,v2));
return (fexpr__48635.cljs$core$IFn$_invoke$arity$1 ? fexpr__48635.cljs$core$IFn$_invoke$arity$1(m) : fexpr__48635.call(null,m));
})());
});
});
return emmy.calculus.indexed.with_argument_types(the_metric,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null));
});
emmy.calculus.metric.coordinate_system__GT_inverse_metric = (function emmy$calculus$metric$coordinate_system__GT_inverse_metric(coordinate_system){
var basis = emmy.calculus.basis.coordinate_system__GT_basis(coordinate_system);
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var __GT_components = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),emmy.calculus.metric.coordinate_system__GT_metric_components(coordinate_system));
var Chi = emmy.calculus.manifold.chart(coordinate_system);
var the_inverse_metric = (function emmy$calculus$metric$coordinate_system__GT_inverse_metric_$_the_inverse_metric(w1,w2){
return (function (m){
var gcoeffs = (function (){var G__48649 = Chi(m);
return (__GT_components.cljs$core$IFn$_invoke$arity$1 ? __GT_components.cljs$core$IFn$_invoke$arity$1(G__48649) : __GT_components.call(null,G__48649));
})();
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(gcoeffs,emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
var fexpr__48650 = (w1.cljs$core$IFn$_invoke$arity$1 ? w1.cljs$core$IFn$_invoke$arity$1(e) : w1.call(null,e));
return (fexpr__48650.cljs$core$IFn$_invoke$arity$1 ? fexpr__48650.cljs$core$IFn$_invoke$arity$1(m) : fexpr__48650.call(null,m));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0))),emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
var fexpr__48651 = (w2.cljs$core$IFn$_invoke$arity$1 ? w2.cljs$core$IFn$_invoke$arity$1(e) : w2.call(null,e));
return (fexpr__48651.cljs$core$IFn$_invoke$arity$1 ? fexpr__48651.cljs$core$IFn$_invoke$arity$1(m) : fexpr__48651.call(null,m));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)));
});
});
return emmy.calculus.indexed.with_argument_types(the_inverse_metric,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519),new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519)], null));
});
emmy.calculus.metric.make_metric = (function emmy$calculus$metric$make_metric(name,coordinate_system){
return (function emmy$calculus$metric$make_metric_$_gij(i,j){
if((i <= j)){
return emmy.calculus.manifold.literal_manifold_function(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(j))),coordinate_system);
} else {
return emmy$calculus$metric$make_metric_$_gij(j,i);
}
});
});
/**
 * Flat coordinate systems here only.
 */
emmy.calculus.metric.literal_metric = (function emmy$calculus$metric$literal_metric(name,coordinate_system){
var basis = emmy.calculus.basis.coordinate_system__GT_basis(coordinate_system);
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
var gij = emmy.calculus.metric.make_metric(name,coordinate_system);
var n = emmy.generic.dimension.cljs$core$IFn$_invoke$arity$1(oneform_basis);
var gcoeffs = emmy.structure.generate(n,new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),(function (i){
return emmy.structure.generate(n,new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),(function (j){
return gij(i,j);
}));
}));
var the_metric = (function emmy$calculus$metric$literal_metric_$_the_metric(v1,v2){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(gcoeffs,(oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v1) : oneform_basis.call(null,v1))),(oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v2) : oneform_basis.call(null,v2)));
});
return emmy.calculus.indexed.with_argument_types(the_metric,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null));
});
emmy.calculus.metric.components__GT_metric = (function emmy$calculus$metric$components__GT_metric(components,basis){
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
return (function emmy$calculus$metric$components__GT_metric_$_the_metric(v1,v2){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v1) : oneform_basis.call(null,v1)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(components,(oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v2) : oneform_basis.call(null,v2))));
});
});
emmy.calculus.metric.metric__GT_components = (function emmy$calculus$metric$metric__GT_components(metric,basis){
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_i){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_j){
return (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_i,e_j) : metric.call(null,e_i,e_j));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
});
/**
 * Given a metric and a basis, computes the inverse metric.
 */
emmy.calculus.metric.metric__GT_inverse_components = (function emmy$calculus$metric$metric__GT_inverse_components(metric,basis){
return (function emmy$calculus$metric$metric__GT_inverse_components_$_the_coeffs(m){
var g_ij = (function (){var fexpr__48663 = emmy.calculus.metric.metric__GT_components(metric,basis);
return (fexpr__48663.cljs$core$IFn$_invoke$arity$1 ? fexpr__48663.cljs$core$IFn$_invoke$arity$1(m) : fexpr__48663.call(null,m));
})();
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
var typical = emmy.structure.typical_object(oneform_basis);
return emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(typical,g_ij,typical);
});
});
emmy.calculus.metric.invert = (function emmy$calculus$metric$invert(metric,basis){
var the_inverse_metric = (function emmy$calculus$metric$invert_$_the_inverse_metric(w1,w2){
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var g_ij = emmy.calculus.metric.metric__GT_inverse_components(metric,basis);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(g_ij,emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(w1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0))),emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(w2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)));
});
return emmy.calculus.indexed.with_argument_types(the_inverse_metric,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519),new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519)], null));
});
emmy.calculus.metric.metric_over_map = (function emmy$calculus$metric$metric_over_map(mu_COLON_N__GT_M,g_on_M){
var make_fake_vector_field = (function emmy$calculus$metric$metric_over_map_$_make_fake_vector_field(V_over_mu,n){
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2((function (f){
return (function (_){
var fexpr__48687 = (V_over_mu.cljs$core$IFn$_invoke$arity$1 ? V_over_mu.cljs$core$IFn$_invoke$arity$1(f) : V_over_mu.call(null,f));
return (fexpr__48687.cljs$core$IFn$_invoke$arity$1 ? fexpr__48687.cljs$core$IFn$_invoke$arity$1(n) : fexpr__48687.call(null,n));
});
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"make-fake-vector-field","make-fake-vector-field",-1146565625,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(V_over_mu),null,(1),null))))));
});
var the_metric = (function emmy$calculus$metric$metric_over_map_$_the_metric(v1,v2){
return (function (n){
var G__48693 = (mu_COLON_N__GT_M.cljs$core$IFn$_invoke$arity$1 ? mu_COLON_N__GT_M.cljs$core$IFn$_invoke$arity$1(n) : mu_COLON_N__GT_M.call(null,n));
var fexpr__48692 = (function (){var G__48694 = make_fake_vector_field(v1,n);
var G__48695 = make_fake_vector_field(v2,n);
return (g_on_M.cljs$core$IFn$_invoke$arity$2 ? g_on_M.cljs$core$IFn$_invoke$arity$2(G__48694,G__48695) : g_on_M.call(null,G__48694,G__48695));
})();
return (fexpr__48692.cljs$core$IFn$_invoke$arity$1 ? fexpr__48692.cljs$core$IFn$_invoke$arity$1(G__48693) : fexpr__48692.call(null,G__48693));
});
});
return emmy.calculus.indexed.with_argument_types(the_metric,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null));
});
/**
 * To make a vector field into a one-form field, i.e., a (1,0) tensor into a (0,1)
 *   tensor.
 */
emmy.calculus.metric.lower = (function emmy$calculus$metric$lower(metric){
return (function (u){
var omega = (function emmy$calculus$metric$lower_$_omega(v){
return (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(v,u) : metric.call(null,v,u));
});
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(omega,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"lower","lower",-1534114948,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(u),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(metric),null,(1),null))], 0)))));
});
});
/**
 * Alias for [[lower]].
 */
emmy.calculus.metric.vector_field__GT_oneform_field = emmy.calculus.metric.lower;
/**
 * Alias for [[lower]].
 */
emmy.calculus.metric.drop1 = emmy.calculus.metric.lower;
/**
 * To make a one-form field into a vector field, i.e., a (0,1) tensor into a (1,0)
 *   tensor.
 */
emmy.calculus.metric.raise = (function emmy$calculus$metric$raise(metric,basis){
var gi = emmy.calculus.metric.invert(metric,basis);
return (function (omega){
var v = emmy.calculus.basis.contract((function (vf_i,ff_i){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((gi.cljs$core$IFn$_invoke$arity$2 ? gi.cljs$core$IFn$_invoke$arity$2(omega,ff_i) : gi.call(null,omega,ff_i)),vf_i);
}),basis);
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(v,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"raise","raise",1824672588,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(omega),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(metric),null,(1),null))], 0)))));
});
});
/**
 * Alias for [[raise]].
 */
emmy.calculus.metric.oneform_field__GT_vector_field = emmy.calculus.metric.raise;
/**
 * Alias for [[raise]].
 */
emmy.calculus.metric.raise1 = emmy.calculus.metric.raise;
/**
 * For making a (2,0) tensor into a (0,2) tensor.
 */
emmy.calculus.metric.drop2 = (function emmy$calculus$metric$drop2(metric_tensor,basis){
return (function (tensor){
var omega = (function emmy$calculus$metric$drop2_$_omega(v1,v2){
return emmy.calculus.basis.contract((function (e1,w1){
return emmy.calculus.basis.contract((function (e2,w2){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((metric_tensor.cljs$core$IFn$_invoke$arity$2 ? metric_tensor.cljs$core$IFn$_invoke$arity$2(v1,e1) : metric_tensor.call(null,v1,e1)),(tensor.cljs$core$IFn$_invoke$arity$2 ? tensor.cljs$core$IFn$_invoke$arity$2(w1,w2) : tensor.call(null,w1,w2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(metric_tensor.cljs$core$IFn$_invoke$arity$2 ? metric_tensor.cljs$core$IFn$_invoke$arity$2(e2,v2) : metric_tensor.call(null,e2,v2))], 0));
}),basis);
}),basis);
});
return emmy.calculus.indexed.with_argument_types(omega,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null));
});
});
/**
 * For making a (0,2) tensor into a (2,0) tensor.
 */
emmy.calculus.metric.raise2 = (function emmy$calculus$metric$raise2(metric_tensor,basis){
var gi = emmy.calculus.metric.invert(metric_tensor,basis);
return (function (tensor02){
var v2 = (function emmy$calculus$metric$raise2_$_v2(omega1,omega2){
return emmy.calculus.basis.contract((function (e1,w1){
return emmy.calculus.basis.contract((function (e2,w2){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((gi.cljs$core$IFn$_invoke$arity$2 ? gi.cljs$core$IFn$_invoke$arity$2(omega1,w1) : gi.call(null,omega1,w1)),(tensor02.cljs$core$IFn$_invoke$arity$2 ? tensor02.cljs$core$IFn$_invoke$arity$2(e1,e2) : tensor02.call(null,e1,e2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(gi.cljs$core$IFn$_invoke$arity$2 ? gi.cljs$core$IFn$_invoke$arity$2(w2,omega2) : gi.call(null,w2,omega2))], 0));
}),basis);
}),basis);
});
return emmy.calculus.indexed.with_argument_types(v2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519),new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519)], null));
});
});
/**
 * Computes the trace of a (0,2) tensor.
 */
emmy.calculus.metric.trace2down = (function emmy$calculus$metric$trace2down(metric_tensor,basis){
var inverse_metric_tensor = emmy.calculus.metric.invert(metric_tensor,basis);
return (function (tensor02){
var f = emmy.calculus.basis.contract((function (e1,w1){
return emmy.calculus.basis.contract((function (e2,w2){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((inverse_metric_tensor.cljs$core$IFn$_invoke$arity$2 ? inverse_metric_tensor.cljs$core$IFn$_invoke$arity$2(w1,w2) : inverse_metric_tensor.call(null,w1,w2)),(tensor02.cljs$core$IFn$_invoke$arity$2 ? tensor02.cljs$core$IFn$_invoke$arity$2(e1,e2) : tensor02.call(null,e1,e2)));
}),basis);
}),basis);
return emmy.calculus.indexed.with_argument_types(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null));
});
});
/**
 * Computes the trace of a (2,0) tensor
 */
emmy.calculus.metric.trace2up = (function emmy$calculus$metric$trace2up(metric_tensor,basis){
return (function (tensor20){
var f = emmy.calculus.basis.contract((function (e1,w1){
return emmy.calculus.basis.contract((function (e2,w2){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((metric_tensor.cljs$core$IFn$_invoke$arity$2 ? metric_tensor.cljs$core$IFn$_invoke$arity$2(e1,e2) : metric_tensor.call(null,e1,e2)),(tensor20.cljs$core$IFn$_invoke$arity$2 ? tensor20.cljs$core$IFn$_invoke$arity$2(w1,w2) : tensor20.call(null,w1,w2)));
}),basis);
}),basis);
return emmy.calculus.indexed.with_argument_types(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null));
});
});
emmy.calculus.metric.sharpen = (function emmy$calculus$metric$sharpen(metric,basis,m){
var g_ij = emmy.calculus.metric.metric__GT_inverse_components(metric,basis)(m);
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
return (function emmy$calculus$metric$sharpen_$_sharp(oneform_field){
var oneform_coeffs = emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (ei){
var fexpr__48718 = (oneform_field.cljs$core$IFn$_invoke$arity$1 ? oneform_field.cljs$core$IFn$_invoke$arity$1(ei) : oneform_field.call(null,ei));
return (fexpr__48718.cljs$core$IFn$_invoke$arity$1 ? fexpr__48718.cljs$core$IFn$_invoke$arity$1(m) : fexpr__48718.call(null,m));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
var vector_coeffs = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(g_ij,oneform_coeffs);
return emmy.structure.sumr.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_coeffs,vector_basis], 0));
});
});
emmy.calculus.metric.S2_metric = (function (){var vec__48724 = emmy.calculus.coordinate.coordinate_functions(emmy.calculus.manifold.S2_spherical);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48724,(0),null);
var vec__48727 = emmy.calculus.form_field.coordinate_system__GT_oneform_basis(emmy.calculus.manifold.S2_spherical);
var dtheta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48727,(0),null);
var dphi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48727,(1),null);
return emmy.calculus.indexed.with_argument_types((function emmy$calculus$metric$the_metric(v1,v2){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((dtheta.cljs$core$IFn$_invoke$arity$1 ? dtheta.cljs$core$IFn$_invoke$arity$1(v1) : dtheta.call(null,v1)),(dtheta.cljs$core$IFn$_invoke$arity$1 ? dtheta.cljs$core$IFn$_invoke$arity$1(v2) : dtheta.call(null,v2))),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),(2)),(dphi.cljs$core$IFn$_invoke$arity$1 ? dphi.cljs$core$IFn$_invoke$arity$1(v1) : dphi.call(null,v1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(dphi.cljs$core$IFn$_invoke$arity$1 ? dphi.cljs$core$IFn$_invoke$arity$1(v2) : dphi.call(null,v2))], 0)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null));
})();

//# sourceMappingURL=emmy.calculus.metric.js.map
