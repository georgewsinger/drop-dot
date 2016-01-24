goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61257__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61258__i = 0, G__61258__a = new Array(arguments.length -  0);
while (G__61258__i < G__61258__a.length) {G__61258__a[G__61258__i] = arguments[G__61258__i + 0]; ++G__61258__i;}
  args = new cljs.core.IndexedSeq(G__61258__a,0);
} 
return G__61257__delegate.call(this,args);};
G__61257.cljs$lang$maxFixedArity = 0;
G__61257.cljs$lang$applyTo = (function (arglist__61259){
var args = cljs.core.seq(arglist__61259);
return G__61257__delegate(args);
});
G__61257.cljs$core$IFn$_invoke$arity$variadic = G__61257__delegate;
return G__61257;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61260__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61261__i = 0, G__61261__a = new Array(arguments.length -  0);
while (G__61261__i < G__61261__a.length) {G__61261__a[G__61261__i] = arguments[G__61261__i + 0]; ++G__61261__i;}
  args = new cljs.core.IndexedSeq(G__61261__a,0);
} 
return G__61260__delegate.call(this,args);};
G__61260.cljs$lang$maxFixedArity = 0;
G__61260.cljs$lang$applyTo = (function (arglist__61262){
var args = cljs.core.seq(arglist__61262);
return G__61260__delegate(args);
});
G__61260.cljs$core$IFn$_invoke$arity$variadic = G__61260__delegate;
return G__61260;
})()
;

return null;
});
