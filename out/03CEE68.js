goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33744__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33745__i = 0, G__33745__a = new Array(arguments.length -  0);
while (G__33745__i < G__33745__a.length) {G__33745__a[G__33745__i] = arguments[G__33745__i + 0]; ++G__33745__i;}
  args = new cljs.core.IndexedSeq(G__33745__a,0);
} 
return G__33744__delegate.call(this,args);};
G__33744.cljs$lang$maxFixedArity = 0;
G__33744.cljs$lang$applyTo = (function (arglist__33746){
var args = cljs.core.seq(arglist__33746);
return G__33744__delegate(args);
});
G__33744.cljs$core$IFn$_invoke$arity$variadic = G__33744__delegate;
return G__33744;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33747__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33748__i = 0, G__33748__a = new Array(arguments.length -  0);
while (G__33748__i < G__33748__a.length) {G__33748__a[G__33748__i] = arguments[G__33748__i + 0]; ++G__33748__i;}
  args = new cljs.core.IndexedSeq(G__33748__a,0);
} 
return G__33747__delegate.call(this,args);};
G__33747.cljs$lang$maxFixedArity = 0;
G__33747.cljs$lang$applyTo = (function (arglist__33749){
var args = cljs.core.seq(arglist__33749);
return G__33747__delegate(args);
});
G__33747.cljs$core$IFn$_invoke$arity$variadic = G__33747__delegate;
return G__33747;
})()
;

return null;
});
