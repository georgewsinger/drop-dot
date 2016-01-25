goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36359__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36360__i = 0, G__36360__a = new Array(arguments.length -  0);
while (G__36360__i < G__36360__a.length) {G__36360__a[G__36360__i] = arguments[G__36360__i + 0]; ++G__36360__i;}
  args = new cljs.core.IndexedSeq(G__36360__a,0);
} 
return G__36359__delegate.call(this,args);};
G__36359.cljs$lang$maxFixedArity = 0;
G__36359.cljs$lang$applyTo = (function (arglist__36361){
var args = cljs.core.seq(arglist__36361);
return G__36359__delegate(args);
});
G__36359.cljs$core$IFn$_invoke$arity$variadic = G__36359__delegate;
return G__36359;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36362__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36363__i = 0, G__36363__a = new Array(arguments.length -  0);
while (G__36363__i < G__36363__a.length) {G__36363__a[G__36363__i] = arguments[G__36363__i + 0]; ++G__36363__i;}
  args = new cljs.core.IndexedSeq(G__36363__a,0);
} 
return G__36362__delegate.call(this,args);};
G__36362.cljs$lang$maxFixedArity = 0;
G__36362.cljs$lang$applyTo = (function (arglist__36364){
var args = cljs.core.seq(arglist__36364);
return G__36362__delegate(args);
});
G__36362.cljs$core$IFn$_invoke$arity$variadic = G__36362__delegate;
return G__36362;
})()
;

return null;
});
