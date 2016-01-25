goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__140447__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__140447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__140448__i = 0, G__140448__a = new Array(arguments.length -  0);
while (G__140448__i < G__140448__a.length) {G__140448__a[G__140448__i] = arguments[G__140448__i + 0]; ++G__140448__i;}
  args = new cljs.core.IndexedSeq(G__140448__a,0);
} 
return G__140447__delegate.call(this,args);};
G__140447.cljs$lang$maxFixedArity = 0;
G__140447.cljs$lang$applyTo = (function (arglist__140449){
var args = cljs.core.seq(arglist__140449);
return G__140447__delegate(args);
});
G__140447.cljs$core$IFn$_invoke$arity$variadic = G__140447__delegate;
return G__140447;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__140450__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__140450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__140451__i = 0, G__140451__a = new Array(arguments.length -  0);
while (G__140451__i < G__140451__a.length) {G__140451__a[G__140451__i] = arguments[G__140451__i + 0]; ++G__140451__i;}
  args = new cljs.core.IndexedSeq(G__140451__a,0);
} 
return G__140450__delegate.call(this,args);};
G__140450.cljs$lang$maxFixedArity = 0;
G__140450.cljs$lang$applyTo = (function (arglist__140452){
var args = cljs.core.seq(arglist__140452);
return G__140450__delegate(args);
});
G__140450.cljs$core$IFn$_invoke$arity$variadic = G__140450__delegate;
return G__140450;
})()
;

return null;
});
