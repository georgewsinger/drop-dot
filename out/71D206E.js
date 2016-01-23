goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28032__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28033__i = 0, G__28033__a = new Array(arguments.length -  0);
while (G__28033__i < G__28033__a.length) {G__28033__a[G__28033__i] = arguments[G__28033__i + 0]; ++G__28033__i;}
  args = new cljs.core.IndexedSeq(G__28033__a,0);
} 
return G__28032__delegate.call(this,args);};
G__28032.cljs$lang$maxFixedArity = 0;
G__28032.cljs$lang$applyTo = (function (arglist__28034){
var args = cljs.core.seq(arglist__28034);
return G__28032__delegate(args);
});
G__28032.cljs$core$IFn$_invoke$arity$variadic = G__28032__delegate;
return G__28032;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28035__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28036__i = 0, G__28036__a = new Array(arguments.length -  0);
while (G__28036__i < G__28036__a.length) {G__28036__a[G__28036__i] = arguments[G__28036__i + 0]; ++G__28036__i;}
  args = new cljs.core.IndexedSeq(G__28036__a,0);
} 
return G__28035__delegate.call(this,args);};
G__28035.cljs$lang$maxFixedArity = 0;
G__28035.cljs$lang$applyTo = (function (arglist__28037){
var args = cljs.core.seq(arglist__28037);
return G__28035__delegate(args);
});
G__28035.cljs$core$IFn$_invoke$arity$variadic = G__28035__delegate;
return G__28035;
})()
;

return null;
});
