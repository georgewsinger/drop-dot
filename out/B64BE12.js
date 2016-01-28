goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__388695__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__388695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__388696__i = 0, G__388696__a = new Array(arguments.length -  0);
while (G__388696__i < G__388696__a.length) {G__388696__a[G__388696__i] = arguments[G__388696__i + 0]; ++G__388696__i;}
  args = new cljs.core.IndexedSeq(G__388696__a,0);
} 
return G__388695__delegate.call(this,args);};
G__388695.cljs$lang$maxFixedArity = 0;
G__388695.cljs$lang$applyTo = (function (arglist__388697){
var args = cljs.core.seq(arglist__388697);
return G__388695__delegate(args);
});
G__388695.cljs$core$IFn$_invoke$arity$variadic = G__388695__delegate;
return G__388695;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__388698__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__388698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__388699__i = 0, G__388699__a = new Array(arguments.length -  0);
while (G__388699__i < G__388699__a.length) {G__388699__a[G__388699__i] = arguments[G__388699__i + 0]; ++G__388699__i;}
  args = new cljs.core.IndexedSeq(G__388699__a,0);
} 
return G__388698__delegate.call(this,args);};
G__388698.cljs$lang$maxFixedArity = 0;
G__388698.cljs$lang$applyTo = (function (arglist__388700){
var args = cljs.core.seq(arglist__388700);
return G__388698__delegate(args);
});
G__388698.cljs$core$IFn$_invoke$arity$variadic = G__388698__delegate;
return G__388698;
})()
;

return null;
});
