goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__51786 = arguments.length;
switch (G__51786) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51791 = fixed_arity;
switch (G__51791) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__51792){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__51792);

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
var sci$impl$fns$arity_0 = function (var_args){
var G__51792 = null;
if (arguments.length > 0) {
var G__52741__i = 0, G__52741__a = new Array(arguments.length -  0);
while (G__52741__i < G__52741__a.length) {G__52741__a[G__52741__i] = arguments[G__52741__i + 0]; ++G__52741__i;}
  G__51792 = new cljs.core.IndexedSeq(G__52741__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__51792);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__52742){
var G__51792 = cljs.core.seq(arglist__52742);
return sci$impl$fns$arity_0__delegate(G__51792);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__51797,G__51798){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51797);

(invoc_array[vararg_idx] = G__51798);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__51797,var_args){
var G__51798 = null;
if (arguments.length > 1) {
var G__52744__i = 0, G__52744__a = new Array(arguments.length -  1);
while (G__52744__i < G__52744__a.length) {G__52744__a[G__52744__i] = arguments[G__52744__i + 1]; ++G__52744__i;}
  G__51798 = new cljs.core.IndexedSeq(G__52744__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__51797,G__51798);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__52745){
var G__51797 = cljs.core.first(arglist__52745);
var G__51798 = cljs.core.rest(arglist__52745);
return sci$impl$fns$arity_1__delegate(G__51797,G__51798);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__51800,G__51801,G__51802){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51800);

(invoc_array[(1)] = G__51801);

(invoc_array[vararg_idx] = G__51802);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__51800,G__51801,var_args){
var G__51802 = null;
if (arguments.length > 2) {
var G__52746__i = 0, G__52746__a = new Array(arguments.length -  2);
while (G__52746__i < G__52746__a.length) {G__52746__a[G__52746__i] = arguments[G__52746__i + 2]; ++G__52746__i;}
  G__51802 = new cljs.core.IndexedSeq(G__52746__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__51800,G__51801,G__51802);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__52747){
var G__51800 = cljs.core.first(arglist__52747);
arglist__52747 = cljs.core.next(arglist__52747);
var G__51801 = cljs.core.first(arglist__52747);
var G__51802 = cljs.core.rest(arglist__52747);
return sci$impl$fns$arity_2__delegate(G__51800,G__51801,G__51802);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__51807,G__51808,G__51809,G__51810){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51807);

(invoc_array[(1)] = G__51808);

(invoc_array[(2)] = G__51809);

(invoc_array[vararg_idx] = G__51810);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__51807,G__51808,G__51809,var_args){
var G__51810 = null;
if (arguments.length > 3) {
var G__52753__i = 0, G__52753__a = new Array(arguments.length -  3);
while (G__52753__i < G__52753__a.length) {G__52753__a[G__52753__i] = arguments[G__52753__i + 3]; ++G__52753__i;}
  G__51810 = new cljs.core.IndexedSeq(G__52753__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__51807,G__51808,G__51809,G__51810);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__52754){
var G__51807 = cljs.core.first(arglist__52754);
arglist__52754 = cljs.core.next(arglist__52754);
var G__51808 = cljs.core.first(arglist__52754);
arglist__52754 = cljs.core.next(arglist__52754);
var G__51809 = cljs.core.first(arglist__52754);
var G__51810 = cljs.core.rest(arglist__52754);
return sci$impl$fns$arity_3__delegate(G__51807,G__51808,G__51809,G__51810);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__51816,G__51817,G__51818,G__51819,G__51820){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51816);

(invoc_array[(1)] = G__51817);

(invoc_array[(2)] = G__51818);

(invoc_array[(3)] = G__51819);

(invoc_array[vararg_idx] = G__51820);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__51816,G__51817,G__51818,G__51819,var_args){
var G__51820 = null;
if (arguments.length > 4) {
var G__52755__i = 0, G__52755__a = new Array(arguments.length -  4);
while (G__52755__i < G__52755__a.length) {G__52755__a[G__52755__i] = arguments[G__52755__i + 4]; ++G__52755__i;}
  G__51820 = new cljs.core.IndexedSeq(G__52755__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__51816,G__51817,G__51818,G__51819,G__51820);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__52756){
var G__51816 = cljs.core.first(arglist__52756);
arglist__52756 = cljs.core.next(arglist__52756);
var G__51817 = cljs.core.first(arglist__52756);
arglist__52756 = cljs.core.next(arglist__52756);
var G__51818 = cljs.core.first(arglist__52756);
arglist__52756 = cljs.core.next(arglist__52756);
var G__51819 = cljs.core.first(arglist__52756);
var G__51820 = cljs.core.rest(arglist__52756);
return sci$impl$fns$arity_4__delegate(G__51816,G__51817,G__51818,G__51819,G__51820);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__51824,G__51825,G__51826,G__51827,G__51828,G__51829){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51824);

(invoc_array[(1)] = G__51825);

(invoc_array[(2)] = G__51826);

(invoc_array[(3)] = G__51827);

(invoc_array[(4)] = G__51828);

(invoc_array[vararg_idx] = G__51829);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__51824,G__51825,G__51826,G__51827,G__51828,var_args){
var G__51829 = null;
if (arguments.length > 5) {
var G__52761__i = 0, G__52761__a = new Array(arguments.length -  5);
while (G__52761__i < G__52761__a.length) {G__52761__a[G__52761__i] = arguments[G__52761__i + 5]; ++G__52761__i;}
  G__51829 = new cljs.core.IndexedSeq(G__52761__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__51824,G__51825,G__51826,G__51827,G__51828,G__51829);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__52762){
var G__51824 = cljs.core.first(arglist__52762);
arglist__52762 = cljs.core.next(arglist__52762);
var G__51825 = cljs.core.first(arglist__52762);
arglist__52762 = cljs.core.next(arglist__52762);
var G__51826 = cljs.core.first(arglist__52762);
arglist__52762 = cljs.core.next(arglist__52762);
var G__51827 = cljs.core.first(arglist__52762);
arglist__52762 = cljs.core.next(arglist__52762);
var G__51828 = cljs.core.first(arglist__52762);
var G__51829 = cljs.core.rest(arglist__52762);
return sci$impl$fns$arity_5__delegate(G__51824,G__51825,G__51826,G__51827,G__51828,G__51829);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__51832,G__51833,G__51834,G__51835,G__51836,G__51837,G__51838){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51832);

(invoc_array[(1)] = G__51833);

(invoc_array[(2)] = G__51834);

(invoc_array[(3)] = G__51835);

(invoc_array[(4)] = G__51836);

(invoc_array[(5)] = G__51837);

(invoc_array[vararg_idx] = G__51838);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__51832,G__51833,G__51834,G__51835,G__51836,G__51837,var_args){
var G__51838 = null;
if (arguments.length > 6) {
var G__52767__i = 0, G__52767__a = new Array(arguments.length -  6);
while (G__52767__i < G__52767__a.length) {G__52767__a[G__52767__i] = arguments[G__52767__i + 6]; ++G__52767__i;}
  G__51838 = new cljs.core.IndexedSeq(G__52767__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__51832,G__51833,G__51834,G__51835,G__51836,G__51837,G__51838);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__52768){
var G__51832 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__51833 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__51834 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__51835 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__51836 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__51837 = cljs.core.first(arglist__52768);
var G__51838 = cljs.core.rest(arglist__52768);
return sci$impl$fns$arity_6__delegate(G__51832,G__51833,G__51834,G__51835,G__51836,G__51837,G__51838);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__51843,G__51844,G__51845,G__51846,G__51847,G__51848,G__51849,G__51850){
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

(invoc_array[(5)] = G__51848);

(invoc_array[(6)] = G__51849);

(invoc_array[vararg_idx] = G__51850);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__51843,G__51844,G__51845,G__51846,G__51847,G__51848,G__51849,var_args){
var G__51850 = null;
if (arguments.length > 7) {
var G__52770__i = 0, G__52770__a = new Array(arguments.length -  7);
while (G__52770__i < G__52770__a.length) {G__52770__a[G__52770__i] = arguments[G__52770__i + 7]; ++G__52770__i;}
  G__51850 = new cljs.core.IndexedSeq(G__52770__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__51843,G__51844,G__51845,G__51846,G__51847,G__51848,G__51849,G__51850);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__52771){
var G__51843 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__51844 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__51845 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__51846 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__51847 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__51848 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__51849 = cljs.core.first(arglist__52771);
var G__51850 = cljs.core.rest(arglist__52771);
return sci$impl$fns$arity_7__delegate(G__51843,G__51844,G__51845,G__51846,G__51847,G__51848,G__51849,G__51850);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__51858,G__51859,G__51860,G__51861,G__51862,G__51863,G__51864,G__51865,G__51866){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51858);

(invoc_array[(1)] = G__51859);

(invoc_array[(2)] = G__51860);

(invoc_array[(3)] = G__51861);

(invoc_array[(4)] = G__51862);

(invoc_array[(5)] = G__51863);

(invoc_array[(6)] = G__51864);

(invoc_array[(7)] = G__51865);

(invoc_array[vararg_idx] = G__51866);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__51858,G__51859,G__51860,G__51861,G__51862,G__51863,G__51864,G__51865,var_args){
var G__51866 = null;
if (arguments.length > 8) {
var G__52773__i = 0, G__52773__a = new Array(arguments.length -  8);
while (G__52773__i < G__52773__a.length) {G__52773__a[G__52773__i] = arguments[G__52773__i + 8]; ++G__52773__i;}
  G__51866 = new cljs.core.IndexedSeq(G__52773__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__51858,G__51859,G__51860,G__51861,G__51862,G__51863,G__51864,G__51865,G__51866);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__52774){
var G__51858 = cljs.core.first(arglist__52774);
arglist__52774 = cljs.core.next(arglist__52774);
var G__51859 = cljs.core.first(arglist__52774);
arglist__52774 = cljs.core.next(arglist__52774);
var G__51860 = cljs.core.first(arglist__52774);
arglist__52774 = cljs.core.next(arglist__52774);
var G__51861 = cljs.core.first(arglist__52774);
arglist__52774 = cljs.core.next(arglist__52774);
var G__51862 = cljs.core.first(arglist__52774);
arglist__52774 = cljs.core.next(arglist__52774);
var G__51863 = cljs.core.first(arglist__52774);
arglist__52774 = cljs.core.next(arglist__52774);
var G__51864 = cljs.core.first(arglist__52774);
arglist__52774 = cljs.core.next(arglist__52774);
var G__51865 = cljs.core.first(arglist__52774);
var G__51866 = cljs.core.rest(arglist__52774);
return sci$impl$fns$arity_8__delegate(G__51858,G__51859,G__51860,G__51861,G__51862,G__51863,G__51864,G__51865,G__51866);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__51870,G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,G__51877,G__51878,G__51879){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51870);

(invoc_array[(1)] = G__51871);

(invoc_array[(2)] = G__51872);

(invoc_array[(3)] = G__51873);

(invoc_array[(4)] = G__51874);

(invoc_array[(5)] = G__51875);

(invoc_array[(6)] = G__51876);

(invoc_array[(7)] = G__51877);

(invoc_array[(8)] = G__51878);

(invoc_array[vararg_idx] = G__51879);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__51870,G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,G__51877,G__51878,var_args){
var G__51879 = null;
if (arguments.length > 9) {
var G__52780__i = 0, G__52780__a = new Array(arguments.length -  9);
while (G__52780__i < G__52780__a.length) {G__52780__a[G__52780__i] = arguments[G__52780__i + 9]; ++G__52780__i;}
  G__51879 = new cljs.core.IndexedSeq(G__52780__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__51870,G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,G__51877,G__51878,G__51879);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__52781){
var G__51870 = cljs.core.first(arglist__52781);
arglist__52781 = cljs.core.next(arglist__52781);
var G__51871 = cljs.core.first(arglist__52781);
arglist__52781 = cljs.core.next(arglist__52781);
var G__51872 = cljs.core.first(arglist__52781);
arglist__52781 = cljs.core.next(arglist__52781);
var G__51873 = cljs.core.first(arglist__52781);
arglist__52781 = cljs.core.next(arglist__52781);
var G__51874 = cljs.core.first(arglist__52781);
arglist__52781 = cljs.core.next(arglist__52781);
var G__51875 = cljs.core.first(arglist__52781);
arglist__52781 = cljs.core.next(arglist__52781);
var G__51876 = cljs.core.first(arglist__52781);
arglist__52781 = cljs.core.next(arglist__52781);
var G__51877 = cljs.core.first(arglist__52781);
arglist__52781 = cljs.core.next(arglist__52781);
var G__51878 = cljs.core.first(arglist__52781);
var G__51879 = cljs.core.rest(arglist__52781);
return sci$impl$fns$arity_9__delegate(G__51870,G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,G__51877,G__51878,G__51879);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51896);

(invoc_array[(1)] = G__51897);

(invoc_array[(2)] = G__51898);

(invoc_array[(3)] = G__51899);

(invoc_array[(4)] = G__51900);

(invoc_array[(5)] = G__51901);

(invoc_array[(6)] = G__51902);

(invoc_array[(7)] = G__51903);

(invoc_array[(8)] = G__51904);

(invoc_array[(9)] = G__51905);

(invoc_array[vararg_idx] = G__51906);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,var_args){
var G__51906 = null;
if (arguments.length > 10) {
var G__52782__i = 0, G__52782__a = new Array(arguments.length -  10);
while (G__52782__i < G__52782__a.length) {G__52782__a[G__52782__i] = arguments[G__52782__i + 10]; ++G__52782__i;}
  G__51906 = new cljs.core.IndexedSeq(G__52782__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__52783){
var G__51896 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51897 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51898 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51899 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51900 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51901 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51902 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51903 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51904 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51905 = cljs.core.first(arglist__52783);
var G__51906 = cljs.core.rest(arglist__52783);
return sci$impl$fns$arity_10__delegate(G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__51931,G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51931);

(invoc_array[(1)] = G__51932);

(invoc_array[(2)] = G__51933);

(invoc_array[(3)] = G__51934);

(invoc_array[(4)] = G__51935);

(invoc_array[(5)] = G__51936);

(invoc_array[(6)] = G__51937);

(invoc_array[(7)] = G__51938);

(invoc_array[(8)] = G__51939);

(invoc_array[(9)] = G__51940);

(invoc_array[(10)] = G__51941);

(invoc_array[vararg_idx] = G__51942);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__51931,G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,var_args){
var G__51942 = null;
if (arguments.length > 11) {
var G__52792__i = 0, G__52792__a = new Array(arguments.length -  11);
while (G__52792__i < G__52792__a.length) {G__52792__a[G__52792__i] = arguments[G__52792__i + 11]; ++G__52792__i;}
  G__51942 = new cljs.core.IndexedSeq(G__52792__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__51931,G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__52793){
var G__51931 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51932 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51933 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51934 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51935 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51936 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51937 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51938 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51939 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51940 = cljs.core.first(arglist__52793);
arglist__52793 = cljs.core.next(arglist__52793);
var G__51941 = cljs.core.first(arglist__52793);
var G__51942 = cljs.core.rest(arglist__52793);
return sci$impl$fns$arity_11__delegate(G__51931,G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51955);

(invoc_array[(1)] = G__51956);

(invoc_array[(2)] = G__51957);

(invoc_array[(3)] = G__51958);

(invoc_array[(4)] = G__51959);

(invoc_array[(5)] = G__51960);

(invoc_array[(6)] = G__51961);

(invoc_array[(7)] = G__51962);

(invoc_array[(8)] = G__51963);

(invoc_array[(9)] = G__51964);

(invoc_array[(10)] = G__51965);

(invoc_array[(11)] = G__51966);

(invoc_array[vararg_idx] = G__51967);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,var_args){
var G__51967 = null;
if (arguments.length > 12) {
var G__52794__i = 0, G__52794__a = new Array(arguments.length -  12);
while (G__52794__i < G__52794__a.length) {G__52794__a[G__52794__i] = arguments[G__52794__i + 12]; ++G__52794__i;}
  G__51967 = new cljs.core.IndexedSeq(G__52794__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__52795){
var G__51955 = cljs.core.first(arglist__52795);
arglist__52795 = cljs.core.next(arglist__52795);
var G__51956 = cljs.core.first(arglist__52795);
arglist__52795 = cljs.core.next(arglist__52795);
var G__51957 = cljs.core.first(arglist__52795);
arglist__52795 = cljs.core.next(arglist__52795);
var G__51958 = cljs.core.first(arglist__52795);
arglist__52795 = cljs.core.next(arglist__52795);
var G__51959 = cljs.core.first(arglist__52795);
arglist__52795 = cljs.core.next(arglist__52795);
var G__51960 = cljs.core.first(arglist__52795);
arglist__52795 = cljs.core.next(arglist__52795);
var G__51961 = cljs.core.first(arglist__52795);
arglist__52795 = cljs.core.next(arglist__52795);
var G__51962 = cljs.core.first(arglist__52795);
arglist__52795 = cljs.core.next(arglist__52795);
var G__51963 = cljs.core.first(arglist__52795);
arglist__52795 = cljs.core.next(arglist__52795);
var G__51964 = cljs.core.first(arglist__52795);
arglist__52795 = cljs.core.next(arglist__52795);
var G__51965 = cljs.core.first(arglist__52795);
arglist__52795 = cljs.core.next(arglist__52795);
var G__51966 = cljs.core.first(arglist__52795);
var G__51967 = cljs.core.rest(arglist__52795);
return sci$impl$fns$arity_12__delegate(G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51974);

(invoc_array[(1)] = G__51975);

(invoc_array[(2)] = G__51976);

(invoc_array[(3)] = G__51977);

(invoc_array[(4)] = G__51978);

(invoc_array[(5)] = G__51979);

(invoc_array[(6)] = G__51980);

(invoc_array[(7)] = G__51981);

(invoc_array[(8)] = G__51982);

(invoc_array[(9)] = G__51983);

(invoc_array[(10)] = G__51984);

(invoc_array[(11)] = G__51985);

(invoc_array[(12)] = G__51986);

(invoc_array[vararg_idx] = G__51987);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,var_args){
var G__51987 = null;
if (arguments.length > 13) {
var G__52800__i = 0, G__52800__a = new Array(arguments.length -  13);
while (G__52800__i < G__52800__a.length) {G__52800__a[G__52800__i] = arguments[G__52800__i + 13]; ++G__52800__i;}
  G__51987 = new cljs.core.IndexedSeq(G__52800__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__52801){
var G__51974 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51975 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51976 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51977 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51978 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51979 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51980 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51981 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51982 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51983 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51984 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51985 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__51986 = cljs.core.first(arglist__52801);
var G__51987 = cljs.core.rest(arglist__52801);
return sci$impl$fns$arity_13__delegate(G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51989);

(invoc_array[(1)] = G__51990);

(invoc_array[(2)] = G__51991);

(invoc_array[(3)] = G__51992);

(invoc_array[(4)] = G__51993);

(invoc_array[(5)] = G__51994);

(invoc_array[(6)] = G__51995);

(invoc_array[(7)] = G__51996);

(invoc_array[(8)] = G__51997);

(invoc_array[(9)] = G__51998);

(invoc_array[(10)] = G__51999);

(invoc_array[(11)] = G__52000);

(invoc_array[(12)] = G__52001);

(invoc_array[(13)] = G__52002);

(invoc_array[vararg_idx] = G__52003);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,var_args){
var G__52003 = null;
if (arguments.length > 14) {
var G__52803__i = 0, G__52803__a = new Array(arguments.length -  14);
while (G__52803__i < G__52803__a.length) {G__52803__a[G__52803__i] = arguments[G__52803__i + 14]; ++G__52803__i;}
  G__52003 = new cljs.core.IndexedSeq(G__52803__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__52804){
var G__51989 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51990 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51991 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51992 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51993 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51994 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51995 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51996 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51997 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51998 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__51999 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__52000 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__52001 = cljs.core.first(arglist__52804);
arglist__52804 = cljs.core.next(arglist__52804);
var G__52002 = cljs.core.first(arglist__52804);
var G__52003 = cljs.core.rest(arglist__52804);
return sci$impl$fns$arity_14__delegate(G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,G__52027){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52012);

(invoc_array[(1)] = G__52013);

(invoc_array[(2)] = G__52014);

(invoc_array[(3)] = G__52015);

(invoc_array[(4)] = G__52016);

(invoc_array[(5)] = G__52017);

(invoc_array[(6)] = G__52018);

(invoc_array[(7)] = G__52019);

(invoc_array[(8)] = G__52020);

(invoc_array[(9)] = G__52021);

(invoc_array[(10)] = G__52022);

(invoc_array[(11)] = G__52023);

(invoc_array[(12)] = G__52024);

(invoc_array[(13)] = G__52025);

(invoc_array[(14)] = G__52026);

(invoc_array[vararg_idx] = G__52027);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,var_args){
var G__52027 = null;
if (arguments.length > 15) {
var G__52816__i = 0, G__52816__a = new Array(arguments.length -  15);
while (G__52816__i < G__52816__a.length) {G__52816__a[G__52816__i] = arguments[G__52816__i + 15]; ++G__52816__i;}
  G__52027 = new cljs.core.IndexedSeq(G__52816__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,G__52027);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__52817){
var G__52012 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52013 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52014 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52015 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52016 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52017 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52018 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52019 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52020 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52021 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52022 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52023 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52024 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52025 = cljs.core.first(arglist__52817);
arglist__52817 = cljs.core.next(arglist__52817);
var G__52026 = cljs.core.first(arglist__52817);
var G__52027 = cljs.core.rest(arglist__52817);
return sci$impl$fns$arity_15__delegate(G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,G__52027);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52030);

(invoc_array[(1)] = G__52031);

(invoc_array[(2)] = G__52032);

(invoc_array[(3)] = G__52033);

(invoc_array[(4)] = G__52034);

(invoc_array[(5)] = G__52035);

(invoc_array[(6)] = G__52036);

(invoc_array[(7)] = G__52037);

(invoc_array[(8)] = G__52038);

(invoc_array[(9)] = G__52039);

(invoc_array[(10)] = G__52040);

(invoc_array[(11)] = G__52041);

(invoc_array[(12)] = G__52042);

(invoc_array[(13)] = G__52043);

(invoc_array[(14)] = G__52044);

(invoc_array[(15)] = G__52045);

(invoc_array[vararg_idx] = G__52046);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,var_args){
var G__52046 = null;
if (arguments.length > 16) {
var G__52821__i = 0, G__52821__a = new Array(arguments.length -  16);
while (G__52821__i < G__52821__a.length) {G__52821__a[G__52821__i] = arguments[G__52821__i + 16]; ++G__52821__i;}
  G__52046 = new cljs.core.IndexedSeq(G__52821__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__52822){
var G__52030 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52031 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52032 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52033 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52034 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52035 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52036 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52037 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52038 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52039 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52040 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52041 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52042 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52043 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52044 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52045 = cljs.core.first(arglist__52822);
var G__52046 = cljs.core.rest(arglist__52822);
return sci$impl$fns$arity_16__delegate(G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073){
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

(invoc_array[(8)] = G__52064);

(invoc_array[(9)] = G__52065);

(invoc_array[(10)] = G__52066);

(invoc_array[(11)] = G__52067);

(invoc_array[(12)] = G__52068);

(invoc_array[(13)] = G__52069);

(invoc_array[(14)] = G__52070);

(invoc_array[(15)] = G__52071);

(invoc_array[(16)] = G__52072);

(invoc_array[vararg_idx] = G__52073);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,var_args){
var G__52073 = null;
if (arguments.length > 17) {
var G__52824__i = 0, G__52824__a = new Array(arguments.length -  17);
while (G__52824__i < G__52824__a.length) {G__52824__a[G__52824__i] = arguments[G__52824__i + 17]; ++G__52824__i;}
  G__52073 = new cljs.core.IndexedSeq(G__52824__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__52826){
var G__52056 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52057 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52058 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52059 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52060 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52061 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52062 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52063 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52064 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52065 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52066 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52067 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52068 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52069 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52070 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52071 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52072 = cljs.core.first(arglist__52826);
var G__52073 = cljs.core.rest(arglist__52826);
return sci$impl$fns$arity_17__delegate(G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52077);

(invoc_array[(1)] = G__52078);

(invoc_array[(2)] = G__52079);

(invoc_array[(3)] = G__52080);

(invoc_array[(4)] = G__52081);

(invoc_array[(5)] = G__52082);

(invoc_array[(6)] = G__52083);

(invoc_array[(7)] = G__52084);

(invoc_array[(8)] = G__52085);

(invoc_array[(9)] = G__52086);

(invoc_array[(10)] = G__52087);

(invoc_array[(11)] = G__52088);

(invoc_array[(12)] = G__52089);

(invoc_array[(13)] = G__52090);

(invoc_array[(14)] = G__52091);

(invoc_array[(15)] = G__52092);

(invoc_array[(16)] = G__52093);

(invoc_array[(17)] = G__52094);

(invoc_array[vararg_idx] = G__52095);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,var_args){
var G__52095 = null;
if (arguments.length > 18) {
var G__52827__i = 0, G__52827__a = new Array(arguments.length -  18);
while (G__52827__i < G__52827__a.length) {G__52827__a[G__52827__i] = arguments[G__52827__i + 18]; ++G__52827__i;}
  G__52095 = new cljs.core.IndexedSeq(G__52827__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__52828){
var G__52077 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52078 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52079 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52080 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52081 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52082 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52083 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52084 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52085 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52086 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52087 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52088 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52089 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52090 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52091 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52092 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52093 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52094 = cljs.core.first(arglist__52828);
var G__52095 = cljs.core.rest(arglist__52828);
return sci$impl$fns$arity_18__delegate(G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52107);

(invoc_array[(1)] = G__52108);

(invoc_array[(2)] = G__52109);

(invoc_array[(3)] = G__52110);

(invoc_array[(4)] = G__52111);

(invoc_array[(5)] = G__52112);

(invoc_array[(6)] = G__52113);

(invoc_array[(7)] = G__52114);

(invoc_array[(8)] = G__52115);

(invoc_array[(9)] = G__52116);

(invoc_array[(10)] = G__52117);

(invoc_array[(11)] = G__52118);

(invoc_array[(12)] = G__52119);

(invoc_array[(13)] = G__52120);

(invoc_array[(14)] = G__52121);

(invoc_array[(15)] = G__52122);

(invoc_array[(16)] = G__52123);

(invoc_array[(17)] = G__52124);

(invoc_array[(18)] = G__52125);

(invoc_array[vararg_idx] = G__52126);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,var_args){
var G__52126 = null;
if (arguments.length > 19) {
var G__52829__i = 0, G__52829__a = new Array(arguments.length -  19);
while (G__52829__i < G__52829__a.length) {G__52829__a[G__52829__i] = arguments[G__52829__i + 19]; ++G__52829__i;}
  G__52126 = new cljs.core.IndexedSeq(G__52829__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__52830){
var G__52107 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52108 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52109 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52110 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52111 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52112 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52113 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52114 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52115 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52116 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52117 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52118 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52119 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52120 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52121 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52122 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52123 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52124 = cljs.core.first(arglist__52830);
arglist__52830 = cljs.core.next(arglist__52830);
var G__52125 = cljs.core.first(arglist__52830);
var G__52126 = cljs.core.rest(arglist__52830);
return sci$impl$fns$arity_19__delegate(G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52131);

(invoc_array[(1)] = G__52132);

(invoc_array[(2)] = G__52133);

(invoc_array[(3)] = G__52134);

(invoc_array[(4)] = G__52135);

(invoc_array[(5)] = G__52136);

(invoc_array[(6)] = G__52137);

(invoc_array[(7)] = G__52138);

(invoc_array[(8)] = G__52139);

(invoc_array[(9)] = G__52140);

(invoc_array[(10)] = G__52141);

(invoc_array[(11)] = G__52142);

(invoc_array[(12)] = G__52143);

(invoc_array[(13)] = G__52144);

(invoc_array[(14)] = G__52145);

(invoc_array[(15)] = G__52146);

(invoc_array[(16)] = G__52147);

(invoc_array[(17)] = G__52148);

(invoc_array[(18)] = G__52149);

(invoc_array[(19)] = G__52150);

(invoc_array[vararg_idx] = G__52151);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,var_args){
var G__52151 = null;
if (arguments.length > 20) {
var G__52833__i = 0, G__52833__a = new Array(arguments.length -  20);
while (G__52833__i < G__52833__a.length) {G__52833__a[G__52833__i] = arguments[G__52833__i + 20]; ++G__52833__i;}
  G__52151 = new cljs.core.IndexedSeq(G__52833__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__52835){
var G__52131 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52132 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52133 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52134 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52135 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52136 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52137 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52138 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52139 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52140 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52141 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52142 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52143 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52144 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52145 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52146 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52147 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52148 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52149 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52150 = cljs.core.first(arglist__52835);
var G__52151 = cljs.core.rest(arglist__52835);
return sci$impl$fns$arity_20__delegate(G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51791))));

}
})():(function (){var G__52166 = fixed_arity;
switch (G__52166) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

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
case (1):
return (function sci$impl$fns$arity_1(G__52169){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52169);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__52205,G__52206){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52205);

(invoc_array[(1)] = G__52206);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__52210,G__52211,G__52212){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52210);

(invoc_array[(1)] = G__52211);

(invoc_array[(2)] = G__52212);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__52214,G__52215,G__52216,G__52217){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52214);

(invoc_array[(1)] = G__52215);

(invoc_array[(2)] = G__52216);

(invoc_array[(3)] = G__52217);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__52225,G__52226,G__52227,G__52228,G__52229){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52225);

(invoc_array[(1)] = G__52226);

(invoc_array[(2)] = G__52227);

(invoc_array[(3)] = G__52228);

(invoc_array[(4)] = G__52229);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__52232,G__52233,G__52234,G__52235,G__52236,G__52237){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52232);

(invoc_array[(1)] = G__52233);

(invoc_array[(2)] = G__52234);

(invoc_array[(3)] = G__52235);

(invoc_array[(4)] = G__52236);

(invoc_array[(5)] = G__52237);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__52240,G__52241,G__52242,G__52243,G__52244,G__52245,G__52246){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52240);

(invoc_array[(1)] = G__52241);

(invoc_array[(2)] = G__52242);

(invoc_array[(3)] = G__52243);

(invoc_array[(4)] = G__52244);

(invoc_array[(5)] = G__52245);

(invoc_array[(6)] = G__52246);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__52262,G__52263,G__52264,G__52265,G__52266,G__52267,G__52268,G__52269){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52262);

(invoc_array[(1)] = G__52263);

(invoc_array[(2)] = G__52264);

(invoc_array[(3)] = G__52265);

(invoc_array[(4)] = G__52266);

(invoc_array[(5)] = G__52267);

(invoc_array[(6)] = G__52268);

(invoc_array[(7)] = G__52269);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,G__52282,G__52283,G__52284){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52276);

(invoc_array[(1)] = G__52277);

(invoc_array[(2)] = G__52278);

(invoc_array[(3)] = G__52279);

(invoc_array[(4)] = G__52280);

(invoc_array[(5)] = G__52281);

(invoc_array[(6)] = G__52282);

(invoc_array[(7)] = G__52283);

(invoc_array[(8)] = G__52284);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__52292,G__52293,G__52294,G__52295,G__52296,G__52297,G__52298,G__52299,G__52300,G__52301){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52292);

(invoc_array[(1)] = G__52293);

(invoc_array[(2)] = G__52294);

(invoc_array[(3)] = G__52295);

(invoc_array[(4)] = G__52296);

(invoc_array[(5)] = G__52297);

(invoc_array[(6)] = G__52298);

(invoc_array[(7)] = G__52299);

(invoc_array[(8)] = G__52300);

(invoc_array[(9)] = G__52301);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52309);

(invoc_array[(1)] = G__52310);

(invoc_array[(2)] = G__52311);

(invoc_array[(3)] = G__52312);

(invoc_array[(4)] = G__52313);

(invoc_array[(5)] = G__52314);

(invoc_array[(6)] = G__52315);

(invoc_array[(7)] = G__52316);

(invoc_array[(8)] = G__52317);

(invoc_array[(9)] = G__52318);

(invoc_array[(10)] = G__52319);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__52326,G__52327,G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334,G__52335,G__52336,G__52337){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52326);

(invoc_array[(1)] = G__52327);

(invoc_array[(2)] = G__52328);

(invoc_array[(3)] = G__52329);

(invoc_array[(4)] = G__52330);

(invoc_array[(5)] = G__52331);

(invoc_array[(6)] = G__52332);

(invoc_array[(7)] = G__52333);

(invoc_array[(8)] = G__52334);

(invoc_array[(9)] = G__52335);

(invoc_array[(10)] = G__52336);

(invoc_array[(11)] = G__52337);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__52353,G__52354,G__52355,G__52356,G__52357,G__52358,G__52359,G__52360,G__52361,G__52362,G__52363,G__52364,G__52365){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52353);

(invoc_array[(1)] = G__52354);

(invoc_array[(2)] = G__52355);

(invoc_array[(3)] = G__52356);

(invoc_array[(4)] = G__52357);

(invoc_array[(5)] = G__52358);

(invoc_array[(6)] = G__52359);

(invoc_array[(7)] = G__52360);

(invoc_array[(8)] = G__52361);

(invoc_array[(9)] = G__52362);

(invoc_array[(10)] = G__52363);

(invoc_array[(11)] = G__52364);

(invoc_array[(12)] = G__52365);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__52366,G__52367,G__52368,G__52369,G__52370,G__52371,G__52372,G__52373,G__52374,G__52375,G__52376,G__52377,G__52378,G__52379){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52366);

(invoc_array[(1)] = G__52367);

(invoc_array[(2)] = G__52368);

(invoc_array[(3)] = G__52369);

(invoc_array[(4)] = G__52370);

(invoc_array[(5)] = G__52371);

(invoc_array[(6)] = G__52372);

(invoc_array[(7)] = G__52373);

(invoc_array[(8)] = G__52374);

(invoc_array[(9)] = G__52375);

(invoc_array[(10)] = G__52376);

(invoc_array[(11)] = G__52377);

(invoc_array[(12)] = G__52378);

(invoc_array[(13)] = G__52379);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__52393,G__52394,G__52395,G__52396,G__52397,G__52398,G__52399,G__52400,G__52401,G__52402,G__52403,G__52404,G__52405,G__52406,G__52407){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52393);

(invoc_array[(1)] = G__52394);

(invoc_array[(2)] = G__52395);

(invoc_array[(3)] = G__52396);

(invoc_array[(4)] = G__52397);

(invoc_array[(5)] = G__52398);

(invoc_array[(6)] = G__52399);

(invoc_array[(7)] = G__52400);

(invoc_array[(8)] = G__52401);

(invoc_array[(9)] = G__52402);

(invoc_array[(10)] = G__52403);

(invoc_array[(11)] = G__52404);

(invoc_array[(12)] = G__52405);

(invoc_array[(13)] = G__52406);

(invoc_array[(14)] = G__52407);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__52411,G__52412,G__52413,G__52414,G__52415,G__52416,G__52417,G__52418,G__52419,G__52420,G__52421,G__52422,G__52423,G__52424,G__52425,G__52426){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52411);

(invoc_array[(1)] = G__52412);

(invoc_array[(2)] = G__52413);

(invoc_array[(3)] = G__52414);

(invoc_array[(4)] = G__52415);

(invoc_array[(5)] = G__52416);

(invoc_array[(6)] = G__52417);

(invoc_array[(7)] = G__52418);

(invoc_array[(8)] = G__52419);

(invoc_array[(9)] = G__52420);

(invoc_array[(10)] = G__52421);

(invoc_array[(11)] = G__52422);

(invoc_array[(12)] = G__52423);

(invoc_array[(13)] = G__52424);

(invoc_array[(14)] = G__52425);

(invoc_array[(15)] = G__52426);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__52430,G__52431,G__52432,G__52433,G__52434,G__52435,G__52436,G__52437,G__52438,G__52439,G__52440,G__52441,G__52442,G__52443,G__52444,G__52445,G__52446){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52430);

(invoc_array[(1)] = G__52431);

(invoc_array[(2)] = G__52432);

(invoc_array[(3)] = G__52433);

(invoc_array[(4)] = G__52434);

(invoc_array[(5)] = G__52435);

(invoc_array[(6)] = G__52436);

(invoc_array[(7)] = G__52437);

(invoc_array[(8)] = G__52438);

(invoc_array[(9)] = G__52439);

(invoc_array[(10)] = G__52440);

(invoc_array[(11)] = G__52441);

(invoc_array[(12)] = G__52442);

(invoc_array[(13)] = G__52443);

(invoc_array[(14)] = G__52444);

(invoc_array[(15)] = G__52445);

(invoc_array[(16)] = G__52446);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__52450,G__52451,G__52452,G__52453,G__52454,G__52455,G__52456,G__52457,G__52458,G__52459,G__52460,G__52461,G__52462,G__52463,G__52464,G__52465,G__52466,G__52467){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52450);

(invoc_array[(1)] = G__52451);

(invoc_array[(2)] = G__52452);

(invoc_array[(3)] = G__52453);

(invoc_array[(4)] = G__52454);

(invoc_array[(5)] = G__52455);

(invoc_array[(6)] = G__52456);

(invoc_array[(7)] = G__52457);

(invoc_array[(8)] = G__52458);

(invoc_array[(9)] = G__52459);

(invoc_array[(10)] = G__52460);

(invoc_array[(11)] = G__52461);

(invoc_array[(12)] = G__52462);

(invoc_array[(13)] = G__52463);

(invoc_array[(14)] = G__52464);

(invoc_array[(15)] = G__52465);

(invoc_array[(16)] = G__52466);

(invoc_array[(17)] = G__52467);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__52478,G__52479,G__52480,G__52481,G__52482,G__52483,G__52484,G__52485,G__52486,G__52487,G__52488,G__52489,G__52490,G__52491,G__52492,G__52493,G__52494,G__52495,G__52496){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52478);

(invoc_array[(1)] = G__52479);

(invoc_array[(2)] = G__52480);

(invoc_array[(3)] = G__52481);

(invoc_array[(4)] = G__52482);

(invoc_array[(5)] = G__52483);

(invoc_array[(6)] = G__52484);

(invoc_array[(7)] = G__52485);

(invoc_array[(8)] = G__52486);

(invoc_array[(9)] = G__52487);

(invoc_array[(10)] = G__52488);

(invoc_array[(11)] = G__52489);

(invoc_array[(12)] = G__52490);

(invoc_array[(13)] = G__52491);

(invoc_array[(14)] = G__52492);

(invoc_array[(15)] = G__52493);

(invoc_array[(16)] = G__52494);

(invoc_array[(17)] = G__52495);

(invoc_array[(18)] = G__52496);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__52502,G__52503,G__52504,G__52505,G__52506,G__52507,G__52508,G__52509,G__52510,G__52511,G__52512,G__52513,G__52514,G__52515,G__52516,G__52517,G__52518,G__52519,G__52520,G__52521){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52502);

(invoc_array[(1)] = G__52503);

(invoc_array[(2)] = G__52504);

(invoc_array[(3)] = G__52505);

(invoc_array[(4)] = G__52506);

(invoc_array[(5)] = G__52507);

(invoc_array[(6)] = G__52508);

(invoc_array[(7)] = G__52509);

(invoc_array[(8)] = G__52510);

(invoc_array[(9)] = G__52511);

(invoc_array[(10)] = G__52512);

(invoc_array[(11)] = G__52513);

(invoc_array[(12)] = G__52514);

(invoc_array[(13)] = G__52515);

(invoc_array[(14)] = G__52516);

(invoc_array[(15)] = G__52517);

(invoc_array[(16)] = G__52518);

(invoc_array[(17)] = G__52519);

(invoc_array[(18)] = G__52520);

(invoc_array[(19)] = G__52521);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52166))));

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
var G__52903 = cljs.core.next(params__$1);
var G__52905 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52906 = lets;
params__$1 = G__52903;
new_params = G__52905;
lets = G__52906;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52913 = cljs.core.next(params__$1);
var G__52914 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52915 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__52913;
new_params = G__52914;
lets = G__52915;
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
var len__5897__auto___52921 = arguments.length;
var i__5898__auto___52922 = (0);
while(true){
if((i__5898__auto___52922 < len__5897__auto___52921)){
args__5903__auto__.push((arguments[i__5898__auto___52922]));

var G__52924 = (i__5898__auto___52922 + (1));
i__5898__auto___52922 = G__52924;
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

var vec__52606 = sig;
var seq__52607 = cljs.core.seq(vec__52606);
var first__52608 = cljs.core.first(seq__52607);
var seq__52607__$1 = cljs.core.next(seq__52607);
var params = first__52608;
var body = seq__52607__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq52591){
var G__52592 = cljs.core.first(seq52591);
var seq52591__$1 = cljs.core.next(seq52591);
var G__52593 = cljs.core.first(seq52591__$1);
var seq52591__$2 = cljs.core.next(seq52591__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52592,G__52593,seq52591__$2);
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
var G__52967 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__52968 = cljs.core.next(fdecls);
ret = G__52967;
fdecls = G__52968;
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
var len__5897__auto___52973 = arguments.length;
var i__5898__auto___52974 = (0);
while(true){
if((i__5898__auto___52974 < len__5897__auto___52973)){
args__5903__auto__.push((arguments[i__5898__auto___52974]));

var G__52975 = (i__5898__auto___52974 + (1));
i__5898__auto___52974 = G__52975;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq52708){
var G__52709 = cljs.core.first(seq52708);
var seq52708__$1 = cljs.core.next(seq52708);
var G__52710 = cljs.core.first(seq52708__$1);
var seq52708__$2 = cljs.core.next(seq52708__$1);
var G__52711 = cljs.core.first(seq52708__$2);
var seq52708__$3 = cljs.core.next(seq52708__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52709,G__52710,G__52711,seq52708__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52988 = arguments.length;
var i__5898__auto___52989 = (0);
while(true){
if((i__5898__auto___52989 < len__5897__auto___52988)){
args__5903__auto__.push((arguments[i__5898__auto___52989]));

var G__52990 = (i__5898__auto___52989 + (1));
i__5898__auto___52989 = G__52990;
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
var G__52991 = cljs.core.cons(f,p);
var G__52992 = cljs.core.next(args__$1);
p = G__52991;
args__$1 = G__52992;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__52993 = cljs.core.cons(f,p);
var G__52994 = cljs.core.next(args__$1);
p = G__52993;
args__$1 = G__52994;
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
var G__52995 = cljs.core.next(fd);
fd = G__52995;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__52996 = cljs.core.next(fd);
fd = G__52996;
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
var G__52997 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__52998 = cljs.core.next(ds);
acc = G__52997;
ds = G__52998;
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
var G__52999 = cljs.core.next(p);
var G__53000 = cljs.core.cons(cljs.core.first(p),d);
p = G__52999;
d = G__53000;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq52718){
var G__52719 = cljs.core.first(seq52718);
var seq52718__$1 = cljs.core.next(seq52718);
var G__52720 = cljs.core.first(seq52718__$1);
var seq52718__$2 = cljs.core.next(seq52718__$1);
var G__52721 = cljs.core.first(seq52718__$2);
var seq52718__$3 = cljs.core.next(seq52718__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52719,G__52720,G__52721,seq52718__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
