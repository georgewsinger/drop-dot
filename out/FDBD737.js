goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__355667__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__355667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__355668__i = 0, G__355668__a = new Array(arguments.length -  0);
while (G__355668__i < G__355668__a.length) {G__355668__a[G__355668__i] = arguments[G__355668__i + 0]; ++G__355668__i;}
  args = new cljs.core.IndexedSeq(G__355668__a,0);
} 
return G__355667__delegate.call(this,args);};
G__355667.cljs$lang$maxFixedArity = 0;
G__355667.cljs$lang$applyTo = (function (arglist__355669){
var args = cljs.core.seq(arglist__355669);
return G__355667__delegate(args);
});
G__355667.cljs$core$IFn$_invoke$arity$variadic = G__355667__delegate;
return G__355667;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__355670__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__355670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__355671__i = 0, G__355671__a = new Array(arguments.length -  0);
while (G__355671__i < G__355671__a.length) {G__355671__a[G__355671__i] = arguments[G__355671__i + 0]; ++G__355671__i;}
  args = new cljs.core.IndexedSeq(G__355671__a,0);
} 
return G__355670__delegate.call(this,args);};
G__355670.cljs$lang$maxFixedArity = 0;
G__355670.cljs$lang$applyTo = (function (arglist__355672){
var args = cljs.core.seq(arglist__355672);
return G__355670__delegate(args);
});
G__355670.cljs$core$IFn$_invoke$arity$variadic = G__355670__delegate;
return G__355670;
})()
;

return null;
});
