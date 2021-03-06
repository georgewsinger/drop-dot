goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65577__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65578__i = 0, G__65578__a = new Array(arguments.length -  0);
while (G__65578__i < G__65578__a.length) {G__65578__a[G__65578__i] = arguments[G__65578__i + 0]; ++G__65578__i;}
  args = new cljs.core.IndexedSeq(G__65578__a,0);
} 
return G__65577__delegate.call(this,args);};
G__65577.cljs$lang$maxFixedArity = 0;
G__65577.cljs$lang$applyTo = (function (arglist__65579){
var args = cljs.core.seq(arglist__65579);
return G__65577__delegate(args);
});
G__65577.cljs$core$IFn$_invoke$arity$variadic = G__65577__delegate;
return G__65577;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65580__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65581__i = 0, G__65581__a = new Array(arguments.length -  0);
while (G__65581__i < G__65581__a.length) {G__65581__a[G__65581__i] = arguments[G__65581__i + 0]; ++G__65581__i;}
  args = new cljs.core.IndexedSeq(G__65581__a,0);
} 
return G__65580__delegate.call(this,args);};
G__65580.cljs$lang$maxFixedArity = 0;
G__65580.cljs$lang$applyTo = (function (arglist__65582){
var args = cljs.core.seq(arglist__65582);
return G__65580__delegate(args);
});
G__65580.cljs$core$IFn$_invoke$arity$variadic = G__65580__delegate;
return G__65580;
})()
;

return null;
});
