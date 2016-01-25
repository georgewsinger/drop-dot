goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10769__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10770__i = 0, G__10770__a = new Array(arguments.length -  0);
while (G__10770__i < G__10770__a.length) {G__10770__a[G__10770__i] = arguments[G__10770__i + 0]; ++G__10770__i;}
  args = new cljs.core.IndexedSeq(G__10770__a,0);
} 
return G__10769__delegate.call(this,args);};
G__10769.cljs$lang$maxFixedArity = 0;
G__10769.cljs$lang$applyTo = (function (arglist__10771){
var args = cljs.core.seq(arglist__10771);
return G__10769__delegate(args);
});
G__10769.cljs$core$IFn$_invoke$arity$variadic = G__10769__delegate;
return G__10769;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10772__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10773__i = 0, G__10773__a = new Array(arguments.length -  0);
while (G__10773__i < G__10773__a.length) {G__10773__a[G__10773__i] = arguments[G__10773__i + 0]; ++G__10773__i;}
  args = new cljs.core.IndexedSeq(G__10773__a,0);
} 
return G__10772__delegate.call(this,args);};
G__10772.cljs$lang$maxFixedArity = 0;
G__10772.cljs$lang$applyTo = (function (arglist__10774){
var args = cljs.core.seq(arglist__10774);
return G__10772__delegate(args);
});
G__10772.cljs$core$IFn$_invoke$arity$variadic = G__10772__delegate;
return G__10772;
})()
;

return null;
});
