goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__274624__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__274624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274625__i = 0, G__274625__a = new Array(arguments.length -  0);
while (G__274625__i < G__274625__a.length) {G__274625__a[G__274625__i] = arguments[G__274625__i + 0]; ++G__274625__i;}
  args = new cljs.core.IndexedSeq(G__274625__a,0);
} 
return G__274624__delegate.call(this,args);};
G__274624.cljs$lang$maxFixedArity = 0;
G__274624.cljs$lang$applyTo = (function (arglist__274626){
var args = cljs.core.seq(arglist__274626);
return G__274624__delegate(args);
});
G__274624.cljs$core$IFn$_invoke$arity$variadic = G__274624__delegate;
return G__274624;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__274627__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__274627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274628__i = 0, G__274628__a = new Array(arguments.length -  0);
while (G__274628__i < G__274628__a.length) {G__274628__a[G__274628__i] = arguments[G__274628__i + 0]; ++G__274628__i;}
  args = new cljs.core.IndexedSeq(G__274628__a,0);
} 
return G__274627__delegate.call(this,args);};
G__274627.cljs$lang$maxFixedArity = 0;
G__274627.cljs$lang$applyTo = (function (arglist__274629){
var args = cljs.core.seq(arglist__274629);
return G__274627__delegate(args);
});
G__274627.cljs$core$IFn$_invoke$arity$variadic = G__274627__delegate;
return G__274627;
})()
;

return null;
});
