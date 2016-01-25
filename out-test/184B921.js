goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14011__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14012__i = 0, G__14012__a = new Array(arguments.length -  0);
while (G__14012__i < G__14012__a.length) {G__14012__a[G__14012__i] = arguments[G__14012__i + 0]; ++G__14012__i;}
  args = new cljs.core.IndexedSeq(G__14012__a,0);
} 
return G__14011__delegate.call(this,args);};
G__14011.cljs$lang$maxFixedArity = 0;
G__14011.cljs$lang$applyTo = (function (arglist__14013){
var args = cljs.core.seq(arglist__14013);
return G__14011__delegate(args);
});
G__14011.cljs$core$IFn$_invoke$arity$variadic = G__14011__delegate;
return G__14011;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14014__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14015__i = 0, G__14015__a = new Array(arguments.length -  0);
while (G__14015__i < G__14015__a.length) {G__14015__a[G__14015__i] = arguments[G__14015__i + 0]; ++G__14015__i;}
  args = new cljs.core.IndexedSeq(G__14015__a,0);
} 
return G__14014__delegate.call(this,args);};
G__14014.cljs$lang$maxFixedArity = 0;
G__14014.cljs$lang$applyTo = (function (arglist__14016){
var args = cljs.core.seq(arglist__14016);
return G__14014__delegate(args);
});
G__14014.cljs$core$IFn$_invoke$arity$variadic = G__14014__delegate;
return G__14014;
})()
;

return null;
});
