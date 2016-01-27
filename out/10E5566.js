goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__329876__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__329876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__329877__i = 0, G__329877__a = new Array(arguments.length -  0);
while (G__329877__i < G__329877__a.length) {G__329877__a[G__329877__i] = arguments[G__329877__i + 0]; ++G__329877__i;}
  args = new cljs.core.IndexedSeq(G__329877__a,0);
} 
return G__329876__delegate.call(this,args);};
G__329876.cljs$lang$maxFixedArity = 0;
G__329876.cljs$lang$applyTo = (function (arglist__329878){
var args = cljs.core.seq(arglist__329878);
return G__329876__delegate(args);
});
G__329876.cljs$core$IFn$_invoke$arity$variadic = G__329876__delegate;
return G__329876;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__329879__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__329879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__329880__i = 0, G__329880__a = new Array(arguments.length -  0);
while (G__329880__i < G__329880__a.length) {G__329880__a[G__329880__i] = arguments[G__329880__i + 0]; ++G__329880__i;}
  args = new cljs.core.IndexedSeq(G__329880__a,0);
} 
return G__329879__delegate.call(this,args);};
G__329879.cljs$lang$maxFixedArity = 0;
G__329879.cljs$lang$applyTo = (function (arglist__329881){
var args = cljs.core.seq(arglist__329881);
return G__329879__delegate(args);
});
G__329879.cljs$core$IFn$_invoke$arity$variadic = G__329879__delegate;
return G__329879;
})()
;

return null;
});
