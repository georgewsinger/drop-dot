goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15290__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15291__i = 0, G__15291__a = new Array(arguments.length -  0);
while (G__15291__i < G__15291__a.length) {G__15291__a[G__15291__i] = arguments[G__15291__i + 0]; ++G__15291__i;}
  args = new cljs.core.IndexedSeq(G__15291__a,0);
} 
return G__15290__delegate.call(this,args);};
G__15290.cljs$lang$maxFixedArity = 0;
G__15290.cljs$lang$applyTo = (function (arglist__15292){
var args = cljs.core.seq(arglist__15292);
return G__15290__delegate(args);
});
G__15290.cljs$core$IFn$_invoke$arity$variadic = G__15290__delegate;
return G__15290;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15293__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15294__i = 0, G__15294__a = new Array(arguments.length -  0);
while (G__15294__i < G__15294__a.length) {G__15294__a[G__15294__i] = arguments[G__15294__i + 0]; ++G__15294__i;}
  args = new cljs.core.IndexedSeq(G__15294__a,0);
} 
return G__15293__delegate.call(this,args);};
G__15293.cljs$lang$maxFixedArity = 0;
G__15293.cljs$lang$applyTo = (function (arglist__15295){
var args = cljs.core.seq(arglist__15295);
return G__15293__delegate(args);
});
G__15293.cljs$core$IFn$_invoke$arity$variadic = G__15293__delegate;
return G__15293;
})()
;

return null;
});
