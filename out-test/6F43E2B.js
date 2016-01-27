goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__149301__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__149301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149302__i = 0, G__149302__a = new Array(arguments.length -  0);
while (G__149302__i < G__149302__a.length) {G__149302__a[G__149302__i] = arguments[G__149302__i + 0]; ++G__149302__i;}
  args = new cljs.core.IndexedSeq(G__149302__a,0);
} 
return G__149301__delegate.call(this,args);};
G__149301.cljs$lang$maxFixedArity = 0;
G__149301.cljs$lang$applyTo = (function (arglist__149303){
var args = cljs.core.seq(arglist__149303);
return G__149301__delegate(args);
});
G__149301.cljs$core$IFn$_invoke$arity$variadic = G__149301__delegate;
return G__149301;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__149304__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__149304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149305__i = 0, G__149305__a = new Array(arguments.length -  0);
while (G__149305__i < G__149305__a.length) {G__149305__a[G__149305__i] = arguments[G__149305__i + 0]; ++G__149305__i;}
  args = new cljs.core.IndexedSeq(G__149305__a,0);
} 
return G__149304__delegate.call(this,args);};
G__149304.cljs$lang$maxFixedArity = 0;
G__149304.cljs$lang$applyTo = (function (arglist__149306){
var args = cljs.core.seq(arglist__149306);
return G__149304__delegate(args);
});
G__149304.cljs$core$IFn$_invoke$arity$variadic = G__149304__delegate;
return G__149304;
})()
;

return null;
});
