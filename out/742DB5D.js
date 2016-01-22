goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15597__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15598__i = 0, G__15598__a = new Array(arguments.length -  0);
while (G__15598__i < G__15598__a.length) {G__15598__a[G__15598__i] = arguments[G__15598__i + 0]; ++G__15598__i;}
  args = new cljs.core.IndexedSeq(G__15598__a,0);
} 
return G__15597__delegate.call(this,args);};
G__15597.cljs$lang$maxFixedArity = 0;
G__15597.cljs$lang$applyTo = (function (arglist__15599){
var args = cljs.core.seq(arglist__15599);
return G__15597__delegate(args);
});
G__15597.cljs$core$IFn$_invoke$arity$variadic = G__15597__delegate;
return G__15597;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15600__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15601__i = 0, G__15601__a = new Array(arguments.length -  0);
while (G__15601__i < G__15601__a.length) {G__15601__a[G__15601__i] = arguments[G__15601__i + 0]; ++G__15601__i;}
  args = new cljs.core.IndexedSeq(G__15601__a,0);
} 
return G__15600__delegate.call(this,args);};
G__15600.cljs$lang$maxFixedArity = 0;
G__15600.cljs$lang$applyTo = (function (arglist__15602){
var args = cljs.core.seq(arglist__15602);
return G__15600__delegate(args);
});
G__15600.cljs$core$IFn$_invoke$arity$variadic = G__15600__delegate;
return G__15600;
})()
;

return null;
});
