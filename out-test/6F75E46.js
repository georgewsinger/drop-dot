goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9718__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9719__i = 0, G__9719__a = new Array(arguments.length -  0);
while (G__9719__i < G__9719__a.length) {G__9719__a[G__9719__i] = arguments[G__9719__i + 0]; ++G__9719__i;}
  args = new cljs.core.IndexedSeq(G__9719__a,0);
} 
return G__9718__delegate.call(this,args);};
G__9718.cljs$lang$maxFixedArity = 0;
G__9718.cljs$lang$applyTo = (function (arglist__9720){
var args = cljs.core.seq(arglist__9720);
return G__9718__delegate(args);
});
G__9718.cljs$core$IFn$_invoke$arity$variadic = G__9718__delegate;
return G__9718;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9721__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9722__i = 0, G__9722__a = new Array(arguments.length -  0);
while (G__9722__i < G__9722__a.length) {G__9722__a[G__9722__i] = arguments[G__9722__i + 0]; ++G__9722__i;}
  args = new cljs.core.IndexedSeq(G__9722__a,0);
} 
return G__9721__delegate.call(this,args);};
G__9721.cljs$lang$maxFixedArity = 0;
G__9721.cljs$lang$applyTo = (function (arglist__9723){
var args = cljs.core.seq(arglist__9723);
return G__9721__delegate(args);
});
G__9721.cljs$core$IFn$_invoke$arity$variadic = G__9721__delegate;
return G__9721;
})()
;

return null;
});
