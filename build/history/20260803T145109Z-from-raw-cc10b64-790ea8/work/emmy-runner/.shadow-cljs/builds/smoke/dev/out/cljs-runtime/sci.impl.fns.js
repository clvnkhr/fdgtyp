goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__51971 = arguments.length;
switch (G__51971) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51986 = fixed_arity;
switch (G__51986) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__51987){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__51987);

while(true){
var ret__51133__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51133__auto__)){
continue;
} else {
return ret__51133__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__51987 = null;
if (arguments.length > 0) {
var G__52770__i = 0, G__52770__a = new Array(arguments.length -  0);
while (G__52770__i < G__52770__a.length) {G__52770__a[G__52770__i] = arguments[G__52770__i + 0]; ++G__52770__i;}
  G__51987 = new cljs.core.IndexedSeq(G__52770__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__51987);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__52771){
var G__51987 = cljs.core.seq(arglist__52771);
return sci$impl$fns$arity_0__delegate(G__51987);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__51996,G__51997){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51996);

(invoc_array[vararg_idx] = G__51997);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__51996,var_args){
var G__51997 = null;
if (arguments.length > 1) {
var G__52773__i = 0, G__52773__a = new Array(arguments.length -  1);
while (G__52773__i < G__52773__a.length) {G__52773__a[G__52773__i] = arguments[G__52773__i + 1]; ++G__52773__i;}
  G__51997 = new cljs.core.IndexedSeq(G__52773__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__51996,G__51997);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__52775){
var G__51996 = cljs.core.first(arglist__52775);
var G__51997 = cljs.core.rest(arglist__52775);
return sci$impl$fns$arity_1__delegate(G__51996,G__51997);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__51999,G__52000,G__52001){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51999);

(invoc_array[(1)] = G__52000);

(invoc_array[vararg_idx] = G__52001);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__51999,G__52000,var_args){
var G__52001 = null;
if (arguments.length > 2) {
var G__52776__i = 0, G__52776__a = new Array(arguments.length -  2);
while (G__52776__i < G__52776__a.length) {G__52776__a[G__52776__i] = arguments[G__52776__i + 2]; ++G__52776__i;}
  G__52001 = new cljs.core.IndexedSeq(G__52776__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__51999,G__52000,G__52001);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__52777){
var G__51999 = cljs.core.first(arglist__52777);
arglist__52777 = cljs.core.next(arglist__52777);
var G__52000 = cljs.core.first(arglist__52777);
var G__52001 = cljs.core.rest(arglist__52777);
return sci$impl$fns$arity_2__delegate(G__51999,G__52000,G__52001);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__52009,G__52010,G__52011,G__52012){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52009);

(invoc_array[(1)] = G__52010);

(invoc_array[(2)] = G__52011);

(invoc_array[vararg_idx] = G__52012);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__52009,G__52010,G__52011,var_args){
var G__52012 = null;
if (arguments.length > 3) {
var G__52780__i = 0, G__52780__a = new Array(arguments.length -  3);
while (G__52780__i < G__52780__a.length) {G__52780__a[G__52780__i] = arguments[G__52780__i + 3]; ++G__52780__i;}
  G__52012 = new cljs.core.IndexedSeq(G__52780__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__52009,G__52010,G__52011,G__52012);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__52781){
var G__52009 = cljs.core.first(arglist__52781);
arglist__52781 = cljs.core.next(arglist__52781);
var G__52010 = cljs.core.first(arglist__52781);
arglist__52781 = cljs.core.next(arglist__52781);
var G__52011 = cljs.core.first(arglist__52781);
var G__52012 = cljs.core.rest(arglist__52781);
return sci$impl$fns$arity_3__delegate(G__52009,G__52010,G__52011,G__52012);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__52016,G__52017,G__52018,G__52019,G__52020){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52016);

(invoc_array[(1)] = G__52017);

(invoc_array[(2)] = G__52018);

(invoc_array[(3)] = G__52019);

(invoc_array[vararg_idx] = G__52020);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__52016,G__52017,G__52018,G__52019,var_args){
var G__52020 = null;
if (arguments.length > 4) {
var G__52782__i = 0, G__52782__a = new Array(arguments.length -  4);
while (G__52782__i < G__52782__a.length) {G__52782__a[G__52782__i] = arguments[G__52782__i + 4]; ++G__52782__i;}
  G__52020 = new cljs.core.IndexedSeq(G__52782__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__52016,G__52017,G__52018,G__52019,G__52020);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__52783){
var G__52016 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__52017 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__52018 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__52019 = cljs.core.first(arglist__52783);
var G__52020 = cljs.core.rest(arglist__52783);
return sci$impl$fns$arity_4__delegate(G__52016,G__52017,G__52018,G__52019,G__52020);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__52026,G__52027,G__52028,G__52029,G__52030,G__52031){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52026);

(invoc_array[(1)] = G__52027);

(invoc_array[(2)] = G__52028);

(invoc_array[(3)] = G__52029);

(invoc_array[(4)] = G__52030);

(invoc_array[vararg_idx] = G__52031);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__52026,G__52027,G__52028,G__52029,G__52030,var_args){
var G__52031 = null;
if (arguments.length > 5) {
var G__52787__i = 0, G__52787__a = new Array(arguments.length -  5);
while (G__52787__i < G__52787__a.length) {G__52787__a[G__52787__i] = arguments[G__52787__i + 5]; ++G__52787__i;}
  G__52031 = new cljs.core.IndexedSeq(G__52787__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__52026,G__52027,G__52028,G__52029,G__52030,G__52031);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__52788){
var G__52026 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52027 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52028 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52029 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52030 = cljs.core.first(arglist__52788);
var G__52031 = cljs.core.rest(arglist__52788);
return sci$impl$fns$arity_5__delegate(G__52026,G__52027,G__52028,G__52029,G__52030,G__52031);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52036);

(invoc_array[(1)] = G__52037);

(invoc_array[(2)] = G__52038);

(invoc_array[(3)] = G__52039);

(invoc_array[(4)] = G__52040);

(invoc_array[(5)] = G__52041);

(invoc_array[vararg_idx] = G__52042);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,var_args){
var G__52042 = null;
if (arguments.length > 6) {
var G__52789__i = 0, G__52789__a = new Array(arguments.length -  6);
while (G__52789__i < G__52789__a.length) {G__52789__a[G__52789__i] = arguments[G__52789__i + 6]; ++G__52789__i;}
  G__52042 = new cljs.core.IndexedSeq(G__52789__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__52790){
var G__52036 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52037 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52038 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52039 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52040 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52041 = cljs.core.first(arglist__52790);
var G__52042 = cljs.core.rest(arglist__52790);
return sci$impl$fns$arity_6__delegate(G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52044);

(invoc_array[(1)] = G__52045);

(invoc_array[(2)] = G__52046);

(invoc_array[(3)] = G__52047);

(invoc_array[(4)] = G__52048);

(invoc_array[(5)] = G__52049);

(invoc_array[(6)] = G__52050);

(invoc_array[vararg_idx] = G__52051);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,var_args){
var G__52051 = null;
if (arguments.length > 7) {
var G__52791__i = 0, G__52791__a = new Array(arguments.length -  7);
while (G__52791__i < G__52791__a.length) {G__52791__a[G__52791__i] = arguments[G__52791__i + 7]; ++G__52791__i;}
  G__52051 = new cljs.core.IndexedSeq(G__52791__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__52792){
var G__52044 = cljs.core.first(arglist__52792);
arglist__52792 = cljs.core.next(arglist__52792);
var G__52045 = cljs.core.first(arglist__52792);
arglist__52792 = cljs.core.next(arglist__52792);
var G__52046 = cljs.core.first(arglist__52792);
arglist__52792 = cljs.core.next(arglist__52792);
var G__52047 = cljs.core.first(arglist__52792);
arglist__52792 = cljs.core.next(arglist__52792);
var G__52048 = cljs.core.first(arglist__52792);
arglist__52792 = cljs.core.next(arglist__52792);
var G__52049 = cljs.core.first(arglist__52792);
arglist__52792 = cljs.core.next(arglist__52792);
var G__52050 = cljs.core.first(arglist__52792);
var G__52051 = cljs.core.rest(arglist__52792);
return sci$impl$fns$arity_7__delegate(G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52056);

(invoc_array[(1)] = G__52057);

(invoc_array[(2)] = G__52058);

(invoc_array[(3)] = G__52059);

(invoc_array[(4)] = G__52060);

(invoc_array[(5)] = G__52061);

(invoc_array[(6)] = G__52062);

(invoc_array[(7)] = G__52063);

(invoc_array[vararg_idx] = G__52064);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,var_args){
var G__52064 = null;
if (arguments.length > 8) {
var G__52811__i = 0, G__52811__a = new Array(arguments.length -  8);
while (G__52811__i < G__52811__a.length) {G__52811__a[G__52811__i] = arguments[G__52811__i + 8]; ++G__52811__i;}
  G__52064 = new cljs.core.IndexedSeq(G__52811__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__52812){
var G__52056 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52057 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52058 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52059 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52060 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52061 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52062 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52063 = cljs.core.first(arglist__52812);
var G__52064 = cljs.core.rest(arglist__52812);
return sci$impl$fns$arity_8__delegate(G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52065);

(invoc_array[(1)] = G__52066);

(invoc_array[(2)] = G__52067);

(invoc_array[(3)] = G__52068);

(invoc_array[(4)] = G__52069);

(invoc_array[(5)] = G__52070);

(invoc_array[(6)] = G__52071);

(invoc_array[(7)] = G__52072);

(invoc_array[(8)] = G__52073);

(invoc_array[vararg_idx] = G__52074);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,var_args){
var G__52074 = null;
if (arguments.length > 9) {
var G__52813__i = 0, G__52813__a = new Array(arguments.length -  9);
while (G__52813__i < G__52813__a.length) {G__52813__a[G__52813__i] = arguments[G__52813__i + 9]; ++G__52813__i;}
  G__52074 = new cljs.core.IndexedSeq(G__52813__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__52814){
var G__52065 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52066 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52067 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52068 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52069 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52070 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52071 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52072 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52073 = cljs.core.first(arglist__52814);
var G__52074 = cljs.core.rest(arglist__52814);
return sci$impl$fns$arity_9__delegate(G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52075);

(invoc_array[(1)] = G__52076);

(invoc_array[(2)] = G__52077);

(invoc_array[(3)] = G__52078);

(invoc_array[(4)] = G__52079);

(invoc_array[(5)] = G__52080);

(invoc_array[(6)] = G__52081);

(invoc_array[(7)] = G__52082);

(invoc_array[(8)] = G__52083);

(invoc_array[(9)] = G__52084);

(invoc_array[vararg_idx] = G__52085);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,var_args){
var G__52085 = null;
if (arguments.length > 10) {
var G__52815__i = 0, G__52815__a = new Array(arguments.length -  10);
while (G__52815__i < G__52815__a.length) {G__52815__a[G__52815__i] = arguments[G__52815__i + 10]; ++G__52815__i;}
  G__52085 = new cljs.core.IndexedSeq(G__52815__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__52816){
var G__52075 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52076 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52077 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52078 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52079 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52080 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52081 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52082 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52083 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52084 = cljs.core.first(arglist__52816);
var G__52085 = cljs.core.rest(arglist__52816);
return sci$impl$fns$arity_10__delegate(G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096,G__52097){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52086);

(invoc_array[(1)] = G__52087);

(invoc_array[(2)] = G__52088);

(invoc_array[(3)] = G__52089);

(invoc_array[(4)] = G__52090);

(invoc_array[(5)] = G__52091);

(invoc_array[(6)] = G__52092);

(invoc_array[(7)] = G__52093);

(invoc_array[(8)] = G__52094);

(invoc_array[(9)] = G__52095);

(invoc_array[(10)] = G__52096);

(invoc_array[vararg_idx] = G__52097);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096,var_args){
var G__52097 = null;
if (arguments.length > 11) {
var G__52818__i = 0, G__52818__a = new Array(arguments.length -  11);
while (G__52818__i < G__52818__a.length) {G__52818__a[G__52818__i] = arguments[G__52818__i + 11]; ++G__52818__i;}
  G__52097 = new cljs.core.IndexedSeq(G__52818__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096,G__52097);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__52819){
var G__52086 = cljs.core.first(arglist__52819);
arglist__52819 = cljs.core.next(arglist__52819);
var G__52087 = cljs.core.first(arglist__52819);
arglist__52819 = cljs.core.next(arglist__52819);
var G__52088 = cljs.core.first(arglist__52819);
arglist__52819 = cljs.core.next(arglist__52819);
var G__52089 = cljs.core.first(arglist__52819);
arglist__52819 = cljs.core.next(arglist__52819);
var G__52090 = cljs.core.first(arglist__52819);
arglist__52819 = cljs.core.next(arglist__52819);
var G__52091 = cljs.core.first(arglist__52819);
arglist__52819 = cljs.core.next(arglist__52819);
var G__52092 = cljs.core.first(arglist__52819);
arglist__52819 = cljs.core.next(arglist__52819);
var G__52093 = cljs.core.first(arglist__52819);
arglist__52819 = cljs.core.next(arglist__52819);
var G__52094 = cljs.core.first(arglist__52819);
arglist__52819 = cljs.core.next(arglist__52819);
var G__52095 = cljs.core.first(arglist__52819);
arglist__52819 = cljs.core.next(arglist__52819);
var G__52096 = cljs.core.first(arglist__52819);
var G__52097 = cljs.core.rest(arglist__52819);
return sci$impl$fns$arity_11__delegate(G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096,G__52097);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52103);

(invoc_array[(1)] = G__52104);

(invoc_array[(2)] = G__52105);

(invoc_array[(3)] = G__52106);

(invoc_array[(4)] = G__52107);

(invoc_array[(5)] = G__52108);

(invoc_array[(6)] = G__52109);

(invoc_array[(7)] = G__52110);

(invoc_array[(8)] = G__52111);

(invoc_array[(9)] = G__52112);

(invoc_array[(10)] = G__52113);

(invoc_array[(11)] = G__52114);

(invoc_array[vararg_idx] = G__52115);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,var_args){
var G__52115 = null;
if (arguments.length > 12) {
var G__52820__i = 0, G__52820__a = new Array(arguments.length -  12);
while (G__52820__i < G__52820__a.length) {G__52820__a[G__52820__i] = arguments[G__52820__i + 12]; ++G__52820__i;}
  G__52115 = new cljs.core.IndexedSeq(G__52820__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__52821){
var G__52103 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52104 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52105 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52106 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52107 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52108 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52109 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52110 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52111 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52112 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52113 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52114 = cljs.core.first(arglist__52821);
var G__52115 = cljs.core.rest(arglist__52821);
return sci$impl$fns$arity_12__delegate(G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52126);

(invoc_array[(1)] = G__52127);

(invoc_array[(2)] = G__52128);

(invoc_array[(3)] = G__52129);

(invoc_array[(4)] = G__52130);

(invoc_array[(5)] = G__52131);

(invoc_array[(6)] = G__52132);

(invoc_array[(7)] = G__52133);

(invoc_array[(8)] = G__52134);

(invoc_array[(9)] = G__52135);

(invoc_array[(10)] = G__52136);

(invoc_array[(11)] = G__52137);

(invoc_array[(12)] = G__52138);

(invoc_array[vararg_idx] = G__52139);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,var_args){
var G__52139 = null;
if (arguments.length > 13) {
var G__52829__i = 0, G__52829__a = new Array(arguments.length -  13);
while (G__52829__i < G__52829__a.length) {G__52829__a[G__52829__i] = arguments[G__52829__i + 13]; ++G__52829__i;}
  G__52139 = new cljs.core.IndexedSeq(G__52829__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__52830){
var G__52126 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52127 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52128 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52129 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52130 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52131 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52132 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52133 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52134 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52135 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52136 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52137 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52138 = cljs.core.first(arglist__52830);
var G__52139 = cljs.core.rest(arglist__52830);
return sci$impl$fns$arity_13__delegate(G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52142);

(invoc_array[(1)] = G__52143);

(invoc_array[(2)] = G__52144);

(invoc_array[(3)] = G__52145);

(invoc_array[(4)] = G__52146);

(invoc_array[(5)] = G__52147);

(invoc_array[(6)] = G__52148);

(invoc_array[(7)] = G__52149);

(invoc_array[(8)] = G__52150);

(invoc_array[(9)] = G__52151);

(invoc_array[(10)] = G__52152);

(invoc_array[(11)] = G__52153);

(invoc_array[(12)] = G__52154);

(invoc_array[(13)] = G__52155);

(invoc_array[vararg_idx] = G__52156);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,var_args){
var G__52156 = null;
if (arguments.length > 14) {
var G__52852__i = 0, G__52852__a = new Array(arguments.length -  14);
while (G__52852__i < G__52852__a.length) {G__52852__a[G__52852__i] = arguments[G__52852__i + 14]; ++G__52852__i;}
  G__52156 = new cljs.core.IndexedSeq(G__52852__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__52853){
var G__52142 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52143 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52144 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52145 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52146 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52147 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52148 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52149 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52150 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52151 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52152 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52153 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52154 = cljs.core.first(arglist__52853);
arglist__52853 = cljs.core.next(arglist__52853);
var G__52155 = cljs.core.first(arglist__52853);
var G__52156 = cljs.core.rest(arglist__52853);
return sci$impl$fns$arity_14__delegate(G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,G__52182,G__52183,G__52184,G__52185,G__52186,G__52187,G__52188,G__52189,G__52190,G__52191){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52176);

(invoc_array[(1)] = G__52177);

(invoc_array[(2)] = G__52178);

(invoc_array[(3)] = G__52179);

(invoc_array[(4)] = G__52180);

(invoc_array[(5)] = G__52181);

(invoc_array[(6)] = G__52182);

(invoc_array[(7)] = G__52183);

(invoc_array[(8)] = G__52184);

(invoc_array[(9)] = G__52185);

(invoc_array[(10)] = G__52186);

(invoc_array[(11)] = G__52187);

(invoc_array[(12)] = G__52188);

(invoc_array[(13)] = G__52189);

(invoc_array[(14)] = G__52190);

(invoc_array[vararg_idx] = G__52191);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,G__52182,G__52183,G__52184,G__52185,G__52186,G__52187,G__52188,G__52189,G__52190,var_args){
var G__52191 = null;
if (arguments.length > 15) {
var G__52875__i = 0, G__52875__a = new Array(arguments.length -  15);
while (G__52875__i < G__52875__a.length) {G__52875__a[G__52875__i] = arguments[G__52875__i + 15]; ++G__52875__i;}
  G__52191 = new cljs.core.IndexedSeq(G__52875__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,G__52182,G__52183,G__52184,G__52185,G__52186,G__52187,G__52188,G__52189,G__52190,G__52191);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__52876){
var G__52176 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52177 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52178 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52179 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52180 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52181 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52182 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52183 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52184 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52185 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52186 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52187 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52188 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52189 = cljs.core.first(arglist__52876);
arglist__52876 = cljs.core.next(arglist__52876);
var G__52190 = cljs.core.first(arglist__52876);
var G__52191 = cljs.core.rest(arglist__52876);
return sci$impl$fns$arity_15__delegate(G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,G__52182,G__52183,G__52184,G__52185,G__52186,G__52187,G__52188,G__52189,G__52190,G__52191);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,G__52210){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52194);

(invoc_array[(1)] = G__52195);

(invoc_array[(2)] = G__52196);

(invoc_array[(3)] = G__52197);

(invoc_array[(4)] = G__52198);

(invoc_array[(5)] = G__52199);

(invoc_array[(6)] = G__52200);

(invoc_array[(7)] = G__52201);

(invoc_array[(8)] = G__52202);

(invoc_array[(9)] = G__52203);

(invoc_array[(10)] = G__52204);

(invoc_array[(11)] = G__52205);

(invoc_array[(12)] = G__52206);

(invoc_array[(13)] = G__52207);

(invoc_array[(14)] = G__52208);

(invoc_array[(15)] = G__52209);

(invoc_array[vararg_idx] = G__52210);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,var_args){
var G__52210 = null;
if (arguments.length > 16) {
var G__52900__i = 0, G__52900__a = new Array(arguments.length -  16);
while (G__52900__i < G__52900__a.length) {G__52900__a[G__52900__i] = arguments[G__52900__i + 16]; ++G__52900__i;}
  G__52210 = new cljs.core.IndexedSeq(G__52900__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,G__52210);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__52904){
var G__52194 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52195 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52196 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52197 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52198 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52199 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52200 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52201 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52202 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52203 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52204 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52205 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52206 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52207 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52208 = cljs.core.first(arglist__52904);
arglist__52904 = cljs.core.next(arglist__52904);
var G__52209 = cljs.core.first(arglist__52904);
var G__52210 = cljs.core.rest(arglist__52904);
return sci$impl$fns$arity_16__delegate(G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,G__52210);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__52217,G__52218,G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225,G__52226,G__52227,G__52228,G__52229,G__52230,G__52231,G__52232,G__52233,G__52234){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52217);

(invoc_array[(1)] = G__52218);

(invoc_array[(2)] = G__52219);

(invoc_array[(3)] = G__52220);

(invoc_array[(4)] = G__52221);

(invoc_array[(5)] = G__52222);

(invoc_array[(6)] = G__52223);

(invoc_array[(7)] = G__52224);

(invoc_array[(8)] = G__52225);

(invoc_array[(9)] = G__52226);

(invoc_array[(10)] = G__52227);

(invoc_array[(11)] = G__52228);

(invoc_array[(12)] = G__52229);

(invoc_array[(13)] = G__52230);

(invoc_array[(14)] = G__52231);

(invoc_array[(15)] = G__52232);

(invoc_array[(16)] = G__52233);

(invoc_array[vararg_idx] = G__52234);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__52217,G__52218,G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225,G__52226,G__52227,G__52228,G__52229,G__52230,G__52231,G__52232,G__52233,var_args){
var G__52234 = null;
if (arguments.length > 17) {
var G__52925__i = 0, G__52925__a = new Array(arguments.length -  17);
while (G__52925__i < G__52925__a.length) {G__52925__a[G__52925__i] = arguments[G__52925__i + 17]; ++G__52925__i;}
  G__52234 = new cljs.core.IndexedSeq(G__52925__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__52217,G__52218,G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225,G__52226,G__52227,G__52228,G__52229,G__52230,G__52231,G__52232,G__52233,G__52234);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__52934){
var G__52217 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52218 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52219 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52220 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52221 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52222 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52223 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52224 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52225 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52226 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52227 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52228 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52229 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52230 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52231 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52232 = cljs.core.first(arglist__52934);
arglist__52934 = cljs.core.next(arglist__52934);
var G__52233 = cljs.core.first(arglist__52934);
var G__52234 = cljs.core.rest(arglist__52934);
return sci$impl$fns$arity_17__delegate(G__52217,G__52218,G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225,G__52226,G__52227,G__52228,G__52229,G__52230,G__52231,G__52232,G__52233,G__52234);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,G__52259,G__52260,G__52261,G__52262,G__52263){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52245);

(invoc_array[(1)] = G__52246);

(invoc_array[(2)] = G__52247);

(invoc_array[(3)] = G__52248);

(invoc_array[(4)] = G__52249);

(invoc_array[(5)] = G__52250);

(invoc_array[(6)] = G__52251);

(invoc_array[(7)] = G__52252);

(invoc_array[(8)] = G__52253);

(invoc_array[(9)] = G__52254);

(invoc_array[(10)] = G__52255);

(invoc_array[(11)] = G__52256);

(invoc_array[(12)] = G__52257);

(invoc_array[(13)] = G__52258);

(invoc_array[(14)] = G__52259);

(invoc_array[(15)] = G__52260);

(invoc_array[(16)] = G__52261);

(invoc_array[(17)] = G__52262);

(invoc_array[vararg_idx] = G__52263);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,G__52259,G__52260,G__52261,G__52262,var_args){
var G__52263 = null;
if (arguments.length > 18) {
var G__52950__i = 0, G__52950__a = new Array(arguments.length -  18);
while (G__52950__i < G__52950__a.length) {G__52950__a[G__52950__i] = arguments[G__52950__i + 18]; ++G__52950__i;}
  G__52263 = new cljs.core.IndexedSeq(G__52950__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,G__52259,G__52260,G__52261,G__52262,G__52263);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__52951){
var G__52245 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52246 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52247 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52248 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52249 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52250 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52251 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52252 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52253 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52254 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52255 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52256 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52257 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52258 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52259 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52260 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52261 = cljs.core.first(arglist__52951);
arglist__52951 = cljs.core.next(arglist__52951);
var G__52262 = cljs.core.first(arglist__52951);
var G__52263 = cljs.core.rest(arglist__52951);
return sci$impl$fns$arity_18__delegate(G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,G__52259,G__52260,G__52261,G__52262,G__52263);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__52281,G__52282,G__52283,G__52284,G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291,G__52292,G__52293,G__52294,G__52295,G__52296,G__52297,G__52298,G__52299,G__52300){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52281);

(invoc_array[(1)] = G__52282);

(invoc_array[(2)] = G__52283);

(invoc_array[(3)] = G__52284);

(invoc_array[(4)] = G__52285);

(invoc_array[(5)] = G__52286);

(invoc_array[(6)] = G__52287);

(invoc_array[(7)] = G__52288);

(invoc_array[(8)] = G__52289);

(invoc_array[(9)] = G__52290);

(invoc_array[(10)] = G__52291);

(invoc_array[(11)] = G__52292);

(invoc_array[(12)] = G__52293);

(invoc_array[(13)] = G__52294);

(invoc_array[(14)] = G__52295);

(invoc_array[(15)] = G__52296);

(invoc_array[(16)] = G__52297);

(invoc_array[(17)] = G__52298);

(invoc_array[(18)] = G__52299);

(invoc_array[vararg_idx] = G__52300);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__52281,G__52282,G__52283,G__52284,G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291,G__52292,G__52293,G__52294,G__52295,G__52296,G__52297,G__52298,G__52299,var_args){
var G__52300 = null;
if (arguments.length > 19) {
var G__52957__i = 0, G__52957__a = new Array(arguments.length -  19);
while (G__52957__i < G__52957__a.length) {G__52957__a[G__52957__i] = arguments[G__52957__i + 19]; ++G__52957__i;}
  G__52300 = new cljs.core.IndexedSeq(G__52957__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__52281,G__52282,G__52283,G__52284,G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291,G__52292,G__52293,G__52294,G__52295,G__52296,G__52297,G__52298,G__52299,G__52300);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__52958){
var G__52281 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52282 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52283 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52284 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52285 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52286 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52287 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52288 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52289 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52290 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52291 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52292 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52293 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52294 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52295 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52296 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52297 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52298 = cljs.core.first(arglist__52958);
arglist__52958 = cljs.core.next(arglist__52958);
var G__52299 = cljs.core.first(arglist__52958);
var G__52300 = cljs.core.rest(arglist__52958);
return sci$impl$fns$arity_19__delegate(G__52281,G__52282,G__52283,G__52284,G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291,G__52292,G__52293,G__52294,G__52295,G__52296,G__52297,G__52298,G__52299,G__52300);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__52301,G__52302,G__52303,G__52304,G__52305,G__52306,G__52307,G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319,G__52320,G__52321){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52301);

(invoc_array[(1)] = G__52302);

(invoc_array[(2)] = G__52303);

(invoc_array[(3)] = G__52304);

(invoc_array[(4)] = G__52305);

(invoc_array[(5)] = G__52306);

(invoc_array[(6)] = G__52307);

(invoc_array[(7)] = G__52308);

(invoc_array[(8)] = G__52309);

(invoc_array[(9)] = G__52310);

(invoc_array[(10)] = G__52311);

(invoc_array[(11)] = G__52312);

(invoc_array[(12)] = G__52313);

(invoc_array[(13)] = G__52314);

(invoc_array[(14)] = G__52315);

(invoc_array[(15)] = G__52316);

(invoc_array[(16)] = G__52317);

(invoc_array[(17)] = G__52318);

(invoc_array[(18)] = G__52319);

(invoc_array[(19)] = G__52320);

(invoc_array[vararg_idx] = G__52321);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__52301,G__52302,G__52303,G__52304,G__52305,G__52306,G__52307,G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319,G__52320,var_args){
var G__52321 = null;
if (arguments.length > 20) {
var G__52967__i = 0, G__52967__a = new Array(arguments.length -  20);
while (G__52967__i < G__52967__a.length) {G__52967__a[G__52967__i] = arguments[G__52967__i + 20]; ++G__52967__i;}
  G__52321 = new cljs.core.IndexedSeq(G__52967__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__52301,G__52302,G__52303,G__52304,G__52305,G__52306,G__52307,G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319,G__52320,G__52321);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__52968){
var G__52301 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52302 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52303 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52304 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52305 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52306 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52307 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52308 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52309 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52310 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52311 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52312 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52313 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52314 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52315 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52316 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52317 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52318 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52319 = cljs.core.first(arglist__52968);
arglist__52968 = cljs.core.next(arglist__52968);
var G__52320 = cljs.core.first(arglist__52968);
var G__52321 = cljs.core.rest(arglist__52968);
return sci$impl$fns$arity_20__delegate(G__52301,G__52302,G__52303,G__52304,G__52305,G__52306,G__52307,G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319,G__52320,G__52321);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51986))));

}
})():(function (){var G__52328 = fixed_arity;
switch (G__52328) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__51133__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51133__auto__)){
continue;
} else {
return ret__51133__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__52332){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52332);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__52333,G__52334){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52333);

(invoc_array[(1)] = G__52334);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__52335,G__52336,G__52337){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52335);

(invoc_array[(1)] = G__52336);

(invoc_array[(2)] = G__52337);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__52341,G__52342,G__52343,G__52344){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52341);

(invoc_array[(1)] = G__52342);

(invoc_array[(2)] = G__52343);

(invoc_array[(3)] = G__52344);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__52345,G__52346,G__52347,G__52348,G__52349){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52345);

(invoc_array[(1)] = G__52346);

(invoc_array[(2)] = G__52347);

(invoc_array[(3)] = G__52348);

(invoc_array[(4)] = G__52349);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__52350,G__52351,G__52352,G__52353,G__52354,G__52355){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52350);

(invoc_array[(1)] = G__52351);

(invoc_array[(2)] = G__52352);

(invoc_array[(3)] = G__52353);

(invoc_array[(4)] = G__52354);

(invoc_array[(5)] = G__52355);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__52368,G__52369,G__52370,G__52371,G__52372,G__52373,G__52374){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52368);

(invoc_array[(1)] = G__52369);

(invoc_array[(2)] = G__52370);

(invoc_array[(3)] = G__52371);

(invoc_array[(4)] = G__52372);

(invoc_array[(5)] = G__52373);

(invoc_array[(6)] = G__52374);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__52375,G__52376,G__52377,G__52378,G__52379,G__52380,G__52381,G__52382){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52375);

(invoc_array[(1)] = G__52376);

(invoc_array[(2)] = G__52377);

(invoc_array[(3)] = G__52378);

(invoc_array[(4)] = G__52379);

(invoc_array[(5)] = G__52380);

(invoc_array[(6)] = G__52381);

(invoc_array[(7)] = G__52382);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__52406,G__52407,G__52408,G__52409,G__52410,G__52411,G__52412,G__52413,G__52414){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52406);

(invoc_array[(1)] = G__52407);

(invoc_array[(2)] = G__52408);

(invoc_array[(3)] = G__52409);

(invoc_array[(4)] = G__52410);

(invoc_array[(5)] = G__52411);

(invoc_array[(6)] = G__52412);

(invoc_array[(7)] = G__52413);

(invoc_array[(8)] = G__52414);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__52437,G__52438,G__52439,G__52440,G__52441,G__52442,G__52443,G__52444,G__52445,G__52446){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52437);

(invoc_array[(1)] = G__52438);

(invoc_array[(2)] = G__52439);

(invoc_array[(3)] = G__52440);

(invoc_array[(4)] = G__52441);

(invoc_array[(5)] = G__52442);

(invoc_array[(6)] = G__52443);

(invoc_array[(7)] = G__52444);

(invoc_array[(8)] = G__52445);

(invoc_array[(9)] = G__52446);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__52458,G__52459,G__52460,G__52461,G__52462,G__52463,G__52464,G__52465,G__52466,G__52467,G__52468){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52458);

(invoc_array[(1)] = G__52459);

(invoc_array[(2)] = G__52460);

(invoc_array[(3)] = G__52461);

(invoc_array[(4)] = G__52462);

(invoc_array[(5)] = G__52463);

(invoc_array[(6)] = G__52464);

(invoc_array[(7)] = G__52465);

(invoc_array[(8)] = G__52466);

(invoc_array[(9)] = G__52467);

(invoc_array[(10)] = G__52468);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__52476,G__52477,G__52478,G__52479,G__52480,G__52481,G__52482,G__52483,G__52484,G__52485,G__52486,G__52487){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52476);

(invoc_array[(1)] = G__52477);

(invoc_array[(2)] = G__52478);

(invoc_array[(3)] = G__52479);

(invoc_array[(4)] = G__52480);

(invoc_array[(5)] = G__52481);

(invoc_array[(6)] = G__52482);

(invoc_array[(7)] = G__52483);

(invoc_array[(8)] = G__52484);

(invoc_array[(9)] = G__52485);

(invoc_array[(10)] = G__52486);

(invoc_array[(11)] = G__52487);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__52495,G__52496,G__52497,G__52498,G__52499,G__52500,G__52501,G__52502,G__52503,G__52504,G__52505,G__52506,G__52507){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52495);

(invoc_array[(1)] = G__52496);

(invoc_array[(2)] = G__52497);

(invoc_array[(3)] = G__52498);

(invoc_array[(4)] = G__52499);

(invoc_array[(5)] = G__52500);

(invoc_array[(6)] = G__52501);

(invoc_array[(7)] = G__52502);

(invoc_array[(8)] = G__52503);

(invoc_array[(9)] = G__52504);

(invoc_array[(10)] = G__52505);

(invoc_array[(11)] = G__52506);

(invoc_array[(12)] = G__52507);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__52511,G__52512,G__52513,G__52514,G__52515,G__52516,G__52517,G__52518,G__52519,G__52520,G__52521,G__52522,G__52523,G__52524){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52511);

(invoc_array[(1)] = G__52512);

(invoc_array[(2)] = G__52513);

(invoc_array[(3)] = G__52514);

(invoc_array[(4)] = G__52515);

(invoc_array[(5)] = G__52516);

(invoc_array[(6)] = G__52517);

(invoc_array[(7)] = G__52518);

(invoc_array[(8)] = G__52519);

(invoc_array[(9)] = G__52520);

(invoc_array[(10)] = G__52521);

(invoc_array[(11)] = G__52522);

(invoc_array[(12)] = G__52523);

(invoc_array[(13)] = G__52524);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__52529,G__52530,G__52531,G__52532,G__52533,G__52534,G__52535,G__52536,G__52537,G__52538,G__52539,G__52540,G__52541,G__52542,G__52543){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52529);

(invoc_array[(1)] = G__52530);

(invoc_array[(2)] = G__52531);

(invoc_array[(3)] = G__52532);

(invoc_array[(4)] = G__52533);

(invoc_array[(5)] = G__52534);

(invoc_array[(6)] = G__52535);

(invoc_array[(7)] = G__52536);

(invoc_array[(8)] = G__52537);

(invoc_array[(9)] = G__52538);

(invoc_array[(10)] = G__52539);

(invoc_array[(11)] = G__52540);

(invoc_array[(12)] = G__52541);

(invoc_array[(13)] = G__52542);

(invoc_array[(14)] = G__52543);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__52550,G__52551,G__52552,G__52553,G__52554,G__52555,G__52556,G__52557,G__52558,G__52559,G__52560,G__52561,G__52562,G__52563,G__52564,G__52565){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52550);

(invoc_array[(1)] = G__52551);

(invoc_array[(2)] = G__52552);

(invoc_array[(3)] = G__52553);

(invoc_array[(4)] = G__52554);

(invoc_array[(5)] = G__52555);

(invoc_array[(6)] = G__52556);

(invoc_array[(7)] = G__52557);

(invoc_array[(8)] = G__52558);

(invoc_array[(9)] = G__52559);

(invoc_array[(10)] = G__52560);

(invoc_array[(11)] = G__52561);

(invoc_array[(12)] = G__52562);

(invoc_array[(13)] = G__52563);

(invoc_array[(14)] = G__52564);

(invoc_array[(15)] = G__52565);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__52569,G__52570,G__52571,G__52572,G__52573,G__52574,G__52575,G__52576,G__52577,G__52578,G__52579,G__52580,G__52581,G__52582,G__52583,G__52584,G__52585){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52569);

(invoc_array[(1)] = G__52570);

(invoc_array[(2)] = G__52571);

(invoc_array[(3)] = G__52572);

(invoc_array[(4)] = G__52573);

(invoc_array[(5)] = G__52574);

(invoc_array[(6)] = G__52575);

(invoc_array[(7)] = G__52576);

(invoc_array[(8)] = G__52577);

(invoc_array[(9)] = G__52578);

(invoc_array[(10)] = G__52579);

(invoc_array[(11)] = G__52580);

(invoc_array[(12)] = G__52581);

(invoc_array[(13)] = G__52582);

(invoc_array[(14)] = G__52583);

(invoc_array[(15)] = G__52584);

(invoc_array[(16)] = G__52585);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__52594,G__52595,G__52596,G__52597,G__52598,G__52599,G__52600,G__52601,G__52602,G__52603,G__52604,G__52605,G__52606,G__52607,G__52608,G__52609,G__52610,G__52611){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52594);

(invoc_array[(1)] = G__52595);

(invoc_array[(2)] = G__52596);

(invoc_array[(3)] = G__52597);

(invoc_array[(4)] = G__52598);

(invoc_array[(5)] = G__52599);

(invoc_array[(6)] = G__52600);

(invoc_array[(7)] = G__52601);

(invoc_array[(8)] = G__52602);

(invoc_array[(9)] = G__52603);

(invoc_array[(10)] = G__52604);

(invoc_array[(11)] = G__52605);

(invoc_array[(12)] = G__52606);

(invoc_array[(13)] = G__52607);

(invoc_array[(14)] = G__52608);

(invoc_array[(15)] = G__52609);

(invoc_array[(16)] = G__52610);

(invoc_array[(17)] = G__52611);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__52619,G__52620,G__52621,G__52622,G__52623,G__52624,G__52625,G__52626,G__52627,G__52628,G__52629,G__52630,G__52631,G__52632,G__52633,G__52634,G__52635,G__52636,G__52637){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52619);

(invoc_array[(1)] = G__52620);

(invoc_array[(2)] = G__52621);

(invoc_array[(3)] = G__52622);

(invoc_array[(4)] = G__52623);

(invoc_array[(5)] = G__52624);

(invoc_array[(6)] = G__52625);

(invoc_array[(7)] = G__52626);

(invoc_array[(8)] = G__52627);

(invoc_array[(9)] = G__52628);

(invoc_array[(10)] = G__52629);

(invoc_array[(11)] = G__52630);

(invoc_array[(12)] = G__52631);

(invoc_array[(13)] = G__52632);

(invoc_array[(14)] = G__52633);

(invoc_array[(15)] = G__52634);

(invoc_array[(16)] = G__52635);

(invoc_array[(17)] = G__52636);

(invoc_array[(18)] = G__52637);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__52642,G__52643,G__52644,G__52645,G__52646,G__52647,G__52648,G__52649,G__52650,G__52651,G__52652,G__52653,G__52654,G__52655,G__52656,G__52657,G__52658,G__52659,G__52660,G__52661){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52642);

(invoc_array[(1)] = G__52643);

(invoc_array[(2)] = G__52644);

(invoc_array[(3)] = G__52645);

(invoc_array[(4)] = G__52646);

(invoc_array[(5)] = G__52647);

(invoc_array[(6)] = G__52648);

(invoc_array[(7)] = G__52649);

(invoc_array[(8)] = G__52650);

(invoc_array[(9)] = G__52651);

(invoc_array[(10)] = G__52652);

(invoc_array[(11)] = G__52653);

(invoc_array[(12)] = G__52654);

(invoc_array[(13)] = G__52655);

(invoc_array[(14)] = G__52656);

(invoc_array[(15)] = G__52657);

(invoc_array[(16)] = G__52658);

(invoc_array[(17)] = G__52659);

(invoc_array[(18)] = G__52660);

(invoc_array[(19)] = G__52661);

while(true){
var ret__51134__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51134__auto__)){
continue;
} else {
return ret__51134__auto__;
}
break;
}
});

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52328))));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__52992 = cljs.core.next(params__$1);
var G__52993 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52994 = lets;
params__$1 = G__52992;
new_params = G__52993;
lets = G__52994;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52995 = cljs.core.next(params__$1);
var G__52996 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52997 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__52995;
new_params = G__52996;
lets = G__52997;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52998 = arguments.length;
var i__5898__auto___52999 = (0);
while(true){
if((i__5898__auto___52999 < len__5897__auto___52998)){
args__5903__auto__.push((arguments[i__5898__auto___52999]));

var G__53000 = (i__5898__auto___52999 + (1));
i__5898__auto___52999 = G__53000;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?(""+"Parameter declaration "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))+" should be a vector"):(""+"Parameter declaration missing")),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((""+"Invalid signature "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)+" should be a list"),form);
} else {
}

var vec__52701 = sig;
var seq__52702 = cljs.core.seq(vec__52701);
var first__52703 = cljs.core.first(seq__52702);
var seq__52702__$1 = cljs.core.next(seq__52702);
var params = first__52703;
var body = seq__52702__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?(""+"Parameter declaration "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)+" should be a vector"):(""+"Invalid signature "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)+" should be a list")),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5162__auto__ = conds;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq52688){
var G__52689 = cljs.core.first(seq52688);
var seq52688__$1 = cljs.core.next(seq52688);
var G__52690 = cljs.core.first(seq52688__$1);
var seq52688__$2 = cljs.core.next(seq52688__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52689,G__52690,seq52688__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__53003 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__53004 = cljs.core.next(fdecls);
ret = G__53003;
fdecls = G__53004;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53005 = arguments.length;
var i__5898__auto___53006 = (0);
while(true){
if((i__5898__auto___53006 < len__5897__auto___53005)){
args__5903__auto__.push((arguments[i__5898__auto___53006]));

var G__53007 = (i__5898__auto___53006 + (1));
i__5898__auto___53006 = G__53007;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5162__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq52724){
var G__52728 = cljs.core.first(seq52724);
var seq52724__$1 = cljs.core.next(seq52724);
var G__52729 = cljs.core.first(seq52724__$1);
var seq52724__$2 = cljs.core.next(seq52724__$1);
var G__52730 = cljs.core.first(seq52724__$2);
var seq52724__$3 = cljs.core.next(seq52724__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52728,G__52729,G__52730,seq52724__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53008 = arguments.length;
var i__5898__auto___53009 = (0);
while(true){
if((i__5898__auto___53009 < len__5897__auto___53008)){
args__5903__auto__.push((arguments[i__5898__auto___53009]));

var G__53010 = (i__5898__auto___53009 + (1));
i__5898__auto___53009 = G__53010;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__53011 = cljs.core.cons(f,p);
var G__53012 = cljs.core.next(args__$1);
p = G__53011;
args__$1 = G__53012;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__53014 = cljs.core.cons(f,p);
var G__53015 = cljs.core.next(args__$1);
p = G__53014;
args__$1 = G__53015;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__53016 = cljs.core.next(fd);
fd = G__53016;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__53017 = cljs.core.next(fd);
fd = G__53017;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__53018 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__53019 = cljs.core.next(ds);
acc = G__53018;
ds = G__53019;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__53020 = cljs.core.next(p);
var G__53021 = cljs.core.cons(cljs.core.first(p),d);
p = G__53020;
d = G__53021;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq52740){
var G__52741 = cljs.core.first(seq52740);
var seq52740__$1 = cljs.core.next(seq52740);
var G__52742 = cljs.core.first(seq52740__$1);
var seq52740__$2 = cljs.core.next(seq52740__$1);
var G__52743 = cljs.core.first(seq52740__$2);
var seq52740__$3 = cljs.core.next(seq52740__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52741,G__52742,G__52743,seq52740__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
