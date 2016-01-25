goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__105657__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__105657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__105658__i = 0, G__105658__a = new Array(arguments.length -  0);
while (G__105658__i < G__105658__a.length) {G__105658__a[G__105658__i] = arguments[G__105658__i + 0]; ++G__105658__i;}
  args = new cljs.core.IndexedSeq(G__105658__a,0);
} 
return G__105657__delegate.call(this,args);};
G__105657.cljs$lang$maxFixedArity = 0;
G__105657.cljs$lang$applyTo = (function (arglist__105659){
var args = cljs.core.seq(arglist__105659);
return G__105657__delegate(args);
});
G__105657.cljs$core$IFn$_invoke$arity$variadic = G__105657__delegate;
return G__105657;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__105660__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__105660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__105661__i = 0, G__105661__a = new Array(arguments.length -  0);
while (G__105661__i < G__105661__a.length) {G__105661__a[G__105661__i] = arguments[G__105661__i + 0]; ++G__105661__i;}
  args = new cljs.core.IndexedSeq(G__105661__a,0);
} 
return G__105660__delegate.call(this,args);};
G__105660.cljs$lang$maxFixedArity = 0;
G__105660.cljs$lang$applyTo = (function (arglist__105662){
var args = cljs.core.seq(arglist__105662);
return G__105660__delegate(args);
});
G__105660.cljs$core$IFn$_invoke$arity$variadic = G__105660__delegate;
return G__105660;
})()
;

return null;
});
