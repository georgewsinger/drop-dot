goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__251199__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__251199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__251200__i = 0, G__251200__a = new Array(arguments.length -  0);
while (G__251200__i < G__251200__a.length) {G__251200__a[G__251200__i] = arguments[G__251200__i + 0]; ++G__251200__i;}
  args = new cljs.core.IndexedSeq(G__251200__a,0);
} 
return G__251199__delegate.call(this,args);};
G__251199.cljs$lang$maxFixedArity = 0;
G__251199.cljs$lang$applyTo = (function (arglist__251201){
var args = cljs.core.seq(arglist__251201);
return G__251199__delegate(args);
});
G__251199.cljs$core$IFn$_invoke$arity$variadic = G__251199__delegate;
return G__251199;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__251202__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__251202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__251203__i = 0, G__251203__a = new Array(arguments.length -  0);
while (G__251203__i < G__251203__a.length) {G__251203__a[G__251203__i] = arguments[G__251203__i + 0]; ++G__251203__i;}
  args = new cljs.core.IndexedSeq(G__251203__a,0);
} 
return G__251202__delegate.call(this,args);};
G__251202.cljs$lang$maxFixedArity = 0;
G__251202.cljs$lang$applyTo = (function (arglist__251204){
var args = cljs.core.seq(arglist__251204);
return G__251202__delegate(args);
});
G__251202.cljs$core$IFn$_invoke$arity$variadic = G__251202__delegate;
return G__251202;
})()
;

return null;
});
