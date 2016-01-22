goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20166__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20167__i = 0, G__20167__a = new Array(arguments.length -  0);
while (G__20167__i < G__20167__a.length) {G__20167__a[G__20167__i] = arguments[G__20167__i + 0]; ++G__20167__i;}
  args = new cljs.core.IndexedSeq(G__20167__a,0);
} 
return G__20166__delegate.call(this,args);};
G__20166.cljs$lang$maxFixedArity = 0;
G__20166.cljs$lang$applyTo = (function (arglist__20168){
var args = cljs.core.seq(arglist__20168);
return G__20166__delegate(args);
});
G__20166.cljs$core$IFn$_invoke$arity$variadic = G__20166__delegate;
return G__20166;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20169__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20170__i = 0, G__20170__a = new Array(arguments.length -  0);
while (G__20170__i < G__20170__a.length) {G__20170__a[G__20170__i] = arguments[G__20170__i + 0]; ++G__20170__i;}
  args = new cljs.core.IndexedSeq(G__20170__a,0);
} 
return G__20169__delegate.call(this,args);};
G__20169.cljs$lang$maxFixedArity = 0;
G__20169.cljs$lang$applyTo = (function (arglist__20171){
var args = cljs.core.seq(arglist__20171);
return G__20169__delegate(args);
});
G__20169.cljs$core$IFn$_invoke$arity$variadic = G__20169__delegate;
return G__20169;
})()
;

return null;
});
