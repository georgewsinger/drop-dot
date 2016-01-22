goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19929__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19930__i = 0, G__19930__a = new Array(arguments.length -  0);
while (G__19930__i < G__19930__a.length) {G__19930__a[G__19930__i] = arguments[G__19930__i + 0]; ++G__19930__i;}
  args = new cljs.core.IndexedSeq(G__19930__a,0);
} 
return G__19929__delegate.call(this,args);};
G__19929.cljs$lang$maxFixedArity = 0;
G__19929.cljs$lang$applyTo = (function (arglist__19931){
var args = cljs.core.seq(arglist__19931);
return G__19929__delegate(args);
});
G__19929.cljs$core$IFn$_invoke$arity$variadic = G__19929__delegate;
return G__19929;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19932__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19933__i = 0, G__19933__a = new Array(arguments.length -  0);
while (G__19933__i < G__19933__a.length) {G__19933__a[G__19933__i] = arguments[G__19933__i + 0]; ++G__19933__i;}
  args = new cljs.core.IndexedSeq(G__19933__a,0);
} 
return G__19932__delegate.call(this,args);};
G__19932.cljs$lang$maxFixedArity = 0;
G__19932.cljs$lang$applyTo = (function (arglist__19934){
var args = cljs.core.seq(arglist__19934);
return G__19932__delegate(args);
});
G__19932.cljs$core$IFn$_invoke$arity$variadic = G__19932__delegate;
return G__19932;
})()
;

return null;
});
