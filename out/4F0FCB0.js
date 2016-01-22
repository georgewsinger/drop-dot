goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16586__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16587__i = 0, G__16587__a = new Array(arguments.length -  0);
while (G__16587__i < G__16587__a.length) {G__16587__a[G__16587__i] = arguments[G__16587__i + 0]; ++G__16587__i;}
  args = new cljs.core.IndexedSeq(G__16587__a,0);
} 
return G__16586__delegate.call(this,args);};
G__16586.cljs$lang$maxFixedArity = 0;
G__16586.cljs$lang$applyTo = (function (arglist__16588){
var args = cljs.core.seq(arglist__16588);
return G__16586__delegate(args);
});
G__16586.cljs$core$IFn$_invoke$arity$variadic = G__16586__delegate;
return G__16586;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16589__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16590__i = 0, G__16590__a = new Array(arguments.length -  0);
while (G__16590__i < G__16590__a.length) {G__16590__a[G__16590__i] = arguments[G__16590__i + 0]; ++G__16590__i;}
  args = new cljs.core.IndexedSeq(G__16590__a,0);
} 
return G__16589__delegate.call(this,args);};
G__16589.cljs$lang$maxFixedArity = 0;
G__16589.cljs$lang$applyTo = (function (arglist__16591){
var args = cljs.core.seq(arglist__16591);
return G__16589__delegate(args);
});
G__16589.cljs$core$IFn$_invoke$arity$variadic = G__16589__delegate;
return G__16589;
})()
;

return null;
});
