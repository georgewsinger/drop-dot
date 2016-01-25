goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10423__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10424__i = 0, G__10424__a = new Array(arguments.length -  0);
while (G__10424__i < G__10424__a.length) {G__10424__a[G__10424__i] = arguments[G__10424__i + 0]; ++G__10424__i;}
  args = new cljs.core.IndexedSeq(G__10424__a,0);
} 
return G__10423__delegate.call(this,args);};
G__10423.cljs$lang$maxFixedArity = 0;
G__10423.cljs$lang$applyTo = (function (arglist__10425){
var args = cljs.core.seq(arglist__10425);
return G__10423__delegate(args);
});
G__10423.cljs$core$IFn$_invoke$arity$variadic = G__10423__delegate;
return G__10423;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10426__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10427__i = 0, G__10427__a = new Array(arguments.length -  0);
while (G__10427__i < G__10427__a.length) {G__10427__a[G__10427__i] = arguments[G__10427__i + 0]; ++G__10427__i;}
  args = new cljs.core.IndexedSeq(G__10427__a,0);
} 
return G__10426__delegate.call(this,args);};
G__10426.cljs$lang$maxFixedArity = 0;
G__10426.cljs$lang$applyTo = (function (arglist__10428){
var args = cljs.core.seq(arglist__10428);
return G__10426__delegate(args);
});
G__10426.cljs$core$IFn$_invoke$arity$variadic = G__10426__delegate;
return G__10426;
})()
;

return null;
});
