goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18911__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18911 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18912__i = 0, G__18912__a = new Array(arguments.length -  0);
while (G__18912__i < G__18912__a.length) {G__18912__a[G__18912__i] = arguments[G__18912__i + 0]; ++G__18912__i;}
  args = new cljs.core.IndexedSeq(G__18912__a,0);
} 
return G__18911__delegate.call(this,args);};
G__18911.cljs$lang$maxFixedArity = 0;
G__18911.cljs$lang$applyTo = (function (arglist__18913){
var args = cljs.core.seq(arglist__18913);
return G__18911__delegate(args);
});
G__18911.cljs$core$IFn$_invoke$arity$variadic = G__18911__delegate;
return G__18911;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18914__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18915__i = 0, G__18915__a = new Array(arguments.length -  0);
while (G__18915__i < G__18915__a.length) {G__18915__a[G__18915__i] = arguments[G__18915__i + 0]; ++G__18915__i;}
  args = new cljs.core.IndexedSeq(G__18915__a,0);
} 
return G__18914__delegate.call(this,args);};
G__18914.cljs$lang$maxFixedArity = 0;
G__18914.cljs$lang$applyTo = (function (arglist__18916){
var args = cljs.core.seq(arglist__18916);
return G__18914__delegate(args);
});
G__18914.cljs$core$IFn$_invoke$arity$variadic = G__18914__delegate;
return G__18914;
})()
;

return null;
});
