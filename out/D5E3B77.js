goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33215__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33216__i = 0, G__33216__a = new Array(arguments.length -  0);
while (G__33216__i < G__33216__a.length) {G__33216__a[G__33216__i] = arguments[G__33216__i + 0]; ++G__33216__i;}
  args = new cljs.core.IndexedSeq(G__33216__a,0);
} 
return G__33215__delegate.call(this,args);};
G__33215.cljs$lang$maxFixedArity = 0;
G__33215.cljs$lang$applyTo = (function (arglist__33217){
var args = cljs.core.seq(arglist__33217);
return G__33215__delegate(args);
});
G__33215.cljs$core$IFn$_invoke$arity$variadic = G__33215__delegate;
return G__33215;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33218__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33219__i = 0, G__33219__a = new Array(arguments.length -  0);
while (G__33219__i < G__33219__a.length) {G__33219__a[G__33219__i] = arguments[G__33219__i + 0]; ++G__33219__i;}
  args = new cljs.core.IndexedSeq(G__33219__a,0);
} 
return G__33218__delegate.call(this,args);};
G__33218.cljs$lang$maxFixedArity = 0;
G__33218.cljs$lang$applyTo = (function (arglist__33220){
var args = cljs.core.seq(arglist__33220);
return G__33218__delegate(args);
});
G__33218.cljs$core$IFn$_invoke$arity$variadic = G__33218__delegate;
return G__33218;
})()
;

return null;
});
