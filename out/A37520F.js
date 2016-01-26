goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25603__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25604__i = 0, G__25604__a = new Array(arguments.length -  0);
while (G__25604__i < G__25604__a.length) {G__25604__a[G__25604__i] = arguments[G__25604__i + 0]; ++G__25604__i;}
  args = new cljs.core.IndexedSeq(G__25604__a,0);
} 
return G__25603__delegate.call(this,args);};
G__25603.cljs$lang$maxFixedArity = 0;
G__25603.cljs$lang$applyTo = (function (arglist__25605){
var args = cljs.core.seq(arglist__25605);
return G__25603__delegate(args);
});
G__25603.cljs$core$IFn$_invoke$arity$variadic = G__25603__delegate;
return G__25603;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25606__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25607__i = 0, G__25607__a = new Array(arguments.length -  0);
while (G__25607__i < G__25607__a.length) {G__25607__a[G__25607__i] = arguments[G__25607__i + 0]; ++G__25607__i;}
  args = new cljs.core.IndexedSeq(G__25607__a,0);
} 
return G__25606__delegate.call(this,args);};
G__25606.cljs$lang$maxFixedArity = 0;
G__25606.cljs$lang$applyTo = (function (arglist__25608){
var args = cljs.core.seq(arglist__25608);
return G__25606__delegate(args);
});
G__25606.cljs$core$IFn$_invoke$arity$variadic = G__25606__delegate;
return G__25606;
})()
;

return null;
});
