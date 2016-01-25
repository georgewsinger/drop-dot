goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27125__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27126__i = 0, G__27126__a = new Array(arguments.length -  0);
while (G__27126__i < G__27126__a.length) {G__27126__a[G__27126__i] = arguments[G__27126__i + 0]; ++G__27126__i;}
  args = new cljs.core.IndexedSeq(G__27126__a,0);
} 
return G__27125__delegate.call(this,args);};
G__27125.cljs$lang$maxFixedArity = 0;
G__27125.cljs$lang$applyTo = (function (arglist__27127){
var args = cljs.core.seq(arglist__27127);
return G__27125__delegate(args);
});
G__27125.cljs$core$IFn$_invoke$arity$variadic = G__27125__delegate;
return G__27125;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27128__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27129__i = 0, G__27129__a = new Array(arguments.length -  0);
while (G__27129__i < G__27129__a.length) {G__27129__a[G__27129__i] = arguments[G__27129__i + 0]; ++G__27129__i;}
  args = new cljs.core.IndexedSeq(G__27129__a,0);
} 
return G__27128__delegate.call(this,args);};
G__27128.cljs$lang$maxFixedArity = 0;
G__27128.cljs$lang$applyTo = (function (arglist__27130){
var args = cljs.core.seq(arglist__27130);
return G__27128__delegate(args);
});
G__27128.cljs$core$IFn$_invoke$arity$variadic = G__27128__delegate;
return G__27128;
})()
;

return null;
});
