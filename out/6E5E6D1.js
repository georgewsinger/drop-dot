goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63499__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63500__i = 0, G__63500__a = new Array(arguments.length -  0);
while (G__63500__i < G__63500__a.length) {G__63500__a[G__63500__i] = arguments[G__63500__i + 0]; ++G__63500__i;}
  args = new cljs.core.IndexedSeq(G__63500__a,0);
} 
return G__63499__delegate.call(this,args);};
G__63499.cljs$lang$maxFixedArity = 0;
G__63499.cljs$lang$applyTo = (function (arglist__63501){
var args = cljs.core.seq(arglist__63501);
return G__63499__delegate(args);
});
G__63499.cljs$core$IFn$_invoke$arity$variadic = G__63499__delegate;
return G__63499;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63502__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63503__i = 0, G__63503__a = new Array(arguments.length -  0);
while (G__63503__i < G__63503__a.length) {G__63503__a[G__63503__i] = arguments[G__63503__i + 0]; ++G__63503__i;}
  args = new cljs.core.IndexedSeq(G__63503__a,0);
} 
return G__63502__delegate.call(this,args);};
G__63502.cljs$lang$maxFixedArity = 0;
G__63502.cljs$lang$applyTo = (function (arglist__63504){
var args = cljs.core.seq(arglist__63504);
return G__63502__delegate(args);
});
G__63502.cljs$core$IFn$_invoke$arity$variadic = G__63502__delegate;
return G__63502;
})()
;

return null;
});
