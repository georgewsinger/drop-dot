goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61845__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61846__i = 0, G__61846__a = new Array(arguments.length -  0);
while (G__61846__i < G__61846__a.length) {G__61846__a[G__61846__i] = arguments[G__61846__i + 0]; ++G__61846__i;}
  args = new cljs.core.IndexedSeq(G__61846__a,0);
} 
return G__61845__delegate.call(this,args);};
G__61845.cljs$lang$maxFixedArity = 0;
G__61845.cljs$lang$applyTo = (function (arglist__61847){
var args = cljs.core.seq(arglist__61847);
return G__61845__delegate(args);
});
G__61845.cljs$core$IFn$_invoke$arity$variadic = G__61845__delegate;
return G__61845;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61848__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61849__i = 0, G__61849__a = new Array(arguments.length -  0);
while (G__61849__i < G__61849__a.length) {G__61849__a[G__61849__i] = arguments[G__61849__i + 0]; ++G__61849__i;}
  args = new cljs.core.IndexedSeq(G__61849__a,0);
} 
return G__61848__delegate.call(this,args);};
G__61848.cljs$lang$maxFixedArity = 0;
G__61848.cljs$lang$applyTo = (function (arglist__61850){
var args = cljs.core.seq(arglist__61850);
return G__61848__delegate(args);
});
G__61848.cljs$core$IFn$_invoke$arity$variadic = G__61848__delegate;
return G__61848;
})()
;

return null;
});
