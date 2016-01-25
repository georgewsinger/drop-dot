goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63226__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63227__i = 0, G__63227__a = new Array(arguments.length -  0);
while (G__63227__i < G__63227__a.length) {G__63227__a[G__63227__i] = arguments[G__63227__i + 0]; ++G__63227__i;}
  args = new cljs.core.IndexedSeq(G__63227__a,0);
} 
return G__63226__delegate.call(this,args);};
G__63226.cljs$lang$maxFixedArity = 0;
G__63226.cljs$lang$applyTo = (function (arglist__63228){
var args = cljs.core.seq(arglist__63228);
return G__63226__delegate(args);
});
G__63226.cljs$core$IFn$_invoke$arity$variadic = G__63226__delegate;
return G__63226;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63229__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63230__i = 0, G__63230__a = new Array(arguments.length -  0);
while (G__63230__i < G__63230__a.length) {G__63230__a[G__63230__i] = arguments[G__63230__i + 0]; ++G__63230__i;}
  args = new cljs.core.IndexedSeq(G__63230__a,0);
} 
return G__63229__delegate.call(this,args);};
G__63229.cljs$lang$maxFixedArity = 0;
G__63229.cljs$lang$applyTo = (function (arglist__63231){
var args = cljs.core.seq(arglist__63231);
return G__63229__delegate(args);
});
G__63229.cljs$core$IFn$_invoke$arity$variadic = G__63229__delegate;
return G__63229;
})()
;

return null;
});
