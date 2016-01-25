goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__205725__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__205725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__205726__i = 0, G__205726__a = new Array(arguments.length -  0);
while (G__205726__i < G__205726__a.length) {G__205726__a[G__205726__i] = arguments[G__205726__i + 0]; ++G__205726__i;}
  args = new cljs.core.IndexedSeq(G__205726__a,0);
} 
return G__205725__delegate.call(this,args);};
G__205725.cljs$lang$maxFixedArity = 0;
G__205725.cljs$lang$applyTo = (function (arglist__205727){
var args = cljs.core.seq(arglist__205727);
return G__205725__delegate(args);
});
G__205725.cljs$core$IFn$_invoke$arity$variadic = G__205725__delegate;
return G__205725;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__205728__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__205728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__205729__i = 0, G__205729__a = new Array(arguments.length -  0);
while (G__205729__i < G__205729__a.length) {G__205729__a[G__205729__i] = arguments[G__205729__i + 0]; ++G__205729__i;}
  args = new cljs.core.IndexedSeq(G__205729__a,0);
} 
return G__205728__delegate.call(this,args);};
G__205728.cljs$lang$maxFixedArity = 0;
G__205728.cljs$lang$applyTo = (function (arglist__205730){
var args = cljs.core.seq(arglist__205730);
return G__205728__delegate(args);
});
G__205728.cljs$core$IFn$_invoke$arity$variadic = G__205728__delegate;
return G__205728;
})()
;

return null;
});
