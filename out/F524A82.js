goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__290275__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__290275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290276__i = 0, G__290276__a = new Array(arguments.length -  0);
while (G__290276__i < G__290276__a.length) {G__290276__a[G__290276__i] = arguments[G__290276__i + 0]; ++G__290276__i;}
  args = new cljs.core.IndexedSeq(G__290276__a,0);
} 
return G__290275__delegate.call(this,args);};
G__290275.cljs$lang$maxFixedArity = 0;
G__290275.cljs$lang$applyTo = (function (arglist__290277){
var args = cljs.core.seq(arglist__290277);
return G__290275__delegate(args);
});
G__290275.cljs$core$IFn$_invoke$arity$variadic = G__290275__delegate;
return G__290275;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__290278__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__290278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290279__i = 0, G__290279__a = new Array(arguments.length -  0);
while (G__290279__i < G__290279__a.length) {G__290279__a[G__290279__i] = arguments[G__290279__i + 0]; ++G__290279__i;}
  args = new cljs.core.IndexedSeq(G__290279__a,0);
} 
return G__290278__delegate.call(this,args);};
G__290278.cljs$lang$maxFixedArity = 0;
G__290278.cljs$lang$applyTo = (function (arglist__290280){
var args = cljs.core.seq(arglist__290280);
return G__290278__delegate(args);
});
G__290278.cljs$core$IFn$_invoke$arity$variadic = G__290278__delegate;
return G__290278;
})()
;

return null;
});
