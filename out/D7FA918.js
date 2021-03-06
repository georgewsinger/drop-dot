goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__257988__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__257988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__257989__i = 0, G__257989__a = new Array(arguments.length -  0);
while (G__257989__i < G__257989__a.length) {G__257989__a[G__257989__i] = arguments[G__257989__i + 0]; ++G__257989__i;}
  args = new cljs.core.IndexedSeq(G__257989__a,0);
} 
return G__257988__delegate.call(this,args);};
G__257988.cljs$lang$maxFixedArity = 0;
G__257988.cljs$lang$applyTo = (function (arglist__257990){
var args = cljs.core.seq(arglist__257990);
return G__257988__delegate(args);
});
G__257988.cljs$core$IFn$_invoke$arity$variadic = G__257988__delegate;
return G__257988;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__257991__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__257991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__257992__i = 0, G__257992__a = new Array(arguments.length -  0);
while (G__257992__i < G__257992__a.length) {G__257992__a[G__257992__i] = arguments[G__257992__i + 0]; ++G__257992__i;}
  args = new cljs.core.IndexedSeq(G__257992__a,0);
} 
return G__257991__delegate.call(this,args);};
G__257991.cljs$lang$maxFixedArity = 0;
G__257991.cljs$lang$applyTo = (function (arglist__257993){
var args = cljs.core.seq(arglist__257993);
return G__257991__delegate(args);
});
G__257991.cljs$core$IFn$_invoke$arity$variadic = G__257991__delegate;
return G__257991;
})()
;

return null;
});
