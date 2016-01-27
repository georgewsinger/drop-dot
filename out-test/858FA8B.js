goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__130368__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__130368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__130369__i = 0, G__130369__a = new Array(arguments.length -  0);
while (G__130369__i < G__130369__a.length) {G__130369__a[G__130369__i] = arguments[G__130369__i + 0]; ++G__130369__i;}
  args = new cljs.core.IndexedSeq(G__130369__a,0);
} 
return G__130368__delegate.call(this,args);};
G__130368.cljs$lang$maxFixedArity = 0;
G__130368.cljs$lang$applyTo = (function (arglist__130370){
var args = cljs.core.seq(arglist__130370);
return G__130368__delegate(args);
});
G__130368.cljs$core$IFn$_invoke$arity$variadic = G__130368__delegate;
return G__130368;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__130371__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__130371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__130372__i = 0, G__130372__a = new Array(arguments.length -  0);
while (G__130372__i < G__130372__a.length) {G__130372__a[G__130372__i] = arguments[G__130372__i + 0]; ++G__130372__i;}
  args = new cljs.core.IndexedSeq(G__130372__a,0);
} 
return G__130371__delegate.call(this,args);};
G__130371.cljs$lang$maxFixedArity = 0;
G__130371.cljs$lang$applyTo = (function (arglist__130373){
var args = cljs.core.seq(arglist__130373);
return G__130371__delegate(args);
});
G__130371.cljs$core$IFn$_invoke$arity$variadic = G__130371__delegate;
return G__130371;
})()
;

return null;
});
