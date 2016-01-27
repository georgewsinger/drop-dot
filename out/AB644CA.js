goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__364128__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__364128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__364129__i = 0, G__364129__a = new Array(arguments.length -  0);
while (G__364129__i < G__364129__a.length) {G__364129__a[G__364129__i] = arguments[G__364129__i + 0]; ++G__364129__i;}
  args = new cljs.core.IndexedSeq(G__364129__a,0);
} 
return G__364128__delegate.call(this,args);};
G__364128.cljs$lang$maxFixedArity = 0;
G__364128.cljs$lang$applyTo = (function (arglist__364130){
var args = cljs.core.seq(arglist__364130);
return G__364128__delegate(args);
});
G__364128.cljs$core$IFn$_invoke$arity$variadic = G__364128__delegate;
return G__364128;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__364131__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__364131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__364132__i = 0, G__364132__a = new Array(arguments.length -  0);
while (G__364132__i < G__364132__a.length) {G__364132__a[G__364132__i] = arguments[G__364132__i + 0]; ++G__364132__i;}
  args = new cljs.core.IndexedSeq(G__364132__a,0);
} 
return G__364131__delegate.call(this,args);};
G__364131.cljs$lang$maxFixedArity = 0;
G__364131.cljs$lang$applyTo = (function (arglist__364133){
var args = cljs.core.seq(arglist__364133);
return G__364131__delegate(args);
});
G__364131.cljs$core$IFn$_invoke$arity$variadic = G__364131__delegate;
return G__364131;
})()
;

return null;
});
