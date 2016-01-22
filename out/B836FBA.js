goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44100__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44101__i = 0, G__44101__a = new Array(arguments.length -  0);
while (G__44101__i < G__44101__a.length) {G__44101__a[G__44101__i] = arguments[G__44101__i + 0]; ++G__44101__i;}
  args = new cljs.core.IndexedSeq(G__44101__a,0);
} 
return G__44100__delegate.call(this,args);};
G__44100.cljs$lang$maxFixedArity = 0;
G__44100.cljs$lang$applyTo = (function (arglist__44102){
var args = cljs.core.seq(arglist__44102);
return G__44100__delegate(args);
});
G__44100.cljs$core$IFn$_invoke$arity$variadic = G__44100__delegate;
return G__44100;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44103__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44104__i = 0, G__44104__a = new Array(arguments.length -  0);
while (G__44104__i < G__44104__a.length) {G__44104__a[G__44104__i] = arguments[G__44104__i + 0]; ++G__44104__i;}
  args = new cljs.core.IndexedSeq(G__44104__a,0);
} 
return G__44103__delegate.call(this,args);};
G__44103.cljs$lang$maxFixedArity = 0;
G__44103.cljs$lang$applyTo = (function (arglist__44105){
var args = cljs.core.seq(arglist__44105);
return G__44103__delegate(args);
});
G__44103.cljs$core$IFn$_invoke$arity$variadic = G__44103__delegate;
return G__44103;
})()
;

return null;
});
