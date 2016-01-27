goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__349374__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__349374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__349375__i = 0, G__349375__a = new Array(arguments.length -  0);
while (G__349375__i < G__349375__a.length) {G__349375__a[G__349375__i] = arguments[G__349375__i + 0]; ++G__349375__i;}
  args = new cljs.core.IndexedSeq(G__349375__a,0);
} 
return G__349374__delegate.call(this,args);};
G__349374.cljs$lang$maxFixedArity = 0;
G__349374.cljs$lang$applyTo = (function (arglist__349376){
var args = cljs.core.seq(arglist__349376);
return G__349374__delegate(args);
});
G__349374.cljs$core$IFn$_invoke$arity$variadic = G__349374__delegate;
return G__349374;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__349377__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__349377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__349378__i = 0, G__349378__a = new Array(arguments.length -  0);
while (G__349378__i < G__349378__a.length) {G__349378__a[G__349378__i] = arguments[G__349378__i + 0]; ++G__349378__i;}
  args = new cljs.core.IndexedSeq(G__349378__a,0);
} 
return G__349377__delegate.call(this,args);};
G__349377.cljs$lang$maxFixedArity = 0;
G__349377.cljs$lang$applyTo = (function (arglist__349379){
var args = cljs.core.seq(arglist__349379);
return G__349377__delegate(args);
});
G__349377.cljs$core$IFn$_invoke$arity$variadic = G__349377__delegate;
return G__349377;
})()
;

return null;
});
