goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65085__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65086__i = 0, G__65086__a = new Array(arguments.length -  0);
while (G__65086__i < G__65086__a.length) {G__65086__a[G__65086__i] = arguments[G__65086__i + 0]; ++G__65086__i;}
  args = new cljs.core.IndexedSeq(G__65086__a,0);
} 
return G__65085__delegate.call(this,args);};
G__65085.cljs$lang$maxFixedArity = 0;
G__65085.cljs$lang$applyTo = (function (arglist__65087){
var args = cljs.core.seq(arglist__65087);
return G__65085__delegate(args);
});
G__65085.cljs$core$IFn$_invoke$arity$variadic = G__65085__delegate;
return G__65085;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65088__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65089__i = 0, G__65089__a = new Array(arguments.length -  0);
while (G__65089__i < G__65089__a.length) {G__65089__a[G__65089__i] = arguments[G__65089__i + 0]; ++G__65089__i;}
  args = new cljs.core.IndexedSeq(G__65089__a,0);
} 
return G__65088__delegate.call(this,args);};
G__65088.cljs$lang$maxFixedArity = 0;
G__65088.cljs$lang$applyTo = (function (arglist__65090){
var args = cljs.core.seq(arglist__65090);
return G__65088__delegate(args);
});
G__65088.cljs$core$IFn$_invoke$arity$variadic = G__65088__delegate;
return G__65088;
})()
;

return null;
});
