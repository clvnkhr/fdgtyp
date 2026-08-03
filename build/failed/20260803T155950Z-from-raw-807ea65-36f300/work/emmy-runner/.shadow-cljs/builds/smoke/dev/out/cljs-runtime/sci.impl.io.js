goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__53033 = arguments.length;
switch (G__53033) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], 0)));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__53040 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53041 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53041);

try{var G__53043 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__53043);

return G__53043;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53040);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__53045 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53046 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53046);

try{var G__53049 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__53049);

return G__53049;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53045);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__53051 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53052 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53052);

try{var G__53053 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__53053);

return G__53053;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53051);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53054 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53055 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53055);

try{var G__53056 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__53056);

return G__53056;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53054);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53057 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53058 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53058);

try{var G__53059 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__53059);

return G__53059;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53057);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__53083 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53085 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53085);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53083);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53319 = arguments.length;
var i__5898__auto___53320 = (0);
while(true){
if((i__5898__auto___53320 < len__5897__auto___53319)){
args__5903__auto__.push((arguments[i__5898__auto___53320]));

var G__53321 = (i__5898__auto___53320 + (1));
i__5898__auto___53320 = G__53321;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53108 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53109 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53110 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53111 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53112 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53113 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53114 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53115 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53116 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53117 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53118 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53119 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53120 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53121 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53122 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53123 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53116);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53117);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53118);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53119);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53120);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53121);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53122);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53123);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53115);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53114);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53113);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53112);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53111);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53110);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53109);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53108);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq53098){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53098));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__53129 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53130 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53130);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53129);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53322 = arguments.length;
var i__5898__auto___53323 = (0);
while(true){
if((i__5898__auto___53323 < len__5897__auto___53322)){
args__5903__auto__.push((arguments[i__5898__auto___53323]));

var G__53324 = (i__5898__auto___53323 + (1));
i__5898__auto___53323 = G__53324;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53137 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53138 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53139 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53140 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53141 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53142 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53143 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53144 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53145 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53146 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53147 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53148 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53149 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53150 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53144);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53145);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53146);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53147);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53148);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53149);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53150);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53143);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53142);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53141);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53140);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53139);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53138);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53137);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq53134){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53134));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53329 = arguments.length;
var i__5898__auto___53330 = (0);
while(true){
if((i__5898__auto___53330 < len__5897__auto___53329)){
args__5903__auto__.push((arguments[i__5898__auto___53330]));

var G__53331 = (i__5898__auto___53330 + (1));
i__5898__auto___53330 = G__53331;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53167 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53168 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53169 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53170 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53171 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53172 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53173 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53174 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53175 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53176 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53177 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53178 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53179 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53180 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53181 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53182 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53175);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53176);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53177);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53178);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53179);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53180);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53181);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53182);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53174);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53173);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53172);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53171);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53170);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53169);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53168);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53167);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq53155){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53155));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53335 = arguments.length;
var i__5898__auto___53336 = (0);
while(true){
if((i__5898__auto___53336 < len__5897__auto___53335)){
args__5903__auto__.push((arguments[i__5898__auto___53336]));

var G__53338 = (i__5898__auto___53336 + (1));
i__5898__auto___53336 = G__53338;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53198 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53199 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53200 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53201 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53202 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53203 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53204 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53205 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53206 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53207 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53208 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53209 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53210 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53211 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53205);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53206);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53207);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53208);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53209);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53210);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53211);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53204);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53203);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53202);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53201);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53200);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53199);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53198);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq53194){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53194));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53339 = arguments.length;
var i__5898__auto___53341 = (0);
while(true){
if((i__5898__auto___53341 < len__5897__auto___53339)){
args__5903__auto__.push((arguments[i__5898__auto___53341]));

var G__53342 = (i__5898__auto___53341 + (1));
i__5898__auto___53341 = G__53342;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53221 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53222 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53223 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53224 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53225 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53226 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53227 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53228 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53229 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53230 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__53231 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53232 = null;
var _STAR_print_newline_STAR__temp_val__53233 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53234 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53228);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53229);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53230);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53231);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53232);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53233);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53234);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53227);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53226);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53225);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53224);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53223);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53222);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53221);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq53217){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53217));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53345 = arguments.length;
var i__5898__auto___53346 = (0);
while(true){
if((i__5898__auto___53346 < len__5897__auto___53345)){
args__5903__auto__.push((arguments[i__5898__auto___53346]));

var G__53347 = (i__5898__auto___53346 + (1));
i__5898__auto___53346 = G__53347;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53242 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53243 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53244 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53245 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53246 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53247 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53248 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53249 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53250 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53251 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53252 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53253 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53254 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53255 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53249);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53250);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53251);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53252);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53253);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53254);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53255);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53248);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53247);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53246);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53245);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53244);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53243);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53242);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq53239){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53239));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53350 = arguments.length;
var i__5898__auto___53351 = (0);
while(true){
if((i__5898__auto___53351 < len__5897__auto___53350)){
args__5903__auto__.push((arguments[i__5898__auto___53351]));

var G__53352 = (i__5898__auto___53351 + (1));
i__5898__auto___53351 = G__53352;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53273 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53274 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53275 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53276 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53277 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53278 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53279 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53280 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53281 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53282 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53283 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53284 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53285 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53286 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53287 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53288 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53281);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53282);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53283);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53284);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53285);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53286);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53287);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53288);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53280);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53279);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53278);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53277);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53276);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53275);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53274);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53273);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq53267){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53267));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53357 = arguments.length;
var i__5898__auto___53358 = (0);
while(true){
if((i__5898__auto___53358 < len__5897__auto___53357)){
args__5903__auto__.push((arguments[i__5898__auto___53358]));

var G__53359 = (i__5898__auto___53358 + (1));
i__5898__auto___53358 = G__53359;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__53290__auto__","s__53290__auto__",97282125,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__53291__auto__","x__53291__auto__",-694562023,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53290__auto__","s__53290__auto__",97282125,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53291__auto__","x__53291__auto__",-694562023,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53290__auto__","s__53290__auto__",97282125,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq53292){
var G__53293 = cljs.core.first(seq53292);
var seq53292__$1 = cljs.core.next(seq53292);
var G__53294 = cljs.core.first(seq53292__$1);
var seq53292__$2 = cljs.core.next(seq53292__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53293,G__53294,seq53292__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
