goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15912__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15913__i = 0, G__15913__a = new Array(arguments.length -  0);
while (G__15913__i < G__15913__a.length) {G__15913__a[G__15913__i] = arguments[G__15913__i + 0]; ++G__15913__i;}
  args = new cljs.core.IndexedSeq(G__15913__a,0);
} 
return G__15912__delegate.call(this,args);};
G__15912.cljs$lang$maxFixedArity = 0;
G__15912.cljs$lang$applyTo = (function (arglist__15914){
var args = cljs.core.seq(arglist__15914);
return G__15912__delegate(args);
});
G__15912.cljs$core$IFn$_invoke$arity$variadic = G__15912__delegate;
return G__15912;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15915__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15916__i = 0, G__15916__a = new Array(arguments.length -  0);
while (G__15916__i < G__15916__a.length) {G__15916__a[G__15916__i] = arguments[G__15916__i + 0]; ++G__15916__i;}
  args = new cljs.core.IndexedSeq(G__15916__a,0);
} 
return G__15915__delegate.call(this,args);};
G__15915.cljs$lang$maxFixedArity = 0;
G__15915.cljs$lang$applyTo = (function (arglist__15917){
var args = cljs.core.seq(arglist__15917);
return G__15915__delegate(args);
});
G__15915.cljs$core$IFn$_invoke$arity$variadic = G__15915__delegate;
return G__15915;
})()
;

return null;
});
