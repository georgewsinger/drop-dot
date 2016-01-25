goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__133091__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__133091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__133092__i = 0, G__133092__a = new Array(arguments.length -  0);
while (G__133092__i < G__133092__a.length) {G__133092__a[G__133092__i] = arguments[G__133092__i + 0]; ++G__133092__i;}
  args = new cljs.core.IndexedSeq(G__133092__a,0);
} 
return G__133091__delegate.call(this,args);};
G__133091.cljs$lang$maxFixedArity = 0;
G__133091.cljs$lang$applyTo = (function (arglist__133093){
var args = cljs.core.seq(arglist__133093);
return G__133091__delegate(args);
});
G__133091.cljs$core$IFn$_invoke$arity$variadic = G__133091__delegate;
return G__133091;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__133094__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__133094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__133095__i = 0, G__133095__a = new Array(arguments.length -  0);
while (G__133095__i < G__133095__a.length) {G__133095__a[G__133095__i] = arguments[G__133095__i + 0]; ++G__133095__i;}
  args = new cljs.core.IndexedSeq(G__133095__a,0);
} 
return G__133094__delegate.call(this,args);};
G__133094.cljs$lang$maxFixedArity = 0;
G__133094.cljs$lang$applyTo = (function (arglist__133096){
var args = cljs.core.seq(arglist__133096);
return G__133094__delegate(args);
});
G__133094.cljs$core$IFn$_invoke$arity$variadic = G__133094__delegate;
return G__133094;
})()
;

return null;
});
