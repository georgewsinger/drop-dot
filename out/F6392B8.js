goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66828__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66829__i = 0, G__66829__a = new Array(arguments.length -  0);
while (G__66829__i < G__66829__a.length) {G__66829__a[G__66829__i] = arguments[G__66829__i + 0]; ++G__66829__i;}
  args = new cljs.core.IndexedSeq(G__66829__a,0);
} 
return G__66828__delegate.call(this,args);};
G__66828.cljs$lang$maxFixedArity = 0;
G__66828.cljs$lang$applyTo = (function (arglist__66830){
var args = cljs.core.seq(arglist__66830);
return G__66828__delegate(args);
});
G__66828.cljs$core$IFn$_invoke$arity$variadic = G__66828__delegate;
return G__66828;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66831__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66832__i = 0, G__66832__a = new Array(arguments.length -  0);
while (G__66832__i < G__66832__a.length) {G__66832__a[G__66832__i] = arguments[G__66832__i + 0]; ++G__66832__i;}
  args = new cljs.core.IndexedSeq(G__66832__a,0);
} 
return G__66831__delegate.call(this,args);};
G__66831.cljs$lang$maxFixedArity = 0;
G__66831.cljs$lang$applyTo = (function (arglist__66833){
var args = cljs.core.seq(arglist__66833);
return G__66831__delegate(args);
});
G__66831.cljs$core$IFn$_invoke$arity$variadic = G__66831__delegate;
return G__66831;
})()
;

return null;
});
