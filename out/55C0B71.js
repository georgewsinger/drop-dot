goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__330909__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__330909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330910__i = 0, G__330910__a = new Array(arguments.length -  0);
while (G__330910__i < G__330910__a.length) {G__330910__a[G__330910__i] = arguments[G__330910__i + 0]; ++G__330910__i;}
  args = new cljs.core.IndexedSeq(G__330910__a,0);
} 
return G__330909__delegate.call(this,args);};
G__330909.cljs$lang$maxFixedArity = 0;
G__330909.cljs$lang$applyTo = (function (arglist__330911){
var args = cljs.core.seq(arglist__330911);
return G__330909__delegate(args);
});
G__330909.cljs$core$IFn$_invoke$arity$variadic = G__330909__delegate;
return G__330909;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__330912__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__330912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330913__i = 0, G__330913__a = new Array(arguments.length -  0);
while (G__330913__i < G__330913__a.length) {G__330913__a[G__330913__i] = arguments[G__330913__i + 0]; ++G__330913__i;}
  args = new cljs.core.IndexedSeq(G__330913__a,0);
} 
return G__330912__delegate.call(this,args);};
G__330912.cljs$lang$maxFixedArity = 0;
G__330912.cljs$lang$applyTo = (function (arglist__330914){
var args = cljs.core.seq(arglist__330914);
return G__330912__delegate(args);
});
G__330912.cljs$core$IFn$_invoke$arity$variadic = G__330912__delegate;
return G__330912;
})()
;

return null;
});
