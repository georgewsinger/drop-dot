goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10574__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10575__i = 0, G__10575__a = new Array(arguments.length -  0);
while (G__10575__i < G__10575__a.length) {G__10575__a[G__10575__i] = arguments[G__10575__i + 0]; ++G__10575__i;}
  args = new cljs.core.IndexedSeq(G__10575__a,0);
} 
return G__10574__delegate.call(this,args);};
G__10574.cljs$lang$maxFixedArity = 0;
G__10574.cljs$lang$applyTo = (function (arglist__10576){
var args = cljs.core.seq(arglist__10576);
return G__10574__delegate(args);
});
G__10574.cljs$core$IFn$_invoke$arity$variadic = G__10574__delegate;
return G__10574;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10577__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10578__i = 0, G__10578__a = new Array(arguments.length -  0);
while (G__10578__i < G__10578__a.length) {G__10578__a[G__10578__i] = arguments[G__10578__i + 0]; ++G__10578__i;}
  args = new cljs.core.IndexedSeq(G__10578__a,0);
} 
return G__10577__delegate.call(this,args);};
G__10577.cljs$lang$maxFixedArity = 0;
G__10577.cljs$lang$applyTo = (function (arglist__10579){
var args = cljs.core.seq(arglist__10579);
return G__10577__delegate(args);
});
G__10577.cljs$core$IFn$_invoke$arity$variadic = G__10577__delegate;
return G__10577;
})()
;

return null;
});
