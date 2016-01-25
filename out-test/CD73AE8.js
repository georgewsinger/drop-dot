goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29531__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29532__i = 0, G__29532__a = new Array(arguments.length -  0);
while (G__29532__i < G__29532__a.length) {G__29532__a[G__29532__i] = arguments[G__29532__i + 0]; ++G__29532__i;}
  args = new cljs.core.IndexedSeq(G__29532__a,0);
} 
return G__29531__delegate.call(this,args);};
G__29531.cljs$lang$maxFixedArity = 0;
G__29531.cljs$lang$applyTo = (function (arglist__29533){
var args = cljs.core.seq(arglist__29533);
return G__29531__delegate(args);
});
G__29531.cljs$core$IFn$_invoke$arity$variadic = G__29531__delegate;
return G__29531;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29534__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29535__i = 0, G__29535__a = new Array(arguments.length -  0);
while (G__29535__i < G__29535__a.length) {G__29535__a[G__29535__i] = arguments[G__29535__i + 0]; ++G__29535__i;}
  args = new cljs.core.IndexedSeq(G__29535__a,0);
} 
return G__29534__delegate.call(this,args);};
G__29534.cljs$lang$maxFixedArity = 0;
G__29534.cljs$lang$applyTo = (function (arglist__29536){
var args = cljs.core.seq(arglist__29536);
return G__29534__delegate(args);
});
G__29534.cljs$core$IFn$_invoke$arity$variadic = G__29534__delegate;
return G__29534;
})()
;

return null;
});
