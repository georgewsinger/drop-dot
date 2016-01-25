goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32327__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32328__i = 0, G__32328__a = new Array(arguments.length -  0);
while (G__32328__i < G__32328__a.length) {G__32328__a[G__32328__i] = arguments[G__32328__i + 0]; ++G__32328__i;}
  args = new cljs.core.IndexedSeq(G__32328__a,0);
} 
return G__32327__delegate.call(this,args);};
G__32327.cljs$lang$maxFixedArity = 0;
G__32327.cljs$lang$applyTo = (function (arglist__32329){
var args = cljs.core.seq(arglist__32329);
return G__32327__delegate(args);
});
G__32327.cljs$core$IFn$_invoke$arity$variadic = G__32327__delegate;
return G__32327;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32330__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32331__i = 0, G__32331__a = new Array(arguments.length -  0);
while (G__32331__i < G__32331__a.length) {G__32331__a[G__32331__i] = arguments[G__32331__i + 0]; ++G__32331__i;}
  args = new cljs.core.IndexedSeq(G__32331__a,0);
} 
return G__32330__delegate.call(this,args);};
G__32330.cljs$lang$maxFixedArity = 0;
G__32330.cljs$lang$applyTo = (function (arglist__32332){
var args = cljs.core.seq(arglist__32332);
return G__32330__delegate(args);
});
G__32330.cljs$core$IFn$_invoke$arity$variadic = G__32330__delegate;
return G__32330;
})()
;

return null;
});
