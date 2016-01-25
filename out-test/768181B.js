goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9918__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9919__i = 0, G__9919__a = new Array(arguments.length -  0);
while (G__9919__i < G__9919__a.length) {G__9919__a[G__9919__i] = arguments[G__9919__i + 0]; ++G__9919__i;}
  args = new cljs.core.IndexedSeq(G__9919__a,0);
} 
return G__9918__delegate.call(this,args);};
G__9918.cljs$lang$maxFixedArity = 0;
G__9918.cljs$lang$applyTo = (function (arglist__9920){
var args = cljs.core.seq(arglist__9920);
return G__9918__delegate(args);
});
G__9918.cljs$core$IFn$_invoke$arity$variadic = G__9918__delegate;
return G__9918;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9921__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9922__i = 0, G__9922__a = new Array(arguments.length -  0);
while (G__9922__i < G__9922__a.length) {G__9922__a[G__9922__i] = arguments[G__9922__i + 0]; ++G__9922__i;}
  args = new cljs.core.IndexedSeq(G__9922__a,0);
} 
return G__9921__delegate.call(this,args);};
G__9921.cljs$lang$maxFixedArity = 0;
G__9921.cljs$lang$applyTo = (function (arglist__9923){
var args = cljs.core.seq(arglist__9923);
return G__9921__delegate(args);
});
G__9921.cljs$core$IFn$_invoke$arity$variadic = G__9921__delegate;
return G__9921;
})()
;

return null;
});
