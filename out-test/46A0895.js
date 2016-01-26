goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22886__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22887__i = 0, G__22887__a = new Array(arguments.length -  0);
while (G__22887__i < G__22887__a.length) {G__22887__a[G__22887__i] = arguments[G__22887__i + 0]; ++G__22887__i;}
  args = new cljs.core.IndexedSeq(G__22887__a,0);
} 
return G__22886__delegate.call(this,args);};
G__22886.cljs$lang$maxFixedArity = 0;
G__22886.cljs$lang$applyTo = (function (arglist__22888){
var args = cljs.core.seq(arglist__22888);
return G__22886__delegate(args);
});
G__22886.cljs$core$IFn$_invoke$arity$variadic = G__22886__delegate;
return G__22886;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22889__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22890__i = 0, G__22890__a = new Array(arguments.length -  0);
while (G__22890__i < G__22890__a.length) {G__22890__a[G__22890__i] = arguments[G__22890__i + 0]; ++G__22890__i;}
  args = new cljs.core.IndexedSeq(G__22890__a,0);
} 
return G__22889__delegate.call(this,args);};
G__22889.cljs$lang$maxFixedArity = 0;
G__22889.cljs$lang$applyTo = (function (arglist__22891){
var args = cljs.core.seq(arglist__22891);
return G__22889__delegate(args);
});
G__22889.cljs$core$IFn$_invoke$arity$variadic = G__22889__delegate;
return G__22889;
})()
;

return null;
});
