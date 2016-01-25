goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45603__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45604__i = 0, G__45604__a = new Array(arguments.length -  0);
while (G__45604__i < G__45604__a.length) {G__45604__a[G__45604__i] = arguments[G__45604__i + 0]; ++G__45604__i;}
  args = new cljs.core.IndexedSeq(G__45604__a,0);
} 
return G__45603__delegate.call(this,args);};
G__45603.cljs$lang$maxFixedArity = 0;
G__45603.cljs$lang$applyTo = (function (arglist__45605){
var args = cljs.core.seq(arglist__45605);
return G__45603__delegate(args);
});
G__45603.cljs$core$IFn$_invoke$arity$variadic = G__45603__delegate;
return G__45603;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45606__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45607__i = 0, G__45607__a = new Array(arguments.length -  0);
while (G__45607__i < G__45607__a.length) {G__45607__a[G__45607__i] = arguments[G__45607__i + 0]; ++G__45607__i;}
  args = new cljs.core.IndexedSeq(G__45607__a,0);
} 
return G__45606__delegate.call(this,args);};
G__45606.cljs$lang$maxFixedArity = 0;
G__45606.cljs$lang$applyTo = (function (arglist__45608){
var args = cljs.core.seq(arglist__45608);
return G__45606__delegate(args);
});
G__45606.cljs$core$IFn$_invoke$arity$variadic = G__45606__delegate;
return G__45606;
})()
;

return null;
});
