goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25218__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25219__i = 0, G__25219__a = new Array(arguments.length -  0);
while (G__25219__i < G__25219__a.length) {G__25219__a[G__25219__i] = arguments[G__25219__i + 0]; ++G__25219__i;}
  args = new cljs.core.IndexedSeq(G__25219__a,0);
} 
return G__25218__delegate.call(this,args);};
G__25218.cljs$lang$maxFixedArity = 0;
G__25218.cljs$lang$applyTo = (function (arglist__25220){
var args = cljs.core.seq(arglist__25220);
return G__25218__delegate(args);
});
G__25218.cljs$core$IFn$_invoke$arity$variadic = G__25218__delegate;
return G__25218;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25221__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25222__i = 0, G__25222__a = new Array(arguments.length -  0);
while (G__25222__i < G__25222__a.length) {G__25222__a[G__25222__i] = arguments[G__25222__i + 0]; ++G__25222__i;}
  args = new cljs.core.IndexedSeq(G__25222__a,0);
} 
return G__25221__delegate.call(this,args);};
G__25221.cljs$lang$maxFixedArity = 0;
G__25221.cljs$lang$applyTo = (function (arglist__25223){
var args = cljs.core.seq(arglist__25223);
return G__25221__delegate(args);
});
G__25221.cljs$core$IFn$_invoke$arity$variadic = G__25221__delegate;
return G__25221;
})()
;

return null;
});
