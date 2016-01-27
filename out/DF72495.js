goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__320336__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__320336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__320337__i = 0, G__320337__a = new Array(arguments.length -  0);
while (G__320337__i < G__320337__a.length) {G__320337__a[G__320337__i] = arguments[G__320337__i + 0]; ++G__320337__i;}
  args = new cljs.core.IndexedSeq(G__320337__a,0);
} 
return G__320336__delegate.call(this,args);};
G__320336.cljs$lang$maxFixedArity = 0;
G__320336.cljs$lang$applyTo = (function (arglist__320338){
var args = cljs.core.seq(arglist__320338);
return G__320336__delegate(args);
});
G__320336.cljs$core$IFn$_invoke$arity$variadic = G__320336__delegate;
return G__320336;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__320339__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__320339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__320340__i = 0, G__320340__a = new Array(arguments.length -  0);
while (G__320340__i < G__320340__a.length) {G__320340__a[G__320340__i] = arguments[G__320340__i + 0]; ++G__320340__i;}
  args = new cljs.core.IndexedSeq(G__320340__a,0);
} 
return G__320339__delegate.call(this,args);};
G__320339.cljs$lang$maxFixedArity = 0;
G__320339.cljs$lang$applyTo = (function (arglist__320341){
var args = cljs.core.seq(arglist__320341);
return G__320339__delegate(args);
});
G__320339.cljs$core$IFn$_invoke$arity$variadic = G__320339__delegate;
return G__320339;
})()
;

return null;
});
