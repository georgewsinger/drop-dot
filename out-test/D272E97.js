goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26762__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26763__i = 0, G__26763__a = new Array(arguments.length -  0);
while (G__26763__i < G__26763__a.length) {G__26763__a[G__26763__i] = arguments[G__26763__i + 0]; ++G__26763__i;}
  args = new cljs.core.IndexedSeq(G__26763__a,0);
} 
return G__26762__delegate.call(this,args);};
G__26762.cljs$lang$maxFixedArity = 0;
G__26762.cljs$lang$applyTo = (function (arglist__26764){
var args = cljs.core.seq(arglist__26764);
return G__26762__delegate(args);
});
G__26762.cljs$core$IFn$_invoke$arity$variadic = G__26762__delegate;
return G__26762;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26765__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26766__i = 0, G__26766__a = new Array(arguments.length -  0);
while (G__26766__i < G__26766__a.length) {G__26766__a[G__26766__i] = arguments[G__26766__i + 0]; ++G__26766__i;}
  args = new cljs.core.IndexedSeq(G__26766__a,0);
} 
return G__26765__delegate.call(this,args);};
G__26765.cljs$lang$maxFixedArity = 0;
G__26765.cljs$lang$applyTo = (function (arglist__26767){
var args = cljs.core.seq(arglist__26767);
return G__26765__delegate(args);
});
G__26765.cljs$core$IFn$_invoke$arity$variadic = G__26765__delegate;
return G__26765;
})()
;

return null;
});
