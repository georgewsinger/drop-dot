goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__346194__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__346194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346195__i = 0, G__346195__a = new Array(arguments.length -  0);
while (G__346195__i < G__346195__a.length) {G__346195__a[G__346195__i] = arguments[G__346195__i + 0]; ++G__346195__i;}
  args = new cljs.core.IndexedSeq(G__346195__a,0);
} 
return G__346194__delegate.call(this,args);};
G__346194.cljs$lang$maxFixedArity = 0;
G__346194.cljs$lang$applyTo = (function (arglist__346196){
var args = cljs.core.seq(arglist__346196);
return G__346194__delegate(args);
});
G__346194.cljs$core$IFn$_invoke$arity$variadic = G__346194__delegate;
return G__346194;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__346197__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__346197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346198__i = 0, G__346198__a = new Array(arguments.length -  0);
while (G__346198__i < G__346198__a.length) {G__346198__a[G__346198__i] = arguments[G__346198__i + 0]; ++G__346198__i;}
  args = new cljs.core.IndexedSeq(G__346198__a,0);
} 
return G__346197__delegate.call(this,args);};
G__346197.cljs$lang$maxFixedArity = 0;
G__346197.cljs$lang$applyTo = (function (arglist__346199){
var args = cljs.core.seq(arglist__346199);
return G__346197__delegate(args);
});
G__346197.cljs$core$IFn$_invoke$arity$variadic = G__346197__delegate;
return G__346197;
})()
;

return null;
});
