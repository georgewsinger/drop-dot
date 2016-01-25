goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__112883__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__112883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__112884__i = 0, G__112884__a = new Array(arguments.length -  0);
while (G__112884__i < G__112884__a.length) {G__112884__a[G__112884__i] = arguments[G__112884__i + 0]; ++G__112884__i;}
  args = new cljs.core.IndexedSeq(G__112884__a,0);
} 
return G__112883__delegate.call(this,args);};
G__112883.cljs$lang$maxFixedArity = 0;
G__112883.cljs$lang$applyTo = (function (arglist__112885){
var args = cljs.core.seq(arglist__112885);
return G__112883__delegate(args);
});
G__112883.cljs$core$IFn$_invoke$arity$variadic = G__112883__delegate;
return G__112883;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__112886__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__112886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__112887__i = 0, G__112887__a = new Array(arguments.length -  0);
while (G__112887__i < G__112887__a.length) {G__112887__a[G__112887__i] = arguments[G__112887__i + 0]; ++G__112887__i;}
  args = new cljs.core.IndexedSeq(G__112887__a,0);
} 
return G__112886__delegate.call(this,args);};
G__112886.cljs$lang$maxFixedArity = 0;
G__112886.cljs$lang$applyTo = (function (arglist__112888){
var args = cljs.core.seq(arglist__112888);
return G__112886__delegate(args);
});
G__112886.cljs$core$IFn$_invoke$arity$variadic = G__112886__delegate;
return G__112886;
})()
;

return null;
});
