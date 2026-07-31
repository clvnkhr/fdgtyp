import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.calculus.basis.js";
import "./emmy.calculus.covariant.js";
import "./emmy.calculus.derivative.js";
import "./emmy.calculus.form_field.js";
import "./emmy.calculus.hodge_star.js";
import "./emmy.calculus.manifold.js";
import "./emmy.calculus.metric.js";
import "./emmy.calculus.vector_field.js";
import "./emmy.function.js";
import "./emmy.generic.js";
import "./emmy.matrix.js";
import "./emmy.operator.js";
import "./emmy.structure.js";
goog.provide('emmy.calculus.vector_calculus');
/**
 * Operator that takes a function `f` and returns a new function that
 *   calculates the [Gradient](https://en.wikipedia.org/wiki/Gradient) of `f`.
 * 
 *   The related [[emmy.env/D]] operator returns a function that produces a
 *   structure of the opposite orientation as [[Grad]]. Both of these functions use
 *   reverse-mode automatic differentiation.
 */
emmy.calculus.vector_calculus.Grad = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (f){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.structure.opposite,(emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(f) : emmy.calculus.derivative.D.call(null,f))], 0));
}),new cljs.core.Symbol(null,"Grad","Grad",-1533675656,null));
/**
 * [[gradient]] implements equation (10.3) in Functional Differential Geometry,
 *   defined on page 154.
 */
emmy.calculus.vector_calculus.gradient = (function emmy$calculus$vector_calculus$gradient(metric,basis){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.calculus.metric.raise(metric,basis),emmy.calculus.form_field.d], 0));
});
/**
 * Operator that takes a function `f` and returns a function that
 *   calculates the [Divergence](https://en.wikipedia.org/wiki/Divergence) of
 *   `f` at its input point.
 * 
 *   The divergence is a one-level contraction of the gradient.
 */
emmy.calculus.vector_calculus.Div = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.trace,emmy.calculus.vector_calculus.Grad], 0)),new cljs.core.Symbol(null,"Div","Div",2085306215,null));
/**
 * Both arities of [[divergence]] are defined on page 156 of Functional Differential Geometry.
 */
emmy.calculus.vector_calculus.divergence = (function emmy$calculus$vector_calculus$divergence(var_args){
var G__72478 = arguments.length;
switch (G__72478) {
case 1:
return emmy.calculus.vector_calculus.divergence.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.vector_calculus.divergence.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.vector_calculus.divergence.cljs$core$IFn$_invoke$arity$1 = (function (Cartan){
var basis = emmy.calculus.covariant.Cartan__GT_basis(Cartan);
var nabla = emmy.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$1(Cartan);
return (function (v){
return (function (point){
return emmy.calculus.basis.contract((function (ei,wi){
var fexpr__72496 = (function (){var G__72497 = (function (){var fexpr__72498 = nabla(ei);
return (fexpr__72498.cljs$core$IFn$_invoke$arity$1 ? fexpr__72498.cljs$core$IFn$_invoke$arity$1(v) : fexpr__72498.call(null,v));
})();
return (wi.cljs$core$IFn$_invoke$arity$1 ? wi.cljs$core$IFn$_invoke$arity$1(G__72497) : wi.call(null,G__72497));
})();
return (fexpr__72496.cljs$core$IFn$_invoke$arity$1 ? fexpr__72496.cljs$core$IFn$_invoke$arity$1(point) : fexpr__72496.call(null,point));
}),basis);
});
});
}));

(emmy.calculus.vector_calculus.divergence.cljs$core$IFn$_invoke$arity$2 = (function (metric,orthonormal_basis){
var star = emmy.calculus.hodge_star.Hodge_star(metric,orthonormal_basis);
var flat = emmy.calculus.metric.lower(metric);
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([star,emmy.calculus.form_field.d,star,flat], 0));
}));

(emmy.calculus.vector_calculus.divergence.cljs$lang$maxFixedArity = 2);

/**
 * Operator that takes a function `f` and returns a function that
 *   calculates the [Curl](https://en.wikipedia.org/wiki/Curl_(mathematics)) of `f`
 *   at its input point.
 * 
 *   `f` must be a function from $\mathbb{R}^3 \to \mathbb{R}^3$.
 */
emmy.calculus.vector_calculus.Curl = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (f_triple){
var vec__72500 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.calculus.derivative.partial,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
var Dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72500,(0),null);
var Dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72500,(1),null);
var Dz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72500,(2),null);
var fx = emmy.function$.get.cljs$core$IFn$_invoke$arity$2(f_triple,(0));
var fy = emmy.function$.get.cljs$core$IFn$_invoke$arity$2(f_triple,(1));
var fz = emmy.function$.get.cljs$core$IFn$_invoke$arity$2(f_triple,(2));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._.cljs$core$IFn$_invoke$arity$2((Dy.cljs$core$IFn$_invoke$arity$1 ? Dy.cljs$core$IFn$_invoke$arity$1(fz) : Dy.call(null,fz)),(Dz.cljs$core$IFn$_invoke$arity$1 ? Dz.cljs$core$IFn$_invoke$arity$1(fy) : Dz.call(null,fy))),emmy.generic._.cljs$core$IFn$_invoke$arity$2((Dz.cljs$core$IFn$_invoke$arity$1 ? Dz.cljs$core$IFn$_invoke$arity$1(fx) : Dz.call(null,fx)),(Dx.cljs$core$IFn$_invoke$arity$1 ? Dx.cljs$core$IFn$_invoke$arity$1(fz) : Dx.call(null,fz))),emmy.generic._.cljs$core$IFn$_invoke$arity$2((Dx.cljs$core$IFn$_invoke$arity$1 ? Dx.cljs$core$IFn$_invoke$arity$1(fy) : Dx.call(null,fy)),(Dy.cljs$core$IFn$_invoke$arity$1 ? Dy.cljs$core$IFn$_invoke$arity$1(fx) : Dy.call(null,fx)))], 0));
}),new cljs.core.Symbol(null,"Curl","Curl",797096696,null));
/**
 * [[curl]] implements equation (10.7) of Functional Differential Geometry,
 *   defined on page 155.
 */
emmy.calculus.vector_calculus.curl = (function emmy$calculus$vector_calculus$curl(metric,orthonormal_basis){
var star = emmy.calculus.hodge_star.Hodge_star(metric,orthonormal_basis);
var sharp = emmy.calculus.metric.raise(metric,orthonormal_basis);
var flat = emmy.calculus.metric.lower(metric);
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sharp,star,emmy.calculus.form_field.d,flat], 0));
});
/**
 * Operator that takes a function `f` and returns a function that calculates
 *   the [Vector
 *   Laplacian](https://en.wikipedia.org/wiki/Laplace_operator#Vector_Laplacian) of
 *   `f` at its input point.
 */
emmy.calculus.vector_calculus.Lap = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.trace,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.calculus.vector_calculus.Grad,emmy.calculus.vector_calculus.Grad)], 0)),new cljs.core.Symbol(null,"Lap","Lap",25592799,null));
emmy.calculus.vector_calculus.Laplacian = (function emmy$calculus$vector_calculus$Laplacian(metric,orthonormal_basis){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.calculus.vector_calculus.divergence.cljs$core$IFn$_invoke$arity$2(metric,orthonormal_basis),emmy.calculus.vector_calculus.gradient(metric,orthonormal_basis)], 0));
});
emmy.calculus.vector_calculus.coordinate_system__GT_Lame_coefficients = (function emmy$calculus$vector_calculus$coordinate_system__GT_Lame_coefficients(coordinate_system){
var gij = emmy.calculus.metric.coordinate_system__GT_metric_components(coordinate_system);
if(emmy.matrix.diagonal_QMARK_(gij)){
} else {
throw (new Error("Assert failed: (matrix/diagonal? gij)"));
}

var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(coordinate_system));
return emmy.structure.generate(n,new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),(function (i){
return emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(gij,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null)));
}));
});
emmy.calculus.vector_calculus.coordinate_system__GT_orthonormal_vector_basis = (function emmy$calculus$vector_calculus$coordinate_system__GT_orthonormal_vector_basis(coordsys){
var vector_basis = emmy.calculus.vector_field.coordinate_system__GT_vector_basis(coordsys);
var Lame_coefs = emmy.calculus.vector_calculus.coordinate_system__GT_Lame_coefficients(coordsys);
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(coordsys));
return emmy.structure.generate(n,new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),(function (i){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vector_basis,i),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(Lame_coefs,i),emmy.calculus.manifold.chart(coordsys)], 0))));
}));
});

//# sourceMappingURL=emmy.calculus.vector_calculus.js.map
