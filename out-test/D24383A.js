goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67282__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67283__i = 0, G__67283__a = new Array(arguments.length -  0);
while (G__67283__i < G__67283__a.length) {G__67283__a[G__67283__i] = arguments[G__67283__i + 0]; ++G__67283__i;}
  args = new cljs.core.IndexedSeq(G__67283__a,0);
} 
return G__67282__delegate.call(this,args);};
G__67282.cljs$lang$maxFixedArity = 0;
G__67282.cljs$lang$applyTo = (function (arglist__67284){
var args = cljs.core.seq(arglist__67284);
return G__67282__delegate(args);
});
G__67282.cljs$core$IFn$_invoke$arity$variadic = G__67282__delegate;
return G__67282;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67285__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67286__i = 0, G__67286__a = new Array(arguments.length -  0);
while (G__67286__i < G__67286__a.length) {G__67286__a[G__67286__i] = arguments[G__67286__i + 0]; ++G__67286__i;}
  args = new cljs.core.IndexedSeq(G__67286__a,0);
} 
return G__67285__delegate.call(this,args);};
G__67285.cljs$lang$maxFixedArity = 0;
G__67285.cljs$lang$applyTo = (function (arglist__67287){
var args = cljs.core.seq(arglist__67287);
return G__67285__delegate(args);
});
G__67285.cljs$core$IFn$_invoke$arity$variadic = G__67285__delegate;
return G__67285;
})()
;

return null;
});
