goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68061__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68062__i = 0, G__68062__a = new Array(arguments.length -  0);
while (G__68062__i < G__68062__a.length) {G__68062__a[G__68062__i] = arguments[G__68062__i + 0]; ++G__68062__i;}
  args = new cljs.core.IndexedSeq(G__68062__a,0);
} 
return G__68061__delegate.call(this,args);};
G__68061.cljs$lang$maxFixedArity = 0;
G__68061.cljs$lang$applyTo = (function (arglist__68063){
var args = cljs.core.seq(arglist__68063);
return G__68061__delegate(args);
});
G__68061.cljs$core$IFn$_invoke$arity$variadic = G__68061__delegate;
return G__68061;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68064__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68065__i = 0, G__68065__a = new Array(arguments.length -  0);
while (G__68065__i < G__68065__a.length) {G__68065__a[G__68065__i] = arguments[G__68065__i + 0]; ++G__68065__i;}
  args = new cljs.core.IndexedSeq(G__68065__a,0);
} 
return G__68064__delegate.call(this,args);};
G__68064.cljs$lang$maxFixedArity = 0;
G__68064.cljs$lang$applyTo = (function (arglist__68066){
var args = cljs.core.seq(arglist__68066);
return G__68064__delegate(args);
});
G__68064.cljs$core$IFn$_invoke$arity$variadic = G__68064__delegate;
return G__68064;
})()
;

return null;
});
