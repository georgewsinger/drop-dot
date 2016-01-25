goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56873__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56874__i = 0, G__56874__a = new Array(arguments.length -  0);
while (G__56874__i < G__56874__a.length) {G__56874__a[G__56874__i] = arguments[G__56874__i + 0]; ++G__56874__i;}
  args = new cljs.core.IndexedSeq(G__56874__a,0);
} 
return G__56873__delegate.call(this,args);};
G__56873.cljs$lang$maxFixedArity = 0;
G__56873.cljs$lang$applyTo = (function (arglist__56875){
var args = cljs.core.seq(arglist__56875);
return G__56873__delegate(args);
});
G__56873.cljs$core$IFn$_invoke$arity$variadic = G__56873__delegate;
return G__56873;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56876__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56877__i = 0, G__56877__a = new Array(arguments.length -  0);
while (G__56877__i < G__56877__a.length) {G__56877__a[G__56877__i] = arguments[G__56877__i + 0]; ++G__56877__i;}
  args = new cljs.core.IndexedSeq(G__56877__a,0);
} 
return G__56876__delegate.call(this,args);};
G__56876.cljs$lang$maxFixedArity = 0;
G__56876.cljs$lang$applyTo = (function (arglist__56878){
var args = cljs.core.seq(arglist__56878);
return G__56876__delegate(args);
});
G__56876.cljs$core$IFn$_invoke$arity$variadic = G__56876__delegate;
return G__56876;
})()
;

return null;
});
