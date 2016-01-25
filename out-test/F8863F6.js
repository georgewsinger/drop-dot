goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46565__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46566__i = 0, G__46566__a = new Array(arguments.length -  0);
while (G__46566__i < G__46566__a.length) {G__46566__a[G__46566__i] = arguments[G__46566__i + 0]; ++G__46566__i;}
  args = new cljs.core.IndexedSeq(G__46566__a,0);
} 
return G__46565__delegate.call(this,args);};
G__46565.cljs$lang$maxFixedArity = 0;
G__46565.cljs$lang$applyTo = (function (arglist__46567){
var args = cljs.core.seq(arglist__46567);
return G__46565__delegate(args);
});
G__46565.cljs$core$IFn$_invoke$arity$variadic = G__46565__delegate;
return G__46565;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46568__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46569__i = 0, G__46569__a = new Array(arguments.length -  0);
while (G__46569__i < G__46569__a.length) {G__46569__a[G__46569__i] = arguments[G__46569__i + 0]; ++G__46569__i;}
  args = new cljs.core.IndexedSeq(G__46569__a,0);
} 
return G__46568__delegate.call(this,args);};
G__46568.cljs$lang$maxFixedArity = 0;
G__46568.cljs$lang$applyTo = (function (arglist__46570){
var args = cljs.core.seq(arglist__46570);
return G__46568__delegate(args);
});
G__46568.cljs$core$IFn$_invoke$arity$variadic = G__46568__delegate;
return G__46568;
})()
;

return null;
});
