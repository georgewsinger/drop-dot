goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__315642__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__315642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__315643__i = 0, G__315643__a = new Array(arguments.length -  0);
while (G__315643__i < G__315643__a.length) {G__315643__a[G__315643__i] = arguments[G__315643__i + 0]; ++G__315643__i;}
  args = new cljs.core.IndexedSeq(G__315643__a,0);
} 
return G__315642__delegate.call(this,args);};
G__315642.cljs$lang$maxFixedArity = 0;
G__315642.cljs$lang$applyTo = (function (arglist__315644){
var args = cljs.core.seq(arglist__315644);
return G__315642__delegate(args);
});
G__315642.cljs$core$IFn$_invoke$arity$variadic = G__315642__delegate;
return G__315642;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__315645__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__315645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__315646__i = 0, G__315646__a = new Array(arguments.length -  0);
while (G__315646__i < G__315646__a.length) {G__315646__a[G__315646__i] = arguments[G__315646__i + 0]; ++G__315646__i;}
  args = new cljs.core.IndexedSeq(G__315646__a,0);
} 
return G__315645__delegate.call(this,args);};
G__315645.cljs$lang$maxFixedArity = 0;
G__315645.cljs$lang$applyTo = (function (arglist__315647){
var args = cljs.core.seq(arglist__315647);
return G__315645__delegate(args);
});
G__315645.cljs$core$IFn$_invoke$arity$variadic = G__315645__delegate;
return G__315645;
})()
;

return null;
});
