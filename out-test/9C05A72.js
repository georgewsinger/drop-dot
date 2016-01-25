goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30642__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30643__i = 0, G__30643__a = new Array(arguments.length -  0);
while (G__30643__i < G__30643__a.length) {G__30643__a[G__30643__i] = arguments[G__30643__i + 0]; ++G__30643__i;}
  args = new cljs.core.IndexedSeq(G__30643__a,0);
} 
return G__30642__delegate.call(this,args);};
G__30642.cljs$lang$maxFixedArity = 0;
G__30642.cljs$lang$applyTo = (function (arglist__30644){
var args = cljs.core.seq(arglist__30644);
return G__30642__delegate(args);
});
G__30642.cljs$core$IFn$_invoke$arity$variadic = G__30642__delegate;
return G__30642;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30645__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30646__i = 0, G__30646__a = new Array(arguments.length -  0);
while (G__30646__i < G__30646__a.length) {G__30646__a[G__30646__i] = arguments[G__30646__i + 0]; ++G__30646__i;}
  args = new cljs.core.IndexedSeq(G__30646__a,0);
} 
return G__30645__delegate.call(this,args);};
G__30645.cljs$lang$maxFixedArity = 0;
G__30645.cljs$lang$applyTo = (function (arglist__30647){
var args = cljs.core.seq(arglist__30647);
return G__30645__delegate(args);
});
G__30645.cljs$core$IFn$_invoke$arity$variadic = G__30645__delegate;
return G__30645;
})()
;

return null;
});
