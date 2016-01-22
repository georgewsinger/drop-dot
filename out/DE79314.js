goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25006__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25007__i = 0, G__25007__a = new Array(arguments.length -  0);
while (G__25007__i < G__25007__a.length) {G__25007__a[G__25007__i] = arguments[G__25007__i + 0]; ++G__25007__i;}
  args = new cljs.core.IndexedSeq(G__25007__a,0);
} 
return G__25006__delegate.call(this,args);};
G__25006.cljs$lang$maxFixedArity = 0;
G__25006.cljs$lang$applyTo = (function (arglist__25008){
var args = cljs.core.seq(arglist__25008);
return G__25006__delegate(args);
});
G__25006.cljs$core$IFn$_invoke$arity$variadic = G__25006__delegate;
return G__25006;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25009__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25010__i = 0, G__25010__a = new Array(arguments.length -  0);
while (G__25010__i < G__25010__a.length) {G__25010__a[G__25010__i] = arguments[G__25010__i + 0]; ++G__25010__i;}
  args = new cljs.core.IndexedSeq(G__25010__a,0);
} 
return G__25009__delegate.call(this,args);};
G__25009.cljs$lang$maxFixedArity = 0;
G__25009.cljs$lang$applyTo = (function (arglist__25011){
var args = cljs.core.seq(arglist__25011);
return G__25009__delegate(args);
});
G__25009.cljs$core$IFn$_invoke$arity$variadic = G__25009__delegate;
return G__25009;
})()
;

return null;
});
