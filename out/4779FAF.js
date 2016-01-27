goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__347251__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__347251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__347252__i = 0, G__347252__a = new Array(arguments.length -  0);
while (G__347252__i < G__347252__a.length) {G__347252__a[G__347252__i] = arguments[G__347252__i + 0]; ++G__347252__i;}
  args = new cljs.core.IndexedSeq(G__347252__a,0);
} 
return G__347251__delegate.call(this,args);};
G__347251.cljs$lang$maxFixedArity = 0;
G__347251.cljs$lang$applyTo = (function (arglist__347253){
var args = cljs.core.seq(arglist__347253);
return G__347251__delegate(args);
});
G__347251.cljs$core$IFn$_invoke$arity$variadic = G__347251__delegate;
return G__347251;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__347254__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__347254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__347255__i = 0, G__347255__a = new Array(arguments.length -  0);
while (G__347255__i < G__347255__a.length) {G__347255__a[G__347255__i] = arguments[G__347255__i + 0]; ++G__347255__i;}
  args = new cljs.core.IndexedSeq(G__347255__a,0);
} 
return G__347254__delegate.call(this,args);};
G__347254.cljs$lang$maxFixedArity = 0;
G__347254.cljs$lang$applyTo = (function (arglist__347256){
var args = cljs.core.seq(arglist__347256);
return G__347254__delegate(args);
});
G__347254.cljs$core$IFn$_invoke$arity$variadic = G__347254__delegate;
return G__347254;
})()
;

return null;
});
