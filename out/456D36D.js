goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11359__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11360__i = 0, G__11360__a = new Array(arguments.length -  0);
while (G__11360__i < G__11360__a.length) {G__11360__a[G__11360__i] = arguments[G__11360__i + 0]; ++G__11360__i;}
  args = new cljs.core.IndexedSeq(G__11360__a,0);
} 
return G__11359__delegate.call(this,args);};
G__11359.cljs$lang$maxFixedArity = 0;
G__11359.cljs$lang$applyTo = (function (arglist__11361){
var args = cljs.core.seq(arglist__11361);
return G__11359__delegate(args);
});
G__11359.cljs$core$IFn$_invoke$arity$variadic = G__11359__delegate;
return G__11359;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11362__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11363__i = 0, G__11363__a = new Array(arguments.length -  0);
while (G__11363__i < G__11363__a.length) {G__11363__a[G__11363__i] = arguments[G__11363__i + 0]; ++G__11363__i;}
  args = new cljs.core.IndexedSeq(G__11363__a,0);
} 
return G__11362__delegate.call(this,args);};
G__11362.cljs$lang$maxFixedArity = 0;
G__11362.cljs$lang$applyTo = (function (arglist__11364){
var args = cljs.core.seq(arglist__11364);
return G__11362__delegate(args);
});
G__11362.cljs$core$IFn$_invoke$arity$variadic = G__11362__delegate;
return G__11362;
})()
;

return null;
});
