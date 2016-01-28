goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__392729__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__392729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__392730__i = 0, G__392730__a = new Array(arguments.length -  0);
while (G__392730__i < G__392730__a.length) {G__392730__a[G__392730__i] = arguments[G__392730__i + 0]; ++G__392730__i;}
  args = new cljs.core.IndexedSeq(G__392730__a,0);
} 
return G__392729__delegate.call(this,args);};
G__392729.cljs$lang$maxFixedArity = 0;
G__392729.cljs$lang$applyTo = (function (arglist__392731){
var args = cljs.core.seq(arglist__392731);
return G__392729__delegate(args);
});
G__392729.cljs$core$IFn$_invoke$arity$variadic = G__392729__delegate;
return G__392729;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__392732__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__392732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__392733__i = 0, G__392733__a = new Array(arguments.length -  0);
while (G__392733__i < G__392733__a.length) {G__392733__a[G__392733__i] = arguments[G__392733__i + 0]; ++G__392733__i;}
  args = new cljs.core.IndexedSeq(G__392733__a,0);
} 
return G__392732__delegate.call(this,args);};
G__392732.cljs$lang$maxFixedArity = 0;
G__392732.cljs$lang$applyTo = (function (arglist__392734){
var args = cljs.core.seq(arglist__392734);
return G__392732__delegate(args);
});
G__392732.cljs$core$IFn$_invoke$arity$variadic = G__392732__delegate;
return G__392732;
})()
;

return null;
});
