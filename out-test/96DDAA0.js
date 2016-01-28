goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__87988__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__87988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87989__i = 0, G__87989__a = new Array(arguments.length -  0);
while (G__87989__i < G__87989__a.length) {G__87989__a[G__87989__i] = arguments[G__87989__i + 0]; ++G__87989__i;}
  args = new cljs.core.IndexedSeq(G__87989__a,0);
} 
return G__87988__delegate.call(this,args);};
G__87988.cljs$lang$maxFixedArity = 0;
G__87988.cljs$lang$applyTo = (function (arglist__87990){
var args = cljs.core.seq(arglist__87990);
return G__87988__delegate(args);
});
G__87988.cljs$core$IFn$_invoke$arity$variadic = G__87988__delegate;
return G__87988;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__87991__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__87991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87992__i = 0, G__87992__a = new Array(arguments.length -  0);
while (G__87992__i < G__87992__a.length) {G__87992__a[G__87992__i] = arguments[G__87992__i + 0]; ++G__87992__i;}
  args = new cljs.core.IndexedSeq(G__87992__a,0);
} 
return G__87991__delegate.call(this,args);};
G__87991.cljs$lang$maxFixedArity = 0;
G__87991.cljs$lang$applyTo = (function (arglist__87993){
var args = cljs.core.seq(arglist__87993);
return G__87991__delegate(args);
});
G__87991.cljs$core$IFn$_invoke$arity$variadic = G__87991__delegate;
return G__87991;
})()
;

return null;
});
