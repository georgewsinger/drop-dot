goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__286215__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__286215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286216__i = 0, G__286216__a = new Array(arguments.length -  0);
while (G__286216__i < G__286216__a.length) {G__286216__a[G__286216__i] = arguments[G__286216__i + 0]; ++G__286216__i;}
  args = new cljs.core.IndexedSeq(G__286216__a,0);
} 
return G__286215__delegate.call(this,args);};
G__286215.cljs$lang$maxFixedArity = 0;
G__286215.cljs$lang$applyTo = (function (arglist__286217){
var args = cljs.core.seq(arglist__286217);
return G__286215__delegate(args);
});
G__286215.cljs$core$IFn$_invoke$arity$variadic = G__286215__delegate;
return G__286215;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__286218__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__286218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286219__i = 0, G__286219__a = new Array(arguments.length -  0);
while (G__286219__i < G__286219__a.length) {G__286219__a[G__286219__i] = arguments[G__286219__i + 0]; ++G__286219__i;}
  args = new cljs.core.IndexedSeq(G__286219__a,0);
} 
return G__286218__delegate.call(this,args);};
G__286218.cljs$lang$maxFixedArity = 0;
G__286218.cljs$lang$applyTo = (function (arglist__286220){
var args = cljs.core.seq(arglist__286220);
return G__286218__delegate(args);
});
G__286218.cljs$core$IFn$_invoke$arity$variadic = G__286218__delegate;
return G__286218;
})()
;

return null;
});
