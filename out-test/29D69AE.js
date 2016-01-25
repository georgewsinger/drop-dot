goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16524__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16525__i = 0, G__16525__a = new Array(arguments.length -  0);
while (G__16525__i < G__16525__a.length) {G__16525__a[G__16525__i] = arguments[G__16525__i + 0]; ++G__16525__i;}
  args = new cljs.core.IndexedSeq(G__16525__a,0);
} 
return G__16524__delegate.call(this,args);};
G__16524.cljs$lang$maxFixedArity = 0;
G__16524.cljs$lang$applyTo = (function (arglist__16526){
var args = cljs.core.seq(arglist__16526);
return G__16524__delegate(args);
});
G__16524.cljs$core$IFn$_invoke$arity$variadic = G__16524__delegate;
return G__16524;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16527__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16528__i = 0, G__16528__a = new Array(arguments.length -  0);
while (G__16528__i < G__16528__a.length) {G__16528__a[G__16528__i] = arguments[G__16528__i + 0]; ++G__16528__i;}
  args = new cljs.core.IndexedSeq(G__16528__a,0);
} 
return G__16527__delegate.call(this,args);};
G__16527.cljs$lang$maxFixedArity = 0;
G__16527.cljs$lang$applyTo = (function (arglist__16529){
var args = cljs.core.seq(arglist__16529);
return G__16527__delegate(args);
});
G__16527.cljs$core$IFn$_invoke$arity$variadic = G__16527__delegate;
return G__16527;
})()
;

return null;
});
