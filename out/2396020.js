goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__334943__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__334943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__334944__i = 0, G__334944__a = new Array(arguments.length -  0);
while (G__334944__i < G__334944__a.length) {G__334944__a[G__334944__i] = arguments[G__334944__i + 0]; ++G__334944__i;}
  args = new cljs.core.IndexedSeq(G__334944__a,0);
} 
return G__334943__delegate.call(this,args);};
G__334943.cljs$lang$maxFixedArity = 0;
G__334943.cljs$lang$applyTo = (function (arglist__334945){
var args = cljs.core.seq(arglist__334945);
return G__334943__delegate(args);
});
G__334943.cljs$core$IFn$_invoke$arity$variadic = G__334943__delegate;
return G__334943;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__334946__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__334946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__334947__i = 0, G__334947__a = new Array(arguments.length -  0);
while (G__334947__i < G__334947__a.length) {G__334947__a[G__334947__i] = arguments[G__334947__i + 0]; ++G__334947__i;}
  args = new cljs.core.IndexedSeq(G__334947__a,0);
} 
return G__334946__delegate.call(this,args);};
G__334946.cljs$lang$maxFixedArity = 0;
G__334946.cljs$lang$applyTo = (function (arglist__334948){
var args = cljs.core.seq(arglist__334948);
return G__334946__delegate(args);
});
G__334946.cljs$core$IFn$_invoke$arity$variadic = G__334946__delegate;
return G__334946;
})()
;

return null;
});
