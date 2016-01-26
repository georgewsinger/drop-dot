goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__292332__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__292332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292333__i = 0, G__292333__a = new Array(arguments.length -  0);
while (G__292333__i < G__292333__a.length) {G__292333__a[G__292333__i] = arguments[G__292333__i + 0]; ++G__292333__i;}
  args = new cljs.core.IndexedSeq(G__292333__a,0);
} 
return G__292332__delegate.call(this,args);};
G__292332.cljs$lang$maxFixedArity = 0;
G__292332.cljs$lang$applyTo = (function (arglist__292334){
var args = cljs.core.seq(arglist__292334);
return G__292332__delegate(args);
});
G__292332.cljs$core$IFn$_invoke$arity$variadic = G__292332__delegate;
return G__292332;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__292335__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__292335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292336__i = 0, G__292336__a = new Array(arguments.length -  0);
while (G__292336__i < G__292336__a.length) {G__292336__a[G__292336__i] = arguments[G__292336__i + 0]; ++G__292336__i;}
  args = new cljs.core.IndexedSeq(G__292336__a,0);
} 
return G__292335__delegate.call(this,args);};
G__292335.cljs$lang$maxFixedArity = 0;
G__292335.cljs$lang$applyTo = (function (arglist__292337){
var args = cljs.core.seq(arglist__292337);
return G__292335__delegate(args);
});
G__292335.cljs$core$IFn$_invoke$arity$variadic = G__292335__delegate;
return G__292335;
})()
;

return null;
});
