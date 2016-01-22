goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19305__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19306__i = 0, G__19306__a = new Array(arguments.length -  0);
while (G__19306__i < G__19306__a.length) {G__19306__a[G__19306__i] = arguments[G__19306__i + 0]; ++G__19306__i;}
  args = new cljs.core.IndexedSeq(G__19306__a,0);
} 
return G__19305__delegate.call(this,args);};
G__19305.cljs$lang$maxFixedArity = 0;
G__19305.cljs$lang$applyTo = (function (arglist__19307){
var args = cljs.core.seq(arglist__19307);
return G__19305__delegate(args);
});
G__19305.cljs$core$IFn$_invoke$arity$variadic = G__19305__delegate;
return G__19305;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19308__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19309__i = 0, G__19309__a = new Array(arguments.length -  0);
while (G__19309__i < G__19309__a.length) {G__19309__a[G__19309__i] = arguments[G__19309__i + 0]; ++G__19309__i;}
  args = new cljs.core.IndexedSeq(G__19309__a,0);
} 
return G__19308__delegate.call(this,args);};
G__19308.cljs$lang$maxFixedArity = 0;
G__19308.cljs$lang$applyTo = (function (arglist__19310){
var args = cljs.core.seq(arglist__19310);
return G__19308__delegate(args);
});
G__19308.cljs$core$IFn$_invoke$arity$variadic = G__19308__delegate;
return G__19308;
})()
;

return null;
});
