goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22722__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22723__i = 0, G__22723__a = new Array(arguments.length -  0);
while (G__22723__i < G__22723__a.length) {G__22723__a[G__22723__i] = arguments[G__22723__i + 0]; ++G__22723__i;}
  args = new cljs.core.IndexedSeq(G__22723__a,0);
} 
return G__22722__delegate.call(this,args);};
G__22722.cljs$lang$maxFixedArity = 0;
G__22722.cljs$lang$applyTo = (function (arglist__22724){
var args = cljs.core.seq(arglist__22724);
return G__22722__delegate(args);
});
G__22722.cljs$core$IFn$_invoke$arity$variadic = G__22722__delegate;
return G__22722;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22725__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22726__i = 0, G__22726__a = new Array(arguments.length -  0);
while (G__22726__i < G__22726__a.length) {G__22726__a[G__22726__i] = arguments[G__22726__i + 0]; ++G__22726__i;}
  args = new cljs.core.IndexedSeq(G__22726__a,0);
} 
return G__22725__delegate.call(this,args);};
G__22725.cljs$lang$maxFixedArity = 0;
G__22725.cljs$lang$applyTo = (function (arglist__22727){
var args = cljs.core.seq(arglist__22727);
return G__22725__delegate(args);
});
G__22725.cljs$core$IFn$_invoke$arity$variadic = G__22725__delegate;
return G__22725;
})()
;

return null;
});
