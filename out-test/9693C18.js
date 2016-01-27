goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66481__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66482__i = 0, G__66482__a = new Array(arguments.length -  0);
while (G__66482__i < G__66482__a.length) {G__66482__a[G__66482__i] = arguments[G__66482__i + 0]; ++G__66482__i;}
  args = new cljs.core.IndexedSeq(G__66482__a,0);
} 
return G__66481__delegate.call(this,args);};
G__66481.cljs$lang$maxFixedArity = 0;
G__66481.cljs$lang$applyTo = (function (arglist__66483){
var args = cljs.core.seq(arglist__66483);
return G__66481__delegate(args);
});
G__66481.cljs$core$IFn$_invoke$arity$variadic = G__66481__delegate;
return G__66481;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66484__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66485__i = 0, G__66485__a = new Array(arguments.length -  0);
while (G__66485__i < G__66485__a.length) {G__66485__a[G__66485__i] = arguments[G__66485__i + 0]; ++G__66485__i;}
  args = new cljs.core.IndexedSeq(G__66485__a,0);
} 
return G__66484__delegate.call(this,args);};
G__66484.cljs$lang$maxFixedArity = 0;
G__66484.cljs$lang$applyTo = (function (arglist__66486){
var args = cljs.core.seq(arglist__66486);
return G__66484__delegate(args);
});
G__66484.cljs$core$IFn$_invoke$arity$variadic = G__66484__delegate;
return G__66484;
})()
;

return null;
});
