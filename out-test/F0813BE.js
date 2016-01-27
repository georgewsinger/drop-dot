goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63396__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63397__i = 0, G__63397__a = new Array(arguments.length -  0);
while (G__63397__i < G__63397__a.length) {G__63397__a[G__63397__i] = arguments[G__63397__i + 0]; ++G__63397__i;}
  args = new cljs.core.IndexedSeq(G__63397__a,0);
} 
return G__63396__delegate.call(this,args);};
G__63396.cljs$lang$maxFixedArity = 0;
G__63396.cljs$lang$applyTo = (function (arglist__63398){
var args = cljs.core.seq(arglist__63398);
return G__63396__delegate(args);
});
G__63396.cljs$core$IFn$_invoke$arity$variadic = G__63396__delegate;
return G__63396;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63399__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63400__i = 0, G__63400__a = new Array(arguments.length -  0);
while (G__63400__i < G__63400__a.length) {G__63400__a[G__63400__i] = arguments[G__63400__i + 0]; ++G__63400__i;}
  args = new cljs.core.IndexedSeq(G__63400__a,0);
} 
return G__63399__delegate.call(this,args);};
G__63399.cljs$lang$maxFixedArity = 0;
G__63399.cljs$lang$applyTo = (function (arglist__63401){
var args = cljs.core.seq(arglist__63401);
return G__63399__delegate(args);
});
G__63399.cljs$core$IFn$_invoke$arity$variadic = G__63399__delegate;
return G__63399;
})()
;

return null;
});
