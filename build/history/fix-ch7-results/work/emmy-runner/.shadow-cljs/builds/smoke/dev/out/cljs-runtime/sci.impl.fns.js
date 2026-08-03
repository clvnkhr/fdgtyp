goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__51783 = arguments.length;
switch (G__51783) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51797 = fixed_arity;
switch (G__51797) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__51799){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__51799);

while(true){
var ret__51140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51140__auto__)){
continue;
} else {
return ret__51140__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__51799 = null;
if (arguments.length > 0) {
var G__52779__i = 0, G__52779__a = new Array(arguments.length -  0);
while (G__52779__i < G__52779__a.length) {G__52779__a[G__52779__i] = arguments[G__52779__i + 0]; ++G__52779__i;}
  G__51799 = new cljs.core.IndexedSeq(G__52779__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__51799);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__52780){
var G__51799 = cljs.core.seq(arglist__52780);
return sci$impl$fns$arity_0__delegate(G__51799);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__51807,G__51808){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51807);

(invoc_array[vararg_idx] = G__51808);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__51807,var_args){
var G__51808 = null;
if (arguments.length > 1) {
var G__52781__i = 0, G__52781__a = new Array(arguments.length -  1);
while (G__52781__i < G__52781__a.length) {G__52781__a[G__52781__i] = arguments[G__52781__i + 1]; ++G__52781__i;}
  G__51808 = new cljs.core.IndexedSeq(G__52781__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__51807,G__51808);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__52782){
var G__51807 = cljs.core.first(arglist__52782);
var G__51808 = cljs.core.rest(arglist__52782);
return sci$impl$fns$arity_1__delegate(G__51807,G__51808);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__51816,G__51817,G__51818){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51816);

(invoc_array[(1)] = G__51817);

(invoc_array[vararg_idx] = G__51818);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__51816,G__51817,var_args){
var G__51818 = null;
if (arguments.length > 2) {
var G__52783__i = 0, G__52783__a = new Array(arguments.length -  2);
while (G__52783__i < G__52783__a.length) {G__52783__a[G__52783__i] = arguments[G__52783__i + 2]; ++G__52783__i;}
  G__51818 = new cljs.core.IndexedSeq(G__52783__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__51816,G__51817,G__51818);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__52784){
var G__51816 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__51817 = cljs.core.first(arglist__52784);
var G__51818 = cljs.core.rest(arglist__52784);
return sci$impl$fns$arity_2__delegate(G__51816,G__51817,G__51818);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__51819,G__51820,G__51821,G__51822){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51819);

(invoc_array[(1)] = G__51820);

(invoc_array[(2)] = G__51821);

(invoc_array[vararg_idx] = G__51822);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__51819,G__51820,G__51821,var_args){
var G__51822 = null;
if (arguments.length > 3) {
var G__52788__i = 0, G__52788__a = new Array(arguments.length -  3);
while (G__52788__i < G__52788__a.length) {G__52788__a[G__52788__i] = arguments[G__52788__i + 3]; ++G__52788__i;}
  G__51822 = new cljs.core.IndexedSeq(G__52788__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__51819,G__51820,G__51821,G__51822);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__52789){
var G__51819 = cljs.core.first(arglist__52789);
arglist__52789 = cljs.core.next(arglist__52789);
var G__51820 = cljs.core.first(arglist__52789);
arglist__52789 = cljs.core.next(arglist__52789);
var G__51821 = cljs.core.first(arglist__52789);
var G__51822 = cljs.core.rest(arglist__52789);
return sci$impl$fns$arity_3__delegate(G__51819,G__51820,G__51821,G__51822);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__51835,G__51836,G__51837,G__51838,G__51839){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51835);

(invoc_array[(1)] = G__51836);

(invoc_array[(2)] = G__51837);

(invoc_array[(3)] = G__51838);

(invoc_array[vararg_idx] = G__51839);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__51835,G__51836,G__51837,G__51838,var_args){
var G__51839 = null;
if (arguments.length > 4) {
var G__52790__i = 0, G__52790__a = new Array(arguments.length -  4);
while (G__52790__i < G__52790__a.length) {G__52790__a[G__52790__i] = arguments[G__52790__i + 4]; ++G__52790__i;}
  G__51839 = new cljs.core.IndexedSeq(G__52790__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__51835,G__51836,G__51837,G__51838,G__51839);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__52791){
var G__51835 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51836 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51837 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51838 = cljs.core.first(arglist__52791);
var G__51839 = cljs.core.rest(arglist__52791);
return sci$impl$fns$arity_4__delegate(G__51835,G__51836,G__51837,G__51838,G__51839);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__51843,G__51844,G__51845,G__51846,G__51847,G__51848){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51843);

(invoc_array[(1)] = G__51844);

(invoc_array[(2)] = G__51845);

(invoc_array[(3)] = G__51846);

(invoc_array[(4)] = G__51847);

(invoc_array[vararg_idx] = G__51848);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__51843,G__51844,G__51845,G__51846,G__51847,var_args){
var G__51848 = null;
if (arguments.length > 5) {
var G__52792__i = 0, G__52792__a = new Array(arguments.length -  5);
while (G__52792__i < G__52792__a.length) {G__52792__a[G__52792__i] = arguments[G__52792__i + 5]; ++G__52792__i;}
  G__51848 = new cljs.core.IndexedSeq(G__52792__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__51843,G__51844,G__51845,G__51846,G__51847,G__51848);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__52793){
var G__51843 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51844 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51845 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51846 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51847 = cljs.core.first(arglist__52793);
var G__51848 = cljs.core.rest(arglist__52793);
return sci$impl$fns$arity_5__delegate(G__51843,G__51844,G__51845,G__51846,G__51847,G__51848);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__51850,G__51851,G__51852,G__51853,G__51854,G__51855,G__51856){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51850);

(invoc_array[(1)] = G__51851);

(invoc_array[(2)] = G__51852);

(invoc_array[(3)] = G__51853);

(invoc_array[(4)] = G__51854);

(invoc_array[(5)] = G__51855);

(invoc_array[vararg_idx] = G__51856);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__51850,G__51851,G__51852,G__51853,G__51854,G__51855,var_args){
var G__51856 = null;
if (arguments.length > 6) {
var G__52795__i = 0, G__52795__a = new Array(arguments.length -  6);
while (G__52795__i < G__52795__a.length) {G__52795__a[G__52795__i] = arguments[G__52795__i + 6]; ++G__52795__i;}
  G__51856 = new cljs.core.IndexedSeq(G__52795__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__51850,G__51851,G__51852,G__51853,G__51854,G__51855,G__51856);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__52796){
var G__51850 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51851 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51852 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51853 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51854 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51855 = cljs.core.first(arglist__52796);
var G__51856 = cljs.core.rest(arglist__52796);
return sci$impl$fns$arity_6__delegate(G__51850,G__51851,G__51852,G__51853,G__51854,G__51855,G__51856);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871,G__51872){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51865);

(invoc_array[(1)] = G__51866);

(invoc_array[(2)] = G__51867);

(invoc_array[(3)] = G__51868);

(invoc_array[(4)] = G__51869);

(invoc_array[(5)] = G__51870);

(invoc_array[(6)] = G__51871);

(invoc_array[vararg_idx] = G__51872);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871,var_args){
var G__51872 = null;
if (arguments.length > 7) {
var G__52797__i = 0, G__52797__a = new Array(arguments.length -  7);
while (G__52797__i < G__52797__a.length) {G__52797__a[G__52797__i] = arguments[G__52797__i + 7]; ++G__52797__i;}
  G__51872 = new cljs.core.IndexedSeq(G__52797__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871,G__51872);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__52798){
var G__51865 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51866 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51867 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51868 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51869 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51870 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51871 = cljs.core.first(arglist__52798);
var G__51872 = cljs.core.rest(arglist__52798);
return sci$impl$fns$arity_7__delegate(G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871,G__51872);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51884);

(invoc_array[(1)] = G__51885);

(invoc_array[(2)] = G__51886);

(invoc_array[(3)] = G__51887);

(invoc_array[(4)] = G__51888);

(invoc_array[(5)] = G__51889);

(invoc_array[(6)] = G__51890);

(invoc_array[(7)] = G__51891);

(invoc_array[vararg_idx] = G__51892);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,var_args){
var G__51892 = null;
if (arguments.length > 8) {
var G__52799__i = 0, G__52799__a = new Array(arguments.length -  8);
while (G__52799__i < G__52799__a.length) {G__52799__a[G__52799__i] = arguments[G__52799__i + 8]; ++G__52799__i;}
  G__51892 = new cljs.core.IndexedSeq(G__52799__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__52800){
var G__51884 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51885 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51886 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51887 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51888 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51889 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51890 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51891 = cljs.core.first(arglist__52800);
var G__51892 = cljs.core.rest(arglist__52800);
return sci$impl$fns$arity_8__delegate(G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51897);

(invoc_array[(1)] = G__51898);

(invoc_array[(2)] = G__51899);

(invoc_array[(3)] = G__51900);

(invoc_array[(4)] = G__51901);

(invoc_array[(5)] = G__51902);

(invoc_array[(6)] = G__51903);

(invoc_array[(7)] = G__51904);

(invoc_array[(8)] = G__51905);

(invoc_array[vararg_idx] = G__51906);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,var_args){
var G__51906 = null;
if (arguments.length > 9) {
var G__52801__i = 0, G__52801__a = new Array(arguments.length -  9);
while (G__52801__i < G__52801__a.length) {G__52801__a[G__52801__i] = arguments[G__52801__i + 9]; ++G__52801__i;}
  G__51906 = new cljs.core.IndexedSeq(G__52801__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__52802){
var G__51897 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51898 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51899 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51900 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51901 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51902 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51903 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51904 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51905 = cljs.core.first(arglist__52802);
var G__51906 = cljs.core.rest(arglist__52802);
return sci$impl$fns$arity_9__delegate(G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,G__51918,G__51919){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51909);

(invoc_array[(1)] = G__51910);

(invoc_array[(2)] = G__51911);

(invoc_array[(3)] = G__51912);

(invoc_array[(4)] = G__51913);

(invoc_array[(5)] = G__51914);

(invoc_array[(6)] = G__51915);

(invoc_array[(7)] = G__51916);

(invoc_array[(8)] = G__51917);

(invoc_array[(9)] = G__51918);

(invoc_array[vararg_idx] = G__51919);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,G__51918,var_args){
var G__51919 = null;
if (arguments.length > 10) {
var G__52803__i = 0, G__52803__a = new Array(arguments.length -  10);
while (G__52803__i < G__52803__a.length) {G__52803__a[G__52803__i] = arguments[G__52803__i + 10]; ++G__52803__i;}
  G__51919 = new cljs.core.IndexedSeq(G__52803__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,G__51918,G__51919);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__52804){
var G__51909 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51910 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51911 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51912 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51913 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51914 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51915 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51916 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51917 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51918 = cljs.core.first(arglist__52804);
var G__51919 = cljs.core.rest(arglist__52804);
return sci$impl$fns$arity_10__delegate(G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,G__51918,G__51919);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51920);

(invoc_array[(1)] = G__51921);

(invoc_array[(2)] = G__51922);

(invoc_array[(3)] = G__51923);

(invoc_array[(4)] = G__51924);

(invoc_array[(5)] = G__51925);

(invoc_array[(6)] = G__51926);

(invoc_array[(7)] = G__51927);

(invoc_array[(8)] = G__51928);

(invoc_array[(9)] = G__51929);

(invoc_array[(10)] = G__51930);

(invoc_array[vararg_idx] = G__51931);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,var_args){
var G__51931 = null;
if (arguments.length > 11) {
var G__52805__i = 0, G__52805__a = new Array(arguments.length -  11);
while (G__52805__i < G__52805__a.length) {G__52805__a[G__52805__i] = arguments[G__52805__i + 11]; ++G__52805__i;}
  G__51931 = new cljs.core.IndexedSeq(G__52805__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__52806){
var G__51920 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51921 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51922 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51923 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51924 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51925 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51926 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51927 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51928 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51929 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51930 = cljs.core.first(arglist__52806);
var G__51931 = cljs.core.rest(arglist__52806);
return sci$impl$fns$arity_11__delegate(G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51935);

(invoc_array[(1)] = G__51936);

(invoc_array[(2)] = G__51937);

(invoc_array[(3)] = G__51938);

(invoc_array[(4)] = G__51939);

(invoc_array[(5)] = G__51940);

(invoc_array[(6)] = G__51941);

(invoc_array[(7)] = G__51942);

(invoc_array[(8)] = G__51943);

(invoc_array[(9)] = G__51944);

(invoc_array[(10)] = G__51945);

(invoc_array[(11)] = G__51946);

(invoc_array[vararg_idx] = G__51947);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,var_args){
var G__51947 = null;
if (arguments.length > 12) {
var G__52807__i = 0, G__52807__a = new Array(arguments.length -  12);
while (G__52807__i < G__52807__a.length) {G__52807__a[G__52807__i] = arguments[G__52807__i + 12]; ++G__52807__i;}
  G__51947 = new cljs.core.IndexedSeq(G__52807__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__52808){
var G__51935 = cljs.core.first(arglist__52808);
arglist__52808 = cljs.core.next(arglist__52808);
var G__51936 = cljs.core.first(arglist__52808);
arglist__52808 = cljs.core.next(arglist__52808);
var G__51937 = cljs.core.first(arglist__52808);
arglist__52808 = cljs.core.next(arglist__52808);
var G__51938 = cljs.core.first(arglist__52808);
arglist__52808 = cljs.core.next(arglist__52808);
var G__51939 = cljs.core.first(arglist__52808);
arglist__52808 = cljs.core.next(arglist__52808);
var G__51940 = cljs.core.first(arglist__52808);
arglist__52808 = cljs.core.next(arglist__52808);
var G__51941 = cljs.core.first(arglist__52808);
arglist__52808 = cljs.core.next(arglist__52808);
var G__51942 = cljs.core.first(arglist__52808);
arglist__52808 = cljs.core.next(arglist__52808);
var G__51943 = cljs.core.first(arglist__52808);
arglist__52808 = cljs.core.next(arglist__52808);
var G__51944 = cljs.core.first(arglist__52808);
arglist__52808 = cljs.core.next(arglist__52808);
var G__51945 = cljs.core.first(arglist__52808);
arglist__52808 = cljs.core.next(arglist__52808);
var G__51946 = cljs.core.first(arglist__52808);
var G__51947 = cljs.core.rest(arglist__52808);
return sci$impl$fns$arity_12__delegate(G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51953);

(invoc_array[(1)] = G__51954);

(invoc_array[(2)] = G__51955);

(invoc_array[(3)] = G__51956);

(invoc_array[(4)] = G__51957);

(invoc_array[(5)] = G__51958);

(invoc_array[(6)] = G__51959);

(invoc_array[(7)] = G__51960);

(invoc_array[(8)] = G__51961);

(invoc_array[(9)] = G__51962);

(invoc_array[(10)] = G__51963);

(invoc_array[(11)] = G__51964);

(invoc_array[(12)] = G__51965);

(invoc_array[vararg_idx] = G__51966);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,var_args){
var G__51966 = null;
if (arguments.length > 13) {
var G__52810__i = 0, G__52810__a = new Array(arguments.length -  13);
while (G__52810__i < G__52810__a.length) {G__52810__a[G__52810__i] = arguments[G__52810__i + 13]; ++G__52810__i;}
  G__51966 = new cljs.core.IndexedSeq(G__52810__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__52811){
var G__51953 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51954 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51955 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51956 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51957 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51958 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51959 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51960 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51961 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51962 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51963 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51964 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__51965 = cljs.core.first(arglist__52811);
var G__51966 = cljs.core.rest(arglist__52811);
return sci$impl$fns$arity_13__delegate(G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51973);

(invoc_array[(1)] = G__51974);

(invoc_array[(2)] = G__51975);

(invoc_array[(3)] = G__51976);

(invoc_array[(4)] = G__51977);

(invoc_array[(5)] = G__51978);

(invoc_array[(6)] = G__51979);

(invoc_array[(7)] = G__51980);

(invoc_array[(8)] = G__51981);

(invoc_array[(9)] = G__51982);

(invoc_array[(10)] = G__51983);

(invoc_array[(11)] = G__51984);

(invoc_array[(12)] = G__51985);

(invoc_array[(13)] = G__51986);

(invoc_array[vararg_idx] = G__51987);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,var_args){
var G__51987 = null;
if (arguments.length > 14) {
var G__52812__i = 0, G__52812__a = new Array(arguments.length -  14);
while (G__52812__i < G__52812__a.length) {G__52812__a[G__52812__i] = arguments[G__52812__i + 14]; ++G__52812__i;}
  G__51987 = new cljs.core.IndexedSeq(G__52812__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__52813){
var G__51973 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51974 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51975 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51976 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51977 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51978 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51979 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51980 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51981 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51982 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51983 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51984 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51985 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__51986 = cljs.core.first(arglist__52813);
var G__51987 = cljs.core.rest(arglist__52813);
return sci$impl$fns$arity_14__delegate(G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52000);

(invoc_array[(1)] = G__52001);

(invoc_array[(2)] = G__52002);

(invoc_array[(3)] = G__52003);

(invoc_array[(4)] = G__52004);

(invoc_array[(5)] = G__52005);

(invoc_array[(6)] = G__52006);

(invoc_array[(7)] = G__52007);

(invoc_array[(8)] = G__52008);

(invoc_array[(9)] = G__52009);

(invoc_array[(10)] = G__52010);

(invoc_array[(11)] = G__52011);

(invoc_array[(12)] = G__52012);

(invoc_array[(13)] = G__52013);

(invoc_array[(14)] = G__52014);

(invoc_array[vararg_idx] = G__52015);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,var_args){
var G__52015 = null;
if (arguments.length > 15) {
var G__52814__i = 0, G__52814__a = new Array(arguments.length -  15);
while (G__52814__i < G__52814__a.length) {G__52814__a[G__52814__i] = arguments[G__52814__i + 15]; ++G__52814__i;}
  G__52015 = new cljs.core.IndexedSeq(G__52814__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__52815){
var G__52000 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52001 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52002 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52003 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52004 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52005 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52006 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52007 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52008 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52009 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52010 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52011 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52012 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52013 = cljs.core.first(arglist__52815);
arglist__52815 = cljs.core.next(arglist__52815);
var G__52014 = cljs.core.first(arglist__52815);
var G__52015 = cljs.core.rest(arglist__52815);
return sci$impl$fns$arity_15__delegate(G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52041);

(invoc_array[(1)] = G__52042);

(invoc_array[(2)] = G__52043);

(invoc_array[(3)] = G__52044);

(invoc_array[(4)] = G__52045);

(invoc_array[(5)] = G__52046);

(invoc_array[(6)] = G__52047);

(invoc_array[(7)] = G__52048);

(invoc_array[(8)] = G__52049);

(invoc_array[(9)] = G__52050);

(invoc_array[(10)] = G__52051);

(invoc_array[(11)] = G__52052);

(invoc_array[(12)] = G__52053);

(invoc_array[(13)] = G__52054);

(invoc_array[(14)] = G__52055);

(invoc_array[(15)] = G__52056);

(invoc_array[vararg_idx] = G__52057);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,var_args){
var G__52057 = null;
if (arguments.length > 16) {
var G__52818__i = 0, G__52818__a = new Array(arguments.length -  16);
while (G__52818__i < G__52818__a.length) {G__52818__a[G__52818__i] = arguments[G__52818__i + 16]; ++G__52818__i;}
  G__52057 = new cljs.core.IndexedSeq(G__52818__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__52820){
var G__52041 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52042 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52043 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52044 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52045 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52046 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52047 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52048 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52049 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52050 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52051 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52052 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52053 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52054 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52055 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52056 = cljs.core.first(arglist__52820);
var G__52057 = cljs.core.rest(arglist__52820);
return sci$impl$fns$arity_16__delegate(G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103){
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

(invoc_array[(11)] = G__52097);

(invoc_array[(12)] = G__52098);

(invoc_array[(13)] = G__52099);

(invoc_array[(14)] = G__52100);

(invoc_array[(15)] = G__52101);

(invoc_array[(16)] = G__52102);

(invoc_array[vararg_idx] = G__52103);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,var_args){
var G__52103 = null;
if (arguments.length > 17) {
var G__52826__i = 0, G__52826__a = new Array(arguments.length -  17);
while (G__52826__i < G__52826__a.length) {G__52826__a[G__52826__i] = arguments[G__52826__i + 17]; ++G__52826__i;}
  G__52103 = new cljs.core.IndexedSeq(G__52826__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__52827){
var G__52086 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52087 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52088 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52089 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52090 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52091 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52092 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52093 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52094 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52095 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52096 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52097 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52098 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52099 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52100 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52101 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52102 = cljs.core.first(arglist__52827);
var G__52103 = cljs.core.rest(arglist__52827);
return sci$impl$fns$arity_17__delegate(G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__52125,G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52125);

(invoc_array[(1)] = G__52126);

(invoc_array[(2)] = G__52127);

(invoc_array[(3)] = G__52128);

(invoc_array[(4)] = G__52129);

(invoc_array[(5)] = G__52130);

(invoc_array[(6)] = G__52131);

(invoc_array[(7)] = G__52132);

(invoc_array[(8)] = G__52133);

(invoc_array[(9)] = G__52134);

(invoc_array[(10)] = G__52135);

(invoc_array[(11)] = G__52136);

(invoc_array[(12)] = G__52137);

(invoc_array[(13)] = G__52138);

(invoc_array[(14)] = G__52139);

(invoc_array[(15)] = G__52140);

(invoc_array[(16)] = G__52141);

(invoc_array[(17)] = G__52142);

(invoc_array[vararg_idx] = G__52143);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__52125,G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,var_args){
var G__52143 = null;
if (arguments.length > 18) {
var G__52834__i = 0, G__52834__a = new Array(arguments.length -  18);
while (G__52834__i < G__52834__a.length) {G__52834__a[G__52834__i] = arguments[G__52834__i + 18]; ++G__52834__i;}
  G__52143 = new cljs.core.IndexedSeq(G__52834__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__52125,G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__52836){
var G__52125 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52126 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52127 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52128 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52129 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52130 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52131 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52132 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52133 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52134 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52135 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52136 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52137 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52138 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52139 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52140 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52141 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52142 = cljs.core.first(arglist__52836);
var G__52143 = cljs.core.rest(arglist__52836);
return sci$impl$fns$arity_18__delegate(G__52125,G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__52158,G__52159,G__52160,G__52161,G__52162,G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52158);

(invoc_array[(1)] = G__52159);

(invoc_array[(2)] = G__52160);

(invoc_array[(3)] = G__52161);

(invoc_array[(4)] = G__52162);

(invoc_array[(5)] = G__52163);

(invoc_array[(6)] = G__52164);

(invoc_array[(7)] = G__52165);

(invoc_array[(8)] = G__52166);

(invoc_array[(9)] = G__52167);

(invoc_array[(10)] = G__52168);

(invoc_array[(11)] = G__52169);

(invoc_array[(12)] = G__52170);

(invoc_array[(13)] = G__52171);

(invoc_array[(14)] = G__52172);

(invoc_array[(15)] = G__52173);

(invoc_array[(16)] = G__52174);

(invoc_array[(17)] = G__52175);

(invoc_array[(18)] = G__52176);

(invoc_array[vararg_idx] = G__52177);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__52158,G__52159,G__52160,G__52161,G__52162,G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,var_args){
var G__52177 = null;
if (arguments.length > 19) {
var G__52837__i = 0, G__52837__a = new Array(arguments.length -  19);
while (G__52837__i < G__52837__a.length) {G__52837__a[G__52837__i] = arguments[G__52837__i + 19]; ++G__52837__i;}
  G__52177 = new cljs.core.IndexedSeq(G__52837__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__52158,G__52159,G__52160,G__52161,G__52162,G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__52838){
var G__52158 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52159 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52160 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52161 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52162 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52163 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52164 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52165 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52166 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52167 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52168 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52169 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52170 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52171 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52172 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52173 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52174 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52175 = cljs.core.first(arglist__52838);
arglist__52838 = cljs.core.next(arglist__52838);
var G__52176 = cljs.core.first(arglist__52838);
var G__52177 = cljs.core.rest(arglist__52838);
return sci$impl$fns$arity_19__delegate(G__52158,G__52159,G__52160,G__52161,G__52162,G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,G__52210){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52190);

(invoc_array[(1)] = G__52191);

(invoc_array[(2)] = G__52192);

(invoc_array[(3)] = G__52193);

(invoc_array[(4)] = G__52194);

(invoc_array[(5)] = G__52195);

(invoc_array[(6)] = G__52196);

(invoc_array[(7)] = G__52197);

(invoc_array[(8)] = G__52198);

(invoc_array[(9)] = G__52199);

(invoc_array[(10)] = G__52200);

(invoc_array[(11)] = G__52201);

(invoc_array[(12)] = G__52202);

(invoc_array[(13)] = G__52203);

(invoc_array[(14)] = G__52204);

(invoc_array[(15)] = G__52205);

(invoc_array[(16)] = G__52206);

(invoc_array[(17)] = G__52207);

(invoc_array[(18)] = G__52208);

(invoc_array[(19)] = G__52209);

(invoc_array[vararg_idx] = G__52210);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,var_args){
var G__52210 = null;
if (arguments.length > 20) {
var G__52846__i = 0, G__52846__a = new Array(arguments.length -  20);
while (G__52846__i < G__52846__a.length) {G__52846__a[G__52846__i] = arguments[G__52846__i + 20]; ++G__52846__i;}
  G__52210 = new cljs.core.IndexedSeq(G__52846__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,G__52210);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__52851){
var G__52190 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52191 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52192 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52193 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52194 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52195 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52196 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52197 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52198 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52199 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52200 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52201 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52202 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52203 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52204 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52205 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52206 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52207 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52208 = cljs.core.first(arglist__52851);
arglist__52851 = cljs.core.next(arglist__52851);
var G__52209 = cljs.core.first(arglist__52851);
var G__52210 = cljs.core.rest(arglist__52851);
return sci$impl$fns$arity_20__delegate(G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,G__52210);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51797))));

}
})():(function (){var G__52222 = fixed_arity;
switch (G__52222) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__51140__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51140__auto__)){
continue;
} else {
return ret__51140__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__52231){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52231);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__52246,G__52247){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52246);

(invoc_array[(1)] = G__52247);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__52252,G__52253,G__52254){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52252);

(invoc_array[(1)] = G__52253);

(invoc_array[(2)] = G__52254);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__52259,G__52260,G__52261,G__52262){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52259);

(invoc_array[(1)] = G__52260);

(invoc_array[(2)] = G__52261);

(invoc_array[(3)] = G__52262);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__52264,G__52265,G__52266,G__52267,G__52268){
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

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__52280,G__52282,G__52283,G__52284,G__52285,G__52286){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52280);

(invoc_array[(1)] = G__52282);

(invoc_array[(2)] = G__52283);

(invoc_array[(3)] = G__52284);

(invoc_array[(4)] = G__52285);

(invoc_array[(5)] = G__52286);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__52299,G__52300,G__52301,G__52302,G__52303,G__52304,G__52305){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52299);

(invoc_array[(1)] = G__52300);

(invoc_array[(2)] = G__52301);

(invoc_array[(3)] = G__52302);

(invoc_array[(4)] = G__52303);

(invoc_array[(5)] = G__52304);

(invoc_array[(6)] = G__52305);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__52316,G__52317,G__52318,G__52319,G__52320,G__52321,G__52322,G__52323){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52316);

(invoc_array[(1)] = G__52317);

(invoc_array[(2)] = G__52318);

(invoc_array[(3)] = G__52319);

(invoc_array[(4)] = G__52320);

(invoc_array[(5)] = G__52321);

(invoc_array[(6)] = G__52322);

(invoc_array[(7)] = G__52323);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__52331,G__52332,G__52333,G__52334,G__52335,G__52336,G__52337,G__52338,G__52339){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52331);

(invoc_array[(1)] = G__52332);

(invoc_array[(2)] = G__52333);

(invoc_array[(3)] = G__52334);

(invoc_array[(4)] = G__52335);

(invoc_array[(5)] = G__52336);

(invoc_array[(6)] = G__52337);

(invoc_array[(7)] = G__52338);

(invoc_array[(8)] = G__52339);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__52348,G__52349,G__52350,G__52351,G__52352,G__52353,G__52354,G__52355,G__52356,G__52357){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52348);

(invoc_array[(1)] = G__52349);

(invoc_array[(2)] = G__52350);

(invoc_array[(3)] = G__52351);

(invoc_array[(4)] = G__52352);

(invoc_array[(5)] = G__52353);

(invoc_array[(6)] = G__52354);

(invoc_array[(7)] = G__52355);

(invoc_array[(8)] = G__52356);

(invoc_array[(9)] = G__52357);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__52363,G__52364,G__52365,G__52366,G__52367,G__52368,G__52369,G__52370,G__52371,G__52372,G__52373){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52363);

(invoc_array[(1)] = G__52364);

(invoc_array[(2)] = G__52365);

(invoc_array[(3)] = G__52366);

(invoc_array[(4)] = G__52367);

(invoc_array[(5)] = G__52368);

(invoc_array[(6)] = G__52369);

(invoc_array[(7)] = G__52370);

(invoc_array[(8)] = G__52371);

(invoc_array[(9)] = G__52372);

(invoc_array[(10)] = G__52373);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__52378,G__52379,G__52380,G__52381,G__52382,G__52383,G__52384,G__52385,G__52386,G__52387,G__52388,G__52389){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52378);

(invoc_array[(1)] = G__52379);

(invoc_array[(2)] = G__52380);

(invoc_array[(3)] = G__52381);

(invoc_array[(4)] = G__52382);

(invoc_array[(5)] = G__52383);

(invoc_array[(6)] = G__52384);

(invoc_array[(7)] = G__52385);

(invoc_array[(8)] = G__52386);

(invoc_array[(9)] = G__52387);

(invoc_array[(10)] = G__52388);

(invoc_array[(11)] = G__52389);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__52395,G__52396,G__52397,G__52398,G__52399,G__52400,G__52401,G__52402,G__52403,G__52404,G__52405,G__52406,G__52407){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52395);

(invoc_array[(1)] = G__52396);

(invoc_array[(2)] = G__52397);

(invoc_array[(3)] = G__52398);

(invoc_array[(4)] = G__52399);

(invoc_array[(5)] = G__52400);

(invoc_array[(6)] = G__52401);

(invoc_array[(7)] = G__52402);

(invoc_array[(8)] = G__52403);

(invoc_array[(9)] = G__52404);

(invoc_array[(10)] = G__52405);

(invoc_array[(11)] = G__52406);

(invoc_array[(12)] = G__52407);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__52413,G__52414,G__52415,G__52416,G__52417,G__52418,G__52419,G__52420,G__52421,G__52422,G__52423,G__52424,G__52425,G__52426){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52413);

(invoc_array[(1)] = G__52414);

(invoc_array[(2)] = G__52415);

(invoc_array[(3)] = G__52416);

(invoc_array[(4)] = G__52417);

(invoc_array[(5)] = G__52418);

(invoc_array[(6)] = G__52419);

(invoc_array[(7)] = G__52420);

(invoc_array[(8)] = G__52421);

(invoc_array[(9)] = G__52422);

(invoc_array[(10)] = G__52423);

(invoc_array[(11)] = G__52424);

(invoc_array[(12)] = G__52425);

(invoc_array[(13)] = G__52426);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__52463,G__52464,G__52465,G__52466,G__52467,G__52468,G__52469,G__52470,G__52471,G__52472,G__52473,G__52474,G__52475,G__52476,G__52477){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52463);

(invoc_array[(1)] = G__52464);

(invoc_array[(2)] = G__52465);

(invoc_array[(3)] = G__52466);

(invoc_array[(4)] = G__52467);

(invoc_array[(5)] = G__52468);

(invoc_array[(6)] = G__52469);

(invoc_array[(7)] = G__52470);

(invoc_array[(8)] = G__52471);

(invoc_array[(9)] = G__52472);

(invoc_array[(10)] = G__52473);

(invoc_array[(11)] = G__52474);

(invoc_array[(12)] = G__52475);

(invoc_array[(13)] = G__52476);

(invoc_array[(14)] = G__52477);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__52485,G__52486,G__52487,G__52488,G__52489,G__52490,G__52491,G__52492,G__52493,G__52494,G__52495,G__52496,G__52497,G__52498,G__52499,G__52500){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52485);

(invoc_array[(1)] = G__52486);

(invoc_array[(2)] = G__52487);

(invoc_array[(3)] = G__52488);

(invoc_array[(4)] = G__52489);

(invoc_array[(5)] = G__52490);

(invoc_array[(6)] = G__52491);

(invoc_array[(7)] = G__52492);

(invoc_array[(8)] = G__52493);

(invoc_array[(9)] = G__52494);

(invoc_array[(10)] = G__52495);

(invoc_array[(11)] = G__52496);

(invoc_array[(12)] = G__52497);

(invoc_array[(13)] = G__52498);

(invoc_array[(14)] = G__52499);

(invoc_array[(15)] = G__52500);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__52505,G__52506,G__52507,G__52508,G__52509,G__52510,G__52511,G__52512,G__52513,G__52514,G__52515,G__52516,G__52517,G__52518,G__52519,G__52520,G__52521){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52505);

(invoc_array[(1)] = G__52506);

(invoc_array[(2)] = G__52507);

(invoc_array[(3)] = G__52508);

(invoc_array[(4)] = G__52509);

(invoc_array[(5)] = G__52510);

(invoc_array[(6)] = G__52511);

(invoc_array[(7)] = G__52512);

(invoc_array[(8)] = G__52513);

(invoc_array[(9)] = G__52514);

(invoc_array[(10)] = G__52515);

(invoc_array[(11)] = G__52516);

(invoc_array[(12)] = G__52517);

(invoc_array[(13)] = G__52518);

(invoc_array[(14)] = G__52519);

(invoc_array[(15)] = G__52520);

(invoc_array[(16)] = G__52521);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__52541,G__52542,G__52543,G__52544,G__52545,G__52546,G__52547,G__52548,G__52549,G__52550,G__52551,G__52552,G__52553,G__52554,G__52555,G__52556,G__52557,G__52558){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52541);

(invoc_array[(1)] = G__52542);

(invoc_array[(2)] = G__52543);

(invoc_array[(3)] = G__52544);

(invoc_array[(4)] = G__52545);

(invoc_array[(5)] = G__52546);

(invoc_array[(6)] = G__52547);

(invoc_array[(7)] = G__52548);

(invoc_array[(8)] = G__52549);

(invoc_array[(9)] = G__52550);

(invoc_array[(10)] = G__52551);

(invoc_array[(11)] = G__52552);

(invoc_array[(12)] = G__52553);

(invoc_array[(13)] = G__52554);

(invoc_array[(14)] = G__52555);

(invoc_array[(15)] = G__52556);

(invoc_array[(16)] = G__52557);

(invoc_array[(17)] = G__52558);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__52565,G__52566,G__52567,G__52568,G__52569,G__52570,G__52571,G__52572,G__52573,G__52574,G__52575,G__52576,G__52577,G__52578,G__52579,G__52580,G__52581,G__52582,G__52583){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52565);

(invoc_array[(1)] = G__52566);

(invoc_array[(2)] = G__52567);

(invoc_array[(3)] = G__52568);

(invoc_array[(4)] = G__52569);

(invoc_array[(5)] = G__52570);

(invoc_array[(6)] = G__52571);

(invoc_array[(7)] = G__52572);

(invoc_array[(8)] = G__52573);

(invoc_array[(9)] = G__52574);

(invoc_array[(10)] = G__52575);

(invoc_array[(11)] = G__52576);

(invoc_array[(12)] = G__52577);

(invoc_array[(13)] = G__52578);

(invoc_array[(14)] = G__52579);

(invoc_array[(15)] = G__52580);

(invoc_array[(16)] = G__52581);

(invoc_array[(17)] = G__52582);

(invoc_array[(18)] = G__52583);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__52585,G__52586,G__52587,G__52588,G__52589,G__52590,G__52591,G__52592,G__52593,G__52594,G__52595,G__52596,G__52597,G__52598,G__52599,G__52600,G__52601,G__52602,G__52603,G__52604){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52585);

(invoc_array[(1)] = G__52586);

(invoc_array[(2)] = G__52587);

(invoc_array[(3)] = G__52588);

(invoc_array[(4)] = G__52589);

(invoc_array[(5)] = G__52590);

(invoc_array[(6)] = G__52591);

(invoc_array[(7)] = G__52592);

(invoc_array[(8)] = G__52593);

(invoc_array[(9)] = G__52594);

(invoc_array[(10)] = G__52595);

(invoc_array[(11)] = G__52596);

(invoc_array[(12)] = G__52597);

(invoc_array[(13)] = G__52598);

(invoc_array[(14)] = G__52599);

(invoc_array[(15)] = G__52600);

(invoc_array[(16)] = G__52601);

(invoc_array[(17)] = G__52602);

(invoc_array[(18)] = G__52603);

(invoc_array[(19)] = G__52604);

while(true){
var ret__51145__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51145__auto__)){
continue;
} else {
return ret__51145__auto__;
}
break;
}
});

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52222))));

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
var G__52989 = cljs.core.next(params__$1);
var G__52990 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52991 = lets;
params__$1 = G__52989;
new_params = G__52990;
lets = G__52991;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52992 = cljs.core.next(params__$1);
var G__52993 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52994 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__52992;
new_params = G__52993;
lets = G__52994;
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
var len__5897__auto___52995 = arguments.length;
var i__5898__auto___52996 = (0);
while(true){
if((i__5898__auto___52996 < len__5897__auto___52995)){
args__5903__auto__.push((arguments[i__5898__auto___52996]));

var G__52997 = (i__5898__auto___52996 + (1));
i__5898__auto___52996 = G__52997;
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

var vec__52675 = sig;
var seq__52676 = cljs.core.seq(vec__52675);
var first__52678 = cljs.core.first(seq__52676);
var seq__52676__$1 = cljs.core.next(seq__52676);
var params = first__52678;
var body = seq__52676__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq52647){
var G__52648 = cljs.core.first(seq52647);
var seq52647__$1 = cljs.core.next(seq52647);
var G__52649 = cljs.core.first(seq52647__$1);
var seq52647__$2 = cljs.core.next(seq52647__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52648,G__52649,seq52647__$2);
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
var G__53001 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__53002 = cljs.core.next(fdecls);
ret = G__53001;
fdecls = G__53002;
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
var len__5897__auto___53003 = arguments.length;
var i__5898__auto___53004 = (0);
while(true){
if((i__5898__auto___53004 < len__5897__auto___53003)){
args__5903__auto__.push((arguments[i__5898__auto___53004]));

var G__53005 = (i__5898__auto___53004 + (1));
i__5898__auto___53004 = G__53005;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq52755){
var G__52756 = cljs.core.first(seq52755);
var seq52755__$1 = cljs.core.next(seq52755);
var G__52757 = cljs.core.first(seq52755__$1);
var seq52755__$2 = cljs.core.next(seq52755__$1);
var G__52758 = cljs.core.first(seq52755__$2);
var seq52755__$3 = cljs.core.next(seq52755__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52756,G__52757,G__52758,seq52755__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53006 = arguments.length;
var i__5898__auto___53007 = (0);
while(true){
if((i__5898__auto___53007 < len__5897__auto___53006)){
args__5903__auto__.push((arguments[i__5898__auto___53007]));

var G__53008 = (i__5898__auto___53007 + (1));
i__5898__auto___53007 = G__53008;
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
var G__53009 = cljs.core.cons(f,p);
var G__53010 = cljs.core.next(args__$1);
p = G__53009;
args__$1 = G__53010;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__53011 = cljs.core.cons(f,p);
var G__53012 = cljs.core.next(args__$1);
p = G__53011;
args__$1 = G__53012;
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
var G__53013 = cljs.core.next(fd);
fd = G__53013;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__53014 = cljs.core.next(fd);
fd = G__53014;
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
var G__53015 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__53016 = cljs.core.next(ds);
acc = G__53015;
ds = G__53016;
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
var G__53017 = cljs.core.next(p);
var G__53018 = cljs.core.cons(cljs.core.first(p),d);
p = G__53017;
d = G__53018;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq52771){
var G__52772 = cljs.core.first(seq52771);
var seq52771__$1 = cljs.core.next(seq52771);
var G__52773 = cljs.core.first(seq52771__$1);
var seq52771__$2 = cljs.core.next(seq52771__$1);
var G__52774 = cljs.core.first(seq52771__$2);
var seq52771__$3 = cljs.core.next(seq52771__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52772,G__52773,G__52774,seq52771__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
