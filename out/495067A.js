goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21008__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21009__i = 0, G__21009__a = new Array(arguments.length -  0);
while (G__21009__i < G__21009__a.length) {G__21009__a[G__21009__i] = arguments[G__21009__i + 0]; ++G__21009__i;}
  args = new cljs.core.IndexedSeq(G__21009__a,0);
} 
return G__21008__delegate.call(this,args);};
G__21008.cljs$lang$maxFixedArity = 0;
G__21008.cljs$lang$applyTo = (function (arglist__21010){
var args = cljs.core.seq(arglist__21010);
return G__21008__delegate(args);
});
G__21008.cljs$core$IFn$_invoke$arity$variadic = G__21008__delegate;
return G__21008;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21011__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21012__i = 0, G__21012__a = new Array(arguments.length -  0);
while (G__21012__i < G__21012__a.length) {G__21012__a[G__21012__i] = arguments[G__21012__i + 0]; ++G__21012__i;}
  args = new cljs.core.IndexedSeq(G__21012__a,0);
} 
return G__21011__delegate.call(this,args);};
G__21011.cljs$lang$maxFixedArity = 0;
G__21011.cljs$lang$applyTo = (function (arglist__21013){
var args = cljs.core.seq(arglist__21013);
return G__21011__delegate(args);
});
G__21011.cljs$core$IFn$_invoke$arity$variadic = G__21011__delegate;
return G__21011;
})()
;

return null;
});
