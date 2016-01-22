goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20284__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20285__i = 0, G__20285__a = new Array(arguments.length -  0);
while (G__20285__i < G__20285__a.length) {G__20285__a[G__20285__i] = arguments[G__20285__i + 0]; ++G__20285__i;}
  args = new cljs.core.IndexedSeq(G__20285__a,0);
} 
return G__20284__delegate.call(this,args);};
G__20284.cljs$lang$maxFixedArity = 0;
G__20284.cljs$lang$applyTo = (function (arglist__20286){
var args = cljs.core.seq(arglist__20286);
return G__20284__delegate(args);
});
G__20284.cljs$core$IFn$_invoke$arity$variadic = G__20284__delegate;
return G__20284;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20287__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20288__i = 0, G__20288__a = new Array(arguments.length -  0);
while (G__20288__i < G__20288__a.length) {G__20288__a[G__20288__i] = arguments[G__20288__i + 0]; ++G__20288__i;}
  args = new cljs.core.IndexedSeq(G__20288__a,0);
} 
return G__20287__delegate.call(this,args);};
G__20287.cljs$lang$maxFixedArity = 0;
G__20287.cljs$lang$applyTo = (function (arglist__20289){
var args = cljs.core.seq(arglist__20289);
return G__20287__delegate(args);
});
G__20287.cljs$core$IFn$_invoke$arity$variadic = G__20287__delegate;
return G__20287;
})()
;

return null;
});
