goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__53030 = arguments.length;
switch (G__53030) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__53039 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53040 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53040);

try{var G__53041 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__53041);

return G__53041;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53039);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__53043 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53044 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53044);

try{var G__53045 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__53045);

return G__53045;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53043);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__53050 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53051 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53051);

try{var G__53052 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__53052);

return G__53052;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53050);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53053 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53054 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53054);

try{var G__53055 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__53055);

return G__53055;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53053);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53056 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53057 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53057);

try{var G__53058 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__53058);

return G__53058;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53056);
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
var _STAR_print_fn_STAR__orig_val__53067 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53068 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53068);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53067);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53237 = arguments.length;
var i__5898__auto___53238 = (0);
while(true){
if((i__5898__auto___53238 < len__5897__auto___53237)){
args__5903__auto__.push((arguments[i__5898__auto___53238]));

var G__53239 = (i__5898__auto___53238 + (1));
i__5898__auto___53238 = G__53239;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53070 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53071 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53072 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53073 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53074 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53075 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53076 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53077 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53078 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53079 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53080 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53081 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53082 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53083 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53084 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53085 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53078);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53079);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53080);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53081);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53082);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53083);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53084);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53085);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53077);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53076);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53075);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53074);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53073);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53072);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53071);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53070);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq53069){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53069));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__53087 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53088 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53088);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53087);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53249 = arguments.length;
var i__5898__auto___53250 = (0);
while(true){
if((i__5898__auto___53250 < len__5897__auto___53249)){
args__5903__auto__.push((arguments[i__5898__auto___53250]));

var G__53251 = (i__5898__auto___53250 + (1));
i__5898__auto___53250 = G__53251;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53091 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53092 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53093 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53094 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53095 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53096 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53097 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53098 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53099 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53100 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53101 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53102 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53103 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53104 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53098);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53099);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53100);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53101);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53102);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53103);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53104);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53097);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53096);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53095);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53094);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53093);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53092);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53091);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq53090){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53090));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53263 = arguments.length;
var i__5898__auto___53264 = (0);
while(true){
if((i__5898__auto___53264 < len__5897__auto___53263)){
args__5903__auto__.push((arguments[i__5898__auto___53264]));

var G__53266 = (i__5898__auto___53264 + (1));
i__5898__auto___53264 = G__53266;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53106 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53107 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53108 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53109 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53110 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53111 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53112 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53113 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53114 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53115 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53116 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53117 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53118 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53119 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53120 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53121 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53114);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53115);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53116);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53117);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53118);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53119);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53120);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53121);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53113);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53112);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53111);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53110);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53109);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53108);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53107);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53106);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq53105){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53105));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53276 = arguments.length;
var i__5898__auto___53277 = (0);
while(true){
if((i__5898__auto___53277 < len__5897__auto___53276)){
args__5903__auto__.push((arguments[i__5898__auto___53277]));

var G__53278 = (i__5898__auto___53277 + (1));
i__5898__auto___53277 = G__53278;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53130 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53131 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53132 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53133 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53134 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53135 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53136 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53137 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53138 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53139 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53140 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53141 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53142 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53143 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53137);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53138);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53139);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53140);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53141);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53142);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53143);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53136);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53135);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53134);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53133);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53132);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53131);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53130);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq53128){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53128));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53283 = arguments.length;
var i__5898__auto___53284 = (0);
while(true){
if((i__5898__auto___53284 < len__5897__auto___53283)){
args__5903__auto__.push((arguments[i__5898__auto___53284]));

var G__53285 = (i__5898__auto___53284 + (1));
i__5898__auto___53284 = G__53285;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53149 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53150 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53151 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53152 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53153 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53154 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53155 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53156 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53157 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53158 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__53159 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53160 = null;
var _STAR_print_newline_STAR__temp_val__53161 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53162 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53156);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53157);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53158);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53159);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53160);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53161);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53162);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53155);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53154);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53153);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53152);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53151);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53150);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53149);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq53147){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53147));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53289 = arguments.length;
var i__5898__auto___53290 = (0);
while(true){
if((i__5898__auto___53290 < len__5897__auto___53289)){
args__5903__auto__.push((arguments[i__5898__auto___53290]));

var G__53291 = (i__5898__auto___53290 + (1));
i__5898__auto___53290 = G__53291;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53166 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53167 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53168 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53169 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53170 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53171 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53172 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53173 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53174 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53175 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53176 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53177 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53178 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53179 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53173);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53174);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53175);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53176);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53177);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53178);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53179);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53172);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53171);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53170);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53169);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53168);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53167);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53166);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq53165){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53165));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53295 = arguments.length;
var i__5898__auto___53296 = (0);
while(true){
if((i__5898__auto___53296 < len__5897__auto___53295)){
args__5903__auto__.push((arguments[i__5898__auto___53296]));

var G__53297 = (i__5898__auto___53296 + (1));
i__5898__auto___53296 = G__53297;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53182 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53183 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53184 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53185 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53186 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53187 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53188 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53189 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53190 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53191 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53192 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53193 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53194 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53195 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53196 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53197 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53190);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53191);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53192);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53193);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53194);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53195);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53196);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53197);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53189);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53188);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53187);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53186);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53185);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53184);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53183);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53182);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq53180){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53180));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53300 = arguments.length;
var i__5898__auto___53302 = (0);
while(true){
if((i__5898__auto___53302 < len__5897__auto___53300)){
args__5903__auto__.push((arguments[i__5898__auto___53302]));

var G__53304 = (i__5898__auto___53302 + (1));
i__5898__auto___53302 = G__53304;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__53200__auto__","s__53200__auto__",179994322,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__53201__auto__","x__53201__auto__",-897543307,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53200__auto__","s__53200__auto__",179994322,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53201__auto__","x__53201__auto__",-897543307,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53200__auto__","s__53200__auto__",179994322,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq53202){
var G__53203 = cljs.core.first(seq53202);
var seq53202__$1 = cljs.core.next(seq53202);
var G__53204 = cljs.core.first(seq53202__$1);
var seq53202__$2 = cljs.core.next(seq53202__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53203,G__53204,seq53202__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
