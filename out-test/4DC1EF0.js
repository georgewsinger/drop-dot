goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61284__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61285__i = 0, G__61285__a = new Array(arguments.length -  0);
while (G__61285__i < G__61285__a.length) {G__61285__a[G__61285__i] = arguments[G__61285__i + 0]; ++G__61285__i;}
  args = new cljs.core.IndexedSeq(G__61285__a,0);
} 
return G__61284__delegate.call(this,args);};
G__61284.cljs$lang$maxFixedArity = 0;
G__61284.cljs$lang$applyTo = (function (arglist__61286){
var args = cljs.core.seq(arglist__61286);
return G__61284__delegate(args);
});
G__61284.cljs$core$IFn$_invoke$arity$variadic = G__61284__delegate;
return G__61284;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61287__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61288__i = 0, G__61288__a = new Array(arguments.length -  0);
while (G__61288__i < G__61288__a.length) {G__61288__a[G__61288__i] = arguments[G__61288__i + 0]; ++G__61288__i;}
  args = new cljs.core.IndexedSeq(G__61288__a,0);
} 
return G__61287__delegate.call(this,args);};
G__61287.cljs$lang$maxFixedArity = 0;
G__61287.cljs$lang$applyTo = (function (arglist__61289){
var args = cljs.core.seq(arglist__61289);
return G__61287__delegate(args);
});
G__61287.cljs$core$IFn$_invoke$arity$variadic = G__61287__delegate;
return G__61287;
})()
;

return null;
});
