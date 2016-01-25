goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__237320__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__237320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237321__i = 0, G__237321__a = new Array(arguments.length -  0);
while (G__237321__i < G__237321__a.length) {G__237321__a[G__237321__i] = arguments[G__237321__i + 0]; ++G__237321__i;}
  args = new cljs.core.IndexedSeq(G__237321__a,0);
} 
return G__237320__delegate.call(this,args);};
G__237320.cljs$lang$maxFixedArity = 0;
G__237320.cljs$lang$applyTo = (function (arglist__237322){
var args = cljs.core.seq(arglist__237322);
return G__237320__delegate(args);
});
G__237320.cljs$core$IFn$_invoke$arity$variadic = G__237320__delegate;
return G__237320;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__237323__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__237323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237324__i = 0, G__237324__a = new Array(arguments.length -  0);
while (G__237324__i < G__237324__a.length) {G__237324__a[G__237324__i] = arguments[G__237324__i + 0]; ++G__237324__i;}
  args = new cljs.core.IndexedSeq(G__237324__a,0);
} 
return G__237323__delegate.call(this,args);};
G__237323.cljs$lang$maxFixedArity = 0;
G__237323.cljs$lang$applyTo = (function (arglist__237325){
var args = cljs.core.seq(arglist__237325);
return G__237323__delegate(args);
});
G__237323.cljs$core$IFn$_invoke$arity$variadic = G__237323__delegate;
return G__237323;
})()
;

return null;
});
