goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29746__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29747__i = 0, G__29747__a = new Array(arguments.length -  0);
while (G__29747__i < G__29747__a.length) {G__29747__a[G__29747__i] = arguments[G__29747__i + 0]; ++G__29747__i;}
  args = new cljs.core.IndexedSeq(G__29747__a,0);
} 
return G__29746__delegate.call(this,args);};
G__29746.cljs$lang$maxFixedArity = 0;
G__29746.cljs$lang$applyTo = (function (arglist__29748){
var args = cljs.core.seq(arglist__29748);
return G__29746__delegate(args);
});
G__29746.cljs$core$IFn$_invoke$arity$variadic = G__29746__delegate;
return G__29746;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29749__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29750__i = 0, G__29750__a = new Array(arguments.length -  0);
while (G__29750__i < G__29750__a.length) {G__29750__a[G__29750__i] = arguments[G__29750__i + 0]; ++G__29750__i;}
  args = new cljs.core.IndexedSeq(G__29750__a,0);
} 
return G__29749__delegate.call(this,args);};
G__29749.cljs$lang$maxFixedArity = 0;
G__29749.cljs$lang$applyTo = (function (arglist__29751){
var args = cljs.core.seq(arglist__29751);
return G__29749__delegate(args);
});
G__29749.cljs$core$IFn$_invoke$arity$variadic = G__29749__delegate;
return G__29749;
})()
;

return null;
});
