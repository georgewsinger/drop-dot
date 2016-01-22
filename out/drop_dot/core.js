// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__9165__auto__ = [];
var len__9158__auto___40370 = arguments.length;
var i__9159__auto___40371 = (0);
while(true){
if((i__9159__auto___40371 < len__9158__auto___40370)){
args__9165__auto__.push((arguments[i__9159__auto___40371]));

var G__40372 = (i__9159__auto___40371 + (1));
i__9159__auto___40371 = G__40372;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((0) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((0)),(0))):null);
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__9166__auto__);
});

drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var e = (function (){var or__8100__auto__ = argv.e;
if(cljs.core.truth_(or__8100__auto__)){
return or__8100__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__8100__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__8100__auto__)){
return or__8100__auto__;
} else {
return "$HOME";
}
})();
cljs.core.println.call(null,argv);

if(cljs.core._EQ_.call(null,arg,"drop")){
cljs.core.println.call(null,"drop mode");
} else {
}

if(cljs.core._EQ_.call(null,arg,"link")){
return cljs.core.println.call(null,"link mode");
} else {
return null;
}
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq40369){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40369));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map