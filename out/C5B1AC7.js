goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__260396__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__260396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__260397__i = 0, G__260397__a = new Array(arguments.length -  0);
while (G__260397__i < G__260397__a.length) {G__260397__a[G__260397__i] = arguments[G__260397__i + 0]; ++G__260397__i;}
  args = new cljs.core.IndexedSeq(G__260397__a,0);
} 
return G__260396__delegate.call(this,args);};
G__260396.cljs$lang$maxFixedArity = 0;
G__260396.cljs$lang$applyTo = (function (arglist__260398){
var args = cljs.core.seq(arglist__260398);
return G__260396__delegate(args);
});
G__260396.cljs$core$IFn$_invoke$arity$variadic = G__260396__delegate;
return G__260396;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__260399__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__260399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__260400__i = 0, G__260400__a = new Array(arguments.length -  0);
while (G__260400__i < G__260400__a.length) {G__260400__a[G__260400__i] = arguments[G__260400__i + 0]; ++G__260400__i;}
  args = new cljs.core.IndexedSeq(G__260400__a,0);
} 
return G__260399__delegate.call(this,args);};
G__260399.cljs$lang$maxFixedArity = 0;
G__260399.cljs$lang$applyTo = (function (arglist__260401){
var args = cljs.core.seq(arglist__260401);
return G__260399__delegate(args);
});
G__260399.cljs$core$IFn$_invoke$arity$variadic = G__260399__delegate;
return G__260399;
})()
;

return null;
});
