goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28226__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28227__i = 0, G__28227__a = new Array(arguments.length -  0);
while (G__28227__i < G__28227__a.length) {G__28227__a[G__28227__i] = arguments[G__28227__i + 0]; ++G__28227__i;}
  args = new cljs.core.IndexedSeq(G__28227__a,0);
} 
return G__28226__delegate.call(this,args);};
G__28226.cljs$lang$maxFixedArity = 0;
G__28226.cljs$lang$applyTo = (function (arglist__28228){
var args = cljs.core.seq(arglist__28228);
return G__28226__delegate(args);
});
G__28226.cljs$core$IFn$_invoke$arity$variadic = G__28226__delegate;
return G__28226;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28229__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28230__i = 0, G__28230__a = new Array(arguments.length -  0);
while (G__28230__i < G__28230__a.length) {G__28230__a[G__28230__i] = arguments[G__28230__i + 0]; ++G__28230__i;}
  args = new cljs.core.IndexedSeq(G__28230__a,0);
} 
return G__28229__delegate.call(this,args);};
G__28229.cljs$lang$maxFixedArity = 0;
G__28229.cljs$lang$applyTo = (function (arglist__28231){
var args = cljs.core.seq(arglist__28231);
return G__28229__delegate(args);
});
G__28229.cljs$core$IFn$_invoke$arity$variadic = G__28229__delegate;
return G__28229;
})()
;

return null;
});
