goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11491__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11492__i = 0, G__11492__a = new Array(arguments.length -  0);
while (G__11492__i < G__11492__a.length) {G__11492__a[G__11492__i] = arguments[G__11492__i + 0]; ++G__11492__i;}
  args = new cljs.core.IndexedSeq(G__11492__a,0);
} 
return G__11491__delegate.call(this,args);};
G__11491.cljs$lang$maxFixedArity = 0;
G__11491.cljs$lang$applyTo = (function (arglist__11493){
var args = cljs.core.seq(arglist__11493);
return G__11491__delegate(args);
});
G__11491.cljs$core$IFn$_invoke$arity$variadic = G__11491__delegate;
return G__11491;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11494__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11495__i = 0, G__11495__a = new Array(arguments.length -  0);
while (G__11495__i < G__11495__a.length) {G__11495__a[G__11495__i] = arguments[G__11495__i + 0]; ++G__11495__i;}
  args = new cljs.core.IndexedSeq(G__11495__a,0);
} 
return G__11494__delegate.call(this,args);};
G__11494.cljs$lang$maxFixedArity = 0;
G__11494.cljs$lang$applyTo = (function (arglist__11496){
var args = cljs.core.seq(arglist__11496);
return G__11494__delegate(args);
});
G__11494.cljs$core$IFn$_invoke$arity$variadic = G__11494__delegate;
return G__11494;
})()
;

return null;
});
