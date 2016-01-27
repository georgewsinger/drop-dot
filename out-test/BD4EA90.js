goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__173695__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__173695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173696__i = 0, G__173696__a = new Array(arguments.length -  0);
while (G__173696__i < G__173696__a.length) {G__173696__a[G__173696__i] = arguments[G__173696__i + 0]; ++G__173696__i;}
  args = new cljs.core.IndexedSeq(G__173696__a,0);
} 
return G__173695__delegate.call(this,args);};
G__173695.cljs$lang$maxFixedArity = 0;
G__173695.cljs$lang$applyTo = (function (arglist__173697){
var args = cljs.core.seq(arglist__173697);
return G__173695__delegate(args);
});
G__173695.cljs$core$IFn$_invoke$arity$variadic = G__173695__delegate;
return G__173695;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__173698__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__173698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173699__i = 0, G__173699__a = new Array(arguments.length -  0);
while (G__173699__i < G__173699__a.length) {G__173699__a[G__173699__i] = arguments[G__173699__i + 0]; ++G__173699__i;}
  args = new cljs.core.IndexedSeq(G__173699__a,0);
} 
return G__173698__delegate.call(this,args);};
G__173698.cljs$lang$maxFixedArity = 0;
G__173698.cljs$lang$applyTo = (function (arglist__173700){
var args = cljs.core.seq(arglist__173700);
return G__173698__delegate(args);
});
G__173698.cljs$core$IFn$_invoke$arity$variadic = G__173698__delegate;
return G__173698;
})()
;

return null;
});
