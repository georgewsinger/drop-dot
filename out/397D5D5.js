goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__259097__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__259097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259098__i = 0, G__259098__a = new Array(arguments.length -  0);
while (G__259098__i < G__259098__a.length) {G__259098__a[G__259098__i] = arguments[G__259098__i + 0]; ++G__259098__i;}
  args = new cljs.core.IndexedSeq(G__259098__a,0);
} 
return G__259097__delegate.call(this,args);};
G__259097.cljs$lang$maxFixedArity = 0;
G__259097.cljs$lang$applyTo = (function (arglist__259099){
var args = cljs.core.seq(arglist__259099);
return G__259097__delegate(args);
});
G__259097.cljs$core$IFn$_invoke$arity$variadic = G__259097__delegate;
return G__259097;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__259100__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__259100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259101__i = 0, G__259101__a = new Array(arguments.length -  0);
while (G__259101__i < G__259101__a.length) {G__259101__a[G__259101__i] = arguments[G__259101__i + 0]; ++G__259101__i;}
  args = new cljs.core.IndexedSeq(G__259101__a,0);
} 
return G__259100__delegate.call(this,args);};
G__259100.cljs$lang$maxFixedArity = 0;
G__259100.cljs$lang$applyTo = (function (arglist__259102){
var args = cljs.core.seq(arglist__259102);
return G__259100__delegate(args);
});
G__259100.cljs$core$IFn$_invoke$arity$variadic = G__259100__delegate;
return G__259100;
})()
;

return null;
});
