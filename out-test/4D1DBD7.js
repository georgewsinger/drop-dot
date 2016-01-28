goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29672__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29673__i = 0, G__29673__a = new Array(arguments.length -  0);
while (G__29673__i < G__29673__a.length) {G__29673__a[G__29673__i] = arguments[G__29673__i + 0]; ++G__29673__i;}
  args = new cljs.core.IndexedSeq(G__29673__a,0);
} 
return G__29672__delegate.call(this,args);};
G__29672.cljs$lang$maxFixedArity = 0;
G__29672.cljs$lang$applyTo = (function (arglist__29674){
var args = cljs.core.seq(arglist__29674);
return G__29672__delegate(args);
});
G__29672.cljs$core$IFn$_invoke$arity$variadic = G__29672__delegate;
return G__29672;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29675__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29676__i = 0, G__29676__a = new Array(arguments.length -  0);
while (G__29676__i < G__29676__a.length) {G__29676__a[G__29676__i] = arguments[G__29676__i + 0]; ++G__29676__i;}
  args = new cljs.core.IndexedSeq(G__29676__a,0);
} 
return G__29675__delegate.call(this,args);};
G__29675.cljs$lang$maxFixedArity = 0;
G__29675.cljs$lang$applyTo = (function (arglist__29677){
var args = cljs.core.seq(arglist__29677);
return G__29675__delegate(args);
});
G__29675.cljs$core$IFn$_invoke$arity$variadic = G__29675__delegate;
return G__29675;
})()
;

return null;
});
