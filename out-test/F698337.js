goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23934__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23935__i = 0, G__23935__a = new Array(arguments.length -  0);
while (G__23935__i < G__23935__a.length) {G__23935__a[G__23935__i] = arguments[G__23935__i + 0]; ++G__23935__i;}
  args = new cljs.core.IndexedSeq(G__23935__a,0);
} 
return G__23934__delegate.call(this,args);};
G__23934.cljs$lang$maxFixedArity = 0;
G__23934.cljs$lang$applyTo = (function (arglist__23936){
var args = cljs.core.seq(arglist__23936);
return G__23934__delegate(args);
});
G__23934.cljs$core$IFn$_invoke$arity$variadic = G__23934__delegate;
return G__23934;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23937__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23938__i = 0, G__23938__a = new Array(arguments.length -  0);
while (G__23938__i < G__23938__a.length) {G__23938__a[G__23938__i] = arguments[G__23938__i + 0]; ++G__23938__i;}
  args = new cljs.core.IndexedSeq(G__23938__a,0);
} 
return G__23937__delegate.call(this,args);};
G__23937.cljs$lang$maxFixedArity = 0;
G__23937.cljs$lang$applyTo = (function (arglist__23939){
var args = cljs.core.seq(arglist__23939);
return G__23937__delegate(args);
});
G__23937.cljs$core$IFn$_invoke$arity$variadic = G__23937__delegate;
return G__23937;
})()
;

return null;
});
