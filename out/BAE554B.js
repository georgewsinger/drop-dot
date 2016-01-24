goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43476__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43477__i = 0, G__43477__a = new Array(arguments.length -  0);
while (G__43477__i < G__43477__a.length) {G__43477__a[G__43477__i] = arguments[G__43477__i + 0]; ++G__43477__i;}
  args = new cljs.core.IndexedSeq(G__43477__a,0);
} 
return G__43476__delegate.call(this,args);};
G__43476.cljs$lang$maxFixedArity = 0;
G__43476.cljs$lang$applyTo = (function (arglist__43478){
var args = cljs.core.seq(arglist__43478);
return G__43476__delegate(args);
});
G__43476.cljs$core$IFn$_invoke$arity$variadic = G__43476__delegate;
return G__43476;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43479__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43480__i = 0, G__43480__a = new Array(arguments.length -  0);
while (G__43480__i < G__43480__a.length) {G__43480__a[G__43480__i] = arguments[G__43480__i + 0]; ++G__43480__i;}
  args = new cljs.core.IndexedSeq(G__43480__a,0);
} 
return G__43479__delegate.call(this,args);};
G__43479.cljs$lang$maxFixedArity = 0;
G__43479.cljs$lang$applyTo = (function (arglist__43481){
var args = cljs.core.seq(arglist__43481);
return G__43479__delegate(args);
});
G__43479.cljs$core$IFn$_invoke$arity$variadic = G__43479__delegate;
return G__43479;
})()
;

return null;
});
