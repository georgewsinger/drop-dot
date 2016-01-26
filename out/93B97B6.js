goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22821__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22822__i = 0, G__22822__a = new Array(arguments.length -  0);
while (G__22822__i < G__22822__a.length) {G__22822__a[G__22822__i] = arguments[G__22822__i + 0]; ++G__22822__i;}
  args = new cljs.core.IndexedSeq(G__22822__a,0);
} 
return G__22821__delegate.call(this,args);};
G__22821.cljs$lang$maxFixedArity = 0;
G__22821.cljs$lang$applyTo = (function (arglist__22823){
var args = cljs.core.seq(arglist__22823);
return G__22821__delegate(args);
});
G__22821.cljs$core$IFn$_invoke$arity$variadic = G__22821__delegate;
return G__22821;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22824__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22825__i = 0, G__22825__a = new Array(arguments.length -  0);
while (G__22825__i < G__22825__a.length) {G__22825__a[G__22825__i] = arguments[G__22825__i + 0]; ++G__22825__i;}
  args = new cljs.core.IndexedSeq(G__22825__a,0);
} 
return G__22824__delegate.call(this,args);};
G__22824.cljs$lang$maxFixedArity = 0;
G__22824.cljs$lang$applyTo = (function (arglist__22826){
var args = cljs.core.seq(arglist__22826);
return G__22824__delegate(args);
});
G__22824.cljs$core$IFn$_invoke$arity$variadic = G__22824__delegate;
return G__22824;
})()
;

return null;
});
