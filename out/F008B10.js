goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__143984__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__143984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143985__i = 0, G__143985__a = new Array(arguments.length -  0);
while (G__143985__i < G__143985__a.length) {G__143985__a[G__143985__i] = arguments[G__143985__i + 0]; ++G__143985__i;}
  args = new cljs.core.IndexedSeq(G__143985__a,0);
} 
return G__143984__delegate.call(this,args);};
G__143984.cljs$lang$maxFixedArity = 0;
G__143984.cljs$lang$applyTo = (function (arglist__143986){
var args = cljs.core.seq(arglist__143986);
return G__143984__delegate(args);
});
G__143984.cljs$core$IFn$_invoke$arity$variadic = G__143984__delegate;
return G__143984;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__143987__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__143987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143988__i = 0, G__143988__a = new Array(arguments.length -  0);
while (G__143988__i < G__143988__a.length) {G__143988__a[G__143988__i] = arguments[G__143988__i + 0]; ++G__143988__i;}
  args = new cljs.core.IndexedSeq(G__143988__a,0);
} 
return G__143987__delegate.call(this,args);};
G__143987.cljs$lang$maxFixedArity = 0;
G__143987.cljs$lang$applyTo = (function (arglist__143989){
var args = cljs.core.seq(arglist__143989);
return G__143987__delegate(args);
});
G__143987.cljs$core$IFn$_invoke$arity$variadic = G__143987__delegate;
return G__143987;
})()
;

return null;
});
