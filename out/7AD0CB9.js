goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44257__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44258__i = 0, G__44258__a = new Array(arguments.length -  0);
while (G__44258__i < G__44258__a.length) {G__44258__a[G__44258__i] = arguments[G__44258__i + 0]; ++G__44258__i;}
  args = new cljs.core.IndexedSeq(G__44258__a,0);
} 
return G__44257__delegate.call(this,args);};
G__44257.cljs$lang$maxFixedArity = 0;
G__44257.cljs$lang$applyTo = (function (arglist__44259){
var args = cljs.core.seq(arglist__44259);
return G__44257__delegate(args);
});
G__44257.cljs$core$IFn$_invoke$arity$variadic = G__44257__delegate;
return G__44257;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44260__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44261__i = 0, G__44261__a = new Array(arguments.length -  0);
while (G__44261__i < G__44261__a.length) {G__44261__a[G__44261__i] = arguments[G__44261__i + 0]; ++G__44261__i;}
  args = new cljs.core.IndexedSeq(G__44261__a,0);
} 
return G__44260__delegate.call(this,args);};
G__44260.cljs$lang$maxFixedArity = 0;
G__44260.cljs$lang$applyTo = (function (arglist__44262){
var args = cljs.core.seq(arglist__44262);
return G__44260__delegate(args);
});
G__44260.cljs$core$IFn$_invoke$arity$variadic = G__44260__delegate;
return G__44260;
})()
;

return null;
});
