goog.provide('emmy.util.def');
/**
 * I borrowed this lovely, mysterious macro from `macrovich`:
 * https://github.com/cgrand/macrovich. This allows us to fork behavior inside
 * of a macro at macroexpansion time, not at read time.
 */
emmy.util.def.fork = (function emmy$util$def$fork(var_args){
var args__5903__auto__ = [];
var len__5897__auto___26097 = arguments.length;
var i__5898__auto___26098 = (0);
while(true){
if((i__5898__auto___26098 < len__5897__auto___26097)){
args__5903__auto__.push((arguments[i__5898__auto___26098]));

var G__26099 = (i__5898__auto___26098 + (1));
i__5898__auto___26098 = G__26099;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return emmy.util.def.fork.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(emmy.util.def.fork.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__26038){
var map__26039 = p__26038;
var map__26039__$1 = cljs.core.__destructure_map(map__26039);
var cljs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26039__$1,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
var clj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26039__$1,new cljs.core.Keyword(null,"clj","clj",-660495428));
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
if(cljs.core.contains_QMARK_(_AMPERSAND_env__$1,new cljs.core.Symbol(null,"&env","&env",-919163083,null))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs__$1,null,(1),null)),(new cljs.core.List(null,clj,null,(1),null))], 0))));
} else {
return cljs__$1;

}
}));

(emmy.util.def.fork.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(emmy.util.def.fork.cljs$lang$applyTo = (function (seq26012){
var G__26013 = cljs.core.first(seq26012);
var seq26012__$1 = cljs.core.next(seq26012);
var G__26014 = cljs.core.first(seq26012__$1);
var seq26012__$2 = cljs.core.next(seq26012__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26013,G__26014,seq26012__$2);
}));

emmy.util.def.lowercase_symbols = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.symbol,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(123)));
/**
 * returns a list of `:arglists` entries appropriate for a generic function with
 *   arities between `a` and `b` inclusive.
 */
emmy.util.def.arglists = (function emmy$util$def$arglists(a,b){
var arities = (cljs.core.truth_(b)?cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(b + (1))):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26051_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(p1__26051_SHARP_),emmy.util.def.lowercase_symbols);
}),arities);
});
/**
 * Defines a multifn using the provided symbol. Arranges for the multifn
 *   to answer the :arity message, reporting either `[:exactly a]` or
 *   `[:between a b]` according to the arguments given.
 * 
 *   - `arities` can be either a single or a vector of 2 numbers.
 * 
 *   The `options` allowed differs slightly from `defmulti`:
 * 
 *   - the first optional argument is a docstring.
 * 
 *   - the second optional argument is a dict of metadata. When you query the
 *   defined multimethod with a keyword, it will pass that keyword along as a query
 *   to this metadata map. (`:arity` is always overridden if supplied, and `:name`
 *   defaults to the symbol `f`.)
 * 
 *   Any remaining options are passed along to `defmulti`.
 */
emmy.util.def.defgeneric = (function emmy$util$def$defgeneric(var_args){
var args__5903__auto__ = [];
var len__5897__auto___26100 = arguments.length;
var i__5898__auto___26101 = (0);
while(true){
if((i__5898__auto___26101 < len__5897__auto___26100)){
args__5903__auto__.push((arguments[i__5898__auto___26101]));

var G__26102 = (i__5898__auto___26101 + (1));
i__5898__auto___26101 = G__26102;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((4) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((4)),(0),null)):null);
return emmy.util.def.defgeneric.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5904__auto__);
});

(emmy.util.def.defgeneric.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,f,arities,options){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
var vec__26083 = ((cljs.core.vector_QMARK_(arities))?arities:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arities], null));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26083,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26083,(1),null);
var arity = (cljs.core.truth_(b)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),a], null));
var docstring = ((typeof cljs.core.first(options) === 'string')?(""+"generic "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)+".\n\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(options))):(""+"generic "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)));
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var vec__26086 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(options__$1),cljs.core.next(options__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,options__$1], null));
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26086,(0),null);
var options__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26086,(1),null);
var kwd_klass = emmy.util.def.fork.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"clj","clj",-660495428),cljs.core.Keyword,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)], 0));
var attr__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attr,new cljs.core.Keyword(null,"arity","arity",-1808556135),arity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(attr,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))))], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,emmy.util.def.arglists(a,b),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("emmy.value","argument-kind","emmy.value/argument-kind",940335956,null),null,(1),null)),options__$2], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,kwd_klass,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"k__26069__auto__","k__26069__auto__",-364921051,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,attr__$1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__26069__auto__","k__26069__auto__",-364921051,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(emmy.util.def.defgeneric.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(emmy.util.def.defgeneric.cljs$lang$applyTo = (function (seq26072){
var G__26073 = cljs.core.first(seq26072);
var seq26072__$1 = cljs.core.next(seq26072);
var G__26074 = cljs.core.first(seq26072__$1);
var seq26072__$2 = cljs.core.next(seq26072__$1);
var G__26075 = cljs.core.first(seq26072__$2);
var seq26072__$3 = cljs.core.next(seq26072__$2);
var G__26076 = cljs.core.first(seq26072__$3);
var seq26072__$4 = cljs.core.next(seq26072__$3);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26073,G__26074,G__26075,G__26076,seq26072__$4);
}));

emmy.util.def.update_some = (function emmy$util$def$update_some(m,fns){
return cljs.core.reduce_kv((function (m__$1,k,f){
var temp__5827__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
if((temp__5827__auto__ == null)){
return m__$1;
} else {
var v = temp__5827__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}
}),m,fns);
});
emmy.util.def.var_meta = (function emmy$util$def$var_meta(env,sym){
var vr = cljs.analyzer.api.resolve(env,sym);
if(cljs.core.map_QMARK_(vr)){
return vr;
} else {
return cljs.core.meta(vr);
}
});
/**
 * Given some namespace `ns`, returns a function of some binding symbol and a
 *   form to bind. The function returns either
 * 
 *   - A form like `(def ~sym ~form)`, if `sym` is not currently bound into `ns`
 * 
 *   - If `sym` is bound already, returns a form that emits a warning and then
 *  uses `ns-unmap` and `intern` to reassign the binding.
 * 
 *   In Clojure, this behavior matches redefinitions of symbols bound in
 *   `clojure.core`. Symbols bound with `def` that are already imported from other
 *   namespaces cause an exception, hence this more careful workaround.
 * 
 *   (In ClojureScript, only forms like `(def ~sym ~form)` are emitted, since the
 *   compiler does not currently error in case 2 and already handles emitting the
 *   warning for us.)
 */
emmy.util.def.careful_def = (function emmy$util$def$careful_def(_AMPERSAND_form,_AMPERSAND_env,sym,form){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
var value_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+"-value"));
if(cljs.core.truth_(new cljs.core.Keyword(null,"sci?","sci?",2029704845).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env__$1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,value_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ns-unmap","cljs.core/ns-unmap",-1559056406,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,value_sym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ns-unmap","cljs.core/ns-unmap",-1559056406,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,value_sym,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0))));
}
});

//# sourceMappingURL=emmy.util.def.js.map
