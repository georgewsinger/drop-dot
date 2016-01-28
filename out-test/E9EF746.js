goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__85524__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__85524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__85525__i = 0, G__85525__a = new Array(arguments.length -  0);
while (G__85525__i < G__85525__a.length) {G__85525__a[G__85525__i] = arguments[G__85525__i + 0]; ++G__85525__i;}
  args = new cljs.core.IndexedSeq(G__85525__a,0);
} 
return G__85524__delegate.call(this,args);};
G__85524.cljs$lang$maxFixedArity = 0;
G__85524.cljs$lang$applyTo = (function (arglist__85526){
var args = cljs.core.seq(arglist__85526);
return G__85524__delegate(args);
});
G__85524.cljs$core$IFn$_invoke$arity$variadic = G__85524__delegate;
return G__85524;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__85527__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__85527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__85528__i = 0, G__85528__a = new Array(arguments.length -  0);
while (G__85528__i < G__85528__a.length) {G__85528__a[G__85528__i] = arguments[G__85528__i + 0]; ++G__85528__i;}
  args = new cljs.core.IndexedSeq(G__85528__a,0);
} 
return G__85527__delegate.call(this,args);};
G__85527.cljs$lang$maxFixedArity = 0;
G__85527.cljs$lang$applyTo = (function (arglist__85529){
var args = cljs.core.seq(arglist__85529);
return G__85527__delegate(args);
});
G__85527.cljs$core$IFn$_invoke$arity$variadic = G__85527__delegate;
return G__85527;
})()
;

return null;
});
