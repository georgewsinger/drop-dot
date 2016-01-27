goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11320__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11321__i = 0, G__11321__a = new Array(arguments.length -  0);
while (G__11321__i < G__11321__a.length) {G__11321__a[G__11321__i] = arguments[G__11321__i + 0]; ++G__11321__i;}
  args = new cljs.core.IndexedSeq(G__11321__a,0);
} 
return G__11320__delegate.call(this,args);};
G__11320.cljs$lang$maxFixedArity = 0;
G__11320.cljs$lang$applyTo = (function (arglist__11322){
var args = cljs.core.seq(arglist__11322);
return G__11320__delegate(args);
});
G__11320.cljs$core$IFn$_invoke$arity$variadic = G__11320__delegate;
return G__11320;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11323__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11324__i = 0, G__11324__a = new Array(arguments.length -  0);
while (G__11324__i < G__11324__a.length) {G__11324__a[G__11324__i] = arguments[G__11324__i + 0]; ++G__11324__i;}
  args = new cljs.core.IndexedSeq(G__11324__a,0);
} 
return G__11323__delegate.call(this,args);};
G__11323.cljs$lang$maxFixedArity = 0;
G__11323.cljs$lang$applyTo = (function (arglist__11325){
var args = cljs.core.seq(arglist__11325);
return G__11323__delegate(args);
});
G__11323.cljs$core$IFn$_invoke$arity$variadic = G__11323__delegate;
return G__11323;
})()
;

return null;
});
