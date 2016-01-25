goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28935__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28936__i = 0, G__28936__a = new Array(arguments.length -  0);
while (G__28936__i < G__28936__a.length) {G__28936__a[G__28936__i] = arguments[G__28936__i + 0]; ++G__28936__i;}
  args = new cljs.core.IndexedSeq(G__28936__a,0);
} 
return G__28935__delegate.call(this,args);};
G__28935.cljs$lang$maxFixedArity = 0;
G__28935.cljs$lang$applyTo = (function (arglist__28937){
var args = cljs.core.seq(arglist__28937);
return G__28935__delegate(args);
});
G__28935.cljs$core$IFn$_invoke$arity$variadic = G__28935__delegate;
return G__28935;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28938__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28939__i = 0, G__28939__a = new Array(arguments.length -  0);
while (G__28939__i < G__28939__a.length) {G__28939__a[G__28939__i] = arguments[G__28939__i + 0]; ++G__28939__i;}
  args = new cljs.core.IndexedSeq(G__28939__a,0);
} 
return G__28938__delegate.call(this,args);};
G__28938.cljs$lang$maxFixedArity = 0;
G__28938.cljs$lang$applyTo = (function (arglist__28940){
var args = cljs.core.seq(arglist__28940);
return G__28938__delegate(args);
});
G__28938.cljs$core$IFn$_invoke$arity$variadic = G__28938__delegate;
return G__28938;
})()
;

return null;
});
