goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63385__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63386__i = 0, G__63386__a = new Array(arguments.length -  0);
while (G__63386__i < G__63386__a.length) {G__63386__a[G__63386__i] = arguments[G__63386__i + 0]; ++G__63386__i;}
  args = new cljs.core.IndexedSeq(G__63386__a,0);
} 
return G__63385__delegate.call(this,args);};
G__63385.cljs$lang$maxFixedArity = 0;
G__63385.cljs$lang$applyTo = (function (arglist__63387){
var args = cljs.core.seq(arglist__63387);
return G__63385__delegate(args);
});
G__63385.cljs$core$IFn$_invoke$arity$variadic = G__63385__delegate;
return G__63385;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63388__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63389__i = 0, G__63389__a = new Array(arguments.length -  0);
while (G__63389__i < G__63389__a.length) {G__63389__a[G__63389__i] = arguments[G__63389__i + 0]; ++G__63389__i;}
  args = new cljs.core.IndexedSeq(G__63389__a,0);
} 
return G__63388__delegate.call(this,args);};
G__63388.cljs$lang$maxFixedArity = 0;
G__63388.cljs$lang$applyTo = (function (arglist__63390){
var args = cljs.core.seq(arglist__63390);
return G__63388__delegate(args);
});
G__63388.cljs$core$IFn$_invoke$arity$variadic = G__63388__delegate;
return G__63388;
})()
;

return null;
});
