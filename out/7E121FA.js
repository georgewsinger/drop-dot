goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__344140__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__344140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__344141__i = 0, G__344141__a = new Array(arguments.length -  0);
while (G__344141__i < G__344141__a.length) {G__344141__a[G__344141__i] = arguments[G__344141__i + 0]; ++G__344141__i;}
  args = new cljs.core.IndexedSeq(G__344141__a,0);
} 
return G__344140__delegate.call(this,args);};
G__344140.cljs$lang$maxFixedArity = 0;
G__344140.cljs$lang$applyTo = (function (arglist__344142){
var args = cljs.core.seq(arglist__344142);
return G__344140__delegate(args);
});
G__344140.cljs$core$IFn$_invoke$arity$variadic = G__344140__delegate;
return G__344140;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__344143__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__344143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__344144__i = 0, G__344144__a = new Array(arguments.length -  0);
while (G__344144__i < G__344144__a.length) {G__344144__a[G__344144__i] = arguments[G__344144__i + 0]; ++G__344144__i;}
  args = new cljs.core.IndexedSeq(G__344144__a,0);
} 
return G__344143__delegate.call(this,args);};
G__344143.cljs$lang$maxFixedArity = 0;
G__344143.cljs$lang$applyTo = (function (arglist__344145){
var args = cljs.core.seq(arglist__344145);
return G__344143__delegate(args);
});
G__344143.cljs$core$IFn$_invoke$arity$variadic = G__344143__delegate;
return G__344143;
})()
;

return null;
});
