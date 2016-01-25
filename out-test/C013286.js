goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29114__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29115__i = 0, G__29115__a = new Array(arguments.length -  0);
while (G__29115__i < G__29115__a.length) {G__29115__a[G__29115__i] = arguments[G__29115__i + 0]; ++G__29115__i;}
  args = new cljs.core.IndexedSeq(G__29115__a,0);
} 
return G__29114__delegate.call(this,args);};
G__29114.cljs$lang$maxFixedArity = 0;
G__29114.cljs$lang$applyTo = (function (arglist__29116){
var args = cljs.core.seq(arglist__29116);
return G__29114__delegate(args);
});
G__29114.cljs$core$IFn$_invoke$arity$variadic = G__29114__delegate;
return G__29114;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29117__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29118__i = 0, G__29118__a = new Array(arguments.length -  0);
while (G__29118__i < G__29118__a.length) {G__29118__a[G__29118__i] = arguments[G__29118__i + 0]; ++G__29118__i;}
  args = new cljs.core.IndexedSeq(G__29118__a,0);
} 
return G__29117__delegate.call(this,args);};
G__29117.cljs$lang$maxFixedArity = 0;
G__29117.cljs$lang$applyTo = (function (arglist__29119){
var args = cljs.core.seq(arglist__29119);
return G__29117__delegate(args);
});
G__29117.cljs$core$IFn$_invoke$arity$variadic = G__29117__delegate;
return G__29117;
})()
;

return null;
});
