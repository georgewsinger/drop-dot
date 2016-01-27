goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__333975__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__333975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__333976__i = 0, G__333976__a = new Array(arguments.length -  0);
while (G__333976__i < G__333976__a.length) {G__333976__a[G__333976__i] = arguments[G__333976__i + 0]; ++G__333976__i;}
  args = new cljs.core.IndexedSeq(G__333976__a,0);
} 
return G__333975__delegate.call(this,args);};
G__333975.cljs$lang$maxFixedArity = 0;
G__333975.cljs$lang$applyTo = (function (arglist__333977){
var args = cljs.core.seq(arglist__333977);
return G__333975__delegate(args);
});
G__333975.cljs$core$IFn$_invoke$arity$variadic = G__333975__delegate;
return G__333975;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__333978__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__333978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__333979__i = 0, G__333979__a = new Array(arguments.length -  0);
while (G__333979__i < G__333979__a.length) {G__333979__a[G__333979__i] = arguments[G__333979__i + 0]; ++G__333979__i;}
  args = new cljs.core.IndexedSeq(G__333979__a,0);
} 
return G__333978__delegate.call(this,args);};
G__333978.cljs$lang$maxFixedArity = 0;
G__333978.cljs$lang$applyTo = (function (arglist__333980){
var args = cljs.core.seq(arglist__333980);
return G__333978__delegate(args);
});
G__333978.cljs$core$IFn$_invoke$arity$variadic = G__333978__delegate;
return G__333978;
})()
;

return null;
});
