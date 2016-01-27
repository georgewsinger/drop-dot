goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__314801__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__314801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__314802__i = 0, G__314802__a = new Array(arguments.length -  0);
while (G__314802__i < G__314802__a.length) {G__314802__a[G__314802__i] = arguments[G__314802__i + 0]; ++G__314802__i;}
  args = new cljs.core.IndexedSeq(G__314802__a,0);
} 
return G__314801__delegate.call(this,args);};
G__314801.cljs$lang$maxFixedArity = 0;
G__314801.cljs$lang$applyTo = (function (arglist__314803){
var args = cljs.core.seq(arglist__314803);
return G__314801__delegate(args);
});
G__314801.cljs$core$IFn$_invoke$arity$variadic = G__314801__delegate;
return G__314801;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__314804__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__314804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__314805__i = 0, G__314805__a = new Array(arguments.length -  0);
while (G__314805__i < G__314805__a.length) {G__314805__a[G__314805__i] = arguments[G__314805__i + 0]; ++G__314805__i;}
  args = new cljs.core.IndexedSeq(G__314805__a,0);
} 
return G__314804__delegate.call(this,args);};
G__314804.cljs$lang$maxFixedArity = 0;
G__314804.cljs$lang$applyTo = (function (arglist__314806){
var args = cljs.core.seq(arglist__314806);
return G__314804__delegate(args);
});
G__314804.cljs$core$IFn$_invoke$arity$variadic = G__314804__delegate;
return G__314804;
})()
;

return null;
});
