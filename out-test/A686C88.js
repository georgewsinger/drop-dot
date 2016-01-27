goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__122329__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__122329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__122330__i = 0, G__122330__a = new Array(arguments.length -  0);
while (G__122330__i < G__122330__a.length) {G__122330__a[G__122330__i] = arguments[G__122330__i + 0]; ++G__122330__i;}
  args = new cljs.core.IndexedSeq(G__122330__a,0);
} 
return G__122329__delegate.call(this,args);};
G__122329.cljs$lang$maxFixedArity = 0;
G__122329.cljs$lang$applyTo = (function (arglist__122331){
var args = cljs.core.seq(arglist__122331);
return G__122329__delegate(args);
});
G__122329.cljs$core$IFn$_invoke$arity$variadic = G__122329__delegate;
return G__122329;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__122332__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__122332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__122333__i = 0, G__122333__a = new Array(arguments.length -  0);
while (G__122333__i < G__122333__a.length) {G__122333__a[G__122333__i] = arguments[G__122333__i + 0]; ++G__122333__i;}
  args = new cljs.core.IndexedSeq(G__122333__a,0);
} 
return G__122332__delegate.call(this,args);};
G__122332.cljs$lang$maxFixedArity = 0;
G__122332.cljs$lang$applyTo = (function (arglist__122334){
var args = cljs.core.seq(arglist__122334);
return G__122332__delegate(args);
});
G__122332.cljs$core$IFn$_invoke$arity$variadic = G__122332__delegate;
return G__122332;
})()
;

return null;
});
