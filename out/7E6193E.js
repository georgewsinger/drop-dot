goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__261710__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__261710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__261711__i = 0, G__261711__a = new Array(arguments.length -  0);
while (G__261711__i < G__261711__a.length) {G__261711__a[G__261711__i] = arguments[G__261711__i + 0]; ++G__261711__i;}
  args = new cljs.core.IndexedSeq(G__261711__a,0);
} 
return G__261710__delegate.call(this,args);};
G__261710.cljs$lang$maxFixedArity = 0;
G__261710.cljs$lang$applyTo = (function (arglist__261712){
var args = cljs.core.seq(arglist__261712);
return G__261710__delegate(args);
});
G__261710.cljs$core$IFn$_invoke$arity$variadic = G__261710__delegate;
return G__261710;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__261713__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__261713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__261714__i = 0, G__261714__a = new Array(arguments.length -  0);
while (G__261714__i < G__261714__a.length) {G__261714__a[G__261714__i] = arguments[G__261714__i + 0]; ++G__261714__i;}
  args = new cljs.core.IndexedSeq(G__261714__a,0);
} 
return G__261713__delegate.call(this,args);};
G__261713.cljs$lang$maxFixedArity = 0;
G__261713.cljs$lang$applyTo = (function (arglist__261715){
var args = cljs.core.seq(arglist__261715);
return G__261713__delegate(args);
});
G__261713.cljs$core$IFn$_invoke$arity$variadic = G__261713__delegate;
return G__261713;
})()
;

return null;
});
