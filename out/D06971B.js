goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__155681__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__155681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__155682__i = 0, G__155682__a = new Array(arguments.length -  0);
while (G__155682__i < G__155682__a.length) {G__155682__a[G__155682__i] = arguments[G__155682__i + 0]; ++G__155682__i;}
  args = new cljs.core.IndexedSeq(G__155682__a,0);
} 
return G__155681__delegate.call(this,args);};
G__155681.cljs$lang$maxFixedArity = 0;
G__155681.cljs$lang$applyTo = (function (arglist__155683){
var args = cljs.core.seq(arglist__155683);
return G__155681__delegate(args);
});
G__155681.cljs$core$IFn$_invoke$arity$variadic = G__155681__delegate;
return G__155681;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__155684__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__155684 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__155685__i = 0, G__155685__a = new Array(arguments.length -  0);
while (G__155685__i < G__155685__a.length) {G__155685__a[G__155685__i] = arguments[G__155685__i + 0]; ++G__155685__i;}
  args = new cljs.core.IndexedSeq(G__155685__a,0);
} 
return G__155684__delegate.call(this,args);};
G__155684.cljs$lang$maxFixedArity = 0;
G__155684.cljs$lang$applyTo = (function (arglist__155686){
var args = cljs.core.seq(arglist__155686);
return G__155684__delegate(args);
});
G__155684.cljs$core$IFn$_invoke$arity$variadic = G__155684__delegate;
return G__155684;
})()
;

return null;
});
