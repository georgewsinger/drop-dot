goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60867__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60868__i = 0, G__60868__a = new Array(arguments.length -  0);
while (G__60868__i < G__60868__a.length) {G__60868__a[G__60868__i] = arguments[G__60868__i + 0]; ++G__60868__i;}
  args = new cljs.core.IndexedSeq(G__60868__a,0);
} 
return G__60867__delegate.call(this,args);};
G__60867.cljs$lang$maxFixedArity = 0;
G__60867.cljs$lang$applyTo = (function (arglist__60869){
var args = cljs.core.seq(arglist__60869);
return G__60867__delegate(args);
});
G__60867.cljs$core$IFn$_invoke$arity$variadic = G__60867__delegate;
return G__60867;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60870__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60871__i = 0, G__60871__a = new Array(arguments.length -  0);
while (G__60871__i < G__60871__a.length) {G__60871__a[G__60871__i] = arguments[G__60871__i + 0]; ++G__60871__i;}
  args = new cljs.core.IndexedSeq(G__60871__a,0);
} 
return G__60870__delegate.call(this,args);};
G__60870.cljs$lang$maxFixedArity = 0;
G__60870.cljs$lang$applyTo = (function (arglist__60872){
var args = cljs.core.seq(arglist__60872);
return G__60870__delegate(args);
});
G__60870.cljs$core$IFn$_invoke$arity$variadic = G__60870__delegate;
return G__60870;
})()
;

return null;
});
