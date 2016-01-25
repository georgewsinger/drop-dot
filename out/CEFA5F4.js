goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235073__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235074__i = 0, G__235074__a = new Array(arguments.length -  0);
while (G__235074__i < G__235074__a.length) {G__235074__a[G__235074__i] = arguments[G__235074__i + 0]; ++G__235074__i;}
  args = new cljs.core.IndexedSeq(G__235074__a,0);
} 
return G__235073__delegate.call(this,args);};
G__235073.cljs$lang$maxFixedArity = 0;
G__235073.cljs$lang$applyTo = (function (arglist__235075){
var args = cljs.core.seq(arglist__235075);
return G__235073__delegate(args);
});
G__235073.cljs$core$IFn$_invoke$arity$variadic = G__235073__delegate;
return G__235073;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235076__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235077__i = 0, G__235077__a = new Array(arguments.length -  0);
while (G__235077__i < G__235077__a.length) {G__235077__a[G__235077__i] = arguments[G__235077__i + 0]; ++G__235077__i;}
  args = new cljs.core.IndexedSeq(G__235077__a,0);
} 
return G__235076__delegate.call(this,args);};
G__235076.cljs$lang$maxFixedArity = 0;
G__235076.cljs$lang$applyTo = (function (arglist__235078){
var args = cljs.core.seq(arglist__235078);
return G__235076__delegate(args);
});
G__235076.cljs$core$IFn$_invoke$arity$variadic = G__235076__delegate;
return G__235076;
})()
;

return null;
});
