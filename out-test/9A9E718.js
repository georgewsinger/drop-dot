goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36578__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36579__i = 0, G__36579__a = new Array(arguments.length -  0);
while (G__36579__i < G__36579__a.length) {G__36579__a[G__36579__i] = arguments[G__36579__i + 0]; ++G__36579__i;}
  args = new cljs.core.IndexedSeq(G__36579__a,0);
} 
return G__36578__delegate.call(this,args);};
G__36578.cljs$lang$maxFixedArity = 0;
G__36578.cljs$lang$applyTo = (function (arglist__36580){
var args = cljs.core.seq(arglist__36580);
return G__36578__delegate(args);
});
G__36578.cljs$core$IFn$_invoke$arity$variadic = G__36578__delegate;
return G__36578;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36581__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36582__i = 0, G__36582__a = new Array(arguments.length -  0);
while (G__36582__i < G__36582__a.length) {G__36582__a[G__36582__i] = arguments[G__36582__i + 0]; ++G__36582__i;}
  args = new cljs.core.IndexedSeq(G__36582__a,0);
} 
return G__36581__delegate.call(this,args);};
G__36581.cljs$lang$maxFixedArity = 0;
G__36581.cljs$lang$applyTo = (function (arglist__36583){
var args = cljs.core.seq(arglist__36583);
return G__36581__delegate(args);
});
G__36581.cljs$core$IFn$_invoke$arity$variadic = G__36581__delegate;
return G__36581;
})()
;

return null;
});
