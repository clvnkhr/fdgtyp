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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__53819 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53820 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53820);

try{var G__53821 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__53821);

return G__53821;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53819);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__53827 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53828 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53828);

try{var G__53831 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__53831);

return G__53831;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53827);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__53833 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53835 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53835);

try{var G__53836 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__53836);

return G__53836;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53833);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53838 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53839 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53839);

try{var G__53840 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__53840);

return G__53840;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53838);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53842 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53843 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53843);

try{var G__53845 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__53845);

return G__53845;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53842);
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
var _STAR_print_fn_STAR__orig_val__53854 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53855 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53855);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53854);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54282 = arguments.length;
var i__5898__auto___54283 = (0);
while(true){
if((i__5898__auto___54283 < len__5897__auto___54282)){
args__5903__auto__.push((arguments[i__5898__auto___54283]));

var G__54284 = (i__5898__auto___54283 + (1));
i__5898__auto___54283 = G__54284;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53864 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53865 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53866 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53867 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53868 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53869 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53870 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53871 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53872 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53873 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53874 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53875 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53876 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53877 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53878 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53879 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53872);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53873);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53874);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53875);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53876);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53877);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53878);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53879);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53871);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53870);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53869);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53868);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53867);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53866);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53865);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53864);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq53862){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53862));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__53881 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53882 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53882);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53881);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54290 = arguments.length;
var i__5898__auto___54291 = (0);
while(true){
if((i__5898__auto___54291 < len__5897__auto___54290)){
args__5903__auto__.push((arguments[i__5898__auto___54291]));

var G__54292 = (i__5898__auto___54291 + (1));
i__5898__auto___54291 = G__54292;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53885 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53886 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53887 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53888 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53889 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53890 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53891 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53893 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53894 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53895 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53896 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53897 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53898 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53899 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53893);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53894);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53895);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53896);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53897);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53898);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53899);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53891);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53890);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53889);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53888);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53887);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53886);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53885);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq53883){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53883));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54297 = arguments.length;
var i__5898__auto___54298 = (0);
while(true){
if((i__5898__auto___54298 < len__5897__auto___54297)){
args__5903__auto__.push((arguments[i__5898__auto___54298]));

var G__54299 = (i__5898__auto___54298 + (1));
i__5898__auto___54298 = G__54299;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53921 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53922 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53923 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53924 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53925 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53926 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53927 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53928 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53932 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53933 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53934 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53935 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53936 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53937 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53938 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53939 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53932);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53933);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53934);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53935);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53936);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53937);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53938);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53939);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53928);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53927);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53926);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53925);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53924);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53923);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53922);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53921);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq53913){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53913));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54310 = arguments.length;
var i__5898__auto___54313 = (0);
while(true){
if((i__5898__auto___54313 < len__5897__auto___54310)){
args__5903__auto__.push((arguments[i__5898__auto___54313]));

var G__54314 = (i__5898__auto___54313 + (1));
i__5898__auto___54313 = G__54314;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53951 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53952 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53953 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53954 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53955 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53956 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53957 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53958 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53959 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53960 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53961 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53962 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53963 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53964 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53958);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53959);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53960);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53961);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53962);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53963);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53964);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53957);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53956);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53955);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53954);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53953);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53952);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53951);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq53943){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53943));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54323 = arguments.length;
var i__5898__auto___54324 = (0);
while(true){
if((i__5898__auto___54324 < len__5897__auto___54323)){
args__5903__auto__.push((arguments[i__5898__auto___54324]));

var G__54326 = (i__5898__auto___54324 + (1));
i__5898__auto___54324 = G__54326;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53982 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53983 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53984 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53985 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53986 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53987 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53988 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53989 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53990 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53991 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__53992 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53993 = null;
var _STAR_print_newline_STAR__temp_val__53994 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53995 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53989);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53990);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53991);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53992);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53993);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53994);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53995);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53988);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53987);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53986);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53985);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53984);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53983);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53982);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq53977){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53977));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54327 = arguments.length;
var i__5898__auto___54328 = (0);
while(true){
if((i__5898__auto___54328 < len__5897__auto___54327)){
args__5903__auto__.push((arguments[i__5898__auto___54328]));

var G__54329 = (i__5898__auto___54328 + (1));
i__5898__auto___54328 = G__54329;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__54197 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__54198 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__54199 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__54200 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__54201 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__54202 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__54203 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__54204 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__54205 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__54206 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__54207 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__54208 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__54209 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__54210 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__54204);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__54205);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__54206);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__54207);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__54208);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54209);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__54210);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__54203);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54202);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__54201);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__54200);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__54199);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__54198);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__54197);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq54047){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54047));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54334 = arguments.length;
var i__5898__auto___54335 = (0);
while(true){
if((i__5898__auto___54335 < len__5897__auto___54334)){
args__5903__auto__.push((arguments[i__5898__auto___54335]));

var G__54336 = (i__5898__auto___54335 + (1));
i__5898__auto___54335 = G__54336;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__54222 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__54223 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__54224 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__54225 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__54226 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__54227 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__54228 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__54229 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__54230 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__54231 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__54232 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__54233 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__54234 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__54235 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__54236 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__54237 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54230);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__54231);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__54232);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__54233);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__54234);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__54235);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54236);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__54237);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__54229);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54228);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__54227);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__54226);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__54225);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__54224);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__54223);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54222);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq54215){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54215));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54343 = arguments.length;
var i__5898__auto___54344 = (0);
while(true){
if((i__5898__auto___54344 < len__5897__auto___54343)){
args__5903__auto__.push((arguments[i__5898__auto___54344]));

var G__54345 = (i__5898__auto___54344 + (1));
i__5898__auto___54344 = G__54345;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__54242__auto__","s__54242__auto__",1972207828,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__54243__auto__","x__54243__auto__",-1687514,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__54242__auto__","s__54242__auto__",1972207828,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__54243__auto__","x__54243__auto__",-1687514,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__54242__auto__","s__54242__auto__",1972207828,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq54248){
var G__54249 = cljs.core.first(seq54248);
var seq54248__$1 = cljs.core.next(seq54248);
var G__54250 = cljs.core.first(seq54248__$1);
var seq54248__$2 = cljs.core.next(seq54248__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54249,G__54250,seq54248__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
