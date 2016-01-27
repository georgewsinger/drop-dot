goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24831__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24832__i = 0, G__24832__a = new Array(arguments.length -  0);
while (G__24832__i < G__24832__a.length) {G__24832__a[G__24832__i] = arguments[G__24832__i + 0]; ++G__24832__i;}
  args = new cljs.core.IndexedSeq(G__24832__a,0);
} 
return G__24831__delegate.call(this,args);};
G__24831.cljs$lang$maxFixedArity = 0;
G__24831.cljs$lang$applyTo = (function (arglist__24833){
var args = cljs.core.seq(arglist__24833);
return G__24831__delegate(args);
});
G__24831.cljs$core$IFn$_invoke$arity$variadic = G__24831__delegate;
return G__24831;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24834__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24835__i = 0, G__24835__a = new Array(arguments.length -  0);
while (G__24835__i < G__24835__a.length) {G__24835__a[G__24835__i] = arguments[G__24835__i + 0]; ++G__24835__i;}
  args = new cljs.core.IndexedSeq(G__24835__a,0);
} 
return G__24834__delegate.call(this,args);};
G__24834.cljs$lang$maxFixedArity = 0;
G__24834.cljs$lang$applyTo = (function (arglist__24836){
var args = cljs.core.seq(arglist__24836);
return G__24834__delegate(args);
});
G__24834.cljs$core$IFn$_invoke$arity$variadic = G__24834__delegate;
return G__24834;
})()
;

return null;
});
