goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20454__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20455__i = 0, G__20455__a = new Array(arguments.length -  0);
while (G__20455__i < G__20455__a.length) {G__20455__a[G__20455__i] = arguments[G__20455__i + 0]; ++G__20455__i;}
  args = new cljs.core.IndexedSeq(G__20455__a,0);
} 
return G__20454__delegate.call(this,args);};
G__20454.cljs$lang$maxFixedArity = 0;
G__20454.cljs$lang$applyTo = (function (arglist__20456){
var args = cljs.core.seq(arglist__20456);
return G__20454__delegate(args);
});
G__20454.cljs$core$IFn$_invoke$arity$variadic = G__20454__delegate;
return G__20454;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20457__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20458__i = 0, G__20458__a = new Array(arguments.length -  0);
while (G__20458__i < G__20458__a.length) {G__20458__a[G__20458__i] = arguments[G__20458__i + 0]; ++G__20458__i;}
  args = new cljs.core.IndexedSeq(G__20458__a,0);
} 
return G__20457__delegate.call(this,args);};
G__20457.cljs$lang$maxFixedArity = 0;
G__20457.cljs$lang$applyTo = (function (arglist__20459){
var args = cljs.core.seq(arglist__20459);
return G__20457__delegate(args);
});
G__20457.cljs$core$IFn$_invoke$arity$variadic = G__20457__delegate;
return G__20457;
})()
;

return null;
});
