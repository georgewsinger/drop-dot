goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__356729__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__356729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__356730__i = 0, G__356730__a = new Array(arguments.length -  0);
while (G__356730__i < G__356730__a.length) {G__356730__a[G__356730__i] = arguments[G__356730__i + 0]; ++G__356730__i;}
  args = new cljs.core.IndexedSeq(G__356730__a,0);
} 
return G__356729__delegate.call(this,args);};
G__356729.cljs$lang$maxFixedArity = 0;
G__356729.cljs$lang$applyTo = (function (arglist__356731){
var args = cljs.core.seq(arglist__356731);
return G__356729__delegate(args);
});
G__356729.cljs$core$IFn$_invoke$arity$variadic = G__356729__delegate;
return G__356729;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__356732__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__356732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__356733__i = 0, G__356733__a = new Array(arguments.length -  0);
while (G__356733__i < G__356733__a.length) {G__356733__a[G__356733__i] = arguments[G__356733__i + 0]; ++G__356733__i;}
  args = new cljs.core.IndexedSeq(G__356733__a,0);
} 
return G__356732__delegate.call(this,args);};
G__356732.cljs$lang$maxFixedArity = 0;
G__356732.cljs$lang$applyTo = (function (arglist__356734){
var args = cljs.core.seq(arglist__356734);
return G__356732__delegate(args);
});
G__356732.cljs$core$IFn$_invoke$arity$variadic = G__356732__delegate;
return G__356732;
})()
;

return null;
});
