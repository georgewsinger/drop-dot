goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22339__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22340__i = 0, G__22340__a = new Array(arguments.length -  0);
while (G__22340__i < G__22340__a.length) {G__22340__a[G__22340__i] = arguments[G__22340__i + 0]; ++G__22340__i;}
  args = new cljs.core.IndexedSeq(G__22340__a,0);
} 
return G__22339__delegate.call(this,args);};
G__22339.cljs$lang$maxFixedArity = 0;
G__22339.cljs$lang$applyTo = (function (arglist__22341){
var args = cljs.core.seq(arglist__22341);
return G__22339__delegate(args);
});
G__22339.cljs$core$IFn$_invoke$arity$variadic = G__22339__delegate;
return G__22339;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22342__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22343__i = 0, G__22343__a = new Array(arguments.length -  0);
while (G__22343__i < G__22343__a.length) {G__22343__a[G__22343__i] = arguments[G__22343__i + 0]; ++G__22343__i;}
  args = new cljs.core.IndexedSeq(G__22343__a,0);
} 
return G__22342__delegate.call(this,args);};
G__22342.cljs$lang$maxFixedArity = 0;
G__22342.cljs$lang$applyTo = (function (arglist__22344){
var args = cljs.core.seq(arglist__22344);
return G__22342__delegate(args);
});
G__22342.cljs$core$IFn$_invoke$arity$variadic = G__22342__delegate;
return G__22342;
})()
;

return null;
});
