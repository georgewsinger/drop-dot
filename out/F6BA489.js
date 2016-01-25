goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19423__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19424__i = 0, G__19424__a = new Array(arguments.length -  0);
while (G__19424__i < G__19424__a.length) {G__19424__a[G__19424__i] = arguments[G__19424__i + 0]; ++G__19424__i;}
  args = new cljs.core.IndexedSeq(G__19424__a,0);
} 
return G__19423__delegate.call(this,args);};
G__19423.cljs$lang$maxFixedArity = 0;
G__19423.cljs$lang$applyTo = (function (arglist__19425){
var args = cljs.core.seq(arglist__19425);
return G__19423__delegate(args);
});
G__19423.cljs$core$IFn$_invoke$arity$variadic = G__19423__delegate;
return G__19423;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19426__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19427__i = 0, G__19427__a = new Array(arguments.length -  0);
while (G__19427__i < G__19427__a.length) {G__19427__a[G__19427__i] = arguments[G__19427__i + 0]; ++G__19427__i;}
  args = new cljs.core.IndexedSeq(G__19427__a,0);
} 
return G__19426__delegate.call(this,args);};
G__19426.cljs$lang$maxFixedArity = 0;
G__19426.cljs$lang$applyTo = (function (arglist__19428){
var args = cljs.core.seq(arglist__19428);
return G__19426__delegate(args);
});
G__19426.cljs$core$IFn$_invoke$arity$variadic = G__19426__delegate;
return G__19426;
})()
;

return null;
});
