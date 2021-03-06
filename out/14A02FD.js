goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13224__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13225__i = 0, G__13225__a = new Array(arguments.length -  0);
while (G__13225__i < G__13225__a.length) {G__13225__a[G__13225__i] = arguments[G__13225__i + 0]; ++G__13225__i;}
  args = new cljs.core.IndexedSeq(G__13225__a,0);
} 
return G__13224__delegate.call(this,args);};
G__13224.cljs$lang$maxFixedArity = 0;
G__13224.cljs$lang$applyTo = (function (arglist__13226){
var args = cljs.core.seq(arglist__13226);
return G__13224__delegate(args);
});
G__13224.cljs$core$IFn$_invoke$arity$variadic = G__13224__delegate;
return G__13224;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13227__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13228__i = 0, G__13228__a = new Array(arguments.length -  0);
while (G__13228__i < G__13228__a.length) {G__13228__a[G__13228__i] = arguments[G__13228__i + 0]; ++G__13228__i;}
  args = new cljs.core.IndexedSeq(G__13228__a,0);
} 
return G__13227__delegate.call(this,args);};
G__13227.cljs$lang$maxFixedArity = 0;
G__13227.cljs$lang$applyTo = (function (arglist__13229){
var args = cljs.core.seq(arglist__13229);
return G__13227__delegate(args);
});
G__13227.cljs$core$IFn$_invoke$arity$variadic = G__13227__delegate;
return G__13227;
})()
;

return null;
});
