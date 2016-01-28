goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__373557__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__373557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__373558__i = 0, G__373558__a = new Array(arguments.length -  0);
while (G__373558__i < G__373558__a.length) {G__373558__a[G__373558__i] = arguments[G__373558__i + 0]; ++G__373558__i;}
  args = new cljs.core.IndexedSeq(G__373558__a,0);
} 
return G__373557__delegate.call(this,args);};
G__373557.cljs$lang$maxFixedArity = 0;
G__373557.cljs$lang$applyTo = (function (arglist__373559){
var args = cljs.core.seq(arglist__373559);
return G__373557__delegate(args);
});
G__373557.cljs$core$IFn$_invoke$arity$variadic = G__373557__delegate;
return G__373557;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__373560__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__373560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__373561__i = 0, G__373561__a = new Array(arguments.length -  0);
while (G__373561__i < G__373561__a.length) {G__373561__a[G__373561__i] = arguments[G__373561__i + 0]; ++G__373561__i;}
  args = new cljs.core.IndexedSeq(G__373561__a,0);
} 
return G__373560__delegate.call(this,args);};
G__373560.cljs$lang$maxFixedArity = 0;
G__373560.cljs$lang$applyTo = (function (arglist__373562){
var args = cljs.core.seq(arglist__373562);
return G__373560__delegate(args);
});
G__373560.cljs$core$IFn$_invoke$arity$variadic = G__373560__delegate;
return G__373560;
})()
;

return null;
});
