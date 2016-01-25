goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33618__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33619__i = 0, G__33619__a = new Array(arguments.length -  0);
while (G__33619__i < G__33619__a.length) {G__33619__a[G__33619__i] = arguments[G__33619__i + 0]; ++G__33619__i;}
  args = new cljs.core.IndexedSeq(G__33619__a,0);
} 
return G__33618__delegate.call(this,args);};
G__33618.cljs$lang$maxFixedArity = 0;
G__33618.cljs$lang$applyTo = (function (arglist__33620){
var args = cljs.core.seq(arglist__33620);
return G__33618__delegate(args);
});
G__33618.cljs$core$IFn$_invoke$arity$variadic = G__33618__delegate;
return G__33618;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33621__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33622__i = 0, G__33622__a = new Array(arguments.length -  0);
while (G__33622__i < G__33622__a.length) {G__33622__a[G__33622__i] = arguments[G__33622__i + 0]; ++G__33622__i;}
  args = new cljs.core.IndexedSeq(G__33622__a,0);
} 
return G__33621__delegate.call(this,args);};
G__33621.cljs$lang$maxFixedArity = 0;
G__33621.cljs$lang$applyTo = (function (arglist__33623){
var args = cljs.core.seq(arglist__33623);
return G__33621__delegate(args);
});
G__33621.cljs$core$IFn$_invoke$arity$variadic = G__33621__delegate;
return G__33621;
})()
;

return null;
});
