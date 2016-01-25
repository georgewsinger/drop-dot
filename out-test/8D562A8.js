goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41474__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41475__i = 0, G__41475__a = new Array(arguments.length -  0);
while (G__41475__i < G__41475__a.length) {G__41475__a[G__41475__i] = arguments[G__41475__i + 0]; ++G__41475__i;}
  args = new cljs.core.IndexedSeq(G__41475__a,0);
} 
return G__41474__delegate.call(this,args);};
G__41474.cljs$lang$maxFixedArity = 0;
G__41474.cljs$lang$applyTo = (function (arglist__41476){
var args = cljs.core.seq(arglist__41476);
return G__41474__delegate(args);
});
G__41474.cljs$core$IFn$_invoke$arity$variadic = G__41474__delegate;
return G__41474;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41477__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41478__i = 0, G__41478__a = new Array(arguments.length -  0);
while (G__41478__i < G__41478__a.length) {G__41478__a[G__41478__i] = arguments[G__41478__i + 0]; ++G__41478__i;}
  args = new cljs.core.IndexedSeq(G__41478__a,0);
} 
return G__41477__delegate.call(this,args);};
G__41477.cljs$lang$maxFixedArity = 0;
G__41477.cljs$lang$applyTo = (function (arglist__41479){
var args = cljs.core.seq(arglist__41479);
return G__41477__delegate(args);
});
G__41477.cljs$core$IFn$_invoke$arity$variadic = G__41477__delegate;
return G__41477;
})()
;

return null;
});
