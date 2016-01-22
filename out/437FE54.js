goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40530__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40531__i = 0, G__40531__a = new Array(arguments.length -  0);
while (G__40531__i < G__40531__a.length) {G__40531__a[G__40531__i] = arguments[G__40531__i + 0]; ++G__40531__i;}
  args = new cljs.core.IndexedSeq(G__40531__a,0);
} 
return G__40530__delegate.call(this,args);};
G__40530.cljs$lang$maxFixedArity = 0;
G__40530.cljs$lang$applyTo = (function (arglist__40532){
var args = cljs.core.seq(arglist__40532);
return G__40530__delegate(args);
});
G__40530.cljs$core$IFn$_invoke$arity$variadic = G__40530__delegate;
return G__40530;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40533__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40534__i = 0, G__40534__a = new Array(arguments.length -  0);
while (G__40534__i < G__40534__a.length) {G__40534__a[G__40534__i] = arguments[G__40534__i + 0]; ++G__40534__i;}
  args = new cljs.core.IndexedSeq(G__40534__a,0);
} 
return G__40533__delegate.call(this,args);};
G__40533.cljs$lang$maxFixedArity = 0;
G__40533.cljs$lang$applyTo = (function (arglist__40535){
var args = cljs.core.seq(arglist__40535);
return G__40533__delegate(args);
});
G__40533.cljs$core$IFn$_invoke$arity$variadic = G__40533__delegate;
return G__40533;
})()
;

return null;
});
