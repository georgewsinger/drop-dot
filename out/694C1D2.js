goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__368618__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__368618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__368619__i = 0, G__368619__a = new Array(arguments.length -  0);
while (G__368619__i < G__368619__a.length) {G__368619__a[G__368619__i] = arguments[G__368619__i + 0]; ++G__368619__i;}
  args = new cljs.core.IndexedSeq(G__368619__a,0);
} 
return G__368618__delegate.call(this,args);};
G__368618.cljs$lang$maxFixedArity = 0;
G__368618.cljs$lang$applyTo = (function (arglist__368620){
var args = cljs.core.seq(arglist__368620);
return G__368618__delegate(args);
});
G__368618.cljs$core$IFn$_invoke$arity$variadic = G__368618__delegate;
return G__368618;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__368621__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__368621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__368622__i = 0, G__368622__a = new Array(arguments.length -  0);
while (G__368622__i < G__368622__a.length) {G__368622__a[G__368622__i] = arguments[G__368622__i + 0]; ++G__368622__i;}
  args = new cljs.core.IndexedSeq(G__368622__a,0);
} 
return G__368621__delegate.call(this,args);};
G__368621.cljs$lang$maxFixedArity = 0;
G__368621.cljs$lang$applyTo = (function (arglist__368623){
var args = cljs.core.seq(arglist__368623);
return G__368621__delegate(args);
});
G__368621.cljs$core$IFn$_invoke$arity$variadic = G__368621__delegate;
return G__368621;
})()
;

return null;
});
