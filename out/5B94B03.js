goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__293064__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__293064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293065__i = 0, G__293065__a = new Array(arguments.length -  0);
while (G__293065__i < G__293065__a.length) {G__293065__a[G__293065__i] = arguments[G__293065__i + 0]; ++G__293065__i;}
  args = new cljs.core.IndexedSeq(G__293065__a,0);
} 
return G__293064__delegate.call(this,args);};
G__293064.cljs$lang$maxFixedArity = 0;
G__293064.cljs$lang$applyTo = (function (arglist__293066){
var args = cljs.core.seq(arglist__293066);
return G__293064__delegate(args);
});
G__293064.cljs$core$IFn$_invoke$arity$variadic = G__293064__delegate;
return G__293064;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__293067__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__293067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293068__i = 0, G__293068__a = new Array(arguments.length -  0);
while (G__293068__i < G__293068__a.length) {G__293068__a[G__293068__i] = arguments[G__293068__i + 0]; ++G__293068__i;}
  args = new cljs.core.IndexedSeq(G__293068__a,0);
} 
return G__293067__delegate.call(this,args);};
G__293067.cljs$lang$maxFixedArity = 0;
G__293067.cljs$lang$applyTo = (function (arglist__293069){
var args = cljs.core.seq(arglist__293069);
return G__293067__delegate(args);
});
G__293067.cljs$core$IFn$_invoke$arity$variadic = G__293067__delegate;
return G__293067;
})()
;

return null;
});
