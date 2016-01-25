goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12331__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12332__i = 0, G__12332__a = new Array(arguments.length -  0);
while (G__12332__i < G__12332__a.length) {G__12332__a[G__12332__i] = arguments[G__12332__i + 0]; ++G__12332__i;}
  args = new cljs.core.IndexedSeq(G__12332__a,0);
} 
return G__12331__delegate.call(this,args);};
G__12331.cljs$lang$maxFixedArity = 0;
G__12331.cljs$lang$applyTo = (function (arglist__12333){
var args = cljs.core.seq(arglist__12333);
return G__12331__delegate(args);
});
G__12331.cljs$core$IFn$_invoke$arity$variadic = G__12331__delegate;
return G__12331;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12334__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12335__i = 0, G__12335__a = new Array(arguments.length -  0);
while (G__12335__i < G__12335__a.length) {G__12335__a[G__12335__i] = arguments[G__12335__i + 0]; ++G__12335__i;}
  args = new cljs.core.IndexedSeq(G__12335__a,0);
} 
return G__12334__delegate.call(this,args);};
G__12334.cljs$lang$maxFixedArity = 0;
G__12334.cljs$lang$applyTo = (function (arglist__12336){
var args = cljs.core.seq(arglist__12336);
return G__12334__delegate(args);
});
G__12334.cljs$core$IFn$_invoke$arity$variadic = G__12334__delegate;
return G__12334;
})()
;

return null;
});
