goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26402__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26403__i = 0, G__26403__a = new Array(arguments.length -  0);
while (G__26403__i < G__26403__a.length) {G__26403__a[G__26403__i] = arguments[G__26403__i + 0]; ++G__26403__i;}
  args = new cljs.core.IndexedSeq(G__26403__a,0);
} 
return G__26402__delegate.call(this,args);};
G__26402.cljs$lang$maxFixedArity = 0;
G__26402.cljs$lang$applyTo = (function (arglist__26404){
var args = cljs.core.seq(arglist__26404);
return G__26402__delegate(args);
});
G__26402.cljs$core$IFn$_invoke$arity$variadic = G__26402__delegate;
return G__26402;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26405__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26406__i = 0, G__26406__a = new Array(arguments.length -  0);
while (G__26406__i < G__26406__a.length) {G__26406__a[G__26406__i] = arguments[G__26406__i + 0]; ++G__26406__i;}
  args = new cljs.core.IndexedSeq(G__26406__a,0);
} 
return G__26405__delegate.call(this,args);};
G__26405.cljs$lang$maxFixedArity = 0;
G__26405.cljs$lang$applyTo = (function (arglist__26407){
var args = cljs.core.seq(arglist__26407);
return G__26405__delegate(args);
});
G__26405.cljs$core$IFn$_invoke$arity$variadic = G__26405__delegate;
return G__26405;
})()
;

return null;
});
