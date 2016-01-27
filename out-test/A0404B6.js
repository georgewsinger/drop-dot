goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54168__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54169__i = 0, G__54169__a = new Array(arguments.length -  0);
while (G__54169__i < G__54169__a.length) {G__54169__a[G__54169__i] = arguments[G__54169__i + 0]; ++G__54169__i;}
  args = new cljs.core.IndexedSeq(G__54169__a,0);
} 
return G__54168__delegate.call(this,args);};
G__54168.cljs$lang$maxFixedArity = 0;
G__54168.cljs$lang$applyTo = (function (arglist__54170){
var args = cljs.core.seq(arglist__54170);
return G__54168__delegate(args);
});
G__54168.cljs$core$IFn$_invoke$arity$variadic = G__54168__delegate;
return G__54168;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54171__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54172__i = 0, G__54172__a = new Array(arguments.length -  0);
while (G__54172__i < G__54172__a.length) {G__54172__a[G__54172__i] = arguments[G__54172__i + 0]; ++G__54172__i;}
  args = new cljs.core.IndexedSeq(G__54172__a,0);
} 
return G__54171__delegate.call(this,args);};
G__54171.cljs$lang$maxFixedArity = 0;
G__54171.cljs$lang$applyTo = (function (arglist__54173){
var args = cljs.core.seq(arglist__54173);
return G__54171__delegate(args);
});
G__54171.cljs$core$IFn$_invoke$arity$variadic = G__54171__delegate;
return G__54171;
})()
;

return null;
});
