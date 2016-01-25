goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__254434__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__254434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254435__i = 0, G__254435__a = new Array(arguments.length -  0);
while (G__254435__i < G__254435__a.length) {G__254435__a[G__254435__i] = arguments[G__254435__i + 0]; ++G__254435__i;}
  args = new cljs.core.IndexedSeq(G__254435__a,0);
} 
return G__254434__delegate.call(this,args);};
G__254434.cljs$lang$maxFixedArity = 0;
G__254434.cljs$lang$applyTo = (function (arglist__254436){
var args = cljs.core.seq(arglist__254436);
return G__254434__delegate(args);
});
G__254434.cljs$core$IFn$_invoke$arity$variadic = G__254434__delegate;
return G__254434;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__254437__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__254437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254438__i = 0, G__254438__a = new Array(arguments.length -  0);
while (G__254438__i < G__254438__a.length) {G__254438__a[G__254438__i] = arguments[G__254438__i + 0]; ++G__254438__i;}
  args = new cljs.core.IndexedSeq(G__254438__a,0);
} 
return G__254437__delegate.call(this,args);};
G__254437.cljs$lang$maxFixedArity = 0;
G__254437.cljs$lang$applyTo = (function (arglist__254439){
var args = cljs.core.seq(arglist__254439);
return G__254437__delegate(args);
});
G__254437.cljs$core$IFn$_invoke$arity$variadic = G__254437__delegate;
return G__254437;
})()
;

return null;
});
