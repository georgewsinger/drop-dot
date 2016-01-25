goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77678__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77679__i = 0, G__77679__a = new Array(arguments.length -  0);
while (G__77679__i < G__77679__a.length) {G__77679__a[G__77679__i] = arguments[G__77679__i + 0]; ++G__77679__i;}
  args = new cljs.core.IndexedSeq(G__77679__a,0);
} 
return G__77678__delegate.call(this,args);};
G__77678.cljs$lang$maxFixedArity = 0;
G__77678.cljs$lang$applyTo = (function (arglist__77680){
var args = cljs.core.seq(arglist__77680);
return G__77678__delegate(args);
});
G__77678.cljs$core$IFn$_invoke$arity$variadic = G__77678__delegate;
return G__77678;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__77681__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__77681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77682__i = 0, G__77682__a = new Array(arguments.length -  0);
while (G__77682__i < G__77682__a.length) {G__77682__a[G__77682__i] = arguments[G__77682__i + 0]; ++G__77682__i;}
  args = new cljs.core.IndexedSeq(G__77682__a,0);
} 
return G__77681__delegate.call(this,args);};
G__77681.cljs$lang$maxFixedArity = 0;
G__77681.cljs$lang$applyTo = (function (arglist__77683){
var args = cljs.core.seq(arglist__77683);
return G__77681__delegate(args);
});
G__77681.cljs$core$IFn$_invoke$arity$variadic = G__77681__delegate;
return G__77681;
})()
;

return null;
});
