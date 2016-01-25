goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__113568__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__113568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__113569__i = 0, G__113569__a = new Array(arguments.length -  0);
while (G__113569__i < G__113569__a.length) {G__113569__a[G__113569__i] = arguments[G__113569__i + 0]; ++G__113569__i;}
  args = new cljs.core.IndexedSeq(G__113569__a,0);
} 
return G__113568__delegate.call(this,args);};
G__113568.cljs$lang$maxFixedArity = 0;
G__113568.cljs$lang$applyTo = (function (arglist__113570){
var args = cljs.core.seq(arglist__113570);
return G__113568__delegate(args);
});
G__113568.cljs$core$IFn$_invoke$arity$variadic = G__113568__delegate;
return G__113568;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__113571__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__113571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__113572__i = 0, G__113572__a = new Array(arguments.length -  0);
while (G__113572__i < G__113572__a.length) {G__113572__a[G__113572__i] = arguments[G__113572__i + 0]; ++G__113572__i;}
  args = new cljs.core.IndexedSeq(G__113572__a,0);
} 
return G__113571__delegate.call(this,args);};
G__113571.cljs$lang$maxFixedArity = 0;
G__113571.cljs$lang$applyTo = (function (arglist__113573){
var args = cljs.core.seq(arglist__113573);
return G__113571__delegate(args);
});
G__113571.cljs$core$IFn$_invoke$arity$variadic = G__113571__delegate;
return G__113571;
})()
;

return null;
});
