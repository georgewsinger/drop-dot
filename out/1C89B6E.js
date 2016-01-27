goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__297816__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__297816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297817__i = 0, G__297817__a = new Array(arguments.length -  0);
while (G__297817__i < G__297817__a.length) {G__297817__a[G__297817__i] = arguments[G__297817__i + 0]; ++G__297817__i;}
  args = new cljs.core.IndexedSeq(G__297817__a,0);
} 
return G__297816__delegate.call(this,args);};
G__297816.cljs$lang$maxFixedArity = 0;
G__297816.cljs$lang$applyTo = (function (arglist__297818){
var args = cljs.core.seq(arglist__297818);
return G__297816__delegate(args);
});
G__297816.cljs$core$IFn$_invoke$arity$variadic = G__297816__delegate;
return G__297816;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__297819__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__297819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297820__i = 0, G__297820__a = new Array(arguments.length -  0);
while (G__297820__i < G__297820__a.length) {G__297820__a[G__297820__i] = arguments[G__297820__i + 0]; ++G__297820__i;}
  args = new cljs.core.IndexedSeq(G__297820__a,0);
} 
return G__297819__delegate.call(this,args);};
G__297819.cljs$lang$maxFixedArity = 0;
G__297819.cljs$lang$applyTo = (function (arglist__297821){
var args = cljs.core.seq(arglist__297821);
return G__297819__delegate(args);
});
G__297819.cljs$core$IFn$_invoke$arity$variadic = G__297819__delegate;
return G__297819;
})()
;

return null;
});
