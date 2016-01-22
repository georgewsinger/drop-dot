// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__9163__auto__ = [];
var len__9156__auto___15659 = arguments.length;
var i__9157__auto___15660 = (0);
while(true){
if((i__9157__auto___15660 < len__9156__auto___15659)){
args__9163__auto__.push((arguments[i__9157__auto___15660]));

var G__15661 = (i__9157__auto___15660 + (1));
i__9157__auto___15660 = G__15661;
continue;
} else {
}
break;
}

var argseq__9164__auto__ = ((((0) < args__9163__auto__.length))?(new cljs.core.IndexedSeq(args__9163__auto__.slice((0)),(0))):null);
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__9164__auto__);
});

drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var e = (function (){var or__8098__auto__ = argv.e;
if(cljs.core.truth_(or__8098__auto__)){
return or__8098__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__8098__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__8098__auto__)){
return or__8098__auto__;
} else {
return "$HOME";
}
})();
return cljs.core.println.call(null,"template");
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq15658){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15658));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map