// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_();
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__7221__auto__ = [];
var len__7214__auto___13022 = arguments.length;
var i__7215__auto___13023 = (0);
while(true){
if((i__7215__auto___13023 < len__7214__auto___13022)){
args__7221__auto__.push((arguments[i__7215__auto___13023]));

var G__13024 = (i__7215__auto___13023 + (1));
i__7215__auto___13023 = G__13024;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["template"], 0));
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq13021){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13021));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;
