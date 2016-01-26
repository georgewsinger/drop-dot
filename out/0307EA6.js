goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23546__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23547__i = 0, G__23547__a = new Array(arguments.length -  0);
while (G__23547__i < G__23547__a.length) {G__23547__a[G__23547__i] = arguments[G__23547__i + 0]; ++G__23547__i;}
  args = new cljs.core.IndexedSeq(G__23547__a,0);
} 
return G__23546__delegate.call(this,args);};
G__23546.cljs$lang$maxFixedArity = 0;
G__23546.cljs$lang$applyTo = (function (arglist__23548){
var args = cljs.core.seq(arglist__23548);
return G__23546__delegate(args);
});
G__23546.cljs$core$IFn$_invoke$arity$variadic = G__23546__delegate;
return G__23546;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23549__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23550__i = 0, G__23550__a = new Array(arguments.length -  0);
while (G__23550__i < G__23550__a.length) {G__23550__a[G__23550__i] = arguments[G__23550__i + 0]; ++G__23550__i;}
  args = new cljs.core.IndexedSeq(G__23550__a,0);
} 
return G__23549__delegate.call(this,args);};
G__23549.cljs$lang$maxFixedArity = 0;
G__23549.cljs$lang$applyTo = (function (arglist__23551){
var args = cljs.core.seq(arglist__23551);
return G__23549__delegate(args);
});
G__23549.cljs$core$IFn$_invoke$arity$variadic = G__23549__delegate;
return G__23549;
})()
;

return null;
});
