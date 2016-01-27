goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47496__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47497__i = 0, G__47497__a = new Array(arguments.length -  0);
while (G__47497__i < G__47497__a.length) {G__47497__a[G__47497__i] = arguments[G__47497__i + 0]; ++G__47497__i;}
  args = new cljs.core.IndexedSeq(G__47497__a,0);
} 
return G__47496__delegate.call(this,args);};
G__47496.cljs$lang$maxFixedArity = 0;
G__47496.cljs$lang$applyTo = (function (arglist__47498){
var args = cljs.core.seq(arglist__47498);
return G__47496__delegate(args);
});
G__47496.cljs$core$IFn$_invoke$arity$variadic = G__47496__delegate;
return G__47496;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47499__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47500__i = 0, G__47500__a = new Array(arguments.length -  0);
while (G__47500__i < G__47500__a.length) {G__47500__a[G__47500__i] = arguments[G__47500__i + 0]; ++G__47500__i;}
  args = new cljs.core.IndexedSeq(G__47500__a,0);
} 
return G__47499__delegate.call(this,args);};
G__47499.cljs$lang$maxFixedArity = 0;
G__47499.cljs$lang$applyTo = (function (arglist__47501){
var args = cljs.core.seq(arglist__47501);
return G__47499__delegate(args);
});
G__47499.cljs$core$IFn$_invoke$arity$variadic = G__47499__delegate;
return G__47499;
})()
;

return null;
});
