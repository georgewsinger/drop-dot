goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__83224__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__83224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83225__i = 0, G__83225__a = new Array(arguments.length -  0);
while (G__83225__i < G__83225__a.length) {G__83225__a[G__83225__i] = arguments[G__83225__i + 0]; ++G__83225__i;}
  args = new cljs.core.IndexedSeq(G__83225__a,0);
} 
return G__83224__delegate.call(this,args);};
G__83224.cljs$lang$maxFixedArity = 0;
G__83224.cljs$lang$applyTo = (function (arglist__83226){
var args = cljs.core.seq(arglist__83226);
return G__83224__delegate(args);
});
G__83224.cljs$core$IFn$_invoke$arity$variadic = G__83224__delegate;
return G__83224;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__83227__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__83227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83228__i = 0, G__83228__a = new Array(arguments.length -  0);
while (G__83228__i < G__83228__a.length) {G__83228__a[G__83228__i] = arguments[G__83228__i + 0]; ++G__83228__i;}
  args = new cljs.core.IndexedSeq(G__83228__a,0);
} 
return G__83227__delegate.call(this,args);};
G__83227.cljs$lang$maxFixedArity = 0;
G__83227.cljs$lang$applyTo = (function (arglist__83229){
var args = cljs.core.seq(arglist__83229);
return G__83227__delegate(args);
});
G__83227.cljs$core$IFn$_invoke$arity$variadic = G__83227__delegate;
return G__83227;
})()
;

return null;
});
