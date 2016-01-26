goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__293818__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__293818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293819__i = 0, G__293819__a = new Array(arguments.length -  0);
while (G__293819__i < G__293819__a.length) {G__293819__a[G__293819__i] = arguments[G__293819__i + 0]; ++G__293819__i;}
  args = new cljs.core.IndexedSeq(G__293819__a,0);
} 
return G__293818__delegate.call(this,args);};
G__293818.cljs$lang$maxFixedArity = 0;
G__293818.cljs$lang$applyTo = (function (arglist__293820){
var args = cljs.core.seq(arglist__293820);
return G__293818__delegate(args);
});
G__293818.cljs$core$IFn$_invoke$arity$variadic = G__293818__delegate;
return G__293818;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__293821__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__293821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293822__i = 0, G__293822__a = new Array(arguments.length -  0);
while (G__293822__i < G__293822__a.length) {G__293822__a[G__293822__i] = arguments[G__293822__i + 0]; ++G__293822__i;}
  args = new cljs.core.IndexedSeq(G__293822__a,0);
} 
return G__293821__delegate.call(this,args);};
G__293821.cljs$lang$maxFixedArity = 0;
G__293821.cljs$lang$applyTo = (function (arglist__293823){
var args = cljs.core.seq(arglist__293823);
return G__293821__delegate(args);
});
G__293821.cljs$core$IFn$_invoke$arity$variadic = G__293821__delegate;
return G__293821;
})()
;

return null;
});
