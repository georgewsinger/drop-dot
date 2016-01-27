goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27473__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27474__i = 0, G__27474__a = new Array(arguments.length -  0);
while (G__27474__i < G__27474__a.length) {G__27474__a[G__27474__i] = arguments[G__27474__i + 0]; ++G__27474__i;}
  args = new cljs.core.IndexedSeq(G__27474__a,0);
} 
return G__27473__delegate.call(this,args);};
G__27473.cljs$lang$maxFixedArity = 0;
G__27473.cljs$lang$applyTo = (function (arglist__27475){
var args = cljs.core.seq(arglist__27475);
return G__27473__delegate(args);
});
G__27473.cljs$core$IFn$_invoke$arity$variadic = G__27473__delegate;
return G__27473;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27476__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27477__i = 0, G__27477__a = new Array(arguments.length -  0);
while (G__27477__i < G__27477__a.length) {G__27477__a[G__27477__i] = arguments[G__27477__i + 0]; ++G__27477__i;}
  args = new cljs.core.IndexedSeq(G__27477__a,0);
} 
return G__27476__delegate.call(this,args);};
G__27476.cljs$lang$maxFixedArity = 0;
G__27476.cljs$lang$applyTo = (function (arglist__27478){
var args = cljs.core.seq(arglist__27478);
return G__27476__delegate(args);
});
G__27476.cljs$core$IFn$_invoke$arity$variadic = G__27476__delegate;
return G__27476;
})()
;

return null;
});
