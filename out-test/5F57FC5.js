goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__92892__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__92892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92893__i = 0, G__92893__a = new Array(arguments.length -  0);
while (G__92893__i < G__92893__a.length) {G__92893__a[G__92893__i] = arguments[G__92893__i + 0]; ++G__92893__i;}
  args = new cljs.core.IndexedSeq(G__92893__a,0);
} 
return G__92892__delegate.call(this,args);};
G__92892.cljs$lang$maxFixedArity = 0;
G__92892.cljs$lang$applyTo = (function (arglist__92894){
var args = cljs.core.seq(arglist__92894);
return G__92892__delegate(args);
});
G__92892.cljs$core$IFn$_invoke$arity$variadic = G__92892__delegate;
return G__92892;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__92895__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__92895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92896__i = 0, G__92896__a = new Array(arguments.length -  0);
while (G__92896__i < G__92896__a.length) {G__92896__a[G__92896__i] = arguments[G__92896__i + 0]; ++G__92896__i;}
  args = new cljs.core.IndexedSeq(G__92896__a,0);
} 
return G__92895__delegate.call(this,args);};
G__92895.cljs$lang$maxFixedArity = 0;
G__92895.cljs$lang$applyTo = (function (arglist__92897){
var args = cljs.core.seq(arglist__92897);
return G__92895__delegate(args);
});
G__92895.cljs$core$IFn$_invoke$arity$variadic = G__92895__delegate;
return G__92895;
})()
;

return null;
});
