// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_();
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__7221__auto__ = [];
var len__7214__auto___13023 = arguments.length;
var i__7215__auto___13024 = (0);
while(true){
if((i__7215__auto___13024 < len__7214__auto___13023)){
args__7221__auto__.push((arguments[i__7215__auto___13024]));

var G__13025 = (i__7215__auto___13024 + (1));
i__7215__auto___13024 = G__13025;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("minimist") : cljs.nodejs.require.call(null,"minimist"));
var argv = (function (){var G__13022 = cljs.core.clj__GT_js(cljs.core.vec(args));
return (minimist.cljs$core$IFn$_invoke$arity$1 ? minimist.cljs$core$IFn$_invoke$arity$1(G__13022) : minimist.call(null,G__13022));
})();
var e = (function (){var or__6156__auto__ = argv.e;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__6156__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "$HOME";
}
})();
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([argv], 0));
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq13021){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13021));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;
