goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__237870__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__237870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237871__i = 0, G__237871__a = new Array(arguments.length -  0);
while (G__237871__i < G__237871__a.length) {G__237871__a[G__237871__i] = arguments[G__237871__i + 0]; ++G__237871__i;}
  args = new cljs.core.IndexedSeq(G__237871__a,0);
} 
return G__237870__delegate.call(this,args);};
G__237870.cljs$lang$maxFixedArity = 0;
G__237870.cljs$lang$applyTo = (function (arglist__237872){
var args = cljs.core.seq(arglist__237872);
return G__237870__delegate(args);
});
G__237870.cljs$core$IFn$_invoke$arity$variadic = G__237870__delegate;
return G__237870;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__237873__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__237873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237874__i = 0, G__237874__a = new Array(arguments.length -  0);
while (G__237874__i < G__237874__a.length) {G__237874__a[G__237874__i] = arguments[G__237874__i + 0]; ++G__237874__i;}
  args = new cljs.core.IndexedSeq(G__237874__a,0);
} 
return G__237873__delegate.call(this,args);};
G__237873.cljs$lang$maxFixedArity = 0;
G__237873.cljs$lang$applyTo = (function (arglist__237875){
var args = cljs.core.seq(arglist__237875);
return G__237873__delegate(args);
});
G__237873.cljs$core$IFn$_invoke$arity$variadic = G__237873__delegate;
return G__237873;
})()
;

return null;
});
