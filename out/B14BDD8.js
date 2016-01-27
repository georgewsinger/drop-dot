goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__303547__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__303547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__303548__i = 0, G__303548__a = new Array(arguments.length -  0);
while (G__303548__i < G__303548__a.length) {G__303548__a[G__303548__i] = arguments[G__303548__i + 0]; ++G__303548__i;}
  args = new cljs.core.IndexedSeq(G__303548__a,0);
} 
return G__303547__delegate.call(this,args);};
G__303547.cljs$lang$maxFixedArity = 0;
G__303547.cljs$lang$applyTo = (function (arglist__303549){
var args = cljs.core.seq(arglist__303549);
return G__303547__delegate(args);
});
G__303547.cljs$core$IFn$_invoke$arity$variadic = G__303547__delegate;
return G__303547;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__303550__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__303550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__303551__i = 0, G__303551__a = new Array(arguments.length -  0);
while (G__303551__i < G__303551__a.length) {G__303551__a[G__303551__i] = arguments[G__303551__i + 0]; ++G__303551__i;}
  args = new cljs.core.IndexedSeq(G__303551__a,0);
} 
return G__303550__delegate.call(this,args);};
G__303550.cljs$lang$maxFixedArity = 0;
G__303550.cljs$lang$applyTo = (function (arglist__303552){
var args = cljs.core.seq(arglist__303552);
return G__303550__delegate(args);
});
G__303550.cljs$core$IFn$_invoke$arity$variadic = G__303550__delegate;
return G__303550;
})()
;

return null;
});
