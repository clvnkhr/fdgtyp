goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__53815 = arguments.length;
switch (G__53815) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__53823 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53824 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53824);

try{var G__53825 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__53825);

return G__53825;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53823);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__53829 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53830 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53830);

try{var G__53832 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__53832);

return G__53832;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53829);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__53835 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53836 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53836);

try{var G__53838 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__53838);

return G__53838;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53835);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53842 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53843 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53843);

try{var G__53844 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__53844);

return G__53844;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53842);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53845 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53846 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53846);

try{var G__53847 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__53847);

return G__53847;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53845);
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
var _STAR_print_fn_STAR__orig_val__53869 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53870 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53870);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53869);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54304 = arguments.length;
var i__5898__auto___54305 = (0);
while(true){
if((i__5898__auto___54305 < len__5897__auto___54304)){
args__5903__auto__.push((arguments[i__5898__auto___54305]));

var G__54306 = (i__5898__auto___54305 + (1));
i__5898__auto___54305 = G__54306;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53893 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53894 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53895 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53896 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53897 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53898 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53899 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53900 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53901 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53902 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53903 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53904 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53905 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53906 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53907 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53908 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53901);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53902);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53903);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53904);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53905);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53906);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53907);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53908);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53900);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53899);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53898);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53897);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53896);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53895);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53894);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53893);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq53877){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53877));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__53919 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53920 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53920);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53919);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54309 = arguments.length;
var i__5898__auto___54310 = (0);
while(true){
if((i__5898__auto___54310 < len__5897__auto___54309)){
args__5903__auto__.push((arguments[i__5898__auto___54310]));

var G__54311 = (i__5898__auto___54310 + (1));
i__5898__auto___54310 = G__54311;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53932 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53933 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53934 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53935 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53936 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53937 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53938 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53939 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53940 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53941 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53942 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53943 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53944 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53945 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53939);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53940);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53941);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53942);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53943);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53944);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53945);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53938);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53937);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53936);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53935);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53934);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53933);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53932);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq53923){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53923));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54312 = arguments.length;
var i__5898__auto___54313 = (0);
while(true){
if((i__5898__auto___54313 < len__5897__auto___54312)){
args__5903__auto__.push((arguments[i__5898__auto___54313]));

var G__54314 = (i__5898__auto___54313 + (1));
i__5898__auto___54313 = G__54314;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53966 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53967 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53968 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53969 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53970 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53971 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53972 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53973 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53974 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53975 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53976 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53977 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53978 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53979 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53980 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53981 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53974);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53975);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53976);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53977);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53978);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53979);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53980);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53981);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53973);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53972);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53971);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53970);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53969);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53968);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53967);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53966);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq53957){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53957));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54317 = arguments.length;
var i__5898__auto___54318 = (0);
while(true){
if((i__5898__auto___54318 < len__5897__auto___54317)){
args__5903__auto__.push((arguments[i__5898__auto___54318]));

var G__54319 = (i__5898__auto___54318 + (1));
i__5898__auto___54318 = G__54319;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__54185 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__54186 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__54187 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__54188 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__54189 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__54190 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__54191 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__54192 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__54193 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__54194 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__54195 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__54196 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__54197 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__54198 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__54192);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__54193);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__54194);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__54195);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__54196);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54197);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__54198);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__54191);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54190);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__54189);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__54188);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__54187);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__54186);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__54185);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq53991){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53991));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54325 = arguments.length;
var i__5898__auto___54326 = (0);
while(true){
if((i__5898__auto___54326 < len__5897__auto___54325)){
args__5903__auto__.push((arguments[i__5898__auto___54326]));

var G__54327 = (i__5898__auto___54326 + (1));
i__5898__auto___54326 = G__54327;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__54202 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__54203 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__54204 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__54205 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__54206 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__54207 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__54208 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__54209 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__54210 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__54211 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__54212 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__54213 = null;
var _STAR_print_newline_STAR__temp_val__54214 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__54215 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54209);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__54210);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__54211);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__54212);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__54213);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54214);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__54215);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__54208);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54207);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__54206);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__54205);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__54204);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__54203);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54202);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq54201){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54201));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54328 = arguments.length;
var i__5898__auto___54329 = (0);
while(true){
if((i__5898__auto___54329 < len__5897__auto___54328)){
args__5903__auto__.push((arguments[i__5898__auto___54329]));

var G__54330 = (i__5898__auto___54329 + (1));
i__5898__auto___54329 = G__54330;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__54234 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__54235 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__54236 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__54237 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__54238 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__54239 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__54240 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__54241 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__54242 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__54243 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__54244 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__54245 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__54246 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__54247 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__54241);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__54242);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__54243);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__54244);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__54245);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54246);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__54247);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__54240);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54239);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__54238);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__54237);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__54236);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__54235);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__54234);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq54224){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54224));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54332 = arguments.length;
var i__5898__auto___54333 = (0);
while(true){
if((i__5898__auto___54333 < len__5897__auto___54332)){
args__5903__auto__.push((arguments[i__5898__auto___54333]));

var G__54334 = (i__5898__auto___54333 + (1));
i__5898__auto___54333 = G__54334;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__54257 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__54258 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__54259 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__54260 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__54261 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__54262 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__54263 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__54264 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__54265 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__54266 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__54267 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__54268 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__54269 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__54270 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__54271 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__54272 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54265);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__54266);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__54267);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__54268);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__54269);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__54270);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54271);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__54272);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__54264);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54263);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__54262);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__54261);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__54260);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__54259);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__54258);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54257);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq54256){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54256));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54339 = arguments.length;
var i__5898__auto___54340 = (0);
while(true){
if((i__5898__auto___54340 < len__5897__auto___54339)){
args__5903__auto__.push((arguments[i__5898__auto___54340]));

var G__54341 = (i__5898__auto___54340 + (1));
i__5898__auto___54340 = G__54341;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__54275__auto__","s__54275__auto__",2055287237,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__54276__auto__","x__54276__auto__",-1301037060,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__54275__auto__","s__54275__auto__",2055287237,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__54276__auto__","x__54276__auto__",-1301037060,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__54275__auto__","s__54275__auto__",2055287237,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq54277){
var G__54278 = cljs.core.first(seq54277);
var seq54277__$1 = cljs.core.next(seq54277);
var G__54279 = cljs.core.first(seq54277__$1);
var seq54277__$2 = cljs.core.next(seq54277__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54278,G__54279,seq54277__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
