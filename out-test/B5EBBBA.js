goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__127689__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__127689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__127690__i = 0, G__127690__a = new Array(arguments.length -  0);
while (G__127690__i < G__127690__a.length) {G__127690__a[G__127690__i] = arguments[G__127690__i + 0]; ++G__127690__i;}
  args = new cljs.core.IndexedSeq(G__127690__a,0);
} 
return G__127689__delegate.call(this,args);};
G__127689.cljs$lang$maxFixedArity = 0;
G__127689.cljs$lang$applyTo = (function (arglist__127691){
var args = cljs.core.seq(arglist__127691);
return G__127689__delegate(args);
});
G__127689.cljs$core$IFn$_invoke$arity$variadic = G__127689__delegate;
return G__127689;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__127692__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__127692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__127693__i = 0, G__127693__a = new Array(arguments.length -  0);
while (G__127693__i < G__127693__a.length) {G__127693__a[G__127693__i] = arguments[G__127693__i + 0]; ++G__127693__i;}
  args = new cljs.core.IndexedSeq(G__127693__a,0);
} 
return G__127692__delegate.call(this,args);};
G__127692.cljs$lang$maxFixedArity = 0;
G__127692.cljs$lang$applyTo = (function (arglist__127694){
var args = cljs.core.seq(arglist__127694);
return G__127692__delegate(args);
});
G__127692.cljs$core$IFn$_invoke$arity$variadic = G__127692__delegate;
return G__127692;
})()
;

return null;
});
