goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__162667__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__162667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162668__i = 0, G__162668__a = new Array(arguments.length -  0);
while (G__162668__i < G__162668__a.length) {G__162668__a[G__162668__i] = arguments[G__162668__i + 0]; ++G__162668__i;}
  args = new cljs.core.IndexedSeq(G__162668__a,0);
} 
return G__162667__delegate.call(this,args);};
G__162667.cljs$lang$maxFixedArity = 0;
G__162667.cljs$lang$applyTo = (function (arglist__162669){
var args = cljs.core.seq(arglist__162669);
return G__162667__delegate(args);
});
G__162667.cljs$core$IFn$_invoke$arity$variadic = G__162667__delegate;
return G__162667;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__162670__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__162670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162671__i = 0, G__162671__a = new Array(arguments.length -  0);
while (G__162671__i < G__162671__a.length) {G__162671__a[G__162671__i] = arguments[G__162671__i + 0]; ++G__162671__i;}
  args = new cljs.core.IndexedSeq(G__162671__a,0);
} 
return G__162670__delegate.call(this,args);};
G__162670.cljs$lang$maxFixedArity = 0;
G__162670.cljs$lang$applyTo = (function (arglist__162672){
var args = cljs.core.seq(arglist__162672);
return G__162670__delegate(args);
});
G__162670.cljs$core$IFn$_invoke$arity$variadic = G__162670__delegate;
return G__162670;
})()
;

return null;
});
