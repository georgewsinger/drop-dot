goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40386__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40387__i = 0, G__40387__a = new Array(arguments.length -  0);
while (G__40387__i < G__40387__a.length) {G__40387__a[G__40387__i] = arguments[G__40387__i + 0]; ++G__40387__i;}
  args = new cljs.core.IndexedSeq(G__40387__a,0);
} 
return G__40386__delegate.call(this,args);};
G__40386.cljs$lang$maxFixedArity = 0;
G__40386.cljs$lang$applyTo = (function (arglist__40388){
var args = cljs.core.seq(arglist__40388);
return G__40386__delegate(args);
});
G__40386.cljs$core$IFn$_invoke$arity$variadic = G__40386__delegate;
return G__40386;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40389__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40390__i = 0, G__40390__a = new Array(arguments.length -  0);
while (G__40390__i < G__40390__a.length) {G__40390__a[G__40390__i] = arguments[G__40390__i + 0]; ++G__40390__i;}
  args = new cljs.core.IndexedSeq(G__40390__a,0);
} 
return G__40389__delegate.call(this,args);};
G__40389.cljs$lang$maxFixedArity = 0;
G__40389.cljs$lang$applyTo = (function (arglist__40391){
var args = cljs.core.seq(arglist__40391);
return G__40389__delegate(args);
});
G__40389.cljs$core$IFn$_invoke$arity$variadic = G__40389__delegate;
return G__40389;
})()
;

return null;
});
