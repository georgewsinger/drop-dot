goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__90474__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__90474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90475__i = 0, G__90475__a = new Array(arguments.length -  0);
while (G__90475__i < G__90475__a.length) {G__90475__a[G__90475__i] = arguments[G__90475__i + 0]; ++G__90475__i;}
  args = new cljs.core.IndexedSeq(G__90475__a,0);
} 
return G__90474__delegate.call(this,args);};
G__90474.cljs$lang$maxFixedArity = 0;
G__90474.cljs$lang$applyTo = (function (arglist__90476){
var args = cljs.core.seq(arglist__90476);
return G__90474__delegate(args);
});
G__90474.cljs$core$IFn$_invoke$arity$variadic = G__90474__delegate;
return G__90474;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__90477__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__90477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90478__i = 0, G__90478__a = new Array(arguments.length -  0);
while (G__90478__i < G__90478__a.length) {G__90478__a[G__90478__i] = arguments[G__90478__i + 0]; ++G__90478__i;}
  args = new cljs.core.IndexedSeq(G__90478__a,0);
} 
return G__90477__delegate.call(this,args);};
G__90477.cljs$lang$maxFixedArity = 0;
G__90477.cljs$lang$applyTo = (function (arglist__90479){
var args = cljs.core.seq(arglist__90479);
return G__90477__delegate(args);
});
G__90477.cljs$core$IFn$_invoke$arity$variadic = G__90477__delegate;
return G__90477;
})()
;

return null;
});
