goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38401__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38402__i = 0, G__38402__a = new Array(arguments.length -  0);
while (G__38402__i < G__38402__a.length) {G__38402__a[G__38402__i] = arguments[G__38402__i + 0]; ++G__38402__i;}
  args = new cljs.core.IndexedSeq(G__38402__a,0);
} 
return G__38401__delegate.call(this,args);};
G__38401.cljs$lang$maxFixedArity = 0;
G__38401.cljs$lang$applyTo = (function (arglist__38403){
var args = cljs.core.seq(arglist__38403);
return G__38401__delegate(args);
});
G__38401.cljs$core$IFn$_invoke$arity$variadic = G__38401__delegate;
return G__38401;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38404__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38405__i = 0, G__38405__a = new Array(arguments.length -  0);
while (G__38405__i < G__38405__a.length) {G__38405__a[G__38405__i] = arguments[G__38405__i + 0]; ++G__38405__i;}
  args = new cljs.core.IndexedSeq(G__38405__a,0);
} 
return G__38404__delegate.call(this,args);};
G__38404.cljs$lang$maxFixedArity = 0;
G__38404.cljs$lang$applyTo = (function (arglist__38406){
var args = cljs.core.seq(arglist__38406);
return G__38404__delegate(args);
});
G__38404.cljs$core$IFn$_invoke$arity$variadic = G__38404__delegate;
return G__38404;
})()
;

return null;
});
