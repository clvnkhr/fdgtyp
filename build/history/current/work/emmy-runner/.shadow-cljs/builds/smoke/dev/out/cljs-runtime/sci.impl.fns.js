goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__51962 = arguments.length;
switch (G__51962) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51971 = fixed_arity;
switch (G__51971) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__51973){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__51973);

while(true){
var ret__51158__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51158__auto__)){
continue;
} else {
return ret__51158__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__51973 = null;
if (arguments.length > 0) {
var G__52745__i = 0, G__52745__a = new Array(arguments.length -  0);
while (G__52745__i < G__52745__a.length) {G__52745__a[G__52745__i] = arguments[G__52745__i + 0]; ++G__52745__i;}
  G__51973 = new cljs.core.IndexedSeq(G__52745__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__51973);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__52746){
var G__51973 = cljs.core.seq(arglist__52746);
return sci$impl$fns$arity_0__delegate(G__51973);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__51992,G__51993){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51992);

(invoc_array[vararg_idx] = G__51993);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__51992,var_args){
var G__51993 = null;
if (arguments.length > 1) {
var G__52748__i = 0, G__52748__a = new Array(arguments.length -  1);
while (G__52748__i < G__52748__a.length) {G__52748__a[G__52748__i] = arguments[G__52748__i + 1]; ++G__52748__i;}
  G__51993 = new cljs.core.IndexedSeq(G__52748__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__51992,G__51993);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__52749){
var G__51992 = cljs.core.first(arglist__52749);
var G__51993 = cljs.core.rest(arglist__52749);
return sci$impl$fns$arity_1__delegate(G__51992,G__51993);
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
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__51999,G__52000,var_args){
var G__52001 = null;
if (arguments.length > 2) {
var G__52750__i = 0, G__52750__a = new Array(arguments.length -  2);
while (G__52750__i < G__52750__a.length) {G__52750__a[G__52750__i] = arguments[G__52750__i + 2]; ++G__52750__i;}
  G__52001 = new cljs.core.IndexedSeq(G__52750__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__51999,G__52000,G__52001);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__52753){
var G__51999 = cljs.core.first(arglist__52753);
arglist__52753 = cljs.core.next(arglist__52753);
var G__52000 = cljs.core.first(arglist__52753);
var G__52001 = cljs.core.rest(arglist__52753);
return sci$impl$fns$arity_2__delegate(G__51999,G__52000,G__52001);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__52006,G__52007,G__52008,G__52009){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52006);

(invoc_array[(1)] = G__52007);

(invoc_array[(2)] = G__52008);

(invoc_array[vararg_idx] = G__52009);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__52006,G__52007,G__52008,var_args){
var G__52009 = null;
if (arguments.length > 3) {
var G__52764__i = 0, G__52764__a = new Array(arguments.length -  3);
while (G__52764__i < G__52764__a.length) {G__52764__a[G__52764__i] = arguments[G__52764__i + 3]; ++G__52764__i;}
  G__52009 = new cljs.core.IndexedSeq(G__52764__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__52006,G__52007,G__52008,G__52009);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__52765){
var G__52006 = cljs.core.first(arglist__52765);
arglist__52765 = cljs.core.next(arglist__52765);
var G__52007 = cljs.core.first(arglist__52765);
arglist__52765 = cljs.core.next(arglist__52765);
var G__52008 = cljs.core.first(arglist__52765);
var G__52009 = cljs.core.rest(arglist__52765);
return sci$impl$fns$arity_3__delegate(G__52006,G__52007,G__52008,G__52009);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__52026,G__52027,G__52028,G__52029,G__52030){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52026);

(invoc_array[(1)] = G__52027);

(invoc_array[(2)] = G__52028);

(invoc_array[(3)] = G__52029);

(invoc_array[vararg_idx] = G__52030);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__52026,G__52027,G__52028,G__52029,var_args){
var G__52030 = null;
if (arguments.length > 4) {
var G__52766__i = 0, G__52766__a = new Array(arguments.length -  4);
while (G__52766__i < G__52766__a.length) {G__52766__a[G__52766__i] = arguments[G__52766__i + 4]; ++G__52766__i;}
  G__52030 = new cljs.core.IndexedSeq(G__52766__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__52026,G__52027,G__52028,G__52029,G__52030);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__52768){
var G__52026 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__52027 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__52028 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__52029 = cljs.core.first(arglist__52768);
var G__52030 = cljs.core.rest(arglist__52768);
return sci$impl$fns$arity_4__delegate(G__52026,G__52027,G__52028,G__52029,G__52030);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__52036,G__52037,G__52038,G__52039,G__52040,G__52041){
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

(invoc_array[vararg_idx] = G__52041);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__52036,G__52037,G__52038,G__52039,G__52040,var_args){
var G__52041 = null;
if (arguments.length > 5) {
var G__52769__i = 0, G__52769__a = new Array(arguments.length -  5);
while (G__52769__i < G__52769__a.length) {G__52769__a[G__52769__i] = arguments[G__52769__i + 5]; ++G__52769__i;}
  G__52041 = new cljs.core.IndexedSeq(G__52769__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__52770){
var G__52036 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__52037 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__52038 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__52039 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__52040 = cljs.core.first(arglist__52770);
var G__52041 = cljs.core.rest(arglist__52770);
return sci$impl$fns$arity_5__delegate(G__52036,G__52037,G__52038,G__52039,G__52040,G__52041);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52048);

(invoc_array[(1)] = G__52049);

(invoc_array[(2)] = G__52050);

(invoc_array[(3)] = G__52051);

(invoc_array[(4)] = G__52052);

(invoc_array[(5)] = G__52053);

(invoc_array[vararg_idx] = G__52054);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,var_args){
var G__52054 = null;
if (arguments.length > 6) {
var G__52775__i = 0, G__52775__a = new Array(arguments.length -  6);
while (G__52775__i < G__52775__a.length) {G__52775__a[G__52775__i] = arguments[G__52775__i + 6]; ++G__52775__i;}
  G__52054 = new cljs.core.IndexedSeq(G__52775__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__52776){
var G__52048 = cljs.core.first(arglist__52776);
arglist__52776 = cljs.core.next(arglist__52776);
var G__52049 = cljs.core.first(arglist__52776);
arglist__52776 = cljs.core.next(arglist__52776);
var G__52050 = cljs.core.first(arglist__52776);
arglist__52776 = cljs.core.next(arglist__52776);
var G__52051 = cljs.core.first(arglist__52776);
arglist__52776 = cljs.core.next(arglist__52776);
var G__52052 = cljs.core.first(arglist__52776);
arglist__52776 = cljs.core.next(arglist__52776);
var G__52053 = cljs.core.first(arglist__52776);
var G__52054 = cljs.core.rest(arglist__52776);
return sci$impl$fns$arity_6__delegate(G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52057);

(invoc_array[(1)] = G__52058);

(invoc_array[(2)] = G__52059);

(invoc_array[(3)] = G__52060);

(invoc_array[(4)] = G__52061);

(invoc_array[(5)] = G__52062);

(invoc_array[(6)] = G__52063);

(invoc_array[vararg_idx] = G__52064);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,var_args){
var G__52064 = null;
if (arguments.length > 7) {
var G__52781__i = 0, G__52781__a = new Array(arguments.length -  7);
while (G__52781__i < G__52781__a.length) {G__52781__a[G__52781__i] = arguments[G__52781__i + 7]; ++G__52781__i;}
  G__52064 = new cljs.core.IndexedSeq(G__52781__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__52782){
var G__52057 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__52058 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__52059 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__52060 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__52061 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__52062 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__52063 = cljs.core.first(arglist__52782);
var G__52064 = cljs.core.rest(arglist__52782);
return sci$impl$fns$arity_7__delegate(G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52068);

(invoc_array[(1)] = G__52069);

(invoc_array[(2)] = G__52070);

(invoc_array[(3)] = G__52071);

(invoc_array[(4)] = G__52072);

(invoc_array[(5)] = G__52073);

(invoc_array[(6)] = G__52074);

(invoc_array[(7)] = G__52075);

(invoc_array[vararg_idx] = G__52076);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,var_args){
var G__52076 = null;
if (arguments.length > 8) {
var G__52783__i = 0, G__52783__a = new Array(arguments.length -  8);
while (G__52783__i < G__52783__a.length) {G__52783__a[G__52783__i] = arguments[G__52783__i + 8]; ++G__52783__i;}
  G__52076 = new cljs.core.IndexedSeq(G__52783__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__52784){
var G__52068 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52069 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52070 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52071 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52072 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52073 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52074 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52075 = cljs.core.first(arglist__52784);
var G__52076 = cljs.core.rest(arglist__52784);
return sci$impl$fns$arity_8__delegate(G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52078);

(invoc_array[(1)] = G__52079);

(invoc_array[(2)] = G__52080);

(invoc_array[(3)] = G__52081);

(invoc_array[(4)] = G__52082);

(invoc_array[(5)] = G__52083);

(invoc_array[(6)] = G__52084);

(invoc_array[(7)] = G__52085);

(invoc_array[(8)] = G__52086);

(invoc_array[vararg_idx] = G__52087);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,var_args){
var G__52087 = null;
if (arguments.length > 9) {
var G__52789__i = 0, G__52789__a = new Array(arguments.length -  9);
while (G__52789__i < G__52789__a.length) {G__52789__a[G__52789__i] = arguments[G__52789__i + 9]; ++G__52789__i;}
  G__52087 = new cljs.core.IndexedSeq(G__52789__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__52790){
var G__52078 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52079 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52080 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52081 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52082 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52083 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52084 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52085 = cljs.core.first(arglist__52790);
arglist__52790 = cljs.core.next(arglist__52790);
var G__52086 = cljs.core.first(arglist__52790);
var G__52087 = cljs.core.rest(arglist__52790);
return sci$impl$fns$arity_9__delegate(G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,G__52105){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52095);

(invoc_array[(1)] = G__52096);

(invoc_array[(2)] = G__52097);

(invoc_array[(3)] = G__52098);

(invoc_array[(4)] = G__52099);

(invoc_array[(5)] = G__52100);

(invoc_array[(6)] = G__52101);

(invoc_array[(7)] = G__52102);

(invoc_array[(8)] = G__52103);

(invoc_array[(9)] = G__52104);

(invoc_array[vararg_idx] = G__52105);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,var_args){
var G__52105 = null;
if (arguments.length > 10) {
var G__52802__i = 0, G__52802__a = new Array(arguments.length -  10);
while (G__52802__i < G__52802__a.length) {G__52802__a[G__52802__i] = arguments[G__52802__i + 10]; ++G__52802__i;}
  G__52105 = new cljs.core.IndexedSeq(G__52802__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,G__52105);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__52803){
var G__52095 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52096 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52097 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52098 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52099 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52100 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52101 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52102 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52103 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52104 = cljs.core.first(arglist__52803);
var G__52105 = cljs.core.rest(arglist__52803);
return sci$impl$fns$arity_10__delegate(G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,G__52105);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,G__52127){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52116);

(invoc_array[(1)] = G__52117);

(invoc_array[(2)] = G__52118);

(invoc_array[(3)] = G__52119);

(invoc_array[(4)] = G__52120);

(invoc_array[(5)] = G__52121);

(invoc_array[(6)] = G__52122);

(invoc_array[(7)] = G__52123);

(invoc_array[(8)] = G__52124);

(invoc_array[(9)] = G__52125);

(invoc_array[(10)] = G__52126);

(invoc_array[vararg_idx] = G__52127);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,var_args){
var G__52127 = null;
if (arguments.length > 11) {
var G__52814__i = 0, G__52814__a = new Array(arguments.length -  11);
while (G__52814__i < G__52814__a.length) {G__52814__a[G__52814__i] = arguments[G__52814__i + 11]; ++G__52814__i;}
  G__52127 = new cljs.core.IndexedSeq(G__52814__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,G__52127);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__52816){
var G__52116 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52117 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52118 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52119 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52120 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52121 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52122 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52123 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52124 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52125 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__52126 = cljs.core.first(arglist__52816);
var G__52127 = cljs.core.rest(arglist__52816);
return sci$impl$fns$arity_11__delegate(G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,G__52127);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,G__52158,G__52159,G__52160,G__52161){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52149);

(invoc_array[(1)] = G__52150);

(invoc_array[(2)] = G__52151);

(invoc_array[(3)] = G__52152);

(invoc_array[(4)] = G__52153);

(invoc_array[(5)] = G__52154);

(invoc_array[(6)] = G__52155);

(invoc_array[(7)] = G__52156);

(invoc_array[(8)] = G__52157);

(invoc_array[(9)] = G__52158);

(invoc_array[(10)] = G__52159);

(invoc_array[(11)] = G__52160);

(invoc_array[vararg_idx] = G__52161);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,G__52158,G__52159,G__52160,var_args){
var G__52161 = null;
if (arguments.length > 12) {
var G__52817__i = 0, G__52817__a = new Array(arguments.length -  12);
while (G__52817__i < G__52817__a.length) {G__52817__a[G__52817__i] = arguments[G__52817__i + 12]; ++G__52817__i;}
  G__52161 = new cljs.core.IndexedSeq(G__52817__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,G__52158,G__52159,G__52160,G__52161);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__52818){
var G__52149 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52150 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52151 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52152 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52153 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52154 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52155 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52156 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52157 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52158 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52159 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52160 = cljs.core.first(arglist__52818);
var G__52161 = cljs.core.rest(arglist__52818);
return sci$impl$fns$arity_12__delegate(G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,G__52158,G__52159,G__52160,G__52161);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,G__52182,G__52183,G__52184){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52171);

(invoc_array[(1)] = G__52172);

(invoc_array[(2)] = G__52173);

(invoc_array[(3)] = G__52174);

(invoc_array[(4)] = G__52175);

(invoc_array[(5)] = G__52176);

(invoc_array[(6)] = G__52177);

(invoc_array[(7)] = G__52178);

(invoc_array[(8)] = G__52179);

(invoc_array[(9)] = G__52180);

(invoc_array[(10)] = G__52181);

(invoc_array[(11)] = G__52182);

(invoc_array[(12)] = G__52183);

(invoc_array[vararg_idx] = G__52184);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,G__52182,G__52183,var_args){
var G__52184 = null;
if (arguments.length > 13) {
var G__52820__i = 0, G__52820__a = new Array(arguments.length -  13);
while (G__52820__i < G__52820__a.length) {G__52820__a[G__52820__i] = arguments[G__52820__i + 13]; ++G__52820__i;}
  G__52184 = new cljs.core.IndexedSeq(G__52820__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,G__52182,G__52183,G__52184);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__52821){
var G__52171 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52172 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52173 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52174 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52175 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52176 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52177 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52178 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52179 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52180 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52181 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52182 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52183 = cljs.core.first(arglist__52821);
var G__52184 = cljs.core.rest(arglist__52821);
return sci$impl$fns$arity_13__delegate(G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,G__52182,G__52183,G__52184);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__52189,G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52189);

(invoc_array[(1)] = G__52190);

(invoc_array[(2)] = G__52191);

(invoc_array[(3)] = G__52192);

(invoc_array[(4)] = G__52193);

(invoc_array[(5)] = G__52194);

(invoc_array[(6)] = G__52195);

(invoc_array[(7)] = G__52196);

(invoc_array[(8)] = G__52197);

(invoc_array[(9)] = G__52198);

(invoc_array[(10)] = G__52199);

(invoc_array[(11)] = G__52200);

(invoc_array[(12)] = G__52201);

(invoc_array[(13)] = G__52202);

(invoc_array[vararg_idx] = G__52203);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__52189,G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,var_args){
var G__52203 = null;
if (arguments.length > 14) {
var G__52822__i = 0, G__52822__a = new Array(arguments.length -  14);
while (G__52822__i < G__52822__a.length) {G__52822__a[G__52822__i] = arguments[G__52822__i + 14]; ++G__52822__i;}
  G__52203 = new cljs.core.IndexedSeq(G__52822__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__52189,G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__52823){
var G__52189 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52190 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52191 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52192 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52193 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52194 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52195 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52196 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52197 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52198 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52199 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52200 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52201 = cljs.core.first(arglist__52823);
arglist__52823 = cljs.core.next(arglist__52823);
var G__52202 = cljs.core.first(arglist__52823);
var G__52203 = cljs.core.rest(arglist__52823);
return sci$impl$fns$arity_14__delegate(G__52189,G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__52210,G__52211,G__52212,G__52213,G__52214,G__52215,G__52216,G__52217,G__52218,G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52210);

(invoc_array[(1)] = G__52211);

(invoc_array[(2)] = G__52212);

(invoc_array[(3)] = G__52213);

(invoc_array[(4)] = G__52214);

(invoc_array[(5)] = G__52215);

(invoc_array[(6)] = G__52216);

(invoc_array[(7)] = G__52217);

(invoc_array[(8)] = G__52218);

(invoc_array[(9)] = G__52219);

(invoc_array[(10)] = G__52220);

(invoc_array[(11)] = G__52221);

(invoc_array[(12)] = G__52222);

(invoc_array[(13)] = G__52223);

(invoc_array[(14)] = G__52224);

(invoc_array[vararg_idx] = G__52225);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__52210,G__52211,G__52212,G__52213,G__52214,G__52215,G__52216,G__52217,G__52218,G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,var_args){
var G__52225 = null;
if (arguments.length > 15) {
var G__52830__i = 0, G__52830__a = new Array(arguments.length -  15);
while (G__52830__i < G__52830__a.length) {G__52830__a[G__52830__i] = arguments[G__52830__i + 15]; ++G__52830__i;}
  G__52225 = new cljs.core.IndexedSeq(G__52830__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__52210,G__52211,G__52212,G__52213,G__52214,G__52215,G__52216,G__52217,G__52218,G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__52831){
var G__52210 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52211 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52212 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52213 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52214 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52215 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52216 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52217 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52218 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52219 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52220 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52221 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52222 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52223 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52224 = cljs.core.first(arglist__52831);
var G__52225 = cljs.core.rest(arglist__52831);
return sci$impl$fns$arity_15__delegate(G__52210,G__52211,G__52212,G__52213,G__52214,G__52215,G__52216,G__52217,G__52218,G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__52229,G__52230,G__52231,G__52232,G__52233,G__52234,G__52235,G__52236,G__52237,G__52238,G__52239,G__52240,G__52241,G__52242,G__52243,G__52244,G__52245){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52229);

(invoc_array[(1)] = G__52230);

(invoc_array[(2)] = G__52231);

(invoc_array[(3)] = G__52232);

(invoc_array[(4)] = G__52233);

(invoc_array[(5)] = G__52234);

(invoc_array[(6)] = G__52235);

(invoc_array[(7)] = G__52236);

(invoc_array[(8)] = G__52237);

(invoc_array[(9)] = G__52238);

(invoc_array[(10)] = G__52239);

(invoc_array[(11)] = G__52240);

(invoc_array[(12)] = G__52241);

(invoc_array[(13)] = G__52242);

(invoc_array[(14)] = G__52243);

(invoc_array[(15)] = G__52244);

(invoc_array[vararg_idx] = G__52245);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__52229,G__52230,G__52231,G__52232,G__52233,G__52234,G__52235,G__52236,G__52237,G__52238,G__52239,G__52240,G__52241,G__52242,G__52243,G__52244,var_args){
var G__52245 = null;
if (arguments.length > 16) {
var G__52834__i = 0, G__52834__a = new Array(arguments.length -  16);
while (G__52834__i < G__52834__a.length) {G__52834__a[G__52834__i] = arguments[G__52834__i + 16]; ++G__52834__i;}
  G__52245 = new cljs.core.IndexedSeq(G__52834__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__52229,G__52230,G__52231,G__52232,G__52233,G__52234,G__52235,G__52236,G__52237,G__52238,G__52239,G__52240,G__52241,G__52242,G__52243,G__52244,G__52245);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__52835){
var G__52229 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52230 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52231 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52232 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52233 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52234 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52235 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52236 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52237 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52238 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52239 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52240 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52241 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52242 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52243 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52244 = cljs.core.first(arglist__52835);
var G__52245 = cljs.core.rest(arglist__52835);
return sci$impl$fns$arity_16__delegate(G__52229,G__52230,G__52231,G__52232,G__52233,G__52234,G__52235,G__52236,G__52237,G__52238,G__52239,G__52240,G__52241,G__52242,G__52243,G__52244,G__52245);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,G__52259,G__52260,G__52261,G__52262,G__52263){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52246);

(invoc_array[(1)] = G__52247);

(invoc_array[(2)] = G__52248);

(invoc_array[(3)] = G__52249);

(invoc_array[(4)] = G__52250);

(invoc_array[(5)] = G__52251);

(invoc_array[(6)] = G__52252);

(invoc_array[(7)] = G__52253);

(invoc_array[(8)] = G__52254);

(invoc_array[(9)] = G__52255);

(invoc_array[(10)] = G__52256);

(invoc_array[(11)] = G__52257);

(invoc_array[(12)] = G__52258);

(invoc_array[(13)] = G__52259);

(invoc_array[(14)] = G__52260);

(invoc_array[(15)] = G__52261);

(invoc_array[(16)] = G__52262);

(invoc_array[vararg_idx] = G__52263);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,G__52259,G__52260,G__52261,G__52262,var_args){
var G__52263 = null;
if (arguments.length > 17) {
var G__52837__i = 0, G__52837__a = new Array(arguments.length -  17);
while (G__52837__i < G__52837__a.length) {G__52837__a[G__52837__i] = arguments[G__52837__i + 17]; ++G__52837__i;}
  G__52263 = new cljs.core.IndexedSeq(G__52837__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,G__52259,G__52260,G__52261,G__52262,G__52263);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__52838){
var G__52246 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52247 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52248 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52249 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52250 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52251 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52252 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52253 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52254 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52255 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52256 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52257 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52258 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52259 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52260 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52261 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52262 = cljs.core.first(arglist__52838);
var G__52263 = cljs.core.rest(arglist__52838);
return sci$impl$fns$arity_17__delegate(G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,G__52259,G__52260,G__52261,G__52262,G__52263);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270,G__52271,G__52272,G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,G__52282){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52264);

(invoc_array[(1)] = G__52265);

(invoc_array[(2)] = G__52266);

(invoc_array[(3)] = G__52267);

(invoc_array[(4)] = G__52268);

(invoc_array[(5)] = G__52269);

(invoc_array[(6)] = G__52270);

(invoc_array[(7)] = G__52271);

(invoc_array[(8)] = G__52272);

(invoc_array[(9)] = G__52273);

(invoc_array[(10)] = G__52274);

(invoc_array[(11)] = G__52275);

(invoc_array[(12)] = G__52276);

(invoc_array[(13)] = G__52277);

(invoc_array[(14)] = G__52278);

(invoc_array[(15)] = G__52279);

(invoc_array[(16)] = G__52280);

(invoc_array[(17)] = G__52281);

(invoc_array[vararg_idx] = G__52282);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270,G__52271,G__52272,G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,var_args){
var G__52282 = null;
if (arguments.length > 18) {
var G__52839__i = 0, G__52839__a = new Array(arguments.length -  18);
while (G__52839__i < G__52839__a.length) {G__52839__a[G__52839__i] = arguments[G__52839__i + 18]; ++G__52839__i;}
  G__52282 = new cljs.core.IndexedSeq(G__52839__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270,G__52271,G__52272,G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,G__52282);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__52840){
var G__52264 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52265 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52266 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52267 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52268 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52269 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52270 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52271 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52272 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52273 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52274 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52275 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52276 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52277 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52278 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52279 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52280 = cljs.core.first(arglist__52840);
arglist__52840 = cljs.core.next(arglist__52840);
var G__52281 = cljs.core.first(arglist__52840);
var G__52282 = cljs.core.rest(arglist__52840);
return sci$impl$fns$arity_18__delegate(G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270,G__52271,G__52272,G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,G__52282);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291,G__52292,G__52293,G__52294,G__52295,G__52296,G__52297,G__52298,G__52299,G__52300,G__52301,G__52302,G__52303,G__52304){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52285);

(invoc_array[(1)] = G__52286);

(invoc_array[(2)] = G__52287);

(invoc_array[(3)] = G__52288);

(invoc_array[(4)] = G__52289);

(invoc_array[(5)] = G__52290);

(invoc_array[(6)] = G__52291);

(invoc_array[(7)] = G__52292);

(invoc_array[(8)] = G__52293);

(invoc_array[(9)] = G__52294);

(invoc_array[(10)] = G__52295);

(invoc_array[(11)] = G__52296);

(invoc_array[(12)] = G__52297);

(invoc_array[(13)] = G__52298);

(invoc_array[(14)] = G__52299);

(invoc_array[(15)] = G__52300);

(invoc_array[(16)] = G__52301);

(invoc_array[(17)] = G__52302);

(invoc_array[(18)] = G__52303);

(invoc_array[vararg_idx] = G__52304);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291,G__52292,G__52293,G__52294,G__52295,G__52296,G__52297,G__52298,G__52299,G__52300,G__52301,G__52302,G__52303,var_args){
var G__52304 = null;
if (arguments.length > 19) {
var G__52843__i = 0, G__52843__a = new Array(arguments.length -  19);
while (G__52843__i < G__52843__a.length) {G__52843__a[G__52843__i] = arguments[G__52843__i + 19]; ++G__52843__i;}
  G__52304 = new cljs.core.IndexedSeq(G__52843__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291,G__52292,G__52293,G__52294,G__52295,G__52296,G__52297,G__52298,G__52299,G__52300,G__52301,G__52302,G__52303,G__52304);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__52844){
var G__52285 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52286 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52287 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52288 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52289 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52290 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52291 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52292 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52293 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52294 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52295 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52296 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52297 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52298 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52299 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52300 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52301 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52302 = cljs.core.first(arglist__52844);
arglist__52844 = cljs.core.next(arglist__52844);
var G__52303 = cljs.core.first(arglist__52844);
var G__52304 = cljs.core.rest(arglist__52844);
return sci$impl$fns$arity_19__delegate(G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291,G__52292,G__52293,G__52294,G__52295,G__52296,G__52297,G__52298,G__52299,G__52300,G__52301,G__52302,G__52303,G__52304);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319,G__52320,G__52321,G__52322,G__52323,G__52324,G__52325,G__52326,G__52327,G__52328){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52308);

(invoc_array[(1)] = G__52309);

(invoc_array[(2)] = G__52310);

(invoc_array[(3)] = G__52311);

(invoc_array[(4)] = G__52312);

(invoc_array[(5)] = G__52313);

(invoc_array[(6)] = G__52314);

(invoc_array[(7)] = G__52315);

(invoc_array[(8)] = G__52316);

(invoc_array[(9)] = G__52317);

(invoc_array[(10)] = G__52318);

(invoc_array[(11)] = G__52319);

(invoc_array[(12)] = G__52320);

(invoc_array[(13)] = G__52321);

(invoc_array[(14)] = G__52322);

(invoc_array[(15)] = G__52323);

(invoc_array[(16)] = G__52324);

(invoc_array[(17)] = G__52325);

(invoc_array[(18)] = G__52326);

(invoc_array[(19)] = G__52327);

(invoc_array[vararg_idx] = G__52328);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319,G__52320,G__52321,G__52322,G__52323,G__52324,G__52325,G__52326,G__52327,var_args){
var G__52328 = null;
if (arguments.length > 20) {
var G__52848__i = 0, G__52848__a = new Array(arguments.length -  20);
while (G__52848__i < G__52848__a.length) {G__52848__a[G__52848__i] = arguments[G__52848__i + 20]; ++G__52848__i;}
  G__52328 = new cljs.core.IndexedSeq(G__52848__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319,G__52320,G__52321,G__52322,G__52323,G__52324,G__52325,G__52326,G__52327,G__52328);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__52849){
var G__52308 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52309 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52310 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52311 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52312 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52313 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52314 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52315 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52316 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52317 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52318 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52319 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52320 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52321 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52322 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52323 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52324 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52325 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52326 = cljs.core.first(arglist__52849);
arglist__52849 = cljs.core.next(arglist__52849);
var G__52327 = cljs.core.first(arglist__52849);
var G__52328 = cljs.core.rest(arglist__52849);
return sci$impl$fns$arity_20__delegate(G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319,G__52320,G__52321,G__52322,G__52323,G__52324,G__52325,G__52326,G__52327,G__52328);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51971))));

}
})():(function (){var G__52339 = fixed_arity;
switch (G__52339) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__51158__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51158__auto__)){
continue;
} else {
return ret__51158__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__52341){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52341);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__52342,G__52343){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52342);

(invoc_array[(1)] = G__52343);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__52353,G__52354,G__52355){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52353);

(invoc_array[(1)] = G__52354);

(invoc_array[(2)] = G__52355);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__52356,G__52357,G__52358,G__52359){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52356);

(invoc_array[(1)] = G__52357);

(invoc_array[(2)] = G__52358);

(invoc_array[(3)] = G__52359);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__52375,G__52376,G__52377,G__52378,G__52379){
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

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__52383,G__52384,G__52385,G__52386,G__52387,G__52388){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52383);

(invoc_array[(1)] = G__52384);

(invoc_array[(2)] = G__52385);

(invoc_array[(3)] = G__52386);

(invoc_array[(4)] = G__52387);

(invoc_array[(5)] = G__52388);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__52389,G__52390,G__52391,G__52392,G__52393,G__52394,G__52395){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52389);

(invoc_array[(1)] = G__52390);

(invoc_array[(2)] = G__52391);

(invoc_array[(3)] = G__52392);

(invoc_array[(4)] = G__52393);

(invoc_array[(5)] = G__52394);

(invoc_array[(6)] = G__52395);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__52396,G__52397,G__52398,G__52399,G__52400,G__52401,G__52402,G__52403){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52396);

(invoc_array[(1)] = G__52397);

(invoc_array[(2)] = G__52398);

(invoc_array[(3)] = G__52399);

(invoc_array[(4)] = G__52400);

(invoc_array[(5)] = G__52401);

(invoc_array[(6)] = G__52402);

(invoc_array[(7)] = G__52403);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__52405,G__52406,G__52407,G__52408,G__52409,G__52410,G__52411,G__52412,G__52413){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52405);

(invoc_array[(1)] = G__52406);

(invoc_array[(2)] = G__52407);

(invoc_array[(3)] = G__52408);

(invoc_array[(4)] = G__52409);

(invoc_array[(5)] = G__52410);

(invoc_array[(6)] = G__52411);

(invoc_array[(7)] = G__52412);

(invoc_array[(8)] = G__52413);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__52418,G__52419,G__52420,G__52421,G__52422,G__52423,G__52424,G__52425,G__52426,G__52427){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52418);

(invoc_array[(1)] = G__52419);

(invoc_array[(2)] = G__52420);

(invoc_array[(3)] = G__52421);

(invoc_array[(4)] = G__52422);

(invoc_array[(5)] = G__52423);

(invoc_array[(6)] = G__52424);

(invoc_array[(7)] = G__52425);

(invoc_array[(8)] = G__52426);

(invoc_array[(9)] = G__52427);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__52429,G__52430,G__52431,G__52432,G__52433,G__52434,G__52435,G__52436,G__52437,G__52438,G__52439){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52429);

(invoc_array[(1)] = G__52430);

(invoc_array[(2)] = G__52431);

(invoc_array[(3)] = G__52432);

(invoc_array[(4)] = G__52433);

(invoc_array[(5)] = G__52434);

(invoc_array[(6)] = G__52435);

(invoc_array[(7)] = G__52436);

(invoc_array[(8)] = G__52437);

(invoc_array[(9)] = G__52438);

(invoc_array[(10)] = G__52439);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__52441,G__52442,G__52443,G__52444,G__52445,G__52446,G__52447,G__52448,G__52449,G__52450,G__52451,G__52452){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52441);

(invoc_array[(1)] = G__52442);

(invoc_array[(2)] = G__52443);

(invoc_array[(3)] = G__52444);

(invoc_array[(4)] = G__52445);

(invoc_array[(5)] = G__52446);

(invoc_array[(6)] = G__52447);

(invoc_array[(7)] = G__52448);

(invoc_array[(8)] = G__52449);

(invoc_array[(9)] = G__52450);

(invoc_array[(10)] = G__52451);

(invoc_array[(11)] = G__52452);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__52453,G__52454,G__52455,G__52456,G__52457,G__52458,G__52459,G__52460,G__52461,G__52462,G__52463,G__52464,G__52465){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52453);

(invoc_array[(1)] = G__52454);

(invoc_array[(2)] = G__52455);

(invoc_array[(3)] = G__52456);

(invoc_array[(4)] = G__52457);

(invoc_array[(5)] = G__52458);

(invoc_array[(6)] = G__52459);

(invoc_array[(7)] = G__52460);

(invoc_array[(8)] = G__52461);

(invoc_array[(9)] = G__52462);

(invoc_array[(10)] = G__52463);

(invoc_array[(11)] = G__52464);

(invoc_array[(12)] = G__52465);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__52466,G__52467,G__52468,G__52469,G__52470,G__52471,G__52472,G__52473,G__52474,G__52475,G__52476,G__52477,G__52478,G__52479){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52466);

(invoc_array[(1)] = G__52467);

(invoc_array[(2)] = G__52468);

(invoc_array[(3)] = G__52469);

(invoc_array[(4)] = G__52470);

(invoc_array[(5)] = G__52471);

(invoc_array[(6)] = G__52472);

(invoc_array[(7)] = G__52473);

(invoc_array[(8)] = G__52474);

(invoc_array[(9)] = G__52475);

(invoc_array[(10)] = G__52476);

(invoc_array[(11)] = G__52477);

(invoc_array[(12)] = G__52478);

(invoc_array[(13)] = G__52479);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__52488,G__52489,G__52490,G__52491,G__52492,G__52493,G__52494,G__52495,G__52496,G__52497,G__52498,G__52499,G__52500,G__52501,G__52502){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52488);

(invoc_array[(1)] = G__52489);

(invoc_array[(2)] = G__52490);

(invoc_array[(3)] = G__52491);

(invoc_array[(4)] = G__52492);

(invoc_array[(5)] = G__52493);

(invoc_array[(6)] = G__52494);

(invoc_array[(7)] = G__52495);

(invoc_array[(8)] = G__52496);

(invoc_array[(9)] = G__52497);

(invoc_array[(10)] = G__52498);

(invoc_array[(11)] = G__52499);

(invoc_array[(12)] = G__52500);

(invoc_array[(13)] = G__52501);

(invoc_array[(14)] = G__52502);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__52526,G__52527,G__52528,G__52529,G__52530,G__52531,G__52532,G__52533,G__52534,G__52535,G__52536,G__52537,G__52538,G__52539,G__52540,G__52541){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52526);

(invoc_array[(1)] = G__52527);

(invoc_array[(2)] = G__52528);

(invoc_array[(3)] = G__52529);

(invoc_array[(4)] = G__52530);

(invoc_array[(5)] = G__52531);

(invoc_array[(6)] = G__52532);

(invoc_array[(7)] = G__52533);

(invoc_array[(8)] = G__52534);

(invoc_array[(9)] = G__52535);

(invoc_array[(10)] = G__52536);

(invoc_array[(11)] = G__52537);

(invoc_array[(12)] = G__52538);

(invoc_array[(13)] = G__52539);

(invoc_array[(14)] = G__52540);

(invoc_array[(15)] = G__52541);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__52558,G__52559,G__52560,G__52561,G__52562,G__52563,G__52564,G__52565,G__52566,G__52567,G__52568,G__52569,G__52570,G__52571,G__52572,G__52573,G__52574){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52558);

(invoc_array[(1)] = G__52559);

(invoc_array[(2)] = G__52560);

(invoc_array[(3)] = G__52561);

(invoc_array[(4)] = G__52562);

(invoc_array[(5)] = G__52563);

(invoc_array[(6)] = G__52564);

(invoc_array[(7)] = G__52565);

(invoc_array[(8)] = G__52566);

(invoc_array[(9)] = G__52567);

(invoc_array[(10)] = G__52568);

(invoc_array[(11)] = G__52569);

(invoc_array[(12)] = G__52570);

(invoc_array[(13)] = G__52571);

(invoc_array[(14)] = G__52572);

(invoc_array[(15)] = G__52573);

(invoc_array[(16)] = G__52574);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__52586,G__52587,G__52588,G__52589,G__52590,G__52591,G__52592,G__52593,G__52594,G__52595,G__52596,G__52597,G__52598,G__52599,G__52600,G__52601,G__52602,G__52603){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52586);

(invoc_array[(1)] = G__52587);

(invoc_array[(2)] = G__52588);

(invoc_array[(3)] = G__52589);

(invoc_array[(4)] = G__52590);

(invoc_array[(5)] = G__52591);

(invoc_array[(6)] = G__52592);

(invoc_array[(7)] = G__52593);

(invoc_array[(8)] = G__52594);

(invoc_array[(9)] = G__52595);

(invoc_array[(10)] = G__52596);

(invoc_array[(11)] = G__52597);

(invoc_array[(12)] = G__52598);

(invoc_array[(13)] = G__52599);

(invoc_array[(14)] = G__52600);

(invoc_array[(15)] = G__52601);

(invoc_array[(16)] = G__52602);

(invoc_array[(17)] = G__52603);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__52609,G__52610,G__52611,G__52612,G__52613,G__52614,G__52615,G__52616,G__52617,G__52618,G__52619,G__52620,G__52621,G__52622,G__52623,G__52624,G__52625,G__52626,G__52627){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52609);

(invoc_array[(1)] = G__52610);

(invoc_array[(2)] = G__52611);

(invoc_array[(3)] = G__52612);

(invoc_array[(4)] = G__52613);

(invoc_array[(5)] = G__52614);

(invoc_array[(6)] = G__52615);

(invoc_array[(7)] = G__52616);

(invoc_array[(8)] = G__52617);

(invoc_array[(9)] = G__52618);

(invoc_array[(10)] = G__52619);

(invoc_array[(11)] = G__52620);

(invoc_array[(12)] = G__52621);

(invoc_array[(13)] = G__52622);

(invoc_array[(14)] = G__52623);

(invoc_array[(15)] = G__52624);

(invoc_array[(16)] = G__52625);

(invoc_array[(17)] = G__52626);

(invoc_array[(18)] = G__52627);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__52628,G__52629,G__52630,G__52631,G__52632,G__52633,G__52634,G__52635,G__52636,G__52637,G__52638,G__52639,G__52640,G__52641,G__52642,G__52643,G__52644,G__52645,G__52646,G__52647){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52628);

(invoc_array[(1)] = G__52629);

(invoc_array[(2)] = G__52630);

(invoc_array[(3)] = G__52631);

(invoc_array[(4)] = G__52632);

(invoc_array[(5)] = G__52633);

(invoc_array[(6)] = G__52634);

(invoc_array[(7)] = G__52635);

(invoc_array[(8)] = G__52636);

(invoc_array[(9)] = G__52637);

(invoc_array[(10)] = G__52638);

(invoc_array[(11)] = G__52639);

(invoc_array[(12)] = G__52640);

(invoc_array[(13)] = G__52641);

(invoc_array[(14)] = G__52642);

(invoc_array[(15)] = G__52643);

(invoc_array[(16)] = G__52644);

(invoc_array[(17)] = G__52645);

(invoc_array[(18)] = G__52646);

(invoc_array[(19)] = G__52647);

while(true){
var ret__51159__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51159__auto__)){
continue;
} else {
return ret__51159__auto__;
}
break;
}
});

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52339))));

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
var G__52870 = cljs.core.next(params__$1);
var G__52871 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52872 = lets;
params__$1 = G__52870;
new_params = G__52871;
lets = G__52872;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52876 = cljs.core.next(params__$1);
var G__52877 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52878 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__52876;
new_params = G__52877;
lets = G__52878;
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
var len__5897__auto___52883 = arguments.length;
var i__5898__auto___52884 = (0);
while(true){
if((i__5898__auto___52884 < len__5897__auto___52883)){
args__5903__auto__.push((arguments[i__5898__auto___52884]));

var G__52885 = (i__5898__auto___52884 + (1));
i__5898__auto___52884 = G__52885;
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

var vec__52680 = sig;
var seq__52681 = cljs.core.seq(vec__52680);
var first__52682 = cljs.core.first(seq__52681);
var seq__52681__$1 = cljs.core.next(seq__52681);
var params = first__52682;
var body = seq__52681__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq52672){
var G__52673 = cljs.core.first(seq52672);
var seq52672__$1 = cljs.core.next(seq52672);
var G__52674 = cljs.core.first(seq52672__$1);
var seq52672__$2 = cljs.core.next(seq52672__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52673,G__52674,seq52672__$2);
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
var G__52893 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__52894 = cljs.core.next(fdecls);
ret = G__52893;
fdecls = G__52894;
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
var len__5897__auto___52895 = arguments.length;
var i__5898__auto___52896 = (0);
while(true){
if((i__5898__auto___52896 < len__5897__auto___52895)){
args__5903__auto__.push((arguments[i__5898__auto___52896]));

var G__52897 = (i__5898__auto___52896 + (1));
i__5898__auto___52896 = G__52897;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq52696){
var G__52697 = cljs.core.first(seq52696);
var seq52696__$1 = cljs.core.next(seq52696);
var G__52698 = cljs.core.first(seq52696__$1);
var seq52696__$2 = cljs.core.next(seq52696__$1);
var G__52700 = cljs.core.first(seq52696__$2);
var seq52696__$3 = cljs.core.next(seq52696__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52697,G__52698,G__52700,seq52696__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52917 = arguments.length;
var i__5898__auto___52918 = (0);
while(true){
if((i__5898__auto___52918 < len__5897__auto___52917)){
args__5903__auto__.push((arguments[i__5898__auto___52918]));

var G__52923 = (i__5898__auto___52918 + (1));
i__5898__auto___52918 = G__52923;
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
var G__52941 = cljs.core.cons(f,p);
var G__52942 = cljs.core.next(args__$1);
p = G__52941;
args__$1 = G__52942;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__52943 = cljs.core.cons(f,p);
var G__52944 = cljs.core.next(args__$1);
p = G__52943;
args__$1 = G__52944;
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
var G__52945 = cljs.core.next(fd);
fd = G__52945;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__52947 = cljs.core.next(fd);
fd = G__52947;
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
var G__52958 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__52959 = cljs.core.next(ds);
acc = G__52958;
ds = G__52959;
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
var G__52964 = cljs.core.next(p);
var G__52965 = cljs.core.cons(cljs.core.first(p),d);
p = G__52964;
d = G__52965;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq52713){
var G__52714 = cljs.core.first(seq52713);
var seq52713__$1 = cljs.core.next(seq52713);
var G__52715 = cljs.core.first(seq52713__$1);
var seq52713__$2 = cljs.core.next(seq52713__$1);
var G__52716 = cljs.core.first(seq52713__$2);
var seq52713__$3 = cljs.core.next(seq52713__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52714,G__52715,G__52716,seq52713__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
