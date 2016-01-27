goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__143881__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__143881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143882__i = 0, G__143882__a = new Array(arguments.length -  0);
while (G__143882__i < G__143882__a.length) {G__143882__a[G__143882__i] = arguments[G__143882__i + 0]; ++G__143882__i;}
  args = new cljs.core.IndexedSeq(G__143882__a,0);
} 
return G__143881__delegate.call(this,args);};
G__143881.cljs$lang$maxFixedArity = 0;
G__143881.cljs$lang$applyTo = (function (arglist__143883){
var args = cljs.core.seq(arglist__143883);
return G__143881__delegate(args);
});
G__143881.cljs$core$IFn$_invoke$arity$variadic = G__143881__delegate;
return G__143881;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__143884__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__143884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143885__i = 0, G__143885__a = new Array(arguments.length -  0);
while (G__143885__i < G__143885__a.length) {G__143885__a[G__143885__i] = arguments[G__143885__i + 0]; ++G__143885__i;}
  args = new cljs.core.IndexedSeq(G__143885__a,0);
} 
return G__143884__delegate.call(this,args);};
G__143884.cljs$lang$maxFixedArity = 0;
G__143884.cljs$lang$applyTo = (function (arglist__143886){
var args = cljs.core.seq(arglist__143886);
return G__143884__delegate(args);
});
G__143884.cljs$core$IFn$_invoke$arity$variadic = G__143884__delegate;
return G__143884;
})()
;

return null;
});
