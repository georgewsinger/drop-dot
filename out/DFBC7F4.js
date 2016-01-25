goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77667__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77668__i = 0, G__77668__a = new Array(arguments.length -  0);
while (G__77668__i < G__77668__a.length) {G__77668__a[G__77668__i] = arguments[G__77668__i + 0]; ++G__77668__i;}
  args = new cljs.core.IndexedSeq(G__77668__a,0);
} 
return G__77667__delegate.call(this,args);};
G__77667.cljs$lang$maxFixedArity = 0;
G__77667.cljs$lang$applyTo = (function (arglist__77669){
var args = cljs.core.seq(arglist__77669);
return G__77667__delegate(args);
});
G__77667.cljs$core$IFn$_invoke$arity$variadic = G__77667__delegate;
return G__77667;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__77670__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__77670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77671__i = 0, G__77671__a = new Array(arguments.length -  0);
while (G__77671__i < G__77671__a.length) {G__77671__a[G__77671__i] = arguments[G__77671__i + 0]; ++G__77671__i;}
  args = new cljs.core.IndexedSeq(G__77671__a,0);
} 
return G__77670__delegate.call(this,args);};
G__77670.cljs$lang$maxFixedArity = 0;
G__77670.cljs$lang$applyTo = (function (arglist__77672){
var args = cljs.core.seq(arglist__77672);
return G__77670__delegate(args);
});
G__77670.cljs$core$IFn$_invoke$arity$variadic = G__77670__delegate;
return G__77670;
})()
;

return null;
});
