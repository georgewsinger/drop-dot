goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32599__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32600__i = 0, G__32600__a = new Array(arguments.length -  0);
while (G__32600__i < G__32600__a.length) {G__32600__a[G__32600__i] = arguments[G__32600__i + 0]; ++G__32600__i;}
  args = new cljs.core.IndexedSeq(G__32600__a,0);
} 
return G__32599__delegate.call(this,args);};
G__32599.cljs$lang$maxFixedArity = 0;
G__32599.cljs$lang$applyTo = (function (arglist__32601){
var args = cljs.core.seq(arglist__32601);
return G__32599__delegate(args);
});
G__32599.cljs$core$IFn$_invoke$arity$variadic = G__32599__delegate;
return G__32599;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32602__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32603__i = 0, G__32603__a = new Array(arguments.length -  0);
while (G__32603__i < G__32603__a.length) {G__32603__a[G__32603__i] = arguments[G__32603__i + 0]; ++G__32603__i;}
  args = new cljs.core.IndexedSeq(G__32603__a,0);
} 
return G__32602__delegate.call(this,args);};
G__32602.cljs$lang$maxFixedArity = 0;
G__32602.cljs$lang$applyTo = (function (arglist__32604){
var args = cljs.core.seq(arglist__32604);
return G__32602__delegate(args);
});
G__32602.cljs$core$IFn$_invoke$arity$variadic = G__32602__delegate;
return G__32602;
})()
;

return null;
});
