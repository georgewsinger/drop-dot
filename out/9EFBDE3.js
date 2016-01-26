goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__290976__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__290976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290977__i = 0, G__290977__a = new Array(arguments.length -  0);
while (G__290977__i < G__290977__a.length) {G__290977__a[G__290977__i] = arguments[G__290977__i + 0]; ++G__290977__i;}
  args = new cljs.core.IndexedSeq(G__290977__a,0);
} 
return G__290976__delegate.call(this,args);};
G__290976.cljs$lang$maxFixedArity = 0;
G__290976.cljs$lang$applyTo = (function (arglist__290978){
var args = cljs.core.seq(arglist__290978);
return G__290976__delegate(args);
});
G__290976.cljs$core$IFn$_invoke$arity$variadic = G__290976__delegate;
return G__290976;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__290979__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__290979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290980__i = 0, G__290980__a = new Array(arguments.length -  0);
while (G__290980__i < G__290980__a.length) {G__290980__a[G__290980__i] = arguments[G__290980__i + 0]; ++G__290980__i;}
  args = new cljs.core.IndexedSeq(G__290980__a,0);
} 
return G__290979__delegate.call(this,args);};
G__290979.cljs$lang$maxFixedArity = 0;
G__290979.cljs$lang$applyTo = (function (arglist__290981){
var args = cljs.core.seq(arglist__290981);
return G__290979__delegate(args);
});
G__290979.cljs$core$IFn$_invoke$arity$variadic = G__290979__delegate;
return G__290979;
})()
;

return null;
});
