goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37412__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37413__i = 0, G__37413__a = new Array(arguments.length -  0);
while (G__37413__i < G__37413__a.length) {G__37413__a[G__37413__i] = arguments[G__37413__i + 0]; ++G__37413__i;}
  args = new cljs.core.IndexedSeq(G__37413__a,0);
} 
return G__37412__delegate.call(this,args);};
G__37412.cljs$lang$maxFixedArity = 0;
G__37412.cljs$lang$applyTo = (function (arglist__37414){
var args = cljs.core.seq(arglist__37414);
return G__37412__delegate(args);
});
G__37412.cljs$core$IFn$_invoke$arity$variadic = G__37412__delegate;
return G__37412;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37415__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37416__i = 0, G__37416__a = new Array(arguments.length -  0);
while (G__37416__i < G__37416__a.length) {G__37416__a[G__37416__i] = arguments[G__37416__i + 0]; ++G__37416__i;}
  args = new cljs.core.IndexedSeq(G__37416__a,0);
} 
return G__37415__delegate.call(this,args);};
G__37415.cljs$lang$maxFixedArity = 0;
G__37415.cljs$lang$applyTo = (function (arglist__37417){
var args = cljs.core.seq(arglist__37417);
return G__37415__delegate(args);
});
G__37415.cljs$core$IFn$_invoke$arity$variadic = G__37415__delegate;
return G__37415;
})()
;

return null;
});
