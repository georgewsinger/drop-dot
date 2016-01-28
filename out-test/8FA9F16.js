goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__75679__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__75679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75680__i = 0, G__75680__a = new Array(arguments.length -  0);
while (G__75680__i < G__75680__a.length) {G__75680__a[G__75680__i] = arguments[G__75680__i + 0]; ++G__75680__i;}
  args = new cljs.core.IndexedSeq(G__75680__a,0);
} 
return G__75679__delegate.call(this,args);};
G__75679.cljs$lang$maxFixedArity = 0;
G__75679.cljs$lang$applyTo = (function (arglist__75681){
var args = cljs.core.seq(arglist__75681);
return G__75679__delegate(args);
});
G__75679.cljs$core$IFn$_invoke$arity$variadic = G__75679__delegate;
return G__75679;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__75682__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__75682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75683__i = 0, G__75683__a = new Array(arguments.length -  0);
while (G__75683__i < G__75683__a.length) {G__75683__a[G__75683__i] = arguments[G__75683__i + 0]; ++G__75683__i;}
  args = new cljs.core.IndexedSeq(G__75683__a,0);
} 
return G__75682__delegate.call(this,args);};
G__75682.cljs$lang$maxFixedArity = 0;
G__75682.cljs$lang$applyTo = (function (arglist__75684){
var args = cljs.core.seq(arglist__75684);
return G__75682__delegate(args);
});
G__75682.cljs$core$IFn$_invoke$arity$variadic = G__75682__delegate;
return G__75682;
})()
;

return null;
});
