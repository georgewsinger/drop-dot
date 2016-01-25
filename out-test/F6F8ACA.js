goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44210__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44211__i = 0, G__44211__a = new Array(arguments.length -  0);
while (G__44211__i < G__44211__a.length) {G__44211__a[G__44211__i] = arguments[G__44211__i + 0]; ++G__44211__i;}
  args = new cljs.core.IndexedSeq(G__44211__a,0);
} 
return G__44210__delegate.call(this,args);};
G__44210.cljs$lang$maxFixedArity = 0;
G__44210.cljs$lang$applyTo = (function (arglist__44212){
var args = cljs.core.seq(arglist__44212);
return G__44210__delegate(args);
});
G__44210.cljs$core$IFn$_invoke$arity$variadic = G__44210__delegate;
return G__44210;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44213__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44214__i = 0, G__44214__a = new Array(arguments.length -  0);
while (G__44214__i < G__44214__a.length) {G__44214__a[G__44214__i] = arguments[G__44214__i + 0]; ++G__44214__i;}
  args = new cljs.core.IndexedSeq(G__44214__a,0);
} 
return G__44213__delegate.call(this,args);};
G__44213.cljs$lang$maxFixedArity = 0;
G__44213.cljs$lang$applyTo = (function (arglist__44215){
var args = cljs.core.seq(arglist__44215);
return G__44213__delegate(args);
});
G__44213.cljs$core$IFn$_invoke$arity$variadic = G__44213__delegate;
return G__44213;
})()
;

return null;
});
