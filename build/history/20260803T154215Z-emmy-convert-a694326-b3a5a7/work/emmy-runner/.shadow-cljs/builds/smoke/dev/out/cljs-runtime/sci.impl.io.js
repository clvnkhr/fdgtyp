goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__53848 = arguments.length;
switch (G__53848) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__53850 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53851 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53851);

try{var G__53852 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__53852);

return G__53852;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53850);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__53855 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53856 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53856);

try{var G__53857 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__53857);

return G__53857;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53855);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__53861 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53862 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53862);

try{var G__53864 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__53864);

return G__53864;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53861);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53867 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53868 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53868);

try{var G__53869 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__53869);

return G__53869;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53867);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53872 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53873 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53873);

try{var G__53874 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__53874);

return G__53874;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53872);
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
var _STAR_print_fn_STAR__orig_val__53886 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53887 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53887);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53886);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54300 = arguments.length;
var i__5898__auto___54301 = (0);
while(true){
if((i__5898__auto___54301 < len__5897__auto___54300)){
args__5903__auto__.push((arguments[i__5898__auto___54301]));

var G__54302 = (i__5898__auto___54301 + (1));
i__5898__auto___54301 = G__54302;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53899 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53900 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53901 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53902 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53903 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53904 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53905 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53906 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53907 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53908 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53909 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53910 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53911 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53912 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53913 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53914 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53907);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53908);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53909);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53910);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53911);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53912);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53913);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53914);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53906);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53905);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53904);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53903);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53902);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53901);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53900);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53899);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq53892){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53892));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__53931 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53932 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53932);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53931);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54307 = arguments.length;
var i__5898__auto___54308 = (0);
while(true){
if((i__5898__auto___54308 < len__5897__auto___54307)){
args__5903__auto__.push((arguments[i__5898__auto___54308]));

var G__54309 = (i__5898__auto___54308 + (1));
i__5898__auto___54308 = G__54309;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53938 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53939 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53940 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53941 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53942 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53943 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53944 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53945 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53946 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53947 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53948 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53949 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53950 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53951 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53945);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53946);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53947);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53948);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53949);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53950);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53951);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53944);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53943);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53942);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53941);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53940);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53939);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53938);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq53935){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53935));
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
var _STAR_print_fn_STAR__orig_val__53960 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53961 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53962 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53963 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53964 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53965 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53966 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53967 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53969 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53970 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53971 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53972 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53973 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53974 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53975 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53976 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53969);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53970);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53971);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53972);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53973);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53974);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53975);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53976);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53967);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53966);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53965);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53964);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53963);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53962);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53961);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53960);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq53955){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53955));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54315 = arguments.length;
var i__5898__auto___54316 = (0);
while(true){
if((i__5898__auto___54316 < len__5897__auto___54315)){
args__5903__auto__.push((arguments[i__5898__auto___54316]));

var G__54317 = (i__5898__auto___54316 + (1));
i__5898__auto___54316 = G__54317;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53986 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53987 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53988 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53989 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53990 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53991 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53992 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53993 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53994 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53995 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53996 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53997 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53998 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53999 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53993);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53994);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53995);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53996);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53997);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53998);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53999);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53992);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53991);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53990);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53989);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53988);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53987);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53986);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq53982){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53982));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54319 = arguments.length;
var i__5898__auto___54320 = (0);
while(true){
if((i__5898__auto___54320 < len__5897__auto___54319)){
args__5903__auto__.push((arguments[i__5898__auto___54320]));

var G__54322 = (i__5898__auto___54320 + (1));
i__5898__auto___54320 = G__54322;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__54013 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__54014 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__54015 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__54016 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__54017 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__54018 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__54019 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__54020 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__54021 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__54022 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__54023 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__54024 = null;
var _STAR_print_newline_STAR__temp_val__54025 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__54026 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54020);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__54021);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__54022);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__54023);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__54024);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54025);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__54026);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__54019);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54018);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__54017);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__54016);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__54015);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__54014);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54013);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq54007){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54007));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54323 = arguments.length;
var i__5898__auto___54324 = (0);
while(true){
if((i__5898__auto___54324 < len__5897__auto___54323)){
args__5903__auto__.push((arguments[i__5898__auto___54324]));

var G__54325 = (i__5898__auto___54324 + (1));
i__5898__auto___54324 = G__54325;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__54227 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__54228 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__54229 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__54230 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__54231 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__54232 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__54233 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__54234 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__54235 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__54236 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__54237 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__54238 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__54239 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__54240 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__54234);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__54235);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__54236);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__54237);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__54238);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54239);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__54240);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__54233);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54232);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__54231);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__54230);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__54229);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__54228);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__54227);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq54226){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54226));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5903__auto__ = [];
var len__5897__auto___54335 = arguments.length;
var i__5898__auto___54336 = (0);
while(true){
if((i__5898__auto___54336 < len__5897__auto___54335)){
args__5903__auto__.push((arguments[i__5898__auto___54336]));

var G__54337 = (i__5898__auto___54336 + (1));
i__5898__auto___54336 = G__54337;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__54250 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__54251 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__54252 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__54253 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__54254 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__54255 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__54256 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__54257 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__54258 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__54259 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__54260 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__54261 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__54262 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__54263 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__54264 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__54265 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54258);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__54259);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__54260);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__54261);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__54262);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__54263);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54264);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__54265);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__54257);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54256);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__54255);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__54254);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__54253);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__54252);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__54251);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54250);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq54241){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54241));
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__54278__auto__","s__54278__auto__",1482396485,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__54279__auto__","x__54279__auto__",-741543061,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__54278__auto__","s__54278__auto__",1482396485,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__54279__auto__","x__54279__auto__",-741543061,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__54278__auto__","s__54278__auto__",1482396485,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq54280){
var G__54281 = cljs.core.first(seq54280);
var seq54280__$1 = cljs.core.next(seq54280);
var G__54282 = cljs.core.first(seq54280__$1);
var seq54280__$2 = cljs.core.next(seq54280__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54281,G__54282,seq54280__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
