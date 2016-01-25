goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__55227__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__55227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55228__i = 0, G__55228__a = new Array(arguments.length -  0);
while (G__55228__i < G__55228__a.length) {G__55228__a[G__55228__i] = arguments[G__55228__i + 0]; ++G__55228__i;}
  args = new cljs.core.IndexedSeq(G__55228__a,0);
} 
return G__55227__delegate.call(this,args);};
G__55227.cljs$lang$maxFixedArity = 0;
G__55227.cljs$lang$applyTo = (function (arglist__55229){
var args = cljs.core.seq(arglist__55229);
return G__55227__delegate(args);
});
G__55227.cljs$core$IFn$_invoke$arity$variadic = G__55227__delegate;
return G__55227;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__55230__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__55230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55231__i = 0, G__55231__a = new Array(arguments.length -  0);
while (G__55231__i < G__55231__a.length) {G__55231__a[G__55231__i] = arguments[G__55231__i + 0]; ++G__55231__i;}
  args = new cljs.core.IndexedSeq(G__55231__a,0);
} 
return G__55230__delegate.call(this,args);};
G__55230.cljs$lang$maxFixedArity = 0;
G__55230.cljs$lang$applyTo = (function (arglist__55232){
var args = cljs.core.seq(arglist__55232);
return G__55230__delegate(args);
});
G__55230.cljs$core$IFn$_invoke$arity$variadic = G__55230__delegate;
return G__55230;
})()
;

return null;
});
