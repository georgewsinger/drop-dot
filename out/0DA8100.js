goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24247__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24248__i = 0, G__24248__a = new Array(arguments.length -  0);
while (G__24248__i < G__24248__a.length) {G__24248__a[G__24248__i] = arguments[G__24248__i + 0]; ++G__24248__i;}
  args = new cljs.core.IndexedSeq(G__24248__a,0);
} 
return G__24247__delegate.call(this,args);};
G__24247.cljs$lang$maxFixedArity = 0;
G__24247.cljs$lang$applyTo = (function (arglist__24249){
var args = cljs.core.seq(arglist__24249);
return G__24247__delegate(args);
});
G__24247.cljs$core$IFn$_invoke$arity$variadic = G__24247__delegate;
return G__24247;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24250__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24251__i = 0, G__24251__a = new Array(arguments.length -  0);
while (G__24251__i < G__24251__a.length) {G__24251__a[G__24251__i] = arguments[G__24251__i + 0]; ++G__24251__i;}
  args = new cljs.core.IndexedSeq(G__24251__a,0);
} 
return G__24250__delegate.call(this,args);};
G__24250.cljs$lang$maxFixedArity = 0;
G__24250.cljs$lang$applyTo = (function (arglist__24252){
var args = cljs.core.seq(arglist__24252);
return G__24250__delegate(args);
});
G__24250.cljs$core$IFn$_invoke$arity$variadic = G__24250__delegate;
return G__24250;
})()
;

return null;
});
