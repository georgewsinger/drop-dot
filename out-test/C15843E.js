goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26460__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26461__i = 0, G__26461__a = new Array(arguments.length -  0);
while (G__26461__i < G__26461__a.length) {G__26461__a[G__26461__i] = arguments[G__26461__i + 0]; ++G__26461__i;}
  args = new cljs.core.IndexedSeq(G__26461__a,0);
} 
return G__26460__delegate.call(this,args);};
G__26460.cljs$lang$maxFixedArity = 0;
G__26460.cljs$lang$applyTo = (function (arglist__26462){
var args = cljs.core.seq(arglist__26462);
return G__26460__delegate(args);
});
G__26460.cljs$core$IFn$_invoke$arity$variadic = G__26460__delegate;
return G__26460;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26463__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26464__i = 0, G__26464__a = new Array(arguments.length -  0);
while (G__26464__i < G__26464__a.length) {G__26464__a[G__26464__i] = arguments[G__26464__i + 0]; ++G__26464__i;}
  args = new cljs.core.IndexedSeq(G__26464__a,0);
} 
return G__26463__delegate.call(this,args);};
G__26463.cljs$lang$maxFixedArity = 0;
G__26463.cljs$lang$applyTo = (function (arglist__26465){
var args = cljs.core.seq(arglist__26465);
return G__26463__delegate(args);
});
G__26463.cljs$core$IFn$_invoke$arity$variadic = G__26463__delegate;
return G__26463;
})()
;

return null;
});
