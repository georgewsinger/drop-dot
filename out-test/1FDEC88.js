goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52166__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52167__i = 0, G__52167__a = new Array(arguments.length -  0);
while (G__52167__i < G__52167__a.length) {G__52167__a[G__52167__i] = arguments[G__52167__i + 0]; ++G__52167__i;}
  args = new cljs.core.IndexedSeq(G__52167__a,0);
} 
return G__52166__delegate.call(this,args);};
G__52166.cljs$lang$maxFixedArity = 0;
G__52166.cljs$lang$applyTo = (function (arglist__52168){
var args = cljs.core.seq(arglist__52168);
return G__52166__delegate(args);
});
G__52166.cljs$core$IFn$_invoke$arity$variadic = G__52166__delegate;
return G__52166;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52169__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52170__i = 0, G__52170__a = new Array(arguments.length -  0);
while (G__52170__i < G__52170__a.length) {G__52170__a[G__52170__i] = arguments[G__52170__i + 0]; ++G__52170__i;}
  args = new cljs.core.IndexedSeq(G__52170__a,0);
} 
return G__52169__delegate.call(this,args);};
G__52169.cljs$lang$maxFixedArity = 0;
G__52169.cljs$lang$applyTo = (function (arglist__52171){
var args = cljs.core.seq(arglist__52171);
return G__52169__delegate(args);
});
G__52169.cljs$core$IFn$_invoke$arity$variadic = G__52169__delegate;
return G__52169;
})()
;

return null;
});
