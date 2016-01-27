goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29189__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29190__i = 0, G__29190__a = new Array(arguments.length -  0);
while (G__29190__i < G__29190__a.length) {G__29190__a[G__29190__i] = arguments[G__29190__i + 0]; ++G__29190__i;}
  args = new cljs.core.IndexedSeq(G__29190__a,0);
} 
return G__29189__delegate.call(this,args);};
G__29189.cljs$lang$maxFixedArity = 0;
G__29189.cljs$lang$applyTo = (function (arglist__29191){
var args = cljs.core.seq(arglist__29191);
return G__29189__delegate(args);
});
G__29189.cljs$core$IFn$_invoke$arity$variadic = G__29189__delegate;
return G__29189;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29192__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29193__i = 0, G__29193__a = new Array(arguments.length -  0);
while (G__29193__i < G__29193__a.length) {G__29193__a[G__29193__i] = arguments[G__29193__i + 0]; ++G__29193__i;}
  args = new cljs.core.IndexedSeq(G__29193__a,0);
} 
return G__29192__delegate.call(this,args);};
G__29192.cljs$lang$maxFixedArity = 0;
G__29192.cljs$lang$applyTo = (function (arglist__29194){
var args = cljs.core.seq(arglist__29194);
return G__29192__delegate(args);
});
G__29192.cljs$core$IFn$_invoke$arity$variadic = G__29192__delegate;
return G__29192;
})()
;

return null;
});
