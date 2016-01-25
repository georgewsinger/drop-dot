goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__258472__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__258472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258473__i = 0, G__258473__a = new Array(arguments.length -  0);
while (G__258473__i < G__258473__a.length) {G__258473__a[G__258473__i] = arguments[G__258473__i + 0]; ++G__258473__i;}
  args = new cljs.core.IndexedSeq(G__258473__a,0);
} 
return G__258472__delegate.call(this,args);};
G__258472.cljs$lang$maxFixedArity = 0;
G__258472.cljs$lang$applyTo = (function (arglist__258474){
var args = cljs.core.seq(arglist__258474);
return G__258472__delegate(args);
});
G__258472.cljs$core$IFn$_invoke$arity$variadic = G__258472__delegate;
return G__258472;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__258475__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__258475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258476__i = 0, G__258476__a = new Array(arguments.length -  0);
while (G__258476__i < G__258476__a.length) {G__258476__a[G__258476__i] = arguments[G__258476__i + 0]; ++G__258476__i;}
  args = new cljs.core.IndexedSeq(G__258476__a,0);
} 
return G__258475__delegate.call(this,args);};
G__258475.cljs$lang$maxFixedArity = 0;
G__258475.cljs$lang$applyTo = (function (arglist__258477){
var args = cljs.core.seq(arglist__258477);
return G__258475__delegate(args);
});
G__258475.cljs$core$IFn$_invoke$arity$variadic = G__258475__delegate;
return G__258475;
})()
;

return null;
});
