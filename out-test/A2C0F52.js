goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28143__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28144__i = 0, G__28144__a = new Array(arguments.length -  0);
while (G__28144__i < G__28144__a.length) {G__28144__a[G__28144__i] = arguments[G__28144__i + 0]; ++G__28144__i;}
  args = new cljs.core.IndexedSeq(G__28144__a,0);
} 
return G__28143__delegate.call(this,args);};
G__28143.cljs$lang$maxFixedArity = 0;
G__28143.cljs$lang$applyTo = (function (arglist__28145){
var args = cljs.core.seq(arglist__28145);
return G__28143__delegate(args);
});
G__28143.cljs$core$IFn$_invoke$arity$variadic = G__28143__delegate;
return G__28143;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28146__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28147__i = 0, G__28147__a = new Array(arguments.length -  0);
while (G__28147__i < G__28147__a.length) {G__28147__a[G__28147__i] = arguments[G__28147__i + 0]; ++G__28147__i;}
  args = new cljs.core.IndexedSeq(G__28147__a,0);
} 
return G__28146__delegate.call(this,args);};
G__28146.cljs$lang$maxFixedArity = 0;
G__28146.cljs$lang$applyTo = (function (arglist__28148){
var args = cljs.core.seq(arglist__28148);
return G__28146__delegate(args);
});
G__28146.cljs$core$IFn$_invoke$arity$variadic = G__28146__delegate;
return G__28146;
})()
;

return null;
});
