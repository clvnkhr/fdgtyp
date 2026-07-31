import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.string.string.js";
import "./sci.impl.copy_vars.js";
import "./sci.impl.records.js";
import "./sci.impl.unrestrict.js";
import "./sci.impl.utils.js";
import "./sci.impl.vars.js";
goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__74859 = arguments.length;
switch (G__74859) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__74878 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__74879 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__74879);

try{var G__74881 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__74881);

return G__74881;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__74878);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__74882 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__74883 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__74883);

try{var G__74884 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__74884);

return G__74884;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__74882);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__74885 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__74886 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__74886);

try{var G__74888 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__74888);

return G__74888;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__74885);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__74889 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__74890 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__74890);

try{var G__74891 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__74891);

return G__74891;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__74889);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__74892 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__74893 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__74893);

try{var G__74894 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__74894);

return G__74894;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__74892);
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
var _STAR_print_fn_STAR__orig_val__74904 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__74905 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74905);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74904);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___75322 = arguments.length;
var i__5898__auto___75323 = (0);
while(true){
if((i__5898__auto___75323 < len__5897__auto___75322)){
args__5903__auto__.push((arguments[i__5898__auto___75323]));

var G__75324 = (i__5898__auto___75323 + (1));
i__5898__auto___75323 = G__75324;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__74910 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__74911 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__74912 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__74913 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__74914 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__74915 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__74916 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__74917 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__74918 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__74919 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__74920 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__74921 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__74923 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__74924 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__74925 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__74926 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74918);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__74919);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__74920);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__74921);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__74923);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__74924);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74925);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__74926);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__74917);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74916);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__74915);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__74914);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__74913);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__74912);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__74911);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74910);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq74906){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74906));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__74938 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__74939 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74939);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74938);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___75337 = arguments.length;
var i__5898__auto___75338 = (0);
while(true){
if((i__5898__auto___75338 < len__5897__auto___75337)){
args__5903__auto__.push((arguments[i__5898__auto___75338]));

var G__75339 = (i__5898__auto___75338 + (1));
i__5898__auto___75338 = G__75339;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75149 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75150 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75151 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75152 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75153 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75154 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__75155 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__75161 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75162 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75163 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75164 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75165 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75166 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__75167 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75161);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75162);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75163);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75164);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75165);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75166);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__75167);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__75155);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75154);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75153);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75152);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75151);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75150);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75149);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq74942){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74942));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5903__auto__ = [];
var len__5897__auto___75369 = arguments.length;
var i__5898__auto___75370 = (0);
while(true){
if((i__5898__auto___75370 < len__5897__auto___75369)){
args__5903__auto__.push((arguments[i__5898__auto___75370]));

var G__75371 = (i__5898__auto___75370 + (1));
i__5898__auto___75370 = G__75371;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__75170 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__75171 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75172 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75173 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75174 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75175 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75176 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__75177 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__75178 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__75179 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75180 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75181 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75182 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75183 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75184 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__75185 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75178);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75179);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75180);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75181);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75182);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75183);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75184);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__75185);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__75177);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75176);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75175);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75174);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75173);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75172);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75171);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75170);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq75169){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75169));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___75400 = arguments.length;
var i__5898__auto___75401 = (0);
while(true){
if((i__5898__auto___75401 < len__5897__auto___75400)){
args__5903__auto__.push((arguments[i__5898__auto___75401]));

var G__75402 = (i__5898__auto___75401 + (1));
i__5898__auto___75401 = G__75402;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75188 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75189 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75190 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75191 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75192 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75193 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__75194 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__75195 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75196 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75197 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75198 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75199 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75200 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__75201 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75195);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75196);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75197);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75198);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75199);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75200);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__75201);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__75194);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75193);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75192);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75191);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75190);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75189);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75188);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq75187){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75187));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5903__auto__ = [];
var len__5897__auto___75404 = arguments.length;
var i__5898__auto___75405 = (0);
while(true){
if((i__5898__auto___75405 < len__5897__auto___75404)){
args__5903__auto__.push((arguments[i__5898__auto___75405]));

var G__75406 = (i__5898__auto___75405 + (1));
i__5898__auto___75405 = G__75406;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__75203 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__75204 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75205 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75206 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75207 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75208 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__75209 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__75210 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__75211 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75212 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__75213 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75214 = null;
var _STAR_print_newline_STAR__temp_val__75215 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__75216 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75210);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75211);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75212);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75213);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75214);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75215);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__75216);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__75209);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75208);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75207);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75206);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75205);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75204);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75203);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq75202){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75202));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___75408 = arguments.length;
var i__5898__auto___75409 = (0);
while(true){
if((i__5898__auto___75409 < len__5897__auto___75408)){
args__5903__auto__.push((arguments[i__5898__auto___75409]));

var G__75410 = (i__5898__auto___75409 + (1));
i__5898__auto___75409 = G__75410;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75218 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75219 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75220 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75221 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75222 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75223 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__75224 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__75225 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75226 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75227 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75228 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75229 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75230 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__75231 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75225);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75226);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75227);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75228);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75229);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75230);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__75231);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__75224);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75223);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75222);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75221);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75220);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75219);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75218);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq75217){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75217));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5903__auto__ = [];
var len__5897__auto___75413 = arguments.length;
var i__5898__auto___75414 = (0);
while(true){
if((i__5898__auto___75414 < len__5897__auto___75413)){
args__5903__auto__.push((arguments[i__5898__auto___75414]));

var G__75415 = (i__5898__auto___75414 + (1));
i__5898__auto___75414 = G__75415;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__75233 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__75234 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75235 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75236 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75237 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75238 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75239 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__75240 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__75241 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__75242 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75243 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75244 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75245 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75246 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75247 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__75248 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75241);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75242);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75243);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75244);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75245);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75246);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75247);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__75248);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__75240);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75239);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75238);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75237);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75236);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75235);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75234);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75233);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq75232){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75232));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___75418 = arguments.length;
var i__5898__auto___75419 = (0);
while(true){
if((i__5898__auto___75419 < len__5897__auto___75418)){
args__5903__auto__.push((arguments[i__5898__auto___75419]));

var G__75420 = (i__5898__auto___75419 + (1));
i__5898__auto___75419 = G__75420;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__75256__auto__","s__75256__auto__",-1676833240,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__75257__auto__","x__75257__auto__",-1443127355,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__75256__auto__","s__75256__auto__",-1676833240,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__75257__auto__","x__75257__auto__",-1443127355,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__75256__auto__","s__75256__auto__",-1676833240,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq75258){
var G__75259 = cljs.core.first(seq75258);
var seq75258__$1 = cljs.core.next(seq75258);
var G__75260 = cljs.core.first(seq75258__$1);
var seq75258__$2 = cljs.core.next(seq75258__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75259,G__75260,seq75258__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
