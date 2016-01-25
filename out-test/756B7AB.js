goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39422__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39423__i = 0, G__39423__a = new Array(arguments.length -  0);
while (G__39423__i < G__39423__a.length) {G__39423__a[G__39423__i] = arguments[G__39423__i + 0]; ++G__39423__i;}
  args = new cljs.core.IndexedSeq(G__39423__a,0);
} 
return G__39422__delegate.call(this,args);};
G__39422.cljs$lang$maxFixedArity = 0;
G__39422.cljs$lang$applyTo = (function (arglist__39424){
var args = cljs.core.seq(arglist__39424);
return G__39422__delegate(args);
});
G__39422.cljs$core$IFn$_invoke$arity$variadic = G__39422__delegate;
return G__39422;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39425__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39426__i = 0, G__39426__a = new Array(arguments.length -  0);
while (G__39426__i < G__39426__a.length) {G__39426__a[G__39426__i] = arguments[G__39426__i + 0]; ++G__39426__i;}
  args = new cljs.core.IndexedSeq(G__39426__a,0);
} 
return G__39425__delegate.call(this,args);};
G__39425.cljs$lang$maxFixedArity = 0;
G__39425.cljs$lang$applyTo = (function (arglist__39427){
var args = cljs.core.seq(arglist__39427);
return G__39425__delegate(args);
});
G__39425.cljs$core$IFn$_invoke$arity$variadic = G__39425__delegate;
return G__39425;
})()
;

return null;
});
