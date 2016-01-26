goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29582__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29583__i = 0, G__29583__a = new Array(arguments.length -  0);
while (G__29583__i < G__29583__a.length) {G__29583__a[G__29583__i] = arguments[G__29583__i + 0]; ++G__29583__i;}
  args = new cljs.core.IndexedSeq(G__29583__a,0);
} 
return G__29582__delegate.call(this,args);};
G__29582.cljs$lang$maxFixedArity = 0;
G__29582.cljs$lang$applyTo = (function (arglist__29584){
var args = cljs.core.seq(arglist__29584);
return G__29582__delegate(args);
});
G__29582.cljs$core$IFn$_invoke$arity$variadic = G__29582__delegate;
return G__29582;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29585__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29586__i = 0, G__29586__a = new Array(arguments.length -  0);
while (G__29586__i < G__29586__a.length) {G__29586__a[G__29586__i] = arguments[G__29586__i + 0]; ++G__29586__i;}
  args = new cljs.core.IndexedSeq(G__29586__a,0);
} 
return G__29585__delegate.call(this,args);};
G__29585.cljs$lang$maxFixedArity = 0;
G__29585.cljs$lang$applyTo = (function (arglist__29587){
var args = cljs.core.seq(arglist__29587);
return G__29585__delegate(args);
});
G__29585.cljs$core$IFn$_invoke$arity$variadic = G__29585__delegate;
return G__29585;
})()
;

return null;
});
