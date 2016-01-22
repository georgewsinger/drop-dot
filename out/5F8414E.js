goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11019__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11020__i = 0, G__11020__a = new Array(arguments.length -  0);
while (G__11020__i < G__11020__a.length) {G__11020__a[G__11020__i] = arguments[G__11020__i + 0]; ++G__11020__i;}
  args = new cljs.core.IndexedSeq(G__11020__a,0);
} 
return G__11019__delegate.call(this,args);};
G__11019.cljs$lang$maxFixedArity = 0;
G__11019.cljs$lang$applyTo = (function (arglist__11021){
var args = cljs.core.seq(arglist__11021);
return G__11019__delegate(args);
});
G__11019.cljs$core$IFn$_invoke$arity$variadic = G__11019__delegate;
return G__11019;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11022__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11023__i = 0, G__11023__a = new Array(arguments.length -  0);
while (G__11023__i < G__11023__a.length) {G__11023__a[G__11023__i] = arguments[G__11023__i + 0]; ++G__11023__i;}
  args = new cljs.core.IndexedSeq(G__11023__a,0);
} 
return G__11022__delegate.call(this,args);};
G__11022.cljs$lang$maxFixedArity = 0;
G__11022.cljs$lang$applyTo = (function (arglist__11024){
var args = cljs.core.seq(arglist__11024);
return G__11022__delegate(args);
});
G__11022.cljs$core$IFn$_invoke$arity$variadic = G__11022__delegate;
return G__11022;
})()
;

return null;
});
