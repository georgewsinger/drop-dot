goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14594__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14595__i = 0, G__14595__a = new Array(arguments.length -  0);
while (G__14595__i < G__14595__a.length) {G__14595__a[G__14595__i] = arguments[G__14595__i + 0]; ++G__14595__i;}
  args = new cljs.core.IndexedSeq(G__14595__a,0);
} 
return G__14594__delegate.call(this,args);};
G__14594.cljs$lang$maxFixedArity = 0;
G__14594.cljs$lang$applyTo = (function (arglist__14596){
var args = cljs.core.seq(arglist__14596);
return G__14594__delegate(args);
});
G__14594.cljs$core$IFn$_invoke$arity$variadic = G__14594__delegate;
return G__14594;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14597__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14598__i = 0, G__14598__a = new Array(arguments.length -  0);
while (G__14598__i < G__14598__a.length) {G__14598__a[G__14598__i] = arguments[G__14598__i + 0]; ++G__14598__i;}
  args = new cljs.core.IndexedSeq(G__14598__a,0);
} 
return G__14597__delegate.call(this,args);};
G__14597.cljs$lang$maxFixedArity = 0;
G__14597.cljs$lang$applyTo = (function (arglist__14599){
var args = cljs.core.seq(arglist__14599);
return G__14597__delegate(args);
});
G__14597.cljs$core$IFn$_invoke$arity$variadic = G__14597__delegate;
return G__14597;
})()
;

return null;
});
