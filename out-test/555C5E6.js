goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11289__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11290__i = 0, G__11290__a = new Array(arguments.length -  0);
while (G__11290__i < G__11290__a.length) {G__11290__a[G__11290__i] = arguments[G__11290__i + 0]; ++G__11290__i;}
  args = new cljs.core.IndexedSeq(G__11290__a,0);
} 
return G__11289__delegate.call(this,args);};
G__11289.cljs$lang$maxFixedArity = 0;
G__11289.cljs$lang$applyTo = (function (arglist__11291){
var args = cljs.core.seq(arglist__11291);
return G__11289__delegate(args);
});
G__11289.cljs$core$IFn$_invoke$arity$variadic = G__11289__delegate;
return G__11289;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11292__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11293__i = 0, G__11293__a = new Array(arguments.length -  0);
while (G__11293__i < G__11293__a.length) {G__11293__a[G__11293__i] = arguments[G__11293__i + 0]; ++G__11293__i;}
  args = new cljs.core.IndexedSeq(G__11293__a,0);
} 
return G__11292__delegate.call(this,args);};
G__11292.cljs$lang$maxFixedArity = 0;
G__11292.cljs$lang$applyTo = (function (arglist__11294){
var args = cljs.core.seq(arglist__11294);
return G__11292__delegate(args);
});
G__11292.cljs$core$IFn$_invoke$arity$variadic = G__11292__delegate;
return G__11292;
})()
;

return null;
});
