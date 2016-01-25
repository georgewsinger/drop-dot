goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11126__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11127__i = 0, G__11127__a = new Array(arguments.length -  0);
while (G__11127__i < G__11127__a.length) {G__11127__a[G__11127__i] = arguments[G__11127__i + 0]; ++G__11127__i;}
  args = new cljs.core.IndexedSeq(G__11127__a,0);
} 
return G__11126__delegate.call(this,args);};
G__11126.cljs$lang$maxFixedArity = 0;
G__11126.cljs$lang$applyTo = (function (arglist__11128){
var args = cljs.core.seq(arglist__11128);
return G__11126__delegate(args);
});
G__11126.cljs$core$IFn$_invoke$arity$variadic = G__11126__delegate;
return G__11126;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11129__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11130__i = 0, G__11130__a = new Array(arguments.length -  0);
while (G__11130__i < G__11130__a.length) {G__11130__a[G__11130__i] = arguments[G__11130__i + 0]; ++G__11130__i;}
  args = new cljs.core.IndexedSeq(G__11130__a,0);
} 
return G__11129__delegate.call(this,args);};
G__11129.cljs$lang$maxFixedArity = 0;
G__11129.cljs$lang$applyTo = (function (arglist__11131){
var args = cljs.core.seq(arglist__11131);
return G__11129__delegate(args);
});
G__11129.cljs$core$IFn$_invoke$arity$variadic = G__11129__delegate;
return G__11129;
})()
;

return null;
});
