goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18475__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18476__i = 0, G__18476__a = new Array(arguments.length -  0);
while (G__18476__i < G__18476__a.length) {G__18476__a[G__18476__i] = arguments[G__18476__i + 0]; ++G__18476__i;}
  args = new cljs.core.IndexedSeq(G__18476__a,0);
} 
return G__18475__delegate.call(this,args);};
G__18475.cljs$lang$maxFixedArity = 0;
G__18475.cljs$lang$applyTo = (function (arglist__18477){
var args = cljs.core.seq(arglist__18477);
return G__18475__delegate(args);
});
G__18475.cljs$core$IFn$_invoke$arity$variadic = G__18475__delegate;
return G__18475;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18478__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18479__i = 0, G__18479__a = new Array(arguments.length -  0);
while (G__18479__i < G__18479__a.length) {G__18479__a[G__18479__i] = arguments[G__18479__i + 0]; ++G__18479__i;}
  args = new cljs.core.IndexedSeq(G__18479__a,0);
} 
return G__18478__delegate.call(this,args);};
G__18478.cljs$lang$maxFixedArity = 0;
G__18478.cljs$lang$applyTo = (function (arglist__18480){
var args = cljs.core.seq(arglist__18480);
return G__18478__delegate(args);
});
G__18478.cljs$core$IFn$_invoke$arity$variadic = G__18478__delegate;
return G__18478;
})()
;

return null;
});
