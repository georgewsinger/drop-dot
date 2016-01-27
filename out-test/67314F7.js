goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__165557__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__165557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165558__i = 0, G__165558__a = new Array(arguments.length -  0);
while (G__165558__i < G__165558__a.length) {G__165558__a[G__165558__i] = arguments[G__165558__i + 0]; ++G__165558__i;}
  args = new cljs.core.IndexedSeq(G__165558__a,0);
} 
return G__165557__delegate.call(this,args);};
G__165557.cljs$lang$maxFixedArity = 0;
G__165557.cljs$lang$applyTo = (function (arglist__165559){
var args = cljs.core.seq(arglist__165559);
return G__165557__delegate(args);
});
G__165557.cljs$core$IFn$_invoke$arity$variadic = G__165557__delegate;
return G__165557;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__165560__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__165560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165561__i = 0, G__165561__a = new Array(arguments.length -  0);
while (G__165561__i < G__165561__a.length) {G__165561__a[G__165561__i] = arguments[G__165561__i + 0]; ++G__165561__i;}
  args = new cljs.core.IndexedSeq(G__165561__a,0);
} 
return G__165560__delegate.call(this,args);};
G__165560.cljs$lang$maxFixedArity = 0;
G__165560.cljs$lang$applyTo = (function (arglist__165562){
var args = cljs.core.seq(arglist__165562);
return G__165560__delegate(args);
});
G__165560.cljs$core$IFn$_invoke$arity$variadic = G__165560__delegate;
return G__165560;
})()
;

return null;
});
