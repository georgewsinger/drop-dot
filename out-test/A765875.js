goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__181836__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__181836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__181837__i = 0, G__181837__a = new Array(arguments.length -  0);
while (G__181837__i < G__181837__a.length) {G__181837__a[G__181837__i] = arguments[G__181837__i + 0]; ++G__181837__i;}
  args = new cljs.core.IndexedSeq(G__181837__a,0);
} 
return G__181836__delegate.call(this,args);};
G__181836.cljs$lang$maxFixedArity = 0;
G__181836.cljs$lang$applyTo = (function (arglist__181838){
var args = cljs.core.seq(arglist__181838);
return G__181836__delegate(args);
});
G__181836.cljs$core$IFn$_invoke$arity$variadic = G__181836__delegate;
return G__181836;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__181839__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__181839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__181840__i = 0, G__181840__a = new Array(arguments.length -  0);
while (G__181840__i < G__181840__a.length) {G__181840__a[G__181840__i] = arguments[G__181840__i + 0]; ++G__181840__i;}
  args = new cljs.core.IndexedSeq(G__181840__a,0);
} 
return G__181839__delegate.call(this,args);};
G__181839.cljs$lang$maxFixedArity = 0;
G__181839.cljs$lang$applyTo = (function (arglist__181841){
var args = cljs.core.seq(arglist__181841);
return G__181839__delegate(args);
});
G__181839.cljs$core$IFn$_invoke$arity$variadic = G__181839__delegate;
return G__181839;
})()
;

return null;
});
