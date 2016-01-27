goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__354627__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__354627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__354628__i = 0, G__354628__a = new Array(arguments.length -  0);
while (G__354628__i < G__354628__a.length) {G__354628__a[G__354628__i] = arguments[G__354628__i + 0]; ++G__354628__i;}
  args = new cljs.core.IndexedSeq(G__354628__a,0);
} 
return G__354627__delegate.call(this,args);};
G__354627.cljs$lang$maxFixedArity = 0;
G__354627.cljs$lang$applyTo = (function (arglist__354629){
var args = cljs.core.seq(arglist__354629);
return G__354627__delegate(args);
});
G__354627.cljs$core$IFn$_invoke$arity$variadic = G__354627__delegate;
return G__354627;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__354630__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__354630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__354631__i = 0, G__354631__a = new Array(arguments.length -  0);
while (G__354631__i < G__354631__a.length) {G__354631__a[G__354631__i] = arguments[G__354631__i + 0]; ++G__354631__i;}
  args = new cljs.core.IndexedSeq(G__354631__a,0);
} 
return G__354630__delegate.call(this,args);};
G__354630.cljs$lang$maxFixedArity = 0;
G__354630.cljs$lang$applyTo = (function (arglist__354632){
var args = cljs.core.seq(arglist__354632);
return G__354630__delegate(args);
});
G__354630.cljs$core$IFn$_invoke$arity$variadic = G__354630__delegate;
return G__354630;
})()
;

return null;
});
