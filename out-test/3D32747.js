goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__80596__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__80596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80597__i = 0, G__80597__a = new Array(arguments.length -  0);
while (G__80597__i < G__80597__a.length) {G__80597__a[G__80597__i] = arguments[G__80597__i + 0]; ++G__80597__i;}
  args = new cljs.core.IndexedSeq(G__80597__a,0);
} 
return G__80596__delegate.call(this,args);};
G__80596.cljs$lang$maxFixedArity = 0;
G__80596.cljs$lang$applyTo = (function (arglist__80598){
var args = cljs.core.seq(arglist__80598);
return G__80596__delegate(args);
});
G__80596.cljs$core$IFn$_invoke$arity$variadic = G__80596__delegate;
return G__80596;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__80599__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__80599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80600__i = 0, G__80600__a = new Array(arguments.length -  0);
while (G__80600__i < G__80600__a.length) {G__80600__a[G__80600__i] = arguments[G__80600__i + 0]; ++G__80600__i;}
  args = new cljs.core.IndexedSeq(G__80600__a,0);
} 
return G__80599__delegate.call(this,args);};
G__80599.cljs$lang$maxFixedArity = 0;
G__80599.cljs$lang$applyTo = (function (arglist__80601){
var args = cljs.core.seq(arglist__80601);
return G__80599__delegate(args);
});
G__80599.cljs$core$IFn$_invoke$arity$variadic = G__80599__delegate;
return G__80599;
})()
;

return null;
});
