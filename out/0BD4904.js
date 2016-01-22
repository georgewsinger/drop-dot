goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37356__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37357__i = 0, G__37357__a = new Array(arguments.length -  0);
while (G__37357__i < G__37357__a.length) {G__37357__a[G__37357__i] = arguments[G__37357__i + 0]; ++G__37357__i;}
  args = new cljs.core.IndexedSeq(G__37357__a,0);
} 
return G__37356__delegate.call(this,args);};
G__37356.cljs$lang$maxFixedArity = 0;
G__37356.cljs$lang$applyTo = (function (arglist__37358){
var args = cljs.core.seq(arglist__37358);
return G__37356__delegate(args);
});
G__37356.cljs$core$IFn$_invoke$arity$variadic = G__37356__delegate;
return G__37356;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37359__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37360__i = 0, G__37360__a = new Array(arguments.length -  0);
while (G__37360__i < G__37360__a.length) {G__37360__a[G__37360__i] = arguments[G__37360__i + 0]; ++G__37360__i;}
  args = new cljs.core.IndexedSeq(G__37360__a,0);
} 
return G__37359__delegate.call(this,args);};
G__37359.cljs$lang$maxFixedArity = 0;
G__37359.cljs$lang$applyTo = (function (arglist__37361){
var args = cljs.core.seq(arglist__37361);
return G__37359__delegate(args);
});
G__37359.cljs$core$IFn$_invoke$arity$variadic = G__37359__delegate;
return G__37359;
})()
;

return null;
});
