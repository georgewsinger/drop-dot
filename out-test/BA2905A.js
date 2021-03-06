goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44199__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44200__i = 0, G__44200__a = new Array(arguments.length -  0);
while (G__44200__i < G__44200__a.length) {G__44200__a[G__44200__i] = arguments[G__44200__i + 0]; ++G__44200__i;}
  args = new cljs.core.IndexedSeq(G__44200__a,0);
} 
return G__44199__delegate.call(this,args);};
G__44199.cljs$lang$maxFixedArity = 0;
G__44199.cljs$lang$applyTo = (function (arglist__44201){
var args = cljs.core.seq(arglist__44201);
return G__44199__delegate(args);
});
G__44199.cljs$core$IFn$_invoke$arity$variadic = G__44199__delegate;
return G__44199;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44202__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44203__i = 0, G__44203__a = new Array(arguments.length -  0);
while (G__44203__i < G__44203__a.length) {G__44203__a[G__44203__i] = arguments[G__44203__i + 0]; ++G__44203__i;}
  args = new cljs.core.IndexedSeq(G__44203__a,0);
} 
return G__44202__delegate.call(this,args);};
G__44202.cljs$lang$maxFixedArity = 0;
G__44202.cljs$lang$applyTo = (function (arglist__44204){
var args = cljs.core.seq(arglist__44204);
return G__44202__delegate(args);
});
G__44202.cljs$core$IFn$_invoke$arity$variadic = G__44202__delegate;
return G__44202;
})()
;

return null;
});
