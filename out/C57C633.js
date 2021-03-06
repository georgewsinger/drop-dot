goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27155__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27156__i = 0, G__27156__a = new Array(arguments.length -  0);
while (G__27156__i < G__27156__a.length) {G__27156__a[G__27156__i] = arguments[G__27156__i + 0]; ++G__27156__i;}
  args = new cljs.core.IndexedSeq(G__27156__a,0);
} 
return G__27155__delegate.call(this,args);};
G__27155.cljs$lang$maxFixedArity = 0;
G__27155.cljs$lang$applyTo = (function (arglist__27157){
var args = cljs.core.seq(arglist__27157);
return G__27155__delegate(args);
});
G__27155.cljs$core$IFn$_invoke$arity$variadic = G__27155__delegate;
return G__27155;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27158__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27159__i = 0, G__27159__a = new Array(arguments.length -  0);
while (G__27159__i < G__27159__a.length) {G__27159__a[G__27159__i] = arguments[G__27159__i + 0]; ++G__27159__i;}
  args = new cljs.core.IndexedSeq(G__27159__a,0);
} 
return G__27158__delegate.call(this,args);};
G__27158.cljs$lang$maxFixedArity = 0;
G__27158.cljs$lang$applyTo = (function (arglist__27160){
var args = cljs.core.seq(arglist__27160);
return G__27158__delegate(args);
});
G__27158.cljs$core$IFn$_invoke$arity$variadic = G__27158__delegate;
return G__27158;
})()
;

return null;
});
