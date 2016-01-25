goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__166725__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__166725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166726__i = 0, G__166726__a = new Array(arguments.length -  0);
while (G__166726__i < G__166726__a.length) {G__166726__a[G__166726__i] = arguments[G__166726__i + 0]; ++G__166726__i;}
  args = new cljs.core.IndexedSeq(G__166726__a,0);
} 
return G__166725__delegate.call(this,args);};
G__166725.cljs$lang$maxFixedArity = 0;
G__166725.cljs$lang$applyTo = (function (arglist__166727){
var args = cljs.core.seq(arglist__166727);
return G__166725__delegate(args);
});
G__166725.cljs$core$IFn$_invoke$arity$variadic = G__166725__delegate;
return G__166725;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__166728__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__166728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166729__i = 0, G__166729__a = new Array(arguments.length -  0);
while (G__166729__i < G__166729__a.length) {G__166729__a[G__166729__i] = arguments[G__166729__i + 0]; ++G__166729__i;}
  args = new cljs.core.IndexedSeq(G__166729__a,0);
} 
return G__166728__delegate.call(this,args);};
G__166728.cljs$lang$maxFixedArity = 0;
G__166728.cljs$lang$applyTo = (function (arglist__166730){
var args = cljs.core.seq(arglist__166730);
return G__166728__delegate(args);
});
G__166728.cljs$core$IFn$_invoke$arity$variadic = G__166728__delegate;
return G__166728;
})()
;

return null;
});
