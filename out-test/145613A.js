goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20262__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20263__i = 0, G__20263__a = new Array(arguments.length -  0);
while (G__20263__i < G__20263__a.length) {G__20263__a[G__20263__i] = arguments[G__20263__i + 0]; ++G__20263__i;}
  args = new cljs.core.IndexedSeq(G__20263__a,0);
} 
return G__20262__delegate.call(this,args);};
G__20262.cljs$lang$maxFixedArity = 0;
G__20262.cljs$lang$applyTo = (function (arglist__20264){
var args = cljs.core.seq(arglist__20264);
return G__20262__delegate(args);
});
G__20262.cljs$core$IFn$_invoke$arity$variadic = G__20262__delegate;
return G__20262;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20265__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20266__i = 0, G__20266__a = new Array(arguments.length -  0);
while (G__20266__i < G__20266__a.length) {G__20266__a[G__20266__i] = arguments[G__20266__i + 0]; ++G__20266__i;}
  args = new cljs.core.IndexedSeq(G__20266__a,0);
} 
return G__20265__delegate.call(this,args);};
G__20265.cljs$lang$maxFixedArity = 0;
G__20265.cljs$lang$applyTo = (function (arglist__20267){
var args = cljs.core.seq(arglist__20267);
return G__20265__delegate(args);
});
G__20265.cljs$core$IFn$_invoke$arity$variadic = G__20265__delegate;
return G__20265;
})()
;

return null;
});
