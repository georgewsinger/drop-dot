goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30934__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30935__i = 0, G__30935__a = new Array(arguments.length -  0);
while (G__30935__i < G__30935__a.length) {G__30935__a[G__30935__i] = arguments[G__30935__i + 0]; ++G__30935__i;}
  args = new cljs.core.IndexedSeq(G__30935__a,0);
} 
return G__30934__delegate.call(this,args);};
G__30934.cljs$lang$maxFixedArity = 0;
G__30934.cljs$lang$applyTo = (function (arglist__30936){
var args = cljs.core.seq(arglist__30936);
return G__30934__delegate(args);
});
G__30934.cljs$core$IFn$_invoke$arity$variadic = G__30934__delegate;
return G__30934;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30937__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30938__i = 0, G__30938__a = new Array(arguments.length -  0);
while (G__30938__i < G__30938__a.length) {G__30938__a[G__30938__i] = arguments[G__30938__i + 0]; ++G__30938__i;}
  args = new cljs.core.IndexedSeq(G__30938__a,0);
} 
return G__30937__delegate.call(this,args);};
G__30937.cljs$lang$maxFixedArity = 0;
G__30937.cljs$lang$applyTo = (function (arglist__30939){
var args = cljs.core.seq(arglist__30939);
return G__30937__delegate(args);
});
G__30937.cljs$core$IFn$_invoke$arity$variadic = G__30937__delegate;
return G__30937;
})()
;

return null;
});
