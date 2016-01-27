goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__90223__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__90223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90224__i = 0, G__90224__a = new Array(arguments.length -  0);
while (G__90224__i < G__90224__a.length) {G__90224__a[G__90224__i] = arguments[G__90224__i + 0]; ++G__90224__i;}
  args = new cljs.core.IndexedSeq(G__90224__a,0);
} 
return G__90223__delegate.call(this,args);};
G__90223.cljs$lang$maxFixedArity = 0;
G__90223.cljs$lang$applyTo = (function (arglist__90225){
var args = cljs.core.seq(arglist__90225);
return G__90223__delegate(args);
});
G__90223.cljs$core$IFn$_invoke$arity$variadic = G__90223__delegate;
return G__90223;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__90226__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__90226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90227__i = 0, G__90227__a = new Array(arguments.length -  0);
while (G__90227__i < G__90227__a.length) {G__90227__a[G__90227__i] = arguments[G__90227__i + 0]; ++G__90227__i;}
  args = new cljs.core.IndexedSeq(G__90227__a,0);
} 
return G__90226__delegate.call(this,args);};
G__90226.cljs$lang$maxFixedArity = 0;
G__90226.cljs$lang$applyTo = (function (arglist__90228){
var args = cljs.core.seq(arglist__90228);
return G__90226__delegate(args);
});
G__90226.cljs$core$IFn$_invoke$arity$variadic = G__90226__delegate;
return G__90226;
})()
;

return null;
});
