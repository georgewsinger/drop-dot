goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__162831__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__162831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162832__i = 0, G__162832__a = new Array(arguments.length -  0);
while (G__162832__i < G__162832__a.length) {G__162832__a[G__162832__i] = arguments[G__162832__i + 0]; ++G__162832__i;}
  args = new cljs.core.IndexedSeq(G__162832__a,0);
} 
return G__162831__delegate.call(this,args);};
G__162831.cljs$lang$maxFixedArity = 0;
G__162831.cljs$lang$applyTo = (function (arglist__162833){
var args = cljs.core.seq(arglist__162833);
return G__162831__delegate(args);
});
G__162831.cljs$core$IFn$_invoke$arity$variadic = G__162831__delegate;
return G__162831;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__162834__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__162834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162835__i = 0, G__162835__a = new Array(arguments.length -  0);
while (G__162835__i < G__162835__a.length) {G__162835__a[G__162835__i] = arguments[G__162835__i + 0]; ++G__162835__i;}
  args = new cljs.core.IndexedSeq(G__162835__a,0);
} 
return G__162834__delegate.call(this,args);};
G__162834.cljs$lang$maxFixedArity = 0;
G__162834.cljs$lang$applyTo = (function (arglist__162836){
var args = cljs.core.seq(arglist__162836);
return G__162834__delegate(args);
});
G__162834.cljs$core$IFn$_invoke$arity$variadic = G__162834__delegate;
return G__162834;
})()
;

return null;
});
