goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__266800__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__266800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266801__i = 0, G__266801__a = new Array(arguments.length -  0);
while (G__266801__i < G__266801__a.length) {G__266801__a[G__266801__i] = arguments[G__266801__i + 0]; ++G__266801__i;}
  args = new cljs.core.IndexedSeq(G__266801__a,0);
} 
return G__266800__delegate.call(this,args);};
G__266800.cljs$lang$maxFixedArity = 0;
G__266800.cljs$lang$applyTo = (function (arglist__266802){
var args = cljs.core.seq(arglist__266802);
return G__266800__delegate(args);
});
G__266800.cljs$core$IFn$_invoke$arity$variadic = G__266800__delegate;
return G__266800;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__266803__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__266803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266804__i = 0, G__266804__a = new Array(arguments.length -  0);
while (G__266804__i < G__266804__a.length) {G__266804__a[G__266804__i] = arguments[G__266804__i + 0]; ++G__266804__i;}
  args = new cljs.core.IndexedSeq(G__266804__a,0);
} 
return G__266803__delegate.call(this,args);};
G__266803.cljs$lang$maxFixedArity = 0;
G__266803.cljs$lang$applyTo = (function (arglist__266805){
var args = cljs.core.seq(arglist__266805);
return G__266803__delegate(args);
});
G__266803.cljs$core$IFn$_invoke$arity$variadic = G__266803__delegate;
return G__266803;
})()
;

return null;
});
