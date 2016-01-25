goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11115__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11116__i = 0, G__11116__a = new Array(arguments.length -  0);
while (G__11116__i < G__11116__a.length) {G__11116__a[G__11116__i] = arguments[G__11116__i + 0]; ++G__11116__i;}
  args = new cljs.core.IndexedSeq(G__11116__a,0);
} 
return G__11115__delegate.call(this,args);};
G__11115.cljs$lang$maxFixedArity = 0;
G__11115.cljs$lang$applyTo = (function (arglist__11117){
var args = cljs.core.seq(arglist__11117);
return G__11115__delegate(args);
});
G__11115.cljs$core$IFn$_invoke$arity$variadic = G__11115__delegate;
return G__11115;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11118__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11119__i = 0, G__11119__a = new Array(arguments.length -  0);
while (G__11119__i < G__11119__a.length) {G__11119__a[G__11119__i] = arguments[G__11119__i + 0]; ++G__11119__i;}
  args = new cljs.core.IndexedSeq(G__11119__a,0);
} 
return G__11118__delegate.call(this,args);};
G__11118.cljs$lang$maxFixedArity = 0;
G__11118.cljs$lang$applyTo = (function (arglist__11120){
var args = cljs.core.seq(arglist__11120);
return G__11118__delegate(args);
});
G__11118.cljs$core$IFn$_invoke$arity$variadic = G__11118__delegate;
return G__11118;
})()
;

return null;
});
