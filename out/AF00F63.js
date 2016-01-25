goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17500__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17501__i = 0, G__17501__a = new Array(arguments.length -  0);
while (G__17501__i < G__17501__a.length) {G__17501__a[G__17501__i] = arguments[G__17501__i + 0]; ++G__17501__i;}
  args = new cljs.core.IndexedSeq(G__17501__a,0);
} 
return G__17500__delegate.call(this,args);};
G__17500.cljs$lang$maxFixedArity = 0;
G__17500.cljs$lang$applyTo = (function (arglist__17502){
var args = cljs.core.seq(arglist__17502);
return G__17500__delegate(args);
});
G__17500.cljs$core$IFn$_invoke$arity$variadic = G__17500__delegate;
return G__17500;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17503__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17504__i = 0, G__17504__a = new Array(arguments.length -  0);
while (G__17504__i < G__17504__a.length) {G__17504__a[G__17504__i] = arguments[G__17504__i + 0]; ++G__17504__i;}
  args = new cljs.core.IndexedSeq(G__17504__a,0);
} 
return G__17503__delegate.call(this,args);};
G__17503.cljs$lang$maxFixedArity = 0;
G__17503.cljs$lang$applyTo = (function (arglist__17505){
var args = cljs.core.seq(arglist__17505);
return G__17503__delegate(args);
});
G__17503.cljs$core$IFn$_invoke$arity$variadic = G__17503__delegate;
return G__17503;
})()
;

return null;
});
