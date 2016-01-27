goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__316297__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__316297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__316298__i = 0, G__316298__a = new Array(arguments.length -  0);
while (G__316298__i < G__316298__a.length) {G__316298__a[G__316298__i] = arguments[G__316298__i + 0]; ++G__316298__i;}
  args = new cljs.core.IndexedSeq(G__316298__a,0);
} 
return G__316297__delegate.call(this,args);};
G__316297.cljs$lang$maxFixedArity = 0;
G__316297.cljs$lang$applyTo = (function (arglist__316299){
var args = cljs.core.seq(arglist__316299);
return G__316297__delegate(args);
});
G__316297.cljs$core$IFn$_invoke$arity$variadic = G__316297__delegate;
return G__316297;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__316300__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__316300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__316301__i = 0, G__316301__a = new Array(arguments.length -  0);
while (G__316301__i < G__316301__a.length) {G__316301__a[G__316301__i] = arguments[G__316301__i + 0]; ++G__316301__i;}
  args = new cljs.core.IndexedSeq(G__316301__a,0);
} 
return G__316300__delegate.call(this,args);};
G__316300.cljs$lang$maxFixedArity = 0;
G__316300.cljs$lang$applyTo = (function (arglist__316302){
var args = cljs.core.seq(arglist__316302);
return G__316300__delegate(args);
});
G__316300.cljs$core$IFn$_invoke$arity$variadic = G__316300__delegate;
return G__316300;
})()
;

return null;
});
