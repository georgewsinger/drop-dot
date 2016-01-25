goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19371__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19372__i = 0, G__19372__a = new Array(arguments.length -  0);
while (G__19372__i < G__19372__a.length) {G__19372__a[G__19372__i] = arguments[G__19372__i + 0]; ++G__19372__i;}
  args = new cljs.core.IndexedSeq(G__19372__a,0);
} 
return G__19371__delegate.call(this,args);};
G__19371.cljs$lang$maxFixedArity = 0;
G__19371.cljs$lang$applyTo = (function (arglist__19373){
var args = cljs.core.seq(arglist__19373);
return G__19371__delegate(args);
});
G__19371.cljs$core$IFn$_invoke$arity$variadic = G__19371__delegate;
return G__19371;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19374__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19375__i = 0, G__19375__a = new Array(arguments.length -  0);
while (G__19375__i < G__19375__a.length) {G__19375__a[G__19375__i] = arguments[G__19375__i + 0]; ++G__19375__i;}
  args = new cljs.core.IndexedSeq(G__19375__a,0);
} 
return G__19374__delegate.call(this,args);};
G__19374.cljs$lang$maxFixedArity = 0;
G__19374.cljs$lang$applyTo = (function (arglist__19376){
var args = cljs.core.seq(arglist__19376);
return G__19374__delegate(args);
});
G__19374.cljs$core$IFn$_invoke$arity$variadic = G__19374__delegate;
return G__19374;
})()
;

return null;
});
