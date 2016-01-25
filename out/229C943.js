goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__99356__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__99356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__99357__i = 0, G__99357__a = new Array(arguments.length -  0);
while (G__99357__i < G__99357__a.length) {G__99357__a[G__99357__i] = arguments[G__99357__i + 0]; ++G__99357__i;}
  args = new cljs.core.IndexedSeq(G__99357__a,0);
} 
return G__99356__delegate.call(this,args);};
G__99356.cljs$lang$maxFixedArity = 0;
G__99356.cljs$lang$applyTo = (function (arglist__99358){
var args = cljs.core.seq(arglist__99358);
return G__99356__delegate(args);
});
G__99356.cljs$core$IFn$_invoke$arity$variadic = G__99356__delegate;
return G__99356;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__99359__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__99359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__99360__i = 0, G__99360__a = new Array(arguments.length -  0);
while (G__99360__i < G__99360__a.length) {G__99360__a[G__99360__i] = arguments[G__99360__i + 0]; ++G__99360__i;}
  args = new cljs.core.IndexedSeq(G__99360__a,0);
} 
return G__99359__delegate.call(this,args);};
G__99359.cljs$lang$maxFixedArity = 0;
G__99359.cljs$lang$applyTo = (function (arglist__99361){
var args = cljs.core.seq(arglist__99361);
return G__99359__delegate(args);
});
G__99359.cljs$core$IFn$_invoke$arity$variadic = G__99359__delegate;
return G__99359;
})()
;

return null;
});
