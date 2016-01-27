goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__184560__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__184560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184561__i = 0, G__184561__a = new Array(arguments.length -  0);
while (G__184561__i < G__184561__a.length) {G__184561__a[G__184561__i] = arguments[G__184561__i + 0]; ++G__184561__i;}
  args = new cljs.core.IndexedSeq(G__184561__a,0);
} 
return G__184560__delegate.call(this,args);};
G__184560.cljs$lang$maxFixedArity = 0;
G__184560.cljs$lang$applyTo = (function (arglist__184562){
var args = cljs.core.seq(arglist__184562);
return G__184560__delegate(args);
});
G__184560.cljs$core$IFn$_invoke$arity$variadic = G__184560__delegate;
return G__184560;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__184563__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__184563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184564__i = 0, G__184564__a = new Array(arguments.length -  0);
while (G__184564__i < G__184564__a.length) {G__184564__a[G__184564__i] = arguments[G__184564__i + 0]; ++G__184564__i;}
  args = new cljs.core.IndexedSeq(G__184564__a,0);
} 
return G__184563__delegate.call(this,args);};
G__184563.cljs$lang$maxFixedArity = 0;
G__184563.cljs$lang$applyTo = (function (arglist__184565){
var args = cljs.core.seq(arglist__184565);
return G__184563__delegate(args);
});
G__184563.cljs$core$IFn$_invoke$arity$variadic = G__184563__delegate;
return G__184563;
})()
;

return null;
});
