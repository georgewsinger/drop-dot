goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48722__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48723__i = 0, G__48723__a = new Array(arguments.length -  0);
while (G__48723__i < G__48723__a.length) {G__48723__a[G__48723__i] = arguments[G__48723__i + 0]; ++G__48723__i;}
  args = new cljs.core.IndexedSeq(G__48723__a,0);
} 
return G__48722__delegate.call(this,args);};
G__48722.cljs$lang$maxFixedArity = 0;
G__48722.cljs$lang$applyTo = (function (arglist__48724){
var args = cljs.core.seq(arglist__48724);
return G__48722__delegate(args);
});
G__48722.cljs$core$IFn$_invoke$arity$variadic = G__48722__delegate;
return G__48722;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48725__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48726__i = 0, G__48726__a = new Array(arguments.length -  0);
while (G__48726__i < G__48726__a.length) {G__48726__a[G__48726__i] = arguments[G__48726__i + 0]; ++G__48726__i;}
  args = new cljs.core.IndexedSeq(G__48726__a,0);
} 
return G__48725__delegate.call(this,args);};
G__48725.cljs$lang$maxFixedArity = 0;
G__48725.cljs$lang$applyTo = (function (arglist__48727){
var args = cljs.core.seq(arglist__48727);
return G__48725__delegate(args);
});
G__48725.cljs$core$IFn$_invoke$arity$variadic = G__48725__delegate;
return G__48725;
})()
;

return null;
});
