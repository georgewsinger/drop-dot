goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18210__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18211__i = 0, G__18211__a = new Array(arguments.length -  0);
while (G__18211__i < G__18211__a.length) {G__18211__a[G__18211__i] = arguments[G__18211__i + 0]; ++G__18211__i;}
  args = new cljs.core.IndexedSeq(G__18211__a,0);
} 
return G__18210__delegate.call(this,args);};
G__18210.cljs$lang$maxFixedArity = 0;
G__18210.cljs$lang$applyTo = (function (arglist__18212){
var args = cljs.core.seq(arglist__18212);
return G__18210__delegate(args);
});
G__18210.cljs$core$IFn$_invoke$arity$variadic = G__18210__delegate;
return G__18210;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18213__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18214__i = 0, G__18214__a = new Array(arguments.length -  0);
while (G__18214__i < G__18214__a.length) {G__18214__a[G__18214__i] = arguments[G__18214__i + 0]; ++G__18214__i;}
  args = new cljs.core.IndexedSeq(G__18214__a,0);
} 
return G__18213__delegate.call(this,args);};
G__18213.cljs$lang$maxFixedArity = 0;
G__18213.cljs$lang$applyTo = (function (arglist__18215){
var args = cljs.core.seq(arglist__18215);
return G__18213__delegate(args);
});
G__18213.cljs$core$IFn$_invoke$arity$variadic = G__18213__delegate;
return G__18213;
})()
;

return null;
});
