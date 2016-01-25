goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17556__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17557__i = 0, G__17557__a = new Array(arguments.length -  0);
while (G__17557__i < G__17557__a.length) {G__17557__a[G__17557__i] = arguments[G__17557__i + 0]; ++G__17557__i;}
  args = new cljs.core.IndexedSeq(G__17557__a,0);
} 
return G__17556__delegate.call(this,args);};
G__17556.cljs$lang$maxFixedArity = 0;
G__17556.cljs$lang$applyTo = (function (arglist__17558){
var args = cljs.core.seq(arglist__17558);
return G__17556__delegate(args);
});
G__17556.cljs$core$IFn$_invoke$arity$variadic = G__17556__delegate;
return G__17556;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17559__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17560__i = 0, G__17560__a = new Array(arguments.length -  0);
while (G__17560__i < G__17560__a.length) {G__17560__a[G__17560__i] = arguments[G__17560__i + 0]; ++G__17560__i;}
  args = new cljs.core.IndexedSeq(G__17560__a,0);
} 
return G__17559__delegate.call(this,args);};
G__17559.cljs$lang$maxFixedArity = 0;
G__17559.cljs$lang$applyTo = (function (arglist__17561){
var args = cljs.core.seq(arglist__17561);
return G__17559__delegate(args);
});
G__17559.cljs$core$IFn$_invoke$arity$variadic = G__17559__delegate;
return G__17559;
})()
;

return null;
});
