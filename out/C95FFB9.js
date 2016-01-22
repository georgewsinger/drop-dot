goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19550__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19551__i = 0, G__19551__a = new Array(arguments.length -  0);
while (G__19551__i < G__19551__a.length) {G__19551__a[G__19551__i] = arguments[G__19551__i + 0]; ++G__19551__i;}
  args = new cljs.core.IndexedSeq(G__19551__a,0);
} 
return G__19550__delegate.call(this,args);};
G__19550.cljs$lang$maxFixedArity = 0;
G__19550.cljs$lang$applyTo = (function (arglist__19552){
var args = cljs.core.seq(arglist__19552);
return G__19550__delegate(args);
});
G__19550.cljs$core$IFn$_invoke$arity$variadic = G__19550__delegate;
return G__19550;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19553__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19554__i = 0, G__19554__a = new Array(arguments.length -  0);
while (G__19554__i < G__19554__a.length) {G__19554__a[G__19554__i] = arguments[G__19554__i + 0]; ++G__19554__i;}
  args = new cljs.core.IndexedSeq(G__19554__a,0);
} 
return G__19553__delegate.call(this,args);};
G__19553.cljs$lang$maxFixedArity = 0;
G__19553.cljs$lang$applyTo = (function (arglist__19555){
var args = cljs.core.seq(arglist__19555);
return G__19553__delegate(args);
});
G__19553.cljs$core$IFn$_invoke$arity$variadic = G__19553__delegate;
return G__19553;
})()
;

return null;
});
