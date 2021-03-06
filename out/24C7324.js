goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30957__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30958__i = 0, G__30958__a = new Array(arguments.length -  0);
while (G__30958__i < G__30958__a.length) {G__30958__a[G__30958__i] = arguments[G__30958__i + 0]; ++G__30958__i;}
  args = new cljs.core.IndexedSeq(G__30958__a,0);
} 
return G__30957__delegate.call(this,args);};
G__30957.cljs$lang$maxFixedArity = 0;
G__30957.cljs$lang$applyTo = (function (arglist__30959){
var args = cljs.core.seq(arglist__30959);
return G__30957__delegate(args);
});
G__30957.cljs$core$IFn$_invoke$arity$variadic = G__30957__delegate;
return G__30957;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30960__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30961__i = 0, G__30961__a = new Array(arguments.length -  0);
while (G__30961__i < G__30961__a.length) {G__30961__a[G__30961__i] = arguments[G__30961__i + 0]; ++G__30961__i;}
  args = new cljs.core.IndexedSeq(G__30961__a,0);
} 
return G__30960__delegate.call(this,args);};
G__30960.cljs$lang$maxFixedArity = 0;
G__30960.cljs$lang$applyTo = (function (arglist__30962){
var args = cljs.core.seq(arglist__30962);
return G__30960__delegate(args);
});
G__30960.cljs$core$IFn$_invoke$arity$variadic = G__30960__delegate;
return G__30960;
})()
;

return null;
});
