goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10098__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10099__i = 0, G__10099__a = new Array(arguments.length -  0);
while (G__10099__i < G__10099__a.length) {G__10099__a[G__10099__i] = arguments[G__10099__i + 0]; ++G__10099__i;}
  args = new cljs.core.IndexedSeq(G__10099__a,0);
} 
return G__10098__delegate.call(this,args);};
G__10098.cljs$lang$maxFixedArity = 0;
G__10098.cljs$lang$applyTo = (function (arglist__10100){
var args = cljs.core.seq(arglist__10100);
return G__10098__delegate(args);
});
G__10098.cljs$core$IFn$_invoke$arity$variadic = G__10098__delegate;
return G__10098;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10101__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10102__i = 0, G__10102__a = new Array(arguments.length -  0);
while (G__10102__i < G__10102__a.length) {G__10102__a[G__10102__i] = arguments[G__10102__i + 0]; ++G__10102__i;}
  args = new cljs.core.IndexedSeq(G__10102__a,0);
} 
return G__10101__delegate.call(this,args);};
G__10101.cljs$lang$maxFixedArity = 0;
G__10101.cljs$lang$applyTo = (function (arglist__10103){
var args = cljs.core.seq(arglist__10103);
return G__10101__delegate(args);
});
G__10101.cljs$core$IFn$_invoke$arity$variadic = G__10101__delegate;
return G__10101;
})()
;

return null;
});
