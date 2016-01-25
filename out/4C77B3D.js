goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__209207__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__209207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__209208__i = 0, G__209208__a = new Array(arguments.length -  0);
while (G__209208__i < G__209208__a.length) {G__209208__a[G__209208__i] = arguments[G__209208__i + 0]; ++G__209208__i;}
  args = new cljs.core.IndexedSeq(G__209208__a,0);
} 
return G__209207__delegate.call(this,args);};
G__209207.cljs$lang$maxFixedArity = 0;
G__209207.cljs$lang$applyTo = (function (arglist__209209){
var args = cljs.core.seq(arglist__209209);
return G__209207__delegate(args);
});
G__209207.cljs$core$IFn$_invoke$arity$variadic = G__209207__delegate;
return G__209207;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__209210__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__209210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__209211__i = 0, G__209211__a = new Array(arguments.length -  0);
while (G__209211__i < G__209211__a.length) {G__209211__a[G__209211__i] = arguments[G__209211__i + 0]; ++G__209211__i;}
  args = new cljs.core.IndexedSeq(G__209211__a,0);
} 
return G__209210__delegate.call(this,args);};
G__209210.cljs$lang$maxFixedArity = 0;
G__209210.cljs$lang$applyTo = (function (arglist__209212){
var args = cljs.core.seq(arglist__209212);
return G__209210__delegate(args);
});
G__209210.cljs$core$IFn$_invoke$arity$variadic = G__209210__delegate;
return G__209210;
})()
;

return null;
});
