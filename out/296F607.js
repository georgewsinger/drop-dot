goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__302729__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__302729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__302730__i = 0, G__302730__a = new Array(arguments.length -  0);
while (G__302730__i < G__302730__a.length) {G__302730__a[G__302730__i] = arguments[G__302730__i + 0]; ++G__302730__i;}
  args = new cljs.core.IndexedSeq(G__302730__a,0);
} 
return G__302729__delegate.call(this,args);};
G__302729.cljs$lang$maxFixedArity = 0;
G__302729.cljs$lang$applyTo = (function (arglist__302731){
var args = cljs.core.seq(arglist__302731);
return G__302729__delegate(args);
});
G__302729.cljs$core$IFn$_invoke$arity$variadic = G__302729__delegate;
return G__302729;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__302732__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__302732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__302733__i = 0, G__302733__a = new Array(arguments.length -  0);
while (G__302733__i < G__302733__a.length) {G__302733__a[G__302733__i] = arguments[G__302733__i + 0]; ++G__302733__i;}
  args = new cljs.core.IndexedSeq(G__302733__a,0);
} 
return G__302732__delegate.call(this,args);};
G__302732.cljs$lang$maxFixedArity = 0;
G__302732.cljs$lang$applyTo = (function (arglist__302734){
var args = cljs.core.seq(arglist__302734);
return G__302732__delegate(args);
});
G__302732.cljs$core$IFn$_invoke$arity$variadic = G__302732__delegate;
return G__302732;
})()
;

return null;
});
