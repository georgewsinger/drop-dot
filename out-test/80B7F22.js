goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21863__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21864__i = 0, G__21864__a = new Array(arguments.length -  0);
while (G__21864__i < G__21864__a.length) {G__21864__a[G__21864__i] = arguments[G__21864__i + 0]; ++G__21864__i;}
  args = new cljs.core.IndexedSeq(G__21864__a,0);
} 
return G__21863__delegate.call(this,args);};
G__21863.cljs$lang$maxFixedArity = 0;
G__21863.cljs$lang$applyTo = (function (arglist__21865){
var args = cljs.core.seq(arglist__21865);
return G__21863__delegate(args);
});
G__21863.cljs$core$IFn$_invoke$arity$variadic = G__21863__delegate;
return G__21863;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21866__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21867__i = 0, G__21867__a = new Array(arguments.length -  0);
while (G__21867__i < G__21867__a.length) {G__21867__a[G__21867__i] = arguments[G__21867__i + 0]; ++G__21867__i;}
  args = new cljs.core.IndexedSeq(G__21867__a,0);
} 
return G__21866__delegate.call(this,args);};
G__21866.cljs$lang$maxFixedArity = 0;
G__21866.cljs$lang$applyTo = (function (arglist__21868){
var args = cljs.core.seq(arglist__21868);
return G__21866__delegate(args);
});
G__21866.cljs$core$IFn$_invoke$arity$variadic = G__21866__delegate;
return G__21866;
})()
;

return null;
});
