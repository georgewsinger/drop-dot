goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28379__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28380__i = 0, G__28380__a = new Array(arguments.length -  0);
while (G__28380__i < G__28380__a.length) {G__28380__a[G__28380__i] = arguments[G__28380__i + 0]; ++G__28380__i;}
  args = new cljs.core.IndexedSeq(G__28380__a,0);
} 
return G__28379__delegate.call(this,args);};
G__28379.cljs$lang$maxFixedArity = 0;
G__28379.cljs$lang$applyTo = (function (arglist__28381){
var args = cljs.core.seq(arglist__28381);
return G__28379__delegate(args);
});
G__28379.cljs$core$IFn$_invoke$arity$variadic = G__28379__delegate;
return G__28379;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28382__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28383__i = 0, G__28383__a = new Array(arguments.length -  0);
while (G__28383__i < G__28383__a.length) {G__28383__a[G__28383__i] = arguments[G__28383__i + 0]; ++G__28383__i;}
  args = new cljs.core.IndexedSeq(G__28383__a,0);
} 
return G__28382__delegate.call(this,args);};
G__28382.cljs$lang$maxFixedArity = 0;
G__28382.cljs$lang$applyTo = (function (arglist__28384){
var args = cljs.core.seq(arglist__28384);
return G__28382__delegate(args);
});
G__28382.cljs$core$IFn$_invoke$arity$variadic = G__28382__delegate;
return G__28382;
})()
;

return null;
});
