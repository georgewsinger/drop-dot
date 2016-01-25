goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21306__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21307__i = 0, G__21307__a = new Array(arguments.length -  0);
while (G__21307__i < G__21307__a.length) {G__21307__a[G__21307__i] = arguments[G__21307__i + 0]; ++G__21307__i;}
  args = new cljs.core.IndexedSeq(G__21307__a,0);
} 
return G__21306__delegate.call(this,args);};
G__21306.cljs$lang$maxFixedArity = 0;
G__21306.cljs$lang$applyTo = (function (arglist__21308){
var args = cljs.core.seq(arglist__21308);
return G__21306__delegate(args);
});
G__21306.cljs$core$IFn$_invoke$arity$variadic = G__21306__delegate;
return G__21306;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21309__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21310__i = 0, G__21310__a = new Array(arguments.length -  0);
while (G__21310__i < G__21310__a.length) {G__21310__a[G__21310__i] = arguments[G__21310__i + 0]; ++G__21310__i;}
  args = new cljs.core.IndexedSeq(G__21310__a,0);
} 
return G__21309__delegate.call(this,args);};
G__21309.cljs$lang$maxFixedArity = 0;
G__21309.cljs$lang$applyTo = (function (arglist__21311){
var args = cljs.core.seq(arglist__21311);
return G__21309__delegate(args);
});
G__21309.cljs$core$IFn$_invoke$arity$variadic = G__21309__delegate;
return G__21309;
})()
;

return null;
});
