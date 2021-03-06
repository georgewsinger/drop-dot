goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__355678__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__355678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__355679__i = 0, G__355679__a = new Array(arguments.length -  0);
while (G__355679__i < G__355679__a.length) {G__355679__a[G__355679__i] = arguments[G__355679__i + 0]; ++G__355679__i;}
  args = new cljs.core.IndexedSeq(G__355679__a,0);
} 
return G__355678__delegate.call(this,args);};
G__355678.cljs$lang$maxFixedArity = 0;
G__355678.cljs$lang$applyTo = (function (arglist__355680){
var args = cljs.core.seq(arglist__355680);
return G__355678__delegate(args);
});
G__355678.cljs$core$IFn$_invoke$arity$variadic = G__355678__delegate;
return G__355678;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__355681__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__355681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__355682__i = 0, G__355682__a = new Array(arguments.length -  0);
while (G__355682__i < G__355682__a.length) {G__355682__a[G__355682__i] = arguments[G__355682__i + 0]; ++G__355682__i;}
  args = new cljs.core.IndexedSeq(G__355682__a,0);
} 
return G__355681__delegate.call(this,args);};
G__355681.cljs$lang$maxFixedArity = 0;
G__355681.cljs$lang$applyTo = (function (arglist__355683){
var args = cljs.core.seq(arglist__355683);
return G__355681__delegate(args);
});
G__355681.cljs$core$IFn$_invoke$arity$variadic = G__355681__delegate;
return G__355681;
})()
;

return null;
});
