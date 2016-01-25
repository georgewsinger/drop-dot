goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34549__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34550__i = 0, G__34550__a = new Array(arguments.length -  0);
while (G__34550__i < G__34550__a.length) {G__34550__a[G__34550__i] = arguments[G__34550__i + 0]; ++G__34550__i;}
  args = new cljs.core.IndexedSeq(G__34550__a,0);
} 
return G__34549__delegate.call(this,args);};
G__34549.cljs$lang$maxFixedArity = 0;
G__34549.cljs$lang$applyTo = (function (arglist__34551){
var args = cljs.core.seq(arglist__34551);
return G__34549__delegate(args);
});
G__34549.cljs$core$IFn$_invoke$arity$variadic = G__34549__delegate;
return G__34549;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34552__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34553__i = 0, G__34553__a = new Array(arguments.length -  0);
while (G__34553__i < G__34553__a.length) {G__34553__a[G__34553__i] = arguments[G__34553__i + 0]; ++G__34553__i;}
  args = new cljs.core.IndexedSeq(G__34553__a,0);
} 
return G__34552__delegate.call(this,args);};
G__34552.cljs$lang$maxFixedArity = 0;
G__34552.cljs$lang$applyTo = (function (arglist__34554){
var args = cljs.core.seq(arglist__34554);
return G__34552__delegate(args);
});
G__34552.cljs$core$IFn$_invoke$arity$variadic = G__34552__delegate;
return G__34552;
})()
;

return null;
});
