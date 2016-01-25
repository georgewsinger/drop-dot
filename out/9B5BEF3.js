goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8265__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8266__i = 0, G__8266__a = new Array(arguments.length -  0);
while (G__8266__i < G__8266__a.length) {G__8266__a[G__8266__i] = arguments[G__8266__i + 0]; ++G__8266__i;}
  args = new cljs.core.IndexedSeq(G__8266__a,0);
} 
return G__8265__delegate.call(this,args);};
G__8265.cljs$lang$maxFixedArity = 0;
G__8265.cljs$lang$applyTo = (function (arglist__8267){
var args = cljs.core.seq(arglist__8267);
return G__8265__delegate(args);
});
G__8265.cljs$core$IFn$_invoke$arity$variadic = G__8265__delegate;
return G__8265;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8268__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8269__i = 0, G__8269__a = new Array(arguments.length -  0);
while (G__8269__i < G__8269__a.length) {G__8269__a[G__8269__i] = arguments[G__8269__i + 0]; ++G__8269__i;}
  args = new cljs.core.IndexedSeq(G__8269__a,0);
} 
return G__8268__delegate.call(this,args);};
G__8268.cljs$lang$maxFixedArity = 0;
G__8268.cljs$lang$applyTo = (function (arglist__8270){
var args = cljs.core.seq(arglist__8270);
return G__8268__delegate(args);
});
G__8268.cljs$core$IFn$_invoke$arity$variadic = G__8268__delegate;
return G__8268;
})()
;

return null;
});
