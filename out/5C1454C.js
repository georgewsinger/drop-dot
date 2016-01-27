goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__324870__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__324870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324871__i = 0, G__324871__a = new Array(arguments.length -  0);
while (G__324871__i < G__324871__a.length) {G__324871__a[G__324871__i] = arguments[G__324871__i + 0]; ++G__324871__i;}
  args = new cljs.core.IndexedSeq(G__324871__a,0);
} 
return G__324870__delegate.call(this,args);};
G__324870.cljs$lang$maxFixedArity = 0;
G__324870.cljs$lang$applyTo = (function (arglist__324872){
var args = cljs.core.seq(arglist__324872);
return G__324870__delegate(args);
});
G__324870.cljs$core$IFn$_invoke$arity$variadic = G__324870__delegate;
return G__324870;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__324873__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__324873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324874__i = 0, G__324874__a = new Array(arguments.length -  0);
while (G__324874__i < G__324874__a.length) {G__324874__a[G__324874__i] = arguments[G__324874__i + 0]; ++G__324874__i;}
  args = new cljs.core.IndexedSeq(G__324874__a,0);
} 
return G__324873__delegate.call(this,args);};
G__324873.cljs$lang$maxFixedArity = 0;
G__324873.cljs$lang$applyTo = (function (arglist__324875){
var args = cljs.core.seq(arglist__324875);
return G__324873__delegate(args);
});
G__324873.cljs$core$IFn$_invoke$arity$variadic = G__324873__delegate;
return G__324873;
})()
;

return null;
});
