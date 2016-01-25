goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35730__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35731__i = 0, G__35731__a = new Array(arguments.length -  0);
while (G__35731__i < G__35731__a.length) {G__35731__a[G__35731__i] = arguments[G__35731__i + 0]; ++G__35731__i;}
  args = new cljs.core.IndexedSeq(G__35731__a,0);
} 
return G__35730__delegate.call(this,args);};
G__35730.cljs$lang$maxFixedArity = 0;
G__35730.cljs$lang$applyTo = (function (arglist__35732){
var args = cljs.core.seq(arglist__35732);
return G__35730__delegate(args);
});
G__35730.cljs$core$IFn$_invoke$arity$variadic = G__35730__delegate;
return G__35730;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35733__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35734__i = 0, G__35734__a = new Array(arguments.length -  0);
while (G__35734__i < G__35734__a.length) {G__35734__a[G__35734__i] = arguments[G__35734__i + 0]; ++G__35734__i;}
  args = new cljs.core.IndexedSeq(G__35734__a,0);
} 
return G__35733__delegate.call(this,args);};
G__35733.cljs$lang$maxFixedArity = 0;
G__35733.cljs$lang$applyTo = (function (arglist__35735){
var args = cljs.core.seq(arglist__35735);
return G__35733__delegate(args);
});
G__35733.cljs$core$IFn$_invoke$arity$variadic = G__35733__delegate;
return G__35733;
})()
;

return null;
});
