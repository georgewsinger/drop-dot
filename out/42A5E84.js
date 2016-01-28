goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__371200__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__371200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__371201__i = 0, G__371201__a = new Array(arguments.length -  0);
while (G__371201__i < G__371201__a.length) {G__371201__a[G__371201__i] = arguments[G__371201__i + 0]; ++G__371201__i;}
  args = new cljs.core.IndexedSeq(G__371201__a,0);
} 
return G__371200__delegate.call(this,args);};
G__371200.cljs$lang$maxFixedArity = 0;
G__371200.cljs$lang$applyTo = (function (arglist__371202){
var args = cljs.core.seq(arglist__371202);
return G__371200__delegate(args);
});
G__371200.cljs$core$IFn$_invoke$arity$variadic = G__371200__delegate;
return G__371200;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__371203__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__371203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__371204__i = 0, G__371204__a = new Array(arguments.length -  0);
while (G__371204__i < G__371204__a.length) {G__371204__a[G__371204__i] = arguments[G__371204__i + 0]; ++G__371204__i;}
  args = new cljs.core.IndexedSeq(G__371204__a,0);
} 
return G__371203__delegate.call(this,args);};
G__371203.cljs$lang$maxFixedArity = 0;
G__371203.cljs$lang$applyTo = (function (arglist__371205){
var args = cljs.core.seq(arglist__371205);
return G__371203__delegate(args);
});
G__371203.cljs$core$IFn$_invoke$arity$variadic = G__371203__delegate;
return G__371203;
})()
;

return null;
});
