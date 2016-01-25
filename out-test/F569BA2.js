goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30275__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30276__i = 0, G__30276__a = new Array(arguments.length -  0);
while (G__30276__i < G__30276__a.length) {G__30276__a[G__30276__i] = arguments[G__30276__i + 0]; ++G__30276__i;}
  args = new cljs.core.IndexedSeq(G__30276__a,0);
} 
return G__30275__delegate.call(this,args);};
G__30275.cljs$lang$maxFixedArity = 0;
G__30275.cljs$lang$applyTo = (function (arglist__30277){
var args = cljs.core.seq(arglist__30277);
return G__30275__delegate(args);
});
G__30275.cljs$core$IFn$_invoke$arity$variadic = G__30275__delegate;
return G__30275;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30278__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30279__i = 0, G__30279__a = new Array(arguments.length -  0);
while (G__30279__i < G__30279__a.length) {G__30279__a[G__30279__i] = arguments[G__30279__i + 0]; ++G__30279__i;}
  args = new cljs.core.IndexedSeq(G__30279__a,0);
} 
return G__30278__delegate.call(this,args);};
G__30278.cljs$lang$maxFixedArity = 0;
G__30278.cljs$lang$applyTo = (function (arglist__30280){
var args = cljs.core.seq(arglist__30280);
return G__30278__delegate(args);
});
G__30278.cljs$core$IFn$_invoke$arity$variadic = G__30278__delegate;
return G__30278;
})()
;

return null;
});
