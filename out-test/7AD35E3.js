goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24287__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24288__i = 0, G__24288__a = new Array(arguments.length -  0);
while (G__24288__i < G__24288__a.length) {G__24288__a[G__24288__i] = arguments[G__24288__i + 0]; ++G__24288__i;}
  args = new cljs.core.IndexedSeq(G__24288__a,0);
} 
return G__24287__delegate.call(this,args);};
G__24287.cljs$lang$maxFixedArity = 0;
G__24287.cljs$lang$applyTo = (function (arglist__24289){
var args = cljs.core.seq(arglist__24289);
return G__24287__delegate(args);
});
G__24287.cljs$core$IFn$_invoke$arity$variadic = G__24287__delegate;
return G__24287;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24290__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24291__i = 0, G__24291__a = new Array(arguments.length -  0);
while (G__24291__i < G__24291__a.length) {G__24291__a[G__24291__i] = arguments[G__24291__i + 0]; ++G__24291__i;}
  args = new cljs.core.IndexedSeq(G__24291__a,0);
} 
return G__24290__delegate.call(this,args);};
G__24290.cljs$lang$maxFixedArity = 0;
G__24290.cljs$lang$applyTo = (function (arglist__24292){
var args = cljs.core.seq(arglist__24292);
return G__24290__delegate(args);
});
G__24290.cljs$core$IFn$_invoke$arity$variadic = G__24290__delegate;
return G__24290;
})()
;

return null;
});
