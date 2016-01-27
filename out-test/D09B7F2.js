goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52052__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52053__i = 0, G__52053__a = new Array(arguments.length -  0);
while (G__52053__i < G__52053__a.length) {G__52053__a[G__52053__i] = arguments[G__52053__i + 0]; ++G__52053__i;}
  args = new cljs.core.IndexedSeq(G__52053__a,0);
} 
return G__52052__delegate.call(this,args);};
G__52052.cljs$lang$maxFixedArity = 0;
G__52052.cljs$lang$applyTo = (function (arglist__52054){
var args = cljs.core.seq(arglist__52054);
return G__52052__delegate(args);
});
G__52052.cljs$core$IFn$_invoke$arity$variadic = G__52052__delegate;
return G__52052;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52055__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52056__i = 0, G__52056__a = new Array(arguments.length -  0);
while (G__52056__i < G__52056__a.length) {G__52056__a[G__52056__i] = arguments[G__52056__i + 0]; ++G__52056__i;}
  args = new cljs.core.IndexedSeq(G__52056__a,0);
} 
return G__52055__delegate.call(this,args);};
G__52055.cljs$lang$maxFixedArity = 0;
G__52055.cljs$lang$applyTo = (function (arglist__52057){
var args = cljs.core.seq(arglist__52057);
return G__52055__delegate(args);
});
G__52055.cljs$core$IFn$_invoke$arity$variadic = G__52055__delegate;
return G__52055;
})()
;

return null;
});
