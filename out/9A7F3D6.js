goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__104972__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__104972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__104973__i = 0, G__104973__a = new Array(arguments.length -  0);
while (G__104973__i < G__104973__a.length) {G__104973__a[G__104973__i] = arguments[G__104973__i + 0]; ++G__104973__i;}
  args = new cljs.core.IndexedSeq(G__104973__a,0);
} 
return G__104972__delegate.call(this,args);};
G__104972.cljs$lang$maxFixedArity = 0;
G__104972.cljs$lang$applyTo = (function (arglist__104974){
var args = cljs.core.seq(arglist__104974);
return G__104972__delegate(args);
});
G__104972.cljs$core$IFn$_invoke$arity$variadic = G__104972__delegate;
return G__104972;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__104975__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__104975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__104976__i = 0, G__104976__a = new Array(arguments.length -  0);
while (G__104976__i < G__104976__a.length) {G__104976__a[G__104976__i] = arguments[G__104976__i + 0]; ++G__104976__i;}
  args = new cljs.core.IndexedSeq(G__104976__a,0);
} 
return G__104975__delegate.call(this,args);};
G__104975.cljs$lang$maxFixedArity = 0;
G__104975.cljs$lang$applyTo = (function (arglist__104977){
var args = cljs.core.seq(arglist__104977);
return G__104975__delegate(args);
});
G__104975.cljs$core$IFn$_invoke$arity$variadic = G__104975__delegate;
return G__104975;
})()
;

return null;
});
