goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__202221__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__202221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__202222__i = 0, G__202222__a = new Array(arguments.length -  0);
while (G__202222__i < G__202222__a.length) {G__202222__a[G__202222__i] = arguments[G__202222__i + 0]; ++G__202222__i;}
  args = new cljs.core.IndexedSeq(G__202222__a,0);
} 
return G__202221__delegate.call(this,args);};
G__202221.cljs$lang$maxFixedArity = 0;
G__202221.cljs$lang$applyTo = (function (arglist__202223){
var args = cljs.core.seq(arglist__202223);
return G__202221__delegate(args);
});
G__202221.cljs$core$IFn$_invoke$arity$variadic = G__202221__delegate;
return G__202221;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__202224__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__202224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__202225__i = 0, G__202225__a = new Array(arguments.length -  0);
while (G__202225__i < G__202225__a.length) {G__202225__a[G__202225__i] = arguments[G__202225__i + 0]; ++G__202225__i;}
  args = new cljs.core.IndexedSeq(G__202225__a,0);
} 
return G__202224__delegate.call(this,args);};
G__202224.cljs$lang$maxFixedArity = 0;
G__202224.cljs$lang$applyTo = (function (arglist__202226){
var args = cljs.core.seq(arglist__202226);
return G__202224__delegate(args);
});
G__202224.cljs$core$IFn$_invoke$arity$variadic = G__202224__delegate;
return G__202224;
})()
;

return null;
});
