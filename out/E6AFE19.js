goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14605__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14605 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14606__i = 0, G__14606__a = new Array(arguments.length -  0);
while (G__14606__i < G__14606__a.length) {G__14606__a[G__14606__i] = arguments[G__14606__i + 0]; ++G__14606__i;}
  args = new cljs.core.IndexedSeq(G__14606__a,0);
} 
return G__14605__delegate.call(this,args);};
G__14605.cljs$lang$maxFixedArity = 0;
G__14605.cljs$lang$applyTo = (function (arglist__14607){
var args = cljs.core.seq(arglist__14607);
return G__14605__delegate(args);
});
G__14605.cljs$core$IFn$_invoke$arity$variadic = G__14605__delegate;
return G__14605;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14608__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14609__i = 0, G__14609__a = new Array(arguments.length -  0);
while (G__14609__i < G__14609__a.length) {G__14609__a[G__14609__i] = arguments[G__14609__i + 0]; ++G__14609__i;}
  args = new cljs.core.IndexedSeq(G__14609__a,0);
} 
return G__14608__delegate.call(this,args);};
G__14608.cljs$lang$maxFixedArity = 0;
G__14608.cljs$lang$applyTo = (function (arglist__14610){
var args = cljs.core.seq(arglist__14610);
return G__14608__delegate(args);
});
G__14608.cljs$core$IFn$_invoke$arity$variadic = G__14608__delegate;
return G__14608;
})()
;

return null;
});
