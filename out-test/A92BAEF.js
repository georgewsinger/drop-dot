goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21485__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21486__i = 0, G__21486__a = new Array(arguments.length -  0);
while (G__21486__i < G__21486__a.length) {G__21486__a[G__21486__i] = arguments[G__21486__i + 0]; ++G__21486__i;}
  args = new cljs.core.IndexedSeq(G__21486__a,0);
} 
return G__21485__delegate.call(this,args);};
G__21485.cljs$lang$maxFixedArity = 0;
G__21485.cljs$lang$applyTo = (function (arglist__21487){
var args = cljs.core.seq(arglist__21487);
return G__21485__delegate(args);
});
G__21485.cljs$core$IFn$_invoke$arity$variadic = G__21485__delegate;
return G__21485;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21488__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21489__i = 0, G__21489__a = new Array(arguments.length -  0);
while (G__21489__i < G__21489__a.length) {G__21489__a[G__21489__i] = arguments[G__21489__i + 0]; ++G__21489__i;}
  args = new cljs.core.IndexedSeq(G__21489__a,0);
} 
return G__21488__delegate.call(this,args);};
G__21488.cljs$lang$maxFixedArity = 0;
G__21488.cljs$lang$applyTo = (function (arglist__21490){
var args = cljs.core.seq(arglist__21490);
return G__21488__delegate(args);
});
G__21488.cljs$core$IFn$_invoke$arity$variadic = G__21488__delegate;
return G__21488;
})()
;

return null;
});
