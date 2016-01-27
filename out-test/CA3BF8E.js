goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63957__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63958__i = 0, G__63958__a = new Array(arguments.length -  0);
while (G__63958__i < G__63958__a.length) {G__63958__a[G__63958__i] = arguments[G__63958__i + 0]; ++G__63958__i;}
  args = new cljs.core.IndexedSeq(G__63958__a,0);
} 
return G__63957__delegate.call(this,args);};
G__63957.cljs$lang$maxFixedArity = 0;
G__63957.cljs$lang$applyTo = (function (arglist__63959){
var args = cljs.core.seq(arglist__63959);
return G__63957__delegate(args);
});
G__63957.cljs$core$IFn$_invoke$arity$variadic = G__63957__delegate;
return G__63957;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63960__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63961__i = 0, G__63961__a = new Array(arguments.length -  0);
while (G__63961__i < G__63961__a.length) {G__63961__a[G__63961__i] = arguments[G__63961__i + 0]; ++G__63961__i;}
  args = new cljs.core.IndexedSeq(G__63961__a,0);
} 
return G__63960__delegate.call(this,args);};
G__63960.cljs$lang$maxFixedArity = 0;
G__63960.cljs$lang$applyTo = (function (arglist__63962){
var args = cljs.core.seq(arglist__63962);
return G__63960__delegate(args);
});
G__63960.cljs$core$IFn$_invoke$arity$variadic = G__63960__delegate;
return G__63960;
})()
;

return null;
});
