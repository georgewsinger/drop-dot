goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__345150__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__345150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__345151__i = 0, G__345151__a = new Array(arguments.length -  0);
while (G__345151__i < G__345151__a.length) {G__345151__a[G__345151__i] = arguments[G__345151__i + 0]; ++G__345151__i;}
  args = new cljs.core.IndexedSeq(G__345151__a,0);
} 
return G__345150__delegate.call(this,args);};
G__345150.cljs$lang$maxFixedArity = 0;
G__345150.cljs$lang$applyTo = (function (arglist__345152){
var args = cljs.core.seq(arglist__345152);
return G__345150__delegate(args);
});
G__345150.cljs$core$IFn$_invoke$arity$variadic = G__345150__delegate;
return G__345150;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__345153__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__345153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__345154__i = 0, G__345154__a = new Array(arguments.length -  0);
while (G__345154__i < G__345154__a.length) {G__345154__a[G__345154__i] = arguments[G__345154__i + 0]; ++G__345154__i;}
  args = new cljs.core.IndexedSeq(G__345154__a,0);
} 
return G__345153__delegate.call(this,args);};
G__345153.cljs$lang$maxFixedArity = 0;
G__345153.cljs$lang$applyTo = (function (arglist__345155){
var args = cljs.core.seq(arglist__345155);
return G__345153__delegate(args);
});
G__345153.cljs$core$IFn$_invoke$arity$variadic = G__345153__delegate;
return G__345153;
})()
;

return null;
});
