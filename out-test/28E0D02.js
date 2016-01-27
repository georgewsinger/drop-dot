goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43786__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43787__i = 0, G__43787__a = new Array(arguments.length -  0);
while (G__43787__i < G__43787__a.length) {G__43787__a[G__43787__i] = arguments[G__43787__i + 0]; ++G__43787__i;}
  args = new cljs.core.IndexedSeq(G__43787__a,0);
} 
return G__43786__delegate.call(this,args);};
G__43786.cljs$lang$maxFixedArity = 0;
G__43786.cljs$lang$applyTo = (function (arglist__43788){
var args = cljs.core.seq(arglist__43788);
return G__43786__delegate(args);
});
G__43786.cljs$core$IFn$_invoke$arity$variadic = G__43786__delegate;
return G__43786;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43789__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43790__i = 0, G__43790__a = new Array(arguments.length -  0);
while (G__43790__i < G__43790__a.length) {G__43790__a[G__43790__i] = arguments[G__43790__i + 0]; ++G__43790__i;}
  args = new cljs.core.IndexedSeq(G__43790__a,0);
} 
return G__43789__delegate.call(this,args);};
G__43789.cljs$lang$maxFixedArity = 0;
G__43789.cljs$lang$applyTo = (function (arglist__43791){
var args = cljs.core.seq(arglist__43791);
return G__43789__delegate(args);
});
G__43789.cljs$core$IFn$_invoke$arity$variadic = G__43789__delegate;
return G__43789;
})()
;

return null;
});
