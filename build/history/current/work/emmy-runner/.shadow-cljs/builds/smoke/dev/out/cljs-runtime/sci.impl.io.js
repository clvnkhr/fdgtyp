goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__53023 = arguments.length;
switch (G__53023) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__53028 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53029 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53029);

try{var G__53030 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__53030);

return G__53030;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53028);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__53031 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53032 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53032);

try{var G__53033 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__53033);

return G__53033;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53031);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__53034 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53035 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53035);

try{var G__53036 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__53036);

return G__53036;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53034);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53038 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53039 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53039);

try{var G__53041 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__53041);

return G__53041;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53038);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__53042 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__53043 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__53043);

try{var G__53044 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__53044);

return G__53044;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__53042);
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
var _STAR_print_fn_STAR__orig_val__53053 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53054 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53054);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53053);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53241 = arguments.length;
var i__5898__auto___53242 = (0);
while(true){
if((i__5898__auto___53242 < len__5897__auto___53241)){
args__5903__auto__.push((arguments[i__5898__auto___53242]));

var G__53243 = (i__5898__auto___53242 + (1));
i__5898__auto___53242 = G__53243;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53057 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53058 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53059 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53060 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53061 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53062 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53063 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53064 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53065 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53066 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53067 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53068 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53069 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53070 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53071 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53072 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53065);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53066);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53067);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53068);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53069);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53070);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53071);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53072);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53064);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53063);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53062);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53061);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53060);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53059);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53058);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53057);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq53055){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53055));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__53076 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__53077 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53077);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53076);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53246 = arguments.length;
var i__5898__auto___53247 = (0);
while(true){
if((i__5898__auto___53247 < len__5897__auto___53246)){
args__5903__auto__.push((arguments[i__5898__auto___53247]));

var G__53248 = (i__5898__auto___53247 + (1));
i__5898__auto___53247 = G__53248;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53081 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53082 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53083 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53084 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53085 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53086 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53087 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53088 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53089 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53090 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53091 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53092 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53093 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53094 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53088);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53089);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53090);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53091);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53092);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53093);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53094);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53087);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53086);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53085);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53084);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53083);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53082);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53081);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq53078){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53078));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53250 = arguments.length;
var i__5898__auto___53251 = (0);
while(true){
if((i__5898__auto___53251 < len__5897__auto___53250)){
args__5903__auto__.push((arguments[i__5898__auto___53251]));

var G__53252 = (i__5898__auto___53251 + (1));
i__5898__auto___53251 = G__53252;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53099 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53100 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53101 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53102 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53103 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53104 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53105 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53106 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53107 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53108 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53109 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53110 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53111 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53112 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53113 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53114 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53107);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53108);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53109);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53110);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53111);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53112);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53113);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53114);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53106);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53105);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53104);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53103);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53102);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53101);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53100);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53099);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq53098){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53098));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53258 = arguments.length;
var i__5898__auto___53259 = (0);
while(true){
if((i__5898__auto___53259 < len__5897__auto___53258)){
args__5903__auto__.push((arguments[i__5898__auto___53259]));

var G__53261 = (i__5898__auto___53259 + (1));
i__5898__auto___53259 = G__53261;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53136 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53137 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53138 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53139 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53140 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53141 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53142 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53143 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53144 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53145 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53146 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53147 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53148 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53149 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53143);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53144);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53145);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53146);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53147);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53148);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53149);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53142);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53141);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53140);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53139);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53138);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53137);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53136);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq53116){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53116));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53267 = arguments.length;
var i__5898__auto___53268 = (0);
while(true){
if((i__5898__auto___53268 < len__5897__auto___53267)){
args__5903__auto__.push((arguments[i__5898__auto___53268]));

var G__53269 = (i__5898__auto___53268 + (1));
i__5898__auto___53268 = G__53269;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53154 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53155 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53156 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53157 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53158 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53159 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53160 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53161 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53162 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53163 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__53164 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53165 = null;
var _STAR_print_newline_STAR__temp_val__53166 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53167 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53161);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53162);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53163);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53164);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53165);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53166);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53167);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53160);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53159);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53158);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53157);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53156);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53155);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53154);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq53151){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53151));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53277 = arguments.length;
var i__5898__auto___53278 = (0);
while(true){
if((i__5898__auto___53278 < len__5897__auto___53277)){
args__5903__auto__.push((arguments[i__5898__auto___53278]));

var G__53279 = (i__5898__auto___53278 + (1));
i__5898__auto___53278 = G__53279;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__53170 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53171 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53172 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53173 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53174 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53175 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53176 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__53177 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53178 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53179 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53180 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53181 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53182 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53183 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53177);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53178);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53179);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53180);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53181);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53182);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53183);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53176);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53175);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53174);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53173);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53172);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53171);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53170);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq53169){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53169));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53280 = arguments.length;
var i__5898__auto___53281 = (0);
while(true){
if((i__5898__auto___53281 < len__5897__auto___53280)){
args__5903__auto__.push((arguments[i__5898__auto___53281]));

var G__53282 = (i__5898__auto___53281 + (1));
i__5898__auto___53281 = G__53282;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__53186 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__53187 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__53188 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__53189 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__53190 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__53191 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__53192 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__53193 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__53194 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__53195 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__53196 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__53197 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__53198 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__53199 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__53200 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__53201 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53194);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__53195);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__53196);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__53197);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__53198);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__53199);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53200);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__53201);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__53193);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53192);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__53191);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__53190);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__53189);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__53188);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__53187);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53186);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq53184){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53184));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53288 = arguments.length;
var i__5898__auto___53289 = (0);
while(true){
if((i__5898__auto___53289 < len__5897__auto___53288)){
args__5903__auto__.push((arguments[i__5898__auto___53289]));

var G__53291 = (i__5898__auto___53289 + (1));
i__5898__auto___53289 = G__53291;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__53202__auto__","s__53202__auto__",-60446005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__53203__auto__","x__53203__auto__",923183079,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53202__auto__","s__53202__auto__",-60446005,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53203__auto__","x__53203__auto__",923183079,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53202__auto__","s__53202__auto__",-60446005,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq53206){
var G__53207 = cljs.core.first(seq53206);
var seq53206__$1 = cljs.core.next(seq53206);
var G__53208 = cljs.core.first(seq53206__$1);
var seq53206__$2 = cljs.core.next(seq53206__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53207,G__53208,seq53206__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
