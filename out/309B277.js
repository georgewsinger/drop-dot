goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26390__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26391__i = 0, G__26391__a = new Array(arguments.length -  0);
while (G__26391__i < G__26391__a.length) {G__26391__a[G__26391__i] = arguments[G__26391__i + 0]; ++G__26391__i;}
  args = new cljs.core.IndexedSeq(G__26391__a,0);
} 
return G__26390__delegate.call(this,args);};
G__26390.cljs$lang$maxFixedArity = 0;
G__26390.cljs$lang$applyTo = (function (arglist__26392){
var args = cljs.core.seq(arglist__26392);
return G__26390__delegate(args);
});
G__26390.cljs$core$IFn$_invoke$arity$variadic = G__26390__delegate;
return G__26390;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26393__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26394__i = 0, G__26394__a = new Array(arguments.length -  0);
while (G__26394__i < G__26394__a.length) {G__26394__a[G__26394__i] = arguments[G__26394__i + 0]; ++G__26394__i;}
  args = new cljs.core.IndexedSeq(G__26394__a,0);
} 
return G__26393__delegate.call(this,args);};
G__26393.cljs$lang$maxFixedArity = 0;
G__26393.cljs$lang$applyTo = (function (arglist__26395){
var args = cljs.core.seq(arglist__26395);
return G__26393__delegate(args);
});
G__26393.cljs$core$IFn$_invoke$arity$variadic = G__26393__delegate;
return G__26393;
})()
;

return null;
});
