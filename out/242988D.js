goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__281923__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__281923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281924__i = 0, G__281924__a = new Array(arguments.length -  0);
while (G__281924__i < G__281924__a.length) {G__281924__a[G__281924__i] = arguments[G__281924__i + 0]; ++G__281924__i;}
  args = new cljs.core.IndexedSeq(G__281924__a,0);
} 
return G__281923__delegate.call(this,args);};
G__281923.cljs$lang$maxFixedArity = 0;
G__281923.cljs$lang$applyTo = (function (arglist__281925){
var args = cljs.core.seq(arglist__281925);
return G__281923__delegate(args);
});
G__281923.cljs$core$IFn$_invoke$arity$variadic = G__281923__delegate;
return G__281923;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__281926__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__281926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281927__i = 0, G__281927__a = new Array(arguments.length -  0);
while (G__281927__i < G__281927__a.length) {G__281927__a[G__281927__i] = arguments[G__281927__i + 0]; ++G__281927__i;}
  args = new cljs.core.IndexedSeq(G__281927__a,0);
} 
return G__281926__delegate.call(this,args);};
G__281926.cljs$lang$maxFixedArity = 0;
G__281926.cljs$lang$applyTo = (function (arglist__281928){
var args = cljs.core.seq(arglist__281928);
return G__281926__delegate(args);
});
G__281926.cljs$core$IFn$_invoke$arity$variadic = G__281926__delegate;
return G__281926;
})()
;

return null;
});
