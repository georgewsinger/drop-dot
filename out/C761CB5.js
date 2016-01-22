goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21363__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21364__i = 0, G__21364__a = new Array(arguments.length -  0);
while (G__21364__i < G__21364__a.length) {G__21364__a[G__21364__i] = arguments[G__21364__i + 0]; ++G__21364__i;}
  args = new cljs.core.IndexedSeq(G__21364__a,0);
} 
return G__21363__delegate.call(this,args);};
G__21363.cljs$lang$maxFixedArity = 0;
G__21363.cljs$lang$applyTo = (function (arglist__21365){
var args = cljs.core.seq(arglist__21365);
return G__21363__delegate(args);
});
G__21363.cljs$core$IFn$_invoke$arity$variadic = G__21363__delegate;
return G__21363;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21366__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21367__i = 0, G__21367__a = new Array(arguments.length -  0);
while (G__21367__i < G__21367__a.length) {G__21367__a[G__21367__i] = arguments[G__21367__i + 0]; ++G__21367__i;}
  args = new cljs.core.IndexedSeq(G__21367__a,0);
} 
return G__21366__delegate.call(this,args);};
G__21366.cljs$lang$maxFixedArity = 0;
G__21366.cljs$lang$applyTo = (function (arglist__21368){
var args = cljs.core.seq(arglist__21368);
return G__21366__delegate(args);
});
G__21366.cljs$core$IFn$_invoke$arity$variadic = G__21366__delegate;
return G__21366;
})()
;

return null;
});
