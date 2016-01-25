goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235028__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235029__i = 0, G__235029__a = new Array(arguments.length -  0);
while (G__235029__i < G__235029__a.length) {G__235029__a[G__235029__i] = arguments[G__235029__i + 0]; ++G__235029__i;}
  args = new cljs.core.IndexedSeq(G__235029__a,0);
} 
return G__235028__delegate.call(this,args);};
G__235028.cljs$lang$maxFixedArity = 0;
G__235028.cljs$lang$applyTo = (function (arglist__235030){
var args = cljs.core.seq(arglist__235030);
return G__235028__delegate(args);
});
G__235028.cljs$core$IFn$_invoke$arity$variadic = G__235028__delegate;
return G__235028;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235031__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235032__i = 0, G__235032__a = new Array(arguments.length -  0);
while (G__235032__i < G__235032__a.length) {G__235032__a[G__235032__i] = arguments[G__235032__i + 0]; ++G__235032__i;}
  args = new cljs.core.IndexedSeq(G__235032__a,0);
} 
return G__235031__delegate.call(this,args);};
G__235031.cljs$lang$maxFixedArity = 0;
G__235031.cljs$lang$applyTo = (function (arglist__235033){
var args = cljs.core.seq(arglist__235033);
return G__235031__delegate(args);
});
G__235031.cljs$core$IFn$_invoke$arity$variadic = G__235031__delegate;
return G__235031;
})()
;

return null;
});
