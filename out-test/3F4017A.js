goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66470__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66471__i = 0, G__66471__a = new Array(arguments.length -  0);
while (G__66471__i < G__66471__a.length) {G__66471__a[G__66471__i] = arguments[G__66471__i + 0]; ++G__66471__i;}
  args = new cljs.core.IndexedSeq(G__66471__a,0);
} 
return G__66470__delegate.call(this,args);};
G__66470.cljs$lang$maxFixedArity = 0;
G__66470.cljs$lang$applyTo = (function (arglist__66472){
var args = cljs.core.seq(arglist__66472);
return G__66470__delegate(args);
});
G__66470.cljs$core$IFn$_invoke$arity$variadic = G__66470__delegate;
return G__66470;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66473__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66474__i = 0, G__66474__a = new Array(arguments.length -  0);
while (G__66474__i < G__66474__a.length) {G__66474__a[G__66474__i] = arguments[G__66474__i + 0]; ++G__66474__i;}
  args = new cljs.core.IndexedSeq(G__66474__a,0);
} 
return G__66473__delegate.call(this,args);};
G__66473.cljs$lang$maxFixedArity = 0;
G__66473.cljs$lang$applyTo = (function (arglist__66475){
var args = cljs.core.seq(arglist__66475);
return G__66473__delegate(args);
});
G__66473.cljs$core$IFn$_invoke$arity$variadic = G__66473__delegate;
return G__66473;
})()
;

return null;
});
