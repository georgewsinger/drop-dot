goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40397__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40398__i = 0, G__40398__a = new Array(arguments.length -  0);
while (G__40398__i < G__40398__a.length) {G__40398__a[G__40398__i] = arguments[G__40398__i + 0]; ++G__40398__i;}
  args = new cljs.core.IndexedSeq(G__40398__a,0);
} 
return G__40397__delegate.call(this,args);};
G__40397.cljs$lang$maxFixedArity = 0;
G__40397.cljs$lang$applyTo = (function (arglist__40399){
var args = cljs.core.seq(arglist__40399);
return G__40397__delegate(args);
});
G__40397.cljs$core$IFn$_invoke$arity$variadic = G__40397__delegate;
return G__40397;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40400__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40401__i = 0, G__40401__a = new Array(arguments.length -  0);
while (G__40401__i < G__40401__a.length) {G__40401__a[G__40401__i] = arguments[G__40401__i + 0]; ++G__40401__i;}
  args = new cljs.core.IndexedSeq(G__40401__a,0);
} 
return G__40400__delegate.call(this,args);};
G__40400.cljs$lang$maxFixedArity = 0;
G__40400.cljs$lang$applyTo = (function (arglist__40402){
var args = cljs.core.seq(arglist__40402);
return G__40400__delegate(args);
});
G__40400.cljs$core$IFn$_invoke$arity$variadic = G__40400__delegate;
return G__40400;
})()
;

return null;
});
