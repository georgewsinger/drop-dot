goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235935__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235936__i = 0, G__235936__a = new Array(arguments.length -  0);
while (G__235936__i < G__235936__a.length) {G__235936__a[G__235936__i] = arguments[G__235936__i + 0]; ++G__235936__i;}
  args = new cljs.core.IndexedSeq(G__235936__a,0);
} 
return G__235935__delegate.call(this,args);};
G__235935.cljs$lang$maxFixedArity = 0;
G__235935.cljs$lang$applyTo = (function (arglist__235937){
var args = cljs.core.seq(arglist__235937);
return G__235935__delegate(args);
});
G__235935.cljs$core$IFn$_invoke$arity$variadic = G__235935__delegate;
return G__235935;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235938__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235939__i = 0, G__235939__a = new Array(arguments.length -  0);
while (G__235939__i < G__235939__a.length) {G__235939__a[G__235939__i] = arguments[G__235939__i + 0]; ++G__235939__i;}
  args = new cljs.core.IndexedSeq(G__235939__a,0);
} 
return G__235938__delegate.call(this,args);};
G__235938.cljs$lang$maxFixedArity = 0;
G__235938.cljs$lang$applyTo = (function (arglist__235940){
var args = cljs.core.seq(arglist__235940);
return G__235938__delegate(args);
});
G__235938.cljs$core$IFn$_invoke$arity$variadic = G__235938__delegate;
return G__235938;
})()
;

return null;
});
