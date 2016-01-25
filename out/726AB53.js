goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__184755__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__184755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184756__i = 0, G__184756__a = new Array(arguments.length -  0);
while (G__184756__i < G__184756__a.length) {G__184756__a[G__184756__i] = arguments[G__184756__i + 0]; ++G__184756__i;}
  args = new cljs.core.IndexedSeq(G__184756__a,0);
} 
return G__184755__delegate.call(this,args);};
G__184755.cljs$lang$maxFixedArity = 0;
G__184755.cljs$lang$applyTo = (function (arglist__184757){
var args = cljs.core.seq(arglist__184757);
return G__184755__delegate(args);
});
G__184755.cljs$core$IFn$_invoke$arity$variadic = G__184755__delegate;
return G__184755;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__184758__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__184758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184759__i = 0, G__184759__a = new Array(arguments.length -  0);
while (G__184759__i < G__184759__a.length) {G__184759__a[G__184759__i] = arguments[G__184759__i + 0]; ++G__184759__i;}
  args = new cljs.core.IndexedSeq(G__184759__a,0);
} 
return G__184758__delegate.call(this,args);};
G__184758.cljs$lang$maxFixedArity = 0;
G__184758.cljs$lang$applyTo = (function (arglist__184760){
var args = cljs.core.seq(arglist__184760);
return G__184758__delegate(args);
});
G__184758.cljs$core$IFn$_invoke$arity$variadic = G__184758__delegate;
return G__184758;
})()
;

return null;
});
