goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25571__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25572__i = 0, G__25572__a = new Array(arguments.length -  0);
while (G__25572__i < G__25572__a.length) {G__25572__a[G__25572__i] = arguments[G__25572__i + 0]; ++G__25572__i;}
  args = new cljs.core.IndexedSeq(G__25572__a,0);
} 
return G__25571__delegate.call(this,args);};
G__25571.cljs$lang$maxFixedArity = 0;
G__25571.cljs$lang$applyTo = (function (arglist__25573){
var args = cljs.core.seq(arglist__25573);
return G__25571__delegate(args);
});
G__25571.cljs$core$IFn$_invoke$arity$variadic = G__25571__delegate;
return G__25571;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25574__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25575__i = 0, G__25575__a = new Array(arguments.length -  0);
while (G__25575__i < G__25575__a.length) {G__25575__a[G__25575__i] = arguments[G__25575__i + 0]; ++G__25575__i;}
  args = new cljs.core.IndexedSeq(G__25575__a,0);
} 
return G__25574__delegate.call(this,args);};
G__25574.cljs$lang$maxFixedArity = 0;
G__25574.cljs$lang$applyTo = (function (arglist__25576){
var args = cljs.core.seq(arglist__25576);
return G__25574__delegate(args);
});
G__25574.cljs$core$IFn$_invoke$arity$variadic = G__25574__delegate;
return G__25574;
})()
;

return null;
});
