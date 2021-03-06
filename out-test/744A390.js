goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64139__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64140__i = 0, G__64140__a = new Array(arguments.length -  0);
while (G__64140__i < G__64140__a.length) {G__64140__a[G__64140__i] = arguments[G__64140__i + 0]; ++G__64140__i;}
  args = new cljs.core.IndexedSeq(G__64140__a,0);
} 
return G__64139__delegate.call(this,args);};
G__64139.cljs$lang$maxFixedArity = 0;
G__64139.cljs$lang$applyTo = (function (arglist__64141){
var args = cljs.core.seq(arglist__64141);
return G__64139__delegate(args);
});
G__64139.cljs$core$IFn$_invoke$arity$variadic = G__64139__delegate;
return G__64139;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64142__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64143__i = 0, G__64143__a = new Array(arguments.length -  0);
while (G__64143__i < G__64143__a.length) {G__64143__a[G__64143__i] = arguments[G__64143__i + 0]; ++G__64143__i;}
  args = new cljs.core.IndexedSeq(G__64143__a,0);
} 
return G__64142__delegate.call(this,args);};
G__64142.cljs$lang$maxFixedArity = 0;
G__64142.cljs$lang$applyTo = (function (arglist__64144){
var args = cljs.core.seq(arglist__64144);
return G__64142__delegate(args);
});
G__64142.cljs$core$IFn$_invoke$arity$variadic = G__64142__delegate;
return G__64142;
})()
;

return null;
});
