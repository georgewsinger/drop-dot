goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26773__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26774__i = 0, G__26774__a = new Array(arguments.length -  0);
while (G__26774__i < G__26774__a.length) {G__26774__a[G__26774__i] = arguments[G__26774__i + 0]; ++G__26774__i;}
  args = new cljs.core.IndexedSeq(G__26774__a,0);
} 
return G__26773__delegate.call(this,args);};
G__26773.cljs$lang$maxFixedArity = 0;
G__26773.cljs$lang$applyTo = (function (arglist__26775){
var args = cljs.core.seq(arglist__26775);
return G__26773__delegate(args);
});
G__26773.cljs$core$IFn$_invoke$arity$variadic = G__26773__delegate;
return G__26773;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26776__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26777__i = 0, G__26777__a = new Array(arguments.length -  0);
while (G__26777__i < G__26777__a.length) {G__26777__a[G__26777__i] = arguments[G__26777__i + 0]; ++G__26777__i;}
  args = new cljs.core.IndexedSeq(G__26777__a,0);
} 
return G__26776__delegate.call(this,args);};
G__26776.cljs$lang$maxFixedArity = 0;
G__26776.cljs$lang$applyTo = (function (arglist__26778){
var args = cljs.core.seq(arglist__26778);
return G__26776__delegate(args);
});
G__26776.cljs$core$IFn$_invoke$arity$variadic = G__26776__delegate;
return G__26776;
})()
;

return null;
});
