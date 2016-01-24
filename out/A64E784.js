goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64852__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64853__i = 0, G__64853__a = new Array(arguments.length -  0);
while (G__64853__i < G__64853__a.length) {G__64853__a[G__64853__i] = arguments[G__64853__i + 0]; ++G__64853__i;}
  args = new cljs.core.IndexedSeq(G__64853__a,0);
} 
return G__64852__delegate.call(this,args);};
G__64852.cljs$lang$maxFixedArity = 0;
G__64852.cljs$lang$applyTo = (function (arglist__64854){
var args = cljs.core.seq(arglist__64854);
return G__64852__delegate(args);
});
G__64852.cljs$core$IFn$_invoke$arity$variadic = G__64852__delegate;
return G__64852;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64855__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64856__i = 0, G__64856__a = new Array(arguments.length -  0);
while (G__64856__i < G__64856__a.length) {G__64856__a[G__64856__i] = arguments[G__64856__i + 0]; ++G__64856__i;}
  args = new cljs.core.IndexedSeq(G__64856__a,0);
} 
return G__64855__delegate.call(this,args);};
G__64855.cljs$lang$maxFixedArity = 0;
G__64855.cljs$lang$applyTo = (function (arglist__64857){
var args = cljs.core.seq(arglist__64857);
return G__64855__delegate(args);
});
G__64855.cljs$core$IFn$_invoke$arity$variadic = G__64855__delegate;
return G__64855;
})()
;

return null;
});
