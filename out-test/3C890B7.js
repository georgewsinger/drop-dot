goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16929__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16930__i = 0, G__16930__a = new Array(arguments.length -  0);
while (G__16930__i < G__16930__a.length) {G__16930__a[G__16930__i] = arguments[G__16930__i + 0]; ++G__16930__i;}
  args = new cljs.core.IndexedSeq(G__16930__a,0);
} 
return G__16929__delegate.call(this,args);};
G__16929.cljs$lang$maxFixedArity = 0;
G__16929.cljs$lang$applyTo = (function (arglist__16931){
var args = cljs.core.seq(arglist__16931);
return G__16929__delegate(args);
});
G__16929.cljs$core$IFn$_invoke$arity$variadic = G__16929__delegate;
return G__16929;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16932__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16933__i = 0, G__16933__a = new Array(arguments.length -  0);
while (G__16933__i < G__16933__a.length) {G__16933__a[G__16933__i] = arguments[G__16933__i + 0]; ++G__16933__i;}
  args = new cljs.core.IndexedSeq(G__16933__a,0);
} 
return G__16932__delegate.call(this,args);};
G__16932.cljs$lang$maxFixedArity = 0;
G__16932.cljs$lang$applyTo = (function (arglist__16934){
var args = cljs.core.seq(arglist__16934);
return G__16932__delegate(args);
});
G__16932.cljs$core$IFn$_invoke$arity$variadic = G__16932__delegate;
return G__16932;
})()
;

return null;
});
