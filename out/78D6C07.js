goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__375667__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__375667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__375668__i = 0, G__375668__a = new Array(arguments.length -  0);
while (G__375668__i < G__375668__a.length) {G__375668__a[G__375668__i] = arguments[G__375668__i + 0]; ++G__375668__i;}
  args = new cljs.core.IndexedSeq(G__375668__a,0);
} 
return G__375667__delegate.call(this,args);};
G__375667.cljs$lang$maxFixedArity = 0;
G__375667.cljs$lang$applyTo = (function (arglist__375669){
var args = cljs.core.seq(arglist__375669);
return G__375667__delegate(args);
});
G__375667.cljs$core$IFn$_invoke$arity$variadic = G__375667__delegate;
return G__375667;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__375670__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__375670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__375671__i = 0, G__375671__a = new Array(arguments.length -  0);
while (G__375671__i < G__375671__a.length) {G__375671__a[G__375671__i] = arguments[G__375671__i + 0]; ++G__375671__i;}
  args = new cljs.core.IndexedSeq(G__375671__a,0);
} 
return G__375670__delegate.call(this,args);};
G__375670.cljs$lang$maxFixedArity = 0;
G__375670.cljs$lang$applyTo = (function (arglist__375672){
var args = cljs.core.seq(arglist__375672);
return G__375670__delegate(args);
});
G__375670.cljs$core$IFn$_invoke$arity$variadic = G__375670__delegate;
return G__375670;
})()
;

return null;
});
