goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39755__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39756__i = 0, G__39756__a = new Array(arguments.length -  0);
while (G__39756__i < G__39756__a.length) {G__39756__a[G__39756__i] = arguments[G__39756__i + 0]; ++G__39756__i;}
  args = new cljs.core.IndexedSeq(G__39756__a,0);
} 
return G__39755__delegate.call(this,args);};
G__39755.cljs$lang$maxFixedArity = 0;
G__39755.cljs$lang$applyTo = (function (arglist__39757){
var args = cljs.core.seq(arglist__39757);
return G__39755__delegate(args);
});
G__39755.cljs$core$IFn$_invoke$arity$variadic = G__39755__delegate;
return G__39755;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39758__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39759__i = 0, G__39759__a = new Array(arguments.length -  0);
while (G__39759__i < G__39759__a.length) {G__39759__a[G__39759__i] = arguments[G__39759__i + 0]; ++G__39759__i;}
  args = new cljs.core.IndexedSeq(G__39759__a,0);
} 
return G__39758__delegate.call(this,args);};
G__39758.cljs$lang$maxFixedArity = 0;
G__39758.cljs$lang$applyTo = (function (arglist__39760){
var args = cljs.core.seq(arglist__39760);
return G__39758__delegate(args);
});
G__39758.cljs$core$IFn$_invoke$arity$variadic = G__39758__delegate;
return G__39758;
})()
;

return null;
});
