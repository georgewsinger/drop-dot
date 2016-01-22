goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27083__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27084__i = 0, G__27084__a = new Array(arguments.length -  0);
while (G__27084__i < G__27084__a.length) {G__27084__a[G__27084__i] = arguments[G__27084__i + 0]; ++G__27084__i;}
  args = new cljs.core.IndexedSeq(G__27084__a,0);
} 
return G__27083__delegate.call(this,args);};
G__27083.cljs$lang$maxFixedArity = 0;
G__27083.cljs$lang$applyTo = (function (arglist__27085){
var args = cljs.core.seq(arglist__27085);
return G__27083__delegate(args);
});
G__27083.cljs$core$IFn$_invoke$arity$variadic = G__27083__delegate;
return G__27083;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27086__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27087__i = 0, G__27087__a = new Array(arguments.length -  0);
while (G__27087__i < G__27087__a.length) {G__27087__a[G__27087__i] = arguments[G__27087__i + 0]; ++G__27087__i;}
  args = new cljs.core.IndexedSeq(G__27087__a,0);
} 
return G__27086__delegate.call(this,args);};
G__27086.cljs$lang$maxFixedArity = 0;
G__27086.cljs$lang$applyTo = (function (arglist__27088){
var args = cljs.core.seq(arglist__27088);
return G__27086__delegate(args);
});
G__27086.cljs$core$IFn$_invoke$arity$variadic = G__27086__delegate;
return G__27086;
})()
;

return null;
});
