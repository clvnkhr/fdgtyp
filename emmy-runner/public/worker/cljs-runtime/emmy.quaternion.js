import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.complex.js";
import "./emmy.dual.js";
import "./emmy.function.js";
import "./emmy.generic.js";
import "./emmy.matrix.js";
import "./emmy.structure.js";
import "./emmy.util.js";
import "./emmy.util.logic.js";
import "./emmy.value.js";
goog.provide('emmy.quaternion');





/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {emmy.dual.IPerturbed}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {emmy.function$.IArity}
 * @implements {cljs.core.IReduce}
*/
emmy.quaternion.Quaternion = (function (r,i,j,k,m){
this.r = r;
this.i = i;
this.j = j;
this.k = k;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2310931231;
this.cljs$lang$protocol_mask$partition1$ = 131072;
});
(emmy.quaternion.Quaternion.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.quaternion.Quaternion.prototype.cljs$core$IFind$_find$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
if(this$__$1.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(null,n)){
return (new cljs.core.MapEntry(n,this$__$1.cljs$core$IIndexed$_nth$arity$3(null,n,null),null));
} else {
return null;
}
}));

(emmy.quaternion.Quaternion.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+"#emmy/quaternion ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.r)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.i)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.j)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.k)+"]");
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,key,null);
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,key,not_found){
var self__ = this;
var this$__$1 = this;
if(typeof key === 'number'){
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,key,not_found);
} else {
return not_found;
}
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
var G__76969 = (function (){var G__76972 = (function (){var G__76975 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(init,self__.r,(0)) : f.call(null,init,self__.r,(0)));
var G__76976 = self__.i;
var G__76977 = (1);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__76975,G__76976,G__76977) : f.call(null,G__76975,G__76976,G__76977));
})();
var G__76973 = self__.j;
var G__76974 = (2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__76972,G__76973,G__76974) : f.call(null,G__76972,G__76973,G__76974));
})();
var G__76970 = self__.k;
var G__76971 = (3);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__76969,G__76970,G__76971) : f.call(null,G__76969,G__76970,G__76971));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,n,null);
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,default$){
var self__ = this;
var ___$1 = this;
var G__76982 = n;
switch (G__76982) {
case (0):
return self__.r;

break;
case (1):
return self__.i;

break;
case (2):
return self__.j;

break;
case (3):
return self__.k;

break;
default:
return default$;

}
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1.toString()], 0));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.ranged_iterator(cljs.core.vec(this$__$1),(0),(4));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (4);
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,self__.k,(new cljs.core.List(null,self__.j,(new cljs.core.List(null,self__.i,(new cljs.core.List(null,self__.r,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (emmy.quaternion.eq.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.eq.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : emmy.quaternion.eq.call(null,this$__$1,that));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new emmy.quaternion.Quaternion((0),(0),(0),(0),self__.m));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
var G__76986 = (function (){var G__76988 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.r,self__.i) : f.call(null,self__.r,self__.i));
var G__76989 = self__.j;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__76988,G__76989) : f.call(null,G__76988,G__76989));
})();
var G__76987 = self__.k;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__76986,G__76987) : f.call(null,G__76986,G__76987));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,start){
var self__ = this;
var ___$1 = this;
var G__76990 = (function (){var G__76992 = (function (){var G__76994 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(start,self__.r) : f.call(null,start,self__.r));
var G__76995 = self__.i;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__76994,G__76995) : f.call(null,G__76994,G__76995));
})();
var G__76993 = self__.j;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__76992,G__76993) : f.call(null,G__76992,G__76993));
})();
var G__76991 = self__.k;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__76990,G__76991) : f.call(null,G__76990,G__76991));
}));

(emmy.quaternion.Quaternion.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.quaternion.Quaternion.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106);
}));

(emmy.quaternion.Quaternion.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.quaternion.Quaternion.prototype.emmy$function$IArity$arity$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (emmy.quaternion.arity.cljs$core$IFn$_invoke$arity$1 ? emmy.quaternion.arity.cljs$core$IFn$_invoke$arity$1(this$__$1) : emmy.quaternion.arity.call(null,this$__$1));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,key,v){
var self__ = this;
var ___$1 = this;
var G__76996 = key;
switch (G__76996) {
case (0):
return (new emmy.quaternion.Quaternion(v,self__.i,self__.j,self__.k,self__.m));

break;
case (1):
return (new emmy.quaternion.Quaternion(self__.r,v,self__.j,self__.k,self__.m));

break;
case (2):
return (new emmy.quaternion.Quaternion(self__.r,self__.i,v,self__.k,self__.m));

break;
case (3):
return (new emmy.quaternion.Quaternion(self__.r,self__.i,self__.j,v,self__.m));

break;
default:
throw (new Error("Quaternion's key for assoc must be 0, 1, 2 or 3."));

}
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k__$1){
var self__ = this;
var ___$1 = this;
return cljs.core.boolean$((function (){var fexpr__76998 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(1),null,(3),null,(2),null], null), null);
return (fexpr__76998.cljs$core$IFn$_invoke$arity$1 ? fexpr__76998.cljs$core$IFn$_invoke$arity$1(k__$1) : fexpr__76998.call(null,k__$1));
})());
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,self__.r,(new cljs.core.List(null,self__.i,(new cljs.core.List(null,self__.j,(new cljs.core.List(null,self__.k,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new emmy.quaternion.Quaternion(self__.r,self__.i,self__.j,self__.k,meta));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
throw (new Error((""+"conj not suported on Quaternion instances. convert to"+" vector first!")));
}));

(emmy.quaternion.Quaternion.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__77008 = (arguments.length - (1));
switch (G__77008) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
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

(emmy.quaternion.Quaternion.prototype.apply = (function (self__,args76968){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args76968)));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__77011 = this$;
var G__77012 = cljs.core.PersistentVector.EMPTY;
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77011,G__77012) : emmy.quaternion.evaluate.call(null,G__77011,G__77012));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var G__77013 = this$;
var G__77014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77013,G__77014) : emmy.quaternion.evaluate.call(null,G__77013,G__77014));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var G__77015 = this$;
var G__77016 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77015,G__77016) : emmy.quaternion.evaluate.call(null,G__77015,G__77016));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var G__77017 = this$;
var G__77018 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77017,G__77018) : emmy.quaternion.evaluate.call(null,G__77017,G__77018));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var G__77019 = this$;
var G__77020 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77019,G__77020) : emmy.quaternion.evaluate.call(null,G__77019,G__77020));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var G__77021 = this$;
var G__77022 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77021,G__77022) : emmy.quaternion.evaluate.call(null,G__77021,G__77022));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var G__77023 = this$;
var G__77024 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77023,G__77024) : emmy.quaternion.evaluate.call(null,G__77023,G__77024));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var G__77025 = this$;
var G__77026 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77025,G__77026) : emmy.quaternion.evaluate.call(null,G__77025,G__77026));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var G__77027 = this$;
var G__77028 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77027,G__77028) : emmy.quaternion.evaluate.call(null,G__77027,G__77028));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i__$1){
var self__ = this;
var this$ = this;
var G__77029 = this$;
var G__77030 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77029,G__77030) : emmy.quaternion.evaluate.call(null,G__77029,G__77030));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1){
var self__ = this;
var this$ = this;
var G__77031 = this$;
var G__77032 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77031,G__77032) : emmy.quaternion.evaluate.call(null,G__77031,G__77032));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1){
var self__ = this;
var this$ = this;
var G__77033 = this$;
var G__77034 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77033,G__77034) : emmy.quaternion.evaluate.call(null,G__77033,G__77034));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l){
var self__ = this;
var this$ = this;
var G__77035 = this$;
var G__77036 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77035,G__77036) : emmy.quaternion.evaluate.call(null,G__77035,G__77036));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1){
var self__ = this;
var this$ = this;
var G__77037 = this$;
var G__77038 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77037,G__77038) : emmy.quaternion.evaluate.call(null,G__77037,G__77038));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n){
var self__ = this;
var this$ = this;
var G__77039 = this$;
var G__77040 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77039,G__77040) : emmy.quaternion.evaluate.call(null,G__77039,G__77040));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o){
var self__ = this;
var this$ = this;
var G__77041 = this$;
var G__77042 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77041,G__77042) : emmy.quaternion.evaluate.call(null,G__77041,G__77042));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p){
var self__ = this;
var this$ = this;
var G__77043 = this$;
var G__77044 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77043,G__77044) : emmy.quaternion.evaluate.call(null,G__77043,G__77044));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q){
var self__ = this;
var this$ = this;
var G__77045 = this$;
var G__77046 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77045,G__77046) : emmy.quaternion.evaluate.call(null,G__77045,G__77046));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1){
var self__ = this;
var this$ = this;
var G__77047 = this$;
var G__77048 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77047,G__77048) : emmy.quaternion.evaluate.call(null,G__77047,G__77048));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s){
var self__ = this;
var this$ = this;
var G__77049 = this$;
var G__77050 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77049,G__77050) : emmy.quaternion.evaluate.call(null,G__77049,G__77050));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s,t){
var self__ = this;
var this$ = this;
var G__77051 = this$;
var G__77052 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s,t], null);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77051,G__77052) : emmy.quaternion.evaluate.call(null,G__77051,G__77052));
}));

(emmy.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s,t,rest){
var self__ = this;
var this$ = this;
var G__77053 = this$;
var G__77054 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s,t], null),rest);
return (emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__77053,G__77054) : emmy.quaternion.evaluate.call(null,G__77053,G__77054));
}));

(emmy.quaternion.Quaternion.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.quaternion.Quaternion.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (_,old,new$){
var self__ = this;
var ___$1 = this;
return (new emmy.quaternion.Quaternion(emmy.dual.replace_tag(self__.r,old,new$),emmy.dual.replace_tag(self__.i,old,new$),emmy.dual.replace_tag(self__.j,old,new$),emmy.dual.replace_tag(self__.k,old,new$),self__.m));
}));

(emmy.quaternion.Quaternion.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (_,tag,mode){
var self__ = this;
var ___$1 = this;
return (new emmy.quaternion.Quaternion(emmy.dual.extract_tangent(self__.r,tag,mode),emmy.dual.extract_tangent(self__.i,tag,mode),emmy.dual.extract_tangent(self__.j,tag,mode),emmy.dual.extract_tangent(self__.k,tag,mode),self__.m));
}));

(emmy.quaternion.Quaternion.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
return (new emmy.quaternion.Quaternion(emmy.dual.extract_id(self__.r,id),emmy.dual.extract_id(self__.i,id),emmy.dual.extract_id(self__.j,id),emmy.dual.extract_id(self__.k,id),self__.m));
}));

(emmy.quaternion.Quaternion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(emmy.quaternion.Quaternion.cljs$lang$type = true);

(emmy.quaternion.Quaternion.cljs$lang$ctorStr = "emmy.quaternion/Quaternion");

(emmy.quaternion.Quaternion.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.quaternion/Quaternion");
}));

/**
 * Positional factory function for emmy.quaternion/Quaternion.
 */
emmy.quaternion.__GT_Quaternion = (function emmy$quaternion$__GT_Quaternion(r,i,j,k,m){
return (new emmy.quaternion.Quaternion(r,i,j,k,m));
});

/**
 * Returns `true` if `q` is an instance of [[Quaternion]], false otherwise.
 */
emmy.quaternion.quaternion_QMARK_ = (function emmy$quaternion$quaternion_QMARK_(q){
return (q instanceof emmy.quaternion.Quaternion);
});
/**
 * Returns the `r` component of the supplied quaternion `q`.
 * 
 *   Identical to [[real-part]].
 */
emmy.quaternion.get_r = (function emmy$quaternion$get_r(q){
return q.r;
});
/**
 * Returns the `r` component of the supplied quaternion `q`.
 * 
 *   Identical to [[get-r]].
 */
emmy.quaternion.real_part = (function emmy$quaternion$real_part(q){
return q.r;
});
/**
 * Returns the `i` component of the supplied quaternion `q`.
 */
emmy.quaternion.get_i = (function emmy$quaternion$get_i(q){
return q.i;
});
/**
 * Returns the `j` component of the supplied quaternion `q`.
 */
emmy.quaternion.get_j = (function emmy$quaternion$get_j(q){
return q.j;
});
/**
 * Returns the `k` component of the supplied quaternion `q`.
 */
emmy.quaternion.get_k = (function emmy$quaternion$get_k(q){
return q.k;
});
/**
 * Returns the `r` and `i` components of the quaternion `q` as a `Complex` number
 *   instance.
 */
emmy.quaternion.complex_1 = (function emmy$quaternion$complex_1(q){
return emmy.complex.complex.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(q),emmy.quaternion.get_i(q));
});
/**
 * Returns the `j` and `k` components of the quaternion `q` as a `Complex` number
 *   instance.
 */
emmy.quaternion.complex_2 = (function emmy$quaternion$complex_2(q){
return emmy.complex.complex.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_j(q),emmy.quaternion.get_k(q));
});
/**
 * Returns a pair of complex number created respectively from the `(r,i)`
 *   and `(j,k)` components of the supplied quaternion `q`.
 * 
 *   NOTE that this only works if the coefficients of `q` are real numbers, due to
 *   restrictions on the current complex number implementation. 
 */
emmy.quaternion.__GT_complex_pair = (function emmy$quaternion$__GT_complex_pair(q){
if(emmy.quaternion.quaternion_QMARK_(q)){
} else {
throw (new Error("Assert failed: (quaternion? q)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.quaternion.complex_1(q),emmy.quaternion.complex_2(q)], null);
});
/**
 * Returns a 4-vector of the coefficients of quaternion `q`.
 * 
 *   Works identically to `(vec q)`, but more efficient as we are able to create
 *   the new vector in one shot.
 */
emmy.quaternion.__GT_vector = (function emmy$quaternion$__GT_vector(q){
if(emmy.quaternion.quaternion_QMARK_(q)){
} else {
throw (new Error("Assert failed: (quaternion? q)"));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.quaternion.get_r(q),emmy.quaternion.get_i(q),emmy.quaternion.get_j(q),emmy.quaternion.get_k(q)], null);
});
/**
 * Returns a 3-vector holding the coefficients of the non-real (imaginary)
 *   components of the quaternion `q`.
 */
emmy.quaternion.three_vector = (function emmy$quaternion$three_vector(q){
if(emmy.quaternion.quaternion_QMARK_(q)){
} else {
throw (new Error("Assert failed: (quaternion? q)"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.quaternion.get_i(q),emmy.quaternion.get_j(q),emmy.quaternion.get_k(q)], null);
});
/**
 * Returns true if the quaternion `q` has zero entries for all non-real fields,
 *   false otherwise.
 */
emmy.quaternion.real_QMARK_ = (function emmy$quaternion$real_QMARK_(q){
var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_i(q));
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_j(q));
if(cljs.core.truth_(and__5160__auto____$1)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_k(q));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if `q` is a quaternion with zeros in all coefficient positions,
 *   false otherwise.
 */
emmy.quaternion.zero_QMARK_ = (function emmy$quaternion$zero_QMARK_(q){
var and__5160__auto__ = emmy.quaternion.real_QMARK_(q);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_r(q));
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if `q` is a [[real?]] quaternion with a one-like coefficient in
 *   the real position, false otherwise.
 */
emmy.quaternion.one_QMARK_ = (function emmy$quaternion$one_QMARK_(q){
var and__5160__auto__ = emmy.quaternion.real_QMARK_(q);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_r(q));
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if the quaternion `q` has a zero real entry, false otherwise.
 * 
 *   A 'pure' quaternion is sometimes called an 'imaginary' quaternion.
 */
emmy.quaternion.pure_QMARK_ = (function emmy$quaternion$pure_QMARK_(q){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_r(q));
});
/**
 * Returns true if `q` is a unit quaternion (i.e., a 'versor', a quaternion
 *   with [[magnitude]] equal to one), false otherwise.
 * 
 *   To check if the [[magnitude]] of `q` is /approximately/ equal to one, pass a
 *   tolerance via the `:epsilon` keyword argument.
 * 
 *   For more control, use [[magnitude]] to compute the magnitude directly.
 */
emmy.quaternion.unit_QMARK_ = (function emmy$quaternion$unit_QMARK_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___77174 = arguments.length;
var i__5898__auto___77175 = (0);
while(true){
if((i__5898__auto___77175 < len__5897__auto___77174)){
args__5903__auto__.push((arguments[i__5898__auto___77175]));

var G__77176 = (i__5898__auto___77175 + (1));
i__5898__auto___77175 = G__77176;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.quaternion.unit_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.quaternion.unit_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (q,p__77071){
var map__77072 = p__77071;
var map__77072__$1 = cljs.core.__destructure_map(map__77072);
var epsilon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77072__$1,new cljs.core.Keyword(null,"epsilon","epsilon",-730158570));
var mag_sq = (emmy.quaternion.magnitude_sq.cljs$core$IFn$_invoke$arity$1 ? emmy.quaternion.magnitude_sq.cljs$core$IFn$_invoke$arity$1(q) : emmy.quaternion.magnitude_sq.call(null,q));
if(cljs.core.truth_(epsilon)){
return emmy.value.within(epsilon)((1),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(mag_sq));
} else {
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(mag_sq);
}
}));

(emmy.quaternion.unit_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.quaternion.unit_QMARK_.cljs$lang$applyTo = (function (seq77069){
var G__77070 = cljs.core.first(seq77069);
var seq77069__$1 = cljs.core.next(seq77069);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77070,seq77069__$1);
}));

/**
 * Returns true if the supplied quaternion `q1` is equal to the value `q2`. The
 *   rules for [[eq]] are as follows:
 * 
 *   - If `q2` is a quaternion, returns true if all coefficients match, false
 *  otherwise
 * 
 *   - If `q2` is complex, returns true if the real and `i` coefficients are equal,
 *  with `j` and `k` coefficients of `q1` equal to zero, false otherwise
 * 
 *   - If `q2` is sequential with a count of 4, it's interpreted as a vector of
 *  quaternion coefficients.
 * 
 *   Else, if `q1` is a [[real?]] quaternion, returns true if the real component of
 *   `q1` is [[emmy.value/=]] to `q2`, false otherwise.
 */
emmy.quaternion.eq = (function emmy$quaternion$eq(q1,q2){
var or__5162__auto__ = (q1 === q2);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var r = emmy.quaternion.get_r(q1);
var i = emmy.quaternion.get_i(q1);
var j = emmy.quaternion.get_j(q1);
var k = emmy.quaternion.get_k(q1);
if(emmy.quaternion.quaternion_QMARK_(q2)){
var q2__$1 = q2;
var and__5160__auto__ = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(r,q2__$1.r);
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(i,q2__$1.i);
if(cljs.core.truth_(and__5160__auto____$1)){
var and__5160__auto____$2 = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(j,q2__$1.j);
if(cljs.core.truth_(and__5160__auto____$2)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(k,q2__$1.k);
} else {
return and__5160__auto____$2;
}
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
} else {
if(emmy.complex.complex_QMARK_(q2)){
var and__5160__auto__ = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(r,emmy.complex.real(q2));
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(i,emmy.complex.imaginary(q2));
if(cljs.core.truth_(and__5160__auto____$1)){
var and__5160__auto____$2 = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(j);
if(cljs.core.truth_(and__5160__auto____$2)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(k);
} else {
return and__5160__auto____$2;
}
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
} else {
if(cljs.core.sequential_QMARK_(q2)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(q2),(4))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q2,(0)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q2,(1)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q2,(2)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q2,(3)))))))))));
} else {
var and__5160__auto__ = emmy.quaternion.real_QMARK_(q1);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(r,q2);
} else {
return and__5160__auto__;
}

}
}
}
}
});
/**
 * The zero quaternion. All coefficients are equal to 0.
 */
emmy.quaternion.ZERO = emmy.quaternion.__GT_Quaternion((0),(0),(0),(0),null);
/**
 * The identity quaternion. The real coefficient is equal to 1, and all
 *   coefficients are equal to 0.
 */
emmy.quaternion.ONE = emmy.quaternion.__GT_Quaternion((1),(0),(0),(0),null);
/**
 * Unit quaternion with `i` coefficient equal to 1, all other coefficients equal
 *   to 0.
 */
emmy.quaternion.I = emmy.quaternion.__GT_Quaternion((0),(1),(0),(0),null);
/**
 * Unit quaternion with `j` coefficient equal to 1, all other coefficients equal
 *   to 0.
 */
emmy.quaternion.J = emmy.quaternion.__GT_Quaternion((0),(0),(1),(0),null);
/**
 * Unit quaternion with `k` coefficient equal to 1, all other coefficients equal
 *   to 0.
 */
emmy.quaternion.K = emmy.quaternion.__GT_Quaternion((0),(0),(0),(1),null);
/**
 * Constructor that builds [[Quaternion]] instances out of a variety of types.
 *   Given:
 * 
 *   - a quaternion `x`, acts as identity.
 * 
 *   - a sequential `x`, returns a quaternion with coefficients built from the
 *  first four entries.
 * 
 *   - a complex number `x`, returns a quaternion built from the real and imaginary
 *  components of `x` with `j` and `k` components equal to zero.
 * 
 *   - a real number `x` and 3-vector, returns a quaternion with real coefficient
 *  equal to `x` and imaginary components equal to the elements of the vector
 * 
 *   - 4 distinct arguments `r`, `i`, `j` and `k`, returns a quaternion with these
 *  as the coefficients.
 */
emmy.quaternion.make = (function emmy$quaternion$make(var_args){
var G__77082 = arguments.length;
switch (G__77082) {
case 1:
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(emmy.quaternion.quaternion_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.make,cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),x));
} else {
if(emmy.complex.complex_QMARK_(x)){
return emmy.quaternion.__GT_Quaternion(emmy.complex.real(x),emmy.complex.imaginary(x),(0),(0),null);
} else {
return emmy.quaternion.__GT_Quaternion(x,(0),(0),(0),null);

}
}
}
}));

(emmy.quaternion.make.cljs$core$IFn$_invoke$arity$2 = (function (r,p__77083){
var vec__77084 = p__77083;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77084,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77084,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77084,(2),null);
return emmy.quaternion.__GT_Quaternion(r,i,j,k,null);
}));

(emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4 = (function (r,i,j,k){
return emmy.quaternion.__GT_Quaternion(r,i,j,k,null);
}));

(emmy.quaternion.make.cljs$lang$maxFixedArity = 4);

/**
 * Implementation of a reader literal that turns literal 4-vectors into calls
 *   to [[make]]. For all other input, call [[make]] directly.
 * 
 *   Installed by default under #emmy/quaternion.
 */
emmy.quaternion.parse_quaternion = (function emmy$quaternion$parse_quaternion(x){
if(cljs.core.vector_QMARK_(x)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(4))){
var vec__77091 = x;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77091,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77091,(1),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77091,(2),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77091,(3),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.quaternion","make","emmy.quaternion/make",624604930,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,j,null,(1),null)),(new cljs.core.List(null,k,null,(1),null))], 0))));
} else {
return emmy.util.illegal((""+"Quaternion literal vectors require 4 elements. Received: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.quaternion","make","emmy.quaternion/make",624604930,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
}
});
/**
 * Given two complex numbers `a` and `b`, returns a quaternion instance with
 * 
 *   - `r` and `i` components set to the real and imaginary components of `a`
 *   - `j` and `k` components set to the real and imaginary components of `b`
 */
emmy.quaternion.from_complex = (function emmy$quaternion$from_complex(a,b){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1(b),emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Generates a [[Quaternion]] instance, given:
 * 
 *   - a magnitude `r`
 *   - a rotation angle `theta`, with a natural range of `-2*pi` to `2*pi`
 *   - `colat`, the [colatitude](https://mathworld.wolfram.com/Colatitude.html) of
 *  the (non-real) vectorial part of the quaternion
 *   - `lon`, the longitude of the vectorial part of the quaternion
 */
emmy.quaternion.spherical = (function emmy$quaternion$spherical(r,theta,colat,lon){
var half_t = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(theta,(2));
var cos_ht = emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(half_t);
var sin_ht = emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(half_t);
var sin_co = emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(colat);
var r_STAR_sin_ht = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,sin_ht);
var r_STAR_sin_ht_STAR_sin_co = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_ht,sin_co);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,cos_ht),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_ht_STAR_sin_co,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(lon)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_ht_STAR_sin_co,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(lon)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_ht,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(colat)));
});
/**
 * Returns a [[Quaternion]] `q` with magnitude `rho`, built such that:
 * 
 *   - the magnitude of `q` equals `rho`
 *   - the magnitude `([[complex-1]] q)` equals `(* rho (cos alpha))`
 *   - the angle of `([[complex-1]] q)` equals `theta1`
 *   - The magnitude `([[complex-2]] q)` equals `(* rho (cos alpha))`
 *   - the angle of `([[complex-2]] q)` equals `theta12`
 * 
 *   This strange, possibly unnecessary constructor taken from the [Boost
 *   quaternion
 *   implementation](https://www.boost.org/doc/libs/1_78_0/libs/math/doc/html/math_toolkit/create.html).
 */
emmy.quaternion.semipolar = (function emmy$quaternion$semipolar(r,alpha,theta1,theta2){
var r_STAR_cos_a = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(alpha));
var r_STAR_sin_a = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(alpha));
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_cos_a,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta1)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_cos_a,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta1)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_a,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta2)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_a,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta2)));
});
/**
 * Returns a [[Quaternion]] instance with [[complex-1]] part built from the polar
 *   coordinates `r1` and `theta1` and [[complex-2]] part built from `r2` and
 *   `theta2`
 */
emmy.quaternion.multipolar = (function emmy$quaternion$multipolar(r1,theta1,r2,theta2){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta1)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta1)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r2,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta2)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r2,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta2)));
});
/**
 * Returns a [[Quaternion]] `q` with [[real-part]] equal to `t` and
 *   the [[three-vector]] part built from the spherical coordinates `r`, `colat`
 *   and `lon`.
 */
emmy.quaternion.cylindrospherical = (function emmy$quaternion$cylindrospherical(t,r,theta,phi){
var r_STAR_sin_theta = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta));
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(t,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_theta,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(phi)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_theta,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(phi)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta)));
});
/**
 * Returns a [[Quaternion]] `q` with [[complex-1]] built from the polar
 *   coordinates `mag` and `angle`, and `j` and `k` components equal to the
 *   supplied `j` and `k`.
 */
emmy.quaternion.cylindrical = (function emmy$quaternion$cylindrical(mag,angle,j,k){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(mag,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(angle)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(mag,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(angle)),j,k);
});
/**
 * Given a quaternion `q` with function coefficients, returns an arity compatible
 *   with all function coefficient entries.
 * 
 *   NOTE that by default, if any arities are incompatible, the function will
 *   return `[:at-least 0]`. To force strict arity checks,
 *   bind [[emmy.function/*strict-arity-checks*]] to `true`.
 */
emmy.quaternion.arity = (function emmy$quaternion$arity(q){
return emmy.function$.seq_arity(emmy.quaternion.__GT_vector(q));
});
/**
 * Given a quaternion `q` with function coefficients and a sequence `args` of
 *   arguments, and returns a new [[Quaternion]] generated by replacing each
 *   coefficient with the result of applying the (functional) coefficient to
 *   `args`.
 */
emmy.quaternion.evaluate = (function emmy$quaternion$evaluate(q,args){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(q),args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_i(q),args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_j(q),args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_k(q),args));
});
/**
 * Given a quaternion `q` with function coefficients and a possibly-empty sequence
 *   of partial derivative `selectors`, returns a new [[Quaternion]] generated by
 *   replacing each (functional) coefficient with its derivative with respect to
 *   `selectors`.
 */
emmy.quaternion.partial_derivative = (function emmy$quaternion$partial_derivative(q,selectors){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(q),selectors),emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_i(q),selectors),emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_j(q),selectors),emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_k(q),selectors));
});
/**
 * Variadic function that returns the sum of all supplied quaternions.
 * 
 *   Given 1 argument `q`, acts as identity. Given no arguments, returns [[ZERO]],
 *   the additive identity.
 * 
 *   The sum of two or more quaternions is a new quaternion with coefficients equal
 *   to the elementwise sum of the coefficients of all supplied quaternions.
 */
emmy.quaternion.add = (function emmy$quaternion$add(var_args){
var G__77099 = arguments.length;
switch (G__77099) {
case 0:
return emmy.quaternion.add.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.quaternion.add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.quaternion.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___77186 = arguments.length;
var i__5898__auto___77187 = (0);
while(true){
if((i__5898__auto___77187 < len__5897__auto___77186)){
args_arr__5922__auto__.push((arguments[i__5898__auto___77187]));

var G__77188 = (i__5898__auto___77187 + (1));
i__5898__auto___77187 = G__77188;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.quaternion.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.quaternion.add.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.quaternion.ZERO;
}));

(emmy.quaternion.add.cljs$core$IFn$_invoke$arity$1 = (function (q){
return q;
}));

(emmy.quaternion.add.cljs$core$IFn$_invoke$arity$2 = (function (q1,q2){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(q1),emmy.quaternion.get_r(q2)),emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_i(q1),emmy.quaternion.get_i(q2)),emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_j(q1),emmy.quaternion.get_j(q2)),emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_k(q1),emmy.quaternion.get_k(q2)));
}));

(emmy.quaternion.add.cljs$core$IFn$_invoke$arity$variadic = (function (q1,q2,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(emmy.quaternion.add,emmy.quaternion.add.cljs$core$IFn$_invoke$arity$2(q1,q2),more);
}));

/** @this {Function} */
(emmy.quaternion.add.cljs$lang$applyTo = (function (seq77096){
var G__77097 = cljs.core.first(seq77096);
var seq77096__$1 = cljs.core.next(seq77096);
var G__77098 = cljs.core.first(seq77096__$1);
var seq77096__$2 = cljs.core.next(seq77096__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77097,G__77098,seq77096__$2);
}));

(emmy.quaternion.add.cljs$lang$maxFixedArity = (2));

/**
 * Returns the quaternion result of adding scalar `s` to the real part of
 *   quaternion `q`. Addition occurs with scalar `s` on the left.
 * 
 *   See [[quaternion+scalar]] for right addition.
 */
emmy.quaternion.scalar_PLUS_quaternion = (function emmy$quaternion$scalar_PLUS_quaternion(s,q){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(s,emmy.quaternion.get_r(q)),emmy.quaternion.get_i(q),emmy.quaternion.get_j(q),emmy.quaternion.get_k(q));
});
/**
 * Returns the quaternion result of adding scalar `s` to the real part of
 *   quaternion `q`. Addition occurs with scalar `s` on the right.
 * 
 *   See [[scalar+quaternion]] for left addition.
 */
emmy.quaternion.quaternion_PLUS_scalar = (function emmy$quaternion$quaternion_PLUS_scalar(q,s){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(q),s),emmy.quaternion.get_i(q),emmy.quaternion.get_j(q),emmy.quaternion.get_k(q));
});
/**
 * Returns the negation (additive inverse) of the supplied quaternion `q`.
 * 
 *   The additive inverse of a quaternion is a new quaternion that, when [[add]]ed
 *   to `q`, will produce the [[ZERO]] quaternion (the additive identity).
 */
emmy.quaternion.negate = (function emmy$quaternion$negate(q){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_r(q)),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_i(q)),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_j(q)),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_k(q)));
});
/**
 * Variadic function for subtracting quaternion arguments.
 * 
 *   - Given no arguments, returns [[ZERO]], the additive identity.
 *   - Given 1 argument `q`, acts as identity.
 *   - Given 2 arguments, returns the difference of quaternions `q1` and `q2`.
 *   - Given more than 2 arguments, returns the difference of the first quaternion
 *  `q1` with the sum of all remaining arguments.
 * 
 *   The difference of two quaternions is a new quaternion with coefficients equal
 *   to the pairwise difference of the coefficients of `q1` and `q2`.
 */
emmy.quaternion.sub = (function emmy$quaternion$sub(var_args){
var G__77104 = arguments.length;
switch (G__77104) {
case 0:
return emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___77190 = arguments.length;
var i__5898__auto___77191 = (0);
while(true){
if((i__5898__auto___77191 < len__5897__auto___77190)){
args_arr__5922__auto__.push((arguments[i__5898__auto___77191]));

var G__77192 = (i__5898__auto___77191 + (1));
i__5898__auto___77191 = G__77192;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.quaternion.ZERO;
}));

(emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$1 = (function (q){
return emmy.quaternion.negate(q);
}));

(emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$2 = (function (q1,q2){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(q1),emmy.quaternion.get_r(q2)),emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_i(q1),emmy.quaternion.get_i(q2)),emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_j(q1),emmy.quaternion.get_j(q2)),emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_k(q1),emmy.quaternion.get_k(q2)));
}));

(emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$variadic = (function (q1,q2,more){
return emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$2(q1,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.quaternion.add,q2,more));
}));

/** @this {Function} */
(emmy.quaternion.sub.cljs$lang$applyTo = (function (seq77101){
var G__77102 = cljs.core.first(seq77101);
var seq77101__$1 = cljs.core.next(seq77101);
var G__77103 = cljs.core.first(seq77101__$1);
var seq77101__$2 = cljs.core.next(seq77101__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77102,G__77103,seq77101__$2);
}));

(emmy.quaternion.sub.cljs$lang$maxFixedArity = (2));

/**
 * Returns the quaternion result of subtracting `s` from the real part of
 *   quaternion `q` and negating all imaginary entries.
 * 
 *   See [[quaternion-scalar]] for a similar function with arguments reversed.
 */
emmy.quaternion.scalar_quaternion = (function emmy$quaternion$scalar_quaternion(s,q){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(s,emmy.quaternion.get_r(q)),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_i(q)),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_j(q)),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_k(q)));
});
/**
 * Returns the quaternion result of subtracting `s` from the real part of
 *   quaternion `q` and negating all imaginary entries.
 * 
 *   See [[quaternion-scalar]] for a similar function with arguments reversed.
 */
emmy.quaternion.quaternion_scalar = (function emmy$quaternion$quaternion_scalar(q,s){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(q),s),emmy.quaternion.get_i(q),emmy.quaternion.get_j(q),emmy.quaternion.get_k(q));
});
/**
 * Variadic function that returns the product of all supplied quaternions.
 * 
 *   Given 1 argument `q`, acts as identity. Given no arguments, returns [[ONE]],
 *   the multiplicative identity.
 * 
 *   The product of two or more quaternions is a new quaternion generated by
 *   multiplying together each quaternion of the form `(r+ai+bj+ck)`, respecting
 *   the quaternion rules:
 * 
 *   i^2 == j^2 == k^2 == -1
 *   ijk == -1,
 *   ij  == k,  jk == i,  ki == j
 *   ji  == -k, kj == -i, ik == -j
 */
emmy.quaternion.mul = (function emmy$quaternion$mul(var_args){
var G__77109 = arguments.length;
switch (G__77109) {
case 0:
return emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___77194 = arguments.length;
var i__5898__auto___77195 = (0);
while(true){
if((i__5898__auto___77195 < len__5897__auto___77194)){
args_arr__5922__auto__.push((arguments[i__5898__auto___77195]));

var G__77196 = (i__5898__auto___77195 + (1));
i__5898__auto___77195 = G__77196;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.quaternion.ONE;
}));

(emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$1 = (function (q){
return q;
}));

(emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$2 = (function (q1,q2){
var r1 = emmy.quaternion.get_r(q1);
var i1 = emmy.quaternion.get_i(q1);
var j1 = emmy.quaternion.get_j(q1);
var k1 = emmy.quaternion.get_k(q1);
var r2 = emmy.quaternion.get_r(q2);
var i2 = emmy.quaternion.get_i(q2);
var j2 = emmy.quaternion.get_j(q2);
var k2 = emmy.quaternion.get_k(q2);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,r2),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i1,i2),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(j1,j2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(k1,k2)], 0))),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,i2),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i1,r2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(j1,k2),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),k1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([j2], 0))], 0)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,j2),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),i1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k2], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(j1,r2),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(k1,i2)], 0)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,k2),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i1,j2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),j1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i2], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(k1,r2)], 0)));
}));

(emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$variadic = (function (q1,q2,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(emmy.quaternion.mul,emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$2(q1,q2),more);
}));

/** @this {Function} */
(emmy.quaternion.mul.cljs$lang$applyTo = (function (seq77106){
var G__77107 = cljs.core.first(seq77106);
var seq77106__$1 = cljs.core.next(seq77106);
var G__77108 = cljs.core.first(seq77106__$1);
var seq77106__$2 = cljs.core.next(seq77106__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77107,G__77108,seq77106__$2);
}));

(emmy.quaternion.mul.cljs$lang$maxFixedArity = (2));

/**
 * Returns a new quaternion generated by multiplying each coefficient of the
 *   supplied quaternion `q` by the supplied scalar `s` on the left.
 */
emmy.quaternion.scale_l = (function emmy$quaternion$scale_l(s,q){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,emmy.quaternion.get_r(q)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,emmy.quaternion.get_i(q)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,emmy.quaternion.get_j(q)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,emmy.quaternion.get_k(q)));
});
/**
 * Returns a new quaternion generated by multiplying each coefficient of the
 *   supplied quaternion `q` by the supplied scalar `s` on the right.
 */
emmy.quaternion.scale = (function emmy$quaternion$scale(q,s){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(q),s),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_i(q),s),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_j(q),s),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_k(q),s));
});
/**
 * Returns the conjugate of the supplied quaternion `q`.
 * 
 *   The conjugate of a quaternion is a new quaternion with real coefficient equal
 *   to that of `q` and each imaginary coefficient negated. `(mul q (conjugate q))`
 *   will return a [[real?]] quaternion.
 */
emmy.quaternion.conjugate = (function emmy$quaternion$conjugate(q){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.quaternion.get_r(q),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_i(q)),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_j(q)),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_k(q)));
});
/**
 * Returns a new quaternion generated by dividing each coefficient of the supplied
 *   quaternion `q` by the supplied scalar `s`.
 */
emmy.quaternion.q_div_scalar = (function emmy$quaternion$q_div_scalar(q,s){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(q),s),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_i(q),s),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_j(q),s),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_k(q),s));
});
/**
 * Returns the quaternion dot product of the supplied quaternions `l` and `r`.
 * 
 *   The quaternion dot product is the sum of the products of the corresponding
 *   coefficients of each quaternion, equal to
 * 
 *   $$r_l * r_r + i_l * i_r + j_l * j_r + k_l * k_r$$
 */
emmy.quaternion.dot_product = (function emmy$quaternion$dot_product(l,r){
var vec__77110 = l;
var lr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77110,(0),null);
var li = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77110,(1),null);
var lj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77110,(2),null);
var lk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77110,(3),null);
var vec__77113 = r;
var rr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77113,(0),null);
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77113,(1),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77113,(2),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77113,(3),null);
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(lr,rr),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(li,ri),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(lj,rj),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(lk,rk)], 0));
});
/**
 * Returns a quaternion representing the (vector) cross product of the two pure
 *   sides (retrieved via [[three-vector]]) of the supplied quaternions `l` and
 *   `r`.
 * 
 *   NOTE that the suggestion for this function comes from this [C++ quaternion
 *   library](https://github.com/ferd36/quaternions/blob/master/include/quaternion.h#L1109).
 *   Strictly, this is not the 'cross product of two quaternions'.
 */
emmy.quaternion.cross_product = (function emmy$quaternion$cross_product(l,r){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$2((0),emmy.structure.cross_product(emmy.quaternion.three_vector(l),emmy.quaternion.three_vector(r)));
});
/**
 * Returns the multiplicative inverse of the supplied quaternion `q`.
 * 
 *   The inverse of a quaternion is a new quaternion that, when [[mul]]tiplied by
 *   `q`, will produce the [[ONE]] quaternion (the multiplicative identity).
 */
emmy.quaternion.invert = (function emmy$quaternion$invert(q){
return emmy.quaternion.q_div_scalar(emmy.quaternion.conjugate(q),(emmy.quaternion.magnitude_sq.cljs$core$IFn$_invoke$arity$1 ? emmy.quaternion.magnitude_sq.cljs$core$IFn$_invoke$arity$1(q) : emmy.quaternion.magnitude_sq.call(null,q)));
});
/**
 * Variadic function for dividing quaternion arguments.
 * 
 *   - Given no arguments, returns [[ONE]], the multiplicative identity.
 *   - Given 1 argument `q`, acts as identity.
 *   - Given 2 arguments, returns the quotient of quaternions `q1` and `q2`.
 *   - Given more than 2 arguments, returns the quotient of the first quaternion
 *  `q1` with the product of all remaining arguments.
 * 
 *   The quotient of two quaternions is a new quaternion equal to the product of
 *   `q1` and the multiplicative inverse of `q2`
 */
emmy.quaternion.div = (function emmy$quaternion$div(var_args){
var G__77130 = arguments.length;
switch (G__77130) {
case 0:
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___77198 = arguments.length;
var i__5898__auto___77199 = (0);
while(true){
if((i__5898__auto___77199 < len__5897__auto___77198)){
args_arr__5922__auto__.push((arguments[i__5898__auto___77199]));

var G__77200 = (i__5898__auto___77199 + (1));
i__5898__auto___77199 = G__77200;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.quaternion.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.quaternion.ONE;
}));

(emmy.quaternion.div.cljs$core$IFn$_invoke$arity$1 = (function (q){
return emmy.quaternion.invert(q);
}));

(emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2 = (function (q1,q2){
return emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$2(q1,emmy.quaternion.invert(q2));
}));

(emmy.quaternion.div.cljs$core$IFn$_invoke$arity$variadic = (function (q1,q2,more){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(q1,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.quaternion.mul,q2,more));
}));

/** @this {Function} */
(emmy.quaternion.div.cljs$lang$applyTo = (function (seq77127){
var G__77128 = cljs.core.first(seq77127);
var seq77127__$1 = cljs.core.next(seq77127);
var G__77129 = cljs.core.first(seq77127__$1);
var seq77127__$2 = cljs.core.next(seq77127__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77128,G__77129,seq77127__$2);
}));

(emmy.quaternion.div.cljs$lang$maxFixedArity = (2));

/**
 * Returns the square of the [[magnitude]] of the supplied quaternion `q`,
 *   equivalent to taking the [[dot-product]] of `q` with itself.
 */
emmy.quaternion.magnitude_sq = (function emmy$quaternion$magnitude_sq(q){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_r(q)),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_i(q)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_j(q)),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_k(q))], 0));
});
/**
 * Returns the norm of the supplied quaternion `q`.
 * 
 *   The norm of a quaternion is the square root of the sum of the squares of the
 *   quaternion's coefficients.
 */
emmy.quaternion.magnitude = (function emmy$quaternion$magnitude(q){
return emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.magnitude_sq(q));
});
/**
 * Returns a new quaternion generated by dividing each coefficient of the supplied
 *   quaternion `q` by the [[magnitude]] of `q`. (If the [[magnitude]]
 *   is [[zero?]], returns the zero quaternion `q`.)
 * 
 *   The returned quaternion will have [[magnitude]] (approximately) equal to
 *   1. [[unit?]] will return true for a [[normalize]]d quaternion, though you may
 *   need to supply an `:epsilon`.
 */
emmy.quaternion.normalize = (function emmy$quaternion$normalize(q){
if(cljs.core.truth_(emmy.quaternion.zero_QMARK_(q))){
return q;
} else {
return emmy.quaternion.q_div_scalar(q,emmy.quaternion.magnitude(q));
}
});
/**
 * Returns the commutator of the supplied quaternions `l` and `r`.
 * 
 *   The commutator of two quaternions is equal to
 * 
 *   ```clj
 *   (- (* l r) (* r l))
 *   ```
 */
emmy.quaternion.commutator = (function emmy$quaternion$commutator(l,r){
return emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$2(l,r),emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$2(r,l));
});
/**
 * Returns the logarithm $\ln q$ of the supplied quaternion `q`.
 * 
 *   Given a quaternion $q$ with real part $r$ and non-real vector $\vec{v}$, the
 *   logarithm [is computed
 *   as](https://en.wikipedia.org/wiki/Quaternion#Exponential,_logarithm,_and_power_functions)
 * 
 *   $$
 *   \ln(q) = \ln \|q\| + \frac{\mathbf{v}}{\|\mathbf{v}\|} \
 *   \arccos \frac{r}{\|\q\|}
 *   $$
 */
emmy.quaternion.log = (function emmy$quaternion$log(q){
var vec__77132 = q;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77132,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77132,(1),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77132,(2),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77132,(3),null);
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(j);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(k);
} else {
return and__5160__auto__;
}
})())){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(i))){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(r));
} else {
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,i], null))),emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(i,r),(0),(0));
}
} else {
var q_mag = emmy.quaternion.magnitude(q);
var v = emmy.quaternion.three_vector(q);
var v_mag = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$2(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(q_mag),emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.acos.cljs$core$IFn$_invoke$arity$1(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(r,q_mag)),emmy.generic.div.cljs$core$IFn$_invoke$arity$2(v,v_mag)));
}
});
/**
 * Returns the exponential $e^q$ of the supplied quaternion `q`.
 * 
 *   Given a quaternion $q$ with real part $r$ and non-real vector $\vec{v}$, the
 *   exponential [is computed
 *   as](https://en.wikipedia.org/wiki/Quaternion#Exponential,_logarithm,_and_power_functions)
 * 
 *   $$
 *   \exp(q) = e^r \left(\cos \|\mathbf{v}\| \
 *   + \frac{\mathbf{v}}{\|\mathbf{v}\|} \sin\|\mathbf{v}\| \right)
 *   $$
 */
emmy.quaternion.exp = (function emmy$quaternion$exp(q){
var r = emmy.quaternion.real_part(q);
var exp_r = emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(r);
var v = emmy.quaternion.three_vector(q);
var v_mag = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(v_mag))){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(exp_r,(0),(0),(0));
} else {
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(exp_r,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(v_mag)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(exp_r,emmy.generic.sinc.cljs$core$IFn$_invoke$arity$1(v_mag),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}
});
/**
 * Returns the cosine of the supplied quaternion `q`.
 * 
 *   See the [Boost
 *   documentation](https://www.boost.org/doc/libs/1_78_0/libs/math/doc/html/math_toolkit/trans.html)
 *   and [source](https://www.boost.org/doc/libs/1_78_0/boost/math/quaternion.hpp)
 *   for a reference implementation.
 */
emmy.quaternion.cos = (function emmy$quaternion$cos(q){
var r = emmy.quaternion.real_part(q);
var v = emmy.quaternion.three_vector(q);
var v_mag = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(r),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(v_mag)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(r)),emmy.generic.sinhc.cljs$core$IFn$_invoke$arity$1(v_mag)),v));
});
/**
 * Returns the sine of the supplied quaternion `q`.
 * 
 *   See the [Boost
 *   documentation](https://www.boost.org/doc/libs/1_78_0/libs/math/doc/html/math_toolkit/trans.html)
 *   and [source](https://www.boost.org/doc/libs/1_78_0/boost/math/quaternion.hpp)
 *   for a reference implementation.
 */
emmy.quaternion.sin = (function emmy$quaternion$sin(q){
var r = emmy.quaternion.real_part(q);
var v = emmy.quaternion.three_vector(q);
var v_mag = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(r),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(v_mag)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(r),emmy.generic.sinhc.cljs$core$IFn$_invoke$arity$1(v_mag)),v));
});
/**
 * Returns the tangent of the supplied quaternion `q`.
 * 
 *   [[tan]] is defined as `(/ (sin q) (cos q))`.
 */
emmy.quaternion.tan = (function emmy$quaternion$tan(q){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.sin(q),emmy.quaternion.cos(q));
});
/**
 * Returns the hyperbolic cosine of the supplied quaternion `q`.
 * 
 *   [[cosh]] is defined in terms of the [[exp]] function as `(e^q + e^{-q}) / 2`.
 */
emmy.quaternion.cosh = (function emmy$quaternion$cosh(q){
return emmy.quaternion.q_div_scalar(emmy.quaternion.add.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.exp(q),emmy.quaternion.exp(emmy.quaternion.negate(q))),(2));
});
/**
 * Returns the hyperbolic sine of the supplied quaternion `q`.
 * 
 *   [[sinh]] is defined in terms of the [[exp]] function as `(e^q - e^{-q}) / 2`.
 */
emmy.quaternion.sinh = (function emmy$quaternion$sinh(q){
return emmy.quaternion.q_div_scalar(emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.exp(q),emmy.quaternion.exp(emmy.quaternion.negate(q))),(2));
});
/**
 * Returns the hyperbolic tangent of the supplied quaternion `q`.
 * 
 *   [[tan]] is defined as `(/ (sinh q) (cosh q))`.
 */
emmy.quaternion.tanh = (function emmy$quaternion$tanh(q){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.sinh(q),emmy.quaternion.cosh(q));
});
/**
 * Returns the result of raising quaternion `q` to the real, complex or quaternion
 *   power `p`.
 */
emmy.quaternion.expt = (function emmy$quaternion$expt(q,p){
if(emmy.value.native_integral_QMARK_(p)){
return emmy.generic.default_expt(q,p);
} else {
return emmy.quaternion.exp(((emmy.quaternion.quaternion_QMARK_(p))?emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.log(q),p):emmy.quaternion.scale(emmy.quaternion.log(q),p)));
}
});
/**
 * Returns the square root of the supplied quaternion `q`.
 * 
 *   `([[sqrt]] q)` is identical to, but more efficient than, raising `q` to the
 *   1/2 power.
 * 
 *   Thanks to the [Spire
 *   library](https://github.com/typelevel/spire/blob/82f607714f94ba1c70b13fd4751063dfdcd155f5/core/src/main/scala/spire/math/Quaternion.scala#L217)
 *   for the correct implementation used here.
 */
emmy.quaternion.sqrt = (function emmy$quaternion$sqrt(q){
var r = emmy.quaternion.get_r(q);
if(cljs.core.truth_(emmy.quaternion.real_QMARK_(q))){
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(r))){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4((0),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(r)),(0),(0));
} else {
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(r),(0),(0),(0));
}
} else {
var n = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(r,emmy.quaternion.magnitude(q)));
var rt2 = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1((2));
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,rt2),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.three_vector(q),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(n,rt2)));
}
});
/**
 * Returns a [[Quaternion]] that represents a rotation of `angle` radians around
 *   the unit (normalized) vector described by the second argument, a 3-vector with
 *   components `x`, `y` and `z`.
 * 
 *   The second argument represents an axis of rotation.
 * 
 *   NOTE: If you have an UN-normalized axis, prefer [[from-angle-axis]].
 */
emmy.quaternion.from_angle_normal_axis = (function emmy$quaternion$from_angle_normal_axis(angle,p__77136){
var vec__77137 = p__77136;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77137,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77137,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77137,(2),null);
var half_angle = emmy.generic.div.cljs$core$IFn$_invoke$arity$2(angle,(2));
var half_sine = emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(half_angle);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(half_angle),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half_sine,x),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half_sine,y),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half_sine,z));
});
/**
 * Returns a [[Quaternion]] that represents a rotation of `angle` radians around a
 *   normalized version of the vector described by `axis`. `axis` must be a
 *   3-vector with components `x`, `y` and `z`.
 * 
 *   Given an `axis` with numeric entries, [[from-angle-axis]] will explicitly
 *   normalize `axis` before calling [[from-angle-normal-axis]]. If any entries are
 *   non-numerical (i.e., symbolic), [[from-angle-axis]] will instead log an
 *   assumption that the magnitude of `axis` == 1 and proceed.
 * 
 *   NOTE: If you have an already-normalized axis,
 *   prefer [[from-angle-normal-axis]].
 */
emmy.quaternion.from_angle_axis = (function emmy$quaternion$from_angle_axis(angle,axis){
if(cljs.core.every_QMARK_(emmy.value.number_QMARK_,axis)){
var v_mag = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(axis);
var normal = emmy.generic.div.cljs$core$IFn$_invoke$arity$2(axis,v_mag);
return emmy.quaternion.from_angle_normal_axis(angle,normal);
} else {
var vv = emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.structure.vector_dot_product(axis,axis));
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,vv,(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),new cljs.core.Symbol(null,"from-angle-axis","from-angle-axis",770100623,null));
if(cljs.core.truth_(and__5160__auto__)){
return emmy.quaternion.from_angle_normal_axis(angle,axis);
} else {
return and__5160__auto__;
}
}
});
/**
 * Create a quaternion representing a pitch rotation by the supplied
 *   `angle` (specified in radians).
 */
emmy.quaternion.pitch = (function emmy$quaternion$pitch(angle){
return emmy.quaternion.from_angle_normal_axis(angle,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null));
});
/**
 * Create a quaternion representing a yaw rotation by the supplied
 *   `angle` (specified in radians).
 */
emmy.quaternion.yaw = (function emmy$quaternion$yaw(angle){
return emmy.quaternion.from_angle_normal_axis(angle,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null));
});
/**
 * Create a quaternion representing a roll rotation by the supplied
 *   `angle` (specified in radians).
 */
emmy.quaternion.roll = (function emmy$quaternion$roll(angle){
return emmy.quaternion.from_angle_normal_axis(angle,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null));
});
/**
 * Tolerance setting for [[->angle-axis]].
 */
emmy.quaternion._STAR_angle_axis_tolerance_STAR_ = 1.0E-8;
/**
 * Given a unit quaternion `q` [representing a spatial
 *   rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation) (sometimes
 *   called a 'versor'), returns a pair of
 * 
 *   - `theta`, the rotation in radians about the rotation axis
 *   - `axis`, a 3-element unit vector with elements `x`, `y` and `z` representing
 *  an axis of rotation in 3d Euclidean space.
 * 
 *   If the unit quaternion `q` represents NO rotation, the axis is undefined; this
 *   manifests as the squared norm of the non-real vector part of `q` sitting
 *   within [[*angle-axis-tolerance*]] of 0.
 * 
 *   In this case, the conversion is degenerate and [[->angle-axis]] returns the
 *   pair [0 [1 0 0]] as a default. (This check only occurs with a quaternion with
 *   all numeric elements in the non-real positions.)
 */
emmy.quaternion.__GT_angle_axis = (function emmy$quaternion$__GT_angle_axis(q){
if(emmy.quaternion.quaternion_QMARK_(q)){
} else {
throw (new Error("Assert failed: (quaternion? q)"));
}

var v = emmy.quaternion.three_vector(q);
var vv = emmy.structure.vector_dot_product(v,v);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.every_QMARK_(emmy.value.number_QMARK_,v);
if(and__5160__auto__){
return emmy.value.within(emmy.quaternion._STAR_angle_axis_tolerance_STAR_)(0.0,vv);
} else {
return and__5160__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null)], null);
} else {
var v_mag = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(vv);
var theta = emmy.generic.mul.cljs$core$IFn$_invoke$arity$2((2),emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(v_mag,emmy.quaternion.real_part(q)));
var axis = emmy.generic.div.cljs$core$IFn$_invoke$arity$2(v,v_mag);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [theta,axis], null);
}
});
/**
 * Given a 2x2 complex matrix `M` of the form
 * 
 *   ```
 *   [ a + b i,  c + d i]
 *   [ -c + d i, a - b i]
 *   ```
 * 
 *   Returns a [[Quaternion]] instance with coefficients `[a b c d]`.
 */
emmy.quaternion.from_complex_matrix = (function emmy$quaternion$from_complex_matrix(M){
var vec__77140 = emmy.matrix.matrix__GT_vector(M);
var vec__77143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77140,(0),null);
var a_PLUS_bi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77143,(0),null);
var c_PLUS_di = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77143,(1),null);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1(a_PLUS_bi),emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1(a_PLUS_bi),emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1(c_PLUS_di),emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1(c_PLUS_di));
});
/**
 * Returns a 2x2 complex matrix representation of the supplied Quaternion `q`.
 * 
 *   For a quaternion with coefficients `[a b c d]`, the returned matrix will have
 *   the following form:
 * 
 *   ```
 *   [ a + b i,  c + d i]
 *   [ -c + d i, a - b i]
 *   ```
 * 
 *   NOTE that this currently only works for quaternions `q` with real or symbolic
 *   entries.
 */
emmy.quaternion.__GT_complex_matrix = (function emmy$quaternion$__GT_complex_matrix(q){
var vec__77146 = q;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77146,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77146,(1),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77146,(2),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77146,(3),null);
return emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.make_rectangular.cljs$core$IFn$_invoke$arity$2(r,i),emmy.generic.make_rectangular.cljs$core$IFn$_invoke$arity$2(j,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.make_rectangular.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(j),k),emmy.generic.make_rectangular.cljs$core$IFn$_invoke$arity$2(r,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(i))], null)], 0));
});
/**
 * 4x4 matrix representation of the quaternion [[ONE]].
 */
emmy.quaternion.ONE_matrix = emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], 0));
/**
 * 4x4 matrix representation of the quaternion [[I]].
 */
emmy.quaternion.I_matrix = emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null)], 0));
/**
 * 4x4 matrix representation of the quaternion [[J]].
 */
emmy.quaternion.J_matrix = emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0),(0)], null)], 0));
/**
 * 4x4 matrix representation of the quaternion [[K]].
 */
emmy.quaternion.K_matrix = emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null)], 0));
/**
 * Given a 4x4 matrix representation of a quaternion, returns the associated
 *   quaternion by extracting the first row.
 */
emmy.quaternion.from_4x4_matrix = (function emmy$quaternion$from_4x4_matrix(four_matrix){
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(four_matrix,(0)));
});
/**
 * Returns the 4x4 matrix representation of the supplied [[Quaternion]] `q`.
 */
emmy.quaternion.__GT_4x4_matrix = (function emmy$quaternion$__GT_4x4_matrix(q){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(q),emmy.quaternion.ONE_matrix),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_i(q),emmy.quaternion.I_matrix),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_j(q),emmy.quaternion.J_matrix),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_k(q),emmy.quaternion.K_matrix)], 0));
});
/**
 * 4x4 down-up tensor representation of the quaternion [[ONE]].
 */
emmy.quaternion.ONE_tensor = emmy.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.ONE_matrix);
/**
 * 4x4 down-up tensor representation of the quaternion [[I]].
 */
emmy.quaternion.I_tensor = emmy.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.I_matrix);
/**
 * 4x4 down-up tensor representation of the quaternion [[J]].
 */
emmy.quaternion.J_tensor = emmy.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.J_matrix);
/**
 * 4x4 down-up tensor representation of the quaternion [[K]].
 */
emmy.quaternion.K_tensor = emmy.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.K_matrix);
emmy.quaternion.quarter = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(4));
/**
 * Given an orthogonal 3x3 matrix M representing a rotation in 3-space, returns
 *   the unit quaternion that corresponds to the same transformation.
 * 
 *   GJS notes in scmutils that this algorithm is the 'expanded Matt Mason method'.
 * 
 *   NOTE Orthogonal means, no stretching allowed, only rotation!
 * 
 *   NOTE this routine uses non-generic [[clojure.core/>=]]
 *   and [[clojure.core/max]] internally, so if you use numeric entries (or if your
 *   entries simplify down to numbers), make sure that they work with these native
 *   operations. No `BigInt` in ClojureScript for now, for example.
 */
emmy.quaternion.from_rotation_matrix = (function emmy$quaternion$from_rotation_matrix(M){
var vec__77149 = M;
var vec__77152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77149,(0),null);
var r11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77152,(0),null);
var r12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77152,(1),null);
var r13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77152,(2),null);
var vec__77155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77149,(1),null);
var r21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77155,(0),null);
var r22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77155,(1),null);
var r23 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77155,(2),null);
var vec__77158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77149,(2),null);
var r31 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77158,(0),null);
var r32 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77158,(1),null);
var r33 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77158,(2),null);
var q0_2 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.quarter,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((1),r11,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r22,r33], 0)));
var q1_2 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.quarter,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((1),r11,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._.cljs$core$IFn$_invoke$arity$1(r22),emmy.generic._.cljs$core$IFn$_invoke$arity$1(r33)], 0)));
var q2_2 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.quarter,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((1),emmy.generic._.cljs$core$IFn$_invoke$arity$1(r11),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r22,emmy.generic._.cljs$core$IFn$_invoke$arity$1(r33)], 0)));
var q3_2 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.quarter,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((1),emmy.generic._.cljs$core$IFn$_invoke$arity$1(r11),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._.cljs$core$IFn$_invoke$arity$1(r22),r33], 0)));
var q0q1 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.quarter,emmy.generic._.cljs$core$IFn$_invoke$arity$2(r32,r23));
var q0q2 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.quarter,emmy.generic._.cljs$core$IFn$_invoke$arity$2(r13,r31));
var q0q3 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.quarter,emmy.generic._.cljs$core$IFn$_invoke$arity$2(r21,r12));
var q1q2 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.quarter,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(r12,r21));
var q1q3 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.quarter,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(r13,r31));
var q2q3 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.quarter,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(r23,r32));
var q0_2s = emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(q0_2);
var q1_2s = emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(q1_2);
var q2_2s = emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(q2_2);
var q3_2s = emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(q3_2);
if(((emmy.value.number_QMARK_(q0_2s)) && (((emmy.value.number_QMARK_(q1_2s)) && (((emmy.value.number_QMARK_(q2_2s)) && (emmy.value.number_QMARK_(q3_2s)))))))){
if((q0_2s >= cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(q1_2s,q2_2s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q3_2s], 0)))){
var q0 = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q0_2s);
var q1 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q1,q0);
var q2 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q2,q0);
var q3 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q3,q0);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
if((q1_2s >= cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(q0_2s,q2_2s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q3_2s], 0)))){
var q1 = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q1_2s);
var q0 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q1,q1);
var q2 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q2,q1);
var q3 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q3,q1);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
if((q2_2s >= cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(q0_2s,q1_2s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q3_2s], 0)))){
var q2 = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q2_2s);
var q0 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q2,q2);
var q1 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q2,q2);
var q3 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q2q3,q2);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
var q3 = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q3_2s);
var q0 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q3,q3);
var q1 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q3,q3);
var q2 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q2q3,q3);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);

}
}
}
} else {
if(cljs.core.not(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(q0_2s))){
var q0 = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q0_2);
var q1 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q1,q0);
var q2 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q2,q0);
var q3 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q3,q0);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
if(cljs.core.not(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(q1_2s))){
var q1 = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q1_2);
var q0 = (0);
var q2 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q2,q1);
var q3 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q3,q1);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
if(cljs.core.not(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(q2_2s))){
var q2 = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q2_2);
var q0 = (0);
var q1 = (0);
var q3 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q2q3,q2);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(0));

}
}
}
}
});
/**
 * Given a normalized [[Quaternion]] `q`, returns the corresponding orthogonal 3x3
 *   rotation matrix representing a rotation in 3d-space.
 * 
 *   The implementation here will first normalize `q` for you and then generate a
 *   rotation matrix from that new quaternion `q-normal`.
 * 
 *   [[->rotation-matrix]] will still work if `q` isn't normalized; but if
 *   a [[Quaternion]] isn't normalized it doesn't make sense to interpret it as a
 *   rotation.
 * 
 *   See https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation#Quaternion-derived_rotation_matrix
 */
emmy.quaternion.__GT_rotation_matrix = (function emmy$quaternion$__GT_rotation_matrix(q){
if(emmy.quaternion.quaternion_QMARK_(q)){
} else {
throw (new Error("Assert failed: (quaternion? q)"));
}

var q0 = emmy.quaternion.get_r(q);
var q1 = emmy.quaternion.get_i(q);
var q2 = emmy.quaternion.get_j(q);
var q3 = emmy.quaternion.get_k(q);
var q0_STAR__STAR_2 = emmy.generic.square.cljs$core$IFn$_invoke$arity$1(q0);
var q1_STAR__STAR_2 = emmy.generic.square.cljs$core$IFn$_invoke$arity$1(q1);
var q2_STAR__STAR_2 = emmy.generic.square.cljs$core$IFn$_invoke$arity$1(q2);
var q3_STAR__STAR_2 = emmy.generic.square.cljs$core$IFn$_invoke$arity$1(q3);
var mag_sq = emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(q0_STAR__STAR_2,q1_STAR__STAR_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q2_STAR__STAR_2,q3_STAR__STAR_2], 0)));
emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,mag_sq,(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),new cljs.core.Symbol(null,"->rotation-matrix","->rotation-matrix",1030542807,null));

return emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(q0_STAR__STAR_2,q1_STAR__STAR_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(q2_STAR__STAR_2),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(q3_STAR__STAR_2)], 0)),mag_sq),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q1,q2),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q3))),mag_sq),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q1,q3),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q2))),mag_sq)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q1,q2),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q3))),mag_sq),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(q0_STAR__STAR_2,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(q1_STAR__STAR_2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q2_STAR__STAR_2,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(q3_STAR__STAR_2)], 0)),mag_sq),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q2,q3),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q1))),mag_sq)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q1,q3),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q2))),mag_sq),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q2,q3),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q1))),mag_sq),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(q0_STAR__STAR_2,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(q1_STAR__STAR_2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(q2_STAR__STAR_2),q3_STAR__STAR_2], 0)),mag_sq)], null)], 0));
});
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a){
return emmy.quaternion.zero_QMARK_(a);
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a){
return emmy.quaternion.one_QMARK_(a);
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a){
return emmy.quaternion.one_QMARK_(a);
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a){
return (new emmy.quaternion.Quaternion(emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(a.r),(0),(0),(0),a.m));
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a){
return (new emmy.quaternion.Quaternion(emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a.r),(0),(0),(0),a.m));
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a){
return (new emmy.quaternion.Quaternion(emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a.r),(0),(0),(0),a.m));
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a){
var and__5160__auto__ = emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(a.r);
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(a.i);
if(cljs.core.truth_(and__5160__auto____$1)){
var and__5160__auto____$2 = emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(a.j);
if(cljs.core.truth_(and__5160__auto____$2)){
return emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(a.k);
} else {
return and__5160__auto____$2;
}
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quaternion","quaternion",-808610151,null),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(a.r),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(a.i),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(a.j),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(a.k),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.eq(a,b);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.eq(b,a);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (a,b){
return emmy.quaternion.eq(a,b);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.eq(b,a);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.quaternion.eq(a,b);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.eq(b,a);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
return emmy.quaternion.eq(a,b);
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.__GT_Quaternion(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_r(q)),emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_i(q)),emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_j(q)),emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_k(q)),cljs.core.meta(q));
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.add.cljs$core$IFn$_invoke$arity$2(a,b);
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.scalar_PLUS_quaternion(a,b);
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (a,b){
return emmy.quaternion.quaternion_PLUS_scalar(a,b);
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.add.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(a),b);
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.quaternion.add.cljs$core$IFn$_invoke$arity$2(a,emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.negate(q);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$2(a,b);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.scalar_quaternion(a,b);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (a,b){
return emmy.quaternion.quaternion_scalar(a,b);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(a),b);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.quaternion.sub.cljs$core$IFn$_invoke$arity$2(a,emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$2(a,b);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (s,q){
return emmy.quaternion.scale_l(s,q);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (q,s){
return emmy.quaternion.scale(q,s);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(a),b);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.quaternion.mul.cljs$core$IFn$_invoke$arity$2(a,emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.expt(a,b);
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.quaternion.expt(a,emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
return emmy.quaternion.expt(a,b);
}));
emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.invert(q);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(a,b);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (s,q){
return emmy.quaternion.scale_l(s,emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(q));
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (q,s){
return emmy.quaternion.q_div_scalar(q,s);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(a),b);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(a,emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.sqrt(q);
}));
emmy.generic.log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.log(q);
}));
emmy.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.exp(q);
}));
emmy.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.sin(q);
}));
emmy.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.cos(q);
}));
emmy.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.tan(q);
}));
emmy.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.cosh(q);
}));
emmy.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.sinh(q);
}));
emmy.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.tanh(q);
}));
emmy.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
var or__5162__auto__ = emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_r(q));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_i(q));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_j(q));
if(cljs.core.truth_(or__5162__auto____$2)){
return or__5162__auto____$2;
} else {
return emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.quaternion.get_k(q));
}
}
}
}));
emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.magnitude(q);
}));
emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.magnitude(q);
}));
emmy.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.conjugate(q);
}));
emmy.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (q){
return emmy.quaternion.real_part(q);
}));
emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (q,selectors){
return emmy.quaternion.partial_derivative(q,selectors);
}));
emmy.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.cross_product(a,b);
}));
emmy.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (_,___$1){
return emmy.quaternion.ZERO;
}));
emmy.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (_,___$1){
return emmy.quaternion.ZERO;
}));
emmy.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
var i2 = emmy.complex.imaginary(b);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4((0),(0),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_k(a),i2),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_j(a),i2)));
}));
emmy.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
var i1 = emmy.complex.imaginary(a);
return emmy.quaternion.make.cljs$core$IFn$_invoke$arity$4((0),(0),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i1,emmy.quaternion.get_k(b))),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i1,emmy.quaternion.get_j(b)));
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.dot_product(a,b);
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,emmy.quaternion.get_r(b));
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (a,b){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(a),b);
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.complex.real(a),emmy.quaternion.get_r(b)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.complex.imaginary(a),emmy.quaternion.get_i(b)));
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_r(a),emmy.complex.real(b)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.get_i(a),emmy.complex.imaginary(b)));
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (q,s){
return emmy.quaternion.q_div_scalar(q,s);
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(a,b);
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(a),b);
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(a,emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (s,q){
return emmy.quaternion.q_div_scalar(q,s);
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(b,a);
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106)], null),(function (a,b){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(b,emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(a));
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.quaternion","quaternion","emmy.quaternion/quaternion",1038626106),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.quaternion.div.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(b),a);
}));

//# sourceMappingURL=emmy.quaternion.js.map
