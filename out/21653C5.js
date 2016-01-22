goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15658__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15659__i = 0, G__15659__a = new Array(arguments.length -  0);
while (G__15659__i < G__15659__a.length) {G__15659__a[G__15659__i] = arguments[G__15659__i + 0]; ++G__15659__i;}
  args = new cljs.core.IndexedSeq(G__15659__a,0);
} 
return G__15658__delegate.call(this,args);};
G__15658.cljs$lang$maxFixedArity = 0;
G__15658.cljs$lang$applyTo = (function (arglist__15660){
var args = cljs.core.seq(arglist__15660);
return G__15658__delegate(args);
});
G__15658.cljs$core$IFn$_invoke$arity$variadic = G__15658__delegate;
return G__15658;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15661__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15662__i = 0, G__15662__a = new Array(arguments.length -  0);
while (G__15662__i < G__15662__a.length) {G__15662__a[G__15662__i] = arguments[G__15662__i + 0]; ++G__15662__i;}
  args = new cljs.core.IndexedSeq(G__15662__a,0);
} 
return G__15661__delegate.call(this,args);};
G__15661.cljs$lang$maxFixedArity = 0;
G__15661.cljs$lang$applyTo = (function (arglist__15663){
var args = cljs.core.seq(arglist__15663);
return G__15661__delegate(args);
});
G__15661.cljs$core$IFn$_invoke$arity$variadic = G__15661__delegate;
return G__15661;
})()
;

return null;
});
