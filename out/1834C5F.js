goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__228965__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__228965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__228966__i = 0, G__228966__a = new Array(arguments.length -  0);
while (G__228966__i < G__228966__a.length) {G__228966__a[G__228966__i] = arguments[G__228966__i + 0]; ++G__228966__i;}
  args = new cljs.core.IndexedSeq(G__228966__a,0);
} 
return G__228965__delegate.call(this,args);};
G__228965.cljs$lang$maxFixedArity = 0;
G__228965.cljs$lang$applyTo = (function (arglist__228967){
var args = cljs.core.seq(arglist__228967);
return G__228965__delegate(args);
});
G__228965.cljs$core$IFn$_invoke$arity$variadic = G__228965__delegate;
return G__228965;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__228968__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__228968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__228969__i = 0, G__228969__a = new Array(arguments.length -  0);
while (G__228969__i < G__228969__a.length) {G__228969__a[G__228969__i] = arguments[G__228969__i + 0]; ++G__228969__i;}
  args = new cljs.core.IndexedSeq(G__228969__a,0);
} 
return G__228968__delegate.call(this,args);};
G__228968.cljs$lang$maxFixedArity = 0;
G__228968.cljs$lang$applyTo = (function (arglist__228970){
var args = cljs.core.seq(arglist__228970);
return G__228968__delegate(args);
});
G__228968.cljs$core$IFn$_invoke$arity$variadic = G__228968__delegate;
return G__228968;
})()
;

return null;
});
