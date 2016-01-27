goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__149290__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__149290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149291__i = 0, G__149291__a = new Array(arguments.length -  0);
while (G__149291__i < G__149291__a.length) {G__149291__a[G__149291__i] = arguments[G__149291__i + 0]; ++G__149291__i;}
  args = new cljs.core.IndexedSeq(G__149291__a,0);
} 
return G__149290__delegate.call(this,args);};
G__149290.cljs$lang$maxFixedArity = 0;
G__149290.cljs$lang$applyTo = (function (arglist__149292){
var args = cljs.core.seq(arglist__149292);
return G__149290__delegate(args);
});
G__149290.cljs$core$IFn$_invoke$arity$variadic = G__149290__delegate;
return G__149290;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__149293__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__149293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149294__i = 0, G__149294__a = new Array(arguments.length -  0);
while (G__149294__i < G__149294__a.length) {G__149294__a[G__149294__i] = arguments[G__149294__i + 0]; ++G__149294__i;}
  args = new cljs.core.IndexedSeq(G__149294__a,0);
} 
return G__149293__delegate.call(this,args);};
G__149293.cljs$lang$maxFixedArity = 0;
G__149293.cljs$lang$applyTo = (function (arglist__149295){
var args = cljs.core.seq(arglist__149295);
return G__149293__delegate(args);
});
G__149293.cljs$core$IFn$_invoke$arity$variadic = G__149293__delegate;
return G__149293;
})()
;

return null;
});
