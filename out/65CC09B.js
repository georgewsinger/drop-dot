goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33032__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33033__i = 0, G__33033__a = new Array(arguments.length -  0);
while (G__33033__i < G__33033__a.length) {G__33033__a[G__33033__i] = arguments[G__33033__i + 0]; ++G__33033__i;}
  args = new cljs.core.IndexedSeq(G__33033__a,0);
} 
return G__33032__delegate.call(this,args);};
G__33032.cljs$lang$maxFixedArity = 0;
G__33032.cljs$lang$applyTo = (function (arglist__33034){
var args = cljs.core.seq(arglist__33034);
return G__33032__delegate(args);
});
G__33032.cljs$core$IFn$_invoke$arity$variadic = G__33032__delegate;
return G__33032;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33035__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33036__i = 0, G__33036__a = new Array(arguments.length -  0);
while (G__33036__i < G__33036__a.length) {G__33036__a[G__33036__i] = arguments[G__33036__i + 0]; ++G__33036__i;}
  args = new cljs.core.IndexedSeq(G__33036__a,0);
} 
return G__33035__delegate.call(this,args);};
G__33035.cljs$lang$maxFixedArity = 0;
G__33035.cljs$lang$applyTo = (function (arglist__33037){
var args = cljs.core.seq(arglist__33037);
return G__33035__delegate(args);
});
G__33035.cljs$core$IFn$_invoke$arity$variadic = G__33035__delegate;
return G__33035;
})()
;

return null;
});
