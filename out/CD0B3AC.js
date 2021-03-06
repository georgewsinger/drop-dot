goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30655__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30656__i = 0, G__30656__a = new Array(arguments.length -  0);
while (G__30656__i < G__30656__a.length) {G__30656__a[G__30656__i] = arguments[G__30656__i + 0]; ++G__30656__i;}
  args = new cljs.core.IndexedSeq(G__30656__a,0);
} 
return G__30655__delegate.call(this,args);};
G__30655.cljs$lang$maxFixedArity = 0;
G__30655.cljs$lang$applyTo = (function (arglist__30657){
var args = cljs.core.seq(arglist__30657);
return G__30655__delegate(args);
});
G__30655.cljs$core$IFn$_invoke$arity$variadic = G__30655__delegate;
return G__30655;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30658__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30659__i = 0, G__30659__a = new Array(arguments.length -  0);
while (G__30659__i < G__30659__a.length) {G__30659__a[G__30659__i] = arguments[G__30659__i + 0]; ++G__30659__i;}
  args = new cljs.core.IndexedSeq(G__30659__a,0);
} 
return G__30658__delegate.call(this,args);};
G__30658.cljs$lang$maxFixedArity = 0;
G__30658.cljs$lang$applyTo = (function (arglist__30660){
var args = cljs.core.seq(arglist__30660);
return G__30658__delegate(args);
});
G__30658.cljs$core$IFn$_invoke$arity$variadic = G__30658__delegate;
return G__30658;
})()
;

return null;
});
