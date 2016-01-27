goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32268__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32269__i = 0, G__32269__a = new Array(arguments.length -  0);
while (G__32269__i < G__32269__a.length) {G__32269__a[G__32269__i] = arguments[G__32269__i + 0]; ++G__32269__i;}
  args = new cljs.core.IndexedSeq(G__32269__a,0);
} 
return G__32268__delegate.call(this,args);};
G__32268.cljs$lang$maxFixedArity = 0;
G__32268.cljs$lang$applyTo = (function (arglist__32270){
var args = cljs.core.seq(arglist__32270);
return G__32268__delegate(args);
});
G__32268.cljs$core$IFn$_invoke$arity$variadic = G__32268__delegate;
return G__32268;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32271__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32272__i = 0, G__32272__a = new Array(arguments.length -  0);
while (G__32272__i < G__32272__a.length) {G__32272__a[G__32272__i] = arguments[G__32272__i + 0]; ++G__32272__i;}
  args = new cljs.core.IndexedSeq(G__32272__a,0);
} 
return G__32271__delegate.call(this,args);};
G__32271.cljs$lang$maxFixedArity = 0;
G__32271.cljs$lang$applyTo = (function (arglist__32273){
var args = cljs.core.seq(arglist__32273);
return G__32271__delegate(args);
});
G__32271.cljs$core$IFn$_invoke$arity$variadic = G__32271__delegate;
return G__32271;
})()
;

return null;
});
