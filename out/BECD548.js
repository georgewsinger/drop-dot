goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__236851__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__236851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__236852__i = 0, G__236852__a = new Array(arguments.length -  0);
while (G__236852__i < G__236852__a.length) {G__236852__a[G__236852__i] = arguments[G__236852__i + 0]; ++G__236852__i;}
  args = new cljs.core.IndexedSeq(G__236852__a,0);
} 
return G__236851__delegate.call(this,args);};
G__236851.cljs$lang$maxFixedArity = 0;
G__236851.cljs$lang$applyTo = (function (arglist__236853){
var args = cljs.core.seq(arglist__236853);
return G__236851__delegate(args);
});
G__236851.cljs$core$IFn$_invoke$arity$variadic = G__236851__delegate;
return G__236851;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__236854__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__236854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__236855__i = 0, G__236855__a = new Array(arguments.length -  0);
while (G__236855__i < G__236855__a.length) {G__236855__a[G__236855__i] = arguments[G__236855__i + 0]; ++G__236855__i;}
  args = new cljs.core.IndexedSeq(G__236855__a,0);
} 
return G__236854__delegate.call(this,args);};
G__236854.cljs$lang$maxFixedArity = 0;
G__236854.cljs$lang$applyTo = (function (arglist__236856){
var args = cljs.core.seq(arglist__236856);
return G__236854__delegate(args);
});
G__236854.cljs$core$IFn$_invoke$arity$variadic = G__236854__delegate;
return G__236854;
})()
;

return null;
});
