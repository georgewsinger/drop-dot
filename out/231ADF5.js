goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66218__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66219__i = 0, G__66219__a = new Array(arguments.length -  0);
while (G__66219__i < G__66219__a.length) {G__66219__a[G__66219__i] = arguments[G__66219__i + 0]; ++G__66219__i;}
  args = new cljs.core.IndexedSeq(G__66219__a,0);
} 
return G__66218__delegate.call(this,args);};
G__66218.cljs$lang$maxFixedArity = 0;
G__66218.cljs$lang$applyTo = (function (arglist__66220){
var args = cljs.core.seq(arglist__66220);
return G__66218__delegate(args);
});
G__66218.cljs$core$IFn$_invoke$arity$variadic = G__66218__delegate;
return G__66218;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66221__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66222__i = 0, G__66222__a = new Array(arguments.length -  0);
while (G__66222__i < G__66222__a.length) {G__66222__a[G__66222__i] = arguments[G__66222__i + 0]; ++G__66222__i;}
  args = new cljs.core.IndexedSeq(G__66222__a,0);
} 
return G__66221__delegate.call(this,args);};
G__66221.cljs$lang$maxFixedArity = 0;
G__66221.cljs$lang$applyTo = (function (arglist__66223){
var args = cljs.core.seq(arglist__66223);
return G__66221__delegate(args);
});
G__66221.cljs$core$IFn$_invoke$arity$variadic = G__66221__delegate;
return G__66221;
})()
;

return null;
});
