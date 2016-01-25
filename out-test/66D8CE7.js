goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20447__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20448__i = 0, G__20448__a = new Array(arguments.length -  0);
while (G__20448__i < G__20448__a.length) {G__20448__a[G__20448__i] = arguments[G__20448__i + 0]; ++G__20448__i;}
  args = new cljs.core.IndexedSeq(G__20448__a,0);
} 
return G__20447__delegate.call(this,args);};
G__20447.cljs$lang$maxFixedArity = 0;
G__20447.cljs$lang$applyTo = (function (arglist__20449){
var args = cljs.core.seq(arglist__20449);
return G__20447__delegate(args);
});
G__20447.cljs$core$IFn$_invoke$arity$variadic = G__20447__delegate;
return G__20447;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20450__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20451__i = 0, G__20451__a = new Array(arguments.length -  0);
while (G__20451__i < G__20451__a.length) {G__20451__a[G__20451__i] = arguments[G__20451__i + 0]; ++G__20451__i;}
  args = new cljs.core.IndexedSeq(G__20451__a,0);
} 
return G__20450__delegate.call(this,args);};
G__20450.cljs$lang$maxFixedArity = 0;
G__20450.cljs$lang$applyTo = (function (arglist__20452){
var args = cljs.core.seq(arglist__20452);
return G__20450__delegate(args);
});
G__20450.cljs$core$IFn$_invoke$arity$variadic = G__20450__delegate;
return G__20450;
})()
;

return null;
});
