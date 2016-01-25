goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49957__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49958__i = 0, G__49958__a = new Array(arguments.length -  0);
while (G__49958__i < G__49958__a.length) {G__49958__a[G__49958__i] = arguments[G__49958__i + 0]; ++G__49958__i;}
  args = new cljs.core.IndexedSeq(G__49958__a,0);
} 
return G__49957__delegate.call(this,args);};
G__49957.cljs$lang$maxFixedArity = 0;
G__49957.cljs$lang$applyTo = (function (arglist__49959){
var args = cljs.core.seq(arglist__49959);
return G__49957__delegate(args);
});
G__49957.cljs$core$IFn$_invoke$arity$variadic = G__49957__delegate;
return G__49957;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49960__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49961__i = 0, G__49961__a = new Array(arguments.length -  0);
while (G__49961__i < G__49961__a.length) {G__49961__a[G__49961__i] = arguments[G__49961__i + 0]; ++G__49961__i;}
  args = new cljs.core.IndexedSeq(G__49961__a,0);
} 
return G__49960__delegate.call(this,args);};
G__49960.cljs$lang$maxFixedArity = 0;
G__49960.cljs$lang$applyTo = (function (arglist__49962){
var args = cljs.core.seq(arglist__49962);
return G__49960__delegate(args);
});
G__49960.cljs$core$IFn$_invoke$arity$variadic = G__49960__delegate;
return G__49960;
})()
;

return null;
});
