goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__74567__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__74567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74568__i = 0, G__74568__a = new Array(arguments.length -  0);
while (G__74568__i < G__74568__a.length) {G__74568__a[G__74568__i] = arguments[G__74568__i + 0]; ++G__74568__i;}
  args = new cljs.core.IndexedSeq(G__74568__a,0);
} 
return G__74567__delegate.call(this,args);};
G__74567.cljs$lang$maxFixedArity = 0;
G__74567.cljs$lang$applyTo = (function (arglist__74569){
var args = cljs.core.seq(arglist__74569);
return G__74567__delegate(args);
});
G__74567.cljs$core$IFn$_invoke$arity$variadic = G__74567__delegate;
return G__74567;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__74570__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__74570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74571__i = 0, G__74571__a = new Array(arguments.length -  0);
while (G__74571__i < G__74571__a.length) {G__74571__a[G__74571__i] = arguments[G__74571__i + 0]; ++G__74571__i;}
  args = new cljs.core.IndexedSeq(G__74571__a,0);
} 
return G__74570__delegate.call(this,args);};
G__74570.cljs$lang$maxFixedArity = 0;
G__74570.cljs$lang$applyTo = (function (arglist__74572){
var args = cljs.core.seq(arglist__74572);
return G__74570__delegate(args);
});
G__74570.cljs$core$IFn$_invoke$arity$variadic = G__74570__delegate;
return G__74570;
})()
;

return null;
});
