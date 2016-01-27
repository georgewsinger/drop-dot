goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29200__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29201__i = 0, G__29201__a = new Array(arguments.length -  0);
while (G__29201__i < G__29201__a.length) {G__29201__a[G__29201__i] = arguments[G__29201__i + 0]; ++G__29201__i;}
  args = new cljs.core.IndexedSeq(G__29201__a,0);
} 
return G__29200__delegate.call(this,args);};
G__29200.cljs$lang$maxFixedArity = 0;
G__29200.cljs$lang$applyTo = (function (arglist__29202){
var args = cljs.core.seq(arglist__29202);
return G__29200__delegate(args);
});
G__29200.cljs$core$IFn$_invoke$arity$variadic = G__29200__delegate;
return G__29200;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29203__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29204__i = 0, G__29204__a = new Array(arguments.length -  0);
while (G__29204__i < G__29204__a.length) {G__29204__a[G__29204__i] = arguments[G__29204__i + 0]; ++G__29204__i;}
  args = new cljs.core.IndexedSeq(G__29204__a,0);
} 
return G__29203__delegate.call(this,args);};
G__29203.cljs$lang$maxFixedArity = 0;
G__29203.cljs$lang$applyTo = (function (arglist__29205){
var args = cljs.core.seq(arglist__29205);
return G__29203__delegate(args);
});
G__29203.cljs$core$IFn$_invoke$arity$variadic = G__29203__delegate;
return G__29203;
})()
;

return null;
});
