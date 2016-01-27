goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17461__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17462__i = 0, G__17462__a = new Array(arguments.length -  0);
while (G__17462__i < G__17462__a.length) {G__17462__a[G__17462__i] = arguments[G__17462__i + 0]; ++G__17462__i;}
  args = new cljs.core.IndexedSeq(G__17462__a,0);
} 
return G__17461__delegate.call(this,args);};
G__17461.cljs$lang$maxFixedArity = 0;
G__17461.cljs$lang$applyTo = (function (arglist__17463){
var args = cljs.core.seq(arglist__17463);
return G__17461__delegate(args);
});
G__17461.cljs$core$IFn$_invoke$arity$variadic = G__17461__delegate;
return G__17461;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17464__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17465__i = 0, G__17465__a = new Array(arguments.length -  0);
while (G__17465__i < G__17465__a.length) {G__17465__a[G__17465__i] = arguments[G__17465__i + 0]; ++G__17465__i;}
  args = new cljs.core.IndexedSeq(G__17465__a,0);
} 
return G__17464__delegate.call(this,args);};
G__17464.cljs$lang$maxFixedArity = 0;
G__17464.cljs$lang$applyTo = (function (arglist__17466){
var args = cljs.core.seq(arglist__17466);
return G__17464__delegate(args);
});
G__17464.cljs$core$IFn$_invoke$arity$variadic = G__17464__delegate;
return G__17464;
})()
;

return null;
});
