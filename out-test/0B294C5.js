goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11331__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11332__i = 0, G__11332__a = new Array(arguments.length -  0);
while (G__11332__i < G__11332__a.length) {G__11332__a[G__11332__i] = arguments[G__11332__i + 0]; ++G__11332__i;}
  args = new cljs.core.IndexedSeq(G__11332__a,0);
} 
return G__11331__delegate.call(this,args);};
G__11331.cljs$lang$maxFixedArity = 0;
G__11331.cljs$lang$applyTo = (function (arglist__11333){
var args = cljs.core.seq(arglist__11333);
return G__11331__delegate(args);
});
G__11331.cljs$core$IFn$_invoke$arity$variadic = G__11331__delegate;
return G__11331;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11334__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11335__i = 0, G__11335__a = new Array(arguments.length -  0);
while (G__11335__i < G__11335__a.length) {G__11335__a[G__11335__i] = arguments[G__11335__i + 0]; ++G__11335__i;}
  args = new cljs.core.IndexedSeq(G__11335__a,0);
} 
return G__11334__delegate.call(this,args);};
G__11334.cljs$lang$maxFixedArity = 0;
G__11334.cljs$lang$applyTo = (function (arglist__11336){
var args = cljs.core.seq(arglist__11336);
return G__11334__delegate(args);
});
G__11334.cljs$core$IFn$_invoke$arity$variadic = G__11334__delegate;
return G__11334;
})()
;

return null;
});
