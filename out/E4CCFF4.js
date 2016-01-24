goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63225__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63226__i = 0, G__63226__a = new Array(arguments.length -  0);
while (G__63226__i < G__63226__a.length) {G__63226__a[G__63226__i] = arguments[G__63226__i + 0]; ++G__63226__i;}
  args = new cljs.core.IndexedSeq(G__63226__a,0);
} 
return G__63225__delegate.call(this,args);};
G__63225.cljs$lang$maxFixedArity = 0;
G__63225.cljs$lang$applyTo = (function (arglist__63227){
var args = cljs.core.seq(arglist__63227);
return G__63225__delegate(args);
});
G__63225.cljs$core$IFn$_invoke$arity$variadic = G__63225__delegate;
return G__63225;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63228__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63229__i = 0, G__63229__a = new Array(arguments.length -  0);
while (G__63229__i < G__63229__a.length) {G__63229__a[G__63229__i] = arguments[G__63229__i + 0]; ++G__63229__i;}
  args = new cljs.core.IndexedSeq(G__63229__a,0);
} 
return G__63228__delegate.call(this,args);};
G__63228.cljs$lang$maxFixedArity = 0;
G__63228.cljs$lang$applyTo = (function (arglist__63230){
var args = cljs.core.seq(arglist__63230);
return G__63228__delegate(args);
});
G__63228.cljs$core$IFn$_invoke$arity$variadic = G__63228__delegate;
return G__63228;
})()
;

return null;
});
