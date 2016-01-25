goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17368__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17369__i = 0, G__17369__a = new Array(arguments.length -  0);
while (G__17369__i < G__17369__a.length) {G__17369__a[G__17369__i] = arguments[G__17369__i + 0]; ++G__17369__i;}
  args = new cljs.core.IndexedSeq(G__17369__a,0);
} 
return G__17368__delegate.call(this,args);};
G__17368.cljs$lang$maxFixedArity = 0;
G__17368.cljs$lang$applyTo = (function (arglist__17370){
var args = cljs.core.seq(arglist__17370);
return G__17368__delegate(args);
});
G__17368.cljs$core$IFn$_invoke$arity$variadic = G__17368__delegate;
return G__17368;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17371__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17372__i = 0, G__17372__a = new Array(arguments.length -  0);
while (G__17372__i < G__17372__a.length) {G__17372__a[G__17372__i] = arguments[G__17372__i + 0]; ++G__17372__i;}
  args = new cljs.core.IndexedSeq(G__17372__a,0);
} 
return G__17371__delegate.call(this,args);};
G__17371.cljs$lang$maxFixedArity = 0;
G__17371.cljs$lang$applyTo = (function (arglist__17373){
var args = cljs.core.seq(arglist__17373);
return G__17371__delegate(args);
});
G__17371.cljs$core$IFn$_invoke$arity$variadic = G__17371__delegate;
return G__17371;
})()
;

return null;
});
