goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27649__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27650__i = 0, G__27650__a = new Array(arguments.length -  0);
while (G__27650__i < G__27650__a.length) {G__27650__a[G__27650__i] = arguments[G__27650__i + 0]; ++G__27650__i;}
  args = new cljs.core.IndexedSeq(G__27650__a,0);
} 
return G__27649__delegate.call(this,args);};
G__27649.cljs$lang$maxFixedArity = 0;
G__27649.cljs$lang$applyTo = (function (arglist__27651){
var args = cljs.core.seq(arglist__27651);
return G__27649__delegate(args);
});
G__27649.cljs$core$IFn$_invoke$arity$variadic = G__27649__delegate;
return G__27649;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27652__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27653__i = 0, G__27653__a = new Array(arguments.length -  0);
while (G__27653__i < G__27653__a.length) {G__27653__a[G__27653__i] = arguments[G__27653__i + 0]; ++G__27653__i;}
  args = new cljs.core.IndexedSeq(G__27653__a,0);
} 
return G__27652__delegate.call(this,args);};
G__27652.cljs$lang$maxFixedArity = 0;
G__27652.cljs$lang$applyTo = (function (arglist__27654){
var args = cljs.core.seq(arglist__27654);
return G__27652__delegate(args);
});
G__27652.cljs$core$IFn$_invoke$arity$variadic = G__27652__delegate;
return G__27652;
})()
;

return null;
});
