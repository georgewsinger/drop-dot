goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13207__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13208__i = 0, G__13208__a = new Array(arguments.length -  0);
while (G__13208__i < G__13208__a.length) {G__13208__a[G__13208__i] = arguments[G__13208__i + 0]; ++G__13208__i;}
  args = new cljs.core.IndexedSeq(G__13208__a,0);
} 
return G__13207__delegate.call(this,args);};
G__13207.cljs$lang$maxFixedArity = 0;
G__13207.cljs$lang$applyTo = (function (arglist__13209){
var args = cljs.core.seq(arglist__13209);
return G__13207__delegate(args);
});
G__13207.cljs$core$IFn$_invoke$arity$variadic = G__13207__delegate;
return G__13207;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13210__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13211__i = 0, G__13211__a = new Array(arguments.length -  0);
while (G__13211__i < G__13211__a.length) {G__13211__a[G__13211__i] = arguments[G__13211__i + 0]; ++G__13211__i;}
  args = new cljs.core.IndexedSeq(G__13211__a,0);
} 
return G__13210__delegate.call(this,args);};
G__13210.cljs$lang$maxFixedArity = 0;
G__13210.cljs$lang$applyTo = (function (arglist__13212){
var args = cljs.core.seq(arglist__13212);
return G__13210__delegate(args);
});
G__13210.cljs$core$IFn$_invoke$arity$variadic = G__13210__delegate;
return G__13210;
})()
;

return null;
});
