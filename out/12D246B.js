goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__212711__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__212711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__212712__i = 0, G__212712__a = new Array(arguments.length -  0);
while (G__212712__i < G__212712__a.length) {G__212712__a[G__212712__i] = arguments[G__212712__i + 0]; ++G__212712__i;}
  args = new cljs.core.IndexedSeq(G__212712__a,0);
} 
return G__212711__delegate.call(this,args);};
G__212711.cljs$lang$maxFixedArity = 0;
G__212711.cljs$lang$applyTo = (function (arglist__212713){
var args = cljs.core.seq(arglist__212713);
return G__212711__delegate(args);
});
G__212711.cljs$core$IFn$_invoke$arity$variadic = G__212711__delegate;
return G__212711;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__212714__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__212714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__212715__i = 0, G__212715__a = new Array(arguments.length -  0);
while (G__212715__i < G__212715__a.length) {G__212715__a[G__212715__i] = arguments[G__212715__i + 0]; ++G__212715__i;}
  args = new cljs.core.IndexedSeq(G__212715__a,0);
} 
return G__212714__delegate.call(this,args);};
G__212714.cljs$lang$maxFixedArity = 0;
G__212714.cljs$lang$applyTo = (function (arglist__212716){
var args = cljs.core.seq(arglist__212716);
return G__212714__delegate(args);
});
G__212714.cljs$core$IFn$_invoke$arity$variadic = G__212714__delegate;
return G__212714;
})()
;

return null;
});
