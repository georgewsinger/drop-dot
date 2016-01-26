goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30110__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30111__i = 0, G__30111__a = new Array(arguments.length -  0);
while (G__30111__i < G__30111__a.length) {G__30111__a[G__30111__i] = arguments[G__30111__i + 0]; ++G__30111__i;}
  args = new cljs.core.IndexedSeq(G__30111__a,0);
} 
return G__30110__delegate.call(this,args);};
G__30110.cljs$lang$maxFixedArity = 0;
G__30110.cljs$lang$applyTo = (function (arglist__30112){
var args = cljs.core.seq(arglist__30112);
return G__30110__delegate(args);
});
G__30110.cljs$core$IFn$_invoke$arity$variadic = G__30110__delegate;
return G__30110;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30113__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30114__i = 0, G__30114__a = new Array(arguments.length -  0);
while (G__30114__i < G__30114__a.length) {G__30114__a[G__30114__i] = arguments[G__30114__i + 0]; ++G__30114__i;}
  args = new cljs.core.IndexedSeq(G__30114__a,0);
} 
return G__30113__delegate.call(this,args);};
G__30113.cljs$lang$maxFixedArity = 0;
G__30113.cljs$lang$applyTo = (function (arglist__30115){
var args = cljs.core.seq(arglist__30115);
return G__30113__delegate(args);
});
G__30113.cljs$core$IFn$_invoke$arity$variadic = G__30113__delegate;
return G__30113;
})()
;

return null;
});
