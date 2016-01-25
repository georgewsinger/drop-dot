goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14660__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14661__i = 0, G__14661__a = new Array(arguments.length -  0);
while (G__14661__i < G__14661__a.length) {G__14661__a[G__14661__i] = arguments[G__14661__i + 0]; ++G__14661__i;}
  args = new cljs.core.IndexedSeq(G__14661__a,0);
} 
return G__14660__delegate.call(this,args);};
G__14660.cljs$lang$maxFixedArity = 0;
G__14660.cljs$lang$applyTo = (function (arglist__14662){
var args = cljs.core.seq(arglist__14662);
return G__14660__delegate(args);
});
G__14660.cljs$core$IFn$_invoke$arity$variadic = G__14660__delegate;
return G__14660;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14663__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14664__i = 0, G__14664__a = new Array(arguments.length -  0);
while (G__14664__i < G__14664__a.length) {G__14664__a[G__14664__i] = arguments[G__14664__i + 0]; ++G__14664__i;}
  args = new cljs.core.IndexedSeq(G__14664__a,0);
} 
return G__14663__delegate.call(this,args);};
G__14663.cljs$lang$maxFixedArity = 0;
G__14663.cljs$lang$applyTo = (function (arglist__14665){
var args = cljs.core.seq(arglist__14665);
return G__14663__delegate(args);
});
G__14663.cljs$core$IFn$_invoke$arity$variadic = G__14663__delegate;
return G__14663;
})()
;

return null;
});
