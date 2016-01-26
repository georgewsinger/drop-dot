goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33780__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33781__i = 0, G__33781__a = new Array(arguments.length -  0);
while (G__33781__i < G__33781__a.length) {G__33781__a[G__33781__i] = arguments[G__33781__i + 0]; ++G__33781__i;}
  args = new cljs.core.IndexedSeq(G__33781__a,0);
} 
return G__33780__delegate.call(this,args);};
G__33780.cljs$lang$maxFixedArity = 0;
G__33780.cljs$lang$applyTo = (function (arglist__33782){
var args = cljs.core.seq(arglist__33782);
return G__33780__delegate(args);
});
G__33780.cljs$core$IFn$_invoke$arity$variadic = G__33780__delegate;
return G__33780;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33783__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33784__i = 0, G__33784__a = new Array(arguments.length -  0);
while (G__33784__i < G__33784__a.length) {G__33784__a[G__33784__i] = arguments[G__33784__i + 0]; ++G__33784__i;}
  args = new cljs.core.IndexedSeq(G__33784__a,0);
} 
return G__33783__delegate.call(this,args);};
G__33783.cljs$lang$maxFixedArity = 0;
G__33783.cljs$lang$applyTo = (function (arglist__33785){
var args = cljs.core.seq(arglist__33785);
return G__33783__delegate(args);
});
G__33783.cljs$core$IFn$_invoke$arity$variadic = G__33783__delegate;
return G__33783;
})()
;

return null;
});
