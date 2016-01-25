goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__163232__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__163232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__163233__i = 0, G__163233__a = new Array(arguments.length -  0);
while (G__163233__i < G__163233__a.length) {G__163233__a[G__163233__i] = arguments[G__163233__i + 0]; ++G__163233__i;}
  args = new cljs.core.IndexedSeq(G__163233__a,0);
} 
return G__163232__delegate.call(this,args);};
G__163232.cljs$lang$maxFixedArity = 0;
G__163232.cljs$lang$applyTo = (function (arglist__163234){
var args = cljs.core.seq(arglist__163234);
return G__163232__delegate(args);
});
G__163232.cljs$core$IFn$_invoke$arity$variadic = G__163232__delegate;
return G__163232;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__163235__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__163235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__163236__i = 0, G__163236__a = new Array(arguments.length -  0);
while (G__163236__i < G__163236__a.length) {G__163236__a[G__163236__i] = arguments[G__163236__i + 0]; ++G__163236__i;}
  args = new cljs.core.IndexedSeq(G__163236__a,0);
} 
return G__163235__delegate.call(this,args);};
G__163235.cljs$lang$maxFixedArity = 0;
G__163235.cljs$lang$applyTo = (function (arglist__163237){
var args = cljs.core.seq(arglist__163237);
return G__163235__delegate(args);
});
G__163235.cljs$core$IFn$_invoke$arity$variadic = G__163235__delegate;
return G__163235;
})()
;

return null;
});
