goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28925__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28926__i = 0, G__28926__a = new Array(arguments.length -  0);
while (G__28926__i < G__28926__a.length) {G__28926__a[G__28926__i] = arguments[G__28926__i + 0]; ++G__28926__i;}
  args = new cljs.core.IndexedSeq(G__28926__a,0);
} 
return G__28925__delegate.call(this,args);};
G__28925.cljs$lang$maxFixedArity = 0;
G__28925.cljs$lang$applyTo = (function (arglist__28927){
var args = cljs.core.seq(arglist__28927);
return G__28925__delegate(args);
});
G__28925.cljs$core$IFn$_invoke$arity$variadic = G__28925__delegate;
return G__28925;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28928__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28929__i = 0, G__28929__a = new Array(arguments.length -  0);
while (G__28929__i < G__28929__a.length) {G__28929__a[G__28929__i] = arguments[G__28929__i + 0]; ++G__28929__i;}
  args = new cljs.core.IndexedSeq(G__28929__a,0);
} 
return G__28928__delegate.call(this,args);};
G__28928.cljs$lang$maxFixedArity = 0;
G__28928.cljs$lang$applyTo = (function (arglist__28930){
var args = cljs.core.seq(arglist__28930);
return G__28928__delegate(args);
});
G__28928.cljs$core$IFn$_invoke$arity$variadic = G__28928__delegate;
return G__28928;
})()
;

return null;
});
