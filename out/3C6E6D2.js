goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__234950__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__234950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234951__i = 0, G__234951__a = new Array(arguments.length -  0);
while (G__234951__i < G__234951__a.length) {G__234951__a[G__234951__i] = arguments[G__234951__i + 0]; ++G__234951__i;}
  args = new cljs.core.IndexedSeq(G__234951__a,0);
} 
return G__234950__delegate.call(this,args);};
G__234950.cljs$lang$maxFixedArity = 0;
G__234950.cljs$lang$applyTo = (function (arglist__234952){
var args = cljs.core.seq(arglist__234952);
return G__234950__delegate(args);
});
G__234950.cljs$core$IFn$_invoke$arity$variadic = G__234950__delegate;
return G__234950;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__234953__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__234953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234954__i = 0, G__234954__a = new Array(arguments.length -  0);
while (G__234954__i < G__234954__a.length) {G__234954__a[G__234954__i] = arguments[G__234954__i + 0]; ++G__234954__i;}
  args = new cljs.core.IndexedSeq(G__234954__a,0);
} 
return G__234953__delegate.call(this,args);};
G__234953.cljs$lang$maxFixedArity = 0;
G__234953.cljs$lang$applyTo = (function (arglist__234955){
var args = cljs.core.seq(arglist__234955);
return G__234953__delegate(args);
});
G__234953.cljs$core$IFn$_invoke$arity$variadic = G__234953__delegate;
return G__234953;
})()
;

return null;
});
