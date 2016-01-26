goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21978__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21979__i = 0, G__21979__a = new Array(arguments.length -  0);
while (G__21979__i < G__21979__a.length) {G__21979__a[G__21979__i] = arguments[G__21979__i + 0]; ++G__21979__i;}
  args = new cljs.core.IndexedSeq(G__21979__a,0);
} 
return G__21978__delegate.call(this,args);};
G__21978.cljs$lang$maxFixedArity = 0;
G__21978.cljs$lang$applyTo = (function (arglist__21980){
var args = cljs.core.seq(arglist__21980);
return G__21978__delegate(args);
});
G__21978.cljs$core$IFn$_invoke$arity$variadic = G__21978__delegate;
return G__21978;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21981__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21982__i = 0, G__21982__a = new Array(arguments.length -  0);
while (G__21982__i < G__21982__a.length) {G__21982__a[G__21982__i] = arguments[G__21982__i + 0]; ++G__21982__i;}
  args = new cljs.core.IndexedSeq(G__21982__a,0);
} 
return G__21981__delegate.call(this,args);};
G__21981.cljs$lang$maxFixedArity = 0;
G__21981.cljs$lang$applyTo = (function (arglist__21983){
var args = cljs.core.seq(arglist__21983);
return G__21981__delegate(args);
});
G__21981.cljs$core$IFn$_invoke$arity$variadic = G__21981__delegate;
return G__21981;
})()
;

return null;
});
