goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26445__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26446__i = 0, G__26446__a = new Array(arguments.length -  0);
while (G__26446__i < G__26446__a.length) {G__26446__a[G__26446__i] = arguments[G__26446__i + 0]; ++G__26446__i;}
  args = new cljs.core.IndexedSeq(G__26446__a,0);
} 
return G__26445__delegate.call(this,args);};
G__26445.cljs$lang$maxFixedArity = 0;
G__26445.cljs$lang$applyTo = (function (arglist__26447){
var args = cljs.core.seq(arglist__26447);
return G__26445__delegate(args);
});
G__26445.cljs$core$IFn$_invoke$arity$variadic = G__26445__delegate;
return G__26445;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26448__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26449__i = 0, G__26449__a = new Array(arguments.length -  0);
while (G__26449__i < G__26449__a.length) {G__26449__a[G__26449__i] = arguments[G__26449__i + 0]; ++G__26449__i;}
  args = new cljs.core.IndexedSeq(G__26449__a,0);
} 
return G__26448__delegate.call(this,args);};
G__26448.cljs$lang$maxFixedArity = 0;
G__26448.cljs$lang$applyTo = (function (arglist__26450){
var args = cljs.core.seq(arglist__26450);
return G__26448__delegate(args);
});
G__26448.cljs$core$IFn$_invoke$arity$variadic = G__26448__delegate;
return G__26448;
})()
;

return null;
});
