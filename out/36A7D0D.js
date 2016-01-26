goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25625__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25626__i = 0, G__25626__a = new Array(arguments.length -  0);
while (G__25626__i < G__25626__a.length) {G__25626__a[G__25626__i] = arguments[G__25626__i + 0]; ++G__25626__i;}
  args = new cljs.core.IndexedSeq(G__25626__a,0);
} 
return G__25625__delegate.call(this,args);};
G__25625.cljs$lang$maxFixedArity = 0;
G__25625.cljs$lang$applyTo = (function (arglist__25627){
var args = cljs.core.seq(arglist__25627);
return G__25625__delegate(args);
});
G__25625.cljs$core$IFn$_invoke$arity$variadic = G__25625__delegate;
return G__25625;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25628__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25629__i = 0, G__25629__a = new Array(arguments.length -  0);
while (G__25629__i < G__25629__a.length) {G__25629__a[G__25629__i] = arguments[G__25629__i + 0]; ++G__25629__i;}
  args = new cljs.core.IndexedSeq(G__25629__a,0);
} 
return G__25628__delegate.call(this,args);};
G__25628.cljs$lang$maxFixedArity = 0;
G__25628.cljs$lang$applyTo = (function (arglist__25630){
var args = cljs.core.seq(arglist__25630);
return G__25628__delegate(args);
});
G__25628.cljs$core$IFn$_invoke$arity$variadic = G__25628__delegate;
return G__25628;
})()
;

return null;
});
