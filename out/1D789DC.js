goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21010__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21011__i = 0, G__21011__a = new Array(arguments.length -  0);
while (G__21011__i < G__21011__a.length) {G__21011__a[G__21011__i] = arguments[G__21011__i + 0]; ++G__21011__i;}
  args = new cljs.core.IndexedSeq(G__21011__a,0);
} 
return G__21010__delegate.call(this,args);};
G__21010.cljs$lang$maxFixedArity = 0;
G__21010.cljs$lang$applyTo = (function (arglist__21012){
var args = cljs.core.seq(arglist__21012);
return G__21010__delegate(args);
});
G__21010.cljs$core$IFn$_invoke$arity$variadic = G__21010__delegate;
return G__21010;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21013__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21014__i = 0, G__21014__a = new Array(arguments.length -  0);
while (G__21014__i < G__21014__a.length) {G__21014__a[G__21014__i] = arguments[G__21014__i + 0]; ++G__21014__i;}
  args = new cljs.core.IndexedSeq(G__21014__a,0);
} 
return G__21013__delegate.call(this,args);};
G__21013.cljs$lang$maxFixedArity = 0;
G__21013.cljs$lang$applyTo = (function (arglist__21015){
var args = cljs.core.seq(arglist__21015);
return G__21013__delegate(args);
});
G__21013.cljs$core$IFn$_invoke$arity$variadic = G__21013__delegate;
return G__21013;
})()
;

return null;
});
