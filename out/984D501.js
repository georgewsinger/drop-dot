goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16166__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16167__i = 0, G__16167__a = new Array(arguments.length -  0);
while (G__16167__i < G__16167__a.length) {G__16167__a[G__16167__i] = arguments[G__16167__i + 0]; ++G__16167__i;}
  args = new cljs.core.IndexedSeq(G__16167__a,0);
} 
return G__16166__delegate.call(this,args);};
G__16166.cljs$lang$maxFixedArity = 0;
G__16166.cljs$lang$applyTo = (function (arglist__16168){
var args = cljs.core.seq(arglist__16168);
return G__16166__delegate(args);
});
G__16166.cljs$core$IFn$_invoke$arity$variadic = G__16166__delegate;
return G__16166;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16169__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16170__i = 0, G__16170__a = new Array(arguments.length -  0);
while (G__16170__i < G__16170__a.length) {G__16170__a[G__16170__i] = arguments[G__16170__i + 0]; ++G__16170__i;}
  args = new cljs.core.IndexedSeq(G__16170__a,0);
} 
return G__16169__delegate.call(this,args);};
G__16169.cljs$lang$maxFixedArity = 0;
G__16169.cljs$lang$applyTo = (function (arglist__16171){
var args = cljs.core.seq(arglist__16171);
return G__16169__delegate(args);
});
G__16169.cljs$core$IFn$_invoke$arity$variadic = G__16169__delegate;
return G__16169;
})()
;

return null;
});
