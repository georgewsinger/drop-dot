goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__289561__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__289561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__289562__i = 0, G__289562__a = new Array(arguments.length -  0);
while (G__289562__i < G__289562__a.length) {G__289562__a[G__289562__i] = arguments[G__289562__i + 0]; ++G__289562__i;}
  args = new cljs.core.IndexedSeq(G__289562__a,0);
} 
return G__289561__delegate.call(this,args);};
G__289561.cljs$lang$maxFixedArity = 0;
G__289561.cljs$lang$applyTo = (function (arglist__289563){
var args = cljs.core.seq(arglist__289563);
return G__289561__delegate(args);
});
G__289561.cljs$core$IFn$_invoke$arity$variadic = G__289561__delegate;
return G__289561;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__289564__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__289564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__289565__i = 0, G__289565__a = new Array(arguments.length -  0);
while (G__289565__i < G__289565__a.length) {G__289565__a[G__289565__i] = arguments[G__289565__i + 0]; ++G__289565__i;}
  args = new cljs.core.IndexedSeq(G__289565__a,0);
} 
return G__289564__delegate.call(this,args);};
G__289564.cljs$lang$maxFixedArity = 0;
G__289564.cljs$lang$applyTo = (function (arglist__289566){
var args = cljs.core.seq(arglist__289566);
return G__289564__delegate(args);
});
G__289564.cljs$core$IFn$_invoke$arity$variadic = G__289564__delegate;
return G__289564;
})()
;

return null;
});
