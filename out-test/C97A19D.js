goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__151997__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__151997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151998__i = 0, G__151998__a = new Array(arguments.length -  0);
while (G__151998__i < G__151998__a.length) {G__151998__a[G__151998__i] = arguments[G__151998__i + 0]; ++G__151998__i;}
  args = new cljs.core.IndexedSeq(G__151998__a,0);
} 
return G__151997__delegate.call(this,args);};
G__151997.cljs$lang$maxFixedArity = 0;
G__151997.cljs$lang$applyTo = (function (arglist__151999){
var args = cljs.core.seq(arglist__151999);
return G__151997__delegate(args);
});
G__151997.cljs$core$IFn$_invoke$arity$variadic = G__151997__delegate;
return G__151997;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__152000__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__152000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152001__i = 0, G__152001__a = new Array(arguments.length -  0);
while (G__152001__i < G__152001__a.length) {G__152001__a[G__152001__i] = arguments[G__152001__i + 0]; ++G__152001__i;}
  args = new cljs.core.IndexedSeq(G__152001__a,0);
} 
return G__152000__delegate.call(this,args);};
G__152000.cljs$lang$maxFixedArity = 0;
G__152000.cljs$lang$applyTo = (function (arglist__152002){
var args = cljs.core.seq(arglist__152002);
return G__152000__delegate(args);
});
G__152000.cljs$core$IFn$_invoke$arity$variadic = G__152000__delegate;
return G__152000;
})()
;

return null;
});
