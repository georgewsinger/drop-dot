goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17357__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17358__i = 0, G__17358__a = new Array(arguments.length -  0);
while (G__17358__i < G__17358__a.length) {G__17358__a[G__17358__i] = arguments[G__17358__i + 0]; ++G__17358__i;}
  args = new cljs.core.IndexedSeq(G__17358__a,0);
} 
return G__17357__delegate.call(this,args);};
G__17357.cljs$lang$maxFixedArity = 0;
G__17357.cljs$lang$applyTo = (function (arglist__17359){
var args = cljs.core.seq(arglist__17359);
return G__17357__delegate(args);
});
G__17357.cljs$core$IFn$_invoke$arity$variadic = G__17357__delegate;
return G__17357;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17360__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17361__i = 0, G__17361__a = new Array(arguments.length -  0);
while (G__17361__i < G__17361__a.length) {G__17361__a[G__17361__i] = arguments[G__17361__i + 0]; ++G__17361__i;}
  args = new cljs.core.IndexedSeq(G__17361__a,0);
} 
return G__17360__delegate.call(this,args);};
G__17360.cljs$lang$maxFixedArity = 0;
G__17360.cljs$lang$applyTo = (function (arglist__17362){
var args = cljs.core.seq(arglist__17362);
return G__17360__delegate(args);
});
G__17360.cljs$core$IFn$_invoke$arity$variadic = G__17360__delegate;
return G__17360;
})()
;

return null;
});
