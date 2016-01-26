goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37472__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37473__i = 0, G__37473__a = new Array(arguments.length -  0);
while (G__37473__i < G__37473__a.length) {G__37473__a[G__37473__i] = arguments[G__37473__i + 0]; ++G__37473__i;}
  args = new cljs.core.IndexedSeq(G__37473__a,0);
} 
return G__37472__delegate.call(this,args);};
G__37472.cljs$lang$maxFixedArity = 0;
G__37472.cljs$lang$applyTo = (function (arglist__37474){
var args = cljs.core.seq(arglist__37474);
return G__37472__delegate(args);
});
G__37472.cljs$core$IFn$_invoke$arity$variadic = G__37472__delegate;
return G__37472;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37475__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37476__i = 0, G__37476__a = new Array(arguments.length -  0);
while (G__37476__i < G__37476__a.length) {G__37476__a[G__37476__i] = arguments[G__37476__i + 0]; ++G__37476__i;}
  args = new cljs.core.IndexedSeq(G__37476__a,0);
} 
return G__37475__delegate.call(this,args);};
G__37475.cljs$lang$maxFixedArity = 0;
G__37475.cljs$lang$applyTo = (function (arglist__37477){
var args = cljs.core.seq(arglist__37477);
return G__37475__delegate(args);
});
G__37475.cljs$core$IFn$_invoke$arity$variadic = G__37475__delegate;
return G__37475;
})()
;

return null;
});
