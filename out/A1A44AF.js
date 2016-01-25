goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__236862__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__236862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__236863__i = 0, G__236863__a = new Array(arguments.length -  0);
while (G__236863__i < G__236863__a.length) {G__236863__a[G__236863__i] = arguments[G__236863__i + 0]; ++G__236863__i;}
  args = new cljs.core.IndexedSeq(G__236863__a,0);
} 
return G__236862__delegate.call(this,args);};
G__236862.cljs$lang$maxFixedArity = 0;
G__236862.cljs$lang$applyTo = (function (arglist__236864){
var args = cljs.core.seq(arglist__236864);
return G__236862__delegate(args);
});
G__236862.cljs$core$IFn$_invoke$arity$variadic = G__236862__delegate;
return G__236862;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__236865__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__236865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__236866__i = 0, G__236866__a = new Array(arguments.length -  0);
while (G__236866__i < G__236866__a.length) {G__236866__a[G__236866__i] = arguments[G__236866__i + 0]; ++G__236866__i;}
  args = new cljs.core.IndexedSeq(G__236866__a,0);
} 
return G__236865__delegate.call(this,args);};
G__236865.cljs$lang$maxFixedArity = 0;
G__236865.cljs$lang$applyTo = (function (arglist__236867){
var args = cljs.core.seq(arglist__236867);
return G__236865__delegate(args);
});
G__236865.cljs$core$IFn$_invoke$arity$variadic = G__236865__delegate;
return G__236865;
})()
;

return null;
});
