goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__163243__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__163243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__163244__i = 0, G__163244__a = new Array(arguments.length -  0);
while (G__163244__i < G__163244__a.length) {G__163244__a[G__163244__i] = arguments[G__163244__i + 0]; ++G__163244__i;}
  args = new cljs.core.IndexedSeq(G__163244__a,0);
} 
return G__163243__delegate.call(this,args);};
G__163243.cljs$lang$maxFixedArity = 0;
G__163243.cljs$lang$applyTo = (function (arglist__163245){
var args = cljs.core.seq(arglist__163245);
return G__163243__delegate(args);
});
G__163243.cljs$core$IFn$_invoke$arity$variadic = G__163243__delegate;
return G__163243;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__163246__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__163246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__163247__i = 0, G__163247__a = new Array(arguments.length -  0);
while (G__163247__i < G__163247__a.length) {G__163247__a[G__163247__i] = arguments[G__163247__i + 0]; ++G__163247__i;}
  args = new cljs.core.IndexedSeq(G__163247__a,0);
} 
return G__163246__delegate.call(this,args);};
G__163246.cljs$lang$maxFixedArity = 0;
G__163246.cljs$lang$applyTo = (function (arglist__163248){
var args = cljs.core.seq(arglist__163248);
return G__163246__delegate(args);
});
G__163246.cljs$core$IFn$_invoke$arity$variadic = G__163246__delegate;
return G__163246;
})()
;

return null;
});
