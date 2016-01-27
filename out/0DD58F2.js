goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__318426__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__318426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__318427__i = 0, G__318427__a = new Array(arguments.length -  0);
while (G__318427__i < G__318427__a.length) {G__318427__a[G__318427__i] = arguments[G__318427__i + 0]; ++G__318427__i;}
  args = new cljs.core.IndexedSeq(G__318427__a,0);
} 
return G__318426__delegate.call(this,args);};
G__318426.cljs$lang$maxFixedArity = 0;
G__318426.cljs$lang$applyTo = (function (arglist__318428){
var args = cljs.core.seq(arglist__318428);
return G__318426__delegate(args);
});
G__318426.cljs$core$IFn$_invoke$arity$variadic = G__318426__delegate;
return G__318426;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__318429__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__318429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__318430__i = 0, G__318430__a = new Array(arguments.length -  0);
while (G__318430__i < G__318430__a.length) {G__318430__a[G__318430__i] = arguments[G__318430__i + 0]; ++G__318430__i;}
  args = new cljs.core.IndexedSeq(G__318430__a,0);
} 
return G__318429__delegate.call(this,args);};
G__318429.cljs$lang$maxFixedArity = 0;
G__318429.cljs$lang$applyTo = (function (arglist__318431){
var args = cljs.core.seq(arglist__318431);
return G__318429__delegate(args);
});
G__318429.cljs$core$IFn$_invoke$arity$variadic = G__318429__delegate;
return G__318429;
})()
;

return null;
});
