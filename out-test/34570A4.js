goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24105__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24106__i = 0, G__24106__a = new Array(arguments.length -  0);
while (G__24106__i < G__24106__a.length) {G__24106__a[G__24106__i] = arguments[G__24106__i + 0]; ++G__24106__i;}
  args = new cljs.core.IndexedSeq(G__24106__a,0);
} 
return G__24105__delegate.call(this,args);};
G__24105.cljs$lang$maxFixedArity = 0;
G__24105.cljs$lang$applyTo = (function (arglist__24107){
var args = cljs.core.seq(arglist__24107);
return G__24105__delegate(args);
});
G__24105.cljs$core$IFn$_invoke$arity$variadic = G__24105__delegate;
return G__24105;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24108__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24109__i = 0, G__24109__a = new Array(arguments.length -  0);
while (G__24109__i < G__24109__a.length) {G__24109__a[G__24109__i] = arguments[G__24109__i + 0]; ++G__24109__i;}
  args = new cljs.core.IndexedSeq(G__24109__a,0);
} 
return G__24108__delegate.call(this,args);};
G__24108.cljs$lang$maxFixedArity = 0;
G__24108.cljs$lang$applyTo = (function (arglist__24110){
var args = cljs.core.seq(arglist__24110);
return G__24108__delegate(args);
});
G__24108.cljs$core$IFn$_invoke$arity$variadic = G__24108__delegate;
return G__24108;
})()
;

return null;
});
