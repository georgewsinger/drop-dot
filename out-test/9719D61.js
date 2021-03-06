goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16513__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16514__i = 0, G__16514__a = new Array(arguments.length -  0);
while (G__16514__i < G__16514__a.length) {G__16514__a[G__16514__i] = arguments[G__16514__i + 0]; ++G__16514__i;}
  args = new cljs.core.IndexedSeq(G__16514__a,0);
} 
return G__16513__delegate.call(this,args);};
G__16513.cljs$lang$maxFixedArity = 0;
G__16513.cljs$lang$applyTo = (function (arglist__16515){
var args = cljs.core.seq(arglist__16515);
return G__16513__delegate(args);
});
G__16513.cljs$core$IFn$_invoke$arity$variadic = G__16513__delegate;
return G__16513;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16516__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16517__i = 0, G__16517__a = new Array(arguments.length -  0);
while (G__16517__i < G__16517__a.length) {G__16517__a[G__16517__i] = arguments[G__16517__i + 0]; ++G__16517__i;}
  args = new cljs.core.IndexedSeq(G__16517__a,0);
} 
return G__16516__delegate.call(this,args);};
G__16516.cljs$lang$maxFixedArity = 0;
G__16516.cljs$lang$applyTo = (function (arglist__16518){
var args = cljs.core.seq(arglist__16518);
return G__16516__delegate(args);
});
G__16516.cljs$core$IFn$_invoke$arity$variadic = G__16516__delegate;
return G__16516;
})()
;

return null;
});
