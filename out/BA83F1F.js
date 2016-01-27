goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__297827__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__297827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297828__i = 0, G__297828__a = new Array(arguments.length -  0);
while (G__297828__i < G__297828__a.length) {G__297828__a[G__297828__i] = arguments[G__297828__i + 0]; ++G__297828__i;}
  args = new cljs.core.IndexedSeq(G__297828__a,0);
} 
return G__297827__delegate.call(this,args);};
G__297827.cljs$lang$maxFixedArity = 0;
G__297827.cljs$lang$applyTo = (function (arglist__297829){
var args = cljs.core.seq(arglist__297829);
return G__297827__delegate(args);
});
G__297827.cljs$core$IFn$_invoke$arity$variadic = G__297827__delegate;
return G__297827;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__297830__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__297830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297831__i = 0, G__297831__a = new Array(arguments.length -  0);
while (G__297831__i < G__297831__a.length) {G__297831__a[G__297831__i] = arguments[G__297831__i + 0]; ++G__297831__i;}
  args = new cljs.core.IndexedSeq(G__297831__a,0);
} 
return G__297830__delegate.call(this,args);};
G__297830.cljs$lang$maxFixedArity = 0;
G__297830.cljs$lang$applyTo = (function (arglist__297832){
var args = cljs.core.seq(arglist__297832);
return G__297830__delegate(args);
});
G__297830.cljs$core$IFn$_invoke$arity$variadic = G__297830__delegate;
return G__297830;
})()
;

return null;
});
