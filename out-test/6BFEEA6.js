goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36234__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36235__i = 0, G__36235__a = new Array(arguments.length -  0);
while (G__36235__i < G__36235__a.length) {G__36235__a[G__36235__i] = arguments[G__36235__i + 0]; ++G__36235__i;}
  args = new cljs.core.IndexedSeq(G__36235__a,0);
} 
return G__36234__delegate.call(this,args);};
G__36234.cljs$lang$maxFixedArity = 0;
G__36234.cljs$lang$applyTo = (function (arglist__36236){
var args = cljs.core.seq(arglist__36236);
return G__36234__delegate(args);
});
G__36234.cljs$core$IFn$_invoke$arity$variadic = G__36234__delegate;
return G__36234;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36237__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36238__i = 0, G__36238__a = new Array(arguments.length -  0);
while (G__36238__i < G__36238__a.length) {G__36238__a[G__36238__i] = arguments[G__36238__i + 0]; ++G__36238__i;}
  args = new cljs.core.IndexedSeq(G__36238__a,0);
} 
return G__36237__delegate.call(this,args);};
G__36237.cljs$lang$maxFixedArity = 0;
G__36237.cljs$lang$applyTo = (function (arglist__36239){
var args = cljs.core.seq(arglist__36239);
return G__36237__delegate(args);
});
G__36237.cljs$core$IFn$_invoke$arity$variadic = G__36237__delegate;
return G__36237;
})()
;

return null;
});
