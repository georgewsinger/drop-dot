goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18727__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18728__i = 0, G__18728__a = new Array(arguments.length -  0);
while (G__18728__i < G__18728__a.length) {G__18728__a[G__18728__i] = arguments[G__18728__i + 0]; ++G__18728__i;}
  args = new cljs.core.IndexedSeq(G__18728__a,0);
} 
return G__18727__delegate.call(this,args);};
G__18727.cljs$lang$maxFixedArity = 0;
G__18727.cljs$lang$applyTo = (function (arglist__18729){
var args = cljs.core.seq(arglist__18729);
return G__18727__delegate(args);
});
G__18727.cljs$core$IFn$_invoke$arity$variadic = G__18727__delegate;
return G__18727;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18730__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18731__i = 0, G__18731__a = new Array(arguments.length -  0);
while (G__18731__i < G__18731__a.length) {G__18731__a[G__18731__i] = arguments[G__18731__i + 0]; ++G__18731__i;}
  args = new cljs.core.IndexedSeq(G__18731__a,0);
} 
return G__18730__delegate.call(this,args);};
G__18730.cljs$lang$maxFixedArity = 0;
G__18730.cljs$lang$applyTo = (function (arglist__18732){
var args = cljs.core.seq(arglist__18732);
return G__18730__delegate(args);
});
G__18730.cljs$core$IFn$_invoke$arity$variadic = G__18730__delegate;
return G__18730;
})()
;

return null;
});
