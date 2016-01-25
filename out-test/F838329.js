goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24695__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24696__i = 0, G__24696__a = new Array(arguments.length -  0);
while (G__24696__i < G__24696__a.length) {G__24696__a[G__24696__i] = arguments[G__24696__i + 0]; ++G__24696__i;}
  args = new cljs.core.IndexedSeq(G__24696__a,0);
} 
return G__24695__delegate.call(this,args);};
G__24695.cljs$lang$maxFixedArity = 0;
G__24695.cljs$lang$applyTo = (function (arglist__24697){
var args = cljs.core.seq(arglist__24697);
return G__24695__delegate(args);
});
G__24695.cljs$core$IFn$_invoke$arity$variadic = G__24695__delegate;
return G__24695;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24698__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24699__i = 0, G__24699__a = new Array(arguments.length -  0);
while (G__24699__i < G__24699__a.length) {G__24699__a[G__24699__i] = arguments[G__24699__i + 0]; ++G__24699__i;}
  args = new cljs.core.IndexedSeq(G__24699__a,0);
} 
return G__24698__delegate.call(this,args);};
G__24698.cljs$lang$maxFixedArity = 0;
G__24698.cljs$lang$applyTo = (function (arglist__24700){
var args = cljs.core.seq(arglist__24700);
return G__24698__delegate(args);
});
G__24698.cljs$core$IFn$_invoke$arity$variadic = G__24698__delegate;
return G__24698;
})()
;

return null;
});
