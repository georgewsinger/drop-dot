goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38390__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38391__i = 0, G__38391__a = new Array(arguments.length -  0);
while (G__38391__i < G__38391__a.length) {G__38391__a[G__38391__i] = arguments[G__38391__i + 0]; ++G__38391__i;}
  args = new cljs.core.IndexedSeq(G__38391__a,0);
} 
return G__38390__delegate.call(this,args);};
G__38390.cljs$lang$maxFixedArity = 0;
G__38390.cljs$lang$applyTo = (function (arglist__38392){
var args = cljs.core.seq(arglist__38392);
return G__38390__delegate(args);
});
G__38390.cljs$core$IFn$_invoke$arity$variadic = G__38390__delegate;
return G__38390;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38393__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38394__i = 0, G__38394__a = new Array(arguments.length -  0);
while (G__38394__i < G__38394__a.length) {G__38394__a[G__38394__i] = arguments[G__38394__i + 0]; ++G__38394__i;}
  args = new cljs.core.IndexedSeq(G__38394__a,0);
} 
return G__38393__delegate.call(this,args);};
G__38393.cljs$lang$maxFixedArity = 0;
G__38393.cljs$lang$applyTo = (function (arglist__38395){
var args = cljs.core.seq(arglist__38395);
return G__38393__delegate(args);
});
G__38393.cljs$core$IFn$_invoke$arity$variadic = G__38393__delegate;
return G__38393;
})()
;

return null;
});
