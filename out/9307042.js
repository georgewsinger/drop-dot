goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235017__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235018__i = 0, G__235018__a = new Array(arguments.length -  0);
while (G__235018__i < G__235018__a.length) {G__235018__a[G__235018__i] = arguments[G__235018__i + 0]; ++G__235018__i;}
  args = new cljs.core.IndexedSeq(G__235018__a,0);
} 
return G__235017__delegate.call(this,args);};
G__235017.cljs$lang$maxFixedArity = 0;
G__235017.cljs$lang$applyTo = (function (arglist__235019){
var args = cljs.core.seq(arglist__235019);
return G__235017__delegate(args);
});
G__235017.cljs$core$IFn$_invoke$arity$variadic = G__235017__delegate;
return G__235017;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235020__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235021__i = 0, G__235021__a = new Array(arguments.length -  0);
while (G__235021__i < G__235021__a.length) {G__235021__a[G__235021__i] = arguments[G__235021__i + 0]; ++G__235021__i;}
  args = new cljs.core.IndexedSeq(G__235021__a,0);
} 
return G__235020__delegate.call(this,args);};
G__235020.cljs$lang$maxFixedArity = 0;
G__235020.cljs$lang$applyTo = (function (arglist__235022){
var args = cljs.core.seq(arglist__235022);
return G__235020__delegate(args);
});
G__235020.cljs$core$IFn$_invoke$arity$variadic = G__235020__delegate;
return G__235020;
})()
;

return null;
});
