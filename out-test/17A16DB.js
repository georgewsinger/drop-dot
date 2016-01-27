goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57306__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57307__i = 0, G__57307__a = new Array(arguments.length -  0);
while (G__57307__i < G__57307__a.length) {G__57307__a[G__57307__i] = arguments[G__57307__i + 0]; ++G__57307__i;}
  args = new cljs.core.IndexedSeq(G__57307__a,0);
} 
return G__57306__delegate.call(this,args);};
G__57306.cljs$lang$maxFixedArity = 0;
G__57306.cljs$lang$applyTo = (function (arglist__57308){
var args = cljs.core.seq(arglist__57308);
return G__57306__delegate(args);
});
G__57306.cljs$core$IFn$_invoke$arity$variadic = G__57306__delegate;
return G__57306;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57309__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57310__i = 0, G__57310__a = new Array(arguments.length -  0);
while (G__57310__i < G__57310__a.length) {G__57310__a[G__57310__i] = arguments[G__57310__i + 0]; ++G__57310__i;}
  args = new cljs.core.IndexedSeq(G__57310__a,0);
} 
return G__57309__delegate.call(this,args);};
G__57309.cljs$lang$maxFixedArity = 0;
G__57309.cljs$lang$applyTo = (function (arglist__57311){
var args = cljs.core.seq(arglist__57311);
return G__57309__delegate(args);
});
G__57309.cljs$core$IFn$_invoke$arity$variadic = G__57309__delegate;
return G__57309;
})()
;

return null;
});
