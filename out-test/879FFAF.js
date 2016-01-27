goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__90212__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__90212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90213__i = 0, G__90213__a = new Array(arguments.length -  0);
while (G__90213__i < G__90213__a.length) {G__90213__a[G__90213__i] = arguments[G__90213__i + 0]; ++G__90213__i;}
  args = new cljs.core.IndexedSeq(G__90213__a,0);
} 
return G__90212__delegate.call(this,args);};
G__90212.cljs$lang$maxFixedArity = 0;
G__90212.cljs$lang$applyTo = (function (arglist__90214){
var args = cljs.core.seq(arglist__90214);
return G__90212__delegate(args);
});
G__90212.cljs$core$IFn$_invoke$arity$variadic = G__90212__delegate;
return G__90212;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__90215__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__90215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90216__i = 0, G__90216__a = new Array(arguments.length -  0);
while (G__90216__i < G__90216__a.length) {G__90216__a[G__90216__i] = arguments[G__90216__i + 0]; ++G__90216__i;}
  args = new cljs.core.IndexedSeq(G__90216__a,0);
} 
return G__90215__delegate.call(this,args);};
G__90215.cljs$lang$maxFixedArity = 0;
G__90215.cljs$lang$applyTo = (function (arglist__90217){
var args = cljs.core.seq(arglist__90217);
return G__90215__delegate(args);
});
G__90215.cljs$core$IFn$_invoke$arity$variadic = G__90215__delegate;
return G__90215;
})()
;

return null;
});
