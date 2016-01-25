goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__272077__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__272077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__272078__i = 0, G__272078__a = new Array(arguments.length -  0);
while (G__272078__i < G__272078__a.length) {G__272078__a[G__272078__i] = arguments[G__272078__i + 0]; ++G__272078__i;}
  args = new cljs.core.IndexedSeq(G__272078__a,0);
} 
return G__272077__delegate.call(this,args);};
G__272077.cljs$lang$maxFixedArity = 0;
G__272077.cljs$lang$applyTo = (function (arglist__272079){
var args = cljs.core.seq(arglist__272079);
return G__272077__delegate(args);
});
G__272077.cljs$core$IFn$_invoke$arity$variadic = G__272077__delegate;
return G__272077;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__272080__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__272080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__272081__i = 0, G__272081__a = new Array(arguments.length -  0);
while (G__272081__i < G__272081__a.length) {G__272081__a[G__272081__i] = arguments[G__272081__i + 0]; ++G__272081__i;}
  args = new cljs.core.IndexedSeq(G__272081__a,0);
} 
return G__272080__delegate.call(this,args);};
G__272080.cljs$lang$maxFixedArity = 0;
G__272080.cljs$lang$applyTo = (function (arglist__272082){
var args = cljs.core.seq(arglist__272082);
return G__272080__delegate(args);
});
G__272080.cljs$core$IFn$_invoke$arity$variadic = G__272080__delegate;
return G__272080;
})()
;

return null;
});
