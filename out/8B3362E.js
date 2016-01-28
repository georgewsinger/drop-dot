goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__382688__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__382688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__382689__i = 0, G__382689__a = new Array(arguments.length -  0);
while (G__382689__i < G__382689__a.length) {G__382689__a[G__382689__i] = arguments[G__382689__i + 0]; ++G__382689__i;}
  args = new cljs.core.IndexedSeq(G__382689__a,0);
} 
return G__382688__delegate.call(this,args);};
G__382688.cljs$lang$maxFixedArity = 0;
G__382688.cljs$lang$applyTo = (function (arglist__382690){
var args = cljs.core.seq(arglist__382690);
return G__382688__delegate(args);
});
G__382688.cljs$core$IFn$_invoke$arity$variadic = G__382688__delegate;
return G__382688;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__382691__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__382691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__382692__i = 0, G__382692__a = new Array(arguments.length -  0);
while (G__382692__i < G__382692__a.length) {G__382692__a[G__382692__i] = arguments[G__382692__i + 0]; ++G__382692__i;}
  args = new cljs.core.IndexedSeq(G__382692__a,0);
} 
return G__382691__delegate.call(this,args);};
G__382691.cljs$lang$maxFixedArity = 0;
G__382691.cljs$lang$applyTo = (function (arglist__382693){
var args = cljs.core.seq(arglist__382693);
return G__382691__delegate(args);
});
G__382691.cljs$core$IFn$_invoke$arity$variadic = G__382691__delegate;
return G__382691;
})()
;

return null;
});
