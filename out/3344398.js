goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34596__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34597__i = 0, G__34597__a = new Array(arguments.length -  0);
while (G__34597__i < G__34597__a.length) {G__34597__a[G__34597__i] = arguments[G__34597__i + 0]; ++G__34597__i;}
  args = new cljs.core.IndexedSeq(G__34597__a,0);
} 
return G__34596__delegate.call(this,args);};
G__34596.cljs$lang$maxFixedArity = 0;
G__34596.cljs$lang$applyTo = (function (arglist__34598){
var args = cljs.core.seq(arglist__34598);
return G__34596__delegate(args);
});
G__34596.cljs$core$IFn$_invoke$arity$variadic = G__34596__delegate;
return G__34596;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34599__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34600__i = 0, G__34600__a = new Array(arguments.length -  0);
while (G__34600__i < G__34600__a.length) {G__34600__a[G__34600__i] = arguments[G__34600__i + 0]; ++G__34600__i;}
  args = new cljs.core.IndexedSeq(G__34600__a,0);
} 
return G__34599__delegate.call(this,args);};
G__34599.cljs$lang$maxFixedArity = 0;
G__34599.cljs$lang$applyTo = (function (arglist__34601){
var args = cljs.core.seq(arglist__34601);
return G__34599__delegate(args);
});
G__34599.cljs$core$IFn$_invoke$arity$variadic = G__34599__delegate;
return G__34599;
})()
;

return null;
});
