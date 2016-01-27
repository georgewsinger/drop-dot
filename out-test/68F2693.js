goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33194__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33195__i = 0, G__33195__a = new Array(arguments.length -  0);
while (G__33195__i < G__33195__a.length) {G__33195__a[G__33195__i] = arguments[G__33195__i + 0]; ++G__33195__i;}
  args = new cljs.core.IndexedSeq(G__33195__a,0);
} 
return G__33194__delegate.call(this,args);};
G__33194.cljs$lang$maxFixedArity = 0;
G__33194.cljs$lang$applyTo = (function (arglist__33196){
var args = cljs.core.seq(arglist__33196);
return G__33194__delegate(args);
});
G__33194.cljs$core$IFn$_invoke$arity$variadic = G__33194__delegate;
return G__33194;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33197__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33198__i = 0, G__33198__a = new Array(arguments.length -  0);
while (G__33198__i < G__33198__a.length) {G__33198__a[G__33198__i] = arguments[G__33198__i + 0]; ++G__33198__i;}
  args = new cljs.core.IndexedSeq(G__33198__a,0);
} 
return G__33197__delegate.call(this,args);};
G__33197.cljs$lang$maxFixedArity = 0;
G__33197.cljs$lang$applyTo = (function (arglist__33199){
var args = cljs.core.seq(arglist__33199);
return G__33197__delegate(args);
});
G__33197.cljs$core$IFn$_invoke$arity$variadic = G__33197__delegate;
return G__33197;
})()
;

return null;
});
