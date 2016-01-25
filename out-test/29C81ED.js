goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64128__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64129__i = 0, G__64129__a = new Array(arguments.length -  0);
while (G__64129__i < G__64129__a.length) {G__64129__a[G__64129__i] = arguments[G__64129__i + 0]; ++G__64129__i;}
  args = new cljs.core.IndexedSeq(G__64129__a,0);
} 
return G__64128__delegate.call(this,args);};
G__64128.cljs$lang$maxFixedArity = 0;
G__64128.cljs$lang$applyTo = (function (arglist__64130){
var args = cljs.core.seq(arglist__64130);
return G__64128__delegate(args);
});
G__64128.cljs$core$IFn$_invoke$arity$variadic = G__64128__delegate;
return G__64128;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64131__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64132__i = 0, G__64132__a = new Array(arguments.length -  0);
while (G__64132__i < G__64132__a.length) {G__64132__a[G__64132__i] = arguments[G__64132__i + 0]; ++G__64132__i;}
  args = new cljs.core.IndexedSeq(G__64132__a,0);
} 
return G__64131__delegate.call(this,args);};
G__64131.cljs$lang$maxFixedArity = 0;
G__64131.cljs$lang$applyTo = (function (arglist__64133){
var args = cljs.core.seq(arglist__64133);
return G__64131__delegate(args);
});
G__64131.cljs$core$IFn$_invoke$arity$variadic = G__64131__delegate;
return G__64131;
})()
;

return null;
});
