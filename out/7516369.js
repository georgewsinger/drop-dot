goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__367327__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__367327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__367328__i = 0, G__367328__a = new Array(arguments.length -  0);
while (G__367328__i < G__367328__a.length) {G__367328__a[G__367328__i] = arguments[G__367328__i + 0]; ++G__367328__i;}
  args = new cljs.core.IndexedSeq(G__367328__a,0);
} 
return G__367327__delegate.call(this,args);};
G__367327.cljs$lang$maxFixedArity = 0;
G__367327.cljs$lang$applyTo = (function (arglist__367329){
var args = cljs.core.seq(arglist__367329);
return G__367327__delegate(args);
});
G__367327.cljs$core$IFn$_invoke$arity$variadic = G__367327__delegate;
return G__367327;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__367330__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__367330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__367331__i = 0, G__367331__a = new Array(arguments.length -  0);
while (G__367331__i < G__367331__a.length) {G__367331__a[G__367331__i] = arguments[G__367331__i + 0]; ++G__367331__i;}
  args = new cljs.core.IndexedSeq(G__367331__a,0);
} 
return G__367330__delegate.call(this,args);};
G__367330.cljs$lang$maxFixedArity = 0;
G__367330.cljs$lang$applyTo = (function (arglist__367332){
var args = cljs.core.seq(arglist__367332);
return G__367330__delegate(args);
});
G__367330.cljs$core$IFn$_invoke$arity$variadic = G__367330__delegate;
return G__367330;
})()
;

return null;
});
