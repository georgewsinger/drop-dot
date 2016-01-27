goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__312297__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__312297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__312298__i = 0, G__312298__a = new Array(arguments.length -  0);
while (G__312298__i < G__312298__a.length) {G__312298__a[G__312298__i] = arguments[G__312298__i + 0]; ++G__312298__i;}
  args = new cljs.core.IndexedSeq(G__312298__a,0);
} 
return G__312297__delegate.call(this,args);};
G__312297.cljs$lang$maxFixedArity = 0;
G__312297.cljs$lang$applyTo = (function (arglist__312299){
var args = cljs.core.seq(arglist__312299);
return G__312297__delegate(args);
});
G__312297.cljs$core$IFn$_invoke$arity$variadic = G__312297__delegate;
return G__312297;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__312300__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__312300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__312301__i = 0, G__312301__a = new Array(arguments.length -  0);
while (G__312301__i < G__312301__a.length) {G__312301__a[G__312301__i] = arguments[G__312301__i + 0]; ++G__312301__i;}
  args = new cljs.core.IndexedSeq(G__312301__a,0);
} 
return G__312300__delegate.call(this,args);};
G__312300.cljs$lang$maxFixedArity = 0;
G__312300.cljs$lang$applyTo = (function (arglist__312302){
var args = cljs.core.seq(arglist__312302);
return G__312300__delegate(args);
});
G__312300.cljs$core$IFn$_invoke$arity$variadic = G__312300__delegate;
return G__312300;
})()
;

return null;
});
