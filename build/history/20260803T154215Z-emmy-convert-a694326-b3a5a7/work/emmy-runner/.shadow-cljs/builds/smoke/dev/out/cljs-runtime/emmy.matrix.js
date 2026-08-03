goog.provide('emmy.matrix');



cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006),new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350),new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134),new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.function","cofunction","emmy.function/cofunction",-944520219));

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {emmy.dual.IPerturbed}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {emmy.function$.IArity}
*/
emmy.matrix.Matrix = (function (r,c,v){
this.r = r;
this.c = c;
this.v = v;
this.cljs$lang$protocol_mask$partition0$ = 2174747415;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.matrix.Matrix.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.matrix.Matrix.prototype.cljs$core$IFind$_find$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return cljs.core._find(self__.v,n);
}));

(emmy.matrix.Matrix.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.v], 0));
}));

(emmy.matrix.Matrix.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.v,k);
}));

(emmy.matrix.Matrix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.v,k,not_found);
}));

(emmy.matrix.Matrix.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return cljs.core._nth(self__.v,n);
}));

(emmy.matrix.Matrix.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core._nth(self__.v,n,not_found);
}));

(emmy.matrix.Matrix.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[emmy.structure.Matrix \"",x__$1.toString(),"\"]"], 0));
}));

(emmy.matrix.Matrix.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.v);
}));

(emmy.matrix.Matrix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (emmy.matrix.m_COLON__EQ_.cljs$core$IFn$_invoke$arity$2 ? emmy.matrix.m_COLON__EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : emmy.matrix.m_COLON__EQ_.call(null,this$__$1,that));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(emmy.matrix.Matrix.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.matrix.Matrix.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.r,self__.c)){
return new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.r,(1))){
return new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.c,(1))){
return new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350);
} else {
return new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831);

}
}
}
}));

(emmy.matrix.Matrix.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.matrix.Matrix.prototype.emmy$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.function$.seq_arity),emmy.function$.combine_arities,self__.v);
}));

(emmy.matrix.Matrix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,entry){
var self__ = this;
var ___$1 = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core._assoc(self__.v,k,entry)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.v,k);
}));

(emmy.matrix.Matrix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._seq(self__.v);
}));

(emmy.matrix.Matrix.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__38722 = (arguments.length - (1));
switch (G__38722) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (6):
return self__.cljs$core$IFn$_invoke$arity$6((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (8):
return self__.cljs$core$IFn$_invoke$arity$8((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (10):
return self__.cljs$core$IFn$_invoke$arity$10((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (12):
return self__.cljs$core$IFn$_invoke$arity$12((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (14):
return self__.cljs$core$IFn$_invoke$arity$14((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (16):
return self__.cljs$core$IFn$_invoke$arity$16((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case (18):
return self__.cljs$core$IFn$_invoke$arity$18((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
case (19):
return self__.cljs$core$IFn$_invoke$arity$19((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]));

break;
case (20):
return self__.cljs$core$IFn$_invoke$arity$20((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]));

break;
case (21):
return self__.cljs$core$IFn$_invoke$arity$21((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]),(arguments[(21)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(emmy.matrix.Matrix.prototype.apply = (function (self__,args38707){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args38707)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38683_SHARP_){
return (p1__38683_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38683_SHARP_.cljs$core$IFn$_invoke$arity$1(a) : p1__38683_SHARP_.call(null,a));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38684_SHARP_){
return (p1__38684_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__38684_SHARP_.cljs$core$IFn$_invoke$arity$2(a,b) : p1__38684_SHARP_.call(null,a,b));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,cx){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38685_SHARP_){
return (p1__38685_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__38685_SHARP_.cljs$core$IFn$_invoke$arity$3(a,b,cx) : p1__38685_SHARP_.call(null,a,b,cx));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,cx,d){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38686_SHARP_){
return (p1__38686_SHARP_.cljs$core$IFn$_invoke$arity$4 ? p1__38686_SHARP_.cljs$core$IFn$_invoke$arity$4(a,b,cx,d) : p1__38686_SHARP_.call(null,a,b,cx,d));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,cx,d,e){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38687_SHARP_){
return (p1__38687_SHARP_.cljs$core$IFn$_invoke$arity$5 ? p1__38687_SHARP_.cljs$core$IFn$_invoke$arity$5(a,b,cx,d,e) : p1__38687_SHARP_.call(null,a,b,cx,d,e));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,cx,d,e,f){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38688_SHARP_){
return (p1__38688_SHARP_.cljs$core$IFn$_invoke$arity$6 ? p1__38688_SHARP_.cljs$core$IFn$_invoke$arity$6(a,b,cx,d,e,f) : p1__38688_SHARP_.call(null,a,b,cx,d,e,f));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,cx,d,e,f,g){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38689_SHARP_){
return (p1__38689_SHARP_.cljs$core$IFn$_invoke$arity$7 ? p1__38689_SHARP_.cljs$core$IFn$_invoke$arity$7(a,b,cx,d,e,f,g) : p1__38689_SHARP_.call(null,a,b,cx,d,e,f,g));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,cx,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38690_SHARP_){
return (p1__38690_SHARP_.cljs$core$IFn$_invoke$arity$8 ? p1__38690_SHARP_.cljs$core$IFn$_invoke$arity$8(a,b,cx,d,e,f,g,h) : p1__38690_SHARP_.call(null,a,b,cx,d,e,f,g,h));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,cx,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38691_SHARP_){
return (p1__38691_SHARP_.cljs$core$IFn$_invoke$arity$9 ? p1__38691_SHARP_.cljs$core$IFn$_invoke$arity$9(a,b,cx,d,e,f,g,h,i) : p1__38691_SHARP_.call(null,a,b,cx,d,e,f,g,h,i));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,cx,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38692_SHARP_){
return (p1__38692_SHARP_.cljs$core$IFn$_invoke$arity$10 ? p1__38692_SHARP_.cljs$core$IFn$_invoke$arity$10(a,b,cx,d,e,f,g,h,i,j) : p1__38692_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,cx,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38693_SHARP_){
return (p1__38693_SHARP_.cljs$core$IFn$_invoke$arity$11 ? p1__38693_SHARP_.cljs$core$IFn$_invoke$arity$11(a,b,cx,d,e,f,g,h,i,j,k) : p1__38693_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,cx,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38694_SHARP_){
return (p1__38694_SHARP_.cljs$core$IFn$_invoke$arity$12 ? p1__38694_SHARP_.cljs$core$IFn$_invoke$arity$12(a,b,cx,d,e,f,g,h,i,j,k,l) : p1__38694_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38695_SHARP_){
return (p1__38695_SHARP_.cljs$core$IFn$_invoke$arity$13 ? p1__38695_SHARP_.cljs$core$IFn$_invoke$arity$13(a,b,cx,d,e,f,g,h,i,j,k,l,m) : p1__38695_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38696_SHARP_){
return (p1__38696_SHARP_.cljs$core$IFn$_invoke$arity$14 ? p1__38696_SHARP_.cljs$core$IFn$_invoke$arity$14(a,b,cx,d,e,f,g,h,i,j,k,l,m,n) : p1__38696_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38697_SHARP_){
return (p1__38697_SHARP_.cljs$core$IFn$_invoke$arity$15 ? p1__38697_SHARP_.cljs$core$IFn$_invoke$arity$15(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o) : p1__38697_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38698_SHARP_){
return (p1__38698_SHARP_.cljs$core$IFn$_invoke$arity$16 ? p1__38698_SHARP_.cljs$core$IFn$_invoke$arity$16(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p) : p1__38698_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38699_SHARP_){
return (p1__38699_SHARP_.cljs$core$IFn$_invoke$arity$17 ? p1__38699_SHARP_.cljs$core$IFn$_invoke$arity$17(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : p1__38699_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38700_SHARP_){
return (p1__38700_SHARP_.cljs$core$IFn$_invoke$arity$18 ? p1__38700_SHARP_.cljs$core$IFn$_invoke$arity$18(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx) : p1__38700_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38701_SHARP_){
return (p1__38701_SHARP_.cljs$core$IFn$_invoke$arity$19 ? p1__38701_SHARP_.cljs$core$IFn$_invoke$arity$19(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s) : p1__38701_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s,t){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38702_SHARP_){
return (p1__38702_SHARP_.cljs$core$IFn$_invoke$arity$20 ? p1__38702_SHARP_.cljs$core$IFn$_invoke$arity$20(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s,t) : p1__38702_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s,t));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s,t,rest){
var self__ = this;
var _ = this;
return (new emmy.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38703_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(p1__38703_SHARP_,a,b,cx,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s,t,rest], 0));
}),row);
}),self__.v)));
}));

(emmy.matrix.Matrix.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.matrix.Matrix.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (M,old,new$){
var self__ = this;
var M__$1 = this;
var G__38850 = (function (p1__38659_SHARP_){
return emmy.dual.replace_tag(p1__38659_SHARP_,old,new$);
});
var G__38851 = M__$1;
return (emmy.matrix.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.matrix.fmap.cljs$core$IFn$_invoke$arity$2(G__38850,G__38851) : emmy.matrix.fmap.call(null,G__38850,G__38851));
}));

(emmy.matrix.Matrix.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (M,tag,mode){
var self__ = this;
var M__$1 = this;
var G__38855 = (function (p1__38660_SHARP_){
return emmy.dual.extract_tangent(p1__38660_SHARP_,tag,mode);
});
var G__38856 = M__$1;
return (emmy.matrix.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.matrix.fmap.cljs$core$IFn$_invoke$arity$2(G__38855,G__38856) : emmy.matrix.fmap.call(null,G__38855,G__38856));
}));

(emmy.matrix.Matrix.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (M,id){
var self__ = this;
var M__$1 = this;
var G__38857 = (function (p1__38661_SHARP_){
return emmy.dual.extract_id(p1__38661_SHARP_,id);
});
var G__38858 = M__$1;
return (emmy.matrix.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.matrix.fmap.cljs$core$IFn$_invoke$arity$2(G__38857,G__38858) : emmy.matrix.fmap.call(null,G__38857,G__38858));
}));

(emmy.matrix.Matrix.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(emmy.matrix.Matrix.cljs$lang$type = true);

(emmy.matrix.Matrix.cljs$lang$ctorStr = "emmy.matrix/Matrix");

(emmy.matrix.Matrix.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.matrix/Matrix");
}));

/**
 * Positional factory function for emmy.matrix/Matrix.
 */
emmy.matrix.__GT_Matrix = (function emmy$matrix$__GT_Matrix(r,c,v){
return (new emmy.matrix.Matrix(r,c,v));
});

/**
 * Returns true if the supplied `m` is an instance of [[Matrix]], false
 *   otherwise.
 */
emmy.matrix.matrix_QMARK_ = (function emmy$matrix$matrix_QMARK_(m){
return (m instanceof emmy.matrix.Matrix);
});
/**
 * Returns the number of rows of the supplied matrix `m`. Throws if a
 *   non-matrix is supplied.
 */
emmy.matrix.num_rows = (function emmy$matrix$num_rows(m){
if(emmy.matrix.matrix_QMARK_(m)){
return m.r;
} else {
return emmy.util.illegal((""+"non-matrix supplied: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)));
}
});
/**
 * Returns the number of columns of the supplied matrix `m`. Throws if a
 *   non-matrix is supplied.
 */
emmy.matrix.num_cols = (function emmy$matrix$num_cols(m){
if(emmy.matrix.matrix_QMARK_(m)){
return m.c;
} else {
return emmy.util.illegal((""+"non-matrix supplied: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)));
}
});
/**
 * If `m` is already a vector, acts as identity. Else, returns the matrix as a
 *   vector of rows (or throws if neither of these types is passed).
 */
emmy.matrix.matrix__GT_vector = (function emmy$matrix$matrix__GT_vector(m){
if(cljs.core.vector_QMARK_(m)){
return m;
} else {
if(emmy.matrix.matrix_QMARK_(m)){
return m.v;
} else {
return emmy.util.illegal((""+"non-matrix supplied: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)));

}
}
});
/**
 * Returns true if `m` is a square matrix, false otherwise.
 */
emmy.matrix.square_QMARK_ = (function emmy$matrix$square_QMARK_(m){
return ((emmy.matrix.matrix_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.num_rows(m),emmy.matrix.num_cols(m))));
});
/**
 * Returns true if `m` is a matrix with a single column (a 'column matrix'),
 *   false otherwise.
 */
emmy.matrix.column_QMARK_ = (function emmy$matrix$column_QMARK_(m){
return ((emmy.matrix.matrix_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.num_cols(m),(1))));
});
/**
 * Returns true if `m` is a matrix with a single row (a 'row matrix'), false
 *   otherwise.
 */
emmy.matrix.row_QMARK_ = (function emmy$matrix$row_QMARK_(m){
return ((emmy.matrix.matrix_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.num_rows(m),(1))));
});
/**
 * Returns true if the matrices `this` and `that` are of identical shape and
 *   return `v/=` for all entries, false otherwise.
 */
emmy.matrix.m_COLON__EQ_ = (function emmy$matrix$m_COLON__EQ_(this$,that){
var and__5160__auto__ = (that instanceof emmy.matrix.Matrix);
if(and__5160__auto__){
var m = that;
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.r,m.r);
if(and__5160__auto____$1){
var and__5160__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.c,m.c);
if(and__5160__auto____$2){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.v,m.v);
} else {
return and__5160__auto____$2;
}
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if the matrix `m` is a diagonal matrix with all diagonal elements
 *   equal to `c`, false otherwise.
 */
emmy.matrix.matrix_EQ_scalar = (function emmy$matrix$matrix_EQ_scalar(m,c){
var and__5160__auto__ = emmy.matrix.square_QMARK_(m);
if(and__5160__auto__){
return emmy.matrix.m_COLON__EQ_(m,(function (){var G__38895 = emmy.matrix.num_rows(m);
var G__38896 = c;
return (emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2 ? emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(G__38895,G__38896) : emmy.matrix.make_diagonal.call(null,G__38895,G__38896));
})());
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if the matrix `m` is a diagonal matrix with all diagonal elements
 *   equal to `c`, false otherwise.
 */
emmy.matrix.scalar_EQ_matrix = (function emmy$matrix$scalar_EQ_matrix(c,m){
var and__5160__auto__ = emmy.matrix.square_QMARK_(m);
if(and__5160__auto__){
return emmy.matrix.m_COLON__EQ_((function (){var G__38900 = emmy.matrix.num_rows(m);
var G__38901 = c;
return (emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2 ? emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(G__38900,G__38901) : emmy.matrix.make_diagonal.call(null,G__38900,G__38901));
})(),m);
} else {
return and__5160__auto__;
}
});
/**
 * Returns a matrix with `r` rows and `c` columns, whose entries are generated by
 *   the supplied function `f`.
 * 
 *   If you only supply one dimension `n` the returned matrix will be square.
 * 
 *   The entry in the `i`th row and `j`-th column is `(f i j)`.
 */
emmy.matrix.generate = (function emmy$matrix$generate(var_args){
var G__38903 = arguments.length;
switch (G__38903) {
case 2:
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.matrix.generate.cljs$core$IFn$_invoke$arity$2 = (function (n,f){
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(n,n,f);
}));

(emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3 = (function (r,c,f){
return emmy.matrix.__GT_Matrix(r,c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (j){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(i,j) : f.call(null,i,j));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(r)));
}));

(emmy.matrix.generate.cljs$lang$maxFixedArity = 3);

/**
 * Generates a `nrows` x `ncols` matrix of symbolic entries, each prefixed by the
 *   supplied symbol `sym`.
 * 
 *   If `ncols` (the third argument) is not supplied, returns a square matrix of
 *   size `nrows` x `nrows`.
 * 
 *   NOTE: The symbols in the returned matrix record their Einstein-notation path
 *   into the structure that this matrix represents; a `down` of `up` columns. This
 *   means that the returned indices embedded in the symbols look flipped, `ji` vs
 *   `ij`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-matrix 'x 2 2)
 *   (by-rows ['x_0↑0 'x_1↑0]
 *            ['x_0↑1 'x_1↑1]))
 *   ```
 */
emmy.matrix.literal_matrix = (function emmy$matrix$literal_matrix(var_args){
var G__38913 = arguments.length;
switch (G__38913) {
case 2:
return emmy.matrix.literal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.matrix.literal_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.matrix.literal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (sym,nrows){
return emmy.matrix.literal_matrix.cljs$core$IFn$_invoke$arity$3(sym,nrows,nrows);
}));

(emmy.matrix.literal_matrix.cljs$core$IFn$_invoke$arity$3 = (function (sym,nrows,ncols){
var prefix = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+"_");
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(nrows,ncols,(function (i,j){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)+"\u2191"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)));
}));
}));

(emmy.matrix.literal_matrix.cljs$lang$maxFixedArity = 3);

/**
 * Returns a column matrix of `nrows` symbolic entries, each prefixed by the
 *   supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-column-matrix 'x 3)
 *   (by-cols ['x↑0 'x↑1 'x↑2]))
 *   ```
 */
emmy.matrix.literal_column_matrix = (function emmy$matrix$literal_column_matrix(sym,nrows){
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(nrows,(1),(function (i,_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+"\u2191"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)));
}));
});
/**
 * Returns a row matrix of `ncols` symbolic entries, each prefixed by the
 *   supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-row-matrix 'x 3)
 *   (by-rows ['x_0 'x_1 'x_2]))
 *   ```
 */
emmy.matrix.literal_row_matrix = (function emmy$matrix$literal_row_matrix(sym,ncols){
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3((1),ncols,(function (_,j){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)));
}));
});
/**
 * Like [[clojure.core/get-in]] for matrices, but obeying the scmutils convention:
 *   only one index is required to get an unboxed element from a column vector.
 * 
 *   NOTE that this is perhaps an unprincipled exception...
 */
emmy.matrix.get_in = (function emmy$matrix$get_in(m,is){
var e = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,is);
if(((emmy.matrix.column_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(is))))){
return (e.cljs$core$IFn$_invoke$arity$1 ? e.cljs$core$IFn$_invoke$arity$1((0)) : e.call(null,(0)));
} else {
return e;
}
});
/**
 * Returns true if `f` is true for some element of the matrix `m`, false
 *   otherwise. (Also works on arbitrary nested sequences.)
 */
emmy.matrix.some = (function emmy$matrix$some(f,m){
return cljs.core.some(f,cljs.core.flatten(m));
});
/**
 * Maps `f` over the elements of the matrix `m` returning a new matrix of the same
 *   dimensions as `m`.
 */
emmy.matrix.fmap = (function emmy$matrix$fmap(f,m){
return emmy.matrix.__GT_Matrix(emmy.matrix.num_rows(m),emmy.matrix.num_cols(m),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38931_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,p1__38931_SHARP_);
}),m));
});
/**
 * Maps `f` over three arguments:
 * 
 *   - each element of the matrix `m`
 *   - its row `i`
 *   - its column `j`
 * 
 *   and returns a new matrix of the same dimensions as `m`. 
 */
emmy.matrix.fmap_indexed = (function emmy$matrix$fmap_indexed(f,m){
var process_row = (function emmy$matrix$fmap_indexed_$_process_row(i,row){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (j,elem){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(elem,i,j) : f.call(null,elem,i,j));
}),row));
});
var new_rows = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(process_row,m));
return emmy.matrix.__GT_Matrix(emmy.matrix.num_rows(m),emmy.matrix.num_cols(m),new_rows);
});
/**
 * Returns true if the supplied sequence contains only sequences of the same
 *   length (that could be transformed into columns of a matrix), false otherwise
 */
emmy.matrix.well_formed_QMARK_ = (function emmy$matrix$well_formed_QMARK_(vs){
if(cljs.core.seq(vs)){
} else {
throw (new Error("Assert failed: (seq vs)"));
}

if(cljs.core.every_QMARK_(cljs.core.seq,vs)){
} else {
throw (new Error("Assert failed: (every? seq vs)"));
}

var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,vs);
return cljs.core.every_QMARK_((function (p1__38939_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__38939_SHARP_,cljs.core.first(counts));
}),cljs.core.next(counts));
});
/**
 * Returns a matrix whose rows consist of the supplied sequence of `rows`. These
 *   all must be the same length.
 * 
 *   for a variadic equivalent, see [[by-rows]].
 */
emmy.matrix.by_rows_STAR_ = (function emmy$matrix$by_rows_STAR_(rows){
if(emmy.matrix.well_formed_QMARK_(rows)){
return emmy.matrix.__GT_Matrix(cljs.core.count(rows),cljs.core.count(cljs.core.first(rows)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,rows));
} else {
return emmy.util.illegal("malformed matrix");
}
});
/**
 * Returns a matrix whose rows consist of the supplied sequence of `rows`. These
 *   all must be the same length.
 * 
 *   Variadic equivalent to [[by-rows*]].
 */
emmy.matrix.by_rows = (function emmy$matrix$by_rows(var_args){
var args__5903__auto__ = [];
var len__5897__auto___39388 = arguments.length;
var i__5898__auto___39389 = (0);
while(true){
if((i__5898__auto___39389 < len__5897__auto___39388)){
args__5903__auto__.push((arguments[i__5898__auto___39389]));

var G__39390 = (i__5898__auto___39389 + (1));
i__5898__auto___39389 = G__39390;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic = (function (rows){
return emmy.matrix.by_rows_STAR_(rows);
}));

(emmy.matrix.by_rows.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.matrix.by_rows.cljs$lang$applyTo = (function (seq38944){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38944));
}));

/**
 * Returns a matrix whose columns consist of the supplied sequence of `cols`.
 *   These all must be the same length.
 * 
 *   for a variadic equivalent, see [[by-cols]].
 */
emmy.matrix.by_cols_STAR_ = (function emmy$matrix$by_cols_STAR_(cols){
if(emmy.matrix.well_formed_QMARK_(cols)){
return emmy.matrix.__GT_Matrix(cljs.core.count(cljs.core.first(cols)),cljs.core.count(cols),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cols));
} else {
return emmy.util.illegal("malformed matrix");
}
});
/**
 * Returns a matrix whose columns consist of the supplied sequence of `cols`.
 *   These all must be the same length.
 * 
 *   Variadic equivalent to [[by-cols*]].
 */
emmy.matrix.by_cols = (function emmy$matrix$by_cols(var_args){
var args__5903__auto__ = [];
var len__5897__auto___39392 = arguments.length;
var i__5898__auto___39393 = (0);
while(true){
if((i__5898__auto___39393 < len__5897__auto___39392)){
args__5903__auto__.push((arguments[i__5898__auto___39393]));

var G__39394 = (i__5898__auto___39393 + (1));
i__5898__auto___39393 = G__39394;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.matrix.by_cols.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.matrix.by_cols.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
return emmy.matrix.by_cols_STAR_(cols);
}));

(emmy.matrix.by_cols.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.matrix.by_cols.cljs$lang$applyTo = (function (seq38988){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38988));
}));

/**
 * Returns a row matrix populated by the supplied `xs`. For a variadic equivalent,
 *   see [[row]].
 */
emmy.matrix.row_STAR_ = (function emmy$matrix$row_STAR_(xs){
if(cljs.core.truth_(cljs.core.not_empty(xs))){
} else {
throw (new Error("Assert failed: (not-empty xs)"));
}

return emmy.matrix.__GT_Matrix((1),cljs.core.count(xs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(xs)], null));
});
/**
 * Returns a row matrix populated by the supplied `xs`. Variadic equivalent
 *   to [[row*]].
 */
emmy.matrix.row = (function emmy$matrix$row(var_args){
var args__5903__auto__ = [];
var len__5897__auto___39395 = arguments.length;
var i__5898__auto___39396 = (0);
while(true){
if((i__5898__auto___39396 < len__5897__auto___39395)){
args__5903__auto__.push((arguments[i__5898__auto___39396]));

var G__39397 = (i__5898__auto___39396 + (1));
i__5898__auto___39396 = G__39397;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.matrix.row.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.matrix.row.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return emmy.matrix.row_STAR_(xs);
}));

(emmy.matrix.row.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.matrix.row.cljs$lang$applyTo = (function (seq39008){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39008));
}));

/**
 * Returns a column matrix populated by the supplied `xs`. For a variadic equivalent,
 *   see [[column]].
 */
emmy.matrix.column_STAR_ = (function emmy$matrix$column_STAR_(xs){
if(cljs.core.truth_(cljs.core.not_empty(xs))){
} else {
throw (new Error("Assert failed: (not-empty xs)"));
}

return emmy.matrix.__GT_Matrix(cljs.core.count(xs),(1),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,xs));
});
/**
 * Returns a column matrix populated by the supplied `xs`. Variadic equivalent
 *   to [[column*]].
 */
emmy.matrix.column = (function emmy$matrix$column(var_args){
var args__5903__auto__ = [];
var len__5897__auto___39399 = arguments.length;
var i__5898__auto___39400 = (0);
while(true){
if((i__5898__auto___39400 < len__5897__auto___39399)){
args__5903__auto__.push((arguments[i__5898__auto___39400]));

var G__39401 = (i__5898__auto___39400 + (1));
i__5898__auto___39400 = G__39401;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.matrix.column.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.matrix.column.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return emmy.matrix.column_STAR_(xs);
}));

(emmy.matrix.column.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.matrix.column.cljs$lang$applyTo = (function (seq39016){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39016));
}));

/**
 * Returns the transpose of the matrix `m`. The transpose is the original matrix,
 *   with rows and columns swapped.
 */
emmy.matrix.transpose = (function emmy$matrix$transpose(m){
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(emmy.matrix.num_cols(m),emmy.matrix.num_rows(m),(function (p1__39019_SHARP_,p2__39018_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__39018_SHARP_,p1__39019_SHARP_], null));
}));
});
/**
 * Returns a structure generated by converting `m` into a nested structure with
 *   the supplied `outer-orientation` and `inner-orientation`.
 * 
 *   If `t?` is true, the columns of `m` will form the inner tuples. If `t?` is
 *   false, the rows of `m` will form the inner tuples.
 * 
 *   By default, if you supply a single argument (the matrix `m`), a matrix turns
 *   into a single outer `::s/down` of inner columns represented as `::up`
 *   structures.
 */
emmy.matrix.__GT_structure = (function emmy$matrix$__GT_structure(var_args){
var G__39040 = arguments.length;
switch (G__39040) {
case 1:
return emmy.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return emmy.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1 = (function (m){
return emmy.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$4(m,new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),true);
}));

(emmy.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$4 = (function (m,outer_orientation,inner_orientation,t_QMARK_){
if(emmy.structure.valid_orientation_QMARK_(outer_orientation)){
} else {
throw (new Error("Assert failed: (s/valid-orientation? outer-orientation)"));
}

if(emmy.structure.valid_orientation_QMARK_(inner_orientation)){
} else {
throw (new Error("Assert failed: (s/valid-orientation? inner-orientation)"));
}

var m_SINGLEQUOTE_ = (cljs.core.truth_(t_QMARK_)?emmy.matrix.transpose(m):m);
return emmy.structure.make(outer_orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39036_SHARP_){
return emmy.structure.make(inner_orientation,p1__39036_SHARP_);
}),m_SINGLEQUOTE_));
}));

(emmy.matrix.__GT_structure.cljs$lang$maxFixedArity = 4);

/**
 * Convert a sequence `xs` (typically, of function arguments) to an up-structure.
 * 
 *   Any matrix present in the argument list will be converted to row of columns
 *   via [[->structure]].
 */
emmy.matrix.seq__GT_ = (function emmy$matrix$seq__GT_(xs){
return emmy.structure.up_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
if(emmy.matrix.matrix_QMARK_(m)){
return emmy.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1(m);
} else {
return m;
}
}),xs));
});
/**
 * Returns the matrix product of `a` and `b`. Throws if `a` and `b` are
 *   incompatible for multiplication.
 */
emmy.matrix.mul = (function emmy$matrix$mul(a,b){
var ra = emmy.matrix.num_rows(a);
var rb = emmy.matrix.num_rows(b);
var ca = emmy.matrix.num_cols(a);
var cb = emmy.matrix.num_cols(b);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ca,rb)){
} else {
emmy.util.illegal("matrices incompatible for multiplication");
}

return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(ra,cb,(function (p1__39058_SHARP_,p2__39059_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,(function (){var iter__5649__auto__ = (function emmy$matrix$mul_$_iter__39063(s__39064){
return (new cljs.core.LazySeq(null,(function (){
var s__39064__$1 = s__39064;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39064__$1);
if(temp__5825__auto__){
var s__39064__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39064__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39064__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39066 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39065 = (0);
while(true){
if((i__39065 < size__5648__auto__)){
var k = cljs.core._nth(c__5647__auto__,i__39065);
cljs.core.chunk_append(b__39066,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39058_SHARP_,k], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p2__39059_SHARP_], null))));

var G__39410 = (i__39065 + (1));
i__39065 = G__39410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39066),emmy$matrix$mul_$_iter__39063(cljs.core.chunk_rest(s__39064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39066),null);
}
} else {
var k = cljs.core.first(s__39064__$2);
return cljs.core.cons(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39058_SHARP_,k], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p2__39059_SHARP_], null))),emmy$matrix$mul_$_iter__39063(cljs.core.rest(s__39064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(ca));
})());
}));
});
/**
 * Returns a matrix of the same dimensions as matrix `m` with each entry
 *   multiplied (on the left) by the scalar quantity `c`.
 */
emmy.matrix.scalar_STAR_matrix = (function emmy$matrix$scalar_STAR_matrix(c,m){
return emmy.matrix.fmap((function (p1__39070_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,p1__39070_SHARP_);
}),m);
});
/**
 * Returns a matrix of the same dimensions as matrix `m` with each entry
 *   multiplied (on the right) by the scalar quantity `c`.
 */
emmy.matrix.matrix_STAR_scalar = (function emmy$matrix$matrix_STAR_scalar(m,c){
return emmy.matrix.fmap((function (p1__39074_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p1__39074_SHARP_,c);
}),m);
});
/**
 * Applies `f` elementwise between the matrices `a` and `b`. Throws if `a` and `b`
 *   don't have the same dimensions.
 */
emmy.matrix.elementwise = (function emmy$matrix$elementwise(f,a,b){
var ra = emmy.matrix.num_rows(a);
var rb = emmy.matrix.num_rows(b);
var ca = emmy.matrix.num_cols(a);
var cb = emmy.matrix.num_cols(b);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra,rb)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ca,cb)))){
emmy.util.illegal("matrices incompatible for operation");
} else {
}

return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(ra,ca,(function (p1__39078_SHARP_,p2__39079_SHARP_){
var G__39085 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39078_SHARP_,p2__39079_SHARP_], null));
var G__39086 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39078_SHARP_,p2__39079_SHARP_], null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__39085,G__39086) : f.call(null,G__39085,G__39086));
}));
});
/**
 * Converts the square structure `s` into a matrix, and calls the supplied
 *   continuation `cont` with
 * 
 *   - the generated matrix
 *   - a function which will restore a matrix to a structure with the same inner
 *  and outer orientations as s
 * 
 *   Returns the result of the continuation call.
 */
emmy.matrix.two_tensor__GT_ = (function emmy$matrix$two_tensor__GT_(s,cont){
var temp__5823__auto__ = emmy.structure.two_tensor_info(s);
if(cljs.core.truth_(temp__5823__auto__)){
var map__39087 = temp__5823__auto__;
var map__39087__$1 = cljs.core.__destructure_map(map__39087);
var inner_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39087__$1,new cljs.core.Keyword(null,"inner-size","inner-size",755766819));
var outer_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39087__$1,new cljs.core.Keyword(null,"outer-size","outer-size",705588000));
var inner_orientation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39087__$1,new cljs.core.Keyword(null,"inner-orientation","inner-orientation",-728775897));
var outer_orientation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39087__$1,new cljs.core.Keyword(null,"outer-orientation","outer-orientation",-985566313));
var transpose_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inner_orientation,new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384));
var vec__39088 = ((transpose_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_size,outer_size], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_size,inner_size], null));
var major_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39088,(0),null);
var minor_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39088,(1),null);
var M = emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(major_size,minor_size,(function (i,j){
var path = ((transpose_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,path);
}));
var restore_fn = (function (m){
return emmy.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$4(m,outer_orientation,inner_orientation,transpose_QMARK_);
});
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(M,restore_fn) : cont.call(null,M,restore_fn));
} else {
return emmy.util.illegal((""+"structure "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+" is not a 2-tensor"));
}
});
/**
 * Applies matrix operation `f` to square structure `s` and returns a structure of
 *   the same type as the supplied structure.
 */
emmy.matrix.two_tensor_operation = (function emmy$matrix$two_tensor_operation(s,f){
return emmy.matrix.two_tensor__GT_(s,(function (m,__GT_s){
var G__39091 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
return (__GT_s.cljs$core$IFn$_invoke$arity$1 ? __GT_s.cljs$core$IFn$_invoke$arity$1(G__39091) : __GT_s.call(null,G__39091));
}));
});
/**
 * Given some 2-tensor-shaped structure `s`, returns the corresponding matrix.
 * 
 *   The outer orientation is ignored; If the inner structures are `up`, they're
 *   treated as columns. Inner `down` structures are treated as rows.
 */
emmy.matrix.structure__GT_matrix = (function emmy$matrix$structure__GT_matrix(s){
return emmy.matrix.two_tensor__GT_(s,(function (m,_){
return m;
}));
});
/**
 * Multiply a matrix by an up structure on the right. The return value is up.
 */
emmy.matrix.M_STAR_u = (function emmy$matrix$M_STAR_u(m,u){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.num_cols(m),cljs.core.count(u))){
emmy.util.illegal("matrix and tuple incompatible for multiplication");
} else {
}

return emmy.structure.up_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var row_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i);
var G__39093 = (function (k){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_i,k),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(u,k));
});
var G__39094 = (0);
var G__39095 = emmy.matrix.num_cols(m);
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__39093,G__39094,G__39095) : emmy.util.aggregate.generic_sum.call(null,G__39093,G__39094,G__39095));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(emmy.matrix.num_rows(m))));
});
/**
 * Multiply a matrix `m` by down tuple `d` on the left. The return value has
 *   orientation `down`.
 */
emmy.matrix.d_STAR_M = (function emmy$matrix$d_STAR_M(d,m){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(d),emmy.matrix.num_rows(m))){
emmy.util.illegal("matrix and tuple incompatible for multiplication");
} else {
}

return emmy.structure.down_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var G__39096 = (function (k){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(d,k),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,i], null)));
});
var G__39097 = (0);
var G__39098 = emmy.matrix.num_rows(m);
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__39096,G__39097,G__39098) : emmy.util.aggregate.generic_sum.call(null,G__39096,G__39097,G__39098));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(emmy.matrix.num_cols(m))));
});
/**
 * Set this dynamic variable to `false` to allow [[s->m]] to operate
 *   on structures for which `(* ls ms rs)` does NOT yield a numerical value.
 */
emmy.matrix._STAR_careful_conversion_STAR_ = true;
/**
 * Convert the structure `ms`, which would be a scalar if the (compatible)
 *   multiplication `(* ls ms rs)` were performed, to a matrix.
 */
emmy.matrix.s__GT_m = (function emmy$matrix$s__GT_m(var_args){
var G__39101 = arguments.length;
switch (G__39101) {
case 2:
return emmy.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$2 = (function (ms,rs){
var ls = emmy.structure.compatible_shape(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,rs));
return emmy.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3(ls,ms,rs);
}));

(emmy.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3 = (function (ls,ms,rs){
if(cljs.core.truth_(emmy.matrix._STAR_careful_conversion_STAR_)){
if(emmy.value.scalar_QMARK_(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ls,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,rs)))){
} else {
throw (new Error("Assert failed: (v/scalar? (g/* ls (g/* ms rs)))"));
}
} else {
}

var ndowns = emmy.structure.dimension(ls);
var nups = emmy.structure.dimension(rs);
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(ndowns,nups,(function (i,j){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$2(emmy.structure.basis_unit.cljs$core$IFn$_invoke$arity$2(ndowns,i),ls),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$2(emmy.structure.basis_unit.cljs$core$IFn$_invoke$arity$2(nups,j),rs)));
}));
}));

(emmy.matrix.s__GT_m.cljs$lang$maxFixedArity = 3);

/**
 * Any one argument function of a structure can be seen as a matrix. This is only
 *   useful if the function has a linear multiplier (e.g. derivative)
 */
emmy.matrix.as_matrix = (function emmy$matrix$as_matrix(F){
return (function (s){
var v = (F.cljs$core$IFn$_invoke$arity$1 ? F.cljs$core$IFn$_invoke$arity$1(s) : F.call(null,s));
return emmy.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$2(v,s);
});
});
/**
 * Returns the `n`-th row of the supplied matrix `m` as a `down` structure.
 */
emmy.matrix.nth_row = (function emmy$matrix$nth_row(m,n){
return emmy.structure.down_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,n));
});
/**
 * Returns the `n`-th column of the supplied matrix `m` as an `up` structure.
 */
emmy.matrix.nth_col = (function emmy$matrix$nth_col(m,n){
return emmy.structure.up_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39102_SHARP_){
return (p1__39102_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39102_SHARP_.cljs$core$IFn$_invoke$arity$1(n) : p1__39102_SHARP_.call(null,n));
}),m));
});
/**
 * Returns the diagonal of the supplied matrix `m` as an up structure. Errors if a
 *   type other than a diagonal matrix is supplied.
 */
emmy.matrix.diagonal = (function emmy$matrix$diagonal(m){
if(emmy.matrix.square_QMARK_(m)){
} else {
throw (new Error("Assert failed: (square? m)"));
}

var rows = emmy.matrix.num_rows(m);
return emmy.structure.up_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39103_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39103_SHARP_,p1__39103_SHARP_], null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),rows)));
});
/**
 * Returns a column matrix with the contents of the supplied `up` structure.
 *   Errors if any other type is provided.
 */
emmy.matrix.up__GT_column_matrix = (function emmy$matrix$up__GT_column_matrix(v){
if(emmy.structure.up_QMARK_(v)){
} else {
throw (new Error("Assert failed: (s/up? v)"));
}

return emmy.matrix.column_STAR_(v);
});
/**
 * Returns the single column from the supplied column matrix as an `up`. Errors if
 *   some other type is supplied.
 */
emmy.matrix.column_matrix__GT_up = (function emmy$matrix$column_matrix__GT_up(m){
if(emmy.matrix.column_QMARK_(m)){
} else {
throw (new Error("Assert failed: (column? m)"));
}

return emmy.matrix.nth_col(m,(0));
});
/**
 * Returns the single column from the supplied column matrix as a vector. Errors
 *   if some other type is supplied.
 */
emmy.matrix.column_matrix__GT_vector = (function emmy$matrix$column_matrix__GT_vector(m){
if(emmy.matrix.column_QMARK_(m)){
} else {
throw (new Error("Assert failed: (column? m)"));
}

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,m);
});
/**
 * Returns a row matrix with the contents of the supplied `down` structure.
 *   Errors if any other type is provided.
 */
emmy.matrix.down__GT_row_matrix = (function emmy$matrix$down__GT_row_matrix(v){
if(emmy.structure.down_QMARK_(v)){
} else {
throw (new Error("Assert failed: (s/down? v)"));
}

return emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.structure.structure__GT_vector(v)], 0));
});
/**
 * Returns the single row from the supplied row matrix as a `down`. Errors if some
 *   other type is supplied.
 */
emmy.matrix.row_matrix__GT_down = (function emmy$matrix$row_matrix__GT_down(m){
if(emmy.matrix.row_QMARK_(m)){
} else {
throw (new Error("Assert failed: (row? m)"));
}

return emmy.matrix.nth_row(m,(0));
});
/**
 * Returns the single row from the supplied row matrix as a vector. Errors if some
 *   other type is supplied.
 */
emmy.matrix.row_matrix__GT_vector = (function emmy$matrix$row_matrix__GT_vector(m){
if(emmy.matrix.row_QMARK_(m)){
} else {
throw (new Error("Assert failed: (row? m)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0));
});
/**
 * Convert the matrix `m` into a structure `S`, guided by the requirement that `(*
 *   ls S rs)` should be a scalar.
 */
emmy.matrix.m__GT_s = (function emmy$matrix$m__GT_s(ls,m,rs){
var ncols = emmy.matrix.num_cols(m);
var col_shape = emmy.structure.compatible_shape(ls);
var ms = emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$2((function (){var iter__5649__auto__ = (function emmy$matrix$m__GT_s_$_iter__39114(s__39115){
return (new cljs.core.LazySeq(null,(function (){
var s__39115__$1 = s__39115;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39115__$1);
if(temp__5825__auto__){
var s__39115__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39115__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39115__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39117 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39116 = (0);
while(true){
if((i__39116 < size__5648__auto__)){
var j = cljs.core._nth(c__5647__auto__,i__39116);
cljs.core.chunk_append(b__39117,emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$2(emmy.matrix.nth_col(m,j),col_shape));

var G__39468 = (i__39116 + (1));
i__39116 = G__39468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39117),emmy$matrix$m__GT_s_$_iter__39114(cljs.core.chunk_rest(s__39115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39117),null);
}
} else {
var j = cljs.core.first(s__39115__$2);
return cljs.core.cons(emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$2(emmy.matrix.nth_col(m,j),col_shape),emmy$matrix$m__GT_s_$_iter__39114(cljs.core.rest(s__39115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(ncols));
})(),emmy.structure.compatible_shape(rs));
if(cljs.core.truth_(emmy.matrix._STAR_careful_conversion_STAR_)){
if(emmy.value.scalar_QMARK_(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ls,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,rs)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"product is not numerical: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ls)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rs)))+"\n"+"(v/scalar? (g/* ls (g/* ms rs)))")));
}
} else {
}

return ms;
});
/**
 * Given structural inputs `ls` (optional), `ms` and `rs`, constrained such
 *   that `(* ls ms rs)` returns a numerical quantity, returns a result such that
 *   the following relationship remains true:
 * 
 *   ```clj
 *   (* <ls| (* ms |rs>)) = (* <rs| (* (s:transpose ms) |ls>))
 *   ```
 * 
 *   For example:
 * 
 *   ```clj
 *   (let [ls (s/up 1 2)
 *    ms (s/up (s/down 1 2) (s/down 3 4))
 *    rs (s/down 1 2)]
 *   (g/* ls (g/* ms rs))
 *   ;;=> 27
 * 
 *   (g/* rs (g/* (s:transpose ls ms rs) ls))
 *   ;;=> 27
 *   )
 *   ```
 * 
 *   `ls` is optional. If `ls` is not supplied, a compatible shape is generated
 *   internally.
 */
emmy.matrix.s_COLON_transpose = (function emmy$matrix$s_COLON_transpose(var_args){
var G__39124 = arguments.length;
switch (G__39124) {
case 2:
return emmy.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$2 = (function (ms,rs){
var ls = emmy.structure.compatible_shape(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,rs));
return emmy.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$3(ls,ms,rs);
}));

(emmy.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$3 = (function (ls,ms,rs){
return emmy.matrix.m__GT_s(rs,emmy.matrix.transpose(emmy.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3(ls,ms,rs)),ls);
}));

(emmy.matrix.s_COLON_transpose.cljs$lang$maxFixedArity = 3);

/**
 * Given some 2 tensor `s`, returns a structure with elements 'transposed' by
 *   swapping the inner and outer orientations and dimensions, like a matrix
 *   transpose.
 * 
 *   Orientations are only flipped if they are different in the input. If the inner
 *   and outer orientations of `s` are the same, the returned structure has this
 *   identical orientation.
 * 
 *   For example:
 * 
 *   ```clj
 *   ;; opposite orientation gets flipped:
 *   (s:transpose-orientation (s/up (s/down 1 2 3) (s/down 4 5 6)))
 *   ;;=> (down (up 1 4) (up 2 5) (up 3 6))
 * 
 *   ;; same orientation stays the same:
 *   (s:transpose-orientation (s/down (s/down 1 2 3) (s/down 4 5 6)))
 *   ;;=> (down (down 1 4) (down 2 5) (down 3 6))
 *   ```
 * 
 *   See [[structure/two-tensor?]] for more detail on 2 tensors.
 * 
 *   NOTE: In scmutils, this function is called `s:transpose2`.
 */
emmy.matrix.s_COLON_transpose_orientation = (function emmy$matrix$s_COLON_transpose_orientation(s){
var ret = emmy.matrix.two_tensor_operation(s,emmy.matrix.transpose);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.structure.orientation(ret),emmy.structure.orientation(cljs.core.first(ret)))){
return ret;
} else {
return emmy.structure.transpose(ret);
}
});
/**
 * Given some 2-tensor `s` (a 'square' nested structure), returns a structure
 *   that represents the multiplicative inverse of the supplied structure. The
 *   inner and outer structure orientations of `(s:invert s)` are the SAME as `s`.
 * 
 *   If `s` is an up-of-downs or down-of-ups, `(g/* s (s:invert s))`
 *   and `(g/* (s:invert s) s)` will evaluate to an identity-matrix-shaped
 *   up-of-downs or down-of-ups.
 * 
 *   If `s` is an up-of-ups or down-of-downs, multiplying `s` `(s:invert s)` will
 *   result in a scalar, as both structures collapse.
 * 
 *   NOTE: I DO NOT yet understand the meaning of this scalar! If you do, please
 *   open a pull request and explain it here.
 */
emmy.matrix.s_COLON_invert = (function emmy$matrix$s_COLON_invert(s){
var ret = emmy.matrix.two_tensor_operation(s,emmy.matrix.invert);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.structure.orientation(ret),emmy.structure.orientation(cljs.core.first(ret)))){
return emmy.structure.transpose(ret);
} else {
return ret;
}
});
/**
 * Returns the vector formed by deleting the `i`'th element of the given vector
 *   `v`.
 */
emmy.matrix.delete$ = (function emmy$matrix$delete(v,i){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(i + (1))));
} else {
var G__39127 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,v);
var G__39128 = i;
return (emmy.matrix.delete$.cljs$core$IFn$_invoke$arity$2 ? emmy.matrix.delete$.cljs$core$IFn$_invoke$arity$2(G__39127,G__39128) : emmy.matrix.delete$.call(null,G__39127,G__39128));
}
});
/**
 * Returns a new matrix of identical shape to `m`, with the vector `v` substituted
 *   for the `i`th row.
 */
emmy.matrix.with_substituted_row = (function emmy$matrix$with_substituted_row(m,i,v){
if(emmy.matrix.matrix_QMARK_(m)){
} else {
throw (new Error("Assert failed: (matrix? m)"));
}

if(((0) <= i)){
} else {
throw (new Error("Assert failed: (<= 0 i)"));
}

if((i < emmy.matrix.num_rows(m))){
} else {
throw (new Error("Assert failed: (< i (num-rows m))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.num_cols(m),cljs.core.count(v))){
} else {
throw (new Error("Assert failed: (= (num-cols m) (count v))"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,i,v);
});
/**
 * Returns the submatrix of the matrix (or matrix-like structure) `s` generated by
 *   taking
 * 
 *   - rows    from `lowrow` -> `hirow` (inclusive)
 *   - columns from `lowcol` -> `hicol` (inclusive)
 */
emmy.matrix.submatrix = (function emmy$matrix$submatrix(x,lowrow,hirow,lowcol,hicol){
var m = ((emmy.structure.structure_QMARK_(x))?emmy.matrix.two_tensor__GT_(x,(function (m,_){
return m;
})):x);
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(((hirow - lowrow) + (1)),((hicol - lowcol) + (1)),(function (i,j){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + lowrow),(j + lowcol)], null));
}));
});
/**
 * Returns the matrix formed by deleting the `i`-th row and `j`-th column of the
 *   given matrix `m`.
 * 
 *   This is also called the 'minor' of m.
 */
emmy.matrix.without = (function emmy$matrix$without(m,i,j){
return emmy.matrix.__GT_Matrix((emmy.matrix.num_rows(m) - (1)),(emmy.matrix.num_cols(m) - (1)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39129_SHARP_){
return emmy.matrix.delete$(p1__39129_SHARP_,j);
}),emmy.matrix.delete$(emmy.matrix.matrix__GT_vector(m),i)));
});
emmy.matrix.checkerboard_negate = (function emmy$matrix$checkerboard_negate(s,i,j){
if(cljs.core.even_QMARK_((i + j))){
return s;
} else {
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(s);
}
});
/**
 * Returns the 'dimension', i.e., the number of rows & columns, of the supplied
 *   square matrix. Errors if some other type is supplied.
 */
emmy.matrix.dimension = (function emmy$matrix$dimension(m){
if(emmy.matrix.square_QMARK_(m)){
} else {
throw (new Error("Assert failed: (square? m)"));
}

return emmy.matrix.num_rows(m);
});
/**
 * Returns the trace (the sum of diagonal elements) of the square matrix `m`.
 * 
 *   Generic operations are used, so this works on symbolic square matrices.
 */
emmy.matrix.trace = (function emmy$matrix$trace(m){
if(emmy.matrix.square_QMARK_(m)){
} else {
throw (new Error("Assert failed: (square? m)"));
}

var rows = emmy.matrix.num_rows(m);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__39142_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39142_SHARP_,p1__39142_SHARP_], null));
})),emmy.generic._PLUS_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),rows));
});
/**
 * Given coefficient procedures `add`, `sub`, `mul` and `zero?`, returns a
 *   procedure that efficiently computes the determinant of the supplied square
 *   matrix `m`.
 * 
 *   [[general-determinant]] is useful for generating fast type-specific
 *   determinant routines. See [[determinant]] for a default using generic
 *   arithmetic.
 */
emmy.matrix.general_determinant = (function emmy$matrix$general_determinant(add,sub,mul,zero_QMARK_){
var zero = (add.cljs$core$IFn$_invoke$arity$0 ? add.cljs$core$IFn$_invoke$arity$0() : add.call(null));
return (function (m){
if(emmy.matrix.square_QMARK_(m)){
} else {
throw (new Error("Assert failed: (square? m)"));
}

var c_det = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var c_det_STAR_ = (function emmy$matrix$general_determinant_$_c_det_STAR_(row,p__39159){
var vec__39160 = p__39159;
var seq__39161 = cljs.core.seq(vec__39160);
var first__39162 = cljs.core.first(seq__39161);
var seq__39161__$1 = cljs.core.next(seq__39161);
var col = first__39162;
var cols = seq__39161__$1;
var active_cols = vec__39160;
if(cljs.core.not(cols)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
var idx = (0);
var remaining_cols = active_cols;
var answer = zero;
while(true){
if(cljs.core.not(cljs.core.seq(remaining_cols))){
return answer;
} else {
var term = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,cljs.core.first(remaining_cols)], null));
if(cljs.core.truth_((zero_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zero_QMARK_.cljs$core$IFn$_invoke$arity$1(term) : zero_QMARK_.call(null,term)))){
var G__39538 = (idx + (1));
var G__39539 = cljs.core.rest(remaining_cols);
var G__39540 = answer;
idx = G__39538;
remaining_cols = G__39539;
answer = G__39540;
continue;
} else {
var without_i = emmy.matrix.delete$(active_cols,idx);
var delta = (function (){var G__39163 = term;
var G__39164 = (function (){var G__39166 = (row + (1));
var G__39167 = without_i;
var fexpr__39165 = cljs.core.deref(c_det);
return (fexpr__39165.cljs$core$IFn$_invoke$arity$2 ? fexpr__39165.cljs$core$IFn$_invoke$arity$2(G__39166,G__39167) : fexpr__39165.call(null,G__39166,G__39167));
})();
return (mul.cljs$core$IFn$_invoke$arity$2 ? mul.cljs$core$IFn$_invoke$arity$2(G__39163,G__39164) : mul.call(null,G__39163,G__39164));
})();
var G__39542 = (idx + (1));
var G__39543 = cljs.core.rest(remaining_cols);
var G__39544 = ((cljs.core.even_QMARK_(idx))?(add.cljs$core$IFn$_invoke$arity$2 ? add.cljs$core$IFn$_invoke$arity$2(answer,delta) : add.call(null,answer,delta)):(sub.cljs$core$IFn$_invoke$arity$2 ? sub.cljs$core$IFn$_invoke$arity$2(answer,delta) : sub.call(null,answer,delta)));
idx = G__39542;
remaining_cols = G__39543;
answer = G__39544;
continue;
}
}
break;
}
}
});
cljs.core.reset_BANG_(c_det,cljs.core.memoize(c_det_STAR_));

var G__39169 = (0);
var G__39170 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(emmy.matrix.dimension(m));
var fexpr__39168 = cljs.core.deref(c_det);
return (fexpr__39168.cljs$core$IFn$_invoke$arity$2 ? fexpr__39168.cljs$core$IFn$_invoke$arity$2(G__39169,G__39170) : fexpr__39168.call(null,G__39169,G__39170));
});
});
/**
 * Returns the determinant of the supplied square matrix `m`.
 * 
 *   Generic operations are used, so this works on symbolic square matrices.
 */
emmy.matrix.determinant = emmy.matrix.general_determinant(emmy.generic._PLUS_,emmy.generic._,emmy.generic._STAR_,emmy.generic.numeric_zero_QMARK_);
/**
 * Returns the matrix of cofactors of the supplied square matrix `m`.
 */
emmy.matrix.cofactors = (function emmy$matrix$cofactors(m){
if(emmy.matrix.square_QMARK_(m)){
} else {
throw (new Error("Assert failed: (square? m)"));
}

var r = emmy.matrix.num_rows(m);
if((r < (2))){
return m;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,(2))){
var vec__39171 = m;
var vec__39174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39171,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39174,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39174,(1),null);
var vec__39177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39171,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39177,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39177,(1),null);
return emmy.matrix.__GT_Matrix((2),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b),a], null)], null));
} else {
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(r,r,(function (i,j){
return emmy.matrix.checkerboard_negate(emmy.matrix.determinant(emmy.matrix.without(m,i,j)),i,j);
}));

}
}
});
/**
 * Given coefficient procedures `add`, `sub`, `mul` and `zero?`, returns a
 *   procedure that efficiently computes the inverse of the supplied square
 *   matrix `m`.
 * 
 *   [[classical-adjoint-formula]] is useful for generating fast type-specific
 *   matrix inversion routines. See [[invert]] for a default using generic
 *   arithmetic.
 */
emmy.matrix.classical_adjoint_formula = (function emmy$matrix$classical_adjoint_formula(add,sub,mul,div,zero_QMARK_){
var det = emmy.matrix.general_determinant(add,sub,mul,zero_QMARK_);
return (function emmy$matrix$classical_adjoint_formula_$_inv(A){
var dim = emmy.matrix.dimension(A);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dim,(1))){
return emmy.matrix.__GT_Matrix((1),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39180 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(A,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return (div.cljs$core$IFn$_invoke$arity$1 ? div.cljs$core$IFn$_invoke$arity$1(G__39180) : div.call(null,G__39180));
})()], null)], null));
} else {
var d = det(A);
var _d = (sub.cljs$core$IFn$_invoke$arity$1 ? sub.cljs$core$IFn$_invoke$arity$1(d) : sub.call(null,d));
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(dim,dim,(function (i,j){
var denom = ((cljs.core.even_QMARK_((i + j)))?d:_d);
var G__39181 = det(emmy.matrix.without(A,j,i));
var G__39182 = denom;
return (div.cljs$core$IFn$_invoke$arity$2 ? div.cljs$core$IFn$_invoke$arity$2(G__39181,G__39182) : div.call(null,G__39181,G__39182));
}));
}
});
});
/**
 * Returns the inverse of the supplied square matrix `m`.
 */
emmy.matrix.invert = emmy.matrix.classical_adjoint_formula(emmy.generic._PLUS_,emmy.generic._,emmy.generic._STAR_,emmy.generic._SLASH_,emmy.generic.numeric_zero_QMARK_);
emmy.matrix.m_div_m = (function emmy$matrix$m_div_m(m1,m2){
return emmy.matrix.mul(m1,emmy.matrix.invert(m2));
});
/**
 * Returns the result of multiplying (on the right) the scalar `c` by the inverse
 *   of matrix `m`.
 */
emmy.matrix.m_div_c = (function emmy$matrix$m_div_c(m,c){
return emmy.matrix.matrix_STAR_scalar(m,emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(c));
});
/**
 * Returns the result of multiplying (on the left) the scalar `c` by the inverse
 *   of matrix `m`.
 */
emmy.matrix.c_div_m = (function emmy$matrix$c_div_m(c,m){
return emmy.matrix.scalar_STAR_matrix(c,emmy.matrix.invert(m));
});
emmy.matrix.s_COLON_inverse = (function emmy$matrix$s_COLON_inverse(var_args){
var G__39184 = arguments.length;
switch (G__39184) {
case 2:
return emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$2 = (function (ms,rs){
var ls = emmy.structure.compatible_shape(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,rs));
return emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(ls,ms,rs);
}));

(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3 = (function (ls,ms,rs){
return emmy.matrix.m__GT_s(emmy.structure.compatible_shape(rs),emmy.matrix.invert(emmy.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3(ls,ms,rs)),emmy.structure.compatible_shape(ls));
}));

(emmy.matrix.s_COLON_inverse.cljs$lang$maxFixedArity = 3);

emmy.matrix.s_COLON_solve_linear_left = (function emmy$matrix$s_COLON_solve_linear_left(M,product){
var cp = emmy.structure.compatible_shape(product);
var cr = emmy.structure.compatible_shape(emmy.structure.s_COLON__STAR_(cp,M));
return emmy.structure.s_COLON__STAR_(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(cp,M,cr),product);
});
emmy.matrix.s_COLON_solve_linear_right = (function emmy$matrix$s_COLON_solve_linear_right(product,M){
var cp = emmy.structure.compatible_shape(product);
var cr = emmy.structure.compatible_shape(emmy.structure.s_COLON__STAR_(M,cp));
return emmy.structure.s_COLON__STAR_(product,emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(cr,M,cp));
});
emmy.matrix.s_COLON_divide_by_structure = (function emmy$matrix$s_COLON_divide_by_structure(rv,s){
return emmy.matrix.s_COLON_solve_linear_left(s,rv);
});
/**
 * Return a zero-valued matrix of `m` rows and `n` columns (`nXn` if only `n` is
 *   supplied).
 */
emmy.matrix.make_zero = (function emmy$matrix$make_zero(var_args){
var G__39187 = arguments.length;
switch (G__39187) {
case 1:
return emmy.matrix.make_zero.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.matrix.make_zero.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.matrix.make_zero.cljs$core$IFn$_invoke$arity$1 = (function (n){
return emmy.matrix.make_zero.cljs$core$IFn$_invoke$arity$2(n,n);
}));

(emmy.matrix.make_zero.cljs$core$IFn$_invoke$arity$2 = (function (m,n){
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(m,n,cljs.core.constantly((0)));
}));

(emmy.matrix.make_zero.cljs$lang$maxFixedArity = 2);

/**
 * Return the identity matrix of order `n`.
 */
emmy.matrix.I = (function emmy$matrix$I(n){
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(n,n,emmy.structure.kronecker);
});
/**
 * Return an identity matrix whose ones and zeros match the types of the supplied
 *   square matrix `M`. Errors if a non-square matrix `M` is supplied.
 */
emmy.matrix.identity_like = (function emmy$matrix$identity_like(M){
if((!(emmy.matrix.square_QMARK_(M)))){
return emmy.util.illegal("identity-like on non-square");
} else {
return emmy.matrix.fmap_indexed((function (elem,i,j){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(elem);
} else {
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(elem);
}
}),M);
}
});
/**
 * Returns true if the supplied matrix `m` is an identity matrix, false
 *   otherwise.
 */
emmy.matrix.identity_QMARK_ = (function emmy$matrix$identity_QMARK_(m){
var and__5160__auto__ = emmy.matrix.square_QMARK_(m);
if(and__5160__auto__){
var n = emmy.matrix.dimension(m);
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,(function (){var iter__5649__auto__ = (function emmy$matrix$identity_QMARK__$_iter__39192(s__39193){
return (new cljs.core.LazySeq(null,(function (){
var s__39193__$1 = s__39193;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39193__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var i = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__39193__$1,i,xs__6385__auto__,temp__5825__auto__,n,and__5160__auto__){
return (function emmy$matrix$identity_QMARK__$_iter__39192_$_iter__39194(s__39195){
return (new cljs.core.LazySeq(null,((function (s__39193__$1,i,xs__6385__auto__,temp__5825__auto__,n,and__5160__auto__){
return (function (){
var s__39195__$1 = s__39195;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__39195__$1);
if(temp__5825__auto____$1){
var s__39195__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39195__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39195__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39197 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39196 = (0);
while(true){
if((i__39196 < size__5648__auto__)){
var j = cljs.core._nth(c__5647__auto__,i__39196);
var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
cljs.core.chunk_append(b__39197,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(entry):emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(entry)));

var G__39563 = (i__39196 + (1));
i__39196 = G__39563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39197),emmy$matrix$identity_QMARK__$_iter__39192_$_iter__39194(cljs.core.chunk_rest(s__39195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39197),null);
}
} else {
var j = cljs.core.first(s__39195__$2);
var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(entry):emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(entry)),emmy$matrix$identity_QMARK__$_iter__39192_$_iter__39194(cljs.core.rest(s__39195__$2)));
}
} else {
return null;
}
break;
}
});})(s__39193__$1,i,xs__6385__auto__,temp__5825__auto__,n,and__5160__auto__))
,null,null));
});})(s__39193__$1,i,xs__6385__auto__,temp__5825__auto__,n,and__5160__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,emmy$matrix$identity_QMARK__$_iter__39192(cljs.core.rest(s__39193__$1)));
} else {
var G__39566 = cljs.core.rest(s__39193__$1);
s__39193__$1 = G__39566;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})());
} else {
return and__5160__auto__;
}
});
/**
 * Given a single (sequential) argument `v`, returns the diagonal matrix of
 *   order `(count v)` with the elements of the sequence `v` along the diagonal.
 * 
 *   Given two arguments `n` and some constant `x`, returns a diagonal `n` by `n`
 *   matrix with `x` in every entry of the diagonal.
 * 
 *   `(make-diagonal <n> 1)` is equivalent to `(I n)`.
 */
emmy.matrix.make_diagonal = (function emmy$matrix$make_diagonal(var_args){
var G__39214 = arguments.length;
switch (G__39214) {
case 1:
return emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$1 = (function (v){
var v__$1 = cljs.core.vec(v);
var n = cljs.core.count(v__$1);
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(n,n,(function (i,j){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i));
} else {
return (0);
}
}));
}));

(emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(n,n,(function (p1__39208_SHARP_,p2__39209_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__39208_SHARP_,p2__39209_SHARP_)){
return x;
} else {
return (0);
}
}));
}));

(emmy.matrix.make_diagonal.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if `m` is a diagonal matrix (i.e., a square matrix where every
 *   non-diagonal element is zero), false otherwise.
 */
emmy.matrix.diagonal_QMARK_ = (function emmy$matrix$diagonal_QMARK_(m){
var and__5160__auto__ = emmy.matrix.square_QMARK_(m);
if(and__5160__auto__){
var n = emmy.matrix.dimension(m);
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,(function (){var iter__5649__auto__ = (function emmy$matrix$diagonal_QMARK__$_iter__39226(s__39227){
return (new cljs.core.LazySeq(null,(function (){
var s__39227__$1 = s__39227;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39227__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var i = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__39227__$1,i,xs__6385__auto__,temp__5825__auto__,n,and__5160__auto__){
return (function emmy$matrix$diagonal_QMARK__$_iter__39226_$_iter__39228(s__39229){
return (new cljs.core.LazySeq(null,((function (s__39227__$1,i,xs__6385__auto__,temp__5825__auto__,n,and__5160__auto__){
return (function (){
var s__39229__$1 = s__39229;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__39229__$1);
if(temp__5825__auto____$1){
var s__39229__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39229__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39229__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39231 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39230 = (0);
while(true){
if((i__39230 < size__5648__auto__)){
var j = cljs.core._nth(c__5647__auto__,i__39230);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
cljs.core.chunk_append(b__39231,emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(entry));

var G__39578 = (i__39230 + (1));
i__39230 = G__39578;
continue;
} else {
var G__39579 = (i__39230 + (1));
i__39230 = G__39579;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39231),emmy$matrix$diagonal_QMARK__$_iter__39226_$_iter__39228(cljs.core.chunk_rest(s__39229__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39231),null);
}
} else {
var j = cljs.core.first(s__39229__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.cons(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(entry),emmy$matrix$diagonal_QMARK__$_iter__39226_$_iter__39228(cljs.core.rest(s__39229__$2)));
} else {
var G__39580 = cljs.core.rest(s__39229__$2);
s__39229__$1 = G__39580;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__39227__$1,i,xs__6385__auto__,temp__5825__auto__,n,and__5160__auto__))
,null,null));
});})(s__39227__$1,i,xs__6385__auto__,temp__5825__auto__,n,and__5160__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,emmy$matrix$diagonal_QMARK__$_iter__39226(cljs.core.rest(s__39227__$1)));
} else {
var G__39581 = cljs.core.rest(s__39227__$1);
s__39227__$1 = G__39581;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})());
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if the supplied matrix `M` is equal to its own transpose (i.e.,
 *   symmetric), false otherwise.
 */
emmy.matrix.symmetric_QMARK_ = (function emmy$matrix$symmetric_QMARK_(M){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.matrix.transpose(M),M)));
});
/**
 * Returns true if the supplied matrix `M` is equal to the negation of its own
 *   transpose (i.e., antisymmetric), false otherwise.
 */
emmy.matrix.antisymmetric_QMARK_ = (function emmy$matrix$antisymmetric_QMARK_(M){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.matrix.transpose(M),M)));
});
/**
 * Returns the [characteristic
 *   polynomial](https://en.wikipedia.org/wiki/Characteristic_polynomial) of the
 *   square matrix `m`.
 * 
 *   If only `m` is supplied, returns a [[polynomial/Polynomial]] instance
 *   representing the matrix `m`'s characteristic polynomial.
 * 
 *   If `x` is supplied, returns the value of the characteristic polynomial of `m`
 *   evaluated at `x`.
 * 
 *   Typically `x` will be a symbolic variable, but if you wanted to get the value
 *   of the characteristic polynomial at some particular numerical point `x` you
 *   could pass that too.
 */
emmy.matrix.characteristic_polynomial = (function emmy$matrix$characteristic_polynomial(var_args){
var G__39245 = arguments.length;
switch (G__39245) {
case 1:
return emmy.matrix.characteristic_polynomial.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.matrix.characteristic_polynomial.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.matrix.characteristic_polynomial.cljs$core$IFn$_invoke$arity$1 = (function (m){
return emmy.matrix.characteristic_polynomial.cljs$core$IFn$_invoke$arity$2(m,emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$0());
}));

(emmy.matrix.characteristic_polynomial.cljs$core$IFn$_invoke$arity$2 = (function (m,x){
var r = emmy.matrix.num_rows(m);
var c = emmy.matrix.num_cols(m);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,c)){
} else {
emmy.util.illegal("not square");
}

var Ix = emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(r,x);
return emmy.matrix.determinant(emmy.generic._.cljs$core$IFn$_invoke$arity$2(Ix,m));
}));

(emmy.matrix.characteristic_polynomial.cljs$lang$maxFixedArity = 2);

/**
 * Given coefficient procedures `add`, `sub`, `mul`, `div` and `zero?`, returns a
 *   procedure that efficiently computes the solution to an inhomogeneous system of
 *   linear equations, `A*x=b`, where the matrix `A` and the column matrix `b` are
 *   given. The returned procedure returns the column matrix `x`.
 * 
 *   Unlike LU decomposition, Cramer's rule generalizes to symbolic solutions.
 * 
 *   [[cramers-rule]] is useful for generating fast type-specific linear equation
 *   solvers. See [[solve]] for a default using generic arithmetic.
 */
emmy.matrix.cramers_rule = (function emmy$matrix$cramers_rule(add,sub,mul,div,zero_QMARK_){
var det = emmy.matrix.general_determinant(add,sub,mul,zero_QMARK_);
return (function emmy$matrix$cramers_rule_$_solve(A,b){
if(emmy.matrix.square_QMARK_(A)){
} else {
throw (new Error("Assert failed: (square? A)"));
}

if(emmy.matrix.column_QMARK_(b)){
} else {
throw (new Error("Assert failed: (column? b)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.dimension(A),emmy.matrix.num_rows(b))){
} else {
throw (new Error("Assert failed: (= (dimension A) (num-rows b))"));
}

var bv = emmy.matrix.nth_col(b,(0));
var bn = emmy.matrix.num_rows(b);
var d = det(A);
var At = emmy.matrix.transpose(A);
return emmy.matrix.column_STAR_(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
var G__39250 = det(emmy.matrix.with_substituted_row(At,i,bv));
var G__39251 = d;
return (div.cljs$core$IFn$_invoke$arity$2 ? div.cljs$core$IFn$_invoke$arity$2(G__39250,G__39251) : div.call(null,G__39250,G__39251));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(bn)));
});
});
/**
 * Given a matrix `A` and a column matrix `b`, computes the solution
 *   to an inhomogeneous system of linear equations, `A*x=b`, where the matrix `A`
 *   and the column matrix `b` are given.
 * 
 *   Returns the column matrix `x`.
 * 
 *   Unlike LU decomposition, Cramer's rule generalizes to symbolic solutions.
 */
emmy.matrix.solve = emmy.matrix.cramers_rule(emmy.generic._PLUS_,emmy.generic._,emmy.generic._STAR_,emmy.generic._SLASH_,emmy.generic.numeric_zero_QMARK_);
/**
 * Generalization of [[solve]] that can handle `up` and `down` structures, as well
 *   as `row` and `column` matrices.
 * 
 *   Given `row` or `down` values for `b`, `A` is appropriately transposed before
 *   solving.
 */
emmy.matrix.rsolve = (function emmy$matrix$rsolve(b,A){
if(emmy.structure.up_QMARK_(b)){
return emmy.matrix.column_matrix__GT_up(emmy.matrix.solve(A,emmy.matrix.up__GT_column_matrix(b)));
} else {
if(emmy.matrix.column_QMARK_(b)){
return emmy.matrix.solve(A,b);
} else {
if(emmy.structure.down_QMARK_(b)){
return emmy.matrix.row_matrix__GT_down(emmy.matrix.transpose(emmy.matrix.solve(emmy.matrix.transpose(A),emmy.matrix.transpose(emmy.matrix.down__GT_row_matrix(b)))));
} else {
if(emmy.matrix.row_QMARK_(b)){
return emmy.matrix.transpose(emmy.matrix.solve(emmy.matrix.transpose(A),emmy.matrix.transpose(b)));
} else {
return emmy.util.illegal((""+"I don't know how to solve:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(A)));

}
}
}
}
});
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (a){
return cljs.core.every_QMARK_((function (p1__39252_SHARP_){
return cljs.core.every_QMARK_(emmy.generic.zero_QMARK_,p1__39252_SHARP_);
}),a);
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (_){
return false;
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
return emmy.matrix.identity_QMARK_(m);
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
return emmy.matrix.fmap(emmy.generic.zero_like,m);
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
return emmy.matrix.identity_like(m);
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
return emmy.matrix.identity_like(m);
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m.c,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"column-matrix","column-matrix",977710190,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.generic.freeze,cljs.core.first),m.v))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"matrix-by-rows","matrix-by-rows",-1400856559,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39253_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy.generic.freeze,p1__39253_SHARP_);
}),m.v))));
}
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
return cljs.core.every_QMARK_((function (p1__39254_SHARP_){
return cljs.core.every_QMARK_(emmy.generic.exact_QMARK_,p1__39254_SHARP_);
}),m.v);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (a,b){
return emmy.matrix.m_COLON__EQ_(a,b);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (m,c){
return emmy.matrix.matrix_EQ_scalar(m,c);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (c,m){
return emmy.matrix.scalar_EQ_matrix(c,m);
}));
emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (a){
return emmy.matrix.fmap(emmy.generic.negate,a);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (a,b){
return emmy.matrix.elementwise(emmy.generic._,a,b);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (a,b){
return emmy.matrix.elementwise(emmy.generic._,a,emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(emmy.matrix.num_rows(a),b));
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (a,b){
return emmy.matrix.elementwise(emmy.generic._,emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(emmy.matrix.num_rows(b),a),b);
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (a,b){
return emmy.matrix.elementwise(emmy.generic._PLUS_,a,b);
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (a,b){
return emmy.matrix.elementwise(emmy.generic._PLUS_,a,emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(emmy.matrix.num_rows(a),b));
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (a,b){
return emmy.matrix.elementwise(emmy.generic._PLUS_,emmy.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(emmy.matrix.num_rows(b),a),b);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (a,b){
return emmy.matrix.mul(a,b);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (n,a){
return emmy.matrix.scalar_STAR_matrix(n,a);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (a,n){
return emmy.matrix.matrix_STAR_scalar(a,n);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384)], null),(function (m,u){
return emmy.matrix.M_STAR_u(m,u);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (d,m){
return emmy.matrix.d_STAR_M(d,m);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (m,c){
return emmy.matrix.m_div_c(m,c);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (c,m){
return emmy.matrix.c_div_m(c,m);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350),new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (c,m){
return emmy.matrix.rsolve(c,m);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134),new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (r,m){
return emmy.matrix.rsolve(r,m);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (u,m){
return emmy.matrix.rsolve(u,m);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (d,m){
return emmy.matrix.rsolve(d,m);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (d,m){
return emmy.matrix.m_div_m(d,m);
}));
emmy.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.exp_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.exp_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.exp_series.call(null,m));
}));
emmy.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.cos_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.cos_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.cos_series.call(null,m));
}));
emmy.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.sin_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.sin_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.sin_series.call(null,m));
}));
emmy.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.tan_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.tan_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.tan_series.call(null,m));
}));
emmy.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.sec_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.sec_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.sec_series.call(null,m));
}));
emmy.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.acos_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.acos_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.acos_series.call(null,m));
}));
emmy.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.asin_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.asin_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.asin_series.call(null,m));
}));
emmy.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.atan_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.atan_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.atan_series.call(null,m));
}));
emmy.generic.acot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.acot_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.acot_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.acot_series.call(null,m));
}));
emmy.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.cosh_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.cosh_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.cosh_series.call(null,m));
}));
emmy.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.sinh_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.sinh_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.sinh_series.call(null,m));
}));
emmy.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.tanh_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.tanh_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.tanh_series.call(null,m));
}));
emmy.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.asinh_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.asinh_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.asinh_series.call(null,m));
}));
emmy.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return (emmy.series.atanh_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.atanh_series.cljs$core$IFn$_invoke$arity$1(m) : emmy.series.atanh_series.call(null,m));
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
return emmy.matrix.fmap(emmy.generic.simplify,m);
}));
emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
return emmy.matrix.invert(m);
}));
emmy.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (a,b){
return emmy.matrix.elementwise(emmy.generic.make_rectangular,a,b);
}));
emmy.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (a,b){
return emmy.matrix.elementwise(emmy.generic.make_polar,a,b);
}));
emmy.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
return emmy.matrix.fmap(emmy.generic.real_part,m);
}));
emmy.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
return emmy.matrix.fmap(emmy.generic.imag_part,m);
}));
emmy.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
return emmy.matrix.fmap(emmy.generic.conjugate,m);
}));
emmy.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831)], null),(function (m){
return emmy.matrix.transpose(m);
}));
emmy.generic.determinant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return emmy.matrix.determinant(m);
}));
emmy.generic.determinant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (s){
return emmy.matrix.two_tensor__GT_(s,(function (m,_){
return emmy.matrix.determinant(m);
}));
}));
emmy.generic.trace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return emmy.matrix.trace(m);
}));
emmy.generic.trace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (s){
return emmy.matrix.two_tensor__GT_(s,(function (m,_){
return emmy.matrix.trace(m);
}));
}));
emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a){
return emmy.matrix.s_COLON_invert(a);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (rv,s){
return emmy.matrix.s_COLON_divide_by_structure(rv,s);
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384)], null),(function (A,b){
return emmy.matrix.rsolve(b,A);
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711)], null),(function (A,b){
return emmy.matrix.rsolve(b,A);
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006),new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350)], null),(function (A,b){
return emmy.matrix.rsolve(b,A);
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006),new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134)], null),(function (A,b){
return emmy.matrix.rsolve(b,A);
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (s,product){
return emmy.matrix.s_COLON_solve_linear_left(s,product);
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (s,c){
return emmy.structure.structure_STAR_scalar(emmy.matrix.s_COLON_invert(s),c);
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134),new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (b,A){
return emmy.matrix.rsolve(b,A);
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","down","emmy.matrix/down",-1773528537),new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (b,A){
return emmy.matrix.rsolve(b,A);
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (product,s){
return emmy.matrix.s_COLON_solve_linear_right(product,s);
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (c,s){
return emmy.structure.scalar_STAR_structure(c,emmy.matrix.s_COLON_invert(s));
}));
emmy.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","square-matrix","emmy.matrix/square-matrix",-857272006)], null),(function (m){
return emmy.matrix.dimension(m);
}));
emmy.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350)], null),(function (m){
return emmy.matrix.num_rows(m);
}));
emmy.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134)], null),(function (m){
return emmy.matrix.num_cols(m);
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134),new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134)], null),(function (a,b){
return emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(emmy.matrix.row_matrix__GT_down(a),emmy.matrix.row_matrix__GT_down(b));
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350),new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350)], null),(function (a,b){
return emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(emmy.matrix.column_matrix__GT_up(a),emmy.matrix.column_matrix__GT_up(b));
}));
emmy.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134),new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134)], null),(function (a,b){
return emmy.generic.inner_product.cljs$core$IFn$_invoke$arity$2(emmy.matrix.row_matrix__GT_vector(a),emmy.matrix.row_matrix__GT_vector(b));
}));
emmy.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350),new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350)], null),(function (a,b){
return emmy.generic.inner_product.cljs$core$IFn$_invoke$arity$2(emmy.matrix.column_matrix__GT_up(a),emmy.matrix.column_matrix__GT_up(b));
}));
emmy.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134),new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134)], null),(function (a,b){
return emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.structure.structure__GT_vector(emmy.generic.cross_product.cljs$core$IFn$_invoke$arity$2(emmy.matrix.row_matrix__GT_vector(a),emmy.matrix.row_matrix__GT_vector(b)))], 0));
}));
emmy.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350),new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350)], null),(function (a,b){
return emmy.matrix.up__GT_column_matrix(emmy.generic.cross_product.cljs$core$IFn$_invoke$arity$2(emmy.matrix.column_matrix__GT_up(a),emmy.matrix.column_matrix__GT_up(b)));
}));
emmy.generic.outer_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","column-matrix","emmy.matrix/column-matrix",91926350),new cljs.core.Keyword("emmy.matrix","row-matrix","emmy.matrix/row-matrix",1672054134)], null),(function (a,b){
return emmy.matrix.mul(a,b);
}));
emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.matrix","matrix","emmy.matrix/matrix",-253656831),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (M,selectors){
return emmy.matrix.fmap((function (p1__39281_SHARP_){
return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__39281_SHARP_,selectors);
}),M);
}));

//# sourceMappingURL=emmy.matrix.js.map
