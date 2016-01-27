goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31503__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31504__i = 0, G__31504__a = new Array(arguments.length -  0);
while (G__31504__i < G__31504__a.length) {G__31504__a[G__31504__i] = arguments[G__31504__i + 0]; ++G__31504__i;}
  args = new cljs.core.IndexedSeq(G__31504__a,0);
} 
return G__31503__delegate.call(this,args);};
G__31503.cljs$lang$maxFixedArity = 0;
G__31503.cljs$lang$applyTo = (function (arglist__31505){
var args = cljs.core.seq(arglist__31505);
return G__31503__delegate(args);
});
G__31503.cljs$core$IFn$_invoke$arity$variadic = G__31503__delegate;
return G__31503;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31506__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31507__i = 0, G__31507__a = new Array(arguments.length -  0);
while (G__31507__i < G__31507__a.length) {G__31507__a[G__31507__i] = arguments[G__31507__i + 0]; ++G__31507__i;}
  args = new cljs.core.IndexedSeq(G__31507__a,0);
} 
return G__31506__delegate.call(this,args);};
G__31506.cljs$lang$maxFixedArity = 0;
G__31506.cljs$lang$applyTo = (function (arglist__31508){
var args = cljs.core.seq(arglist__31508);
return G__31506__delegate(args);
});
G__31506.cljs$core$IFn$_invoke$arity$variadic = G__31506__delegate;
return G__31506;
})()
;

return null;
});
