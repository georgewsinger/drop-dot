goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235056__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235057__i = 0, G__235057__a = new Array(arguments.length -  0);
while (G__235057__i < G__235057__a.length) {G__235057__a[G__235057__i] = arguments[G__235057__i + 0]; ++G__235057__i;}
  args = new cljs.core.IndexedSeq(G__235057__a,0);
} 
return G__235056__delegate.call(this,args);};
G__235056.cljs$lang$maxFixedArity = 0;
G__235056.cljs$lang$applyTo = (function (arglist__235058){
var args = cljs.core.seq(arglist__235058);
return G__235056__delegate(args);
});
G__235056.cljs$core$IFn$_invoke$arity$variadic = G__235056__delegate;
return G__235056;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235059__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235060__i = 0, G__235060__a = new Array(arguments.length -  0);
while (G__235060__i < G__235060__a.length) {G__235060__a[G__235060__i] = arguments[G__235060__i + 0]; ++G__235060__i;}
  args = new cljs.core.IndexedSeq(G__235060__a,0);
} 
return G__235059__delegate.call(this,args);};
G__235059.cljs$lang$maxFixedArity = 0;
G__235059.cljs$lang$applyTo = (function (arglist__235061){
var args = cljs.core.seq(arglist__235061);
return G__235059__delegate(args);
});
G__235059.cljs$core$IFn$_invoke$arity$variadic = G__235059__delegate;
return G__235059;
})()
;

return null;
});
