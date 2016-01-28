goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__378676__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__378676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__378677__i = 0, G__378677__a = new Array(arguments.length -  0);
while (G__378677__i < G__378677__a.length) {G__378677__a[G__378677__i] = arguments[G__378677__i + 0]; ++G__378677__i;}
  args = new cljs.core.IndexedSeq(G__378677__a,0);
} 
return G__378676__delegate.call(this,args);};
G__378676.cljs$lang$maxFixedArity = 0;
G__378676.cljs$lang$applyTo = (function (arglist__378678){
var args = cljs.core.seq(arglist__378678);
return G__378676__delegate(args);
});
G__378676.cljs$core$IFn$_invoke$arity$variadic = G__378676__delegate;
return G__378676;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__378679__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__378679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__378680__i = 0, G__378680__a = new Array(arguments.length -  0);
while (G__378680__i < G__378680__a.length) {G__378680__a[G__378680__i] = arguments[G__378680__i + 0]; ++G__378680__i;}
  args = new cljs.core.IndexedSeq(G__378680__a,0);
} 
return G__378679__delegate.call(this,args);};
G__378679.cljs$lang$maxFixedArity = 0;
G__378679.cljs$lang$applyTo = (function (arglist__378681){
var args = cljs.core.seq(arglist__378681);
return G__378679__delegate(args);
});
G__378679.cljs$core$IFn$_invoke$arity$variadic = G__378679__delegate;
return G__378679;
})()
;

return null;
});
