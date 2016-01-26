goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29571__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29572__i = 0, G__29572__a = new Array(arguments.length -  0);
while (G__29572__i < G__29572__a.length) {G__29572__a[G__29572__i] = arguments[G__29572__i + 0]; ++G__29572__i;}
  args = new cljs.core.IndexedSeq(G__29572__a,0);
} 
return G__29571__delegate.call(this,args);};
G__29571.cljs$lang$maxFixedArity = 0;
G__29571.cljs$lang$applyTo = (function (arglist__29573){
var args = cljs.core.seq(arglist__29573);
return G__29571__delegate(args);
});
G__29571.cljs$core$IFn$_invoke$arity$variadic = G__29571__delegate;
return G__29571;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29574__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29575__i = 0, G__29575__a = new Array(arguments.length -  0);
while (G__29575__i < G__29575__a.length) {G__29575__a[G__29575__i] = arguments[G__29575__i + 0]; ++G__29575__i;}
  args = new cljs.core.IndexedSeq(G__29575__a,0);
} 
return G__29574__delegate.call(this,args);};
G__29574.cljs$lang$maxFixedArity = 0;
G__29574.cljs$lang$applyTo = (function (arglist__29576){
var args = cljs.core.seq(arglist__29576);
return G__29574__delegate(args);
});
G__29574.cljs$core$IFn$_invoke$arity$variadic = G__29574__delegate;
return G__29574;
})()
;

return null;
});
