goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44172__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44173__i = 0, G__44173__a = new Array(arguments.length -  0);
while (G__44173__i < G__44173__a.length) {G__44173__a[G__44173__i] = arguments[G__44173__i + 0]; ++G__44173__i;}
  args = new cljs.core.IndexedSeq(G__44173__a,0);
} 
return G__44172__delegate.call(this,args);};
G__44172.cljs$lang$maxFixedArity = 0;
G__44172.cljs$lang$applyTo = (function (arglist__44174){
var args = cljs.core.seq(arglist__44174);
return G__44172__delegate(args);
});
G__44172.cljs$core$IFn$_invoke$arity$variadic = G__44172__delegate;
return G__44172;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44175__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44176__i = 0, G__44176__a = new Array(arguments.length -  0);
while (G__44176__i < G__44176__a.length) {G__44176__a[G__44176__i] = arguments[G__44176__i + 0]; ++G__44176__i;}
  args = new cljs.core.IndexedSeq(G__44176__a,0);
} 
return G__44175__delegate.call(this,args);};
G__44175.cljs$lang$maxFixedArity = 0;
G__44175.cljs$lang$applyTo = (function (arglist__44177){
var args = cljs.core.seq(arglist__44177);
return G__44175__delegate(args);
});
G__44175.cljs$core$IFn$_invoke$arity$variadic = G__44175__delegate;
return G__44175;
})()
;

return null;
});
