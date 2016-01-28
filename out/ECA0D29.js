goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__369920__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__369920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__369921__i = 0, G__369921__a = new Array(arguments.length -  0);
while (G__369921__i < G__369921__a.length) {G__369921__a[G__369921__i] = arguments[G__369921__i + 0]; ++G__369921__i;}
  args = new cljs.core.IndexedSeq(G__369921__a,0);
} 
return G__369920__delegate.call(this,args);};
G__369920.cljs$lang$maxFixedArity = 0;
G__369920.cljs$lang$applyTo = (function (arglist__369922){
var args = cljs.core.seq(arglist__369922);
return G__369920__delegate(args);
});
G__369920.cljs$core$IFn$_invoke$arity$variadic = G__369920__delegate;
return G__369920;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__369923__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__369923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__369924__i = 0, G__369924__a = new Array(arguments.length -  0);
while (G__369924__i < G__369924__a.length) {G__369924__a[G__369924__i] = arguments[G__369924__i + 0]; ++G__369924__i;}
  args = new cljs.core.IndexedSeq(G__369924__a,0);
} 
return G__369923__delegate.call(this,args);};
G__369923.cljs$lang$maxFixedArity = 0;
G__369923.cljs$lang$applyTo = (function (arglist__369925){
var args = cljs.core.seq(arglist__369925);
return G__369923__delegate(args);
});
G__369923.cljs$core$IFn$_invoke$arity$variadic = G__369923__delegate;
return G__369923;
})()
;

return null;
});
