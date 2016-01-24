goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33228__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33229__i = 0, G__33229__a = new Array(arguments.length -  0);
while (G__33229__i < G__33229__a.length) {G__33229__a[G__33229__i] = arguments[G__33229__i + 0]; ++G__33229__i;}
  args = new cljs.core.IndexedSeq(G__33229__a,0);
} 
return G__33228__delegate.call(this,args);};
G__33228.cljs$lang$maxFixedArity = 0;
G__33228.cljs$lang$applyTo = (function (arglist__33230){
var args = cljs.core.seq(arglist__33230);
return G__33228__delegate(args);
});
G__33228.cljs$core$IFn$_invoke$arity$variadic = G__33228__delegate;
return G__33228;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33231__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33232__i = 0, G__33232__a = new Array(arguments.length -  0);
while (G__33232__i < G__33232__a.length) {G__33232__a[G__33232__i] = arguments[G__33232__i + 0]; ++G__33232__i;}
  args = new cljs.core.IndexedSeq(G__33232__a,0);
} 
return G__33231__delegate.call(this,args);};
G__33231.cljs$lang$maxFixedArity = 0;
G__33231.cljs$lang$applyTo = (function (arglist__33233){
var args = cljs.core.seq(arglist__33233);
return G__33231__delegate(args);
});
G__33231.cljs$core$IFn$_invoke$arity$variadic = G__33231__delegate;
return G__33231;
})()
;

return null;
});
