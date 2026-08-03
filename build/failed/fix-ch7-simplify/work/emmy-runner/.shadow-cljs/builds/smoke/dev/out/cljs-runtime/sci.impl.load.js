goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__51093){
var vec__51094 = p__51093;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51094,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51094,(1),null);
if(cljs.core.truth_((function (){var and__5160__auto__ = (k instanceof cljs.core.Symbol);
if(and__5160__auto__){
var and__5160__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__5160__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_js_lib = (function sci$impl$load$handle_js_lib(env,opts,lib,cnn,the_lib){
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts);
var the_lib__$1 = (cljs.core.truth_(path)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (the_lib__$1,path__$1){
return Reflect.get(the_lib__$1,path__$1);
}),the_lib,path.split(".")):the_lib);
var clazz = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.munge((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(path)?(""+"$"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path))));
var env__$1 = cljs.core.assoc_in(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->opts","class->opts",2061906477),clazz,new cljs.core.Keyword(null,"class","class",-2030961996)], null),the_lib__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw-classes","raw-classes",1669916511),clazz], null),the_lib__$1);
var env__$2 = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5823__auto__)){
var alias = temp__5823__auto__;
return cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),alias], null),clazz);
} else {
return env__$1;
}
})();
var env__$3 = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5823__auto__)){
var refers = temp__5823__auto__;
var rename = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(opts);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$3,refer){
var sub_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)+"$$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(refer)))));
var the_sublib = Reflect.get(the_lib__$1,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(refer)));
var refer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(rename,refer,refer);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(env__$3,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),refer__$1], null),sub_sym),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->opts","class->opts",2061906477),sub_sym,new cljs.core.Keyword(null,"class","class",-2030961996)], null),the_sublib),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw-classes","raw-classes",1669916511),sub_sym], null),the_sublib);
}),env__$2,refers);
} else {
return env__$2;
}
})();
return env__$3;
});
sci.impl.load.lib_PLUS_path = (function sci$impl$load$lib_PLUS_path(lib){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(lib,cljs.core.re_pattern("\\$"),(2));
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__51109){
var map__51110 = p__51109;
var map__51110__$1 = cljs.core.__destructure_map(map__51110);
var opts = map__51110__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51110__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51110__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51110__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51110__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51110__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51110__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var or__5162__auto__ = ((typeof lib_name === 'string')?(function (){var vec__51111 = sci.impl.load.lib_PLUS_path(lib_name);
var lib_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51111,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51111,(1),null);
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"js-libs","js-libs",-502933721).cljs$core$IFn$_invoke$arity$1(env),lib_name__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var the_lib = temp__5823__auto__;
return sci.impl.load.handle_js_lib(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"path","path",-188191168),path),lib_name__$1,current_ns,the_lib);
} else {
return env;
}
})():null);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5162__auto____$1 = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5162__auto____$1 = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__5162__auto____$1){
return or__5162__auto____$1;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5823__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__51116 = temp__5823__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51116,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51116,(1),null);
return v;
} else {
throw (new Error((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+" does not exist")));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function (){throw (new Error((""+":refer value must be a sequential collection of symbols")))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5825__auto___51565 = (function (){var G__51119 = the_loaded_ns;
var G__51119__$1 = (((G__51119 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__51119));
var G__51119__$2 = (((G__51119__$1 == null))?null:cljs.core.meta(G__51119__$1));
if((G__51119__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__51119__$2);
}
})();
if(cljs.core.truth_(temp__5825__auto___51565)){
var on_loaded_51566 = temp__5825__auto___51565;
var G__51120_51567 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_51566.cljs$core$IFn$_invoke$arity$1 ? on_loaded_51566.cljs$core$IFn$_invoke$arity$1(G__51120_51567) : on_loaded_51566.call(null,G__51120_51567));
} else {
}

return env__$1;
}
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env,(function (env__$1){
var loaded_libs = new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env__$1);
if(cljs.core.contains_QMARK_(loaded_libs,lib)){
return env__$1;
} else {
var loaded_libs_var_51569 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.Symbol(null,"*loaded-libs*","*loaded-libs*",1951428860,null)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(loaded_libs_var_51569),cljs.core.conj,lib);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs__$1){
if((loaded_libs__$1 == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs__$1,lib);
}
}));
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.utils.current_ns_name();
var lib__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ns-aliases","ns-aliases",1290254821).cljs$core$IFn$_invoke$arity$1(env),lib,lib);
var js_lib_QMARK_ = typeof lib__$1 === 'string';
var or__5162__auto__ = ((js_lib_QMARK_)?(function (){var vec__51126 = sci.impl.load.lib_PLUS_path(lib__$1);
var lib__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51126,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51126,(1),null);
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"js-libs","js-libs",-502933721).cljs$core$IFn$_invoke$arity$1(env),lib__$2);
if(cljs.core.truth_(temp__5825__auto__)){
var the_lib = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
return sci.impl.load.handle_js_lib(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"path","path",-188191168),path),lib__$2,cnn,the_lib);
}));

return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var temp__5823__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5823__auto__)){
var as_alias = temp__5823__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__51132 = opts;
var map__51132__$1 = cljs.core.__destructure_map(map__51132);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51132__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51132__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__5162__auto____$1 = reload;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = reload_all;
if(cljs.core.truth_(or__5162__auto____$2)){
return or__5162__auto____$2;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5823__auto___51588__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1));
if(cljs.core.truth_(temp__5823__auto___51588__$1)){
var the_loaded_ns_51589 = temp__5823__auto___51588__$1;
var loading_51590 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5160__auto__ = loading_51590;
if(cljs.core.truth_(and__5160__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib__$1)))) && (cljs.core.nat_int_QMARK_(loading_51590.indexOf(lib__$1))));
} else {
return and__5160__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = (""+"[ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)+" ]");
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_51590,lib__$1);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib_emphasized]),loading__$1);
return (""+"Cyclic load dependency: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)));
})(),lib__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib__$1,cnn)){
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_51589,lib__$1,opts));
}
}
} else {
var temp__5823__auto___51598__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5823__auto___51598__$2)){
var load_fn_51599 = temp__5823__auto___51598__$2;
var curr_ns_51600 = cljs.core.deref(sci.impl.utils.current_ns);
var temp__5823__auto___51601__$3 = (function (){var G__51140 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib__$1,new cljs.core.Keyword(null,"libname","libname",135992497),lib__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.types.getName(curr_ns_51600),new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5162__auto____$1 = reload;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return reload_all;
}
})()], null);
return (load_fn_51599.cljs$core$IFn$_invoke$arity$1 ? load_fn_51599.cljs$core$IFn$_invoke$arity$1(G__51140) : load_fn_51599.call(null,G__51140));
})();
if(cljs.core.truth_(temp__5823__auto___51601__$3)){
var map__51143_51603 = temp__5823__auto___51601__$3;
var map__51143_51604__$1 = cljs.core.__destructure_map(map__51143_51603);
var file_51605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51143_51604__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_51606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51143_51604__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var handled_51607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51143_51604__$1,new cljs.core.Keyword(null,"handled","handled",1889700151));
var ctx_51608__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib__$1], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib__$1);
}
}));
if(cljs.core.truth_(source_51606)){
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_ns,curr_ns_51600,sci.impl.utils.current_file,file_51605]));

try{var fexpr__51145_51609 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__51145_51609.cljs$core$IFn$_invoke$arity$2 ? fexpr__51145_51609.cljs$core$IFn$_invoke$arity$2(ctx_51608__$1,source_51606) : fexpr__51145_51609.call(null,ctx_51608__$1,source_51606));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e51144){if((e51144 instanceof Error)){
var e_51610 = e51144;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib__$1], 0));

throw e_51610;
} else {
throw e51144;

}
}} else {
}

if(cljs.core.truth_(handled_51607)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib__$1);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib__$1,opts);
}));
}
} else {
var or__5162__auto___51611__$1 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var the_loaded_ns = temp__5825__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib__$1,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5162__auto___51611__$1)){
} else {
throw (new Error((""+"Could not find namespace: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)+".")));
}
}
} else {
throw (new Error((""+"Could not find namespace "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)+".")));
}
}

if(js_lib_QMARK_){
} else {
sci.impl.load.add_loaded_lib(env_STAR_,lib__$1);
}

return null;
}
}
});
sci.impl.load.load_lib_STAR_ = (function sci$impl$load$load_lib_STAR_(ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5160__auto__ = prefix;
if(cljs.core.truth_(and__5160__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5160__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((""+"Found lib name '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(lib))+"' containing period with prefix '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"'.  lib names inside prefix lists must not contain periods"),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib))):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5903__auto__ = [];
var len__5897__auto___51622 = arguments.length;
var i__5898__auto___51623 = (0);
while(true){
if((i__5898__auto___51623 < len__5897__auto___51622)){
args__5903__auto__.push((arguments[i__5898__auto___51623]));

var G__51624 = (i__5898__auto___51623 + (1));
i__5898__auto___51623 = G__51624;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
return sci.impl.load.load_lib_STAR_(ctx,prefix,lib,options);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq51154){
var G__51155 = cljs.core.first(seq51154);
var seq51154__$1 = cljs.core.next(seq51154);
var G__51156 = cljs.core.first(seq51154__$1);
var seq51154__$2 = cljs.core.next(seq51154__$1);
var G__51157 = cljs.core.first(seq51154__$2);
var seq51154__$3 = cljs.core.next(seq51154__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51155,G__51156,G__51157,seq51154__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_51626 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_51627 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_51626,flags));
if(unsupported_51627){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_51627)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__51175 = cljs.core.seq(args_STAR___$1);
var chunk__51176 = null;
var count__51177 = (0);
var i__51178 = (0);
while(true){
if((i__51178 < count__51177)){
var arg = chunk__51176.cljs$core$IIndexed$_nth$arity$2(null,i__51178);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__51283_51636 = arg;
var seq__51284_51637 = cljs.core.seq(vec__51283_51636);
var first__51285_51638 = cljs.core.first(seq__51284_51637);
var seq__51284_51639__$1 = cljs.core.next(seq__51284_51637);
var prefix_51640 = first__51285_51638;
var args_STAR__51641__$2 = seq__51284_51639__$1;
if((prefix_51640 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__51298_51646 = cljs.core.seq(args_STAR__51641__$2);
var chunk__51299_51647 = null;
var count__51300_51648 = (0);
var i__51301_51649 = (0);
while(true){
if((i__51301_51649 < count__51300_51648)){
var arg_51650__$1 = chunk__51299_51647.cljs$core$IIndexed$_nth$arity$2(null,i__51301_51649);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_51640,sci.impl.load.prependss(arg_51650__$1,opts));


var G__51651 = seq__51298_51646;
var G__51652 = chunk__51299_51647;
var G__51653 = count__51300_51648;
var G__51654 = (i__51301_51649 + (1));
seq__51298_51646 = G__51651;
chunk__51299_51647 = G__51652;
count__51300_51648 = G__51653;
i__51301_51649 = G__51654;
continue;
} else {
var temp__5825__auto___51655 = cljs.core.seq(seq__51298_51646);
if(temp__5825__auto___51655){
var seq__51298_51656__$1 = temp__5825__auto___51655;
if(cljs.core.chunked_seq_QMARK_(seq__51298_51656__$1)){
var c__5694__auto___51657 = cljs.core.chunk_first(seq__51298_51656__$1);
var G__51658 = cljs.core.chunk_rest(seq__51298_51656__$1);
var G__51659 = c__5694__auto___51657;
var G__51660 = cljs.core.count(c__5694__auto___51657);
var G__51661 = (0);
seq__51298_51646 = G__51658;
chunk__51299_51647 = G__51659;
count__51300_51648 = G__51660;
i__51301_51649 = G__51661;
continue;
} else {
var arg_51662__$1 = cljs.core.first(seq__51298_51656__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_51640,sci.impl.load.prependss(arg_51662__$1,opts));


var G__51664 = cljs.core.next(seq__51298_51656__$1);
var G__51665 = null;
var G__51666 = (0);
var G__51667 = (0);
seq__51298_51646 = G__51664;
chunk__51299_51647 = G__51665;
count__51300_51648 = G__51666;
i__51301_51649 = G__51667;
continue;
}
} else {
}
}
break;
}
}


var G__51668 = seq__51175;
var G__51669 = chunk__51176;
var G__51670 = count__51177;
var G__51671 = (i__51178 + (1));
seq__51175 = G__51668;
chunk__51176 = G__51669;
count__51177 = G__51670;
i__51178 = G__51671;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51175);
if(temp__5825__auto__){
var seq__51175__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51175__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__51175__$1);
var G__51673 = cljs.core.chunk_rest(seq__51175__$1);
var G__51674 = c__5694__auto__;
var G__51675 = cljs.core.count(c__5694__auto__);
var G__51676 = (0);
seq__51175 = G__51673;
chunk__51176 = G__51674;
count__51177 = G__51675;
i__51178 = G__51676;
continue;
} else {
var arg = cljs.core.first(seq__51175__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__51332_51677 = arg;
var seq__51333_51678 = cljs.core.seq(vec__51332_51677);
var first__51334_51679 = cljs.core.first(seq__51333_51678);
var seq__51333_51680__$1 = cljs.core.next(seq__51333_51678);
var prefix_51681 = first__51334_51679;
var args_STAR__51682__$2 = seq__51333_51680__$1;
if((prefix_51681 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__51335_51693 = cljs.core.seq(args_STAR__51682__$2);
var chunk__51336_51694 = null;
var count__51337_51695 = (0);
var i__51338_51696 = (0);
while(true){
if((i__51338_51696 < count__51337_51695)){
var arg_51698__$1 = chunk__51336_51694.cljs$core$IIndexed$_nth$arity$2(null,i__51338_51696);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_51681,sci.impl.load.prependss(arg_51698__$1,opts));


var G__51699 = seq__51335_51693;
var G__51700 = chunk__51336_51694;
var G__51701 = count__51337_51695;
var G__51702 = (i__51338_51696 + (1));
seq__51335_51693 = G__51699;
chunk__51336_51694 = G__51700;
count__51337_51695 = G__51701;
i__51338_51696 = G__51702;
continue;
} else {
var temp__5825__auto___51703__$1 = cljs.core.seq(seq__51335_51693);
if(temp__5825__auto___51703__$1){
var seq__51335_51704__$1 = temp__5825__auto___51703__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51335_51704__$1)){
var c__5694__auto___51705 = cljs.core.chunk_first(seq__51335_51704__$1);
var G__51706 = cljs.core.chunk_rest(seq__51335_51704__$1);
var G__51707 = c__5694__auto___51705;
var G__51708 = cljs.core.count(c__5694__auto___51705);
var G__51709 = (0);
seq__51335_51693 = G__51706;
chunk__51336_51694 = G__51707;
count__51337_51695 = G__51708;
i__51338_51696 = G__51709;
continue;
} else {
var arg_51710__$1 = cljs.core.first(seq__51335_51704__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_51681,sci.impl.load.prependss(arg_51710__$1,opts));


var G__51711 = cljs.core.next(seq__51335_51704__$1);
var G__51712 = null;
var G__51713 = (0);
var G__51714 = (0);
seq__51335_51693 = G__51711;
chunk__51336_51694 = G__51712;
count__51337_51695 = G__51713;
i__51338_51696 = G__51714;
continue;
}
} else {
}
}
break;
}
}


var G__51715 = cljs.core.next(seq__51175__$1);
var G__51716 = null;
var G__51717 = (0);
var G__51718 = (0);
seq__51175 = G__51715;
chunk__51176 = G__51716;
count__51177 = G__51717;
i__51178 = G__51718;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5903__auto__ = [];
var len__5897__auto___51720 = arguments.length;
var i__5898__auto___51721 = (0);
while(true){
if((i__5898__auto___51721 < len__5897__auto___51720)){
args__5903__auto__.push((arguments[i__5898__auto___51721]));

var G__51723 = (i__5898__auto___51721 + (1));
i__5898__auto___51721 = G__51723;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq51359){
var G__51360 = cljs.core.first(seq51359);
var seq51359__$1 = cljs.core.next(seq51359);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51360,seq51359__$1);
}));

sci.impl.load.eval_require_macros = (function sci$impl$load$eval_require_macros(var_args){
var args__5903__auto__ = [];
var len__5897__auto___51735 = arguments.length;
var i__5898__auto___51736 = (0);
while(true){
if((i__5898__auto___51736 < len__5897__auto___51735)){
args__5903__auto__.push((arguments[i__5898__auto___51736]));

var G__51737 = (i__5898__auto___51736 + (1));
i__5898__auto___51736 = G__51737;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(sci.impl.load.eval_require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
}));

(sci.impl.load.eval_require_macros.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require_macros.cljs$lang$applyTo = (function (seq51378){
var G__51380 = cljs.core.first(seq51378);
var seq51378__$1 = cljs.core.next(seq51378);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51380,seq51378__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5903__auto__ = [];
var len__5897__auto___51739 = arguments.length;
var i__5898__auto___51740 = (0);
while(true){
if((i__5898__auto___51740 < len__5897__auto___51739)){
args__5903__auto__.push((arguments[i__5898__auto___51740]));

var G__51741 = (i__5898__auto___51740 + (1));
i__5898__auto___51740 = G__51741;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq51398){
var G__51399 = cljs.core.first(seq51398);
var seq51398__$1 = cljs.core.next(seq51398);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51399,seq51398__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__51438 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51438,(1),null);
var G__51441_51742 = k;
var G__51441_51743__$1 = (((G__51441_51742 instanceof cljs.core.Keyword))?G__51441_51742.fqn:null);
switch (G__51441_51743__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__51441_51742,G__51441_51743__$1,vec__51438,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__51441_51742,G__51441_51743__$1,vec__51438,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__51441_51742,G__51441_51743__$1,vec__51438,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__51441_51742,G__51441_51743__$1,vec__51438,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__51441_51742,G__51441_51743__$1,vec__51438,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__51441_51742,G__51441_51743__$1,vec__51438,k,v,ns_sym){
return (function (acc,p__51443){
var vec__51444 = p__51443;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51444,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51444,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__51441_51742,G__51441_51743__$1,vec__51438,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__51441_51742,G__51441_51743__$1,vec__51438,k,v,ns_sym))
);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51441_51743__$1))));

}

var G__51747 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__51747;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){
var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw (new Error((""+"No namespace: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym))));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5160__auto__ = to_do;
if(cljs.core.truth_(and__5160__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5160__auto__;
}
})())?(function (){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+" does not exist")
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5162__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5903__auto__ = [];
var len__5897__auto___51761 = arguments.length;
var i__5898__auto___51762 = (0);
while(true){
if((i__5898__auto___51762 < len__5897__auto___51761)){
args__5903__auto__.push((arguments[i__5898__auto___51762]));

var G__51763 = (i__5898__auto___51762 + (1));
i__5898__auto___51762 = G__51763;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq51536){
var G__51537 = cljs.core.first(seq51536);
var seq51536__$1 = cljs.core.next(seq51536);
var G__51538 = cljs.core.first(seq51536__$1);
var seq51536__$2 = cljs.core.next(seq51536__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51537,G__51538,seq51536__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
