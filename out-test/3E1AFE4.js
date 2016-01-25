goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10950__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10951__i = 0, G__10951__a = new Array(arguments.length -  0);
while (G__10951__i < G__10951__a.length) {G__10951__a[G__10951__i] = arguments[G__10951__i + 0]; ++G__10951__i;}
  args = new cljs.core.IndexedSeq(G__10951__a,0);
} 
return G__10950__delegate.call(this,args);};
G__10950.cljs$lang$maxFixedArity = 0;
G__10950.cljs$lang$applyTo = (function (arglist__10952){
var args = cljs.core.seq(arglist__10952);
return G__10950__delegate(args);
});
G__10950.cljs$core$IFn$_invoke$arity$variadic = G__10950__delegate;
return G__10950;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10953__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10954__i = 0, G__10954__a = new Array(arguments.length -  0);
while (G__10954__i < G__10954__a.length) {G__10954__a[G__10954__i] = arguments[G__10954__i + 0]; ++G__10954__i;}
  args = new cljs.core.IndexedSeq(G__10954__a,0);
} 
return G__10953__delegate.call(this,args);};
G__10953.cljs$lang$maxFixedArity = 0;
G__10953.cljs$lang$applyTo = (function (arglist__10955){
var args = cljs.core.seq(arglist__10955);
return G__10953__delegate(args);
});
G__10953.cljs$core$IFn$_invoke$arity$variadic = G__10953__delegate;
return G__10953;
})()
;

return null;
});
