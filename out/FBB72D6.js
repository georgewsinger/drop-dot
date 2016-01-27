goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__342097__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__342097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__342098__i = 0, G__342098__a = new Array(arguments.length -  0);
while (G__342098__i < G__342098__a.length) {G__342098__a[G__342098__i] = arguments[G__342098__i + 0]; ++G__342098__i;}
  args = new cljs.core.IndexedSeq(G__342098__a,0);
} 
return G__342097__delegate.call(this,args);};
G__342097.cljs$lang$maxFixedArity = 0;
G__342097.cljs$lang$applyTo = (function (arglist__342099){
var args = cljs.core.seq(arglist__342099);
return G__342097__delegate(args);
});
G__342097.cljs$core$IFn$_invoke$arity$variadic = G__342097__delegate;
return G__342097;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__342100__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__342100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__342101__i = 0, G__342101__a = new Array(arguments.length -  0);
while (G__342101__i < G__342101__a.length) {G__342101__a[G__342101__i] = arguments[G__342101__i + 0]; ++G__342101__i;}
  args = new cljs.core.IndexedSeq(G__342101__a,0);
} 
return G__342100__delegate.call(this,args);};
G__342100.cljs$lang$maxFixedArity = 0;
G__342100.cljs$lang$applyTo = (function (arglist__342102){
var args = cljs.core.seq(arglist__342102);
return G__342100__delegate(args);
});
G__342100.cljs$core$IFn$_invoke$arity$variadic = G__342100__delegate;
return G__342100;
})()
;

return null;
});
