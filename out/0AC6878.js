goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__271541__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__271541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__271542__i = 0, G__271542__a = new Array(arguments.length -  0);
while (G__271542__i < G__271542__a.length) {G__271542__a[G__271542__i] = arguments[G__271542__i + 0]; ++G__271542__i;}
  args = new cljs.core.IndexedSeq(G__271542__a,0);
} 
return G__271541__delegate.call(this,args);};
G__271541.cljs$lang$maxFixedArity = 0;
G__271541.cljs$lang$applyTo = (function (arglist__271543){
var args = cljs.core.seq(arglist__271543);
return G__271541__delegate(args);
});
G__271541.cljs$core$IFn$_invoke$arity$variadic = G__271541__delegate;
return G__271541;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__271544__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__271544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__271545__i = 0, G__271545__a = new Array(arguments.length -  0);
while (G__271545__i < G__271545__a.length) {G__271545__a[G__271545__i] = arguments[G__271545__i + 0]; ++G__271545__i;}
  args = new cljs.core.IndexedSeq(G__271545__a,0);
} 
return G__271544__delegate.call(this,args);};
G__271544.cljs$lang$maxFixedArity = 0;
G__271544.cljs$lang$applyTo = (function (arglist__271546){
var args = cljs.core.seq(arglist__271546);
return G__271544__delegate(args);
});
G__271544.cljs$core$IFn$_invoke$arity$variadic = G__271544__delegate;
return G__271544;
})()
;

return null;
});
