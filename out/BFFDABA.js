goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__391726__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__391726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__391727__i = 0, G__391727__a = new Array(arguments.length -  0);
while (G__391727__i < G__391727__a.length) {G__391727__a[G__391727__i] = arguments[G__391727__i + 0]; ++G__391727__i;}
  args = new cljs.core.IndexedSeq(G__391727__a,0);
} 
return G__391726__delegate.call(this,args);};
G__391726.cljs$lang$maxFixedArity = 0;
G__391726.cljs$lang$applyTo = (function (arglist__391728){
var args = cljs.core.seq(arglist__391728);
return G__391726__delegate(args);
});
G__391726.cljs$core$IFn$_invoke$arity$variadic = G__391726__delegate;
return G__391726;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__391729__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__391729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__391730__i = 0, G__391730__a = new Array(arguments.length -  0);
while (G__391730__i < G__391730__a.length) {G__391730__a[G__391730__i] = arguments[G__391730__i + 0]; ++G__391730__i;}
  args = new cljs.core.IndexedSeq(G__391730__a,0);
} 
return G__391729__delegate.call(this,args);};
G__391729.cljs$lang$maxFixedArity = 0;
G__391729.cljs$lang$applyTo = (function (arglist__391731){
var args = cljs.core.seq(arglist__391731);
return G__391729__delegate(args);
});
G__391729.cljs$core$IFn$_invoke$arity$variadic = G__391729__delegate;
return G__391729;
})()
;

return null;
});
