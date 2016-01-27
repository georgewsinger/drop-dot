goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__127678__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__127678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__127679__i = 0, G__127679__a = new Array(arguments.length -  0);
while (G__127679__i < G__127679__a.length) {G__127679__a[G__127679__i] = arguments[G__127679__i + 0]; ++G__127679__i;}
  args = new cljs.core.IndexedSeq(G__127679__a,0);
} 
return G__127678__delegate.call(this,args);};
G__127678.cljs$lang$maxFixedArity = 0;
G__127678.cljs$lang$applyTo = (function (arglist__127680){
var args = cljs.core.seq(arglist__127680);
return G__127678__delegate(args);
});
G__127678.cljs$core$IFn$_invoke$arity$variadic = G__127678__delegate;
return G__127678;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__127681__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__127681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__127682__i = 0, G__127682__a = new Array(arguments.length -  0);
while (G__127682__i < G__127682__a.length) {G__127682__a[G__127682__i] = arguments[G__127682__i + 0]; ++G__127682__i;}
  args = new cljs.core.IndexedSeq(G__127682__a,0);
} 
return G__127681__delegate.call(this,args);};
G__127681.cljs$lang$maxFixedArity = 0;
G__127681.cljs$lang$applyTo = (function (arglist__127683){
var args = cljs.core.seq(arglist__127683);
return G__127681__delegate(args);
});
G__127681.cljs$core$IFn$_invoke$arity$variadic = G__127681__delegate;
return G__127681;
})()
;

return null;
});
