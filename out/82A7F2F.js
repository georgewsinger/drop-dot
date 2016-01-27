goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30935__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30936__i = 0, G__30936__a = new Array(arguments.length -  0);
while (G__30936__i < G__30936__a.length) {G__30936__a[G__30936__i] = arguments[G__30936__i + 0]; ++G__30936__i;}
  args = new cljs.core.IndexedSeq(G__30936__a,0);
} 
return G__30935__delegate.call(this,args);};
G__30935.cljs$lang$maxFixedArity = 0;
G__30935.cljs$lang$applyTo = (function (arglist__30937){
var args = cljs.core.seq(arglist__30937);
return G__30935__delegate(args);
});
G__30935.cljs$core$IFn$_invoke$arity$variadic = G__30935__delegate;
return G__30935;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30938__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30939__i = 0, G__30939__a = new Array(arguments.length -  0);
while (G__30939__i < G__30939__a.length) {G__30939__a[G__30939__i] = arguments[G__30939__i + 0]; ++G__30939__i;}
  args = new cljs.core.IndexedSeq(G__30939__a,0);
} 
return G__30938__delegate.call(this,args);};
G__30938.cljs$lang$maxFixedArity = 0;
G__30938.cljs$lang$applyTo = (function (arglist__30940){
var args = cljs.core.seq(arglist__30940);
return G__30938__delegate(args);
});
G__30938.cljs$core$IFn$_invoke$arity$variadic = G__30938__delegate;
return G__30938;
})()
;

return null;
});
