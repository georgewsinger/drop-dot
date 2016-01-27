goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__309208__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__309208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__309209__i = 0, G__309209__a = new Array(arguments.length -  0);
while (G__309209__i < G__309209__a.length) {G__309209__a[G__309209__i] = arguments[G__309209__i + 0]; ++G__309209__i;}
  args = new cljs.core.IndexedSeq(G__309209__a,0);
} 
return G__309208__delegate.call(this,args);};
G__309208.cljs$lang$maxFixedArity = 0;
G__309208.cljs$lang$applyTo = (function (arglist__309210){
var args = cljs.core.seq(arglist__309210);
return G__309208__delegate(args);
});
G__309208.cljs$core$IFn$_invoke$arity$variadic = G__309208__delegate;
return G__309208;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__309211__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__309211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__309212__i = 0, G__309212__a = new Array(arguments.length -  0);
while (G__309212__i < G__309212__a.length) {G__309212__a[G__309212__i] = arguments[G__309212__i + 0]; ++G__309212__i;}
  args = new cljs.core.IndexedSeq(G__309212__a,0);
} 
return G__309211__delegate.call(this,args);};
G__309211.cljs$lang$maxFixedArity = 0;
G__309211.cljs$lang$applyTo = (function (arglist__309213){
var args = cljs.core.seq(arglist__309213);
return G__309211__delegate(args);
});
G__309211.cljs$core$IFn$_invoke$arity$variadic = G__309211__delegate;
return G__309211;
})()
;

return null;
});
