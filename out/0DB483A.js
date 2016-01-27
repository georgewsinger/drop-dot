goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__339031__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__339031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__339032__i = 0, G__339032__a = new Array(arguments.length -  0);
while (G__339032__i < G__339032__a.length) {G__339032__a[G__339032__i] = arguments[G__339032__i + 0]; ++G__339032__i;}
  args = new cljs.core.IndexedSeq(G__339032__a,0);
} 
return G__339031__delegate.call(this,args);};
G__339031.cljs$lang$maxFixedArity = 0;
G__339031.cljs$lang$applyTo = (function (arglist__339033){
var args = cljs.core.seq(arglist__339033);
return G__339031__delegate(args);
});
G__339031.cljs$core$IFn$_invoke$arity$variadic = G__339031__delegate;
return G__339031;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__339034__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__339034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__339035__i = 0, G__339035__a = new Array(arguments.length -  0);
while (G__339035__i < G__339035__a.length) {G__339035__a[G__339035__i] = arguments[G__339035__i + 0]; ++G__339035__i;}
  args = new cljs.core.IndexedSeq(G__339035__a,0);
} 
return G__339034__delegate.call(this,args);};
G__339034.cljs$lang$maxFixedArity = 0;
G__339034.cljs$lang$applyTo = (function (arglist__339036){
var args = cljs.core.seq(arglist__339036);
return G__339034__delegate(args);
});
G__339034.cljs$core$IFn$_invoke$arity$variadic = G__339034__delegate;
return G__339034;
})()
;

return null;
});
