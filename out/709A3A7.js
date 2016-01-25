goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__88506__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__88506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88507__i = 0, G__88507__a = new Array(arguments.length -  0);
while (G__88507__i < G__88507__a.length) {G__88507__a[G__88507__i] = arguments[G__88507__i + 0]; ++G__88507__i;}
  args = new cljs.core.IndexedSeq(G__88507__a,0);
} 
return G__88506__delegate.call(this,args);};
G__88506.cljs$lang$maxFixedArity = 0;
G__88506.cljs$lang$applyTo = (function (arglist__88508){
var args = cljs.core.seq(arglist__88508);
return G__88506__delegate(args);
});
G__88506.cljs$core$IFn$_invoke$arity$variadic = G__88506__delegate;
return G__88506;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__88509__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__88509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88510__i = 0, G__88510__a = new Array(arguments.length -  0);
while (G__88510__i < G__88510__a.length) {G__88510__a[G__88510__i] = arguments[G__88510__i + 0]; ++G__88510__i;}
  args = new cljs.core.IndexedSeq(G__88510__a,0);
} 
return G__88509__delegate.call(this,args);};
G__88509.cljs$lang$maxFixedArity = 0;
G__88509.cljs$lang$applyTo = (function (arglist__88511){
var args = cljs.core.seq(arglist__88511);
return G__88509__delegate(args);
});
G__88509.cljs$core$IFn$_invoke$arity$variadic = G__88509__delegate;
return G__88509;
})()
;

return null;
});
