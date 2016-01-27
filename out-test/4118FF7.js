goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77916__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77917__i = 0, G__77917__a = new Array(arguments.length -  0);
while (G__77917__i < G__77917__a.length) {G__77917__a[G__77917__i] = arguments[G__77917__i + 0]; ++G__77917__i;}
  args = new cljs.core.IndexedSeq(G__77917__a,0);
} 
return G__77916__delegate.call(this,args);};
G__77916.cljs$lang$maxFixedArity = 0;
G__77916.cljs$lang$applyTo = (function (arglist__77918){
var args = cljs.core.seq(arglist__77918);
return G__77916__delegate(args);
});
G__77916.cljs$core$IFn$_invoke$arity$variadic = G__77916__delegate;
return G__77916;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__77919__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__77919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77920__i = 0, G__77920__a = new Array(arguments.length -  0);
while (G__77920__i < G__77920__a.length) {G__77920__a[G__77920__i] = arguments[G__77920__i + 0]; ++G__77920__i;}
  args = new cljs.core.IndexedSeq(G__77920__a,0);
} 
return G__77919__delegate.call(this,args);};
G__77919.cljs$lang$maxFixedArity = 0;
G__77919.cljs$lang$applyTo = (function (arglist__77921){
var args = cljs.core.seq(arglist__77921);
return G__77919__delegate(args);
});
G__77919.cljs$core$IFn$_invoke$arity$variadic = G__77919__delegate;
return G__77919;
})()
;

return null;
});
