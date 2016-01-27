goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__358832__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__358832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__358833__i = 0, G__358833__a = new Array(arguments.length -  0);
while (G__358833__i < G__358833__a.length) {G__358833__a[G__358833__i] = arguments[G__358833__i + 0]; ++G__358833__i;}
  args = new cljs.core.IndexedSeq(G__358833__a,0);
} 
return G__358832__delegate.call(this,args);};
G__358832.cljs$lang$maxFixedArity = 0;
G__358832.cljs$lang$applyTo = (function (arglist__358834){
var args = cljs.core.seq(arglist__358834);
return G__358832__delegate(args);
});
G__358832.cljs$core$IFn$_invoke$arity$variadic = G__358832__delegate;
return G__358832;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__358835__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__358835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__358836__i = 0, G__358836__a = new Array(arguments.length -  0);
while (G__358836__i < G__358836__a.length) {G__358836__a[G__358836__i] = arguments[G__358836__i + 0]; ++G__358836__i;}
  args = new cljs.core.IndexedSeq(G__358836__a,0);
} 
return G__358835__delegate.call(this,args);};
G__358835.cljs$lang$maxFixedArity = 0;
G__358835.cljs$lang$applyTo = (function (arglist__358837){
var args = cljs.core.seq(arglist__358837);
return G__358835__delegate(args);
});
G__358835.cljs$core$IFn$_invoke$arity$variadic = G__358835__delegate;
return G__358835;
})()
;

return null;
});
