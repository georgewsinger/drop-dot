goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__338009__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__338009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__338010__i = 0, G__338010__a = new Array(arguments.length -  0);
while (G__338010__i < G__338010__a.length) {G__338010__a[G__338010__i] = arguments[G__338010__i + 0]; ++G__338010__i;}
  args = new cljs.core.IndexedSeq(G__338010__a,0);
} 
return G__338009__delegate.call(this,args);};
G__338009.cljs$lang$maxFixedArity = 0;
G__338009.cljs$lang$applyTo = (function (arglist__338011){
var args = cljs.core.seq(arglist__338011);
return G__338009__delegate(args);
});
G__338009.cljs$core$IFn$_invoke$arity$variadic = G__338009__delegate;
return G__338009;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__338012__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__338012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__338013__i = 0, G__338013__a = new Array(arguments.length -  0);
while (G__338013__i < G__338013__a.length) {G__338013__a[G__338013__i] = arguments[G__338013__i + 0]; ++G__338013__i;}
  args = new cljs.core.IndexedSeq(G__338013__a,0);
} 
return G__338012__delegate.call(this,args);};
G__338012.cljs$lang$maxFixedArity = 0;
G__338012.cljs$lang$applyTo = (function (arglist__338014){
var args = cljs.core.seq(arglist__338014);
return G__338012__delegate(args);
});
G__338012.cljs$core$IFn$_invoke$arity$variadic = G__338012__delegate;
return G__338012;
})()
;

return null;
});
