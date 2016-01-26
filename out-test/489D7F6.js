goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17270__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17271__i = 0, G__17271__a = new Array(arguments.length -  0);
while (G__17271__i < G__17271__a.length) {G__17271__a[G__17271__i] = arguments[G__17271__i + 0]; ++G__17271__i;}
  args = new cljs.core.IndexedSeq(G__17271__a,0);
} 
return G__17270__delegate.call(this,args);};
G__17270.cljs$lang$maxFixedArity = 0;
G__17270.cljs$lang$applyTo = (function (arglist__17272){
var args = cljs.core.seq(arglist__17272);
return G__17270__delegate(args);
});
G__17270.cljs$core$IFn$_invoke$arity$variadic = G__17270__delegate;
return G__17270;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17273__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17274__i = 0, G__17274__a = new Array(arguments.length -  0);
while (G__17274__i < G__17274__a.length) {G__17274__a[G__17274__i] = arguments[G__17274__i + 0]; ++G__17274__i;}
  args = new cljs.core.IndexedSeq(G__17274__a,0);
} 
return G__17273__delegate.call(this,args);};
G__17273.cljs$lang$maxFixedArity = 0;
G__17273.cljs$lang$applyTo = (function (arglist__17275){
var args = cljs.core.seq(arglist__17275);
return G__17273__delegate(args);
});
G__17273.cljs$core$IFn$_invoke$arity$variadic = G__17273__delegate;
return G__17273;
})()
;

return null;
});
