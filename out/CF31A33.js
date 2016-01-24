goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31389__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31390__i = 0, G__31390__a = new Array(arguments.length -  0);
while (G__31390__i < G__31390__a.length) {G__31390__a[G__31390__i] = arguments[G__31390__i + 0]; ++G__31390__i;}
  args = new cljs.core.IndexedSeq(G__31390__a,0);
} 
return G__31389__delegate.call(this,args);};
G__31389.cljs$lang$maxFixedArity = 0;
G__31389.cljs$lang$applyTo = (function (arglist__31391){
var args = cljs.core.seq(arglist__31391);
return G__31389__delegate(args);
});
G__31389.cljs$core$IFn$_invoke$arity$variadic = G__31389__delegate;
return G__31389;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31392__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31393__i = 0, G__31393__a = new Array(arguments.length -  0);
while (G__31393__i < G__31393__a.length) {G__31393__a[G__31393__i] = arguments[G__31393__i + 0]; ++G__31393__i;}
  args = new cljs.core.IndexedSeq(G__31393__a,0);
} 
return G__31392__delegate.call(this,args);};
G__31392.cljs$lang$maxFixedArity = 0;
G__31392.cljs$lang$applyTo = (function (arglist__31394){
var args = cljs.core.seq(arglist__31394);
return G__31392__delegate(args);
});
G__31392.cljs$core$IFn$_invoke$arity$variadic = G__31392__delegate;
return G__31392;
})()
;

return null;
});
