goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__141168__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__141168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141169__i = 0, G__141169__a = new Array(arguments.length -  0);
while (G__141169__i < G__141169__a.length) {G__141169__a[G__141169__i] = arguments[G__141169__i + 0]; ++G__141169__i;}
  args = new cljs.core.IndexedSeq(G__141169__a,0);
} 
return G__141168__delegate.call(this,args);};
G__141168.cljs$lang$maxFixedArity = 0;
G__141168.cljs$lang$applyTo = (function (arglist__141170){
var args = cljs.core.seq(arglist__141170);
return G__141168__delegate(args);
});
G__141168.cljs$core$IFn$_invoke$arity$variadic = G__141168__delegate;
return G__141168;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__141171__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__141171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141172__i = 0, G__141172__a = new Array(arguments.length -  0);
while (G__141172__i < G__141172__a.length) {G__141172__a[G__141172__i] = arguments[G__141172__i + 0]; ++G__141172__i;}
  args = new cljs.core.IndexedSeq(G__141172__a,0);
} 
return G__141171__delegate.call(this,args);};
G__141171.cljs$lang$maxFixedArity = 0;
G__141171.cljs$lang$applyTo = (function (arglist__141173){
var args = cljs.core.seq(arglist__141173);
return G__141171__delegate(args);
});
G__141171.cljs$core$IFn$_invoke$arity$variadic = G__141171__delegate;
return G__141171;
})()
;

return null;
});
