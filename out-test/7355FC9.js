goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__95572__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__95572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95573__i = 0, G__95573__a = new Array(arguments.length -  0);
while (G__95573__i < G__95573__a.length) {G__95573__a[G__95573__i] = arguments[G__95573__i + 0]; ++G__95573__i;}
  args = new cljs.core.IndexedSeq(G__95573__a,0);
} 
return G__95572__delegate.call(this,args);};
G__95572.cljs$lang$maxFixedArity = 0;
G__95572.cljs$lang$applyTo = (function (arglist__95574){
var args = cljs.core.seq(arglist__95574);
return G__95572__delegate(args);
});
G__95572.cljs$core$IFn$_invoke$arity$variadic = G__95572__delegate;
return G__95572;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__95575__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__95575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95576__i = 0, G__95576__a = new Array(arguments.length -  0);
while (G__95576__i < G__95576__a.length) {G__95576__a[G__95576__i] = arguments[G__95576__i + 0]; ++G__95576__i;}
  args = new cljs.core.IndexedSeq(G__95576__a,0);
} 
return G__95575__delegate.call(this,args);};
G__95575.cljs$lang$maxFixedArity = 0;
G__95575.cljs$lang$applyTo = (function (arglist__95577){
var args = cljs.core.seq(arglist__95577);
return G__95575__delegate(args);
});
G__95575.cljs$core$IFn$_invoke$arity$variadic = G__95575__delegate;
return G__95575;
})()
;

return null;
});
