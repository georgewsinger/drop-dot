goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__322029__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__322029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__322030__i = 0, G__322030__a = new Array(arguments.length -  0);
while (G__322030__i < G__322030__a.length) {G__322030__a[G__322030__i] = arguments[G__322030__i + 0]; ++G__322030__i;}
  args = new cljs.core.IndexedSeq(G__322030__a,0);
} 
return G__322029__delegate.call(this,args);};
G__322029.cljs$lang$maxFixedArity = 0;
G__322029.cljs$lang$applyTo = (function (arglist__322031){
var args = cljs.core.seq(arglist__322031);
return G__322029__delegate(args);
});
G__322029.cljs$core$IFn$_invoke$arity$variadic = G__322029__delegate;
return G__322029;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__322032__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__322032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__322033__i = 0, G__322033__a = new Array(arguments.length -  0);
while (G__322033__i < G__322033__a.length) {G__322033__a[G__322033__i] = arguments[G__322033__i + 0]; ++G__322033__i;}
  args = new cljs.core.IndexedSeq(G__322033__a,0);
} 
return G__322032__delegate.call(this,args);};
G__322032.cljs$lang$maxFixedArity = 0;
G__322032.cljs$lang$applyTo = (function (arglist__322034){
var args = cljs.core.seq(arglist__322034);
return G__322032__delegate(args);
});
G__322032.cljs$core$IFn$_invoke$arity$variadic = G__322032__delegate;
return G__322032;
})()
;

return null;
});
