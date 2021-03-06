goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__324881__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__324881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324882__i = 0, G__324882__a = new Array(arguments.length -  0);
while (G__324882__i < G__324882__a.length) {G__324882__a[G__324882__i] = arguments[G__324882__i + 0]; ++G__324882__i;}
  args = new cljs.core.IndexedSeq(G__324882__a,0);
} 
return G__324881__delegate.call(this,args);};
G__324881.cljs$lang$maxFixedArity = 0;
G__324881.cljs$lang$applyTo = (function (arglist__324883){
var args = cljs.core.seq(arglist__324883);
return G__324881__delegate(args);
});
G__324881.cljs$core$IFn$_invoke$arity$variadic = G__324881__delegate;
return G__324881;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__324884__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__324884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324885__i = 0, G__324885__a = new Array(arguments.length -  0);
while (G__324885__i < G__324885__a.length) {G__324885__a[G__324885__i] = arguments[G__324885__i + 0]; ++G__324885__i;}
  args = new cljs.core.IndexedSeq(G__324885__a,0);
} 
return G__324884__delegate.call(this,args);};
G__324884.cljs$lang$maxFixedArity = 0;
G__324884.cljs$lang$applyTo = (function (arglist__324886){
var args = cljs.core.seq(arglist__324886);
return G__324884__delegate(args);
});
G__324884.cljs$core$IFn$_invoke$arity$variadic = G__324884__delegate;
return G__324884;
})()
;

return null;
});
