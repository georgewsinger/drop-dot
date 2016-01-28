goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37696__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37697__i = 0, G__37697__a = new Array(arguments.length -  0);
while (G__37697__i < G__37697__a.length) {G__37697__a[G__37697__i] = arguments[G__37697__i + 0]; ++G__37697__i;}
  args = new cljs.core.IndexedSeq(G__37697__a,0);
} 
return G__37696__delegate.call(this,args);};
G__37696.cljs$lang$maxFixedArity = 0;
G__37696.cljs$lang$applyTo = (function (arglist__37698){
var args = cljs.core.seq(arglist__37698);
return G__37696__delegate(args);
});
G__37696.cljs$core$IFn$_invoke$arity$variadic = G__37696__delegate;
return G__37696;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37699__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37700__i = 0, G__37700__a = new Array(arguments.length -  0);
while (G__37700__i < G__37700__a.length) {G__37700__a[G__37700__i] = arguments[G__37700__i + 0]; ++G__37700__i;}
  args = new cljs.core.IndexedSeq(G__37700__a,0);
} 
return G__37699__delegate.call(this,args);};
G__37699.cljs$lang$maxFixedArity = 0;
G__37699.cljs$lang$applyTo = (function (arglist__37701){
var args = cljs.core.seq(arglist__37701);
return G__37699__delegate(args);
});
G__37699.cljs$core$IFn$_invoke$arity$variadic = G__37699__delegate;
return G__37699;
})()
;

return null;
});
