goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__309929__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__309929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__309930__i = 0, G__309930__a = new Array(arguments.length -  0);
while (G__309930__i < G__309930__a.length) {G__309930__a[G__309930__i] = arguments[G__309930__i + 0]; ++G__309930__i;}
  args = new cljs.core.IndexedSeq(G__309930__a,0);
} 
return G__309929__delegate.call(this,args);};
G__309929.cljs$lang$maxFixedArity = 0;
G__309929.cljs$lang$applyTo = (function (arglist__309931){
var args = cljs.core.seq(arglist__309931);
return G__309929__delegate(args);
});
G__309929.cljs$core$IFn$_invoke$arity$variadic = G__309929__delegate;
return G__309929;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__309932__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__309932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__309933__i = 0, G__309933__a = new Array(arguments.length -  0);
while (G__309933__i < G__309933__a.length) {G__309933__a[G__309933__i] = arguments[G__309933__i + 0]; ++G__309933__i;}
  args = new cljs.core.IndexedSeq(G__309933__a,0);
} 
return G__309932__delegate.call(this,args);};
G__309932.cljs$lang$maxFixedArity = 0;
G__309932.cljs$lang$applyTo = (function (arglist__309934){
var args = cljs.core.seq(arglist__309934);
return G__309932__delegate(args);
});
G__309932.cljs$core$IFn$_invoke$arity$variadic = G__309932__delegate;
return G__309932;
})()
;

return null;
});
