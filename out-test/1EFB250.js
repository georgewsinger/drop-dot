goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16712__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16713__i = 0, G__16713__a = new Array(arguments.length -  0);
while (G__16713__i < G__16713__a.length) {G__16713__a[G__16713__i] = arguments[G__16713__i + 0]; ++G__16713__i;}
  args = new cljs.core.IndexedSeq(G__16713__a,0);
} 
return G__16712__delegate.call(this,args);};
G__16712.cljs$lang$maxFixedArity = 0;
G__16712.cljs$lang$applyTo = (function (arglist__16714){
var args = cljs.core.seq(arglist__16714);
return G__16712__delegate(args);
});
G__16712.cljs$core$IFn$_invoke$arity$variadic = G__16712__delegate;
return G__16712;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16715__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16716__i = 0, G__16716__a = new Array(arguments.length -  0);
while (G__16716__i < G__16716__a.length) {G__16716__a[G__16716__i] = arguments[G__16716__i + 0]; ++G__16716__i;}
  args = new cljs.core.IndexedSeq(G__16716__a,0);
} 
return G__16715__delegate.call(this,args);};
G__16715.cljs$lang$maxFixedArity = 0;
G__16715.cljs$lang$applyTo = (function (arglist__16717){
var args = cljs.core.seq(arglist__16717);
return G__16715__delegate(args);
});
G__16715.cljs$core$IFn$_invoke$arity$variadic = G__16715__delegate;
return G__16715;
})()
;

return null;
});
