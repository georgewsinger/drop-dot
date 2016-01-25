goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31582__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31583__i = 0, G__31583__a = new Array(arguments.length -  0);
while (G__31583__i < G__31583__a.length) {G__31583__a[G__31583__i] = arguments[G__31583__i + 0]; ++G__31583__i;}
  args = new cljs.core.IndexedSeq(G__31583__a,0);
} 
return G__31582__delegate.call(this,args);};
G__31582.cljs$lang$maxFixedArity = 0;
G__31582.cljs$lang$applyTo = (function (arglist__31584){
var args = cljs.core.seq(arglist__31584);
return G__31582__delegate(args);
});
G__31582.cljs$core$IFn$_invoke$arity$variadic = G__31582__delegate;
return G__31582;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31585__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31586__i = 0, G__31586__a = new Array(arguments.length -  0);
while (G__31586__i < G__31586__a.length) {G__31586__a[G__31586__i] = arguments[G__31586__i + 0]; ++G__31586__i;}
  args = new cljs.core.IndexedSeq(G__31586__a,0);
} 
return G__31585__delegate.call(this,args);};
G__31585.cljs$lang$maxFixedArity = 0;
G__31585.cljs$lang$applyTo = (function (arglist__31587){
var args = cljs.core.seq(arglist__31587);
return G__31585__delegate(args);
});
G__31585.cljs$core$IFn$_invoke$arity$variadic = G__31585__delegate;
return G__31585;
})()
;

return null;
});
