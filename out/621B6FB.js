goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__363073__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__363073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363074__i = 0, G__363074__a = new Array(arguments.length -  0);
while (G__363074__i < G__363074__a.length) {G__363074__a[G__363074__i] = arguments[G__363074__i + 0]; ++G__363074__i;}
  args = new cljs.core.IndexedSeq(G__363074__a,0);
} 
return G__363073__delegate.call(this,args);};
G__363073.cljs$lang$maxFixedArity = 0;
G__363073.cljs$lang$applyTo = (function (arglist__363075){
var args = cljs.core.seq(arglist__363075);
return G__363073__delegate(args);
});
G__363073.cljs$core$IFn$_invoke$arity$variadic = G__363073__delegate;
return G__363073;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__363076__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__363076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363077__i = 0, G__363077__a = new Array(arguments.length -  0);
while (G__363077__i < G__363077__a.length) {G__363077__a[G__363077__i] = arguments[G__363077__i + 0]; ++G__363077__i;}
  args = new cljs.core.IndexedSeq(G__363077__a,0);
} 
return G__363076__delegate.call(this,args);};
G__363076.cljs$lang$maxFixedArity = 0;
G__363076.cljs$lang$applyTo = (function (arglist__363078){
var args = cljs.core.seq(arglist__363078);
return G__363076__delegate(args);
});
G__363076.cljs$core$IFn$_invoke$arity$variadic = G__363076__delegate;
return G__363076;
})()
;

return null;
});
