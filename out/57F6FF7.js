goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37395__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37396__i = 0, G__37396__a = new Array(arguments.length -  0);
while (G__37396__i < G__37396__a.length) {G__37396__a[G__37396__i] = arguments[G__37396__i + 0]; ++G__37396__i;}
  args = new cljs.core.IndexedSeq(G__37396__a,0);
} 
return G__37395__delegate.call(this,args);};
G__37395.cljs$lang$maxFixedArity = 0;
G__37395.cljs$lang$applyTo = (function (arglist__37397){
var args = cljs.core.seq(arglist__37397);
return G__37395__delegate(args);
});
G__37395.cljs$core$IFn$_invoke$arity$variadic = G__37395__delegate;
return G__37395;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37398__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37399__i = 0, G__37399__a = new Array(arguments.length -  0);
while (G__37399__i < G__37399__a.length) {G__37399__a[G__37399__i] = arguments[G__37399__i + 0]; ++G__37399__i;}
  args = new cljs.core.IndexedSeq(G__37399__a,0);
} 
return G__37398__delegate.call(this,args);};
G__37398.cljs$lang$maxFixedArity = 0;
G__37398.cljs$lang$applyTo = (function (arglist__37400){
var args = cljs.core.seq(arglist__37400);
return G__37398__delegate(args);
});
G__37398.cljs$core$IFn$_invoke$arity$variadic = G__37398__delegate;
return G__37398;
})()
;

return null;
});
