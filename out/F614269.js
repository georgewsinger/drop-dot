goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__335954__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__335954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__335955__i = 0, G__335955__a = new Array(arguments.length -  0);
while (G__335955__i < G__335955__a.length) {G__335955__a[G__335955__i] = arguments[G__335955__i + 0]; ++G__335955__i;}
  args = new cljs.core.IndexedSeq(G__335955__a,0);
} 
return G__335954__delegate.call(this,args);};
G__335954.cljs$lang$maxFixedArity = 0;
G__335954.cljs$lang$applyTo = (function (arglist__335956){
var args = cljs.core.seq(arglist__335956);
return G__335954__delegate(args);
});
G__335954.cljs$core$IFn$_invoke$arity$variadic = G__335954__delegate;
return G__335954;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__335957__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__335957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__335958__i = 0, G__335958__a = new Array(arguments.length -  0);
while (G__335958__i < G__335958__a.length) {G__335958__a[G__335958__i] = arguments[G__335958__i + 0]; ++G__335958__i;}
  args = new cljs.core.IndexedSeq(G__335958__a,0);
} 
return G__335957__delegate.call(this,args);};
G__335957.cljs$lang$maxFixedArity = 0;
G__335957.cljs$lang$applyTo = (function (arglist__335959){
var args = cljs.core.seq(arglist__335959);
return G__335957__delegate(args);
});
G__335957.cljs$core$IFn$_invoke$arity$variadic = G__335957__delegate;
return G__335957;
})()
;

return null;
});
