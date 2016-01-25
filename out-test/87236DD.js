goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11747__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11748__i = 0, G__11748__a = new Array(arguments.length -  0);
while (G__11748__i < G__11748__a.length) {G__11748__a[G__11748__i] = arguments[G__11748__i + 0]; ++G__11748__i;}
  args = new cljs.core.IndexedSeq(G__11748__a,0);
} 
return G__11747__delegate.call(this,args);};
G__11747.cljs$lang$maxFixedArity = 0;
G__11747.cljs$lang$applyTo = (function (arglist__11749){
var args = cljs.core.seq(arglist__11749);
return G__11747__delegate(args);
});
G__11747.cljs$core$IFn$_invoke$arity$variadic = G__11747__delegate;
return G__11747;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11750__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11751__i = 0, G__11751__a = new Array(arguments.length -  0);
while (G__11751__i < G__11751__a.length) {G__11751__a[G__11751__i] = arguments[G__11751__i + 0]; ++G__11751__i;}
  args = new cljs.core.IndexedSeq(G__11751__a,0);
} 
return G__11750__delegate.call(this,args);};
G__11750.cljs$lang$maxFixedArity = 0;
G__11750.cljs$lang$applyTo = (function (arglist__11752){
var args = cljs.core.seq(arglist__11752);
return G__11750__delegate(args);
});
G__11750.cljs$core$IFn$_invoke$arity$variadic = G__11750__delegate;
return G__11750;
})()
;

return null;
});
