goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__339020__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__339020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__339021__i = 0, G__339021__a = new Array(arguments.length -  0);
while (G__339021__i < G__339021__a.length) {G__339021__a[G__339021__i] = arguments[G__339021__i + 0]; ++G__339021__i;}
  args = new cljs.core.IndexedSeq(G__339021__a,0);
} 
return G__339020__delegate.call(this,args);};
G__339020.cljs$lang$maxFixedArity = 0;
G__339020.cljs$lang$applyTo = (function (arglist__339022){
var args = cljs.core.seq(arglist__339022);
return G__339020__delegate(args);
});
G__339020.cljs$core$IFn$_invoke$arity$variadic = G__339020__delegate;
return G__339020;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__339023__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__339023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__339024__i = 0, G__339024__a = new Array(arguments.length -  0);
while (G__339024__i < G__339024__a.length) {G__339024__a[G__339024__i] = arguments[G__339024__i + 0]; ++G__339024__i;}
  args = new cljs.core.IndexedSeq(G__339024__a,0);
} 
return G__339023__delegate.call(this,args);};
G__339023.cljs$lang$maxFixedArity = 0;
G__339023.cljs$lang$applyTo = (function (arglist__339025){
var args = cljs.core.seq(arglist__339025);
return G__339023__delegate(args);
});
G__339023.cljs$core$IFn$_invoke$arity$variadic = G__339023__delegate;
return G__339023;
})()
;

return null;
});
