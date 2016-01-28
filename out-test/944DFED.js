goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48340__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48341__i = 0, G__48341__a = new Array(arguments.length -  0);
while (G__48341__i < G__48341__a.length) {G__48341__a[G__48341__i] = arguments[G__48341__i + 0]; ++G__48341__i;}
  args = new cljs.core.IndexedSeq(G__48341__a,0);
} 
return G__48340__delegate.call(this,args);};
G__48340.cljs$lang$maxFixedArity = 0;
G__48340.cljs$lang$applyTo = (function (arglist__48342){
var args = cljs.core.seq(arglist__48342);
return G__48340__delegate(args);
});
G__48340.cljs$core$IFn$_invoke$arity$variadic = G__48340__delegate;
return G__48340;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48343__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48344__i = 0, G__48344__a = new Array(arguments.length -  0);
while (G__48344__i < G__48344__a.length) {G__48344__a[G__48344__i] = arguments[G__48344__i + 0]; ++G__48344__i;}
  args = new cljs.core.IndexedSeq(G__48344__a,0);
} 
return G__48343__delegate.call(this,args);};
G__48343.cljs$lang$maxFixedArity = 0;
G__48343.cljs$lang$applyTo = (function (arglist__48345){
var args = cljs.core.seq(arglist__48345);
return G__48343__delegate(args);
});
G__48343.cljs$core$IFn$_invoke$arity$variadic = G__48343__delegate;
return G__48343;
})()
;

return null;
});
