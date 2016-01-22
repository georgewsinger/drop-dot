goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34337__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34338__i = 0, G__34338__a = new Array(arguments.length -  0);
while (G__34338__i < G__34338__a.length) {G__34338__a[G__34338__i] = arguments[G__34338__i + 0]; ++G__34338__i;}
  args = new cljs.core.IndexedSeq(G__34338__a,0);
} 
return G__34337__delegate.call(this,args);};
G__34337.cljs$lang$maxFixedArity = 0;
G__34337.cljs$lang$applyTo = (function (arglist__34339){
var args = cljs.core.seq(arglist__34339);
return G__34337__delegate(args);
});
G__34337.cljs$core$IFn$_invoke$arity$variadic = G__34337__delegate;
return G__34337;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34340__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34341__i = 0, G__34341__a = new Array(arguments.length -  0);
while (G__34341__i < G__34341__a.length) {G__34341__a[G__34341__i] = arguments[G__34341__i + 0]; ++G__34341__i;}
  args = new cljs.core.IndexedSeq(G__34341__a,0);
} 
return G__34340__delegate.call(this,args);};
G__34340.cljs$lang$maxFixedArity = 0;
G__34340.cljs$lang$applyTo = (function (arglist__34342){
var args = cljs.core.seq(arglist__34342);
return G__34340__delegate(args);
});
G__34340.cljs$core$IFn$_invoke$arity$variadic = G__34340__delegate;
return G__34340;
})()
;

return null;
});
