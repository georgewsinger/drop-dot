goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__298362__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__298362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__298363__i = 0, G__298363__a = new Array(arguments.length -  0);
while (G__298363__i < G__298363__a.length) {G__298363__a[G__298363__i] = arguments[G__298363__i + 0]; ++G__298363__i;}
  args = new cljs.core.IndexedSeq(G__298363__a,0);
} 
return G__298362__delegate.call(this,args);};
G__298362.cljs$lang$maxFixedArity = 0;
G__298362.cljs$lang$applyTo = (function (arglist__298364){
var args = cljs.core.seq(arglist__298364);
return G__298362__delegate(args);
});
G__298362.cljs$core$IFn$_invoke$arity$variadic = G__298362__delegate;
return G__298362;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__298365__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__298365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__298366__i = 0, G__298366__a = new Array(arguments.length -  0);
while (G__298366__i < G__298366__a.length) {G__298366__a[G__298366__i] = arguments[G__298366__i + 0]; ++G__298366__i;}
  args = new cljs.core.IndexedSeq(G__298366__a,0);
} 
return G__298365__delegate.call(this,args);};
G__298365.cljs$lang$maxFixedArity = 0;
G__298365.cljs$lang$applyTo = (function (arglist__298367){
var args = cljs.core.seq(arglist__298367);
return G__298365__delegate(args);
});
G__298365.cljs$core$IFn$_invoke$arity$variadic = G__298365__delegate;
return G__298365;
})()
;

return null;
});
