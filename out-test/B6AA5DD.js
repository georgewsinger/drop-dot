goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26389__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26390__i = 0, G__26390__a = new Array(arguments.length -  0);
while (G__26390__i < G__26390__a.length) {G__26390__a[G__26390__i] = arguments[G__26390__i + 0]; ++G__26390__i;}
  args = new cljs.core.IndexedSeq(G__26390__a,0);
} 
return G__26389__delegate.call(this,args);};
G__26389.cljs$lang$maxFixedArity = 0;
G__26389.cljs$lang$applyTo = (function (arglist__26391){
var args = cljs.core.seq(arglist__26391);
return G__26389__delegate(args);
});
G__26389.cljs$core$IFn$_invoke$arity$variadic = G__26389__delegate;
return G__26389;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26392__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26393__i = 0, G__26393__a = new Array(arguments.length -  0);
while (G__26393__i < G__26393__a.length) {G__26393__a[G__26393__i] = arguments[G__26393__i + 0]; ++G__26393__i;}
  args = new cljs.core.IndexedSeq(G__26393__a,0);
} 
return G__26392__delegate.call(this,args);};
G__26392.cljs$lang$maxFixedArity = 0;
G__26392.cljs$lang$applyTo = (function (arglist__26394){
var args = cljs.core.seq(arglist__26394);
return G__26392__delegate(args);
});
G__26392.cljs$core$IFn$_invoke$arity$variadic = G__26392__delegate;
return G__26392;
})()
;

return null;
});
