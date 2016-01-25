goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29125__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29126__i = 0, G__29126__a = new Array(arguments.length -  0);
while (G__29126__i < G__29126__a.length) {G__29126__a[G__29126__i] = arguments[G__29126__i + 0]; ++G__29126__i;}
  args = new cljs.core.IndexedSeq(G__29126__a,0);
} 
return G__29125__delegate.call(this,args);};
G__29125.cljs$lang$maxFixedArity = 0;
G__29125.cljs$lang$applyTo = (function (arglist__29127){
var args = cljs.core.seq(arglist__29127);
return G__29125__delegate(args);
});
G__29125.cljs$core$IFn$_invoke$arity$variadic = G__29125__delegate;
return G__29125;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29128__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29129__i = 0, G__29129__a = new Array(arguments.length -  0);
while (G__29129__i < G__29129__a.length) {G__29129__a[G__29129__i] = arguments[G__29129__i + 0]; ++G__29129__i;}
  args = new cljs.core.IndexedSeq(G__29129__a,0);
} 
return G__29128__delegate.call(this,args);};
G__29128.cljs$lang$maxFixedArity = 0;
G__29128.cljs$lang$applyTo = (function (arglist__29130){
var args = cljs.core.seq(arglist__29130);
return G__29128__delegate(args);
});
G__29128.cljs$core$IFn$_invoke$arity$variadic = G__29128__delegate;
return G__29128;
})()
;

return null;
});
