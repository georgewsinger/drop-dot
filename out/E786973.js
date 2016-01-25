goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__128989__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__128989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128990__i = 0, G__128990__a = new Array(arguments.length -  0);
while (G__128990__i < G__128990__a.length) {G__128990__a[G__128990__i] = arguments[G__128990__i + 0]; ++G__128990__i;}
  args = new cljs.core.IndexedSeq(G__128990__a,0);
} 
return G__128989__delegate.call(this,args);};
G__128989.cljs$lang$maxFixedArity = 0;
G__128989.cljs$lang$applyTo = (function (arglist__128991){
var args = cljs.core.seq(arglist__128991);
return G__128989__delegate(args);
});
G__128989.cljs$core$IFn$_invoke$arity$variadic = G__128989__delegate;
return G__128989;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__128992__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__128992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128993__i = 0, G__128993__a = new Array(arguments.length -  0);
while (G__128993__i < G__128993__a.length) {G__128993__a[G__128993__i] = arguments[G__128993__i + 0]; ++G__128993__i;}
  args = new cljs.core.IndexedSeq(G__128993__a,0);
} 
return G__128992__delegate.call(this,args);};
G__128992.cljs$lang$maxFixedArity = 0;
G__128992.cljs$lang$applyTo = (function (arglist__128994){
var args = cljs.core.seq(arglist__128994);
return G__128992__delegate(args);
});
G__128992.cljs$core$IFn$_invoke$arity$variadic = G__128992__delegate;
return G__128992;
})()
;

return null;
});
