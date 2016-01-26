goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26401__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26402__i = 0, G__26402__a = new Array(arguments.length -  0);
while (G__26402__i < G__26402__a.length) {G__26402__a[G__26402__i] = arguments[G__26402__i + 0]; ++G__26402__i;}
  args = new cljs.core.IndexedSeq(G__26402__a,0);
} 
return G__26401__delegate.call(this,args);};
G__26401.cljs$lang$maxFixedArity = 0;
G__26401.cljs$lang$applyTo = (function (arglist__26403){
var args = cljs.core.seq(arglist__26403);
return G__26401__delegate(args);
});
G__26401.cljs$core$IFn$_invoke$arity$variadic = G__26401__delegate;
return G__26401;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26404__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26405__i = 0, G__26405__a = new Array(arguments.length -  0);
while (G__26405__i < G__26405__a.length) {G__26405__a[G__26405__i] = arguments[G__26405__i + 0]; ++G__26405__i;}
  args = new cljs.core.IndexedSeq(G__26405__a,0);
} 
return G__26404__delegate.call(this,args);};
G__26404.cljs$lang$maxFixedArity = 0;
G__26404.cljs$lang$applyTo = (function (arglist__26406){
var args = cljs.core.seq(arglist__26406);
return G__26404__delegate(args);
});
G__26404.cljs$core$IFn$_invoke$arity$variadic = G__26404__delegate;
return G__26404;
})()
;

return null;
});
