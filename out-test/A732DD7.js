goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57532__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57533__i = 0, G__57533__a = new Array(arguments.length -  0);
while (G__57533__i < G__57533__a.length) {G__57533__a[G__57533__i] = arguments[G__57533__i + 0]; ++G__57533__i;}
  args = new cljs.core.IndexedSeq(G__57533__a,0);
} 
return G__57532__delegate.call(this,args);};
G__57532.cljs$lang$maxFixedArity = 0;
G__57532.cljs$lang$applyTo = (function (arglist__57534){
var args = cljs.core.seq(arglist__57534);
return G__57532__delegate(args);
});
G__57532.cljs$core$IFn$_invoke$arity$variadic = G__57532__delegate;
return G__57532;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57535__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57536__i = 0, G__57536__a = new Array(arguments.length -  0);
while (G__57536__i < G__57536__a.length) {G__57536__a[G__57536__i] = arguments[G__57536__i + 0]; ++G__57536__i;}
  args = new cljs.core.IndexedSeq(G__57536__a,0);
} 
return G__57535__delegate.call(this,args);};
G__57535.cljs$lang$maxFixedArity = 0;
G__57535.cljs$lang$applyTo = (function (arglist__57537){
var args = cljs.core.seq(arglist__57537);
return G__57535__delegate(args);
});
G__57535.cljs$core$IFn$_invoke$arity$variadic = G__57535__delegate;
return G__57535;
})()
;

return null;
});
