goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29542__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29543__i = 0, G__29543__a = new Array(arguments.length -  0);
while (G__29543__i < G__29543__a.length) {G__29543__a[G__29543__i] = arguments[G__29543__i + 0]; ++G__29543__i;}
  args = new cljs.core.IndexedSeq(G__29543__a,0);
} 
return G__29542__delegate.call(this,args);};
G__29542.cljs$lang$maxFixedArity = 0;
G__29542.cljs$lang$applyTo = (function (arglist__29544){
var args = cljs.core.seq(arglist__29544);
return G__29542__delegate(args);
});
G__29542.cljs$core$IFn$_invoke$arity$variadic = G__29542__delegate;
return G__29542;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29545__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29546__i = 0, G__29546__a = new Array(arguments.length -  0);
while (G__29546__i < G__29546__a.length) {G__29546__a[G__29546__i] = arguments[G__29546__i + 0]; ++G__29546__i;}
  args = new cljs.core.IndexedSeq(G__29546__a,0);
} 
return G__29545__delegate.call(this,args);};
G__29545.cljs$lang$maxFixedArity = 0;
G__29545.cljs$lang$applyTo = (function (arglist__29547){
var args = cljs.core.seq(arglist__29547);
return G__29545__delegate(args);
});
G__29545.cljs$core$IFn$_invoke$arity$variadic = G__29545__delegate;
return G__29545;
})()
;

return null;
});
