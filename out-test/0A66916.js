goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27239__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27240__i = 0, G__27240__a = new Array(arguments.length -  0);
while (G__27240__i < G__27240__a.length) {G__27240__a[G__27240__i] = arguments[G__27240__i + 0]; ++G__27240__i;}
  args = new cljs.core.IndexedSeq(G__27240__a,0);
} 
return G__27239__delegate.call(this,args);};
G__27239.cljs$lang$maxFixedArity = 0;
G__27239.cljs$lang$applyTo = (function (arglist__27241){
var args = cljs.core.seq(arglist__27241);
return G__27239__delegate(args);
});
G__27239.cljs$core$IFn$_invoke$arity$variadic = G__27239__delegate;
return G__27239;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27242__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27243__i = 0, G__27243__a = new Array(arguments.length -  0);
while (G__27243__i < G__27243__a.length) {G__27243__a[G__27243__i] = arguments[G__27243__i + 0]; ++G__27243__i;}
  args = new cljs.core.IndexedSeq(G__27243__a,0);
} 
return G__27242__delegate.call(this,args);};
G__27242.cljs$lang$maxFixedArity = 0;
G__27242.cljs$lang$applyTo = (function (arglist__27244){
var args = cljs.core.seq(arglist__27244);
return G__27242__delegate(args);
});
G__27242.cljs$core$IFn$_invoke$arity$variadic = G__27242__delegate;
return G__27242;
})()
;

return null;
});
