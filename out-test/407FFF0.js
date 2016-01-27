goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__76509__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__76509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76510__i = 0, G__76510__a = new Array(arguments.length -  0);
while (G__76510__i < G__76510__a.length) {G__76510__a[G__76510__i] = arguments[G__76510__i + 0]; ++G__76510__i;}
  args = new cljs.core.IndexedSeq(G__76510__a,0);
} 
return G__76509__delegate.call(this,args);};
G__76509.cljs$lang$maxFixedArity = 0;
G__76509.cljs$lang$applyTo = (function (arglist__76511){
var args = cljs.core.seq(arglist__76511);
return G__76509__delegate(args);
});
G__76509.cljs$core$IFn$_invoke$arity$variadic = G__76509__delegate;
return G__76509;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__76512__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__76512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76513__i = 0, G__76513__a = new Array(arguments.length -  0);
while (G__76513__i < G__76513__a.length) {G__76513__a[G__76513__i] = arguments[G__76513__i + 0]; ++G__76513__i;}
  args = new cljs.core.IndexedSeq(G__76513__a,0);
} 
return G__76512__delegate.call(this,args);};
G__76512.cljs$lang$maxFixedArity = 0;
G__76512.cljs$lang$applyTo = (function (arglist__76514){
var args = cljs.core.seq(arglist__76514);
return G__76512__delegate(args);
});
G__76512.cljs$core$IFn$_invoke$arity$variadic = G__76512__delegate;
return G__76512;
})()
;

return null;
});
