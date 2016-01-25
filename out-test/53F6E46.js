goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20465__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20466__i = 0, G__20466__a = new Array(arguments.length -  0);
while (G__20466__i < G__20466__a.length) {G__20466__a[G__20466__i] = arguments[G__20466__i + 0]; ++G__20466__i;}
  args = new cljs.core.IndexedSeq(G__20466__a,0);
} 
return G__20465__delegate.call(this,args);};
G__20465.cljs$lang$maxFixedArity = 0;
G__20465.cljs$lang$applyTo = (function (arglist__20467){
var args = cljs.core.seq(arglist__20467);
return G__20465__delegate(args);
});
G__20465.cljs$core$IFn$_invoke$arity$variadic = G__20465__delegate;
return G__20465;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20468__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20469__i = 0, G__20469__a = new Array(arguments.length -  0);
while (G__20469__i < G__20469__a.length) {G__20469__a[G__20469__i] = arguments[G__20469__i + 0]; ++G__20469__i;}
  args = new cljs.core.IndexedSeq(G__20469__a,0);
} 
return G__20468__delegate.call(this,args);};
G__20468.cljs$lang$maxFixedArity = 0;
G__20468.cljs$lang$applyTo = (function (arglist__20470){
var args = cljs.core.seq(arglist__20470);
return G__20468__delegate(args);
});
G__20468.cljs$core$IFn$_invoke$arity$variadic = G__20468__delegate;
return G__20468;
})()
;

return null;
});
