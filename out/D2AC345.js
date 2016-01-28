goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__373546__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__373546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__373547__i = 0, G__373547__a = new Array(arguments.length -  0);
while (G__373547__i < G__373547__a.length) {G__373547__a[G__373547__i] = arguments[G__373547__i + 0]; ++G__373547__i;}
  args = new cljs.core.IndexedSeq(G__373547__a,0);
} 
return G__373546__delegate.call(this,args);};
G__373546.cljs$lang$maxFixedArity = 0;
G__373546.cljs$lang$applyTo = (function (arglist__373548){
var args = cljs.core.seq(arglist__373548);
return G__373546__delegate(args);
});
G__373546.cljs$core$IFn$_invoke$arity$variadic = G__373546__delegate;
return G__373546;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__373549__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__373549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__373550__i = 0, G__373550__a = new Array(arguments.length -  0);
while (G__373550__i < G__373550__a.length) {G__373550__a[G__373550__i] = arguments[G__373550__i + 0]; ++G__373550__i;}
  args = new cljs.core.IndexedSeq(G__373550__a,0);
} 
return G__373549__delegate.call(this,args);};
G__373549.cljs$lang$maxFixedArity = 0;
G__373549.cljs$lang$applyTo = (function (arglist__373551){
var args = cljs.core.seq(arglist__373551);
return G__373549__delegate(args);
});
G__373549.cljs$core$IFn$_invoke$arity$variadic = G__373549__delegate;
return G__373549;
})()
;

return null;
});
