goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__114278__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__114278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__114279__i = 0, G__114279__a = new Array(arguments.length -  0);
while (G__114279__i < G__114279__a.length) {G__114279__a[G__114279__i] = arguments[G__114279__i + 0]; ++G__114279__i;}
  args = new cljs.core.IndexedSeq(G__114279__a,0);
} 
return G__114278__delegate.call(this,args);};
G__114278.cljs$lang$maxFixedArity = 0;
G__114278.cljs$lang$applyTo = (function (arglist__114280){
var args = cljs.core.seq(arglist__114280);
return G__114278__delegate(args);
});
G__114278.cljs$core$IFn$_invoke$arity$variadic = G__114278__delegate;
return G__114278;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__114281__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__114281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__114282__i = 0, G__114282__a = new Array(arguments.length -  0);
while (G__114282__i < G__114282__a.length) {G__114282__a[G__114282__i] = arguments[G__114282__i + 0]; ++G__114282__i;}
  args = new cljs.core.IndexedSeq(G__114282__a,0);
} 
return G__114281__delegate.call(this,args);};
G__114281.cljs$lang$maxFixedArity = 0;
G__114281.cljs$lang$applyTo = (function (arglist__114283){
var args = cljs.core.seq(arglist__114283);
return G__114281__delegate(args);
});
G__114281.cljs$core$IFn$_invoke$arity$variadic = G__114281__delegate;
return G__114281;
})()
;

return null;
});
