goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__160122__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__160122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__160123__i = 0, G__160123__a = new Array(arguments.length -  0);
while (G__160123__i < G__160123__a.length) {G__160123__a[G__160123__i] = arguments[G__160123__i + 0]; ++G__160123__i;}
  args = new cljs.core.IndexedSeq(G__160123__a,0);
} 
return G__160122__delegate.call(this,args);};
G__160122.cljs$lang$maxFixedArity = 0;
G__160122.cljs$lang$applyTo = (function (arglist__160124){
var args = cljs.core.seq(arglist__160124);
return G__160122__delegate(args);
});
G__160122.cljs$core$IFn$_invoke$arity$variadic = G__160122__delegate;
return G__160122;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__160125__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__160125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__160126__i = 0, G__160126__a = new Array(arguments.length -  0);
while (G__160126__i < G__160126__a.length) {G__160126__a[G__160126__i] = arguments[G__160126__i + 0]; ++G__160126__i;}
  args = new cljs.core.IndexedSeq(G__160126__a,0);
} 
return G__160125__delegate.call(this,args);};
G__160125.cljs$lang$maxFixedArity = 0;
G__160125.cljs$lang$applyTo = (function (arglist__160127){
var args = cljs.core.seq(arglist__160127);
return G__160125__delegate(args);
});
G__160125.cljs$core$IFn$_invoke$arity$variadic = G__160125__delegate;
return G__160125;
})()
;

return null;
});
