goog.provide('emmy.calculus.connection');
/**
 * Returns a data structure representing [Christoffel symbols of the first
 *   kind](https://en.wikipedia.org/wiki/Christoffel_symbols#Christoffel_symbols_of_the_first_kind).
 */
emmy.calculus.connection.make_Christoffel_1 = (function emmy$calculus$connection$make_Christoffel_1(symbols,basis){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("emmy.calculus.connection","Christoffel-1","emmy.calculus.connection/Christoffel-1",-714777450),new cljs.core.Keyword(null,"symbols","symbols",1211743),symbols,new cljs.core.Keyword(null,"basis","basis",1865819339),basis], null);
});
emmy.calculus.connection.metric__GT_Christoffel_1 = (function emmy$calculus$connection$metric__GT_Christoffel_1(metric,basis){
if(emmy.calculus.basis.coordinate_basis_QMARK_(basis)){
} else {
throw (new Error("Assert failed: (b/coordinate-basis? basis)"));
}

var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var half = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2));
return emmy.calculus.connection.make_Christoffel_1(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_k){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_j){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_i){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half,emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__49038 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_i,e_j) : metric.call(null,e_i,e_j));
return (e_k.cljs$core$IFn$_invoke$arity$1 ? e_k.cljs$core$IFn$_invoke$arity$1(G__49038) : e_k.call(null,G__49038));
})(),(function (){var G__49039 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_i,e_k) : metric.call(null,e_i,e_k));
return (e_j.cljs$core$IFn$_invoke$arity$1 ? e_j.cljs$core$IFn$_invoke$arity$1(G__49039) : e_j.call(null,G__49039));
})()),(function (){var G__49040 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_j,e_k) : metric.call(null,e_j,e_k));
return (e_i.cljs$core$IFn$_invoke$arity$1 ? e_i.cljs$core$IFn$_invoke$arity$1(G__49040) : e_i.call(null,G__49040));
})()));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),basis);
});
emmy.calculus.connection.metric__GT_Christoffel_2 = (function emmy$calculus$connection$metric__GT_Christoffel_2(metric,basis){
if(emmy.calculus.basis.coordinate_basis_QMARK_(basis)){
} else {
throw (new Error("Assert failed: (b/coordinate-basis? basis)"));
}

var metric__$1 = emmy.function$.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.function$.memoize,metric));
var gi = emmy.calculus.metric.invert(metric__$1,basis);
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
var half = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2));
return emmy.calculus.covariant.make_Christoffel(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_k){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_j){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (w_i){
return emmy.calculus.basis.contract((function (e_m,w_m){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((gi.cljs$core$IFn$_invoke$arity$2 ? gi.cljs$core$IFn$_invoke$arity$2(w_i,w_m) : gi.call(null,w_i,w_m)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half,emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__49041 = (metric__$1.cljs$core$IFn$_invoke$arity$2 ? metric__$1.cljs$core$IFn$_invoke$arity$2(e_m,e_j) : metric__$1.call(null,e_m,e_j));
return (e_k.cljs$core$IFn$_invoke$arity$1 ? e_k.cljs$core$IFn$_invoke$arity$1(G__49041) : e_k.call(null,G__49041));
})(),(function (){var G__49042 = (metric__$1.cljs$core$IFn$_invoke$arity$2 ? metric__$1.cljs$core$IFn$_invoke$arity$2(e_m,e_k) : metric__$1.call(null,e_m,e_k));
return (e_j.cljs$core$IFn$_invoke$arity$1 ? e_j.cljs$core$IFn$_invoke$arity$1(G__49042) : e_j.call(null,G__49042));
})()),(function (){var G__49043 = (metric__$1.cljs$core$IFn$_invoke$arity$2 ? metric__$1.cljs$core$IFn$_invoke$arity$2(e_j,e_k) : metric__$1.call(null,e_j,e_k));
return (e_m.cljs$core$IFn$_invoke$arity$1 ? e_m.cljs$core$IFn$_invoke$arity$1(G__49043) : e_m.call(null,G__49043));
})())));
}),basis);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),basis);
});
emmy.calculus.connection.literal_Christoffel_names = (function emmy$calculus$connection$literal_Christoffel_names(name,p__49046,n){
var vec__49047 = p__49046;
var s0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49047,(0),null);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49047,(1),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49047,(2),null);
var scripts = vec__49047;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s0,s1)){
} else {
throw (new Error("Assert failed: (= s0 s1)"));
}

var tex = (function emmy$calculus$connection$literal_Christoffel_names_$_tex(s){
var or__5162__auto__ = (emmy.structure.orientation__GT_separator.cljs$core$IFn$_invoke$arity$1 ? emmy.structure.orientation__GT_separator.cljs$core$IFn$_invoke$arity$1(s) : emmy.structure.orientation__GT_separator.call(null,s));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.util.illegal((""+"Bad scripts: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(scripts)));
}
});
var Gijk = (function emmy$calculus$connection$literal_Christoffel_names_$_Gijk(i,j,k){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tex(s0))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tex(s2))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)));
});
return emmy.structure.generate(n,s0,(function (i){
return emmy.structure.generate(n,s1,(function (j){
return emmy.structure.generate(n,s2,(function (k){
return Gijk(i,j,k);
}));
}));
}));
});
emmy.calculus.connection.literal_Christoffel_1 = (function emmy$calculus$connection$literal_Christoffel_1(name,coordsys){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(coordsys));
return emmy.calculus.connection.make_Christoffel_1(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (name__$1){
return emmy.calculus.manifold.literal_manifold_function(name__$1,coordsys);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.calculus.connection.literal_Christoffel_names(name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711)], null),n)], 0)),emmy.calculus.basis.coordinate_system__GT_basis(coordsys));
});
emmy.calculus.connection.literal_Christoffel_2 = (function emmy$calculus$connection$literal_Christoffel_2(name,coordsys){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(coordsys));
return emmy.calculus.covariant.make_Christoffel(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (name__$1){
return emmy.calculus.manifold.literal_manifold_function(name__$1,coordsys);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.calculus.connection.literal_Christoffel_names(name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384)], null),n)], 0)),emmy.calculus.basis.coordinate_system__GT_basis(coordsys));
});
emmy.calculus.connection.literal_Cartan = (function emmy$calculus$connection$literal_Cartan(name,coordsys){
return emmy.calculus.covariant.Christoffel__GT_Cartan(emmy.calculus.connection.literal_Christoffel_2(name,coordsys));
});
emmy.calculus.connection.structure_constant = (function emmy$calculus$connection$structure_constant(e_i,e_j,e_k,basis,metric){
return emmy.calculus.basis.contract((function (e_l,w_l){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_k,e_l) : metric.call(null,e_k,e_l)),(function (){var G__49059 = emmy.operator.commutator(e_i,e_j);
return (w_l.cljs$core$IFn$_invoke$arity$1 ? w_l.cljs$core$IFn$_invoke$arity$1(G__49059) : w_l.call(null,G__49059));
})());
}),basis);
});
emmy.calculus.connection.metric__GT_connection_1 = (function emmy$calculus$connection$metric__GT_connection_1(metric,basis){
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var half = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2));
return emmy.calculus.covariant.make_Christoffel(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_k){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_j){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_i){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__49065 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_i,e_j) : metric.call(null,e_i,e_j));
return (e_k.cljs$core$IFn$_invoke$arity$1 ? e_k.cljs$core$IFn$_invoke$arity$1(G__49065) : e_k.call(null,G__49065));
})(),(function (){var G__49066 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_i,e_k) : metric.call(null,e_i,e_k));
return (e_j.cljs$core$IFn$_invoke$arity$1 ? e_j.cljs$core$IFn$_invoke$arity$1(G__49066) : e_j.call(null,G__49066));
})()),(function (){var G__49067 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_j,e_k) : metric.call(null,e_j,e_k));
return (e_i.cljs$core$IFn$_invoke$arity$1 ? e_i.cljs$core$IFn$_invoke$arity$1(G__49067) : e_i.call(null,G__49067));
})()),emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.calculus.connection.structure_constant(e_i,e_j,e_k,basis,metric),emmy.calculus.connection.structure_constant(e_i,e_k,e_j,basis,metric)),emmy.calculus.connection.structure_constant(e_j,e_k,e_i,basis,metric))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),basis);
});
emmy.calculus.connection.metric__GT_connection_2 = (function emmy$calculus$connection$metric__GT_connection_2(metric,basis){
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
var inverse_metric = emmy.calculus.metric.invert(metric,basis);
var half = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2));
return emmy.calculus.covariant.make_Christoffel(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_k){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_j){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (w_i){
return emmy.calculus.basis.contract((function (e_m,w_m){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((inverse_metric.cljs$core$IFn$_invoke$arity$2 ? inverse_metric.cljs$core$IFn$_invoke$arity$2(w_i,w_m) : inverse_metric.call(null,w_i,w_m)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__49088 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_m,e_j) : metric.call(null,e_m,e_j));
return (e_k.cljs$core$IFn$_invoke$arity$1 ? e_k.cljs$core$IFn$_invoke$arity$1(G__49088) : e_k.call(null,G__49088));
})(),(function (){var G__49089 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_m,e_k) : metric.call(null,e_m,e_k));
return (e_j.cljs$core$IFn$_invoke$arity$1 ? e_j.cljs$core$IFn$_invoke$arity$1(G__49089) : e_j.call(null,G__49089));
})()),(function (){var G__49090 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_j,e_k) : metric.call(null,e_j,e_k));
return (e_m.cljs$core$IFn$_invoke$arity$1 ? e_m.cljs$core$IFn$_invoke$arity$1(G__49090) : e_m.call(null,G__49090));
})()),emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.calculus.connection.structure_constant(e_m,e_j,e_k,basis,metric),emmy.calculus.connection.structure_constant(e_m,e_k,e_j,basis,metric)),emmy.calculus.connection.structure_constant(e_j,e_k,e_m,basis,metric)))));
}),basis);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),basis);
});

//# sourceMappingURL=emmy.calculus.connection.js.map
