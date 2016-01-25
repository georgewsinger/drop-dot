goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45717__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45718__i = 0, G__45718__a = new Array(arguments.length -  0);
while (G__45718__i < G__45718__a.length) {G__45718__a[G__45718__i] = arguments[G__45718__i + 0]; ++G__45718__i;}
  args = new cljs.core.IndexedSeq(G__45718__a,0);
} 
return G__45717__delegate.call(this,args);};
G__45717.cljs$lang$maxFixedArity = 0;
G__45717.cljs$lang$applyTo = (function (arglist__45719){
var args = cljs.core.seq(arglist__45719);
return G__45717__delegate(args);
});
G__45717.cljs$core$IFn$_invoke$arity$variadic = G__45717__delegate;
return G__45717;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45720__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45720 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45721__i = 0, G__45721__a = new Array(arguments.length -  0);
while (G__45721__i < G__45721__a.length) {G__45721__a[G__45721__i] = arguments[G__45721__i + 0]; ++G__45721__i;}
  args = new cljs.core.IndexedSeq(G__45721__a,0);
} 
return G__45720__delegate.call(this,args);};
G__45720.cljs$lang$maxFixedArity = 0;
G__45720.cljs$lang$applyTo = (function (arglist__45722){
var args = cljs.core.seq(arglist__45722);
return G__45720__delegate(args);
});
G__45720.cljs$core$IFn$_invoke$arity$variadic = G__45720__delegate;
return G__45720;
})()
;

return null;
});
