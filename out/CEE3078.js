goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77590__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77591__i = 0, G__77591__a = new Array(arguments.length -  0);
while (G__77591__i < G__77591__a.length) {G__77591__a[G__77591__i] = arguments[G__77591__i + 0]; ++G__77591__i;}
  args = new cljs.core.IndexedSeq(G__77591__a,0);
} 
return G__77590__delegate.call(this,args);};
G__77590.cljs$lang$maxFixedArity = 0;
G__77590.cljs$lang$applyTo = (function (arglist__77592){
var args = cljs.core.seq(arglist__77592);
return G__77590__delegate(args);
});
G__77590.cljs$core$IFn$_invoke$arity$variadic = G__77590__delegate;
return G__77590;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__77593__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__77593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77594__i = 0, G__77594__a = new Array(arguments.length -  0);
while (G__77594__i < G__77594__a.length) {G__77594__a[G__77594__i] = arguments[G__77594__i + 0]; ++G__77594__i;}
  args = new cljs.core.IndexedSeq(G__77594__a,0);
} 
return G__77593__delegate.call(this,args);};
G__77593.cljs$lang$maxFixedArity = 0;
G__77593.cljs$lang$applyTo = (function (arglist__77595){
var args = cljs.core.seq(arglist__77595);
return G__77593__delegate(args);
});
G__77593.cljs$core$IFn$_invoke$arity$variadic = G__77593__delegate;
return G__77593;
})()
;

return null;
});
