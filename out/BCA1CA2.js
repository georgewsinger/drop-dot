goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24995__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24996__i = 0, G__24996__a = new Array(arguments.length -  0);
while (G__24996__i < G__24996__a.length) {G__24996__a[G__24996__i] = arguments[G__24996__i + 0]; ++G__24996__i;}
  args = new cljs.core.IndexedSeq(G__24996__a,0);
} 
return G__24995__delegate.call(this,args);};
G__24995.cljs$lang$maxFixedArity = 0;
G__24995.cljs$lang$applyTo = (function (arglist__24997){
var args = cljs.core.seq(arglist__24997);
return G__24995__delegate(args);
});
G__24995.cljs$core$IFn$_invoke$arity$variadic = G__24995__delegate;
return G__24995;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24998__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24999__i = 0, G__24999__a = new Array(arguments.length -  0);
while (G__24999__i < G__24999__a.length) {G__24999__a[G__24999__i] = arguments[G__24999__i + 0]; ++G__24999__i;}
  args = new cljs.core.IndexedSeq(G__24999__a,0);
} 
return G__24998__delegate.call(this,args);};
G__24998.cljs$lang$maxFixedArity = 0;
G__24998.cljs$lang$applyTo = (function (arglist__25000){
var args = cljs.core.seq(arglist__25000);
return G__24998__delegate(args);
});
G__24998.cljs$core$IFn$_invoke$arity$variadic = G__24998__delegate;
return G__24998;
})()
;

return null;
});
