goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43699__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43700__i = 0, G__43700__a = new Array(arguments.length -  0);
while (G__43700__i < G__43700__a.length) {G__43700__a[G__43700__i] = arguments[G__43700__i + 0]; ++G__43700__i;}
  args = new cljs.core.IndexedSeq(G__43700__a,0);
} 
return G__43699__delegate.call(this,args);};
G__43699.cljs$lang$maxFixedArity = 0;
G__43699.cljs$lang$applyTo = (function (arglist__43701){
var args = cljs.core.seq(arglist__43701);
return G__43699__delegate(args);
});
G__43699.cljs$core$IFn$_invoke$arity$variadic = G__43699__delegate;
return G__43699;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43702__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43703__i = 0, G__43703__a = new Array(arguments.length -  0);
while (G__43703__i < G__43703__a.length) {G__43703__a[G__43703__i] = arguments[G__43703__i + 0]; ++G__43703__i;}
  args = new cljs.core.IndexedSeq(G__43703__a,0);
} 
return G__43702__delegate.call(this,args);};
G__43702.cljs$lang$maxFixedArity = 0;
G__43702.cljs$lang$applyTo = (function (arglist__43704){
var args = cljs.core.seq(arglist__43704);
return G__43702__delegate(args);
});
G__43702.cljs$core$IFn$_invoke$arity$variadic = G__43702__delegate;
return G__43702;
})()
;

return null;
});
