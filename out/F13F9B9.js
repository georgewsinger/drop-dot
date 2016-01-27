goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__358843__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__358843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__358844__i = 0, G__358844__a = new Array(arguments.length -  0);
while (G__358844__i < G__358844__a.length) {G__358844__a[G__358844__i] = arguments[G__358844__i + 0]; ++G__358844__i;}
  args = new cljs.core.IndexedSeq(G__358844__a,0);
} 
return G__358843__delegate.call(this,args);};
G__358843.cljs$lang$maxFixedArity = 0;
G__358843.cljs$lang$applyTo = (function (arglist__358845){
var args = cljs.core.seq(arglist__358845);
return G__358843__delegate(args);
});
G__358843.cljs$core$IFn$_invoke$arity$variadic = G__358843__delegate;
return G__358843;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__358846__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__358846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__358847__i = 0, G__358847__a = new Array(arguments.length -  0);
while (G__358847__i < G__358847__a.length) {G__358847__a[G__358847__i] = arguments[G__358847__i + 0]; ++G__358847__i;}
  args = new cljs.core.IndexedSeq(G__358847__a,0);
} 
return G__358846__delegate.call(this,args);};
G__358846.cljs$lang$maxFixedArity = 0;
G__358846.cljs$lang$applyTo = (function (arglist__358848){
var args = cljs.core.seq(arglist__358848);
return G__358846__delegate(args);
});
G__358846.cljs$core$IFn$_invoke$arity$variadic = G__358846__delegate;
return G__358846;
})()
;

return null;
});
