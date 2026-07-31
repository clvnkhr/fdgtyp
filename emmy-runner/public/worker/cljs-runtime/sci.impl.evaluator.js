import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./sci.impl.deftype.js";
import "./sci.impl.interop.js";
import "./sci.impl.macros.js";
import "./sci.impl.records.js";
import "./sci.impl.types.js";
import "./sci.impl.utils.js";
import "./sci.impl.vars.js";
goog.provide('sci.impl.evaluator');
sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = sci.impl.types.eval(init,ctx,bindings);
var m__$1 = sci.impl.types.eval(m,ctx,bindings);
var cnn = sci.impl.types.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.utils.var_QMARK_(prev))))?(new sci.lang.Var(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name))),cljs.core.meta(prev),false,false,null)):prev);
var v = (((sci.impl.utils.var_unbound === init__$1))?(function (){var G__74854 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__74854,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__74854;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__74856 = arguments.length;
switch (G__74856) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = sci.impl.types.eval(case_val,ctx,bindings);
var found = cljs.core.get.cljs$core$IFn$_invoke$arity$3(case_map,v,new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426));
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426),found)){
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))));
} else {
return sci.impl.types.eval(found,ctx,bindings);
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = sci.impl.types.eval(case_val,ctx,bindings);
var found = cljs.core.get.cljs$core$IFn$_invoke$arity$3(case_map,v,new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426));
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426),found)){
return sci.impl.types.eval(case_default,ctx,bindings);
} else {
return sci.impl.types.eval(found,ctx,bindings);
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$,sci_error){
try{var _STAR_in_try_STAR__orig_val__74868 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__74869 = (function (){var or__5162__auto__ = (cljs.core.truth_(sci_error)?new cljs.core.Keyword("sci","error","sci/error",-979082803):null);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = cljs.core.seq(catches);
if(or__5162__auto____$1){
return or__5162__auto____$1;
} else {
return sci.impl.utils._STAR_in_try_STAR_;
}
}
})();
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__74869);

try{return sci.impl.types.eval(body,ctx,bindings);
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__74868);
}}catch (e74861){var e = e74861;
var temp__5823__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"default","default",-1987822328),clazz);
if(or__5162__auto__){
return or__5162__auto__;
} else {
if((clazz instanceof sci.impl.types.NodeR)){
var c__5196__auto__ = sci.impl.types.eval(clazz,ctx,bindings);
var x__5197__auto__ = e;
return (x__5197__auto__ instanceof c__5196__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){
(bindings[new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805).cljs$core$IFn$_invoke$arity$1(c)] = e);

return sci.impl.types.eval(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c),ctx,bindings);
})()
], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__74864 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74864,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74864,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
}finally {sci.impl.types.eval(finally$,ctx,bindings);
}});
sci.impl.evaluator.allowed_instance_method_invocation = (function sci$impl$evaluator$allowed_instance_method_invocation(ctx,bindings,instance_expr,method_str,args,arg_count){
var instance_expr_STAR_ = sci.impl.types.eval(instance_expr,ctx,bindings);
return sci.impl.interop.invoke_instance_method(ctx,bindings,instance_expr_STAR_,null,method_str,args,arg_count);
});
sci.impl.evaluator.allowed_instance_field_invocation = (function sci$impl$evaluator$allowed_instance_field_invocation(ctx,bindings,instance_expr,method_str){
var instance_expr_STAR_ = sci.impl.types.eval(instance_expr,ctx,bindings);
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,null,method_str);
});
sci.impl.evaluator.none_sentinel = (new Object());
sci.impl.evaluator.get_from_type = (function sci$impl$evaluator$get_from_type(instance,method_str,args){
if((args.length === (0))){
if((instance instanceof sci.impl.records.SciRecord)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(instance,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str),sci.impl.evaluator.none_sentinel);
} else {
if((instance instanceof sci.impl.deftype.SciType)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(instance.sci$impl$types$IBox$getVal$arity$1(null),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(method_str),sci.impl.evaluator.none_sentinel);
} else {
return sci.impl.evaluator.none_sentinel;
}
}
} else {
return sci.impl.evaluator.none_sentinel;
}
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed,arg_count){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = sci.impl.types.eval(instance_expr,ctx,bindings);
var v = sci.impl.evaluator.get_from_type(instance_expr_STAR_,method_str,args);
if((!((sci.impl.evaluator.none_sentinel === v)))){
return v;
} else {
var instance_class = (function (){var or__5162__auto__ = tag_class;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var env = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(env);
var allowed_QMARK_ = (function (){var or__5162__auto__ = allowed;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)+" on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)+" not allowed!"),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
return sci.impl.interop.invoke_instance_method(ctx,bindings,instance_expr_STAR_,target_class,method_str,args,arg_count);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__74897 = arguments.length;
switch (G__74897) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = sci.impl.types.eval(sym,ctx,bindings);
var res = cljs.core.second((function (){var fexpr__74928 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__74928.cljs$core$IFn$_invoke$arity$3 ? fexpr__74928.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__74928.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.NodeR)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5903__auto__ = [];
var len__5897__auto___75250 = arguments.length;
var i__5898__auto___75251 = (0);
while(true){
if((i__5898__auto___75251 < len__5897__auto___75250)){
args__5903__auto__.push((arguments[i__5898__auto___75251]));

var G__75252 = (i__5898__auto___75251 + (1));
i__5898__auto___75251 = G__75252;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74929_SHARP_){
if(((cljs.core.seq_QMARK_(p1__74929_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__74929_SHARP_))))){
return cljs.core.second(p1__74929_SHARP_);
} else {
return p1__74929_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__74932 = (((spec instanceof cljs.core.Symbol))?(function (){var s = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec));
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74932,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74932,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)):class$));
var temp__5823__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5823__auto__)){
var clazz = temp__5823__auto__;
var cnn = sci.impl.utils.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5823__auto____$1 = (function (){var rec_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sci.impl.utils.demunge((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$))));
var rec_var = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),rec_ns,class$], null));
return rec_var;
})();
if(cljs.core.truth_(temp__5823__auto____$1)){
var rec_var = temp__5823__auto____$1;
var cnn = sci.impl.utils.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refers","refers",158076809),class$], null),rec_var);

return cljs.core.deref(rec_var);
} else {
throw (new Error((""+"Unable to resolve classname: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name))));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq74930){
var G__74931 = cljs.core.first(seq74930);
var seq74930__$1 = cljs.core.next(seq74930);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74931,seq74930__$1);
}));

sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__75143 = cljs.core.count(args);
switch (G__75143) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg74952 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg74952) : f.call(null,arg74952));

break;
case (2):
var arg74953 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg74954 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg74953,arg74954) : f.call(null,arg74953,arg74954));

break;
case (3):
var arg74955 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg74956 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg74957 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg74955,arg74956,arg74957) : f.call(null,arg74955,arg74956,arg74957));

break;
case (4):
var arg74958 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg74959 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg74960 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg74961 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg74958,arg74959,arg74960,arg74961) : f.call(null,arg74958,arg74959,arg74960,arg74961));

break;
case (5):
var arg74962 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg74963 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg74964 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg74965 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg74966 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg74962,arg74963,arg74964,arg74965,arg74966) : f.call(null,arg74962,arg74963,arg74964,arg74965,arg74966));

break;
case (6):
var arg74967 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg74968 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg74969 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg74970 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg74971 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg74972 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg74967,arg74968,arg74969,arg74970,arg74971,arg74972) : f.call(null,arg74967,arg74968,arg74969,arg74970,arg74971,arg74972));

break;
case (7):
var arg74973 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg74974 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg74975 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg74976 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg74977 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg74978 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg74979 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg74973,arg74974,arg74975,arg74976,arg74977,arg74978,arg74979) : f.call(null,arg74973,arg74974,arg74975,arg74976,arg74977,arg74978,arg74979));

break;
case (8):
var arg74980 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg74981 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg74982 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg74983 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg74984 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg74985 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg74986 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg74987 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg74980,arg74981,arg74982,arg74983,arg74984,arg74985,arg74986,arg74987) : f.call(null,arg74980,arg74981,arg74982,arg74983,arg74984,arg74985,arg74986,arg74987));

break;
case (9):
var arg74988 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg74989 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg74990 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg74991 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg74992 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg74993 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg74994 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg74995 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg74996 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg74988,arg74989,arg74990,arg74991,arg74992,arg74993,arg74994,arg74995,arg74996) : f.call(null,arg74988,arg74989,arg74990,arg74991,arg74992,arg74993,arg74994,arg74995,arg74996));

break;
case (10):
var arg74997 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg74998 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg74999 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75000 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75001 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75002 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75003 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75004 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75005 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75006 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg74997,arg74998,arg74999,arg75000,arg75001,arg75002,arg75003,arg75004,arg75005,arg75006) : f.call(null,arg74997,arg74998,arg74999,arg75000,arg75001,arg75002,arg75003,arg75004,arg75005,arg75006));

break;
case (11):
var arg75007 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75008 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75009 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75010 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75011 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75012 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75013 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75014 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75015 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75016 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75017 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg75007,arg75008,arg75009,arg75010,arg75011,arg75012,arg75013,arg75014,arg75015,arg75016,arg75017) : f.call(null,arg75007,arg75008,arg75009,arg75010,arg75011,arg75012,arg75013,arg75014,arg75015,arg75016,arg75017));

break;
case (12):
var arg75018 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75019 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75020 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75021 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75022 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75023 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75024 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75025 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75026 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75027 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75028 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75029 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg75018,arg75019,arg75020,arg75021,arg75022,arg75023,arg75024,arg75025,arg75026,arg75027,arg75028,arg75029) : f.call(null,arg75018,arg75019,arg75020,arg75021,arg75022,arg75023,arg75024,arg75025,arg75026,arg75027,arg75028,arg75029));

break;
case (13):
var arg75030 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75031 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75032 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75033 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75034 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75035 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75036 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75037 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75038 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75039 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75040 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75041 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75042 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg75030,arg75031,arg75032,arg75033,arg75034,arg75035,arg75036,arg75037,arg75038,arg75039,arg75040,arg75041,arg75042) : f.call(null,arg75030,arg75031,arg75032,arg75033,arg75034,arg75035,arg75036,arg75037,arg75038,arg75039,arg75040,arg75041,arg75042));

break;
case (14):
var arg75043 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75044 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75045 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75046 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75047 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75048 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75049 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75050 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75051 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75052 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75053 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75054 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75055 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75056 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg75043,arg75044,arg75045,arg75046,arg75047,arg75048,arg75049,arg75050,arg75051,arg75052,arg75053,arg75054,arg75055,arg75056) : f.call(null,arg75043,arg75044,arg75045,arg75046,arg75047,arg75048,arg75049,arg75050,arg75051,arg75052,arg75053,arg75054,arg75055,arg75056));

break;
case (15):
var arg75057 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75058 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75059 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75060 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75061 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75062 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75063 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75064 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75065 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75066 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75067 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75068 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75069 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75070 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg75071 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg75057,arg75058,arg75059,arg75060,arg75061,arg75062,arg75063,arg75064,arg75065,arg75066,arg75067,arg75068,arg75069,arg75070,arg75071) : f.call(null,arg75057,arg75058,arg75059,arg75060,arg75061,arg75062,arg75063,arg75064,arg75065,arg75066,arg75067,arg75068,arg75069,arg75070,arg75071));

break;
case (16):
var arg75072 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75073 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75074 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75075 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75076 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75077 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75078 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75079 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75080 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75081 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75082 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75083 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75084 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75085 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg75086 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg75087 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg75072,arg75073,arg75074,arg75075,arg75076,arg75077,arg75078,arg75079,arg75080,arg75081,arg75082,arg75083,arg75084,arg75085,arg75086,arg75087) : f.call(null,arg75072,arg75073,arg75074,arg75075,arg75076,arg75077,arg75078,arg75079,arg75080,arg75081,arg75082,arg75083,arg75084,arg75085,arg75086,arg75087));

break;
case (17):
var arg75088 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75089 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75090 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75091 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75092 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75093 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75094 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75095 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75096 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75097 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75098 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75099 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75100 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75101 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg75102 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg75103 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg75104 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg75088,arg75089,arg75090,arg75091,arg75092,arg75093,arg75094,arg75095,arg75096,arg75097,arg75098,arg75099,arg75100,arg75101,arg75102,arg75103,arg75104) : f.call(null,arg75088,arg75089,arg75090,arg75091,arg75092,arg75093,arg75094,arg75095,arg75096,arg75097,arg75098,arg75099,arg75100,arg75101,arg75102,arg75103,arg75104));

break;
case (18):
var arg75105 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75106 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75107 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75108 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75109 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75110 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75111 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75112 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75113 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75114 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75115 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75116 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75117 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75118 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg75119 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg75120 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg75121 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
var arg75122 = sci.impl.types.eval(cljs.core.first(args__$17),ctx,bindings);
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg75105,arg75106,arg75107,arg75108,arg75109,arg75110,arg75111,arg75112,arg75113,arg75114,arg75115,arg75116,arg75117,arg75118,arg75119,arg75120,arg75121,arg75122) : f.call(null,arg75105,arg75106,arg75107,arg75108,arg75109,arg75110,arg75111,arg75112,arg75113,arg75114,arg75115,arg75116,arg75117,arg75118,arg75119,arg75120,arg75121,arg75122));

break;
case (19):
var arg75123 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75124 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75125 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75126 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75127 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75128 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75129 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75130 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75131 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75132 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75133 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75134 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75135 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75136 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg75137 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg75138 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg75139 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
var arg75140 = sci.impl.types.eval(cljs.core.first(args__$17),ctx,bindings);
var args__$18 = cljs.core.rest(args__$17);
var arg75141 = sci.impl.types.eval(cljs.core.first(args__$18),ctx,bindings);
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg75123,arg75124,arg75125,arg75126,arg75127,arg75128,arg75129,arg75130,arg75131,arg75132,arg75133,arg75134,arg75135,arg75136,arg75137,arg75138,arg75139,arg75140,arg75141) : f.call(null,arg75123,arg75124,arg75125,arg75126,arg75127,arg75128,arg75129,arg75130,arg75131,arg75132,arg75133,arg75134,arg75135,arg75136,arg75137,arg75138,arg75139,arg75140,arg75141));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51774_SHARP_){
return sci.impl.types.eval(p1__51774_SHARP_,ctx,bindings);
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});

//# sourceMappingURL=sci.impl.evaluator.js.map
