import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.abstract.function.js";
import "./emmy.calculus.manifold.js";
import "./emmy.calculus.vector_field.js";
import "./emmy.function.js";
import "./emmy.generic.js";
import "./emmy.operator.js";
import "./emmy.special.factorial.js";
import "./emmy.structure.js";
import "./emmy.util.js";
import "./emmy.util.aggregate.js";
import "./emmy.util.permute.js";
goog.provide('emmy.calculus.form_field');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519),new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316));
/**
 * Returns a form field that returns, for any supplied vector field `vf`, a
 *   manifold function [[manifold/zero-manifold-function]] that maps every input
 *   manifold `point` to the scalar value 0.
 */
emmy.calculus.form_field.ff_COLON_zero = (function emmy$calculus$form_field$ff_COLON_zero(_){
return emmy.calculus.manifold.zero_manifold_function;
});
/**
 * Returns the rank of the supplied differential form `f`. Functions are treated
 *   as differential forms of rank 0.
 * 
 *   Throws for any non differential form supplied.
 */
emmy.calculus.form_field.get_rank = (function emmy$calculus$form_field$get_rank(f){
if(emmy.operator.operator_QMARK_(f)){
var or__5162__auto__ = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(emmy.operator.context(f));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.util.illegal((""+"operator, but not a differential form: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)));
}
} else {
if(emmy.function$.function_QMARK_(f)){
return (0);
} else {
return emmy.util.illegal((""+"not a differential form: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)));

}
}
});
/**
 * Returns true if the supplied `f` is a form field operator, false otherwise.
 */
emmy.calculus.form_field.form_field_QMARK_ = (function emmy$calculus$form_field$form_field_QMARK_(ff){
var and__5160__auto__ = emmy.operator.operator_QMARK_(ff);
if(and__5160__auto__){
var subtype = new cljs.core.Keyword(null,"subtype","subtype",-2092672993).cljs$core$IFn$_invoke$arity$1(emmy.operator.context(ff));
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(subtype,new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851));
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if the supplied `f` is an [form field of rank
 *   n](https://en.wikipedia.org/wiki/Differential_form), false otherwise.
 * 
 *   A form-field of rank n is an operator that takes n vector fields to a
 *   real-valued function on the manifold.
 */
emmy.calculus.form_field.nform_field_QMARK_ = (function emmy$calculus$form_field$nform_field_QMARK_(f,n){
return ((emmy.calculus.form_field.form_field_QMARK_(f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,emmy.calculus.form_field.get_rank(f))));
});
/**
 * Returns true if the supplied `f` is
 *   a [One-form](https://en.wikipedia.org/wiki/One-form), false
 *   otherwise.
 * 
 *   A [One-form](https://en.wikipedia.org/wiki/One-form) takes a single vector
 *   field to a real-valued function on the manifold.
 */
emmy.calculus.form_field.oneform_field_QMARK_ = (function emmy$calculus$form_field$oneform_field_QMARK_(f){
return emmy.calculus.form_field.nform_field_QMARK_(f,(1));
});
/**
 * Given some form field `op`, returns a form field with the same context and
 *   its procedure replaced by `ff:zero`.
 * 
 *   The returned form field responds `true` to `g/zero?`.
 */
emmy.calculus.form_field.ff_COLON_zero_like = (function emmy$calculus$form_field$ff_COLON_zero_like(op){
if(emmy.calculus.form_field.form_field_QMARK_(op)){
} else {
throw (new Error("Assert failed: (form-field? op)"));
}

return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3(emmy.calculus.form_field.ff_COLON_zero,new cljs.core.Symbol(null,"ff:zero","ff:zero",628755951,null),emmy.operator.context(op));
});
/**
 * Returns true if the supplied form field `op` is a form field with a procedure
 *   equal to `ff:zero`, false otherwise.
 */
emmy.calculus.form_field.ff_COLON_zero_QMARK_ = (function emmy$calculus$form_field$ff_COLON_zero_QMARK_(op){
return ((emmy.calculus.form_field.form_field_QMARK_(op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.operator.procedure(op),emmy.calculus.form_field.ff_COLON_zero)));
});
var one_like = (function emmy$calculus$form_field$one_like(_){
return emmy.util.unsupported("form fields don't have an identity.");
});
var id_like = (function emmy$calculus$form_field$id_like(_){
return emmy.util.unsupported("form fields don't have a multiplicative identity.");
});
var identity_QMARK_ = (function emmy$calculus$form_field$identity_QMARK_(_){
return false;
});
var defaults_72139 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"zero?","zero?",-1314772630),emmy.calculus.form_field.ff_COLON_zero_QMARK_,new cljs.core.Keyword(null,"zero-like","zero-like",1759410522),emmy.calculus.form_field.ff_COLON_zero_like,new cljs.core.Keyword(null,"one-like","one-like",887133720),one_like,new cljs.core.Keyword(null,"identity?","identity?",1589858878),identity_QMARK_,new cljs.core.Keyword(null,"identity-like","identity-like",-98546347),id_like], null);
emmy.calculus.form_field.ff_context = (function emmy$calculus$form_field$ff_context(m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults_72139,m], 0));
});
/**
 * Accepts a function `f` and an optional symbolic `name`, and returns an n-form
 *   field, i.e., a subtype of [[emmy.operator/Operator]].
 * 
 *   `f` should be a function from n vector field arguments to a smooth real-valued
 *   function `g` of a manifold.
 * 
 *   If `n` is 0, the function will be called immediately and its return value
 *   returned.
 */
emmy.calculus.form_field.procedure__GT_nform_field = (function emmy$calculus$form_field$procedure__GT_nform_field(var_args){
var G__72093 = arguments.length;
switch (G__72093) {
case 2:
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$2 = (function (f,n){
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(f,n,new cljs.core.Symbol(null,"unnamed-nform-field","unnamed-nform-field",1835726242,null));
}));

(emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3 = (function (f,n,name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)));
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,name,emmy.calculus.form_field.ff_context(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),n], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),n,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args], null)));
}
}));

(emmy.calculus.form_field.procedure__GT_nform_field.cljs$lang$maxFixedArity = 3);

/**
 * Accepts a function `f` and an optional symbolic `name`, and returns a one-form
 *   field, i.e., a subtype of [[emmy.operator/Operator]].
 * 
 *   `f` should be a function from a vector field to a smooth real-valued function
 *   `g` of a manifold.
 */
emmy.calculus.form_field.procedure__GT_oneform_field = (function emmy$calculus$form_field$procedure__GT_oneform_field(var_args){
var G__72095 = arguments.length;
switch (G__72095) {
case 1:
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$1 = (function (f){
var name = new cljs.core.Symbol(null,"unnamed-1form-field","unnamed-1form-field",-518922876,null);
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(f,name);
}));

(emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2 = (function (f,name){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,name,emmy.calculus.form_field.ff_context(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),(1),new cljs.core.Keyword(null,"arguments","arguments",-1182834456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null)], null)));
}));

(emmy.calculus.form_field.procedure__GT_oneform_field.cljs$lang$maxFixedArity = 2);

/**
 * Takes:
 * 
 *   - a `down` tuple of `components` of the one-form field relative to
 *  `coordinate-system`
 *   - the `coordinate-system`
 * 
 *   And returns a procedure (not yet an operator!) that takes a structure of vector fields
 *   and produces a new structure of functions of manifold points.
 */
emmy.calculus.form_field.oneform_field_procedure = (function emmy$calculus$form_field$oneform_field_procedure(components,coordinate_system){
return (function (vf_components){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (vf){
if(emmy.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vf/vector-field? vf)"));
}

return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(components,emmy.calculus.vector_field.vector_field__GT_components(vf,coordinate_system)),emmy.calculus.manifold.chart(coordinate_system)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vf_components], 0));
});
});
/**
 * Takes:
 * 
 *   - a `down` tuple of `components` of the one-form field relative to
 *  `coordinate-system`
 *   - the `coordinate-system`
 * 
 *   And returns a full one-form field.
 * 
 *   A one-field field is an operator that takes a vector field to a real-valued
 *   function on the manifold.
 */
emmy.calculus.form_field.components__GT_oneform_field = (function emmy$calculus$form_field$components__GT_oneform_field(var_args){
var G__72097 = arguments.length;
switch (G__72097) {
case 2:
return emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$2 = (function (components,coordinate_system){
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"oneform-field","oneform-field",119367957,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(components),null,(1),null)))));
return emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3(components,coordinate_system,name);
}));

(emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3 = (function (components,coordinate_system,name){
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(emmy.calculus.form_field.oneform_field_procedure(components,coordinate_system),name);
}));

(emmy.calculus.form_field.components__GT_oneform_field.cljs$lang$maxFixedArity = 3);

/**
 * Given a one-form field `form` and a `coordinate-system`, returns a function
 *   from the coordinate representation of a manifold point to a coordinate
 *   representation of the coordinatized components of the form field at that
 *   point.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let-coordinates [[x y] R2-rect]
 *  (let [f (literal-oneform-field 'f R2-rect)]
 *    ((oneform-field->components f R2-rect)
 *     (up 'x0 'y0))))
 * 
 *   ;;=> (down (f_0 (up x0 y0))
 *   ;;         (f_1 (up x0 y0)))
 *   ```
 */
emmy.calculus.form_field.oneform_field__GT_components = (function emmy$calculus$form_field$oneform_field__GT_components(form,coordinate_system){
if(emmy.calculus.form_field.form_field_QMARK_(form)){
} else {
throw (new Error("Assert failed: (form-field? form)"));
}

var basis = emmy.calculus.vector_field.coordinate_system__GT_vector_basis(coordinate_system);
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(form.cljs$core$IFn$_invoke$arity$1 ? form.cljs$core$IFn$_invoke$arity$1(basis) : form.call(null,basis)),emmy.calculus.manifold.point(coordinate_system)], 0));
});
/**
 * Given a symbolic name `sym` and a `coordinate-system`, returns a one-form field
 *   consisting of literal real-valued functions from the coordinate system's
 *   dimension for each coordinate component.
 * 
 *   These functions are passed to [[components->oneform-field]], along with the
 *   supplied `coordinate-system` and symbolic name `sym`.
 * 
 *   For coordinate systems of dimension 1, `literal-form-field`'s component
 *   functions will accept a single non-structural argument.
 */
emmy.calculus.form_field.literal_oneform_field = (function emmy$calculus$form_field$literal_oneform_field(name,coordinate_system){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(coordinate_system));
var domain = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?(0):emmy.structure.up_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0))));
var range = emmy.structure.down_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
return emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3(emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(name,domain,range),coordinate_system,name);
});
emmy.calculus.form_field.coordinate_basis_oneform_field_procedure = (function emmy$calculus$form_field$coordinate_basis_oneform_field_procedure(var_args){
var args__5903__auto__ = [];
var len__5897__auto___72143 = arguments.length;
var i__5898__auto___72144 = (0);
while(true){
if((i__5898__auto___72144 < len__5897__auto___72143)){
args__5903__auto__.push((arguments[i__5898__auto___72144]));

var G__72145 = (i__5898__auto___72144 + (1));
i__5898__auto___72144 = G__72145;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$core$IFn$_invoke$arity$variadic = (function (coordinate_system,indices){
return (function (vf_structure){
var internal = (function emmy$calculus$form_field$internal(vf){
if(emmy.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vf/vector-field? vf)"));
}

var G__72101 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.component,indices),emmy.calculus.manifold.chart(coordinate_system)], 0));
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__72101) : vf.call(null,G__72101));
});
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(internal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vf_structure], 0));
});
}));

(emmy.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$lang$applyTo = (function (seq72098){
var G__72099 = cljs.core.first(seq72098);
var seq72098__$1 = cljs.core.next(seq72098);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72099,seq72098__$1);
}));

/**
 * Given some `coordinate-system`, a symbolic `name` and a sequence of indices
 *   into the structure of the coordinate system's representation, returns a
 *   one-form field.
 * 
 *   The returned one-form field at each structural spot takes a vector field and
 *   returns a function that takes the directional derivative in that coordinate's
 *   direction using the vector field.
 */
emmy.calculus.form_field.coordinate_basis_oneform_field = (function emmy$calculus$form_field$coordinate_basis_oneform_field(var_args){
var args__5903__auto__ = [];
var len__5897__auto___72146 = arguments.length;
var i__5898__auto___72147 = (0);
while(true){
if((i__5898__auto___72147 < len__5897__auto___72146)){
args__5903__auto__.push((arguments[i__5898__auto___72147]));

var G__72148 = (i__5898__auto___72147 + (1));
i__5898__auto___72147 = G__72148;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return emmy.calculus.form_field.coordinate_basis_oneform_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(emmy.calculus.form_field.coordinate_basis_oneform_field.cljs$core$IFn$_invoke$arity$variadic = (function (coordinate_system,name,indices){
var ofp = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.calculus.form_field.coordinate_basis_oneform_field_procedure,coordinate_system,indices);
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(emmy.function$.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.function$.memoize,ofp)),name);
}));

(emmy.calculus.form_field.coordinate_basis_oneform_field.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(emmy.calculus.form_field.coordinate_basis_oneform_field.cljs$lang$applyTo = (function (seq72102){
var G__72103 = cljs.core.first(seq72102);
var seq72102__$1 = cljs.core.next(seq72102);
var G__72104 = cljs.core.first(seq72102__$1);
var seq72102__$2 = cljs.core.next(seq72102__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72103,G__72104,seq72102__$2);
}));

/**
 * From the name of a coordinate, produce the name of the coordinate basis
 *   one-form field (as a symbol)
 */
emmy.calculus.form_field.coordinate_name__GT_ff_name = (function emmy$calculus$form_field$coordinate_name__GT_ff_name(n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1("d")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
/**
 * Given some `coordinate-system`, returns a structure of
 *   `coordinate-basis-oneform-field` instances.
 * 
 *   The one-form field at each structural spot takes a vector field and returns a
 *   function that takes the directional derivative in that coordinate's direction
 *   using the vector field.
 * 
 *   When applied as a function, the structure behaves equivalently to
 * 
 *   ```clojure
 *   (coordinate-basis-oneform-field <coordinate-system> 'ignored-name)
 *   ```
 * 
 *   With no indices supplied.
 */
emmy.calculus.form_field.coordinate_system__GT_oneform_basis = (function emmy$calculus$form_field$coordinate_system__GT_oneform_basis(coordinate_system){
return emmy.structure.map_chain((function (c_name,chain,_){
var ff_name = emmy.calculus.form_field.coordinate_name__GT_ff_name(c_name);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(emmy.calculus.form_field.coordinate_basis_oneform_field,coordinate_system,ff_name,chain);
}),emmy.calculus.manifold.coordinate_prototype(coordinate_system));
});
/**
 * Given a structure of `components` functions defined on manifold points and and
 *   a matching `oneform-basis` (of identical structure),
 * 
 *   Returns a new one-form field that
 * 
 *   - passes its vector-field argument to `oneform-basis`, returning a new
 *  equivalent structure with each slot populated by functions from a manifold
 *  point to the directional derivative (using the vector field) in that
 *  coordinate direction
 * 
 *   - contracts the result of that operation with the result of applying each
 *  component in `components` to the manifold point.
 * 
 *   NOTE:
 *   - This is for any basis, not just a coordinate basis
 *   - The `components` are evaluated at a manifold point, not its coordinates
 *   - Given a dual basis, you can retrieve the original components
 *  with [[oneform-field->basis-components]]
 */
emmy.calculus.form_field.basis_components__GT_oneform_field = (function emmy$calculus$form_field$basis_components__GT_oneform_field(components,oneform_basis){
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$1((function (vf){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(components,(oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(vf) : oneform_basis.call(null,vf)));
}));
});
/**
 * Given a structure `w` of and a vector field basis `vector-basis`, returns a new
 *   structure generated by applying the full vector basis to each element of `w`.
 * 
 *   Here's an example of how to use this function to round trip a structure of
 *   basis components:
 * 
 *   ```clojure
 *   (let [vb    (vf/coordinate-system->vector-basis coordsys)
 *      basis (coordinate-system->oneform-basis coordsys)
 *      components (down d:dx d:dy)]
 *  (= components
 *     (-> components
 *         (basis-components->oneform-field basis)
 *         (oneform-field->basis-components vb))))
 *   ```
 */
emmy.calculus.form_field.oneform_field__GT_basis_components = (function emmy$calculus$form_field$oneform_field__GT_basis_components(w,vector_basis){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
});
/**
 * One of the two incompatible definitions of differential.
 * 
 *   This differential is a special case of exterior derivative. The other one
 *   lives at [[map/differential]].
 */
emmy.calculus.form_field.function__GT_oneform_field = (function emmy$calculus$form_field$function__GT_oneform_field(f){
if(emmy.function$.function_QMARK_(f)){
} else {
throw (new Error("Assert failed: (f/function? f)"));
}

var op = (function (vf_structure){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (vf){
if(emmy.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vf/vector-field? vf)"));
}

return (function (m){
var fexpr__72105 = (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(f) : vf.call(null,f));
return (fexpr__72105.cljs$core$IFn$_invoke$arity$1 ? fexpr__72105.cljs$core$IFn$_invoke$arity$1(m) : fexpr__72105.call(null,m));
});
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vf_structure], 0));
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"d","d",-682293345,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(f),null,(1),null)))));
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(op,name);
});
/**
 * Alias for [[function->oneform-field]].
 *   One of the two incompatible definitions of differential.
 * 
 *   This differential is a special case of exterior derivative. The other one
 *   lives at [[map/differential]].
 */
emmy.calculus.form_field.differential_of_function = emmy.calculus.form_field.function__GT_oneform_field;
/**
 * Binary and unary cases of the wedge product.
 */
emmy.calculus.form_field.wedge2 = (function emmy$calculus$form_field$wedge2(var_args){
var G__72107 = arguments.length;
switch (G__72107) {
case 1:
return emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$1 = (function (form1){
return form1;
}));

(emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2 = (function (form1,form2){
var n1 = emmy.calculus.form_field.get_rank(form1);
var n2 = emmy.calculus.form_field.get_rank(form2);
if((((n1 === (0))) || ((n2 === (0))))){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(form1,form2);
} else {
var n = (n1 + n2);
var k = ((1) / (emmy.special.factorial.factorial(n1) * emmy.special.factorial.factorial(n2)));
var w = (function() { 
var G__72150__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),n)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Wrong number of args to wedge product: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))+" vs required "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)))+"\n"+"(= (count args) n)")));
}

return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (permutation,parity){
var vec__72108 = cljs.core.split_at(n1,permutation);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72108,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72108,(1),null);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(parity,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form1,a1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form2,a2)], 0));
}),emmy.util.permute.permutation_sequence(args),cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)))));
};
var G__72150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72151__i = 0, G__72151__a = new Array(arguments.length -  0);
while (G__72151__i < G__72151__a.length) {G__72151__a[G__72151__i] = arguments[G__72151__i + 0]; ++G__72151__i;}
  args = new cljs.core.IndexedSeq(G__72151__a,0,null);
} 
return G__72150__delegate.call(this,args);};
G__72150.cljs$lang$maxFixedArity = 0;
G__72150.cljs$lang$applyTo = (function (arglist__72152){
var args = cljs.core.seq(arglist__72152);
return G__72150__delegate(args);
});
G__72150.cljs$core$IFn$_invoke$arity$variadic = G__72150__delegate;
return G__72150;
})()
;
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"wedge","wedge",868448626,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(form1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(form2),null,(1),null))], 0))));
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(w,n,name);
}
}));

(emmy.calculus.form_field.wedge2.cljs$lang$maxFixedArity = 2);

/**
 * Computes the wedge product of the sequence `fs` of one-forms.
 * 
 *   Higher rank forms can be constructed from one-forms by wedging them together.
 *   This antisymmetric tensor product is computed as a determinant. The purpose of
 *   this is to allow us to use the construction dx^dy to compute the area
 *   described by the vectors that are given to it.
 * 
 *   See Spivak p275 v1 of 'Differential Geometry' to see the correct definition.
 *   The key is that the wedge of the coordinate basis forms had better be the
 *   volume element.
 */
emmy.calculus.form_field.wedge = (function emmy$calculus$form_field$wedge(var_args){
var G__72114 = arguments.length;
switch (G__72114) {
case 0:
return emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___72154 = arguments.length;
var i__5898__auto___72155 = (0);
while(true){
if((i__5898__auto___72155 < len__5897__auto___72154)){
args_arr__5922__auto__.push((arguments[i__5898__auto___72155]));

var G__72156 = (i__5898__auto___72155 + (1));
i__5898__auto___72155 = G__72156;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.constantly((1));
}));

(emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$1 = (function (f){
return f;
}));

(emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$variadic = (function (f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (r,l){
return emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2(l,r);
}),cljs.core.reverse(cljs.core.cons(f,fs)));
}));

/** @this {Function} */
(emmy.calculus.form_field.wedge.cljs$lang$applyTo = (function (seq72112){
var G__72113 = cljs.core.first(seq72112);
var seq72112__$1 = cljs.core.next(seq72112);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72113,seq72112__$1);
}));

(emmy.calculus.form_field.wedge.cljs$lang$maxFixedArity = (1));

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851),new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851)], null),(function (a,b){
return emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2(a,b);
}));
/**
 * Returns the alternation of the supplied differential `form`.
 */
emmy.calculus.form_field.Alt = (function emmy$calculus$form_field$Alt(form){
var n = emmy.calculus.form_field.get_rank(form);
if((n === (0))){
return form;
} else {
var alternation = (function() { 
var emmy$calculus$form_field$Alt_$_alternation__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),n)){
} else {
throw (new Error((""+"Assert failed: "+"Wrong number of args to alternation"+"\n"+"(= (count args) n)")));
}

return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(((1) / emmy.special.factorial.factorial(n)),(function (){var G__72116 = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (permutation,parity){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(parity,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form,permutation));
}),emmy.util.permute.permutation_sequence(args),cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1(G__72116) : emmy.util.aggregate.generic_sum.call(null,G__72116));
})());
};
var emmy$calculus$form_field$Alt_$_alternation = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72157__i = 0, G__72157__a = new Array(arguments.length -  0);
while (G__72157__i < G__72157__a.length) {G__72157__a[G__72157__i] = arguments[G__72157__i + 0]; ++G__72157__i;}
  args = new cljs.core.IndexedSeq(G__72157__a,0,null);
} 
return emmy$calculus$form_field$Alt_$_alternation__delegate.call(this,args);};
emmy$calculus$form_field$Alt_$_alternation.cljs$lang$maxFixedArity = 0;
emmy$calculus$form_field$Alt_$_alternation.cljs$lang$applyTo = (function (arglist__72158){
var args = cljs.core.seq(arglist__72158);
return emmy$calculus$form_field$Alt_$_alternation__delegate(args);
});
emmy$calculus$form_field$Alt_$_alternation.cljs$core$IFn$_invoke$arity$variadic = emmy$calculus$form_field$Alt_$_alternation__delegate;
return emmy$calculus$form_field$Alt_$_alternation;
})()
;
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(alternation,n,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"Alt","Alt",-1183702663,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(form),null,(1),null))))));
}
});
emmy.calculus.form_field.tensor_product2 = (function emmy$calculus$form_field$tensor_product2(var_args){
var G__72118 = arguments.length;
switch (G__72118) {
case 1:
return emmy.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$1 = (function (t1){
return t1;
}));

(emmy.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$2 = (function (t1,t2){
var n1 = emmy.calculus.form_field.get_rank(t1);
var n2 = emmy.calculus.form_field.get_rank(t2);
if((((n1 === (0))) || ((n2 === (0))))){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(t1,t2);
} else {
var n = (n1 + n2);
var tp = (function() { 
var G__72160__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),n)){
} else {
throw (new Error((""+"Assert failed: "+"Wrong number of args to tensor product"+"\n"+"(= (count args) n)")));
}

var vec__72119 = cljs.core.split_at(n1,args);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72119,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72119,(1),null);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(t1,a1),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(t2,a2));
};
var G__72160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72161__i = 0, G__72161__a = new Array(arguments.length -  0);
while (G__72161__i < G__72161__a.length) {G__72161__a[G__72161__i] = arguments[G__72161__i + 0]; ++G__72161__i;}
  args = new cljs.core.IndexedSeq(G__72161__a,0,null);
} 
return G__72160__delegate.call(this,args);};
G__72160.cljs$lang$maxFixedArity = 0;
G__72160.cljs$lang$applyTo = (function (arglist__72162){
var args = cljs.core.seq(arglist__72162);
return G__72160__delegate(args);
});
G__72160.cljs$core$IFn$_invoke$arity$variadic = G__72160__delegate;
return G__72160;
})()
;
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(tp,n,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"tensor-product","tensor-product",553408668,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(t1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(t2),null,(1),null))], 0)))));
}
}));

(emmy.calculus.form_field.tensor_product2.cljs$lang$maxFixedArity = 2);

emmy.calculus.form_field.w2 = (function emmy$calculus$form_field$w2(var_args){
var G__72123 = arguments.length;
switch (G__72123) {
case 1:
return emmy.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$1 = (function (form1){
return form1;
}));

(emmy.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$2 = (function (form1,form2){
var n1 = emmy.calculus.form_field.get_rank(form1);
var n2 = emmy.calculus.form_field.get_rank(form2);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((emmy.special.factorial.factorial((n1 + n2)) / (emmy.special.factorial.factorial(n1) * emmy.special.factorial.factorial(n2))),emmy.calculus.form_field.Alt(emmy.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$2(form1,form2)));
}));

(emmy.calculus.form_field.w2.cljs$lang$maxFixedArity = 2);

/**
 * Alternative definition of [[wedge]] in terms of alternation.
 */
emmy.calculus.form_field.alt_wedge = (function emmy$calculus$form_field$alt_wedge(var_args){
var args__5903__auto__ = [];
var len__5897__auto___72164 = arguments.length;
var i__5898__auto___72165 = (0);
while(true){
if((i__5898__auto___72165 < len__5897__auto___72164)){
args__5903__auto__.push((arguments[i__5898__auto___72165]));

var G__72166 = (i__5898__auto___72165 + (1));
i__5898__auto___72165 = G__72166;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.calculus.form_field.alt_wedge.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.calculus.form_field.alt_wedge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(emmy.calculus.form_field.w2,cljs.core.constantly((1)),args);
}));

(emmy.calculus.form_field.alt_wedge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.calculus.form_field.alt_wedge.cljs$lang$applyTo = (function (seq72124){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72124));
}));

emmy.calculus.form_field.exterior_derivative_procedure = (function emmy$calculus$form_field$exterior_derivative_procedure(kform){
var k = emmy.calculus.form_field.get_rank(kform);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(0))){
return (emmy.calculus.form_field.differential_of_function.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.form_field.differential_of_function.cljs$core$IFn$_invoke$arity$1(kform) : emmy.calculus.form_field.differential_of_function.call(null,kform));
} else {
var without = (function (p1__72125_SHARP_,p2__72126_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__72125_SHARP_,p2__72126_SHARP_),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((p1__72125_SHARP_ + (1)),p2__72126_SHARP_));
});
var k_PLUS_1form = (function() { 
var G__72167__delegate = function (vectors){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vectors),(k + (1)))){
} else {
throw (new Error("Assert failed: (= (count vectors) (inc k))"));
}

return (function (point){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.point__GT_manifold(point));
if((k < n)){
var G__72127 = (function (i){
var rest = without(i,vectors);
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(((cljs.core.even_QMARK_(i))?(1):(-1)),(function (){var fexpr__72132 = (function (){var G__72134 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kform,rest);
var fexpr__72133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vectors,i);
return (fexpr__72133.cljs$core$IFn$_invoke$arity$1 ? fexpr__72133.cljs$core$IFn$_invoke$arity$1(G__72134) : fexpr__72133.call(null,G__72134));
})();
return (fexpr__72132.cljs$core$IFn$_invoke$arity$1 ? fexpr__72132.cljs$core$IFn$_invoke$arity$1(point) : fexpr__72132.call(null,point));
})()),(function (){var G__72135 = (function (j){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(((cljs.core.even_QMARK_((i + j)))?(1):(-1)),(function (){var fexpr__72138 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kform,cljs.core.cons(emmy.operator.commutator(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vectors,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vectors,j)),without((j - (1)),rest)));
return (fexpr__72138.cljs$core$IFn$_invoke$arity$1 ? fexpr__72138.cljs$core$IFn$_invoke$arity$1(point) : fexpr__72138.call(null,point));
})());
});
var G__72136 = (i + (1));
var G__72137 = (k + (1));
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__72135,G__72136,G__72137) : emmy.util.aggregate.generic_sum.call(null,G__72135,G__72136,G__72137));
})());
});
var G__72128 = (0);
var G__72129 = (k + (1));
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__72127,G__72128,G__72129) : emmy.util.aggregate.generic_sum.call(null,G__72127,G__72128,G__72129));
} else {
return (0);
}
});
};
var G__72167 = function (var_args){
var vectors = null;
if (arguments.length > 0) {
var G__72168__i = 0, G__72168__a = new Array(arguments.length -  0);
while (G__72168__i < G__72168__a.length) {G__72168__a[G__72168__i] = arguments[G__72168__i + 0]; ++G__72168__i;}
  vectors = new cljs.core.IndexedSeq(G__72168__a,0,null);
} 
return G__72167__delegate.call(this,vectors);};
G__72167.cljs$lang$maxFixedArity = 0;
G__72167.cljs$lang$applyTo = (function (arglist__72169){
var vectors = cljs.core.seq(arglist__72169);
return G__72167__delegate(vectors);
});
G__72167.cljs$core$IFn$_invoke$arity$variadic = G__72167__delegate;
return G__72167;
})()
;
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(k_PLUS_1form,(k + (1)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"d","d",-682293345,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(kform),null,(1),null))))));
}
});
emmy.calculus.form_field.exterior_derivative = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.calculus.form_field.exterior_derivative_procedure,new cljs.core.Symbol(null,"d","d",-682293345,null));
emmy.calculus.form_field.d = emmy.calculus.form_field.exterior_derivative;

//# sourceMappingURL=emmy.calculus.form_field.js.map
