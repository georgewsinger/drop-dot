goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__184190__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__184190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184191__i = 0, G__184191__a = new Array(arguments.length -  0);
while (G__184191__i < G__184191__a.length) {G__184191__a[G__184191__i] = arguments[G__184191__i + 0]; ++G__184191__i;}
  args = new cljs.core.IndexedSeq(G__184191__a,0);
} 
return G__184190__delegate.call(this,args);};
G__184190.cljs$lang$maxFixedArity = 0;
G__184190.cljs$lang$applyTo = (function (arglist__184192){
var args = cljs.core.seq(arglist__184192);
return G__184190__delegate(args);
});
G__184190.cljs$core$IFn$_invoke$arity$variadic = G__184190__delegate;
return G__184190;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__184193__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__184193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184194__i = 0, G__184194__a = new Array(arguments.length -  0);
while (G__184194__i < G__184194__a.length) {G__184194__a[G__184194__i] = arguments[G__184194__i + 0]; ++G__184194__i;}
  args = new cljs.core.IndexedSeq(G__184194__a,0);
} 
return G__184193__delegate.call(this,args);};
G__184193.cljs$lang$maxFixedArity = 0;
G__184193.cljs$lang$applyTo = (function (arglist__184195){
var args = cljs.core.seq(arglist__184195);
return G__184193__delegate(args);
});
G__184193.cljs$core$IFn$_invoke$arity$variadic = G__184193__delegate;
return G__184193;
})()
;

return null;
});
