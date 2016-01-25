goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__148130__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__148130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148131__i = 0, G__148131__a = new Array(arguments.length -  0);
while (G__148131__i < G__148131__a.length) {G__148131__a[G__148131__i] = arguments[G__148131__i + 0]; ++G__148131__i;}
  args = new cljs.core.IndexedSeq(G__148131__a,0);
} 
return G__148130__delegate.call(this,args);};
G__148130.cljs$lang$maxFixedArity = 0;
G__148130.cljs$lang$applyTo = (function (arglist__148132){
var args = cljs.core.seq(arglist__148132);
return G__148130__delegate(args);
});
G__148130.cljs$core$IFn$_invoke$arity$variadic = G__148130__delegate;
return G__148130;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__148133__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__148133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148134__i = 0, G__148134__a = new Array(arguments.length -  0);
while (G__148134__i < G__148134__a.length) {G__148134__a[G__148134__i] = arguments[G__148134__i + 0]; ++G__148134__i;}
  args = new cljs.core.IndexedSeq(G__148134__a,0);
} 
return G__148133__delegate.call(this,args);};
G__148133.cljs$lang$maxFixedArity = 0;
G__148133.cljs$lang$applyTo = (function (arglist__148135){
var args = cljs.core.seq(arglist__148135);
return G__148133__delegate(args);
});
G__148133.cljs$core$IFn$_invoke$arity$variadic = G__148133__delegate;
return G__148133;
})()
;

return null;
});
