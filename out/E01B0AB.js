goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__374601__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__374601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__374602__i = 0, G__374602__a = new Array(arguments.length -  0);
while (G__374602__i < G__374602__a.length) {G__374602__a[G__374602__i] = arguments[G__374602__i + 0]; ++G__374602__i;}
  args = new cljs.core.IndexedSeq(G__374602__a,0);
} 
return G__374601__delegate.call(this,args);};
G__374601.cljs$lang$maxFixedArity = 0;
G__374601.cljs$lang$applyTo = (function (arglist__374603){
var args = cljs.core.seq(arglist__374603);
return G__374601__delegate(args);
});
G__374601.cljs$core$IFn$_invoke$arity$variadic = G__374601__delegate;
return G__374601;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__374604__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__374604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__374605__i = 0, G__374605__a = new Array(arguments.length -  0);
while (G__374605__i < G__374605__a.length) {G__374605__a[G__374605__i] = arguments[G__374605__i + 0]; ++G__374605__i;}
  args = new cljs.core.IndexedSeq(G__374605__a,0);
} 
return G__374604__delegate.call(this,args);};
G__374604.cljs$lang$maxFixedArity = 0;
G__374604.cljs$lang$applyTo = (function (arglist__374606){
var args = cljs.core.seq(arglist__374606);
return G__374604__delegate(args);
});
G__374604.cljs$core$IFn$_invoke$arity$variadic = G__374604__delegate;
return G__374604;
})()
;

return null;
});
