goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54982__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54983__i = 0, G__54983__a = new Array(arguments.length -  0);
while (G__54983__i < G__54983__a.length) {G__54983__a[G__54983__i] = arguments[G__54983__i + 0]; ++G__54983__i;}
  args = new cljs.core.IndexedSeq(G__54983__a,0);
} 
return G__54982__delegate.call(this,args);};
G__54982.cljs$lang$maxFixedArity = 0;
G__54982.cljs$lang$applyTo = (function (arglist__54984){
var args = cljs.core.seq(arglist__54984);
return G__54982__delegate(args);
});
G__54982.cljs$core$IFn$_invoke$arity$variadic = G__54982__delegate;
return G__54982;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54985__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54986__i = 0, G__54986__a = new Array(arguments.length -  0);
while (G__54986__i < G__54986__a.length) {G__54986__a[G__54986__i] = arguments[G__54986__i + 0]; ++G__54986__i;}
  args = new cljs.core.IndexedSeq(G__54986__a,0);
} 
return G__54985__delegate.call(this,args);};
G__54985.cljs$lang$maxFixedArity = 0;
G__54985.cljs$lang$applyTo = (function (arglist__54987){
var args = cljs.core.seq(arglist__54987);
return G__54985__delegate(args);
});
G__54985.cljs$core$IFn$_invoke$arity$variadic = G__54985__delegate;
return G__54985;
})()
;

return null;
});
