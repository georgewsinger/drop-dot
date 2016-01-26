goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__290965__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__290965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290966__i = 0, G__290966__a = new Array(arguments.length -  0);
while (G__290966__i < G__290966__a.length) {G__290966__a[G__290966__i] = arguments[G__290966__i + 0]; ++G__290966__i;}
  args = new cljs.core.IndexedSeq(G__290966__a,0);
} 
return G__290965__delegate.call(this,args);};
G__290965.cljs$lang$maxFixedArity = 0;
G__290965.cljs$lang$applyTo = (function (arglist__290967){
var args = cljs.core.seq(arglist__290967);
return G__290965__delegate(args);
});
G__290965.cljs$core$IFn$_invoke$arity$variadic = G__290965__delegate;
return G__290965;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__290968__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__290968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290969__i = 0, G__290969__a = new Array(arguments.length -  0);
while (G__290969__i < G__290969__a.length) {G__290969__a[G__290969__i] = arguments[G__290969__i + 0]; ++G__290969__i;}
  args = new cljs.core.IndexedSeq(G__290969__a,0);
} 
return G__290968__delegate.call(this,args);};
G__290968.cljs$lang$maxFixedArity = 0;
G__290968.cljs$lang$applyTo = (function (arglist__290970){
var args = cljs.core.seq(arglist__290970);
return G__290968__delegate(args);
});
G__290968.cljs$core$IFn$_invoke$arity$variadic = G__290968__delegate;
return G__290968;
})()
;

return null;
});
