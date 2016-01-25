goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__143995__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__143995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143996__i = 0, G__143996__a = new Array(arguments.length -  0);
while (G__143996__i < G__143996__a.length) {G__143996__a[G__143996__i] = arguments[G__143996__i + 0]; ++G__143996__i;}
  args = new cljs.core.IndexedSeq(G__143996__a,0);
} 
return G__143995__delegate.call(this,args);};
G__143995.cljs$lang$maxFixedArity = 0;
G__143995.cljs$lang$applyTo = (function (arglist__143997){
var args = cljs.core.seq(arglist__143997);
return G__143995__delegate(args);
});
G__143995.cljs$core$IFn$_invoke$arity$variadic = G__143995__delegate;
return G__143995;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__143998__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__143998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143999__i = 0, G__143999__a = new Array(arguments.length -  0);
while (G__143999__i < G__143999__a.length) {G__143999__a[G__143999__i] = arguments[G__143999__i + 0]; ++G__143999__i;}
  args = new cljs.core.IndexedSeq(G__143999__a,0);
} 
return G__143998__delegate.call(this,args);};
G__143998.cljs$lang$maxFixedArity = 0;
G__143998.cljs$lang$applyTo = (function (arglist__144000){
var args = cljs.core.seq(arglist__144000);
return G__143998__delegate(args);
});
G__143998.cljs$core$IFn$_invoke$arity$variadic = G__143998__delegate;
return G__143998;
})()
;

return null;
});
