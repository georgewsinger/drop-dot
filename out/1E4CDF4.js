goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40375__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40376__i = 0, G__40376__a = new Array(arguments.length -  0);
while (G__40376__i < G__40376__a.length) {G__40376__a[G__40376__i] = arguments[G__40376__i + 0]; ++G__40376__i;}
  args = new cljs.core.IndexedSeq(G__40376__a,0);
} 
return G__40375__delegate.call(this,args);};
G__40375.cljs$lang$maxFixedArity = 0;
G__40375.cljs$lang$applyTo = (function (arglist__40377){
var args = cljs.core.seq(arglist__40377);
return G__40375__delegate(args);
});
G__40375.cljs$core$IFn$_invoke$arity$variadic = G__40375__delegate;
return G__40375;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40378__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40378 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40379__i = 0, G__40379__a = new Array(arguments.length -  0);
while (G__40379__i < G__40379__a.length) {G__40379__a[G__40379__i] = arguments[G__40379__i + 0]; ++G__40379__i;}
  args = new cljs.core.IndexedSeq(G__40379__a,0);
} 
return G__40378__delegate.call(this,args);};
G__40378.cljs$lang$maxFixedArity = 0;
G__40378.cljs$lang$applyTo = (function (arglist__40380){
var args = cljs.core.seq(arglist__40380);
return G__40378__delegate(args);
});
G__40378.cljs$core$IFn$_invoke$arity$variadic = G__40378__delegate;
return G__40378;
})()
;

return null;
});
