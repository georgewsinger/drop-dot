goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__386689__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__386689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__386690__i = 0, G__386690__a = new Array(arguments.length -  0);
while (G__386690__i < G__386690__a.length) {G__386690__a[G__386690__i] = arguments[G__386690__i + 0]; ++G__386690__i;}
  args = new cljs.core.IndexedSeq(G__386690__a,0);
} 
return G__386689__delegate.call(this,args);};
G__386689.cljs$lang$maxFixedArity = 0;
G__386689.cljs$lang$applyTo = (function (arglist__386691){
var args = cljs.core.seq(arglist__386691);
return G__386689__delegate(args);
});
G__386689.cljs$core$IFn$_invoke$arity$variadic = G__386689__delegate;
return G__386689;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__386692__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__386692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__386693__i = 0, G__386693__a = new Array(arguments.length -  0);
while (G__386693__i < G__386693__a.length) {G__386693__a[G__386693__i] = arguments[G__386693__i + 0]; ++G__386693__i;}
  args = new cljs.core.IndexedSeq(G__386693__a,0);
} 
return G__386692__delegate.call(this,args);};
G__386692.cljs$lang$maxFixedArity = 0;
G__386692.cljs$lang$applyTo = (function (arglist__386694){
var args = cljs.core.seq(arglist__386694);
return G__386692__delegate(args);
});
G__386692.cljs$core$IFn$_invoke$arity$variadic = G__386692__delegate;
return G__386692;
})()
;

return null;
});
