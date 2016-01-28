goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__184571__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__184571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184572__i = 0, G__184572__a = new Array(arguments.length -  0);
while (G__184572__i < G__184572__a.length) {G__184572__a[G__184572__i] = arguments[G__184572__i + 0]; ++G__184572__i;}
  args = new cljs.core.IndexedSeq(G__184572__a,0);
} 
return G__184571__delegate.call(this,args);};
G__184571.cljs$lang$maxFixedArity = 0;
G__184571.cljs$lang$applyTo = (function (arglist__184573){
var args = cljs.core.seq(arglist__184573);
return G__184571__delegate(args);
});
G__184571.cljs$core$IFn$_invoke$arity$variadic = G__184571__delegate;
return G__184571;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__184574__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__184574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184575__i = 0, G__184575__a = new Array(arguments.length -  0);
while (G__184575__i < G__184575__a.length) {G__184575__a[G__184575__i] = arguments[G__184575__i + 0]; ++G__184575__i;}
  args = new cljs.core.IndexedSeq(G__184575__a,0);
} 
return G__184574__delegate.call(this,args);};
G__184574.cljs$lang$maxFixedArity = 0;
G__184574.cljs$lang$applyTo = (function (arglist__184576){
var args = cljs.core.seq(arglist__184576);
return G__184574__delegate(args);
});
G__184574.cljs$core$IFn$_invoke$arity$variadic = G__184574__delegate;
return G__184574;
})()
;

return null;
});
