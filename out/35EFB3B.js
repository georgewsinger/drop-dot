goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__273298__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__273298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__273299__i = 0, G__273299__a = new Array(arguments.length -  0);
while (G__273299__i < G__273299__a.length) {G__273299__a[G__273299__i] = arguments[G__273299__i + 0]; ++G__273299__i;}
  args = new cljs.core.IndexedSeq(G__273299__a,0);
} 
return G__273298__delegate.call(this,args);};
G__273298.cljs$lang$maxFixedArity = 0;
G__273298.cljs$lang$applyTo = (function (arglist__273300){
var args = cljs.core.seq(arglist__273300);
return G__273298__delegate(args);
});
G__273298.cljs$core$IFn$_invoke$arity$variadic = G__273298__delegate;
return G__273298;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__273301__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__273301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__273302__i = 0, G__273302__a = new Array(arguments.length -  0);
while (G__273302__i < G__273302__a.length) {G__273302__a[G__273302__i] = arguments[G__273302__i + 0]; ++G__273302__i;}
  args = new cljs.core.IndexedSeq(G__273302__a,0);
} 
return G__273301__delegate.call(this,args);};
G__273301.cljs$lang$maxFixedArity = 0;
G__273301.cljs$lang$applyTo = (function (arglist__273303){
var args = cljs.core.seq(arglist__273303);
return G__273301__delegate(args);
});
G__273301.cljs$core$IFn$_invoke$arity$variadic = G__273301__delegate;
return G__273301;
})()
;

return null;
});
