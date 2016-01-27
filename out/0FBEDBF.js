goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__304421__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__304421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__304422__i = 0, G__304422__a = new Array(arguments.length -  0);
while (G__304422__i < G__304422__a.length) {G__304422__a[G__304422__i] = arguments[G__304422__i + 0]; ++G__304422__i;}
  args = new cljs.core.IndexedSeq(G__304422__a,0);
} 
return G__304421__delegate.call(this,args);};
G__304421.cljs$lang$maxFixedArity = 0;
G__304421.cljs$lang$applyTo = (function (arglist__304423){
var args = cljs.core.seq(arglist__304423);
return G__304421__delegate(args);
});
G__304421.cljs$core$IFn$_invoke$arity$variadic = G__304421__delegate;
return G__304421;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__304424__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__304424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__304425__i = 0, G__304425__a = new Array(arguments.length -  0);
while (G__304425__i < G__304425__a.length) {G__304425__a[G__304425__i] = arguments[G__304425__i + 0]; ++G__304425__i;}
  args = new cljs.core.IndexedSeq(G__304425__a,0);
} 
return G__304424__delegate.call(this,args);};
G__304424.cljs$lang$maxFixedArity = 0;
G__304424.cljs$lang$applyTo = (function (arglist__304426){
var args = cljs.core.seq(arglist__304426);
return G__304424__delegate(args);
});
G__304424.cljs$core$IFn$_invoke$arity$variadic = G__304424__delegate;
return G__304424;
})()
;

return null;
});
