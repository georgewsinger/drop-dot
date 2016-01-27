goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__302718__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__302718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__302719__i = 0, G__302719__a = new Array(arguments.length -  0);
while (G__302719__i < G__302719__a.length) {G__302719__a[G__302719__i] = arguments[G__302719__i + 0]; ++G__302719__i;}
  args = new cljs.core.IndexedSeq(G__302719__a,0);
} 
return G__302718__delegate.call(this,args);};
G__302718.cljs$lang$maxFixedArity = 0;
G__302718.cljs$lang$applyTo = (function (arglist__302720){
var args = cljs.core.seq(arglist__302720);
return G__302718__delegate(args);
});
G__302718.cljs$core$IFn$_invoke$arity$variadic = G__302718__delegate;
return G__302718;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__302721__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__302721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__302722__i = 0, G__302722__a = new Array(arguments.length -  0);
while (G__302722__i < G__302722__a.length) {G__302722__a[G__302722__i] = arguments[G__302722__i + 0]; ++G__302722__i;}
  args = new cljs.core.IndexedSeq(G__302722__a,0);
} 
return G__302721__delegate.call(this,args);};
G__302721.cljs$lang$maxFixedArity = 0;
G__302721.cljs$lang$applyTo = (function (arglist__302723){
var args = cljs.core.seq(arglist__302723);
return G__302721__delegate(args);
});
G__302721.cljs$core$IFn$_invoke$arity$variadic = G__302721__delegate;
return G__302721;
})()
;

return null;
});
