goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43362__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43363__i = 0, G__43363__a = new Array(arguments.length -  0);
while (G__43363__i < G__43363__a.length) {G__43363__a[G__43363__i] = arguments[G__43363__i + 0]; ++G__43363__i;}
  args = new cljs.core.IndexedSeq(G__43363__a,0);
} 
return G__43362__delegate.call(this,args);};
G__43362.cljs$lang$maxFixedArity = 0;
G__43362.cljs$lang$applyTo = (function (arglist__43364){
var args = cljs.core.seq(arglist__43364);
return G__43362__delegate(args);
});
G__43362.cljs$core$IFn$_invoke$arity$variadic = G__43362__delegate;
return G__43362;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43365__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43366__i = 0, G__43366__a = new Array(arguments.length -  0);
while (G__43366__i < G__43366__a.length) {G__43366__a[G__43366__i] = arguments[G__43366__i + 0]; ++G__43366__i;}
  args = new cljs.core.IndexedSeq(G__43366__a,0);
} 
return G__43365__delegate.call(this,args);};
G__43365.cljs$lang$maxFixedArity = 0;
G__43365.cljs$lang$applyTo = (function (arglist__43367){
var args = cljs.core.seq(arglist__43367);
return G__43365__delegate(args);
});
G__43365.cljs$core$IFn$_invoke$arity$variadic = G__43365__delegate;
return G__43365;
})()
;

return null;
});
