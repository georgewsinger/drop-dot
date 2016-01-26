goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20084__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20085__i = 0, G__20085__a = new Array(arguments.length -  0);
while (G__20085__i < G__20085__a.length) {G__20085__a[G__20085__i] = arguments[G__20085__i + 0]; ++G__20085__i;}
  args = new cljs.core.IndexedSeq(G__20085__a,0);
} 
return G__20084__delegate.call(this,args);};
G__20084.cljs$lang$maxFixedArity = 0;
G__20084.cljs$lang$applyTo = (function (arglist__20086){
var args = cljs.core.seq(arglist__20086);
return G__20084__delegate(args);
});
G__20084.cljs$core$IFn$_invoke$arity$variadic = G__20084__delegate;
return G__20084;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20087__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20088__i = 0, G__20088__a = new Array(arguments.length -  0);
while (G__20088__i < G__20088__a.length) {G__20088__a[G__20088__i] = arguments[G__20088__i + 0]; ++G__20088__i;}
  args = new cljs.core.IndexedSeq(G__20088__a,0);
} 
return G__20087__delegate.call(this,args);};
G__20087.cljs$lang$maxFixedArity = 0;
G__20087.cljs$lang$applyTo = (function (arglist__20089){
var args = cljs.core.seq(arglist__20089);
return G__20087__delegate(args);
});
G__20087.cljs$core$IFn$_invoke$arity$variadic = G__20087__delegate;
return G__20087;
})()
;

return null;
});
