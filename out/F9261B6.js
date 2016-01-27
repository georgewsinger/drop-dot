goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__298876__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__298876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__298877__i = 0, G__298877__a = new Array(arguments.length -  0);
while (G__298877__i < G__298877__a.length) {G__298877__a[G__298877__i] = arguments[G__298877__i + 0]; ++G__298877__i;}
  args = new cljs.core.IndexedSeq(G__298877__a,0);
} 
return G__298876__delegate.call(this,args);};
G__298876.cljs$lang$maxFixedArity = 0;
G__298876.cljs$lang$applyTo = (function (arglist__298878){
var args = cljs.core.seq(arglist__298878);
return G__298876__delegate(args);
});
G__298876.cljs$core$IFn$_invoke$arity$variadic = G__298876__delegate;
return G__298876;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__298879__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__298879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__298880__i = 0, G__298880__a = new Array(arguments.length -  0);
while (G__298880__i < G__298880__a.length) {G__298880__a[G__298880__i] = arguments[G__298880__i + 0]; ++G__298880__i;}
  args = new cljs.core.IndexedSeq(G__298880__a,0);
} 
return G__298879__delegate.call(this,args);};
G__298879.cljs$lang$maxFixedArity = 0;
G__298879.cljs$lang$applyTo = (function (arglist__298881){
var args = cljs.core.seq(arglist__298881);
return G__298879__delegate(args);
});
G__298879.cljs$core$IFn$_invoke$arity$variadic = G__298879__delegate;
return G__298879;
})()
;

return null;
});
