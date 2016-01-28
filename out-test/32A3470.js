goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29661__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29662__i = 0, G__29662__a = new Array(arguments.length -  0);
while (G__29662__i < G__29662__a.length) {G__29662__a[G__29662__i] = arguments[G__29662__i + 0]; ++G__29662__i;}
  args = new cljs.core.IndexedSeq(G__29662__a,0);
} 
return G__29661__delegate.call(this,args);};
G__29661.cljs$lang$maxFixedArity = 0;
G__29661.cljs$lang$applyTo = (function (arglist__29663){
var args = cljs.core.seq(arglist__29663);
return G__29661__delegate(args);
});
G__29661.cljs$core$IFn$_invoke$arity$variadic = G__29661__delegate;
return G__29661;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29664__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29665__i = 0, G__29665__a = new Array(arguments.length -  0);
while (G__29665__i < G__29665__a.length) {G__29665__a[G__29665__i] = arguments[G__29665__i + 0]; ++G__29665__i;}
  args = new cljs.core.IndexedSeq(G__29665__a,0);
} 
return G__29664__delegate.call(this,args);};
G__29664.cljs$lang$maxFixedArity = 0;
G__29664.cljs$lang$applyTo = (function (arglist__29666){
var args = cljs.core.seq(arglist__29666);
return G__29664__delegate(args);
});
G__29664.cljs$core$IFn$_invoke$arity$variadic = G__29664__delegate;
return G__29664;
})()
;

return null;
});
