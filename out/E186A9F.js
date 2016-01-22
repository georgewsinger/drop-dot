goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22633__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22634__i = 0, G__22634__a = new Array(arguments.length -  0);
while (G__22634__i < G__22634__a.length) {G__22634__a[G__22634__i] = arguments[G__22634__i + 0]; ++G__22634__i;}
  args = new cljs.core.IndexedSeq(G__22634__a,0);
} 
return G__22633__delegate.call(this,args);};
G__22633.cljs$lang$maxFixedArity = 0;
G__22633.cljs$lang$applyTo = (function (arglist__22635){
var args = cljs.core.seq(arglist__22635);
return G__22633__delegate(args);
});
G__22633.cljs$core$IFn$_invoke$arity$variadic = G__22633__delegate;
return G__22633;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22636__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22637__i = 0, G__22637__a = new Array(arguments.length -  0);
while (G__22637__i < G__22637__a.length) {G__22637__a[G__22637__i] = arguments[G__22637__i + 0]; ++G__22637__i;}
  args = new cljs.core.IndexedSeq(G__22637__a,0);
} 
return G__22636__delegate.call(this,args);};
G__22636.cljs$lang$maxFixedArity = 0;
G__22636.cljs$lang$applyTo = (function (arglist__22638){
var args = cljs.core.seq(arglist__22638);
return G__22636__delegate(args);
});
G__22636.cljs$core$IFn$_invoke$arity$variadic = G__22636__delegate;
return G__22636;
})()
;

return null;
});
