goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__216193__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__216193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__216194__i = 0, G__216194__a = new Array(arguments.length -  0);
while (G__216194__i < G__216194__a.length) {G__216194__a[G__216194__i] = arguments[G__216194__i + 0]; ++G__216194__i;}
  args = new cljs.core.IndexedSeq(G__216194__a,0);
} 
return G__216193__delegate.call(this,args);};
G__216193.cljs$lang$maxFixedArity = 0;
G__216193.cljs$lang$applyTo = (function (arglist__216195){
var args = cljs.core.seq(arglist__216195);
return G__216193__delegate(args);
});
G__216193.cljs$core$IFn$_invoke$arity$variadic = G__216193__delegate;
return G__216193;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__216196__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__216196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__216197__i = 0, G__216197__a = new Array(arguments.length -  0);
while (G__216197__i < G__216197__a.length) {G__216197__a[G__216197__i] = arguments[G__216197__i + 0]; ++G__216197__i;}
  args = new cljs.core.IndexedSeq(G__216197__a,0);
} 
return G__216196__delegate.call(this,args);};
G__216196.cljs$lang$maxFixedArity = 0;
G__216196.cljs$lang$applyTo = (function (arglist__216198){
var args = cljs.core.seq(arglist__216198);
return G__216196__delegate(args);
});
G__216196.cljs$core$IFn$_invoke$arity$variadic = G__216196__delegate;
return G__216196;
})()
;

return null;
});
