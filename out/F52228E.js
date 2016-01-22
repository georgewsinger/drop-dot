goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43855__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43856__i = 0, G__43856__a = new Array(arguments.length -  0);
while (G__43856__i < G__43856__a.length) {G__43856__a[G__43856__i] = arguments[G__43856__i + 0]; ++G__43856__i;}
  args = new cljs.core.IndexedSeq(G__43856__a,0);
} 
return G__43855__delegate.call(this,args);};
G__43855.cljs$lang$maxFixedArity = 0;
G__43855.cljs$lang$applyTo = (function (arglist__43857){
var args = cljs.core.seq(arglist__43857);
return G__43855__delegate(args);
});
G__43855.cljs$core$IFn$_invoke$arity$variadic = G__43855__delegate;
return G__43855;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43858__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43859__i = 0, G__43859__a = new Array(arguments.length -  0);
while (G__43859__i < G__43859__a.length) {G__43859__a[G__43859__i] = arguments[G__43859__i + 0]; ++G__43859__i;}
  args = new cljs.core.IndexedSeq(G__43859__a,0);
} 
return G__43858__delegate.call(this,args);};
G__43858.cljs$lang$maxFixedArity = 0;
G__43858.cljs$lang$applyTo = (function (arglist__43860){
var args = cljs.core.seq(arglist__43860);
return G__43858__delegate(args);
});
G__43858.cljs$core$IFn$_invoke$arity$variadic = G__43858__delegate;
return G__43858;
})()
;

return null;
});
