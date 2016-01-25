goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24815__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24816__i = 0, G__24816__a = new Array(arguments.length -  0);
while (G__24816__i < G__24816__a.length) {G__24816__a[G__24816__i] = arguments[G__24816__i + 0]; ++G__24816__i;}
  args = new cljs.core.IndexedSeq(G__24816__a,0);
} 
return G__24815__delegate.call(this,args);};
G__24815.cljs$lang$maxFixedArity = 0;
G__24815.cljs$lang$applyTo = (function (arglist__24817){
var args = cljs.core.seq(arglist__24817);
return G__24815__delegate(args);
});
G__24815.cljs$core$IFn$_invoke$arity$variadic = G__24815__delegate;
return G__24815;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24818__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24819__i = 0, G__24819__a = new Array(arguments.length -  0);
while (G__24819__i < G__24819__a.length) {G__24819__a[G__24819__i] = arguments[G__24819__i + 0]; ++G__24819__i;}
  args = new cljs.core.IndexedSeq(G__24819__a,0);
} 
return G__24818__delegate.call(this,args);};
G__24818.cljs$lang$maxFixedArity = 0;
G__24818.cljs$lang$applyTo = (function (arglist__24820){
var args = cljs.core.seq(arglist__24820);
return G__24818__delegate(args);
});
G__24818.cljs$core$IFn$_invoke$arity$variadic = G__24818__delegate;
return G__24818;
})()
;

return null;
});
