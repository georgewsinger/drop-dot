goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27290__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27291__i = 0, G__27291__a = new Array(arguments.length -  0);
while (G__27291__i < G__27291__a.length) {G__27291__a[G__27291__i] = arguments[G__27291__i + 0]; ++G__27291__i;}
  args = new cljs.core.IndexedSeq(G__27291__a,0);
} 
return G__27290__delegate.call(this,args);};
G__27290.cljs$lang$maxFixedArity = 0;
G__27290.cljs$lang$applyTo = (function (arglist__27292){
var args = cljs.core.seq(arglist__27292);
return G__27290__delegate(args);
});
G__27290.cljs$core$IFn$_invoke$arity$variadic = G__27290__delegate;
return G__27290;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27293__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27294__i = 0, G__27294__a = new Array(arguments.length -  0);
while (G__27294__i < G__27294__a.length) {G__27294__a[G__27294__i] = arguments[G__27294__i + 0]; ++G__27294__i;}
  args = new cljs.core.IndexedSeq(G__27294__a,0);
} 
return G__27293__delegate.call(this,args);};
G__27293.cljs$lang$maxFixedArity = 0;
G__27293.cljs$lang$applyTo = (function (arglist__27295){
var args = cljs.core.seq(arglist__27295);
return G__27293__delegate(args);
});
G__27293.cljs$core$IFn$_invoke$arity$variadic = G__27293__delegate;
return G__27293;
})()
;

return null;
});
