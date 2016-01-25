goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47688__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47689__i = 0, G__47689__a = new Array(arguments.length -  0);
while (G__47689__i < G__47689__a.length) {G__47689__a[G__47689__i] = arguments[G__47689__i + 0]; ++G__47689__i;}
  args = new cljs.core.IndexedSeq(G__47689__a,0);
} 
return G__47688__delegate.call(this,args);};
G__47688.cljs$lang$maxFixedArity = 0;
G__47688.cljs$lang$applyTo = (function (arglist__47690){
var args = cljs.core.seq(arglist__47690);
return G__47688__delegate(args);
});
G__47688.cljs$core$IFn$_invoke$arity$variadic = G__47688__delegate;
return G__47688;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47691__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47692__i = 0, G__47692__a = new Array(arguments.length -  0);
while (G__47692__i < G__47692__a.length) {G__47692__a[G__47692__i] = arguments[G__47692__i + 0]; ++G__47692__i;}
  args = new cljs.core.IndexedSeq(G__47692__a,0);
} 
return G__47691__delegate.call(this,args);};
G__47691.cljs$lang$maxFixedArity = 0;
G__47691.cljs$lang$applyTo = (function (arglist__47693){
var args = cljs.core.seq(arglist__47693);
return G__47691__delegate(args);
});
G__47691.cljs$core$IFn$_invoke$arity$variadic = G__47691__delegate;
return G__47691;
})()
;

return null;
});
