goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31571__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31572__i = 0, G__31572__a = new Array(arguments.length -  0);
while (G__31572__i < G__31572__a.length) {G__31572__a[G__31572__i] = arguments[G__31572__i + 0]; ++G__31572__i;}
  args = new cljs.core.IndexedSeq(G__31572__a,0);
} 
return G__31571__delegate.call(this,args);};
G__31571.cljs$lang$maxFixedArity = 0;
G__31571.cljs$lang$applyTo = (function (arglist__31573){
var args = cljs.core.seq(arglist__31573);
return G__31571__delegate(args);
});
G__31571.cljs$core$IFn$_invoke$arity$variadic = G__31571__delegate;
return G__31571;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31574__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31575__i = 0, G__31575__a = new Array(arguments.length -  0);
while (G__31575__i < G__31575__a.length) {G__31575__a[G__31575__i] = arguments[G__31575__i + 0]; ++G__31575__i;}
  args = new cljs.core.IndexedSeq(G__31575__a,0);
} 
return G__31574__delegate.call(this,args);};
G__31574.cljs$lang$maxFixedArity = 0;
G__31574.cljs$lang$applyTo = (function (arglist__31576){
var args = cljs.core.seq(arglist__31576);
return G__31574__delegate(args);
});
G__31574.cljs$core$IFn$_invoke$arity$variadic = G__31574__delegate;
return G__31574;
})()
;

return null;
});
