goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__80570__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__80570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80571__i = 0, G__80571__a = new Array(arguments.length -  0);
while (G__80571__i < G__80571__a.length) {G__80571__a[G__80571__i] = arguments[G__80571__i + 0]; ++G__80571__i;}
  args = new cljs.core.IndexedSeq(G__80571__a,0);
} 
return G__80570__delegate.call(this,args);};
G__80570.cljs$lang$maxFixedArity = 0;
G__80570.cljs$lang$applyTo = (function (arglist__80572){
var args = cljs.core.seq(arglist__80572);
return G__80570__delegate(args);
});
G__80570.cljs$core$IFn$_invoke$arity$variadic = G__80570__delegate;
return G__80570;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__80573__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__80573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80574__i = 0, G__80574__a = new Array(arguments.length -  0);
while (G__80574__i < G__80574__a.length) {G__80574__a[G__80574__i] = arguments[G__80574__i + 0]; ++G__80574__i;}
  args = new cljs.core.IndexedSeq(G__80574__a,0);
} 
return G__80573__delegate.call(this,args);};
G__80573.cljs$lang$maxFixedArity = 0;
G__80573.cljs$lang$applyTo = (function (arglist__80575){
var args = cljs.core.seq(arglist__80575);
return G__80573__delegate(args);
});
G__80573.cljs$core$IFn$_invoke$arity$variadic = G__80573__delegate;
return G__80573;
})()
;

return null;
});
