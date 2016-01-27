goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__78910__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__78910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78911__i = 0, G__78911__a = new Array(arguments.length -  0);
while (G__78911__i < G__78911__a.length) {G__78911__a[G__78911__i] = arguments[G__78911__i + 0]; ++G__78911__i;}
  args = new cljs.core.IndexedSeq(G__78911__a,0);
} 
return G__78910__delegate.call(this,args);};
G__78910.cljs$lang$maxFixedArity = 0;
G__78910.cljs$lang$applyTo = (function (arglist__78912){
var args = cljs.core.seq(arglist__78912);
return G__78910__delegate(args);
});
G__78910.cljs$core$IFn$_invoke$arity$variadic = G__78910__delegate;
return G__78910;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__78913__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__78913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78914__i = 0, G__78914__a = new Array(arguments.length -  0);
while (G__78914__i < G__78914__a.length) {G__78914__a[G__78914__i] = arguments[G__78914__i + 0]; ++G__78914__i;}
  args = new cljs.core.IndexedSeq(G__78914__a,0);
} 
return G__78913__delegate.call(this,args);};
G__78913.cljs$lang$maxFixedArity = 0;
G__78913.cljs$lang$applyTo = (function (arglist__78915){
var args = cljs.core.seq(arglist__78915);
return G__78913__delegate(args);
});
G__78913.cljs$core$IFn$_invoke$arity$variadic = G__78913__delegate;
return G__78913;
})()
;

return null;
});
